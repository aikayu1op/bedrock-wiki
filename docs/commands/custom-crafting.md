---
title: カスタムクラフト
category: Useful Creations
tags:
    - easy
mentions:
    - TwigYT
    - zheaEvyline
description: ドロッパーを使ってクラフトテーブルを再現するコマンドです。
---

## はじめに

このガイドでは、ドロッパーを使ってクラフトテーブルを再現し、実質的に 1 つのコマンドだけで「カスタムクラフト」システムを作る方法を学びます。用途の例としては、サーバーやアドベンチャーマップで、エンチャント付きの武器やカスタム名付きアイテムをクラフトする方法があります。

注: このガイドにおけるカスタムクラフターの位置は固定です。ワールドのどこにでも配置できる、より動的な方法については、@CrunchyCookie の [Custom Crafting](https://www.youtube.com/watch?v=pzQzldaSORs) の YouTube 動画を参照してください。

:::tip
クラフトテーブルを使うカスタムクラフトレシピを作成する場合は、[こちら](/loot/recipes) の wiki ページを参照してください。
:::

## Setup

このシステムでは、追加したいカスタムレシピアイテムごとに 2 つのドロッパーが必要です。

1. レシピを入れたドロッパー。
2. レシピの出力を入れたドロッパー。

例:

<WikiImage src="recipe.png" alt="Custom Recipe" width="200" pixelated />
<WikiImage src="recipe-output.png" alt="Custom Recipe Output" width="200" pixelated />

この 2 つのドロッパーは通常、コマンドブロックの近くか、オペレーター以外のプレイヤーがアクセスできない場所に置きます。

セットアップを完了するには、プレイヤーにカスタムクラフトを行わせたい場所に最後のドロッパーを 1 つ置きます。これがカスタム **クラフター** になります。

## System

<CodeHeader>BP/functions/wiki/custom_crafting.mcfunction</CodeHeader>

```yaml
## If Recipe Matches Crafter: Clone Recipe Output to Crafter
execute if blocks <recipe> <recipe> <crafter> masked run clone <recipe_output> <recipe_output> <crafter>
```

![One repeating Command Block](/assets/images/commands/command-block-chain/1.png)

**定義:**

-   `<crafter>` — **クラフター** として使うドロッパーの入力座標 (x,y,z)。
-   `<recipe>` — **レシピ** を入れたドロッパーの入力座標 (x,y,z)。
-   `<recipe_output>` — レシピの **出力** を入れたドロッパーの入力座標 (x,y,z)。

必要であれば、@TwigYT が共有した .mcstructure のサンプルをダウンロードできます。

<Button link="/assets/packs/commands/custom-crafting/custom_crafter_example.mcstructure" download>
    サンプル MCSTRUCTURE をダウンロード
</Button>

<WikiImage
    src="completed-setup.png"
    alt="Completed Setup"
    width=800
/>

> 注: 構造ブロックで構造物を取り込んだあとも、上で定義したとおりにコマンドブロック内の値を置き換える必要があります。

## ヒント

次のように `playsound` コマンドを追加すると、クラフト体験を少しだけ向上させられます。

<CodeHeader>BP/functions/wiki/custom_crafting.mcfunction</CodeHeader>

```yaml
## If Recipe Matches Crafter: Play Sound Upon Crafting (optional)
execute if blocks <recipe> <recipe> <crafter> masked positioned <crafter> run playsound smithing_table.use @a[r=7]
## If Recipe Matches Crafter: Clone Recipe Output to Crafter
execute if blocks <recipe> <recipe> <crafter> masked run clone <recipe_out> <recipe_output> <crafter>
```

![Chain of Two Command Blocks](/assets/images/commands/command-block-chain/2.png)

さらに進めるなら、[MBE](/commands/block-entities) や [Fox MBE](/commands/display-entities) を使って、ドロッパーにクラフトテーブルや鍛冶台の見た目をオーバーレイとして与えることもできます。
