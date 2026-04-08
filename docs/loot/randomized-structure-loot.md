---
title: ランダム化された構造物のルート
description: カスタム構造物のコンテナにルートテーブルを追加する方法を学びます。
category: Tutorials
mentions:
    - MedicalJewel105
    - SirLich
    - SmokeyStack
    - Ciosciaa
    - rebrainertv
    - Supernova3695
    - QuazChick
tags:
    - easy
---

構造物内のコンテナにルートテーブルを追加するのは簡単です。PC と、[NBT Studio](https://github.com/tryashtar/nbt-studio/releases/download/v1.14.1/NbtStudio.exe)（実行ファイル）または [Loot Tabler](https://mcbe-essentials.github.io/structure-editor/loot-tabler)（ブラウザアプリ）のどちらかが必要です。欲しいルートがジグソー構造物にある場合は、プロセッサーを使えます。

## 準備

### ルートテーブルの作成

まず、`BP/loot_tables/chests` ディレクトリを作成し、その中にルートテーブルファイルを作成します。

ルートテーブルの作り方は [初心者ガイド](/guide/loot-table) で学べます。

<CodeHeader>BP/loot_tables/chests/my_structure_loot.json</CodeHeader>

```json
{
    "pools": [
        {
            "rolls": {
                "min": 8,
                "max": 10
            },
            "entries": [
                {
                    "type": "item",
                    "name": "minecraft:glass_bottle",
                    "functions": [
                        {
                            "function": "set_count",
                            "count": {
                                "min": 4,
                                "max": 6
                            }
                        }
                    ],
                    "weight": 1
                },
                {
                    "type": "item",
                    "name": "minecraft:potion",
                    "functions": [
                        {
                            "function": "set_count",
                            "count": {
                                "min": 4,
                                "max": 6
                            }
                        }
                    ],
                    "weight": 1
                }
            ]
        }
    ]
}
```

### 構造物の書き出し

ルートテーブルを作成したら、構造物を `BP/structures` に書き出します。その後、NBT Studio または Loot Tabler の手順に従ってください。

![](export_structure.png)

## NBT Studio（実行ファイル）

### ソフトウェアの準備

[NBT Studio](https://github.com/tryashtar/nbt-studio/releases/download/v1.14.1/NbtStudio.exe) をダウンロードして起動します。

### ルートテーブルの追加

NBT Studio を起動してファイルを開きます（`Ctrl + O`）。

![](open_file.png)

コンテナを探します（`Ctrl + F`）。

![](find_container.png)

コンテナへ移動し、`block_position_data` > `block_entity_data` を開きます。文字列タグを追加します。

![](add_string_tag1.png)

`LootTable` と、ルートテーブルへのファイルパスを追加します。

![](add_string_tag2.png)

変更を保存します（`Ctrl + S`）。

## Loot Tabler（ブラウザアプリ）

### ルートテーブルの追加

Web サイトを開いて "Upload" をクリックし、構造物ファイルを選びます。

![](LootTable-step1.png)

"Container Options" に表示される情報を参考にしながら、コンテナを一覧から探します。

![](LootTable-step2.png)

"Loot Table" にルートテーブルのパスを入力します。ルートをランダム生成したい場合は "Loot Table Seed" を空欄にするか `0` に設定します。ルートテーブルを毎回同じ内容にしたい場合は、特定の値を入力します。

![](LootTable-step3.png)

構造物ファイルをダウンロードし、`BP/structures` に配置します。

## ジグソーのプロセッサー

ジグソー構造物用の [processors](/world-generation/jigsaw-structures#processors) を使うと、怪しい砂やチェストのようなブロックにルートを持たせられます。

これは `minecraft:rule` プロセッサーと `block_entity_modifier` ルールを使って行えます。
`type` フィールドには `minecraft:append_loot` を指定し、`loot_table` にはルートテーブルへのパスを設定します。

このルールを `blockstate_match` 条件と組み合わせると、ブロックにルートテーブルを与えられます。

プロセッサーでチェストにルートを付けると、`blockstate_match` で入力チェストとルートテーブルを一致させて同じ回転のチェストを出力するようにしていない限り、既定の回転になります。
置き換えたいブロックのすべてのパーミュテーションに対してルールが必要です。たとえば、チェストには 4 方向の向きがあるので 4 つのルールが必要です。

プロセッサーを適用した構造物テンプレート内の指定ブロックはすべてルートを持ちます。
同じ構造物テンプレート内の異なるチェストに、プロセッサーだけで別々のルートを持たせることはできません。

### 例

ルートテーブルを適用した怪しい砂利の例です。

<CodeHeader>minecraft:processor_list</CodeHeader>

```json
{
    "processor_type": "minecraft:rule",
    "rules": [
        {
            "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json"
            },
            "input_predicate": {
                "predicate_type": "minecraft:block_match",
                "block": "minecraft:suspicious_gravel"
            },
            "output_state": {
                "name": "minecraft:suspicious_gravel"
            }
        }
    ]
}
```

すべての回転に対してルートテーブルを適用したチェストの例です。

<CodeHeader>minecraft:processor_list</CodeHeader>

```json
{
    "processor_type": "minecraft:rule",
    "rules": [
        {
            "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json"
            },
            "input_predicate": {
                "predicate_type": "minecraft:blockstate_match",
                "block": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "north"
                }
            },
            "output_state": {
                "name": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "north"
                }
            }
        },
        {
            "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json"
            },
            "input_predicate": {
                "predicate_type": "minecraft:blockstate_match",
                "block": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "south"
                }
            },
            "output_state": {
                "name": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "south"
                }
            }
        },
        {
            "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json"
            },
            "input_predicate": {
                "predicate_type": "minecraft:blockstate_match",
                "block": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "east"
                }
            },
            "output_state": {
                "name": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "east"
                }
            }
        },
        {
            "block_entity_modifier": {
                "type": "minecraft:append_loot",
                "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json"
            },
            "input_predicate": {
                "predicate_type": "minecraft:blockstate_match",
                "block": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "west"
                }
            },
            "output_state": {
                "name": "minecraft:chest",
                "states": {
                    "minecraft:cardinal_direction": "west"
                }
            }
        }
    ]
}
```

## テスト

構造物を読み込み、コンテナを開きます。ジグソーの場合は `/place structure` または `/place jigsaw` を使います。

![](test.png)
