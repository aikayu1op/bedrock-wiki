---
title: 名前空間
mentions:
    - SirLich
    - MedicalJewel105
description: 名前空間はコンテンツの所有者を示す識別子であり、命名の衝突を防ぐのに役立ちます。
---

名前空間はコンテンツの所有者を示す識別子です。フォルダーのようなものだと考えるとよいでしょう。名前空間は、命名の衝突を防いでくれるため便利です。

アドオン制作における名前空間は、基本的に「コロンの左側の部分」だと考えられます。たとえば、`minecraft` は `minecraft:zombie` の名前空間です。一般的な形式は `namespace:name` です。

名前空間が役立つ具体例として、新しい Mob を作る場面を考えてみましょう。独自のコンテンツ用の名前空間を作るべきだと知らずに、`minecraft:shark` という名前を付けたとします。ところが翌年、Mojang がゲームにサメを追加することにしたらどうでしょう。`minecraft:shark` という定義が 2 つ存在することになり、命名衝突が発生します。あなたのアドオンは壊れてしまいます。サメには Mojang や他の作成者と衝突しない、固有の名前空間を選ぶべきでした。

## 名前空間の決め方

適切な名前空間は、自分だけに固有で、プロジェクトにも固有のものです。`mob`、`cars`、`content`、`custom` のような名前空間は、他の開発者も同じものを思いつくかもしれないため、**よくありません**。

適切な名前空間は短いことも大切です。名前空間は**何度も**書くことになるので、短いほどよいです。`my_amazing_mobs_addon` は、その意味でかなり使いにくい名前空間です。

プレイヤー名や会社名を使いやすい形にして、製品名と組み合わせるのがおすすめです。

良い例:

-   `wiki_mobsplus`
-   `cubeworld_mto`
-   `bworks_ftp`

**`minecraft` や `minecon` を名前空間として使わないでください。**

## 名前空間はどこで使う？

短く言えば、使える場面ではできるだけ名前空間を使うべきです。

まず、カスタムエンティティをゲームに追加する場合には名前空間を使いましょう。たとえば `wiki:shark` です。コンポーネントやイベントにも名前空間を使うことが推奨されます。Mojang が `minecraft:pig_saddled` を使っているのと同じように、`namespace:my_mob_event` や `namespace:my_component_group` を使うべきです。これはアニメーションコントローラー、レンダーコントローラー、アニメーションにも当てはまります。

たとえば、`controller.animation.namespace.entity_name.action` は `controller.animation.my_action` より望ましいです。

## 名前空間を使わない場所

実際のファイル構造には、ゲーム内でファイルパスが使われる場合を除いて、名前空間は不要です。たとえば `animations/namespace/my_entity/animation` より、`animations/my_entity/animation` のほうがわかりやすいです。

次のフォルダーにはパスで参照されるファイルが含まれるため、名前空間を含めるべきです。`functions`、`structures`、`loot_tables`、`trade_tables`、`sounds`、`textures` です。

-   **例:** `BP/functions/namespace/test.mcfunction`

名前空間については、[スタイルガイド](/meta/style-guide) も参考にしてください。

## 名前空間レジストリ

Bedrock OSS の組織は、名前空間と作者/アドオン名の対応表を管理しています。[そこで名前空間を登録することもできます。](https://github.com/Bedrock-OSS/add-on-registry)
