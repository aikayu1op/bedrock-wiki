---
title: アイテムのトラブルシューティング
description: アイテムに関するトラブルシューティングガイドです。
category: General
tags:
    - help
mentions:
    - SmokeyStack
    - yanasakana
    - SirLich
    - MedicalJewel105
    - TheDoctor15
    - ThomasOrs
    - QuazChick
---

:::tip
このページには _items_ に関するトラブルシューティング情報があります。続ける前に、[global troubleshooting](/guide/troubleshooting) のドキュメントを読んでください。
:::

## まずここから

> 「チュートリアルに従ったのに、あるいは自分でアイテムを作ろうとしたら、何かがおかしい！」

慌てる必要はありません。このページがよくある問題のデバッグを手伝います。

### アイテムが存在しない

-   パックが実際にワールドへ適用されていることを確認する
-   アイテムが `BP/items/` フォルダにあることを確認する
-   [jsonlint](https://jsonlint.com/) で、アイテムが有効な JSON であることを確認する
-   識別子がすべて小文字で、`wiki:my_item` のような形になっていることを確認する

### テクスチャが見つからない

`item_texture.json` ファイルを確認してください。名前が正しく、適切なフォルダにあることを確認します。間違った名前の例:

-   ⚠️ `texture/item_texture.json`
-   ⚠️ `textures/Item_texture.json`
-   ⚠️ `textures/item_textures.json`

Here is an example file to compare against:

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:your_item_icon": {
            "textures": "textures/items/your_item_icon"
        }
    }
}
```

次に、アイテムの BP ファイルを確認します。アイテムファイルの components セクションに `minecraft:icon` コンポーネントを配置してください。名前が正しいことも確認します。

<CodeHeader>BP/items/your_item.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:your_item",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            "minecraft:icon": "wiki:your_item_icon" // Make sure this string matches the shortname you put in item_texture.json
        }
    }
}
```

ここまで正しく行えていれば、アイテムにテクスチャが表示されるはずです。

## では次は？

これでガイドは終わりです。それでも問題がある場合は、[discord server](/discord) に参加して質問してください。
