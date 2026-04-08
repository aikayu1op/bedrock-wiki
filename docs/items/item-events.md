---
title: アイテムイベント
description: アイテムイベントは、特定の条件を満たすと発生します。作成者はこれらのイベントに処理を組み込み、イベント発生時にゲーム世界を変更できます。
category: General
nav_order: 4
tags:
    - scripting
license: true
mentions:
    - SmokeyStack
    - QuazChick
---

:::tip フォーマットバージョン 1.26.10
カスタムアイテムを作成する際に最新のフォーマットバージョンを使うと、新しい機能や改善を利用できます。wiki ではカスタムアイテムに関する最新情報を共有することを目指しており、現在はフォーマットバージョン 1.26.10 を対象にしています。
:::

## カスタムコンポーネントの登録

アイテムイベントは、特定の条件を満たすと発生し、ワールドが読み込まれる前にスクリプトで登録した **カスタムコンポーネント** で「受け取る」ことができます。

各カスタムコンポーネントでは、[`onBeforeDurabilityDamage`](#before-durability-damage) のようなイベントハンドラー関数を定義して、各イベントが発生したときに何を起こすかを設定します。

_この例では、アイテムがエンティティに当たったときに耐久値ダメージを受けないようにしています。_

<CodeHeader>BP/scripts/unbreakable.js</CodeHeader>

```js
import { system } from "@minecraft/server"; // Must be version 2.0.0 or higher

/** @type {import("@minecraft/server").ItemCustomComponent} */
const ItemUnbreakableComponent = {
    onBeforeDurabilityDamage(event) {
        event.durabilityDamage = 0;
    },
};

system.beforeEvents.startup.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent("wiki:unbreakable", ItemUnbreakableComponent);
});
```

## カスタムコンポーネントの適用

カスタムコンポーネントをアイテムに紐づけるには、アイテム JSON の `components` にそのまま記述します。

_フォーマットバージョン [1.21.90](/items/item-format-history#_1-21-90) 以降が必要です。_

<CodeHeader>minecraft:item</CodeHeader>

```json
"components": {
    "wiki:unbreakable": {}
}
```

## イベント一覧

### 耐久ダメージ前

このイベントは、このコンポーネントを持つアイテムがエンティティに当たり、耐久値ダメージを受けようとしたときに呼び出されます。

<CodeHeader>Custom Component</CodeHeader>

```js
onBeforeDurabilityDamage(event) {
    event.attackingEntity // The attacking entity.
    event.durabilityDamage // The damage applied to the item's durability when the event occurs.
    event.hitEntity // The entity being hit.
    event.itemStack // The item stack used to hit the entity.
}
```

### 使用完了

:::tip 依存関係
使用完了イベントを発生させるには、アイテムで [`minecraft:use_modifiers`](/items/item-components#use-modifiers) コンポーネントが有効になっている必要があります。
:::

このイベントは、このコンポーネントを持つアイテムの使用時間が完了したときに呼び出されます。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:use_modifiers": {
    "use_duration": 5
}
```

<CodeHeader>Custom Component</CodeHeader>

```js
onCompleteUse(event) {
    event.itemStack // Returns the item stack that has completed charging.
    event.source // Returns the source entity that triggered this item event.
}
```

### 消費

このイベントは、このコンポーネントを持つアイテムがエンティティに食べられたときに呼び出されます。

:::tip 依存関係
使用完了イベントを発生させるには、アイテムで [`minecraft:use_modifiers`](/items/item-components#use-modifiers) と [`minecraft:food`](/items/item-components#food) コンポーネントが有効になっている必要があります。
:::

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:food": {},
"minecraft:use_modifiers": {
    "use_duration": 5
}
```

<CodeHeader>Custom Component</CodeHeader>

```js
onConsume(event) {
    event.itemStack // The item stack that was consumed.
    event.source // The source entity that consumed the item.
}
```

### エンティティに命中

この関数は、このコンポーネントを持つアイテムで別のエンティティを攻撃したときに呼び出されます。

<CodeHeader>Custom Component</CodeHeader>

```js
onHitEntity(event) {
    event.attackingEntity // The attacking entity.
    event.hadEffect // Whether the hit landed or had any effect.
    event.hitEntity // The entity being hit.
    event.itemStack // The item stack used to hit the entity.
}
```

### ブロック採掘

この関数は、このコンポーネントを持つアイテムでブロックを採掘したときに呼び出されます。

<CodeHeader>Custom Component</CodeHeader>

```js
onMineBlock(event) {
    event.block // The block impacted by this event.
    event.itemStack // The item stack used to mine the block.
    event.minedBlockPermutation // The block permutation that was mined.
    event.source // The entity that mined the block.
}
```

### 使用

この関数は、このコンポーネントを持つアイテムがプレイヤーに使われたときに呼び出されます。

<CodeHeader>Custom Component</CodeHeader>

```js
onUse(event) {
    event.itemStack // The item stack when the item was used.
    event.source // The player who used the item.
}
```

### ブロックに使用

この関数は、このコンポーネントを持つアイテムがブロックに使われたときに呼び出されます。

<CodeHeader>Custom Component</CodeHeader>

```js
onUseOn(event) {
    event.source // The entity that used the item on the block.
    event.usedOnBlockPermutation // The block permutation that the item was used on.
}
```
