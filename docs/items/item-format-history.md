---
title: アイテム形式の履歴
description: 各 Minecraft バージョンにおける data-driven item format の変更一覧です。
category: Documentation
outline_depth: 2
license: true
mentions:
    - QuazChick
---

:::info <Label color="green">バージョン付き</Label> 変更
バージョン付きの変更を有効にするには、ファイルの `format_version` フィールドを更新する必要があります。
:::

:::info <Tag name="experimental" /> 変更
実験的な変更を有効にするには、ワールドで experiment を有効にする必要があります。
:::

## 1.26.10

### コンポーネント

<Label color="green">バージョン付き</Label>

-   更新 `minecraft:block_placer`
    -   `aligned_placement` パラメーターが追加されました。これは、ブロックを直前に置かれたブロックの位置に合わせるか、プレイヤーが移動を開始した方向の面に合わせるかを決めます。
        -   既定値は `false`{lang=json} です。
        -   1.26.10 で導入されましたが、このパラメーターはフォーマットバージョン 1.26.0 以降で利用できます。

## 1.26.0

### コンポーネント

<Label color="green">バージョン付き</Label>

-   更新 `minecraft:damage`
    -   `255`{lang=json} を超える値を、最大 `32767`{lang=json} まで正しくサポートするようになりました。

## 1.21.130

### コンポーネント

-   追加 `minecraft:kinetic_weapon`
    -   アイテム使用中に、プレイヤーが向かう先の各エンティティ（またはプレイヤーに向かってくる各エンティティ）へダメージを与え、さらに降ろしとノックバックも適用します。
    -   `delay` を含みます。これは kinetic ダメージと効果の適用が始まるまでの時間（tick）を決めます。
    -   `hitbox_margin` を含みます。これは、kinetic attack の対象になるために、各ターゲットの collision がプレイヤーの視線方向にどれだけ近い必要があるか（ブロック単位）を決めます。
        -   既定では追加の hitbox margin はありません。
    -   `reach` を含みます。これは、kinetic attack の対象になるために、エンティティがプレイヤーからどれだけ離れていればよいか（ブロック単位）を決めます。
        -   既定では、プレイヤーから 0 〜 3 ブロックの範囲にいるエンティティが対象になります。
    -   `creative_reach` を含みます。これは、プレイヤーがクリエイティブモードのときに適用される `reach` を決めます。
        -   既定では、クリエイティブモードのプレイヤーは通常の `reach` 範囲に制限されます。
    -   `damage_multiplier` を含みます。これは kinetic attack の基本ダメージに掛けて、倍率後のダメージ値を得ます。
    -   `damage_modifier` を含みます。これは倍率後のダメージ値に加算され、各ターゲットへ与える最終ダメージ値になります。
    -   `damage_conditions` を含みます。これはダメージを与えるために満たす必要がある条件一覧です。
    -   `dismount_conditions` を含みます。これは、kinetic attack によって各ターゲットが乗っているエンティティから降ろされるために満たす必要がある条件一覧です。
        -   既定では、エンティティが降ろされることはありません。
    -   `knockback_conditions` を含みます。これは、kinetic attack によって各ターゲットがノックバックを受けるために満たす必要がある条件一覧です。
        -   既定では、ノックバックは適用されません。
-   追加 `minecraft:piercing_weapon`
    -   攻撃時に、プレイヤーの視線方向にまっすぐ並んだすべてのエンティティへダメージを与えます。
    -   プレイヤーと他のエンティティの間にブロック衝突がある場合、ダメージは防がれます。
    -   ブロック採掘にこのアイテムを使えないようにします。
    -   `hitbox_margin` を含みます。これは、各エンティティの collision がプレイヤーの視線方向にどれだけ近い必要があるか（ブロック単位）を決めます。
        -   既定では追加の hitbox margin はありません。
    -   `reach` を含みます。これは、ダメージを受けるために、エンティティがプレイヤーからどれだけ離れていればよいか（ブロック単位）を決めます。
        -   既定では、プレイヤーから 0 〜 3 ブロックの範囲にいるエンティティがダメージを受けます。
    -   `creative_reach` を含みます。これは、プレイヤーがクリエイティブモードのときに適用される `reach` を決めます。
        -   既定では、クリエイティブモードのプレイヤーは通常の `reach` 範囲に制限されます。
-   追加 `minecraft:swing_sounds`
    -   アイテムを持っているときにプレイヤーが攻撃した際に発生する、バニラのサウンドイベントを決めます。
    -   `attack_miss` を含みます。これは、エンティティに当たらなかった、またはダメージが発生しなかったときのサウンドイベントを決めます。
    -   `attack_hit` を含みます。これは、エンティティに当たり、通常ダメージが発生したときのサウンドイベントを決めます。
    -   `attack_critical_hit` を含みます。これは、エンティティに当たり、クリティカルダメージが発生したときのサウンドイベントを決めます。
