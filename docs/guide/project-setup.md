---
title: プロジェクトのセットアップ
category: Guide
description: プロジェクト用フォルダーの設定方法を学びます。
nav_order: 4
prefix: "4. "
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - Dreamedc2015
    - BlueFrog130
    - sermah
    - cda94581
    - MedicalJewel105
    - TheItsNameless
    - ThijsHankelMC
    - TheHyperWhale
    - stirante
    - ChibiMango
    - Etanarvazac
    - aym-i
    - ThomasOrs
    - QuazChick
---

## はじめに

このページでは、最初の「動く」アドオンを作成し、ゲーム内で確認するために必要な手順を案内します。Android で始める場合は、代わりに次のガイドに従ってください。

<Button link="./project-setup-android">Android ガイド</Button>

## com.mojang フォルダー

`com.mojang` フォルダーは、Minecraft がデータ（アドオン、ワールド、プレイヤー情報など）を保存する特別なフォルダーです。Minecraft はこの場所を理解しており、私たちがアクセスしたり作成したりするファイルはすべて、このフォルダー内のどこかに配置されます。

この `com.mojang` フォルダーへのショートカットをデスクトップまたはモバイル端末に作成しておくと、いつでも簡単にアクセスできます。`com.mojang` フォルダーの正確な場所は、デバイスの OS によって異なります。

### Windows

Windows では、Minecraft に異なる Xbox アカウントでログインしたときに、異なるコンテンツ（ワールドなど）や設定を扱えるように、複数の `com.mojang` フォルダーがあります。
開発中のパックは、次の場所にある「Shared」 `com.mojang` フォルダーに保存してください。

`C:\Users\<USERNAME>\AppData\Roaming\Minecraft Bedrock\Users\Shared\games\com.mojang`{lang=xml}

:::tip パス変数の利用
`APPDATA` 変数を使うと、`AppData\Roaming` フォルダーへ直接移動できます。

ファイルエクスプローラーのアドレスバーに `%APPDATA%\Minecraft Bedrock\Users\Shared\games\com.mojang` を入力または貼り付けると、`com.mojang` フォルダーを開けます。
:::

### Android

Android 11 以前: `Phone > games > com.mojang`

Android 12 以降: `Phone > Android > data > com.mojang.minecraftpe > files > games > com.mojang`

### ChromeOS

ファイル一覧で `com.mojang` を見られるようにするには、Minecraft の設定で `File Storage Location` を `External` に変更してください。

-   `Minecraft Settings` を開きます。
-   `Settings > General > Storage` に移動します。
-   `File Storage Location` を `External` に変更します。

その後、Android サブシステム内から次の場所にアクセスできます。

`My Files > Play Files > Android > data > com.mojang.minecraftpe > files > games > com.mojang`

### iOS

`My iDevice > Minecraft > games > com.mojang`

### 開発用パック

アドオンは `development_behavior_packs` と `development_resource_packs` で開発します。
これらのフォルダー内で変更を加えたら、_パックを適用したワールドをいったん退出して再参加する_ ことで、コンテンツを自動的に再読み込みできます。
これにより、Minecraft を再起動せずにアドオンをすばやくテストできます。

:::tip すべてを再読み込み
ワールドを再読み込みする、より素早いショートカットとして `/reload all` コマンドがあります。
:::

一方で `resource_packs` と `behavior_packs` には、`.mcpack` でインポートされたものを含む安定版のアドオンが入っています。ここは今は無視してかまいません。

## 作業環境

:::tip
このガイドでは、BP は `development_behavior_packs` に作成したフォルダー（「behavior pack」）、RP は `development_resource_packs` に作成したフォルダー（「resource pack」）を指します。
:::

まず、適切な場所に必要なフォルダーを作成し、作業環境を準備する必要があります。
_このガイドの残りは VSCode を使う前提で説明します。ほかのエディターでも同様に進められます。_

Visual Studio Code で最初のアドオン用ワークスペースを作りましょう。

1. VSCode を開きます（_Visual Studio Code、コードエディター_）
2. `development_resource_packs` に `your_pack_name_RP` というフォルダーを作成します。**このフォルダーを `RP` と呼びます。**
3. `development_behavior_packs` に `your_pack_name_BP` というフォルダーを作成します。**このフォルダーを `BP` と呼びます。**
4. `File > Add folder to workspace...` を開き、`BP` を選択します。`RP` でも同じ操作を行います。
5. `File > Save Workspace as...` を押して、ワークスペースファイルをデスクトップに保存します。今後アドオンを作業するときは、このワークスペースをダブルクリックして開くだけで、BP と RP の両方にすばやくアクセスできます。

