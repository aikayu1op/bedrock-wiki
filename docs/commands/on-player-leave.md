---
title: プレイヤー退出時
category: On Event Systems
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 3
description: プレイヤーがワールドを退出したときに、指定したコマンドを実行するシステムです。
---

## はじめに

[Sourced by the Bedrock Commands Community Discord](https://bedrockcommands.org/)

このシステムは、プレイヤーがワールドを退出したときに、指定したコマンドを実行します。

> **注:** ターゲットセレクターを使って、退出した _プレイヤー_ に対してコマンドを実行することはできません。ただし、再参加したときにコマンドを実行するには、[プレイヤー参加時](/commands/on-player-join) システムを使えます。

## セットアップ

_チャットに次のコマンドを入力してください：_

`/scoreboard objectives add wiki:player_count dummy`

関数を使っていて、ワールド初期化時に目標を自動で追加したい場合は、[ワールドの初回読み込み時](/commands/on-first-world-load) に記載されている手順に従ってください。

## システム

<CodeHeader>BP/functions/wiki/event/players/on_leave.mcfunction</CodeHeader>

```yaml
## 現在のティックのプレイヤー数を取得
### スコアをリセット
scoreboard players reset .CurrentTick wiki:player_count
### スコアを集計
execute as @a run scoreboard players add .CurrentTick wiki:player_count 1

## 差分を取得（現在 - 前回）
scoreboard players operation .CurrentTick wiki:player_count -= .PreviousTick wiki:player_count

## ここにコマンドを入れます（例）
### 差が -1 以下ならメッセージを表示
execute if score .CurrentTick wiki:player_count matches ..-1 run say One or more players have left the world

## 次のゲームティックと比較するために現在のティックの人数を保存
### スコアをリセット
scoreboard players reset .PreviousTick wiki:player_count
### スコアを集計
execute as @a run scoreboard players add .PreviousTick wiki:player_count 1
```

![Chain of 6 Command Blocks](/assets/images/commands/command-block-chain/6.png)

ここでは例として `/say` コマンドを使っていますが、好きなコマンドを必要な数だけ使えます。

ただし、必ず示された順序を守り、目的のコマンドには `/execute if score` 条件を正しく適用してください。

## 解説

`.PreviousTick` のスコアはコマンドループの最後に更新されるため、次のゲームティックの冒頭で `.CurrentTick` のスコアと比較するのに使えます。

プレイヤー数は [Entity Counter](/commands/entity-counter) システムを使って取得します。このシステムをよりよく理解するには、そちらのページを読むことをおすすめします。

`.CurrentTick` のスコアから `.PreviousTick` のスコアを引くことで、プレイヤー数が次のどれに当てはまるかを判定できます。

-   減少した（`..-1`）
-   増加した（`1..`）
-   変化しなかった（`0`）

減少していれば、1 人以上のプレイヤーがゲームを退出したことを意味します。
これを使って、`.CurrentTick` が `-1` 以下のときにコマンドを実行できます。

-   例えば、10 人のプレイヤーがいて 1 人が退出した場合:

    -   `.CurrentTick - .PreviousTick = 9 - 10 = -1`
    -   これは `..-1` で検出できます

-   まず `.CurrentTick` を取得し、次に減算を行い、その結果に基づいてコマンドを実行します。最後に `.PreviousTick` を更新して、次のゲームティックで使えるようにします。

:::tip
コマンドブロックチェーンや関数内のすべてのコマンドは、数に関係なく、同じゲームティック内で順番に実行されます。このシステムが機能するのは、プレイヤーの参加・退出・死亡などのイベントがすべて発生したあと、ゲームティックの最後にコマンドが実行されるためです。

<WikiImage
    src="/assets/images/commands/intro-to-command-blocks/game-tick.png"
    alt="Game Tick"
    height=200
/>
:::

## Tick JSON

コマンドブロックの代わりに関数を使う場合は、`on_leave` 関数を `tick.json` に追加して継続実行させる必要があります。`tick.json` には各文字列の後ろにカンマを付けることで複数ファイルを追加できます。詳しくは [Functions](/commands/mcfunctions#tick-json) のドキュメントを参照してください。

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/event/players/on_leave"
  ]
}
```

関数を使う場合、パックのフォルダ構成は次のようになります。

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/functions/wiki',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki/event',
    'BP/functions/wiki/event/players',
    'BP/functions/wiki/event/players/on_leave.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>
