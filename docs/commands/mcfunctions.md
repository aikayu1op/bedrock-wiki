---
title: Functions
category: General
tags:
    - guide
mentions:
    - BedrockCommands
    - cda94581
    - zheaEvyline
    - jordanparki7
nav_order: 3
description: MCBE の functions について学びます。
---

## はじめに

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

Functions は、複数行のコマンドを含む `.mcfunction` ファイルです。ゲーム内では `/function` コマンドで実行します。

Functions は **Behavior Pack** 内の **functions** フォルダに作成します。function pack は、関数ファイルだけでシステムを構成します。

Functions は、コマンドブロックを行き来してシステムをデバッグする時間を減らすのに役立ちます。複数のワールドで使うためにシステムをまとめるのにも便利で、動作全体を変えられる多くの利点があります。

## Function Pack のフォルダ構成

<FolderView :paths="[
    'BP/functions/this_code.mcfunction',
    'BP/functions/more_of_this_code.mcfunction',
    'BP/functions/tick.json',
    'BP/functions/nested/this_code_is_nested.mcfunction',
]" />

一貫した形式を作り、誰にとっても追いやすくし、functions 全体の統一感を保つために、フォルダ構成では次のベストプラクティスに従うことをおすすめします。

1. すべての `.mcfunction` ファイルは、functions フォルダ内の名前空間付きルートフォルダに入れる必要があります。Bedrock Wiki では `wiki` 名前空間を使っていますが、名前やプロジェクトに合わせて別の名前空間を選んでもかまいません。詳しくは [namespaces](/concepts/namespaces) のページを参照してください。
    - ✅️ `BP/functions/wiki/random_number.mcfunction`
    - ❌️ `BP/functions/random_number.mcfunction`
2. パック内のフォルダ名とファイル名は `snake_case` で付ける必要があります。
    - 使えるのは **小文字** の英数字とアンダースコア (`_`) だけです。
    - ✅️ `BP/functions/wiki/scoreboard/objectives/add_all.mcfunction`
    - ❌️ `BP/functions/wiki/scoreboard/objectives/Add-All.mcfunction`
3. 適切にネストされている必要があります。
    - ✅️ `BP/functions/wiki/teleport/zone/hell`
    - ❌ `BP/functions/wiki/teleport_hellzone`
4. 名前は `action_object` 構造に従う必要があります。つまり、動詞を主語より前に置きます。
    - ✅️ `add_all`
    - ❌️ `all_add`
    - ✅️ `shuffle_position`
    - ❌️ `position_shuffle`
5. どのパスも文字数は合計 80 文字を超えてはいけません（コンソールの制限）。
6. コンテンツフォルダの複数形・単数形は統一してください。すべて複数、またはすべて単数に揃え、混在させないでください。例:

✅️ **Consistent**:

```
BP/functions/wiki/ability/ice_blast.mcfunction
BP/functions/wiki/ability/fire_trail.mcfunction
BP/functions/wiki/event/players/on_death.mcfunction
BP/functions/wiki/event/worlds/on_initialize.mcfunction
```

-   コンテンツフォルダ `ability` と `event` はどちらも単数形で統一されています。
-   `event` 内のコンテンツフォルダも、`players` と `worlds` がどちらも複数形で統一されています。

❌️ **Inconsistent**:

```
BP/functions/wiki/abilities/ice_blast.mcfunction
BP/functions/wiki/abilities/fire_trail.mcfunction
BP/functions/wiki/event/players/on_death.mcfunction
BP/functions/wiki/event/world/on_initialize.mcfunction
```

-   Only `abilities` content folder is pluralized while `event` is singular.
-   また、`event` フォルダ内では `players` が複数形なのに対し、`world` が単数形になっています。

## 初心者向けの注意

_以下は初心者向けの参考用 function ファイル例です。_

<CodeHeader>BP/functions/wiki/effects.mcfunction</CodeHeader>

```yaml
# These effects are for the spawn
effect @a[tag=wiki:at_spawn] regeneration 12 255 true
effect @a[tag=wiki:at_spawn] saturation 12 255 true
effect @a[tag=wiki:at_spawn] weakness 12 255 true

# These effects are for the nether
effect @a[tag=wiki:in_nether] fire_resistance 12 255 true
```

