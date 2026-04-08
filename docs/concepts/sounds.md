---
title: サウンド
description: バニラの音を上書きせずにカスタムサウンドを追加する方法を学びます。
tags:
    - intermediate
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - aexer0e
    - MedicalJewel105
    - Justash01
    - DasEtwas
    - TheItsNameless
    - ThomasOrs
    - QuazChick
---

Bedrock では、バニラサウンドを上書きせずにカスタムサウンドを追加できます。これはリソースパックにファイルを追加することで行います。

:::tip
サウンドを学ぶ最良の方法は、デフォルトのリソースパックをダウンロードしていじってみることです。
:::

### フォルダー構成

サウンドを追加するときに編集する主なファイルは 2 つあります。`sound_definition` が `sounds` の中にネストされている点に注意してください。

サウンドファイル自体は `sounds` フォルダーの中に追加し、次のいずれかの形式にできます。

<FolderView :paths="[
	'RP/sounds/example.wav',
	'RP/sounds/example.ogg',
	'RP/sounds/example.fsb',
	'RP/sounds/sound_definitions.json',
	'RP/sounds.json',
]" />

## sound_definitions.json

`sound_definitions.json` では、新しいサウンドの short-name を定義します。これは、`short-name` や `id` を実際のサウンドパスに対応付けるものだと考えてください。以下は、`example.toot` という新しいトランペット音を追加する `sound_definitions.json` の例です。

<CodeHeader>RP/sounds/sound_definitions.json</CodeHeader>

```json
{
    "format_version": "1.14.0",
    "sound_definitions": {
        "example.toot": {
            "category": "neutral",
            "sounds": ["sounds/trumpet"]
        }
    }
}
```

この方法で追加したサウンドは `/playsound` で再生できます。`playsound` には自動補完がないので、入力ミスに注意してください。

:::warning
`sounds` のようにファイルパスで参照される新しいファイルは、読み込むためにクライアントの完全な再起動が必要です。つまり、サウンドが動かない場合は、ワールドを再読み込みするのではなく、MC クライアント全体を再起動してください。
:::

### `/playsound` の音量メモ

ゲームは、サウンド定義の音量と掛け合わせる前に、サウンド音量を最大 1.0 にクランプします。

`/playsound` では、聞こえる最大距離は `min(max_distance, max(volume * 16, 16))` で決まります。
サウンド定義で `"max_distance"` が指定されていない場合は、`playsound_volume * 16` と同じです。

距離による音の減衰はおおよそ次のようになります。実際のグラフは線形ではない場合があります。

![](sound_graph.png)

上の図は、**音量パラメータが 1 以上のとき**の距離によるおおよその減衰です。`playsound` の `<volume>` が聞こえる範囲を制限していることに注目してください。
`distance` 軸は、音を聞く側（プレイヤー）から音源までの距離です。対応する `volume` 軸の値は、`playsound` の音量を 1 で上限設定したあとに、さらにサウンド定義の音量を掛けて最終的な再生音量を求めるための係数です。式で書くと、`final_volume = min(playsound_volume, 1) * graph_volume * sound_definition_volume` となります。

**注:** 聞こえる音量の距離減衰は、コマンドに指定した音量パラメータの影響を受けません。

たとえば `mob.ghast.affectionate_scream` は `"min_distance": 100.0` を設定していますが、`/playsound` で音量 1 を指定して再生すると、最大でも 16 ブロック先からしか聞こえません。より大きな音量を指定すると、聞こえる範囲が広がります。十分大きな音量で遠くまで聞こえるようにした場合でも、音量が小さくなり始めるのは 100.0 を超えてからです。

遠くまで聞こえるけれど、距離に応じて音量が連続的に下がるサウンドを作りたい場合は、たとえば `"volume": 0.01` を追加し、`playsound` コマンドで大きな `<volume>` を使う方法があります。`/playsound` 側の音量を高くすると広い可聴範囲が得られ（たとえば 4 なら上の計算上 64 ブロック）、一方で定義側の音量を低くしておけば、再生音が早い段階で 1.0 に達してしまうのを防げます。

### トップレベルキー

