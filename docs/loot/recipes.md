---
title: レシピ
description: レシピは、クラフトテーブル、かまど、焚き火、醸造台で行われるさまざまなアイテム取引を扱う仕組みです。
category: Documentation
nav_order: 3
mentions:
    - Ciosciaa
    - SirLich
    - MedicalJewel105
    - TheHyperWhale
    - Lufurrius
    - QuazChick
---

レシピは、クラフトテーブル、かまど、焚き火、醸造台で行われるさまざまなアイテム取引を扱う仕組みです。

![](recipe.png)

::: tip
金床でのやり取りはレシピファイルではなく、[アイテム定義](/items/item-components) 内で扱われます。機織り機の取引は現在利用できません。
:::

レシピやその機能を使うために、実験的機能の切り替えは必要ありません。

### 登録

すべてのレシピは、behavior pack ルートの `recipes` フォルダに保存されます。ファイル名や配置は、任意のフォルダ階層で自由に整理できます。

This arbitrary structure is used for the paths in this document:

<FolderView :paths="[
    'BP/recipes/brewing/negative/paralysis.json',
    'BP/recipes/crafting/weapons/cold_steel_sword.json',
    'BP/recipes/decorations/knobs/brass.json',
    'BP/recipes/magic/magic_ash.json',
    'BP/recipes/covered_arch.json',
    'BP/recipes/illumination_potion.json'
]" />

