---
title: Aseprite アニメーション
description: Aseprite でアニメーションを作成し、JSON UI で表示する方法を学びます。
category: Tutorials
mentions:
    - TheDataLioness
    - shanewolf38
    - TheItsNameless
    - LeGend077
    - stirante
---

## Aseprite の紹介

[Aseprite](https://www.aseprite.org/) は、スキンやリソースパックを簡単に作れるよう設計された、有料のピクセルアート制作アプリです。
豊富なツール、充実したドキュメント、チュートリアルを備え、あらゆるレベルのアーティストに対応しています。
ソースコードは、個人利用に限り無料でコンパイルできます。

[LibreSprite](https://libresprite.github.io/) は、Aseprite の代替となる無料かつオープンソースのツールです。
Aseprite の最後のオープンソース版から分岐したもので、このチュートリアルは LibreSprite でも実践できます。

## Aseprite でアニメーションを作成する

`frameimage` という名前で 1 から 5 まで連番のフレーム画像があるとします。
最初の画像を読み込むと、Aseprite は同じ名前で番号だけが異なる他の画像を自動的に認識します。
その後、それらを正しい順序で並べてアニメーションを作成します。

<FolderView :paths="[
    'frameimage1.png',
    'frameimage2.png',
    'frameimage3.png',
    'frameimage4.png',
    'frameimage5.png'
]" />

矢印キーで全フレームを移動し、`Enter` キーでアニメーションの再生と一時停止を切り替えます。
`Tab` キーでタイムラインを開き、個別のフレームを選択できます。
タイムライン上のフレームを右クリックすると、各種設定にアクセスできます。

アニメーションを書き出すには、`Ctrl + E` のショートカットを使うか、`ファイル` -> `スプライトシートに書き出し` に進みます。
出力設定では、`Output file` と `JSON Data` を選択してください。
`Hash` と `Array` の選択肢があるドロップダウンが表示されます。
`Array` オプションを選択しないと、正しく書き出されません。

これで、`SpriteSheet` 画像と JSON ファイルの 2 つができているはずです。
両方のファイルが同じ名前で、拡張子だけが異なっていることを確認してください。

## JSON UI で Aseprite アニメーションを使う

`aseprite_flip_book` アニメーションタイプは、`image` 型要素の `uv` プロパティにしか使えません。

<CodeHeader>RP/ui/example_file.json</CodeHeader>

```json
{
    "image_element": {
        "type": "image",
        "texture": "textures/wiki/ui/my_sprite_file",
        "uv_size": [32, 32],
        "uv": "@example_namespace.image_uv_animation"
    },

    "image_uv_animation": {
        "anim_type": "aseprite_flip_book",
        "initial_uv": [0, 0]
    }
}
```

`texture` フィールドには、書き出したファイルの拡張子を除いたパスを設定します。
`uv_size` フィールドには、1 フレームの幅と高さを設定します。