上の例では `category` と `sounds` という 2 つの `top-level` フィールドを示しました。`sounds` は後ほど詳しく説明しますが、その他の `top-level` キーはここで説明します。

#### Categories

カテゴリは、各サウンドをどのように再生するかをエンジン内部で決めるために使われます。異なるチャンネルを使って別の効果を得ることもできます。

| Category | 備考 |
| -------- | ---- |
| block    |      |
| bottle   |      |
| bucket   |      |
| hostile  |      |
| music    |      |
| neutral  |      |
| player   |      |
| record   |      |
| ui       | このカテゴリのサウンドは範囲制限を無視します |
| weather  |      |

#### min_distance

音源からこの距離を超えると、サウンド音量が減衰し始めます。既定値は 0.0 です。値は float（例: 1.0）でなければならず、そうでない場合は無視されます。

#### max_distance

音源からこの距離を超えると、サウンド音量が最も小さくなります（範囲内にある場合）。値は float（例: 1.0）でなければならず、そうでない場合は無視されます。

### Sound definitions

上の例では、`sounds` を 1 つのパスを持つ単純なリストとして示しました。これは単純なサウンドには向いていますが、できることは多くありません。まず、リストに複数のサウンドを追加できます。これらは再生時にランダム化されます。

<CodeHeader>RP/sounds/sound_definitions.json</CodeHeader>

```json
{
    "format_version": "1.14.0",
    "sound_definitions": {
        "example.toot": {
            "category": "neutral",
            "sounds": ["sounds/trumpet", "sounds/trumpet2", "sounds/trumpet3"]
        }
    }
}
```

さらに、文字列ではなくオブジェクトとして各サウンドを定義することもできます。これにより、より細かな制御ができ、新しい設定も使えます。文字列とオブジェクトの形式は混在可能です。

#### name

ファイルへのパスです。たとえば `"sounds/music/game/creative/creative1"` のように指定します。

#### stream

同時に再生できる数を制限します。再生時にゲームが音声データ全体をメモリへ読み込まず、少しずつ扱うようになるため、メモリ使用量を抑えられます。音声が多いワールドでの性能改善に役立ちます。

#### volume

サウンドの大きさです。`0.0` から `1.0` の範囲です。サウンドを、元のエンコード以上に大きく聞かせることはできません。既定値は `1.0` です。
カスタムリソースパックのサウンドは、1.0 を超える有効値を持てます。

#### load_on_low_memory

低メモリに近い場合でもサウンドの読み込みを強制します。`load_on_low_memory` は 1.16.0 以降では非推奨です。

#### pitch

サウンドのピッチ（低い/高いの聞こえ方）です。正の値である必要があります。たとえば `2.3` なら、サウンドは 2.3 倍の速さで再生され、そのぶん高い音になります。既定値は `1.0` です。

#### is3D

`true` にするとサウンドが方向性を持ちます。既定ではすべてのサウンドで `true` です。`music` と `ui` のサウンドでは無視されます。`false` のサウンドだけがステレオで再生されます。

#### interruptible

既定値は `true` です。

#### weight

リストに複数のサウンドがある場合、再生されるサウンドはランダムに選ばれます。`"weight"`（5 のような整数値）は、そのサウンドがリストから選ばれる相対確率を表します。たとえば、2 つのサウンドがあり、1 つが `"weight": 10`、もう 1 つが `"weight": 2` なら、前者は後者より約 5 倍選ばれやすくなります（正確には `10 / (10 + 2) = 83.3%` 対 `2 / (10 + 2) = 16.7%`）。既定値は `1` です。

### 例

以下は、これらのオプションを含む、より実際的な例です。

<CodeHeader>RP/sounds/sound_definitions.json#sound_definitions</CodeHeader>

```json
"block.beehive.drip": {
    "category": "block",
    "max_distance": 8,
    "sounds": [
        {
            "name": "sounds/block/beehive/drip1",
            "load_on_low_memory": true
        },
        "sounds/block/beehive/drip2",
        "sounds/block/beehive/drip3",
        "sounds/block/beehive/drip4"
    ]
}
```

## sounds.json

サウンドを自動で鳴らしたい場合は、`sounds.json` ファイルに追加できます。これによりサウンド定義がゲームイベントに直接結びつき、`/playsound` を使わなくても再生されます。

