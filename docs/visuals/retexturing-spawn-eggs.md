---
title: スポーンエッグの再テクスチャ
description: エンティティのスポーンエッグの既定テクスチャを変更します。
category: Tutorials
tags:
    - beginner
mentions:
    - SirLich
    - Joelant05
    - MedicalJewel105
    - aexer0e
    - QuazChick
---

カスタムエンティティには、スポーンエッグが自動的に付与されます。
このスポーンエッグはクリエイティブメニュー内にあり、`item.spawn_egg.entity.wiki:custom_entity.name` のような名前で表示されます。
スポーンエッグの名前もテクスチャも変更したい場合は、lang ファイルで設定できます。

このチュートリアルでは、スポーンエッグを再テクスチャして、卵らしさを減らし、スポーンさせる対象により近い見た目にします。

## テクスチャを作成する

Blockbench を使えば、エンティティのスクリーンショットを簡単に撮れます。モデルを読み込み、ドロップダウンからスクリーンショットの書き出しを選びます。

このような画像が不要なら、自分でピクセルアートを作っても、好きな画像を使ってもかまいません。正方形であることだけ注意してください。

## テクスチャを追加する

テクスチャファイルは `RP/textures` の下に追加します。
他のアドオンとの互換性問題を避けるため、アドオン内でテクスチャ専用のフォルダーを分けておくことを強くおすすめします。

この wiki ではテクスチャを `RP/textures/wiki` フォルダーに置いているため、テクスチャの場所は `RP/textures/wiki/items/spawn_egg/custom_entity.png` のようになります。

## テクスチャに名前を付ける

次に、テクスチャの短い名前を付けます。これは item texture atlas ファイルで設定できます。

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:custom_entity_spawn_egg": {
            // "wiki:custom_entity_spawn_egg" はテクスチャの short-name で、後で参照できます
            "textures": "textures/wiki/items/spawn_egg/custom_entity"
        }
        // ここに他のスポーンエッグテクスチャを追加できます
    }
}
```

## 新しいテクスチャを使う

これで、Resource Pack の entity ファイル内で新しいテクスチャを使えます。

<CodeHeader>RP/entity/custom_entity.json#description</CodeHeader>

```json
"spawn_egg": {
    "texture": "wiki:custom_entity_spawn_egg", // "wiki:custom_entity_spawn_egg" は手順 1 で作成したテクスチャの short-name と一致させます
    "texture_index": 0
}
```

さっそくテストしてみましょう。
