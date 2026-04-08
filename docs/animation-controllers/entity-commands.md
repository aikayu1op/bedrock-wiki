---
title: Entity Commands
nav_order: 2
tags:
    - intermediate
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - destruc7i0n
    - Dreamedc2015
    - MedicalJewel105
    - aexer0e
    - cda94581
    - ThijsHankelMC
    - QuazChick
description: エンティティからスラッシュコマンドを発火します。
---

:::tip EVENT RESPONSE
エンティティコマンドを実行するもっと簡単な方法は、`queue_command` のエンティティイベントレスポンスを使うことです。
:::

## アニメーションコントローラー

スラッシュコマンドを発火するには、Behavior Pack のアニメーションコントローラーを使います。アニメーションコントローラーは `animation_controllers/some_controller.json` のように配置します。詳しくは [bedrock.dev の entity events セクションでアニメーションコントローラーについて学べます](https://bedrock.dev/docs/stable/Entity%20Events)。

要するに、アニメーションコントローラーを使うと、Behavior Pack からイベントを発火できます。

-   Slash commands (like `/say`)
-   Molang ( `v.foo += 1;` )
-   Entity Events (such as `@s wiki:my_event`)

アニメーションコントローラーの例を示します。

<CodeHeader>BP/animation_controllers/entity_commands.ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.sirlich_entity_commands": {
            "states": {
                "default": {
                    "transitions": [
                        {
                            "on_summon": "1" //1 evaluates as true
                        }
                    ]
                },
                "on_summon": {
                    "on_entry": ["/say I have been summoned"]
                }
            }
        }
    }
}
```

このアニメーションコントローラーは、エンティティがワールドに召喚された瞬間に `/say I have been summoned` コマンドを実行します。仕組みがよくわからない場合は、Molang、Animations、Entity Events を見直してください。

要するに、`states` があり、それぞれの `on_entry` 節でイベントを発火できます。状態の切り替えにはクエリを使います。`initial_state` が定義されていない限り、エンティティは既定で `default` 状態に入ります。

::: warning
クエリはワールドやチャンクが再読み込みされるたびに再実行されます。つまり、`"/say I have been summoned"` の行は、エンティティが召喚されたときだけでなく、実際には読み込まれるたびに実行されます。
:::

これを止めたい場合は、`skin_id` クエリのような追加クエリを入れる必要があります。エンティティが最初にスポーンしたときは `skin_id = 0` を確認し、そのあとで `skin_id = 1` のようなより高い `skin_id` も追加します。そうすれば、エンティティが再読み込みされてもそのコマンドを実行できなくなります。これは文書の後半で示します。

## アニメーションコントローラーを使う

このアニメーションコントローラーをエンティティに追加するには、エンティティ定義の description に次のコードを使います。

<CodeHeader>BP/entities/entity_commands.se.json</CodeHeader>

```json
"description": {
    "identifier": "wiki:entity_commands",
    "scripts": {
        "animate": [
            "wiki:entity_commands"
        ]
    },
    "animations": {
        "wiki:entity_commands": "controller.animation.wiki_entity_commands"
    }
}
```

ここでも、どの手順かわからない場合は [Entity Events documentation](https://bedrock.dev/r/Entity%20Events) を確認してください。

## イベントでコマンドを発火する

アニメーション遷移はクエリを使って作成します。クエリについては [here](https://bedrock.dev/docs/stable/MoLang#List%20of%20Entity%20Queries) で確認できます。最初の例では、クエリは単純に `true` でした。つまりコマンドは自動で実行されます。より複雑なクエリを使えば、もっと面白い効果を作れます。かなり便利なのは、コンポーネントを Molang フィルターとして使ってコマンドを発火する方法です。

個人的には [skin_id](https://docs.microsoft.com/en-us/minecraft/creator/reference/content/entityreference/examples/entityproperties/minecraftproperty_skin_id) を使うのが好きです。

アニメーションコントローラーを更新して、`skin_id` を条件に発火させることができます。

<CodeHeader>BP/animation_controllers/entity_commands.ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.sirlich_entity_commands": {
            "states": {
                "default": {
                    "transitions": [
                        {
                            "command_example": "q.skin_id == 1"
                        },
                        {
                            "zombies": "q.skin_id == 2"
                        }
                    ]
                },
                "command_example": {
                    "transitions": [
                        {
                            "default": "q.skin_id != 1"
                        }
                    ],
                    "on_entry": ["/say Command One!", "@s execute_no_commands"]
                },
                "zombies": {
                    "transitions": [
                        {
                            "default": "q.skin_id != 2"
                        }
                    ],
                    "on_entry": [
                        "/say AHH! Zombies everywhere!",
                        "/summon minecraft:zombie",
                        "/summon minecraft:zombie",
                        "/summon minecraft:zombie",
                        "/summon minecraft:zombie",
                        "@s execute_no_commands"
                    ]
                }
            }
        }
    }
}
```

