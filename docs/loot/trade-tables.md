---
title: Trade Tables
category: Documentation
nav_order: 2
mentions:
    - Ciosciaa
    - SirLich
    - TheItsNameless
    - QuazChick
description: トレードテーブルは、entity のアイテム取引の基礎データを表します。
---

トレードテーブルは、entity のアイテム取引の基礎データを表します。トレードテーブルは単独では機能せず、[entity component](https://bedrock.dev/docs/stable/Entities#minecraft%3Aeconomy_trade_table) から参照する必要があります。トレードテーブルで使えるランダム化プロパティにより、同じトレードテーブルを参照していても、entity ごとに取引内容、アイテム数、コスト計算が変化することがあります。

![](trading.png)

トレードテーブルには識別子もバージョン管理もありません。ルートテーブルと同様に、トレードテーブルは Molang をサポートせず、range object や [functions](#functions) のような JSON 構造に依存します。別物ではありますが、トレードテーブルでもコメントは使えます。

## 統合

トレードテーブルは、ブロックやバイオームのような主要なアドオン要素ではありません。特定のフォルダに置くことで登録されるのではなく、entity から参照されます。トレードテーブルは behavior pack 内のどこに置いてもかまいません。

::: tip
カスタムのトレードテーブルを追加する際は、パック間の衝突を避けるため、`trading` フォルダの最上位に namespace フォルダ（ここでは `wiki` と呼んでいます）を入れることを推奨します。
:::

<FolderView :paths="[
    'BP/trading/wiki/minister.json',
    'BP/trading/economy_trades/cleric_trades.json'
]" />

以下の例は、この文書全体で参照・解説されます。

<Spoiler title="Trade Table File Example">

<CodeHeader>BP/trading/wiki/minister.json</CodeHeader>

```json
{
    "tiers": [
        {
            "groups": [
                {
                    "num_to_select": 1,

                    "trades": [
                        {
                            "wants": [
                                {
                                    "item": "wiki:blessing_glyph",
                                    "quantity": {
                                        "min": 2,
                                        "max": 4
                                    },

                                    "price_multiplier": 0.5
                                },
                                {
                                    "item": "minecraft:book"
                                }
                            ],
                            "gives": [
                                {
                                    "item": "minecraft:enchanted_book",
                                    "functions": [
                                        {
                                            "function": "enchant_book_for_trading",

                                            "base_cost": 4,
                                            "base_random_cost": 12,
                                            "per_level_cost": 4,
                                            "per_level_random_cost": 8
                                        }
                                    ]
                                }
                            ],
                            "max_uses": 7,

                            "trader_exp": 3
                        },
                        {
                            "wants": [
                                {
                                    "item": "wiki:crystalline_spiritite",
                                    "quantity": 32,

                                    "price_multiplier": 0.125
                                }
                            ],
                            "gives": [
                                {
                                    "item": "wiki:exalted_blade",
                                    "functions": [
                                        {
                                            "function": "enchant_with_levels",

                                            "treasure": true,
                                            "levels": {
                                                "min": 15,
                                                "max": 25
                                            }
                                        }
                                    ]
                                }
                            ],
                            "max_uses": 2,

                            "reward_exp": false,
                            "trader_exp": 8
                        }
                    ]
                }
            ]
        },
        {
            "total_exp_required": 28,

            "trades": [
                {
                    "wants": [
                        {
                            "choice": [
                                {
                                    "item": "wiki:sacred_stones",
                                    "quantity": {
                                        "min": 4,
                                        "max": 6
                                    },

                                    "price_multiplier": 0.5
                                },
                                {
                                    "item": "wiki:blessed_beads",
                                    "quantity": {
                                        "min": 16,
                                        "max": 24
                                    },

                                    "price_multiplier": 0.5
                                }
                            ]
                        }
                    ],
                    "gives": [
                        {
                            "item": "wiki:aeleon_jewels",
                            "quantity": {
                                "min": 4,
                                "max": 6
                            }
                        }
                    ],
                    "max_uses": 2
                }
            ]
        }
    ]
}
```

</Spoiler>

## 構造

トレードテーブルは、バージョンなし・名前空間なしのオブジェクトとして表されます。

<CodeHeader>#</CodeHeader>

```json
{
	"tiers": [
		{
			"groups": […]
		},
		{
			"total_exp_required": 28,

			"trades": […]
		}
	]
}
```

トレードテーブルは [tiers](#tiers) を使って取引の構成を整理します。tier は必須の最上位 `"tiers"` 配列プロパティで定義します。tier は取引画面に順番どおりに表示されます。

### 階層

tier はアンロック可能な取引のまとまりとして機能し、トレードテーブル内で最上位のグループ単位になります。

<CodeHeader>#/tiers/0</CodeHeader>

```json
{
	"groups": […]
}
```

<CodeHeader>#/tiers/1</CodeHeader>

```json
{
	"total_exp_required": 28,

	"trades": […]
}
```

各 tier は、[trades](#trades) の集合（`"trades"`）または [trade groups](#groups)（`"groups"`）のどちらかを表す必要があります。これらのうち少なくとも 1 つが必要です。trades を指定した場合、その tier にはそれらすべての取引が表示されます。代わりに groups を指定した場合、その tier では列挙されたすべての group から取引が使われます。各 group がどの取引を選ぶかは、その設定に依存します。

::: tip NOTE
tier に `"trades"` と `"groups"` の両方がある場合、`trades` の記述は無視され、groups が優先されます。
:::

tier 内では、取引は取引画面に順番どおりに表示されます。取引が group 化されている場合、その group も定義順に表示され、group ごと、さらにその中の trade ごとに整理されます。ある group の取引は他の group の取引と見た目上区別されません。視覚的に分かれて識別できるのは tier のみです。

#### 経験条件

tier は、_trader_ が経験値のしきい値を満たしたときにアンロックされます。各 trader には固有の累積経験値があり、プレイヤーとの取引で増えていきます。取引ごとに得られる経験値量は、その取引の [experience reward](#trader-experience) に依存します。オプションの `"total_exp_required"` プロパティは、その tier を解放するために trader に必要な経験値を示します。

<CodeHeader>#/tiers/1/</CodeHeader>

```json
"total_exp_required": 28
```

既定では、必要経験値は trade tier のインデックスに設定されます。つまり、2 番目の tier には trader に 1 XP が必要で、3 番目の tier には 2 XP が必要です。最初の tier は常に自動でアンロックされ、[設定された経験値しきい値に関係なく](#initial-tier-experience) 有効になります。

#### Tier のアンロック

tier は順番にアンロックされます。新しい tier がアンロックされると、続く tier も現在の XP で条件を満たしているか追加で確認されます。満たしていればアンロックされ、その次の tier も同様に確認されます。tier のアンロックは、付与された trader 経験値で複数の tier を解放できる場合や、[指定した初期経験値](#initial-tier-experience) がゲーム側で正しく更新された結果として後続 tier が解放される場合に行われます。

::: tip NOTE
tier は 1 つずつ確認されるため、ある tier の XP 条件を満たさずにアンロックが止まると、その後ろの tier は、それらの条件を満たしていても確認されません。
:::

##### 初期 Tier の経験値

最初の tier の経験値しきい値が 0 以外の場合は特別な扱いになります。負の値なら、_すべて_ の tier がアンロックされます。0 より大きい場合は、trader の初期経験値がその値に設定されます。

::: warning
初期 tier の経験値しきい値が 0 以外の場合、trader の取引内容を実際のトレードテーブルに反映するには手動更新が必要です。この場合、取引を 1 回行うか、取引画面を閉じて再度開くと正しく更新されます。最初は、他の tier がアンロックされるはずでも、最初の tier だけが利用可能になります。
:::

##### Tier の固定

[初期 tier](#initial-tier-experience) を除けば、取引を tier で固定できます。

<CodeHeader>Example Tier Freeze</CodeHeader>

```json
"total_exp_required": -1
```

前の tier がアンロックされると、負の XP 要件を持つ tier は [期待どおり](#tier-unlocking) すぐにアンロックされます。ただし、プレイヤーがその先の tier に進むことはできません。

### 取引グループ

取引グループは、個々の trader がその階層でどの取引を使うかをランダムに選ぶ方法です。

<CodeHeader>#/tiers/0/groups/0</CodeHeader>

```json
{
	"num_to_select": 1,

	"trades": […]
}
```

選択対象の取引は、必須の `"trades"` 配列で指定します。各エントリーは [trade](#trades) です。オプションの `"num_to_select"` プロパティで示した数だけの取引が、各 trader のその tier で選ばれます。`"num_to_select"` が `0` の場合は、すべての取引が選ばれます。これが既定値です。

::: tip NOTE
trade group を入れ子にして、より高度な確率選択を行うことはできません。
:::

::: tip
現在は、ランダム選択数を指定することはできません。取引ごとの重み付けにも対応していませんが、配列内で取引を重複させることで、選ばれる可能性を実質的に高められます。
:::

### 取引

取引は、trader とプレイヤーの間の交換を表します。

<CodeHeader>#/tiers/0/trades/1</CodeHeader>

```json
{
	"wants": […],
	"gives": […],
	"max_uses": 2,

	"reward_exp": false,
	"trader_exp": 8
}
```

取引スロットに一度選ばれた trade は、根本的には変化しません。特定の状況で変更できるのは [quantity](#quantity) だけです。

::: tip
個別の trade 定義は、取引そのもの以外にも影響します。たとえば、プレイヤーがアイテムを持っていることに応じて、entity が [特定のアイテムを持つ](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.trade_interest) ことがあります。
:::

#### 必要アイテムと提供アイテム

基本の取引単位は `"wants"` と `"gives"` で定義します。プレイヤーは `"wants"` を渡して `"gives"` を受け取ります。どちらのプロパティも配列で、必須です。

<CodeHeader>#/tiers/0/trades/1/</CodeHeader>

```json
"wants": […],
"gives": […]
```

1 つの trade には 1 つから 2 つまでの必要アイテムを含められ、提供アイテムはちょうど 1 つでなければなりません。どちらの配列の各エントリーも、[item](#items) または [choice](#choices) のどちらかにできます。

取引画面は、必要アイテムの数に応じて表示を変えます。場合によっては、[quantity-modifying enchantment functions](#quantity-modifying-enchantment-functions) のような一部の取引修飾は、最初の必要アイテムにしか影響しません。

::: tip NOTE
item と choice の両方を含むオブジェクトをエントリーとして与えた場合、choice の部分だけが考慮され、item の部分は無視されます。
:::

#### 取引回数制限

trader は通常、個別の trade を一定回数だけ行うと、補充が必要になります。この回数は数値 `"max_uses"` プロパティで設定します。

<CodeHeader>#/tiers/0/trades/1/</CodeHeader>

```json
"max_uses": 2
```

取引回数制限は trade ごとに個別です。1 つの trade で在庫が減っても、必要アイテムと提供アイテムが同じ別の trade には影響しません。既定では、trader は各 trade を 7 回行うと補充が必要になります。

::: tip NOTE
補充の処理は entity component（`"minecraft:trade_resupply": {}`）で行われます。
:::

値に `0` を指定すると、その trade は取引画面に表示されますが、使用はできません。負の値を指定すると、その trade は補充不要になり、無限に使えます。

#### プレイヤー経験値

_player_ 向けの経験値オーブは、オプションの Boolean `"reward_exp"` プロパティで無効化できます。

<CodeHeader>#/tiers/0/trades/1/</CodeHeader>

```json
"reward_exp": false
```

既定では `"reward_exp"` は true で、プレイヤーは取引で一定の経験値を受け取ります。受け取る経験値量は、トレードテーブル内では変更できません。

#### 取引者経験値

プレイヤーが取引を確定すると、trader が経験値を得ることがあります。このプロパティは、[tiers](#tiers) を使った取引進行システムを作るうえで重要です。

<CodeHeader>#/tiers/0/trades/1/</CodeHeader>

```json
"trader_exp": 8
```

_trader_ に与える経験値量は、オプションの数値プロパティ `"trader_exp"` で指定します。既定では trader は 1 XP を受け取ります。

::: tip
線形でない階層配置では、上位階層ほど trader 経験値を増やすのが一般的です。そうすると、下位階層の取引は上位階層の取引よりレベル上昇への影響が小さくなります。
:::

### 選択肢

選択肢は、取引に使うアイテムをランダムに選ぶためのシンプルなオブジェクトです。trader の各インスタンスごとに、その trade 用のアイテムが一様ランダムで 1 つ選ばれます。

<CodeHeader>#/tiers/1/trades/0/wants/0</CodeHeader>

```json
{
	"choice": [
		{
			"item": "wiki:sacred_stones",
			…
		},
		{
			"item": "wiki:blessed_beads",
			…
		}
	]
}
```

選択肢には、必須の `"choice"` 配列プロパティだけが含まれます。配列内の各エントリーは [item](#items) です。少なくとも 1 つのアイテムが必要です。

::: tip NOTE
選択肢を入れ子にすることはできません。
:::

::: tip
現在、特定のアイテムの重みを指定する方法はありませんが、配列内でアイテムを重複させることで、選ばれる確率を実質的に高められます。
:::

### アイテム

アイテムは trade の対象です。必要アイテムと提供アイテムで定義は共通ですが、使う場所によっていくつかの意味合いが変わります。

<CodeHeader>#/tiers/1/trades/0/wants/0/choice/0</CodeHeader>

```json
{
    "item": "wiki:sacred_stones",
    "quantity": {
        "min": 4,
        "max": 6
    },

    "price_multiplier": 0.5
}
```

<CodeHeader>#/tiers/0/groups/0/trades/1/gives/0</CodeHeader>

```json
{
    "item": "wiki:exalted_blade",
    "functions": [
        {
            "function": "enchant_with_levels",

            "treasure": true,
            "levels": {
                "min": 15,
                "max": 25
            }
        }
    ]
}
```

#### アイテム参照

trade 内では、必須の `"item"` 文字列プロパティを使ってアイテムを参照します。

<CodeHeader>#/tiers/1/trades/0/wants/0/choice/0/</CodeHeader>

```json
"item": "wiki:exalted_blade"
```

item reference は、アイテムの識別子を指している必要があります。data 値は接尾辞としてその場で指定できます。

<CodeHeader>Example Data Assignment</CodeHeader>

```json
"item": "minecraft:log:2"
```

::: tip
data 値は `set_data` 関数でも設定できますし、こちらのほうがランダム化もしやすいです。
:::

_必要アイテム_ に data 値が指定されていない場合、その識別子を持つ任意のアイテムを取引できます。_提供アイテム_ に data 値が指定されていない場合は、data 値 `0` が既定です。

#### 数量

オプションの `"quantity"` プロパティは、trade で必要または提供されるアイテム数を指定します。

<CodeHeader>#/tiers/1/trades/0/wants/0/choice/0/</CodeHeader>

```json
"quantity": {
	"min": 4,
	"max": 6
}
```

quantity は、上の例のように整数リテラルまたは range object で指定できます。range object の場合は、指定範囲内から両端を含めて一様ランダムに値が選ばれます。quantity を指定しない場合、アイテム数の既定値は 1 です。

::: tip NOTE
quantity は常にスタックサイズの範囲内に収まり、trade の 1 スロットにしか影響しません。たとえば、1 スロットで 100 枚の木材を要求することはできません（ただし `"wants"` を 2 つ使えば可能です）。また、積み重ねられない剣を 1 回の trade で 2 本渡すこともできません。
:::

#### 価格倍率

価格倍率は、特定のイベントによってアイテムの [基本数量](#quantity) がどう変わるかを決めます。

<CodeHeader>#/tiers/1/trades/0/wants/0/choice/0/</CodeHeader>

```json
"price_multiplier": 0.5
```

`"price_multiplier"` は任意で、既定値は `0` です。価格倍率を使う仕組みには、現行のものと旧式の 2 種類があります。現行システムでは、指定された価格倍率は trade の _最初の必要アイテム_ にしか影響しません。旧式システムでは、任意の _必要アイテム_ に影響します。

##### 変動要因

trade 価格は、いくつかの要因で変動します。

-   需要の増加。複数回の [resupply](#trade-limit) をまたいで同じアイテムを取引したときに発生します。
-   直近で治療されたこと。たとえば zombie villager から villager を治療した場合などです。
-   直近で治療された trader の _近く_ にいること
-   "Hero of the Village" の影響を受けているプレイヤーとの取引

価格倍率は、固定値を使う新しい価格計算式でプレイヤーが "Hero of the Village" を持っている場合を除き、これらすべての状況に影響します。

##### コスト計算

価格倍率は、取引の需要が増えたときのコスト増加に直接かつ専ら影響します。既定では需要は 0 であり、その値を下回ることはありません。取引の需要は累積し、その取引が [使い切られた](#trade-limit) 後の補充で増え、補充の間に取引が行われなかった場合は減少します。

需要だけによるコスト増加は線形で、需要が 1 増えるごとに、価格倍率で与えられる基本コストの一部が加算されます。次の変数を仮定すると…

| 変数 | 意味                                                                                 |
| ---- | ------------------------------------------------------------------------------------ |
| _c_  | 総コスト                                                                             |
| _p_  | 基本コスト。[quantity overrides](#quantity-modifying-enchantment-functions) を含む |
| _m_  | 価格倍率                                                                             |
| _d_  | 現在の需要                                                                           |

…他の要因がない場合、次の式で総コストを計算できます。

_c_ = _p_ × (1 + _m_ \* _d_)

::: tip NOTE
他の状況では、コスト計算に entity のプロパティも使われますが、ここでは扱いません。
:::

価格倍率が `0` の場合、ほとんどの状況で quantity は一定のままです（ただし、新しい価格計算式を使う "Hero of the Village" 修正は例外です）。

::: tip NOTE
負の価格倍率も指定できますが、[demand](#trade-limit) による増加コストには影響せず、実質的に `0` に丸められます。ただし、trader が最近治療された場合、最近治療された別の trader の近くにいる場合、または "Hero of the Village" 付きのプレイヤーとの取引で _旧価格計算式_ を使う場合には、負の値でも価格に影響します。
:::

#### 関数

関数は、アイテムの性質を変更するために使います。オプションの `"functions"` 配列には、そのアイテムに適用する関数の集まりを入れます。

<CodeHeader>#/tiers/0/groups/0/trades/1/gives/0/</CodeHeader>

```json
"functions": [
	{
		"function": "enchant_with_levels",

		"treasure": true,
		"levels": {
			"min": 15,
			"max": 25
		}
	}
]
```

トレードテーブルで使う関数はルートテーブルと共通です。必要アイテムの宣言で使うと（[使用可能な範囲](#unusable-wanted-item-functions) で）、必要アイテムの性質を制限する役割になります。この種の関数制限は最初の必要アイテムにしか影響しません。

##### 一般的に使えない関数

一般に、関数は取引でも問題なく動作します。ただし次のものはトレードテーブルのどこでも動作しません。

-   `set_count`
-   `furnace_smelt`
-   `looting_enchant`
-   `trader_material_type`

::: tip NOTE
`set_count` の機能は [quantity property](#quantity) で置き換えられています。

`trader_material_type` はバニラの 1 つのトレードテーブルにしか登場しません。理論上は entity の mark variant に基づいて item の data 値を設定するはずですが、カスタム用途では使えないようです。
:::

##### 必要アイテムでは使えない関数

一般に、必要アイテムの属性を関数で指定すると、提示されるアイテムはその属性に一致している必要があります。ただし、次の関数は厳密な一致を強制しないため、必要アイテムでは無意味です。

-   `set_name`
-   `set_lore`
-   `set_damage`
-   `set_book_contents`
-   `random_dye`
-   `fill_container`

##### 数量を変えるエンチャント関数

実際には 2 つの関数が、_提供アイテム_ として使われる場合に最初の _必要アイテム_ の quantity を設定し、最初の必要アイテムに指定された [quantity](#quantity) を上書きすることがあります。

-   `enchant_with_levels`
-   `enchant_book_for_trading`

::: tip NOTE
quantity を上書きしても、すべての [modified trade prices](#fluctuation-factors) は正しく適応します。これらの関数は、旧コスト計算式を使っていても、2 つ目の必要アイテムの quantity には影響しません。これらの関数を _必要アイテム_ に使った場合、quantity は上書きされません。
:::

###### レベル付きエンチャント関数

`enchant_with_levels` は、エンチャントテーブルで付与したかのように、アイテムにランダムでエンチャントを付けます。

<CodeHeader>#/tiers/0/groups/0/trades/1/gives/0/functions/0</CodeHeader>

```json
{
    "function": "enchant_with_levels",

    "treasure": true,
    "levels": {
        "min": 5,
        "max": 25
    }
}
```

最初の必要アイテムのコストは、この関数で選ばれたレベル値（負になる場合は `0` に切り上げ）を元の [quantity](#quantity) に加算して決まります。レベル値はオプションの `"levels"` プロパティから算出されます。数値リテラルを使った場合は、その値が選ばれたレベル値になります。上のように range object を使う場合は、指定した最小値と最大値の間から両端を含めて乱数を振ります。その乱数が選ばれたレベル値になります。上の例では、最初の必要アイテムのコストは 5 増えて 25 になります。

###### 取引用本エンチャント関数

`enchant_book_for_trading` は、取引用にのみ使うことを意図したものです。各プロパティの組み合わせで、最初の必要アイテムのコストが決まります。

<CodeHeader>#/tiers/0/groups/0/trades/0/gives/0/functions/0</CodeHeader>

```json
{
    "function": "enchant_book_for_trading",

    "base_cost": 4,
    "base_random_cost": 12,
    "per_level_cost": 4,
    "per_level_random_cost": 8
}
```

この関数は本に使うことだけを想定しており、宝エンチャントを含むすべての呪い以外のエンチャントから、1 つのエンチャントを振ります。この関数は現在のアイテムに合わせて調整されません。本に使えばエンチャントは必ず成功しますが、他のエンチャント可能なものに使うと、成功しない場合があります。

::: tip NOTE
おそらく失敗時には、そのアイテムに適用できないエンチャントが選ばれ、その無関係なエンチャントの適用に失敗するため、結果として無エンチャントのアイテムになります。したがって、本以外へのエンチャント成功率は、そのアイテムに適用可能なエンチャント数に比例します。
:::

総コストは、振られたエンチャントとは独立した基本コストと、ランダムロールに依存するレベルごとのコストから決まります。コスト設定プロパティはすべて任意です。

基本コストは、開始値とランダムロールを足し合わせて計算されます。開始値は `"base_cost"` で指定し、既定値は `2` です。ランダムロールは `"base_random_cost"` で指定し、既定値は `4` です。trader 用の trade が生成されるとき、0 から `"base_random_cost"` までの間から両端を含めて一様ランダムに値が選ばれます。

選ばれたエンチャントの各レベルについても、基本コスト計算と同じ処理が行われます。固定値に、一様ランダムに選ばれた値を加えます。この場合、基本のレベルごとのコストは `"per_level_cost"` で指定し、既定値は `3` です。ランダムなレベルごとのコストは `"per_level_random_cost"` で指定し、既定値は `10` です。レベルごとのランダムロールは、各レベルで異なっていてもかまいません。

基本コストと各レベルのコストが計算されたら、それらを合計して総コストを求めます。最後に、選ばれたエンチャントが宝エンチャントなら、コストは 2 倍になります。通常どおり、このコストは 1 未満にも、そのアイテムのスタックサイズを超えることもできません。この式は、trader が使っている価格システムに関係なく成り立ちます。

::: warning
どちらかのランダムコストプロパティが負の値だと、コストが、指定した [quantity](#quantity) か最初の必要アイテムの最大スタックサイズのどちらかになる 50-50 の可能性があるようです。
:::

::: tip
総コストが負になる場合（負のランダムコストプロパティを使っていない前提では）、影響を受ける必要アイテムに指定された [quantity](#quantity) が代わりに使われます。これを保証する最も簡単な方法は次のとおりです。

<CodeHeader>数量ベースのエンチャント本コストの例</CodeHeader>

```json
{
    "function": "enchant_book_for_trading",

    "base_cost": -1,
    "base_random_cost": 0,
    "per_level_cost": 0,
    "per_level_random_cost": 0
}
```

:::

##### スポーンエッグの trader バインド

`"set_actor_id"` 関数は、`"id"` で与えられた entity 識別子に基づいて、スポーンエッグの data 値を設定するために使います。

<CodeHeader>スポーンエッグの trader バインド例</CodeHeader>

```json
{
    "function": "set_actor_id"
}
```

トレードテーブルでは、ID が指定されない場合、その取引者のエンティティ種別がエッグに割り当てられます。

## 上書き

トレードテーブルは data 内識別子を使わないため、以前のトレードテーブルを新しいものに置き換えるだけで上書きできます。詳しくは [アセットの上書きはこちら](/concepts/overwriting-assets) を参照してください。

以下は、各取引者で現在使われているバニラのトレードテーブルです。

| 取引者 | パス                                                     |
| ------ | -------------------------------------------------------- |
| 石工   | `BP/trading/economy_trades/stone_mason_trades.json`      |
| 農民   | `BP/trading/economy_trades/farmer_trades.json`           |
| 釣り人 | `BP/trading/economy_trades/fisherman_trades.json`        |
| 肉屋   | `BP/trading/economy_trades/butcher_trades.json`          |
| 羊飼い | `BP/trading/economy_trades/shepherd_trades.json`         |
| 革細工師 | `BP/trading/economy_trades/leather_worker_trades.json` |
| 蔵書管理者 | `BP/trading/economy_trades/librarian_trades.json`     |
| 地図師 | `BP/trading/economy_trades/cartographer_trades.json`     |
| 聖職者 | `BP/trading/economy_trades/cleric_trades.json`           |
| 道具鍛冶 | `BP/trading/economy_trades/tool_smith_trades.json`     |
| 武器鍛冶 | `BP/trading/economy_trades/weapon_smith_trades.json`    |
| 矢師   | `BP/trading/economy_trades/fletcher_trades.json`         |
| 防具鍛冶 | `BP/trading/economy_trades/armorer_trades.json`        |
| 行商人 | `BP/trading/economy_trades/wandering_trader_trades.json` |

::: tip NOTE
`trading` フォルダ直下にも追加のトレードテーブルがありますが、これらは非推奨です。現在使われているのは `economy_trades` サブフォルダ内のテーブルだけです。
:::

別の方法として、取引者 entity 定義を更新して、新しいトレードテーブルの場所を指すようにできます。