例として、次の [形状付きレシピ](#shaped-recipes) で「cold steel sword」を作れます。

<CodeHeader>BP/recipes/crafting/weapons/cold_steel_sword.json</CodeHeader>

```json
{
    "format_version": "1.17.41",
    "minecraft:recipe_shaped": {
        "description": {
            "identifier": "wiki:cold_steel_sword"
        },
        "tags": ["crafting_table", "altar"],
        "pattern": ["X", "X", "I"],
        "key": {
            "X": "wiki:cold_steel",
            "I": "minecraft:stick"
        },
        "unlock": [
            {
                "item": "wiki:cold_steel"
            },
            {
                "item": "minecraft:wool",
                "data": 3
            },
            {
                "context": "PlayerInWater"
            }
        ],
        "result": "wiki:cold_steel_sword"
    }
}
```

## 共通プロパティと構造

### フォーマットバージョン

[format version](/guide/format-version) は、レシピ本体で使われるスキーマの版を示すためのものです。最上位の `"format_version"` プロパティで指定します。

<CodeHeader>#/</CodeHeader>

```json
"format_version": "1.17.41"
```

実際には、フォーマットバージョンは任意の値にでき、省略もできます。

::: warning
それでもフォーマットバージョンは含めることを強く推奨します。実際の Minecraft バージョンを表す値にしておくと、将来の互換性確保に役立ちます。現在のリリース版か、直近のメジャーリリース版を使うとよいでしょう。
:::

### 説明

どのレシピ型にも必須の `"description"` オブジェクトには、レシピの識別子が入ります。

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>

```json
"description": {
    "identifier": "wiki:cold_steel_sword"
}
```

その唯一の子である必須の `"identifier"` プロパティは、ワールドに適用されたすべてのパックを通してレシピを一意に識別するためのものです。レシピ識別子に対する名前空間の要件は特になく、同一パック内で完全なレシピ識別子が重複しないことだけが条件です。

::: warning
名前空間の使用を強く推奨します。名前空間は他のアドオン分野では標準であり、レシピをパック内で論理的に区切る助けになり、ワールドで複数の behavior pack を使う際の衝突を減らせます。
:::

### タグ

レシピは、必須の `"tags"` 配列プロパティを使ってクラフト用インターフェースに関連付けられます。このプロパティはどのレシピ型にも含める必要があります。これらのタグによって、`minecraft:crafting_table` コンポーネントを使う異なるブロック間でレシピを共有できます。レシピに `crafting_table` タグやバニラタグがなく、代わりにカスタムブロックのタグだけがある場合、そのレシピはそのカスタムブロックにだけ共有され、クラフトテーブルや石切り台などには共有されません。少なくとも 1 つのタグが必要です。

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>

```json
"tags": ["crafting_table", "altar"]
```

バニラのインターフェースは、各レシピ種別ごとにタグが公開されています。

クラフト:

-   `crafting_table`
-   `stonecutter`
-   `smithing_table`

::: warning
鍛冶台レシピを作りたい場合、2 つ目のスロットには `<namespace>:netherite_ingot` を使う必要があります。別の識別子では動作しません。**これは 1.18.30 以降では動作しません**。
:::

調理と精錬:

-   `furnace`
-   `blast_furnace`
-   `smoker`
-   `campfire`
-   `soul_campfire`

醸造:

-   `brewing_stand`

教育:

-   `material_reducer`

::: tip
さらに、[カスタムクラフトテーブル](/blocks/block-components#crafting-table) は、クラフトレシピ用の独自タグを宣言できます。カスタムの調理・精錬ブロックやカスタム醸造台は、現在は利用できません。
:::

::: tip
レシピを実質的に無効化したい場合（以前のレシピを[上書き](#overrides)するときに便利です）、タグ配列を `[""]` にします。
:::

### レシピのアンロック

Minecraft 1.20.30 でレシピのアンロック機能が追加されました。レシピでこの機能を使うには、`manifest.json` の `min_engine_version` を 1.20.11 にする必要があります（1.20.30 が推奨です）。また、レシピに `unlock` 配列とそのオブジェクトを追加する必要があります。

```json
"unlock": [
    {
        "item": "wiki:cold_steel" // Item to unlock recipe
    },
    {
        "item": "minecraft:wool", // Item to unlock recipe
        "data":  3
    },
    {
        "context": "PlayerInWater" // Event to unlock recipe
    }
  ]
```

この配列内の各オブジェクトには `"item"` があり、レシピをアンロックするためにプレイヤーのインベントリに必要なアイテムを示します。data 値も受け付けます。`"context"` は、このレシピをアンロックするイベントを決めるために使います。`"PlayerInWater"` は、プレイヤーが水に入るとこのレシピをアンロックします。これはレシピで知られている唯一の context でもあります。

### アイテム記述子

レシピを扱うには、さまざまなプロパティでアイテムを参照する必要があります。アイテムは、文字列参照かアイテムオブジェクトのどちらかで指定できます。どちらの形式も data 値を扱えますが、count を指定できるのはアイテムオブジェクトだけです（レシピの出力で使えます）。レシピ入力では、data 値を指定しない場合、その識別子に属する任意の data 値のアイテムがその入力に使えます。出力の data 値は、明示しなければ `0` が既定値です。アイテムタグによるレシピ入力の選択には対応していません。

#### 文字列参照

一般に、文字列参照はそのアイテムの namespace と identifier を組み合わせたものです。

<CodeHeader>#/minecraft:recipe_shapeless/ingredients/0</CodeHeader>

```json
"minecraft:planks"
```

文字列参照では、末尾に data 値を付けることもできます。

<CodeHeader>#/minecraft:recipe_shapeless/ingredients/0</CodeHeader>

```json
"minecraft:planks:2"
```

#### アイテムオブジェクト

アイテムオブジェクトは、アイテムをより明示的に参照するための構造です。

<CodeHeader>#/minecraft:recipe_shapeless/ingredients/0</CodeHeader>

```json
{
    "item": "minecraft:planks",
    "data": 2,
    "count": 3
}
```

必須の `"item"` プロパティは、文字列参照形式と同じように機能します。明示的な data フィールドも使えますが、文字列末尾の data 指定も `"item"` プロパティで引き続き使えます。ただし接尾辞形式と違い、`"data"` には Molang を入れられます。この Molang はワールド読み込み時に 1 回だけ評価され、クラフト試行ごとには評価されません。変数を使って、レシピ内のプロパティ間でデータを受け渡すことはできません。さらに、入力アイテムの性質を問い合わせることもできません。現在、`"data"` プロパティで使えることが知られている唯一のクエリは `q.get_actor_info_id` で、entity のスポーンエッグ ID をその識別子から調べるために使いますが、これは `"item"` にスポーンエッグの ID を直接設定することでも実現できます（例: `minecraft:chicken_spawn_egg`）。

<CodeHeader>#/minecraft:recipe_shapeless/result</CodeHeader>

```json
{
    "item": "minecraft:spawn_egg",
    "data": "q.get_actor_info_id('minecraft:chicken')"
}
```

オプションの整数 `"count"` プロパティは、アイテムをスタックするために使えます。既定値は `1` です。現在、count の設定が機能するのは [crafting](#crafting) と [furnace](#heating) のレシピ出力、および [shapeless recipe ingredients](#ingredients) だけです。指定した count は他の場所では無視されます。

::: tip NOTE
スタックできないアイテムに `1` を超える count を指定すると、エラーになります。形状なしレシピや醸造ミックスのような、1 個だけ返すレシピ出力を 1 回の処理で複数個返すように強制する方法はありません。
:::

::: warning
トレードの [table item descriptors](/loot/trade-tables#items) に似ていますが、レシピの item descriptor では functions を使えません。
:::

#### 追加識別子

基本的なポーションを表すために、通常は使えない追加の識別子がレシピで利用できます。

<CodeHeader>#/minecraft:recipe_brewing_mix/input</CodeHeader>

```json
"minecraft:potion_type:strength"
```

これらの識別子はオブジェクト記法では使えず、文字列記法でのみ使えます。スプラッシュポーションと残留ポーションではバリアントは使えません。これらの識別子はすべて <code>minecraft:potion_type:<em>potion_effect</em></code> の形式で、<code><em>potion_effect</em></code> には次のいずれかを指定できます。

-   `water`
-   `awkward`
-   `mundane`
-   `thick`
-   `healing`
-   `regeneration`
-   `swiftness`
-   `strength`
-   `harming`
-   `poison`
-   `slowness`
-   `weakness`
-   `water_breathing`
-   `fire_resistance`
-   `nightvision`
-   `invisibility`
-   `leaping`
-   `slow_falling`
-   `turtle_master`
-   `wither`
-   `infested`
-   `oozing`
-   `weaving`
-   `wind_charged`

対応している場合は、`long_` と `strong_` の接頭辞を使って修正版ポーションを表せます。たとえば `minecraft:potion_type:strong_poison` です。

## クラフト

クラフト操作は、クラフトグリッドを使って入力を即座に出力へ変換します。クラフトレシピには 2 種類あり、入力を自由に並べられる [shapeless recipes](#shapeless-recipes) と、入力の厳密な配置を定義する [shaped recipes](#shaped-recipes) があります。
クラフトレシピは、クラフトテーブルと石切り台の両方に対応しています。

<CodeHeader>#/minecraft:recipe_shapeless/</CodeHeader>

```json
"tags": ["crafting_table", "stonecutter"]
```

`"crafting_table"` は、バニラのクラフトテーブルと、インベントリ内のプレイヤー用 2 × 2 クラフトグリッドの両方に適用されます。現在、どちらか一方だけを対象にする方法はありません。クラフトレシピはカスタムタグにも対応しており、レシピを [カスタムブロックが提供するクラフトグリッド](/blocks/block-components#crafting-table) に関連付けられます。

### 形状なしレシピ

形状なしレシピは、クラフトグリッド上で入力の集合を 1 つの出力にまとめるだけのレシピです。

![](shapeless_recipe.png)

<CodeHeader>BP/recipes/decorations/knobs/brass.json</CodeHeader>

```json
{
    "format_version": "1.17.41",
    "minecraft:recipe_shapeless": {
        "description": {
            "identifier": "wiki:brass_door_knob"
        },
        "group": "handles",
        "tags": ["construction_bench"],
        "ingredients": [
            "wiki:brass",
            {
                "item": "wiki:screw",
                "data": 2
            }
        ],
        "unlock": [
            {
                "item": "wiki:cold_steel"
            },
            {
                "item": "minecraft:wool",
                "data": 3
            },
            {
                "context": "PlayerInWater"
            }
        ],
        "result": {
            "item": "wiki:door_knob",
            "data": 3
        }
    }
}
```

#### 材料

必須の `"ingredients"` 配列プロパティには、そのクラフトレシピに必要な入力アイテムを列挙します。

<CodeHeader>#/minecraft:recipe_shapeless/</CodeHeader>

```json
"ingredients": [
    "wiki:brass",
    {
        "item": "wiki:screw",
        "data": 2
    }
]
```

各エントリーは [item descriptor](#item-descriptors) です。材料に count がある場合、その count は複数のクラフトグリッドスロットにまたがって表現する必要があります。1 つのスロットに積み重ねたアイテムを使って製品を作ることはできません。クラフトに必要なアイテムが揃っていても、材料数が使用中のクラフトインターフェースで扱える数を超えると、そのレシピはレシピブック上で自動的に利用不可になります。

#### 形状なしレシピの結果

形状なしレシピの出力は、必須の `"result"` プロパティで表し、[item descriptor](#item-descriptors) か、その単一要素の配列として指定できます。

<CodeHeader>#/minecraft:recipe_shapeless/</CodeHeader>

```json
"result": {
    "item": "wiki:door_knob",
    "data": 3
}
```

### 形状付きレシピ

形状付きレシピは、クラフト時に使う材料が厳密な形に従うことを要求します。

![](shaped_recipe.png)

<CodeHeader>BP/recipes/covered_arch.json</CodeHeader>

```json
{
    "format_version": "1.17.41",
    "minecraft:recipe_shaped": {
        "description": {
            "identifier": "wiki:covered_arch"
        },
        "tags": ["crafting_table"],
        "pattern": ["SSS", "I I", "I I"],
        "key": {
            "S": "wiki:cloth",
            "I": "wiki:support"
        },
        "unlock": [
            {
                "item": "wiki:cold_steel"
            },
            {
                "item": "minecraft:wool",
                "data": 3
            },
            {
                "context": "PlayerInWater"
            }
        ],
        "result": [
            {
                "item": "wiki:covered_arch",

                "count": 3
            },
            "wiki:crafting_scrap"
        ]
    }
}
```

#### パターン

必須の `"pattern"` 配列プロパティは、そのレシピで使う形を定義します。

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>

```json
"pattern": [
    "SSS",
    "I I",
    "I I"
]
```

配列内の各要素は、クラフトグリッドの 1 行を表す文字列です。各文字はその行内の 1 スロットを表します。スペースは既定で空にするスロットを意味します。

文字は、アイテムを視覚的に表すための略記として機能します。各文字は [key](#keys) に対応し、そのスロットに置くべきアイテムを指定します。

::: tip
パターンがスペースだけで構成されている場合、そのサイズに合う空のクラフトインターフェースは常にそのレシピに一致します。プレイヤーはクラフト出力を無限に取り出せ、Shift で回収すると即座にインベントリ上限まで埋まります。
:::

##### 行の正規化

パターングリッドは最大で 3 × 3 ですが、それより小さくてもかまいません。文字列の長さが揃っていない場合、Minecraft は短い文字列を自動的に延長し、空きスロットにはスペースがあるものとして扱います。次の 2 つは等価です。

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>

```json
"pattern": [
    "MA",
    "IFI",
    "M"
]
```

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>

```json
"pattern": [
    "MA ",
    "IFI",
    "M  "
]
```

::: tip NOTE
現在、カスタムブロックで設定できるものを含め、どのクラフトグリッドも 3 × 3 を超えられません。示されたパターンが現在のクラフトインターフェースで使えない場合、そのレシピはレシピブックで自動的に利用不可になります。
:::

##### グリッドの自由度

スペースは、3 × 3 の余白を自動で埋めるものとしては扱われません。提示されたパターンが使用中のクラフトグリッドより小さい場合、構造と内容が保たれている限り、そのパターンはどこにでも配置できます。例として、クラフトテーブル上で次のパターンを考えます。

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>

```json
"pattern": [
    "O"
    "OO"
]
```

この "L" 字形は、クラフトグリッドの左上隅に限定されません。3 × 3 グリッドを例にすると、このパターンは次のいずれの配置でも使えます。

<Spoiler title="Possible Configurations">

_アンダースコアは空きスロットを表します。_

```
O__
OO_
___
```

```
_O_
_OO
___
```

```
___
O__
OO_
```

```
___
_O_
_OO
```

</Spoiler>

配置を特定の場所に限定したい場合は、明示的なスペースを使い、特定の位置を空きスロットとして強制します。次のパターンは、グリッドの左上隅でのみ使えます。

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>

```json
"pattern": [
    "O  "
    "OO "
    "   "
]
```

##### 対称性

すべての形状付きレシピは、もともと左右対称です。

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>

```json
"pattern": [
    "Z  "
    " Z "
    "  Z"
]
```

前のレシピは、プレイヤーにとって次のように設定されているのと同じものとしても使えます。

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>

```json
"pattern": [
    "  Z"
    " Z "
    "Z  "
]
```

#### キー

キーは、[pattern](#patterns) 内の文字に意味を与えます。必須の `"key"` オブジェクトプロパティで行い、キー名を [item descriptors](#item-descriptors) に対応付けます。

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>

```json
"key": {
    "S": "wiki:cloth",
    "I": "wiki:support"
}
```

pattern に含まれる各キーはここで定義しておく必要があります。キー名は大文字小文字を区別します。あるアイテムが複数の data 値を持ち、data 値が指定されていない場合、その識別子の任意のアイテムがそのキーに使えます。item descriptor に `"count"` プロパティがあっても無視され、`1` として扱われます。クラフトグリッドのスロット内の積み重なったアイテムは、1 個ずつしか消費されません。

::: tip NOTE
Any unicode character from `U+0020` to `U+07FF` may be used as a key name. If a key name has more than one character, only the first character is considered. Since spaces are by default used to signify empty slots on a grid and there's no way to re-designate a key for a blank slot, it's not recommended to use them as a key.
:::

::: warning
If a character in the pattern is not present in the key map, it will be treated as though it were a space, a designated empty tile.
:::

#### 形状付きレシピの結果

形状付きクラフトレシピの出力は、[形状なしレシピの対応物](#shapeless-results) と非常によく似ています。ただし、形状なしレシピの配列結果と違い、形状付きレシピの結果配列には複数の [item descriptor](#item-descriptors) を含められます。

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>

```json
"result": [
    {
        "item": "wiki:covered_arch",
        "count": 3
    },
    "wiki:crafting_scrap"
]
```

配列の最初の要素は、クラフトブロックに表示される出力として使われます。表示された結果を出力スロットから取り出すと、他の値は自動的にプレイヤーのインベントリに入ります。1 回のクラフト操作で返せるアイテム数に上限はないようです。

::: tip NOTE
プレイヤーのインベントリに収まりきらないアイテムは、クラフトテーブルの入力スロットの左から右、次に上から下の順で配置されます。そこにも収まらないものは、プレイヤーが "Drop Item" アクションを使ったかのように投げ出されます。
:::

### レシピブック

レシピブックは、利用可能なレシピを自動で索引化してプレイヤーに表示し、形状なしレシピの [材料数](#ingredients) や形状付きレシピの [パターン制約](#patterns) を賢く考慮します。複数のレシピが同じ出力を指す場合、レシピブックは独自の優先順位付けを使います。

比較対象の両方が形状なしレシピの場合、優先順位は次の順で決まります。

-   最初に列挙された材料の数が少ないもの
-   より負の [優先度](#priority)
-   識別子文字列の値が小さいもの

形状付きレシピでは、文字列比較で "より小さい" 識別子のレシピが常に優先されます。

形状付きレシピと形状なしレシピを比較する場合は、形状なしレシピを比較するときのルールが使われます。ただし、形状付きレシピについて解釈される材料数は、実際の材料数とは異なります。形状付きレシピの材料数がどのように決まるのかは正確には分かっていません。

### グルーピング

この節は参考情報です。グループは、バニラ定義のクラフトレシピに、任意の `"group"` 文字列プロパティとして存在します。

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>

```json
"group": "slingshots"
```

このプロパティが何をするのか、あるいは何もしないのかは、現在のところ不明です。おそらく [レシピブック](#recipe-book) と一緒に使うものだと思われますが、新しいカスタムグループを使っても、バニラ定義のグループを再利用しても、特に変化はないようです。

### 優先度

クラフトレシピは、入力の競合を処理するための追加プロパティ `"priority"` に対応しており、主に、複数のレシピがその状況に適用されうるときの [タイブレーク](#prioritization) として機能します。優先度は、クラフトレシピ型オブジェクト内で直接指定します。

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>

```json
"priority": 2
```

優先度の値が低いクラフトレシピが優先されます。つまり、他の条件がすべて同じなら、優先度 `0` のレシピが優先度 `1` のレシピより使われます。必要なら優先度は負の値にできます。`"priority"` が指定されていない場合、優先度 `0` があるものとして扱われます。

## 加熱

かまどレシピは、熱源を使って一定時間かけてアイテムを変換するために使います。やや名乗りが不正確ですが、かまどレシピは焚き火を含む、熱源を使うあらゆるインターフェースで使われます。

![](furnace_recipe.png)

<CodeHeader>BP/recipes/magic/magic_ash.json</CodeHeader>

```json
{
    "format_version": "1.17.41",
    "minecraft:recipe_furnace": {
        "description": {
            "identifier": "wiki:magic_ash"
        },
        "tags": ["soul_campfire"],
        "input": "wiki:bone_fragments",
        "output": {
            "item": "wiki:magic_ash",
            "count": 4
        }
    }
}
```

すべてのバニラの加熱ブロックは、タグ経由でサポートされています。

<CodeHeader>#/minecraft:recipe_furnace/</CodeHeader>

```json
"tags": ["furnace", "blast_furnace", "smoker", "campfire", "soul_campfire"]
```

### 加熱トランザクション

かまどレシピは、ちょうど 1 つの入力 [item descriptor](#item-descriptors) を、ちょうど 1 つの出力 item descriptor に結び付けます。

<CodeHeader>#/minecraft:recipe_furnace/</CodeHeader>

```json
"input": "wiki:bone_fragments",
"output": {
    "item": "wiki:magic_ash",
    "count": 4
}
```

入力に指定された count は無視されます。調理・精錬レシピの XP 返却量や燃料源は変更できません。アイテムを加熱するのに必要な時間は、使用するブロックで決まり、変更できません。

## 醸造

醸造レシピは、別のアイテムを触媒として使い、アイテムを変換するために使います。醸造レシピには 2 種類あり、入力から出力へ data を引き継がない [醸造ミックス](#brewing-mixes) と、引き継ぐ [醸造コンテナー](#brewing-containers) があります。

醸造レシピに対応しているインターフェースは 1 つだけです。

<CodeHeader>#/minecraft:recipe_brewing_container/</CodeHeader>

```json
"tags": ["brewing_stand"]
```

### 醸造トランザクション

醸造トランザクションは [加熱トランザクション](#heating-transactions) に似ており、入力と出力をそれぞれ 1 つの [item descriptor](#item-descriptors) で指定します。ただし醸造レシピでは、触媒として `"reagent"` プロパティも必要で、これも 1 つの item descriptor しか指定できません。

<CodeHeader>#/minecraft:recipe_brewing_mix/</CodeHeader>

```json
"input": "wiki:flask",
"reagent": "wiki:jade",
"output": "wiki:insanity_resistance"
```

これらの醸造プロパティでは、指定した count 値は無視されます。アイテムは 1 回の醸造で 1 つずつ変化することを意図しています。

::: warning
醸造レシピの入力アイテムがスタック可能な場合、変換時にスタック _全体_ が消費されます。これを回避する方法は現在ありません。
:::

醸造時間が経過すると、触媒は消費され、出力アイテムが入力アイテムを直接置き換えます。

::: warning
現在、生成される出力のスタック可否には不具合があり、data 値を指定したかどうかに関係なく発生します。特に、出力は同じ識別子と data 値を持つアイテムと互換性がなく、スタックしません。
:::

### 醸造ミックス

醸造ミックスは、理論上は入力の data 値を出力の data 値から分離するように設計された、シンプルな醸造レシピです。

![](brewing_mix_recipe.png)

<CodeHeader>BP/recipes/brewing/negative/paralysis.json</CodeHeader>

```json
{
    "format_version": "1.17.41",
    "minecraft:recipe_brewing_mix": {
        "description": {
            "identifier": "wiki:paralysis_brew"
        },
        "tags": ["brewing_stand"],
        "input": "wiki:amberglass_flask",
        "reagent": "wiki:viporfly_poison",
        "output": "wiki:paralysis_brew"
    }
}
```

::: warning
残念ながら、醸造ミックスレシピでは、割り当てた data 値に不具合があります。

一般に、入力に data 値が指定されていると、醸造レシピは動作しません。例外は、入力が次のいずれかの場合だけです。

-   `minecraft:potion`
-   `minecraft:splash_potion`
-   `minecraft:lingering_potion`
-   [Potion identifier additions](#identifier-additions)

`"data"` プロパティ形式で reagent に data 値を指定すると、そのレシピの reagent として該当識別子のアイテムが置かれたとき、data 値に関係なく醸造は発生します。ただし、正しい data 値が一致した場合にのみ成功します。一致しない場合、醸造は成功したように見えますが、入力は出力に変換されません。失敗しても、reagent と blaze powder 燃料の一定割合は消費されます。
:::

### 醸造コンテナー

醸造コンテナーは、入力の data 値を変換後の出力に引き継ぐように設計されています。

![](brewing_container_recipe.png)

<CodeHeader>BP/recipes/illumination_potion.json</CodeHeader>

```json
{
    "format_version": "1.17.41",
    "minecraft:recipe_brewing_container": {
        "description": {
            "identifier": "wiki:illumination_potion"
        },
        "tags": ["brewing_stand"],
        "input": "minecraft:potion",
        "reagent": "wiki:radiant_berries",
        "output": "wiki:illumination_potion"
    }
}
```

醸造コンテナーは、入力について [brewing mixes](#brewing-mixes) より厳格です。醸造コンテナーレシピで許可されるアイテム種別は、次のものだけです。

-   `minecraft:potion`
-   `minecraft:splash_potion`
-   `minecraft:lingering_potion`
-   [Potion identifier additions](#identifier-additions)

醸造コンテナーレシピでは data 値が入力から出力へ引き継がれるため、`"input"` と `"output"` に指定した data 値は無視されます。

## 上書き

アドオンの他の領域と同様に、behavior pack の並び順は、ゲームプレイ中に Minecraft がどのファイルを使うかに影響します。リストの上にある behavior pack のエントリーは、下にあるものやベースのバニラパックより優先されます。

下位にあるパックのレシピを上書きするには、レシピ型と識別子の両方を一致させる必要があります。上書き用ファイルの名前や配置は自由で、内容だけが重要です。レシピでは部分的な上書きは認められず、レシピ全体を再定義する必要があります。

::: warning
上書きが機能するのは、レシピ型が _完全に_ 一致するときだけです。ほとんどの場合、不一致だと既存のものとは別に新しいレシピが作られます。

2 つのクラフトレシピ型の間で変換する上書きを作ろうとすると、エラーになります。これを回避するには、まずバニラ定義をパックにコピーします。次に、そのファイルの `"tags"` を `[""]` に設定します。これでレシピは実質的に無効になります。最後に、別のクラフトレシピ型として新しいファイルを用意し、エラーを避けるために別の識別子を選びます。
:::

## 優先順位付け

[上書き](#overrides) を考慮したうえで、入力に基づいて複数のレシピが適用される場合、出力は次のタイブレークを順に使って選ばれます。

-   Recipes declared in higher-ordered packs in the world behavior packs list
-   If for crafting recipes, _lower_-valued [priority properties](#priority)
-   If for crafting recipes, [shaped recipes](#shaped-recipes) over [shapeless ones](#shapeless-recipes)
-   "Lesser" identifiers, as interpreted by string comparison

