---
title: 構造物のプレゼンテーション
category: Ideas
mentions:
    - MedicalJewel105
    - LeGend077
    - ThomasOrs
---

このページでは、構造物の見せ方をいくつか紹介し、アドオンやその機能をわかりやすく示せるようにします。

## 見せ方

構造物を人に見せる方法はいろいろあります。たとえば、次のようなものです。

-   構造物をゲーム内でスクリーンショットする。
-   ストラクチャーブロック内でスクリーンショットする。
-   構造物を 3D オブジェクトとして作成する。

以下では、ピリジャーの前哨基地を例にして、3 つの方法を順に見ていきます。

### ゲーム内スクリーンショット

これは最も簡単な方法で、手早く実行できます。世界の文脈の中で構造物を見せられる利点もありますが、欠点もあります。撮影場所を探す必要があったり、良い角度を見つけにくかったりします。

![](in-game.png)

### ストラクチャーブロック内で撮る

この方法なら、ゲーム内で撮るときのいくつかの欠点を避けられます。ほかのブロックを映さず、構造物だけに集中できます。

![](structure-block-0.png)

[JSON UI](/json-ui/json-ui-intro) を編集すれば、背景色を変えたり、ほかの要素を消したりして、この方法をさらに改善できます。

![](structure-block-1.png)

あるいは、@minato4743 の **Structure Presentation Pack** を使えば手順を簡略化できます。既定の色やグラデーションに加えて、プレビュー矢印を隠す切り替えも含まれています。

<Button
    link="/assets/packs/visuals/structure-presentation/structure_presentation_pack.mcpack"
    download
>
    Pack をダウンロード
</Button>

![](structure_presentation_pack.png)

![](pack_gradient_result.png)

### レンダリングした 3D オブジェクト

構造物は、ストラクチャーブロックの UI から 3D モデルとして書き出せます。

![](model-render.png)

この方法は Windows ユーザーのみ利用できます。
Paint 3D で簡単なレンダリングを作ることも、Blender でより高度なレンダリングを作ることもできます。
