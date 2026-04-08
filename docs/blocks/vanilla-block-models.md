---
title: バニラのブロックモデル
description: カスタムブロックで使えるように、ゲーム内に組み込まれているブロックモデルです。
category: Documentation
tags:
    - beginner
related:
    - /blocks/block-models
license: true
mentions:
    - QuazChick
---

カスタムブロックはバニラの [block shapes](/blocks/block-shapes) を使えませんが、Mojang は見た目を再現した `minecraft` 名前空間のモデルをいくつか用意しています。

:::danger HARDCODED
現在、バニラのブロックモデルはデータ駆動ではないため、変更したり、バニラのリソースパック内の JSON ファイルとして見つけたりすることはできません。

これは、[geometry](/blocks/block-components#geometry) コンポーネントの `bone_visibility` および `culling` パラメータにも対応していないことを意味します。
:::

## バニラモデルの適用

バニラのブロックモデルは、[カスタムブロックモデル](/blocks/block-models) と同じ方法で適用します。[geometry](/blocks/block-components#geometry) コンポーネントを使い、テクスチャは [material instances](/blocks/block-components#material-instances) で定義します。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": "minecraft:geometry.full_block",
"minecraft:material_instances": {
    "*": {
        "texture": "cobblestone"
    }
}
```

## バニラモデル一覧

<Table data="models.json" />
