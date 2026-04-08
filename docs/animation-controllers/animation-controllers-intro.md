---
title: アニメーションコントローラー入門
nav_order: 1
tags:
    - guide
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - MedicalJewel105
    - stirante
    - cda94581
    - ThijsHankelMC
    - MetalManeMc
    - ThomasOrs
description: アニメーションコントローラーの概要です。
---

アニメーションコントローラー（AC）は、リソースパックとビヘイビアパックの両方で使える状態機械です。リソースパックではアニメーションコントローラー（RPAC）をアニメーションの再生に使い、ビヘイビアパック（BPAC）ではコマンドやコマンド用の「アニメーション」の実行に使います。

## 状態機械とは何か?

状態機械は、複数の状態の連なりに基づく特殊なロジック管理の仕組みです。各状態には次の2つの要素があります。

-   現在の状態で何を行うか
-   他の状態へどう移るか

状態機械は、特に古典的なプログラミングで広く使われています。Minecraft だけのものではありません。状態機械については[こちら](https://www.itemis.com/en/yakindu/state-machine/documentation/user-guide/overview_what_are_state_machines)で詳しく学べます。

状態機械は一度にひとつの状態にしか `in` できません。状態機械が「動作」しているときは、状態から状態へ移動し、各状態の中のロジックを実行してから、`transitions` に従って他の状態へ移る、と考えるとよいでしょう。

## 状態機械の例

状態機械が便利なのは、アニメーションを自然なロジックの流れとして分割でき、各状態がそれぞれのアニメーションとロジックを担当できるからです。

たとえば、ヘリコプターの回転するブレードをアニメーションさせたいとします。ただし、地上にいるときだけです。この場合、次の2つの状態があります。

-   `ground state`
-   `flying state`

これらの状態には、先ほどの2つの情報を次のように割り当てられます。

-   `ground state`:
    -   アニメーションを再生しない
    -   空中にいる場合は `flying state` に移る
-   `flying state`:
    -   飛行アニメーションを再生する
    -   地上にいる場合は `ground state` に移る

状態機械をフローチャートとして表すと次のようになります。

![](two_state_FSM.png)

このフローチャートでは、状態は四角形で表され、矢印はある状態から別の状態への _transitions_ を表します。

フローチャートは、複数状態の有限状態機械の流れを可視化するのに便利です。アニメーションの論理的な _流れ_ を追いやすくなります。では、3つ目の `explode` 状態を追加した、より詳しい例を見てみましょう。

![](three_state_FSM.png)

見てわかるように、状態は複数の状態へ分岐できます。状態は行き止まりにもできます（ヘリコプターは破壊されているので、これ以上のアニメーションは不要です）。このような分岐の流れが、アニメーションコントローラーを強力にしている大きな理由です。

## アニメーションコントローラーとは何か?

アニメーションコントローラーは、アニメーションの再生やコマンドの実行を可能にする Minecraft の状態機械です。アニメーションコントローラーは、RP でも BP でも必ず `animation_controllers` フォルダに配置します。

### コントローラーをエンティティに接続する

アニメーションコントローラーは専用のファイルで定義され、何かをする前にエンティティへ「接続」しなければなりません。AC をエンティティに接続するには、次の2つが必要です。

-   アニメーションコントローラーの短い名前を定義する
-   `scripts` からアニメーションコントローラーを実行する

以下はサンプルの `description` で、AC をまず `animations` で定義し、次に `scripts/animate` で再生する方法を示しています。

<CodeHeader>RP/entity/helicopter.ce.json OR BP/entities/helicopter.se.json</CodeHeader>

```json
"description": {
	"identifier": "wiki:helicopter",
	"animations": {
		"blade_controller": "controller.animation.helicopter.blade"
	},
	"scripts": {
		"animate": [
			"blade_controller"
		]
	}
}
```

アニメーションコントローラーを条件付きで再生したい場合は、任意の Molang 引数を指定できます。引数が true と評価されると、コントローラーが再生されます。

<CodeHeader>RP/entity/helicopter.ce.json OR BP/entities/helicopter.se.json</CodeHeader>

```json
"scripts": {
	"animate": [
		{
			// Only play the blade_controller if the helicopter has a rider.
			"blade_controller": "q.has_rider"
		}
	]
}
```

### RP アニメーションコントローラー

RP アニメーションコントローラーは RP に置き、RP エンティティに接続できます。ボーンアニメーションを再生できます。

### BP アニメーションコントローラー

BP アニメーションコントローラーは BP に置き、BP エンティティに接続できます。コマンドを実行したり、エンティティへイベントを送ったりできます。

## アニメーションコントローラーの例

先ほどの状態機械の例を使って、簡単なアニメーションコントローラーを見てみましょう。

### 簡単な例

<CodeHeader>RP/animation_controllers/helicopter.ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.helicopter.blade": {
            "initial_state": "ground",
            "states": {
                "ground": {
                    "transitions": [
                        {
                            "flying": "!q.is_on_ground"
                        }
                    ]
                },
                "flying": {
                    "animations": ["flying"],
                    "transitions": [
                        {
                            "ground": "q.is_on_ground"
                        }
                    ]
                }
            }
        }
    }
}
```

ここには……たくさんの要素があります。ひとつずつ分解して見ていきましょう。その前に、次の2点を覚えておいてください。

-   アニメーションコントローラーは _状態の一覧_ です
-   各状態には、_その状態で何をするか_ と _新しい状態へどう移るか_ の2つの情報があります。

この例には、次の2つの状態があります。

-   `ground`
-   `flying`

`"initial_state": "ground"` は、このアニメーションコントローラーが `ground` 状態から始まることを意味します。

<CodeHeader>
    RP/animation_controllers/helicopter.ac.json#animation_controllers/controller.animation.helicopter.blade/states
</CodeHeader>

```json
"ground": {
    "transitions": [
        {
            "flying": "!q.is_on_ground"
        }
    ]
}
```

`ground` 状態には、他の状態へ移るための _transitions_ の一覧があります。この例では、既定の状態が _`q.is_on_ground` が true ではないときに `flying` 状態へ移る_ と言っています。つまり、空中に飛び立ったら飛行アニメーションを開始するということです。

<CodeHeader>
    RP/animation_controllers/helicopter.ac.json#animation_controllers/controller.animation.helicopter.blade/states
</CodeHeader>

```json
"flying": {
    "animations": [
        "flying"
    ],
    "transitions": [
        {
            "ground": "q.is_on_ground"
        }
    ]
}
```

`flying` 状態にも transitions の一覧があります。この場合は逆の遷移で、_`q.is_on_ground` が true のときに `ground` 状態へ移る_ となっています。つまり、地上に着地したら既定の状態へ戻ります。

`transitions` の一覧に加えて、この状態の中で再生する `animations` の一覧もあります。この場合は `flying` アニメーションを再生しています。このアニメーションは、対象エンティティの定義ファイルで定義しておく必要があります。

### 完全な例

以下は、先ほどの2つ目の状態機械のコードです。今回は3つの状態があります。この例では、次の新しい概念が示されています。

-   複数の遷移を持つ状態
-   遷移を持たない状態

<CodeHeader>RP/animation_controllers/helicopter.ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.helicopter.blade": {
            "initial_state": "ground",
            "states": {
                "ground": {
                    "transitions": [
                        {
                            "flying": "!q.is_on_ground"
                        },
                        {
                            "explode": "!q.is_alive"
                        }
                    ]
                },
                "flying": {
                    "animations": ["flying"],
                    "transitions": [
                        {
                            "ground": "q.is_on_ground"
                        },
                        {
                            "explode": "!q.is_alive"
                        }
                    ]
                },
                "explode": {
                    "animations": ["explode"]
                }
            }
        }
    }
}
```

