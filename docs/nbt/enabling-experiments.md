---
title: NBTを編集して実験機能を有効にする
description: "`level.dat` ファイルを編集して、既存ワールドで実験機能を有効にする方法を学びます。Minecraft Education や Bedrock Dedicated Server で作業する際に便利です。"
category: Tutorials
tags:
    - intermediate
mentions:
    - Fabrimat
    - TheItsNameless
    - QuazChick
    - romanemerald
---

[structure]: /assets/images/nbt/structure.png
[int]: /assets/images/nbt/int.png
[list]: /assets/images/nbt/list.png
[compound]: /assets/images/nbt/compound.png
[string]: /assets/images/nbt/string.png
[byte]: /assets/images/nbt/byte.png

既存のワールドで実験機能を有効にするには、ゲーム内のワールド設定を使えばよい場合があります。
ただし Minecraft Education と Bedrock Dedicated Server では、GUI や設定からは有効化できません。

ここでは、ワールドの `level.dat` ファイルを編集して手動で実験機能を有効にする方法を説明します。

:::info
Minecraft Education は Bedrock Edition の派生版で、いくつか異なる機能と制限があります。
セキュリティ上の理由から、ゲーム内から実験機能を有効にすることはできません。
:::

## NBT の編集

:::warning バックアップ
NBT ファイルを編集する前に、必ずデータのバックアップを取ってください！

実験機能はすべてのデバイスで互換性があるとは限らず、ワールドが予期しない動作をすることがあります。
:::

1. ワールドのフォルダ（`com.mojang` 内）を見つけるか、`.mcworld` / `.mctemplate` を展開します
2. `level.dat` ファイルを NBT エディタ（たとえば NBT Studio）で開きます
3. 最初のノード、つまり ![][structure] `level.dat` を選択します
4. ![][compound] `experiments` という新しい compound タグを作成します（まだ存在しない場合）
5. 新しいノードを選択し、値が 1 で、必要な機能名を持つ新しい ![][byte] byte タグを作成します（次の節を参照！）
6. 最後にファイルを保存し、ワールドのパッケージまたはディレクトリに戻します

## 実験機能

### プレビュー限定

#### アドオン制作者

| ゲーム内の機能名              | NBT 上の機能名           |
| ----------------------------------- | ---------------------------- |
| Render Dragon Features for Creators | `deferred_technical_preview` |

### 1.21.120

#### ゲームプレイ

| Feature Name (In-Game)     | Feature Name (NBT)          |
| -------------------------- | --------------------------- |
| Villager Trade Rebalancing | `villager_trades_rebalance` |

#### アドオン制作者

| Feature Name (In-Game)               | Feature Name (NBT)             |
| ------------------------------------ | ------------------------------ |
| Upcoming Creator Features            | `upcoming_creator_features`    |
| Beta APIs                            | `gametest`                     |
| Experimental Creator Camera Features | `experimental_creator_cameras` |

### 1.21.110

#### ゲームプレイ

| Feature Name (In-Game)     | Feature Name (NBT)          |
| -------------------------- | --------------------------- |
| Villager Trade Rebalancing | `villager_trades_rebalance` |

#### アドオン制作者

| Feature Name (In-Game)               | Feature Name (NBT)             |
| ------------------------------------ | ------------------------------ |
| Upcoming Creator Features            | `upcoming_creator_features`    |
| Beta APIs                            | `gametest`                     |
| Experimental Creator Camera Features | `experimental_creator_cameras` |
| Data-Driven Jigsaw Structures        | `jigsaw_structures`            |

### 1.21.100

#### ゲームプレイ

| Feature Name (In-Game)     | Feature Name (NBT)          |
| -------------------------- | --------------------------- |
| Villager Trade Rebalancing | `villager_trades_rebalance` |
| Drop 3 2025                | `y_2025_drop_3`             |

#### アドオン制作者

| Feature Name (In-Game)               | Feature Name (NBT)             |
| ------------------------------------ | ------------------------------ |
| Custom biomes                        | `data_driven_biomes`           |
| Upcoming Creator Features            | `upcoming_creator_features`    |
| Beta APIs                            | `gametest`                     |
| Experimental Creator Camera Features | `experimental_creator_cameras` |
| Data-Driven Jigsaw Structures        | `jigsaw_structures`            |

:::tip
Minecraft Education は通常、通常版の Bedrock Edition より1〜2バージョン遅れています。そのため、どの実験機能が安定版のゲームプレイに追加され、どれが変更または削除されるのかを事前に把握できます。
教室でそのワールドを使う予定があるなら、長期的に残る機能だけを追加するようにしてください。
:::

## ギャラリー

_(Byte タグの追加ウィンドウ)_

![](byte-add-new.png)

_(以下は、`experiments` compound 構造の見た目の例です)_

![](experiments-file.png)

## 追加タグ

`experiments_ever_used` と `saved_with_toggled_experiments` の byte タグがあります。
これらは、実験機能を有効にした状態でワールドを読み込むと自動的に現れます。

## 実験機能の無効化

:::danger 非対応
これは公式にはサポートされておらず、意図しない結果を招く可能性があります。
たとえば、実験ブロックを含むワールドでは、それらのブロックが「unknown」ブロックに変わることがあります。
ワールドをバックアップしてください！
:::

実験機能を無効にしたい場合は、![][compound] `experiments` compound から ![][byte] byte タグを削除します。