## BP マニフェスト

:::tip ファイルの作成
このガイドでは、特定の名前のファイルを特定のフォルダーに作成するよう指示されることがよくあります。
フォルダーがまだ存在しない場合は、作成してください。
:::

マニフェストは、Minecraft にパックを識別させるためのファイルです。各パックにはマニフェストが 1 つあります。正しく書式設定されたマニフェストを持つフォルダーは Minecraft に表示され、追加コンテンツを入れる前の「最小構成」のパックとみなされます。

マニフェストファイルは JSON で書かれます。もし馴染みがなければ、[ここ](/guide/understanding-json) で詳しく学べます。

まず、BP フォルダーを右クリックして `New File` を選び、新しいファイルを作成してください。
ファイル名を `manifest.json` にし、次のコードを貼り付けます。

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "format_version": 3,
    "header": {
        "name": "pack.name",
        "description": "pack.description",
        "uuid": "...",
        "version": "1.0.0",
        "min_engine_version": "1.26.10"
    },
    "modules": [
        {
            "type": "data",
            "uuid": "...",
            "version": "1.0.0"
        }
    ],
    "metadata": {
        "authors": ["Your Name"],
        "product_type": "addon"
    }
}
```

### マニフェストの解説

-   `format_version` は、使っているマニフェスト JSON の形式のバージョンを定義します。Version 3 が最新の安定版なので、これを使ってください。

-   `name` は behavior pack の名前です。`description` はゲーム内でその下に表示されます。

    これらの値は後で他の言語へ翻訳できるよう、_ローカライズキー_ として定義しています。
    ローカライズについて詳しくは [ここ](/text/text-intro) を参照してください。

-   `uuid` フィールドは **必須** で、下で詳しく説明します。

-   `version` はアドオンのバージョンを表します。

    これにより、ユーザーはアドオンの更新版をインポートしても `Duplicate pack detected` エラーを避けられます。
    ただし、アドオンを `development_*_packs` フォルダーに置き、非公開ワールドでのみ使うなら、バージョンを変更する必要はありません。

-   `min_engine_version` は、アドオンを使える Minecraft クライアントの最小バージョンを定義します。
    ここで指定する数字は、後方互換性を重視していない限り、ゲームの現在バージョンと一致させてください。

-   `modules` では、`type` が `"data"`{lang=json} のモジュールが追加されています。これはこのパックが _behavior pack_ であることを示します。

-   `metadata` では、`product_type` により、このアドオンでワールドの実績を有効化できます。`"addon"`{lang=json} を指定する必要があります。

### UUID の解説

UUID（_Universally Unique Identifier_）は、他のプログラム（この場合は Minecraft）にパックを識別させるためのものです。例として `5c830391-0937-44d6-9774-406de66b6984` のような形式になります。

**同じ UUID を 2 回使ってはいけません。** 自分で UUID を生成するには [ここ](https://www.uuidgenerator.net/version4) を使うか、VSCode を使っているなら [この](https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator) 拡張機能を入れることもできます。`bridge.` など、UUID を自動生成するツールもあります。各マニフェストファイルでは少なくとも 2 つの異なる UUID を使います。複数の `modules` を持つパック（スクリプト追加時など）では、それ以上必要になります。

アドオンを正しく動かすために、BP の `manifest.json` の各 `"..."`{lang=json} に貼り付ける 2 つの新しい UUID を生成してください。
完了すると、次のようになります。

```json
"uuid": "5c830391-0937-44d6-9774-406de66b6984"
```

## RP マニフェスト

次の手順は、RP 用の `manifest.json` を作成することです。
resource pack のマニフェスト形式は BP とほぼ同じですが、モジュールの `type` が `"resources"`{lang=json} になっており、これがそのパックが _resource pack_ であることを示します。
さらに、`pack_scope` を `"world"`{lang=json} に指定して、ワールド外では有効化できないようにします。

新しく作成した `RP/manifest.json` に次のコードをコピーし、自分の UUID を入れてください。

<CodeHeader>RP/manifest.json</CodeHeader>

```json
{
    "format_version": 3,
    "header": {
        "name": "pack.name",
        "description": "pack.description",
        "uuid": "...",
        "version": "1.0.0",
        "min_engine_version": "1.26.10",
        "pack_scope": "world" // Can be "any" (default), "global" or "world"
    },
    "modules": [
        {
            "type": "resources",
            "uuid": "...",
            "version": "1.0.0"
        }
    ],
    "metadata": {
        "authors": ["Your Name"],
        "product_type": "addon"
    },
    "capabilities": ["pbr"] // Allows Vibrant Visuals to be enabled while this pack is activated.
}
```

## パックアイコン

パックアイコンは、アドオンがゲーム内でどのように見えるかを示す画像ファイルです。低解像度の正方形画像があれば、それを使えます。なければ、このサンプルアイコンをダウンロードして使ってください。

<WikiImage src="pack_icon.png" alt="Pack Icon" pixelated />

<Button link="pack_icon.png" download>
    画像をダウンロード
</Button>

使いたい画像のコピーを RP と BP の両方に置いてください。画像ファイル名は `pack_icon.png` にする必要があります。

## 言語ファイル

最後に、アドオンの言語対応を設定します。
RP と BP の両方に言語ファイルを作成する必要があります（BP の翻訳は BP マニフェストでのみ使われ、**アイテム名などその他すべての翻訳は RP に置きます**）。
Minecraft のローカライズの仕組みについて詳しくは [ここ](/text/text-intro) を参照してください。

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
pack.name=Wiki Resource Pack
pack.description=A Ghostly Guide
```

