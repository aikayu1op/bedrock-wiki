---
title: カスタムコマンド
description: スクリプトを使って、チャットや command block などで使える自分の command を作る方法を学びます。
category: Tutorials
mentions:
    - cda94581
    - fraysdev
    - destruc7ion
    - jannik-de
    - riesters
    - Fabrimat
    - SmokeyStack
    - CrackedMatter
    - JaylyDev
    - Herobrine643928
    - conmaster2112
    - kumja1
    - modmaker101
    - realfeatherdev
    - QuazChick
    - jeanmajid
    - nperma
---

便利な custom command を欲しがらない人はいないでしょう。このチュートリアルでは、スクリプトを使ってチャットや command block などで使える自分の command を作る方法を学びます。

## Pack のセットアップ

:::tip
script を作る前に、JavaScript、add-on、Script API の基本を学んでおくことをおすすめします。
Script API で何ができるかは、[Microsoft Docs](https://learn.microsoft.com/minecraft/creator/scriptapi) を参照してください。
:::

script の基本を理解している前提で、pack の作成を始めましょう。

Below is an example manifest, make sure that you **generate your own UUIDs**.

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "Custom Commands",
        "description": "Custom Commands using the Script API",
        "min_engine_version": [1, 21, 100],
        "uuid": "c8c3239f-027f-4e80-890f-880eba65027d",
        "version": "1.0.0"
    },
    "modules": [
        {
            "type": "script",
            "language": "javascript",
            "entry": "scripts/main.js",
            "uuid": "f626740d-50a6-49f1-a24a-834983b72134",
            "version": "1.0.0"
        }
    ],
    "dependencies": [
        {
            "module_name": "@minecraft/server",
            "version": "2.1.0" // Needs to be at least 2.1.0
        }
    ]
}
```

In our manifest, we have added a script module.
The `entry` is the path of the script file within the `scripts` folder of the behavior pack.
The dependency allows us to import the native `@minecraft/server` module into our script.

<FolderView :paths="[
    'BP/scripts/main.js',
    'BP/manifest.json',
    'BP/pack_icon.png'
]" />

## Custom Command の登録

ここからが楽しい部分です。custom command を作成します。

### Command 名

まず command の名前を考える必要があります。
この名前には namespace が必要で、小文字だけを使うべきです。例: `wiki:goto`

:::danger NAMESPACES
Minecraft will automatically register a version of your custom command without the provided namespace (e.g. `/goto` as well as `/wiki:goto`).

This feature was added to make custom commands more convenient to type into chat quickly, however you should **never** use the version without the namespace outside of chat.

Doing so will cause command blocks, functions, etc. to stop working if another add-on adds a command with the same name (without the namespace).
:::

### Command の説明

command 名の横に自動補完で表示される説明も用意する必要があります。

<!--

This should be a translation key (preferably in the form `commands.<name>.description`) from a `.lang` file.

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
commands.wiki:goto.description=Teleport to a specific location.
```

-->

### Command の権限レベル

command の権限レベルは重要です。危険な command にアクセスすべきでない player が実行できないようにするためです。

Below are the different permission levels that a command may be set to:

-   `Any` — allows the command to be ran from anywhere, even by non-operators.
-   `GameDirectors` — restricts the command to operators (including command blocks).
-   `Admin` — restricts the command to operators (excluding command blocks).
-   `Host` — restricts the command to the player hosting the world.
-   `Owner` — restricts the command to the server console.

### Command パラメーター

custom command で使える parameter type は次のとおりです。

-   `BlockType`
-   `Boolean`
-   `EntitySelector` — returns an array of selected entities (even if only one entity is selected).
-   `EntityType`
-   `Enum` — the parameter's `name` must be the name of a registered command enum.
-   `Float`
-   `Integer`
-   `ItemType`
-   `Location` — returns a `Vector3` object.
-   `PlayerSelector` — similar to `EntitySelector` but only returns players.
-   `String`

Custom commands can have a maximum of 8 parameters.

#### 必須パラメーター

command を実行するには、必須パラメーターを順番どおりに指定する必要があります。

#### 任意パラメーター

任意パラメーターは指定しなくてもよく、必ず必須パラメーターのあとに続きます。

### Command Callback