## RP Animation Controllers

リソースパックのアニメーションコントローラーは、サウンドやパーティクルのようなものも実行できます。
アニメーションコントローラー内でサウンドやパーティクルを呼び出す前に、client entity ファイルでそれらを定義しておく必要があります。

<CodeHeader>RP/entities/custom_tnt.json#minecraft:client_entity/description</CodeHeader>

```json
"sound_effects": {
    "explosion": "wiki.custom_tnt.explosion" //where wiki.custom_tnt.explosion is a sound defined in sound_definitions just like animation sounds.
},
"particle_effects": {
    "fuse_lit": "wiki:tnt_fuse_lit_particle"
}
```

And only then you can call them in the animation controller:

<CodeHeader>
    RP/animation_controllers/custom_tnt.animation_controllers.json#controller.animation.custom_tnt
</CodeHeader>

```json
"states":{
    "default":{
        "transitions":[
            {
                "explode_state":"q.mark_variant == 1"
            }
        ]
    },
    "explode_state":{
        "sound_effects":[
            {
                "effect":"explosion"
            }
        ],
		"particle_effects": [
			{
				"effect": "fuse_lit"
				// "locator": "<bone>" Locator can also go here too
			}
		],
        "transitions":[
            {
                "default":"q.mark_variant == 0"
            }
        ]
    }
}
```

