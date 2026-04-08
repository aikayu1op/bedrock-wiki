---
title: Feature のブロック条件
category: Tutorials
tags:
    - experimental
mentions:
    - PavelDobCZ23
    - SmokeyStack
    - ThomasOrs
description: ブロック条件の使い方を学びます。
---

たとえば、下や上にあるブロックに応じて feature を条件付きで配置したいことがあります。こんなふうに条件付きで配置できる feature は多くありませんが、簡単な工夫を使えば、どんな feature にでも応用できます。

:::tip
This technique utilizes `aggregate_feature` and `single_block_feature` features. If you want to learn more about those, visit [Feature Types](/world-generation/feature-types) article.
:::

## ファイル

### Feature

この feature は、別の feature に必要な条件を指定できる `single_block_feature` を配置します。目的の feature を邪魔しないならそのままでも構いませんが、後で問題にならないよう、次の feature で空気に置き換えます。この feature は、実際に何かを置く必要はなく、条件部分だけが欲しいので「ダミー」feature として機能します。

<CodeHeader>BP/features/block_condition_feature.json</CodeHeader>

```json
{
    "format_version": "1.18.0",
    "minecraft:single_block_feature": {
        "description": {
            "identifier": "wiki:block_condition_feature"
        },
        "places_block": "minecraft:cobblestone", //Any block that isn't in "may_replace" list.
        "enforce_placement_rules": false,
        "enforce_survivability_rules": false,
        "may_replace": ["minecraft:air"], //Only blocks the feature is allowed to be placed in.
        //Attachment conditions - what blocks can surround the feature when its being placed
        "may_attach_to": {
            "bottom": ["minecraft:grass"] //Only blocks the feature can be placed on top of.
        }
    }
}
//This "dummy" feature will only allow the feature to generate in the air, right above a grass block.
```

次の feature は、コブルストーンを元々そこにあった空気ブロックに置き換えるものです。ただし、そこに実際に置きたいブロックを選ぶ場合や、後で問題にならない場合は省略できます。

<CodeHeader>BP/features/block_replacement_feature.json</CodeHeader>

```json
{
    "format_version": "1.18.0",
    "minecraft:single_block_feature": {
        "description": {
            "identifier": "wiki:block_replacement_feature"
        },
        "places_block": "minecraft:air", //Replaces the block with another one which doesn't cause us any issue.
        "enforce_placement_rules": false,
        "enforce_survivability_rules": false,
        "may_replace": ["minecraft:cobblestone"] //The block that we specified in the previous feature.
    }
}
//This feature will replace the block with air that originally was there so it won't cause us any issue.
```

これは、条件付きの「ダミー」feature を置き、その後に条件で置かれた「ダミー」ブロックを取り除き、さらに本当に条件付きで置きたい feature を配置するための feature です。`early_out` に `first_failure` を指定し、条件付き配置が失敗したら aggregate を止めるようにしています。これは feature rule から配置される feature です。

<CodeHeader>BP/features/aggregate_placement_rock_feature.json</CodeHeader>

```json
{
    "format_version": "1.18.0",
    "minecraft:aggregate_feature": {
        "description": {
            "identifier": "wiki:aggregate_placement_rock_feature"
        },
        "features": [
            "wiki:block_condition_feature", //Single block feature that is used as "dummy" feature to act as our condition.
            "wiki:block_replacement_feature", //This feature replaces the "dummy" block we used in the feature above to not cause us any issues later.
            //Any feature from this point on is what we actually want to place.
            "wiki:rock_ore_feature"
        ],
        "early_out": "first_failure" //This makes sure that if the first(or any) feature fails, it will not continue to place anything else in the list.
    }
}
//This is a feature that places all the features one by one in order and is placed by the feature rule.
```

これが、実際に条件付きで配置したい feature です。`ore_feature` には、空気中かつ草ブロックの上だけに配置するための条件が直接ないので、この手法でそれを実現しています。

<CodeHeader>BP/features/rock_ore_feature.json</CodeHeader>

```json
{
    "format_version": "1.18.0",
    "minecraft:ore_feature": {
        "description": {
            "identifier": "wiki:rock_ore_feature"
        },
        "count": 12,
        "replace_rules": [
            {
                "places_block": "minecraft:stone",
                "may_replace": ["minecraft:air", "minecraft:grass"]
            },
            {
                "places_block": {
                    "name": "minecraft:dirt",
                    "states": {
                        "dirt_type": "coarse"
                    }
                },
                "may_replace": ["minecraft:dirt"]
            }
        ]
    }
}
```

:::tip
If you want to learn more about ore features, you can visit [Generating Custom Ores](/world-generation/generating-custom-ores) tutorial.
:::

### Feature Rule

<CodeHeader>BP/feature_rules/overworld_after_surface_rock_feature.json</CodeHeader>

```json
{
    "format_version": "1.18.0",
    "minecraft:feature_rules": {
        "description": {
            "identifier": "wiki:overworld_after_surface_rock_feature",
            "places_feature": "wiki:aggregate_placement_rock_feature"
        },
        "conditions": {
            //Places the feature in any overworld biome along with features in the after_surface_pass
            "placement_pass": "after_surface_pass",
            "minecraft:biome_filter": [
                {
                    "any_of": [
                        {
                            "test": "has_biome_tag",
                            "operator": "==",
                            "value": "overworld"
                        },
                        {
                            "test": "has_biome_tag",
                            "operator": "==",
                            "value": "overworld_generation"
                        }
                    ]
                }
            ]
        },
        "distribution": {
            //1 in 3 chance to attempt 1 placement in chunk
            "scatter_chance": 33,
            "iterations": 1,
            "coordinate_eval_order": "xzy",
            "x": {
                "distribution": "uniform",
                "extent": [0, 15]
            },
            //Places the feature along the heightmap
            "y": "q.heightmap(v.worldx,v.worldz)",
            "z": {
                "distribution": "uniform",
                "extent": [0, 15]
            }
        }
    }
}
```

## まとめ

このチュートリアルを読めば、任意の feature にブロック条件を使えるようになっているはずです。これは非常に基本的な例ですが、もっと複雑な作成にも使え、あらゆる feature に応用できます。

こうして、空気ブロック内かつ草ブロックの上にだけ配置できる rock feature を作成しました。

生成スクリーンショット:

![](rock_feature.png)
