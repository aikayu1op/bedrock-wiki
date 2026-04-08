---
title: FMBE - 表示エンティティを作る新しい方法
category: Techniques
tags:
    - intermediate
mentions:
    - BedrockCommands
    - PipiSpamton
    - zheaEvyline
    - szea-ll14
nav_order: 5
description: Bedrock でコマンドだけを使ってブロック表示エンティティを作るためのガイドです。
---

## はじめに

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

このページでは、Minecraft Bedrock でコマンドだけを使ってブロック表示エンティティを作る方法を学びます。

この手法を最初に開発したのは [u/Maxed_Out10](https://www.reddit.com/user/Maxed_Out10/) で、Vanilla コマンドだけを使っていました。彼の手法は柔軟性は低いものの、アーマースタンドを使うためかなり単純です。彼の方法については、["MBE - Max's Block Entity"](/commands/block-entities) のページを参照してください。

Max's Block Entity (MBE) に着想を得て、コマンドの専門家である @pipi_Spamton、@siratama、そして [Japanese Commanders Gathering](https://discord.gg/xFZH6QJfSB) のチームは、Minecraft Bedrock でブロック表示エンティティを作る新しい手法を考案しました。こちらはより柔軟で、カスタマイズ性も高くなっています。MBE と同じ原理に基づいていますが、アーマースタンドの代わりに、キツネの骨格を使ってブロック表示を描画します。

一般的には block display entities、あるいは単に "display entities" と呼べます。ただし [u/Maxed_Out10](https://www.reddit.com/user/Maxed_Out10/) への敬意から、Bedrock コミュニティではより一般に "Fox MBE"（FMBE）として知られています。

:::info 注

-   この方法では、ブロック表示 1 つにつきキツネ 1 匹を使います。そのため、キツネが多すぎると（ほかのエンティティと同様に）サーバーラグの原因になります。
-   プレイヤーはその中を通り抜けられますし、制限しなければ干渉もできます。

:::

## 動画デモ

<YouTubeEmbed id="FVRd2n7JX3k" />

## システム

<CodeHeader>BP/functions/wiki/fmbe/render.mcfunction</CodeHeader>

```yaml
### Reposition and Define FMBE Scale
playanimation @e[tag=wiki:fmbe] animation.player.sleeping none 0 "" controller.animation.fox.move
playanimation @e[tag=wiki:fmbe] animation.creeper.swelling none 0 "v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.xzscale=v.xzscale??1;v.yscale=v.yscale??1;v.swelling_scale1=2.1385*math.sqrt(v.xzscale)*math.sqrt(v.scale);v.swelling_scale2=2.1385*math.sqrt(v.yscale)*math.sqrt(v.scale);" wiki:scale
playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement none 0 "v.head_rotation_x=0;v.head_rotation_y=0;v.head_rotation_z=0;v.head_position_x=(v.xbasepos*3741/8000)*math.sqrt(v.xzscale)*math.sqrt(v.scale);v.head_position_y=(10.6925+v.ybasepos*3741/8000)*math.sqrt(v.yscale)*math.sqrt(v.scale);v.head_position_z=(17.108-v.zbasepos*3741/8000)*math.sqrt(v.xzscale)*math.sqrt(v.scale);" wiki:shift_pos

## Define FMBE Rotation
### X Axis
playanimation @e[tag=wiki:fmbe] animation.warden.move none 0 "v.body_x_rot=90+v.xrot;v.body_z_rot=90+v.yrot;" wiki:xrot
### Z Axis
playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations none 0 "v.attack_body_rot_y=-v.zrot;" wiki:zrot

## Define FMBE Position
### X Axis
playanimation @e[tag=wiki:fmbe] animation.parrot.moving none 0 "v.wing_flap=(16-v.xpos)/0.3;" wiki:xpos
### Y Axis
playanimation @e[tag=wiki:fmbe] animation.minecart.move.v1.0 none 0 "v.rail_offset.x=0;v.rail_offset.y=1.6485+v.ypos/16;v.rail_offset.z=0;" wiki:ypos
### Z Axis
playanimation @e[tag=wiki:fmbe] animation.parrot.dance none 0 "v.dance.x=-v.zpos;v.dance.y=0;" wiki:zpos
```

![Chain of 8 Command Blocks](/assets/images/commands/command-block-chain/8.png)

注: コントローラー名を指定すると、前のアニメーションを上書きせずに重ねられます。例:

-   `wiki:scale` (where `wiki` is a namespace).

最初のコマンドのコントローラー名は `controller.animation.fox.move` にしてください。

残りのコマンドでは、上記と同じコントローラー名を使う必要はありません。ただし、ほかの playanimation コマンドとの衝突を避けるのに役立ちます。

## FMBE の使い方

上のシステムを有効にしたら、以下の手順に従ってください。

### セットアップ

_チャットに次のコマンドを入力します。_

1. キツネを召喚し、`/replaceitem` コマンドでメインハンドに表示したいアイテムモデルを持たせます。
    - `/summon fox ~~~ ~ ~ minecraft:as_adult "wiki:fmbe"`
    - `/replaceitem entity @e[name="wiki:fmbe",c=1] slot.weapon.mainhand 0 <itemID>`
    - 持たせるアイテムを動的に変えたい場合は、**[こちら](/commands/display-entities#changing-fmbe-block-display-dynamically)** の節を参照してください。
2. 次に `wiki:fmbe` タグを付けます。これでキツネが実際のブロックのように見えるはずです。
    - `/tag @e[name="wiki:fmbe"] add wiki:fmbe`

### 変数

FMBE では、クライアントアニメーションを使って表示位置・サイズ・角度などを編集できます。変数は次のとおりです。

-   位置:
    -   `v.xpos`
    -   `v.ypos`
    -   `v.zpos`
-   回転:
    -   `v.xrot`
    -   `v.yrot`
    -   `v.zrot`
-   スケール:
    -   `v.scale` — 全体のサイズを調整します。
    -   `v.xzscale` — XZ 軸方向のサイズを調整します。
    -   `v.yscale` — Y 軸方向のサイズを調整します。
-   基準位置:
    -   `v.xbasepos`
    -   `v.ybasepos`
    -   `v.zbasepos`

:::tip 注

-   `basepos` 変数は、回転の中心を変えずに位置だけを動かします。つまり、角度に依存します（例: `v.zbasepos=16` は相対座標で `^^^1` のように振る舞います）。
-   `pos` と `basepos` の値は 1/16 ブロック単位で測られます（16 = 1 ブロック）。

:::

### 値の編集

値を編集するには、次のコマンド構成を使います。

-   `/playanimation @e[tag=wiki:fmbe] animation.player.attack.positions none 0 "" wiki:setvariable`

編集したい変数の Molang コードを二重引用符の中に書き、値を代入します。

例として、`xrot` を 35、`ypos` を 16、`scale` を 1.5 に設定する場合:

-   `/playanimation @e[tag=wiki:fmbe] animation.player.attack.positions none 0 "v.xrot=35;v.ypos=16;v.scale=1.5;" wiki:setvariable`

Molang では、さまざまなクエリや演算子を使って、より複雑なアニメーションも作れます。詳しくは **[Molang Documentation](https://bedrock.dev/docs/stable/Molang)** を参照してください。

### FMBE の保存と読み込み

1. 保存するには、次を実行します。

    - `/execute at @e[tag=wiki:fmbe,c=1] run structure save wiki:fmbe ~~~ ~~~ true disk false`

2. 読み込むには、次を実行します。
    - `/structure load wiki:fmbe <to: x y z>`

注: 構造物名 `wiki:fmbe` は好みに合わせて変更できます。

### FMBE の音を止める

FMBE からキツネの音を消すには、次のコマンドを使えます。

<CodeHeader>BP/functions/wiki/fmbe/stopsound.mcfunction</CodeHeader>

```yaml
stopsound @a mob.fox.spit
stopsound @a mob.fox.sniff
stopsound @a mob.fox.sleep
stopsound @a mob.fox.screech
stopsound @a mob.fox.hurt
stopsound @a mob.fox.eat
stopsound @a mob.fox.death
stopsound @a mob.fox.bite
stopsound @a mob.fox.ambient
stopsound @a mob.fox.aggro
```

![Chain of 10 Command Blocks](/assets/images/commands/command-block-chain/10.png)

### FMBE のブロック表示を動的に変更する

![Demonstration GIF](change-fmbe-block-dynamically.gif)

1. オペレーターだけが入れる安全な場所に、"`wiki:fmbe_pickaxe`" という名前のアーマースタンドを召喚し、メインハンドにシルクタッチ付きのツルハシを持たせます。
2. **[ticking area](https://learn.microsoft.com/en-us/minecraft/creator/documents/tickingareacommand)** を使って、その場所が常に読み込まれるようにします。
3. 次のコマンドを使うと、アイテム ID を手で指定せずに、対象 FMBE の表示ブロックを動的に変更できます。
    ```yaml
    ## Change the Target FMBE's Display to the Block Below It
    execute as @e[name="wiki:fmbe_pickaxe"] at @e[tag=wiki:fmbe,name="wiki:test_target"] run loot replace entity @e[c=1] slot.weapon.mainhand 0 mine ~~-1~ mainhand
    ```
    ![One Repeating Command Block](/assets/images/commands/command-block-chain/1.png)

## 簡略版 FMBE

これは、上のシステムを 3 コマンドに圧縮した版です。FMBE の `xzscale` と `yscale` を変更したくない場合は、少しだけ最適化できます。

<CodeHeader>BP/functions/wiki/fmbe/render.compressed.mcfunction</CodeHeader>

```yaml
## Reposition and Define FMBE Scale
playanimation @e[tag=wiki:fmbe] animation.player.sleeping none 0 "" controller.animation.fox.move
playanimation @e[tag=wiki:fmbe] animation.creeper.swelling none 0 "v.scale=1;v.adscale=math.sqrt(v.scale);v.adscaled=2.1385*v.adscale;v.xbasepos=0;v.ybasepos=0;v.zbasepos=0;v.xpos=0;v.ypos=0;v.zpos=0;v.xrot=q.life_time*0;v.yrot=q.life_time*0;v.zrot=q.life_time*0;v.swelling_scale1=v.adscaled;v.swelling_scale2=v.adscaled;" wiki:scale

## Define FMBE Position & Rotation
playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement none 0 "v.adjust_xz=8*v.adscaled+v.zbasepos/v.adscaled;v.adjust_y=(-5-v.ybasepos/v.adscaled/v.adscaled)*v.adscaled;v.x=v.xbasepos/v.adscaled;v.y=v.adjust_y;v.z=v.adjust_xz;v.ty=v.y*math.cos(v.xrot)-v.z*math.sin(v.xrot);v.tz=v.y*math.sin(v.xrot)+v.z*math.cos(v.xrot);v.y=v.ty;v.z=v.tz;v.tx=-v.x*math.cos(v.zrot)+v.y*math.sin(v.zrot);v.ty=v.x*math.sin(v.zrot)+v.y*math.cos(v.zrot);v.x=v.tx;v.y=v.ty;v.tx=v.x*math.cos(v.yrot)+v.z*math.sin(v.yrot);v.tz=-v.x*math.sin(v.yrot)+v.z*math.cos(v.yrot);v.x=v.tx;v.z=v.tz;v.head_position_x=v.x+v.xpos/v.adscaled;v.head_position_y=7.48/v.adscale+v.z+v.zpos/v.adscaled;v.head_position_z=v.y-v.ypos/v.adscaled;v.head_rotation_x=90+v.xrot;v.head_rotation_y=v.zrot;v.head_rotation_z=v.yrot;" wiki:posrot
```

![Chain of 3 Command Blocks](/assets/images/commands/command-block-chain/3.png)

## 動画ガイド

**Part I:**

<YouTubeEmbed id="DdYq_nOFeKM" />

**Part II:**

<YouTubeEmbed id="zwyGmxjBDDw" />

**Part III:**

<YouTubeEmbed id="-5N8yVGR1MA" />

## コミュニティ作品

**@Marmalade による FMBE 作成ツール:**

<YouTubeEmbed id="d4HOGFrmxhs" />

**他の注目作品:**

-   ⭐ **[Orbital Laser by @FantasyTheCommander](https://youtu.be/DRy0J6u1qvo)**
-   ⭐ **[Animated Waterfalls by @FantasyTheCommander](https://youtu.be/AELTWr7akOQ)**
-   ⭐ **[Wither Storm by @GuppyDuck](https://youtu.be/drf1wUN0Su4)**

## 高度な FMBE 対角変換 - BETA

これは、新しい少し高度な FMBE のベータ版です。必要なコマンドブロック数を 5 つに減らしつつ、より複雑な変換も可能にします。

![Advanced FMBE Diagonal Transformation Demo GIF](advanced-fmbe-diagonal-transformation.gif)

まだ開発中で、今後変更される可能性があります。注意して使ってください。

**元のドキュメント（日本語）: [GitHub の Discussion #5](https://github.com/szea-ll14/mcbe-cmd-memo/discussions/5)**

### 高度な FMBE 表示カテゴリ

キツネのアイテムの持ち方は、アイテムの種類によって少し変わります。また、モデルが表示される位置も変わります。
表示したいアイテムの種類に合わせて、次の 3 つのカテゴリから最適なコマンドを使ってください。

-   **3D ブロック**（例: stone, anvil）
-   **2D ブロック**（例: ladder, coral, flower）
-   **アイテム**（例: diamond, bone meal, door）
    -   **例外**:
        -   Trident
        -   Spyglass
        -   Bow
        -   Player Head / Mob Head
        -   Banner
        -   Heavy Core
        -   Conduit
        -   Decorated Pot
        -   Button
    -   **非対応**:
        -   Shield

### 高度な FMBE 変数

| 変数 | 説明 |
| ---------------- | ----------------------------------------- |
| `v.extend_scale` | ブロックを特定方向に伸ばします |
| `v.extend_xrot`  | 伸ばす方向（x 軸回転） |
| `v.extend_yrot`  | 伸ばす方向（y 軸回転） |

（`v.xzscale` と `v.yscale` は削除されています）

### 高度な FMBE システム

<Spoiler title="表示カテゴリ: 3D ブロック">

<CodeHeader>BP/functions/wiki/fmbe/render.3d_blocks.mcfunction</CodeHeader>

```yaml
/playanimation @e[tag=wiki:fmbe] animation.player.sleeping _ 0 "v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.extend_scale=v.extend_scale??1;v.extend_xrot=v.extend_xrot??-90;v.extend_yrot=v.extend_yrot??0;v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.F.r5=-math.sin(v.xrot);v.F.r2=-math.sin(v.yrot);v.F.r3=-math.sin(v.zrot);v.F.r4=math.cos(v.zrot);v.F.r8=math.cos(v.yrot);v.F.r0=-v.F.r5*v.F.r2*v.F.r3+v.F.r8*v.F.r4;v.F.r1=-v.F.r5*v.F.r2*v.F.r4-v.F.r8*v.F.r3;v.F.r6=-v.F.r5*v.F.r8*v.F.r3-v.F.r2*v.F.r4;v.F.r7=-v.F.r5*v.F.r8*v.F.r4+v.F.r2*v.F.r3;v.F.r2=v.F.r2*math.cos(v.xrot);v.F.r3=v.F.r3*math.cos(v.xrot);v.F.r4=v.F.r4*math.cos(v.xrot);v.F.r8=v.F.r8*math.cos(v.xrot);v.F.e0=math.cos(v.extend_yrot);v.F.e4=math.cos(v.extend_xrot);v.F.e5=-math.sin(v.extend_xrot);v.F.e6=math.sin(v.extend_yrot);v.F.e1=v.F.e5*v.F.e6;v.F.e2=-v.F.e4*v.F.e6;v.F.e7=-v.F.e5*v.F.e0;v.F.e8=v.F.e4*v.F.e0;v.F.p0=v.F.r0*v.F.e0+v.F.r2*v.F.e6;v.F.p1=v.F.r0*v.F.e1+v.F.r1*v.F.e4+v.F.r2*v.F.e7;v.F.p2=v.F.r0*v.F.e2+v.F.r1*v.F.e5+v.F.r2*v.F.e8;v.F.p3=v.F.r3*v.F.e0+v.F.r5*v.F.e6;v.F.p4=v.F.r3*v.F.e1+v.F.r4*v.F.e4+v.F.r5*v.F.e7;v.F.p5=v.F.r3*v.F.e2+v.F.r4*v.F.e5+v.F.r5*v.F.e8;v.F.p6=v.F.r6*v.F.e0+v.F.r8*v.F.e6;v.F.p7=v.F.r6*v.F.e1+v.F.r7*v.F.e4+v.F.r8*v.F.e7;v.F.p8=v.F.r6*v.F.e2+v.F.r7*v.F.e5+v.F.r8*v.F.e8;" controller.animation.fox.move
/playanimation @e[tag=wiki:fmbe] animation.creeper.swelling _ 0 "v.swelling_scale2=v.extend_scale*(v.swelling_scale1=(v.F.s=math.sqrt(32/7*v.scale)));" wiki:fmbe.3d_blocks.anim1
/playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement _ 0 "v.head_position_x=-16/v.F.s*((v.xpos-1)*v.F.p1+(v.ypos-1/128)*v.F.p4+v.zpos*v.F.p7+(v.xbasepos*v.F.e1+(v.ybasepos+10/7)*v.extend_scale*v.F.e4+(v.zbasepos-16/7)*v.F.e7)*v.scale);v.head_position_y=16/v.F.s*(((v.xpos-1)*v.F.p2+(v.ypos-1/128)*v.F.p5+v.zpos*v.F.p8)/v.extend_scale+(v.xbasepos*v.F.e2+(v.ybasepos+10/7)*v.extend_scale*v.F.e5+(v.zbasepos-16/7)*v.F.e8)*v.scale);v.head_position_z=16/v.F.s*((v.xpos-1)*v.F.p0+(v.ypos-1/128)*v.F.p3+v.zpos*v.F.p6+(v.xbasepos*v.F.e0+(v.zbasepos-16/7)*v.F.e6)*v.scale);v.head_rotation_x=v.F.e6?math.atan2(0,-v.F.e6):math.atan2(-v.F.e8,v.F.e5);v.head_rotation_y=math.asin(-v.F.e0);v.head_rotation_z=v.F.e6?math.atan2(-v.F.e2,-v.F.e1):0;" wiki:fmbe.3d_blocks.anim2
/playanimation @e[tag=wiki:fmbe] animation.warden.move _ 0 "v.body_x_rot=v.F.p5||v.F.p3?math.atan2(v.F.p5,-v.F.p3):math.atan2(-v.F.p0,-v.F.p2);v.body_z_rot=v.F.p5||v.F.p3?math.atan2(-v.F.p1,v.F.p7):0;" wiki:fmbe.3d_blocks.anim3
/playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations _ 0 "v.attack_body_rot_y=math.asin(-v.F.p4);" wiki:fmbe.3d_blocks.anim4
```

![Chain of 5 Command Blocks](/assets/images/commands/command-block-chain/5.png)

</Spoiler>

<Spoiler title="表示カテゴリ: 2D ブロック">

<CodeHeader>BP/functions/wiki/fmbe/render.2d_blocks.mcfunction</CodeHeader>

```yaml
/playanimation @e[tag=wiki:fmbe] animation.player.sleeping _ 0 "v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.extend_scale=v.extend_scale??1;v.extend_xrot=v.extend_xrot??-90;v.extend_yrot=v.extend_yrot??0;v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.F.r5=-math.sin(v.xrot);v.F.r2=-math.sin(v.yrot);v.F.r3=-math.sin(v.zrot);v.F.r4=math.cos(v.zrot);v.F.r8=math.cos(v.yrot);v.F.r0=-v.F.r5*v.F.r2*v.F.r3+v.F.r8*v.F.r4;v.F.r1=-v.F.r5*v.F.r2*v.F.r4-v.F.r8*v.F.r3;v.F.r6=-v.F.r5*v.F.r8*v.F.r3-v.F.r2*v.F.r4;v.F.r7=-v.F.r5*v.F.r8*v.F.r4+v.F.r2*v.F.r3;v.F.r2=v.F.r2*math.cos(v.xrot);v.F.r3=v.F.r3*math.cos(v.xrot);v.F.r4=v.F.r4*math.cos(v.xrot);v.F.r8=v.F.r8*math.cos(v.xrot);v.F.e0=math.cos(v.extend_yrot);v.F.e4=math.cos(v.extend_xrot);v.F.e5=-math.sin(v.extend_xrot);v.F.e6=math.sin(v.extend_yrot);v.F.e1=v.F.e5*v.F.e6;v.F.e2=-v.F.e4*v.F.e6;v.F.e7=-v.F.e5*v.F.e0;v.F.e8=v.F.e4*v.F.e0;v.F.p0=v.F.r0*v.F.e0+v.F.r2*v.F.e6;v.F.p1=v.F.r0*v.F.e1+v.F.r1*v.F.e4+v.F.r2*v.F.e7;v.F.p2=v.F.r0*v.F.e2+v.F.r1*v.F.e5+v.F.r2*v.F.e8;v.F.p3=v.F.r3*v.F.e0+v.F.r5*v.F.e6;v.F.p4=v.F.r3*v.F.e1+v.F.r4*v.F.e4+v.F.r5*v.F.e7;v.F.p5=v.F.r3*v.F.e2+v.F.r4*v.F.e5+v.F.r5*v.F.e8;v.F.p6=v.F.r6*v.F.e0+v.F.r8*v.F.e6;v.F.p7=v.F.r6*v.F.e1+v.F.r7*v.F.e4+v.F.r8*v.F.e7;v.F.p8=v.F.r6*v.F.e2+v.F.r7*v.F.e5+v.F.r8*v.F.e8;" controller.animation.fox.move
/playanimation @e[tag=wiki:fmbe] animation.creeper.swelling _ 0 "v.F.co=math.cos(25);v.F.si=math.sin(25);v.swelling_scale2=v.extend_scale*(v.swelling_scale1=(v.F.s=math.sqrt(17/8*v.scale)));" wiki:fmbe.2d_blocks.anim1
/playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement _ 0 "v.F.X=(v.xpos-1)*v.F.p0+(v.ypos-1/128)*v.F.p3+v.zpos*v.F.p6+((v.xbasepos+2/9)*v.F.e0+(v.zbasepos+32/65)*v.F.e6*v.extend_scale)*v.scale;v.F.Y=(v.xpos-1)*v.F.p1+(v.ypos-1/128)*v.F.p4+v.zpos*v.F.p7+((v.xbasepos+2/9)*v.F.e1+(v.ybasepos+10/11)*v.F.e4+(v.zbasepos+32/65)*v.F.e7*v.extend_scale)*v.scale;v.head_position_y=16/v.F.s*(((v.xpos-1)*v.F.p2+(v.ypos-1/128)*v.F.p5+v.zpos*v.F.p8)/v.extend_scale+((v.xbasepos+2/9)*v.F.e2+(v.ybasepos+10/11)*v.F.e5+(v.zbasepos+32/65)*v.F.e8*v.extend_scale)*v.scale);v.head_position_x=16/v.F.s*(v.F.X*v.F.co-v.F.Y*v.F.si);v.head_position_z=16/v.F.s*(v.F.X*v.F.si+v.F.Y*v.F.co);v.head_rotation_x=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(-v.F.e6*v.F.si-v.F.e7*v.F.co,v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co):math.atan2(v.F.e2*v.F.si+v.F.e5*v.F.co,v.F.e8);v.head_rotation_y=math.asin(v.F.e4*v.F.si*v.F.co-v.F.e1*v.F.co*v.F.co-v.F.e0*v.F.co*v.F.si);v.head_rotation_z=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(v.F.e5*v.F.si-v.F.e2*v.F.co,v.F.e0*v.F.co*v.F.co-v.F.e1*v.F.co*v.F.si+v.F.e4*v.F.si*v.F.si):0;" wiki:fmbe.2d_blocks.anim2
/playanimation @e[tag=wiki:fmbe] animation.warden.move _ 0 "v.body_x_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p5,-v.F.p3*v.F.si-v.F.p4*v.F.co):math.atan2(-v.F.p0*v.F.si-v.F.p1*v.F.co,-v.F.p2);v.body_z_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p0*v.F.co-v.F.p1*v.F.si,v.F.p7*v.F.si-v.F.p6*v.F.co):0;" wiki:fmbe.2d_blocks.anim3
/playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations _ 0 "v.attack_body_rot_y=math.asin(v.F.p3*v.F.co-v.F.p4*v.F.si);" wiki:fmbe.2d_blocks.anim4
```

![Chain of 5 Command Blocks](/assets/images/commands/command-block-chain/5.png)

</Spoiler>

<Spoiler title="表示カテゴリ: アイテム">

<CodeHeader>BP/functions/wiki/fmbe/render.items.mcfunction</CodeHeader>

```yaml
/playanimation @e[tag=wiki:fmbe] animation.player.sleeping _ 0 "v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.extend_scale=v.extend_scale??1;v.extend_xrot=v.extend_xrot??-90;v.extend_yrot=v.extend_yrot??0;v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.F.r5=-math.sin(v.xrot);v.F.r2=-math.sin(v.yrot);v.F.r3=-math.sin(v.zrot);v.F.r4=math.cos(v.zrot);v.F.r8=math.cos(v.yrot);v.F.r0=-v.F.r5*v.F.r2*v.F.r3+v.F.r8*v.F.r4;v.F.r1=-v.F.r5*v.F.r2*v.F.r4-v.F.r8*v.F.r3;v.F.r6=-v.F.r5*v.F.r8*v.F.r3-v.F.r2*v.F.r4;v.F.r7=-v.F.r5*v.F.r8*v.F.r4+v.F.r2*v.F.r3;v.F.r2=v.F.r2*math.cos(v.xrot);v.F.r3=v.F.r3*math.cos(v.xrot);v.F.r4=v.F.r4*math.cos(v.xrot);v.F.r8=v.F.r8*math.cos(v.xrot);v.F.e0=math.cos(v.extend_yrot);v.F.e4=math.cos(v.extend_xrot);v.F.e5=-math.sin(v.extend_xrot);v.F.e6=math.sin(v.extend_yrot);v.F.e1=v.F.e5*v.F.e6;v.F.e2=-v.F.e4*v.F.e6;v.F.e7=-v.F.e5*v.F.e0;v.F.e8=v.F.e4*v.F.e0;v.F.p0=v.F.r0*v.F.e0+v.F.r2*v.F.e6;v.F.p1=v.F.r0*v.F.e1+v.F.r1*v.F.e4+v.F.r2*v.F.e7;v.F.p2=v.F.r0*v.F.e2+v.F.r1*v.F.e5+v.F.r2*v.F.e8;v.F.p3=v.F.r3*v.F.e0+v.F.r5*v.F.e6;v.F.p4=v.F.r3*v.F.e1+v.F.r4*v.F.e4+v.F.r5*v.F.e7;v.F.p5=v.F.r3*v.F.e2+v.F.r4*v.F.e5+v.F.r5*v.F.e8;v.F.p6=v.F.r6*v.F.e0+v.F.r8*v.F.e6;v.F.p7=v.F.r6*v.F.e1+v.F.r7*v.F.e4+v.F.r8*v.F.e7;v.F.p8=v.F.r6*v.F.e2+v.F.r7*v.F.e5+v.F.r8*v.F.e8;" controller.animation.fox.move
/playanimation @e[tag=wiki:fmbe] animation.creeper.swelling _ 0 "v.F.co=math.cos(25);v.F.si=math.sin(25);v.swelling_scale2=v.extend_scale*(v.swelling_scale1=(v.F.s=math.sqrt(17/8*v.scale)));" wiki:fmbe.items.anim1
/playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement _ 0 "v.F.X=(v.xpos-1)*v.F.p0+(v.ypos-1/128)*v.F.p3+v.zpos*v.F.p6+((v.xbasepos+11/29)*v.F.e0+(v.zbasepos+8/15)*v.F.e6*v.extend_scale)*v.scale;v.F.Y=(v.xpos-1)*v.F.p1+(v.ypos-1/128)*v.F.p4+v.zpos*v.F.p7+((v.xbasepos+11/29)*v.F.e1+(v.ybasepos+31/37)*v.F.e4+(v.zbasepos+8/15)*v.F.e7*v.extend_scale)*v.scale;v.head_position_y=16/v.F.s*(((v.xpos-1)*v.F.p2+(v.ypos-1/128)*v.F.p5+v.zpos*v.F.p8)/v.extend_scale+((v.xbasepos+11/29)*v.F.e2+(v.ybasepos+31/37)*v.F.e5+(v.zbasepos+8/15)*v.F.e8*v.extend_scale)*v.scale);v.head_position_x=16/v.F.s*(v.F.X*v.F.co-v.F.Y*v.F.si);v.head_position_z=16/v.F.s*(v.F.X*v.F.si+v.F.Y*v.F.co);v.head_rotation_x=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(-v.F.e6*v.F.si-v.F.e7*v.F.co,v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co):math.atan2(v.F.e2*v.F.si+v.F.e5*v.F.co,v.F.e8);v.head_rotation_y=math.asin(v.F.e4*v.F.si*v.F.co-v.F.e1*v.F.co*v.F.co-v.F.e0*v.F.co*v.F.si);v.head_rotation_z=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(v.F.e5*v.F.si-v.F.e2*v.F.co,v.F.e0*v.F.co*v.F.co-v.F.e1*v.F.co*v.F.si+v.F.e4*v.F.si*v.F.si):0;" wiki:fmbe.items.anim2
/playanimation @e[tag=wiki:fmbe] animation.warden.move _ 0 "v.body_x_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p5,-v.F.p3*v.F.si-v.F.p4*v.F.co):math.atan2(-v.F.p0*v.F.si-v.F.p1*v.F.co,-v.F.p2);v.body_z_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p0*v.F.co-v.F.p1*v.F.si,v.F.p7*v.F.si-v.F.p6*v.F.co):0;" wiki:fmbe.items.anim3
/playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations _ 0 "v.attack_body_rot_y=math.asin(v.F.p3*v.F.co-v.F.p4*v.F.si);" wiki:fmbe.items.anim4
```

![Chain of 5 Command Blocks](/assets/images/commands/command-block-chain/5.png)

</Spoiler>

### 高度な FMBE シミュレーター

ここでは 3D シミュレーターを使って変数の確認や試行ができます（注: 日本語です）:<br>
🔗 **[Open Simulator (Desmos)](https://www.desmos.com/3d/mzzzuxssx7)**

### 高度な FMBE の今後の追加予定

-   行列計算を使った回転に対応する
-   Nintendo Switch 対応版（分割版）を作成する
-   使い方ガイドを追加する
-   技術的な解説を追加する
