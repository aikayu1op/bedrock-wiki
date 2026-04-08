---
title: 投げられるアイテム
description: 投射物として投げられるカスタムアイテムの作り方を学びます。
category: Tutorials
tags:
    - intermediate
mentions:
    - Fabrimat
    - MedicalJewel105
    - Lufurrius
    - IlkinQafarov
    - seeit360
    - TheItsNameless
    - SmokeyStack
    - ThomasOrs
    - QuazChick
---

::: tip
このチュートリアルでは、Molang、animation controller、entity 定義の基本を理解していることを前提にしています。
:::

スプラッシュポーションやトライデントのようなアイテムは、投げられる特別なアイテムです。

## アイテム

まず、実際のアイテムを作ります。

<CodeHeader>BP/items/throwable_item.item.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:throwable_item"
        },
        "components": {
            "minecraft:max_stack_size": 16,
            "minecraft:throwable": {
                "do_swing_animation": true
            },
            "minecraft:projectile": {
                "projectile_entity": "wiki:throwable_item_entity"
            },
            "minecraft:icon": "wiki:throwable_item"
        }
    }
}
```

## エンティティ

このエンティティが実際に投げられるアイテムになり、投射物として動作します。
投射物を「生成される」のではなく「発射される」ようにするため、snowball の runtime identifier を設定してください。他の projectile runtime id を試してみることもできます。

<CodeHeader>BP/entities/throwable_item_entity.se.json</CodeHeader>

```json
{
    "format_version": "1.16.0",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:throwable_item_entity",
            "is_spawnable": false,
            "is_summonable": true,
            "runtime_identifier": "minecraft:snowball"
        },
        "components": {
            "minecraft:collision_box": {
                "width": 0.25,
                "height": 0.25
            },
            "minecraft:projectile": {
                "on_hit": {
                    "grant_xp": {
                        "minXP": 3,
                        "maxXP": 5
                    },
                    "impact_damage": {
                        "damage": 16
                    },
                    "remove_on_hit": {}
                },
                "power": 0.7,
                "gravity": 0.03,
                "angle_offset": -20,
                "hit_sound": "glass"
            },
            "minecraft:physics": {},
            "minecraft:pushable": {
                "is_pushable": true,
                "is_pushable_by_piston": true
            },
            "minecraft:conditional_bandwidth_optimization": {
                "default_values": {
                    "max_optimized_distance": 80,
                    "max_dropped_ticks": 10,
                    "use_motion_prediction_hints": true
                }
            }
        }
    }
}
```

このエンティティはバニラのスプラッシュポーションをベースにしています。

その後、`minecraft:projectile` コンポーネントを編集して動作をカスタマイズできます。この例では、投げたアイテムが経験値を少し与え、命中したエンティティにダメージを与えます。

## 結論

投げられるアイテムができたら、威力、効果、アニメーションを調整したり、[area effect cloud](/entities/area-effect-clouds) と組み合わせたりと、いろいろ試せます。あとは想像力次第です。
