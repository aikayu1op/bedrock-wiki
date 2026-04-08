---
title: Shared Constructs
description: JSON 構文はアドオンシステム内の複数の場所で使えます。
mentions:
    - Ciosciaa
    - ThomasOrs
    - QuazChick
---

JSON 構文は、アドオンシステム内の複数の場所で表現できます。

## ブロック記述子

ブロック記述子は、指定した条件に一致するブロックを判定するために使えます。
たとえば、ブロック記述子はブロックの [配置フィルター](/blocks/block-components#placement-filter) で、カスタムブロックがどの種類のブロック上に存続できるかを判定するために使われます。

### ブロックタイプ記述子

<CodeHeader>Block Descriptor</CodeHeader>

```json
{
    "name": "wiki:custom_block"
}
```

### ブロック状態記述子

<CodeHeader>Block Descriptor</CodeHeader>

```json
{
    "name": "wiki:custom_block",
    "states": {
        "wiki:custom_state": 5
    }
}
```

### ブロックタグ記述子

`q.all_tags()`{lang=molang} と `q.any_tag()`{lang=molang} のクエリ関数だけにアクセスできます。

<CodeHeader>Block Tags Descriptor</CodeHeader>

```json
{
    "tags": "q.any_tag('minecraft:is_axe_item_destructible', 'wiki:custom_tag')"
}
```

## アイテム記述子

アイテム記述子は、指定した条件に一致するアイテムを判定するために使えます。
たとえば、アイテム記述子はアイテムの [修復可能](/items/item-components#repairable) コンポーネントで、どの種類のアイテムを使ってそのアイテムを修復できるかを判定するために使われます。

### アイテムタイプ記述子

<CodeHeader>Item Descriptor</CodeHeader>

```json
{
    "name": "wiki:custom_item"
}
```

### アイテムタグ記述子

`q.all_tags()`{lang=molang} と `q.any_tag()`{lang=molang} のクエリ関数だけにアクセスできます。

<CodeHeader>Item Tags Descriptor</CodeHeader>

```json
{
    "tags": "q.any_tag('minecraft:is_axe', 'wiki:custom_tag')"
}
```

## 範囲オブジェクト

範囲オブジェクトは、2つの数値の間の幅を定義します。

<CodeHeader>Range Object Example</CodeHeader>

```json
{
    "min": 2,
    "max": 4
}
```

指定された場合、最小値と最大値の両端を含めた範囲からランダムな値が選ばれます。抽選結果は保持されず、範囲オブジェクトが使われるたびに新しい乱数が引かれます。最大値は最小値より小さくできませんが、同じ値にして固定値にすることはできます。

## 分数オブジェクト

分数オブジェクトは、分子と分母を使って分数を定義します。

<CodeHeader>Fraction Object Example</CodeHeader>

```json
{
    "numerator": 3,
    "denominator": 5
}
```

このオブジェクトの代わりに使われる値は、`numerator` ÷ `denominator` の計算結果です。分子と分母はどちらも少なくとも `1` である必要があり、分母を分子と同じ値にはできません。
