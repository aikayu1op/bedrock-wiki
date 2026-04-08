---
title: アイテムタグ
description: アイテムタグは、複数の種類のアイテムを判定するときに使われ、バニラの機能を有効にできます。
category: General
nav_order: 3
related:
    - /items/vanilla-item-tags
license: true
mentions:
    - Xterionix
    - SmokeyStack
    - QuazChick
---

アイテムタグは、複数の種類のアイテムを判定するときに使われ、バニラの機能を有効にできます。
バニラのアイテムタグとその機能の一覧は、[このページ](/items/vanilla-item-tags) を参照してください。

## タグの適用

<CodeHeader>BP/items/example_item.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:example_item"
        },
        "components": {
            "minecraft:tags": {
                "tags": ["wiki:example_tag"]
            }
        }
    }
}
```

## タグの判定

### エンティティフィルター

<CodeHeader>Entity Filter</CodeHeader>

```json
{
    "test": "has_equipment_tag",
    "domain": "hand",
    "operator": "==",
    "value": "wiki:example_tag"
}
```

### エンティティ Molang

-   `q.equipped_item_all_tags(slot, ...tags)`{lang=molang}
    -   指定した位置のアイテムが、列挙したタグをすべて持っているかを返します。
-   `q.equipped_item_any_tag(slot, ...tags)`{lang=molang}
    -   指定した位置のアイテムが、列挙したタグのうち少なくとも 1 つを持っているかを返します。

<CodeHeader>minecraft:client_entity > description</CodeHeader>

```json
"scripts": {
    "pre_animation": [
        "v.is_holding_pickaxe = q.equipped_item_all_tags('slot.weapon.mainhand', 'minecraft:is_tool', 'minecraft:is_pickaxe');"
    ]
}
```

### アイテムディスクリプタ

-   `q.all_tags(...tags)`{lang=molang}
    -   アイテムが列挙したタグをすべて持っているかを返します。
-   `q.any_tag(...tags)`{lang=molang}
    -   アイテムが列挙したタグのうち少なくとも 1 つを持っているかを返します。

<CodeHeader>Item Descriptor</CodeHeader>

```json
{
    "tags": "q.all_tags('minecraft:is_tool', 'minecraft:is_pickaxe') && q.any_tag('minecraft:diamond_tier', 'minecraft:netherite_tier')"
}
```

### レシピの材料

<CodeHeader>minecraft:recipe_shapeless</CodeHeader>

```json
"ingredients": [
    {
        "item": { "tag": "minecraft:planks" }
    }
]
```
