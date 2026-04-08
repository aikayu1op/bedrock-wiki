---
title: プレイヤーリスポーン時
category: On Event Systems
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 5
description: プレイヤーが死亡状態からリスポーンしたときに、指定したコマンドを実行するシステムです。
---

## はじめに

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

このシステムは、プレイヤーが死亡状態からリスポーンしたときに、指定したコマンドを実行します。

## セットアップ

_チャットに次のコマンドを入力してください：_

`/scoreboard objectives add wiki:respawn dummy`

関数を使っていて、ワールド初期化時にこの目標を自動で追加したい場合は、[ワールドの初回読み込み時](/commands/on-first-world-load) に記載されている手順に従ってください。

## システム

<CodeHeader>BP/functions/wiki/events/player/on_respawn.mcfunction</CodeHeader>

```yaml
## ここにコマンドを入れます（例）
execute as @e[scores={wiki:respawn=1}] run say I died and respawned.

## プレイヤーの状態を設定
### 現在リスポーン中
scoreboard players set @a wiki:respawn 1
### 現在リスポーン中ではない
scoreboard players set @e[type=player] wiki:respawn 0
```

![Chain of 3 Command Blocks](/assets/images/commands/command-block-chain/3.png)

ここでは例として `/execute - say` コマンドを使っていますが、好きなコマンドを必要な数だけ使えます。

ただし、必ず示された順序を守り、目的のコマンドには `@e[scores={wiki:respawn=1}]` セレクター引数を正しく適用してください。

## 解説

-   **`wiki:respawn=0`** は、プレイヤーが生存しているか、すでにリスポーン済みであることを示します。
-   **`wiki:respawn=1`** は、プレイヤーが死亡しているか、ちょうどリスポーンした直後（現在のゲームティック内）であることを示します。
-   **`@a`** セレクターは、生死を問わずすべてのプレイヤーを対象にします。そのため、`1` を付けて「リスポーン中」を示すために使います。
-   **`@e`** セレクターは一方で、生存しているプレイヤーだけを対象にします。そのため、これを使って生存中のプレイヤーを `0` の「リスポーン済み」として設定できます。

これで、_リスポーン中_ のプレイヤーが `1`、_リスポーン済み_ のプレイヤーが `0` だとわかりました。この知識を使えば、スコアが `1` のプレイヤーが死亡状態から復帰したときに、目的のコマンドを実行できます。対象は `@e` セレクターで指定します。

このシステムでは、目的のコマンドは残り 2 つのコマンドより前に置く必要があります。プレイヤーはコマンドが実行される前、ゲームティックの開始時に死亡状態から生存状態へ変わるためです。

そのため、これらを最後に置くと、残りの 2 つのコマンドが先にリスポーン中のプレイヤーのスコアを `0` にしてしまい、実行したいコマンドはそのプレイヤーを選択できなくなります。セレクター引数は `0` ではなく `@e[scores={wiki:respawn=1}]` だからです。`0` を使うと、すでにリスポーンしたプレイヤーに対しても無限に繰り返されてしまいます。

## Tick JSON

コマンドブロックの代わりに関数を使う場合は、`on_respawn` 関数を `tick.json` に追加して、ループさせながら継続実行する必要があります。`tick.json` には、各文字列の後ろにカンマを付けることで複数ファイルを追加できます。詳しくは [Functions](/commands/mcfunctions#tick-json) のドキュメントを参照してください。

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/event/players/on_respawn"
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
    'BP/functions/wiki/event/players/on_respawn.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>
