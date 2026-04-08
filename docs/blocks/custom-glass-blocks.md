---
title: カスタムガラス
example: custom_glass
description: このページでは、material instances を使ってフルブロックにテクスチャの半透明表現を持たせる方法を紹介します。
category: Vanilla Re-Creations
tags:
    - beginner
    - easy
license: true
mentions:
    - Eko-byte
    - QuazChick
    - SmokeyStack
---

:::tip FORMAT VERSION 1.26.10
この例を理解するには、ブロックの基本知識が必要です。
始める前に [ブロックガイド](/blocks/blocks-intro) を確認してください。
:::

ガラスブロックを作るのは簡単そうに見えますが、最初に作るとブロックが不透明に見えることがあります。
このページでは、[material instances](/blocks/block-components#material-instances) を使ってテクスチャに半透明表現を持たせ、[culling rules](/blocks/block-culling) で不要なブロック面を隠す方法を紹介します。

最終的には、次のようなものを作れるようになります。

![カスタムガラスブロックのコレクション](showcase.png)

## ブロックモデル

[バニラのブロックモデル](/blocks/vanilla-block-models) にはカリングルールを適用できません。
そのため、ガラスを正しく表示するには独自のフルブロックモデルを作成する必要があります。

<Spoiler title="カスタムガラスモデル JSON">

<ExampleFile path="RP/models/blocks/custom_glass.geo.json" />

</Spoiler>

## 初期ブロック JSON

<CodeHeader>BP/blocks/custom_glass.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_glass",
            "menu_category": {
                "category": "construction",
                "group": "minecraft:itemGroup.name.glass"
            }
        },
        "components": {
            "minecraft:light_dampening": 0, // Don't block any light (this is set to 15 for Tinted Glass)
            "minecraft:loot": "loot_tables/empty.json", // Don't drop without Silk Touch
            "minecraft:geometry": {
                "identifier": "geometry.custom_glass" // A custom full block model that we can apply culling to later
            },
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_glass", // Texture shortname defined in terrain_texture.json
                    "render_method": "blend" // Allow translucency
                }
            }
        }
    }
}
```

## サウンドの適用

<ExampleFile path="RP/blocks.json" />

## ガラスブロックのカリング

今のところ、カスタムガラスにはカリングが適用されていません。

つまり、複数のガラスブロックが隣り合っていると、それらを区切る面が残ります。

![カリングなしのカスタムガラスブロックのコレクション](without_culling.png)

### ブロックカリング JSON

<Spoiler title="Custom Glass Culling Rules JSON">

<ExampleFile path="RP/block_culling/custom_glass.json" />

</Spoiler>

### カリングルールの適用

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": {
    "identifier": "geometry.custom_glass",
    "culling": "wiki:culling.custom_glass"
}
```