-   更新 `minecraft:cooldown`
    -   `type` パラメーターが追加されました。これは、クールダウンが次のどの入力に作用するかを決めます。
        -   `use`（既定）は、アイテム使用時に発動し、クールダウン中はそのアイテムの使用を防ぎます。
        -   `attack` は、アイテムを持っている状態でプレイヤーが攻撃したときに発動し、クールダウン中はそのアイテムでの攻撃を防ぎます。
-   更新 `minecraft:use_modifiers`
    -   `start_sound` パラメーターが追加されました。これは、アイテムの使用開始時に発生するバニラのサウンドイベントを決めます。

## 1.21.120

### 説明

<Label color="green">バージョン付き</Label>

    -   `menu_category` が更新されました。
    -   カテゴリのないアイテムも、コマンドで使えるようになりました。
    -   `is_hidden_in_commands` が `true` の場合でも、そのアイテムはコマンドでは無効のままです。

### コンポーネント

-   追加 `minecraft:swing_duration`
    -   採掘、攻撃、またはアイテム使用時のプレイヤーの振りアニメーションの長さ（秒単位）を決めます。
-   更新 `minecraft:use_modifiers`
    -   `emit_vibrations` パラメーターが追加されました。これは、アイテムの使用開始時と終了時に振動を発するかどうかを決めます。

## 1.21.110

### コンポーネント

-   追加 `minecraft:fire_resistant`
    -   アイテムが火や溶岩で破壊されないかどうかを決めます。

## 1.21.90

### コンポーネント

-   更新 `minecraft:wearable`
    -   `hides_player_location` パラメーターが追加されました。これは、そのアイテムを装備したプレイヤーが Locator Bar と Locator Maps から非表示になるかどうかを決めます。
    -   既定では、wearable アイテムはプレイヤーを隠しません。

<Label color="green">バージョン付き</Label>

-   削除 `minecraft:custom_components`

    -   カスタムコンポーネントは、バニラコンポーネントと同じように `components` オブジェクトの項目として適用します。

        <CodeHeader>minecraft:block</CodeHeader>

        ```json
        "components": {
            "minecraft:glint": true,
            "wiki:custom_component": {
                "parameter": "value"
            }
        }
        ```

## 1.21.80

### コンポーネント

<Tag name="experimental" />
<Label color="red">カスタムコンポーネント V2</Label>
<Label color="green">バージョン付き</Label>

-   削除 `minecraft:custom_components`
    -   カスタムコンポーネントは、バニラのコンポーネントと同じように `components` オブジェクトの項目として適用するようになりました。

## 1.21.60

### 説明

<Label color="green">バージョン付き</Label>

    -   `menu_category` が更新されました。
    -   `group` パラメーターに namespace が必要になりました。例: `minecraft:itemGroup.name.concrete`

### コンポーネント

<Label color="green">バージョン付き</Label>

-   追加 `minecraft:storage_weight_limit`
    -   storage item コンテナー内のすべてのアイテムの合計重量の上限を決めます。
    -   storage item の `max_weight_limit` パラメーターを置き換えます。
-   追加 `minecraft:storage_weight_modifier`
    -   このアイテムが storage item の中にあるときに追加される重量を決めます。
    -   0 の場合、このアイテムは storage item の中に入れられません。
    -   storage item の `weight_in_storage_item` パラメーターを置き換えます。
-   実験から解除 `minecraft:compostable`
-   更新 `minecraft:block_placer`
    -   `replace_block_item` パラメーターが実験から解除されました。
-   更新 `minecraft:storage_item`
    -   `max_weight_limit` パラメーターが削除されました。
    -   `weight_in_storage_item` パラメーターが削除されました。

## 1.21.50

### コンポーネント

<Tag name="experimental" />
<Label color="blue">今後の Creator Features</Label>

-   追加 `minecraft:compostable`
    -   このアイテムをコンポスターで使えるようにします。
    -   `composting_chance` を含み、コンポストレベルが増える確率を 0〜100 のパーセントで決めます。

## 1.21.40

<Label color="green">バージョン付き</Label>

-   数値を boolean 値の表現に使えなくなりました。
-   浮動小数点数を整数値の表現に使えなくなりました。

### コンポーネント

<Label color="green">バージョン付き</Label>

-   実験から解除 `minecraft:bundle_interaction`
-   実験から解除 `minecraft:storage_item`

<Tag name="experimental" />
<Label color="blue">今後の Creator Features</Label>

