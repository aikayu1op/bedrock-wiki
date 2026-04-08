---
title: リード位置
category: Tutorials
mentions:
    - MedicalJewel105
    - SirLich
    - Overload1252
tags:
    - easy
description: エンティティ上のリードの位置を調整します。
---

エンティティ上のリードの位置を変えたいと思ったことはありませんか？
もしそうなら、このページが役立ちます。

## Blockbench の手順

リード位置を設定するには、Blockbench を使います。
モデルを開きます。この例ではラマのモデルです。

_骨の回転が少し変でも気にしないでください。Mojang はアニメーション経由で正しくモデルを描画するのが好きです。_

![](model-1.png)

次に、locator `lead` を探します。

![](model-2.png)

存在しない場合は、次の手順で作成できます。

<Spoiler title="作成する">

1. グループを選択します。
2. それを右クリックします。
3. "Add Locator" を選びます。
   ![](locator-1.png)
4. `lead` に名前を変更します。

</Spoiler>

最後に、locator を好きな位置へ移動してモデルを保存します。

![](model-3.png)

## テスト

変更前:

![](result-0.png)

変更後:

![](result-1.png)
