---
title: Attachables
description: アイテム attachables のドキュメントです。
category: Documentation
tags:
    - beginner
mentions:
    - Sprunkles137
    - MedicalJewel105
    - AdamRaichu
    - Lufurrius
    - TheItsNameless
---

::: tip
このドキュメントでは、Molang、render controller、アニメーション、client entity 定義の基本を理解していることを前提にしています。まずは [client entities](/entities/entity-intro-rp) の基礎を確認してください。
:::

## Introduction

カスタムアイテムやブロックを設計すると、Minecraft はテンプレートからモデルを生成し、持ったときに表示できるようにします。これは、アイテムのスプライトを押し出したテクスチャメッシュにしたり、ブロックをそのモデルで表示したりする形になります。**attachables** と呼ばれる仕組みを使えば、こうしたアイテムを持ったときに表示する独自モデルを作成できます。

棒を望遠鏡のように見せたいと思ったことはありませんか？ あるいは、回転する刃の大きなチェーンソーを構えたいと思ったことは？ attachables ならそれを実現できます。

このドキュメントでは、使うジオメトリの構造に応じた **2 つの異なる方法** で attachables を作る手順を説明します。

## Overview

attachables は、アイテムやブロックを装備したときにエンティティモデルを描画する仕組みです。つまり、メインハンド、オフハンド、アーマースロットにアイテムを持たせることを意味します。

attachable 定義は client entity 定義とよく似た設計で、attachable を表示するためのテクスチャ、マテリアル、ジオメトリ、アニメーションを定義できます。

### File Structure

attachable 定義は `attachables` フォルダ内に置きます。ファイル構成は、他の点ではカスタムエンティティと同じです。

<FolderView :paths="[
    'RP/animations/my_item.animation.json',
    'RP/attachables/my_item.entity.json',
    'RP/models/entity/my_item.geo.json',
    'RP/textures/entity/my_item.png',
    'RP/manifest.json'
]" />

### Attachable 定義

以下は attachable の基本例です。

