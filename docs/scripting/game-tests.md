---
title: GameTest
description: マップや add-on の game mechanic が動くかどうかを、GameTest Framework で確認する方法を学びます。
category: Tutorials
tags:
    - experimental
mentions:
    - cda94581
    - SirLich
    - Joelant05
    - solvedDev
    - sermah
    - stirante
    - Paty007gr
    - JaylyDev
    - Fabrimat
    - Herobrine643928
    - kumja1
    - QuazChick
---

:::warning BETA APIS
Script API は現在も活発に開発されており、破壊的変更が頻繁にあります。このページは Minecraft 1.20.40 の形式を前提としています。
:::

GameTest Framework を使うと、unit test（"GameTest"）を作成でき、game mechanic が動くかどうかを簡単に確認できます。

GameTest は `/gametest` command で使えます。

-   `/gametest runthis` - Runs the nearest GameTest in range.
-   `/gametest runthese` - Runs all GameTests in range.
-   `/gametest pos` - It tells you the relative coordinates of the nearest GameTest.
-   `/gametest clearall [radius: int]` - Removes all GameTests in the specified radius.
-   `/gametest run <testName: GameTestName> [rotationSteps: int]` - Creates and runs the specified GameTest.
-   `/gametest runset [tagTag: GameTestTag] [rotationSteps: int]` - Creates and runs all GameTests with the specified tag.
-   `/gametest create <testName: string> [width: int] [height: int] [depth: int]` - Creates a blank GameTest area with the specified dimensions.
-   `/reload` - Reloads all function and script files from all behavior packs. (1.19+)

1.19.40 以降、vanilla GameTest は Minecraft の game file に含まれていないため、自分の custom behavior pack を追加しないと GameTest は実行できません。
vanilla GameTest は [minecraft-gametests](https://github.com/microsoft/minecraft-gametests/tree/main/js-gametests/behavior_packs/JsGameTests) GitHub repository にあります。

## GameTest を始める

始めるには、自分の behavior pack と scripting / API の基礎知識が必要です。これから始めるなら [この記事](/scripting/scripting-intro) を参照してください。

GameTest Framework を使うには `@minecraft/server-gametest` module が必要です。GameTest API module は `@minecraft/server` module も必要なので、`manifest.json` の dependency は次のようになります。

<CodeHeader>BP/manifest.json/</CodeHeader>

```json
"dependencies": [
    {
        "module_name": "@minecraft/server",
        "version": "1.7.0-beta"
    },
    {
        "module_name": "@minecraft/server-gametest",
        "version": "1.0.0-beta"
    }
]
```

GameTest を実行するには、behavior pack に structure file が必要で、command は `register` function で登録する必要があります。

<CodeHeader>BP/scripts/Main.js</CodeHeader>

```js
import * as GameTest from "@minecraft/server-gametest";

// Registration code for our test
GameTest.register(
    "wiki", // Name of the class of tests.
    "simpleTest", // Name of this test.
    (test) => {
        // Implementation of the test
        /**
         * @type {import("@minecraft/server").Vector3}
         * location from the test of where the cow should spawn in
         */
        const location = { x: 0, y: 0, z: 0 };
        const cow = test.spawn("minecraft:cow", location); // Returns an Entity instance

        test.succeedWhen(() => {
            test.assertEntityPresentInArea("minecraft:cow", true);
        });
    }
)
    .maxTicks(410)
    .structureName("wiki:test"); // References "BP/structures/wiki/test.mcstructure"
```

command を登録すると test function は固定されるため、登録後は test function の外の変数にアクセスできません。

Script API で問題がある場合は、Microsoft Learn の [Building your first GameTest](https://learn.microsoft.com/minecraft/creator/documents/gametestbuildyourfirstgametest) ガイドを確認するか、サポート用の **Bedrock Add-Ons** Discord server に参加してください。その他の多くの資料と一緒に、[Useful Links](/meta/useful-links#discord-links) で見つけられます。
