---
title: Math-Based Animations
tags:
    - intermediate
category: General
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - MedicalJewel105
    - yanasakana
    - Lufurrius
    - TheItsNameless
    - SmokeyStack
    - ThomasOrs
description: 数式を使って滑らかで印象的なアニメーションを作成します。
---

Math アニメーションは、キーフレームアニメーションの強力な代替手段です。一般的に `math-based animations` とは、Molang 式を使ってエンティティのジオメトリをアニメーションさせる考え方を指します。バニラのアニメーションはすべて math-based で、例を挙げると次のようになります。

<CodeHeader></CodeHeader>

```json
"leftarm" : {
    "rotation" : [ "((-0.2 + 1.5 * (math.abs(math.mod(q.modified_distance_moved, 13) - 6.5) - 3.25) / 3.25) * q.modified_move_speed) * 57.3 - v.agent.armxrotationfactor", 0.0, "-v.agent.armzrotation" ]
},
```

ご覧のとおり、math-based animations はかなり複雑で、理解しづらいことがあります。そのため、キーフレームの _完全な_ 置き換えではなく、_特殊用途の代替手段_ として扱うべきです。

これが、滑らかで理想的なループアニメーションを得るためのコストです。

![](animation-1.gif)

## Math アニメーションを書く

### 手動で書く

このようなアニメーションを手で書くには、アニメーションファイルを作成し、キーフレームを単一の値配列に置き換えます。文字列値も使えるので、その中に数式を書けます。バニラのファイルはこの種のアニメーションの非常に有用な参考資料になるため、ダウンロードして確認することを **強く** おすすめします。

処理を _視覚化_ したい人への重要なヒントとして、[Jannis](https://twitter.com/jannisx11) の [Molang Grapher](https://jannisx11.github.io/molang-grapher/) は、式を適切なグラフ上でシミュレートできます。

### Blockbench で作る

Blockbench では、ある程度まで、ほとんどの math-based animations を作成し、その場でプレビューできます。
まず、タイムラインの 0 フレームに新しいキーフレームを作成します。その後、左サイドバーのキーフレームパネルで Molang 式を追加・編集できます。キーフレームと数式の混在も可能です。
**覚えておいてください**。式を囲む引用符は常に省略します。引用符が必要なのは、生の JSON を直接編集するときだけです。

すべての Molang query が Blockbench で使えるわけではありません。これは、ゲーム内コンテキストが不足しているためです。コンテキスト依存の query を使うアニメーションをプレビューしたい場合は、キーフレームパネルのすぐ下にある Variable Placeholders セクションに値を追加してシミュレートできます。
たとえば `q.modified_distance_moved = time*8` を追加すると、`modified_distance_moved` query を 1 秒あたり 8 ブロックの速度でシミュレートできます。

## Query を使う

数学的な表現の中で最も大きく便利な道具は、多種多様な Molang の "Query" です。Query を使うと、外部情報を数式に取り込めます。

よく使う Query は次のとおりです。

-   `q.modified_distance_moved`
-   `q.modified_move_speed`
-   `q.anim_time`
-   `q.life_time`

これらは、攻撃時間や移動距離のようなゲーム世界の情報を取り込み、より動的で同期した動きを作るために使われます。

### アニメーションコントローラーを避ける

Query を使えば、アニメーションコントローラーを作らずに済みます。エンティティの速度が歩行アニメーションの速度に直接関係しているなら、動いていないエンティティは既定でアニメーションしません。

## 例

Math-based animation の具体的な適用例を以下に示します。この例では、Molang Query `"q.modified_distance_moved"` を使っています。

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.12.0",
    "animations": {
        "animation.car.wheel_spin": {
            "loop": true,
            "bones": {
                "front_wheels": {
                    "rotation": ["q.modified_distance_moved * -30", 0, 0]
                },

                "back_wheels": {
                    "rotation": ["q.modified_distance_moved * -30", 0, 0]
                }
            }
        }
    }
}
```

この例では、モデルの bone `front_wheels` と `back_wheels` が、`q.modified_distance_moved` から渡された情報をもとに X 軸周りに回転し、その後 -30 が掛けられます。

つまり、_停止中_ の車は **回転せず**、_走行中_ の車は **回転する** ということです。その回転速度は、車の移動速度に比例します。
