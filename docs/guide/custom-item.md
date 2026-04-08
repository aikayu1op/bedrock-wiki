---
title: カスタムアイテムの作成
category: Guide
description: 最初のカスタムアイテムの作り方。
nav_order: 5
prefix: "5. "
mentions:
    - KaiFireborn
    - SirLich
    - cda94581
    - TheItsNameless
    - MedicalJewel105
    - ChibiMango
    - TheDoctor15
    - SmokeyStack
    - unickorn
    - Sprunkles137
    - ThomasOrs
    - davedavis
    - QuazChick
---

Minecraft では、ドロップ、取引、クラフト、その他通常のアイテムと同じように使えるカスタムアイテムを作れます。ここには大きな可能性があり、食料、燃料、道具まで作成できます。

このチュートリアルでは、シンプルな `ectoplasm` アイテムの作り方を学びます。これは後でゴーストエンティティのルートテーブルのドロップとして使います。

<WikiImage src="ectoplasm_view.png" width="150" />

アイテムは概念的に 2 つの部分で構成されます。

-   見た目（テクスチャ、名前）
-   挙動（アイテムがどう振る舞うか）

まずは、新しいシンプルなアイテムを作成し、その挙動を定義する方法を学びます。次のセクションでは、このアイテムにテクスチャを割り当て、ゲーム内で見えるようにします。

## アイテムの挙動

アイテムを作るには、アイテムを識別し、どう振る舞わせたいかを定義する方法が必要です。そのために、Minecraft に特定のアイテムへ指定した挙動を適用させるファイルを作成します。

このセクションの最後には、アイテムの挙動を完全に定義した状態になります。

### コンポーネント

アイテムごとに挙動は異なります。豚肉は食べられ、エンチャントされたアイテムは光り、卵は 16 個までしかスタックできません。これらはすべて、アイテムの挙動の例です。
コンポーネントを使うことで、カスタムアイテムの挙動を定義できます。

<Spoiler title="コンポーネントの例">

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:glint": true,
"minecraft:max_stack_size": 16
```

</Spoiler>

コンポーネントには、ゲームにアイテムの動作を伝える情報が入っています。たとえば [`"minecraft:glint"`](/items/item-components#glint) コンポーネントは、アイテムにエンチャントのきらめきを付けるかどうかを決めるので、`true` にするとそれが適用されます。
すべてのコンポーネントには `value` があり、望む挙動になるように編集できます。

今回の ectoplasm では、卵と同じように 16 個までスタックできるように設定します。そのために [`"minecraft:max_stack_size"`](/items/item-components#max-stack-size) コンポーネントを使い、値を `16` にします。

### 識別子

ゲームが正しいコンポーネントを正しいアイテムに適用できるようにするには、どのアイテムが自分のものかをゲームに伝える必要があります。これを実現するため、アイテムの識別子を定義します。

識別子は、そのアイテムに固有の名前です。たとえばバニラの Minecraft の卵の識別子は `minecraft:egg` です。識別子は 2 つの部分から成ります。

-   namespace（`minecraft`）
-   id（`egg`）

namespace はアドオン固有のもので、プロジェクト全体で使います。これは、たとえば 2 つのパックをゲームに入れてどちらにも ectoplasm アイテムがある場合などに、識別子の重複による問題を減らすためです。
Minecraft が使う namespace は `minecraft` です。あなたの namespace は、作成者のイニシャルやパック名の略称など、固有のものにしてください。ここでは例として `wiki` を使います。namespace の作り方については [ここ](/concepts/namespaces) を参照してください。

id は、アイテムを表すわかりやすい短い名前です。ここでは `ectoplasm` を使います。

これらを合わせると、カスタム識別子は `wiki:ectoplasm` になります。namespace と id を区切るには `:` を使います。アイテムを参照したいときは、たとえば `/give` コマンドでこの識別子を使います。

### アイテムファイル

コンポーネントと識別子がそろったので、いよいよアイテムを定義できます。アイテム定義ファイルを behavior pack に作成して、ここに情報を書きます。

すべてのアイテム定義は `BP/items/` に置きます。ファイル名は何でも構いませんが、見つけやすいように id に合わせて命名するのがおすすめです。
ここでは `BP/items/ectoplasm.json` を作成します。基本構成は次のとおりです。

<CodeHeader>BP/items/ectoplasm.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": { ... },
        "components": { ... }
    }
}
```

