---
title: アイテム関数
description: アイテム関数は、ルートテーブルとトレードテーブル内のアイテムの性質を変更します。
category: Documentation
nav_order: 4
mentions:
    - Ciosciaa
    - MedicalJewel105
    - ThomasOrs
    - Robotics-Modified
    - Supernova3695
---

アイテム関数は、[ルートテーブル](/loot/loot-tables) と [トレードテーブル](/loot/trade-tables) にあるアイテムの性質を変更します。

TODO
エンチャント名に `minecraft:/whatever` のような接頭辞を付けられるのか？

<CodeHeader>Loot Entry</CodeHeader>

```json
{
    "type": "item",
    "name": "minecraft:diamond",
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
```

ここにある関数の大半は、トレードテーブルでのみテストされています。

これらの関数は、トレードテーブルと**ルートテーブルのみ**で使用できます。

これらの関数は `functions` 配列の下に記述します。

どれも Molang は受け付けません。

Java の追加関数や追加プロパティは、どれも成功しませんでした。

すべて、`minecraft:exploration_map` や `d1245436576u:fio2ejfoijfiowejf::::::exploration_map` のように、任意の文字列の後ろにコロンを付けた接頭辞を付けられます。

## 基本

基本的なアイテムプロパティ用の関数がいくつかあります。これらの関数は任意のアイテムに使用できます。

| Function             | Container Loot | Block Drops | Fishing | Entity Drops | Entity Equipment | Trade Tables |
| -------------------- | -------------- | ----------- | ------- | ------------ | ---------------- | ------------ |
| `set_count`          | ✅             | ✅          | ✅      | ✅           | ✅               | ❌           |
| `set_name`           | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `set_lore`           | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `set_data`           | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `random_block_state` | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `random_aux_value`   | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `set_damage`         | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |

### 数量

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ❌     |

