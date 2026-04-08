---
title: アイテムのスポーン
description: アイテムエンティティをスポーンする方法を学びます。
category: Tutorials
tags:
    - intermediate
mentions:
    - SirLich
    - Joelant05
    - Dreamedc2015
    - yanasakana
    - MedicalJewel105
    - aexer0e
    - Xterionix
---

ワールド内に、ドロップしたようなアイテムをスポーンしたいことはよくあります。このページでは、エンティティの死亡、インタラクション、そして万能な方法を含む、さまざまな手段でそれを実現する方法を説明します。

## /loot

現時点で最も簡単なアイテムスポーン方法は `/loot` を使うことです。次のように書きます。

```
/loot spawn ~ ~ ~ loot "entities/cow"
```

<CodeHeader>BP/loot_tables/entities/cow.json</CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/cow.json"
}
```

## エンティティの死亡

もう 1 つの簡単な方法で、一般的にもよく使われるのが、エンティティの死亡時にアイテムを落とす方法です。これは、エンティティに `minecraft:loot` コンポーネントを追加し、ドロップしたいアイテムを含む対応する loot table（以下の例では `forium`）へリンクします。

<CodeHeader>BP/entities/my_entity.json#components</CodeHeader>

```json
"minecraft:loot": {
    "table": "loot_tables/entities/forium.json"
}
```

## ダミーエンティティの死亡

スポーンしたときに死亡する [dummy entity](/entities/dummy-entities) に `minecraft:loot` を使って `drop_entity` を作ることができます。このエンティティは `/summon wiki:drop_entity` のように召喚して、アイテムをスポーンできます。死亡時のパーティクルや音が問題にならない場面で便利です。

動作例:

<CodeHeader>BP/entities/my_entity.json</CodeHeader>

```json
{
    "format_version": "1.16.0",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:drop_entity",
            "is_spawnable": true,
            "is_summonable": true,
            "is_experimental": false
        },

        "components": {
            // スポーン時にエンティティを死亡させる
            "minecraft:health": {
                "value": 0
            },
            "minecraft:loot": {
                "table": "loot_tables/entities/some_loot.json"
            }
        }
    }
}
```

## インタラクション

ここでは、インタラクションすると中身を落とす "box" というエンティティの例を示します。`spawn_items` の table は、ドロップしたいアイテムを含む loot table にリンクします。この例では、エンティティとインタラクションしたときに `break_box` イベントも呼び出され、box を削除するコンポーネントグループが追加されます。

エンティティがインタラクション後に削除されない場合、再度インタラクションでき、そのたびにアイテムがスポーンします。インタラクション後もエンティティを残したい場合は、`cooldown` パラメーターを追加して、一定時間インタラクションを防ぐことができます。あるいは、この `minecraft:interact` コンポーネントを含むコンポーネントグループを削除するイベントを呼び出しても構いません。

<CodeHeader>BP/entities/my_entity.json#components</CodeHeader>

```json
"minecraft:interact": {
    "interactions": [
        {
            "on_interact": {
                "filters": {
                    "test": "is_family",
                    "subject": "other",
                    "value": "player"
                },
                "event": "break_box",
                "target": "self"
            },
            "swing": true,
            "spawn_items": {
                "table": "loot_tables/entities/box.json"
            }
        }
    ]
}
```

## 万能な方法

これは、エンティティの死亡、アニメーションベースのインタラクション、一般的なアイテムドロップなど、ほぼあらゆる場面で使える方法です。特に、死亡アニメーション、音、パーティクルなしでアイテムを落としたいときのために作られました。

アイテムドロップを設定するには、いくつかの要素が必要です。behavior を持つ新しいエンティティ、対応する animation controller、透明なエンティティの資産（Dummy Entities チュートリアルを参照）、そして loot table です。設定が終わったら、アイテムを落としたい場所にエンティティをスポーンします。複数のアイテムを出したい場合は、各アイテムごとに spawn event を持つコンポーネントグループを用意できます。

### Behavior

アイテムは `minecraft:behavior.drop_item_for` コンポーネントを `minecraft:navigation.walk` コンポーネントと組み合わせてスポーンします。後者は前者を動かすために必要です。なお、以下の `time_of_day_range` パラメーターは、ドキュメントの記載どおりには初期化されておらず、正しく動作させるにはこの形が必要です。プレイヤーがかなり遠くにいてもドロップさせたい場合は、`max_dist` を適切な値まで大きくする必要があります。

この動作は、アイテムが落ちたときに mob を少し押し戻すようです。そのため、アイテムがスポーン地点から数ブロック離れた場所に出ないよう、エンティティを地面より少し上に召喚する（または次の animation controller で上にテレポートさせる）ことが重要です。collision box を小さくするのも有効です。

<CodeHeader>BP/entities/my_entity.json#components</CodeHeader>

```json
"minecraft:navigation.walk": {},
"minecraft:behavior.drop_item_for": {
    "priority": 1,
    "max_dist": 16,
    "loot_table": "loot_tables/entities/forium.json",
    "time_of_day_range": [0.0, 1.0]
}
```

### アニメーションコントローラー

**以下の animation controller をエンティティにリンクする必要があります**。こうすることで、召喚後にエンティティを削除できます。あるいは、timeline を持つ animation を使っても構いません。やり方が分からない場合は、Entity Commands のチュートリアルを参照してください。

エンティティを void にテレポートさせると、死亡アニメーション、音、パーティクルは発生しません。スポーンした同じ tick で死亡しないように、2 つの transition を使っています。

<CodeHeader>BP/animation_controllers/my_entity.ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.drop_items.die": {
            "initial_state": "spawn",
            "states": {
                "spawn": {
                    "transitions": [
                        {
                            "delay": "1"
                        }
                    ]
                },
                "delay": {
                    "transitions": [
                        {
                            "die": "1"
                        }
                    ]
                },
                "die": {
                    "on_entry": ["/tp @s ~ -200 ~"]
                }
            }
        }
    }
}
```

## 構造物を使う方法

アイテムをスポーンする面白い方法として、structure を使う方法もあります。
structure を `structure_void` で埋めておけば（structure 読み込み時に空気がブロックを置き換えないようにできます）、そこにアイテムを落とせます。
この方法では、耐久値のようなアイテムデータを保持できます。
あとは、その structure を好きなときに好きな場所へ読み込めます。

![](structure-method.png)
