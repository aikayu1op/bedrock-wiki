---
title: Project Setup Android
description: Android デバイスでのプロジェクト設定方法を学びます。
category: Extra
prefix: "f. "
nav_order: 6
mentions:
    - Etanarvazac
    - MedicalJewel105
    - TheItsNameless
    - ThomasOrs
    - hhhwi
    - QuazChick
---

## ツール

Android 向けにアドオンを作るのに良いアプリを見つけるのは簡単ではありませんが、できる限り探して Google Play のアプリをまとめました。
Android で開発するには、3 つのアプリを組み合わせる必要があります。

1. デバイスが Android 12 以降なら ZIP アーカイブを作成できるファイルマネージャー。
2. コードエディター（どんなテキストエディターでも動きますが、構文ハイライトが出るのはコードエディターだけです）。
3. 画像エディター（ピクセル単位まで扱えるものは標準搭載されていません）。

### ファイルマネージャー

次のファイルマネージャーは、ZIP 圧縮と `Android/data` フォルダーへの閲覧専用アクセスに対応していることが確認されています。

1. [**Zarchiver**](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) - 幅広い圧縮形式（ZIP、7z、RAR など）に対応した多機能アーカイブマネージャーで、圧縮ファイルの作成、展開、管理ができます。パスワード保護アーカイブ、部分展開、マルチスレッドによる高速処理にも対応しています。ルート化済み端末、または [**Shizuku**](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api) 使用時には、Zarchiver から Android/data やシステムディレクトリ内のファイルを参照・変更できるため、高度なファイル管理に向いています。

