---
title: "Blockbench: モデリング、テクスチャ作成、アニメーション"
category: Guide
description: Blockbench の概要をざっと見る。
prefix: "7. "
nav_order: 7
mentions:
    - KaiFireborn
    - SirLich
    - Dreamedc2015
    - SmokeyStack
    - sermah
    - cda94581
    - TheItsNameless
    - ThijsHankelMC
    - MedicalJewel105
    - ChibiMango
    - smell-of-curry
    - QuazChick
---

Blockbench は、Minecraft のモデリング、テクスチャ作成、アニメーション作成を可能にするための無料ソフトウェアです。モバイルブラウザー、Windows 10、macOS で利用できます。 [blockbench.net](https://blockbench.net/) からインストールしてください。

## モデリング

さっそく始めましょう。

1.  Blockbench を開きます。
2.  _File>New>Bedrock Model_ を選びます。これは重要です。Minecraft Bedrock は Java モデルを読み込めないためです。
3.  次のような画面が表示されます。

    ![](create_entity_project_menu.png)

    -   `"File name:"` はそのままの意味です。私のファイルは `skele_yaklin.geo.json` として生成されます。
    -   `"Model Identifier:"` はモデル識別子です（namespace は不要です）。この ID の短い名前は後で定義します。
    -   `"Box UV"` は、テクスチャ用の自動 UV 編集と展開を有効にするためにオンにする必要があります。
    -   `"Texture Height"` と `"Texture Width"` は、モデルのテクスチャ解像度を定義します。

4.  確認を押します。すると、次のような画面が表示されます。

    ![](create_entity_workspace.png)

    -   移動、サイズ変更、回転など、多くのツールがここにあります。
    -   右下のメニューから bone と cube を追加できます。cube は個別に回転でき、bone はその中にあるすべての要素をまとめて動かします。

5.  これでモデル作成の準備は完了です。より詳しいモデリングのチュートリアルについては、下の Everbloom Games の動画を確認してください。

<YouTubeEmbed id="XqzxL_-XjA0" />

<YouTubeEmbed id="j7ISUImhgpc" />

## テクスチャ作成

モデルができたので、次はテクスチャを作成します。

1.  左下のパネルで `Create Texture` をクリックします。

2.  `Name:` の欄に画像ファイル名を入力します。私の場合は `ghost.png` として書き出されます。
    テンプレート画像を使うには `Template:` にチェックを入れてください。作業しやすくなります。

    ![](create_entity_texture_1.png)

3.  すべて確認し、最初の手順で設定した解像度に変更します。

    ![](create_entity_texture_2.png)

4.  右上の `Paint` に移動し、テクスチャを描きます。

## アニメーション作成

モデルとテクスチャができたら、アニメーションを作成できます。右上の `Animate` に移動してください。

次のように、ツールバーに `Export Animations` と `Import Animations` を追加しておくと便利です。
![](create_entity_animation_1.png)

1.  右上のプラスアイコンから `Add Animation` をクリックし、`animation.{yourEntityName}.move` と名前を付けます。
    タイムラインの 0 の位置で脚を動かして、歩行アニメーションの最初のフレームを作成します。

    ![](create_entity_animation_2.png)

2.  タイムラインの 0.5 の位置で 2 つ目のフレームを作成します。

    ![](create_entity_animation_3.png)

3.  最後に、タイムラインカーソルを 1.0 に置き、最初のフレームを選択してから `Ctrl+C`、`Ctrl+V` で 3 つ目のフレームにコピーします。

4.  アニメーションを右クリックして `Loop` にチェックを入れると、ループ再生されます。
    ![](create_entity_animation_4.png)

## 作業の保存

これでモデル、テクスチャ、歩行アニメーションが完成したので、作業を保存できます。

_File > Save Model_ または _File > Export Bedrock Geometry_ を開きます。モデルは `RP/models/entity` に、テクスチャは `RP/textures/wiki/entity/` に、アニメーションは `RP/animations` に保存してください（`wiki` は自分の namespace に置き換えます）。おめでとうございます。これで最初のエンティティの見た目を作成できました。以下にファイル例を示します。

_その間に、自分だけのユニークなエンティティの見た目をアップグレードしたり、もう 1 体作ってみてはどうでしょうか？_

<Spoiler title="コードを表示">

<CodeHeader>RP/models/entity/ghost.geo.json</CodeHeader>

```json
{
    "format_version": "1.12.0",
    "minecraft:geometry": [
        {
            "description": {
                "identifier": "geometry.ghost",
                "texture_width": 64,
                "texture_height": 64,
                "visible_bounds_width": 3,
                "visible_bounds_height": 3.5,
                "visible_bounds_offset": [0, 1.25, 0]
            },
            "bones": [
                { "name": "root", "pivot": [0, 3, 0] },
                {
                    "name": "body",
                    "parent": "root",
                    "pivot": [0, 4.625, 0],
                    "cubes": [
                        {
                            "origin": [-4, 3, -4],
                            "size": [8, 13, 8],
                            "uv": [0, 20]
                        }
                    ]
                },
                {
                    "name": "leftArm",
                    "parent": "body",
                    "pivot": [4.6, 15.5, 0.5],
                    "cubes": [
                        {
                            "origin": [4.1, 7, -1],
                            "size": [3, 9, 3],
                            "uv": [32, 32]
                        }
                    ]
                },
                {
                    "name": "rightArm",
                    "parent": "body",
                    "pivot": [-4.5, 15.5, 0.5],
                    "cubes": [
                        {
                            "origin": [-7.1, 7, -1],
                            "size": [3, 9, 3],
                            "uv": [32, 20]
                        }
                    ]
                },
                {
                    "name": "head",
                    "parent": "body",
                    "pivot": [0, 16, 0],
                    "cubes": [
                        {
                            "origin": [-5, 16, -5],
                            "size": [10, 10, 10],
                            "uv": [0, 0]
                        }
                    ]
                }
            ]
        }
    ]
}
```

<CodeHeader>RP/animations/ghost.a.animations.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "animations": {
        "animation.ghost.idle": {
            "loop": true,
            "animation_length": 3,
            "bones": {
                "body": {
                    "rotation": { "0.0": [10, 0, 0], "3.0": [10, 0, 0] },
                    "position": {
                        "0.0": [0, 0, 0],
                        "1.5": [0, 1, 0],
                        "3.0": [0, 0, 0]
                    }
                },
                "leftArm": {
                    "rotation": {
                        "0.0": [-10, 0, 0],
                        "1.5": [-5, 0, 0],
                        "3.0": [-10, 0, 0]
                    }
                },
                "rightArm": {
                    "rotation": {
                        "0.0": [-10, 0, 0],
                        "1.5": [-5, 0, 0],
                        "3.0": [-10, 0, 0]
                    }
                },
                "head": {
                    "rotation": {
                        "0.0": [-7.5, 0, 0],
                        "1.5": [-2.5, 0, 0],
                        "3.0": [-7.5, 0, 0]
                    }
                }
            }
        },
        "animation.ghost.attack": {
            "animation_length": 0.75,
            "bones": {
                "body": {
                    "rotation": {
                        "0.0": [10, 0, 0],
                        "0.2917": [10, 15, 0],
                        "0.5": [22.5, -12.5, 0],
                        "0.75": [10, 0, 0]
                    },
                    "position": {
                        "0.0": [0, 0, 0],
                        "0.2917": [0, 0, 3],
                        "0.5": [0, 0, -3],
                        "0.75": [0, 0, 0]
                    }
                },
                "leftArm": {
                    "rotation": { "0.0": [-10, 0, 0], "0.75": [-10, 0, 0] }
                },
                "rightArm": {
                    "rotation": {
                        "0.0": [-10, 0, 0],
                        "0.2083": [-10, 0, 0],
                        "0.2917": [-10, 62.5, 117.5],
                        "0.5": [-80, -17.5, 22.5],
                        "0.75": [-10, 0, 0]
                    }
                },
                "head": {
                    "rotation": { "0.0": [-7.5, 0, 0], "0.75": [-7.5, 0, 0] }
                }
            }
        },
        "animation.ghost.move": {
            "loop": true,
            "animation_length": 1,
            "bones": {
                "body": {
                    "rotation": {
                        "0.0": [15, 0, 0],
                        "0.25": [15, -2.5, 0],
                        "0.5": [15, 0, 0],
                        "0.75": [15, 2.5, 0],
                        "1.0": [15, 0, 0]
                    },
                    "position": [0, 0, 0]
                },
                "leftArm": {
                    "rotation": {
                        "0.0": [15, 0, 0],
                        "0.5": [20, 0, 0],
                        "1.0": [15, 0, 0]
                    }
                },
                "rightArm": {
                    "rotation": {
                        "0.0": [15, 0, 0],
                        "0.5": [20, 0, 0],
                        "1.0": [15, 0, 0]
                    }
                },
                "head": {
                    "rotation": {
                        "0.0": [-12.5, 0, 0],
                        "0.5": [-15, 0, 0],
                        "1.0": [-12.5, 0, 0]
                    }
                }
            }
        }
    }
}
```

</Spoiler>

## 学んだこと

-   [x] Blockbench でエンティティを作成する方法
-   [x] Blockbench を使ってモデル、テクスチャ、アニメーションを作成する方法
