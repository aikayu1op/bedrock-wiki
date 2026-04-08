---
title: エンティティの影を消す
tags:
    - intermediate
category: Tutorials
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - MedicalJewel105
    - SmokeyStack
    - ThomasOrs
description: あの邪魔な影を消す方法です。
---

エンティティの影を消す方法はいくつもありますが、そのほとんどには望ましくない副作用があります。特定のエンティティだけの影を、副作用なしで完璧に消す確実な方法はありません。

このドキュメントでは、影を消すためのいくつかの方法と、それによって起こりうる影響を紹介します。

## 小さな当たり判定

ひとつの方法は、collision component のサイズを非常に小さくすることです。これによりエンティティとのやり取りや攻撃は難しくなりますが、影は消えます。

<CodeHeader>minecraft:entity > components</CodeHeader>

```json
"minecraft:collision_box": {
    "width": 0.1,
    "height": 0.1
}
```

[`custom hit test component`](https://bedrock.dev/docs/stable/Entities#minecraft:custom_hit_test) を追加することもできます。`custom_hit_test` component を使うと、エンティティを攻撃できるようになりますが、操作することはできません。`custom_hit_test` では影は作成されません。

<CodeHeader>minecraft:entity > components</CodeHeader>

```json
"minecraft:custom_hit_test": {
    "hitboxes": [
        {
            "pivot": [0, 0.5, 0], // This is the position of the hitbox, you can change the X, Y and Z values.
            "width": 0.8,
            "height": 0.7
        }
        // And you can add many more hitboxes as you want, just copy-paste the hitbox inside the "hitboxes" array.
    ]
}
```

## 非表示時にも描画する

別の方法は、エンティティに透明化効果を付与して（これでエンティティの影も隠れます）、`"minecraft:renders_when_invisible"` component を適用することです。

<CodeHeader>minecraft:entity > components</CodeHeader>

```json
"minecraft:renders_when_invisible": {},
"minecraft:spell_effects": {
    "add_effects": [
        {
            "visible": false,
            "effect": "invisibility",
            "duration": "infinite"
        }
    ]
}
```

## 地中にテレポートする

操作が必要なダミーエンティティ（不可視）がある場合、`/teleport @x ~ ~-0.01 ~` のようにテレポートできます。これによりエンティティが少し地面にめり込み、影が表示されなくなります。

## Runtime Identifier を使う

一部のエンティティには影がないか、あっても非常に小さいものがあります。これらの runtime identifier を使えば、影を消せます。欠点は、そのエンティティ固有のハードコードされた挙動も引き継ぐことです。これが問題になることもあります。詳しくは [runtime identifier のドキュメント](/entities/runtime-identifier) を参照してください。

## Material を使う

:::danger
この方法はすでにサポートされていません。Render Dragon の登場により、このような material は機能しなくなりました。真面目に使おうとしないでください。特に Marketplace マップで試すのは避けてください。
:::

:::warning

-   このフォルダーはバニラ RP パックの例には含まれておらず、APK ファイルから書き出すか手動で追加する必要があります。
-   これはブロックでは未検証で、エンティティでのみ確認されています。ブロックでも動くことを確認できた場合は、追加できるよう知らせてください。

:::

<Spoiler title="Removing shadows via Materials.">

#### 動作する影コード: すべてのエンティティに影を付ける場合

<CodeHeader>RP/materials/shadows.material</CodeHeader>

```json
"shadow_overlay":{
    "+states":[
        "DisableDepthTest",
        "DisableCulling",
        "Blending",
        "EnableStencilTest"
    ],
    "vertexShader":"shaders/color.vertex",
    "vrGeometryShader":"shaders/color.geometry",
    "fragmentShader":"shaders/shadow_stencil_overlay.fragment",
    "blendSrc":"DestColor",
    "blendDst":"Zero",
    "frontFace":{
        "stencilFunc":"Equal",
        "stencilPass":"Replace"
    }
}
```

#### 影を無効化するコード: すべてのエンティティから影を消す場合

<CodeHeader></CodeHeader>

```json
"shadow_overlay":{
    "+states":[
        "DisableDepthTest",
        "DisableCulling",
        "Blending",
        "EnableStencilTest"
    ],
    "vertexShader":"",
    "vrGeometryShader":"",
    "fragmentShader":"",
    "blendSrc":"DestColor",
    "blendDst":"Zero",
    "frontFace":{
        "stencilFunc":"Equal",
        "stencilPass":"Replace"
    }
}
```

</Spoiler>

#### Geometry + Material の回避策

エンティティに影を覆うモデルを適用し、`"banner_pole"` material を使うことで、エンティティの影を隠せます。
