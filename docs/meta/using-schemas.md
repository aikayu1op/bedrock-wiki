---
title: スキーマの使い方
mentions:
    - SirLich
    - MedicalJewel105
    - 7dev7urandom
    - KalmeMarq
description: VSCode でアドオン開発にスキーマを使う方法。
---

JSON スキーマには 2 つの役割があります。1 つは、JSON の構造が正しいことを確認するための検証です。もう 1 つは、エディターの対応状況に応じて、最初から JSON を正しく書くのを助ける IntelliSense です。スキーマが便利なのは、間違えたときにすぐフィードバックをくれるからです。ただし、すべての間違いを検出できるわけではありません。

JSON スキーマ自体もただの JSON ファイルであり、それだけでは何もしません。自分で書くことも、他人のものを使うこともできます。Bedrock 向けのスキーマはいくつかすでに存在します。私が知る限り、どれも「公式」ではなく、Bedrock 自体が変化し続ける対象なので、見つけたスキーマには多少の誤りがあるかもしれません。つまり、問題はコード側にある場合もあれば、スキーマ側が間違っている場合もあります。もし誤ったスキーマを見つけたら、それを改善し、作者に pull request を送ることを検討してください。みんなの利益になります。

検証を機能させるには、バリデーターが必要です。ここには、エディター固有のものを含め、さまざまな選択肢があります。

## スキーマ

多くのスキーマがあり、細かな違いもたくさんあります。いくつか試して、どれが自分に最適か確認してみてください。

| 作者                                                                   | 対応内容                                                                                                  | 備考                                               |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [Assassin](https://github.com/aexer0e/bedrock-schema)                 | ビヘイビアパックのエンティティファイル                                                                       | この記事が最初に書かれた元のスキーマ               |
| [Tschrock's](https://github.com/bedrock-studio/bedrock-json-schemas/) | マニフェスト、アクターアニメーションコントローラー、アクターアニメーション、アクターリソース定義、レンダーコントローラー、ジオメトリ |                                                    |
| [stirante](https://github.com/stirante/bedrock-shader-schema/)        | シェーダー                                                                                                 |                                                    |
| [KalmeMarq](https://github.com/KalmeMarq/Bugrock-JSON-UI-Schemas/)    | JSON UI ファイル（`_ui_defs.json` と `_global_variables.json` を含む）                                      |                                                    |

## VSCode

このスキーマを VSCode の JSON ファイル内で使うには、ルートオブジェクトに次の行を追加するだけです。

`"$schema": "https://aexer0e.github.io/bedrock-schema/"`

見た目は次のようになります。

<CodeHeader></CodeHeader>

```json
"format_version": "1.14.0",
"$schema": "https://aexer0e.github.io/bedrock-schema/"
```

### ワークスペースにスキーマを追加する

ワークスペース内のすべてのファイルでこのスキーマを使いたい場合は、VS Code ワークスペースの設定に追加できます。

そのためには、ワークスペースを開いた状態で `Ctrl+Shift+P` を押し、`>Preferences: Open Workspace Settings (JSON)` と入力して選択します。そのあと、ルートオブジェクトに次の内容を追加してください。

<CodeHeader></CodeHeader>

```json
"settings": {
    "json.schemas": [
        {
            "fileMatch": [
                "*.json"
            ],
            "url": "https://aexer0e.github.io/bedrock-schema/"
        }
    ]
}
```

動作確認をするには、`.json` ファイルを作成してオブジェクトを開き、オートコンプリート候補が表示されるか確認してください。（表示される候補を強制的に出したい場合は `Ctrl+Space` を押しても構いません。）
