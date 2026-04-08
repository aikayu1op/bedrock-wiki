---
title: スクリプト入門
category: General
nav_order: 1
mentions:
    - cda94581
    - Herobrine643928
    - JaylyDev
    - SmokeyStack
    - kumja1
    - realfeatherdev
    - QuazChick
    - jeanmajid
    - AndroAGENT
description: JavaScript ファイルを使ってワールドを変更する方法を学びます。
---

::: tip
この Script API のページは、アドオンのパック設定についての基本知識があることを前提としています。ビヘイビアパックの設定方法については、[アドオン入門](/guide/introduction) を参照してください。
:::

::: warning
Script API は現在も活発に開発されており、破壊的変更が頻繁にあります。このページは Minecraft 1.21.114 の形式を前提としています。
:::

## 概要

Script API（旧 GameTest Framework）は、新しい種類の作品を作れる機能です。これらはビヘイビアパックフォルダー内の JavaScript ファイルで構成されます。Script API の大部分は実験機能ではありません。

このページでは、Minecraft の Creator API 概念のうち、日常的に使う 80% を紹介します。

## 最初のプロジェクトを作る

現時点では、スクリプトはビヘイビアパックでのみ使用できます。

ビヘイビアパックの manifest では、`script` module を追加し、スクリプトプロジェクトの `entry` point を設定する必要があります。現在、有効な言語としてサポートされているのは `"javascript"` のみです。

<CodeHeader>BP/manifest.json#modules[0]</CodeHeader>

```json
{
    "uuid": "239c134f-67bf-4738-9bcc-8c69d31b1f72",
    "version": "1.0.0",
    "type": "script",
    "language": "javascript",
    "entry": "scripts/main.js"
}
```

