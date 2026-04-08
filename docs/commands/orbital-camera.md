---
title: 軌道カメラ
category: Techniques
mentions:
    - BedrockCommands
    - zheaEvyline
description: この手法では、カメラの回転をプレイヤー・エンティティ・座標の周囲を回る軌道に限定でき、軌道の高さと半径も自由に調整できます。
---

## はじめに

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

この手法では、カメラの回転をプレイヤー・エンティティ・座標の周囲を回る軌道に限定でき、軌道の高さと半径も自由に調整できます。

## 動画デモ

<YouTubeEmbed id="yOlWjTpInFE" />

## コマンド

<CodeHeader>BP/functions/wiki/camera/orbital.mcfunction</CodeHeader>

```yaml
execute as @p at @s anchored eyes rotated ~ 0 positioned ^^1^-2 run camera @s set minecraft:free ease 0.1 linear pos ~~~ facing @s
```

![One Repeating Command Block](/assets/images/commands/command-block-chain/1.png)

**2D 可視化:**

![Orbital Camera 2D Visualization](2d-visualization.gif)

**コマンドの分解**

-   `as @p`
    -   実行対象を最も近いプレイヤーに設定します。
-   `at @s`
    -   実行位置を対象プレイヤー自身の位置に設定します。
-   `anchored eyes`
    -   実行位置を対象プレイヤーの目の高さまで引き上げます。
-   `rotated ~ 0`
    -   実行回転を対象プレイヤーの水平回転基準で設定しつつ、垂直回転を 0°（真っすぐ）に固定します。
    -   逆に水平回転を固定したい場合は、`rotated 0 ~` とします。
        -   注: 値 `0` は必要な向きに合わせて変更できます。詳しくは [Rotations](/commands/selectors#rotation) を参照してください。
    -   垂直回転を固定したくない場合は、この部分を丸ごと省略して完全な球面回転にできます。ただし、その場合でもカメラが地面の下に潜るのは防げません。
-   `positioned ^^1^-2`
    -   実行位置をプレイヤーの 1 ブロック上、かつ 2 ブロック後方へ移動します。
    -   値 `1` を増減すると、軌道の高さを増減できます。
    -   値 `-2` を増減すると、軌道の半径を増減できます。
        -   負の値はプレイヤーの後方に位置を設定します。
        -   正の値はプレイヤーの前方に位置を設定します。
        -   詳しくは [座標系](/commands/relative-coordinates) を参照してください。
-   `run camera @s set minecraft:free ease 0.1 linear pos ~~~`
    -   相対座標（対象プレイヤーの視点から 1 ブロック上、2 ブロック後方）に、`minecraft:free` プリセットと `linear` の ease 値 `0.1` を使ってカメラを設定します。
    -   カメラ移動速度は ease 値 `0.1` を増減して調整できます。
    -   `/camera` コマンドと、プリセットや ease などの利用可能なオプションについては、次の資料を参照してください。
        -   [Introduction to Camera Command](https://learn.microsoft.com/en-us/minecraft/creator/documents/cameracommandintroduction)
        -   [Camera Command Video Tutorial](https://youtu.be/GnYrZlBCyWg)
-   `facing @s`
    -   カメラの向きを対象プレイヤー自身の方向へ向けます。

**類似例**

<CodeHeader>BP/functions/wiki/camera/orbital.mcfunction</CodeHeader>

```yaml
# To orbit camera around entity tagged with 'wiki:orbital_camera.focus'
execute as @p at @e[tag=wiki:orbital_camera.focus] anchored eyes rotated as @s rotated ~ 0 positioned ^^1^-5 run camera @s set minecraft:free ease 0.1 linear pos ~~~ facing @e[tag=wiki:orbital_camera.focus]
```

![One Repeating Command Block](/assets/images/commands/command-block-chain/1.png)

<CodeHeader>BP/functions/wiki/camera/orbital.mcfunction</CodeHeader>

```yaml
# To orbit camera around position 6 7 8
execute as @p positioned 6 7 8 rotated as @s rotated ~ 0 positioned ^^1^-5 run camera @s set minecraft:free ease 0.1 linear pos ~~~ facing 6 7 8
```

![One Repeating Command Block](/assets/images/commands/command-block-chain/1.png)
