---
title: プレイヤー参加時
category: On Event Systems
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 2
description: プレイヤーがワールドに参加したときに、指定したコマンドを実行するシステムです。
---

## はじめに

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

このシステムは、プレイヤーがワールドに参加したときに、指定したコマンドを実行します。

## セットアップ

_次のコマンドをチャットで入力します。_

`/scoreboard objectives add wiki:joined dummy`

functions を使っていて、ワールド初期化時に objective を自動追加したい場合は、[ワールドの初回読み込み時](/commands/on-first-world-load) に記載された手順に従ってください。

## システム

<CodeHeader>BP/functions/wiki/event/players/on_join.mcfunction</CodeHeader>

```yaml
## 初参加または `wiki:joined` を以前消去されたプレイヤーを `wiki:joined` objective に登録する
scoreboard players add @a wiki:joined 0

## ここにコマンドを入れる（例）
tp @a[scores={wiki:joined=0}] 0 65 0

### プレイヤーを参加済みとして記録
### オンライン・オフライン両方のプレイヤーの `joined` スコアを消去
scoreboard players reset * wiki:joined
### オンラインのプレイヤーのスコアを 1 に設定
scoreboard players set @a wiki:joined 1
```

![Chain of 4 Command Blocks](/assets/images/commands/command-block-chain/4.png)

ここでは `/tp` コマンドを例として使っていますが、好きなコマンドを必要な数だけ使えます。

ただし、示された順序を守り、目的のコマンドに `scores={wiki:joined=0}` セレクター引数を正しく適用してください。

## 解説

プレイヤーが参加すると、その `wiki:joined` objective に `0` のスコアが追加されます。これにより、`scores` セレクター引数を使ってそのプレイヤーを対象にコマンドを実行できます。

コマンドを実行した直後に、ワイルドカード **`*`** を使ってその objective の全スコアをリセットします。すると、オンラインのままだったプレイヤーだけがスコア 1 に設定されます。

この方法では、コマンドはスコア 0 のプレイヤーだけを対象にするため、残ったプレイヤーには繰り返されません。再参加するか、次のコマンドを実行しない限りはそうです。

<br>`/scoreboard players set <player> joined 0`

これは、スコア 1 にスコア 0 を _加えても_ 変化しないからです。一方で、まだスコアを持たないプレイヤーにスコア 0 を加えると、そのスコアは 0 に設定されます。

## Tick JSON

コマンドブロックの代わりに functions を使う場合、`on_join` 関数を `tick.json` に追加して、ループさせて継続実行する必要があります。`tick.json` には文字列ごとにカンマを付ければ複数ファイルを追加できます。詳しくは [Functions](/commands/mcfunctions#tick-json) のドキュメントを参照してください。

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/event/players/on_join"
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
    'BP/functions/wiki/event/players/on_join.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>
