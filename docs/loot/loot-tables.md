---
title: ルートテーブル
category: Documentation
nav_order: 1
mentions:
    - Ciosciaa
    - Etanarvazac
    - SmokeyStack
description: ルートテーブルについての解説。
---

::: warning
この文書は作成途中です。
:::

ルートテーブルは、宣言されたコレクションからアイテムの集合を選択するために使われます。ルートテーブルは次の場面で使用できます。

-   `/loot` コマンド
-   コンテナーの中身
-   ブロックのドロップ
-   釣り
-   Mob のドロップ
-   スポーンした Mob の装備
-   その他さまざまな Mob の動作

同じルートテーブルが使われるたびに、[外部条件](#)と[本質的なランダム性](#)に基づいて、別のアイテム集合が選ばれることがあります。この変化は、特に RPG 色の強いシステムでは、遊びや冒険性を成り立たせるうえで重要です。

## 統合

ルートテーブルは登録されるアドオン項目ではなく、上記のソースからパスで参照されます。ルートテーブルは behavior pack 内のどこに置いてもかまいませんが、バニラの慣例に従って、最上位の `loot_tables` ディレクトリ以下に置くことを推奨します。

<FolderView
	:paths="[
		'BP/loot_tables/blocks/cypress_door.json',
		'BP/loot_tables/blocks/cypress_door.json',
		'BP/loot_tables/blocks/cypress_door.json'
	]"
/>

## 構造

ルートテーブルは、必須の `"pools"` 配列プロパティを 1 つ持つ JSON オブジェクトとして表されます。

<CodeHeader>#</CodeHeader>

```json
{
	"pools": [
		…
	]
}
```

ルートテーブルの呼び出しで返されるルートは、ここで指定されたすべてのプールの結果の _合計_ になります。

### プール

プールは、アイテムを選択するための独立した構造として機能します。あるプールの結果が別のプールに影響されることはありません。

<CodeHeader>#</CodeHeader>

```json
{
    "rolls": 1,

    "entries": [
        {
            "type": "item",
            "name": "wiki:silver"
        }
    ]
}
```

