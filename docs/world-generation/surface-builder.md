---
title: パッチの生成
category: Tutorials
mentions:
    - DerpMcaddon
    - SirLich
tags:
    - experimental
description: Feature ベースの surface builder は、オーバーワールドの地表に多様性と装飾を加えるためのブロック群をまとめて配置する機能です。
---

Feature ベースの surface builder は、オーバーワールドの地表に多様性と装飾を加えるためのブロック群をまとめて配置する機能です。このチュートリアルでは、サイズ、頻度、生成位置など、この機能を作るのに必要なものを説明します。

## 単一ブロックの Feature

単一ブロックの feature は、surface builder の土台になります。どのブロックを使うかを定義します。このチュートリアルでは、Coarse Dirt、Podzol、Cobblestone を使います。

単一ブロックの feature については [こちら](/world-generation/feature-types#single-block-features) を参照してください。

Coarse Dirt File

<CodeHeader>BP/features/coarse_dirt_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:single_block_feature": {
        "description": {
            "identifier": "wiki:coarse_dirt_feature"
        },
        "places_block": {
            //Coarse dirt shares same identifier as dirt, set it using name and states
            "name": "minecraft:dirt",
            "states": {
                "dirt_type": "coarse"
            }
        },
        "enforce_survivability_rules": false,
        "enforce_placement_rules": false,
        "may_replace": [
            "minecraft:grass" //The block can only replace grass
        ]
    }
}
```

Podzol File

<CodeHeader>BP/features/podzol_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:single_block_feature": {
        "description": {
            "identifier": "wiki:podzol_feature"
        },
        "places_block": "minecraft:podzol", //Podzol can be defined using direct identifier
        "enforce_survivability_rules": false,
        "enforce_placement_rules": false,
        "may_replace": [
            "minecraft:grass" //The block can only replace grass
        ]
    }
}
```

Cobblestone File

<CodeHeader>BP/features/cobblestone_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:single_block_feature": {
        "description": {
            "identifier": "wiki:cobblestone_feature"
        },
        "places_block": "minecraft:cobblestone", //Cobblestone can be defined using direct identifier
        "enforce_survivability_rules": false,
        "enforce_placement_rules": false,
        "may_replace": [
            "minecraft:grass" //The block can only replace grass
        ]
    }
}
```

## 重み付きランダム Feature

重み付きランダム feature は、各種ブロックの選択を行う _ランダム化装置_ になります。

重み付きランダム feature については [こちら](/world-generation/feature-types#weighted-random-features) を参照してください。

<CodeHeader>BP/features/select_surface_block_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:weighted_random_feature": {
        "description": {
            "identifier": "wiki:select_surface_block_feature"
        },
        "features": [
            [
                "wiki:coarse_dirt_feature", //Coarse dirt weighs 5
                5
            ],
            [
                "wiki:podzol_feature", //Podzol dirt weighs 3
                3
            ],
            [
                "wiki:cobblestone_feature", //Cobblestone weighs 2
                2
            ]
        ]
    }
}
```

## Scatter Feature

scatter feature は surface builder の重要な要素です。1 つの塊に含まれるブロックのサイズ、形、数を決めます。

scatter feature については [こちら](/world-generation/feature-types#scatter-features) を参照してください。

<CodeHeader>BP/features/scatter_surface_block_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:scatter_feature": {
        "description": {
            "identifier": "wiki:scatter_surface_block_feature"
        },
        "iterations": "math.random_integer(20,25)",
        "x": {
            "extent": [0, 8],
            "distribution": "gaussian"
        },
        "z": {
            "extent": [0, 8],
            "distribution": "gaussian"
        },
        "y": "q.heightmap(v.worldx, v.worldz) -1",
        "places_feature": "wiki:select_surface_block_feature" //Weighted random feature identifier
    }
}
```

-   `iterations` は、いくつのブロックを配置するかを決めます。ここでは Molang の `math.random_integer` 関数を使ってブロック数をランダム化します。この場合は 20 から 25 ブロックになります。

-   `extent` は配列を使って塊の大きさを決めます。`[0, 8]` は 0 から 8 ブロックまで広がることを意味します。つまり、塊は X 軸と Z 軸の両方で 8 ブロックの長さになります。**これは X と Z の分布にだけ使います**。

-   `"y": "q.heightmap(v.worldx, v.worldz) -1` は、Y 座標の最上位ブロックから -1 の位置にブロックを置くことを意味します。つまり、常に地表に feature を配置します。

-   `distribution` は使用する分布の種類を指定します。`Gaussian`、`Inverse Gaussian`、`Uniform`、`Fixed Grid`、`Jittered Grid` が利用できます。

## Feature Rule

これが surface builder の最後のステップです。surface builder の feature rule は少し特殊です。

<CodeHeader>BP/feature_rules/overworld_surface_blocks_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:feature_rules": {
        "description": {
            "identifier": "wiki:overworld_surface_blocks_feature",
            "places_feature": "wiki:scatter_surface_block_feature"
        },
        "conditions": {
            "placement_pass": "surface_pass",
            "minecraft:biome_filter": {
                "test": "has_biome_tag",
                "operator": "==",
            "value": "overworld" //You can change this to whatever biometag you want
            }
        },
        "distribution": {
            "iterations": 1,
            "x": {
                "extent": [0, 16],
                "distribution": "uniform"
            },
            "y": 0,
            "z": {
                "extent": [0, 16],
                "distribution": "uniform"
            },
            "scatter_chance": {
                //Chance of the blob generating each chunk
                "numerator": 1,
                "denominator": 5
            }
        }
    }
}
```

これで surface builder は完成です。自由に変更して試してみてください。
