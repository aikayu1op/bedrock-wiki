---
title: Bedrock Modeling
nav_order: 2
category: General
mentions:
    - SirLich
    - solvedDev
    - MedicalJewel105
description: Minecraft Bedrock Edition 向けのモデリングで知っておくべきコツや注意点です。
---

このページでは、Minecraft Bedrock Edition 向けのモデリングで知っておくべきコツや注意点を紹介します。

## テクスチャの不具合

ときどき、いくつかの（小さな）面のテクスチャが壊れたり見えなくなったりします。これは、UV map 計算で cube のサイズが切り捨てられるためです。つまり、1 未満のサイズは 0 pixel 幅の UV map になり、見た目が崩れます。これを防ぐには、すべての cube の各方向の長さを少なくとも 1 unit にしてください。もっと小さな cube を作るには Inflate slider を使います。
どうしても小さい texture が必要な場合の別の対処法は、**element のサイズを各方向に 1 だけ大きくしてから**、**element を -1 で inflate する**ことです。ただし、これをすると小さい pixel が正しく texture 化されず、mixel が発生します。

## Vertex Snap

Vertex snap is a handy tool in blockbench any modeler should use. It's beneficial when doing rounded things like wheels.
You can find this tool right top next to the movement & scale tools. It has 2 modes, Move & Scale. How this tool works can be seen in the following gif.
![](vertex_snap.gif)

## 透明表現

半透明の texture（色付きガラスなど）を使う場合、その texture を持つ element を element 一覧の下のほうに移動する必要があります。そうしないと、その半透明 element の背後にある element がゲーム内で描画されません。

## Texturing

When learning to texture, your best bet is practicing with references on how others textured similar objects & surfaces. Patterns for wood & metal are different, and you should consider that. Good guides are
[Masteriano's Texturing Tips](https://www.blockbench.net/wiki/guides/minecraft-style-guide)
and in general, any on pixel art.

## Materials

Whether or no the transparency or emissive textures in your models work in-game, it's decided by the materials applied to them.

| Material              | Description                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------- |
| entity                | basic opaque material                                                                                         |
| entity_alphatest      | supports transparent pixels                                                                                   |
| entity_alphablend     | supports translucent pixels                                                                                   |
| entity_emissive       | solid, alpha channel is used as the emissive channel                                                          |
| entity_emissive_alpha | alpha channel is used for emissive textures, completely black + transparent pixels are rendered transparently |

## Z-fighting

Z-fighting is called when you have the face of 2 elements in the same place, and you can see both or half of them at the same time, as seen in the following picture.
![](z-fighting.png)
You can solve this by inflating one of them by `0.01` or `-0.01` depending on which one should prioritize.

## Basics of Animations

When animating in Blockbench, you can set each keyframe by hand, or you can use variables & functions.
Here you will learn the basics.
Let's start with this picture.

![](animations-1.png)

the name or `animation.cuack` is essential. You can't have symbols or caps there, and it must start with `animation.` for the animations to work without problems. Now the function we will be using is

`Base + Math.sin((q.life_time + Offset) * Speed) \_ pitch`

-   Base is the starting rotation/position the bone has
-   Sin is the math function we all know
-   `q.life_time` is a variable. Is a number that will be increasing as the animation continues
-   Offset is a number we use to have the animation start earlier or later than its "original" position
-   Speed is the time it will take from going from top to down
-   Pitch is how far it goes from the origin

![](animations-2.gif)

Function used:

`Math.sin((q.life_time+0.5)*150)*15`

one on position & the other on rotation.

<MolangGraph code="Math.sin((q.life_time+0.5)*150)*15" :toY="2" :stepSize="0.001"/>

Don't forget that for the animation to be a perfect loop. It would help if you correlated the sin equation `speed` & the animation `time`.
Here's a table with values to get a perfect loop, though there are more you can discover.

| Speed | Time | Group |
| ----- | ---- | ----- |
| 150   | 2.4  | 1     |
| 100   | 3.6  | 2     |

These numbers can be multiplied but not divided, so these will also work
But only multiples of the same option

| Speed | Time | Group |
| ----- | ---- | ----- |
| 150   | 4.8  | 1     |
| 200   | 3.6  | 2     |
| 300   | 2.4  | 1     |
| 300   | 3.6  | 1 & 2 |

Now not all of these will "loop" together. And that is the Group column. The ones with the same number will work together. Otherwise, they will have a visible "glitch" in the loop.

:::tip
You can have an animation in the loop by clicking on the following setting:
![](setting-loop.png)
:::

With this function & creativity, animals & dinosaurs are animated into walking, running & attacking.
You can learn more about queries & functions [here](https://bedrock.dev/docs/stable/Molang).

## Animation Speed

To easily change the speed of an animation you can simply multiply the default value of `anim_time_update` (defaults to `q.delta_time + q.anim_time`) inside our animation:

<CodeHeader>RP/animations/my_entity.a.json#animations</CodeHeader>

```json
"animation.my_entity.my_animation": {
    "anim_time_update":"2 * q.delta_time + q.anim_time"
    //Your animation goes here!
}
```

This will make the animation run 2 times faster. We can tweak the value to any buoyant float, so we can even slow down animations. With 0.5, for example, the animation will run 2 times slower, etc.
