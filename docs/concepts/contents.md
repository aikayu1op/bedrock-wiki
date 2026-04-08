---
title: contents.json
description: パック内のすべてのファイルを一覧化するファイルです。
mentions:
    - MedicalJewel105
    - Osaxely
    - SirLich
    - solvedDev
    - Joelant05
    - Jorginhor
    - TheItsNameless
    - QuazChick
---

`contents.json` は、おそらくゲームがパック内のファイルをより簡単に処理するために使うファイルです。
パックを正常に動かすために、このファイルを入れることは必須ではありません。

主な目的は Marketplace コンテンツ内のファイルを暗号化できるようにすることですが、暗号化されていないバニラパックにも含まれています。

## JSON 形式

`contents.json` ファイルは、パックの `manifest.json` と同じ場所、つまりパックディレクトリのルートに置かれます。
`content` パラメータの下に配列として、パックに含まれるファイル一覧が入ります。

各 `content` エントリには 2 つのパラメータがあります。

-   `path` — パックのルートディレクトリからの相対パスです。ファイル拡張子を含める必要があります。
-   `key`（任意）— 暗号化されたファイルを復号するためのキーです。

<CodeHeader>RP/contents.json</CodeHeader>

```json
{
    "content": [
        { "path": "animation_controllers/custom_entity.animation_controllers.json" },
        { "path": "animations/my_animation.animations.json" },
        { "path": "entity/custom_entity.entity.json" },
        { "path": "texts/en_US.lang" },
        { "path": "textures/wiki/blocks/custom_block.png" },
        { "path": "textures/textures_list.json" },
        { "path": "contents.json" },
        { "path": "manifest.json" }
    ]
}
```

<FolderView :paths="[
    'RP/animation_controllers/custom_entity.animation_controllers.json',
    'RP/animations/my_animation.animations.json',
    'RP/entity/custom_entity.entity.json',
    'RP/texts/en_US.lang',
    'RP/textures/wiki/blocks/custom_block.png',
    'RP/textures/textures_list.json',
    'RP/contents.json',
    'RP/manifest.json',
]" />

## 手順の自動化

`contents.json` ファイルは、ゲーム自身によって自動生成できます。
Minecraft に生成させれば、作成ミスを防げます。

ただし、先にファイルを用意する必要があります。アドオンのルートディレクトリに `contents.json` という空のファイルを作成し、空の中かっこを書いておきます。

<CodeHeader>BP|RP/contents.json</CodeHeader>

```json
{}
```

ファイルの内容は、次回ゲーム起動時に自動で書き込まれます。

## 追加情報

-   この自動処理は、パックの場所（development フォルダーでも通常フォルダーでも）に関係なく利用できます。
-   サブパックごとに `contents.json` を作る必要はありません。パックのルートにあるファイルだけで十分です。
-   このファイルは、パックを正常に動かすために必須ではありません。
