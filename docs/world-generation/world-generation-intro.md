---
title: ワールド生成の入門
description: ワールド生成の変更方法を学びます。
category: General
nav_order: 1
tags:
    - guide
mentions:
    - SirLich
    - solvedDev
    - Dreamedc2015
    - destruc7ion
    - MedicalJewel105
    - aexer0e
    - aym-i
    - SmokeyStack
    - Supernova3695
---

:::warning
このページの情報はやや古く、内容も限定的です。最新かつ包括的な情報は、このセクション内の他のページを参照してください。
:::

Add-on を使ってワールド生成を変更できます。必要な Behavior Pack のフォルダは次のとおりです。

`structures`、`features`、`feature_rules`、`biomes`、`worldgen` です。名前からほぼ分かるとおり、構造ブロックから作成した `.mcstructure` ファイルは `structures` に、バイオームファイルは `biomes` に、ジグソー構造ファイルは `worldgen` とそのサブフォルダに、鉱石などの地形特徴は `features` に、その生成ルールは `feature_rules` に保存します。まずはカスタムバイオームの追加から見ていきましょう。

_注: 公式ドキュメントはかなり不完全なので、Add-on 作成用のビジュアルソフトである bridge. を使ってバイオームを作成すると簡単かもしれません (リンクと連絡先にもあります)。ここに示すように、参考用にバニラのバイオーム、特徴、feature rule のサンプルファイルをすべて生成することもできます。_

![](gen_coal_ore.png)
_bridge. を使って coal_ore 特徴を生成しています。_

ただし、bridge. は必須ではありません。

---

## カスタムバイオーム

