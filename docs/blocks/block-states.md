---
title: ブロックの状態
description: ブロックの状態を使うと、パーミュテーションを通じてそれぞれ固有の機能と見た目を持つバリアントを作れます。
category: General
nav_order: 4
related:
    - /blocks/block-traits
    - /blocks/block-permutations
license: true
mentions:
    - QuazChick
    - SmokeyStack
---

:::tip FORMAT VERSION 1.26.10
ブロック状態を扱うときは、パックの manifest にある `min_engine_version` が 1.20.20 以上であることを確認してください。
:::

ブロックの状態を使うと、[パーミュテーション](/blocks/block-permutations) によって、それぞれ固有の機能と見た目を持つバリアントを作れます。

## 状態の定義

有効な状態値は、真偽値、整数、文字列の配列として定義できます。また、オブジェクトを使って整数範囲として定義することもできます。値配列の最初の項目が既定値として使われます。

各状態に定義できる有効値は最大 16 個です。整数範囲の状態では、`max` は `min` より 15 以上大きくできません。

_format version [1.19.70](/blocks/block-format-history#_1-19-70) 以降が必要です。_

<CodeHeader>BP/blocks/custom_block.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_block",
            "states": {
                "wiki:string_state_example": ["red", "green", "blue"],
                "wiki:boolean_state_example": [false, true],
                "wiki:integer_state_example": [1, 2, 3],
                "wiki:integer_range_state_example": {
                    "values": { "min": 0, "max": 5 } // The same as [0, 1, 2, 3, 4, 5]
                }
            }
        },
        "components": { ... },
        "permutations": [ ... ]
    }
}
```

## 状態値の取得

各コンテキストでブロック状態の現在値を取得する方法を以下に示します。

### Molang クエリ関数

状態値は `q.block_state()`{lang=molang} クエリ関数で取得できます。

<CodeHeader>Molang Expression</CodeHeader>

```molang
q.block_state('wiki:string_state_example') == 'blue'
```

### コマンド引数

[block states argument](/commands/block-states) は `execute` や `testforblock` などのコマンドに含まれ、ブロック状態の値を確認するために使えます。

<CodeHeader>Command</CodeHeader>

```c
execute if block ~~~ wiki:custom_block["wiki:string_state_example"="blue", "wiki:integer_state_example"=4] run kill
```

### Script API

[`BlockPermutation.getState()`{lang=js}](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/blockpermutation#getstate) メソッドを使うと、さまざまな状態の現在値を取得できます。

<CodeHeader>Script</CodeHeader>

```js
customBlock.permutation.getState("wiki:integer_state_example") === 3;
```

## 状態値の設定

### コマンド引数

[block states argument](/commands/block-states) は `setblock` や `fill` などのコマンドに含まれ、状態を既定値から変更するために使えます。

<CodeHeader>Command</CodeHeader>

```c
setblock ~~~ wiki:custom_block["wiki:string_state_example"="blue", "wiki:integer_state_example"=4]
```

### Script API

[`BlockPermutation.withState()`{lang=js}](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/blockpermutation#withstate) メソッドは、指定した状態値を変更した新しいブロックパーミュテーションを返します。このパーミュテーションは、次のように [`Block.setPermutation()`{lang=js}](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/block#setpermutation) メソッドでブロックに適用できます。

<CodeHeader>Script</CodeHeader>

```js
customBlock.setPermutation(customBlock.permutation.withState("wiki:boolean_state_example", false));
```
