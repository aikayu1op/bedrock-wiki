---
title: Wiki開発者用テストページ
description: ただ説明があるページとして存在するための、説明付きページです。
outline_depth: 6
hidden: true
mentions:
    - TheItsNameless
    - MedicalJewel105
    - SirLich
    - SmokeyStack
    - QuazChick
---

:::danger SECRET
ここは開発者が新機能を開発し、バグを見つけるために使う特別な場所です。かなり散らかっていても気にしないでください。見た目を整える必要はありません！
:::

ねえ、ここで何をしているんですか？ どうやってここに来たんですか？ wiki の編集に戻ってください！

## 引用

`>` を使うとスペースを作れます:

> 移動しましたか？
>
> > 二重

実際には移動していません

インデントは `code` のように機能します:

    実際には移動していません

## ボタン

### デフォルト

<Button link="#buttons">テキスト</Button>

### 色付き

<Button link="#buttons" color="red">
    テキスト
</Button>

## コードブロック

### コードヘッダー

<CodeHeader>
    loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong.json
</CodeHeader>

```json
{
    "var": "a very very very loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong value"
}
```

<CodeHeader>func</CodeHeader>

<CodeHeader>func</CodeHeader>

```
scoreboard players add @a joined 0


#Your Commands Here (example)
tp @a[scores={joined=0}] 0 65 0


scoreboard players reset * joined
scoreboard players set @a joined 1

scoreboard objectives add world dummy
scoreboard players add initialized world 0


#Your Commands Here (example)
execute if score initialized world matches 0 run say New world created!


scoreboard players set initialized world 1
```

### 行番号なし

```json
{
    "var": "a very very very loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong value"
}
```

## コメント

このテキストが見えますか（いいえ）？

<!-- コメント！ 👀 -->

## コンテナ

:::info 見出し!?
このように情報コンテナを作れます
:::

:::tip 見出し!?
このようにヒントコンテナを作れます
:::

:::warning 見出し!?
このように警告コンテナを作れます
:::

:::danger 見出し!?
このように危険コンテナを作れます
:::

## フォルダビュー

<FolderView :paths="[
    'path/to/folder/with/file.mcfunction',
    'path/to/file.json',
    'get/out/of/my/swamp.mcstructure'
]" />

## 見出し 2

テキスト

### 見出し 3

テキスト

#### 見出し 4

テキスト

##### 見出し 5

テキスト

###### 見出し 6

テキスト

## 水平線

テキスト...

---

...そしてさらに！

## リスト

### チェック済み

-   [x] a
-   [x] b
-   [ ] c

### 順序付き

1. a
2. b
3. c

### 順不同

-   a
-   b
-   c

## Molang

```molang
false
true

0
0.0
0.0f
-0
-0.0
-0.0f

2.5e2
2.5e+2
2.5e-2

'string'

this

break
continue
return

!
=
<
>
!=
==
<=
>=
? :
*
/
+
-
&&
||
??
->

loop()
for_each()

c.my_value
context.my_value

q.my_value
query.my_value
query.my_value()

math.my_value
math.my_value()

t.my_value
temp.my_value

v.my_value
variable.my_value

array.my_value
array.textures[v.texture_index]

geometry.my_value

material.my_value

texture.my_value

,
;
```

## スニペット

`Ctrl + Space`

![](/assets/images/contribute/snippets/snippets.png)

## ネタバレ

<Spoiler title="Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Title">

## Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong

### Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong

#### Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong

`somelongsinglecodeline:rjseut;lwkporiv;jr;oiU;OIRJB;OUBSOIU;LJ;OIJLj;fgdhokfdxhlpjklfjoijselvjlisue;vltjvzsa\dfhgz\dfgiuszehgiushezdgiuhsdghiksdaghkdsgaghkjsdhksdauhugkysdiuhiui`

</Spoiler>

## テーブル

<Table data="my_table.json" />
