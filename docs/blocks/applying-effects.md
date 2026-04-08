---
title: 効果の適用
description: このチュートリアルでは、ブロックの一定半径内にいるエンティティへステータス効果を適用する方法を紹介します。
category: Tutorials
tags:
    - easy
    - scripting
license: true
mentions:
    - MysticChair
    - SirLich
    - MedicalJewel105
    - QuazChick
    - SmokeyStack
---

::: tip FORMAT VERSION 1.26.10
このチュートリアルでは、[ブロックイベント](/blocks/block-events)を含むブロックの基本的な理解を前提としています。
始める前に [ブロックガイド](/blocks/blocks-intro) を確認してください。
:::

このチュートリアルでは、ブロックの一定半径内にいるエンティティへステータス効果を適用する方法を紹介します。

## ブロック JSON

バニラのビーコンブロックに合わせるには、カスタムブロックは 4 秒ごとに効果を適用する必要があります。
これは、ブロックを 80 ティックごとに「ティック」させることで実現できます。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:tick": {
    "interval_range": [80, 80], // The interval shouldn't be random, so we use the same value for the min and max.
    "looping": true
}
```

次に、[tick](/blocks/block-events#tick) イベントに接続するためのカスタムコンポーネントを登録します。
このコンポーネントは指定した範囲内のエンティティに効果を適用するため、`wiki:radial_effects` と名付けます。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"wiki:radial_effects": [
    {
        "radius": 64, // Apply the following effect to entities within this radius of blocks.
        "name": "wither",
        "duration": 600, // 30 seconds in ticks.
        "amplifier": 1
    },
    {
        "radius": 64,
        "name": "slowness",
        "duration": 600,
        "amplifier": 2
    }
]
```

## カスタムコンポーネントスクリプト

<CodeHeader>BP/scripts/radialEffects.js</CodeHeader>

```js
import { system } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockRadialEffectsComponent = {
    onTick({ block, dimension }, { params }) {
        const effects = params; // The value we have assigned to the component in the block JSON.

        // Iterates over each object in the array.
        for (const { radius, name, duration, amplifier } of effects) {
            // Gets all entities in the specified "radius" around the block.
            const entities = dimension.getEntities({
                location: block.center(),
                maxDistance: radius,
            });

            for (const entity of entities) {
                entity.addEffect(name, duration, { amplifier });
            }
        }
    },
};

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "wiki:radial_effects",
        BlockRadialEffectsComponent
    );
});
```

## 例の JSON

<Spoiler title="Wither ブロックの例">

<CodeHeader>BP/blocks/wither_block.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:wither_block",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            "minecraft:geometry": "geometry.wither_block",
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:wither_block"
                }
            },
            "minecraft:tick": {
                "interval_range": [80, 80],
                "looping": true
            },
            "wiki:radial_effects": [
                {
                    "radius": 64,
                    "name": "wither",
                    "duration": 600,
                    "amplifier": 1
                },
                {
                    "radius": 64,
                    "name": "slowness",
                    "duration": 600,
                    "amplifier": 2
                }
            ]
        }
    }
}
```

</Spoiler>