2. [**X-Plore**](https://play.google.com/store/apps/details?id=com.lonelycatgames.Xplore) - 2 ペインのツリー表示、内蔵テキストエディター（コード用ではない）、複数の圧縮形式（ZIP、7zip、RAR など）、その他の機能を備えた強力なファイルマネージャーです。ルート化済み端末では `Android/data` と root ディレクトリへの編集アクセスがあります。

3. [**Total Commander**](https://play.google.com/store/apps/details?id=com.ghisler.android.TotalCommander) - そのままでは X-Plore ほど多機能ではありませんが、2 ペイン表示、ZIP/RAR アーカイブ、`Android/data` への閲覧専用アクセスなど、同じような機能をいくつか備えています。Total Commander はツリーではなく一覧表示で、ほかの多くの機能は Google Play のプラグインアプリが必要です。

### コードエディター

1. **Acode:** [無料版](https://play.google.com/store/apps/details?id=com.foxdebug.acodefree) には広告がありますが、課金せずにオフにできます。Personal Access Token を使った GitHub 連携、FTP/SFTP、JSON を含む 100 以上の言語の構文ハイライト、複数ファイル編集用のタブ表示、多数のテーマなどに対応しています。このアプリはオープンソースで、より深いテーマカスタマイズが可能な [有料版](https://play.google.com/store/apps/details?id=com.foxdebug.acode) もあります。

:::info
Acode は、現時点で Android 上で継続的に開発されている、実用的なコードエディターとしてはほぼ唯一の存在です。ほかのエディターはかなり機能が限られているか、長らく放置されて Google Play から消えているものがほとんどです。コードアプリを知っているなら、このガイドに貢献できます。
:::

### 画像エディター

1. [**Pocket Paint**](https://play.google.com/store/apps/details?id=org.catrobat.paintroid) - アドオン作成に必要な最小限の機能を備えた軽量エディターです。使いやすく、ほかの画像の上に別の画像を重ねて読み込めます。JPG（圧縮）、PNG（透明対応の非圧縮）、ORA（複数レイヤー）で保存できます。オープンソースです。
2. [**PixaPencil**](https://f-droid.org/en/packages/com.therealbluepandabear.pixapencil) - 非常に軽量で、広告やアプリ内課金はありません。多彩なツールとカスタマイズ可能なブラシを備え、パレットを内部・外部のどちらにも保存できます。F-Droid でのみ利用可能ですが、手早いテクスチャ作成に向いています。
3. [**Pix2D**](https://play.google.com/store/apps/details?id=com.pix2d.pix2dapp) - シンプルで軽量なアプリです。テクスチャのプレースホルダーを描いたり、小さなテクスチャを編集したりするだけなら最適でしょうし、アニメーション作成も可能です。

## 作業環境

:::tip
この版のガイドでは、"BP" は作業環境内の behavior pack フォルダー、"RP" は resource pack フォルダーを指します。ファイルやディレクトリの場所について、`../<current location>` は「直前の場所から」を意味し、その後に追加の階層が続きます（例: `/one/two/three/file.txt` は `../three/file.txt` と短く表せます）。

端末がルート化されているか、Shizuku を設定済みなら、メインのプロジェクト設定に従って `/Android/data/com.mojang.minecraftpe/files/games/com.mojang` [here](https://wiki.bedrock.dev/guide/project-setup) の development behavior/resource pack フォルダーを直接使えます。そうでない場合は、下の手順に従うか、Shizuku を設定してください。
:::

始める前に作業環境が必要です。ファイルマネージャーを使って内部ストレージへ移動し（多くの場合は `/`、ほかの場合は完全なパス、例: `/storage/emulated/0/` が表示されます。どちらでも構いません）、パックを入れるフォルダーを作成してください。ここでは、完全なディレクトリを `/Minecraft Packs/MyFirstAddon` とします。そこに behavior pack と resource pack 用の 2 つのフォルダーが必要です（例: `../MyFirstAddon/addonBP` と `../MyFirstAddon/addonRP`）。

作業環境ができたら、コードエディターでフォルダーを開けるようにしておきましょう。このガイドでは Acode を使います。

1. Acode を開きます。
2. 左上の 3 本線のファイルブラウザボタンをタップし、`Open folder` を選びます。
3. `Add a storage` をタップし、続けて `select folder` を選びます。
4. 端末のファイルブラウザーが開いたら、プロジェクトの _親_ フォルダー（ここでは `/Minecraft Packs`）まで移動し、`Use this folder` をタップします。デバイスが Acode のアクセス許可を求めたら、`Allow` をタップします。
5. Acode に戻ります。`OK` をタップするとフォルダーが一覧に追加されます。それをタップし、画面下部の `Select Folder` を押します。
6. 以後、ファイルブラウザー（左上の 3 本線）を開くと、フォルダーが一覧に表示されます。これでアドオンの behavior pack と resource pack のフォルダーへすばやくアクセスできます。ファイルブラウザーはツリー表示でアクティブな作業環境を表示します。

:::tip
ファイルブラウザーでフォルダーを長押しすると、その中に新しいファイルやフォルダーを作成できます。
:::

## Shizuku

:::tip
Shizuku は Dev mode を有効にした状態でのみ動作し、再起動後に起動し直す必要があります。
また、Shizuku を使うには Android 11 以上が必要です。
:::

このセクションは任意です。
端末を root 化せずに開発用フォルダーを使いたい場合、Shizuku が役立つかもしれません。Shizuku が動作していて、[**Zarchiver**](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) のような対応ファイルマネージャーを使っていれば、Android/data へ書き込めます。

まずアプリを設定します。最初に開発者モードを有効にしてください。この手順は機種によって異なります。

開発者向けオプションを開き、USB デバッグとワイヤレスデバッグを有効にします。
Shizuku を開き、`Pairing` を押します。
Developer options
下へスクロールしてワイヤレスデバッグを見つけ、有効にしてからそれをタップします。
`pair with code` を押し、通知に表示されたコードを入力します。

これで Shizuku を起動してください。

## BP と RP のマニフェスト

:::warning
ここから先は、特に明記がない限り、すべてのファイルとフォルダーに厳密な名前があります。名前の間違いは、よくあるエラーの原因です。提示された例に従って、作業内容を丁寧に確認してください。まだ作成していないファイルやフォルダーがある場合は、適切な場所に作成してください。

ファイルマネージャーや一部のテキスト／コードアプリで新規ファイルを作ると、ファイル名の末尾に `.txt` が自動で付けられることがあります。意図どおりに動作させるには、この `.txt` を必ず削除してください。ファイル名と同じく、拡張子の間違いもよくあるエラーの原因です。Acode を使っている場合、`untitled.txt` は `untitled` だけでなく全体がハイライトされます。これはプログラミング用ファイル名の一般的な扱いです。
:::

マニフェストファイルは、Minecraft がパックを識別するために使うファイルです。各パックには 1 つだけマニフェストがあります。正しく書式設定されたマニフェストを持つフォルダーは Minecraft に表示されます。追加コンテンツを入れる前に、まず「最小構成」のパックが表示されることを確認しましょう。マニフェストは `JSON` で書かれています。JSON に馴染みがない場合は、[ここ](/guide/understanding-json) で詳しく学べます。

アドオンの behavior pack フォルダーに `manifest.json` という新しいテキストファイルを作成してください。まず、次のコードを `manifest.json` にコピーして貼り付けます。マニフェストファイルの詳細は、ファイル作成後に解説します。

<codeHeader>BP/manifest.json</codeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "pack.name",
        "description": "pack.description",
        "uuid": "...",
        "version": [0, 0, 1],
        "min_engine_version": [1, 16, 0]
    },
    "modules": [
        {
            "type": "data",
            "uuid": "...",
            "version": [0, 0, 1]
        }
    ]
}
```

次に、resource pack フォルダーにも別の `manifest.json` ファイルを作成します。ここでも、次のコードを新しいファイルにコピーして貼り付けます。

<codeHeader>RP/manifest.json</codeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "pack.name",
        "description": "pack.description",
        "uuid": "...",
        "version": [0, 0, 1],
        "min_engine_version": [1, 16, 0]
    },
    "modules": [
        {
            "type": "resources",
            "uuid": "...",
            "version": [0, 0, 1]
        }
    ]
}
```

## マニフェストの内訳

-   `format_version` は、マニフェストが書かれている構文のバージョンを定義します。Version 2 が最新の安定版です。必ずこれを使ってください。
-   `name` はパックの名前です。後で他の言語に翻訳しやすいように、これらを後で「コード形式」で定義します。
-   `description` は、ゲーム内で `name` の下に表示される短い説明です。これも後で「コード形式」で定義します。
-   `uuid` は、ほかのパックから自分のパックを識別するために必要です。後で詳しく説明します。説明後は、`...` を UUID に置き換えてください。
-   `version` は、文字どおりアドオンのバージョンです。アドオンを完成させたら、いつでも `[1, 0, 0]` に変更できます。ただし、モバイルで変更を加える間はホットフィックス用の番号を使うほうが簡単です。
-   `min_engine_version` は、パックが動作するために必要な Minecraft の最小バージョンを示します。たとえば、コンクリートを含むクラフトレシピがある場合、その版にコンクリートが存在しない Minecraft 1.5 では動作しません。
-   `modules` の下にある `type` フィールドは、Minecraft にそのパックの種類を伝えます。BP の `data` は behavior pack を、RP の `resources` は resource pack を意味します。

## UUID の内訳

UUID は **U**niversally **U**nique **ID**entifier の略で、Minecraft などのプログラムにパックを識別させたり、ほかのパックと区別したりするためのものです。Version 4 UUID（UUID-4）は通常 `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` という形式で、英数字のランダムな文字列から作られます。たとえば `5c830391-0937-44d6-9774-406de66b6984` です。

**同じ UUID を 2 回使ってはいけません。** マニフェストに必要な UUID は [Online UUID Generator Tool](https://www.uuidgenerator.net/version4) で生成できます。各マニフェストには 2 つずつ異なる UUID が必要です。したがって、両方のマニフェストの `...` を置き換えるために、合計 4 つの異なる UUID を用意してください。完了したら、各 UUID エントリは次のようになります。`"uuid": "5c830391-0937-44d6-9774-406de66b6984`

## パックアイコン

ほかのパックにアイコンがあるのを見たことがありますか？ それは、アドオンがゲーム内でどう見えるかをすばやく見分けるための画像ファイルです。低解像度の正方形 PNG 画像を持っていますか？ それなら使えます。なければ、このサンプルアイコンを使ってください。

<WikiImage src="/assets/images/guide/project-setup/pack_icon.png" alt="Pack Icon" pixelated />

<Button link="/assets/images/guide/project-setup/pack_icon.png" download>
    画像をダウンロード
</Button>

使いたい画像のコピーを behavior pack と resource pack の両方に置く必要があります。画像が正しく読み込まれるように、ファイル名は `pack_icon.png` にしてください。

## 言語ファイル

以前、パック名と説明をコード形式で定義すると言いましたよね。今がそのときです。アドオンのセットアップに必要な最後の作業だからです。新しいファイルを 4 つ、フォルダーを 2 つ作成する必要があります（各パックにつきファイル 2 つとフォルダー 1 つ）。Minecraft のローカライズの扱いについては [ここ](/text/text-intro) で詳しく学べます。定義には `§` 記号を使って書式を付けることもできます。色と書式の一覧は [ここ](https://htmlcolorcodes.com/minecraft-color-codes/) で確認できます。書式を使う場合は、切り替えの際に必ず `§r` でリセットしてください。たとえば `§kl My pack l` は「My pack」を読めなくしますが、`§kl §rMy pack §kl` なら正しく読めます。

<codeHeader>BP/texts/en_US.lang</codeHeader>

```lang
pack.name=§2My §lFIRST §r§2Add-on's Behavior Pack!
pack.description=This add-on is made by a Wiki Contributor!
```

<codeHeader>BP/texts/languages.json</codeHeader>

```json
["en_US"]
```

<codeHeader>RP/texts/en_US.lang</codeHeader>

```lang
pack.name=§2My §lFIRST §r§2Add-on's Resource Pack!
pack.description=This add-on is made by a Wiki Contributor!
```

<codeHeader>RP/texts/languages.json</codeHeader>

```json
["en_US"]
```

## アドオンのインポート

必要なコンテンツがすべて揃ったので、Minecraft にインポートします。そのために、拡張子が `.mcaddon` のファイルを作成します。

1. お好みのファイルマネージャーを開き、behavior pack と resource pack が入っているフォルダーへ移動します。
2. 複数選択で両方のパックを選び、ZIP ファイルを作成します。
3. ファイル名を聞かれたら、`.zip` を `.mcaddon` に変更してください。
   ![](zip-addon.png)
4. ファイルマネージャーの処理が終わると、Minecraft のアイコンが付いた `MCADDON` ファイルになります。このファイルをタップすると Minecraft が起動します。

正しくできていれば、Minecraft に両方のパックのバナーが表示されます。最初に `Importing...`、その後に `Successfully imported "<your pack name>"` が表示されます。インポートメッセージが見えない場合は、`Settings > Storage` で確認することもできます。どちらのパックも見えない場合は、[トラブルシューティングガイド](/guide/troubleshooting) を確認してください。

## コンテンツログをオンにする

:::warning
コンテンツログは、アドオンのデバッグで最も役立つツールです。この手順は飛ばさないでください。
:::

![](/assets/images/guide/content_log.png)

Content Log は非常に重要なデバッグツールなので、常にオンにしておくべきです。

`settings > creator` でコンテンツログの設定を両方ともオンにしてください。これにより、パックを適用したワールドに入ったときに、アドオン内のエラーが表示されます。ゲーム内では `ctrl+h` を押すことでコンテンツログ GUI を開けます。コンテンツログについて詳しくは [ここ](/guide/troubleshooting) を参照してください。

## テスト用ワールドの作成

ここで、新しいアドオンをテストするワールドを作成します。

1. `**Create new world**` をクリックします。

2. 次の設定になっていることを確認します。

    ![](/assets/images/guide/project-setup/settings_1.png)
    ![](/assets/images/guide/project-setup/settings_2.png)

3. それから behavior pack と resource pack を有効化します。パックを選んで `apply` をクリックしてください。

4. `**Create**` をクリックします。

## 最後に

**このページを完了したら、プロジェクトは次のようになっているはずです。**

今後は `com.mojang/development_behavior_packs/guide_RP/` を `RP`、`com.mojang/development_behavior_packs/guide_BP/` を `BP` と表記します。

<FolderView :paths="[
	'com.mojang/development_resource_packs/guide_RP/manifest.json',
	'com.mojang/development_resource_packs/guide_RP/pack_icon.png',
	'com.mojang/development_resource_packs/guide_RP/texts/en_US.lang',
	'com.mojang/development_resource_packs/guide_RP/texts/languages.json',
	'com.mojang/development_behavior_packs/guide_BP/manifest.json',
	'com.mojang/development_behavior_packs/guide_BP/pack_icon.png',
	'com.mojang/development_behavior_packs/guide_BP/texts/en_US.lang',
	'com.mojang/development_behavior_packs/guide_BP/texts/languages.json',
]" />

## 学んだこと

:::tip 学んだこと:

-   `com.mojang` フォルダーが何で、どこにあり、何が入っているか
-   モバイル用ワークスペースの設定方法
-   `manifest.json` ファイルとは何か
-   UUID とは何か、どう使うか
-   アドオン用アイコンの作り方
-   `.lang` ファイルとは何か

:::

## ここまでの進捗

-   [x] パックをセットアップした
-   [ ] カスタムアイテムを作成する
-   [ ] カスタムエンティティを作成する
-   [ ] カスタムブロックを作成する
