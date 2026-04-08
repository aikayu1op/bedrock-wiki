---
title: Playsound
category: Commands
tags:
    - easy
mentions:
    - BedrockCommands
    - zheaEvyline
    - jordanparki7
description: "`/playsound` コマンドを理解するためのページです。"
---

## はじめに

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

`/playsound` コマンドを使うと、ワールド内のどこにいるプレイヤーにも効果音を再生できます。

## Syntax

`/playsound <sound> [player] [position] [volume] [pitch] [minimumVolume]`

## 定義

### Sound

-   再生したい効果音です。
-   現在利用可能な Sound Effect ID の一覧は次で確認できます。
    -   https://playsoundlist.xyz/

### Player

-   これは任意の引数です。
-   音を再生したい対象を示す、通常のターゲットセレクター（`@a`、`@r` など）を指します。ただし、`type=player` なしの `@e` は使えません。

### Position

-   これは任意の引数です。
-   音を再生する `x y z` の位置を指します。つまり、`playsound` の半径の中心になります。

### Volume

-   これは任意の引数です。
-   音が聞こえる球の大きさを決めます。
    -   `0.0` が最小値です。
-   `volume` の値を上げるほど、聞こえる範囲が広がります。
    -   `1` の `playsound` は、半径 16 ブロックの可聴範囲に相当します。
    -   同様に、`4` なら 64 ブロックに相当します。

### Pitch

-   これは任意の引数です。
-   効果音のピッチを決めます。
-   値は `0.0` から `256.0` の範囲で指定できます。
    -   値が高いほどピッチも高くなります。
    -   `0.0` 以下では音は聞こえません。

> 注: ピッチは、音が再生される速度にも影響します。たとえば `0.5` のピッチは、音が `0.5×` の速度で再生されることを意味します。

### Minimum Volume

-   これは任意の引数です。
-   可聴範囲の外で聞こえる最小音量を決めます。
-   値は `0.0` から `1.0` の範囲です。

## 例

```yaml
# 近くのプレイヤーにランダムな爆発音を再生
/playsound random.explode @p

# すべてのプレイヤーの位置で、音量 10000 のランダムなオーブ音を再生
/execute as @a at @s playsound random.orb @s ~ ~ ~ 10000
```

注: `/playsound` コマンドは位置依存なので、上の 2 つ目の例のように、対象の位置で大きな音量を使って再生すると便利です。これにより、遠くへテレポートしたあとなど、特定の状況で音が途切れるのを防げます。

**（推奨）次に読む: [Sounds](/concepts/sounds)**
