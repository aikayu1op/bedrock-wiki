---
title: ブロックステート
category: General
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
    - SmokeyStack
    - ThomasOrs
description: コマンドでブロックステートを使う方法を学びます。
---

## はじめに

[Bedrock Commands Community (BCC) Discord が出典です](https://bedrockcommands.org/)

ブロックステートはブロックプロパティとも呼ばれ、向き、色、バリアント、電源状態など、ブロックの見た目や挙動を定義します。これらは `/clone`、`/execute`、`/fill`、`/setblock`、`/testforblock` などのコマンドで広く使われています。

1.19.70 より前の Bedrock Edition では、ブロック定義に Aux 値（メタデータ）を使っていました。しかし、この方法はブロックステートに置き換えられました。Aux 値は新しいエンジン版ではサポートされていません。

### 変換例

<CodeHeader></CodeHeader>

```yaml
# Aux 値の例:
/setblock ~ ~ ~ wool 1

# ブロックステートを使った同等の例:
/setblock ~ ~ ~ wool ["color"="orange"]
```

-   Aux 値を使うコマンドは、古いバージョンや `min_engine_version` が 1.19.63 以下に設定されたビヘイビアパックでは動作します。
-   `min_engine_version` を 1.19.70 以上に更新するには、ブロックステートへの移行が必要です。

## 構文と例

### 構文

-   ブロックステートは角括弧 (`[]`) で囲みます。
-   複数のステートはカンマ (`,`) で区切ります。
-   文字列には引用符 (`" "`) を付けます（例: `"birch"`, `"orange"`）。
-   整数 (`0`, `1` など) と真偽値 (`true`, `false`) には引用符を付けません。
-   空の角括弧 (`[]`) または括弧なしの場合は `0` が既定になります（例: `wool []` や単なる `wool` は白い羊毛を意味します）。

### 例

<CodeHeader></CodeHeader>

```yaml
/setblock ~ ~ ~ wool ["color"="white"]
/setblock ~ ~ ~ wheat ["growth"=0]
/setblock ~ ~ ~ wood ["wood_type"="birch","stripped_bit"=true]
/setblock ~ ~ ~ wool []
```

## 初心者向けの要点

1. **整数**: 範囲を定義するための整数値（例: レッドストーン強度を表す `["redstone_power"=10]`）。
2. **真偽値**: `true/false` の状態を表します（例: 剥いだ原木の `["stripped_bit"=true]`）。
3. **文字列**: あらかじめ決まったテキスト入力を表します（例: `["wood_type"="spruce"]`）。

## ブロックステートの参照

ブロックステートの包括的な一覧は次のページにあります。
[Block States List](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockstateslist)

-   **注**: サイト上で `camelCase` 形式で載っているブロックステートは、コマンドでは `snake_case` に変換する必要があります。
    -   例: `buttonPressedBit` → `"button_pressed_bit"`

## 変換ツール

_@SmokeyStack_ によるこの [Lookup Table](https://auxval-to-blockstates.netlify.app/) を使うと、Aux 値をブロックステートに変換できます。

## 既知の制限

ブロックを使うコマンドでは、対応するブロックステートをすべて指定するか、ブロックステート欄を空にする必要があります。必要なステートが 1 つでも欠けるとコマンドは失敗します。

### 例

<CodeHeader></CodeHeader>

```yaml
# Testing a Stone Button (Aux Value 0)
/execute if block ~~~ stone_button run say success

# Testing a non-pressed Stone Button facing west (Aux Value 1)
/execute if block ~~~ stone_button ["button_pressed_bit"=false,"facing_direction"=1] run say success
```

-   最初のコマンドが動くのは、ブロックステート欄が空だからです。
-   2つ目のコマンドが動くのは、関連するすべてのステート（`button_pressed_bit`、`facing_direction`）が指定されているからです。

> **注**: `facing_direction` のような他のステートを指定せずに、`["button_pressed_bit"=true]` のような部分条件だけを試すと失敗します。エンティティと違い、ブロックはまだ条件ベースのフィルタリングに対応していません。

### 関連バグ報告

-   [MCPE-133360](https://bugs.mojang.com/browse/MCPE-133360)
-   [MCPE-168391](https://bugs.mojang.com/browse/MCPE-168391)
