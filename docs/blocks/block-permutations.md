---
title: ブロックのパーミュテーション
description: ブロックのパーミュテーションは、ブロックが取りうるすべての状態構成を表します。
category: General
nav_order: 7
related:
    - /blocks/block-states
    - /blocks/block-traits
license: true
mentions:
    - QuazChick
    - SmokeyStack
---

:::tip FORMAT VERSION 1.26.10
ブロックのパーミュテーションを学ぶ前に、[ブロック状態](/blocks/block-states) をしっかり理解しておくべきです。

ブロック状態を扱うときは、パックの manifest にある `min_engine_version` が 1.20.20 以上であることを確認してください。
:::
:::danger OVERRIDING COMPONENTS
同じコンポーネントは 1 つしか有効にできません。
重複したコンポーネントは、最後の [`permutations`](#conditionally-applying-components) 配列要素によって上書きされます。
:::

## パーミュテーションとは？

ブロックのパーミュテーションは、それぞれのブロックが取りうるすべての状態値の組み合わせを表します。

たとえば、2 つの真偽値状態を持つカスタムブロックを追加した場合…

<CodeHeader>minecraft:block</CodeHeader>

```json
"description": {
    "identifier": "wiki:permutations_example",
    "states": {
        "wiki:first_state": [false, true],
        "wiki:second_state": [false, true]
    }
}
```

…次の 4 つのブロックパーミュテーションがワールドに追加されます。

| ブロックタイプ               | `wiki:first_state` | `wiki:second_state` |
| ---------------------------- | ------------------ | ------------------- |
| `wiki:permutations_example` | `false`{lang=json} | `false`{lang=json}  |
| `wiki:permutations_example` | `true`{lang=json}  | `false`{lang=json}  |
| `wiki:permutations_example` | `false`{lang=json} | `true`{lang=json}   |
| `wiki:permutations_example` | `true`{lang=json}  | `true`{lang=json}   |

ブロックのパーミュテーション数を計算するには、各状態の有効値の数を掛け合わせます。
上の例では 2 &times; 2 の計算になり、このブロックには 4 つのパーミュテーションがあります。

### よくある誤解の整理

-   すべてのブロックにはパーミュテーションがあります。状態を持たないブロックでも、ブロック識別子だけで構成された 1 つのパーミュテーションがあります。
-   ブロックのパーミュテーション数は、`permutations` 配列の項目数ではなく、ブロックが持つ状態に基づいて決まります。

## 条件付きでコンポーネントを適用する

ブロックの `permutations` 配列を使うと、現在のパーミュテーションに応じてコンポーネント（タグを含む）を条件付きで適用できます。

`permutations` 配列内のコンポーネントは、ブロックの基本コンポーネントや他のコンポーネントリストを上書きできます。`permutations` 配列の最後のコンポーネントリストが優先されます。

_format version [1.19.70](/blocks/block-format-history#_1-19-70) 以降が必要です。_

<CodeHeader>BP/blocks/custom_block.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_block",
            "states": {
                "wiki:integer_state_example": [2, 4, 6, 8],
                "wiki:boolean_state_example": [false, true],
                "wiki:string_state_example": ["red", "green", "blue"]
            }
        },
        "components": {},
        "permutations": [
            {
                "condition": "q.block_state('wiki:integer_state_example') == 2",
                "components": {
                    "minecraft:friction": 0.1
                }
            },
            {
                "condition": "q.block_state('wiki:boolean_state_example')",
                "components": {
                    "minecraft:friction": 0.8 // Overrides the friction defined in the previous component list.
                }
            },
            {
                "condition": "q.block_state('wiki:string_state_example') == 'red' && !q.block_state('wiki:boolean_state_example')",
                "components": {
                    "minecraft:geometry": "geometry.pig"
                }
            }
        ]
    }
}
```

### パーミュテーション条件

真と評価される場合（`false`{lang=json} や `0`{lang=json} でない場合）、該当するコンポーネントリストが適用されます。

パーミュテーション条件は Molang 式文字列として書かれ、使えるコンテキストは非常に限られています。

-   条件は純粋にブロックのパーミュテーションに基づくため、`q.block_state()`{lang=molang} クエリ関数しか使えません。
-   つまり、条件に副作用は持てません。
    -   次の数値関数は使えません: `math.die_roll()`{lang=molang}, `math.die_roll_integer()`{lang=molang}, `math.random()`{lang=molang}, `math.random_integer()`{lang=molang}。
    -   `temp`{lang=molang} 変数を含む変数には代入できません。

```molang
q.block_state('wiki:integer_state_example') < 6 || !q.block_state('wiki:boolean_state_example')
```

## パーミュテーションの上限

ブロック全般と同じく、望ましくない挙動を防ぐために Mojang による制限があります。

### ブロック 1 個あたりの最大数

ブロックは 65,536 個を超えるパーミュテーションを持てません（16 個の値を持つ状態が 4 つある場合に相当します）。
これは、ブロックパーミュテーションが 16 ビットで表現可能である必要があるためです。

この上限を超えると、パーミュテーション数を制限内に収めるために、一部の状態がブロックから欠落し、コンテンツログエラーが発生します。

### ワールド全体の最大数

ワールドに登録された **カスタム** ブロックパーミュテーションの総数は、65,536 を超えない方がよいです（配置済みである必要はありません）。

この上限を超えてもブロック機能に影響はないはずですが、次のコンテンツログ警告が出ます。

> [Blocks][warning]-World with over 65536 block permutations may degrade performance. Current world has XXXXX permutations.