サウンドはさまざまなカテゴリに追加できます。

| Category                | 備考 |
| ----------------------- | ---- |
| block_sounds            | ブロックのヒット、ステップ、破壊音を含みます |
| entity_sounds           | エンティティの死亡、環境音、被ダメージ音などを含みます（カスタムも含む！） |
| individual_event_sounds | beacon の起動、チェストを閉じる音、爆発音などを含みます |
| interactive_sounds      | 作業中です |

### エンティティサウンドの追加

他のカテゴリにもサウンドを追加できると思いますが、私は主に `entities` カテゴリへの追加しか経験がありません。エンティティサウンドは、エンティティのライフサイクルのさまざまな場面で自動再生されます。

一般的なイベント:

| Events         | 備考 |
| -------------- | ---- |
| ambient        | うなり声、鳴き声、ガストの音など、ランダムに再生される |
| attack         | 近接攻撃用 |
| attack.strong  | `behavior.delayed_attack` による攻撃用 |
| cast.spell     | 召喚開始時用 |
| death          | 死亡時に再生される |
| fall.big       | 高い場所から地面に落ちたとき用 |
| fall.small     | 低い場所から地面に落ちたとき用 |
| hurt           | ダメージを受けたときに再生される |
| prepare.attack | 召喚完了時用 |
| roar           | 吠え声用 |
| shoot          | 発射物を撃つとき用 |
| splash         | 水しぶきを上げたとき用 |
| step           | エンティティが地面を移動したときに再生される |

自動でトリガーされると思われるものの、詳細がないサウンドイベントもたくさんあります。

| 不明なカテゴリ |
| ------------------ |
| ambient.in.water   |
| breathe            |
| death.in.water     |
| eat                |
| hurt.in.water      |
| jump               |
| mad                |
| scream             |
| sleep              |
| sniff              |
| spit               |
| splash             |
| stare              |
| swim               |
| warn               |

### 例

<CodeHeader>RP/sounds.json</CodeHeader>

```json
{
    "entity_sounds": {
        "entities": {
            "wiki:elephant": {
                "volume": 1,
                "pitch": [0.9, 1.0],
                "events": {
                    "step": {
                        "sound": "elephant.step",
                        "volume": 0.18,
                        "pitch": 1.1
                    },
                    "ambient": {
                        "sound": "elephant.trumpet",
                        "volume": 0.11,
                        "pitch": 0.9
                    }
                }
            }
        }
    }
}
```

## アニメーションにサウンドを追加する

アニメーションで再生されるサウンドは、RP のエンティティファイルで定義された short-name に基づいて機能します。

この例では、アニメーションと同期して羽ばたき音を再生します。

<CodeHeader>RP/entities/dragon.json#minecraft:client_entity/description</CodeHeader>

```json
"sound_effects": {
    "wing_flap": "wiki.dragon.wing_flap" //where wiki.dragon.roar is a sound defined in sound_definitions
}
```

<CodeHeader>RP/animations/dragon.json#animations/animation.dragon.flying</CodeHeader>

```json
"sound_effects": {
    "3.16": {
        "effect": "wing_flap"
    }
}
```

## Animation Controller にサウンドを追加する

アニメーションと同じように、animation controller の中でもサウンドを再生できます。

この例では、animation controller を使って同期された爆発音を再生します。

<CodeHeader>RP/entities/custom_tnt.json#minecraft:client_entity/description</CodeHeader>

```json
"sound_effects": {
    "explosion": "wiki.custom_tnt.explosion" //where wiki.custom_tnt.explosion is a sound defined in sound_definitions just like animation sounds.
}
```

<CodeHeader>
    RP/animation_controllers/custom_tnt.animation_controllers.json#controller.animation.custom_tnt
</CodeHeader>

```json
"states":{
    "default":{
        "transitions":[
            {
                "explode_state":"q.mark_variant == 1"
            }
        ]
    },
    "explode_state":{
        "sound_effects":[
            {
                "effect":"explosion"
            }
        ],
        "transitions":[
            {
                "default":"q.mark_variant == 0"
            }
        ]
    }
}
```