-   function 内のコマンドはスラッシュ (`/`) で始められません。function ファイルの各新しい行は新しいコマンドを表します（空行は無視されます）。行頭をハッシュ (`#`) にしてコメントを追加できます。`#` の後のスペースは書式上の好みです。function のコメント書式ガイドについては、**[下](#comments-style-guide)** の節を参照してください。

-   function 内のすべてのコマンドは _同じティック_ で実行されます。そのため、大きな変化を起こす function は急なラグを生むことがあり、可能であれば一部のコマンドを複数ティックに分けるとよいです。ただし、function 内のコマンドは順番どおりに実行されます。

-   Minecraft Bedrock では、1 つの function ファイルで 10,000 コマンドを超えて実行できません。元のファイル内で実行されるほかの function ファイルもこれに含まれます。

-   条件付きコマンドを実行することはできません。そうした処理は何らかの形でコマンドブロックを使うか、1.19.50 の execute 構文を使う必要があります。

-   function 内で指定遅延付きのコマンドを実行するには、スコアボードタイマーを使って各ティックごとに少しずつカウントし、特定のスコアに達したときにファイル内のコマンドを実行します。セットアップは [Scoreboard Timers](/commands/scoreboard-timers) のページを参照してください。

## コメントの書式ガイド

-   コマンドが多い function を扱うときは、コメントでハッシュ記号の数を変えて見出しレベルを分けると整理しやすくなります。
-   _必要に応じて_、さらに区別するために次のスタイルを使えます。
-   レベル 1 見出し - **# 大文字**
-   レベル 2 見出し - **## Title Case**
-   レベル 3 見出し - **### Sentence case**
-   見出しレベルは 3 つ以下、または見出しの数を増やしすぎないようにしてください。コードが雑然として見えやすくなります。参考として、以下の例を見てください。

<Spoiler title="サンプル function ファイル">

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

可読性を高めるために、レベル 1 見出しの前には 2 行、レベル 2 見出しの前には 1 行の空行を入れています。

この書き方は一貫した形式を作り、誰にとっても追いやすくし、functions 全体の統一感を保つのに役立ちます。
スコアボードとタグの規約については、**[Style Guide](/meta/style-guide#scoreboard-objectives-tags)** のページを参照してください。

## function の作成

1. `📁 com.mojang` フォルダを見つけて、`📁 development_behavior_packs` に移動します。

    - 開発用フォルダは、パックがワールドファイルにキャッシュされないため、素早く再読み込みするのに使います。

2. function pack 用のフォルダを任意の名前で作成します。これを Behavior Pack、または BP と呼びます。

3. BP フォルダ内に `📄 manifest.json` ファイルと、任意で `🖼 pack_icon.png` ファイルを作成します。
    - manifest ファイルにはパック登録に必要な情報がすべて入ります。pack icon はパックメニューに表示されます。一般的には 128x128 または 256x256 の画像を使いますが、2 の累乗ならどの解像度でもかまいません。必要に応じて拡大・縮小されます。

<Spoiler title="Sample 📄 manifest.json">

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "description": "Write Your Pack Description Here",
        "name": "Write Your Pack Name Here",
        "uuid": "00000000-0000-0000-0000-000000000000",
        "version": [1, 0, 0],
        "min_engine_version": [1, 19, 73]
    },
    "modules": [
        {
            "description": "§r",
            "type": "data",
            "uuid": "00000000-0000-0000-0000-000000000000",
            "version": [1, 0, 0]
        }
    ]
}
```

`uuid` フィールドは実際の uuid に置き換える必要があり、生成する 2 つは互いに異なる必要があります。uuid は **[uuidgenerator.net](https://uuidgenerator.net/)** で生成できます。

</Spoiler>
<Spoiler title="Sample 🖼 pack_icon.png">

Sample A:

![pack_icon.png](pack_icon.png)

Sample B:

![pack_icon.png](/assets/images/guide/project-setup/pack_icon.png)

</Spoiler>

4. `📁 functions` フォルダを作成します。このフォルダ内で **.mcfunction** で終わるファイルは、ゲーム内で function として登録され、`/function <function_name>` で実行できます。

    - ネストした function も使えます。function pack のフォルダ構成にあるように、functions フォルダからの相対パスでファイルを指定するだけです。

5. ゲーム内で behavior pack を適用し、function を試します。function ファイルの変更は `/reload` を実行するか、再ログインするだけでワールドに反映されます。

:::tip 注:

Functions にはバージョンがあり、`📄 manifest.json` に記載されたバージョンで動作します。たとえば次のようになります。

-   `min_engine_version` 1.19.50 or above will adopt the new execute syntax.
-   `min_engine_version` 1.19.70 or above will require aux values be replaced with block states.

:::

## 実行

Functions は、ゲーム内で `/function name_of_function` と入力して実行できます。これにより、function ファイル内のすべてのコマンドが 1 ティック内で実行されます。

ネストした function たとえば `BP/functions/wiki/teleport/zone/hell` は、ネストしたフォルダパスを使って `/function wiki/teleport/zone/hell` のように実行できます。

## Tick JSON

functions フォルダ内の最後のファイルは **`tick.json`** です。これは、サーバー側で毎ゲームティック実行する function を指定します（反復コマンドブロックに似ています）。配置場所は `BP/functions` フォルダです。既定では、このファイルで実行される function はオーバーワールドの原点 (`0, 0, 0`) で実行されます。**tick.json** の例:

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/function_1",
    "wiki/function_2"
  ]
}
```
> 注: このファイルの function は、プレイヤーが読み込まれているかどうかに関係なく、ワールドが *初期化* されるとすぐに実行されます。使い方を誤ると、意図しない挙動を起こすことがあります。

## サンプル Function Pack

<Card
    image="/assets/images/discord/bcc.png"
    title="ダウンロード"
    link="https://github.com/Bedrock-OSS/bedrock-examples/releases/download/download/functions_sample.mcpack"
