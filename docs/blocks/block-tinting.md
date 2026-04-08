---
title: ブロックの着色
description: ブロックのテクスチャと地図色に色のティントを適用する方法を学びます。
category: Visuals
tags:
    - easy
license: true
mentions:
    - QuazChick
---

## 静的な着色

[terrain atlas file](/concepts/texture-atlases) では、次のパラメータをテクスチャに使って、2 通りの方法で着色できます。

-   [`tint_color`](/concepts/texture-atlases#tint-color) は、テクスチャに基本的な乗算ティントを適用します。
-   [`overlay_color`](/concepts/texture-atlases#overlay-color) は、テクスチャの alpha チャネルを使ってティント強度を決めつつ、テクスチャにティントを適用します。

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:tinted_texture": {
            "textures": {
                "path": "textures/wiki/blocks/untinted_texture",
                "tint_color": "#ff5522" // Tints the texture orange
            }
        }
    }
}
```

## ティント方法

ティント方法を使うと、ブロックが置かれるバイオームに基づいて色を付けられます。

### テクスチャの着色

関連する [material instance](/blocks/block-components#material-instances) に `tint_method` パラメータを指定すると、テクスチャにティントを適用できます。
ブロック内の異なる material instance に、異なるティント方法を使うこともできます。
ブロックがアイテムのとき、テクスチャは草原バイオームに置かれた場合と同じようにティントされます。

先ほどの静的なテクスチャ着色と同様に、ティント方法は次の 2 通りで適用できます。

-   `alpha_masked_tint` が `false`{lang=json}（既定）の場合、テクスチャの各色チャンネルはティント色で乗算されます。
    -   これはテクスチャアトラスファイルの [`tint_color`](/concepts/texture-atlases#tint-color) パラメータに相当します。
-   `alpha_masked_tint` が `true`{lang=json} の場合、テクスチャの alpha チャネルは乗算されず、代わりにティントの強さを決めるために使われます。
    -   テクスチャ内の特定ピクセルだけにティントを限定したいときに使えます。
    -   その結果、テクスチャは不透明になります。
    -   これはテクスチャアトラスファイルの [`overlay_color`](/concepts/texture-atlases#overlay-color) パラメータに相当します。

草ブロックの material instance は次のようになります。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:material_instances": {
    "*": {
        "texture": "wiki:custom_grass_side", // The dirt pixels would have an alpha value of 0, making them unaffected by the green tint
        "tint_method": "grass",
        "alpha_masked_tint": true
    },
    "down": {
        "texture": "wiki:custom_dirt"
    },
    "up": {
        "texture": "wiki:custom_grass_top",
        "tint_method": "grass"
    }
}
```

### 地図色の着色

テクスチャにティントが適用されているなら、地図にも同じティントでブロックを表示したくなるはずです。

ティント方法はテクスチャだけでなく、ブロックの地図色にも適用できます。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:map_color": {
    "color": "#ffffff",
    "tint_method": "grass"
}
```

### ティント方法一覧

<Table data="tint_methods.json" />

<style>
.color-preview {
    display: inline-grid;
    place-items: center;
    margin-block: 0.5em;
    width: 64px; 
    height: 64px;
    border: var(--border);
    border-radius: var(--border-radius);
    font-family: monospace;
    color: #ffffff;
}
</style>
