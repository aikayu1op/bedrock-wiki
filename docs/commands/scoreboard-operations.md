---
title: スコアボードの操作
category: General
tags:
    - easy
mentions:
    - Sprunkles137
    - Lufurrius
    - MedicalJewel105
    - Hatchibombotar
description: スコアボードを使うと、Molang のような複雑な演算を行えます。演算には数学的なものと論理的なものの 2 種類があります。
---

スコアボードを使うと、[Molang](/concepts/molang) のような複雑な演算を行えます。演算には数学的なものと論理的なものの 2 種類があります。

## 概要

Operations are performed using the `/scoreboard players operation` command. The full syntax is laid out below:

```yaml
/scoreboard players operation <targetScore> <objective> <operation> <sourceScore> <objective>
```

このコマンドは 2 つのスコア保持者で構成されます。ターゲットスコアとソーススコアです。ターゲットスコアは操作対象の値、ソーススコアは操作に影響する値です。演算結果はターゲットスコアに書き込まれ、ソーススコアの値は [1 つの演算](/commands/scoreboard-operations#swap-operator) を除いて変更されません。

## 数学演算子

数学演算子は、算術を使ってターゲットスコアに作用します。利用できる数学演算は 5 つあります。加算、減算、乗算、切り捨て除算、切り捨て剰余です。

For each of the following examples below, assume that score holder `.A wiki:var` equals 25, and `.B wiki:var` equals 10.

### 加算

Operator: **+=**

この演算はターゲットスコアとソーススコアを足し合わせ、その合計をターゲットスコアに保存します。

```yaml
/scoreboard players operation .A wiki:var += .B wiki:var
```

`.A = .A + .B`, and as such `25 + 10 = 35`.

### 減算

Operator: **-=**

この演算はターゲットスコアからソーススコアを引き、その差をターゲットスコアに保存します。

```yaml
/scoreboard players operation .A wiki:var -= .B wiki:var
```

`.A = .A - .B`, and as such `25 - 10 = 15`.

### 乗算

Operator: **\*=**

この演算はターゲットスコアにソーススコアを掛け、その積をターゲットスコアに保存します。

```yaml
/scoreboard players operation .A wiki:var *= .B wiki:var
```

`.A = .A * .B`, and as such `25 * 10 = 250`.

### 切り捨て除算

Operator: **/=**

この演算はターゲットスコアをソーススコアで割り、その商をターゲットスコアに保存します。スコア値は整数しか扱えないため、値は切り捨てられます。

```yaml
/scoreboard players operation .A wiki:var /= .B wiki:var
```

`.A = floor(.A / .B)`, and as such `floor(25 / 10) = 2`.

### 切り捨て剰余

Operator: **%=**

この演算もターゲットスコアをソーススコアで割りますが、割り算の余りをターゲットスコアに保存します。これも切り捨てです。

```yaml
/scoreboard players operation .A wiki:var %= .B wiki:var
```

`.A = floor(mod(.A, .B))`, and as such `floor(mod(25, 10)) = 5`.

## 論理演算子

論理演算は、論理ゲートと代入を使ってターゲットスコアに作用します。利用できる論理演算は 4 つあります。代入、小なり、大なり、入れ替えです。

Similar to the above, assume that score holder `.A wiki:var` equals 25, and `.B wiki:var` equals 10.

### 代入演算子

Operator: **=**

この演算はターゲットスコアをソーススコアと同じ値にします。

```yaml
/scoreboard players operation .A wiki:var = .B wiki:var
```

`.A = .B`, and as such the result is `10`.

### 最小演算子

Operator: **<**

この演算は入力スコアのうち最小のものを返し、ターゲットスコアに保存します。

```yaml
/scoreboard players operation .A wiki:var < .B wiki:var
```

`.A = min(.A, .B)`, and as such `min(25, 10) = 10`.

### 最大演算子

Operator: **>**

この演算は入力スコアのうち最大のものを返し、ターゲットスコアに保存します。

```yaml
/scoreboard players operation .A wiki:var > .B wiki:var
```

`.A = max(.A, .B)`, and as such `max(25, 10) = 25`.

### 入れ替え演算子

Operator: **><**

この演算はターゲットスコアとソーススコアを入れ替えます。ソーススコアに影響するのはこの演算だけです。

```yaml
/scoreboard players operation .A wiki:var >< .B wiki:var
```

上のコマンドは、たとえば `.A` と `.B` の値を入れ替えます。

Before: .A = 10; .B = 25;

After: .A = 25; .B = 10;

これは `.Temp = .A; .A = .B; .B = .Temp;` の 3 つの操作と考えられるため、`.A wiki:var = 10`、`.B wiki:var = 25` になります。

## 便利な作成例

#### 値が等しいか確認する

スコアボードで 1 つの値が別の値と等しいかを確認したい場合は、次のコマンドを使えます。

<CodeHeader></CodeHeader>

```yaml
scoreboard objectives add wiki:temp dummy
execute if score .Steve wiki:temp = .Alex wiki:temp run say Steve's score matches Alex's score.
```

#### スコアボードの初期化

スコアボードの値を 0 に初期化したいが、まだ存在しない場合にだけ行いたいなら、`scoreboard players add <score holder> <objective> 0` を使えます。対象に値がなければ 0 を設定し、すでに存在する場合は何もしません。
