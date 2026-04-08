---
title: パーティクルを無効化する
description: バニラのパーティクルをゲーム内で表示されないようにします。
category: Tutorials
show_outline: false
tags:
    - beginner
mentions:
    - SirLich
    - Joelant05
    - MedicalJewel105
---

パーティクルを無効化したい場合は、`particles.png` で単にパーティクルのテクスチャを透明にするのではなく、パーティクルファイル自体から無効化することをおすすめします。さらに、透明化するよりも無効化したほうが、わずかなパフォーマンス向上が期待できる場合があります。透明なパーティクルは、見えなくなるだけで実際にはまだ発生しているためです。

パーティクルの発生を無効化する基本的な考え方は次のとおりです。

<CodeHeader>RP/particles/some_vanilla_particle.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "particle_effect": {
        "description": {
            "identifier": "minecraft:some_vanilla_particle",
            "basic_render_parameters": {
                "material": "particles_alpha",
                "texture": "textures/particle/particles"
            }
        },
        "components": {
            "minecraft:emitter_lifetime_expression": {
                "activation_expression": 0,
                "expiration_expression": 1
            },
            "minecraft:emitter_rate_manual": {
                "max_particles": 0
            }
        }
    }
}
```
