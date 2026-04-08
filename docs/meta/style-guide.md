---
title: スタイルガイド
description: Minecraft の制作物を一貫させるためのガイドです。
mentions:
    - SirLich
    - solvedDev
    - MedicalJewel105
    - ChibiMango
    - zheaEvyline
    - QuazChick
---

この文書では、Bedrock Wiki のアドオン制作向けスタイルガイドを紹介します。このガイドは、アドオン制作中のベストプラクティスを促し、誰もが従える一貫した形式を作ることを目的としています。

:::tip
スタイルガイドは生きている文書であり、アドオン制作の変化に合わせて進化します。更新や変更が必要だと思ったら、ぜひ連絡してください！
:::

## フォルダー構成

-   ファイルパスにスペースを入れないでください。`use_underscores` を使いましょう。
-   識別子、ファイル名、フォルダー名に `CAPITALS` を使わないでください。ただし `'BP'` と `'RP'` のフォルダー名は大文字でも構いません。
-   どのパスも全体の文字数は 80 文字を超えないようにしてください（コンソールの制限）。
-   コンテンツフォルダーは、複数形と単数形の使い方を統一してください。すべて複数形にするか、すべて単数形にするかのどちらかにして、混ぜないでください。例:

✅️ **統一されている**:

```
BP/functions/wiki/ability/ice_blast.mcfunction
BP/functions/wiki/ability/fire_trail.mcfunction
BP/functions/wiki/event/players/on_death.mcfunction
BP/functions/wiki/event/worlds/on_initialize.mcfunction
```

-   コンテンツフォルダー `ability` と `event` はどちらも単数形で統一されています。
-   `event` フォルダー内のコンテンツフォルダーも、`players` と `worlds` の両方が複数形なので統一されています。

❌️ **統一されていない**:

```
BP/functions/wiki/abilities/ice_blast.mcfunction
BP/functions/wiki/abilities/fire_trail.mcfunction
BP/functions/wiki/event/players/on_death.mcfunction
BP/functions/wiki/event/world/on_initialize.mcfunction
```

-   `abilities` のコンテンツフォルダーだけが複数形で、`event` は単数形になっています。
-   さらに `event` フォルダー内でも、`players` は複数形なのに `world` は単数形です。

## 識別子

数字で始まる識別子は使わないでください。特に、_数字だけ_ の識別子は避けてください。これは entities、component_groups、events、その他 `namespace:name` ペアを使うすべてに当てはまります。

## ファイル名とフォルダー名

| 概念 | 例 |
| ---- | -- |
| Behavior Pack | dragons_BP |
| Resource Pack | dragons_RP |
| Geometry | dragon.geo.json |
| Animations | dragon.animation.json<br>dragon.anim.json |
| Animation Controllers | dragon.animation_controllers.json<br>dragon.ac.json |
| Entity | dragon.behavior.json<br>dragon.se.json<br>_(se: server entity)_ |
| Client Entity | dragon.entity.json<br>dragon.client_entity.json<br>dragon.ce.json |
| Item | dragon_tooth.item.json |
| Legacy Item (BP) | dragon_tooth.item.bp.json |
| Legacy Item (RP) | dragon_tooth.item.rp.json |
| Render Controllers | dragon.render_controllers.json<br>dragon.rc.json |
| Loot Table | dragon.json |
| Recipe | dragon_saddle.recipe.json |
| Spawn Rules | dragon.spawn.json |
| Trade Table | dragon.json |
| Particle Effect | dragon_magic.particle.json |
| Texture | dragon.png |
| Script | dragonFlight.js |

## Namespaces

適切な namespace は、自分自身かチームだけに固有であるべきです。`mob`、`cars`、`content`、`custom` のような namespace は、他の開発者も同じ namespace を思いつく可能性があるため、**よくありません**。

`minecraft` namespace はバニラコンテンツ専用なので、バニラコンテンツを上書きする場合以外には使えません。

個人プロジェクトでは自分の名前を少し変えたものを、チームプロジェクトではチーム名を少し変えたものを使ってください。

複数の開発者が同じプロジェクトで作業するときは、namespace は常に共有されるべきです。クレジットを区別したい場合はサブインデックスを使います。例: `ascent.wiki:dragon`

namespace を使う場所:

-   Biomes
    -   Tags
-   Blocks
    -   Culling rules
    -   Culling layers
    -   Crafting tags
    -   Tags
-   Entities
    -   Component groups
    -   Events
    -   Families
-   Items
    -   Cooldown categories
    -   Catalog groups
    -   Tags
-   Particles

### Namespace フォルダー