パック内の多くのファイルには、トップレベル定義が 2 つあります。`"format_version"` と `"minecraft:<file_type>"` です。
format version は、Minecraft がこのファイルを読む際に使うアドオンシステムのバージョンを定義します。今回は新しい機能を使えるように `1.26.10` を使います。format version の詳細は [ここ](/guide/format-version) で確認できます。

2 つ目の定義は、このファイルの種類を示します。今回はアイテム定義なので `minecraft:item` です。その下にすべての情報を入れます。ここには必ず `description` キーが含まれます。

`description` をもう少し詳しく見てみましょう。

<CodeHeader>ectoplasm.json > minecraft:item</CodeHeader>

```json
"description": {
    "identifier": "wiki:ectoplasm",
    "menu_category": {
        "category": "items"
    }
},
```

description キーには `identifier` と、必要なほかの情報が入ります。`identifier` によって、そのコンポーネントをどのアイテムに適用するかをファイルが判断できます。
`category` キーは、クリエイティブインベントリやレシピブックのどのタブにアイテムを表示するかを決めます。選べるタブは `"construction"`、`"equipment"`、`"items"`、`"nature"` の 4 つです。このキーがない場合、アイテムはクリエイティブインベントリに表示されませんが、`/give` を使えば入手できます。

ここで `components` の下に、実際の挙動を定義できます。ここには、アイテムに持たせたいコンポーネントを入れます。
今回は `"minecraft:max_stack_size"` コンポーネントを使います。ほかに使えるコンポーネントは、より詳しい Items のガイド [ここ](/items/item-components) を参照してください。

<CodeHeader>ectoplasm.json > minecraft:item</CodeHeader>

```json
"components": {
    "minecraft:max_stack_size": 16
}
```

これで、アイテムの挙動は完全に定義できました。現在のファイルは次のようになっているはずです。

<CodeHeader>BP/items/ectoplasm.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:ectoplasm",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            "minecraft:max_stack_size": 16
        }
    }
}
```

このアドオンでワールドを開くと、アイテムは正しいメニューに表示されますが、見た目はなく、妙な名前が付いているはずです。

まだ見た目を定義していないからです。ただし、想定どおりスタックできることは確認できるはずです。次のセクションでは、アイテムのテクスチャを定義し、それをアイテムに割り当てます。

## アイテムの見た目

動作するアイテムができたので、そこにテクスチャと名前を追加します。

テクスチャは resource pack の `RP/textures` に画像として保存されます。Minecraft にどのテクスチャを使うかを理解させるには、短い名前を割り当てて、その名前で参照できるようにする必要があります。

### テクスチャ

まず、アイテム用のテクスチャが必要です。今回の ectoplasm では、この画像を使います。

![ectoplasm.png](https://raw.githubusercontent.com/Bedrock-OSS/bedrock-examples/main/resources/guide/rp/textures/wiki/items/ectoplasm.png)

<Button link="https://raw.githubusercontent.com/Bedrock-OSS/bedrock-examples/main/resources/guide/rp/textures/wiki/items/ectoplasm.png">
    ここからテクスチャをダウンロード
</Button>

すべてのアイテムテクスチャは `RP/textures/wiki/items/` に保存します。`wiki` は自分の namespace に置き換えてください。ここからさらに好きなサブディレクトリを作れます。
テクスチャ画像はアイテムの _id_ に合わせて命名するのが最適です。今回なら `ectoplasm.png` です。
画像形式は `.png`、サイズは `16x16` が推奨ですが、Minecraft は `.jpg` や `.tga` など他の形式も受け付けます。

フォルダー構成は次のようになります。

<FolderView :paths="[
    'RP/textures/wiki/items/ectoplasm.png'
]" />

### 短い名前

shortname は、テクスチャのフォルダーへのパスに付ける名前のようなもので、どこかでテクスチャを使いたいときに、フォルダーパスの代わりにこれを使います。

すべてのアイテム shortname は `item_texture.json` という 1 つのファイルにまとめます。これは `RP/textures` にあります。ここに shortname の一覧と対応するテクスチャを記述します。

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "texture_data": { ... }
}
```

