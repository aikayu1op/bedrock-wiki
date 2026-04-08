---
title: サブパック
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - ChilRx
    - SmokeyStack
    - MedicalJewel105
    - TheItsNameless
description: サブパックを使うと、異なるアドオンの「構成」を切り替えられます。
---

## サブパックとは？

サブパックを使うと、異なるアドオンの「構成」を切り替えられます。

本来は、異なるメモリ容量向けにテクスチャ解像度を切り替えるための仕組みですが、動作やリソースパックのファイル差分を作る用途にも使えます。こうした差分は、歯車アイコンをクリックしてスライダーを調整することで選択できます。

## サブパックはどう動くの？

サブパックを選択している場合、サブパック用フォルダーに置いたファイルは、メインのアドオンフォルダーに置いたファイルを上書きします。たとえば、アドオンに `RP/textures/wiki/entities/ghost.png` と `RP/subpacks/pack_1/textures/wiki/entities/ghost.png` の両方がある場合、サブパック `pack_1` が選択されていれば、後者の画像ファイルが前者を置き換えます。

ファイルが互いにどのように上書きされるかの詳細は、[vanilla アセットの上書き](/concepts/overwriting-assets) のページを参照してください。

## サブパックの作成

-   サブパックを追加するには、まず `BP`/`RP` のルート内に `subpacks` フォルダーを作成します。
-   その後、`subpacks` フォルダーの中に、必要なサブパックごとのフォルダーを追加します。
    例:

<FolderView :paths="[
    'RP/subpacks/subpack_1',
    'RP/subpacks/subpack_2'
]" />

-   それぞれのフォルダーの中に、各サブパックの内容を入れられます。
    これは、通常ならビヘイビアパックやリソースパックに入るものなら何でも構いません。
    例:

<FolderView :paths="[
    'RP/subpacks/subpack_1/textures/wiki/blocks/dirt.png',
    'RP/subpacks/subpack_1/textures/wiki/items/example_item.png',
    'RP/subpacks/subpack_2/textures/wiki/blocks/dirt.png',
    'RP/subpacks/subpack_2/textures/wiki/items/example_item.png'
]" />

## マニフェスト部分

マニフェストでサブパックを登録するには、`subpacks` を追加します。ここにはサブパックの配列が入ります。

例:

<CodeHeader>RP/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "Pack Name",
        "description": "Pack Description",
        "uuid": "2fc2dd6f-86cb-4370-af70-21490a1ae471",
        "version": [1, 0, 0],
        "min_engine_version": [1, 13, 0]
    },
    "modules": [
        {
            "type": "resources",
            "uuid": "f6821b4a-1854-44fc-a8a4-0c2847ffda46",
            "version": [1, 0, 0]
        }
    ],
    "subpacks": [
        {
            "folder_name": "subpack_1",
            "name": "First Subpack",
            "memory_tier": 0
        },
        {
            "folder_name": "subpack_2",
            "name": "Second Subpack",
            "memory_tier": 1
        }
    ]
}
```

-   `name` - サブパック選択時に表示される名前です。

-   `memory_tier` - このサブパックを有効にするために端末が持っていなければならない RAM 容量です。1 memory tier = 0.25 GB です。

-   `folder_name` - このサブパックに使うフォルダー名です。上の例では `subpack_1` または `subpack_2` になります。

## 既知の事項

サブパックを 1 つだけ追加した場合でも、サブパック選択欄には 2 つの विकल्पが表示されます。ただし、2 つ目の解像度（サブパックなし）は、**ルートフォルダーの内容でサブパックを上書きすることはありません**。

端末でデフォルトとして選ばれるサブパックは、その端末で利用可能な最も高い memory tier のものです。同じ memory tier のサブパックが複数ある場合、その tier の配列の中で最後にあるサブパックが選択されます。

アクティブなサブパックを変更するには、リソースパック設定を開いて対象のリソースパックを見つけます。歯車/設定アイコンを押し、スライダーを動かしてアクティブなサブパックを切り替えてください。
