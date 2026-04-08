---
title: execute での論理ゲート
category: Techniques
mentions:
    - BedrockCommands
    - zheaEvyline
    - hatfluppyclouds
nav_order: 1
tags:
    - concept
description: 論理ゲートは1つ以上の二進入力を取り、名前のとおり論理演算を行って 1 つの二進出力（`true` または `false`）を返す仕組みです。
---

## はじめに

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

論理ゲートは、1つ以上の二進入力を取り、名前のとおり論理演算を行って 1 つの二進出力（`true` または `false`）を返す仕組みです。

コンピューターはあらゆる機能を実行するためにこれを使っています。プログラミングでは非常に役立ち、最適化されたコマンドシステムを作るうえでも重要です。このページでは、`/execute` コマンドを使って論理ゲートをシステムに組み込む方法を学びます。

## 論理ゲート

**図表:**

![Logic Gates Table with Diagram](table-with-diagram.jpg)

**コマンドへの変換例:**

-   バッファ:
    -   `/execute if entity @s[tag=red] run <command>`
-   （インバーター）NOT ゲート:
    -   `/execute if entity @s[tag=!red] run <command>`
-   AND ゲート:
    -   `/execute if entity @s[tag=red,tag=green] run <command>`
-   （NOT AND）NAND ゲート:
    -   `/execute unless entity @s[tag=red,tag=green] run <command>`
-   OR ゲート:
    -   `/execute unless entity @s[tag=!red,tag=!green] run <command>`
-   NOR ゲート:
    -   `/execute if entity @s[tag=!red,tag=!green] run <command>`
-   XOR ゲート:
    -   `/execute unless entity @s[tag=!red,tag=!green] unless entity @s[tag=red,tag=green] run <command>`
-   XNOR ゲート:
    -   `/execute unless entity @s[tag=red,tag=!green] unless entity @s[tag=!red,tag=green] run <command>`

## 解説

_解説提供: @Champ0401_

**AND Gate:**

-   `/execute as @p[tag=red,tag=green] run say success`

AND ゲートは少なくとも 2 つの入力を受け取ります。この場合、プレイヤーが両方の条件（`red` と `green` のタグ）を満たしていればコマンドが実行されます。AND ゲートは Minecraft コマンドで最もよく使われるゲートです。

**NOT Gate:**

-   `/execute as @p[tag=!red] run say success` or:
-   `/execute as @p unless entity @s[tag=red] run say success`

NOT ゲートは入力を反転します。この場合、プレイヤーが `red` タグを持っていないときだけコマンドが実行されます。NOT ゲートも Minecraft コマンドで非常によく使われます。

**OR Gate:**

-   `/execute as @p unless entity @s[tag=!red,tag=!green] run say success`

OR ゲートは 2 つ以上の入力を受け取ります。プレイヤーが条件のうち 1 つでも満たしていればコマンドが実行されます。この場合、プレイヤーは `red` か `green` のどちらか、あるいは両方のタグを持っていればかまいません。OR ゲートは Minecraft コマンドにそのままは存在しませんが、`/execute unless` を加えることで自分で実現できます。OR ゲートの動きは少しわかりにくいかもしれませんが、「どちらのタグも持っていない場合を除いて実行される」と考えるとわかりやすいです。結果の表は OR ゲートと同じになります。ゲーム内で試してみてください。

**XOR Gate:**

-   `/execute as @p unless entity @s[tag=!red,tag=!green] unless entity @s[tag=red,tag=green] run say success`

XOR ゲートは 2 つの入力を受け取ります。プレイヤーが条件のうち _ちょうど1つ_ だけを満たしている場合にコマンドが実行されます。この場合、プレイヤーは `red` か `green` のどちらか一方のタグを持てますが、両方持っているとコマンドは実行されません。XOR ゲートも Minecraft コマンドにそのままはありませんが、この回避策で実現できます。

残りのゲートは、ほかのゲートの反転形です。コマンド内の `if` / `unless` を入れ替えることで作れます。例は上記の論理ゲートを参照してください。

## 例のコマンド

`execute` の論理ゲートで使えるターゲットセレクター引数の一覧です。

-   `type`
-   `scores`
-   `name`
-   `tag`
-   `family`
-   `hasitem`

> 注: ここではすべて OR ゲートを例にしていますが、上で示した構文と順序を同じように守れば、どの論理ゲートでも使えます。

**例:**

-   `/execute unless entity @e[type=!chicken, type=!cow] run <command>`
    -   エンティティがニワトリかウシのどちらかであればコマンドを実行します。
-   `/execute unless entity @p[scores={objective.a=!5, objective.b=!5}] run <command>`
    -   プレイヤーがスコアボード `objective.a` または `objective.b` のどちらかで 5 のスコアを持っていればコマンドを実行します。
-   `/execute unless entity @p[hasitem=[{item=diamond_sword,quantity=0},{item=iron_sword,quantity=0}]] run <command>`
    -   プレイヤーがダイヤモンドの剣または鉄の剣のどちらかを持っていればコマンドを実行します。

> 注: OR ゲートでは 2 つより多い入力（セレクター引数）を使え、いずれか 1 つ以上を満たせばコマンドは実行されます。

異なる引数セレクターを組み合わせることもできます。例:

-   `/execute unless entity @p[tag=!red, scores={objective.a=!1..5}] run <command>`
-   `/execute unless entity @p[name=!player, hasitem=[{item=iron_sword, quantity=0}]] run <command>`
-   `/execute unless entity @e[type=!chicken,tag=!green, scores={objective.b=!5}, family=!mob}] run <command>`

不明点があれば、上記の Discord に参加してください。コミュニティの有識者が喜んで手伝ってくれます。
