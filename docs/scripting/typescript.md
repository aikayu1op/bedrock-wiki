---
title: TypeScript
category: Documentation
mentions:
    - BlueFrog130
    - sermah
    - SmokeyStack
    - SirLich
    - Fabrimat
    - JaylyDev
    - Herobrine643928
    - ThomasOrs
description: MCBE の add-on 開発における TypeScript についてです。
---

[TypeScript](https://www.typescriptlang.org/) は Microsoft が開発・保守しているプログラミング言語です。JavaScript の厳密な構文上の上位互換で、任意の静的型付けを追加します。TypeScript は大規模アプリケーションの開発向けに設計されており、JavaScript にトランスコンパイルされます。TypeScript は JavaScript の上位互換なので、既存の JavaScript プログラムはそのまま有効な TypeScript プログラムでもあります。

Minecraft add-on 用のスクリプトを開発するとき、TypeScript は非常に有用です。Minecraft add-on 開発を助けるライブラリがあり、event の送受信に対して IntelliSense と type safety を提供します。

## 動作の仕組み

TypeScript は JavaScript へのコンパイルが必要な言語です。Minecraft は `.ts` ファイルをそのまま扱えません。そのため、TypeScript を使って add-on を作るには、いくつかの tool をセットアップする必要があります。

まず TypeScript ファイルを JavaScript にコンパイルします。これは [TypeScript Compiler](https://www.npmjs.com/package/typescript) を使えば実現できます。そうして初めて、Minecraft の scripting system で使えるようになります。

## 前提条件

1. Minecraft Bedrock Edition (Windows 10)
2. A code editor like Visual Studio Code (although Notepad will technically be sufficient, we will be assuming the usage of VSCode going forward)
3. JavaScript の基本知識（このチュートリアルでは JavaScript の書き方自体は教えず、基礎知識がある前提です）
4. [Node.js](https://nodejs.org/en/) is required for installing tooling and compiling TypeScript into JavaScript.
5. Knowledge of TypeScript

## セットアップガイド

このガイドでは、TypeScript Compiler を使って Script API の TypeScript project をセットアップします。

### はじめに

terminal（Windows なら Command Prompt）を開き、project を置く場所に移動します。場所はどこでも構いません。Windows 10 なら、file explorer で `Shift + RClick` して `Open in PowerShell` を選ぶこともできます。

まだであれば、`cd` を実行して terminal の作業 directory を project の場所に変更してください。

```bash
cd path/to/project
```

Next we need to install the TypeScript for creating the add-on. To do this, enter the following commands.

次の command で TypeScript を global にインストールします。

```bash
npm install -g typescript
```

次の command で、現在の directory に `package.json` file を作成します。

```bash
npm init -y
```

次の command で Script API module をインストールします。この例では Beta API を使います。

```bash
npm install @minecraft/server@beta
npm install @minecraft/server-ui@beta
npm install @minecraft/server-gametest@beta
npm install @minecraft/server-admin@beta
npm install @minecraft/server-net@beta
```

これで folder structure は次のようになっているはずです。

<FolderView :paths="[
	'node_modules',
  'package-lock.json',
  'package.json',
]"></FolderView>

::: tip

`command npm not found` のような error が出た場合は、Node.js がインストールされていて PATH に追加されているか確認してください。

:::

これで project を初期化できます。次の step は、Minecraft Scripting API の file system を再現するために、現在の directory に `tsconfig.json` file を作成して TypeScript project を作ることです。

<CodeHeader>tsconfig.json</CodeHeader>

```json
{
    "compilerOptions": {
        "module": "ES2020",
        "target": "ES2021",
        "moduleResolution": "Node",
        "allowSyntheticDefaultImports": true,
        "baseUrl": "./src",
        "rootDir": "./src",
        "outDir": "./scripts"
    },
    "exclude": ["node_modules"],
    "include": ["src"]
}
```

Now that you created the project, it can be opened in your IDE of choice. If you are utilizing VS Code, you can `cd` into your project directory and run `code .` to open your project.

### Project Structure

<FolderView :paths="[
	'node_modules',
  'src/Main.ts',
	'manifest.json',
	'pack_icon.png',
  'package-lock.json',
  'package.json',
  'tsconfig.json',
]"></FolderView>

Unless you know what you are doing, the only part of the project to be concerned with is everything within the `src` folder. That is where all the development should take place.

### Writing scripts

Now write your first TypeScript code in `src` directory, for example below:

<CodeHeader>BP/src/Main.ts</CodeHeader>

```ts
import { Player, EntityQueryOptions, GameMode, Vector3, world } from "@minecraft/server";

// Example function that uses the provided types
function findPlayersInSurvivalMode(location: Vector3): Player[] {
    const options: EntityQueryOptions = {
        gameMode: GameMode.survival,
        location: location,
    };

    const players: Player[] = world.getPlayers(options);
    return players;
}

// Example usage
const playerLocation: Vector3 = { x: 10, y: 20, z: 30 };
const playersInSurvivalMode: Player[] = findPlayersInSurvivalMode(playerLocation);
console.log(playersInSurvivalMode);
```

### Commands

The following commands are most utilized when developing a project.

```bash
tsc
```

`tsc` will compile all your TS files in scripts folder to your behavior packs folder.

```bash
tsc --watch
```

`--watch` will watch for any changes you make within the `src` directory and automatically reinstall the add-on.

<FolderView :paths="[
	'node_modules',
  'scripts/Main.js',
  'src/Main.ts',
	'manifest.json',
	'pack_icon.png',
  'package-lock.json',
  'package.json',
  'tsconfig.json',
]"></FolderView>

Now the `src/Main.ts` file should have been transpiled to `scripts/Main.js` with the following code:

<CodeHeader>BP/scripts/Main.js</CodeHeader>

```js
import { GameMode, world } from "@minecraft/server";
// Example function that uses the provided types
function findPlayersInSurvivalMode(location) {
    const options = {
        gameMode: GameMode.survival,
        location: location,
    };
    const players = world.getPlayers(options);
    return players;
}
// Example usage
const playerLocation = { x: 10, y: 20, z: 30 };
const playersInSurvivalMode = findPlayersInSurvivalMode(playerLocation);
console.log(playersInSurvivalMode);
```

### Packaging

To run the code in Minecraft, zip the behavior pack and import it to a Minecraft world. In your behavior pack should only include these files in the following, and the rest of the files do not have to be included in `.mcpack` compressed file.

<FolderView :paths="[
  'scripts/Main.js',
	'manifest.json',
	'pack_icon.png',
]"></FolderView>

Congratulations, you have created your first TypeScript project for Script API.
