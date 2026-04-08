---
title: ブロックのテクスチャ変種
description: ブロックのテクスチャ変種とは、ブロックの位置に応じて複数のテクスチャがランダムに適用される仕組みです。
category: Visuals
tags:
    - intermediate
mentions:
    - SirLich
    - solvedDev
    - Hatchibombotar
    - SmokeyStack
    - MedicalJewel105
    - QuazChick
---

:::tip FORMAT VERSION 1.26.10
[material instances](/blocks/block-components#material-instances) コンポーネントとテクスチャ変種を使う場合、ブロック JSON の `format_version` が 1.21.110 以上であることを確認してください。
:::

ブロックのテクスチャ変種とは、ブロックの位置に応じて複数のテクスチャがランダムに適用される仕組みです。
これは、砂利や草のように、少しだけ違う見た目を持つブロックがある場合に便利です。たとえば、小さな石が付いているものと付いていないものがあります。

**問題点:**

-   テクスチャセットファイルを参照する変種は、定義された heightmap、MER、normal map ファイルを使用しません ([MCPE-126617](https://bugs.mojang.com/browse/MCPE-126617))。

## テクスチャ変種の適用

テクスチャ変種を有効にするには、リソースパックの `textures` フォルダに `terrain_texture.json` ファイルを作成します。

このファイルには、テクスチャアトラスに含めるブロックテクスチャの一覧が入ります。
変種のある atlas 項目には `variations` パラメータがあり、これはブロックにランダム表示される複数のテクスチャの配列です。
`weight` パラメータを使うと、あるテクスチャ変種を他よりも出やすくできます（[こちら](#weighted-texture-variation) を参照）。

以下は、バニラの砂利ブロックに 3 つのテクスチャ変種を作る例です。

-   `gravel0.png`、`gravel1.png`、`gravel2.png` という 3 つの砂利テクスチャを作成または編集します。
-   `gravel0.png`、`gravel1.png`、`gravel2.png` を `path` パラメータで指定された場所にコピーします。
    整理しやすいように、追加のフォルダを含めてもかまいません。
-   `gravel` テクスチャ atlas 項目に次を追加します。

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "gravel": {
            "textures": {
                "variations": [
                    { "path": "textures/blocks/gravel0" },
                    { "path": "textures/blocks/gravel1" },
                    { "path": "textures/blocks/gravel2" }
                ]
            }
        }
    }
}
```

## 重み付きテクスチャ変種

上の例を使ったあとで重みを調整したくなったら、次のように `terrain_texture.json` に `weight` フィールドを追加します。

テクスチャ変種がどれくらい選ばれやすいかを計算するには、重みをすべて足し合わせ（この場合は 70 + 20 + 10 = 100）、その合計で重みを割ります。たとえば、`gravel0` 変種が選ばれる確率は 70 &div; 100 なので、ワールドの砂利の 70% の位置では `gravel0` が表示されます。

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "gravel": {
            "textures": {
                "variations": [
                    { "path": "textures/blocks/gravel0", "weight": 70 },
                    { "path": "textures/blocks/gravel1", "weight": 20 },
                    { "path": "textures/blocks/gravel2", "weight": 10 }
                ]
            }
        }
    }
}
```
