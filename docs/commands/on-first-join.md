---
title: プレイヤーの初回参加時
category: On Event Systems
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
    - SmokeyStack
nav_order: 1
description: プレイヤーがワールドに初めて参加したときに、指定したコマンドを実行するシステムです。
---

## はじめに

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

このシステムは、プレイヤーがワールドに初めて参加したときに、指定したコマンドを実行します。

## システム

<CodeHeader>BP/functions/wiki/event/players/on_first_join.mcfunction</CodeHeader>

```yaml
## ここにコマンドを入れる（例）
### 石のツルハシ ×1 を与える
give @a[tag=!wiki:joined] stone_pickaxe
### パン ×16 を与える
give @a[tag=!wiki:joined] bread 16

## 参加済みとして記録
tag @a[tag=!wiki:joined] add wiki:joined
```

![Chain of 3 Command Blocks](/assets/images/commands/command-block-chain/3.png)

ここでは `/give` コマンドを 2 つ例として使っていますが、好きなコマンドを必要な数だけ使えます。

ただし、示された順序を守り、目的のコマンドに `tag=!wiki:joined` セレクター引数を正しく適用してください。

## 解説

プレイヤーがワールドに初めて参加したとき、そのプレイヤーには `joined` タグが付いていません。

タグのないプレイヤーに対して目的のコマンドを実行すると、その直後にタグが付与されます。そのため、次のコマンドでタグを外さない限り、同じコマンドは繰り返されません。

<br>`/tag <player> remove wiki:joined`

## フォルダ構成

functions を使う場合、パックのフォルダ構成は次のようになります。

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/functions/wiki',
    'BP/functions/wiki/main.mcfunction',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki/event',
    'BP/functions/wiki/event/players',
    'BP/functions/wiki/event/players/on_first_join.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

この構成では、`on_first_join` 関数は `main.mcfunction` から呼び出され、`tick.json` を通じて毎ティック実行されます。
