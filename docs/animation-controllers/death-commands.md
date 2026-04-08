---
title: Death Commands
mentions:
    - SirLich
    - BlueFrog130
    - SmokeyStack
    - cda94581
    - MedicalJewel105
    - Kaioga5
    - TheItsNameless
    - QuazChick
description: エンティティが死亡したときにコマンドを実行します。
---

<Button link="animation-controllers-intro">Animation Controller について詳しく見る</Button>

ここでは `Death Effects` を「エンティティが死亡したときに何かを行うこと」と定義します。これを実現する方法には、避けるべきものがいくつかあります。

-   Detecting death in the entity file, adding a component, and _then_ trying to detect that component in the animation controller. This is wrong because the entity will be removed from the world before the animation controller has a chance to run.
-   Detecting the entity death from an outside source, such as a ticking command block. This method isn't _strictly_ wrong, and in some circumstances, it may even be preferred. However it is costly and easy to break.

## `q.is_alive` を使う

死亡時の効果を作る最善の方法は、`is_alive` クエリを使うことです。

`is_alive` に基づく遷移を持つアニメーションコントローラーを作るだけです。最後の `on_entry` は、エンティティがワールドから削除される前に実行されるため、そこでコマンドを実行できます。

サンプルのアニメーションコントローラーは次のとおりです。

<CodeHeader>BP/animation_controllers/death.ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.death": {
            "initial_state": "default",
            "states": {
                "default": {
                    "transitions": [
                        {
                            "dead": "!q.is_alive"
                        }
                    ]
                },
                "dead": {
                    "on_entry": ["/say I am dead!"]
                }
            }
        }
    }
}
```

## プレイヤーエンティティで使う場合

プレイヤーエンティティの場合は、死亡のたびに状態がリセットされるよう、2 つ目のアニメーション状態に追加の遷移を入れる必要があります。

<CodeHeader>BP/animation_controllers/death.ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.death": {
            "initial_state": "default",
            "states": {
                "default": {
                    "transitions": [
                        {
                            "dead": "!q.is_alive"
                        }
                    ]
                },
                "dead": {
                    "on_entry": ["/say I am dead!"],
                    "transitions": [
                        {
                            "default": "q.is_alive"
                        }
                    ]
                }
            }
        }
    }
}
```

## `minecraft:on_death` を使う

Behavior Pack の `entity.json` ファイルでは、`minecraft:on_death` コンポーネントも使えます。これを使うと、死亡時にコマンドを実行するのがかなり簡単になります。

まずコンポーネントに追加し、自分自身に対してイベントを実行するようにします。

```json
"minecraft:on_death" : {
    "event": "wiki:on_death",
    "target": "self"
}
```

次に、events セクションへイベントを追加します。

```json
"wiki:on_death": {
    "queue_command": {
        "command": [
            "say I have died!"
        ]
    }
}
```

:::tip
この方法を使えば、エンティティが死亡していてもスコアやタグを追加できます。
:::
