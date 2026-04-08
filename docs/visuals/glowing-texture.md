---
title: 発光するエンティティのテクスチャ
category: Tutorials
mentions:
    - LeGend077
    - MedicalJewel105
description: エンダーマンの光る目のような表現を、自分のコンテンツで再現します。
---

このチュートリアルでは、material と texture を使って、エンダーマンの目のように発光するエンティティの texture を作る方法を学びます。

## テクスチャ

エンティティの texture を発光させるには、advanced image editor（ここでは Blockbench）で texture を開き、pixel の alpha を半分消す必要があります。

-   エンティティの texture file を開きます。

_Don't mind strange bones rotation, Mojang likes to render models correctly through animations._

-   **Eraser** tool を見つけ、opacity / alpha を 71 や 23 のような低い値に設定します。

![](eraser.png)

![](opacity.png)

-   次に、発光させたい texture 部分を消します。pixel が見えにくいほどよく光りますが、100% 消し切らないようにしてください。

![](erase-pixels.png)

Example Pig texture:

![](pig.png)

## Material

発光させたい mob の `RP/entity/my_entity.entity.json` file を変更する必要があります。`"materials":{}` を見つけて、値を `"entity_emissive_alpha"` に設定します。（texture が正しく定義されているか確認してください）

<CodeHeader>RP/entity/pig.entity.json#description</CodeHeader>

```json
"materials": {
    "default": "entity_emissive_alpha"
}
```

<Spoiler title="Example Pig Entity File">

<CodeHeader>RP/entity/pig.entity.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "minecraft:pig",
            "min_engine_version": "1.8.0",
            "materials": {
                "default": "entity_emissive_alpha" // replace "pig" with "entity_emissive_alpha"
            },
            "textures": {
                "default": "textures/entity/pig/pig",
                "saddled": "textures/entity/pig/pig_saddle"
            },
            "geometry": {
                "default": "geometry.pig.v1.8"
            },
            "animations": {
                "setup": "animation.pig.setup",
                "walk": "animation.quadruped.walk",
                "look_at_target": "animation.common.look_at_target",
                "baby_transform": "animation.pig.baby_transform"
            },
            "scripts": {
                "animate": [
                    "setup",
                    {
                        "walk": "q.modified_move_speed"
                    },
                    "look_at_target",
                    {
                        "baby_transform": "q.is_baby"
                    }
                ]
            },
            "render_controllers": ["controller.render.pig"],
            "spawn_egg": {
                "texture": "spawn_egg",
                "texture_index": 2
            }
        }
    }
}
```

</Spoiler>

## テスト

Minecraft を起動し、この resource pack を有効にした world を開きます。時刻を _midnight_ にするか、近くの洞窟で試してみてください。エンティティは期待どおりに光るはずです。

![](result.png)
