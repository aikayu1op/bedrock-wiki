---
title: 雨の検出
category: Detection Systems
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
description: コマンドを使って雨を検出します。
---

## はじめに

[Bedrock Commands Community (BCC) Discord が出典です](https://bedrockcommands.org/)

このシステムを使うと、オーバーワールドで雨が降り始めるたびにコマンドを自動実行できます。

:::warning 制限:
このシステムは、雨で火がすぐに消える仕組みに依存しています。そのため、正しく動作させるには **Fire Spread** のゲームルールを有効にしておく必要があります。
:::

## セットアップ

_次のコマンドをチャットで入力します。_

`/scoreboard objectives add wiki:q.is_raining dummy`

functions を使っていて、ワールド初期化時に自動で objective を追加したい場合は、[ワールドの初回読み込み時](/commands/on-first-world-load) に記載された手順に従ってください。

**手順:**
1. ティック範囲内、または常に読み込まれたままのチャンクにあるオーバーワールドの座標を選びます。
2. その座標の上に、空をふさぐブロックがないことを確認します。
3. プレイヤーが検出用ブロック（火）に干渉できないよう、周囲を保護します。

## システム

<CodeHeader>BP/functions/wiki/detect/weather/is_raining.mcfunction</CodeHeader>

```yaml
## State Machine
### If fire is gone and wasn't already raining, set to state 1 (Just Started)
execute unless block 0 0 0 fire unless score .Weather wiki:q.is_raining matches 2 run scoreboard players set .Weather wiki:q.is_raining 1
### If fire is still there, set to state 0 (Clear Weather)
execute if block 0 0 0 fire run scoreboard players set .Weather wiki:q.is_raining 0

## Maintain Fire
### Place new fire block at the coordinate to check next game tick
setblock 0 0 0 fire

## Your Commands Here (Examples):
### Runs every tick while it is raining
execute if score .Weather wiki:q.is_raining matches 1.. run title @a actionbar It is raining.
### Runs only once when the rain first starts
execute if score .Weather wiki:q.is_raining matches 1 run say It has started raining.
### Runs every tick when it is not raining
execute if score .Weather wiki:q.is_raining matches 0 run title @a actionbar It's not raining.

## Update State
### Move from state 1 to state 2 to stop the "once" command from looping
execute if score .Weather wiki:q.is_raining matches 1 run scoreboard players set .Weather wiki:q.is_raining 2
```

この同じ順序を守り、`execute if score .Weather wiki:q.is_raining matches` の構造を、目的のコマンドに合わせて正しく適用する必要があります。また、プレースホルダーの座標 `(0, 0, 0)` は、実際にワールドで使う検出座標に置き換えてください。

## フォルダ構成

functions を使う場合、ビヘイビアパックは次のように整理します。

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki',
    'BP/functions/wiki/main',
    'BP/functions/wiki/detect',
    'BP/functions/wiki/detect/weather',
    'BP/functions/wiki/detect/weather/is_raining.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

この構成では、`is_raining` 関数は `main.mcfunction` から呼び出され、`tick.json` を通じて毎ティック実行されます。
