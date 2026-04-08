---
title: textures_list.json
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - AFoxyToast
    - TheItsNameless
description: textures_list ファイルは、Minecraft が各テクスチャをキャッシュして、textures フォルダー内の各画像を探すより速く取得できるようにする仕組みです。
---

## 概要

textures list は、Minecraft が各テクスチャを _キャッシュ_ して、textures フォルダー内の各画像を順に探すより速く取得できるようにする仕組みです。
テクスチャが大量にあるときは特に重要で、Minecraft がテクスチャを取り違えたり、まったく読み込まなかったりする可能性を減らせます。

textures をファイルに列挙していない場合、Minecraft が content log に _warning_ を出すことがあります。
テクスチャ数が少ないなら無視しても構いませんが、それでも一覧には入れておくことが推奨されます。

## どのテクスチャを入れるべき？

どんなテクスチャでも構いません。ベストプラクティスとパフォーマンスの観点からは、すべてのテクスチャを `textures_list.json` に入れるべきです。

## ファイル構成

構成は単純です。ファイル自体は `RP/textures` に置き、名前は `textures_list.json` です。
ファイルにはテクスチャパスの配列を入れます（`textures` フォルダー内のファイルパスで、`.texture_set.json` や `.png` などの拡張子は除きます）。

<CodeHeader>RP/textures/textures_list.json</CodeHeader>

```json
[
    "textures/blocks/foo",
    "textures/blocks/bar",

    "textures/items/foo",
    "textures/items/bar",

    "textures/models/foo",
    "textures/models/bar",

    "textures/entity/foo",
    "textures/entity/bar"
]
```

## 自動化

テクスチャが大量にあると、すべてのテクスチャパスを手で列挙するのは面倒です。
その場合は、便利なフィルターを備えた [Regolith](https://regolith-docs.readthedocs.io) を使うほうがよいかもしれません。
