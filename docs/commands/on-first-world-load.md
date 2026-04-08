---
title: ワールドの初回読み込み時
category: On Event Systems
mentions:
    - BedrockCommands
    - zheaEvyline
    - SmokeyStack
    - cda94581
nav_order: 0
tags:
    - function
description: パック適用後、ワールドが初めて読み込まれたときに特定のコマンドを実行するシステムです。
---

## はじめに

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

このシステムを使うと、パックを適用したあと、ワールドが最初に読み込まれたときに特定のコマンドを実行できます。

> **注:** このシステムには [Function](/commands/mcfunctions) パックが必要です。`tick.json` ファイルは、ワールド初期化直後にロジックを起動するために必要です。

## Tick JSON

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/main"
  ]
}
````

## メイン MCFUNCTION

<CodeHeader>BP/functions/wiki/main.mcfunction</CodeHeader>

```yaml
# ON FIRST WORLD LOAD
## Execute Function if World Not Initialized
execute unless score .World wiki:q.is_initialised matches 1 run function wiki/event/worlds/on_initialise
```

## システム

<CodeHeader>BP/functions/wiki/event/worlds/on_initialise.mcfunction</CodeHeader>

```yaml
## ここにコマンドを入れます（例）
say World initialized! Pack loaded for the first time.

## Initialization
### 目標を追加
scoreboard objectives add wiki:q.is_initialised dummy
### 初期化済みとしてマーク
scoreboard players set .World wiki:q.is_initialised 1
```

目的のコマンドが実行されると、このシステムは `wiki:q.is_initialised` というスコアボード目標を作成します。この目標は、`.World` という特定のスコア保持者を使ってワールドの初期化状態を追跡します。`.World` のスコアをすぐに `1` に設定することで、初期化ロジックは「固定」され、その後のティックやワールド再読み込み時に再実行されなくなります。

## フォルダ構成

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/functions/wiki',
    'BP/functions/wiki/main.mcfunction',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki/event',
    'BP/functions/wiki/event/worlds',
    'BP/functions/wiki/event/worlds/on_initialise.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

この構成では、`on_initialise` 関数は `main.mcfunction` から呼び出され、`tick.json` を通じて毎ティック実行されます。
