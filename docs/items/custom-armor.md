---
title: カスタムアーマー
example: custom_armor
description: カスタムアーマーセットの作り方を学びます。
category: Tutorials
license: true
mentions:
    - SirLich
    - Dreamedc2015
    - sermah
    - yanasakana
    - Joelant05
    - MedicalJewel105
    - aexer0e
    - Brougud
    - XxPoggyisLitxX
    - LeGend077
    - SmokeyStack
    - QuazChick
---

:::tip フォーマットバージョン 1.26.10
このページでは、カスタムアイテムと attachable の基本を理解していることを前提にしています。
始める前に [items guide](/items/items-intro) を確認してください。
:::

カスタムアーマーの作成は意外と簡単ですが、追加が必要なファイルがいくつかあり、少しテクスチャ作業もあるため、多少の調整は必要です。

## アーマーテクスチャ

各カスタムアーマーセットには、アイコン用の 4 枚のテクスチャと、装備時にアーマーモデルへ適用される 3 枚の別個のテクスチャが必要です。

1 枚目のアーマーモデル用テクスチャ（ここでは `custom_1.png`）はヘルメット、チェストプレート、ブーツに適用され、2 枚目のテクスチャ（ここでは `custom_2.png`）はレギンスに適用されます。

<div style="display: grid; grid-template-columns: repeat(auto-fill, 256px); column-gap: 1em;">

<ExampleFile path="RP/textures/wiki/items/custom_helmet.png" />
<ExampleFile path="RP/textures/wiki/items/custom_chestplate.png" />
<ExampleFile path="RP/textures/wiki/items/custom_leggings.png" />
<ExampleFile path="RP/textures/wiki/items/custom_boots.png" />
<ExampleFile path="RP/textures/wiki/models/armor/custom_baby.png" />
<ExampleFile path="RP/textures/wiki/models/armor/custom_1.png" />
<ExampleFile path="RP/textures/wiki/models/armor/custom_2.png" />

</div>