<CodeHeader>BP/biomes/cold_biome.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:biome": {
        "description": {
            "identifier": "wiki:cold_biome"
        },
        "components": {
            "minecraft:climate": {
                "downfall": 0.7,
                "snow_accumulation": [0.6, 0.9],
                "temperature": 15.0
            },
            "minecraft:surface_parameters": {
                "sea_floor_depth": 7,
                "sea_floor_material": "minecraft:blue_ice",
                "foundation_material": "minecraft:cobblestone",
                "mid_material": "minecraft:minecraft:concrete",
                "top_material": "minecraft:glass",
                "sea_material": "minecraft:water"
            },
            "minecraft:replace_biomes": {
                "replacements": [
                    {
                        "amount": 0.5,
                        "noise_frequency_scale": 50,
                        "dimension": "minecraft:overworld",
                        "targets": ["minecraft:plains"]
                    }
                ]
            },
            "minecraft:tags": {
                "tags": ["cold_biome"]
            }
        }
    }
}
```

-   `format_version` は 1.26.10 に設定します。これは現行リリース時点での最新のバイオームファイルバージョンです。
-   `description` には `identifier` 1 つだけを指定します。
-   `components` は名前のとおり、バイオームに適用される要素です。中身を見ていきましょう。
-   `minecraft:climate` は気候に関するすべてを制御します。
-   `downfall` は雨や雪がどれくらいの頻度で降るかです。`0.0` は完全に雨なし (砂漠のような状態)、`1.0` は常に雨が降る状態を意味します。
-   `temperature` は、水が凍るかどうかや、雨が雪に変わるかどうかなどを決めるために使われます。

**bridge. を使うと、参考用のデフォルトバイオームファイルを生成できます。**

-   `overworld_surface` は生成されるブロックを制御します。
-   `floor_depth` は、湖や川の底がブロックでどれだけ深くなるかです。
-   `sea_floor_material` は、川や湖の底を生成するときに使う素材を定義します。
-   `foundation_material` は、おおよそ y=5 から y=50 の間で使われる素材です。たとえば砂漠では石になります。
-   `sea_material` は、湖や川、海などの液体として使われる素材です。たとえば、すべてのオーバーワールドのバイオームでは `minecraft:water` に設定されています。
-   `top_material` は最上層の素材を定義します。たとえば Plains では草です。
-   `mid_material` は `top` と `foundation` の間の層です。Plains では土です。
-   `overworld_height` は、そのバイオームが地形的にどう見えるかを定義します。

`noise_type` と `noise_params` を同時に使わないでください。`noise_params` は、ノイズの最上位とバイオーム内で許可される最下位のノイズを表す配列です。

![](non_smooth_noise_transition.jpg)
_同じバイオーム内での滑らかでない遷移。`noise_params` を [0.1, 0,1] にした場合と [1.0, 1.0] にした場合の比較です。_

-   ただし `noise_type` を使う場合は、いくつかの事前生成済みノイズタイプから選ぶことになります。バニラゲームで見覚えのあるものもあるはずです。以下が一覧です。

`beach, default, extreme, taiga, ocean, mountains, default_mutated, deep_ocean, lowlands, less_extreme, stone_beach, swamp, river, mushroom`.

-   `minecraft:replace_biomes` は、何よりも重要な要素です。バニラのバイオームをどの割合でカスタムバイオームに置き換えるかをゲームに伝えます。

-   そして最後に、バイオームタグです。とても単純ですが便利です。`minecraft:tags` コンポーネントに次の形式で追加することで、バニラまたはカスタムのタグを好きなだけ設定できます。

<CodeHeader>minecraft:biome > components</CodeHeader>

```json
"minecraft:tags": {
    "tags": [
        "overworld",
        "wiki:custom_tag"
    ]
}
```

その後、そのタグを _environment_sensors_、_filters_、_has_biome_ テスト、_spawn rules_ などで判定できます。

これでカスタムバイオームは完成です！

---

## Features と Feature Rules

Features と Feature Rules は、鉱石から草や花、植生、花崗岩や粘土の塊まで、あらゆるものを生成するために使われます。
これらを使ってカスタム構造物を作ることも可能ですが、とても手間がかかり、前述の更新後ならもっと簡単になるため、ここではまだ扱いません。

ここで触れておくと、カスタム構造物を生成する最も簡単な方法は、[MACHINE_BUILDER](https://www.youtube.com/channel/UC8FBQgo4AWwKFX97h60NKOQ) による [自動生成ツール](https://machine-builder.itch.io/frg-v2) です。このツールには機能制限付きの無料版があり、すべての機能を使うには有料版を利用する必要があります。ただし、鉱石のような一部の要素は `structure_template_feature` より `ore_feature` として生成するほうがはるかに効率的なので、ここでは手動での生成方法も学びます。

チュートリアルのために、`wiki:blocky` のカスタムブロックを鉱石として生成するようにしてみましょう。手順は簡単です。

1. _bridge._ を開いて、対象の Add-on を選びます。
1. `_Add new file>features>diamond_ore` と `_Add new file>feature_rules>diamond_ore_` を追加します。
1. 次に、ファイルを保存し、コードエディタで開いて必要な変更を加えます。

_bridge. を使わずに、ファイルを最初から書いたり、どこかからコピーしたりしても問題ありません。bridge. の導入で困っている場合はその方法でも構いません。**バニラファイルを見つける場所の 1 つは [Example Packs](https://www.minecraft.net/en-us/addons) で、より完全なものは [bridge. のリポジトリ](https://github.com/bridge.-core/bridge../tree/master/static/vanilla) です**。_

## Features

Features は `BP/features` に配置され、基本的にはゲームファイル内に保存されるブロックのまとまりで、_feature_rule_ を使って配置できます。_feature_ の **ファイル名** は **identifier** と一致していなければなりません。

[bedrock.dev/r/Features](https://bedrock.dev/r/Features) にドキュメントがあります。

<CodeHeader>BP/features/blocky_ore_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:ore_feature": {
        "description": {
            "identifier": "blocky_ore_feature"
        },
        "count": 8,
        "places_block": "wiki:blocky",
        "may_replace": [
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "andesite"
                }
            },
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "andesite_smooth"
                }
            },
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "diorite"
                }
            },
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "diorite_smooth"
                }
            },
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "granite"
                }
            },
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "granite_smooth"
                }
            },
            {
                "name": "minecraft:stone",
                "states": {
                    "stone_type": "stone"
                }
            }
        ]
    }
}
```

-   `minecraft_ore_feature` は、鉱石を自動で配置する特定の feature の種類です。feature の種類ごとに固有の構文があります (`single_block_feature` のように、鉱石のまとまりではなく単一ブロックを配置するものもあります)。
-   このシナリオでは `identifier` に namespace は不要です。namespace は任意で、ファイル名にも含めません。
-   `count` は、鉱石の「クラスター」が最大でどれくらい大きくなるか、あるいは実際の鉱石ブロックがいくつ一緒に生成されるかを表します。
-   `places_block` は、配置するブロックの identifier を値として受け取ります。
-   `may_replace` は、その feature が置き換え可能なブロックをすべて引数として受け取ります。ここに含まれていないブロックの上に生成された場合、そのブロックは置き換えられず、そのまま残ります。

## Feature Rules

**Feature Rules** は、_features_ (将来的には _structures_ も) をどこに、どのように配置するかを制御します。

