---
title: Texture Atlases
description: テクスチャアトラス（スプライトシートとも呼ばれる）は、複数の小さなテクスチャをまとめた画像です。
tags:
    - intermediate
license: true
mentions:
    - QuazChick
---

Texture atlas（スプライトシートとも呼ばれる）は、多数の小さなテクスチャを 1 枚にまとめた画像です。
アトラスを使うと、ゲームが読み込むテクスチャ数を減らせるため、性能が向上し、テクスチャ上限に達しにくくなります。
たとえば、各ブロックテクスチャを個別に読み込む代わりに、[terrain texture atlas](#terrain) は 1 枚の大きなテクスチャとして読み込まれます。

アトラスにサブテクスチャが多すぎると、Minecraft はすべてが収まるまでアトラス内テクスチャの解像度を下げます。

以下は、Minecraft が `Vanilla RP/textures/item_texture.json` ファイルの項目から生成する、バニラの [item texture atlas](#items) の一部です。
完全なアトラスには、カスタムアイテムテクスチャを含め、もっと多くのテクスチャが入っています！

<WikiImage
    alt="バニラのアイテムテクスチャの集まり。"
    src="item_atlas_sample.png"
    width="496"
    pixelated
/>

:::tip PADDING
本のテクスチャの間にある引き伸ばされたピクセルに気づきましたか？ これは [padding](#padding) と呼ばれ、描画上の問題を防ぐのに役立ちます！
:::

## アトラス一覧

### Banner

`atlas.banner`

-   バナーのパターンや Ominous Banner のテクスチャを含むバナー関連テクスチャを含みます。
-   このアトラスに含まれるテクスチャ一覧は変更できません。

### Items

`atlas.items`

-   装備スロットのプレースホルダー、トリム付き防具、盾のテクスチャを含むアイテムテクスチャを含みます。
-   `item_texture.json` ファイルからこのアトラスへテクスチャを追加できます。

### Shield

`atlas.shield`

-   盾のバナーパターンテクスチャを含みます。
-   このアトラスに含まれるテクスチャ一覧は変更できません。

### Terrain

`atlas.terrain`

-   フリップブックアニメーション付きのものを含むブロックテクスチャを含みます。
-   既定で mipmapping と padding が適用されます。
-   `terrain_texture.json` ファイルからこのアトラスへテクスチャを追加できます。

## Mipmapping

[Mipmaps](https://en.wikipedia.org/wiki/Mipmap) は、カメラから遠ざかるにつれてテクスチャ解像度を下げるために Minecraft で使われます。これにより、遠景テクスチャのエイリアシングが減り、性能面でも多少の利点があります。

### Mip Levels

テクスチャアトラスの mip level 数は `num_mip_levels` パラメーターで決まります。

各 mip level で、テクスチャの解像度は半分になります。

既定では、`atlas.terrain` のブロックテクスチャには 4 つの mip level があります。

<CodeHeader>Vanilla RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_name": "atlas.terrain",
    "num_mip_levels": 4,
    ...
}
```

16&times;16 テクスチャの場合、次のようなテクスチャになります。

<WikiImage alt="16x16 のログテクスチャ" src="log_oak_top_1.png" width="64" pixelated />

<WikiImage alt="8x8 のログテクスチャ" src="log_oak_top_2.png" width="64" pixelated />

<WikiImage alt="4x4 のログテクスチャ" src="log_oak_top_3.png" width="64" pixelated />

<WikiImage alt="2x2 のログテクスチャ" src="log_oak_top_4.png" width="64" pixelated />

### 比較

<WikiImage
    src="screenshot_with_mipmapping.jpeg"
    caption="4 つの mip level があるワールドのスクリーンショット。"
    width="516"
    style="margin-right: 1em"
/>

<WikiImage
    src="screenshot_without_mipmapping.jpeg"
    caption="Mipmapping なしのワールドのスクリーンショット。"
    width="516"
/>

## Padding

Padding とは、精密でない描画によってテクスチャ同士がにじみ合わないように、テクスチャの周囲に設けられる引き伸ばし領域のことです。

padding の幅は `padding` パラメーターで調整できます。このパラメーターの値は少なくとも $2^{n-1}$ である必要があり、ここで $n$ は `num_mip_levels` を表します。たとえば、6 つの mip level があるアトラスなら、最小で 32 texel（$2^5$）の padding が必要です。

既定では、各ブロックテクスチャの周囲に 8 texel の padding があります。

<WikiImage alt="padding された Oak Log テクスチャ" src="log_oak_top_padded.png" width="128" pixelated />

## Textures

テクスチャアトラス内の領域を参照するための shortname をキーにしたオブジェクトです。

<CodeHeader>Texture Atlas</CodeHeader>

```json
{
    "texture_data": {
        "wiki:texture_shortname": {
            "additive": false, // Optional; default is false
            "textures": [
                {
                    "path": "textures/path/to/texture",
                    "quad": false, // Optional; default is false
                    "tint_color": "#ffffff", // Optional
                    "overlay_color": "#ffffff" // Optional
                }
            ]
        }
    }
}
```

### Path

リソースパックのルートフォルダーからの相対パス文字列で、次のいずれかの拡張子を持つファイルを指します。

-   `.texture_set.json`（`pbr` capability が必要）
    -   texture set が参照されると、`color` や `heightmap` など含まれるすべてのテクスチャがアトラスに追加されます。
-   `.tga`
-   `.png`
-   `.jpg`
-   `.jpeg`

パス文字列には、テクスチャの拡張子を含めてはいけません。

正方形でないテクスチャは、アトラスに追加される際に正方形へ引き伸ばされます。
複数フレームを含むテクスチャは、最初のフレームだけがアトラスに追加されます。

### Tint Color

#### バニラでの使い方

バニラでは、`tint_color` は Lily Pad テクスチャに緑の色味を加えるために使われます。

<WikiImage alt="灰色の Lily Pad" src="waterlily.png" width="64" pixelated />

<WikiImage alt="緑がかった Lily Pad" src="waterlily_tinted.png" width="64" pixelated />

#### Tint Blending

_以下の計算では、色チャンネルの値が float（0-1）であると仮定します。_

-   テクセルの色チャンネル（$r_1$, $g_1$, $b_1$）は、`tint_color` の色チャンネル（$r_2$, $g_2$, $b_2$）と掛け合わされます。
-   テクセルの alpha チャンネル（$a$）は保持されます。

$$
\begin{aligned}
R &= r_1 \times r_2 \\
G &= g_1 \times g_2 \\
B &= b_1 \times b_2 \\
A &= a
\end{aligned}
$$

### Overlay Color

このパラメーターは `tint_color` に似ていますが、テクスチャの alpha（不透明度）チャンネルを破棄し、その値を色味の強さとして使います。

-   そのため、元のテクスチャに透明部分があっても、不透明なテクスチャになります。
-   不透明テクスチャでは、このパラメーターは `tint_color` と同じ結果になります。

#### バニラでの使い方

バニラでは、`overlay_color` は Grass Block の側面テクスチャの一部に緑の色味を付けるために使われます。しかも土のテクスチャまで緑にしません！

以下で、元の草ブロック側面テクスチャ、alpha チャンネルを取り除いた版（隠れていた土のテクスチャが見えます）、`overlay_color` を適用した版を確認できます。

<WikiImage alt="バニラの草ブロック側面テクスチャ" src="grass_side.png" width="64" pixelated />

<WikiImage
    alt="alpha チャンネルなしの草ブロック側面テクスチャ"
    src="grass_side_without_alpha.png"
    width="64"
    pixelated
/>

<WikiImage alt="色味を付けた草ブロック側面テクスチャ" src="grass_side_tinted.png" width="64" pixelated />

:::danger TRANSPARENT PIXELS

多くの画像編集ソフトは、alpha 値が 0 のピクセルに対する RGB 値を保存しません。
テクスチャの色味を付けない領域を作るには、それらの値が保存されるようにする必要があります。

GIMP で確実に保存するには、次の設定を使ってください。

![GIMP の「save color values from transparent pixels」書き出し設定。](gimp_export_settings.png)

:::

#### Overlay Blending

_以下の計算では、色チャンネルの値が float（0-1）であると仮定します。_

-   テクセルの色チャンネル（$r_1$, $g_1$, $b_1$）は、`overlay_color` の色チャンネル（$r_2$, $g_2$, $b_2$）と掛け合わされます。
-   テクセルの元の色の一部が、その逆 alpha 値（$1 - a$）に基づいて加算されます。
-   テクセルの alpha チャンネル（$a$）は 1 になります。

$$
\begin{aligned}
R &= r_1 \times r_2 + r_1 \times (1 - a) \\
G &= g_1 \times g_2 + g_1 \times (1 - a) \\
B &= b_1 \times b_2 + b_1 \times (1 - a) \\
A &= 1
\end{aligned}
$$

### Additive

指定した `textures` を互いの上に重ねて、新しい合成テクスチャを作ります。
半透明のテクセルは、それ以前のレイヤーを完全に上書きします。

Overlay color は、最初の `textures` エントリに置いた場合のみ機能し、すべてのレイヤーに影響します。

### Quad

テクスチャの左上 1/4 だけを表示するかどうかを決めるブール値です。

このパラメーターは、アトラス内でこの shortname が占める領域だけを変え、テクスチャ全体はアトラスに含まれます。

数値でも指定でき、`0` は `false` を、その他の数値はすべて `true` を表します。

## 追加パラメーター

-   `default_leather_color`: HEX 文字列
    -   未染色の革防具の既定色を決定します。
-   `default_leather_horse_armor_color`: HEX 文字列
    -   未染色の革の馬鎧の既定色を決定します。

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "default_leather_color": "#ffffff",
    "default_leather_horse_armor_color": "#ffffff"
}
```
