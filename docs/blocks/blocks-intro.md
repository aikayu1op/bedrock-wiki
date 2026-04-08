---
title: ブロック入門
description: ブロックを作るための Hello world ガイドです。ブロック形式と基本的なカスタムブロックの作成方法を学びます。
category: General
nav_order: 1
tags:
    - guide
    - beginner
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - Dreamedc2015
    - sermah
    - yanasakana
    - aexer0e
    - SmokeyStack
    - MedicalJewel105
    - stirante
    - ChibiMango
    - Hatchibombotar
    - fraysdev
    - Ciosciaa
    - Sprunkles137
    - ThomasOrs
    - QuazChick
---

:::tip FORMAT VERSION 1.26.10
このページでは、基本的なブロック機能について説明します。ほかのブロックコンポーネントについては [こちら](/blocks/block-components) で詳しく学べます。
:::
:::danger NOTE
バニラのブロックはハードコードされています。上書きしたりアクセスしたりすることはできません。
:::

Minecraft Bedrock では、バニラに似たさまざまな性質を持つカスタムブロックをワールドに追加できます。カスタムブロックは、植物のような複数段階の状態、向きのある配置、その他の便利な機能を持てます。

このチュートリアルでは、Minecraft の安定版向けに基本的なブロックを作成する方法を扱います。

## ブロックの登録

ブロック定義はエンティティと同様の構造です。説明と、ブロックの挙動を定義するコンポーネント一覧を含みます。

エンティティと違い、ブロックには `RP/blocks.json` 以外にリソース定義はありません。

以下は、カスタムブロックをクリエイティブインベントリに追加するための、**最小限の** ビヘイビア側コードです。

<CodeHeader>BP/blocks/custom_block.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_block",
            "menu_category": {
                "category": "construction", // The creative inventory or recipe book tab that the block is placed into
                "group": "minecraft:itemGroup.name.concrete", // The expandable group that the block is a part of. (Optional)
                "is_hidden_in_commands": false // Is the block hidden from use in commands? (Optional)
            }
        },
        "components": {} // Must be here, even if empty!
    }
}
```

### ブロックの説明

-   ブロックの `identifier` を定義します。形式は `<namespace>:<identifier>`{lang=xml} の一意な ID です。
-   どの `menu_category` に配置されるかを設定します。
    -   任意で `group` と `is_hidden_in_commands` も指定できます。

_ブロックの説明には [states](/blocks/block-states) と [traits](/blocks/block-traits) も含まれます。これらはそれぞれ別ページで解説しています。_

## コンポーネントの追加

今のところ、カスタムブロックは既定のコンポーネント値を使っています（[こちら](/blocks/block-components) で確認できます）。

それでは、自分の機能を設定しましょう！

<CodeHeader>BP/blocks/custom_block.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_block",
            "menu_category": {
                "category": "construction"
            }
        },
        "components": {
            "minecraft:destructible_by_mining": {
                "seconds_to_destroy": 3
            },
            "minecraft:destructible_by_explosion": {
                "explosion_resistance": 3
            },
            "minecraft:map_color": "#ffffff",
            "minecraft:light_dampening": 0,
            "minecraft:light_emission": 4,
            "minecraft:loot": "loot_tables/blocks/custom_block.json"
        }
    }
}
```

