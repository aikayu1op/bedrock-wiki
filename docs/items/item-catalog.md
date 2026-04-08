---
title: アイテムカタログ
description: アイテムをクリエイティブメニューやレシピブックのどこに表示するかを指定する方法と、クリエイティブメニューに独自の展開可能なグループを追加する方法を学びます。
category: General
related:
    - /items/vanilla-item-groups
license: true
mentions:
    - Supernova3695
    - QuazChick
---

crafting item catalog ファイルは、アイテムをクリエイティブメニューやレシピブックのどこに表示するかを指定するために使います。

まず、behavior pack の `item_catalog` フォルダに `crafting_item_catalog.json` というファイルを作成する必要があります。
以下は、このファイルに含める基本的な JSON 形式です。

<CodeHeader>BP/item_catalog/crafting_item_catalog.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:crafting_items_catalog": {
        "categories": []
    }
}
```

## アイテムの追加

まず、アイテムをどのカテゴリに入れるかを決める必要があります。
これによって、クリエイティブメニューとレシピブックのどのタブに表示されるかが決まります。

使用できるカテゴリは次の 4 つです。

-   `"construction"`{lang=json}
-   `"equipment"`{lang=json}
-   `"items"`{lang=json}
-   `"nature"`{lang=json}

例えば、"Nature" タブにアイテムを追加する場合は、`categories` 配列に新しい項目を作成し、`category_name` として `"nature"`{lang=json} を指定します。

<CodeHeader>BP/item_catalog/crafting_item_catalog.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:crafting_items_catalog": {
        "categories": [
            {
                "category_name": "nature",
                "groups": []
            }
        ]
    }
}
```

アイテムは、アイテムカタログの各カテゴリにグループ単位で追加されます。
新しいアイテムグループを追加するには、そのカテゴリの `groups` 配列に新しい項目を作成する必要があります。

次の例では、2 つのカスタム鉱石ブロックを "Nature" カテゴリに追加しています。
アイテムカタログ内のカスタムグループは、バニラのグループの後に表示される点に注意してください。

<CodeHeader>minecraft:crafting_items_catalog > categories</CodeHeader>

```json
{
    "category_name": "nature",
    "groups": [
        {
            "items": ["wiki:silver_ore", "wiki:steel_ore"]
        }
    ]
}
```

### 展開可能なグループ

クリエイティブモードのプレイヤー向けに、アイテムグループを展開・折りたたみできるようにすることができます。
これは、グループに `group_identifier` パラメーターを追加することで実現できます。

-   `icon` は、グループのアイコンとして表示するアイテムを指定します。
-   `name` は、グループ名として使うローカライズキーです。アイテムやブロックの `menu_category` パラメーターでグループを参照するためにも使えます。

`group_identifier` パラメーターを使って、カスタム鉱石グループがクリエイティブメニューで占めるスペースを減らしてみましょう。

<CodeHeader>minecraft:crafting_items_catalog > categories</CodeHeader>

```json
{
    "category_name": "nature",
    "groups": [
        {
            "group_identifier": {
                "icon": "wiki:silver_ore",
                "name": "wiki:itemGroup.name.ore"
            },
            "items": ["wiki:silver_ore", "wiki:steel_ore"]
        }
    ]
}
```

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
wiki:itemGroup.name.ore=Custom Ores
```

これで完了です。これで、アイテムカタログにアイテム用のカスタムグループを追加する方法が分かりました。