::: tip NOTE
トレードテーブルでは、数量の設定に [`"quantity"` プロパティ](/loot/trade-tables#quantity) を使います。
:::

`set_count` 関数は、そのアイテムエントリーの数量を設定します。

<CodeHeader>Count Function</CodeHeader>

```json
{
    "function": "set_count",
    "count": {
        "min": 2,
        "max": 4
    }
}
```

`"count"` プロパティは、そのアイテムをいくつ生成するかを決めます。整数でも [range object](/documentation/shared-constructs#range-objects) でも指定できます。指定した数量がそのアイテムのスタック上限を超えることがあります。その場合、コンテナー内では他のスロットへあふれ、地上に落ちた場合は複数の別スタックに分かれます。`count` プロパティの既定値は実際には `0` なので、常に含めるべきです。

### 名前

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

アイテム名は `set_name` 関数で設定できます。名前はアイテムにカーソルを合わせたときにユーザーインターフェースに表示されます。名前はプレイヤーが金床で変更できます。

<CodeHeader>Name Function</CodeHeader>

```json
{
    "function": "set_name",
    "name": "Cursed Bow"
}
```

アイテムに付ける名前は、文字列 `"name"` プロパティで指定します。既定では、名前の文字は斜体で表示されます。ただし、アイテム名は書式コードに対応しており、`§r` を先頭に入れることで斜体を解除できます。アイテム名では raw text は使えません。改行には `\n` を使えます。

### ロア

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`set_lore` 関数はアイテムのロアを設定します。

<CodeHeader>Lore Function</CodeHeader>

```json
{
    "function": "set_lore",
    "lore": ["", ""]
}
```

`"lore"` プロパティはロアを設定します。文字列または文字列配列のどちらでも表せます。すべてのロア文字列は書式コードに対応していますが、ローカライズには対応していません。配列形式では、各文字列がロアの 1 行になります。各文字列の書式コンテキストは独立しているため、書式は文字列ごとにリセットされます。既定ではロアには紫色の斜体テキストが使われますが、必要に応じて各文字列の先頭にリセット用の書式コード（`§r`）を付けることで戻せます。任意のロア文字列内で `\n` を使うと、現在の書式コンテキストを保ったまま改行できます。

### データ

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`set_data` は、`/give` コマンドの引数に似た形で、指定したアイテムのデータを設定します。ブロックに使うと、そのブロックの data 値を設定します。アイテムに使うと、その aux 値を設定します。ただしコマンドと違い、`set_data` ではアイテムの耐久値は設定できません。その場合は [`durability`](#durability) を使ってください。

<CodeHeader>Data Function</CodeHeader>

```json
{
    "function": "set_data",
    "data": 2
}
```

`"data"` プロパティはアイテムの data を設定します。指定しない場合は `0` が既定値です。`"data"` は整数でも [range object](/documentation/shared-constructs#range-objects) でも指定できます。

As an integer:

```json
"data": 1
```

As a range object:

```json
"data": {
	"min": 0,
	"max": 5
}
```

オブジェクト形式では、この関数のアイテムエントリーが選ばれるたびに、指定された最小値と最大値の間から両端を含めて data 値がランダムに選ばれます。

### ブロック状態

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`random_block_state` は、ブロックの個別の block state を設定します。

<CodeHeader>Block State Function</CodeHeader>

```json
{
    "function": "random_block_state",
    "block_state": "wiki:color",
    "values": 3
}
```

ブロックの block state を設定します。

`block_state`: 必須の block state 名の文字列。

`values`: 数値または [range object](/documentation/shared-constructs#range-objects)。

既定値は 0 ですが、実質的には必須です。そうでないと意味がありません。たぶん。

### Aux 値

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`random_aux_value`

<CodeHeader>Aux Value Function</CodeHeader>

```json
{
    "function": "random_aux_value",
    "values": {
        "min": 2,
        "max": 4
    }
}
```

アイテムの auxiliary value を設定します。

`values`: Can be an integer or a [range object](/documentation/shared-constructs#range-objects).

range object を使うと、値を一様ランダムに選びます（各値が選ばれる確率は同じです）。

**auxiliary value** にのみ使われます。たとえば、道具の damage は設定せず、羊毛の色は設定します。

`minecraft:wool:10` のような、識別子の `:suffix` で指定された auxiliary value は上書きされます。

ブロック data にも使えます。

### 耐久値

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

アイテムの耐久値は `set_damage` 関数で設定できます。

<CodeHeader>Durability Function</CodeHeader>

```json
{
    "function": "set_damage",
    "damage": {
        "min": 0.5,
        "max": 1
    }
}
```

このアイテムの damage 値を設定します。

`damage`: 固定値または [range object](/documentation/shared-constructs#range-objects) を指定できます。許容範囲は `0.0-1.0` です。

このアイテムに durability コンポーネントがない場合、この関数は無視されます。


## アイテム固有データ

一部の関数は、特定のアイテム群にしか使えません。各関数で、どのアイテムが対象かを確認してください。

| Function                       | Container Loot | Block Drops | Fishing | Entity Drops | Entity Equipment | Trade Tables |
| ------------------------------ | -------------- | ----------- | ------- | ------------ | ---------------- | ------------ |
| `furnace_smelt`                | ❌             | ❌          | ❌      | ✅           | ❌               | ❌           |
| `set_book_contents`            | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `exploration_map`              | ✅             | ✅          | ✅      | ✅           | ✅               | ⚠️           |
| `set_banner_details`           | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `random_dye`                   | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `set_actor_id`                 | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `fill_container`               | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `set_potion`                   | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `set_ominous_bottle_amplifier` | ✅             | ✅          | ✅      | ✅           | ✅               | ⚠️           |
| `set_stew_effect`              | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |

### 熱処理アイテム

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ❌     |
| Block drops      | ❌     |
| Fishing          | ❌     |
| Entity drops     | ✅     |
| Entity equipment | ❌     |
| Trade table      | ❌     |

`furnace_smelt`

<CodeHeader>Heat Item Function</CodeHeader>

```json
{
    "function": "furnace_smelt"
}
```

エンティティが死亡時に燃えていたことを自動的に前提にします。
バニラのファイルではこれに関数条件が使われていますが、その条件を外しても、`furnace_smelt` 関数が発動するにはエンティティが炎上死している必要があるようです。

### 本の内容

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`set_book_contents`

<CodeHeader>Book Contents Function</CodeHeader>

```json
{
    "function": "set_book_contents",
    "title": "Wiki Book",
    "author": "Bedrock Wiki",
    "pages": ["Example page number one", "Example page number 2"]
}
```

本のデータを設定します。

`minecraft:writable_book` または `minecraft:written_book` にのみ使用できます。

`author`: 著者名の文字列。

`title`: 本のタイトルの文字列。

`pages`: 文字列配列。各文字列がそのページの内容です。

最大 50 個の文字列、各文字列 798 文字まで対応しています。
全ページ合計で 12,800 文字までです。
改行を入れるには、文字列内で `\n`（`\\n` ではありません）を使います。

タブは使えません。

カラーコードは使えます。ページごとに文字列が変わるたび、カラーコードはリセットされます。

### 探索マップ

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`exploration_map`

<CodeHeader>Exploration Map Function</CodeHeader>

```json
{
    "function": "exploration_map",
    "destination": "village"
}
```

**トレードテーブルの情報**:

`destination`:

現在は `monument` と `mansion` だけが使えます。

それ以外は使えません。埋もれた宝でさえ不可です（これは一見うまくいきそうに見えます。ほかのものと違って Unknown Map ではなく正しい名前が付くためです。ただし、どこにも向かいません）。:(

**ルートテーブルの情報**:

`destination`:

任意の `/locate` 対象で動作します（注意点については古いレシピの注記を参照してください。これはコンテナー用ルートテーブルについてです）。

適切な次元にいる場合にのみ動作します。

mansion または monument の場合、正しいマーカー装飾に対応して、名前、色、アイコンが正しく設定されます。

無効な destination、または destination がない場合は、マーカーは表示されませんが、地図上の川と海の線は残ります。

コンテナー、entity の装備、ドロップのいずれでも動作します。

trader では **2 つの場所だけ** が動作したことに注意してください。

### バナーの種類

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`set_banner_details`

<CodeHeader>Banner Type Function</CodeHeader>

```json
{
    "function": "set_banner_details",
    "type": 1 // Ominous Banner
}
```

`minecraft:banner`、または `minecraft:shield` 上のバナーの種類を設定します（これらにのみ使用できます）。

`type`: `0` または `1` のみです。

- `0` は White Banner です。
- `1` は Ominous Banner です。

`base_color`: Can be set for banners of type 0 and sets the color of the banner.
`patterns`: Is an array of banner patterns and colors to be applied to the banner. Up to 6 patterns can be applied.

### ランダム染色

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`random_dye`

<CodeHeader>Random Dyeing Function</CodeHeader>

```json
{
    "function": "random_dye"
}
```

染色可能なアイテムをランダムに染めます。たとえば、革の馬鎧、革の防具、オオカミの防具です。

羊毛やその関連アイテムには使えません。

### スポーンエッグ

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`set_actor_id`

<CodeHeader>Spawn Eggs Function</CodeHeader>

```json
{
    "function": "set_actor_id",
    "id": "minecraft:chicken"
}
```

スポーンエッグに使えます。

`id`: Mob の識別子です。

トレードテーブルでは、`id` プロパティを省略すると trader の識別子が既定値になります。

### コンテナーの中身

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`fill_container`

<CodeHeader>Container Contents Function</CodeHeader>

```json
{
    "function": "fill_container",
    "loot_table": "loot_tables/chests/chest_loot.json"
}
```

コンテナーアイテムまたはブロックの中身を設定します。シュルカーボックスや bundle などのコンテナーアイテムに、ルートそのものを入れられます。

`loot_table`: behavior pack ルートからのルートテーブルファイルのパスです。

`loot_table` プロパティは必須です。なければ通常のアイテムのままになります。
アイテムが入っているのと同じルートテーブルを指すことはできません。
コンテナー、entity の装備やドロップ、ブロックで動作します。

### ポーションの種類

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`set_potion`

<CodeHeader>Potion Type Function</CodeHeader>

```json
{
    "function": "set_potion",
    "id": "poison"
}
```

このアイテムの potion type を設定します。対応するアイテム型は `minecraft:potion`、`minecraft:splash_potion`、`minecraft:lingering_potion`、`minecraft:arrow` です。

`id`: potion type の名前です。すべての [Potion Types](#potion-types) の一覧はここにあります。

### 不吉な瓶の増幅値

| Usage            | Usable                       |
| ---------------- | ---------------------------- |
| Container loot   | ✅                           |
| Block drops      | ✅                           |
| Fishing          | ✅                           |
| Entity drops     | ✅                           |
| Entity equipment | ✅                           |
| Trade table      | ⚠️ (has not been tested yet) |

`set_ominous_bottle_amplifier`

<CodeHeader>Ominous Bottle Amplifier Function</CodeHeader>

```json
{
    "function": "set_ominous_bottle_amplifier",
    "amplifier": {
        "min": 0,
        "max": 4
    }
}
```

`minecraft:ominous_bottle` の potion effect amplifier を設定します。

`amplifier`: 固定値または [range object](/documentation/shared-constructs#range-objects) にできます。許容値は `0-4` です。

### 怪しげなシチューの効果

| Usage            | Usable                       |
| ---------------- | ---------------------------- |
| Container loot   | ✅                           |
| Block drops      | ✅                           |
| Fishing          | ⚠️ (has not been tested yet) |
| Entity drops     | ✅                           |
| Entity equipment | ⚠️ (has not been tested yet) |
| Trade table      | ⚠️ (has not been tested yet) |

`set_ominous_bottle_amplifier`

<CodeHeader>Set Stew Effect Function</CodeHeader>

```json
{
    "function": "minecraft:set_stew_effect",
    "effects": [
        {
            "id": 0 // night vision
        },
        {
            "id": 3 // blindness
        }
    ]
}
```

`minecraft:suspicious_stew` アイテムの効果を設定します。

`id` は 0 から 12 までの任意の整数にできます。

## エンチャント

これらの関数は、アイテムにエンチャントを付けるかどうかを制御します。

| Function                   | Container Loot | Block Drops | Fishing | Entity Drops | Entity Equipment | Trade Tables |
| -------------------------- | -------------- | ----------- | ------- | ------------ | ---------------- | ------------ |
| `enchant_book_for_trading` | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `enchant_with_levels`      | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `enchant_randomly`         | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `enchant_random_gear`      | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `specific_enchants`        | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |

### 取引用エンチャント

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`enchant_book_for_trading`

<CodeHeader>Enchant for Trading Function</CodeHeader>

```json
{
    "function": "enchant_book_for_trading"
}
```

**トレードテーブルで解説済みです。**

### レベルベースのエンチャント

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`enchant_with_levels` は、エンチャントテーブルのロジックでアイテムにエンチャントを付けます。宝エンチャントも任意で許可できます。

<CodeHeader>Level-Based Enchantments Function</CodeHeader>

```json
{
    "function": "enchant_with_levels",
    "levels": {
        "min": 15,
        "max": 21
    },
    "treasure": true
}
```

指定されたレベルで、エンチャントテーブルから付与したかのように本へエンチャントします。

エンチャントテーブルと違い、`30` で上限にはなりません。それ以外は対称的に見えます。

レベル `99999` にすると、ほぼあり得る限りのエンチャントが付いた、非常識なほど強力な本になります。

`treasure`: そのアイテムに宝エンチャントを候補として含めます。**Boolean** で、既定値は `false` です。`false` の場合、呪いは候補に出ません。`true` の場合は出ます。

`levels`: 数値または [range object](/documentation/shared-constructs#range-objects) にできます。既定値は `0` です。
負の値も指定できますが、`0` として扱われます。

### ランダムエンチャント

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`enchant_randomly`

<CodeHeader>Random Enchantments Function</CodeHeader>

```json
{
    "function": "enchant_randomly"
}
```

指定したアイテムに、ランダムな数のエンチャントとその強さを付けます。

`treasure`: そのアイテムに宝エンチャントを候補として含めます。**Boolean** で、既定値は `false` です。

### 装備をエンチャント

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`enchant_random_gear`

<CodeHeader>Enchant Gear Function</CodeHeader>

```json
{
    "function": "enchant_random_gear",
    "chance": 0.5 // 50% chance of being enchanted
}
```

指定したアイテムに、ランダムな数のエンチャントとその強さを付けます。

`enchant_randomly` にかなり似ていますが、宝エンチャントは付かないようです。

ハサミには動きませんが、にんじん付きの棒には動きます。

`chance`: このアイテムがそもそもエンチャントされる確率です。許容範囲は `0.0-1.0` で、既定値は `0` です。
`1.0` を超えても、より「エンチャントされる」わけではありません。

### 特定のエンチャント

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`specific_enchants`

<CodeHeader>Specific Enchantments Function</CodeHeader>

```json
{
    "function": "specific_enchants",
    "enchants": [
        {
            "id": "unbreaking",
            "level": [1, 3]
        }
    ]
}
```

特定の組み合わせのエンチャントを適用します。

`enchants`:

文字列配列またはオブジェクトにできます。すべての [Enchantment Types](#enchantment-types) の一覧はここです。

配列の場合、文字列とオブジェクトを混在できます（下記参照）。

文字列の場合は、エンチャント ID です。

オブジェクトの場合:

`id`: エンチャントの識別子です。

`level`:

任意で、既定値は `1` です。
正確な数値か、`min` と `max` を表す 2 要素配列にできます（両端を含みます）。

Example:

```json
{
    "function": "specific_enchants",
    "enchants": [ 
        "mending",
        {
            "id": "fortune",
            "level": [1, 3]
        }
    ]
}
```

## 外部要因

アイテムドロップに影響する外部条件です。

| Function                    | Container Loot | Block Drops | Fishing | Entity Drops | Entity Equipment | Trade Tables |
| --------------------------- | -------------- | ----------- | ------- | ------------ | ---------------- | ------------ |
| `looting_enchant`           | ❌             | ❌          | ❌      | ✅           | ❌               | ❌           |
| `explosion_decay`           | ❌             | ✅          | ❌      | ❌           | ❌               | ❌           |
| `set_data_from_color_index` | ❌             | ❌          | ❌      | ❌           | ❌               | ✅           |
| `trader_material_type`      | ❌             | ❌          | ❌      | ❌           | ❌               | ✅           |

### 手持ちツールの Looting エンチャント

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ❌     |
| Block drops      | ❌     |
| Fishing          | ❌     |
| Entity drops     | ✅     |
| Entity equipment | ❌     |
| Trade table      | ❌     |

`looting_enchant`

<CodeHeader>Held Tool Looting Function</CodeHeader>

```json
{
    "function": "looting_enchant",
    "count": {
        "min": 0,
        "max": 1
    }
}
```

entity を倒したときに使われた Looting エンチャントのレベルに応じて、ドロップ数を増やします。

count は整数または [range object](/documentation/shared-constructs#range-objects) にできます。

### 爆発による減衰

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ❌     |
| Block drops      | ✅     |
| Fishing          | ❌     |
| Entity drops     | ❌     |
| Entity equipment | ❌     |
| Trade table      | ❌     |

`explosion_decay`

<CodeHeader>Explosion Decay Function</CodeHeader>

```json
{
    "function": "explosion_decay"
}
```

既定では常に残ります。爆発に巻き込まれた場合、そのブロック位置での爆発の強さに応じてドロップしないことがあります。

### Entity の色

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ❌     |
| Block drops      | ❌     |
| Fishing          | ❌     |
| Entity drops     | ❌     |
| Entity equipment | ❌     |
| Trade table      | ✅     |

`set_data_from_color_index`

<CodeHeader>Entity Color Function</CodeHeader>

```json
{
    "function": "set_data_from_color_index"
}
```

ブロックの data 値を、entity 上の `minecraft:color` コンポーネントの値に設定します。

### Trader 素材タイプ

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ❌     |
| Block drops      | ❌     |
| Fishing          | ❌     |
| Entity drops     | ❌     |
| Entity equipment | ❌     |
| Trade table      | ✅     |

`trader_material_type`

<CodeHeader>Trader Material Type Function</CodeHeader>

```json
{
    "function": "trader_material_type"
}
```

取引専用でしょうか。ルートのどこかで動くかもしれません。

# 型識別子

ポーション type やエンチャントなど、文字列値を使う関数で使用される文字列値の一覧です。

:::warning 
一部の識別子は含まれていないか、誤っている可能性があります。必ず公式ドキュメントを参照してください。ただし、そのうちのいくつかは実際に使えます。
:::

## ポーションの種類

`set_potion` 関数で使います。

- "water"
- "mundane"
- "long_mundane"
- "awkward"
- "nightvision"
- "long_nightvision"
- "invisibility"
- "long_invisibility"
- "leaping"
- "long_leaping"
- "strong_leaping"
- "fire_resistance"
- "long_fire_resistance"
- "swiftness"
- "long_swiftness"
- "strong_swiftness"
- "slowness"
- "long_slowness"
- "strong_slowness"
- "water_breathing"
- "long_water_breathing"
- "healing"
- "strong_healing"
- "harming"
- "strong_harming"
- "poison"
- "long_poison"
- "strong_poison"
- "regeneration"
- "long_regeneration"
- "strong_regeneration"
- "strength"
- "long_strength"
- "strong_strength"
- "weakness"
- "long_weakness"
- "wither"
- "turtle_master"
- "long_turtle_master"
- "strong_turtle_master"
- "slow_falling"
- "long_slow_falling"
- "wind_charge"
- "weaving"
- "oozing"
- "infested"

## Enchantment Types

`specific_enchants` 関数で使います。

- "protection"
- "fire_protection"
- "feather_falling"
- "blast_protection"
- "projectile_protection"
- "unbreaking"
- "mending"
- "respiration"
- "depth_strider"
- "frost_walker"
- "aqua_affinity"
- "soul_speed"
- "swift_sneak"
- "sharpness"
- "smite"
- "bane_of_arthropods"
- "fire_aspect"
- "knockback"
- "looting"
- "efficiency"
- "fortune"
- "silk_touch"
- "power"
- "punch"
- "flame"
- "infinity"
- "multishot"
- "piercing"
- "quick_charge"
- "luck_of_the_sea"
- "lure"
- "impaling"
- "riptide"
- "loyalty"
- "channeling"
- "curse_of_binding"
- "curse_of_vanishing"
- "density"
- "breach"
- "wind_burst"
- "lunge"
