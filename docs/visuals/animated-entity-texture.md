---
title: エンティティのテクスチャアニメーション
description: ブロックのフリップブックテクスチャに似た、エンティティ用のアニメーションテクスチャを作る方法を学びます。
category: Tutorials
mentions:
    - MedicalJewel105
    - IlkinQafarov
    - TheItsNameless
    - SmokeyStack
    - QuazChick
tags:
    - intermediate
---

このページでは、ブロックのフリップブックテクスチャに似た、エンティティ用のアニメーションテクスチャを作る方法を学びます。

## 出典

このページは [AgentMindStorm](https://www.youtube.com/channel/UC-ljddYkFdTQl-MVEaVvbuQ) の内容をもとにしています。

<YouTubeEmbed id="F6e-w1rCEi4" />

## テクスチャ

まず、エンティティ用の新しいテクスチャフレームを描きます。このチュートリアルでは、周囲を見回す牛を使います。

<WikiImage
    src="cow.png"
    alt="Frames of an animated cow texture stacked on top of each other"
    width="180"
    pixelated
/>

テクスチャは、ブロックのフリップブックテクスチャと同じように縦に並べます。
この例では 4 フレームです。

## アニメーション付き Material

### Material を作成する

このガイドでは material を変更する必要があります。ただし Render Dragon により material は古くなっているため、**自己責任で使ってください**。

アニメーションテクスチャを使うには、エンティティの material を `USE_UV_ANIM` property を持つものに変更する必要があります。
新しい material を追加してみましょう。

<CodeHeader>RP/materials/entity.material</CodeHeader>

```json
{
    "materials": {
        "version": "1.0.0",
        "custom_animated:entity": {
            "+defines": ["USE_UV_ANIM"]
        }
    }
}
```

または、既存の material に追加することもできます。既定の material file を確認してください。

<CodeHeader></CodeHeader>

```json
"+defines": [
    "USE_UV_ANIM"
]
```

<Button link="/assets/packs/visuals/animated-entity-texture/entity.material" download>
    Download default entity.material file
</Button>

:::warning
すべてのエンティティで簡単にできるわけではありません。
一部のエンティティは複数の material を持つため、テクスチャをアニメーションさせたい場合は、そのエンティティのすべての material にこの property を追加する必要があります。
:::

### Material を適用する

次に進む前に、client entity file に新しい material を定義する必要があります。

<CodeHeader>minecraft:client_entity > description</CodeHeader>

```json
"materials": {
	"default": "custom_animated"
}
```

## Render Controller

そのあとで render controller を編集します。

Here we will add `uv_anim` component with offset and scale properties:

<CodeHeader>RP/render_controllers/cow.render_controllers.json > controller.render.cow</CodeHeader>

```json
"uv_anim": {
    "offset": [0, "math.mod(math.floor(q.life_time * frames_per_second), frame_count) / frame_count"],
    "scale": [1, "1 / frame_count"]
}
```

ここで `frames_per_second` は 1秒あたりに切り替えたいフレーム数、`frame_count` は総フレーム数です。
この式は、life time に応じて texture の offset とサイズを計算します。

## 結果

さあ、作ったものをテストしましょう。

![](result.gif)

## サンプル Pack をダウンロード

<Button link="https://github.com/Bedrock-OSS/bedrock-examples/releases/download/download/animated_entity_texture.mcpack">
    Download MCPACK
</Button>
