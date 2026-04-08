---
title: レッドストーンコンポーネント
description: レッドストーン回路を構成するさまざまな種類のコンポーネントについて学びます。
category: Documentation
tags:
    - intermediate
license: true
mentions:
    - QuazChick
---

:::tip FORMAT VERSION 1.26.10
カスタムブロックを作成する際に最新の format version を使うと、最新のレッドストーン機能にアクセスできます。
:::

このページでは、レッドストーン回路を構成するさまざまな種類のコンポーネントについて学べます。
ここで記載するのは、アドオンで作成できるコンポーネントだけです。

## レッドストーン絶縁体

:::tip
一般に、バニラブロックが完全な立方体ではなく不透明でもあれば、絶縁体として扱われます。
ただし、ブロックの機能は見た目だけで決まるわけではないので、例外があることに注意してください。
たとえば、半透明であってもスライムブロックは絶縁体ではなく、代わりにレッドストーン電力を [導通](#redstone-conductors) します。
:::

厳密には回路の一部ではありませんが、**レッドストーン絶縁体** は、電力がかかってもレッドストーン信号を _導通しない_ ため、コンパクトな回路を組むときに非常に役立ちます。

下の図では、左の通電したリピーターが石切台ブロックへ強い電力を与えています。しかし、石切台はレッドストーン絶縁体なので、その右側のリピーターは回路につながらず、通電しません。

<WikiImage
    src="insulator.png"
    alt="Diagram of a stonecutter block with a powered repeater pointing into the left of it and an unpowered repeater pointing out of the right of it."
    width="512"
    pixelated
/>

### レッドストーン絶縁体の作成

カスタムレッドストーン絶縁体を作るのは簡単です。カスタムブロックは既定でそのように動作するからです。

ブロックの JSON 定義に何かを追加する必要はありません。

### ワイヤの段差降下を防ぐ

既定では、レッドストーンダストのワイヤは絶縁体の側面を下って電力を下方向に伝えられます。
ただし、ガラスなどのほかの絶縁体と違い、バニラのハーフブロックはワイヤが側面を降りることを許しません。

[redstone conductivity](/blocks/block-components#redstone-conductivity) コンポーネントを使うと、自分のブロックでワイヤが降りるのを防げます。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_conductivity": {
    "allows_wire_to_step_down": false
}
```

## レッドストーン導体

:::tip
一般に、バニラブロックが完全で不透明なら、導体として扱われます。
ただし、ブロックの機能は見た目だけで決まるわけではないので、例外があることに注意してください。
たとえば、完全で不透明でも、観察者は [絶縁体](#redstone-insulators) なのでレッドストーン電力を導通しません。
:::

**レッドストーン導体** は絶縁体の逆で、通電すると隣接ブロックへレッドストーン信号を _導通します_。

-   **強く通電する** 場合（[redstone producer](#redstone-producers) を使う）は、隣接するレッドストーンダストやコンポーネントが回路に接続され、導通した電力を受け取ります。

-   **弱く通電する** 場合（導体の上にある、または導体へ向いているレッドストーンダストを通電する場合）は、隣接するレッドストーンコンポーネントが回路に接続され、隣接するレッドストーンダストを接続せずに導通した電力を受け取ります。

ブロックがレッドストーン導体であれば、その真下のブロックへの **ワイヤの段差降下を防ぎます**。これにより、その部分の回路からワイヤが切り離されます。

下の図では、左の通電したリピーターがコンクリートブロックへ強い電力を与えています。コンクリートはレッドストーン導体なので、その右側のリピーターも回路につながり、通電します。

<WikiImage
    src="conductor.png"
    alt="Diagram of a concrete block with a powered repeater pointing into the left of it and another powered repeater pointing out of the right of it."
    width="512"
    pixelated
/>

### レッドストーン導体の作成

カスタムレッドストーン導体を作るには、ブロックに [redstone conductivity](/blocks/block-components#redstone-conductivity) コンポーネントを含める必要があります。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_conductivity": {
    "redstone_conductor": true
}
```

:::danger REDSTONE CONSUMERS ([MCPE-232715](https://bugs.mojang.com/browse/MCPE-232715))
ブロックに `minecraft:redstone_consumer` コンポーネントを適用すると、ワイヤの切断などレッドストーン導体としてのほかの性質を保ったまま、レッドストーンを導通しなくなります。
通常のブロックと同じようにレッドストーンコンシューマーが実際にレッドストーンを導通するようにするには、`propagates_power` パラメータを `true`{lang=json} に設定する必要があります。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_conductivity": {
    "redstone_conductor": true
},
"minecraft:redstone_consumer": {
    "propagates_power": true
}
```

:::

## レッドストーンコンシューマー

レッドストーン電力が供給されると動作するブロックは、**レッドストーンコンシューマー** と呼ばれます。

下の図では、レッドストーンランプがレッドストーンコンシューマーとして動作しており、レッドストーントーチ（レッドストーンプロデューサー）から電力を受けています。

<WikiImage
    src="consumer.png"
    alt="Diagram of a lit redstone lamp with a redstone torch to the left of it."
    width="384"
    pixelated
/>

### レッドストーンコンシューマーの作成

カスタムレッドストーンコンシューマーを作るには、ブロックに [redstone consumer](/blocks/block-components#redstone-producer) コンポーネントと、レッドストーン更新に反応するカスタムコンポーネントを含める必要があります。

:::danger REDSTONE UPDATES
レッドストーン更新は、ブロックが受け取るレッドストーン電力レベルの変化だけで発生するわけではありません。
ブロックの設置や、そのブロックを含むチャンクの読み込みでも発生するため、ドアのように動作するブロックを作ることは現在できません。
:::

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_consumer": {
    "min_power": 0
},
"wiki:redstone_update_logging": {}
```

<CodeHeader>Custom Component Script</CodeHeader>

```js
import { system } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockRedstoneUpdateLoggingComponent = {
    onRedstoneUpdate({ powerLevel }) {
        console.log("Block received a redstone update with power level", powerLevel);
    },
};

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "wiki:redstone_update_logging",
        BlockRedstoneUpdateLoggingComponent
    );
});
```

## レッドストーンプロデューサー

回路へレッドストーン電力を供給するブロックは、**レッドストーンプロデューサー** と呼ばれます。
ほかのレッドストーンコンポーネントは、プロデューサーが許可する方向からその電力を受け取るために、プロデューサーへ接続できます。

レッドストーンブロックを除き、すべてのプロデューサーは 1 方向に強い電力も供給します。この強い電力は [レッドストーン導体](#redstone-conductors) によって導通され、回路にさらに多くのコンポーネントを追加できます。

下の図では、レッドストーントーチが回路のレッドストーンプロデューサーとして機能しており、下方向以外のすべての方向から接続できます。
さらに、その上のブロックへ強い電力を供給しています。

<WikiImage
    src="producer.png"
    alt="Diagram of a redstone torch with two powered repeaters pointing outwards to the left and right and a strongly powered concrete block above it."
    width="384"
    pixelated
/>

### レッドストーンプロデューサーの作成

カスタムレッドストーンプロデューサーを作るには、ブロックに [redstone producer](/blocks/block-components#redstone-producer) コンポーネントを含める必要があります。

上の図の点灯したレッドストーントーチのレッドストーンプロデューサーコンポーネントは次のようになります。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_producer": {
    "power": 15,
    "strongly_powered_face": "up",
    "connected_faces": ["up", "north", "south", "west", "east"]
}
```