また、`item_texture.json` を使って、各アイテムアイコンを [items texture atlas](/concepts/texture-atlases#items) に追加する必要があります。

<ExampleFile path="RP/textures/item_texture.json" />

## カスタムヘルメット

### アイテム JSON

<ExampleFile path="BP/items/custom_helmet.json" />

### Attachable JSON

この時点でアイテムはゲーム内に表示され、装備もできますが、プレイヤーモデル上にはまだ見た目が反映されません。

この見た目は、_attachables_ という機能を使うことで実現できます。attachables は、装備内容に応じて別のエンティティに視覚的に _attach_ されます。
まずは、resource pack に `attachables` フォルダを作成する必要があります（すでにあるかもしれません）。

このガイドにある attachable サンプルは、主にバニラのアーマー attachable をベースにしています。これには、アーマートリム、エンチャントのきらめき、子モブ専用モデルのサポートがあります。

<ExampleFile path="RP/attachables/custom_helmet.json" />

### アイテム名

最後に、`item.<identifier>=<name>`{lang=xml} の形式で resource pack に翻訳を追加し、アイテム名を定義します。

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_helmet=Custom Helmet
```

ここまでできたら、ゲームに入って成果を確認してみましょう。ヘルメットを装備できるはずです。ここまでできれば上出来です。

![](inventory.png)

## カスタムチェストプレート

### アイテム JSON

<ExampleFile path="BP/items/custom_chestplate.json" />

### Attachable JSON

<ExampleFile path="RP/attachables/custom_chestplate.json" />

### アイテム名

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_chestplate=Custom Chestplate
```

## カスタムレギンス

### アイテム JSON

<ExampleFile path="BP/items/custom_leggings.json" />

### Attachable JSON

<ExampleFile path="RP/attachables/custom_leggings.json" />

### アイテム名

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_leggings=Custom Leggings
```

## カスタムブーツ

### アイテム JSON

<ExampleFile path="BP/items/custom_boots.json" />

### Attachable JSON

<ExampleFile path="RP/attachables/custom_boots.json" />

### アイテム名

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_boots=Custom Boots
```

## 結果

これで完了です。これで、堂々と歩き回れるカスタムアーマー一式が手に入りました。
これを土台にして、ゲーム内で好きなほかのアーマーを作れます。

![An armor stand and a baby zombie both equipped with a full set of custom armor.](armor_stand.png)

## おまけ - セット効果を作る

これは少し応用的ですが、カスタムアーマーを RPG のセット装備のように動かしたいとします。その場合は、セットが装備されているかをチェックして、何か特別な処理を行うコードを追加できます。

効果の処理には、`player.json` を使わずに `tick.json` と `hasitem` セレクター引数付きの関数を使うこともできます。

この例では、攻撃してきた相手を近くのどこかへテレポートさせる確率を追加し、演出用にコンソールへ一言出すだけにします。

これはプレイヤーが攻撃を受けたときに発動させたいので、`player.json` にいくつかのロジックを追加する必要があります。このファイルは非常に大きく、デフォルトのプレイヤーコンポーネントなどを上書きする都合上、既定の内容もすべて含める必要があります。

そのため、`player.json` 全体は載せず、`components` と `events` セクションに追加する必要がある部分だけを示します。`player.json` が何か分からない場合は、バニラの behavior pack を見て探し、そのままプロジェクトへコピーしてください。

まずは、ダメージを受けたときに反応し、そこからイベントを発火できる damage sensor コンポーネントを（components セクションに）追加します。

<CodeHeader>BP/entities/player.json#components</CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "on_damage": {
            "filters": {
                "all_of": [
                    {
                        "test": "has_equipment",
                        "subject": "self",
                        // Domain is the body part in this case
                        "domain": "head",
                        "operator": "==",
                        // The item identifier we want to check
                        "value": "wiki:custom_helm"
                    },
                    {
                        "test": "has_equipment",
                        "subject": "self",
                        "domain": "torso",
                        "operator": "==",
                        // Worth noting you can omit prefix for minecraft internal items i.e stick
                        "value": "wiki:custom_chest"
                    },
                    {
                        "test": "has_equipment",
                        "subject": "self",
                        "domain": "leg",
                        "operator": "==",
                        "value": "wiki:custom_leggings"
                    },
                    {
                        "test": "has_equipment",
                        "subject": "self",
                        "domain": "feet",
                        "operator": "==",
                        "value": "wiki:custom_boots"
                    }
                ]
            },
            // If all the triggers match in the filter raise the event
            "event": "wiki:armor_sets.custom.taken_damage"
        },
        // This means if it matches the check it still applies damage
        // Can be good to ignore team damage or similar scenarios
        "deals_damage": true
    }
}
```

コメントを見ると多く見えますが、実際にやっていることは、何かを検知し、必要な結果だけを絞り込み、イベントへ渡しているだけです。

イベント名は何でも構いませんが、似たイベントが複数できる場合に備えて、より具体的にしておく方がよいことが多いです。複数のセクションにまたがる場合の検索もしやすくなります。たとえば "armour_sets" で検索すれば、それに関連するイベントをすべて見つけられます。
そして最後に、同じファイル内の `events` セクションで、そのイベントが起きたときに何をするかを決めます。

<CodeHeader>BP/entities/player.json#events</CodeHeader>

```json
"wiki:armor_sets.my_custom.taken_damage": {
    "randomize": [
        {
            "weight": 1,
            // We do a sequence here as we want to apply one command on one entity and the other on ourselves
            "sequence": [
                {
                    // This will take the attacker/other because it was in context at time of raising the event in the damage_sensor
                    "queue_command": {
                        // Teleport the entity away from us
                        "command": "spreadplayers ~~ 5 20 @s",
                        // Run the command on the attacker not us
                        "target": "other"
                    }
                },
                {
                    "queue_command": {
                        "command": "tellraw @s { \"rawtext\": [{ \"text\": \"§aYour armor glows and the enemy vanishes\" }] }"
                    }
                }
            ]
        },
        {
            // Dummy weighting so it happens semi frequently
            "weight": 20
        }
    ]
}
```

以上です。必要に応じて細部は調整できますが、これでアーマーに効果を適用したり、フルセット装備を確認したり、他の装備をチェックしたりするための部品は揃いました。

装備チェックを self から other に変えて、攻撃してきた相手が何かを装備しているか確認することもできますし、ブロックやエンティティを攻撃しているかどうかで効果を変えることもできます。ここでは直接触れていませんが、これで十分な出発点にはなり、自由に工夫できるはずです。
