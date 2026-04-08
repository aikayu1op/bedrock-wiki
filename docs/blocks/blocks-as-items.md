---
title: ブロックをアイテムとして扱う
description: UI、コンテナ内、地面にドロップされたときにブロックを表すアイテムについて学びます。
category: General
tags:
    - intermediate
license: true
mentions:
    - QuazChick
---

## 自動生成されるブロックアイテム

手にブロックを持っているとき、実際に持っているのはそのブロックを配置するアイテムです。カスタムブロックがゲームに登録されると、Minecraft はそのブロックをインベントリ内で表す新しいアイテムも自動的に登録します。

このアイテムはブロックで定義されたメニューカテゴリと表示名を使いますが、自動生成されたブロックアイテムのほかのコンポーネントは変更できません。
2D アイコンなど他のコンポーネントを適用したい場合は、ブロックのアイテムを自分で置き換える必要があります。

## ブロックアイテムの置き換え

ブロックアイテムを置き換えるには、ブロックと同じ識別子を持つ新しいアイテム JSON ファイルを作成する必要があります。

新しいアイテムには [block placer](/items/item-components#block-placer) コンポーネントも必要です。これにより、アイテムでブロックを配置できるようになります。
block placer コンポーネントは既定でアイテムにブロックの 3D 見た目も与えますが、[icon](/items/item-components#icon) コンポーネントで上書きして 2D スプライトを表示できます。

### カスタム花の例

ブロックアイテムの置き換えが必要になる例として、花ブロックがあります。これは 3D ではなく、アイテム形態ではアイコンとして表示するのが望ましいです。

<CodeHeader>BP/blocks/daffodil.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:daffodil"
        },
        "components": {
            "minecraft:flower_pottable": {},
            "minecraft:geometry": "minecraft:geometry.cross",
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:daffodil",
                    "render_method": "alpha_test"
                }
            }
        }
    }
}
```

<CodeHeader>BP/items/daffodil.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:daffodil", // Same as the block's ID
            "menu_category": {
                "category": "nature",
                "group": "minecraft:itemGroup.name.flower"
            }
        },
        "components": {
            "minecraft:icon": "wiki:daffodil",
            "minecraft:block_placer": {
                "block": "wiki:daffodil",
                "aligned_placement": false, // This should be true for most building blocks and false for most plant blocks
                "replace_block_item": true
            }
        }
    }
}
```
