---
title: プレイヤー死亡時
category: On Event Systems
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 4
description: プレイヤーが死亡したときに、目的のコマンドを実行するシステムです。
---

## はじめに

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

このシステムは、プレイヤーが死亡したときに目的のコマンドを実行します。

## セットアップ

_チャットに次のコマンドを入力してください：_

`/scoreboard objectives add wiki:q.is_alive dummy`

functions を使っていて、ワールド初期化時に目標を自動で追加したい場合は、[ワールドの初回読み込み時](/commands/on-first-world-load) に記載されている手順に従ってください。

## システム

<CodeHeader>BP/functions/wiki/events/player/on_death.mcfunction</CodeHeader>

```yaml
## 状態マシン
### まだ設定されていない場合、すべてのプレイヤー (@a) を「死亡」（状態 0）としてマーク
scoreboard players set @a[scores={wiki:q.is_alive=!-1}] wiki:q.is_alive 0
### すべての生存プレイヤー (@e[type=player]) を「生存」（状態 1）としてマーク
scoreboard players set @e[type=player] wiki:q.is_alive 1

## ここにコマンドを入れます（例）:
### プレイヤーが「死亡」状態に入ったときに 1 回だけ実行
execute as @a[scores={wiki:q.is_alive=0}] run say I died
### プレイヤーが死亡後、毎ティック実行
execute as @a[scores={wiki:q.is_alive=..0}] at @s run particle minecraft:soul_particle ~~~

## 状態を更新
### 1 回だけ実行するコマンドがループしないよう、死亡プレイヤーの状態 0 を -1 に移す
scoreboard players set @a[scores={wiki:q.is_alive=0}] wiki:q.is_alive -1
```

![Chain of 5 Command Blocks](/assets/images/commands/command-block-chain/4.png)

ここでは例として `/execute - say` コマンドを使っていますが、好きなコマンドを必要な数だけ使えます。

ただし、必ず示された順序を守り、目的のコマンドには `scores={wiki:q.is_alive=0}` セレクター引数を正しく適用してください。

## 解説

-   **`wiki:q.is_alive=0`** プレイヤーは _生存していない_（死亡）。
-   **`wiki:q.is_alive=1`** プレイヤーは生存中。
-   **`wiki:q.is_alive=2`** プレイヤーは死亡しており、目的のコマンドはすでに実行済みです。

**各コマンドの役割:**

1. **コマンド 1:** すべてのプレイヤーを既定で _生存していない_（0）としてマークします。
    - スコア `2` は無視します。そうしないと、プレイヤー死亡時に実行したいコマンドが複数回発火してしまいます。
2. **コマンド 2:** すべての生存プレイヤーを「生存」（1）としてマークします。
    - `@e` セレクターは生存中のプレイヤーだけを対象にできます。
    - `@a` セレクターは、生死を問わずすべてのプレイヤーを対象にします。
3. **コマンド 3:** 生存プレイヤーが 1、非生存プレイヤーが 0 になったので、この情報を使って、プレイヤーが死亡（0）したときに目的のコマンドを実行します。
4. **コマンド 4:** プレイヤーが死んだときに目的のコマンドを 1 回だけ実行したいので、スコアを `2` に設定します。これをしないと、リスポーンするまでコマンドが繰り返されます。

## Tick JSON

コマンドブロックの代わりに関数を使う場合は、`on_death` 関数を `tick.json` に追加して、ループさせながら継続実行させる必要があります。`tick.json` には各文字列の後ろにカンマを付けることで複数ファイルを追加できます。詳しくは [Functions](/commands/mcfunctions#tick-json) のドキュメントを参照してください。

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/event/players/on_death"
  ]
}
```

functions を使う場合、パックのフォルダ構成は次のようになります。

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/functions/wiki',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki/event',
    'BP/functions/wiki/event/players',
    'BP/functions/wiki/event/players/on_death.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

## 代替手段

この方法は、Minecraft `1.19.50` で新しい `/execute` 構文が導入されたあとに可能になりました。

:::warning 既知の問題:
2 人以上のプレイヤーが同じ地点にテレポートされ、そのうち 1 人が死亡しても残りのプレイヤーが動かない場合、このシステムはコマンドの実行に失敗します。
:::

-   `wiki:q.is_dead` のスコアボード目標を追加してください:
    -   `/scoreboard objectives add wiki:q.is_dead dummy`

<CodeHeader>BP/functions/detect/player/is_dead.mcfunction</CodeHeader>

```yaml
## プレイヤーの状態を設定
### 死亡していない
scoreboard players set @e[type=player] wiki:q.is_dead 0
### 死亡
execute as @a at @s unless entity @e[type=player,r=0.01] run scoreboard players add @s wiki:q.is_dead 1

## ここにコマンドを入れます（例）
### 死亡地点にアーマースタンドを召喚
execute as @a[scores={wiki:q.is_dead=1}] at @s run summon armor_stand "Corpse" ~~~
### チャットに死亡メッセージを表示
execute as @a[scores={wiki:q.is_dead=1..}] run say I died and haven't respawned yet..
```

![Chain of Four Command Blocks](/assets/images/commands/command-block-chain/4.png)

**状態:**

-   **`wiki:q.is_dead=0`** プレイヤーは _死亡していない_（生存中）。
-   **`wiki:q.is_dead=1`** プレイヤーがちょうど死亡した状態です（「トリガー」用）。
-   **`wiki:q.is_dead=1..`** プレイヤーはまだ死亡中です（繰り返し用）。

**各コマンドの役割:**

1. **コマンド 1:** すべての生存プレイヤーを _死亡していない_（0）としてマークします。
2. **コマンド 2:** プレイヤーの 0.01 ブロック以内に生存プレイヤーがいなければ、そのプレイヤーを死亡（1）としてマークします。
    - このロジックは、そのような小さい半径の中に入れるのは本人だけだという前提に基づきます。`/tp` コマンドなしで 2 人以上のプレイヤーがまったく同じ位置に立つ確率はほぼ 0 です。
3. **コマンド 3, 4:** これらは状態ごとの例のコマンドで、変更・拡張できます。
