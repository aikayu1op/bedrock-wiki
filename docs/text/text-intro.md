---
title: テキストとローカライズの入門
description: Minecraft は、世界中のさまざまな言語に完全対応したテキストを持つゲームです。
category: General
nav_order: 1
mentions:
    - ThijsHankelMC
    - SirLich
    - aexer0e
    - MedicalJewel105
    - Lufurrius
    - Fabrimat
    - TheDoctor15
    - Hatchibombotar
    - ChibiMango
    - SmokeyStack
    - Sprunkles
    - QuazChick
---

Minecraft は、世界中のさまざまな言語に完全対応したテキストを持つゲームです。これを実現するために、Minecraft では内部の **翻訳キー** に対して、言語ごとに値を割り当てる仕組みが使われています。Minecraft はカスタムエンティティ、アイテム、ブロック用の翻訳キーを生成するので、それらにリソースパック内でローカライズされた名前を割り当てるのは私たちの役割です。

## 言語ファイル

### 保存場所

言語ファイルは通常、リソースパック内の "texts" フォルダに `.lang` 拡張子のファイルとして配置します。これらのファイルはビヘイビアパックにも置けますが、その場合に翻訳できるテキストは、パックマニフェストの名前と説明だけです。

<FolderView :paths="[
  'RP/texts/en_US.lang',
  'RP/texts/languages.json',
  'RP/manifest.json'
]"
></FolderView>

Minecraft は現在 29 言語をサポートしており、詳しくは [§ バニラの言語](/text/text-intro#vanilla-languages) を参照してください。

### 形式

言語ファイルの形式はかなり単純です。翻訳は `=` で区切られたキーと値のペアとして記述し、キーが翻訳キー、値が文字列になります。値に改行文字を含めることはできません。

```lang
wiki.example_translation.line_1=The first line!
wiki.example_translation.line_2=Some more information following the first line.
```

コメントは、2 つの `#` (`##`) を使って、行コメントとしてもインラインコメントとしても追加できます。`#` 以降のすべてのテキストは、次の行までコメントとして扱われます。

:::warning
インラインコメントの末尾の空白は削除されません。コメントを字下げしたい場合は、Tab キーを使ってください。
:::

```lang
## Translator note: I thought this would be funny to put here.
item.flint_and_steel.name=Flint and Steve	##[sic]
```

翻訳には、テキストの代わりに置換記号を含めることができます。置換記号は、順序付き (`%1`, `%2` など) にも、順序なし (`%s`) にもできます。バニラの翻訳では値はゲームが埋めますが、プレイヤーは [`/tellraw`](/text/rawtext) のような生の JSON テキスト形式を使うコマンドで、置換記号の値を手動で設定できます。

```lang
commands.op.success=Opped: %s
immersive_reader.book_page_header=Page %1 of %2
```

### 用途

ローカライズは、テキストを使えるほぼあらゆる場所で行えます。たとえば次のような場所です。

-   パック名と説明
-   エンティティ、アイテム、またはブロックの名前
-   本のページ
-   看板の行
-   `/tellraw` と `/titleraw` コマンド
-   ダイアログ内のテキスト

ただし、金床で改名したアイテムなど、一部のテキストは翻訳できません。

## ローカライズ

:::tip
パックが対応する主要言語ごとに、言語ファイルのコピーを用意するのがよい習慣です。たとえば英語を完全にサポートするなら、`en_US.lang` と `en_GB.lang` の両方を作成し、それぞれ米国英語と英国英語をカバーします。
:::

言語ファイルを編集するときは、`texts` フォルダに `languages.json` ファイルも追加し、翻訳対象にする各言語を配列で記述する必要があります。これによって、Minecraft はその言語にローカライズを適用すべきだと認識します。

<CodeHeader>RP/texts/languages.json</CodeHeader>

```json
["en_US", "en_GB", "fr_FR"]
```

### カスタム言語

グローバルリソースパックでは、`languages.json` と `language_names.json` ファイルを使ってカスタム言語を導入できます。パックをグローバルに適用すると、ゲーム内設定の「言語」タブで言語を変更できるようになります。

以下の例では、2 つの完全に機能する言語ファイル、`xx_XX.lang` と `yy_YY.lang` があると仮定します。

<CodeHeader>RP/texts/languages.json</CodeHeader>

```json
["xx_XX", "yy_YY"]
```

`language_names.json` も配列ですが、こちらは言語の表示名を定義するためのものです。

<CodeHeader>RP/texts/language_names.json</CodeHeader>

```json
[
    ["xx_XX", "New Language (Custom Language #1)"],
    ["yy_YY", "Wiki-Speak (Custom Language #2)"]
]
```

:::warning
カスタム言語を使っている場合は、その言語から別の言語に切り替えてから、属しているリソースパックを無効化してください。そうしないと Minecraft がクラッシュします。
:::

### ツール

Microsoft があなたの `.lang` ファイルをローカライズする場合、`.lang` ファイルには満たすべき特定の技術要件があります。

-   コメントの前には &lt;tab&gt;# を入れてください (**スペースではありません**)。
-   改行は Unix 形式ではなく、Windows 形式 (CR+LF) にしてください。
-   重複したキーを含めてはいけません。
-   翻訳しやすいように、文字列にはコメントを付けてください。

これを補助するために、無料のブラウザベースの [LangUtil ツール](https://langutil.bedrockexplorer.com) を使えます。

### バニラの言語

以下は、Minecraft が標準でサポートしている 29 言語の一覧です。

| 言語 ID | 言語名                | 国            |
| ------- | --------------------- | ------------- |
| id_ID   | インドネシア語        | インドネシア  |
| da_DK   | デンマーク語          | デンマーク    |
| de_DE   | ドイツ語              | ドイツ        |
| en_GB   | 英語                  | イギリス      |
| en_US   | 英語                  | 北米          |
| es_ES   | スペイン語            | スペイン      |
| es_MX   | メキシコスペイン語    | メキシコ      |
| fr_CA   | カナダフランス語      | カナダ        |
| fr_FR   | フランス語            | フランス      |
| it_IT   | イタリア語            | イタリア      |
| hu_HU   | ハンガリー語          | ハンガリー    |
| nl_NL   | オランダ語            | オランダ      |
| nb_NO   | ブークモール語        | ノルウェー    |
| pl_PL   | ポーランド語          | ポーランド    |
| pt_BR   | ブラジルポルトガル語  | ブラジル      |
| pt_PT   | ポルトガル語          | ポルトガル    |
| sk_SK   | スロバキア語          | スロバキア    |
| fi_FI   | フィンランド語        | フィンランド  |
| sv_SE   | スウェーデン語        | スウェーデン  |
| tr_TR   | トルコ語              | トルコ        |
| cs_CZ   | チェコ語              | チェコ共和国  |
| el_GR   | ギリシャ語            | ギリシャ      |
| bg_BG   | ブルガリア語          | ブルガリア    |
| ru_RU   | ロシア語              | ロシア        |
| uk_UA   | ウクライナ語          | ウクライナ    |
| ja_JP   | 日本語                | 日本          |
| zh_CN   | 中国語（簡体字）      | 中国          |
| zh_TW   | 中国語（繁体字）      | 台湾          |
| ko_KR   | 韓国語                | 韓国          |