/>

## Functions のトラブルシューティング

`/function` を使ったときに、function がコマンド候補に表示されないことがあります。これは通常、function 内の 1 つ以上のコマンドにエラーがあるためです。

クリエイター設定で [Content Log](/guide/troubleshooting#content-log) を有効にすると、function pack にエラーがあるかどうか、どの function のどの行で、コマンドのどんな構文エラーが起きているかを確認できます。

エラー一覧は、ワールドを読み込むたび、または `/reload` を実行するたびに生成され、ファイル編集後の変更が反映されます。表示は数秒間画面上に出るほか、設定内の content log 履歴でも確認できます。

![contentLogToggles](/assets/images/commands/mcfunctions/content-log-toggles.png)

![contentLogHistory](/assets/images/commands/mcfunctions/content-log-history.png)

## プロ向けの作業環境セットアップ（任意）

専用の作業環境を整えるのは、function pack やアドオンを本格的に開発する最後のステップです。基本的なテキストエディタでも function は書けますが、次のツールを使うとエラーをすぐ見つけられ、他人と共同作業でき、変更を Minecraft に直接同期できます。

### 1. Visual Studio Code (VS Code)

**VS Code** を指令室だと思ってください。強力で無料のコードエディタで、`.mcfunction` ファイルを書くのが Notepad よりずっと簡単になります。

- **ダウンロード:** [Official VS Code Site](https://code.visualstudio.com/Download) から入手できます。
- **必須プラグイン:** インストールしたら、左サイドバーの **Extensions** アイコン（4 つの四角）をクリックし、**MCBE Command Checker** を検索します。
- **なぜ使うのか?**
    - **シンタックスハイライト:** コマンドの種類に応じて色が変わり、読みやすくなります。
    - **自動補完:** 入力中に、正しい引数・対象・ブロック名を提案してくれます。
    - **エラー検出:** ゲームを開く前に、 টাইポや無効な構文を赤い下線で示してくれます。

例のスクリーンショット:

![Editing a .mcfunction file in VSCode](/public/assets/images/commands/mcfunctions/mcfunction-file-vscode.png)

### 2. GitHub によるバージョン管理

**GitHub** は、プロジェクトの「セーブポイント」として機能するクラウドサービスです。

- **アカウント作成:** [GitHub.com](https://github.com/) で登録します。
- **利点:**
    - **クラウドバックアップ:** PC が壊れても作業を失いません。
    - **共同作業:** コードへのリンクを共有でき、ファイルのやり取りなしで他人にレビューや修正を手伝ってもらえます。
    - **履歴:** 今日の変更と 1 週間前の変更の違いを正確に確認できます。
    - **リリース:** パックが公開可能になったら「Release」を作成できます。これにより、v1.0 や v2.1 のような特定バージョンをダウンロード可能な `.mcpack` として公開でき、プレイヤーが安定版を見つけやすくなります。

### 3. GitHub Desktop

GitHub はクラウド上にありますが、**GitHub Desktop** はそれとやり取りするための PC アプリです。複雑な Git コマンドを覚えずにファイルを管理するには、初心者にとって最も簡単な方法です。

- **ダウンロード:** [desktop.github.com](https://desktop.github.com) から入手できます。
- **作業の流れ:** VS Code でコードを書き終えたら、GitHub Desktop を使って変更を "Commit"（保存）し、"Push"（クラウドへアップロード）します。

### 4. フォルダのリンク

Bedrock 開発で最大の難関は、"Work" フォルダから Minecraft の "Behavior Pack" フォルダへファイルを移すことです。**Directory Junction**（実際のフォルダのように振る舞うショートカット）を作れば、この手動作業を省けます。

`\\GitHub\\ProjectName` フォルダを Minecraft の `\\development_behavior_packs\\ProjectName` フォルダにリンクすると、VS Code で保存した変更は Minecraft のファイルに **即座に反映** されます。

**フォルダをリンクする方法（Windows）:**

1.  GitHub フォルダ内でプロジェクトを見つけます。
> 例:
> ```
> C:\Github\YOUR_PROJECT_NAME
> ```
2.  Minecraft の開発用フォルダを見つけます。
> 例:
> ```
> C:\Users\YOUR_NAME\AppData\Roaming\Minecraft Bedrock\Users\Shared\games\com.mojang\development_behavior_packs\YOUR_PROJECT_NAME
> ```
3.  **コマンドプロンプト** を管理者として開きます。
4.  `mklink /J` コマンドでリンクします。
> 例:
> ```
> mklink /J "Path\To\Minecraft\Folder" "Path\To\GitHub\Folder"`
> ```

:::tip
これらのフォルダをリンクすれば、Minecraft を再起動したりワールドに入り直したりしなくても作業を試せます。VS Code で保存し、ゲーム内で `/reload` を実行するだけで、変更がすぐ反映されます。

**補足:** VS Code の **Auto Save**（**File > Auto Save**）を有効にすると、さらに速くなります。Minecraft に戻って `/reload` を実行するだけです。
:::
