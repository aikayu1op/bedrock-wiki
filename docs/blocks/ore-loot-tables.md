---
title: 鉱石のルートテーブル
description: 間違ったツールで採掘したときにブロックのルートが落ちないようにし、正しいツールで採掘したときに経験値報酬を落とす方法を学びます。
category: Tutorials
tags:
    - easy
    - scripting
mentions:
    - SykoUSS
    - ExDrill
    - MedicalJewel105
    - SmokeyStack
    - Chikorita-Lover
    - SirLich
    - TheItsNameless
    - QuazChick
    - Keyyard
---

:::tip FORMAT VERSION 1.26.10
このチュートリアルでは、ブロックの基本的な理解を前提としています。
始める前に [ブロックガイド](/blocks/blocks-intro) を確認してください。
:::

このチュートリアルでは、適切なルートテーブルを使ってカスタム鉱石ブロックを作成する新しい方法を紹介します。
`minecraft:loot` コンポーネントは、使用したツールに関係なく指定したルートテーブルを実行しますが、ルートテーブルに `match_tool` 条件を追加すると、各プールに必要なツールを指定できます。

さらに、スクリプトとカスタムコンポーネントを使えば、バニラの鉱石と同じように、正しいツールでブロックを破壊したときに経験値オーブ報酬を出せます。

-   特徴:

    -   適切なツールでしか採掘できない
    -   アイテムに付与エンチャントを指定できる
    -   経験値報酬もドロップする

-   問題点:

    -   爆発やコマンドなど、プレイヤー以外の方法でブロックを壊した場合、ルートはドロップしない

## ルートテーブル

以下の例では、`match_tool` 条件を使って、鉄以上のティアのツルハシを検査する方法を示しています。

<CodeHeader>BP/loot_tables/blocks/silver_ore.json</CodeHeader>

```json
{
    "pools": [
        {
            "rolls": 1,
            "conditions": [
                {
                    "condition": "match_tool",
                    "minecraft:match_tool_filter_all": [
                        "minecraft:is_tool",
                        "minecraft:is_pickaxe"
                    ],
                    "minecraft:match_tool_filter_any": [
                        "minecraft:iron_tier",
                        "minecraft:diamond_tier",
                        "minecraft:netherite_tier"
                    ],
                    "count": 1
                }
            ],
            "entries": [
                {
                    "type": "item",
                    "name": "wiki:raw_silver"
                }
            ]
        }
    ]
}
```

### エンチャントの指定

必要であれば、条件にエンチャントのセクションを追加できますが、各ツールとレベルは別々のプールとして列挙する必要があることに注意してください。

また、検出できるのは 1 段階目と 2 段階目のエンチャントレベルのみです。

<CodeHeader>BP/loot_tables/blocks/silver_ore.json > pools</CodeHeader>

```json
"conditions": [
    {
        "condition": "match_tool",
        ...
        "enchantments": [
            {
                "fortune": {
                    "level": 1
                }
            }
        ]
    }
]
```

## 経験値報酬スクリプト

鉱石ブロックが破壊されたときに経験値オーブを出すには、カスタムコンポーネントを使えます。ここでは [onPlayerBreak](/blocks/block-events#player-break) イベントフックを使います。ブロックが XP を出さないようにしたい場合、この手順は省略できます。

ルートテーブルと同様に、プレイヤーの手にあるアイテムを確認し、ブロックの位置にランダム数の経験値オーブを生成します。

<CodeHeader>BP/scripts/silver_ore.js</CodeHeader>

```js
import { system, EquipmentSlot } from "@minecraft/server";

/**
 * @param {number} min The minimum integer
 * @param {number} max The maximum integer
 * @returns {number} A random integer between the `min` and `max` parameters (inclusive)
 * */
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const BlockExperienceRewardComponent = {
    onPlayerBreak({ block, dimension, player }, { params }) {
        // Check the tool in the player's hand
        const equippable = player?.getComponent("minecraft:equippable");
        if (!equippable) return; // Exit if the player or its equipment are undefined

        const itemStack = equippable.getEquipment(EquipmentSlot.Mainhand);
        if (
            !itemStack ||
            !itemStack.hasTag("minecraft:is_tool") ||
            !itemStack.hasTag("minecraft:is_pickaxe") ||
            (!itemStack.hasTag("minecraft:iron_tier") &&
                !itemStack.hasTag("minecraft:diamond_tier") &&
                !itemStack.hasTag("minecraft:netherite_tier"))
        )
            return; // Exit if the player isn't holding a suitable pickaxe

        // Specify enchantments
        const enchantable = itemStack.getComponent("minecraft:enchantable");
        const silkTouch = enchantable?.getEnchantment("silk_touch");
        if (silkTouch) return; // Exit if the iron pickaxe has the Silk Touch enchantment

        // Spawn the XP orbs
        const xpAmount = randomInt(params.min, params.max); // Number of XP orbs to spawn

        for (let i = 0; i < xpAmount; i++) {
            dimension.spawnEntity("minecraft:xp_orb", block.location);
        }
    },
};

// Register a custom component before the world is loaded
system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "wiki:experience_reward",
        BlockExperienceRewardComponent
    );
});
```

## ブロック JSON

以下のブロック挙動はテンプレートとして使えます。`terrain_texture.json` を使ってブロックのテクスチャを設定するのを忘れないでください。

ここでは 2 つのことを行います。

-   `minecraft:loot` コンポーネントで新しいルートテーブルを指す。
-   ブロックの `components` に、経験値報酬のカスタムコンポーネントを追加する。

<CodeHeader>BP/blocks/silver_ore.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:silver_ore",
            "menu_category": {
                "category": "nature",
                "group": "minecraft:itemGroup.name.ore"
            }
        },
        "components": {
            "minecraft:loot": "loot_tables/blocks/silver_ore.json", // Won't be dropped if using Silk Touch.
            "wiki:experience_reward": {
                "min": 0,
                "max": 3
            }
        }
    }
}
```

## 結果

![](result.gif)
