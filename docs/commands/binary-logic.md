---
title: コマンドにおける二進数
category: Techniques
mentions:
    - BedrockCommands
    - OneRat240
nav_order: 4
tags:
    - concept
description: 二進数を活用してコマンドを最適化し、大規模なデータを扱う方法を学びます。
---

## はじめに

**二進数**（Base-2）は、`0`（Off/False）と `1`（On/True）の2つの状態だけで任意の整数を表現できる数体系です。

人間は通常 10 進数（0〜9）を使いますが、コンピューターは複雑な処理を行うために二進数を使います。コマンドの世界でも、まとめ売りや座標検出のような処理に応用でき、直列的な方法よりもはるかに少ないコマンドで済みます。

## 二進数の仕組み

二進数では、各桁を **bit** と呼びます。各 bit の位置は 2 の累乗を表し、右から左へ向かって値が大きくなります。

| Bit Position | Power | Value |
| :--- | :--- | :--- |
| 1st (Rightmost) | `2^0` | **1** |
| 2nd | `2^1` | **2** |
| 3rd | `2^2` | **4** |
| 4th | `2^3` | **8** |
| 5th | `2^4` | **16** |

### 変換例

二進数 `1101` を通常の数に変換するには、`1` が立っている桁の値を足し合わせます。

- **1** は 8 の位 (`2^3`)
- **1** は 4 の位 (`2^2`)
- **0** は 2 の位 (`2^1`)
- **1** は 1 の位 (`2^0`)

`8 + 4 + 0 + 1 = 13`

## Bedrock コマンドでの実装

コマンドで二進数を使う最大の利点は **最適化** です。プレイヤーが 1 個から 64 個までのアイテムを持っているかを確認するのに 64 個のコマンドを走らせる代わりに、**7 つの二進ステップ**（$2^0$ から $2^6$）だけで済みます。

### 例: 二進数ショップシステム
このシステムはプレイヤーのインベントリからアイテムを取り除き、スコアボード通貨を付与します。最初に可能な最大の 2 の累乗を確認することで、どんなスタック数でも効率よく「分解」できます。

<CodeHeader></CodeHeader>

```yaml
## 64 を確認 (2^6)
execute as @a[hasitem={item=bread,quantity=64..}] run scoreboard players add @s wiki:money 64
execute as @a[hasitem={item=bread,quantity=64..}] run clear @s bread 0 64

## 32 を確認 (2^5)
execute as @a[hasitem={item=bread,quantity=32..}] run scoreboard players add @s wiki:money 32
execute as @a[hasitem={item=bread,quantity=32..}] run clear @s bread 0 32

## 16 を確認 (2^4)
execute as @a[hasitem={item=bread,quantity=16..}] run scoreboard players add @s wiki:money 16
execute as @a[hasitem={item=bread,quantity=16..}] run clear @s bread 0 16

## 8 を確認 (2^3)
execute as @a[hasitem={item=bread,quantity=8..}] run scoreboard players add @s wiki:money 8
execute as @a[hasitem={item=bread,quantity=8..}] run clear @s bread 0 8

## 4 を確認 (2^2)
execute as @a[hasitem={item=bread,quantity=4..}] run scoreboard players add @s wiki:money 4
execute as @a[hasitem={item=bread,quantity=4..}] run clear @s bread 0 4

## 2 を確認 (2^1)
execute as @a[hasitem={item=bread,quantity=2..}] run scoreboard players add @s wiki:money 2
execute as @a[hasitem={item=bread,quantity=2..}] run clear @s bread 0 2

## 1 を確認 (2^0)
execute as @a[hasitem={item=bread,quantity=1..}] run scoreboard players add @s wiki:money 1
execute as @a[hasitem={item=bread,quantity=1..}] run clear @s bread 0 1
```

![Chain of 14 Command Blocks](/assets/images/commands/command-block-chain/14.png)

> [!TIP]
> **なぜ使うのか?** プレイヤーがパンを 50 個持っている場合、このシステムは 32、16、2 の順で消費します（$32+16+2=50$）。この処理は成功判定 3 回で済みますが、直列方式なら 50 回必要になります。

## 応用例

### 座標をスコアとして取得する

プレイヤーの正確な X、Y、Z 座標を検出するには、**二分探索木** を使います。考えられる座標をすべて調べるのではなく、一連の `execute` コマンドで固定点から見た位置を絞り込みます。

プレイヤーが 32,768 ブロック、次に 16,384 ブロック、その次は ... と 1 ブロックまでの範囲内にいるかを確認していけば、**16 ステップ** だけでワールド全体の正確な位置を特定できます。これは、空間データを計算やテレポートに使えるスコアボード整数へ変換する最も高効率な方法です。

### MEF での実装

**[Multiplicative Execution Forking (MEF)](/commands/execution-forking)** に二分木を組み込めば、村やバックルームのような複雑な形状、地形、カスタム生成を **1つのコマンドだけで** 作れます。
