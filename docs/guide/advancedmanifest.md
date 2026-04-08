---
title: 高度なマニフェスト
category: Extra
description: マニフェストの扱い方をより詳しく解説するガイド [作成中]
nav_order: 4
prefix: "d. "
mentions:
    - MRBBATES1
    - Lufurrius
    - SirLich
    - smell-of-curry
    - MedicalJewel105
    - QuazChick
---

::: tip
これは付録ページです。ガイドの最初から始めるなら[ここ](/guide/introduction)です。
:::

このページでは、manifest.json ファイルについてより詳しく説明します。ここでは UUID とは何か、そしてそれをどう追加するかを詳しく扱います。さらに、依存関係、さまざまな format version、メタデータの含め方についても説明します。

あわせて、Behavior pack、Resource pack、Skin pack の違いについても説明します。

## UUID とは

UUID は Universal Unique Identifier の略です。UUID には 5 つのバージョンと、1 つの一般的な非公式版があります。UUID は数字、文字、ダッシュを含む 36 文字の文字列です。

Minecraft が使うのは Version 4: Variant 1 で、完全なランダム値です。これが Minecraft 内であなたのパックを一意に識別するものになります。

### 正しい UUID の生成方法

[UUID Generator](https://www.uuidgenerator.net/version4/) や [UUID Tools](https://www.uuidtools.com/generate/v4) のようなオンラインサイトを使って、Minecraft に必要な正しいバージョンの UUID を生成できます。

##

### UUID FAQ

-   **UUID は大文字・小文字を区別しますか？**

    -   _いいえ。UUID は 16 進数で書かれ、0-9 の数字と a-f の文字を使います。大文字と小文字の区別はありません。_

-   **header 用 UUID と modules 用 UUID を同じにできますか？**
    -   _いいえ。header 用と module 用の UUID は別々である必要があります。_

:::warning
このページは作成中です！
:::