:::warning 警告! すべてのパーティクルがここで動作するわけではありません。問題がある場合は、別のパーティクルを試してください。たとえば、blaze のアニメーションコントローラーで使われているものを試してみてください。
:::

## BP アニメーションコントローラー

ビヘイビアパックのアニメーションコントローラーは、RP アニメーションコントローラーと同じ基本形式を使いますが、アニメーションを起動する代わりに、コマンドやイベントの発火、Molang コードの実行を行えます。一般に、次の2つの新しいフィールドが追加されます。

-   `on_entry`: 状態に入ったときに実行するコマンド
-   `on_exit`: 状態から出たときに実行するコマンド

ここでいうコマンドには、次の3種類があります。

-   `/say Hello there!` のようなスラッシュコマンド
-   `@s wiki:transform_into_plane` のような、エンティティ上のイベントトリガー
-   `v.tickets += 1;` のような任意の Molang 式（これはリソースパックのアニメーションコントローラーでも使えます）

以下は、この挙動の一部を示す BP アニメーションコントローラーの例です。

<CodeHeader>BP/animation_controllers/helicopter.ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.helicopter.commands": {
            "initial_state": "ground",
            "states": {
                "ground": {
                    "on_entry": ["/say I am now on the ground!"],
                    "transitions": [
                        {
                            "flying": "!q.is_on_ground"
                        }
                    ]
                },
                "flying": {
                    "on_entry": ["/say I am now in the air!"],
                    "transitions": [
                        {
                            "ground": "q.is_on_ground"
                        }
                    ]
                }
            }
        }
    }
}
```

## アニメーションコントローラーの流れ

ここまでの例で、アニメーションコントローラーの流れが少し見えてきたはずです。この節では、その仕組みをもう少し明確に説明します。

### 読み込み

エンティティがワールドに読み込まれると、接続されている各アニメーションコントローラーで、既定の状態に _入ります_。`initial_state` が定義されていない場合は、`default` という名前の状態が使われます。これもない場合、AC はコンテンツログを生成します。

動作中、AC は各ティックごとに次の処理を行います。

1. 現在の状態にあるアニメーションを再生します（ループ設定なら繰り返し、そうでなければ1回だけ再生します）。状態に入った直後なら、`on_entry` のコマンドも実行します。
2. すべての遷移を確認し、有効な遷移があるか調べます。一覧の上から下へ検索し、最初に有効だった遷移へ移動します。遷移が見つかると、`on_exit` のコマンドが実行されます。

アニメーションコントローラーの仕組み上、1ティックあたり最大1回しか状態を移動しません。

### リセット

アニメーションコントローラーは、エンティティが再読み込みされると（プレイヤーの参加/退出、チャンクの再読み込みなど）「リセット」されます。つまり、既定の状態に「飛び戻る」ことになります。重要なアニメーションを再開できるロジックは、必ず既定の状態に用意しておくべきです。

## 補足

アニメーションコントローラー内で変数を作成し、その値を再マッピングすることもできます。

```json
{
    "format_version": "1.17.30",
    "animation_controllers": {
        "controller.animation.sheep.move": {
            "states": {
                "default": {
                    "variables": {
                        "ground_speed_curve": {
                            "input": "q.ground_speed",
                            "remap_curve": {
                                "0.0": 0.2,
                                "1.0": 0.7
                            }
                        }
                    },
                    "animations": [
                        "wiggle_nose",
                        {
                            "walk": "v.ground_speed_curve"
                        }
                    ]
                }
            }
        }
    }
}
```
