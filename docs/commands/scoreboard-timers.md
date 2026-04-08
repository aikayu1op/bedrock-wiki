---
title: スコアボードタイマー
category: Scoreboard Systems
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 5
description: スコアボードを使ってワールドタイマーやエンティティタイマーを作成します。
---

## はじめに

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

このシステムを使うと、目的のコマンドを正確な間隔で実行でき、必要に応じて遅延を自由に調整できます。

**例:**

-   2 時間ごとにチャットメッセージを送る。
-   10 分ごとに 'lag clear' 関数を実行する。
-   30 秒ごとにプレイヤーに 'speed' を付与する。

このシステムは、ワールド内で複数のタイマーを管理するときに特に便利です。コマンドブロックでは [Tick Delay](/commands/intro-to-command-blocks#command-block-tick-delay) を使ってコマンド実行を遅らせられますが、関数を使う場合はこのようなシステムが必要になります。

コマンドブロックを使う場合でも、このシステムを使うのがおすすめです。ワールドのタイマーをすべて同じ開始時刻で同期させたいときにも役立ちます。

## セットアップ

_チャットに次のコマンドを入力します。_

<CodeHeader></CodeHeader>

```yaml
/scoreboard objectives add wiki:ticks dummy
/scoreboard objectives add wiki:events dummy
```

これらの目標を作成したら、次は `ticks` 目標を使って各繰り返しイベントの間隔を定義します。

そのためには、まず Minecraft では 1 秒がおよそ 20 ゲームティックであることを知っておく必要があります。この知識をもとに、定義したい各間隔に対応するティック数を基本的な計算で求めます。

<CodeHeader></CodeHeader>

```yaml
# 2h = 20t × 60s × 60m × 2h = 144000t
/scoreboard players set .2h wiki:ticks 144000

# 10m = 20t × 60s × 10m = 12000t
/scoreboard players set .10m wiki:ticks 12000

# 30s = 20t × 30s = 600t
/scoreboard players set .30s wiki:ticks 600
```

スコアボードのデータを設定できたので、ここからは定義した間隔に基づいてタイマーを動かせます。

## システム

<CodeHeader>BP/functions/wiki/scoreboard/world_timer.mcfunction</CodeHeader>

```yaml
## ワールドタイマー / 時計
### Increment +1 tick
scoreboard players add .Timer wiki:ticks 1
### Apply current ticks passed to all events
scoreboard players operation * wiki:events = .Timer wiki:ticks

## チャットメッセージ（2 時間ごと）
scoreboard players operation .ChatMessage wiki:events %= .2h wiki:ticks
execute if score .ChatMessage wiki:events matches 0 run say Technoblade never dies!

## ラグクリア（10 分ごと）
scoreboard players operation .LagClear wiki:events %= .10m wiki:ticks
execute if score .LagClear wiki:events matches 0 run function clear_lag

## スピード効果（30 秒ごと）
scoreboard players operation .SpeedEffect wiki:events %= .30s wiki:ticks
execute if score .SpeedEffect wiki:events matches 0 run effect @a speed 10 2 true
```

![Chain of 8 Command Blocks](/assets/images/commands/command-block-chain/8.png)

ここでは実装例として 3 つ挙げていますが、好きなタイマーを必要な数だけ追加できます。

ただし、必ず示された順序を守り、目的のコマンドには `/execute if score` 条件を正しく適用してください。

## 解説

**`wiki:events`** — この目標では、ワールドで使いたい繰り返しイベントをすべてラベル付けします。

-   `.ChatMessage`
-   `.LagClear`
-   `.SpeedEffect`

_注: これら 3 つはすべて、その目標内のスコア保持者です。_

**`wiki:ticks`** — この目標では、イベントの間隔を定義し、スコアボードタイマーも動かします。

-   `.2h` interval (static score: 144000)
-   `.10m` interval (static score: 12000)
-   `.30s` interval (static score: 600)
-   `.Timer` clock (variable score: n+1)

_注: これら 4 つはすべて、その目標内のスコア保持者です。_

**コマンド 1:** このコマンドは、スコア保持者 `.Timer` に毎ティック +1 を加え、ゲーム内で 1 ティック経過したことを示します。これが、ワールド上のすべての繰り返しイベントに使うスコアボードタイマー / 時計です。

**コマンド 2:** ここでは、`*` ワイルドカードセレクターを使って `.Timer` のスコアをすべてのイベントにコピーします。これにより、各イベントの間隔に達したかどうかを判定できます。例:

-   `.Timer` のスコアが 1200 なら、1200 ゲームティックが経過したことを意味します。
-   このコマンドにより、すべてのイベントのスコア保持者（`.ChatMessage`、`.LagClear`、`.SpeedEffect`）のスコアも 1200 になります。

**コマンド 3:** `%=` の剰余演算を使い、イベントスコアが割り当てられた間隔で割り切れるかを確認します。つまり、余りが 0 かどうかを見ます。

-   Chat Message: `1200/144000`
    -   Q=0, R=1200 — _interval not reached._
-   Lag Clear: `1200/12000`
    -   Q=0, R=1200 — _interval not reached._
-   Speed Effect: `1200/600`
    -   Q=2, R=0 — _interval reached._
    -   Hence, commands for the `.SpeedEffect` event can be executed.

ここでは、`.ChatMessage` と `.LagClear` のイベントはまだ発生しておらず、`.SpeedEffect` のイベントは 2 回目の発生です。

注: Minecraft のスコアボード除算は切り捨てです。つまり、小数点以下は無視され、整数だけで計算されます。

**コマンド 4:** 計算で得られた余りを、対応するイベントのスコア保持者に適用します。これを使って、スコアが `0` のときにコマンドを実行できます。

残りのコマンドも同じ構造で、イベント名と間隔だけが変わります。

## 回数制限付きイベントの定義

イベントの発生回数を制限するには、`wiki:occurrences` という新しい目標を作成し、以下のようにそのイベントが何回起きるかを定義します。

<CodeHeader></CodeHeader>

```yaml
/scoreboard objectives add wiki:occurrences dummy
/scoreboard players set .ChatMessage wiki:occurrences 5
/scoreboard players set .SpeedEffect wiki:occurrences 10
```

それができたら、以下のようにシステムを修正します。

<CodeHeader>BP/functions/wiki/scoreboard/world_timer.mcfunction</CodeHeader>

```yaml
## ワールドタイマー / 時計
### +1 ティック加算
scoreboard players add .Timer wiki:ticks 1
### 現在の経過時間をすべてのイベントに適用
scoreboard players operation * wiki:events = .Timer wiki:ticks

## チャットメッセージ（10 分ごと）
scoreboard players operation .ChatMessage wiki:events %= .2h wiki:ticks
execute if score .ChatMessage wiki:events matches 0 if score .ChatMessage wiki:occurrences matches 1.. run say Technoblade never dies!
execute if score .ChatMessage wiki:events matches 0 if score .ChatMessage wiki:occurrences matches 1.. run scoreboard players remove .ChatMessage wiki:occurrences 1

## スピード効果（30 秒ごと）
scoreboard players operation .SpeedEffect wiki:events %= .30s wiki:ticks
execute if score .SpeedEffect wiki:events matches 0 if score .SpeedEffect wiki:occurrences matches 1.. run effect @a speed 10 2 true
execute if score .SpeedEffect wiki:events matches 0 if score .SpeedEffect wiki:occurrences matches 1.. run scoreboard players remove .SpeedEffect wiki:occurrences 1
```

![Chain of 8 Command Blocks](/assets/images/commands/command-block-chain/8.png)

## 間隔中にコマンドを実行する

イベントの間隔の間ずっとコマンドを継続実行したい場合は、以下の手法を使えます。

<CodeHeader></CodeHeader>

```yaml
## Speed Effect (every 30s) + Particle (every tick)
scoreboard players operation .SpeedEffect wiki:events %= .30s wiki:ticks
execute if score .SpeedEffect wiki:occurrences matches 1.. as @a at @s run particle minecraft:shulker_bullet ~~~
execute if score .SpeedEffect wiki:events matches 0 if score .SpeedEffect wiki:occurrences matches 1.. run effect @a speed 10 2 true
execute if score .SpeedEffect wiki:events matches 0 if score .SpeedEffect wiki:occurrences matches 1.. run scoreboard players remove .SpeedEffect wiki:occurrences 1
```

3 行目にあるように、タイマーが動いている間にコマンドを実行したいなら、`if score` のうち「すべての発生が終わったか」を確認する条件を外すだけです。その代わり、発生回数がまだ残っているかだけを確認します。

たとえば、このイベントの `wiki:occurrences` を `10` に設定したとします。その場合、30 秒のイベントを 10 回繰り返すので、合計 300 秒の粒子トレイルが表示されます。

## エンティティタイマー

エンティティのデスポーンイベントのような場合は、同期タイマーではイベントが早すぎるタイミングで発火してしまうことがあるため、各エンティティごとに別々のタイマーを動かす必要があります。そのようなときは Async Timer が役立ちます。

たとえば、次のような処理をしたいとします。

1. kill all entities named "wiki:station" 5 minutes after they've been summoned.
2. play a shulker particle around them during that timeframe.
3. play a flame particle around them in the first 10 seconds.
4. play a pling sound to nearby players when the timer reaches half way.
5. stop the timer if a passive mob is nearby.
6. loop the timer if a hostile mob is nearby.

<CodeHeader>BP/functions/wiki/scoreboard/players/entity_timer.mcfunction</CodeHeader>

```yaml
## タイマーを動かす
scoreboard players add @e[name="wiki:station",scores={wiki:ticks=0..}] wiki:ticks 1

# タイマー動作中にコマンドを実行
execute as @e[name="wiki:station",scores={wiki:ticks=0..}] at @s run particle minecraft:shulker_bullet ~~~

# ある期間内にコマンドを実行
execute as @e[name="wiki:station",scores={wiki:ticks=0..200}] at @s run particle minecraft:basic_flame_particle ~~~

# 正確な間隔でコマンドを実行
execute as @e[name="wiki:station",scores={wiki:ticks=3600}] at @s run playsound note.pling @a[r=10]

# タイマーを停止
execute as @e[name="wiki:station"] at @s if entity @e[family=pacified,r=10,c=1] run scoreboard players set @s ticks -1

# タイマーをループ
execute as @e[name="wiki:station",scores={wiki:ticks=6000}] at @s if entity @e[family=monster,r=10,c=1] run scoreboard players set @s ticks 0

# タイマー終了
kill @e[name="wiki:station",scores={wiki:ticks=6000}]
```

![Chain of 7 Command Blocks](/assets/images/commands/command-block-chain/7.png)

示したとおり、期間が終わったときにスコアを `0` にするとタイマーはループします。`-1` にすると停止 / 無効化できます。再度 `0` に設定すれば、また開始できます。
