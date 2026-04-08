---
title: Generating Custom Ores
category: Tutorials
tags:
    - experimental
mentions:
    - DerpMcaddon
    - SirLich
    - 7dev7urandom
    - Chikorita-Lover
description: カスタム鉱石生成を適切に設定する方法です。
---

`ore_feature` は基本的ですが重要な feature です。生成先のブロックを置き換えることで、ブロックの塊を作れます。このチュートリアルでは、自然生成する鉱石を作る方法を紹介します。

feature と feature rule を使うには、ワールド設定で Creation of Custom Biomes を有効にする必要があります。ブロックが生成されない場合は、これが有効になっているか確認してください。

:::tip
For this tutorial, I'll be using 2 custom blocks, Titanite Ore and Deepslate Titanite Ore. For how to make custom blocks, visit the [Blocks Intro](/blocks/blocks-intro) page.
:::

## Feature ファイル

<CodeHeader>BP/features/titanite_ore_feature.json</CodeHeader>

```json
{
    "format_version": "1.17.0",
    "minecraft:ore_feature": {
        "description": {
            "identifier": "wiki:titanite_ore_feature"
        },
        "count": 8, // Placement attempts
        "replace_rules": [
            {
                // Replace all stone variants (andesite, granite, and diorite) with titanite ore
                "places_block": "wiki:titanite_ore",
                "may_replace": ["minecraft:stone"]
            },
            {
                // Replace deepslate with deepslate titanite ore
                "places_block": "wiki:deepslate_titanite_ore",
                "may_replace": ["minecraft:deepslate"]
            }
        ]
    }
}
```

## Feature Rule

<CodeHeader>BP/feature_rules/overworld_underground_titanite_ore_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:feature_rules": {
        "description": {
            "identifier": "wiki:overworld_underground_titanite_ore_feature",
            "places_feature": "wiki:titanite_ore_feature" // Identifier from the feature file
        },
        "conditions": {
            "placement_pass": "underground_pass",
            "minecraft:biome_filter": [
                // Scatter the ore throughout the Overworld
                {
                    "any_of": [
                        {
                            "test": "has_biome_tag",
                            "operator": "==",
                            "value": "overworld"
                        },
                        {
                            "test": "has_biome_tag",
                            "operator": "==",
                            "value": "overworld_generation"
                        }
                    ]
                }
            ]
        },
        "distribution": {
            "iterations": 10, // Placement attempts of the cluster, not the ore blocks
            "coordinate_eval_order": "zyx",
            "x": {
                "distribution": "uniform",
                "extent": [0, 16]
            },
            "y": {
                "distribution": "uniform", // You can use "triangle" to make ores more common in the middle of the extent
                "extent": [
                    0, // Minimum y level for the ore to generate
                    62 // Maximum y level for the ore to generate
                ]
            },
            "z": {
                "distribution": "uniform",
                "extent": [0, 16]
            }
        }
    }
}
```

## テスト

鉱石は洞窟を探索して見つけることもできますが、レアな場合はコマンドで生成を確認できます。繰り返し実行のコマンドブロックに次のコマンドを入れて、周囲を飛び回ってください。

-   `execute @a ~ ~ ~ fill ~8 ~8 ~8 ~-8 ~-8 ~-8 air 0 replace wiki:titanite_ore`

Stone ores:

![](stone_ore.png)

Deepslate ores:

![](deepslate_ore.png)
