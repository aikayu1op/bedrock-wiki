---
title: 状態数の上限を避ける
description: ブロックの各状態には 16 個までという有効値の上限があり、これを超えることはできません。このガイドでは、その上限に達しないようにする方法を説明します。
category: Tutorials
tags:
    - expert
related:
    - /blocks/block-states
mentions:
    - Kaioga5
    - QuazChick
---

ブロックの各状態には 16 個までという有効値の上限があり、これを超えることはできません。
このガイドでは、その上限に達しないようにする方法を説明します。

:::tip
このチュートリアルでは、1 つの状態に 16 個以上の値を持たせる方法は紹介しません。ただし、この方法を使えば同じ結果を再現できます。
:::

## 仕組み

この方法では、2 つ以上の状態を組み合わせて、パーミュテーションや条件の中で再利用・参照します。たとえば、英語アルファベットを扱うブロックには 26 個の値が必要です。組み合わせを使えば、より少ない値で表現できます。

## ロジック

上の例でコードが行うことは次のとおりです。

```
1 & 1 = A   1 & 5 = E   1 & 9 =  I   1 & 13 = M
1 & 2 = B   1 & 6 = F   1 & 10 = J
1 & 3 = C   1 & 7 = G   1 & 11 = K
1 & 4 = D   1 & 8 = H   1 & 12 = L
```

そして次に:

```
2 & 1 = N   2 & 5 = R   2 & 9 =  V   2 & 13 = Z
2 & 2 = O   2 & 6 = S   2 & 10 = W
2 & 3 = P   2 & 7 = T   2 & 11 = X
2 & 4 = Q   2 & 8 = U   2 & 12 = Y
```

この方法を使うと、わずか 15 個の値で同じ結果を実現できます。組み合わせに使える値が増えるほど、状態の上限も高くなります。

:::tip
2 つより多い値を使えば、さらに多くの組み合わせを作れます。
:::

## 見え方

上の例を参考にすると、状態は次のようになります。

<CodeHeader>minecraft:block > description</CodeHeader>

```json
"states": {
    "wiki:value": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    "wiki:division": [1, 2]
}
```

条件は次のようになります。

<CodeHeader>Permutation Condition</CodeHeader>

```molang
q.block_state('wiki:division') == 1 && q.block_state('wiki:value') == 1
```

<CodeHeader>Permutation Condition</CodeHeader>

```molang
q.block_state('wiki:division') == 1 && q.block_state('wiki:value') == 2
```