-   更新 `minecraft:block_placer`
    -   `minecraft:icon` コンポーネントが適用されていない場合、指定した `block` がアイテムのアイコンとして使われます。
    -   `replace_block_item` パラメーターが追加されました。これは、指定した `block` の既定アイテムをこのアイテムで置き換えます。
        -   これを機能させるには、アイテムとブロックの識別子が同じである必要があります。
        -   ブロックアイテムの置き換えについては[こちら](/blocks/blocks-as-items#replacing-block-items)を参照してください。

## 1.21.30

### コンポーネント

<Label color="green">バージョン付き</Label>

-   追加 `minecraft:dyeable`
    -   可能にします。鍋の水でアイテムを染色できるようにします。
    -   含みます。`default_color` を含みます。これは、アイテムが染色される前に使用する任意の色を決めます。
    -   染色後、そのアイテムは `minecraft:icon` コンポーネントで定義された `default` ではなく `dyed` テクスチャを表示します。
-   追加 `minecraft:rarity`
    -   アイテムの基本レアリティを定義します（アイテム名の色で表示されます）。
    -   `common`、`uncommon`、`rare`、`epic` の各レアリティを受け付けます。
    -   アイテムがエンチャントされている場合、可能であればレアリティは次のレベルに上がります。
    -   このコンポーネントには機能上の効果はなく、`minecraft:hover_text_color` で上書きできます。

<Tag name="experimental" />
<Label color="orange">Bundles</Label>

-   追加 `minecraft:bundle_interaction`
    -   アイテムにバンドルのインターフェースと機能を有効化します。
    -   `num_viewable_slots` を含みます。
    -   `minecraft:storage_item` コンポーネントの適用が必要です。
-   追加 `minecraft:storage_item`
    -   このアイテムが他のアイテムを格納できるようにします。
    -   `allow_nested_storage_items` を含みます。これは、他の storage item をコンテナー内に入れられるかどうかを決めます。
    -   `allowed_items` を含みます。これは、コンテナー内で許可されるアイテムを定義します。
        -   空の場合、すべてのアイテムがコンテナー内で許可されます。
    -   `banned_items` を含みます。これは、コンテナー内で許可されないアイテムを定義します。
    -   `max_slots` を含みます。これは、コンテナー内のスロット数を定義します。
    -   `max_weight_limit` を含みます。これは、コンテナー内の全アイテムの合計重量の上限を定義します。
    -   `weight_in_storage_item` を含みます。これは、別の storage item の中に入っているときにアイテムへ追加される重量を定義します。
        -   値が 0 の場合、このアイテムは別の storage item の中に入れられません。

## 1.21.20

### コンポーネント

<Label color="green">バージョン付き</Label>

-   追加 `minecraft:damage_absorption`
    -   本来は装備者が受けるはずのダメージを、そのアイテムが吸収するようにします。
    -   `absorbable_causes` を含みます。これは、アイテムで吸収できるダメージ原因の一覧（`entity_attack` や `magma` など）を定義します。
    -   `minecraft:durability` と `minecraft:wearable` コンポーネントが必要です。
-   追加 `minecraft:durability_sensor`
    -   ダメージを受けたときに効果を発生させるようにします。
    -   `durability_thresholds` を含みます。これは、耐久値のしきい値と、そのしきい値に達したときに発生する効果の両方を定義します。

## 1.21.10

### コンポーネント

<Label color="green">バージョン付き</Label>

-   実験から解除 `minecraft:custom_components`

## 1.21.0

<Tag name="experimental" />
<Label color="red">ホリデー クリエイター機能</Label>
<Label color="green">バージョン付き</Label>

-   削除 `events`

### コンポーネント

<Tag name="experimental" />
<Label color="yellow">ベータ API</Label>

-   追加 `minecraft:custom_components`
    -   このブロックに適用するすべてのカスタムコンポーネントの一覧です。

### イベント

<Tag name="experimental" />
<Label color="red">ホリデー クリエイター機能</Label>
<Label color="green">バージョン付き</Label>

-   削除 `add_mob_effect` レスポンス
-   削除 `damage` レスポンス
-   削除 `decrement_stack` レスポンス
-   削除 `remove_mob_effect` レスポンス
-   削除 `run_command` レスポンス
-   削除 `teleport` レスポンス
-   削除 `transform_item` レスポンス

## 1.20.60

### コンポーネント

<Label color="green">バージョン付き</Label>

-   更新 `minecraft:icon`
    -   `texture` パラメーターが削除されました。
    -   `textures` パラメーターが追加されました。これは、装飾鎧のトリムを含む、アイテムのアイコンに使用できる複数のテクスチャを一覧化します。
        -   `default` を含みます。これは `texture` パラメーターの置き換えです。

## 1.20.50

### コンポーネント

<Label color="green">バージョン付き</Label>

-   追加 `minecraft:tags`
    -   このアイテムに適用されるタグの一覧です。
    -   `tag:*` コンポーネントを置き換えます。
-   追加 `minecraft:use_modifiers`
    -   `use_duration` を含みます。これは、アイテムを完全に使用するのにかかる時間（秒単位）を定義します。
        -   `minecraft:use_duration` コンポーネントを置き換えます。
    -   `movement_modifier` を含みます。これは、アイテム使用中の所持者の速度に倍率を適用します。
-   削除 `minecraft:use_duration`
-   `tag:*` を使ってタグを適用する機能が削除されました。

<Tag name="experimental" />
<Label color="red">ホリデー クリエイター機能</Label>
<Label color="green">バージョン付き</Label>

-   削除 `minecraft:chargeable`
-   更新 `minecraft:digger`
    -   `on_dig` トリガー パラメーターが削除されました。

## 1.20.40

### コンポーネント

<Label color="green">バージョン付き</Label>

-   更新 `minecraft:icon`
    -   単一の文字列値を再び使用できるようになりました。例: `"minecraft:icon": "stick"`。

<Tag name="experimental" />
<Label color="red">ホリデー クリエイター機能</Label>
<Label color="green">バージョン付き</Label>

-   削除 `minecraft:on_use` trigger
-   削除 `minecraft:on_use_on` trigger
-   削除 `minecraft:weapon`

## 1.20.30

### コンポーネント

<Label color="green">バージョン付き</Label>

-   追加 `minecraft:interact_button`
    -   タッチ操作時に表示されるボタンを有効にし、その表示テキストを設定します。
    -   `true` に設定すると、ボタンには "Use Item" と表示されます。
-   実験から解除 `minecraft:enchantable`
-   実験から解除 `minecraft:food`

<Tag name="experimental" />
<Label color="red">ホリデー クリエイター機能</Label>
<Label color="green">バージョン付き</Label>

-   削除 `minecraft:mining_speed`

## 1.20.20

### 説明

<Label color="green">バージョン付き</Label>

-   追加 `menu_category`
    -   `category` を含みます。これは、アイテムがどのタブに配置されるかを決めます。
    -   `group` を含みます。これは、そのアイテムがどの他のアイテムとまとめられるかを決めます。
    -   `is_hidden_in_commands` を含みます。これは、コマンドで使用したときにそのアイテムを無効として扱うかどうかを決めます。

### コンポーネント

<Label color="green">バージョン付き</Label>

-   実験から解除 `minecraft:allow_off_hand`
-   実験から解除 `minecraft:damage`
-   実験から解除 `minecraft:digger`
-   実験から解除 `minecraft:enchantable`
-   実験から解除 `minecraft:glint`
-   実験から解除 `minecraft:hand_equipped`
-   実験から解除 `minecraft:liquid_clipped`
-   実験から解除 `minecraft:should_despawn`
-   実験から解除 `minecraft:stacked_by_data`
-   実験から解除 `minecraft:use_animation`
-   実験から解除 `minecraft:use_duration`
-   実験から解除 `minecraft:wearable`

<Tag name="experimental" />
<Label color="red">ホリデー クリエイター機能</Label>
<Label color="green">バージョン付き</Label>

-   削除 `minecraft:creative_category`
-   Renamed `minecraft:foil` to `minecraft:glint`
-   更新 `minecraft:digger`
    -   `on_dig` トリガー パラメーターが削除されました。

## 1.20.10

### コンポーネント

<Label color="green">バージョン付き</Label>

-   実験から解除 `minecraft:block_placer`
-   実験から解除 `minecraft:can_destroy_in_creative`
-   実験から解除 `minecraft:cooldown`
-   実験から解除 `minecraft:hover_text_color`
-   実験から解除 `minecraft:max_stack_size`
-   実験から解除 `minecraft:projectile`
-   実験から解除 `minecraft:record`
-   実験から解除 `minecraft:repairable`
-   実験から解除 `minecraft:shooter`
-   実験から解除 `minecraft:throwable`

<Tag name="experimental" />
<Label color="red">ホリデー クリエイター機能</Label>
<Label color="green">バージョン付き</Label>

-   削除 `minecraft:render_offsets`

## 1.20.0

### コンポーネント

<Label color="green">バージョン付き</Label>

-   実験から解除 `minecraft:display_name`
-   実験から解除 `minecraft:durability`
-   実験から解除 `minecraft:fuel`
-   実験から解除 `minecraft:entity_placer`
-   実験から解除 `minecraft:icon`

<Tag name="experimental" />
<Label color="red">ホリデー クリエイター機能</Label>
<Label color="green">バージョン付き</Label>

-   削除 `minecraft:dye_powder`
-   更新 `minecraft:repairable`
    -   削除 `on_repaired` trigger parameter

---

:::danger UNDOCUMENTED
`1.20.0` より前のバージョンの形式変更は、まだ記載されていません。
:::



