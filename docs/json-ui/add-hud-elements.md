---
title: HUD 要素の追加
category: Tutorials
tags:
    - beginner
mentions:
    - shanewolf38
    - SmokeyStack
description: このチュートリアルでは、hud 画面に要素を追加する方法を学びます。
---

このチュートリアルでは、hud 画面に要素を追加する方法を学びます。

## 概要

ゲーム中の大半で表示される hud 画面には、プレイヤーにとって重要な情報が表示されます。特定のイベント完了後のポップアップテキスト、プレイヤーのエネルギー量を示すスタミナバー、プレイヤーの速度を示すスピードメーターなど、この画面に要素を追加したい場面はたくさんあります。

作成した要素を hud 画面に追加するには、`modification` パラメータを使って `root_panel` に新しい `control` (要素) を追加する必要があります。root panel は、hud に表示されるほぼすべての要素を含む panel 型の要素です。

## 個別の要素

次のコードは、画面上部に黒い四角を表示する image 要素と、画面右上に「hud text」を表示する label 要素を作成し、さらに `root_panel` に変更を加えてそれらを hud 画面に追加します。

<CodeHeader>RP/ui/hud_screen.json</CodeHeader>

```json
"hud_square": {
	"type": "image",
	"texture": "textures/ui/Black",   // バニラのテクスチャ
	"anchor_from": "top_middle",
	"anchor_to": "top_middle",
	"size": [ 64, 64 ],
	"offset": [ 0, 4 ]
},

"hud_text": {
	"type": "label",
	"text": "hud text",
	"anchor_from": "top_right",
	"anchor_to": "top_right",
	"offset": [ -4, 4 ]
},

"root_panel": {
	"modifications": [
		{
			"array_name": "controls",
			"operation": "insert_front",
			"value": [
				{ "hud_square@hud.hud_square": {} },
				{ "hud_text@hud.hud_text": {} }
			]
		}
	]
},
```

hud 画面に追加されるすべての要素は、root panel の `modifications` の `value` セクションに列挙されます。追加する要素に指定する名前空間 (例: `@hud.hud_square`) は、別の名前空間に存在する要素を追加する場合は変更できます。たとえば、`hud_square` 要素が `scoreboard` 名前空間の scoreboards.json UI ページで作成されているなら、root panel に追加するときは `@scoreboard.hud_square` を使います。

## 組み合わせた要素

整理の都合上、たくさんの要素を root panel に個別で追加しない方がよい場合があります。次のコードでは、先ほど定義した `hud_square` と `hud_text` の要素 (表示は省略) を `hud_elements_panel` という panel 要素にまとめ、その要素を hud 画面の root panel に追加しています。結果は「個別の要素」の例と同じです。

<CodeHeader>RP/ui/hud_screen.json</CodeHeader>
```json
"hud_elements_panel": {
	"type": "panel",
	"controls": [
		{ "hud_square@hud_square": {} },
		{ "hud_text@hud_text": {} }
	]
},

"root_panel": {
"modifications": [
{
"array_name": "controls",
"operation": "insert_front",
"value": [
{ "hud_elements_panel@hud.hud_elements_panel": {} }
]
}
]
},

```

`hud_elements_panel` には size パラメータを直接定義していないため、親 (`root_panel`) の size を継承します。これにより、子のアンカー指定や `%` サイズなどが hud 画面を基準に動作します。
```
