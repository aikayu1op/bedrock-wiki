---
title: 構造物サイズ上限の拡張
category: Tutorials
mentions:
    - MedicalJewel105
tags:
    - easy
description: 構造物のサイズ上限を拡張します。
---

[structure]: /assets/images/nbt/structure.png
[int]: /assets/images/nbt/int.png
[list]: /assets/images/nbt/list.png
[compound]: /assets/images/nbt/compound.png
[string]: /assets/images/nbt/string.png

:::warning 廃止済み
この方法は 1.20.50 のアップデート以降は動作しません。
:::

既定では、Minecraft は 64x255x64 を超える構造物を保存できません。
このガイドでは、ストラクチャーブロックの構造物ボックスサイズを拡張する方法を学びます。

## NBT の編集

1. ストラクチャーブロックを構造物に含めてエクスポートします。
2. NBT エディタ（ここでは NBT Studio）で構造物を開き、ストラクチャーブロックを探します。

構造物内のブロックがストラクチャーブロックだけなら、そのデータはここにあります。

![][structure] extending_structure_block.mcstructure

> ![][compound] structure
>
> > ![][compound] palette
> >
> > > ![][compound] default
> > >
> > > > ![][compound] block_position_data
> > > >
> > > > > ![][compound] 0

![](nbt-screenshot-1.png)

3. `xStructureSize`、`yStructureSize`、`zStructureSize` の値を希望の値に設定します。
4. 構造物を保存し、ゲーム内で読み込みます。

![](result.png)

## ヒント

Ctrl を押しながらマウスホイールボタンを押すと、このストラクチャーブロックをインベントリに入れられます。
巨大な構造物を読み込むときは、構造物の読み込みアニメーション（Place by Block）を使うのがおすすめです。これでラグを最小限に抑えられます。
