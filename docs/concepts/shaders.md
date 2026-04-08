---
title: Shaders
mentions:
    - SirLich
    - Dreamedc2015
    - yanasakana
    - MedicalJewel105
    - SIsilicon
description: MCBE 用シェーダー。
---

:::warning
このページのシェーダーは [Render Dragon](https://help.minecraft.net/hc/en-us/articles/360052771272-About-the-1-16-200-Update-for-Windows-10-) と互換性がありません。つまり、1.16.200 以降の Windows とコンソール端末、さらに 1.18.30 以降の他の端末では動作しません。
:::

## 概要

シェーダーは `glsl` と `hlsl` の 2 つのフォルダーに分かれています。すべての端末で動かすには、両方の言語でシェーダーを書く必要があります。Windows でのテストなら `hlsl` だけで十分です。

ある言語から別の言語へ書き換えるときに変えるべき点は少しだけです。たとえば、HLSL の `float3` は GLSL では `vec3` になります。言語間の対応表は [こちら](https://anteru.net/blog/2016/mapping-between-HLSL-and-GLSL/) で確認できます。

## マテリアル

頂点シェーダー、フラグメントシェーダー、場合によってはジオメトリシェーダーを、いくつかのオプションと組み合わせたものがマテリアルで、カスタムシェーダーには必須です。新しいマテリアルを作るには、バニラのリソースパック内にある `.material` ファイル名と一致するファイルを作成する必要があります。たとえば `materials/particles.material` です。マテリアルは、コロンの後ろに親マテリアルを追加することで継承をサポートします。たとえば `entity_alpha:entity_base` です。

### 一般的なマテリアル定義フィールド

| **フィールド名** | **説明** | **例の値** | **備考** |
| ---------------- | -------- | ---------- | -------- |
| `vertexShader` | `hlsl`/`glsl` フォルダーからの相対パスでシェーダーを指定 |  | HLSL では `.hlsl` 拡張子が追加されます。 |
| `fragmentShader` | `hlsl`/`glsl` フォルダーからの相対パスでシェーダーを指定 |  | HLSL では `.hlsl` 拡張子が追加されます。 |
| `vertexFields` | 頂点シェーダーに渡すフィールド配列 |  | バニラのマテリアルからコピーするのがよいです。 |
| `variants` | マテリアルのバリアントを定義するオブジェクト配列 |  | バニラのマテリアルからコピーするのがよいです。 |
| `+defines` | シェーダーソースに追加する `#define` ディレクティブ配列 |  | シェーダーを再利用しつつ一部設定だけ変えたいときに便利です。 |
| `+states` | 有効にする state の配列 | `[`"Blending"`, `"DisableAlphaWrite"`, `"DisableDepthWrite"`]` | OpenGL 実装では [glEnable](https://www.khronos.org/registry/OpenGL-Refpages/gl2.1/xhtml/glEnable.xml) 呼び出しと同等です。 |
| `-defines` | 継承された `+defines` から削除する `#define` ディレクティブ配列 |  |  |
| `+samplerStates` | 特定インデックスのテクスチャの扱いを定義するオブジェクト配列 | `{ "samplerIndex": 0, "textureFilter": "Point" }` | `textureFilter` はサンプリング方法を、`textureWrap` はテクスチャ境界の外へアクセスしたときの挙動を指定します。 |
| `msaaSupport` | マルチサンプルアンチエイリアシング対応 | `Both` |  |
| `blendSrc` | 色のソース側ブレンド係数の計算方法を指定 | `One` | OpenGL 実装では [glBlendFunc](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glBlendFunc.xhtml) 呼び出しと同等です。 |
| `blendDst` | 色の出力先ブレンド係数の計算方法を指定 | `One` | OpenGL 実装では [glBlendFunc](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glBlendFunc.xhtml) 呼び出しと同等です。 |

例:

<CodeHeader></CodeHeader>

```json
{
    "materials": {
        "version": "1.0.0",
        "particle_debug": {
            "vertexShader": "shaders/particle_generic.vertex",
            "fragmentShader": "shaders/particle_debug.fragment",

            "vertexFields": [{ "field": "Position" }, { "field": "Color" }, { "field": "UV0" }],

            "+samplerStates": [
                {
                    "samplerIndex": 0,
                    "textureFilter": "Point"
                }
            ],

            "msaaSupport": "Both"
        }
    }
}
```

マテリアルファイルと各フィールド値の詳細は、[material file JSON schema](https://github.com/stirante/bedrock-shader-schema/blob/master/materials.schema.json) を参照してください。

## トラブルシューティング

### シェーダーが変わらない

シェーダーを変更したら、そのたびに Minecraft を再起動してシェーダーを完全に再コンパイルする必要があります。

### コンパイルエラー

シェーダーのコンパイルエラーが出た場合、通常はエラーが発生した行番号が示されます。Minecraft はコンパイル前に `#define` ディレクティブを追加するので、エラー行の少し上も確認してください。

### `Couldn’t find constant buffer named: $Globals`

このエラーの正確な原因は特定できませんでしたが、グローバル変数に何らかの形で関係しているようです。変数を削除するか、`main` 関数内で初期化するか、`#define` ディレクティブに बदलすと解決するようです。

## ヒントとコツ

### 変数をシェーダーへ渡す

エンティティの色を変えることで、パーティクルやエンティティからシェーダーへ変数を渡せます。
入力色は `<0.0, 1.0>` にクランプされます。より大きな値を渡したい場合は、最大値で割るか、少なくとも十分に大きな数で割る必要があります。

### シェーダー内で時間を使う

`TIME` 変数は秒単位の `float` で、すべてのシェーダーで共通です。パーティクルの寿命に基づく時間を使いたい場合は、次を渡します。

<CodeHeader></CodeHeader>

```json
"minecraft:particle_appearance_tinting": {
    "color": ["variable.particle_age/variable.particle_lifetime", 0, 0, 1]
}
```

そのあとシェーダー内では、`PSInput.color.r` を時間として使います。`0.0` がパーティクル誕生、`1.0` がパーティクル消滅です。

### エンティティへのカメラ方向

エンティティ用シェーダーでは、カメラがエンティティに向いている方向に応じてシェーダーを変化させられます。

-   頂点シェーダーとフラグメントシェーダーの `PS_Input` に新しいフィールドを追加します

<CodeHeader></CodeHeader>

```
float3 viewDir: POSITION;
```

-   そのあと、頂点シェーダーに次の行を追加します

<CodeHeader></CodeHeader>

```
PSInput.viewDir = normalize((mul(WORLD, mul(BONES[VSInput.boneId], float4(VSInput.position, 1)))).xyz);
```

-   フラグメントシェーダーでは、`PSInput.viewDir` を使ってカメラ回転に応じた変更を加えます

### 値のデバッグ

値をデバッグする最も簡単な方法は、色に変換してこのように描画することです。

<CodeHeader></CodeHeader>

```
PSOutput.color = float4(PSInput.uv, 0., 1.);
```

これで赤から緑へのグラデーションが作られ、`uv` の値が `<0, 0>` から `<1, 1>` の間にあることが分かります。

このシェーダーをもとに私が書いたデバッグシェーダー [based on this shader](http://mew.cx/drawtext/drawtext) を使うこともできます。
このシェーダーは、現在は渡された色の値を表示します。別の値を表示したい場合は、hlsl シェーダーの 70 行目を次のように変更します。

<CodeHeader></CodeHeader>

```
int ascii = getFloatCharacter( cellIndex, <float4 vector here> );
```

GLSL 版のデバッグシェーダーは Minecraft をクラッシュさせる可能性があるため、デバッグ用途のみに使ってください。

[デバッグシェーダーをダウンロード](http://files.stirante.com/debugShader.zip)

![](debugShader.gif)
