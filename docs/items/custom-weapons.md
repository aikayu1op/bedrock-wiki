---
title: カスタム武器
description: カスタム武器の作り方を学びます。
category: Tutorials
tags:
    - easy
mentions:
    - SirLich
    - solvedDev
    - MedicalJewel105
    - aexer0e
    - PepijnMC
    - ThomasOrs
    - Xterionix
    - QuazChick
---

このガイドに沿ってカスタムの剣アイテムを作成します。自由に変えて、好きな武器を作ってみてください。

必要なら、[hit entity](/items/item-events#hit-entity) イベントを使って武器にさらに機能を追加できます。

## カスタム剣アイテム

他のアイテムチュートリアルと同様に、まずは次のようなシンプルなカスタム剣を作ります。

<CodeHeader>BP/items/my_sword.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:my_sword",
            "menu_category": {
                "category": "equipment",
                "group": "minecraft:itemGroup.name.sword"
            }
        },
        "components": {
            "minecraft:max_stack_size": 1,
            // Give the item the correct positioning in third person
            "minecraft:hand_equipped": true,
            "minecraft:durability": {
                "max_durability": 600
            },
            // How much additional damage this weapon will deal to entities
            "minecraft:damage": 10,
            // We also let it be enchantable in the "sword" slot
            "minecraft:enchantable": {
                "value": 10,
                "slot": "sword"
            },
            // This texture is used for both inventory and the hand model
            "minecraft:icon": "wiki:my_sword",
            "minecraft:display_name": {
                "value": "My Custom Sword"
            },
            // Allow the sword to be repaired with sticks
            "minecraft:repairable": {
                "repair_items": [
                    {
                        "items": ["minecraft:stick"],
                        "repair_amount": "context.other->q.remaining_durability + 0.05 * context.other->q.max_durability"
                    }
                ]
            }
        }
    }
}
```

これで最低限、ゲーム内に剣を入れることはできます。まだ RP 側でアイコンを登録する必要はありますが、やることは RP フォルダに移動して次のように追加するだけなので、それほど大変ではありません。

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:my_sword": {
            // Make sure you have put an icon texture called my_sword.png here
            "textures": "textures/wiki/items/my_sword"
        }
    }
}
```

自分用のテクスチャがない場合は、以下のサンプルを使えます。画像を「名前を付けて保存」して、`RP/textures/items` ディレクトリに入れてください。

<WikiImage
    src="my_sword.png"
    alt=""
    caption="RP/textures/wiki/items/my_sword"
    width="128"
    pixelated
/>

## ゲーム内での確認

これでアイテムの JSON 定義を含む BP と、テクスチャを含む RP がそろったので、新しいワールドを作成し、アドオンを適用できます。

ここまでできたら、クリエイティブモードに入ると、剣の名前で探すか、表示されている剣カテゴリから見つけられるはずです。

![](custom_sword.jpg)

そして、手に持つと、ゲーム内では次のように見えるはずです。

![](held_sword.jpg)

それほど難しくなかったはずです。これで好きなだけカスタム剣を作れますし、ここからさらに楽しいこともたくさんできます。

## ツールのような機能

`minecraft:digger` のような他のコンポーネントを組み合わせれば、クモの巣や竹をより速く壊せるようにもできます。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:digger": {
    "use_efficiency": true,
    "destroy_speeds": [
        {
            "block": "minecraft:web",
            "speed": 15
        },
        {
            "block": "minecraft:bamboo",
            "speed": 10
        }
    ]
}
```

## アイテムレシピ

レシピも作っておくとよいでしょう。これは前の章で扱った内容で、特に新しい要素はありませんが、よく分からない場合に備えて、エンダーアイとエンダーパールで剣を作る例を載せておきます。

<CodeHeader>BP/recipes/my_sword.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:recipe_shaped": {
        "description": {
            "identifier": "wiki:my_sword"
        },
        "tags": ["crafting_table"],
        "pattern": ["e", "E", "#"],
        "key": {
            "#": {
                "item": "minecraft:stick"
            },
            "E": {
                "item": "minecraft:ender_eye"
            },
            "e": {
                "item": "minecraft:ender_pearl"
            }
        },
        "result": {
            "item": "wiki:my_sword"
        },
        "unlock": [
            {
                "item": "minecraft:ender_eye"
            }
        ]
    }
}
```

![](sword_recipe.jpg)

これを入れれば、ゲーム内で剣をクラフトできるようになります。そこから先は、好きなだけ別のカスタム剣を作ったり、弓やトライデントを作ったりしてみてください。
