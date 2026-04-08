---
title: パーティクル入門
category: General
tags:
    - guide
mentions:
    - SirLich
    - MedicalJewel105
    - TheItsNameless
description: Minecraft Bedrock のパーティクル入門です。
---

## パーティクルシステム

[パーティクルシステム](https://www.wikiwand.com/en/Particle_system) は、ゲーム物理、モーショングラフィックス、コンピューターグラフィックスで使われる手法で、小さなスプライトを多数使って、煙、火、虫の群れのような説得力のある効果を作り出します。Bedrock Edition の Minecraft では、自分のカスタムテクスチャと独自の動きのロジックを使って、新しいパーティクルシステムを作れます。これにより、パーティクルは非常に楽しく、強力になります！

パーティクルにおける MoLang の統合も非常によく整備されており、異なるパーティクル間や、エンティティとパーティクルの間でデータを受け渡しできます。

### パーティクル

「パーティクル」または「particle instance」は、3D 空間に配置され、それ自体がどう動き、どのように見た目を変えるかのロジックを持つ 1 つのスプライト（テクスチャ）です。パーティクルの例には次のようなものがあります。

-   1 枚の雪の結晶
-   1 つの雨粒
-   ひと筋の煙

### エミッター

「エミッター」または「particle emitter」は、多数のパーティクルを一度に（爆発）または時間をかけて（持続的に）生成できるシステムです。エミッターには、どう動くか、いくつ生成するか、どこで生成するかの独自ロジックがあります。エミッターの例には次のようなものがあります。

-   吹雪（雪の結晶を生成する）
-   雨（雨粒を生成する）
-   煙突の煙（煙の筋を生成する）

## 最初のパーティクルを作る

パーティクルを作るには、resource pack、テクスチャ、そして particle definition ファイルが必要です。

<FolderView :paths="[
    'RP/particles/snowflake.json',
    'RP/textures/wiki/particles/snowflake.png'
]" />
 
[Snowstorm](https://jannisx11.github.io/snowstorm/) を使うと、パーティクルを作成できます。
