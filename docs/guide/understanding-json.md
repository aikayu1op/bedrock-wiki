---
title: JSON の理解
category: Extra
description: JSON への最初の一歩
nav_order: 1
prefix: "a. "
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - Dreamedc2015
    - sermah
    - cda94581
    - QuazChick
---

::: tip
これは付録ページです。ガイドの最初から始めるなら[ここ](/guide/introduction)です。
:::

JSON は、テキストファイルを書くためのシンプルな形式で、人間にもコンピューターにも理解しやすいように作られています。Bedrock では .json ファイルが Add-On の「言語」として使われるため、JSON を読み書きする方法をしっかり理解しておく必要があります。JSON を初めて聞いたなら、[このチュートリアル](https://www.digitalocean.com/community/tutorials/an-introduction-to-json) を読むことをおすすめします。正しい JSON ファイルの書き方に必要なことがひと通り学べます。

## 正しい JSON

JSON を書くときに大事なのは、_完全にエラーがない_ 必要があることです。そうでなければ、まったく動きません。1 文字でも間違っていたり、余分なカンマが 1 つあるだけで、ファイル全体が失敗します。そのため、正しい JSON を書くことはとても重要です。

[json lint](https://jsonlint.com/) というオンラインツールを使えば、JSON が正しいかどうかを判定できます。コードをサイトに貼り付けて `Validate JSON` を押すだけです。コードが正しいかどうかに加えて、エラーの場所と種類も表示されます。

## データ構造

JSON では、データをいくつかの形式で書けます。それぞれの形式は、表現したいデータの種類に特化しています。使える構造は次のとおりです。

| Name   | Example  | Explanation                            |
| ------ | -------- | -------------------------------------- |
| String | "hello!" | 単語や文字。引用符が必要です。         |
| Int    | 15       | 数値。引用符は不要です。               |
| Float  | 1.2      | 小数。引用符は不要です。               |
| Bool   | true     | true か false のどちらかです。引用符は不要です。 |

それでは、.json 形式ではこうなります。

```json
{
    "my_string": "hello!",
    "my_int": 15,
    "my_float": 1.2,
    "my_bool": true
}
```

これらの単純な構造に加えて、特別な構造も 2 つあります。特別な構造は、ほかのデータを _入れ子_ にするときに使います。

### 配列

配列は 2 つの角かっこ `[]` で書きます。これは _一覧_ を表します。中に _ほかのデータ構造_ を入れられます。各 _要素_ はカンマで区切る必要があります。

例:

| Structure       | Comment                               |
| --------------- | ------------------------------------- |
| [1, 2, 3]       | 整数の一覧。                           |
| ["Red", "blue"] | 文字列の一覧。引用符に注目してください！ |

それでは、.json 形式ではこうなります。

```json
{
    "my_ints": [1, 2, 3],
    "my_strings": ["Red", "blue"]
}
```

### オブジェクト

オブジェクトは 2 つの波かっこ `{}` で書きます。オブジェクトは、_名前付き_ のデータ構造を含む特別な構文です。名前は `key` と呼ばれ、構造は `value` と呼ばれます。このページの前半の例は、ほかのデータ型の例を含んだ _dictionary_ でした。

この key-value 構文は次のように書きます。`"<key>": <any structure>`。key を囲む引用符と、コロンに注目してください。

ここに、いくつかの _key-value-pairs_ を含む object の例があります。

<CodeHeader></CodeHeader>

```json
{
    "a_list_of_integers": [1, 2, 3],
    "is_json_cool": true
}
```

各 key-value pair はカンマで区切る必要があります。

object の key-value pair は、その object の _子_ である、または object の中に _入っている_ と表現します。

## JSON の構造

Minecraft では、JSON ファイルは常に _object_ から始まります。これは 2 つの波かっこ `{}` で表されることを覚えておきましょう。これを _最上位 object_ と呼びます。私たちはこの object の _内側_ に、key-value pair の形でコードを書きます。

Minecraft アドオンで使われる、簡単な json ファイルの例を見てみましょう。

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.12.0",
    "animations": {
        "animation.car.wheel_spin": {
            "loop": true,
            "animation_length": 1.0,
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

形式をよく見てください。すでに学んだデータ構造だけで、全体が組み立てられているのがわかるはずです。JSON の練習をしたいなら、次の質問に答えてみてください。

-   _最上位 object_ にはキーがいくつありますか。名前を挙げられますか？
-   `format_version` の値は何ですか？
-   `"loop"` キーにはどの種類のデータが入っていますか？（string、boolean など）

## トラブルシューティングの例

Discord やオンラインで受け取るフィードバックを理解する助けになるよう、いくつか例を紹介します。JSON のエラーについて話すときは専門用語を使うことが多いので、このセクションで用語に慣れておきましょう。

---

あなたはこう書きました: `"format_version": 1.12`

相手はこう言いました: _format_version の値の型が違います。文字列であるべきです。_

`type` は、`String`、`Int`、`Float`、`Array`、`Object` のどれかの構造を指すことを覚えてください。コードを見ると、`format_version` に `String` ではなく `Float` を入れているのがわかります。`"1.12"` の周りに引用符を付ければ修正できます。

---

あなたはこう書きました: `[1 2 5 6]`

相手はこう言いました: _配列のカンマが足りません。_

配列の要素はカンマで区切る必要があります。配列は `[1, 2, 5, 6]` のようになるはずです。

---

相手はこう言いました: _「format version を description の中に入れてしまっています。最上位の外側に置く必要があります。」_

これは、`"format_version"` の key-value pair が description の _子_ になっているという意味です。key-value pair を description object からコピーして、最上位に置いてください。
