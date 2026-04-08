---
title: 文字列から数値へ
category: Tutorials
tags:
    - intermediate
mentions:
    - shanewolf38
    - SmokeyStack
    - ThomasOrs
description: このチュートリアルでは、数値文字列を数値に変換する方法と、数値をテキスト文字列に変換する方法を学びます。
---

このチュートリアルでは、数値文字列を数値に変換する方法と、数値をテキスト文字列に変換する方法を学びます。

## 概要

タイトル、アクションバー、スコアボード、その他のソースを通じて、文字列が UI に渡される場面はたくさんあります。渡された文字列に応じて要素を動的に変更したいとき、数値比較ができると非常に便利です。しかし、"34" や "89" のような数値文字列は通常テキストとして扱われ、数値とは比較できず、他の文字列としか比較できません。この場合は、その文字列を数値に変換する必要があります。

文字列を数値に変換するには、掛け算を利用します。数値文字列に数を掛ける、または数値を含む文字列からテキストを取り除くと、ゲームはその値を文字列ではなく数値として読み取ります。

## 文字列から数値へ

次のコードは、root panel に追加したとき、スコアボードのサイドバーにある最大値が 100 から 999 の範囲なら、その値を表示する label 要素を作成します。

<CodeHeader>RP/ui/hud_screen.json</CodeHeader>

```json
"string_to_number": {
    "type": "label",
    "text": "#player_score_sidebar",
    "bindings": [
        {
            "binding_name": "#player_score_sidebar",
            "binding_type": "collection",
            "binding_collection_name": "scoreboard_scores"
        },
        {
            "binding_type": "view",
            "source_property_name": "(#player_score_sidebar * 1)",   // スコアを文字列から数値に変換します
            "target_property_name": "#score"
        },
        {
            "binding_type": "view",
            "source_property_name": "((#score > 99) and (#score < 1000))",   // 100 から 999 の間だけ表示します
            "target_property_name": "#visible"
        }
    ]
}
```

最初のバインディングは、スコアボードのサイドバーの先頭値を読み取ります (このバインディングは文字列としてハードコードされています)。2 つ目のバインディングは、そのスコアに 1 を掛けることで数値に変換します (テキスト文字列を引く方法でも構いません)。3 つ目のバインディングは、スコアが 99 より大きく 1000 より小さい場合にのみ要素を表示します。

**注意:** 数値を整数ではなく浮動小数として読み取りたい場合は、1.0 で割るなど、浮動小数を使う式に変数やバインディングを渡してください (変数やバインディング経由である必要があり、浮動小数を直接置いても動作しません)。これは特に `#clip-ratio` バインディングで有用です。

## 数値から文字列へ

次のコードは、`strength: #` という形式のタイトルを渡したとき、`#` の数値だけを表示する label 要素を作成します。

<CodeHeader>RP/ui/hud_screen.json</CodeHeader>

```json
"number_to_string": {
	"type": "label",
	"text": "#text",
	"bindings": [
		{
			"binding_type": "global",
			"binding_name": "#hud_title_text_string"
		},
		{
			"binding_type": "view",
			"source_property_name": "('§z' + (#hud_title_text_string - 'strength: '))",
			"target_property_name": "#text"
		}
	]
}
```

タイトルやサブタイトルなどで、数値と一緒にテキストを渡す場合でも、この方法なら数値だけを表示できます。余分なテキストを引いて文字列を数値まで切り詰めたあと、数値の前にテキストを追加して文字列に変換します (`text` パラメータは数値を持つバインディングを読み取れません)。この場合、引き算の前後に括弧は必須ではありませんが、単に文字列を保つのではなく数値へ変換していることを示すために付けています。追加するテキスト `§z` は Minecraft に存在しない書式コードなので、数値表示に影響せず、ラベルの色パラメータにも干渉しません。数値の周囲に、すべては引き切れない可視テキストがある場合は、要素を `"clips_children": true` と適切なサイズを持つ panel で包むと表示から取り除きやすくなります。
