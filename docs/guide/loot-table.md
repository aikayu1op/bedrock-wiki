---
title: ルートテーブル、スポーンルール、クラフトレシピの追加
category: Guide
description: 最初のルートテーブル、スポーンルール、クラフトレシピを追加する方法
nav_order: 8
prefix: "8. "
mentions:
    - KaiFireborn
    - SirLich
    - sermah
    - cda94581
    - Ultr4Anubis
    - TheItsNameless
    - Ciosciaa
    - MedicalJewel105
    - ChibiMango
    - fraysdev
    - QuazChick
---

次は、カスタム Ghost エンティティに、さらに基本的な仕組みを追加していきます。

## ルートテーブル

まず、ゴーストが死亡時に Ectoplasm をドロップするようにします。次のファイルを作成してください。

<CodeHeader>BP/loot_tables/entities/ghost.json</CodeHeader>

```json
{
    "pools": [
        {
            "rolls": 1,
            "entries": [
                {
                    "type": "item",
                    "name": "wiki:ectoplasm",
                    "weight": 1,
                    "functions": [
                        {
                            "function": "set_count",
                            "count": {
                                "min": 1,
                                "max": 3
                            }
                        }
                    ]
                }
            ]
        }
    ]
}
```

-   ルートテーブルは `"pools"` で構成されます。各プールは別のルートを定義します。プールは `"rolls"`、`"entries"`、`"conditions"` の 3 部分から成ります。`"conditions"` は省略可能で、このガイドでは扱いません。条件について詳しく知りたい場合は、[Loot Tables](/loot/loot-tables) を参照してください。
-   `"rolls"` は、後続の `"entries"` オブジェクトからランダムな項目を何回選ぶかを定義します。
-   `"entries"` は、ルートテーブルが選択対象にするアイテムを定義します。ロールごとに新しいアイテムが選ばれます。
-   `"type"` は、何を選ぶかを定義します。`"item"` か `"loot_table"` を設定でき、それぞれアイテムか別のルートテーブルを選べます。
-   `"name"` には、名前空間付きのアイテム識別子が入ります。どのアイテムを選ぶかを定義します。
-   `"weight"` は省略可能で、このアイテムがどれくらい選ばれやすいかを定義します。`"entries"` に複数のアイテムがある場合、`"weight"` 属性を使って、あるアイテムが選ばれる確率を高くしたり低くしたりできます。設定しない場合は 1 が既定値です。
-   `"functions"` は、返されるアイテムを柔軟にカスタマイズする強力な仕組みです。アイテムにエンチャントを付与したり、名前を設定したり、単純にドロップする個数を設定したりできます。個数を定義するには `"set_count"` を使います。これには `"count"` 属性を渡し、ドロップされるアイテム数の最大値と最小値を設定します。

ルートテーブルの詳細については、拡張ガイドの [Loot Tables](/loot/loot-tables) を参照してください。

## スポーンルール

次は、ゴーストが夜の砂漠にスポーンするようにします。

