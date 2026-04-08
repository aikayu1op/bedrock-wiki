---
title: ブロックのカリング
description: ブロックのカリングルールを使うと、周囲のブロックに応じてモデルの一部を非表示にできます。
category: Visuals
tags:
    - intermediate
related:
    - /blocks/block-models
license: true
mentions:
    - legopitstop
    - QuazChick
---

:::tip モデルを作成してください
始める前に、ブロック用の [モデルを作成](/blocks/block-models) しておいてください。そうしないと、カリングルールを適用する対象がありません。
:::

## カリングルールの適用

ブロックのカリングルールを使うと、周囲のブロックに応じてモデルの一部を非表示にできます。これは、隠れている部分を不要に描画しないことで、ゲームのパフォーマンス向上に役立ちます。

カリングルールはリソースパックの `block_culling` フォルダに追加し、次のような形式で記述します。

<CodeHeader>RP/block_culling/lamp.json</CodeHeader>

```json
{
    "format_version": "1.21.80",
    "minecraft:block_culling_rules": {
        "description": {
            "identifier": "wiki:culling.lamp" // Identifier to be referenced in block JSON geometry component.
        },
        "rules": [ ... ] // An array that can contain multiple culling rules.
    }
}
```

その後、ブロックの [`minecraft:geometry`](/blocks/block-components#geometry) コンポーネントでブロックモデルに適用します。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": {
    "identifier": "geometry.lamp", // Model identifier
    "culling": "wiki:culling.lamp" // Block culling rules identifier
}
```

## 骨全体のカリング

この種類のルールは、骨が 1 方向からしか見えない場合に使います。個別のキューブ面ではなく、骨全体をカリングできます。

<CodeHeader>minecraft:block_culling_rules > rules</CodeHeader>

```json
{
    "direction": "up", // This bone will be culled if there is a full, opaque block above the lamp.
    "geometry_part": {
        "bone": "lamp_bulb" // Name of the bone to be culled.
    }
}
```

## キューブ面のカリング

この種類のルールは、完全に不透明なブロックに接しているキューブの特定面を隠したいときに使います。

<CodeHeader>minecraft:block_culling_rules > rules</CodeHeader>

```json
{
    "direction": "down", // This bone will be culled if there is a full, opaque block below the lamp.
    "geometry_part": {
        "bone": "lamp_base", // Name of the bone containing the cube to be culled.
        "cube": 0, // The zero-based index of the cube in the bone's "cubes" array.
        "face": "down" // The face of the cube to cull. This is usually the same as the rule's "direction" unless your cube is rotated.
    }
}
```

## カリング条件

カリングルールは、既定では隣接ブロックの完全な不透明面に対してカリングします。
ただし、ルールの `condition` パラメータに応じて、ほかの種類のブロックに対してもカリングできます。

<CodeHeader>minecraft:block_culling_rules > rules</CodeHeader>

```json
{
    "cull_against_full_and_opaque": true, // Cull against a full, opaque block.
    "condition": "same_block", // Cull against a block with the same identifier.
    "direction": "down",
    "geometry_part": {
        "bone": "lamp_bulb" // Name of the bone containing the cube to be culled.
    }
}
```

### 同じブロック

`"same_block"`{lang=json} 条件を使うと、隣接ブロックが同じ識別子を持つ場合にも、指定した geometry パーツがカリングされます。

### 同じブロックのパーミュテーション

`"same_block_permutation"`{lang=json} 条件を使うと、隣接ブロックが同じ識別子と状態値を持つ場合にも、指定した geometry パーツがカリングされます。

### 同じカリングレイヤー

`"same_culling_layer"`{lang=json} 条件を使うと、隣接ブロックが同じ `culling_layer` 識別子を持つ場合にも、指定した geometry パーツがカリングされます。
