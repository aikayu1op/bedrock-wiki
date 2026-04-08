---
title: 装備ベースのコマンド
description: 特定のアイテムが装備されたときにコマンドを実行します。
category: Tutorials
tags:
    - intermediate
mentions:
    - Chikorita-Lover
    - MedicalJewel105
    - Lufurrius
    - TheItsNameless
    - QuazChick
---

アドオンでよくある考え方の 1 つに、カメの甲羅のように、固有効果を持つ新しいアーマーセットを実装するものがあります。
アイテムには、特定の条件で mob 効果を与えたり、パーティクルを出したりするコンポーネントはありません。
しかし、`hasitem` コマンドセレクターや server animation を使えば、簡単に実現できます。

## コマンドセレクター方式

[`hasitem`](https://minecraft.wiki/w/Target_selectors#Selecting_targets_by_item) セレクターパラメーターを使うと、装備スロットのアイテムに基づいてエンティティを対象にできます。

追加のスロット識別子の一覧は [Minecraft Wiki](https://minecraft.wiki/w/Slot#Bedrock_Edition) で確認できます。

<CodeHeader>Target Selector</CodeHeader>

```c
@e[hasitem={item=wiki:custom_helmet,location=slot.armor.head}]
```

`tick.json` ファイルに登録した関数を使えば、このセレクターを毎 tick 実行できます。

たとえば、カスタムヘルメットを装備したプレイヤーに跳躍上昇を付与するには、次の関数を使えます。

<CodeHeader>RP/functions/wiki/custom_helmet_effects.mcfunction</CodeHeader>

```c
effect @e[hasitem={item=wiki:custom_helmet,location=slot.armor.head}] jump_boost 10
```

<CodeHeader>BP/functions/tick.json</CodeHeader>

```json
{
    "values": ["wiki/custom_helmet_effects"]
}
```

## サーバーアニメーション方式

これはプレイヤーの behavior を変更する必要があるため、多くのアドオンで共通する注意点があります。そのため、この方法を使うと他のアドオンと互換性がなくなる場合があります。

最初の手順は server animation を作ることです。これは、特定のキーフレームでコマンドやイベントを実行するファイルです。client animation が resource pack にあるのに対し、server animation は behavior pack にあります。詳しくは[こちら](/entities/timers#animation-based-timers)を参照してください。まずは次のテンプレートを使えます。

<CodeHeader>BP/animations/player.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animations": {
        "animation.player.emerald_armor": {
            "animation_length": 0.05,
            "loop": true,
            "timeline": {
                "0.0": []
            }
        }
    }
}
```

このテンプレートの中身と役割を見ていきましょう。

-   `animation.player.emerald_armor` is our animation's identifier; you can change this to something else, such as `animation.player.phantom_armor`.
-   `animation_length` is how long the animation lasts; we'll use 0.05 seconds, as that's the length of an in-game tick.
-   `loop` is quite straight-forward; setting it to true makes the animation loop.
-   `timeline` runs commands and events at given keyframes.

We can add commands to the `0.0` array in our timeline to execute, such as an `/effect` command, like such:

```json
{
    "0.0": ["/effect @s speed 1 0"]
}
```

もちろん `/effect` だけに限りません。`/function` や `/particle` など、他のコマンドを使いたければ自由にどうぞ。

これで server animation 側はひとまず完了です。次に、アイテムの behavior ファイルへ進んで少し追加します。

### アイテムタグの適用

アイテムが装備されているかを実際に判定するには、item tag を確認する Molang query を使えます。

次のどちらかに当てはまるなら、このセクションは飛ばしても構いません。

-   You want check for a vanilla item instead, such as an iron armor piece through the `minecraft:iron_tier` tag
-   You want to check for the item via `q.is_item_name_any`, which checks for an item identifier in any slot

アイテムの behavior にはタグを追加する必要があります。
たとえば `wiki:emerald_tier` タグを追加したいなら、tags コンポーネントに次のように書きます。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:tags": {
    "tags": ["wiki:emerald_tier"]
}
```

これで、アイテムに割り当てたタグが付与されました。必要ならさらにタグを追加できますが、ここでやりたいことにはこれで十分です。

### プレイヤーの behavior

最後に、server animation を実行するためにプレイヤーの behavior を変更します。作業はすべて `description` 内で行います。

まず、アニメーションの short name を設定します。client animation を触ったことがあれば、かなり似た手順です。`description` に `animations` を追加し、次のように short name を設定します。

<CodeHeader>BP/entities/player.json > minecraft:entity > description</CodeHeader>

```json
{
    "identifier": "minecraft:player",
    "spawn_category": "creature",
    "is_spawnable": false,
    "is_summonable": false,
    "animations": {
        "emerald_armor": "animation.player.emerald_armor"
    }
}
```

これで short name が設定できたので、アニメーションを実行できます。

`description` に `scripts` を追加し、実行する Molang query を設定します。アイテムを確認するには、次のいずれかを使えます。

-   `q.is_item_name_any`, to check for a given item identifier in any slot. This example will check for `wiki:totem_of_retreat` in either hand:

```molang
q.is_item_name_any('slot.weapon.mainhand', 'wiki:totem_of_retreat') || q.is_item_name_any('slot.weapon.offhand', 'wiki:totem_of_retreat')
```

-   `q.equipped_item_any_tag`, to check for at least one of any given tag in a given slot. This example will allow an emerald- or phantom- tier armor piece to be used:

```molang
q.equipped_item_any_tag('slot.armor.head', 'wiki:emerald_tier', 'wiki:phantom_tier')
```

-   `q.equipped_item_all_tags`, to check for all given tags in a given slot. This example will only allow an armor piece that's both emerald- and ancient- tier:

```molang
q.equipped_item_all_tags('slot.armor.head', 'wiki:ancient_tier', 'wiki:emerald_tier')
```

`q.equipped_item_any_tag` を使った例を見てみましょう。

<CodeHeader>BP/entities/player.json > minecraft:entity > description</CodeHeader>

```json
{
    "identifier": "minecraft:player",
    "spawn_category": "creature",
    "is_spawnable": false,
    "is_summonable": false,
    "animations": {
        "emerald_armor": "animation.player.emerald_armor"
    },
    "scripts": {
        "animate": [
            {
                "emerald_armor": "q.equipped_item_any_tag('slot.armor.head', 'wiki:emerald_tier')"
            }
        ]
    }
}
```

この例では、ヘルメットスロットに emerald tier のアイテムが装備されているとき、`emerald_armor` という short name の server animation を実行します。Molang の条件を自分のアイテムタグに合わせたり、別の query に変えたり、条件を追加したりできます。

追加のスロット識別子の一覧は [Minecraft Wiki](https://minecraft.wiki/w/Slot#Bedrock_Edition) で確認できます。

### 結論

server animation、プレイヤーの behavior、item tag がそろえば、装備したアイテムでコマンドを実行できます。この手法なら、アイテムコンポーネントだけに縛られるより、はるかに自由にカスタマイズできます。さらに機能を増やしたいなら次のセクションを見てください。そうでなければ、これで完了です。

### 追加

#### 複数の必須アイテム

アーマーセットの複数部位が装備されているときにコマンドを実行したいなら、先ほどの Molang を拡張できます。

<CodeHeader>BP/entities/player.json > minecraft:entity > description > scripts</CodeHeader>

```json
"animate": [
    {
        "emerald_armor": "q.equipped_item_any_tag('slot.armor.head', 'wiki:emerald_tier') && q.equipped_item_any_tag('slot.armor.chest', 'wiki:emerald_tier') && q.equipped_item_any_tag('slot.armor.legs', 'wiki:emerald_tier') && q.equipped_item_any_tag('slot.armor.feet', 'wiki:emerald_tier')"
    }
]
```

この例では、4 つすべてのアーマースロットに emerald tier の防具があるかを確認し、すべて装備されていればアニメーションを実行します。

#### さらなる条件

カメの甲羅は常に水中呼吸を与えるわけではなく、プレイヤーが最初に水に入ったときに 10 秒だけ付与します。emerald armor を体力が低いときだけ動かしたいなら、Molang に別の query を追加できます。

<CodeHeader>BP/entities/player.json > minecraft:entity > description > scripts</CodeHeader>

```json
"animate": [
    {
        "emerald_armor": "q.equipped_item_any_tag('slot.armor.head', 'wiki:emerald_tier') && q.health <= 5"
    }
]
```

この例では、残り体力が 2.5 ハート以下のときにアニメーションを実行し、危険なときに素早く逃げられるようにします。

この条件は、複数のアーマー部位を要求する場合にも適用でき、Molang はさらに長くなります。

<CodeHeader>BP/entities/player.json > minecraft:entity > description > scripts</CodeHeader>

```json
{
    "animate": [
        {
            "emerald_armor": "q.equipped_item_any_tag('slot.armor.head', 'wiki:emerald_tier') && q.equipped_item_any_tag('slot.armor.chest', 'wiki:emerald_tier') && q.equipped_item_any_tag('slot.armor.legs', 'wiki:emerald_tier') && q.equipped_item_any_tag('slot.armor.feet', 'wiki:emerald_tier') && q.health <= 5"
        }
    ]
}
```

文書化された Molang query の一覧は [bedrock.dev](https://bedrock.dev/docs/stable/Molang#List%20of%20Entity%20Queries) で確認できます。

#### 効果付きの複数アイテム

固有の効果を持つアイテムをさらに追加したい場合も心配いりません。簡単にできます。新しい server animation ファイルを作るか、先ほどのファイルに追加するだけです。

<CodeHeader>BP/animations/player.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animations": {
        "animation.player.emerald_armor": {
            "timeline": {
                "0.0": ["..."]
            },
            "animation_length": 0.05,
            "loop": true
        },
        "animation.player.phantom_armor": {
            "timeline": {
                "0.0": ["..."]
            },
            "animation_length": 0.05,
            "loop": true
        }
    }
}
```

プレイヤーの behavior では、`animations` と `scripts` も追加します。

<CodeHeader>BP/entities/player.json > minecraft:entity > description</CodeHeader>

```json
{
    "identifier": "minecraft:player",
    "spawn_category": "creature",
    "is_spawnable": false,
    "is_summonable": false,
    "animations": {
        "emerald_armor": "animation.player.emerald_armor",
        "phantom_armor": "animation.player.phantom_armor"
    },
    "scripts": {
        "animate": [
            {
                "emerald_armor": "q.equipped_item_any_tag('slot.armor.head', 'wiki:emerald_tier')"
            },
            {
                "phantom_armor": "q.equipped_item_any_tag('slot.armor.head', 'wiki:phantom_tier')"
            }
        ]
    }
}
```
