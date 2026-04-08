---
title: カスタムフード
description: 食べるとプレイヤーに効果を与えるカスタムフードの作り方を学びます（たとえば金のリンゴのように）。
category: Tutorials
tags:
    - easy
    - scripting
license: true
mentions:
    - KawEduh-dv
    - QuazChick
---

:::tip フォーマットバージョン 1.26.10
このページでは、カスタムアイテムの基本的な理解が必要です。
始める前に [items guide](/items/items-intro) を確認してください。
:::

このページでは、食べるとプレイヤーに効果を与えるカスタムフードの作り方を学びます（金のリンゴのようなものです）。

## 基本のアイテム JSON

<CodeHeader>BP/items/custom_food.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_food",
            "menu_category": {
                "category": "equipment",
                "group": "minecraft:itemGroup.name.miscFood"
            }
        },
        "components": {
            "minecraft:icon": "wiki:custom_food",
            "minecraft:food": {
                "nutrition": 4,
                "saturation_modifier": 0.6
            },
            "minecraft:use_animation": "eat",
            "minecraft:use_modifiers": {
                "use_duration": 1.6,
                "movement_modifier": 0.35
            },
            "minecraft:tags": {
                "tags": [
                    "minecraft:is_food",
                    "minecraft:is_fish", // Only include if the food is fish
                    "minecraft:is_meat", // Only include if the food is meat (not including fish)
                    "minecraft:is_cooked" // Only include if the food is cooked
                ]
            }
        }
    }
}
```

テクスチャを正しい場所に置く方法をすでに知っているなら飛ばしても構いませんが、知らない場合は、単にテクスチャファイルを `RP/textures/items` フォルダに入れるだけでは不十分です。

ここで、resource pack の `RP/textures/item_texture.json` ファイル内に、上の `minecraft:icon` コンポーネントで定義した名前のオブジェクトを作成する必要があります。

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:custom_food": {
            "textures": "textures/wiki/items/custom_food"
        }
    }
}
```

## 効果の適用

フードを食べたときにプレイヤーへ効果を適用するには、[custom components](/items/item-events) を使う必要があります。

このチュートリアルでは、カスタムコンポーネントを `wiki:food_effects` にします。
namespace は、自分のアドオンを一意に識別できるものに変更してください。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"wiki:food_effects": [
    {
        "name": "wither",
        "duration": 600, // 30 seconds in ticks.
        "amplifier": 1
    },
    {
        "name": "slowness",
        "duration": 600,
        "amplifier": 2
    }
]
```

### カスタムコンポーネントのスクリプト

スクリプトファイルでは、特定のアイテムを使ったあとに 1 つのイベントを使うだけで、下のコードのようにプレイヤーへ 1 つ以上の効果を付与できます。

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import { system } from "@minecraft/server";

const ItemFoodEffectsComponent = {
    onConsume({ source }, { params }) {
        // Iterates over each object in the component's array.
        for (const { name, duration, amplifier } of params) {
            source.addEffect(name, duration, { amplifier });
        }
    },
};

system.beforeEvents.startup.subscribe(({ itemComponentRegistry }) => {
    // Register the custom component for use in the item JSON file:
    itemComponentRegistry.registerCustomComponent("wiki:food_effects", ItemFoodEffectsComponent);
});
```
