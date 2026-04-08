---
title: ファイル形式
description: Minecraft が対応しているファイル形式です。
mentions:
    - Ciosciaa
    - SirLich
---

_Minecraft_ には、コンテンツを取り込むためのさまざまなファイル形式があります。_Minecraft_ のファイルはすべて、`mc…` 拡張子に変更された ZIP アーカイブです。これらのアーカイブは、現在次の 3 種類に分けられます。

-   **レベル (`mcworld` と `mcproject`)**: ワールドやプロジェクトのレベルデータと関連リソース
-   **アセット (`mcpack` と `mctemplate`)**: ワールド用の見た目や補助アセット
-   **複合アーカイブ (`mcaddon` と `mceditoraddon`)**: 1つまでのワールドまたはプロジェクトと、任意数のアセット種別を取り込むために使います

Minecraft の各ファイル形式は、任意のファイルとして開くことで Minecraft を起動し、コンテンツを取り込めます。パッケージは取り込まれると、自動的に構成ファイルとフォルダーに展開されます。すでに起動していなければ、ほとんどの形式は通常モードで Minecraft を起動しますが、`mcproject` と `mceditoraddon` は Editor モードで起動します。

## レベル

レベルは、通常のワールドや Editor プロジェクトのセーブデータとリソースを表します。モードに関係なく、すべてのレベルは `com.mojang` ディレクトリ内の `minecraftWorlds` に取り込まれます。

既存の保存済みレベルと完全に同一のものを取り込むと、重複した保存済みレベルが作成されます。複合アーカイブに複数のレベルが含まれている場合、ネストされた複合アーカイブを含めて、取り込まれるレベルは1つだけです。

### ワールド

`mcworld`
個別のワールドをまとめたアーカイブ

ワールドアーカイブは、いくつかの方法で作成できます。

-   ワールドディレクトリの _中身_ を ZIP 化し、拡張子を `zip` から `mcworld` に変更する
-   ワールドのゲーム設定画面にある "Export World" ボタンを使う
-   Editor モードで、File → Export as → Playable world のメニューからワールドを書き出す。ワールドは `com.mojang` フォルダー内の `projectbackups` ディレクトリに保存されます。
-   Editor モードで、`/project export world` コマンドを実行する。ワールドは `com.mojang` フォルダー内の `projectbackups` ディレクトリに保存されます。

_Minecraft_ が Editor モードで起動している状態でワールドパッケージを取り込むと、ワールドはプロジェクトとして取り込まれます。取り込まれたワールドは Editor モード以外では使えなくなるため、プレイ用にワールドとして再書き出しする必要があります。ワールドアーカイブに同梱された Editor 拡張パックは、Editor モード外での取り込みでも保持されます。

### プロジェクト

`mcproject`
個別の Editor プロジェクトをまとめたアーカイブ

プロジェクトアーカイブは、2つの方法で作成できます。

-   プロジェクトディレクトリの _中身_ を ZIP 化し、拡張子を `zip` から `mcproject` に変更する。
-   ワールドのゲーム設定画面にある "Export Project" ボタンを使う
-   Editor モードで、`/project export project` コマンドを実行する。ワールドは `com.mojang` フォルダー内の `projectbackups` ディレクトリに保存されます。

_Minecraft_ が起動していなければ、`mcproject` ファイルを開くと Editor モードが起動します。_Minecraft_ が起動していても Editor モードでない場合、`mcproject` の取り込みは失敗します。

## アセット

アセットアーカイブは、レベル以外のさまざまなコンテンツを 1つずつまとめたものです。

-   ビヘイビアパック
-   リソースパック
-   スキンパック
-   ワールドテンプレート

すべてのアセットアーカイブには、内容を説明する manifest が含まれています。同じ種類の既存アセットアーカイブと、manifest の UUID と version が完全に一致すると、取り込みは失敗します。なお、ビヘイビアパックとリソースパックは UUID / version の空間を共有します。ワールド、プロジェクト、テンプレート内に自己完結しているビヘイビアパックとリソースパックは、取り込み時の重複判定には含まれません。

`mcpack` と `mctemplate` のどちらも、機能的には同じように動作するようです。何がインストールされているのか分かりやすくするため、ビヘイビアパック、リソースパック、スキンパックには `mcpack` を、ワールドテンプレートには `mctemplate` を使うのが推奨です。複合アーカイブには、任意数のアセットアーカイブを含められます。

### Packs

`mcpack`
Package representing an individual behavior pack, resource pack, skin pack, or world template. It's recommended only to use `mctemplate` for behavior packs, resource packs, or skin packs.

Packs are only created manually, by zipping the contents of a behavior pack, resource pack, or skin pack directory and renaming the extension from `zip` to `mcpack`. Behavior and resource packs are installed globally and do not conflict with matching behavior or resource packs installed in worlds, projects, or templates.

#### Behavior Packs

Behavior packs are attached to servers to change or extend gameplay. Behavior packs are installed to the `behavior_packs` directory in the `com.mojang` folder.

Development behavior packs must be placed in the `development_behavior_packs` directory under `com.mojang` manually.

#### Resource Packs

Resource packs are attached to clients to affect sounds, visuals, etc. Resource packs are installed to the `resource_packs` directory in the `com.mojang` folder.

Development resource packs must be placed in the `development_resource_packs` directory under `com.mojang` manually.

#### Skin Packs

Skin packs are client-only packs for custom skins. Skin packs are installed to the `skin_packs` directory in the `com.mojang` folder.

Development skin packs must be placed in the `development_skin_packs` directory under `com.mojang` manually, but this feature appears non-functional.

### World Templates

`mctemplate`
Package representing an individual behavior pack, resource pack, skin pack, or world template. It's recommended only to use `mctemplate` for world templates.

World templates are installed to the `world_templates` directory under `com.mojang`. World templates can be constructed in a few different ways:

-   Zipping the _contents_ of a world directory, adding a world template manifest, and renaming the extension from `zip` to `mctemplate`
-   In Editor mode, using the "Export Template" button on the Game settings screen for a world
-   In Editor mode, running the `/project export template` command. The world will be saved to the `projectbackups` directory in the `com.mojang` folder.

## Composites

Composite archives are used to import up to _one_ level archive and any number or combination of asset archives in a single import action. In general, contents to a composite must be packaged. Directories can also be given _on the top level_ of a composite archive for importing asset types (behavior packs, resource packs, skin packs, and world templates) without needing to pre-package them. Nested sub-directories for organization may not be used.

Composite contents are treated as usual. For example, importing a `mcaddon` containing a `mcworld` while in Editor mode will import the world as a project.

Composite archives may also contain any number or nesting of other composite archives, even across _Minecraft_ modes. Nested composite archives cannot be used to get around the singular world import restriction.

Composites can only be constructed manually by zipping archives and asset types.

### Add-Ons

`mcaddon`
Generic composite content archive

Importing a `mcaddon` package while _Minecraft_ is launched in Editor mode will import any contained world as a project. The imported world will then be inaccessible outside Editor mode and will need to be re-exported as a world for playing. Asset types are imported as usual.

### Editor Add-Ons

`mceditoraddon`
Composite content archive for Editor mode

If _Minecraft_ is not open, launching a `mcproject` file will open Editor mode. Importing a `mcproject` will fail if _Minecraft_ is open but not in Editor mode.
