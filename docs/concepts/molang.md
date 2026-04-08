---
title: Molang
description: Molang の基本を学びます。
tags:
    - intermediate
mentions:
    - Cra-ZGuy
    - yanasakana
    - TheDoctor15
    - MedicalJewel105
    - DoubleShotgun
    - Lufurrius
    - TheItsNameless
    - QuazChick
---

## Molang とは？

**Molang** は、Minecraft Bedrock Edition 全体で使われている数式ベースの式言語です。アニメーション、パーティクル、レンダーコントローラー、行動ロジックなどで使われます。

## 式

Molang の式は、ゲームが絶えず解いている小さな数式のようなものです。

```molang
q.health < 5 ? 1 : 0
```

これは、体力が 5 未満なら `1.0`{lang=molang} を返し、それ以外では `0.0`{lang=molang} を返します。

## ゲームデータへのアクセス

### 1. クエリ（`query.`{lang=molang} または `q.`{lang=molang}）

**ゲームから提供される読み取り専用の値です。**

クエリは、値を直接返すことも、引数を受け取って状況に応じた結果を返すこともできます。

引数なしの例:

-   `query.is_sneaking`{lang=molang}
-   `query.time_of_day`{lang=molang}
-   `query.health`{lang=molang}

引数ありの例:

-   `query.position(0)`{lang=molang}
-   `query.is_item_name_any('slot.weapon.offhand', 'minecraft:dirt')`{lang=molang}
-   `query.in_range(5, 0, 10)`{lang=molang}

### 2. 変数（`variable.`{lang=molang} または `v.`{lang=molang}）

**エンティティごとに保存される読み書き可能な値です。**

例:

-   `variable.buff_timer`{lang=molang}
-   `variable.has_effect`{lang=molang}

```molang
v.buff_timer = (v.buff_timer ?? 0) + q.delta_time;
```

#### デフォルト変数

| 変数                                           | 説明                                                   |
| -------------------------------------------------- | ------------------------------------------------------------- |
| `variable.animation_frames_128x128`{lang=molang}   | 128x128 テクスチャ（persona）のアニメーションフレーム index を制御します |
| `variable.animation_frames_32x32`{lang=molang}     | 32x32 テクスチャのアニメーションフレーム index を制御します             |
| `variable.animation_frames_face`{lang=molang}      | 顔のアニメーションフレームを制御します（表情に使われます）   |
| `variable.attack_time`{lang=molang}                | 攻撃アニメーションの進行度（0.0 から 0.7）                  |
| `variable.bob_animation`{lang=molang}              | 待機時や移動時の揺れに使う振動                     |
| `variable.charge_amount`{lang=molang}              | 溜まったチャージ量（attachable で使われます）               |
| `variable.damage_nearby_mobs`{lang=molang}         | 近くの mob がダメージを受けている場合は `true`{lang=molang}          |
| `variable.gliding_speed_value`{lang=molang}        | 滑空中の速度値                                     |
| `variable.has_target`{lang=molang}                 | エンティティが現在ターゲットを持っているかどうか                     |
| `variable.is_brandishing_spear`{lang=molang}       | エンティティがトライデントを掲げているかどうか                    |
| `variable.is_holding_left`{lang=molang}            | 左手に何かを持っているかどうか                    |
| `variable.is_holding_right`{lang=molang}           | 右手に何かを持っているかどうか                   |
| `variable.is_holding_spyglass`{lang=molang}        | プレイヤーが望遠鏡を持っているかどうか                      |
| `variable.is_horizontal_splitscreen`{lang=molang}  | 横分割画面が有効なら `true`{lang=molang}       |
| `variable.is_paperdoll`{lang=molang}               | ペーパードールが現在表示されているか                    |
| `variable.is_sneaking`{lang=molang}                | プレイヤーがスニークしているか                                |
| `variable.is_tooting_goat_horn`{lang=molang}       | プレイヤーがヤギの角笛を吹いているか                     |
| `variable.is_using_brush`{lang=molang}             | プレイヤーがブラシを使っているか                           |
| `variable.is_using_vr`{lang=molang}                | プレイヤーが VR ヘッドセットを使っているか                      |
| `variable.is_vertical_splitscreen`{lang=molang}    | 縦分割画面が有効なら `true`{lang=molang}         |
| `variable.last_blink_time`{lang=molang}            | 最後のまばたきイベントからの時間（persona）                         |
| `variable.left_arm_swim_amount`{lang=molang}       | 左腕に適用される水泳アニメーション量              |
| `variable.map_face_icon`{lang=molang}              | マップの顔アイコン表示がある場合は `true`{lang=molang}       |
| `variable.player_arm_height`{lang=molang}          | 腕の高さオフセット（通常は一人称視点で調整） |
| `variable.player_x_rotation`{lang=molang}          | プレイヤー視点の X 軸回転                          |
| `variable.right_arm_swim_amount`{lang=molang}      | 右腕に適用される水泳アニメーション量             |
| `variable.short_arm_offset_left`{lang=molang}      | 左腕の長さを調整します（VR/paperdoll で使用）        |
| `variable.short_arm_offset_right`{lang=molang}     | 右腕の長さを調整します                              |
| `variable.swim_amount`{lang=molang}                | 一般的な水泳アニメーションの進行度                           |
| `variable.use_blinking_animation`{lang=molang}     | まばたきアニメーションロジックの有効/無効を切り替えます                     |
| `variable.use_item_interval_progress`{lang=molang} | アイテム使用タイムラインの中間部分を追跡します                    |
| `variable.use_item_startup_progress`{lang=molang}  | アイテム使用アニメーションの開始フェーズを追跡します                    |
| `variable.is_first_person`{lang=molang}            | プレイヤーが一人称視点かどうか                         |

