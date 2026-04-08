---
title: ブロックタグ
description: ブロックタグは、複数種類のブロックを判定するときに使われ、バニラ機能を有効にできます。
category: General
nav_order: 3
related:
    - /blocks/vanilla-block-tags
license: true
mentions:
    - SirLich
    - yanasakana
    - aexer0e
    - SmokeyStack
    - MedicalJewel105
    - Lufurrius
    - Chikorita-Lover
    - victorsigma
    - TheItsNameless
    - QuazChick
    - Kaioga5
    - Xterionix
---

ブロックタグは、複数種類のブロックを判定するときに使われ、バニラ機能を有効にできます。
利用可能なバニラのブロックタグとその機能については、[このページ](/blocks/vanilla-block-tags) を参照してください。

## タグの適用

ブロックタグは、次のように `tag:` を前置してブロックの `components` に適用できます。

<CodeHeader>BP/blocks/tree_stump.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:tree_stump",
            "menu_category": {
                "category": "nature"
            }
        },
        "components": {
            "tag:wood": {},
            "tag:minecraft:is_axe_item_destructible": {},
            "tag:wiki:very_useless": {}
        }
    }
}
```

## タグのテスト

### ブロック記述子

-   `q.all_tags(...tags)`{lang=molang}
    -   指定したタグをすべて持っているかを返します。
-   `q.any_tag(...tags)`{lang=molang}
    -   指定したタグのうち少なくとも 1 つを持っているかを返します。

<CodeHeader>Block Descriptor</CodeHeader>

```json
{
    "tags": "q.any_tag('wiki:glowing') && q.all_tags('wiki:custom_ore', 'stone')"
}
```

### エンティティ Molang

-   `q.block_has_all_tags(x, y, z, ...tags)`{lang=molang}
    -   指定座標のブロックが、列挙したタグをすべて持っているかを返します。
-   `q.block_has_any_tag(x, y, z, ...tags)`{lang=molang}
    -   指定座標のブロックが、列挙したタグのうち少なくとも 1 つを持っているかを返します。
-   `q.relative_block_has_all_tags(x, y, z, ...tags)`{lang=molang}
    -   エンティティからの相対オフセット位置のブロックが、列挙したタグをすべて持っているかを返します。
-   `q.relative_block_has_any_tag(x, y, z, ...tags)`{lang=molang}
    -   エンティティからの相対オフセット位置のブロックが、列挙したタグのうち少なくとも 1 つを持っているかを返します。

<CodeHeader>minecraft:client_entity > description</CodeHeader>

```json
"scripts": {
    "pre_animation": [
        "v.is_on_sand = q.relative_block_has_any_tag(0, -1, 0, 'sand');"
    ]
}
```

### 追加のクエリ

**注意:** 次のクエリ関数に既知の用途はありません。

-   `q.block_neighbor_has_all_tags(x, y, z, ...tags)`{lang=molang}
-   `q.block_neighbor_has_any_tag(x, y, z, ...tags)`{lang=molang}

### 採掘ツールの例

ブロックのタグを参照するアイテムの例です。

<CodeHeader>BP/items/custom_pickaxe.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_pickaxe",
            "menu_category": {
                "category": "equipment",
                "group": "minecraft:itemGroup.name.pickaxe"
            }
        },
        "components": {
            "minecraft:digger": {
                "use_efficiency": true,
                "destroy_speeds": [
                    {
                        "speed": 5,
                        "block": {
                            "tags": "q.any_tag('minecraft:is_pickaxe_item_destructible')"
                        }
                    }
                ]
            }
        }
    }
}
```
