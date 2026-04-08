---
title: カスタム死亡アニメーション
tags:
    - intermediate
category: General
mentions:
    - SirLich
    - Joelant05
    - Dreamedc2015
    - MedicalJewel105
    - aexer0e
    - Xterionix
    - ChibiMango
    - SmokeyStack
    - ThomasOrs
description: エンティティの死亡アニメーションを変更または無効化します。
---

死亡アニメーションとは、エンティティが死ぬときの回転を指します。これに赤い色変化が伴い、その後すぐにエンティティのジオメトリが消え、死亡パーティクルが表示されます。

## 死亡アニメーションを無効化する

ここでは、死亡アニメーション自体を完全に消す方法を説明します。

### エンティティをテレポートする

死亡演出を出さずにエンティティを消す一般的な方法のひとつは、虚空へテレポートすることです。これはアニメーションコントローラーから `!q.is_alive` を使って次のようにできます。
`/teleport @s ~ ~-1000 ~`

これを使うと、サウンド、パーティクル、戦利品、見た目の死亡表現を含むすべての死亡効果が消える点に注意してください。

### `minecraft:instant_despawn`

エンティティをただ消したいだけなら、`"minecraft:instant_despawn":{}` を含む component group を追加し、その component group を追加するイベントを実行できます。

Please note that this will remove all death effects, including sound, particles, loot, and the visual death of the entity.

### 別のエンティティへの変換

テレポートと同様に、死亡時にエンティティ変換を発動できます。アニメーションコントローラーで `!q.is_alive` を使って、`"minecraft:transformation"` コンポーネントを含む component group を追加するイベントを送ります。このコンポーネントで、エンティティは別のものに変換されます。

<CodeHeader></CodeHeader>

```json
"minecraft:transformation": {
	"into": "wiki:death_animation_entity",
	"transformation_sound" : "converted_to_zombified",
	"keep_level": true,
	"drop_inventory": true,
	"preserve_equipment": false,
	"drop_equipment": true,
	"delay": {
		"block_assist_chance": 0.0,
		"block_radius": 0,
		"block_max": 0,
		"value": 10
	}
}
```

### アニメーションを打ち消す

エンティティの回転値を打ち消すこともできます。これにより、90 度回転せずに、より通常の形で死亡できます（パーティクル、赤色化、戦利品は残る）。

エンティティの死亡からアニメーションを発火させる方法の詳細は、死亡エフェクトに関する [こちらのドキュメント](/animation-controllers/death-commands) を参照してください。

回転は、ほかのすべての bone の親に当たる bone に適用し、pivot は [0,0,0] にします。アニメーションは `!q.is_alive` のときだけ開始するようにしてください。

Animation:

<CodeHeader></CodeHeader>

```json
"rotation" : [ 0, 0, "Math.min(Math.sqrt(Math.max(0, q.anim_time * 20 - 0.5) / 20 * 1.6), 1) * -90" ]
```

アニメーションコントローラー:

(`q.all_animations_finished` が必要なのは、プレイヤーのように再スポーンするエンティティだけです)

<CodeHeader>RP/animation_controllers/custom_death.animation.controllers.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.player.cancel_death_animation": {
            "initial_state": "default",
            "states": {
                "default": {
                    "transitions": [
                        {
                            "cancel_animation": "!q.is_alive"
                        }
                    ]
                },
                "cancel_animation": {
                    "animations": ["my.animation"],
                    "transitions": [
                        {
                            "default": "q.is_alive && q.all_animations_finished"
                        }
                    ]
                }
            }
        }
    }
}
```

リソースパックの `.entity.json` ファイルでは、animation と animation controller の両方を関連付ける必要があります。

## カスタム死亡アニメーション

ここでは死亡アニメーションをカスタマイズする方法を説明します。

### ダメージ時の色オーバーレイを変更する

エンティティのダメージ時の色オーバーレイを削除したり、変更したりできます。

始める前に、render controller の基礎を押さえておきましょう。render controller の [チュートリアル](/entities/render-controllers) を確認してください。

任意のエンティティがダメージを受けたときのダメージオーバーレイ色を消すには `is_hurt_color` を使います。溶岩や炎によるダメージ時のオーバーレイ色を消すには `on_fire_color` を使います。
まず、rgba 値を 0 にします。
以下は、ダメージと炎のオーバーレイ色を消す例です。

<CodeHeader>RP/render_controllers/custom_death.render_controllers.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "render_controllers": {
        "controller.render.sample": {
            "geometry": "Geometry.default",
            "materials": [{ "*": "Material.default" }],
            "textures": ["Texture.default"],
            "is_hurt_color": {},
            "on_fire_color": {}
        }
    }
}
```

上のコードは、赤いダメージオーバーレイを消します。

rgba に別の値を入れれば、ダメージ色オーバーレイを別の色に変えることもできます。各色の rgba 値は、さまざまなサイトで確認できます。
以下は、ダメージ色オーバーレイをピンクにする例です。