いくつかのコンテンツはファイルパスで識別されます。そのため、namespace として機能するフォルダーに入れるべきです。

<FolderView :paths="[
    'BP/functions/<namespace>/*.mcfunction',
    'BP/loot_tables/<namespace>/*.json',
    'BP/trading/<namespace>/*.json',
    'BP/structures/<namespace>/*.mcstructure',
    'RP/sounds/<namespace>/*.ogg',
    'RP/textures/<namespace>/*.png',
]" />

他のフォルダーには namespace を含めないでください。

## サブインデックス

サブインデックスとは、連結された概念を区切るために `.` を使うことです。サブインデックスは、大きいものから小さいものへ降順で並べます。

✔️ `animation.controller.dragon.flying.taking_off`

❌ `animation.controller.dragon_take_off_flying`

サブインデックスでは、スペースの代わりに `.` ではなく `_` を使います。

✔️ `animation.controller.dragon.flying.taking_off`

❌ `animation.controller.dragon.flying.taking.off`

entities にもサブインデックスを使えます。例: `wiki:dragon.drake`

## グループとイベントは互いに補完するべき

| Group | Event |
| ----- | ----- |
| wiki:wild | ✔️ wiki:become_wild |
| wiki:wild | ❌ wiki:wild |
| wiki:tame | ✔️ wiki:on_tame |
| wiki:tame | ❌ wiki:tame |

## Short-Name は汎用的にする

Short-name はファイル固有の識別子で、識別子と表示名を対応付けるために使われます。アニメーションコントローラーや render controller を再利用できるので便利です。そのため、short-name は汎用的であるべきです。

✔️ `"sit": "animation.dragon.sit"`

❌ `"dragon_sitting": "animation.dragon.sit"`

この形式の short-name を使うと、`sit` short-name を使って sit アニメーションを再生できるので、すべてに共通の "sit" アニメーションコントローラーを使えます。

## Functions

1. すべての `.mcfunction` ファイルは、functions フォルダー内の namespace 付きルートフォルダーに置く必要があります。Bedrock Wiki では `wiki` namespace を使いますが、あなたは自分の名前やプロジェクトに基づく namespace を選んでも構いません。詳細は [namespaces](/concepts/namespaces) のページを参照してください。
    - ✅️ `BP/functions/wiki/random_number.mcfunction`
    - ❌️ `BP/functions/random_number.mcfunction`
2. 正しくネストされていなければなりません。
    - ✅️ `BP/functions/wiki/teleport/zone/hell.mcfunction`
    - ❌️ `BP/functions/wiki/teleport_hellzone.mcfunction`
3. 名前は `action_object` 構造に従う必要があります。つまり、動詞は対象の前に来るべきです。
    - ✅️ `add_all`
    - ❌️ `all_add`
    - ✅️ `shuffle_position`
    - ❌️ `position_shuffle`

### Functions 内のコメント

-   多数のコマンドを含む functions を扱うときは、コメント内で複数の `#` を使って見出しレベルを分けると整理しやすくなります。
-   _任意で_、これらのレベルをさらに区別するために、次のようなスタイルを使えます。
    -   level 1 headers - **# UPPERCASE**
    -   level 2 headers - **## Title Case**
    -   level 3 headers - **### Sentence case**
-   コードが散らかって見えるので、見出しレベルを 3 つ以上使ったり、見出しを増やしすぎたりするのは避けましょう。参考用に、下の例ファイルを見てください。

<Spoiler title="Example Function File">

<CodeHeader>BP/functions/wiki/ability/fire_trail.mcfunction</CodeHeader>

```yaml
# ON PLAYER ITEM DROP

## Give Effects
### Fire resistance
execute at @e[type=item,name="Fire Trail Ability"] run effect @p[r=3] fire_resistance 10 255
### Speed
execute at @e[type=item,name="Fire Trail Ability"] run effect @p[r=3] speed 10 1 true

## Add Particle Time (10s)
execute at @e[type=item,name="Fire Trail Ability"] run scoreboard players set @p[r=3] abilities.fire_trail 200

## Delete Item
kill @e[type=item,name="Fire Trail Ability"]


# ENTITY TIMER

## Emit Particle Trail
execute at @a[scores={wiki:ability.fire_trail=1..}] run particle minecraft:basic_flame_particle ~~~

## Countdown Timer
scoreboard players remove @a [scores={wiki:ability.fire_trail=1..}] wiki:ability.fire_trail 1
```

</Spoiler>

可読性を高めるため、level 1 見出しの前には 2 行、level 2 見出しの前には 1 行の空行を入れる点に注意してください。