<CodeHeader>BP/spawn_rules/ghost.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "minecraft:spawn_rules": {
        "description": {
            "identifier": "wiki:ghost",
            "population_control": "monster"
        },
        "conditions": [
            {
                "minecraft:spawns_on_surface": {},
                "minecraft:brightness_filter": {
                    "min": 0,
                    "max": 7,
                    "adjust_for_weather": true
                },
                "minecraft:difficulty_filter": {
                    "min": "easy",
                    "max": "hard"
                },
                "minecraft:weight": {
                    "default": 80
                },
                "minecraft:herd": {
                    "min_size": 1,
                    "max_size": 3
                },
                "minecraft:biome_filter": {
                    "test": "has_biome_tag",
                    "operator": "==",
                    "value": "desert"
                }
            }
        ]
    }
}
```

-   `"format_version"` については、すでに知っているはずです。
-   `"minecraft:spawn_rules"` の部分で、スポーンルールを定義します。
-   `"description"` は、このファイルの基本プロパティを定義します。`"identifier"` は、このスポーンルールがどのエンティティに適用されるかを定義するために使います。`"population_control"` は、スポーンするエンティティ数を制限するために使います。`"population_control"` 内で定義されたプールがいっぱいになると、それ以上エンティティはスポーンしません。
-   `"conditions"` では、このエンティティのスポーンを特定のケースに制限するルールを定義できます。ここで使う各条件はすぐに説明しますが、より多くの条件と使い方は [こちら](/entities/vanilla-usage-spawn-rules) を参照してください。
    -   `"spawns_on_surface"` は、モブを地表にのみスポーンさせます。
    -   `"minecraft:brightness_filter"` は、定義した値の間にある明るさの場所にのみスポーンを制限します。`"adjust_for_weather"` が `true` なら、雨や嵐での光量低下は無視されます。
    -   `"minecraft:difficulty_filter"` は、エンティティのスポーンに必要な難易度を定義します。
    -   `"weight"` は、このエンティティがどれくらいの頻度でスポーンするかを定義します。値が高いほど、モブはより頻繁にスポーンします。
    -   `"minecraft:herd"` は、一度に何体のエンティティがスポーンするかを定義します。
    -   `"minecraft:biome_filter"` で、このエンティティがスポーンできるバイオームを定義します。

スポーンルールについてさらに詳しく知りたい場合は、[Vanilla spawn rules](/entities/vanilla-usage-spawn-rules) のガイドを参照してください。

## クラフトレシピ

最後に、レシピの導入として、Ectoplasm を Slime Block にクラフトできるようにします。

<CodeHeader>BP/recipes/ectoplasm_slime_blocks.json</CodeHeader>

```json
{
    "format_version": "1.20.10",
    "minecraft:recipe_shaped": {
        "description": {
            "identifier": "wiki:ectoplasm_block"
        },
        "tags": ["crafting_table"],
        "pattern": [
            // 3×3 grid of Ectoplasm items
            "###",
            "###",
            "###"
        ],
        "key": {
            "#": {
                "item": "wiki:ectoplasm"
            }
        },
        "unlock": [
            {
                "item": "wiki:ectoplasm" // Unlock this recipe when the player acquires an Ectoplasm item
            }
        ],
        "result": {
            "item": "wiki:ectoplasm_block"
        }
    }
}
```

-   `"format_version"` はすでに知っています。
-   `"recipe_shaped"` を使うと、各材料の配置がクラフトグリッド上で固定されることを定義できます。他にも使える種類がいくつかあるので、詳しくは [こちら](/loot/recipes) を参照してください。
-   `"description"` の中で、このレシピの `"identifier"` を定義します。これがレシピ名になります。
-   `"tags"` は、このレシピを使える作業台（crafting table、furnace など）の一覧です。b1.16.100 以降は、アドオンで作成したカスタム作業台も使えるようになりました。
-   `"pattern"` は、クラフトグリッド内のアイテム配置を定義します。各 `#` は `"key"` で定義されたアイテムを表します。この例では、3×3 の全マスを自作アイテム `"wiki:ectoplasm"` で埋める必要があります。さらにアイテムを定義することもでき、`"key"` に項目を追加して、`"pattern"` 内で使う文字をキーとして設定します。
-   `"result"` は、このレシピの出力となる `"item"` を含みます。

このトピックの詳細は、[recipes](/loot/recipes) のページを参照してください。

## 学んだこと

:::tip 学んだこと:

-   モブがドロップできるアイテムを定義するルートテーブルの作り方
-   モブのスポーンルールを設定する方法
-   新しいクラフトレシピの作り方

:::

## ここまでの進捗

**やったこと:**

-   [x] パックをセットアップした
-   [x] カスタムアイテムを作成した
-   [x] カスタムエンティティを作成した
-   [x] エンティティのルート、スポーンルール、カスタムレシピを作成した

おめでとうございます。これでガイドを完了し、最初の Add-on を作成できました。🎉