プールには 2 種類あります。汎用の [重み付きランダムプール](#weighted-random-pools) と [階層型プール](#tiered-pools) です。後者は、従来 Mob の装備選択に使われてきました。

#### 重み付きランダムプール

従来型の重み付きランダムプールは、相対的な重みに基づいてアイテムを選択し、設定されたロール回数に応じた数の結果を選びます。

<CodeHeader>artifacts.json/pools/0</CodeHeader>

```json
{
    "rolls": {
        "min": 2,
        "max": 4
    },

    "entries": [
        {
            "type": "item",
            "name": "minecraft:golden_apple",
            "weight": 20
        },
        {
            "type": "item",
            "name": "minecraft:appleEnchanted",
            "weight": 1
        },
        {
            "type": "item",
            "name": "minecraft:name_tag",
            "weight": 30
        }
    ]
}
```

##### ロール

###### ボーナスロール

重み付きランダムプールのロール回数は、オプションの `"bonus_rolls"` プロパティを使って、プレイヤーの運に応じて変化させることができます。

```json
"bonus_rolls": 3,
"bonus_chance": 0.095
```

##### エントリーの重み付け

重みは、そのエントリーが選ばれる確率です。この `"entries"` 配列内の他のエントリーと比べて重みが高いほど、そのエントリーが選ばれる確率も高くなります。

```json
"weight": 3
```

###### クオリティ

エントリーの重みは、`quality` プロパティを使ってプレイヤーの運に応じて変更できます。

```json
"quality": 2
```

現在、運は「海の幸運」が付与された釣り竿で釣りをしたときにのみ反映されます。

#### 階層型プール

階層型プールは、コレクションからちょうど 1 つのエントリーを選択するために使われます。

```json
{
    "tiers": {
        "initial_range": 2,

        "bonus_rolls": 3,
        "bonus_chance": 0.095
    },

    "entries": [
        {
            "type": "loot_table",
            "name": "loot_tables/entities/armor_set_leather.json"
        },
        {
            "type": "loot_table",
            "name": "loot_tables/entities/armor_set_gold.json"
        },
        {
            "type": "loot_table",
            "name": "loot_tables/entities/armor_set_chain.json"
        },
        {
            "type": "loot_table",
            "name": "loot_tables/entities/armor_set_iron.json"
        },
        {
            "type": "loot_table",
            "name": "loot_tables/entities/armor_set_diamond.json"
        }
    ]
}
```

プールに `"tiers"` オブジェクトプロパティを含めると、階層型になります。

```json
"tiers": {
	"initial_range": 2,

	"bonus_rolls": 3,
	"bonus_chance": 0.095
}
```

階層型プール内のエントリーは _順序付き_ です。階層型プールで選ばれるエントリーは、そのインデックスに基づきます。このインデックスを決めるには、まず開始インデックスをランダムに振り、その後の成功ロール群でその開始インデックスを増やそうとします。

開始インデックスは、1 から整数プロパティ `"initial_range"` までの乱数を振って決まります。初期範囲が指定されない場合は `1` が既定値となり、開始インデックスは 1 に固定されます。

次に、追加ロールでインデックスを進める試みが行われます。このロール試行回数は `"bonus_rolls"` に整数で指定します。各ロールの成功確率は `"bonus_chance"` で指定します。`"bonus_chance"` は 1 を基準とした値で、`0.5` ならボーナスロールが成功する確率は 50% です。成功したロールごとにインデックスは 1 増えます。これら 2 つのプロパティはどちらも既定値が `0` であり、この追加ロールの仕組みを使うには両方を指定する必要があります。

最終的に決定されたインデックスが、そのプールの結果として対応するエントリーを選ぶために使われます。階層型プールのインデックスは 1 始まりで、最初のエントリーのインデックスは 1、2 番目は 2、以下同様です。決定されたインデックスがそのプールのエントリー数を超える場合、結果は何も返されません。

::: warning
階層型プールのエントリーに付けたすべての [conditions](#) は無視されます。プール自体の条件は引き続き使用できます。
:::

### エントリー

エントリーは、プール内で選択される単位です。3 種類のエントリーがあります。

#### アイテムエントリー

アイテムエントリーは、ルートを選択するための基本的なエントリー型です。アイテムエントリーは次を指します。

```json
"type": "item",
"name": "minecraft:apple",
"weight": 1
```

#### ルートテーブルエントリー

ルートテーブルエントリーを使うと、ルートの階層構造を作れます。

```json
"type": "loot_table",
"name": "loot_tables/custom/example.json",
"weight": 1
```

#### 空エントリー

空エントリーが選ばれた場合、そのロールではルートは何も生成されません。

```json
"type": "empty",
"weight": 4
```

空エントリーは一般に、範囲に 0 を含む [roll count](#)、[random chance conditions](#)、または 0 をランダムに選べる [count functions](#) で代用できます。主な利点は、[重み付きランダムプール](#)での可読性です。ロールがエントリーを返さないことを重みで示すほうが、理解しやすい場合があります。

### 関数

関数こそが、ルートテーブルを強力にしている要素です。ルートテーブル内の各エントリーに対して、幅広い処理を行えます。たとえば、ドロップ数の変更、付与されるエンチャントの変更（通常はエンチャント不可のアイテムにも対応）、アイテム名やその lore の変更、さらには本の書き込みまで可能です。関数の一覧と使い方は [item functions](/loot/item-functions) を参照してください。

<CodeHeader>artifacts.json/pools/entries</CodeHeader>

```json
{
    "type": "item",
    "name": "minecraft:dirt",
    "weight": 10,
    "functions": [
        {
            "function": "set_count",
            "count": {
                "min": 16,
                "max": 64
            }
        },
        {
            "function": "set_name",
            "name": "Pile of dirt"
        }
    ]
}
```

### 条件

条件は、特定の基準を満たしているかどうかを確認します。例: 「Zombie は Player によって倒されたか」「その剣に Looting エンチャントは付いているか。付いているならレベルはいくつか」

<CodeHeader>artifacts.json/pools/entries</CodeHeader>

```json
{
    "conditions": [
        {
            "condition": "killed_by_player"
        },
        {
            "condition": "random_chance_with_looting",
            "chance": 0.025,
            "looting_multiplier": 0.01
        }
    ],
    "rolls": 1,
    "entries": [
        {
            "type": "item",
            "name": "minecraft:iron_ingot",
            "weight": 1
        },
        {
            "type": "item",
            "name": "minecraft:carrot",
            "weight": 1
        },
        {
            "type": "item",
            "name": "minecraft:potato",
            "weight": 1
        }
    ]
}
```

## 上書き
