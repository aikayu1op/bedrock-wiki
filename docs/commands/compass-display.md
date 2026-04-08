---
title: コンパス表示
category: Useful Creations
tags:
    - easy
mentions:
    - BedrockCommands
    - fantasy9967
description: コマンドを使ってコンパス表示を作成します。
---

## はじめに

[Bedrock Commands Community (BCC) Discord が出典です](https://bedrockcommands.org/)

コマンドを使って、アクションバーにコンパス表示を出します。

![デモ GIF](demo.gif)

## コマンド

<CodeHeader>BP/functions/wiki/displays/compass.mcfunction</CodeHeader>

```yaml
title @a[rym=157.5,ry=-157.5] actionbar North (N)
title @a[rym=-22.5,ry=22.5] actionbar South (S)
title @a[rym=-112.5,ry=-67.5] actionbar East (E)
title @a[rym=67.5,ry=112.5] actionbar West (W)
title @a[rym=-157.5,ry=-112.5] actionbar Northeast (NE)
title @a[rym=112.5,ry=157.5] actionbar Northwest (NW)
title @a[rym=-67.5,ry=-22.5] actionbar Southeast (SE)
title @a[rym=22.5,ry=67.5] actionbar Southwest (SW)
```

![Chain of 8 Command Blocks](/assets/images/commands/command-block-chain/8.png)

回転セレクター引数 `ry` と `rym` の仕組みを理解するには、**[こちら](/commands/selectors#rotation)** を参照してください。

:::tip

上記のコマンドは、**[しゃがみ判定](/commands/detect-movements#is-sneaking)** や **[hasitem](/commands/selectors#items)** セレクター引数と組み合わせることで、表示の発動条件を追加できます。

:::
