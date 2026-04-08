---
title: Raw Text
description: "`/tellraw` と `/titleraw` で使う raw text JSON コンポーネントを理解します。"
category: General
mentions:
    - BedrockCommands
    - GTB3NW
    - SpacebarNinja
    - zheaEvyline
    - QuazChick
---

## はじめに

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

![](tellraw.png)

Raw text は、プレイヤーにリッチテキストを送信・表示するために使います。`/tellraw` や `/titleraw` コマンドで利用できます。

角括弧 `[]` の中に、好きな複数のテキストオブジェクトを並べます。

```json
{ "rawtext": [] }
```

コンポーネントの末尾にカンマ `,` を付けることで、複数のコンポーネントを組み合わせられます。

## Text コンポーネント

通常の文字列を表示します。文字列は引用符の中に書きます。

**構文:**

```json
{ "text": "<Your Text Here>" }
```

**例:**

チャットで全プレイヤーに「Hello everyone!」と送信します。

```json
/tellraw @a { "rawtext": [{ "text": "Hello everyone!" }] }
```

### エスケープ、改行、Unicode

1. エスケープは `\` で行います。コンポーネント内で引用符 `"` を使いたいときに使います。例:

    ```json
    /tellraw @a { "rawtext": [{ "text": "He said, \"I like apples\"..." }] }
    #チャットでの表示:
    #    He said, "I like apples"...
    ```

2. 改行は `\n` を使います。例:

    ```json
    /tellraw @a { "rawtext": [{ "text": "Hello\nNext line" }] }
    #チャットでの表示:
    #    Hello
    #    Next line
    ```

3. Unicode は、アイコンや絵文字を表示するための固有の番号を提供します。例:

    ```json
    /tellraw @a { "rawtext": [{ "text": "\ue100" }] }
    ```

    - チャットでの表示:

        ![](/assets/images/text/emojis/hud/shank.png)

    注: Unicode 記号は、Minecraft 内でのみ対応するアイコン/絵文字として表示されます。

    詳しい情報と Bedrock で使える Unicode の一覧は、[Emojis & Symbols](/text/emojis) のページを参照してください。

## Selector コンポーネント

任意の対象の名前を表示します。ターゲットセレクターの引数を使えます。

**構文:**

```json
{ "selector": "<target>" }
```

**例:**

1. チャットで全プレイヤーの名前を送信します。

```json
/tellraw @a { "rawtext": [{ "selector": "@a" }] }
```

2. `wiki:winner` タグが付いた全プレイヤーの名前をチャットで送信します。

```json
/tellraw @a { "rawtext": [{ "selector": "@a[tag=wiki:winner]" }] }
```

## Score コンポーネント

スコアボードの objective からスコアを表示します。

**構文:**

```json
{ "score": { "name": "<name>", "objective": "<score>" } }
```

-   **`name`** - `@p` のようなセレクターやプレイヤー名を指定できます。
    -   **`*`** ワイルドカードを使って、読み手自身のスコアを表示することもできます。
-   **`objective`** - スコアを表示したいスコアボードの名前です。

score コンポーネントを使うには、両方が必要です。

**例:**

1. 最も近いプレイヤーの `wiki:points` スコアをチャットに表示します。

```json
/tellraw @a { "rawtext": [{ "score": { "name": "@p", "objective": "wiki:points" } }] }
```

2. 読み手の `wiki:money` スコアをチャットに表示します。

```json
/titleraw @a title { "rawtext": [{ "score": { "name": "*", "objective": "wiki:money" } }] }
```

## Translate コンポーネント

制作者がローカライズされたテキストをユーザーに表示できるようにします。翻訳対象の文字列一覧は言語ファイル内にあります。詳しくは [text guide](https://wiki.bedrock.dev/text/text-intro) を参照してください。

**構文:**

```json
{ "translate": "<string>" }
```

**例:**

```json
/tellraw @a { "rawtext": [{ "translate": "multiplayer.player.joined" }] }
#Output in chat:
#    %s joined the game
```

上の例では、`%s joined the game` が出力されます。`%s` の代わりに名前を表示するには、`with` も指定する必要があります。波括弧 `{}` ではなく配列 `[]` が必要です。

```json
/tellraw @a { "rawtext": [{ "translate": "multiplayer.player.joined", "with": ["Steve"] }] }
#Output in chat:
#    Steve joined the game
```

![](translations.png)

### %%s

`translate` と `%s` は、ローカライズファイルに対応する文字列がなくても使えます。たとえば:

```json
/tellraw @a { "rawtext": [{ "translate": "Hello %%s", "with": ["Steve"] }] }
#Output in chat:
#    Hello Steve
```

### 複数の %%s

`%%s` は複数回使えます。表示される順番に埋められます。

```json
/tellraw @a { "rawtext": [{ "translate": "Hello %%s and %%s", "with": ["Steve","Alex"] }] }
#Output in chat:
#    Hello Steve and Alex
```

### %%# で順序を変える

`%s` を埋める順序は、末尾の `s` を数字に置き換えることで変えられます。たとえば、上の例で Steve と Alex の位置を入れ替えるには次のようにします。

```json
/tellraw @a { "rawtext": [{ "translate": "Hello %%2 and %%1", "with": ["Steve","Alex"] }] }
#Output in chat:
#    Hello Alex and Steve
```

配列の代わりに rawtext コンポーネントを使うこともできます。たとえば次のようにします。

```json
/tellraw @a { "rawtext": [{ "translate": "Hello %%s and %%s", "with": { "rawtext": [{ "text":"Steve" }, { "translate": "item.apple.name" }] } }] }
#Output in chat:
#    Hello Steve and Apple
```

_@CornyFlex による追加例:_

```json
/tellraw @a { "rawtext": [{ "translate": "Role: %%%%s", "with": { "rawtext": [{ "score": { "name": "*", "objective": "wiki:role" } }, { "text":"Member" }, { "text": "Moderator" }, { "text": "Admin" }] } }] }
```

この構造を使うと、スコアに応じて選択したプレイヤーに異なるテキストを表示できます。

注: スコアは正の整数である必要があります。

-   チャットでの表示:

    -   Member - When 'wiki:role' score of the player equals 1.
    -   Moderator - When 'wiki:role' score of the player equals 2.
    -   Admin - When 'wiki:role' score of the player equals 3.

**仕組み:**

-   `%%%%s` では、引数 (`s` または整数) が与えられていないため、最初の `%%` は無効のままです。そのため、配列の値を表示できません。
-   2 つ目の `%%` では引数 `s` が指定されているので、配列の最初のスロット (`{score}`) が表示されます。
-   最初の `%%` と `{score}` の間にスペースがない (`%%s`) ため、`{score}` は最初の `%%` の整数引数として解釈され、これで有効になります。
-   これにより、スコアによって表示するスロットのインデックスを動的に変えられます。