これは command が実行されるたびに、[read-only mode](/scripting/privileges#read-only-mode) で呼ばれる function です。

The callback always gets the command origin as its first parameter, the rest of the parameters are based on the `mandatoryParameters` and `optionalParameters` you provide.
The number of parameters passed to the callback matches the number of parameters defined in the command, so if you have a command with 3 different parameters your callback would look like this:

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
customCommandRegistry.registerCommand(
    {
        name: "wiki:command",
        description: "A very useful command.",
        permissionLevel: CommandPermissionLevel.GameDirectors,
        mandatoryParameters: [
            { name: "param1", type: CustomCommandParamType.String },
            { name: "param2", type: CustomCommandParamType.Integer },
            { name: "param3", type: CustomCommandParamType.Boolean },
        ],
    },
    (origin, param1, param2, param3) => {
        // Handle the command logic here
    }
);
```

## テレポート command の例

この例では、プレイヤーをあらかじめ決めた場所 `spawn`、`shop`、`arena` にテレポートできる custom slash command `/wiki:goto` を作ります。

In command autocompletion, its syntax is the following:

```
/wiki:goto <teleportLocation: string>
```

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import {
    CommandPermissionLevel,
    CustomCommandParamType,
    CustomCommandStatus,
    system,
} from "@minecraft/server";

system.beforeEvents.startup.subscribe(({ customCommandRegistry }) => {
    // Register an enum for teleport locations
    customCommandRegistry.registerEnum("wiki:teleportLocation", ["spawn", "shop", "arena"]);

    // Register the custom command
    customCommandRegistry.registerCommand(
        {
            name: "wiki:goto",
            description: "Teleport to a specific location.",
            permissionLevel: CommandPermissionLevel.Any, // Allow all players to run the command
            cheatsRequired: false, // Allow the command to be ran without enabling cheats
            mandatoryParameters: [
                {
                    // Use the enum by setting the name to the enum name
                    name: "wiki:teleportLocation",
                    type: CustomCommandParamType.Enum,
                },
            ],
        },
        (origin, teleportLocation) => {
            // Only run if executed by an entity
            if (!origin.sourceEntity)
                return {
                    status: CustomCommandStatus.Failure,
                };

            let location;

            // Handle teleportation based on the location string
            if (teleportLocation === "spawn") {
                location = { x: 0, y: 100, z: 0 };
            } else if (teleportLocation === "shop") {
                location = { x: 100, y: 100, z: 100 };
            } else if (teleportLocation === "arena") {
                location = { x: 200, y: 100, z: 200 };
            }

            system.run(() => {
                origin.sourceEntity.teleport(location);
            });

            return {
                status: CustomCommandStatus.Success,
                message: "Teleporting to " + teleportLocation,
            };
        }
    );
});
```

## command 実行を player に限定する

既定では、"any" の command permission level は player 以外の source でも command を実行できます。player だけが実行すべき command には向きません。

この例では、player だけが実行できる custom slash command `/wiki:heal` を作ります（server console や command block では実行できません）。
この command は player の health を全回復します。

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import {
    CommandPermissionLevel,
    CustomCommandParamType,
    CustomCommandStatus,
    system,
    Player,
} from "@minecraft/server";

system.beforeEvents.startup.subscribe(({ customCommandRegistry }) => {
    customCommandRegistry.registerCommand(
        {
            name: "wiki:heal",
            description: "Restore your health to the default value.",
            permissionLevel: CommandPermissionLevel.Any,
            cheatsRequired: false,
        },
        (origin) => {
            const source = origin.initiator ?? origin.sourceEntity;

            // Only allow players to use this command (or NPCs, treating the initiator as the player executing the command)
            if (!(source instanceof Player)) {
                return {
                    status: CustomCommandStatus.Failure,
                    message: "This command can only be executed by players.",
                };
            }

            // Escape read-only mode to heal the player
            system.run(() => source.getComponent("health").resetToDefaultValue());

            return {
                status: CustomCommandStatus.Success,
                message: "You have been fully healed!",
            };
        }
    );
});
```

For more details about custom commands, see the [Microsoft Docs on custom commands](https://learn.microsoft.com/minecraft/creator/documents/scripting/custom-commands).
