---
title: エンティティカウンター
category: Scoreboard Systems
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 3
description: ワールド内のプレイヤーやエンティティの総数を追跡し、その値に応じて目的のコマンドを実行できるシステムです。
---

## はじめに

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

このシステムを使うと、ワールド内のプレイヤーやエンティティの総数を追跡し、その値に応じて目的のコマンドを実行できます。

> 注: 読み込まれていないチャンク内のエンティティは追跡されません。ただし、プレイヤーは常に追跡できます。

## セットアップ

_チャットに次のコマンドを入力してください：_

`/scoreboard objectives add wiki:count dummy`

functions を使っていて、ワールド初期化時に目標を自動で追加したい場合は、[ワールドの初回読み込み時](/commands/on-first-world-load) に記載されている手順に従ってください。

## システム

<CodeHeader>BP/functions/wiki/scoreboard/players/tally_count.mcfunction</CodeHeader>

```yaml
## 前回のカウントをリセット
scoreboard players set * wiki:count 0

## 現在のカウントを取得（例）
### 生存しているプレイヤー
execute as @e[type=player] run scoreboard players add .Players.Alive wiki:count 1
### クリーパー
execute as @e[type=creeper] run scoreboard players add .Creeper wiki:count 1

## ここにコマンドを入れます（例）
### 生存プレイヤーが 4 人以上ならメッセージを表示
execute if score .Players.Alive wiki:count matches 4.. run title @a actionbar There are more than 4 players on the world.
### クリーパーが 3 匹以下ならメッセージを表示
execute if score .Creeper wiki:count matches ..3 run title @a actionbar There are less than 3 creeper on the world.
```

![Chain of 5 Command Blocks](/assets/images/commands/command-block-chain/5.png)

ここでは例として生存プレイヤーとクリーパーを追跡していますが、好きなエンティティを必要な数だけ追跡できます。スコア保持者名も自由に変更できます。たとえば `.Players.Alive` を単に `Players` にすることもできます。

同様に、ここでは `/title` コマンドを例として実行しています。

-   a) when there are 4 or more players `4..`
-   b) when there are 3 .Creeper or less `..3`

これらも変更・拡張できます。たとえば `/title` の代わりに `/kill` を使うこともできます。

## 解説

1. **コマンド 1:** `wiki:count` のスコアボード目標にあるすべてのスコア保持者名を `0` に設定します。追跡対象のプレイヤーやエンティティも含まれます。
2. **コマンド 2, 3:** カウントしたい各対象について、その対応するスコア保持者名にスコアを加算します。こうして総数を取得します。
    - 例: クリーパーモブを `.Creeper` のスコア保持者名に対応させる。
3. **コマンド 4, 5:** これらは変更・拡張できる例のコマンドです。
    - 取得した総数に基づいて、`/execute if score` 条件を使い、特定の値になったときに目的のコマンドを実行できます。
        - **`n`** 任意の数 `n`
        - **`n..`** `n` 以上の任意の数
        - **`..n`** `n` 以下の任意の数
        - **`n..n1`** `n` から `n1` までの任意の数（小さい数を先に書く）

:::info 注:
複数の目標にまたがる多数のスコア保持者を扱う場合は、パフォーマンス向上のため、ワイルドカード (`*`) を使うよりも、各スコア保持者ごとに前回のスコアを 0 にリセットすることをおすすめします。
:::

## Tick JSON

コマンドブロックの代わりに関数を使う場合は、`tally_count` 関数を `tick.json` に追加して、ループさせながら継続実行させる必要があります。`tick.json` には各文字列の後ろにカンマを付けることで複数ファイルを追加できます。詳しくは [Functions](/commands/mcfunctions#tick-json) のドキュメントを参照してください。

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/scoreboard/players/tally_count"
  ]
}
```

functions を使う場合、パックのフォルダ構成は次のようになります。

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki',
    'BP/functions/wiki/main.mcfunction',
    'BP/functions/wiki/scoreboard',
    'BP/functions/wiki/scoreboard/players',
    'BP/functions/wiki/scoreboard/players/tally_count.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

この構成では、`tally_count` 関数は `main.mcfunction` から呼び出され、`tick.json` を通じて毎ティック実行されます。
