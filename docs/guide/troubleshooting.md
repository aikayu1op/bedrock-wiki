---
title: トラブルシューティング
category: Extra
description: アドオンの問題を解決するためのシンプルなガイドです。
prefix: "c. "
nav_order: 3
tags:
    - help
mentions:
    - SirLich
    - Joelant05
    - destruc7ion
    - Dreamedc2015
    - MedicalJewel105
    - Lufurrius
    - SmokeyStack
    - QuazChick
---

Minecraft でアドオンを作るのは、_慣れてしまえば_ 比較的わかりやすい作業です。最初のうちは、たいてい苛立ちやバグが多い過程になります。この文書には、厄介なバグを直すためのヒントやコツ、そしてベストプラクティスがまとめられています。

特定の分野のトラブルシューティングに入る前に、ページ全体を読んでください。

## リロード

まず、Minecraft を必ず再読み込みしてください。つまり、ゲームを完全に終了してから再起動します。これは多くのエラーを見つける助けになります。特に、テクスチャや loot table のようにファイルパス経由で参照されるアセットに関するエラーに有効です。

## 環境

厄介なバグを防ぐ最善の方法は、正しい環境で作業することです。エディターのおすすめについては、[ソフトウェア準備ドキュメント](/guide/software-preparation) を確認してください。

最も重要なのは、JSON リンターを用意すること（または [オンライン JSON リンター](https://jsonlint.com/) を使うこと）と、パックを `development_behavior_packs` と `development_resource_packs` に置くことです。
パックを通常のフォルダーに置いたままだと、「pack caching」問題が起こることがあります。これは、一方の場所でファイルを編集しているのに、ゲーム側が古いファイルを使い続けてしまう現象です。

## Content Log

:::warning Content Log を使いましょう！
Content log は、アドオンをデバッグするために使える最良のツールです。この手順は飛ばさないでください！
:::

:::tip
エラーはワールドの読み込みごとに消去されないため、Content log に表示されるエラーは以前の読み込み時の _古い_ エラーである場合があります。
:::

「Content Log」は、パック内で見つかった問題の一覧です。Minecraft は、ワールドを読み込むたび、またはグローバル Resource pack を変更するたびに、この一覧を生成します。

次のような問題を検出できます。

-   テクスチャパスが間違っている
-   コンポーネント名のスペルミス
-   JSON 形式が正しくない

Content log は `Settings > Creator` で有効にできます。Content log は読み込み時にゲーム内へ表示され、プレイ中にさらにエラーが発生した場合も表示されます。

![](/assets/images/guide/content_log.png)

### Content Log のファイル

Content log は `.txt` 形式で次の場所に保存されます。

-   Windows: `%APPDATA%\logs`
-   Android: `/storage/emulated/0/Android/data/com.mojang.minecraftpe/files/games/com.mojang/logs`

## バニラサンプルの利用

バニラの resource pack と behavior pack は [ここ](https://github.com/Mojang/bedrock-samples) で見つけられます。
バニラと自分のコードを比較すると、問題の特定に役立つかもしれません！

## JSON スキーマ

JSON Schema はファイル検証に役立つツールです。JSON Schema については [こちら](/meta/using-schemas) で詳しく学べます。

## アドオンのトラブルシューティング

### ブロック

<Button link="/blocks/troubleshooting-blocks">ブロックのトラブルシューティング</Button>

### エンティティ

<Button link="/entities/troubleshooting-entities">エンティティのトラブルシューティング</Button>

### アイテム

<Button link="/items/troubleshooting-items">アイテムのトラブルシューティング</Button>