<CodeHeader>RP/render_controllers/custom_death.render_controllers.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "render_controllers": {
        "controller.render.kbg": {
            "geometry": "Geometry.default",
            "materials": [{ "*": "Material.default" }],
            "textures": ["Texture.default"],
            "is_hurt_color": {
                "r": "1.0",
                "g": "0.4",
                "b": "0.7",
                "a": "0.5"
            },
            "on_fire_color": {
                "r": "1.0",
                "g": "0.4",
                "b": "0.7",
                "a": "0.5"
            }
        }
    }
}
```

### Damage Sensor で即時消滅と 1 アイテムのドロップを発動する

`damage_sensor` コンポーネントを使うと、致命的なダメージを受けたときにイベントを発動できます。このイベントは、`spawn_entity` と `instant_despawn` を含む特定の消滅用 component group を追加します。`spawn_entity` の待機時間を 0 にすると、エンティティが消える直前にアイテムを 1 つドロップできます。家具のように 1 つのアイテムだけ必要な単純なエンティティには便利です。

エンティティが致命的なダメージを受けると、ダミーコンポーネントを追加するイベントが発動します。このダミーコンポーネントを使ってアニメーションを再生し、`minecraft:timer` で消滅させられます。

インベントリを持つエンティティには、別の方法を考える必要があります。また、`entity_spawned` イベントでスポーンしたときに despawn 用 component group が追加されないようにしてください。移動や攻撃などの別動作を持つエンティティでは、それらのコンポーネントも外したくなるはずです。

以下は BP の例です。

<CodeHeader>BP/entities/entity.json</CodeHeader>

```json
{
    "format_version": "1.14.0",
    "min_engine_version": "1.16.100",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:entity",
            "is_spawnable": true,
            "is_summonable": true,
            "is_experimental": true
        },
        "component_groups": {
            "wiki:death": {
                "minecraft:spawn_entity": {
                    "max_wait_time": 0,
                    "min_wait_time": 0,
                    "spawn_item": "egg",
                    "single_use": true
                },
                "minecraft:is_sheared": {},
                "minecraft:timer": {
                    "looping": true,
                    "time": [2.56, 2.56], // Change this to match your animation's time
                    "time_down_event": {
                        "event": "wiki:despawn"
                    }
                }
            },
            "wiki:despawn": {
                "minecraft:instant_despawn": {}
            }
        },
        "components": {
            "minecraft:type_family": {
                "family": ["cart", "inanimate"]
            },
            "minecraft:collision_box": {
                "width": 0.8,
                "height": 0.5
            },
            "minecraft:health": {
                "value": 8,
                "max": 8
            },
            "minecraft:physics": {},
            "minecraft:pushable": {
                "is_pushable": true,
                "is_pushable_by_piston": true
            },
            "minecraft:damage_sensor": {
                "triggers": {
                    "on_damage": {
                        "filters": {
                            "all_of": [
                                {
                                    "test": "has_damage",
                                    "value": "fatal"
                                }
                            ]
                        },
                        "target": "self",
                        "event": "wiki:death",
                        "deals_damage": false,
                        "cause": "fatal"
                    }
                }
            }
        },
        "events": {
            "wiki:death": {
                "add": {
                    "component_groups": ["wiki:death"]
                },
                "wiki:despawn": {
                    "add": {
                        "component_groups": ["wiki:despawn"]
                    }
                }
            }
        }
    }
}
```

Here an example file for the animation controller.

<CodeHeader>RP/animation_controllers/animation_controller.entity.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.entity": {
            "states": {
                "default": {
                    "blend_transition": 0.2,
                    "transitions": [
                        {
                            "dead": "q.is_sheared"
                        }
                    ]
                },
                "death": {
                    "blend_transition": 0.2,
                    "animations": ["death"]
                }
            }
        }
    }
}
```

Note: You can also spawn custom spawn egg items using the `minecraft:spawn_entity` component by setting `"spawn_item"`
to be your entity's id and an affix of `spawn_egg`, and it will look something like this.

<CodeHeader>BP/entities/my_entity.json#components</CodeHeader>

```json
{
    "minecraft:spawn_entity": [
        {
            "min_wait_time": 0,
            "max_wait_time": 0,
            "spawn_item": "wiki:custom_zombie_spawn_egg",
            "single_use": true
        }
    ]
}
```

If you want to drop a loot table, you can trigger an event (as shown below) and summon another entity that have this component:

<CodeHeader></CodeHeader>

```json
{
    "minecraft:behavior.drop_item_for": {
        "seconds_before_pickup": 0.0,
        "cooldown": 5,
        "drop_item_chance": 1,
        "offering_distance": 0.0,
        "minimum_teleport_distance": 1024.0,
        "target_range": [64.0, 64.0, 64.0],
        "teleport_offset": [0.0, 1.0, 0.0],
        "speed_multiplier": 1.0,
        "search_range": 64,
        "search_height": 64,
        "search_count": 0,
        "goal_radius": 64.0,
        "entity_types": [
            {
                "filters": {
                    "test": "is_family",
                    "subject": "other",
                    "value": "player"
                },
                "max_dist": 64
            }
        ],
        "priority": 1,
        "loot_table": "loot_tables/entities/example.loot_table.json",
        "time_of_day_range": [0.0, 1.0]
    },
    "minecraft:timer": {
        "time": 2,
        "time_down_event": {
            "event": "wiki:my_despawn_event"
        }
    }
}
```

And then despawn it through adding component group with instant_despawn through `wiki:my_despawn_event`.

### Detecting Death with Commands

<Button link="/commands/tick_json-creations#death-detection">View</Button>
