---
title: アイテム入門
description: アイテム作成の "Hello world" ガイドです。アイテム形式と、基本的なカスタムアイテムの作り方を学びます。
category: General
nav_order: 1
tags:
    - guide
    - beginner
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - yanasakana
    - destruc7ion
    - aexer0e
    - stirante
    - ChibiMango
    - MedicalJewel105
    - Sprunkles137
    - mark-wiemer
    - TheItsNameless
    - s1050613
    - SmokeyStack
    - QuazChick
---

Minecraft Bedrock では、さまざまなバニラ風の特性を持つカスタムアイテムをワールドに追加できます。

このチュートリアルでは、Minecraft の安定版向けに基本的なアイテムを作成する方法を説明します。

## アイテムの登録

アイテム定義はエンティティと似た構造で、説明と、アイテムの動作を定義するコンポーネントの一覧を含みます。

以下は、カスタムアイテムをクリエイティブインベントリに入れるために必要な、**最小限** のビヘイビア側コードです。

<CodeHeader>BP/items/custom_item.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_item",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {} // Must be here, even if empty!
    }
}
```

### アイテムの説明

-   アイテムの識別子を定義します。形式は `namespace:identifier` の一意な ID です。
-   アイテムをどの `menu_category` に配置するかを設定します。
    -   オプションの `group` と `is_hidden_in_commands` も指定できます。

## コンポーネントの追加

今のカスタムアイテムは、デフォルトのコンポーネント値を使っています（一覧は[こちら](/items/item-components)）。

ここから独自の機能を設定してみましょう。

<CodeHeader>BP/items/custom_item.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_item",
            "menu_category": {
                "category": "construction"
            }
        },
        "components": {
            "minecraft:damage": 10,
            "minecraft:durability": {
                "max_durability": 36
            },
            "minecraft:hand_equipped": true
        }
    }
}
```

他のアイテムコンポーネントは[こちら](/items/item-components)で確認できます。

## テクスチャの適用

`RP/textures/item_texture.json` 内の画像に結びつけるため、テクスチャの短縮名を作成する必要があります。

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:custom_item": {
            "textures": "textures/items/custom_item"
        }
    }
}
```

アイテムファイルでは、テクスチャを適用するために `minecraft:icon` コンポーネントを追加します。

<CodeHeader>BP/items/custom_item.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_item",
            "menu_category": {
                "category": "construction"
            }
        },
        "components": {
            "minecraft:icon": "wiki:custom_item"
        }
    }
}
```

:::tip BLOCK ICONS
別の方法として、[block placer](/items/item-components#block-placer) アイテムでは `minecraft:icon` コンポーネントを省略でき、ブロックの 3D アイコンで表示されます。
:::

## 名前の定義

最後に、アイテム名を次のように定義します。

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_item=Custom Item
```

## 結果

このページでは、次の内容を学びました。

-   [x] アイテムの基本機能
-   [x] テクスチャの適用方法
-   [x] `item_texture.json` の短縮名を使ってテクスチャを結びつける方法
-   [x] 言語ファイルで名前を定義する方法
