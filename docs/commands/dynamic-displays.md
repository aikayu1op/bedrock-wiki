---
title: 動的表示
category: Techniques
tags:
    - intermediate
mentions:
    - BedrockCommands
    - zheaEvyline
    - mittens4all
nav_order: 9
description: コマンドを使って、カスタムで動的な表示を作る方法を学びます。
---

## はじめに

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

このガイドでは、スコアに応じてプレイヤーへカスタムで動的なテキストを表示する方法を学びます。これは、結果ごとに個別の `/tellraw` や `/titleraw` を使う代替手段として有効です。

:::info NOTE:
この手法は、主にプレイヤーのスコアが 9 を超える場合に使います。1〜9 のスコア範囲だけを使う簡略版は **[こちら](/text/rawtext#ordering-with)** を参照してください。

このガイドを最大限活用するには、**[Raw Text](/text/rawtext)** の基本を理解しておくことをおすすめします。
:::

## 動画デモ

<YouTubeEmbed id="s8QGwsHuEk4" />

## 重要な概念

:::tip

このシステムを図書館にたとえると、`wiki:array` が本棚（1〜9）を選び、`wiki:element` がその棚の特定の本（1〜9）を選びます。これにより、合計 81 個の異なる「テキスト」を保存できます。

:::

| **用語**                 | **内容**             | **使う理由**                                                                                 |
| :----------------------- | :------------------- | :------------------------------------------------------------------------------------------- |
| **`translate`**          | テキストコンポーネント | カスタムメッセージ一覧の「入れ物」として機能します。                                      |
| **`with`**               | 引数リスト            | テキストやスコアを差し込む「スロット」の一覧です。                                          |
| **`score`**              | データ取得器          | プレイヤーのスコアを取得して、コマンド用のテキストに変換します。                            |
| **`wiki:var`**           | 入力スコア            | テキストに変換したい実際のランクやレベルの数値です。                                        |
| **`wiki:q.var_changed`** | クエリスコア          | 入力スコアの更新を検出し、値が変わったときだけスコアボード操作を起動します。              |
| **`wiki:delta_var`**     | 差分スコア            | 前回の更新以降にプレイヤーのスコアが変わったかを検出します。                              |
| **`wiki:element`**       | 「本」                | グループ内の特定メッセージを選ぶ 1〜9 のスコアです。                                       |
| **`wiki:array`**         | 「棚」                | 9 個の候補メッセージのグループを選ぶ 1〜9 のスコアです。                                   |
| **`%%%%s`**              | プレースホルダー      | スコアにどのメッセージを表示するかを選ばせるための技法です。                               |

**システムの論理分解**

- 入力とクエリ: `wiki:var`、`wiki:delta_var`、`wiki:q.var_changed` が、テキストを **いつ** 更新すべきかを追跡します。
- 数学: `wiki:array` と `wiki:element` が、一覧の中で特定のテキストが **どこ** にあるかを計算します。

:::warning

  - 書式指定子 `%%#` では、1 桁の正の整数（1〜9）だけを使います。システムを作るときは、プレイヤーのスコアが正の整数になっていることを確認してください。
  - このコマンドブロックシステムで扱える範囲は 1〜81 です。より大きい範囲については、**[こちら](/commands/dynamic-displays#function-setup)** の関数セットアップを参照してください。

:::

## セットアップ

_チャットに次のコマンドを入力します。_

<CodeHeader></CodeHeader>

```yaml
## Add Objectives
### Query / State Machine
/scoreboard objectives add wiki:q.var_changed dummy
### Math
/scoreboard objectives add wiki:const dummy
/scoreboard objectives add wiki:array dummy
/scoreboard objectives add wiki:element dummy
/scoreboard objectives add wiki:var dummy
/scoreboard objectives add wiki:delta_var dummy

## Initialize Scores
### Constants
/scoreboard players set .1 wiki:const 1
/scoreboard players set .8 wiki:const 8
/scoreboard players set .9 wiki:const 9
```

## システム

<CodeHeader>BP/functions/wiki/rawtext/display_logic.mcfunction</CodeHeader>

```yaml
## メインスコアの変化を検出して計算を起動
### Set score change query state to false (0) by default
scoreboard players set @a[scores={wiki:q.var_changed=1}] wiki:q.var_changed 0
### Set score change query state to true (1) if current score does not match score from previous tick
execute as @a unless entity @s[scores={wiki:var=82..}] unless score @s wiki:delta_var = @s wiki:var run scoreboard players set @s wiki:q.var_changed 1

## Calculate Element Index
### Determine the element, or which "book" should be chosen
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:element = @s wiki:var
### Subtract by 1 to prevent remainder 0 for 9th position
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:element -= .1 wiki:const
### Perform modulo (%) operation and add 1 back to get its specific position (1-9)
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:element %= .9 wiki:const
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:element += .1 wiki:const

## Calculate Array Index
### Determine the array, or which "shelf" the book belongs to
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:array = @s wiki:var
### Add 8 (divisor-1) to ensure it correctly moves to the next "shelf" even when value isn't a multiple of 9
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:array += .8 wiki:const
### Divide by 9 to get its specific position (1-9)
execute as @a[scores={wiki:q.var_changed=1}] run scoreboard players operation @s wiki:array /= .9 wiki:const

## Save Current Score
### Assign 'wiki:var' score to 'wiki:delta_var' score to compare change in the next game tick
execute as @a unless score @s wiki:delta_var = @s wiki:var run scoreboard players operation @s wiki:delta_var = @s wiki:var
```

![Chain of Ten Command Blocks](/assets/images/commands/command-block-chain/10.png)

**Note:** Place the titleraw command last in the command block chain if you plan to run the command continuously.

## Titleraw テンプレート

<CodeHeader></CodeHeader>

```json
titleraw @a actionbar {"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:array"}},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 1, Book: 1"},{"text":"Shelf: 1, Book: 2"},{"text":"Shelf: 1, Book: 3"},{"text":"Shelf: 1, Book: 4"},{"text":"Shelf: 1, Book: 5"},{"text":"Shelf: 1, Book: 6"},{"text":"Shelf: 1, Book: 7"},{"text":"Shelf: 1, Book: 8"},{"text":"Shelf: 1, Book: 9"}]}}]},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 2, Book: 1"},{"text":"Shelf: 2, Book: 2"},{"text":"Shelf: 2, Book: 3"},{"text":"Shelf: 2, Book: 4"},{"text":"Shelf: 2, Book: 5"},{"text":"Shelf: 2, Book: 6"},{"text":"Shelf: 2, Book: 7"},{"text":"Shelf: 2, Book: 8"},{"text":"Shelf: 2, Book: 9"}]}}]},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 3, Book: 1"},{"text":"Shelf: 3, Book: 2"},{"text":"Shelf: 3, Book: 3"},{"text":"Shelf: 3, Book: 4"},{"text":"Shelf: 3, Book: 5"},{"text":"Shelf: 3, Book: 6"},{"text":"Shelf: 3, Book: 7"},{"text":"Shelf: 3, Book: 8"},{"text":"Shelf: 3, Book: 9"}]}}]},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 4, Book: 1"},{"text":"Shelf: 4, Book: 2"},{"text":"Shelf: 4, Book: 3"},{"text":"Shelf: 4, Book: 4"},{"text":"Shelf: 4, Book: 5"},{"text":"Shelf: 4, Book: 6"},{"text":"Shelf: 4, Book: 7"},{"text":"Shelf: 4, Book: 8"},{"text":"Shelf: 4, Book: 9"}]}}]},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 5, Book: 1"},{"text":"Shelf: 5, Book: 2"},{"text":"Shelf: 5, Book: 3"},{"text":"Shelf: 5, Book: 4"},{"text":"Shelf: 5, Book: 5"},{"text":"Shelf: 5, Book: 6"},{"text":"Shelf: 5, Book: 7"},{"text":"Shelf: 5, Book: 8"},{"text":"Shelf: 5, Book: 9"}]}}]},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 6, Book: 1"},{"text":"Shelf: 6, Book: 2"},{"text":"Shelf: 6, Book: 3"},{"text":"Shelf: 6, Book: 4"},{"text":"Shelf: 6, Book: 5"},{"text":"Shelf: 6, Book: 6"},{"text":"Shelf: 6, Book: 7"},{"text":"Shelf: 6, Book: 8"},{"text":"Shelf: 6, Book: 9"}]}}]},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 7, Book: 1"},{"text":"Shelf: 7, Book: 2"},{"text":"Shelf: 7, Book: 3"},{"text":"Shelf: 7, Book: 4"},{"text":"Shelf: 7, Book: 5"},{"text":"Shelf: 7, Book: 6"},{"text":"Shelf: 7, Book: 7"},{"text":"Shelf: 7, Book: 8"},{"text":"Shelf: 7, Book: 9"}]}}]},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 8, Book: 1"},{"text":"Shelf: 8, Book: 2"},{"text":"Shelf: 8, Book: 3"},{"text":"Shelf: 8, Book: 4"},{"text":"Shelf: 8, Book: 5"},{"text":"Shelf: 8, Book: 6"},{"text":"Shelf: 8, Book: 7"},{"text":"Shelf: 8, Book: 8"},{"text":"Shelf: 8, Book: 9"}]}}]},{"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"wiki:element"}},{"text":"Shelf: 9, Book: 1"},{"text":"Shelf: 9, Book: 2"},{"text":"Shelf: 9, Book: 3"},{"text":"Shelf: 9, Book: 4"},{"text":"Shelf: 9, Book: 5"},{"text":"Shelf: 9, Book: 6"},{"text":"Shelf: 9, Book: 7"},{"text":"Shelf: 9, Book: 8"},{"text":"Shelf: 9, Book: 9"}]}}]}]}}]}
```

:::tip
便利なように、下のファイルを使って作業してください。変更を確定したら、`/titleraw` コマンドへ貼る前に **[JSON Minifier](https://codebeautify.org/jsonminifier)** でコードを圧縮してください。
:::

<Spoiler title="Titleraw Template Readable JSON">

<CodeHeader></CodeHeader>

```json
{"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:array"}},


          {"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:element"}},
                    {"text": "Shelf: 1, Book: 1"},
                    {"text": "Shelf: 1, Book: 2"},
                    {"text": "Shelf: 1, Book: 3"},
                    {"text": "Shelf: 1, Book: 4"},
                    {"text": "Shelf: 1, Book: 5"},
                    {"text": "Shelf: 1, Book: 6"},
                    {"text": "Shelf: 1, Book: 7"},
                    {"text": "Shelf: 1, Book: 8"},
                    {"text": "Shelf: 1, Book: 9"}
                  ]}}]},


          {"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:element"}},
                    {"text": "Shelf: 2, Book: 1"},
                    {"text": "Shelf: 2, Book: 2"},
                    {"text": "Shelf: 2, Book: 3"},
                    {"text": "Shelf: 2, Book: 4"},
                    {"text": "Shelf: 2, Book: 5"},
                    {"text": "Shelf: 2, Book: 6"},
                    {"text": "Shelf: 2, Book: 7"},
                    {"text": "Shelf: 2, Book: 8"},
                    {"text": "Shelf: 2, Book: 9"}
                  ]}}]},


          {"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:element"}},
                    {"text": "Shelf: 3, Book: 1"},
                    {"text": "Shelf: 3, Book: 2"},
                    {"text": "Shelf: 3, Book: 3"},
                    {"text": "Shelf: 3, Book: 4"},
                    {"text": "Shelf: 3, Book: 5"},
                    {"text": "Shelf: 3, Book: 6"},
                    {"text": "Shelf: 3, Book: 7"},
                    {"text": "Shelf: 3, Book: 8"},
                    {"text": "Shelf: 3, Book: 9"}
                  ]}}]},


          {"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:element"}},
                    {"text": "Shelf: 4, Book: 1"},
                    {"text": "Shelf: 4, Book: 2"},
                    {"text": "Shelf: 4, Book: 3"},
                    {"text": "Shelf: 4, Book: 4"},
                    {"text": "Shelf: 4, Book: 5"},
                    {"text": "Shelf: 4, Book: 6"},
                    {"text": "Shelf: 4, Book: 7"},
                    {"text": "Shelf: 4, Book: 8"},
                    {"text": "Shelf: 4, Book: 9"}
                  ]}}]},


          {"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:element"}},
                    {"text": "Shelf: 5, Book: 1"},
                    {"text": "Shelf: 5, Book: 2"},
                    {"text": "Shelf: 5, Book: 3"},
                    {"text": "Shelf: 5, Book: 4"},
                    {"text": "Shelf: 5, Book: 5"},
                    {"text": "Shelf: 5, Book: 6"},
                    {"text": "Shelf: 5, Book: 7"},
                    {"text": "Shelf: 5, Book: 8"},
                    {"text": "Shelf: 5, Book: 9"}
                  ]}}]},


          {"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:element"}},
                    {"text": "Shelf: 6, Book: 1"},
                    {"text": "Shelf: 6, Book: 2"},
                    {"text": "Shelf: 6, Book: 3"},
                    {"text": "Shelf: 6, Book: 4"},
                    {"text": "Shelf: 6, Book: 5"},
                    {"text": "Shelf: 6, Book: 6"},
                    {"text": "Shelf: 6, Book: 7"},
                    {"text": "Shelf: 6, Book: 8"},
                    {"text": "Shelf: 6, Book: 9"}
                  ]}}]},


          {"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:element"}},
                    {"text": "Shelf: 7, Book: 1"},
                    {"text": "Shelf: 7, Book: 2"},
                    {"text": "Shelf: 7, Book: 3"},
                    {"text": "Shelf: 7, Book: 4"},
                    {"text": "Shelf: 7, Book: 5"},
                    {"text": "Shelf: 7, Book: 6"},
                    {"text": "Shelf: 7, Book: 7"},
                    {"text": "Shelf: 7, Book: 8"},
                    {"text": "Shelf: 7, Book: 9"}
                  ]}}]},


          {"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:element"}},
                    {"text": "Shelf: 8, Book: 1"},
                    {"text": "Shelf: 8, Book: 2"},
                    {"text": "Shelf: 8, Book: 3"},
                    {"text": "Shelf: 8, Book: 4"},
                    {"text": "Shelf: 8, Book: 5"},
                    {"text": "Shelf: 8, Book: 6"},
                    {"text": "Shelf: 8, Book: 7"},
                    {"text": "Shelf: 8, Book: 8"},
                    {"text": "Shelf: 8, Book: 9"}
                  ]}}]},


          {"rawtext": [{"translate": "%%%%s","with": {"rawtext": [{"score": {"name": "*","objective": "wiki:element"}},
                    {"text": "Shelf: 9, Book: 1"},
                    {"text": "Shelf: 9, Book: 2"},
                    {"text": "Shelf: 9, Book: 3"},
                    {"text": "Shelf: 9, Book: 4"},
                    {"text": "Shelf: 9, Book: 5"},
                    {"text": "Shelf: 9, Book: 6"},
                    {"text": "Shelf: 9, Book: 7"},
                    {"text": "Shelf: 9, Book: 8"},
                    {"text": "Shelf: 9, Book: 9"}
                  ]}}]}
        ]
      }
    }
  ]
}
```

</Spoiler>

## 関数方式

この方式では、ネストされた translate を使うことで 81 を超えるスコアに対応します。少し修正した `display_logic.mcfunction` を使い、追加のスコア保持者を 81 に設定します。

### 関数セットアップ

<CodeHeader>BP/functions/wiki/scoreboard/objectives/add_all.mcfunction</CodeHeader>

```yaml
## Query / State Machine
scoreboard objectives add wiki:q.is_initialised dummy

## Math
scoreboard objectives add wiki:const dummy
scoreboard objectives add wiki:array dummy
scoreboard objectives add wiki:element dummy
scoreboard objectives add wiki:var dummy
scoreboard objectives add wiki:delta_var dummy
```

<CodeHeader>BP/functions/wiki/scoreboard/players/set_all.mcfunction</CodeHeader>

```yaml
## Constants
scoreboard players set .1 wiki:const 1
scoreboard players set .8 wiki:const 8
scoreboard players set .9 wiki:const 9
scoreboard players set .81 wiki:const 81
```

<CodeHeader>BP/functions/wiki/event/world/on_initialise.mcfunction</CodeHeader>

```yaml
## Add Objectives
function wiki/scoreboard/objectives/add_all

## Initialize All Constant & Variable Scores
function wiki/scoreboard/players/set_all

## Mark World as Initialized
scoreboard players set .World wiki:q.is_initialised 1
```

<CodeHeader>BP/functions/wiki/main.mcfunction</CodeHeader>

```yaml
# ON FIRST WORLD LOAD
execute unless score .World wiki:q.is_initialised matches 1 run function wiki/event/world/on_initialise


# DYNAMIC DISPLAY LOGIC
execute as @a unless score @s wiki:delta_var = @s wiki:var run function wiki/rawtext/display_logic
```

### 関数 TICK.JSON

<CodeHeader>BP/functions/tick.json</CodeHeader>

```json
{
  "values": [
    "wiki/main"
  ]
}
```

### 関数システム

<CodeHeader>BP/functions/wiki/rawtext/display_logic.mcfunction</CodeHeader>

```yaml
## Normalize Selection Range
### Map scores higher than 81 back into a 1-81 range so the library logic can loop
scoreboard players operation @s wiki:delta_var = @s wiki:var
### Use modulo 81 to find the position within the current "Set"
execute if score @s wiki:delta_var matches 81.. run scoreboard players operation @s wiki:delta_var %= .81 wiki:const
### Ensure a remainder of 0 is treated as the 81st element of the previous set
execute if score @s wiki:delta_var matches 0 run scoreboard players set @s wiki:delta_var 81

## Calculate Element Index
### Determine the element, or which "book" should be chosen
scoreboard players operation @s wiki:element = @s wiki:delta_var
### Subtract by 1 to prevent remainder 0 for 9th position
scoreboard players operation @s wiki:element -= .1 wiki:const
### Perform modulo (%) operation and add 1 back to get its specific position (1-9)
scoreboard players operation @s wiki:element %= .9 wiki:const
scoreboard players operation @s wiki:element += .1 wiki:const

## Calculate Array Index
### Determine the array, or which "shelf" the book belongs to
scoreboard players operation @s wiki:array = @s wiki:delta_var
### Add 8 (divisor-1) to ensure it correctly moves to the next "shelf" even when value isn't a multiple of 9
scoreboard players operation @s wiki:array += .8 wiki:const
### Divide by 9 to get its specific position (1-9)
scoreboard players operation @s wiki:array /= .9 wiki:const

## Display Titleraw
### Call the specific display function based on which "Set" of 81 the player is currently in
execute as @s[scores={wiki:var=1..81}] run function wiki/rawtext/display/1
execute as @s[scores={wiki:var=82..162}] run function wiki/rawtext/display/2
execute as @s[scores={wiki:var=163..243}] run function wiki/rawtext/display/3

## Save Current Score
### Assign 'wiki:var' score to 'wiki:delta_var' score to compare change in the next game tick
execute unless score @s wiki:delta_var = @s wiki:var run scoreboard players operation @s wiki:delta_var = @s wiki:var
```

### Function Titleraw Templates

<CodeHeader>BP/functions/wiki/rawtext/display/1.mcfunction</CodeHeader>

```json
titleraw @a actionbar {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:array"}}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"1"}, {"text":"2"}, {"text":"3"}, {"text":"4"}, {"text":"5"}, {"text":"6"}, {"text":"7"}, {"text":"8"}, {"text":"9"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"10"}, {"text":"11"}, {"text":"12"}, {"text":"13"}, {"text":"14"}, {"text":"15"}, {"text":"16"}, {"text":"17"}, {"text":"18"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"19"}, {"text":"20"}, {"text":"21"}, {"text":"22"}, {"text":"23"}, {"text":"24"}, {"text":"25"}, {"text":"26"}, {"text":"27"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"28"}, {"text":"29"}, {"text":"30"}, {"text":"31"}, {"text":"32"}, {"text":"33"}, {"text":"34"}, {"text":"35"}, {"text":"36"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"37"}, {"text":"38"}, {"text":"39"}, {"text":"40"}, {"text":"41"}, {"text":"42"}, {"text":"43"}, {"text":"44"}, {"text":"45"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"46"}, {"text":"47"}, {"text":"48"}, {"text":"49"}, {"text":"50"}, {"text":"51"}, {"text":"52"}, {"text":"53"}, {"text":"54"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"55"}, {"text":"56"}, {"text":"57"}, {"text":"58"}, {"text":"59"}, {"text":"60"}, {"text":"61"}, {"text":"62"}, {"text":"63"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"64"}, {"text":"65"}, {"text":"66"}, {"text":"67"}, {"text":"68"}, {"text":"69"}, {"text":"70"}, {"text":"71"}, {"text":"72"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"73"}, {"text":"74"}, {"text":"75"}, {"text":"76"}, {"text":"77"}, {"text":"78"}, {"text":"79"}, {"text":"80"}, {"text":"81"}]}}]}]}}]}
```

<CodeHeader>BP/functions/wiki/rawtext/display/2.mcfunction</CodeHeader>

```json
titleraw @a actionbar {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:array"}}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"82"}, {"text":"83"}, {"text":"84"}, {"text":"85"}, {"text":"86"}, {"text":"87"}, {"text":"88"}, {"text":"89"}, {"text":"90"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"91"}, {"text":"92"}, {"text":"93"}, {"text":"94"}, {"text":"95"}, {"text":"96"}, {"text":"97"}, {"text":"98"}, {"text":"99"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"100"}, {"text":"101"}, {"text":"102"}, {"text":"103"}, {"text":"104"}, {"text":"105"}, {"text":"106"}, {"text":"107"}, {"text":"108"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"109"}, {"text":"110"}, {"text":"111"}, {"text":"112"}, {"text":"113"}, {"text":"114"}, {"text":"115"}, {"text":"116"}, {"text":"117"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"118"}, {"text":"119"}, {"text":"120"}, {"text":"121"}, {"text":"122"}, {"text":"123"}, {"text":"124"}, {"text":"125"}, {"text":"126"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"127"}, {"text":"128"}, {"text":"129"}, {"text":"130"}, {"text":"131"}, {"text":"132"}, {"text":"133"}, {"text":"134"}, {"text":"135"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"136"}, {"text":"137"}, {"text":"138"}, {"text":"139"}, {"text":"140"}, {"text":"141"}, {"text":"142"}, {"text":"143"}, {"text":"144"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"145"}, {"text":"146"}, {"text":"147"}, {"text":"148"}, {"text":"149"}, {"text":"150"}, {"text":"151"}, {"text":"152"}, {"text":"153"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"154"}, {"text":"155"}, {"text":"156"}, {"text":"157"}, {"text":"158"}, {"text":"159"}, {"text":"160"}, {"text":"161"}, {"text":"162"}]}}]}]}}]}
```

<CodeHeader>BP/functions/wiki/rawtext/display/3.mcfunction</CodeHeader>

```json
titleraw @a actionbar {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:array"}}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"163"}, {"text":"164"}, {"text":"165"}, {"text":"166"}, {"text":"167"}, {"text":"168"}, {"text":"169"}, {"text":"170"}, {"text":"171"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"172"}, {"text":"173"}, {"text":"174"}, {"text":"175"}, {"text":"176"}, {"text":"177"}, {"text":"178"}, {"text":"179"}, {"text":"180"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"181"}, {"text":"182"}, {"text":"183"}, {"text":"184"}, {"text":"185"}, {"text":"186"}, {"text":"187"}, {"text":"188"}, {"text":"189"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"190"}, {"text":"191"}, {"text":"192"}, {"text":"193"}, {"text":"194"}, {"text":"195"}, {"text":"196"}, {"text":"197"}, {"text":"198"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"199"}, {"text":"200"}, {"text":"201"}, {"text":"202"}, {"text":"203"}, {"text":"204"}, {"text":"205"}, {"text":"206"}, {"text":"207"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"208"}, {"text":"209"}, {"text":"210"}, {"text":"211"}, {"text":"212"}, {"text":"213"}, {"text":"214"}, {"text":"215"}, {"text":"216"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"217"}, {"text":"218"}, {"text":"219"}, {"text":"220"}, {"text":"221"}, {"text":"222"}, {"text":"223"}, {"text":"224"}, {"text":"225"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"226"}, {"text":"227"}, {"text":"228"}, {"text":"229"}, {"text":"230"}, {"text":"231"}, {"text":"232"}, {"text":"233"}, {"text":"234"}]}}]}, {"rawtext":[{"translate":"%%%%s", "with":{"rawtext":[{"score":{"name":"*", "objective":"wiki:element"}}, {"text":"235"}, {"text":"236"}, {"text":"237"}, {"text":"238"}, {"text":"239"}, {"text":"240"}, {"text":"241"}, {"text":"242"}, {"text":"243"}]}}]}]}}]}
```

## 多段ネスト翻訳（MNT）

この方式では、1 つの titleraw コマンドの中で複数のネストされた translate を使い、81 を超えるスコアに対応します。修正版の `display_logic.mcfunction` を使います。

:::warning

1 つの titleraw にどれだけの文字数を含められるかは、ゲームエンジンが重くなるまでの上限が分かっていません。また、編集や管理も難しくなります。

そのため、**[こちら](/commands/dynamic-displays#function-setup)** の関数セットアップを使うことをおすすめします。

:::

### MNT セットアップ

<CodeHeader>BP/functions/wiki/scoreboard/objectives/add_all.mcfunction</CodeHeader>

```yaml
## Query / State Machine
scoreboard objectives add wiki:q.is_initialised dummy

## Math
scoreboard objectives add wiki:const dummy
scoreboard objectives add wiki:var dummy
scoreboard objectives add wiki:delta_var dummy
scoreboard objectives add wiki:mapped_var dummy
scoreboard objectives add wiki:array.3d dummy
scoreboard objectives add wiki:array dummy
scoreboard objectives add wiki:element dummy
```

<CodeHeader>BP/functions/wiki/scoreboard/players/set_all.mcfunction</CodeHeader>

```yaml
## Constants
scoreboard players set .1 wiki:const 1
scoreboard players set .8 wiki:const 8
scoreboard players set .9 wiki:const 9
scoreboard players set .80 wiki:const 80
scoreboard players set .81 wiki:const 81
```

<CodeHeader>BP/functions/wiki/event/world/on_initialise.mcfunction</CodeHeader>

```yaml
## Add Objectives
function wiki/scoreboard/objectives/add_all

## Initialize All Constant & Variable Scores
function wiki/scoreboard/players/set_all

## Mark World as Initialized
scoreboard players set .World wiki:q.is_initialised 1
```

<CodeHeader>BP/functions/wiki/main.mcfunction</CodeHeader>

```yaml
# ON FIRST WORLD LOAD
execute unless score .World wiki:q.is_initialised matches 1 run function wiki/event/world/on_initialise


# DYNAMIC DISPLAY LOGIC
execute as @a unless score @s wiki:delta_var = @s wiki:var run function wiki/rawtext/display_logic
```

### MNT TICK.JSON

<CodeHeader>BP/functions/tick.json</CodeHeader>

```json
{
  "values": [
    "wiki/main"
  ]
}
```

### MNT システム

1〜729 のスコアには、3 次元 MNT システムを使います。

1〜6,561 のスコアには、4 次元 MNT システムを使います。

<CodeHeader>BP/functions/wiki/rawtext/display_logic.mcfunction</CodeHeader>

```yaml
## Calculate 3D Array Index
scoreboard players operation @s wiki:array.3d = @s wiki:var
scoreboard players operation @s wiki:array.3d += .80 wiki:const
scoreboard players operation @s wiki:array.3d /= .81 wiki:const

## Calculate Mapped Variable For 2D Array & Elements
scoreboard players operation @s wiki:mapped_var = @s wiki:var
scoreboard players operation @s wiki:mapped_var -= .1 wiki:const
scoreboard players operation @s wiki:mapped_var %= .81 wiki:const
scoreboard players operation @s wiki:mapped_var += .1 wiki:const

## Calculate 2D Array Index
scoreboard players operation @s wiki:array = @s wiki:mapped_var
scoreboard players operation @s wiki:array += .8 wiki:const
scoreboard players operation @s wiki:array /= .9 wiki:const

### Calculate Element Index
scoreboard players operation @s wiki:element = @s wiki:mapped_var
scoreboard players operation @s wiki:element -= .1 wiki:const
scoreboard players operation @s wiki:element %= .9 wiki:const
scoreboard players operation @s wiki:element += .1 wiki:const

## Save Current Score
scoreboard players operation @s wiki:delta_var = @s wiki:var
```

<Spoiler title="4 Dimensional MNT System">

<CodeHeader>BP/functions/wiki/rawtext/display_logic.mcfunction</CodeHeader>

```yaml
## Calculate 4D Array Index
scoreboard players operation @s wiki:array.4d = @s wiki:var
scoreboard players operation @s wiki:array.4d += .728 wiki:const
scoreboard players operation @s wiki:array.4d /= .729 wiki:const

## Calculate Mapped Variable For 3D Array
scoreboard players operation @s wiki:mapped_var = @s wiki:var
scoreboard players operation @s wiki:mapped_var -= .1 wiki:const
scoreboard players operation @s wiki:mapped_var %= .729 wiki:const
scoreboard players operation @s wiki:mapped_var += .1 wiki:const

## Calculate 3D Array Index
scoreboard players operation @s wiki:array.3d = @s wiki:mapped_var
scoreboard players operation @s wiki:array.3d += .80 wiki:const
scoreboard players operation @s wiki:array.3d /= .81 wiki:const

## Calculate Mapped Variable For 2D Array & Elements
scoreboard players operation @s wiki:mapped_var = @s wiki:var
scoreboard players operation @s wiki:mapped_var -= .1 wiki:const
scoreboard players operation @s wiki:mapped_var %= .81 wiki:const
scoreboard players operation @s wiki:mapped_var += .1 wiki:const

## Calculate 2D Array Index
scoreboard players operation @s wiki:array = @s wiki:mapped_var
scoreboard players operation @s wiki:array += .8 wiki:const
scoreboard players operation @s wiki:array /= .9 wiki:const

### Calculate Element Index
scoreboard players operation @s wiki:element = @s wiki:mapped_var
scoreboard players operation @s wiki:element -= .1 wiki:const
scoreboard players operation @s wiki:element %= .9 wiki:const
scoreboard players operation @s wiki:element += .1 wiki:const

## Save Current Score
scoreboard players operation @s wiki:delta_var = @s wiki:var
```

</Spoiler>

### MNT Titleraw テンプレート

- **3 次元 MNT ダウンロード:**
    - **[3d_MNT_template.mcfunction](https://github.com/BedrockCommands/developer-packs/releases/download/dd/3d_mnt_template.mcfunction)**
    - **[3d_MNT_readable_template.json](https://github.com/BedrockCommands/developer-packs/releases/download/dd/3d_mnt_readable_template.json)**
- **4 次元 MNT ダウンロード:**
    - **[4d_MNT_template.mcfunction](https://github.com/BedrockCommands/developer-packs/releases/download/dd/4d_mnt_template.mcfunction)**
    - **[4d_MNT_readable_template.json](https://github.com/BedrockCommands/developer-packs/releases/download/dd/4d_mnt_readable_template.json)**