<CodeHeader>BP/feature_rules/overworld_underground_blocky_ore_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:feature_rules": {
        "description": {
            "identifier": "overworld_underground_blocky_ore_feature",
            "places_feature": "blocky_ore_feature"
        },
        "conditions": {
            "placement_pass": "underground_pass",
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
            "iterations": 100,
            "coordinate_eval_order": "zyx",
            "x": {
                "distribution": "uniform",
                "extent": [0, 16]
            },
            "y": {
                "distribution": "uniform",
                "extent": [0, 16]
            },
            "z": {
                "distribution": "uniform",
                "extent": [0, 16]
            }
        }
    }
}
```

-   `description`
    -   `identifier` に namespace は不要ですが、ファイル名は一致している必要があります。
    -   `places_feature` は、このルールで制御される feature の identifier を値として受け取ります。
-   `conditions`
    -   `placement_pass` は、その feature がどの段階で配置されるかを示します。
    -   `biome_filter` は、spawn rule と同様に、その feature が生成されるバイオームタグを判定します。
-   `distribution`
    -   `iterations` は、基本的には生成回数です。私は 100 にしてどこでも生成されるようにしていますが、`diamond_ore` の場合は 1 にします。
    -   次の 4 つの項目は、鉱石がどの方向へ「引っ張られる」かを示します。
        _さらに説明が必要_

鉱石が生成されたかを確認する最も簡単な方法は、低い y 座標で次のコマンドを使うことです。`/fill ~15 ~5 ~15 ~-15 ~-15 ~-15 air 0 replace stone` とすると、選択範囲内の stone 以外をすべて残せます。結果は次のようになります。

![](ore_gen_sans_stone.jpg)

そして、`iterations` を 100 にするのは確かに多すぎます ;)

さらに技術を学ぶには、他の feature と feature_rule のバニラファイルを確認していくとよいです。ただし、ここで説明した内容だけでも、生成したいものの大半は作れます。

---

## カスタム構造物

### Structure Template Features

MCBE v1.16.20 以降、**カスタム生成された構造物が可能** になりました。
構造物を生成する簡単な方法は、先ほど触れた MACHINE_BUILDER の [自動生成ツール](https://machine-builder.itch.io/frg-v2) です。これにより、構造物に必要な 3 つのファイル `feature_rules/mystructure.feature_rule.json`、`feature_rules/mystructure.feature.json`、`structures/mystructure.mcstructure` が生成されます。Minecraft 内の Structure Block を使った `.mcstructure` の作成方法については、[こちら](/nbt/mcstructure) を参照してください。

---

`.mcstructure` ができたら、`feature` と `feature rule` を書きます。後者は鉱石の場合と同じです (この記事の冒頭を参照)。では **Feature** に進みましょう。

-   namespace は必須ではなく、ファイル名は namespace を除いた identifier と一致している必要があることを忘れないでください。たとえば、identifier が `wiki:myfeaturerule` でも単に `myfeaturerule` でも、ファイル名はどちらの場合も `myfeaturerule.json` にできます。

以下は、[Features ドキュメント](https://bedrock.dev/r/Features#minecraft:structure_template_feature) のコード例です。

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:structure_template_feature": {
        "description": {
            "identifier": "wiki:hot_air_balloon_feature"
        },
        "structure_name": "wiki:hot_air_balloon",
        "adjustment_radius": 8,
        "facing_direction": "random",
        "constraints": {
            "unburied": {},
            "block_intersection": {
                "block_whitelist": ["minecraft:air"]
            }
        }
    }
}
```

-   `structure_name` は構造物の identifier で、Structure Block で保存したものです。

### ジグソー構造物

ジグソー構造物は、非常に小さくも非常に大きくもでき、最大で横 256 ブロックまで対応します。

ジグソーは、村や Trail Ruins のような大規模なランダム構造物を扱えます。これらはワールド全体に生成でき、structure feature とは違って `/locate` で見つけられます。
とても強力なので、詳しい情報は [こちら](/world-generation/jigsaw-structures) で確認できます。

これでほぼ完了です。これで、自分だけのカスタム構造物をワールドに生成できるようになりました。

## ここまでの進捗

**ここまでに行ったこと:**

-   [x] 最初のバイオームを作成した。
-   [x] 最初の鉱石を自然生成させた。
-   [x] バニラファイルの生成と参照に bridge. を使えるようになった。
-   [x] 他のカスタム生成手法について学んだ。
-   [x] カスタム構造物を作成した。
