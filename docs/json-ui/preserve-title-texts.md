---
title: タイトルテキストの保持
description: 特定のキーワードがデータ内で見つかったときだけ更新され、バインディングデータを保持する再利用可能な UI 要素の作成方法を学びます。
category: Tutorials
tags:
    - intermediate
mentions:
    - shanewolf38
    - SmokeyStack
    - pedrodenovo
---

このチュートリアルでは、バインディングデータを保持できる堅牢で再利用可能な UI コンポーネントの作り方を学びます。この要素は、タイトルやサブタイトルのような入力データを監視し、そのデータに特定のキーワードが含まれている場合だけ表示を更新し、それ以外のデータは無視します。

## 概要

タイトル、サブタイトル、スコアボードを使って UI にデータを渡すのは、非常によく使われる手法です。ただし、多くの場合は、実行されたすべての title コマンドに反応するのではなく、特定の情報だけに反応する UI 要素が必要になります。

このガイドでは、キーワードを「監視」するコンポーネントの作り方を示します。キーワードを見つけると、その関連テキストを保存して表示します。重要なのは、自己完結していて、同じ画面上で複数回使っても競合しないコンポーネントにすることです。

この種の古い実装はバグが多かったり、`global` 変数を使っていたりして、再利用可能なコンポーネントには向いていませんでした。以下の方法では **`property_bag`** を使い、各コンポーネントのインスタンスごとに独自のローカルな「記憶」を持たせることで、真にモジュール化された構成にしています。

## 再利用可能なコンポーネント

以下の JSON は、非表示の子パネルによって制御される `label` 要素を作成します。このパネルが、キーワードの検出、テキストの保存、そして親のラベルから参照できるようにする処理のすべてを担当します。

### コード

このコードは、`hud_screen.json` のような任意の UI スクリーンファイルに配置できます。

<CodeHeader>RP/ui/hud_screen.json</CodeHeader>

```json
"preserved_title_display": {
    "$update_string": "update",
    "type": "label",
    "text": "#text",
    "controls": [
        {
            "data_control": {
                "type": "panel",
                "size": [0, 0],
                "property_bag": {
                    "#preserved_text": ""
                },
                "bindings": [
                    {
                        "binding_name": "#hud_title_text_string"
                    },
                    {
                        "binding_name": "#hud_title_text_string",
                        "binding_name_override": "#preserved_text",
                        "binding_condition": "visibility_changed"
                    },
                    {
                        "binding_type": "view",
                        "source_property_name": "(not (#hud_title_text_string = #preserved_text) and not ((#hud_title_text_string - $update_string) = #hud_title_text_string))",
                        "target_property_name": "#visible"
                    }
                ]
            }
        }
    ],
    "bindings": [
        {
            "binding_type": "view",
            "source_control_name": "data_control",
            "source_property_name": "(#preserved_text - $update_string)",
            "target_property_name": "#text"
        }
    ]
}
```

### 仕組み

このコンポーネントは、表示される **`label`** (`preserved_title_display`) と、頭脳の役割を果たす非表示の **`panel`** (`data_control`) の 2 つの主要部分に分かれています。

#### `data_control` のロジック

この不可視パネルが、主要な処理をすべて担います。

1.  **`property_bag`**: これが、コンポーネントを再利用可能にするための鍵です。

    -   `"#preserved_text": ""` は、`#preserved_text` という **ローカル変数** を作成して初期化します。
    -   `global` ではないため、`preserved_title_display` の各インスタンスはそれぞれ独自の `#preserved_text` を持ち、互いに干渉しません。これで、従来の方法の大きな欠点が解消されます。

2.  **`visibility_changed` バインディング**: このバインディングが、データ保存のトリガーです。`data_control` パネルの表示状態が変わると、現在のタイトル (`#hud_title_text_string`) をローカル変数 `#preserved_text` に即座にコピーします。

3.  **表示条件**: このバインディングは、条件が満たされたときだけパネルを「ちらつかせる」(1 フレームだけ表示する) ようにします。次の両方が真である必要があります。

    -   `not (#hud_title_text_string = #preserved_text)`: 入力されたタイトルは、すでに保存済みのものと **異なる** か？ (同じタイトルで再実行されるのを防ぎます)
    -   `not ((#hud_title_text_string - $update_string) = #hud_title_text_string)`: 入力されたタイトルに、こちらのキーワード (`$update_string`) が **含まれている** か？

キーワードを含む新しいタイトルが届くと、パネルが表示され、`visibility_changed` が発火してテキストを保存し、その後すぐに表示条件が false に戻ってパネルが隠れます。

#### `preserved_title_display` のバインディング

メインのラベル要素の役割は単純です。子要素の `data_control` からテキストを読み取るだけです。

-   `"source_control_name": "data_control"`: ラベルに、データを子要素から取得するよう指示します。
-   `source_property_name`: `(#preserved_text - $update_string)`: ローカル変数 `#preserved_text` に保存されたテキストからキーワード (`$update_string`) を取り除いて表示します。

これにより、UI 向けのきれいで効率的、かつ完全に再利用可能なコンポーネントが作れます。