このアニメーションコントローラーには、今や 2 つのコマンド状態があります。1 つ目は `skin_id = 1`、2 つ目は `skin_id = 2` で発火します。`==` と `!=` を使っている点に注目してください。`==` は等価比較で、単一の `=` は使わないでください。`!` は NOT を意味するので、`!=` は特定の値と等しくないことを確認します。さらに、各コマンドリストの末尾に `@s execute_no_commands` 構文を追加している点にも注目してください。`execute_no_commands` は後で作成します。これにより `skin_id` を 0 に戻し、コマンドを再利用できるようになります。

構文は、`@s` の後にエンティティイベント名を続ける形です。これによって、アニメーションコントローラー内からコンポーネントの追加・削除ができます。

## コンポーネントグループの設定

エンティティファイルに戻り、`skin_id` コンポーネントを使って `skin_id` を設定できます。

`skin_id` コンポーネントは次のようになります。

<CodeHeader></CodeHeader>

```json
"minecraft:skin_id": {
    "value": 1
}
```

`skin_id` を含むコンポーネントグループを追加できます。

<CodeHeader>BP/entities/entity_commands.se.json</CodeHeader>

```json
"component_groups": {
    "execute_no_commands": {
        "minecraft:skin_id": {
            "value": 0
        }
    },
    "command_example": {
        "minecraft:skin_id": {
            "value": 1
        }
    },
    "command_zombies": {
        "minecraft:skin_id": {
            "value": 2
        }
    }
}
```

## イベントの追加

それでは、これらのグループを簡単に追加できるようにイベントを作成しましょう。

<CodeHeader>BP/entities/entity_commands.se.json</CodeHeader>

```json
"events": {
    "minecraft:entity_spawned": {
        "add": {
            "component_groups": [
                "execute_no_commands"
            ]
        }
    },
    "execute_no_commands": {
        "add": {
            "component_groups": [
                "execute_no_commands"
            ]
        }
    },
    "command_example": {
        "add": {
            "component_groups": [
                "command_example"
            ]
        }
    },
    "command_zombies": {
        "add": {
            "component_groups": [
                "command_zombies"
            ]
        }
    }
}
```

## イベントの発火

Minecraft でイベントを発火する方法はたくさんあります。前述のとおり、アニメーションコントローラーを使ってイベントを発火できます。加えて、2 つの具体例を見てみましょう。

### Interact コンポーネント

このコンポーネントは、そのエンティティをクリックするたびにゾンビをスポーンします。

<CodeHeader>BP/entities/entity_commands.se.json</CodeHeader>

```json
"minecraft:interact": {
    "interactions": [{
        "on_interact": {
            "filters": {
                "all_of": [{
                        "test": "is_family",
                        "subject": "other",
                        "value": "player"
                    }
                ]
            },
            "event": "command_zombies"
        }
    }]
}
```

### Timer

このコンポーネントは、10 秒ごとにサンプルコマンドを発火します。

<CodeHeader>BP/entities/entity_commands.se.json</CodeHeader>

```json
"minecraft:timer": {
    "looping": true,
    "time": 10,
    "time_down_event": {
        "event": "example_command"
    }
}
```

これらの（ほかにも同様の）コンポーネントをエンティティに追加すれば、`skin_id` がいつ変わるか、ひいてはどのイベントが実行されるかを制御できます。

## まとめ

全体の流れは次のとおりです。

-   interact や timer のようなコンポーネントを使って `example_command` を実行します。
-   これで `example_command` コンポーネントグループが追加されます。
-   これで `skin_id` コンポーネントが追加されます。
-   これでエンティティの `skin_id` が設定され、アニメーションコントローラーから参照できます。
-   アニメーションコントローラーがこの `skin_id` を検知し、`example_command` 状態へ移行します。
-   アニメーションコントローラーが `/say` コマンドを実行します。
-   アニメーションコントローラーがエンティティイベント `@s execute_no_command` を実行します。
-   `execute_no_command` イベントが `skin_id` を 0 に設定します。
-   アニメーションコントローラーがこれを検知し、既定状態へ遷移します。
-   これでアニメーションコントローラーは新しい `skin_id` を待ちます。
