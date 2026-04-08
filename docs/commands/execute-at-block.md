---
title: ブロックバリアント上で実行
category: Techniques
mentions:
    - BedrockCommands
    - PipiSpamton
    - zheaEvyline
nav_order: 2
description: どんなブロックバリアントの位置でも、動的にコマンドを実行する方法を学びます。
---

## はじめに

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

この手法を使うと、各座標を個別に指定しなくても、任意のブロックバリアントの位置でコマンドを実行できます。

**クレジット:** *@oyakodon10*

![Demonstration GIF](demo_1.gif)

:::warning

-   このシステムは、対象ブロック数が多い場合は注意して使ってください。ブロックごとに一時的なエンティティが生成されるため、ラグが発生することがあります。
-   満杯のコンポスターを含む範囲で使うと、誤ってそれらを置き換えてしまうことがあります。ワールド内に影響を受ける可能性のある建築やブロックがある場合は、ページ末尾の少し調整した版 **[こちら](/commands/execute-at-block#system-modified)** を使ってください。こちらは **3 つの追加コマンド** を含みます。

:::

## システム

<CodeHeader>BP/functions/wiki/execute_at_blocks/diamond_block.mcfunction</CodeHeader>

```yaml
## [ブロック] を [範囲] の中で満杯のコンポスターに置き換える
execute at @a run fill ~8~8~8 ~-8~-1~-8 composter ["composter_fill_level"=8] replace diamond_block

## 既存のアイテムドロップに無視タグを付ける
tag @e[type=item] add wiki:ignored.item

## 満杯のコンポスターに骨粉を落とさせる
### 満杯のコンポスターを元の [ブロック] に置き換えることで行います
execute at @a run fill ~8~8~8 ~-8~-1~-8 diamond_block replace composter ["composter_fill_level"=8]

## ここにコマンドを入れます（例）:
### プレイヤー付近のすべてのダイヤモンドブロックの上にシュルカーボルトの粒子を出す
execute at @e[type=item,tag=!wiki:ignored.item] align xyz positioned ~0.5~0.5~0.5 run particle minecraft:shulker_bullet ~~1~

## システムが生成した骨粉ドロップをすべて削除
kill @e[type=item,tag=!wiki:ignored.item]
```

![Chain of Five Command Blocks](/assets/images/commands/command-block-chain/5.png)

ここでは例として `/particle` コマンドを使っていますが、好きなコマンドを必要な数だけ使えます。

ただし、必ず示された順序を守り、目的のコマンドには `execute at @e[type=item,tag=!wiki:ignored.item] align xyz positioned ~0.5~0.5~0.5 run` を正しく組み込んでください。

また、使うブロック（`diamond_block`）や対象範囲（`at @a run fill ~8~8~8 ~-8~-1~-8`）は好みに合わせて変更できます。たとえば `gold_block` や `iron_block`、`fill 8 8 8 -12 -12 -12` や `at @a fill ~3~3~3 ~-3~-3~-3` などです。

## 各コマンドの役割

-   **コマンド 1:** 指定した範囲内の任意のブロック（例: ダイヤモンドブロック）を、骨粉で満たされたコンポスターに置き換えます。
    -   満杯のコンポスターには便利な挙動があります。破壊または置き換えられると、中に入っていた骨粉を落とします。
-   **コマンド 2:** 既存のアイテムドロップ（例: プレイヤーが落とした装備）すべてに `wiki:ignored.item` を付けます。これにより、コマンド 5 ではコンポスターが落とした骨粉だけを削除し、システム外で生成されたほかのアイテムドロップは無視できます。
-   **コマンド 3:** コマンド 1 で説明したとおり、コンポスターを元のブロック（例: ダイヤモンドブロック）に戻します。これでコンポスター内の骨粉が落ちるので、セレクターで対象にして、その位置で目的のコマンドを実行できます。
-   **コマンド 4:** 先ほど説明したとおり、これは用途に応じて変更・拡張できる例のコマンドです。
-   **コマンド 5:** システムの最後のコマンドです。コンポスターが生成した骨粉ドロップをすべて削除し、ワールド内のアイテムドロップ増加によるラグを防ぎます。

functions を使う場合、パックのフォルダ構成は次のようになります。

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/functions/wiki',
    'BP/functions/wiki/main.mcfunction',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki/execute_at_blocks',
    'BP/functions/wiki/execute_at_blocks/diamond_block.mcfunction'
]"
></FolderView>

この構成では、`diamond_block` 関数は `main.mcfunction` から呼び出され、`tick.json` を通じて毎ティック実行されます。

## システム - 変更版

これは少し変更した版で、ワールド内にすでに存在する満杯のコンポスターには影響しません。

![Demonstration GIF](demo_2.gif)

<CodeHeader>BP/functions/wiki/execute_at_blocks/diamond_block.mcfunction</CodeHeader>

```yaml
## 既存のアイテムドロップに無視タグを付ける
tag @e[type=item] add wiki:ignored.item

## 🟩 [範囲] 内の既存の満杯コンポスターに骨粉を落とさせる
### 空気で置き換えることで行います
execute at @a run fill ~8~8~8 ~-8~-1~-8 air replace composter ["composter_fill_level"=8]

## 🟩 既存の満杯コンポスターのドロップに無視タグを付ける
tag @e[type=item,tag=!wiki:ignored.item] add wiki:ignored.composter

## [ブロック] を [範囲] の中で満杯のコンポスターに置き換える
execute at @a run fill ~8~8~8 ~-8~-1~-8 composter ["composter_fill_level"=8] replace diamond_block

## システムの満杯コンポスターに骨粉を落とさせる
### 元の [ブロック] に置き換えることで行います
execute at @a run fill ~8~8~8 ~-8~-1~-8 diamond_block replace composter ["composter_fill_level"=8]

## 🟩 以前から存在していた満杯コンポスターを戻す
execute at @e[type=item,tag=wiki:ignored.composter] run setblock ~~~ composter ["composter_fill_level"=8]

## ここにコマンドを入れます（例）:
### プレイヤー付近のすべてのダイヤモンドブロックの上にシュルカーボルトの粒子を出す
execute at @e[type=item,tag=!wiki:ignored.item,tag=!wiki:ignored.composter] align xyz positioned ~0.5~0.5~0.5 run particle minecraft:shulker_bullet ~~1~

## システムが生成した骨粉ドロップをすべて削除
kill @e[type=item,tag=!wiki:ignored.item]
```

![Chain of Eight Command Blocks](/assets/images/commands/command-block-chain/8.png)

> 注: 🟩 が付いたレベル 2 見出し以下のコマンドは、新しく追加されたものです。

元のシステムでは、実行したいコマンドで `wiki:ignored.item` タグを無視するだけで済みました。しかし、この変更版では、上で示したように `wiki:ignored.composter` タグも無視する必要があります。
