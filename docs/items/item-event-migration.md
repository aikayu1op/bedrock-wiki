---
title: アイテムイベントの移行
description: 廃止された JSON のアイテムイベント応答を、Script API でどう実装するかを確認します。
category: General
nav_order: 5
tags:
    - help
license: true
mentions:
    - QuazChick
---

:::tip 始める前に
このページでは、基本的な JavaScript に慣れていることと、現行の [item events](/items/item-events) の仕組みを理解していることが前提です。
:::

アイテムの JSON イベントを [custom components](/items/item-events#registering-custom-components) に移行するのに苦労していませんか。
心配はいりません。このページでは、廃止された JSON のイベント応答が Script API でどのように実装されるかを理解できるようにします。

## Mob 効果の追加

<CodeHeader>Custom Component</CodeHeader>

```js
onHitEntity({ hitEntity }) {
    hitEntity.addEffect("regeneration", 30, {
        amplifier: 10,
        showParticles: false
    });
}
```

## ダメージ（保持者）

```js
import { EntityDamageCause } from "@minecraft/server";
```

<CodeHeader>Custom Component</CodeHeader>

```js
onUse({ source }) {
    source.applyDamage(2, {
        cause: EntityDamageCause.drowning
    });
}
```

## ダメージ（アイテム）

```js
import { EquipmentSlot, GameMode, Player } from "@minecraft/server";
```

<CodeHeader>Custom Component</CodeHeader>

```js
onMineBlock({ source }) {
    // Get main hand slot
    if (!(source instanceof Player)) return;

    const equippable = source.getComponent("minecraft:equippable");
    if (!equippable) return;

    const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
    if (!mainhand.hasItem()) return;

    // Apply durability damage when not in creative mode
    if (source.getGameMode() === GameMode.Creative) return;

    const itemStack = mainhand.getItem(); // Allows us to get item components

    const durability = itemStack.getComponent("minecraft:durability");
    if (!durability) return;

    // Factor in unbreaking enchantment
    const enchantable = itemStack.getComponent("minecraft:enchantable");
    const unbreakingLevel = enchantable?.getEnchantment("unbreaking")?.level;

    const damageChance = durability.getDamageChance(unbreakingLevel) / 100;

    if (Math.random() > damageChance) return; // Randomly skip damage based on unbreaking level

    // Damage the item
    const shouldBreak = durability.damage === durability.maxDurability;

    if (shouldBreak) {
        mainhand.setItem(undefined); // Remove the item
        source.playSound("random.break"); // Play break sound
    } else {
        durability.damage++; // Increase durability damage
        mainhand.setItem(itemStack); // Update item in main hand
    }
}
```

## スタック数を減らす

```js
import { EquipmentSlot, GameMode } from "@minecraft/server";
```

<CodeHeader>Custom Component</CodeHeader>

```js
onUse({ source }) {
    if (!source) return;

    const equippable = source.getComponent("minecraft:equippable");
    if (!equippable) return;

    const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
    if (!mainhand.hasItem()) return;

    if (source.getGameMode() !== GameMode.Creative) {
        if (mainhand.amount > 1) {
            mainhand.amount--; // Remove one item from the stack
        } else {
            mainhand.setItem(undefined); // Remove the item stack
        }
    }
}
```

## Mob 効果の削除

<CodeHeader>Custom Component</CodeHeader>

```js
onHitEntity({ hitEntity }) {
    hitEntity.removeEffect("regeneration");
}
```

## コマンド実行

<CodeHeader>Custom Component</CodeHeader>

```js
onUse({ source }) {
    source.runCommand("say Hello there!")
    source.runCommand("say Welcome to my world!")
}
```

## テレポート

<CodeHeader>Custom Component</CodeHeader>

```js
onConsume({ source }) {
    source.teleport({ x: 100, y: 20, z: 786 });
}
```

## アイテムの変換

```js
import { EquipmentSlot, ItemStack } from "@minecraft/server";
```

<CodeHeader>Custom Component</CodeHeader>

```js
onUse({ source }) {
    const equippable = source?.getComponent("minecraft:equippable");
    if (!equippable) return;

    const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);

    mainhand.setItem(new ItemStack("minecraft:suspicious_stew"));
}
```
