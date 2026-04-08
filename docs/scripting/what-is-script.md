---
title: Script API とは？
category: General
nav_order: 2
mentions:
    - conmaster2112
    - Herobrine643928
    - JaylyDev
    - SmokeyStack
    - ThomasOrs
    - gdm3
description: スクリプトって一体何なの？
---

::: warning
Script API は現在も活発に開発されており、破壊的変更が頻繁にあります。このページは Minecraft 1.21.20 の形式を前提としています。
:::

## API

API は Application Programming Interface の略で、2つのアプリケーション間でやり取りを成立させるための仕組みです。「アプリケーション」という言葉は、想像以上に幅広いものを含みます。単純なスクリプト、ゲーム、あるいは OS 全体もアプリケーションになりえます。

日常的に触れている API の例は、まさに目の前にあります。それはアプリケーションと OS の間にある API です。画面上のカーソルがその例です。なぜ API と関係があるのでしょうか。アプリケーションは、OS が提供する API を通じてカーソルが画面のどこにあるかを把握でき、自前でカーソルを実装する必要がないからです。これにより、Minecraft のようなプログラムも API を利用して動作できます。

要するに、API は 2つ以上のアプリケーション間で行われる相互または一方向のやり取りの仕組みです。

## Script API

「Script API」という言葉をどこかで聞いたことがあるかもしれません。この名前の下に何があるのかを知ることは重要です。

この言葉を聞くと、多くの人はプログラムやスクリプト、あるいはプログラミング言語まで連想するかもしれません（`Mysterious Experiments in Minecraft? :]` ）。しかし実際には、これはただの API です。API は Minecraft とやり取りするための関数群です。イベントを受け取り、ブロックを読み取り、エンティティを変更し、パーティクルを生成する、といったことができます。この API は [公式サイト](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/minecraft-server) にも詳しいドキュメントがあります。

## API Modules?

API は機能ごとにいくつかのサブモジュールに分かれています。API の一部の関数は一般ユーザー向けには安全でない場合があるため、サーバーでのみ使えたり、特定の端末では動作しなかったりします。そのため、API 関数を用途別に分けたパッケージを Module と呼んでいます。

Module 名は、含まれる機能にちなんだものにするべきです。

[Original Credits](https://github.com/JaylyDev/ScriptAPI/tree/main/docs/MinecraftApi#readme) - Written by [ConMaster2112](https://github.com/conmaster2112)