このやり方は、一貫した形式を作って誰もが従いやすくし、functions 全体で統一性を保つのに役立ちます。

## Scoreboard Objectives と Tags

-   namespace で始め、`snake_case` を使う必要があります。
    -   これにより、同じタグや objective を使うパックとの衝突を防げます。
-   特殊文字として使えるのは小文字（a-z）、アンダースコア（`_`）、ドット（`.`）だけにしてください。

**Objective の例:**

-   `wiki:blocks_traveled.overworld`
-   `wiki:q.is_sneaking`
-   `wiki:q.is_armed_any`

**Tag の例:**

-   `wiki:inventory.full`
-   `wiki:inventory.empty`
-   `wiki:is_flying`

:::info NOTE:
Tags は明確な状態を表します。つまり、タグが存在するなら、その条件は true です。これが、同様の形で表現された Molang query に `q.` プレフィックスが付かない理由です。
:::

### Score Holder

-   ドット（`.`）またはハッシュ（`#`）を先頭に付け、`PascalCase` を使う必要があります。
    -   これにより、同名の gamertag との衝突を防ぎ、score holder が objective と密接に使われることから見た目でも区別しやすくなります。
    -   namespace の代わりにプレフィックスを使うのは、名前空間付き objective がすでに他のパックとの衝突を防いでいるため、簡潔さを保つためです。
-   ドット（`.`）以外の特殊文字は使えません。

**例:**

-   `.Ores.Iron`
-   `.Ores.DeepslateIron`
-   `.200`

:::tip **TIP:**
ハッシュ（`#`）を付けた score holder は、scoreboard のサイドバーに表示されません。ただし、構文エラーを避けるためにダブルクォート（`" "`）で囲む必要があります。
:::

## 可能ならアニメーションファイルをまとめる

例:

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.8.0",
    "animations": {
        "animation.dragon.sit": { ... },
        "animation.dragon.fly": { ... },
        "animation.dragon.roar": { ... },
  }
}
```

## テクスチャは名前ではなくパスで分ける

✔️ `RP/textures/wiki/dragon/red`

❌ `RP/textures/wiki/dragon_red_skin`

✔️ `RP/textures/wiki/npc/dragon_hunter/archer`

❌ `RP/textures/wiki/npc/dragon_hunter_archer`

## `.lang` ファイルのコメント

ローカライザー向けのコメントは、必ず次の形式で行末に入れてください。

```lang
the.key=The string	## Comment, intended for the one localizing.
```

**行末コメントの前にある空白は、スペースではなくタブでなければなりません。**

行単位のコメントは整理のために使って構いませんが、ローカライズに重要な情報を入れるべきではありません。

## 略語

### パックの種類

| 略語 | パック種別 |
| ---- | ---------- |
| BP | Behavior Pack |
| RP | Resource Pack |
| SP | Skin Pack |

### 言語

| 略語 | 言語 |
| ---- | ---- |
| JS | JavaScript |
| JSON | JavaScript Object Notation |
| NBT | Named Binary Tag |
| TS | TypeScript |

### その他

| 略語 | 概念 |
| ---- | ---- |
| AC | Animation Controller |
| RPAC | Resource Pack Animation Controller |
| BPAC | Behavior Pack Animation Controller |
| BDS | Bedrock Dedicated Server |
| HUD | Heads-Up Display |
| IDE | Integrated Development Environment |
| OSS | Open-Source Software |
| UI | User Interface |
| VS Code | Visual Studio Code |

## 定義フォーマットの順序

ブロック、エンティティ、アイテムは、以下の順序に従う必要があります。

### Blocks

-   `format_version`
-   `minecraft:block`
    -   `description`
        -   `identifier`
        -   `menu_category`
            -   `category`
            -   `group`
        -   `states`
        -   `traits`
    -   `components`
    -   `permutations`
        -   `condition`
        -   `components`

### Entities

-   `format_version`
-   `minecraft:entity`
    -   `description`
        -   `identifier`
        -   `spawn_category`
        -   `is_spawnable`
        -   `is_summonable`
        -   `properties`
    -   `component_groups`
    -   `components`
    -   `events`

### Items

-   `format_version`
-   `minecraft:item`
    -   `description`
        -   `identifier`
        -   `menu_category`
            -   `category`
            -   `group`
    -   `components`

## カスタムコンポーネント

### 変数名

PascalCase を使い、`Block` または `Item` を接頭辞に、`Component` を接尾辞にしてください。たとえば `const BlockMeltableComponent = { ... }` のようにし、`const meltable = { ... }` のようにはしません。

これにより、`registerCustomComponent` で使っているものと、他の場所で使っている値を区別しやすくなります。
