---
title: 取引の動作
category: General
nav_order: 2
mentions:
    - Ciosciaa
    - MedicalJewel105
description: エンティティに村人のような取引能力を持たせる方法です。
---

エンティティを取引者にするには、`minecraft:trade_table` または `minecraft:economy_trade_table` コンポーネントを使います。どちらも指定したパスから取引 UI を開きますが、`economy_trade_table` の方には Village & Pillage の取引要素に関する追加オプションがあります。ほかに必要な AI ゴールとしては、`minecraft:behavior.trade_with_player`、任意で `minecraft.behavior:trade_interest`（モブがアイテムを持ったり提示したりできるようにする）、さらに必要に応じて `"minecraft:trade_resupply": {}` があります。

シンプルな取引 UI なら、`trade_table` と `trade_with_player` コンポーネントで十分です。

1. エンティティのコンポーネントに `"minecraft:behavior.trade_with_player": {}` を追加します。
2. 次のコードをエンティティのコンポーネントグループにコピーします。ここでは `"wiki:trader"` とします。

<CodeHeader>BP/entities/trader.json</CodeHeader>

```json
"minecraft:trade_table": {
	"display_name": "Trading Entity", // Text to be displayed.
	"table": "trading/trading_entity_trades.json", // Path to the trade table file
	"new_screen": true //If set to false, the UI will display as the pre-Village&Pillage one.
}
```

3. 次に、そのコンポーネントグループがイベント経由でエンティティに追加されていることを確認します。`minecraft:entity_spawned` イベントで追加するのがよいでしょう。スポーン時に発火するためです。
   イベントやコンポーネントグループにまだ自信がない場合は、エンティティ定義のルールや概念を先に確認してください。[エンティティ入門](/entities/entity-intro-bp) を参照してください。

:::warning
コンポーネントに直接追加すると、ワールド内のすべてのエンティティに対して空の取引 UI が表示されるなど、さまざまな問題を引き起こします。取引 AI ゴールには既知の問題があるため、コンポーネントグループ内で追加する必要があります。
:::
