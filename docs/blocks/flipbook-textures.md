---
title: ブロックのテクスチャアニメーション
description: ブロック用の flipbook（アニメーション）テクスチャを作成する方法を学びます。
category: Visuals
tags:
    - intermediate
mentions:
    - MedicalJewel105
    - SquisSloim
    - SmokeyStack
    - QuazChick
---

このページでは、次のことを学びます。

-   ブロックに flipbook テクスチャを適用する方法
-   `RP/textures/flipbook_textures.json` に指定できる値と、その意味

## Flipbook テクスチャの適用

Flipbook テクスチャはアニメーションするテクスチャです。火、水、溶岩、マグマなどのブロックがこれを使っています。あなたのブロックにもアニメーションテクスチャを使えます。
まずはマグマのアニメーションテクスチャを使ってみましょう。
`Vanilla RP/textures/terrain_texture.json` で定義されたものに `texture` の値を変えるだけで、ブロックにマグマのアニメーションテクスチャを適用できます。

```json
"magma": {
    "textures": "textures/blocks/magma"
}
```

<CodeHeader>BP/blocks/flipbook_block.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:flipbook_block",
            "menu_category": {
                "category": "construction"
            }
        },
        "components": {
            "minecraft:geometry": "minecraft:geometry.full_block",
            "minecraft:material_instances": {
                "*": {
                    "texture": "magma" // Add it here.
                }
            }
        }
    }
}
```

![](animated_texture_1.gif)

これでアニメーションテクスチャになりました。

## Flipbook テクスチャの定義

ブロックにアニメーションテクスチャを付けたら、次はその仕組みを見ていきましょう。

1. Minecraft は `terrain_texture.json` で定義されたテクスチャの名前とパスを使います。

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "magma": {
            "textures": "textures/blocks/magma"
        }
    }
}
```

2. Minecraft は `flipbook_textures.json` を見て、この名前（`magma`）に対するアニメーションパラメータを探します。

<CodeHeader>RP/textures/flipbook_textures.json</CodeHeader>

```json
[
    {
        "atlas_tile": "magma",
        "flipbook_texture": "textures/blocks/magma",
        "ticks_per_frame": 10
    }
]
```

ここでの `"atlas_tile"` は、terrain_texture ファイルで定義された `magma` という名前にアニメーションパラメータを追加します。

3. Minecraft は、このアニメーションテクスチャを `magma` をテクスチャとして持つブロックに使います。

## Flipbook テクスチャのパラメータ

バニラの flipbook テクスチャファイルを見ていくと、追加のパラメータに気づくかもしれません。

| コンポーネント        | 型              | 説明                                                                                                 |
| --------------------- | --------------- | ---------------------------------------------------------------------------------------------------- |
| `flipbook_texture`    | String          | テクスチャへのパス。                                                                                 |
| `atlas_tile`          | String          | `terrain_texture.json` ファイルで定義された短縮名。                                                  |
| `atlas_index`         | Integer         | その短縮名の定義内にあるテクスチャ配列のインデックス。                                              |
| `atlas_tile_variant`  | Integer         | その短縮名のブロック変種内にある、ブロックのテクスチャ配列の変種。                                  |
| `ticks_per_frame`     | Integer         | フレームの切り替え速度。20 ticks = 1 秒。                                                             |
| `frames`              | Array / Integer | 各フレームで使うフレームインデックスの一覧、または順番に繰り返す総フレーム数。                        |
| `replicate`           | Integer         | ピクセルのサイズを設定します。既定: `1`{lang=json}                                                    |
| `blend_frames`        | Boolean         | フレーム遷移を滑らかにするかどうかを定義します。既定: `true`{lang=json}                               |

### Atlas Index

アニメーションさせるブロックテクスチャのインデックスを定義するコンポーネントです。

<CodeHeader>RP/textures/terrain_texture.json > texture_data</CodeHeader>

```json
"dirt": {
    "textures": [
        "textures/blocks/dirt",
        "textures/blocks/coarse_dirt" // Imagine that this is the path you want to animate
    ]
}
```

2 番目のパスにアニメーションテクスチャがあるので、土ブロックの flipbook テクスチャには `"atlas_index": 1`{lang=json} を入れます。

### Atlas Tile Variant

アニメーションさせるブロック変種（`variations` 配列に登録されるもの）を定義するコンポーネントです。

<CodeHeader>RP/textures/terrain_texture.json > texture_data</CodeHeader>

```json
"dirt": {
    "textures": [
        {
            "variations": [
                { "path": "textures/blocks/dirt_va" }, // Imagine that this is the block variation you want to animate
                { "path": "textures/blocks/dirt0" },
                { "path": "textures/blocks/dirt1" }
            ]
        }
    ]
}
```

では、最初のパスをアニメーションさせたいとします。その場合、土ブロックの flipbook テクスチャに `"atlas_tile_variant": 0`{lang=json} を入れます。

### Replicate

使用するテクスチャの一部のサイズを変更します。2 の倍数の値のみ使用できます。フレームのピクセル数が少ない場合は、それを拡張します。

| 値   | 機能                                   |
| ---- | -------------------------------------- |
| < 0  | アニメーションが壊れる                 |
| 0    | アニメーションとテクスチャが壊れる     |
| 2    | フレームの 1 / 4 ピクセルを描画する    |
| $n$  | フレームの 1 / $n^2$ ピクセルを描画する |

## 結果

![](animated_texture_2.gif)

これで、バニラの flipbook テクスチャを変更したり、自分専用のものを作ったりできます。
