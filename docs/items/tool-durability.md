---
title: ツールの耐久値
category: Tutorials
tags:
    - experimental
    - intermediate
    - scripting
mentions:
    - MedicalJewel105
    - TheDoctor15
    - napstaa967
description: カスタムツールにバニラ風の耐久値を追加します。
hidden: true
---

## はじめに

1.21.10 以降のアイテムは、1.10 や 1.16 のアイテムとは耐久値の仕組みが異なります。
現在は、いつアイテムが耐久ダメージを受けるかと、その処理を行うイベントを定義する必要があります。
このページで扱う内容は次のとおりです。

-   耐久コンポーネント
-   耐久値を更新するイベント
-   エンティティにダメージを与える
-   ブロックを破壊する
-   `repair_amount` の値
-   `on_tool_used` イベント

### コンポーネント

<CodeHeader>BP/items/my_item.json#components</CodeHeader>

```json
"minecraft:durability": {
    "max_durability": 200
}
```

`minecraft:durability` は、アイテムに最大耐久値を設定します。

## イベント

### アイテムイベント

<CodeHeader>BP/items/my_item.json#events</CodeHeader>

```json
"durability_update": {
    "damage": {
        "type": "none",
        "amount": 1,
        "target": "self"
    }
}
```

このイベントが呼ばれると、アイテム（`self` 対象）が耐久ダメージを受けます。
簡単そうでしょう？

### スクリプトイベント

スクリプト方式では、アイテムにダメージを与える関数を使います。

この関数はアイテムの耐久力エンチャントに対応しています。

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
function damage_item(item) {
    // Get durability
    const durabilityComponent = item.getComponent("durability");
    var unbreaking = 0;
    // Get unbreaking level
    if (item.hasComponent("enchantments")) {
        unbreaking = item.getComponent("enchantments").enchantments.getEnchantment("unbreaking");
        if (!unbreaking) {
            unbreaking = 0;
        } else {
            unbreaking = unbreaking.level;
        }
    }
    // Apply damage
    if (durabilityComponent.damage == durabilityComponent.maxDurability) {
        return;
    }
    durabilityComponent.damage += Number(
        Math.round(Math.random() * 100) <= durabilityComponent.getDamageChance(unbreaking)
    );
    return item;
}
```

## エンティティにダメージを与える

### スクリプトを使用する

:::warning 実験用スクリプト

このスクリプトは `@minecraft/server 1.9.0-beta` を使用しますが、これは次の Minecraft アップデートで変更されます。
:::

形式バージョン 1.20.40 以降では、`on_hurt_entity` は動作しなくなりました。

これは、スクリプトを使って武器の耐久値を減らす方法です

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
// この配列にアイテム ID を追加します
const my_items = ["wiki:silver_dagger"];

world.afterEvents.entityHurt.subscribe((event) => {
    // ソースとなるエンティティがなければスキップします
    if (!event.damageSource.damagingEntity) return;

    // 装備中の武器を取得します
    const equipment = event.damageSource.damagingEntity.getComponent("minecraft:equippable");
    if (!equipment) return;
    const weapon = equipment.getEquipment(EquipmentSlot.Mainhand);

    // 武器がなければスキップします
    if (!weapon) return;

    // アイテムが対象の ID に含まれていなければスキップします
    if (!my_items.includes(weapon.typeId)) return;
    let newItem = damage_item(weapon);
    equipment.setEquipment(EquipmentSlot.Mainhand, newItem);
    if (!newItem) {
        if (event.damageSource.damagingEntity instanceof Player) {
            event.damageSource.damagingEntity.playSound("random.break");
        }
    }
});
```

### on_hurt_entity

:::warning

`on_hurt_entity` was removed in format version 1.20.40
:::

`on_hurt_entity` can be defined in "minecraft:weapon" component. It tells the game what event should happen when player hurts entity using this item.

<CodeHeader>BP/items/my_item.json#components</CodeHeader>

```json
"minecraft:weapon": {
    "on_hurt_entity": {
        "event": "durability_update"
    }
}
```

## ブロック破壊

### スクリプトを使用する

:::warning 実験用スクリプト

このスクリプトは `@minecraft/server 1.9.0-beta` を使用しますが、これは次の Minecraft アップデートで変更されます。
:::

形式バージョン 1.20.20 以降では、`on_dig` は動作しなくなりました。

これは、スクリプトを使って採掘用アイテムの耐久値を減らす方法です

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
// この配列にアイテム ID を追加します
const my_items = ["wiki:obsidian_pickaxe"];

world.afterEvents.playerBreakBlock.subscribe((event) => {
    // アイテムがなければスキップします
    if (!event.itemStackAfterBreak) return;
    // アイテムが対象の ID に含まれていなければスキップします
    if (!my_items.includes(event.itemStackAfterBreak.typeId)) return;

    // プレイヤーがクリエイティブならスキップします
    if (
        world
            .getPlayers({
                gameMode: GameMode.creative,
            })
            .includes(event.player)
    )
        return;
    const newItem = damage_item(event.itemStackAfterBreak);
    event.player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand, newItem);
    if (!newItem) {
        event.player.playSound("random.break");
    }
});
```

### on_dig

:::warning

`on_dig` was removed in format version 1.20.20
:::

`on_dig` can be defined in "minecraft:digger" component. It tells the game what event should happen when player dug a block using this item.

<CodeHeader>BP/items/my_item.json#components</CodeHeader>

```json
"minecraft:digger": {
    "use_efficiency": true,
    "destroy_speeds": [
        {
            "block": {
                "tags": "q.any_tag('wood')"
            },
            "speed": 8,
            "on_dig": {
                // wood タグを持つブロックが掘られたときに発生するイベントを定義します。
                "event": "durability_update"
            }
        }
    ],
    "on_dig": {
        // いずれかのブロックが破壊されたときに発生するイベントを定義します。
        "event": "durability_update"
    }
}
```

## repair_amount

`repair_amount` can be defined in "minecraft:repairable" component. It tells the game how much of the item's durability should be back when it was repaired.

<CodeHeader>BP/items/my_item.json#components</CodeHeader>

```json
"minecraft:repairable": {
    "repair_items": [
        {
            "repair_amount": "context.other->q.remaining_durability + 0.05 * context.other->q.max_durability",
            "items": [
                "bs:silver",
                "bs:silver_axe"
            ]
        }
    ]
}
```

式の説明:

`"context.other->q.remaining_durability + 0.05 * context.other->q.max_durability"`

最終的な耐久値は、1 本目の斧の耐久値 + 2 本目の斧の耐久値 + 2 本目の斧の最大耐久値の 5% になります。

## on_tool_used

（現在は動作しない可能性があります）
`on_tool_used` は、タグを使って呼び出せる特殊なイベントです。
タグは、エンティティに対する実行時識別子のようなものです。
既知のタグ:

| Tag                  | 効果           | 呼び出し方法                                           |
| -------------------- | -------------- | -------------------------------------------------- |
| minecraft:is_axe     | 原木の樹皮を剥ぐ | 斧が作用するブロックとやり取りするとき                 |
| minecraft:is_hoe     | 耕地にする     | クワが作用するブロックとやり取りするとき               |
| minecraft:is_pickaxe | 不明           | 不明                                                |
| minecraft:is_sword   | 不明           | 不明                                                |

これらのタグは次のように適用できます:

<CodeHeader>BP/items/my_item.json#components</CodeHeader>

```json
"tag:minecraft:is_axe": {}
```
