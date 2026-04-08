---
title: API モジュール
category: General
nav_order: 3
mentions:
    - cda94581
    - conmaster2112
---

## 概要

Script API には、開発者が Minecraft とやり取りするための module があります。また、manifest の依存関係は、アドオン内で使う module に応じて設定する必要があります。

| Module Name                         | UUID                                   | Previous Names Aliases          | First Module Version |
| ----------------------------------- | -------------------------------------- | ------------------------------- | -------------------- |
| `@minecraft/common`                 | `77ec12b4-1b2b-4c98-8d34-d1cd63f849d5` |                                 | `Engine 1.20.40`     |
| `@minecraft/debug-utilities`        | `1796ea86-0daf-4409-99ee-fd6467cf1203` |                                 | `Engine 1.20.70`     |
| `@minecraft/server`                 | `b26a4d4c-afdf-4690-88f8-931846312678` | `Minecraft`, `mojang-minecraft` | `Engine 1.16.210`    |
| `@minecraft/server-ui`              | `2bd50a27-ab5f-4f40-a596-3641627c635e` | `mojang-minecraft-ui`           | `Engine 1.18.20`     |
| `@minecraft/server-gametest`        | `6f4b6893-1bb6-42fd-b458-7fa3d0c89616` | `GameTest`, `mojang-gametest`   | `Engine 1.16.210`    |
| `@minecraft/server-net`             | `777b1798-13a6-401c-9cba-0cf17e31a81b` | `mojang-net`                    | `Engine 1.19.10`     |
| `@minecraft/server-admin`           | `53d7f2bf-bf9c-49c4-ad1f-7c803d947920` | `mojang-minecraft-server-admin` | `Engine 1.19.10`     |
| `@minecraft/server-editor-bindings` | `8518d9c7-a1f5-4bf3-acc7-78e87df595fc` |                                 | `Engine 1.19.80`     |
| `@minecraft/server-editor`          | `1d565354-296d-11ed-a261-0242ac120002` |                                 | `Engine 1.19.80`     |

## Module の説明

### `@minecraft/common`

stable release は少なめですが、この module は dependencies に書かなくても import できます。error class や interface のような基本要素を含む module です。

### `@minecraft/debug-utilities`

実験的な module です。デバッグ用ツールを提供しますが、アドオンの公開版では使わないほうがよいです。

### `@minecraft/server`

stable release は多いですが、今も活発に開発されています。サーバー側アドオン scripting の要であり、script engine とワールドの間で、ブロック、エンティティ、アイテム、プレイヤー、その他のワールドリソースをやり取りするための module です。

### `@minecraft/server-ui`

比較的小さな module ですが、サーバーとパッケージの最終利用者とのやり取りにとても役立ちます。カスタマイズ可能な form を通じてプレイヤーにデータを送る機能を提供します。

### `@minecraft/server-gametest`

現在存在する中で最も古い module ですが、stable 版は 1つもありません。vanilla の experiment のテスト、他の custom content との互換性確認、edge case の検出、再現性の確認などに使われます。content creator 向けではなく、stable 版との後方互換を保証する必要もありません。

### `@minecraft/server-net`

これは、一般的なアドオン利用者の安全を脅かす可能性があるため、[Bedrock Dedicated Servers](https://www.minecraft.net/en-us/download/server/bedrock) でのみ許可される module です。GET、SET、POST などの web request を通じて internet にアクセスできます。実験版のみ存在します。

### `@minecraft/server-admin`

この module も [Bedrock Dedicated Servers](https://www.minecraft.net/en-us/download/server/bedrock) でのみ使えます。JSON admin files に保存された基本データを処理する役割があり、元の pack に干渉せずに pack の動作を設定するために使われます。実験版のみ存在します。

### `@minecraft/server-editor-bindings`

これは editor module 用の特別な native function 群です。未文書で、creator が使うべきものではありません。ただし dependencies に書けば import はできますが、editor project として作成されたワールドでしか使えません。

### `@minecraft/server-editor`

この module は例外的です。実装は native ではなく JS module です。JS で実装されていますが存在自体は hardcode されています。dependencies に書くことはできますが、editor project として作成されたワールドでしか使えません。

## Alpha 版

Alpha 版は古い module 版で、現在のアドオンでは使うべきではなく、experimental 扱いです。Alpha 版があるのは 2つの module だけで、`@minecraft/server`（当時の名称は `mojang-minecraft`）と `@minecraft/server-gametest`（当時の名称は `mojang-gametest`）です。使う場合は、これらの名前でのみ import する必要があります。

### Alpha 2.X

新しい alpha `2.X` 系列もありますが、これは元の alpha 版とは別物です。ただしこれも experimental 版で、現在知られている名前で簡単に import できます。この版は以前の `1.X` 系列との互換性を壊す点に注意してください。

## Module の参照

JS コード内で module を import するには、module の参照が必要です。

::: warning
dependency では `"uuid"` と `"module_name"` を両方使わず、どちらか一方を選んでください。
:::

`@minecraft/server` の version `1.13.0` の例です。

<CodeHeader>BP/manifest.json#dependencies[0]</CodeHeader>

```json
{
    "module_name": "@minecraft/server",
    "version": "1.13.0"
}
```

pack を Editor Extension として扱うために必要な capability です。この場合、editor module が許可されます。

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "capabilities": ["editorExtension"]
}
```