### 3. 一時変数（`temp.`{lang=molang} または `t.`{lang=molang}）

**パックごとに保存される読み書き可能な値です。**

```molang
t.temp_speed = q.ground_speed * 1.2;
```

一時変数は **パック単位** で、**一時的** です。現在の Molang 式またはループが続いている間だけ存在します。これらはパック全体で **共有** され、各式の完了後に自動で **消去** されます。構造体はサポートしません（`.x`、`.y`、`.z` は不可）。

:::tip
一時変数は、**式の間で中間結果を渡す** ためにも非常に便利です。特に、**変数やクエリを直接渡せない** パーティクルのような文脈で役立ちます。
:::

### 4. コンテキスト変数（`context.`{lang=molang} または `c.`{lang=molang}）

**特定の状況で、ベースゲームから読み取る値です。**

#### よく使うコンテキスト変数

| コンテキスト変数                                 | 文脈                                 | 説明                                                   |
| ------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------- |
| `context.count`{lang=molang}                     | レシピ                                  | 現在の文脈における対象の数                     |
| `context.is_first_person`{lang=molang}           | アニメーション、エンティティ、レンダーコントローラー | エンティティが一人称で描画される場合は `true`{lang=molang} |
| `context.item_slot`{lang=molang}                 | モデル                                   | 現在のアイテムのスロット index                                |
| `context.other`{lang=molang}                     | アイテム                                    | 「もう一方」のアイテム（修理対象など）                         |
| `context.owning_entity`{lang=molang}             | attachable                              | このコンテキストを所有するエンティティ（クエリ取得に使用）      |
| `context.player_offhand_arm_height`{lang=molang} | モデル                                   | オフハンド描画時に使う腕のオフセット                        |

例:

```molang
context.other->query.remaining_durability
```

## ロジックと条件

### 比較演算子

| 演算子                             | 説明                |
| ------------------------------------ | -------------------------- |
| `==`{lang=molang}                    | 等しい                      |
| `!=`{lang=molang}                    | 等しくない                  |
| `<`{lang=molang}, `>`{lang=molang}   | より小さい / より大きい          |
| `<=`{lang=molang}, `>=`{lang=molang} | 以下 / 以上                |

