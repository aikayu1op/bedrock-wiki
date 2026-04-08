---
title: ソフトウェアと準備
category: Guide
description: 開発環境のセットアップ方法
nav_order: 3
prefix: "3. "
mentions:
    - SirLich
    - Dreamedc2015
    - sermah
    - cda94581
    - Joelant05
    - MedicalJewel105
    - TheItsNameless
    - TheDoctor15
    - ChibiMango
    - profeplaysminecraft
    - solvedDev
    - aym-i
    - SmokeyStack
    - ThomasOrs
    - QuazChick
---

アドオンの作成を始める前に、必要なツールとアプリケーションをインストールする必要があります。開発は Windows 10 が最も簡単ですが、該当する場合は Android と iOS 向けの代替手段も用意しています。

このページでは、インストールすべきソフトウェアの一覧と、セットアップのための設定のヒントを紹介します。

## Minecraft Bedrock Edition をダウンロードする

-   [Windows](https://xbox.com/games/store/minecraft-for-windows/9NBLGGH2JHXJ)
-   [Android](https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&hl=en)
-   [iOS](https://apps.apple.com/us/app/minecraft/id479516143)
-   [Linux で MC を動かす](https://discord.gg/VJTZ3KaTx6)

## エディターを選ぶ

アドオンはどんなテキストエディターでも作れますが、専用エディターを使うほうがずっと快適です。良いエディターは、コード補完、エラー検出、エディター内ドキュメントを提供してくれます。

初心者に最適なエディターについては意見が分かれますが、一般的には VSCode か bridge. を選べば間違いありません。モバイルの場合は、モバイル向けの代替エディターを使う必要があります。

### VSCode

VSCode は汎用テキストエディター兼 IDE です。VSCode を使えば、強力な拡張機能やアドオンに支えられながら、プレーンテキストでアドオンを編集できます。プログラマーや上級者にはとても良い選択肢です。

[⚙️ VSCode をインストール](https://code.visualstudio.com/)

<Spoiler title="VSCode の設定">

アドオン編集を簡単にする VSCode 向けのパッケージはいくつもあります。

-   [Blockception's Minecraft Bedrock Development](https://marketplace.visualstudio.com/items?itemName=BlockceptionLtd.blockceptionvscodeminecraftbedrockdevelopmentextension)
-   [.mcfunction support](https://marketplace.visualstudio.com/items?itemName=arcensoth.language-mcfunction)
-   [.lang support](https://marketplace.visualstudio.com/items?itemName=zz5840.minecraft-lang-colorizer)
-   [Bedrock Definitions](https://marketplace.visualstudio.com/items?itemName=destruc7i0n.vscode-bedrock-definitions)
-   [Prettify-json](https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json)
-   [Spell Checker (for writing wiki)](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
-   [Snowstorm Particle Editor](https://marketplace.visualstudio.com/items?itemName=JannisX11.snowstorm)
-   [UUID Generator](https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator)

</Spoiler>

### bridge.

[bridge.](https://bridge-core.app/) は、Minecraft アドオン向けの軽量な専用 IDE です。[革新的な機能](https://bridge-core.app/guide/features/)として、[エンティティとブロックのプレビュー](https://bridge-core.app/guide/features/index.html#file-previews)、[豊富なオートコンプリートとファイル検証](https://bridge-core.app/guide/features/index.html#auto-completions-and-validation)、[プリセットを使った高度なファイル作成](https://bridge-core.app/guide/features/index.html#advanced-file-creation) などがあります。
bridge. には、経験豊富なアドオン制作者向けの通常のテキストエディターと、初心者が JSON ファイル編集を始めやすいツリーエディターが含まれています。

<Spoiler title="bridge. の設定">

-   [bridge. を使うべき理由について詳しく読む](https://bridge-core.app/guide/why-bridge)
-   [bridge. で始めるためのガイドを読む](https://bridge-core.app/guide/index)
-   [bridge. online を試す](https://editor.bridge-core.app/)

</Spoiler>

### モバイルエディター

#### Android

-   [ACode Editor](https://play.google.com/store/apps/details?id=com.foxdebug.acodefree)
-   [bridge. v2](https://bridge-core.app/)

#### iOS

-   [Kodex](https://apps.apple.com/us/app/kodex/id1038574481)
-   [bridge. v2](https://bridge-core.app/)

## Blockbench

-   [Blockbench](https://blockbench.net/) は、Minecraft のモデル、テクスチャ、アニメーションを作るのによく使われる「箱型 3D モデルエディター」です。モバイルでも使える Web ブラウザー版もあります。

## 画像エディター

画像エディターを選ぶときは、Minecraft の伝統的なスタイルがシンプルな 16x16 のピクセルアートで構成されていることを覚えておくとよいでしょう。使える強力で無料のアートソフトはたくさんあります。ただし、その多くは Minecraft のグラフィック制作に必要以上の機能を持っており、それらを習得するには時間がかかります。

:::tip
自分にとって使いやすく、快適だと感じるプログラムを選びましょう。多くのアドオン制作者は、用途ごとに別のアートソフトを使い分けています。（例: ほとんどのアートは paint.net、Minecraft ブロックのアニメーションは Piskel など。）自分に合うものを選んでください！
:::

### Krita

Krita は、アーティストに無料で強力なデジタルアートツールを提供することを目標とした、強力なオープンソースのアートプログラムです。Minecraft に必要な機能は十分にそろっており、Mac と PC のどちらでも使えます。

-   **+ 長所:** 直感的な UI のピクセルブラシを含む多くの機能があります。
-   **- 短所:** ツールに慣れるまで少し時間がかかります。

[Krita をダウンロード](https://krita.org/en/)

### GIMP

GIMP は Krita に似た、無料でオープンソースのデジタルアートプログラムで、非常に多くのツールを備えています。Krita がイラスト寄りなのに対して、GIMP は画像加工（Photoshop のような用途）に重点を置いています。GIMP も Mac と PC のどちらでも使えます。

-   **+ 長所:** Minecraft のアート編集に十分なツールがあります
-   **- 短所:** インターフェースが直感的ではありません。強力ではありますが、習得にはかなりの学習コストがあります。

[GIMP をダウンロード](https://www.gimp.org/)

### Paint.NET

Paint.NET は、シンプルでありながら強力な画像編集・アートソフトです。Krita や GIMP のように膨大なツールがあるわけではありませんが、その代わりにシンプルさと使いやすさがあります。

-   **+ 長所:** 使いやすく、覚えやすいです。
-   **- 短所:** Windows でしか使えません。

[Paint.NET をダウンロード](https://www.getpaint.net)

### Pixilart

Pixilart は、Web ベースのピクセルアートソフトです。ピクセルアートに特化しているため、非常にシンプルに使えます。リサイズ機能も強力で、ピクセルアートの細部を失わずにサイズ変更できるので便利です。

-   **+ 長所:** 使いやすく、覚えやすいです。ピクセルアート専用に作られています。
-   **- 短所:** インターネット接続が必要です。欲しい機能がない場合があります。

[Pixilart を使う](https://www.pixilart.com/)

### Piskel

Piskel は、ピクセル化されたスプライト（またはゲームキャラクターのアニメーション）を作ることに特化した Web ベースのピクセルアートソフトです。Pixilart と同様に、使い方は簡単です。フリップブック（Minecraft のブロックやスキンのアニメーション）を作るのにも向いています。

-   **+ 長所:** 使いやすく、覚えやすいです。フリップブックアニメーションに最適です
-   **- 短所:** インターネット接続が必要です。基本的なツールしかありません。

[Piskel をダウンロード](https://www.piskelapp.com/)

### Libresprite

LibreSprite は、スプライトを作成・アニメーション化するための無料のオープンソースプログラムです。Aseprite の最後の GPLv2 コミットをベースにしています。

-   **+ 長所**: 基本的で使いやすく、カスタマイズ可能で、ピクセルアーティスト向けに作られています。
-   **- 短所**: Mac では動かない場合があります。小規模なコミュニティだけで保守されています。

## 追加資料

:::tip
このガイドではアドオン開発の最初の段階を案内しますが、網羅的ではありません。アドオンについてさらに学ぶには、ほかの情報源も使う必要があります。ここではそのリンクを紹介します。
:::

### Discord に参加する

このガイドで助けが必要なら、[Discord サーバー](/discord) に参加するのが最適です。

### Vanilla Packs

Minecraft のバニラファイルは、参考資料としてとても役立ちます。これらのパックをダウンロードして、パソコンの使いやすい場所に保存しておきましょう。アイテム、エンティティ、アニメーションの例が必要になったときに、これらのファイルを参考にできます。

-   [Vanilla packs](https://github.com/Mojang/bedrock-samples/releases)

### ドキュメント

アドオンに関する良質なドキュメントはたくさんあります。できるだけ目を通し、ブックマークも検討してください。

-   [bedrock.dev](https://bedrock.dev/): 参考ドキュメント。
-   [wiki.bedrock.dev](https://wiki.bedrock.dev/): チュートリアルとガイド。
-   [MS Docs](https://docs.microsoft.com/en-us/minecraft/creator/): アドオン向けの Microsoft 公式クリエーターポータル。

### トラブルシューティングと追加ヘルプ

-   JSON 形式がかなり難しく感じるなら、[JSON の理解ガイド](/guide/understanding-json) を読んでみてください。
-   変なエラーで行き詰まったら、[トラブルシューティングガイド](/guide/troubleshooting) を読んでみてください。
-   追加ツールは [ここ](/meta/useful-links) から見られます。

## 次へ

:::tip 学んだこと

-   [x] 必要なソフトウェアをインストールした
-   [x] Vanilla のサンプルファイルをダウンロードした
-   [ ] `com.mojang` フォルダーを見つけて、アドオンのワークスペースを作成する
-   [ ] 最初のアドオンの manifest とパックアイコンを作成する

:::

<Button link="/guide/project-setup">次へ: プロジェクトのセットアップ</Button>
