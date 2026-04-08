---
title: スプラッシュテキスト
description: Minecraft に独自のスプラッシュテキストを追加する方法を学びます。
category: General
license: true
mentions:
    - Peawies
    - QuazChick
---

スプラッシュは、タイトル画面で Minecraft のロゴの横に表示される黄色いテキストです。
Minecraft には元からたくさんのスプラッシュテキストがありますが、これらも変更できます。

## スプラッシュの編集

カスタムスプラッシュテキストの作成はとても簡単です。リソースパック内に `splashes.json` ファイルを作成して編集するだけです。スプラッシュテキストは書式設定 (`§`) にも対応しています。

<CodeHeader>RP/splashes.json</CodeHeader>

```json
{
    "canMerge": true,
    "splashes": [
        "my custom splash text",
        "and my second custom splash text!",
        "§4red §rand §agreen §rsplash text",
        "§l§kblablabla"
    ]
}
```

<WikiImage src="splash_text_example.png" caption="スプラッシュテキストの例" width="400" />

`canMerge` パラメータは、ゲームがバニラのスプラッシュテキストとカスタムスプラッシュテキストを一緒に表示するかどうかを決めます。
このパラメータを `true`{lang=json} にすると、スプラッシュテキストはバニラとカスタムの両方から選ばれます。
このパラメータを省略するか `false`{lang=json} にすると、スプラッシュテキストはカスタムのものだけから選ばれます。

`canMerge` を `false` にした状態で `splashes` 配列を空にすると、ゲームはスプラッシュテキストを一切表示しません。

スプラッシュテキストの長さに上限はありませんが、長すぎると複数行に分割されたり、読めないほど小さくなったりします。

<WikiImage src="long_splash_text_example.png" caption="長いスプラッシュテキストの例" width="400" />
