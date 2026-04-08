---
title: Heightmap Noise
category: Tutorials
tags:
    - experimental
mentions:
    - Apex360
    - SirLich
description: ノイズベースの地形です。
---

:::tip
このチュートリアルでは、Molang、feature、feature rule の基本を理解していることを前提としています。
:::

このチュートリアルでは、Molang の `q.noise` クエリを使ってノイズベースの地形を作る方法を見ていきます。

## 単一ブロックの Feature

まず、単一ブロックの feature を定義します。ここで、生成されるブロックを決めます。このチュートリアルでは stone を使います。

<CodeHeader>BP/features/stone_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:single_block_feature": {
        "description": {
            "identifier": "wiki:stone_feature"
        },
        "places_block": "minecraft:stone",
        "enforce_survivability_rules": false,
        "enforce_placement_rules": false
    }
}
```

## Scatter Feature

scatter feature が、地形生成の中心になります。

<CodeHeader>BP/features/column.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:scatter_feature": {
        "description": {
            "identifier": "wiki:column"
        },
        "iterations": "t.height=64+(q.noise(v.originz/64,v.originx/64))*16; return t.height;",
        "places_feature": "wiki:stone_feature",
        "x": 0,
        "z": 0,
        "y": {
            "extent": [-64, "t.height"],
            "distribution": "fixed_grid"
        }
    }
}
```

`iterations` で何が起きているのか説明します。
`iterations` の中では、一時変数 `t.height` を定義し、そこでメインのノイズ関数を作っています。
`t.height` では、まずベースの高さを足しています。これは、関数が始まる基準の高さです。
その後、`q.noise` クエリで Perlin ノイズを取得します。返る値は `-1` から `1` の範囲なので、それを平滑化する値で割っています。
最後に、地形の変化量にあたる値を掛けています。

つまりここでは、`t.height` の値を取り出して、`-64` からその値までの Y 範囲に割り当て、縦の柱を生成しています。この値は列ごとに変わりますが、`q.noise` は Perlin ノイズを使うため完全なランダムではなく、値同士が関連しています。なので、`64,69,45,100,7,56` のような値ではなく、`64,65,66,68,69,68,66,65` のような値になります。

## Feature Rule

<CodeHeader>BP/feature_rules/column_grid_placement.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:feature_rules": {
        "description": {
            "identifier": "wiki:column_grid_placement",
            "places_feature": "wiki:column"
        },
        "conditions": {
            "placement_pass": "first_pass",
            "minecraft:biome_filter": {
                "any_of": [
                    {
                        "test": "has_biome_tag",
                        "value": "overworld"
                    },
                    {
                        "test": "has_biome_tag",
                        "value": "overworld_generation"
                    }
                ]
            }
        },
        "distribution": {
            "iterations": 256,
            "x": {
                "extent": [0, 15],
                "distribution": "fixed_grid"
            },
            "y": 0,
            "z": {
                "extent": [0, 15],
                "distribution": "fixed_grid"
            }
        }
    }
}
```

ここでは、チャンク全体の面積が 256 (16x16) なので、列がチャンク全体に生成されるように `iterations` を 256 に設定しています。

これでカスタムのノイズベース地形は完成です。値をいろいろいじってみてください。
