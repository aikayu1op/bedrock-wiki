---
title: ブロック配置の防止
description: スクリプトでブロック配置を防ぎます。
category: Tutorials
tags:
    - experimental
mentions:
    - JWForever5504
    - QuazChick
---

:::warning BETA APIs
Script API の beta 版は現在も活発に開発されており、破壊的変更が頻繁にあります。このページは Minecraft 1.21.120 の形式を前提としています。
:::

特定のブロックの配置を防ぎたいと思ったことはありますか？プレイヤーが危険なブロックを入手することもあるので、このスクリプトを使えばワールドやサーバーを安全に保てます。

## セットアップ

他のスクリプトと同様に、`manifest.json` に dependency が必要です。ここでは `@minecraft/server` module、特に最新の `-beta` 版を使います。

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "Block Placement Prevention",
        "description": "Prevent Placing of Certain Blocks using Script API",
        "uuid": "6f3a4325-4ce5-42f5-b141-12641c8823c3",
        "min_engine_version": [1, 20, 10],
        "version": "1.0.0"
    },
    "modules": [
        {,
            "type": "data",
            "uuid": "5a080d1d-bef8-47ce-aae1-a2ec3e0010ab",
            "version": "1.0.0"
        },
        {
            "type": "script",
            "language": "javascript",
            "entry": "scripts/main.js",
            "uuid": "53a5804b-fb35-4f7d-a89e-e4a925fadb77",
            "version": [1, 0, 0]
        }
    ],
    "dependencies": [
        {
            // Minecraft native module - needed to use the "@minecraft/server" module
            "module_name": "@minecraft/server",
            "version": "beta"
        }
    ]
}
```

manifest には script module を追加しています。`entry` は script file の保存場所で、behavior pack の `scripts` フォルダー内です。dependency により、コード内で必要な script module を使えます。

<FolderView
	:paths="[
		'BP/manifest.json',
		'BP/pack_icon.png',
        'BP/scripts/main.js'
	]"
/>

## Preventing Placement

Even if you are going to use another block, if this is your first time creating this script, follow the tutorial exactly. After you are sure you made the script correctly, you can change the block.

これは、ブロックの identifier が想像と違うことが多いためです。たとえば Glow Item Frame は内部では `minecraft:glow_frame` として扱われます。

まず、コードで使う module imports を追加します。

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import { world, system } from "@minecraft/server";
```

::: tip
Learn more about `system` at [System Events](/scripting/script-server#events).
:::

After we have added the module, we will add the preventative measure for block placement.

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
world.beforeEvents.playerPlaceBlock.subscribe((event) => {
    const player = event.source;

    if (event.permutationToPlace.type.id === "minecraft:bedrock") {
        event.cancel = true;
        system.run(() => {
            player.sendMessage("You cannot place Bedrock");
        });
    }
});
```

これが、コードを実行する主要な関数です。`world.beforeEvents.playerPlaceBlock.subscribe()` は、ブロックが置かれる前に実行されます。

-   `const player = event.source`{lang=js} defines the variable `player` as whatever the source of the event is (the one who is placing the block). `const` is used over `var` or `let` to say that the source _cannot_ be changed, and is constant.
-   The `if` statement requires the criteria to evaluate to true in order for the code within the brackets to run.
    -   `event.permutationToPlace.type.id === "minecraft:bedrock"`{lang=js} verifies that the block being placed is 'minecraft:bedrock'.
-   `event.cancel = true`{lang=js} cancels the placement action that would be performed by this event.
-   `system.run()`{lang=js} is a system call that tells minecraft to push the code being ran to the next tick.
before events はワールドの状態を変更できないため、これが必要です（この場合はプレイヤーへのメッセージ送信）。`system.run` を使うことで、この制限の影響を受けないコードにできます。
    More information on system callbacks & loops can be found [here](https://learn.microsoft.com/minecraft/creator/documents/scripting/system-run-guide).
-   `player.sendMessage()`{lang=js} sends a message to the player letting them know that they cannot place that block.

## Conclusion

メッセージ `"You cannot place Bedrock"` は、必要に応じて独自のロジックに変更または置き換えられます。

`event.permutationToPlace.type.id === "minecraft:bedrock"`{lang=js} で判定するブロックの identifier も変更できます。`minecraft:bedrock` の代わりに、対象の identifier を namespace 付きで入れてください。

To learn more about Script API, you can check out the [wiki](/scripting/scripting-intro) or the [Microsoft Docs](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptdevelopertools)
