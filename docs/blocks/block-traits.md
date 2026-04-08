---
title: ブロックの trait
description: ブロック trait を使うと、イベントやトリガーを使わずに、向きなどのバニラブロック状態をカスタムブロックへ簡単に適用できます。
category: General
nav_order: 5
related:
    - /blocks/block-states
    - /blocks/block-permutations
license: true
mentions:
    - QuazChick
    - SmokeyStack
---

:::tip FORMAT VERSION 1.26.10
ブロック trait を学ぶ前に、[ブロック状態](/blocks/block-states) をしっかり理解しておくべきです。

ブロック状態を扱うときは、パックの manifest にある `min_engine_version` が 1.20.20 以上であることを確認してください。
:::

## trait の適用

ブロック trait を使うと、イベントやトリガーを使わずに、向きなどのバニラブロック状態をカスタムブロックへ簡単に適用できます。

<CodeHeader>BP/blocks/custom_slab.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_slab",
            "menu_category": {
                "category": "construction",
                "group": "minecraft:itemGroup.name.slab"
            },
            "traits": {
                "minecraft:placement_position": {
                    "enabled_states": ["minecraft:vertical_half"]
                }
            }
        },
        "components": { ... },
        "permutations": [ ... ]
    }
}
```

_この例では、配置時に `minecraft:vertical_half` ブロック状態が `"top"`{lang=json} または `"bottom"`{lang=json} に設定されます。これはプレイヤーがどこを見ているかによって変わります。_

**この状態を機能させるには、[permutations array](/blocks/block-permutations#conditionally-applying-components) による条件付き適用も必要で、条件は次のように記述します。**

```molang
q.block_state('minecraft:vertical_half')
```

## trait 一覧

### 接続

隣接ブロックに応じて方角ごとの接続状態を更新し、フェンスのような接続パーミュテーションを実現します。

_format version [1.26.0](/blocks/block-format-history#_1-26-0) 以降が必要です。_

-   `enabled_states` — 配列
    -   `"minecraft:cardinal_connections"`{lang=json} のみを含められます。これにより、以下すべての状態が有効になります。

#### 提供される状態 {#connection-states}

| 状態                        | 値                                                  | 説明                                                         |
| --------------------------- | --------------------------------------------------- | ------------------------------------------------------------ |
| `minecraft:connection_north` | `false`{lang=json} _(既定)_<br>`true`{lang=json} | 北側の隣接ブロックと接続しているかどうか。                  |
| `minecraft:connection_south` | `false`{lang=json} _(既定)_<br>`true`{lang=json} | 南側の隣接ブロックと接続しているかどうか。                  |
| `minecraft:connection_west`  | `false`{lang=json} _(既定)_<br>`true`{lang=json} | 西側の隣接ブロックと接続しているかどうか。                  |
| `minecraft:connection_east`  | `false`{lang=json} _(既定)_<br>`true`{lang=json} | 東側の隣接ブロックと接続しているかどうか。                  |

<CodeHeader>minecraft:block > description > traits</CodeHeader>

```json
"minecraft:connection": {
    "enabled_states": ["minecraft:cardinal_connections"]
}
```

### 配置方向

ブロックが配置されたときのプレイヤーの向きに関する情報を保持します。

_format version [1.26.0](/blocks/block-format-history#_1-26-0) 以降が必要です。_

-   `enabled_states` — 配列
    -   下の表にある状態を含められます（`minecraft:corner` を除く）。指定した状態だけが有効になります。
    -   あるいは `"minecraft:corner_and_cardinal_direction"`{lang=json} を含めると、`minecraft:corner` と `minecraft:cardinal_direction` の両方が有効になります。
-   `y_rotation_offset` — 整数（任意）
    -   この回転オフセットは、水平状態値（north、south、east、west）にのみ適用されます。
    -   指定できるのは軸に沿った角度のみです（例: 90, 180）。
-   `blocks_to_corner_with` — 配列（任意）
    -   ブロックが角を作れる対象のブロックを、[block descriptors](/documentation/shared-constructs#block-descriptors) の配列として列挙します。
    -   このパラメータは、`enabled_states` 配列に `"minecraft:corner_and_cardinal_direction"`{lang=json} が含まれている場合にのみ指定できます。

#### 提供される状態 {#placement-direction-states}

| 状態                          | 値                                                                                                                                                | 説明                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `minecraft:cardinal_direction` | `"south"`{lang=json} _(既定)_<br>`"north"`{lang=json}<br>`"west"`{lang=json}<br>`"east"`{lang=json}                                                | 配置時のプレイヤーの方角。                   |
| `minecraft:facing_direction`   | `"down"`{lang=json} _(既定)_<br>`"up"`{lang=json}<br>`"south"`{lang=json}<br>`"north"`{lang=json}<br>`"west"`{lang=json}<br>`"east"`{lang=json}    | 配置時のプレイヤーのおおまかな向き。         |
| `minecraft:corner`             | `"none"`{lang=json} _(既定)_<br>`"inner_left"`{lang=json}<br>`"inner_right"`{lang=json}<br>`"outer_left"`{lang=json}<br>`"outer_right"`{lang=json} | ブロックが作った角の形。                     |

<CodeHeader>minecraft:block > description > traits</CodeHeader>

```json
"minecraft:placement_direction": {
    "enabled_states": ["minecraft:cardinal_direction"],
    "y_rotation_offset": 180
}
```

### 配置位置

ブロックがどこに配置されたかに関する情報を保持します。

_format version [1.20.20](/blocks/block-format-history#_1-20-20) 以降が必要です。_

-   `enabled_states` — 配列
    -   下の表にある状態を含められます。指定した状態だけが有効になります。

#### 提供される状態 {#placement-position-states}

| 状態                     | 値                                                                                                                                             | 説明                                   |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `minecraft:block_face`    | `"down"`{lang=json} _(既定)_<br>`"up"`{lang=json}<br>`"south"`{lang=json}<br>`"north"`{lang=json}<br>`"west"`{lang=json}<br>`"east"`{lang=json} | ブロックが配置された面。               |
| `minecraft:vertical_half` | `"top"`{lang=json}<br>`"bottom"`{lang=json} _(既定)_                                                                                            | ブロックが配置された上下どちらの半分か。 |

<CodeHeader>minecraft:block > description > traits</CodeHeader>

```json
"minecraft:placement_position": {
    "enabled_states": [
        "minecraft:block_face",
        "minecraft:vertical_half"
    ]
}
```
