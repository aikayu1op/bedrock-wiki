---
title: ブロックのトラブルシューティング
description: ブロックのトラブルシューティングガイドです。
category: General
tags:
    - help
mentions:
    - SmokeyStack
    - SirLich
    - aexer0e
    - MedicalJewel105
    - Sprunkles137
    - QuazChick
---

:::tip
このページは _ブロック_ に関するトラブルシューティング情報を含みます。続ける前に、まず [全体のトラブルシューティング](/guide/troubleshooting) を読んでください。
:::

## 0.0 - 問題発生

> 「チュートリアルを見ながら作ったか、自分でブロックを作ってみたら、何かがおかしい!」

慌てる必要はありません。このページが、よくある問題の原因特定を手助けします。

## 1.0 - テクスチャのトラブルシューティング

ブロックテクスチャに関する問題を解決します。

## 1.1 - テクスチャが黒とマゼンタになる

ここでは、レイアウトが異なる 3 種類のブロックを扱います。土っぽいブロック ![](dirt.png)、原木っぽいブロック ![](log.png)、草っぽいブロック ![](grass.png) です。

`RP/textures/terrain_texture.json` に移動し、ファイル名が正しいことを確認してください。

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:dirt_like": {
            "textures": "textures/wiki/blocks/dirt_like" // You can replace this with anything, just remember the name
        },
        "wiki:custom_log_top": {
            "textures": "textures/wiki/blocks/custom_log_top" // You can replace this with anything, just remember the name
        },
        "wiki:custom_log_side": {
            "textures": "textures/wiki/blocks/custom_log_side" // You can replace this with anything, just remember the name
        },
        "wiki:custom_grass_top": {
            "textures": "textures/wiki/blocks/custom_grass_top" // You can replace this with anything, just remember the name
        },
        "wiki:custom_grass_bottom": {
            "textures": "textures/wiki/blocks/custom_grass_bottom" // You can replace this with anything, just remember the name
        },
        "wiki:custom_grass_side": {
            "textures": "textures/wiki/blocks/custom_grass_side" // You can replace this with anything, just remember the name
        }
    }
}
```

次にブロックファイルへ移動します。ブロックファイルには `material_instances` コンポーネントがあることを確認してください。

土っぽいブロックの例:

<CodeHeader>BP/blocks/dirt_like.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:dirt_like"
        },
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:dirt_like"
                }
            }
        }
    }
}
```

原木っぽいブロックの例:

<CodeHeader>BP/blocks/custom_log.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_log"
        },
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_log_side"
                },
                "end": {
                    "texture": "wiki:custom_log_top"
                },
                "up": "end",
                "down": "end"
            }
        }
    }
}
```

草っぽいブロックの例:

<CodeHeader>BP/blocks/custom_grass.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_grass"
        },
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_grass_side"
                },
                "up": {
                    "texture": "wiki:custom_grass_top"
                },
                "down": {
                    "texture": "wiki:custom_grass_bottom"
                }
            }
        }
    }
}
```

正しく設定できていれば、ブロックのテクスチャは正しく表示されるはずです。

## 1.2 - テクスチャが「?」として表示される

問題: カスタムブロックが、疑問符の付いた土ブロックに変わってしまった。

<WikiImage src="unknown.png" pixelated="true" width="128" class="my-4" />

これは `unknown` ブロックで、ブロック識別子が変更された場合やブロック JSON が無効な場合に表示されます。

解決策: JSON リンターを使い、識別子が変わっていないか再確認してください。ブロックに `minecraft:geometry` と `minecraft:material_instances` があるか、または `RP/blocks.json` にテクスチャ項目があることを確認してください。

---

## 2.0 - レンダリングのトラブルシューティング

このセクションでは、よくあるブロック描画の問題とその修正方法を説明します。

## 2.1 - 透過が機能しない

問題: テクスチャファイルに透明ピクセルがあるのに、ゲーム内で適用すると不透明になってしまう。

解決策: ブロックファイルに移動し、`material_instances` コンポーネントを開きます。コンポーネントに次を追加してください。

<CodeHeader>BP/blocks/your_block.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        ...
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "render_method": "alpha_test"
                }
            }
        }
    }
}
```

## 2.2 - ブロックに影ができる

問題: カスタムジオメトリを持つブロックに影が付いている。

解決策: ブロックのコードに次のコンポーネントを追加してください。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:light_dampening": 0
```

## 3.0 - よくあるコンテンツログのエラー

このセクションでは、よくあるコンテンツログのエラーとその調査方法を説明します。

## 3.1 - Collision/Selection Box エラー

問題: 次のようなコンテンツエラーが出る。

> `[Blocks][error]-minecraft:collision_box: min can't be below (-8, 0, -8) and max can't be more than (8, 16, 8)`

解決策: `minecraft:collision_box` または `minecraft:selection_box` コンポーネントを確認し、次の点を満たしてください。

-   X と Z の値が `-8`{lang=json} から `8`{lang=json} の範囲内であること。
-   Y の値が `0`{lang=json} から `16`{lang=json} の範囲内であること。
-   ボックスがブロックの 16&times;16&times;16 単位の領域からはみ出していないこと。

## 3.2 - モデルエラー

問題: 次のようなコンテンツエラーが出る。

> `geometry.your_block contains X boxes outside...`

解決策: ジオメトリが Minecraft ブロックの許容サイズより大きくなっています。ジオメトリを小さくするか、複数のブロックに分割してください。

---

## 次は？

これらを試してもまだ問題がある場合は、discord サーバーに参加して質問してください。

情報が間違っている、または古いと思う場合は、GitHub 経由でぜひ貢献してください。