ここにはトップレベル定義 `texture_data` があり、その中で shortname を定義します。

`texture_data` の下に、アイテム shortname 定義の一覧を置きます。例は次のとおりです。

<CodeHeader>RP/textures/item_texture.json/texture_data</CodeHeader>

```json
"wiki:ectoplasm": {
    "textures": "textures/wiki/items/ectoplasm"
}
```

ここで `wiki:ectoplasm` が shortname で、`textures` にはアイテムへのパスがあります。これは resource pack からの相対パスで、拡張子は含みません。shortname は短く、かつ固有であるべきです。割り当て先のアイテムの namespace と id にするのをおすすめします。

以後、この画像を参照するときは shortname `wiki:ectoplasm` を使います。

### アイコン

最後に、このアイテムへテクスチャを適用するために、アイテム定義へ `minecraft:icon` コンポーネントを追加し、その値に shortname を設定します。

<CodeHeader>ectoplasm.json/minecraft:item/</CodeHeader>

```json
"components": {
    "minecraft:max_stack_size": 16,
    "minecraft:icon": "wiki:ectoplasm"
}
```

これで、アイテムにテクスチャが表示されるはずです。

### アイテム名

最後に追加するのは、アイテムの見やすい名前です。今は `item.wiki:ectoplasm` のように表示されるはずです。これはアイテム名の翻訳キーで、[ローカライズ](/text/text-intro) のために使います。設定するには、言語ファイルに定義するだけです。

このファイルは `RP` と `BP` を作ったときにすでに作成済みなので、そこへ追加するだけです。

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:ectoplasm=Ectoplasm
```

これで、ワールドに入るとアイテムに名前が付きます。

## 概要

これで最初のカスタムアイテム Ectoplasm は完成です。すべて正しくできていれば、ゲーム内の `/give` コマンドで入手でき、クリエイティブインベントリにも表示されます。

フォルダー構成は次のようになります。

<FolderView :paths="[
    'RP/texts/en_US.lang',
    'RP/texts/languages.json',
    'RP/textures/wiki/items/ectoplasm.png',
    'RP/textures/item_texture.json',
    'RP/manifest.json',
    'RP/pack_icon.png',
    'BP/items/ectoplasm.json',
    'BP/texts/en_US.lang',
    'BP/texts/languages.json',
    'BP/manifest.json',
    'BP/pack_icon.png',
]" />

<Spoiler title="完全版 ectoplasm.json">

<CodeHeader>BP/items/ectoplasm.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:ectoplasm",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            "minecraft:max_stack_size": 16,
            "minecraft:icon": "wiki:ectoplasm"
        }
    }
}
```

</Spoiler>

<Spoiler title="完全版 item_texture.json">

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:ectoplasm": {
            "textures": "textures/wiki/items/ectoplasm"
        }
    }
}
```

</Spoiler>

困ったときは [トラブルシューティングページ](/items/troubleshooting-items) を確認してください。それでも解決しない場合は、[サンプルファイル](https://github.com/Bedrock-OSS/bedrock-examples/tree/main/guide) と結果を見比べてください。

## ここまでの進捗

:::tip 学んだこと

-   [x] パックをセットアップした
-   [x] カスタムアイテムを作成した
-   [x] アイテムの behavior ファイルと resource ファイルの書式
-   [x] コンポーネントとは何か、どう使うか
-   [x] アイテムのテクスチャ設定方法
-   [ ] カスタムエンティティを作成する
-   [ ] エンティティのルート、スポーンルール、カスタムレシピを作成する

:::

<Button link="/guide/custom-entity">次へ: カスタムエンティティ</Button>