-   [`minecraft:destructible_by_mining`](/blocks/block-components#destructible-by-mining) は、プレイヤーがブロックを壊すまでに必要な採掘時間を定義します。現在のところ、ツールごとに破壊時間を変えることはできません。
-   [`minecraft:destructible_by_explosion`](/blocks/block-components#destructible-by-explosion) は、爆発への耐性を定義します。値が大きいほど破壊されにくくなります。
-   [`minecraft:map_color`](/blocks/block-components#map-color) は、Minecraft の地図上でこのブロックを表すために表示される 16 進数の色コードです。`"#ffffff"`{lang=json} は白を意味します。ほかの色の 16 進数コードは [こちら](https://www.google.com/search?q=hex+color+picker) で確認できます。
-   [`minecraft:light_dampening`](/blocks/block-components#light-dampening) は、通過する光をどれだけ遮るかを定義します。
-   [`minecraft:light_emission`](/blocks/block-components#light-emission) は、ブロックが出力する光レベルを定義します。
-   [`minecraft:loot`](/blocks/block-components#loot) は、ブロックがドロップするためのルートテーブルのパスを定義します。これを削除すると、ブロックは自分自身をドロップします。ルートテーブルについては [こちら](/loot/loot-tables) で詳しく学べます。

_ほかのブロックコンポーネントも [こちら](/blocks/block-components) から確認できます！_

## テクスチャの適用

[geometry](/blocks/block-components#geometry) と [material instances](/blocks/block-components#material-instances) のコンポーネントを使って、ブロックの見た目を決めます。

基本の 16&times;16&times;16 ピクセルブロックには、[バニラモデル](/blocks/vanilla-block-models) `minecraft:geometry.full_block` を使います。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": "minecraft:geometry.full_block",
"minecraft:material_instances": {
    "*": {
        "texture": "wiki:custom_block"
    }
}
```

次に、テクスチャの短縮名を `RP/textures/terrain_texture.json` の画像ファイルパスに関連付ける必要があります。

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_data": {
        // Our texture shortname:
        "wiki:custom_block": {
            "textures": "textures/wiki/blocks/custom_block" // Link to an image file name
        }
    }
}
```

### 面ごとのテクスチャ

テクスチャは面ごとにも適用できます。たとえば、カスタムの「コンパスブロック」には次のような ✨すばらしい✨ テクスチャを使えます。

<div style="display: grid; grid-template-columns: repeat(auto-fill, 192px); column-gap: 1em;">

<WikiImage
    caption="RP/textures/wiki/blocks/compass_block_down.png"
    src="compass_block_down.png"
    pixelated
    width="512"
/>
<WikiImage
    caption="RP/textures/wiki/blocks/compass_block_up.png"
    src="compass_block_up.png"
    pixelated
    width="512"
/>
<WikiImage
    caption="RP/textures/wiki/blocks/compass_block_north.png"
    src="compass_block_north.png"
    pixelated
    width="512"
/>
<WikiImage
    caption="RP/textures/wiki/blocks/compass_block_east.png"
    src="compass_block_east.png"
    pixelated
    width="512"
/>
<WikiImage
    caption="RP/textures/wiki/blocks/compass_block_south.png"
    src="compass_block_south.png"
    pixelated
    width="512"
/>
<WikiImage
    caption="RP/textures/wiki/blocks/compass_block_west.png"
    src="compass_block_west.png"
    pixelated
    width="512"
/>

</div>

[material instances](/blocks/block-components#material-instances) は次のようになります。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:material_instances": {
    "down": {
        "texture": "wiki:compass_block_down" // This texture appears in destruction particles
    },
    "up": {
        "texture": "wiki:compass_block_up"
    },
    "north": {
        "texture": "wiki:compass_block_north"
    },
    "east": {
        "texture": "wiki:compass_block_east"
    },
    "south": {
        "texture": "wiki:compass_block_south"
    },
    "west": {
        "texture": "wiki:compass_block_west"
    }
}
```

以下の `terrain_texture.json` のデータも必要です。

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:compass_block_down": {
            "textures": "textures/wiki/blocks/compass_block_down"
        },
        "wiki:compass_block_up": {
            "textures": "textures/wiki/blocks/compass_block_up"
        },
        "wiki:compass_block_north": {
            "textures": "textures/wiki/blocks/compass_block_north"
        },
        "wiki:compass_block_east": {
            "textures": "textures/wiki/blocks/compass_block_east"
        },
        "wiki:compass_block_west": {
            "textures": "textures/wiki/blocks/compass_block_west"
        },
        "wiki:compass_block_south": {
            "textures": "textures/wiki/blocks/compass_block_south"
        }
    }
}
```

## サウンドの適用

カスタムブロックの採掘音、足音、破壊音、設置音は、`RP/blocks.json` の `sound` パラメータで決められます。

ブロックのサウンドについては [こちら](/blocks/block-sounds) で詳しく学べます！

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
    "format_version": "1.21.40",
    "wiki:custom_block": {
        "sound": "grass"
    }
}
```

## 名前の定義

最後に、ブロック名を次のように定義します。

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
tile.wiki:custom_block.name=Custom Block
tile.wiki:compass_block.name=Compass Block
```

翻訳については [こちら](/text/text-intro) で詳しく学べます。

## 結果

このページでは、次の内容を学びました。

-   [x] ブロックの基本機能
-   [x] すべてのブロック面にテクスチャを適用する方法
-   [x] 面ごとにテクスチャを適用する方法

...でも、まだ始まりにすぎません。下で他のことも見てみましょう！

## 次は？

<CardGrid>
<Card title="機能を追加する" image="/assets/images/icons/crafting_table.png">

利用できるブロック [components](/blocks/block-components) を学んで、独自のゲームプレイを作りましょう。

[geometry](/blocks/block-components#geometry) コンポーネントを使って、ブロックにカスタムモデルを付けてみませんか？
あわせて [collision](/blocks/block-components#collision-box) と [selection](/blocks/block-components#selection-box) のボックスも調整して、見た目に合わせられます。

</Card>
<Card title="バリアントを作成する" image="/assets/images/icons/levers.png">

ブロックの [states](/blocks/block-states) と [permutations](/blocks/block-permutations) を使って、条件に応じてコンポーネントを有効化できます。

たとえば、カスタムのタンクブロックに液体の深さレベルを追加し、複数種類の液体に対応させることができます。

</Card>
<Card title="バニラを再現する" image="/assets/images/icons/diamond_ore.png">

既存ブロックの完全再現をまとめたものを、**Vanilla Re-Creations** カテゴリでいくつか確認できます。

まずは [custom glass blocks](/blocks/custom-glass-blocks) から始めて、[material instances](/blocks/block-components#material-instances) を使ってみましょう！

</Card>
</CardGrid>
