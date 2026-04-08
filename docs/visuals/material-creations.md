---
title: Material Creations
tags:
    - expert
category: General
description: コミュニティによる便利なマテリアル作例です。
---

:::warning
Materials は気軽に触るものではありません。クラッシュ、content log のエラー、長い読み込み時間に備えてください。
:::

このページでは、コミュニティによるマテリアル作例を紹介します。

## 発光し、半透明に対応するカスタムマテリアル

注: これは culling を無効化することでも機能するため、マテリアルを適用したテクスチャの背後にあるエンティティや物が見えなくなる奇妙な culling 問題を避けられます。

注: 発光効果を出すには、テクスチャに半透明が含まれている必要があります。

`customblend` は、エンティティ側でマテリアルとして呼び出す名前です。

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
{
    "customblend:entity_alphablend": {
        "+defines": ["USE_EMISSIVE"],
        "+states": ["Blending", "DisableCulling", "DisableDepthWrite", "DisableAlphaWrite"]
    }
}
```

</Spoiler>

Credit: StealthyX.

## Render Dragon でのアルファチャンネルテクスチャ

Render Dragon でアルファチャンネルテクスチャを使えるマテリアルです。

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
{
    "ambient_alpha:entity": {
        "+states": ["Blending", "DisableCulling"],
        "vertexShader": "shaders/color_uv.vertex",
        "vrGeometryShader": "shaders/color_uv.geometry",
        "fragmentShader": "shaders/color_texture.fragment",
        "blendSrc": "SourceAlpha",
        "blendDst": "OneMinusSrcAlpha",
        "vertexFields": [
            {
                "field": "Position"
            },
            {
                "field": "Color"
            },
            {
                "field": "Normal"
            },
            {
                "field": "UV0"
            }
        ],
        "variants": [
            {
                "skinning": {
                    "+defines": ["USE_SKINNING"],
                    "vertexFields": [
                        {
                            "field": "Position"
                        },
                        {
                            "field": "BoneId0"
                        },
                        {
                            "field": "Color"
                        },
                        {
                            "field": "Normal"
                        },
                        {
                            "field": "UV0"
                        }
                    ]
                }
            }
        ]
    }
}
```

</Spoiler>

さらに試したところ、これは 3 人称でしか動作しないことがわかりましたが、バニラのブレンド系マテリアルは視点に関係なく壊れていたため、それでも有用です。

Credit: Ambient.

## render controller の `overlay_color`

render controller で `overlay_color` を使えないようにするマテリアルです。

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
{
    "materials": {
        "version": "1.0.0",
        "ambient_no_overlay": {
            "defines": ["ALPHA_TEST"],
            "vertexShader": "shaders/entity.vertex",
            "vrGeometryShader": "shaders/entity.geometry",
            "fragmentShader": "shaders/entity.fragment",
            "vertexFields": [
                {
                    "field": "Position"
                },
                {
                    "field": "Normal"
                },
                {
                    "field": "UV0"
                }
            ],
            "variants": [
                {
                    "skinning": {
                        "+defines": ["USE_SKINNING"],
                        "vertexFields": [
                            {
                                "field": "Position"
                            },
                            {
                                "field": "BoneId0"
                            },
                            {
                                "field": "Normal"
                            },
                            {
                                "field": "UV0"
                            }
                        ]
                    }
                },
                {
                    "skinning_color": {
                        "+defines": ["USE_SKINNING"],
                        "+states": ["Blending"],
                        "vertexFields": [
                            {
                                "field": "Position"
                            },
                            {
                                "field": "BoneId0"
                            },
                            {
                                "field": "Color"
                            },
                            {
                                "field": "Normal"
                            },
                            {
                                "field": "UV0"
                            }
                        ]
                    }
                }
            ],
            "msaaSupport": "Both",
            "+samplerStates": [
                {
                    "samplerIndex": 0,
                    "textureFilter": "Point"
                },
                {
                    "samplerIndex": 1,
                    "textureWrap": "Repeat"
                }
            ]
        }
    }
}
```

</Spoiler>

ジオメトリ全体ではなく、特定の bone にだけ適用したいときに役立つかもしれません。

Credit: Ambient.

## `entity_alphablend_nocolorentity_static` マテリアル

`entity_alphablend_nocolorentity_static` マテリアルを使うと、Minecraft は高確率でクラッシュします。

Credit: Gecko.
