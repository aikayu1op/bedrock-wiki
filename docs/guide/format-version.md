---
title: フォーマットバージョン
description: format version とは何か、各ファイルにどのバージョンを選ぶべきかを学びます。
category: Extra
prefix: "e. "
nav_order: 5
mentions:
    - SirLich
    - SmokeyStack
    - ThomasOrs
    - Xterionix
    - QuazChick
---

Format version は、Minecraft: Bedrock Edition のアドオンシステムで重要な要素です。多くのファイルの先頭に次のような形で書かれています。`"format_version": "1.21.0"`。これはファイルの「バージョン番号」のようなものだと考えるとよく、ここで選ぶ数字はとても重要です。選んだ format version によって、そのファイルで使える構文や機能が決まります。

:::tip
間違った format version を選ぶのは、よくあるエラーの原因です。トラブルシューティングの場面では、「そのアイテムの format version は何ですか？」のように聞かれることがあります。その質問に答えられるようにしておきましょう。
:::

## なぜ Format Version があるのか？

Format version はアドオンシステムに _バージョン_ を付けるために存在し、Minecraft が新機能を追加しても古いアドオンを壊さないようにする仕組みです。たとえば、`1.8.0` の format version を持つ RP の Entity ファイルと、`1.10.0` の format version を持つ RP の Entity ファイルでは、構文がかなり異なります。json の `format_version` キーを使うことで、どのバージョンを使うかを自分で決められます。

ファイルごとに format version を指定できるので、Minecraft はあなたのアドオンをかなり柔軟に解釈できます。異なる format version をアドオン内で混在させることは、完全に可能であり、想定された使い方でもあります。

## Format Version はゲームバージョンではない

format version は _サブシステムごと_ のもので、基本的にはゲーム本体のバージョンとは一致しない、という点を理解することがとても重要です。つまり、ファイルの種類ごと（item、rp entity、bp entity、recipe）に、別々のバージョニングシステムが使われます。

たとえば、RP entity ファイルの `"format_version": "1.8.0"` は「_item system_ の `1.8.0` を使う」という意味です。「_アドオンシステム_ の `1.8.0` を使う」という意味ではありません。

そのため、ファイル形式によってはとても「古い」format version が使われています。これを最新のゲームバージョン、たとえば `1.17.0` に置き換えたくなるかもしれませんが、そうしないでください。

## Format Version の修正

Minecraft には、format version を間違えて書いた場合にそれを「修正」する仕組みがあります。この仕組みはよく理解されているわけではなく、すべてのシステムで有効でもなく、頼るべきでもありません。ただし、間違った format version は、有効な version に当たるまでしばしば「下方向に」補正されることがあります。たとえば `1.11.0` の RP entity ファイルは、単に `1.10.0` として解釈され、エラーにならないことがあります。

この仕組みは、間違った format version を選んだとしても壊れたファイルを作る可能性が下がるという意味で役立ちます。

## Format Version の選び方

一般的には、どのファイル形式でも正しい format version を選ぶための簡単なコツがあります。

たとえば Recipe ファイルを作っていると想像してください。

1.  [Vanilla Packs](/guide/download-packs) をインストールします。
2.  いくつかの recipe ファイルを見て、どの format version が最も多く使われているか、または最新かを確認します。
3.  その format version を自分のファイルで使います。

この単純な手順で、そのファイルに有効な format version を選びやすくなります。

## アセット種類ごとの Format Version

このセクションでは、バニラゲームで使われている format version を、それぞれの出現回数とともに一覧表示します。

-   `⭐` は推奨 version を示します。

_最終更新: 1.21.50_

### Resource Pack

| Format                | Version     | Count |
| --------------------- | ----------- | ----: |
| Animation Controllers | 1.10.0 ⭐   |    65 |
| Animations            | 1.10.0 ⭐   |     6 |
| Animations            | 1.8.0       |   130 |
| Attachable            | 1.10.0 ⭐   |    30 |
| Attachable            | 1.10        |     1 |
| Attachable            | 1.8.0       |    25 |
| Blocks Catalog        | 1.21.40 ⭐  |     1 |
| Client Entity         | 1.10.0 ⭐   |    88 |
| Client Entity         | 1.8.0       |    84 |
| Fog Settings          | 1.16.100 ⭐ |    73 |
| Geometry              | 1.16.0      |     6 |
| Geometry              | 1.12.0      |    30 |
| Geometry              | 1.10.0      |     5 |
| Geometry              | 1.8.0       |    91 |
| Particle Effect       | 1.10.0 ⭐   |   176 |
| Render Controllers    | 1.10.0 ⭐   |    24 |
| Render Controllers    | 1.8.0       |    98 |
| Sound Definitions     | 1.20.20 ⭐  |     1 |

### Behavior Pack

| Format      | Version    | Count |
| ----------- | ---------- | ----: |
| Entity      | 1.21.50 ⭐ |     9 |
| Entity      | 1.21.60    |    17 |
| Entity      | 1.21.30    |     1 |
| Entity      | 1.21.20    |     2 |
| Entity      | 1.21.10    |     9 |
| Entity      | 1.21.0     |    28 |
| Entity      | 1.19.80    |     1 |
| Entity      | 1.19.60    |     1 |
| Entity      | 1.19.50    |     1 |
| Entity      | 1.19.30    |     1 |
| Entity      | 1.18.20    |     1 |
| Entity      | 1.18.10    |     3 |
| Entity      | 1.17.10    |     1 |
| Entity      | 1.16.210   |     1 |
| Entity      | 1.16.0     |    19 |
| Entity      | 1.14.0     |     6 |
| Entity      | 1.13.0     |     2 |
| Entity      | 1.12.0     |    14 |
| Entity      | 1.10.0     |     1 |
| Entity      | 1.8.0      |     2 |
| Item        | 1.21.30 ⭐ |    17 |
| Item        | 1.20.50    |     5 |
| Item        | 1.16.0     |     1 |
| Item        | 1.16       |     1 |
| Item        | 1.14       |     1 |
| Item        | 1.10       |    45 |
| Recipe      | 1.21.50 ⭐ |    13 |
| Recipe      | 1.21.60    |     4 |
| Recipe      | 1.21.30    |     2 |
| Recipe      | 1.20.60    |     3 |
| Recipe      | 1.20.30    |    19 |
| Recipe      | 1.20.10    |  1315 |
| Recipe      | 1.16       |   139 |
| Recipe      | 1.12       |    67 |
| Spawn Rules | 1.17.0 ⭐  |     1 |
| Spawn Rules | 1.11.0     |     1 |
| Spawn Rules | 1.8.0      |    51 |
| Trade Table | 1.18.10    |     1 |