```molang
q.health <= 10
```

### ブール演算

| 演算子            | 意味 |
| ------------------- | ------- |
| `&&`{lang=molang}   | AND     |
| `\|\|`{lang=molang} | OR      |

```molang
q.is_sneaking && q.is_using_item
```

### 条件演算子

`?`{lang=molang} と `:`{lang=molang} を if-else のように使えます。

-   二項: `condition ? result`{lang=molang}
-   三項: `condition ? true : false`{lang=molang}

```molang
q.is_jumping ? 3 : 0
```

また、変数がまだ初期化されていない場合のフォールバックとして、**null 合体演算子** (`??`{lang=molang}) も使えます。

-   `fallback = value ?? default`{lang=molang}

```molang
v.timer = (v.timer ?? 0) + q.delta_time
```

これにより、`v.timer`{lang=molang} がまだ定義されていない場合でもコンテンツログエラーを避けられます。

## 数学関数

Molang は幅広い数学関数をサポートしており、三角関数には **ラジアンではなく度数法** を使います。これらはアニメーションのタイミング、揺れ、方向計算、値の制限などに便利です。

| 関数                                           | 説明                                               |
| -------------------------------------------------- | --------------------------------------------------------- |
| `math.abs(x)`{lang=molang}                         | `x` の絶対値                                     |
| `math.acos(x)`{lang=molang}                        | `x` の逆余弦                                     |
| `math.asin(x)`{lang=molang}                        | `x` の逆正弦                             |
| `math.atan(x)`{lang=molang}                        | `x` の逆正接                       |
| `math.atan2(y, x)`{lang=molang}                    | `y / x` の逆正接。角度を度で返します          |
| `math.ceil(x)`{lang=molang}                        | `x` を最も近い整数に切り上げる                       |
| `math.clamp(x, min, max)`{lang=molang}             | `x` を `min` と `max` の間に制限する                     |
| `math.cos(x)`{lang=molang}                         | `x` 度の余弦                                     |
| `math.die_roll(n, low, high)`{lang=molang}         | `low` から `high` の間の浮動小数を `n` 回振って合計する     |
| `math.die_roll_integer(n, low, high)`{lang=molang} | 上と同じだが整数を振る                          |
| `math.exp(x)`{lang=molang}                         | 指数関数（e^x）                                         |
| `math.floor(x)`{lang=molang}                       | `x` を最も近い整数に切り下げる                     |
| `math.hermite_blend(t)`{lang=molang}               | なめらかな曲線: `3t^2 - 2t^3`。イージング補間に便利 |
| `math.lerp(a, b, t)`{lang=molang}                  | `t` によって `a` と `b` の間を線形補間する           |
| `math.lerprotate(a, b, t)`{lang=molang}            | 回転補間。円周上の最短経路を取る   |
| `math.ln(x)`{lang=molang}                          | `x` の自然対数                                  |
| `math.max(a, b)`{lang=molang}                      | `a` と `b` の大きいほう                                      |
| `math.min(a, b)`{lang=molang}                      | `a` と `b` の小さいほう                                     |
| `math.min_angle(x)`{lang=molang}                   | 角度 `x` を -180° から 180° の範囲に収める                |
| `math.mod(a, b)`{lang=molang}                      | `a / b` の余り                                      |
| `math.pi`{lang=molang}                             | π の定数（約 3.14159）                    |
| `math.pow(base, exponent)`{lang=molang}            | `base` を `exponent` 乗する                      |
| `math.random(low, high)`{lang=molang}              | `low` と `high` の間のランダムな浮動小数                     |
| `math.random_integer(low, high)`{lang=molang}      | `low` と `high` の間のランダムな整数                   |
| `math.round(x)`{lang=molang}                       | `x` を最も近い整数に丸める                          |
| `math.sin(x)`{lang=molang}                         | `x` 度の正弦                                       |
| `math.sqrt(x)`{lang=molang}                        | `x` の平方根                                        |
| `math.trunc(x)`{lang=molang}                       | `x` の小数部分を取り除く（0 に向かって丸める）         |