さらに、使用する module に応じて dependencies を設定する必要があります。Script API module を import して使うには、`module_name` と `version` を使って依存関係を指定しなければなりません。この例では `@minecraft/server` module を使っています。

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "Bedrock Add-ons",
        "description": "Script API Template",
        "uuid": "<UUID>",
        "version": "1.0.0",
        "min_engine_version": [1, 21, 114]
    },
    "modules": [
        {
            "uuid": "<UUID>",
            "version": "1.0.0",
            "type": "script",
            "language": "javascript",
            // Your entry file; where Minecraft will read your code from.
            "entry": "scripts/main.js"
        }
    ],
    // Uncomment to use eval() and Function() inside your code (unrecommended), remove if not necessary
    // "capabilities": ["script_eval"],
    "dependencies": [
        {
            // Enables the use of @minecraft/server module, with a version of 2.2.0 (the latest stable version available).
            "module_name": "@minecraft/server",
            "version": "2.3.0"
        }
    ]
}
```

コードの実行に他の module が必要な場合は、上の形式に従ってその依存関係も追加してください。

**Stable API modules** は、Beta APIs 実験を有効にする必要がありません。機能の多くは stable API に含まれており、Minecraft の更新で壊れたり変更されたりしません。

-   `@minecraft/server`:

    -   [`2.3.0`](https://www.npmjs.com/package/@minecraft/server/v/2.3.0) (Latest version)
    -   [`2.2.0`](https://www.npmjs.com/package/@minecraft/server/v/2.2.0)
    -   [`2.1.0`](https://www.npmjs.com/package/@minecraft/server/v/2.1.0)
    -   [`2.0.0`](https://www.npmjs.com/package/@minecraft/server/v/2.0.0)
    -   [`1.19.0`](https://www.npmjs.com/package/@minecraft/server/v/1.19.0)
    -   [`1.18.0`](https://www.npmjs.com/package/@minecraft/server/v/1.18.0)
    -   [`1.17.0`](https://www.npmjs.com/package/@minecraft/server/v/1.17.0)
    -   [`1.16.0`](https://www.npmjs.com/package/@minecraft/server/v/1.16.0)
    -   [`1.15.0`](https://www.npmjs.com/package/@minecraft/server/v/1.15.0)
    -   [`1.14.0`](https://www.npmjs.com/package/@minecraft/server/v/1.14.0)
    -   [`1.13.0`](https://www.npmjs.com/package/@minecraft/server/v/1.13.0)
    -   [`1.12.0`](https://www.npmjs.com/package/@minecraft/server/v/1.12.0)
    -   [`1.11.0`](https://www.npmjs.com/package/@minecraft/server/v/1.11.0)
    -   [`1.10.0`](https://www.npmjs.com/package/@minecraft/server/v/1.10.0)
    -   [`1.9.0`](https://www.npmjs.com/package/@minecraft/server/v/1.9.0)
    -   [`1.8.0`](https://www.npmjs.com/package/@minecraft/server/v/1.8.0)
    -   [`1.7.0`](https://www.npmjs.com/package/@minecraft/server/v/1.7.0)
    -   [`1.6.0`](https://www.npmjs.com/package/@minecraft/server/v/1.6.0)
    -   [`1.5.0`](https://www.npmjs.com/package/@minecraft/server/v/1.5.0)
    -   [`1.4.0`](https://www.npmjs.com/package/@minecraft/server/v/1.4.0)
    -   [`1.3.0`](https://www.npmjs.com/package/@minecraft/server/v/1.3.0)
    -   [`1.2.0`](https://www.npmjs.com/package/@minecraft/server/v/1.2.0)
    -   [`1.1.0`](https://www.npmjs.com/package/@minecraft/server/v/1.1.0)
    -   [`1.0.0`](https://www.npmjs.com/package/@minecraft/server/v/1.0.0)

-   `@minecraft/server-ui`:

    -   [`2.0.0`](https://www.npmjs.com/package/@minecraft/server-ui/v/2.0.0) (Latest version, requires `@minecraft/server@2.0.0` or above)
    -   [`1.3.0`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.3.0) (Requires `@minecraft/server@1.3.0` or above)
    -   [`1.2.0`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.2.0) (Requires `@minecraft/server@1.2.0` or above)
    -   [`1.1.0`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.1.0) (Requires `@minecraft/server@1.2.0` or above)
    -   [`1.0.0`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.0.0) (Requires `@minecraft/server@1.2.0`)

**Beta API modules** は、ワールド設定で "Beta APIs" 実験を有効にする必要があります。これらの API は、ほとんど警告なく変更・削除・追加される可能性があり、壊れやすいです。注意してください。

::: tip
v1.21.120 以降は、依存関係の `version` プロパティを `"beta"`{lang=json} に設定して、各ネイティブ module の最新 beta 版を常に選べます。
:::

-   `@minecraft/server`:

    -   [`2.3.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/2.3.0-beta.1.21.114-stable) (1.21.114)
    -   [`2.2.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/2.2.0-beta.1.21.102-stable) (1.21.102)
    -   [`2.1.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/2.1.0-beta.1.21.95-stable) (1.21.95)
    -   [`2.0.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/2.0.0-beta.1.21.84-stable) (1.21.84)
    -   [`1.18.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.18.0-beta.1.21.62-stable) (1.21.62)
    -   [`1.17.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.17.0-beta.1.21.51-stable) (1.21.51)
    -   [`1.16.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.16.0-beta.1.21.44-stable) (1.21.44)
    -   [`1.15.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.15.0-beta.1.21.31-stable) (1.21.31)
    -   [`1.14.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.14.0-beta.1.21.23-stable) (1.21.23)
    -   [`1.12.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.12.0-beta.1.21.3-stable) (1.21.3)
    -   [`1.11.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.11.0-beta.1.20.80-stable) (1.21.80)
    -   [`1.10.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.10.0-beta.1.20.70-stable) (1.20.70)
    -   [`1.9.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.9.0-beta.1.20.60-stable) (1.20.60)
    -   [`1.8.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.8.0-beta.1.20.50-stable) (1.20.50)
    -   [`1.7.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.7.0-beta.1.20.40-stable) (1.20.40)
    -   [`1.6.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.6.0-beta.1.20.30-stable) (1.20.30)
    -   [`1.4.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.4.0-beta.1.20.10-stable) (1.20.10)
    -   [`1.3.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.3.0-beta.1.20.0-stable) (1.20.0)
    -   [`1.2.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.2.0-beta.1.19.80-stable) (1.19.80)
    -   [`1.1.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.1.0-beta.1.19.70-stable) (1.19.70)
    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/server/v/1.0.0-beta.1.19.40-stable) (1.19.40)

-   `@minecraft/server-ui`:

    -   [`2.1.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/2.1.0-beta.1.21.114-stable) (1.21.114)
    -   [`2.0.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/2.0.0-beta.1.21.84-stable) (1.21.84)
    -   [`1.4.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.4.0-beta.1.21.62-stable) (1.21.62)
    -   [`1.3.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.3.0-beta.1.21.23-stable) (1.21.23)
    -   [`1.2.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.2.0-beta.1.21.3-stable) (1.21.3)
    -   [`1.1.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.1.0-beta.1.20.0-stable) (1.20.0)
    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/1.0.0-beta.1.19.80-stable) (1.21.23)

-   `@minecraft/server-gametest`:

    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/server-gametest/v/1.0.0-beta.1.21.114-stable) (1.21.114)

-   `@minecraft/server-net`:

    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/server-net/v/1.0.0-beta.1.21.114-stable) (1.21.114; Bedrock Dedicated Server module only, must be enabled in `permission.json` as it is not enabled by default)

-   `@minecraft/server-admin`:

    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/server-admin/v/1.0.0-beta.1.21.114-stable) (1.21.114; Bedrock Dedicated Server module only)

-   `@minecraft/debug-utilities`:

    -   [`1.0.0-beta`](https://www.npmjs.com/package/@minecraft/debug-utilities/v/1.0.0-beta.1.21.114-stable) (1.21.114)

コード内で `eval()` 関数や `Function()` コンストラクターを使うには、manifest の capabilities に次の内容を追加できます。

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "capabilities": ["script_eval"]
}
```

entry point ファイルには、スクリプトそのものや他のスクリプトファイルへの import を含められます。指定できる entry point ファイルは 1つだけです。

## JS でスクリプトを書く

Minecraft の scripting engine は、他の JavaScript プロジェクトと同じように JavaScript しか実行しません。TS を直接 JavaScript にコンパイルする方法は、[TypeScript でのスクリプト作成](/scripting/typescript#script-api) を参照してください。

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
// このファイルは、コードが動作していることを
// チャットに "Hello World" を連投して示します

// ワールドとゲームロジック用に "@minecraft/server" から world と system を import します。
import { world, system } from "@minecraft/server";

// Minecraft の tick ごとに呼ばれる interval を作成して実行します
system.runInterval(() => {
    // API の world.sendMessage 関数で "Hello World" をチャットに連投します
    world.sendMessage("Hello World");
}, 1);
```

## Script API 2.0.0

Script API Version 2 では、スクリプトは既定でワールドの読み込み前に実行されるようになりました。つまり、ほとんどの関数を実行するには、ワールドの読み込みを待つ必要があります。

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import { world } from "@minecraft/server";

// ワールドの読み込みを待ちます
world.afterEvents.worldLoad.subscribe(() => {
    // チャットにメッセージを送ります
    world.sendMessage("World has loaded");

    // 他の js ファイルを import します
    import("./path/to/file.js");
});
```

## 参考ドキュメント

公式ドキュメントは Microsoft Learn で公開されており、こちらで確認できます。

-   [`@minecraft/server`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft)
-   [`@minecraft/server-gametest`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest)
-   [`@minecraft/server-ui`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server-ui/minecraft-server-ui)
-   [`@minecraft/server-admin`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft-server-admin/mojang-minecraft-server-admin)
-   [`@minecraft/server-net`](https://learn.microsoft.com/minecraft/creator/scriptapi/mojang-net/mojang-net)
-   [`@minecraft/debug-utilities`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/debug-utilities/minecraft-debug-utilities)

Minecraft Preview の最新 Beta API modules 用の公式 TypeScript 宣言は、こちらで確認できます。

-   [`@minecraft/server`](https://www.npmjs.com/package/@minecraft/server/v/beta)
-   [`@minecraft/server-gametest`](https://www.npmjs.com/package/@minecraft/server-gametest/v/beta)
-   [`@minecraft/server-ui`](https://www.npmjs.com/package/@minecraft/server-ui/v/beta)
-   [`@minecraft/server-admin`](https://www.npmjs.com/package/@minecraft/server-admin/v/beta)
-   [`@minecraft/server-net`](https://www.npmjs.com/package/@minecraft/server-net/v/beta)
-   [`@minecraft/debug-utilities`](https://www.npmjs.com/package/@minecraft/debug-utilities/v/beta)

これらを使うと、エディター内で補完と検証が強化されます。

-   bridge. v2: GameTest サポートを標準搭載しています。
-   Visual Studio Code: Node.js と npm をインストールしてから、コマンドラインで次を実行してください。

最新 beta API modules:

```bash
npm i @minecraft/server@2.3.0-beta.1.21.114-stable
npm i @minecraft/server-ui@2.1.0-beta.1.21.114-stable
npm i @minecraft/server-gametest@1.0.0-beta.1.21.114-stable
npm i @minecraft/server-admin@1.0.0-beta.1.21.114-stable
npm i @minecraft/server-net@1.0.0-beta.1.21.114-stable
npm i @minecraft/debug-utilities@1.0.0-beta.1.21.114-stable
```

最新 stable API modules:

```bash
npm i @minecraft/server
npm i @minecraft/server-ui
```