<CodeHeader>RP/attachables/stick.entity.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "minecraft:attachable": {
        "description": {
            "identifier": "minecraft:stick",
            "materials": {
                "default": "entity",
                "enchanted": "entity_alphatest_glint"
            },
            "textures": {
                "default": "textures/entity/steve",
                "enchanted": "textures/misc/enchanted_item_glint"
            },
            "geometry": {
                "default": "geometry.wiki.steve_head"
            },
            "animations": {
                "hold_first_person": "animation.steve_head.hold_first_person",
                "hold_third_person": "animation.steve_head.hold_third_person"
            },
            "scripts": {
                "animate": [
                    {
                        "hold_first_person": "context.is_first_person == 1.0"
                    },
                    {
                        "hold_third_person": "context.is_first_person == 0.0"
                    }
                ]
            },
            "render_controllers": ["controller.render.item_default"]
        }
    }
}
```

この attachable 定義で押さえておくべき重要な点は次のとおりです。

-   識別子は既存のブロックまたはアイテム ID と一致させます。こうすると、そのアイテムを装備したときに attachable が有効になり、持ったときに表示される元のモデルを置き換えます。
-   エンチャントのきらめき用にマテリアルとテクスチャが指定されています。エンチャント時にきらめきを表示したい場合は、これを残しておくことが重要です。

attachables の作成は、client entity ファイルを作るより少し手間がかかります。装備時に正しく見えるよう、ジオメトリの骨組みを適切にリギングする必要があります。

## Method 1 - Attached to the Skeleton

<Tag name="beginner" />

最初の方法では、プレイヤーのスケルトンを複製し、その骨の 1 つにモデルを接続することで attachable を構築します。

この方法は、1 種類の mob/entity、特にプレイヤーに対して使うモデルや、1 つの装備スロットだけを扱う場合に向いています。Blockbench で完成形を確認しやすいのも利点です。

### Setting up the Skeleton

モデルを正しい bone に親子付けするには、プレイヤーのスケルトンを再構築する必要があります。そうしないと、どこにも親が付かず、プレイヤーの上で自由に浮いてしまいます。

テキストエディタで、提供されている player skeleton ファイルの bones を geometry ファイルへコピーし、モデルの cubes の親を `rightItem` bone に設定します。その geometry を resource pack に保存してください。

便宜上、このようなモデルはすでに用意されています。プレイヤーモデルの cubes はすでに削除済みです。

<Button download link="/assets/packs/items/attachables/method_one/steve_head.geo.json">
    📄 Geometry File
</Button>

### Display Settings

モデルがプレイヤーの足元に浮いているのは理想的ではありません。次のステップでは、プレイヤー上で正しく表示するためのアニメーションを作成します。

新しいアニメーションを 2 つ作成します。1 つは一人称でアイテムを持つ用、もう 1 つは三人称で持つ用です。三人称アニメーションを選択し、好きな位置に配置してください。そのアニメーションを resource pack に保存します。

以下はそのアニメーションの例です。ここには一人称アニメーションも含まれており、その作り方は下のセクションで説明します。

<Button download link="/assets/packs/items/attachables/method_one/steve_head.animation.json">
    📄 Animation File
</Button>

### First-person Animations

一人称アニメーションを作りやすくするため、一人称視点での腕の位置を再現する必要があります。

:::tip
プレイヤーの手のアニメーションを追加するには、attachables のアニメーションではなく、プレイヤーのアニメーションを使う必要があります。
:::

次のガイド用アニメーションを Blockbench にインポートしてください。これは右腕の bone に (95, -45, 115) の回転と (13.5, -10, 12) の移動を適用し、一人称視点での腕の位置を正確に再現します。

<Button download link="/assets/packs/items/attachables/method_one/attachable_guide.animation.json">
    📄 Attachable Guide File
</Button>

:::warning NOTE
ここが少し難しいところです。あなたの一人称アニメーションと、ガイドの一人称アニメーションの両方を同時に再生する必要があります。

変更を加えるときは、必ず自分のアニメーションを編集している状態にしてください。まずそれを選択し、その上にガイドの一人称アニメーションを再生します。
:::

### Conclusion

ここまで設定できたら、プレイヤースケルトンに _cubes_ が残っていれば削除し、bone は残してください。ゲーム内でモデルを確認してみましょう。

## Method 2 - Bound to a Bone

<Tag name="intermediate" />

2 つ目の方法では、attachable の geometry を model binding で構築します。これにより、装備スロットに対応する mob の geometry 内の bone にモデルを直接結びつけられます。Minecraft は、トライデント、望遠鏡、弓、盾などの attachable アイテムに model binding を使っています。

この方法では、attachable を他の mob や装備スロットにより動的に適用できますが、model binding には奇妙な癖もあります。これについては下で説明します。開発者によっては、この方法の方が動作させるのが難しいと感じるかもしれません。

### Model Binding

最初の手順は、モデルファイルのフォーマットバージョンをまだなら `"1.16.0"` に更新することです。モデルが古い形式のファイルなら、続ける前に変換してください。Blockbench にはそのためのツールがあります（File → Convert Project）。

次に、geometry のルート bone を、アイテムが配置される装備スロットに結びつけるよう変更します。skeleton head geometry ファイルの抜粋の 4 行目に注目してください。

<CodeHeader>RP/models/entity/skeleton_head.geo.json</CodeHeader>

```json
// A bone
{
    "name": "skeleton_head",
    "binding": "q.item_slot_to_bone_name(context.item_slot)",
    "pivot": [0, 4, 0],
    "cubes": [
        {
            "origin": [-4, 0, -4],
            "size": [8, 8, 8],
            "uv": [0, 0]
        }
    ]
}
```

bone の `"parent"` キーは文字列を受け取り、入力した bone 名が現在の bone の親になります。子 bone は位置を保ったまま、親 bone を基準に移動します。

一方 `"binding"` キーは Molang を受け取り、入力した bone 名の pivot point を、子 bone とその子孫が継承する _root position_ として扱います。

`"binding"` の値には Molang query `q.item_slot_to_bone_name` を使います。これはスロット名を bone 名へ変換し、引数として contextual variable `context.item_slot` を受け取ります。これにより、アイテムが属する装備スロット名を、プレイヤーの geometry にある対応する bone 名へ変換します。変換は次のとおりです。

-   `'main_hand'` → "rightitem"
-   `'off_hand'` → "leftitem"

bone に model binding を適用し、geometry を resource pack に保存します。

この binding を適用したモデル例は次のとおりです。

<Button download link="/assets/packs/items/attachables/method_two/skeleton_head.geo.json">
    📄 Geometry File
</Button>

### Display Settings

ここまでできたら、次は一人称と三人称でモデルを表示するためのアニメーションを設定します。

新しいアニメーションを 2 つ作成します。1 つは一人称でアイテムを持つ用、もう 1 つは三人称で持つ用です。

これらのアニメーションを作りやすくするため、次の手順を行ってください。

-   次の player skeleton モデルをダウンロードします。モデルの位置調整の視覚補助として使います。

    <Button download link="/assets/packs/items/attachables/method_two/player_skeleton.geo.json">
        📄 Player Skeleton File
    </Button>

-   テキストエディタで、モデルの bones と cubes を player skeleton モデルに追加し、その player skeleton モデルを Blockbench にインポートします。
-   モデルの root bone を、player skeleton 内の `rightItem` bone の子に設定します。
-   次の animation file をダウンロードし、`wiki.third_person_guide` アニメーションをインポートします。これは後で位置調整をしやすくするために使います。

    <Button
        download
        link="/assets/packs/items/attachables/method_two/attachable_guide.animation.json"
    >
        📄 Attachable Guide File
    </Button>

これらのガイドアニメーションには 1 つ特徴があります。Minecraft が bound bone に適用する -24 の y 位置オフセットを打ち消すため、right item bone の y 位置に -24 のオフセットを適用しています。なぜこうなるのかは、現時点では不明です。

:::warning NOTE
方法 1 と同様に、正しい位置にするには **2 つ** のアニメーションを同時に再生する必要があります。

変更を加えるときは、必ず自分のアニメーションを編集している状態にしてください。まずそれを選択し、その上にガイドアニメーションを再生します。
:::

両方のアニメーションを再生し、モデルを好きな位置に配置します。そのアニメーションを resource pack に保存してください。

この位置調整用のアニメーション例はこちらです。

<Button download link="/assets/packs/items/attachables/method_two/skeleton_head.animation.json">
    📄 Animation File
</Button>

### First-person Animations

三人称アニメーションと同様に、Attachable Guide ファイルを見て `wiki.first_person_guide` アニメーションを Blockbench にインポートします。自分のアニメーションとガイドの一人称アニメーションを同時に再生し、調整して保存します。

## Example Pack

これらの方法はすべて、参考用のサンプルパックとしてまとめられています。詰まったときや、動作する例を見たいときに利用できます。

<Button
    download
    link="https://github.com/Bedrock-OSS/bedrock-examples/releases/download/download/attachable-example.mcpack"
>
    💾 Example Pack
</Button>
