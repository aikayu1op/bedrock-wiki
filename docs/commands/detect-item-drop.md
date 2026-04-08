---
title: アイテムドロップの検出
category: Detection Systems
tags:
    - easy
mentions:
    - BedrockCommands
    - PipiSpamton
description: この手法を使うと、プレイヤーがドロップしたアイテムとそれ以外のドロップアイテムを区別できます。
---

## はじめに

[Bedrock Commands Community (BCC) Discord が出典です](https://bedrockcommands.org/)

この手法を使うと、プレイヤーがドロップしたアイテムとそれ以外のドロップアイテムを区別できます。

## コマンド

<CodeHeader>BP/functions/wiki/detect/item/is_dropped_by.mcfunction</CodeHeader>

```yaml
## それ以外のアイテムにタグ付け
### ちょうど南向き 0°
tag @e[type=item,ry=0,rym=0,tag=!wiki:source.player] add wiki:source.other

## プレイヤーがドロップしたアイテムにタグ付け
tag @e[type=item,tag=!wiki:source.other] add wiki:source.player
```

![Chain of 2 Command Blocks](/assets/images/commands/command-block-chain/2.png)

:::tip 注
興味深いことに、南向き 0° のプレイヤーがドロップしたアイテムでも、正しく `wiki:source.player` としてタグ付けされます。
:::