<CodeHeader>BP/texts/en_US.lang</CodeHeader>

```lang
pack.name=Wiki Behavior Pack
pack.description=A Ghostly Guide
```

<CodeHeader>RP/texts/languages.json</CodeHeader>

```json
["en_US"]
```

<CodeHeader>BP/texts/languages.json</CodeHeader>

```json
["en_US"]
```

## 作業の確認

すべて正しくできていれば、パックは Minecraft に表示されるはずです。パックが見えない場合は、[トラブルシューティングガイド](/guide/troubleshooting) を確認してください。

![](active_pack.png)

## コンテンツログを有効にする

:::warning コンテンツログ
コンテンツログは、アドオンのデバッグで最も役立つツールです。この手順は飛ばさないでください。
:::

![](/assets/images/guide/content_log.png)

Content Log は非常に重要なデバッグツールなので、常に有効にしておくべきです。

`Settings > Creator` でコンテンツログの設定を両方ともオンにしてください。
これにより、パックを適用したワールドに入ったときに、アドオン内のエラーが表示されます。

ゲーム内では `Ctrl + H` を押すか、creator 設定パネルの `Content Log History` を押すことでコンテンツログの GUI を開けます。
コンテンツログについて詳しくは [ここ](/guide/troubleshooting) を参照してください。

## テスト用ワールドの作成

ここで、新しいアドオンをテストするワールドを作成します。

1. `**Create new world**` をクリックします。

2. その後、`Available` タブから behavior pack と resource pack を有効化します。

3. `Create` をクリックします。

## 概要

**このページを完了したら、プロジェクトは次のようになっているはずです。**

今後は `com.mojang/development_behavior_packs/guide_RP` を `RP`、`com.mojang/development_behavior_packs/guide_BP` を `BP` と表記します。

<FolderView :paths="[
	'com.mojang/development_behavior_packs/guide_BP/texts/en_US.lang',
	'com.mojang/development_behavior_packs/guide_BP/texts/languages.json',
	'com.mojang/development_behavior_packs/guide_BP/manifest.json',
	'com.mojang/development_behavior_packs/guide_BP/pack_icon.png',
	'com.mojang/development_resource_packs/guide_RP/texts/en_US.lang',
	'com.mojang/development_resource_packs/guide_RP/texts/languages.json',
	'com.mojang/development_resource_packs/guide_RP/manifest.json',
	'com.mojang/development_resource_packs/guide_RP/pack_icon.png',
]" />

## 学んだこと

:::tip 学んだこと:

-   `com.mojang` フォルダーが何で、どこにあり、何が入っているか
-   ワークスペースの設定方法
-   `manifest.json` ファイルとは何か
-   UUID の使い方
-   アドオン用アイコンの作り方
-   `.lang` ファイルとは何か

:::

## ここまでの進捗

:::tip ここまで学んだこと

-   [x] パックをセットアップした
-   [ ] カスタムアイテムを作成する
-   [ ] カスタムエンティティを作成する
-   [ ] エンティティのドロップ、スポーンルール、カスタムレシピを作成する

:::

<Button link="/guide/custom-item">次へ: カスタムアイテム</Button>
