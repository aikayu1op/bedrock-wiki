---
title: Material
tags:
    - expert
category: General
mentions:
    - SirLich
    - Joelant05
    - MedicalJewel105
    - Lufurrius
description: Minecraft Bedrock の Material について学びます。
---

:::warning
Material は扱いが難しいです。クラッシュ、コンテンツログエラー、長い読み込み時間が起こりうることを覚悟してください。
:::

## 概要

Material は、ゲームのさまざまな部分を描画する shader と、その各要素が考慮すべき状態や設定を指定するために使われます。
現時点では、ゲーム内のほとんどのものは特定の material を使うようハードコードされており、新しいものを割り当てられない場合があります。これらの見た目を変える唯一の方法は、material を直接編集するか（他の部分に意図しない影響が出る可能性があります）、新しい shader を作ることです（これは昔の実験機能で、現在は Mojang による正式サポートはありません）。デフォルトまたはカスタム material を割り当てたり外したりできるのは、エンティティとパーティクルだけです。

仕組みを深く掘り下げる準備ができていない場合は、material プリセットを [こちら](/documentation/materials) で確認できます。

## 構文と構造

ほとんどの material は、既存の material の設定を継承して、その上にさらに構築します。書式は次のとおりです。

<CodeHeader>RP/materials/name.material</CodeHeader>

```json
{
	"materials": {
		"version": "1.0.0",
		"<New material ID>:<ID of material to use as a base>": {
    		<defines, states, and other settings>
		}
	}
}
```

:::warning
見た目は似ていますが、パック内の material 形式ファイルと混同しないでください。material では namespace は使われません。
:::

一部の material ファイルには、material の分岐ツリーが広く含まれています。たとえば、既定のエンティティが使う material のほとんどは、最終的に entity.material ファイル内の `entity_static` から派生しています。現在の村人に使われている material を見てみると:

<CodeHeader></CodeHeader>

```json
"villager_v2_masked:entity_multitexture_masked": {
    "depthFunc": "LessEqual"
},
```

この material の名前が `villager_v2_masked` で、`entity_multitexture_masked` という material を基にしていることが分かります。
ファイルを上にたどると、`entity_multitexture_masked` が `entity_alphatest` の設定を継承して、さらにその上に積み重ねていることが分かります。

<CodeHeader></CodeHeader>

```json
"entity_multitexture_masked:entity_alphatest":{
    "+defines":[
        "MASKED_MULTITEXTURE"
    ],
    "+samplerStates":[
        {
            "samplerIndex":0,
            "textureWrap":"Clamp"
        },
        {
            "samplerIndex":1,
            "textureWrap":"Clamp"
        }
    ]
}
```

その `entity_alphatest` は `entity_nocull` へたどれます。

<CodeHeader></CodeHeader>

```json
"entity_alphatest:entity_nocull":{
    "+defines":[
        "ALPHA_TEST"
    ],
    "+samplerStates":[
        {
            "samplerIndex":1,
            "textureWrap":"Repeat"
        }
    ],
    "msaaSupport":"Both"
}
```

これは通常の `entity` へとつながります。

<CodeHeader></CodeHeader>

```json
"entity_nocull:entity":{
    "+states":[
        "DisableCulling"
    ]
}
```

そして最終的に `entity_static` へとつながります。

<CodeHeader></CodeHeader>

```json
"entity:entity_static":{
    "+defines":[
        "USE_OVERLAY"
    ],
    "msaaSupport":"Both"
},

```

`entity_static` にはコロンの後に別の material が続いていません。これは、この継承ツリーの最下部にあることを示しています。

<CodeHeader></CodeHeader>

```json
"entity_static":{
    "vertexShader":"shaders/entity.vertex",
    "vrGeometryShader":"shaders/entity.geometry",
    "fragmentShader":"shaders/entity.fragment",
    "vertexFields":[
        {
            "field":"Position"
        },
        {
            "field":"Normal"
        },
        {
            "field":"UV0"
        }
    ],
    "variants":[
        {
            "skinning":{
                "+defines":[
                    "USE_SKINNING"
                ],
                "vertexFields":[
                    {
                        "field":"Position"
                    },
                    {
                        "field":"BoneId0"
                    },
                    {
                        "field":"Normal"
                    },
                    {
                        "field":"UV0"
                    }
                ]
            }
        },
        {
            "skinning_color":{
                "+defines":[
                    "USE_SKINNING",
                    "USE_OVERLAY"
                ],
                "+states":[
                    "Blending"
                ],
                "vertexFields":[
                    {
                        "field":"Position"
                    },
                    {
                        "field":"BoneId0"
                    },
                    {
                        "field":"Color"
                    },
                    {
                        "field":"Normal"
                    },
                    {
                        "field":"UV0"
                    }
                ]
            }
        }
    ],
    "msaaSupport":"Both",
    "+samplerStates":[
        {
            "samplerIndex":0,
            "textureFilter":"Point"
        }
    ]
}
```

## 1.16.100+ の注意

カスタム material を使う人向けの注意です。

カスタム material の継承は現在無効で、コンテンツログエラーの原因になります。回避策は、接頭辞と material 名だけを使って material を完全にカスタム定義することです。

これは 1.16.100 以前には問題ではありませんでした。

```json
{
    "materials": {
        "version": "1.0.0",
        "prefix:window_glass:entity": {
            //now throws a content log error.
            "+states": ["Blending"],
            "defines": ["ENABLE_FOG", "ENABLE_LIGHT", "USE_ONLY_EMISSIVE"]
        },
        "prefix:window_glass:": {
            //corrects the content log error. Note: may have to also define the old inherited values.
            "+states": ["Blending"],
            "defines": ["ENABLE_FOG", "ENABLE_LIGHT", "USE_ONLY_EMISSIVE"]
        }
    }
}
```
