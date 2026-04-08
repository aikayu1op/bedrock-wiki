---
title: アドオンの解説
category: Guide
description: アドオンの基本
nav_order: 2
prefix: "2. "
mentions:
    - SirLich
    - Dreamedc2015
    - sermah
    - cda94581
    - BluMonkie
    - TheItsNameless
    - MedicalJewel105
    - ChibiMango
    - profeplaysminecraft
    - aym-i
    - SmokeyStack
    - QuazChick
---

## アドオンとは？

アドオンを使うと、Minecraft の内容を _変更_ したり、既存のコンテンツを _削除_ したり、自分の要素を _追加_ したりして、Minecraft の体験を拡張できます。アドオンは非常に強力で、カスタムエンティティ、アイテム、ブロックに加え、カスタムの loot table やクラフトレシピなども作成できます。想像力しだいです！

アドオンは主に [json](/guide/understanding-json) で記述されます。json は構造化されたデータ形式です。アドオンとは基本的に、ゲームに何らかの変更や追加を行う json ファイル、画像、音声の集合です。

:::tip Scripting API
このガイドを書いた当時から、'Add-On' の定義は JavaScript の scripting API まで含むようになりました。この API については、このサイトの別の場所で詳しく学べます。
:::

## Behavior Pack と Resource Pack の違いは？

アドオンは 2 種類のパックに分かれます。Resource Pack と Behavior Pack です。どちらも単独で機能しますが、一般的には一緒に使います。Resource Pack と Behavior Pack の両方がそろっているものを _アドオン_ と呼びます。

### Resource Pack

Resource Pack は _クライアント_ または RP とも呼ばれ、アドオンの _見た目_ と _音_ を担当します。たとえば次のようなものです。

-   テクスチャ
-   音
-   ジオメトリ
-   アニメーション
-   パーティクル

### Behavior Pack

Behavior Pack は _サーバー_ または BP とも呼ばれ、アドオンの _ロジック_ を担当します。たとえば次のようなものです。

-   エンティティの動作
-   クラフトレシピ
-   loot table
-   カスタム関数

### パック間の通信

ほとんどの場合、RP と BP は両方セットで使います。これらのパックは、片方で定義したアセットをもう片方から参照できるという意味で、互いに通信したり、正しく動作するために相手を必要としたりします。たとえば、カスタムエンティティを作るには 2 つのファイルが必要です。

-   RP のエンティティ定義。エンティティの _見た目_ を説明するもの
-   BP のエンティティ定義。エンティティの _動作_ を説明するもの

## 次へ

:::tip 学んだこと

-   [x] アドオンは Minecraft のコンテンツを変更したり、自分の要素を追加したりする
-   [x] アドオンは主に JSON で書かれる
-   [x] アドオンは **Resource Pack** と **Behavior Pack** に分かれる
    -   Resource Pack にはテクスチャ、音などが含まれ、ゲームの見た目を制御する
    -   Behavior Pack にはエンティティの挙動、クラフトレシピなどが含まれ、ゲームのロジックを制御する

:::

<Button link="/guide/software-preparation">次へ: ソフトウェアと準備</Button>