## 構造体

Molang の構造体は、`.x`、`.y`、`.z` のように複数の関連フィールドを持つ値です。

`variable.`{lang=molang} を使って自分で構造体を作り、そのフィールドに直接値を代入できます。

```molang
v.location.x = 1;
v.location.y = 2;
v.location.z = 3;
```

これらの値は、ほかの式で再利用したり渡したりできます。

```molang
v.target = v.other_mob->v.location;
```

:::warning
`temp.`{lang=molang} 変数は構造体を **サポートしません**。`.x`、`.y`、`.z` などを使う場合は `variable.`{lang=molang} を使ってください。
:::

## ループとフロー制御

`loop`{lang=molang} を使うと、式を複数回実行できます。

```molang
v.a = 1;
v.b = 1;

loop(10, {
    t.next = v.a + v.b;
    v.a = v.b;
    v.b = t.next;
});
```

### `break`{lang=molang} と `continue`{lang=molang}

-   `break;`{lang=molang} は現在のループを途中で抜けます
-   `continue;`{lang=molang} は次の反復へ進みます

```molang
loop(10, {
    (v.a > 5) ? break;
    v.a += 1;
});
```

## 単純な式と複雑な式

-   **単純**: 値を返す 1 つの式

```molang
math.sin(q.anim_time * 10)
```

-   **複雑**: `;` で区切られ、明示的な `return`{lang=molang} を含む複数文

```molang
t.a = math.sin(q.anim_time * 10);
t.b = t.a * t.a;
return t.b + 1;
```

## バージョンと `min_engine_version`

Molang の挙動は、`manifest.json` で定義された `min_engine_version` によって変わることがあります。これらの変更は、式の動作改善、バグ修正、古い挙動の非推奨化などを目的としています。

最新の修正や構文改善を活かすために、パックの engine version を正しく設定してください。

| Pack `min_engine_version` | 説明                                                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `1.17.0`                  | Versioned Changes の初期サポートが追加されました。（実際には Versioned Change ではありません）                                                                               |
| `1.17.30`                 | `query.item_remaining_use_duration` の ticks から seconds への変換を修正しました（20 倍ではなく 20 で割るよう修正）。また正規化ロジックも反転しました。 |
| `1.17.40`                 | 無効な式に対する新しいエラーメッセージを追加しました（例: `'text' + 1` でコンテンツエラーになります）。                                                            |
| `1.17.40`                 | 括弧やブラケットの不一致、未知のトークンの検出を追加しました。                                                                                |
| `1.18.10`                 | 三項演算子の結合性を修正しました。`A ? B : C ? D : E` は `A ? B : (C ? D : E)` として正しく評価されます。                                                  |
| `1.18.20`                 | 演算子の優先順位を変更しました。論理 `AND` は `OR` より先、比較は等価より先に評価されます。                                                        |
| `1.19.60`                 | 動的に負の値で割るとき、絶対値が使われてしまう問題を修正しました。                                                                  |
| `1.20.0`                  | `query.cape_flap_amount` が body rotation ではなく誤った head rotation を使っていた問題を修正しました。                                                                       |
| `1.20.10`                 | `block_property` と `has_block_property` を `block_state` と `has_block_state` に改名しました。                                                                    |
| `1.20.40`                 | `block_property` と `has_block_property` を非推奨にしました。                                                                                                        |
| `1.20.50`                 | `block_property` のロジックを完全に削除しました。また `is_scenting`、`is_rising`、`is_feeling_happy` クエリを削除しました。`timer_flag_1–3` に置き換えられました。                |
| `1.20.70`                 | 歩行時のパーティクルテクスチャクエリが、leaf ブロックを有効なソースとして扱うようになりました。                                                                                        |

