---
title: カスタム陶片
description: カスタム陶片の作り方を学びます。
category: Tutorials
tags:
    - easy
license: true
mentions:
    - SmokeyStack
    - QuazChick
---

:::tip フォーマットバージョン 1.26.10
このページでは、カスタムアイテムの基本的な理解が必要です。
始める前に [items guide](/items/items-intro) と [item tags](/items/item-tags) を確認してください。
:::

Minecraft Bedrock では、Decorated Pot のクラフトに使えるカスタム陶片を追加できます。
このページでは、その作り方を説明します。

## 陶片の登録

陶片は [item tag](/items/item-tags) で管理されています。
アイテムを Decorated Pot のクラフトに使えるようにするには、そのアイテムに `minecraft:decorated_pot_sherds` タグを付ける必要があります。

:::warning アイテム名

Decorated Pot のクラフトに使う陶片を表示するツールチップは、アイテムのローカライズキーが `item.<identifier>.name`{lang=xml} 形式だと想定しています。
そのため、アイテムの表示名をこの形式に変更する必要があります。

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_pottery_sherd.name=Custom Pottery Sherd
```

:::

<CodeHeader>BP/items/custom_pottery_sherd.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_pottery_sherd",
            "menu_category": {
                "category": "items",
                "group": "minecraft:itemGroup.name.potterySherds"
            }
        },
        "components": {
            "minecraft:icon": "wiki:custom_pottery_sherd", // Shortname defined in "RP/textures/item_texture.json"
            "minecraft:tags": {
                "tags": ["minecraft:decorated_pot_sherds"] // Allows the item to be used to craft a Decorated Pot
            },
            "minecraft:display_name": {
                "value": "item.wiki:custom_pottery_sherd.name"
            }
        }
    }
}
```

陶片を登録できたので、作業台に置いてテストできます。
タグが正しく付いていれば、作業台から Decorated Pot が出力されるはずです。

![Custom pottery sherd item being used to craft a Decorated Pot](crafting.png)

ただし、Decorated Pot にはまだ陶片そのものは表示されません。どの画像を表示するかをまだ伝えていないからです。

## パターンテクスチャの定義

このチュートリアルで使う陶片パターンテクスチャの例です。

<WikiImage
    src="custom_pottery_pattern.png"
    caption="RP/textures/wiki/blocks/custom_pottery_pattern.png"
    pixelated
/>

ゲームにテクスチャを表示させるには、Decorated Pot の client entity ファイルを編集する必要があります。
次の JSON ファイルを resource pack に追加してください。

<CodeHeader>RP/entity/decorated_pot.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "minecraft:decorated_pot",
            "textures": {
                // Each shortname listed here should be the identifier of your item without its namespace.
                "custom_pottery_sherd": "textures/wiki/blocks/custom_pottery_pattern" // Path to custom pot texture
            }
        }
    }
}
```

すべて正しくできていれば、Decorated Pot は空の壺ではなく、陶片を表示するようになります。

![Decorated Pot with a custom pattern on one face](decorated_pot.png)

## 補足

**質問**: client entity ファイルを編集すると、陶片を追加する他のアドオンと互換性がなくなりますか？

**答え**: なりません。client entity ファイルは実際には定義をマージします。
アイテム識別子が一意である限り、他のアドオンに上書きされることはありません。
namespace なしのアイテム識別子が一意でないのが心配なら、`wiki:wiki_custom_pottery_sherd` のように namespace を前置してください。
