---
title: JSON UIドキュメント
category: Documentation
nav_order: 1
mentions:
    - KalmeMarq
    - SirLich
    - solvedDev
    - Joelant05
    - GTB3NW
    - stirante
    - sermah
    - MedicalJewel105
    - tinedpakgamer
    - LeGend077
    - TheDataLioness
    - shanewolf38
    - JosiahDZD
    - Yalums
    - inotflying
    - TheItsNameless
    - SmokeyStack
    - Gotemba912
    - QuazChick
    - 1cce
    - MinecraftBedrockArabic
    - smell-of-curry
    - causal-guide
description: JSON UI のドキュメント。
---

## UI 要素

### 要素の種類

| Name | Description | Allowed Properties |
| ---------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| panel | コンテナ (HTML の `<div>` など) | [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| stack_panel | `panel` に似ていますが、`orientation` プロパティ値に応じて子をスタックします。 | [Stack Panel](/json-ui/json-ui-documentation#stack-panel) <br> [Collection](/json-ui/json-ui-documentation#collection) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| collection_panel | `stack_panel` に似ていますが、`orientation` プロパティはありません | [Collection](/json-ui/json-ui-documentation#collection) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| grid | 要素のグリッド | [Grid](/json-ui/json-ui-documentation#grid) <br> [Collection](/json-ui/json-ui-documentation#collection) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| label | テキスト要素 | [Text](/json-ui/json-ui-documentation#text) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| image | スプライト要素。テクスチャを描画します。 | [Sprite](/json-ui/json-ui-documentation#sprite) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| input_panel | 入力を受け入れる `panel` | [Input](/json-ui/json-ui-documentation#input) <br> [Focus](/json-ui/json-ui-documentation#focus) <br> [Sound](/json-ui/json-ui-documentation#sound) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| button | ボタンには 4 つの状態 (デフォルト、ホバー、押された状態、ロックされた状態) があります。 | [Button](/json-ui/json-ui-documentation#button) <br> [Input](/json-ui/json-ui-documentation#input) <br> [Focus](/json-ui/json-ui-documentation#focus) <br> [Sound](/json-ui/json-ui-documentation#sound) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| toggle | トグルには 2 つの状態 (オンまたはオフ) があります。各状態にはホバーとロックのバリアントがあります | [Toggle](/json-ui/json-ui-documentation#toggle) <br> [Input](/json-ui/json-ui-documentation#input) <br> [Focus](/json-ui/json-ui-documentation#focus) <br> [Sound](/json-ui/json-ui-documentation#sound) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| dropdown | ドロップダウン用のトグル | [Dropdown](/json-ui/json-ui-documentation#dropdown) <br> [Toggle](/json-ui/json-ui-documentation#toggle) <br> [Input](/json-ui/json-ui-documentation#input) <br> [Focus](/json-ui/json-ui-documentation#focus) <br> [Sound](/json-ui/json-ui-documentation#sound) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| slider | 範囲入力要素 | [Slider](/json-ui/json-ui-documentation#slider) <br> [Input](/json-ui/json-ui-documentation#input) <br> [Focus](/json-ui/json-ui-documentation#focus) <br> [Sound](/json-ui/json-ui-documentation#sound) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| slider_box | スライダー値を変更するために使用するスライダー ボタン | [Slider Box](/json-ui/json-ui-documentation#slider-box) <br> [Input](/json-ui/json-ui-documentation#input) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| edit_box | テキストフィールド要素。デフォルトでは単線になっています | [Text Edit](/json-ui/json-ui-documentation#text-edit) <br> [Button](/json-ui/json-ui-documentation#button) <br> [Input](/json-ui/json-ui-documentation#input) <br> [Focus](/json-ui/json-ui-documentation#focus) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| scroll_view | スクロールパネル要素を作成します | [Scroll View](/json-ui/json-ui-documentation#scroll-view) <br> [Input](/json-ui/json-ui-documentation#input) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| scrollbar_track | スクロールバートラック | [Input](/json-ui/json-ui-documentation#input) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) |
| scrollbar_box | スクロールバーの「サム」/ボタン。ドラッグ可能なスクロール ハンドル。デフォルトでは垂直方向になります | [Input](/json-ui/json-ui-documentation#input) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) |
| factory | 要素ジェネレータ | [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) |
| screen | 画面要素 | [Screen](/json-ui/json-ui-documentation#screen) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| custom | JSON UI には複雑すぎるため、コード内で作成される特別なレンダラー要素 | [Custom Render](/json-ui/json-ui-documentation#custom-render) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| selection_wheel |  | [Selection Wheel](/json-ui/json-ui-documentation#selection-wheel) <br> [Input](/json-ui/json-ui-documentation#input) <br> [Focus](/json-ui/json-ui-documentation#focus) <br> [Sound](/json-ui/json-ui-documentation#sound) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |

#### 従来の要素タイプ (機能しなくなりました)

| Name | Description | Allowed Properties |
| -------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tab | トグルを追加する前のタブの作成方法 | [Tab](/json-ui/json-ui-documentation#tab-legacy) <br> [Button](/json-ui/json-ui-documentation#button) <br> [Input](/json-ui/json-ui-documentation#input) <br> [Focus](/json-ui/json-ui-documentation#focus) <br> [Sound](/json-ui/json-ui-documentation#sound) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| carousel_label |  | [Carousel Text](/json-ui/json-ui-documentation#carousel-text-legacy) <br> [Text](/json-ui/json-ui-documentation#text) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| grid_item | `panel` ただし、特にグリッドの項目/子である必要があります | [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |
| scrollbar |  | [Input](/json-ui/json-ui-documentation#input) <br> [Focus](/json-ui/json-ui-documentation#focus) <br> [Control](/json-ui/json-ui-documentation#control) <br> [Layout](/json-ui/json-ui-documentation#layout) <br> [Data Binding](/json-ui/json-ui-documentation#data-binding) |

## プロパティ

### コントロール

| Property Name | Type | Default Value | Description |
| ------------------------- | :------------------: | :-----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| visible | boolean | `true` | UI要素を表示する必要があるかどうか |
| enabled | boolean | `true` | true の場合、UI 要素またはその子がロック状態にある場合、それらはロックされます。 |
| layer | int | `0` | Z-Index/Layer (CSS の z-index と同様) は親要素に対して相対的です。値が大きいほど上に表示され、負の値は親要素の下に表示されます。 |
| alpha | float | `1.0` | 要素のアルファ/透明度。影響を受けるのは UI 要素のみです。その子は影響を受けません。アルファを親と子の両方に適用したい場合は、`propagate_alpha` も使用します。 |
| propagate_alpha | boolean | `false` | `alpha` は、可能であれば親だけでなく、そのすべての子にも適用される必要があります。 |
| clips_children | boolean | `false` | UI 要素の境界を越えるすべてを視覚的かつインタラクティブに遮断します。 |
| allow_clipping | boolean | `true` | `clips_children` が UI 要素で機能する場合。そうしないと効果がありません |
| clip_offset | Vector [x, y] | `[0, 0]` | クリッピングの開始点からのオフセット |
| clip_state_change_event | string |  |  |
| enable_scissor_test | boolean |  | [https://www.khronos.org/opengl/wiki/Scissor_Test](https://www.khronos.org/opengl/wiki/Scissor_Test) |
| property_bag | object |  | [プロパティ バッグ](/json-ui/json-ui-documentation#property-bag) には、UI 要素の実際の構造や外観よりもデータに関連するプロパティ/変数が含まれています |
| selected | boolean |  | デフォルトでテキストボックスが選択されている場合 |
| use_child_anchors | boolean | `false` | UI要素の子の`anchor_from`と`anchor_to`を使用します |
| controls | array |  | 要素に子を追加する場合 |
| anims | string[] |  | アニメーション名の配列 |
| disable_anim_fast_forward | boolean |  |  |
| animation_reset_name | string |  |  |
| ignored | boolean | `false` | UI要素を無視する必要がある場合 |
| variables | array or object |  | 変数の値を変更する一連の条件 |
| modifications | array |  | 以下のリソース パックの UI ファイルを変更できます (バニラが一番下にあります) |
| grid_position | Vector [row, column] |  | コントロールがグリッド内で取る位置。これにより、ハードコーディングされたグリッドの特定のグリッド項目を変更することもできます。 |
| collection_index | int |  | コントロールがコレクション内で取得するインデックス |

#### レガシー (機能しなくなりました)

| Property Name | Type | Default Value | Description |
| ------------- | :------: | :-----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| z_order | int | 0 | `layer` プロパティの最初のバージョン |
| scroll_report | string[] |  | スクロール パネル内のコンテンツが変更されたときに通知するコントロールの名前の配列 |
| alignment | enum |  | 可能な値: <br> `top_left` <br> `top_middle` <br> `top_right` <br> `left_middle` <br> `center` <br> `right_middle` <br> `bottom_left` <br> `bottom_middle` <br> `bottom_right` |

### レイアウト

| Property Name | Type | Default Value | Description |
| -------------------------- | :--------------------: | :----------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| size | Vector [width, height] | `["default", "default"]` | UI要素のサイズ。 <br> 可能な値: <br> `"default"` (デフォルト値は `"100%"`) <br> `0` (ピクセル数) <br> `"0px"` (ピクセル数) 0 と同じですが、末尾に px を付けた文字列内に置かれます (例: `"75% + 12px"`)) <br> `"0%"` (親要素に対する相対的な割合) <br> `"0%c"` (要素の子の幅/高さの合計のパーセンテージ) <br> `"0%cm"` (その要素の表示されている最大の子の幅/高さのパーセンテージ) <br> `"0%sm"` (兄弟要素の幅/高さのパーセンテージ) <br> `"0%y"` (要素の高さのパーセンテージ) <br> `"0%x"` (要素の幅のパーセンテージ) <br> `"fill"` (親要素の残りの幅/高さに拡張) |
| max_size | Vector [width, height] | `["default", "default"]` | UI要素の最大サイズは次のとおりです。 |
| min_size | Vector [width, height] | `["default", "default"]` | UI 要素の最小サイズは次のとおりです。 |
| offset | Vector [x, y] | `[0, 0]` | 親 UI 要素を基準とした UI 要素の位置。これは TopLeft ベースであり、座標 [0, 0] が画面の左上から始まることを意味します。 <br> `10`- ピクセル <br> `"10px"` - ピクセル <br> `"50%"` - 親要素の幅/高さ <br> `"50%x"` - 要素の幅<br> `"50%y"` - 要素の高さ |
| anchor_from | enum | `center` | 親要素内のアンカーポイント。 <br> 可能な値: <br> `top_left` <br> `top_middle` <br> `top_right` <br> `left_middle` <br> `center` <br> `right_middle` <br> `bottom_left` <br> `bottom_middle` <br> `bottom_right` |
| anchor_to | enum | `center` | 要素内のアンカーポイント。 <br> 可能な値: <br> `top_left` <br> `top_middle` <br> `top_right` <br> `left_middle` <br> `center` <br> `right_middle` <br> `bottom_left` <br> `bottom_middle` <br> `bottom_right` |
| inherit_max_sibling_width | boolean | `false` | 兄弟要素の最大幅を使用します |
| inherit_max_sibling_height | boolean | `false` | 兄弟要素の最大の高さを使用します |
| use_anchored_offset | boolean |  |  |
| contained | boolean |  |  |
| draggable | enum |  | 要素をカーソルでドラッグできるようにします。要素はドラッグ可能にするために入力を受け入れることができ (`input_panel`、`button` など)、必要なボタン マッピングが必要です。 <br> 可能な値: `vertical`、`horizontal`、および `both` |
| follows_cursor | boolean | `false` | カーソルを追従します |

### データバインディング

| Property Name | Type | Default Value | Description |
| ------------- | :----------------------------------------------------------------------------------: | :-----------: | -------------------------------------------------- |
| bindings | Vector of [binding object](/json-ui/json-ui-documentation#data-binding-array-object) |  | 要素内のハードコードされた値をバインドして操作する |

#### データ バインディング配列オブジェクト

データ バインディングを使用すると、ハードコードされた値/変数を要素プロパティにバインドできます。

| Property Name | Type | Default Value | Description |
| ------------------------- | :-----: | :-----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ignored | boolean | `false` | バインディングを無視する必要がある場合 |
| binding_type | enum |  | 可能な値: <br> `global` <br> `view` <br> `collection` <br> `collection_details` <br> `none` |
| binding_name | string |  | データ バインディング名またはデータ バインディング条件の値を格納します。 |
| binding_name_override | string |  | `binding_name` に格納された値を適用する UI 要素プロパティの名前 |
| binding_collection_name | string |  | 使用するアイテムのコレクションの名前 |
| binding_collection_prefix | string |  |  |
| binding_condition | enum |  | データ バインディングが発生する条件。 <br> 可能な値: <br> `always` <br> `always_when_visible` <br> `visible` <br> `once` <br> `none` <br> `visibility_changed` |
| source_control_name | string |  | プロパティ値を確認するための UI 要素の名前 |
| source_property_name | string |  | `source_control_name`で参照されるUI要素のプロパティ値の値を格納します |
| target_property_name | string |  | `source_property_name` に格納された値が適用される UI 要素のプロパティ |
| resolve_sibling_scope | boolean |  | `true` の場合、同じコントロール内の兄弟要素の選択のみが許可され、`source_control_name` の場合は兄弟スコープ外のすべてのコントロール名がブロックされます。兄弟と親の名前が同じ場合は、`true` であっても親が優先されます。 |

### スタックパネル

| Property Name | Type | Default Value | Description |
| ------------- | :--: | :-----------: | ---------------------------------------------------------------------------------------------------------- |
| orientation | enum | `vertical` | 要素が `stack_panel` 内でスタックされる方向。 <br> 可能な値: <br> `vertical` <br> `horizontal` |

### グリッド

| Property Name | Type | Default Value | Description |
| ------------------------- | :--------------------: | ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| grid_dimensions | Vector [columns, rows] |  | グリッドの列と行の数 |
| maximum_grid_items | int |  | グリッドが生成するアイテムの最大数 |
| grid_dimension_binding | string |  | グリッド次元のバインド名 |
| grid_rescaling_type | enum |  | グリッドの再スケーリングの方向。 <br> 可能な値: <br> `vertical` <br> `horizontal` <br> `none` |
| grid_fill_direction | enum |  | 可能な値: <br> `vertical` <br> `horizontal` <br> `none` |
| grid_item_template | string |  | コレクション <br> (例: `"common.container_item"`、`"container_items"`、`"inventory_items"` など) を処理できる要素。 |
| precached_grid_item_count | int |  |  |

### 文章

| Property Name | Type | Default Value | Description |
| ----------------------- | :--------------: | :---------------: | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| text | string |  | テキストの内容 |
| color | Vector [r, g, b] | `[1.0, 1.0, 1.0]` | テキストの色。 RGB値0.0～1.0 |
| locked_color | Vector [r, g, b] |  | 親が`enabled: false`を持つ場合の文字色 |
| shadow | boolean | `false` | テキストシャドウ |
| hide_hyphen | boolean | `false` | 単語分割によるハイフンを非表示にする |
| notify_on_ellipses | string[] |  | テキストが省略記号を取得または失ったときに通知するコントロールの名前の配列 |
| enable_profanity_filter | boolean | `false` | 「悪い」言葉を検閲する必要がある場合 |
| locked_alpha | float |  | 親が `enabled: false` を持つ場合のラベルのアルファ/透明度 |
| font_size | enum | `normal` | テキストのサイズ。 <br> 可能な値: <br> `small` <br> `normal` <br> `large` <br> `extra_large` |
| font_scale_factor | float | `1.0` | テキストのスケール |
| localize | boolean | `false` | `text` は翻訳できるはずです |
| line_padding | number |  | 行間のスペース |
| font_type | enum | `default` | テキストのフォント。 <br> 可能な値: <br> `default` <br> `rune` <br> `unicode` <br> `smooth` <br> `MinecraftTen` <br> またはその他のカスタム フォント |
| backup_font_type | enum | `default` | `font_type` が機能しない場合に使用されるフォント |
| text_alignment | enum |  | テキストの配置方向。定義されていない場合は、`anchor_from` および `anchor_to` に基づいて自動的に調整されます。 |

#### レガシー (機能しなくなりました)

| Property Name | Type | Default Value | Description |
| ------------- | :-----: | :-----------: | ----------------------------------------------------------------- |
| wrap | boolean | `false` | テキストが要素の幅より大きい場合、テキストを複数行に分割します |
| clip | boolean | `false` |  |

`notify_on_ellipses` の使用。主にハードコードされたテキストで使用されます。

<CodeHeader>RP/ui/example_file.json</CodeHeader>

```json
{
  "label": {
    ...
    "notify_on_ellipses": [
      "my_button"
    ]
  },

  "my_button": {
    ...
    "bindings": [
      {
        "binding_type": "view",
        "source_property_name": "#using_ellipses",
        "target_property_name": "#visible"
      }
    ]
  }
}
```

### スプライト

| Property Name | Type | Default Value | Description |
| --------------------------- | :----------------------------: | :-------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| texture | string |  | パックルートから始まるイメージパス。 (例: `"textures/ui/White"`) |
| allow_debug_missing_texture | boolean | `true` | テクスチャが見つからない場合は missing_texture を表示します |
| uv | Vector [u, v] |  | テクスチャマッピングの開始位置 |
| uv_size | Vector [width, height] |  | テクスチャマッピングのサイズ |
| texture_file_system | string | `InUserPackage` | テクスチャを取得するソース。 <br> 可能な値: <br> `InUserPackage` <br> `InAppPackage` <br> `RawPath` <br> `RawPersistent` <br> `InSettingsDir` <br> `InExternalDir` <br> `InServerPackage` <br> `InDataDir` <br> `InUserDir` <br> `InWorldDir` <br> `StoreCache` <br> 使用法は不明です |
| nineslice_size | int or Vector [x0, y0, x1, y1] |  | 9スライス。テクスチャを9つに分割する方法。サイズを変更すると、角は所定の位置に留まり、残りの部分は伸びます |
| tiled | boolean or enum |  | UI 要素のサイズがテクスチャ サイズより大きい場合にテクスチャがタイル化されるかどうか。 <br> 可能な値: <br> `true`/`false` <br> `x` <br> `y` |
| tiled_scale | Vector [sX, sY] | `false` | タイル テクスチャのスケール |
| clip_direction | enum |  | `clip_ratio` の開始点の位置。 `down` の場合、画像は下から表示されます。 <br> 可能な値: <br> `left` <br> `right` <br> `up` <br> `down` <br> `center` |
| clip_ratio | float |  | どれだけクリップするか。 0.0から1.0まで |
| clip_pixelperfect | boolean |  | クリップのピクセル精度を可能な限り高める必要がある場合 |
| keep_ratio | boolean | `true` | 画像のサイズを変更するときに比率を維持する |
| bilinear | boolean | `false` | 画像のサイズを変更するときにバイリニア関数を使用する |
| fill | boolean | `false` | 画像をサイズに合わせて引き伸ばす |
| $fit_to_width | boolean |  |  |
| zip_folder | string |  |  |
| grayscale | boolean | `false` | 画像を白黒でレンダリングする |
| force_texture_reload | boolean |  | テクスチャパスが変更されたときに画像をリロードする |
| base_size | Vector [width, height] |  |  |

クリッピングを使用するには、バインド条件 `"always"` を使用して、`"always"` バインディング名を `"always"` プロパティにバインドします。炉 UI の進行矢印と燃料の画像は次のように機能します。

### 入力

| Property Name | Type | Default Value | Description |
| ---------------------------------- | :------------------------------------------------------------------------------------: | :-----------: | ------------------------------------------------------------- |
| button_mappings | Vector of [mapping object](/json-ui/json-ui-documentation#button-mapping-array-object) |  |  |
| modal | boolean |  |  |
| inline_modal | boolean |  |  |
| always_listen_to_input | boolean |  |  |
| always_handle_pointer | boolean |  |  |
| always_handle_controller_direction | boolean |  |  |
| hover_enabled | boolean |  |  |
| prevent_touch_input | boolean |  |  |
| consume_event | boolean |  |  |
| consume_hover_events | boolean |  | false に設定すると、要素がホバーされなくなります。 |
| gesture_tracking_button | string |  |  |

#### ボタン マッピング配列オブジェクト

| Property Name | Type | Default Value | Description |
| -------------------------------- | :-----: | :-----------: | ---------------------------------------------------------------------------------- |
| ignored | boolean | `false` | マッピングを無視する必要がある場合 |
| from_button_id | string |  | イベントを起動するアクションのID |
| to_button_id | string |  | イベント発生時に実行されるアクションのID |
| mapping_type | enum |  | 可能な値: <br> `global` <br> `pressed` <br> `double_pressed` <br> `focused` |
| scope | enum |  | 可能な値: <br> `view` <br> `controller` |
| input_mode_condition | enum |  | 可能な値: <br> `not_gaze` <br> `not_gamepad` <br> `gamepad_and_not_gaze` |
| ignore_input_scope | boolean |  |  |
| consume_event | boolean |  |  |
| handle_select | boolean |  |  |
| handle_deselect | boolean |  |  |
| button_up_right_of_first_refusal | boolean |  |  |

### 集中

| Property Name | Type | Default Value | Description |
| ---------------------------- | :-----------------------------------------------------------------------------------------------------------: | :-----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| default_focus_precedence | int |  | 画面を開いた後は、画面上の他の入力よりも優先して選択されます。 |
| focus_enabled | boolean |  | 矢印キーまたはコントローラーで要素にフォーカスできる場合 |
| focus_wrap_enabled | boolean |  |  |
| focus_magnet_enabled | boolean |  |  |
| focus_identifier | string |  | この要素のフォーカス識別子 |
| focus_change_down | string |  | button.menu_down のときにフォーカスを受け取るフォーカス可能な要素の識別子 (`focus_identifier`)。フォーカスが下から逃げるのを防ぎたい場合は、`FOCUS_OVERRIDE_STOP` を使用してください。 |
| focus_change_up | string |  | button.menu_up のときにフォーカスを受け取るフォーカス可能な要素の識別子 (`focus_identifier`)。フォーカスが上部から逃げるのを防ぎたい場合は、`FOCUS_OVERRIDE_STOP` を使用してください。 |
| focus_change_left | string |  | button.menu_left にあるときにフォーカスを受け取るフォーカス可能な要素の識別子 (`focus_identifier`)。フォーカスが左側から逃げるのを防ぎたい場合は、`FOCUS_OVERRIDE_STOP` を使用してください。 |
| focus_change_right | string |  | button.menu_right にあるときにフォーカスを受け取るフォーカス可能な要素の識別子 (`focus_identifier`)。フォーカスが右から逃げるのを防ぎたい場合は、`FOCUS_OVERRIDE_STOP` を使用してください。 |
| focus_mapping | array |  |  |
| focus_container | boolean |  |  |
| use_last_focus | boolean |  |  |
| focus_navigation_mode_left | enum |  | 可能な値: `none` <br> `stop` <br> `custom` <br> `contained` |
| focus_navigation_mode_right | enum |  | 可能な値: `none` <br> `stop` <br> `custom` <br> `contained` |
| focus_navigation_mode_down | enum |  | 可能な値: `none` <br> `stop` <br> `custom` <br> `contained` |
| focus_navigation_mode_up | enum |  | 可能な値: `none` <br> `stop` <br> `custom` <br> `contained` |
| focus_container_custom_left | Vector of [focus container custom object](/json-ui/json-ui-documentation#focus-container-custom-array-object) |  |  |
| focus_container_custom_right | Vector of [focus container custom object](/json-ui/json-ui-documentation#focus-container-custom-array-object) |  |  |
| focus_container_custom_down | Vector of [focus container custom object](/json-ui/json-ui-documentation#focus-container-custom-array-object) |  |  |
| focus_container_custom_up | Vector of [focus container custom object](/json-ui/json-ui-documentation#focus-container-custom-array-object) |  |  |

#### フォーカス コンテナーのカスタム配列オブジェクト

| Property Name | Type | Description |
| -------------------------- | :----: | ------------------------------------------------------------------------------------------------------------------------------ |
| other_focus_container_name | string | button.menu_left、button.menu_right、button.menu_up、または button.menu_down にあるときにフォーカスを受け取る UI コントロールの名前 |
| focus_id_inside | string | フォーカスを受け取る `other_focus_container_name` のフォーカス可能な子コントロールの識別子 (`focus_identifier`) |

<CodeHeader>RP/ui/example_file.json</CodeHeader>

```json
...
{
  "other_panel": {
    ...
    "focus_container": true,
    "controls": [
      ...
    ]
  }
},
{
  "input_panel": {
    ...
    "focus_container_custom_up": [
      {
        "other_focus_container_name": "other_panel" // name of the object that will receive focus when the focus of this container ends on `button.menu_up`
      }
    ]
  }
}
...
```

### ボタン

| Property Name | Type | Default Value | Description |
| --------------- | :----: | :-----------: | -------------------------------------------------------------------------- |
| default_control | string |  | デフォルト状態でのみ表示される子コントロールの名前 |
| hover_control | string |  | ホバー状態でのみ表示される子コントロールの名前 |
| pressed_control | string |  | 押された状態でのみ表示される子コントロールの名前 |
| locked_control | string |  | ロック状態でのみ表示される子コントロールの名前 |

### トグル

| Property Name | Type | Default Value | Description |
| ------------------------------ | :-----: | :-----------: | ----------------------------------------------------------------------------------------- |
| radio_toggle_group | boolean |  |  |
| toggle_name | string |  | 属するトグル グループの識別子。カスタムでも構いません。 |
| toggle_default_state | boolean |  |  |
| toggle_group_forced_index | int |  | グループ内のトグルのインデックス |
| toggle_group_default_selected | int |  | そのグループのデフォルトのトグルのインデックス |
| reset_on_focus_lost | boolean |  |  |
| toggle_on_hover | string |  |  |
| toggle_on_button | string |  |  |
| toggle_off_button | string |  |  |
| enable_directional_toggling | boolean |  |  |
| toggle_grid_collection_name | string |  | トグルが属するコレクションの名前 |
| checked_control | string |  | チェックした状態でのみ表示される子コントロールの名前 |
| unchecked_control | string |  | チェックされていない状態でのみ表示される子コントロールの名前 |
| checked_hover_control | string |  | チェックされたホバー状態でのみ表示される子コントロールの名前 |
| unchecked_hover_control | string |  | チェックされていないホバー状態でのみ表示される子コントロールの名前 |
| checked_locked_control | string |  | チェックされたロック状態でのみ表示される子コントロールの名前 |
| unchecked_locked_control | string |  | チェックされていないロック状態でのみ表示される子コントロールの名前 |
| checked_locked_hover_control | string |  | チェックされたロックされたホバー状態でのみ表示される子コントロールの名前 |
| unchecked_locked_hover_control | string |  | チェックされていないロックされたホバー状態でのみ表示される子コントロールの名前 |

### ハードコードされたトグル

一部の画面では、ナビゲーション タブ グループに、設定やインベントリなどのデフォルトで選択されたタブがマッピングされています。
これらの価値観は正しいと思います。

```json
$search_index - $construction_index
$survival_layout_index - $construction_index
$recipe_book_layout_index - $equipment_index
$creative_layout_index - $items_index
```

また、設定とインベントリには必須の切り替えがいくつかあります。開発バージョンがないと警告が表示されず、アサート診断を開くことはできませんが、それらは正確に存在し、_ScreenView::\_passViewCommand::<lambda_2ab071547c9a470558c54e4d3cddb5f2>::()::<lambda_2ab071547c9a470558c54e4d3cddb5f2>::operator()_ と呼ばれる関数によって制御されます。これらの画面を完全に変更すると、このアサーションを満たす可能性があります。

たとえば、アクセシビリティやインベントリの設定では、建設、設備、アイテム、自然のタブが必須です。

### 落ちる

| Property Name | Type | Default Value | Description |
| ------------------------ | :----: | :-----------: | -------------------------------------------------------------------- |
| dropdown_name | string |  | ドロップダウンの識別子 |
| dropdown_content_control | string |  | ルート コンテンツ パネルとして動作する子コントロールの名前 |
| dropdown_area | string |  | 内部コンテンツとして動作する子コントロールの名前 |

### 音

| Property Name | Type | Description |
| ------------- | :-------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------- |
| sound_name | string | `RP/sounds/sound_definitions.json` ファイルで定義されている、押されたイベントが発生したときに再生されるサウンドの名前 |
| sound_volume | float | 音の音量 |
| sound_pitch | float | 音の高さ |
| sounds | Vector of [sound object](/json-ui/json-ui-documentation#sound-array-object) | 押されたイベントが発生したときに再生されるサウンドの配列 |

#### サウンド配列オブジェクト

| Property Name | Type | Description |
| ------------------------- | :----: | ------------------------------------------------------------------------------------------------------------------- |
| sound_name | string | `RP/sounds/sound_definitions.json` ファイルで定義されている、押されたイベントが発生したときに再生されるサウンドの名前 |
| sound_volume | float | 音の音量 |
| sound_pitch | float | 音の高さ |
| min_seconds_between_plays | float | サウンドが再度再生されるまでの数秒間の待機時間 |

### コレクション

| Property Name | Type | Description |
| --------------- | :----: | --------------------------------- |
| collection_name | string | 使用するコレクションの名前 |

### テキスト編集

| Property Name | Type | Default Value | Description |
| ---------------------------------- | :-----: | :-----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| text_box_name | string |  | テキストボックスの識別子 |
| text_edit_box_grid_collection_name | string |  | `edit_box` が属するコレクションの名前 |
| constrain_to_rect | boolean |  |  |
| enabled_newline | boolean |  | 複数行のテキストを許可します |
| text_type | enum |  | ユーザーがテキストフィールドに入力できる文字のタイプ。 <br> 可能な値: <br> `ExtendedASCII` <br> `IdentifierChars` <br> `NumberChars` |
| max_length | int |  | テキストフィールドに入力できる最大文字数 |
| text_control | string |  | テキストの表示に使用される子コントロールの名前 |
| place_holder_control | string |  | プレースホルダーテキストの表示に使用される子コントロールの名前。 |
| can_be_deselected | boolean |  |  |
| always_listening | boolean |  |  |
| virtual_keyboard_buffer_control | string |  |  |

### スライダー

| Property Name | Type | Default Value | Description |
| ---------------------------- | :-----: | :-----------: | ------------------------------------------------------------------------------------------------------------ |
| slider_track_button | string |  | スライダートラックのアクションのID |
| slider_small_decrease_button | string |  | 減少スライダーのアクションのID |
| slider_small_increase_button | string |  | 増加スライダーのアクションのID |
| slider_steps | int |  | nスライダーには何段階（または値）がありますか |
| slider_direction | enum |  | スライダーの動きの方向。 <br> 可能な値: <br> `vertical` <br> `horizontal` |
| slider_timeout | number |  |  |
| slider_collection_name | string |  | スライダーが属するコレクションの名前 |
| slider_name | string |  | スライダーの識別子 |
| slider_select_on_hover | boolean |  | ホバー時のフォーカススライダー |
| slider_selected_button | string |  | スライダー選択時のアクションのID |
| slider_deselected_button | string |  | スライダーの選択が解除されたときのアクションのID |
| slider_box_control | string |  | スライダーのサムとして動作する子コントロールの名前 |
| background_control | string |  | スライダーの背景として動作する子コントロールの名前 |
| background_hover_control | string |  | ホバー時にスライダーの背景として動作する子コントロールの名前 |
| progress_control | string |  | スライダーの進行状況のスライダーの背景オーバーレイとして動作する子コントロールの名前 |
| progress_hover_control | string |  | ホバー時のスライダーの進行状況に対するスライダーの背景オーバーレイとして動作する子コントロールの名前 |

### スライダーボックス

| Property Name | Type | Default Value | Description |
| --------------- | :----: | :-----------: | --------------------------------------------------------------------- |
| default_control | string |  | デフォルト状態で表示される子コントロールの名前 |
| hover_control | string |  | ホバー状態で表示される子コントロールの名前 |
| locked_control | string |  | ロック状態で表示される子コントロールの名前 |

### スクロールビュー

| Property Name | Type | Default Value | Description |
| -------------------------- | :-----: | :-----------: | ------------------------------------------------------------------------------------------------- |
| scrollbar_track_button | string |  | トラックボタンのアクションのID |
| scrollbar_touch_button | string |  | タッチ入力のアクションのID |
| scroll_speed | number |  | スクロール速度 |
| gesture_control_enabled | boolean |  |  |
| always_handle_scrolling | boolean |  |  |
| touch_mode | boolean |  |  |
| scrollbar_box | string |  | スクロールバーのサムとして動作する子 UI 要素またはネストされた UI 要素の名前。 |
| scrollbar_track | string |  | スクロールバー トラックとして動作する子 UI 要素またはネストされた UI 要素の名前 |
| scroll_view_port | string |  | ビューポートとして動作する子UI要素の名前 |
| scroll_content | string |  | コンテンツのルート親として動作する子 UI 要素の名前 |
| scroll_box_and_track_panel | string |  | スクロール コントロールとトラック コントロールを含む子 UI 要素の名前 |
| jump_to_bottom_on_update | boolean |  | スクロール パネルに更新がある場合は、一番下にジャンプします。たとえば、さらに子を追加します。 |

### カスタムレンダリング

| Property Name | Type | Description |
| ------------- | :--: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| renderer | enum | 可能な値: <br> `hover_text_renderer` <br> `3d_structure_renderer` <br> `splash_text_renderer` <br> `ui_holo_cursor` <br> `trial_time_renderer` <br> `panorama_renderer` <br> `actor_portrait_renderer` <br> `banner_pattern_renderer` <br> `live_player_renderer` <br> `web_view_renderer` <br> `hunger_renderer` <br> `bubbles_renderer` <br> `mob_effects_renderer` <br> `cursor_renderer` <br> `progress_indicator_renderer` <br> `camera_renderer` <br> `horse_jump_renderer` <br> `armor_renderer` <br> `horse_heart_renderer` <br> `heart_renderer` <br> `hotbar_cooldown_renderer` <br> `hotbar_renderer` <br> `hud_player_renderer` <br> `live_horse_renderer` <br> `holographic_postrenderer` <br> `enchanting_book_renderer` <br> `debug_screen_renderer` <br> `gradient_renderer` <br> `paper_doll_renderer` <br> `name_tag_renderer` <br> `flying_item_renderer` <br> `inventory_item_renderer` <br> `credits_renderer` <br> `vignette_renderer` <br> `progress_bar_renderer` <br> `debug_overlay_renderer` <br> `background_renderer` <br> `bohr_model_renderer` <br> `equipment_preview_renderer` <br> `experience_renderer` (レガシー、動作しなくなりました) <br> `menu_background_renderer` (レガシー、動作しなくなりました) |

#### レンダラー

| Renderer Name | Description |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `flying_item_renderer` | アイテムをスロットから別のスロットに変更するときに飛行するアイテム |
| `inventory_item_renderer` | アイテムアイコンをレンダリングします。ゲーム内の画面内でのみ機能します |
| `credits_renderer` | クレジットとエンドポエム |
| `vignette_renderer` | ビネット |
| `name_tag_renderer` | これは、プレイヤーの頭の上にプレイヤー名が表示されたり、動物に名札が付けられている場合に動物の上に表示される名前のようなものです。 |
| `paper_doll_renderer` | 皮膚モデル |
| `debug_screen_renderer` | ベータ/プレビュー バージョンに表示されるデバッグ テキスト |
| `enchanting_book_renderer` | エンチャントテーブルの本。エンチャントされるアイテムがあるときに開きます |
| `gradient_renderer` | グラデーションを描きます |
| `live_horse_renderer` | 馬/ロバ/ラマ...モデル |
| `live_player_renderer` | プレーヤーモデル |
| `hud_player_renderer` | プレイヤーの動作を模倣するプレイヤーモデル |
| `hotbar_renderer` | 各スロットのホットバー スロット イメージを取得します |
| `hotbar_cooldown_renderer` | アイテムのクールダウンを描画します |
| `heart_renderer` | プレイヤーの体力を描画します |
| `horse_heart_renderer` | 馬/ロバ/... 健康を描画します。 |
| `armor_renderer` | プレイヤーの鎧を描画します |
| `horse_jump_renderer` | 馬の跳躍の進行状況バーを描画します |
| `hunger_renderer` | プレイヤーの空腹感を引き出す |
| `bubbles_renderer` | 呼吸の泡を描画します |
| `mob_effects_renderer` | プレイヤーに適用されるエフェクトを描画します |
| `cursor_renderer` | 画面の中央に十字線を描きます |
| `equipment_preview_renderer` | ドローアーマースタンド |
| `progress_indicator_renderer` | 未使用 |
| `camera_renderer` | カメラアイテムに使用 |
| `web_view_renderer` | Web サイトのビューを表示します |
| `banner_pattern_renderer` | バナーをレンダリングします |
| `actor_portrait_renderer` | 似顔絵を描きます |
| `trial_time_renderer` | ゲームの試用版では、ワールドを使用できるようになる残り時間が表示されます |
| `progress_bar_renderer` | プログレスバーを描画します。複数の種類があります |
| `3d_structure_renderer` | ストラクチャーブロック構造をレンダリングします。 |
| `splash_text_renderer` | `splashes.json` ファイルからランダムなスプラッシュ テキストを取得してレンダリングします |
| `hover_text_renderer` | ツールチップを描画します |
| `ui_holo_cursor` |  |
| `panorama_renderer` | メニューの後ろに表示されるのはパノラマではありません。店内に広がる世界のパノラマです。 |

#### 特定のプロパティ

| Property Name | Type | Renderer | Description |
| -------------------- | :-----------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| gradient_direction | enum | `gradient_renderer` | 可能な値: <br> `vertical` <br> `horizontal` |
| color1 | Vector [r, g, b, a] | `gradient_renderer` |  |
| color2 | Vector [r, g, b, a] | `gradient_renderer` |  |
| text_color | Vector [r, g, b, a] | `name_tag_renderer` |  |
| background_color | Vector [r, g, b, a] | `name_tag_renderer` |  |
| primary_color | Vector [r, g, b, a] | `progress_bar_renderer` |  |
| secondary_color | Vector [r, g, b, a] | `progress_bar_renderer` |  |
| camera_tilt_degrees | number | `paper_doll_renderer` |  |
| starting_rotation | number | `paper_doll_renderer` |  |
| use_selected_skin | boolean | `paper_doll_renderer` |  |
| use_uuid | boolean | `paper_doll_renderer` |  |
| use_skin_gui_scale | boolean | `paper_doll_renderer` |  |
| use_player_paperdoll | boolean | `paper_doll_renderer` |  |
| rotation | enum | `paper_doll_renderer` and `panorama_renderer` | 可能な値: <br> `auto` <br> `gesture_x` <br> `custom_y` |
| end_event | string | `credits_renderer` |  |
| item_id_aux | number | `equipment_preview_renderer` | 表示したい装備のアイテムID aux |
| item_custom_color | number | `equipment_preview_renderer` | 染色レザーアーマーカラーID |
| armor_trim_material | enum | `equipment_preview_renderer` | 可能な値: <br> `amethyst` <br> `copper` <br> `diamond` <br> `emerald` <br> `gold` <br> `iron` <br> `lapis` <br> `netherite` <br> `quartz` <br> `redstone` <br> `resin` |
| armor_trim_pattern | enum | `equipment_preview_renderer` | 可能な値: <br> `coast` <br> `dune` <br> `eye` <br> `host` <br> `raiser` <br> `rib` <br> `sentry` <br> `shaper` <br> `silence` <br> `snout` <br> `spire` <br> `tide` <br> `vex` <br> `ward` <br> `wayfinder` <br> `wild` <br> `bolt` <br> `flow` |

### 画面

| Property Name | Type | Description |
| ----------------------------------- | :-----: | ------------------------------------------------------------------------- |
| render_only_when_topmost | boolean | 画面スタックの最上位画面である場合にのみ画面をレンダリングします。 |
| screen_not_flushable | boolean |  |
| always_accepts_input | boolean |  |
| render_game_behind | boolean | 以下の画面でユーザーからの入力を受信できるようになります。 |
| absorbs_input | boolean |  |
| is_showing_menu | boolean |  |
| is_modal | boolean | 画面モーダルです |
| should_steal_mouse | boolean | カーソルをキャプチャして非表示にします |
| low_frequency_rendering | boolean | 画面のレンダリングに使用するメモリの使用量が少なくなります |
| screen_draws_last | boolean | これは描画/レンダリングされる最後の画面です |
| vr_mode | boolean |  |
| force_render_below | boolean | 画面スタック内の現在の画面の下に下部画面をレンダリングします。 |
| send_telemetry | boolean |  |
| close_on_player_hurt | boolean | プレイヤーがダメージを受けると画面を閉じます |
| cache_screen | boolean |  |
| load_screen_immediately | boolean |  |
| gamepad_cursor | boolean |  |
| gamepad_cursor_deflection_mode | boolean |  |
| should_be_skipped_during_automation | boolean |  |

### 選択ホイール

| Property Name | Type | Description |
| ------------------------- | :------: | ----------- |
| inner_radius | number |  |
| outer_radius | number |  |
| state_controls | string[] |  |
| slice_count | integer |  |
| button_name | string |  |
| iterate_left_button_name | string |  |
| iterate_right_button_name | string |  |
| initial_button_slice | integer |  |

### TTS

| Property Name | Type | Description |
| ----------------------------------- | :-----: | ------------------------------------------------------------------------------------------ |
| tts_name | string |  |
| tts_control_header | string |  |
| tts_section_header | string |  |
| tts_control_type_order_priority | integer |  |
| tts_index_priority | integer |  |
| tts_toggle_on | string | `toggle` タイプで使用 |
| tts_toggle_off | string | `toggle` タイプで使用 |
| tts_override_control_value | string |  |
| tts_inherit_siblings | boolean |  |
| tts_value_changed | string |  |
| ttsSectionContainer | boolean |  |
| tts_ignore_count | boolean |  |
| tts_skip_message | boolean |  |
| tts_value_order_priority | integer |  |
| tts_play_on_unchanged_focus_control | boolean |  |
| tts_ignore_subsections | boolean |  |
| text_tts | string |  |
| use_priority | boolean | `priority` プロパティを使用して各子コントロールの TTS 優先順位を決定する場合 |
| priority | boolean | 要素が TTS 上で持つ優先順位/インデックス |

### タブ (レガシー)

| Property Name | Type | Default Value | Description |
| ------------- | :----: | :-----------: | --------------------------------------------------------- |
| tab_index | int |  | グループ内のタブのID |
| tab_group | int |  | タブが属するグループのID |
| tab_control | string |  | タブがアクティブなときに表示されるコントロールの名前 |

### カルーセル テキスト (レガシー)

| Property Name | Type | Default Value | Description |
| ------------- | :------------------: | :-----------: | ------------------------------- |
| always_rotate | boolean |  |  |
| rotate_speed | number |  |  |
| hover_color | Vector [r, g, b, a], |  | `color` 要素がホバーされたとき |
| hover_alpha | float |  | `alpha` 要素がホバーされているとき |
| pressed_color | Vector [r, g, b, a], |  | `color` 要素が押されたとき |
| pressed_alpha | float |  | `alpha` 要素が押されたとき |

## プロパティの追加情報

### アンカーのプロパティ

アンカーを使用すると、位置、サイズ、スケール、アニメーションなどが変換のポイントとなる特定のポイントに要素を整列させることができます。
JSON UI には、これを実現する 2 つのプロパティ `anchor_to` と `anchor_to` があります。

ほとんどの人は、同じ値を与えて使用します。

<CodeHeader>RP/ui/example_file.json</CodeHeader>

```json
{
    "element": {
        "anchor_from": "top_left",
        "anchor_to": "top_left"
    }
}
```

<Wiki画像
src="アンカーと同じ値.png"
alt="同じ値のアンカー"
ピクセル化された
幅=782
/>

しかし、それらの値が異なる場合はどうなるでしょうか。 `anchor_to: top_left` と `anchor_to: top_left` の場合に何が起こるかを見てみましょう。これは実際に何が起こっているかを示す最良の例です。

<CodeHeader>RP/ui/example_file.json</CodeHeader>

```json
{
    "element": {
        "anchor_from": "center",
        "anchor_to": "top_left"
    }
}
```

<Wiki画像
src="アンカー_センター_トップ_左.png"
alt="中央から左上にアンカー"
ピクセル化された
幅=782
/>

要素の左上の点は、親要素の中心点にあります。

別の例:

<Wiki画像
src="anchor_ce_rm_tm_tl.png"
alt="中央から右中央にアンカー、中央上から左上にアンカー"
ピクセル化された
幅=782
/>

青いボックスの左上の点は、親要素の上部中央の点にあります。ブラックボックスに関しては、右の中点が親の中心にあります。

基本的に、`anchor_from` は、親要素の `anchor_from` にアタッチされる要素のアンカー ポイントです。

### 変数プロパティ

| Name | Type | Description |
| ---------- | :----: | ----------------------------------------------------------------------------------------------------------------------- |
| `requires` | string | 以下の変数値が適用されるかどうかを決定する条件。 `$variables` は受け入れられますが、`#bindings` は受け入れられません。 |

使用する変数が 1 つだけの場合は、`"variables": {}` を使用する必要があります。

<CodeHeader>RP/ui/example_file.json</CodeHeader>

```json
{
  "element": {
    ...
    "size": "$el_size",
    "$el_size|default": ["100%", 20],
    "variables": {
      "requires": "$var_condition",
      "$el_size": ["100%", 30]
    }
  }
}
```

複数の変数がある場合は、`"variables": [{}]` を使用します

<CodeHeader>RP/ui/example_file.json</CodeHeader>

```json
{
  "element": {
    ...
    "size": "$el_size",
    "offset": "$el_offset",
    "$el_offset|default": [0, 40],
    "$el_size|default": ["100%", 20],
    "variables": [
      {
        "requires": "$var_condition",
        "$el_size": ["100%", 30]
      },
      {
        "requires": "$other_var_condition",
        "$el_offset": [0, 15],
        "$el_size": ["90%", 35]
      }
    ]
  }
}
```

## プロパティバッグ

| Name | Type | Requirements | Description |
| ---------------------------------- | :-----------------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| #filtered_light_multiplier | float | type[custom] <br> renderer[inventory_item_renderer] |  |
| #banner_patterns | string | type[custom] <br> renderer[inventory_item_renderer] |  |
| #banner_colors | string | type[custom] <br> renderer[inventory_item_renderer] |  |
| #item_id_aux | int | type[custom] <br> renderer[inventory_item_renderer] |  |
| #item_custom_color | int | type[custom] <br> renderer[inventory_item_renderer] |  |
| #disabled_filter_visible | boolean | type[custom] <br> renderer[inventory_item_renderer] |  |
| #item_pickup_time | float | type[custom] <br> renderer[inventory_item_renderer] |  |
| #look_at_cursor | boolean | type[custom] <br> renderer[hud_player_renderer] |  |
| entity_type | enum | type[custom] <br> renderer[paper_doll_renderer] | 可能な値: <br> `player` <br> `npc` |
| #skin_idx | int | type[custom] <br> renderer[paper_doll_renderer] |  |
| #player_uuid | string | type[custom] <br> renderer[paper_doll_renderer] |  |
| #skin_rotation | boolean | type[custom] <br> renderer[paper_doll_renderer] |  |
| #custom_rot_y | float | type[custom] <br> renderer[paper_doll_renderer] |  |
| #gesture_delta_source | string | type[custom] <br> renderer[paper_doll_renderer] |  |
| #gesture_mouse_delta_x | string | type[custom] <br> renderer[paper_doll_renderer] |  |
| #pack_id | int | type[custom] <br> renderer[paper_doll_renderer] |  |
| #force_skin_update | string | type[custom] <br> renderer[paper_doll_renderer] |  |
| #progress_bar_visible | boolean | type[custom] <br> renderer[paper_doll_renderer] |  |
| #progress_bar_total_amount | float | type[custom] <br> renderer[progress_bar_renderer] |  |
| #progress_bar_current_amount | float | type[custom] <br> renderer[progress_bar_renderer] |  |
| is_durability | boolean | type[custom] <br> renderer[progress_bar_renderer] |  |
| round_value | boolean | type[custom] <br> renderer[progress_bar_renderer] |  |
| #hover_text | string | type[custom] <br> renderer[hover_text_renderer] |  |
| #open | boolean | type[custom] <br> renderer[enchanting_book_renderer] |  |
| flying_item_count | int | type[custom] <br> renderer[flying_item_renderer] |  |
| flying_item_id_aux | int | type[custom] <br> renderer[flying_item_renderer] |  |
| flying_item_custom_color | int | type[custom] <br> renderer[flying_item_renderer] |  |
| flying_item_origin_position_x | float | type[custom] <br> renderer[flying_item_renderer] |  |
| flying_item_origin_position_y | float | type[custom] <br> renderer[flying_item_renderer] |  |
| flying_item_origin_scale | float | type[custom] <br> renderer[flying_item_renderer] |  |
| flying_item_destination_position_x | float | type[custom] <br> renderer[flying_item_renderer] |  |
| flying_item_destination_position_y | float | type[custom] <br> renderer[flying_item_renderer] |  |
| flying_item_destination_scale | float | type[custom] <br> renderer[flying_item_renderer] |  |
| flying_item_banner_patterns | string | type[custom] <br> renderer[flying_item_renderer] |  |
| flying_item_banner_colors | string | type[custom] <br> renderer[flying_item_renderer] |  |
| #use_heart_offset | boolean | type[custom] <br> renderer[armor_renderer] |  |
| opacity_override | float | type[custom] <br> renderer[vignette_renderer] |  |
| #playername | string | type[custom] <br> renderer[name_tag_renderer] |  |
| #x_padding | number | type[custom] <br> renderer[name_tag_renderer] |  |
| #entity_id | string or int | type[custom] <br> renderer[live_horse_renderer] |  |
| #hyperlink | string | type[button] |  |
| #anchored_offset_value_x | number | `use_anchored_offset` property |  |
| #anchored_offset_value_y | number | `use_anchored_offset` property |  |
| #size_binding_x | number | `use_anchored_offset` property |  |
| #size_binding_y | number | `use_anchored_offset` property |  |
| #has_focus | boolean | type[custom] <br> renderer[3d_structure_renderer] |  |
| #block_position | Vector [x, y, z] | type[custom] <br> renderer[3d_structure_renderer] |  |
| #top_right_block | Vector [x, y, z] | type[custom] <br> renderer[3d_structure_renderer] |  |
| #bottom_left_block | Vector [x, y, z] | type[custom] <br> renderer[3d_structure_renderer] |  |
| #include_entities | boolean | type[custom] <br> renderer[3d_structure_renderer] |  |
| #remove_blocks | boolean | type[custom] <br> renderer[3d_structure_renderer] |  |
| #include_players | boolean | type[custom] <br> renderer[3d_structure_renderer] |  |
| #slider_steps | number | type[slider] |  |
| #slider_value | number | type[slider] |  |
| #property_field | string | type[edit_box] |  |
| #hover_slice | int | type[selection_wheel] |  |
| #toggle_state | boolean | type[toggle] |  |
| #start_selected | boolean |  |  |
| #tts_dialog_title | string |  |  |
| #tts_dialog_body | string |  |  |
| force_update | boolean |  |  |
| #sub_command | string |  |  |
| #panel_title | string |  |  |
| #index | int |  |  |
| #collection_prefix | string |  |  |
| #collection_name | string |  |  |
| #visible | boolean |  |  |
| #common | Vector [r, g, b, a] |  |  |
| #uncommon | Vector [r, g, b, a] |  |  |
| #rare | Vector [r, g, b, a] |  |  |
| #epic | Vector [r, g, b, a] |  |  |
| #legendary | Vector [r, g, b, a] |  |  |
| reset_group | enum |  | 可能な値: <br> `video` <br> `audio` <br> `accessibility` |
| #text | string |  |  |
| timer_duration | number |  |  |
| #should_host | boolean |  |  |
| is_local | boolean |  |  |
| #is_left | boolean |  |  |
| #is_skins | boolean |  |  |
| #is_featured | boolean |  |  |
| #image_name | string |  |  |
| #is_dropdown | boolean |  |  |
| #timer_field_count_to_show | number |  |  |
| #owned_incompatible_prompt_color | Vector [r, g, b] |  |  |
| #modal_title_text | string |  |  |
| #modal_label_text | string |  |  |
| #buttons_visible | boolean |  |  |
| #no_buttons_visible | boolean |  |  |
| #single_button_visible | boolean |  |  |
| #two_buttons_visible | boolean |  |  |
| is_fixed_inventory | boolean |  |  |
| experimental_radio_button_state | string |  |  |
| classic_radio_button_state | string |  |  |

## アニメーション

| Animation Property Name | Type | Description |
| ------------------------- | :-----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| anim_type | enum | 可能な値: <br> `alpha` <br> `clip` <br> `color` <br> `flip_book` <br> `offset` <br> `size` <br> `uv` <br> `wait` <br> `aseprite_flip_book` |
| duration | number | このアニメーションが終了するまでにかかる時間 (秒) |
| next | string | このアニメーションが終了した後に再生される次のアニメーションの名前 |
| destroy_at_end | string |  |
| play_event | string |  |
| end_event | string |  |
| start_event | string |  |
| reset_event | string |  |
| easing | enum | 可能な値: <br> `linear` <br> `spring` <br> `in_quad` <br> `out_quad` <br> `in_out_quad` <br> `in_cubic` <br> `out_cubic` <br> `in_out_cubic` <br> `in_quart` <br> `out_quart` <br> `in_out_quart` <br> `in_quint` <br> `out_quint` <br> `in_out_quint` <br> `in_sine` <br> `out_sine` <br> `in_out_sine` <br> `in_expo` <br> `out_expo` <br> `in_out_expo` <br> `in_circ` <br> `out_circ` <br> `in_out_circ` <br> `in_bounce` <br> `out_bounce` <br> `in_out_bounce` <br> `in_back` <br> `out_back` <br> `in_out_back` <br> `in_elastic` <br> `out_elastic` <br> `in_out_elastic` |
| from |  | anim_type の影響を受けるプロパティの初期値 |
| to |  | このアニメーションの影響を受けるプロパティの最終値 |
| initial_uv | Vector [u, v] |  |
| fps | int | 1 秒あたりのフレーム数 |
| frame_count | int |  |
| frame_step | number |  |
| reversible | boolean | 完了後にアニメーションを逆に実行する |
| resettable | boolean |  |
| scale_from_starting_alpha | boolean |  |
| activated | boolean |  |

`aseprite_flip_book` アニメーション タイプの詳細については、`aseprite_flip_book` のページを参照してください。

## グローバル変数

| Variable | Note |
| -------------------------------------- | ----------------------------------------------------------------------------------------- |
| $store_disabled |  |
| $game_pad | There's a controller connected to the device |
| $mouse | There's a mouse connected to the device |
| $touch |  |
| $trial | It's in the trial version of the game |
| $build_platform_UWP |  |
| $win10_edition |  |
| $ignore_add_servers |  |
| $disable_gamertag_controls |  |
| $console_edition |  |
| $osx_edition |  |
| $pocket_edition |  |
| $education_edition |  |
| $world_archive_support |  |
| $file_picking_supported |  |
| $desktop_screen | If the classic UI is selected |
| $pocket_screen | If the pocket UI is selected |
| $is_holographic |  |
| $gear_vr |  |
| $oculus_rift |  |
| $is_living_room_mode |  |
| $is_reality_mode |  |
| $realms_beta |  |
| $fire_tv |  |
| $is_ios |  |
| $apple_tv |  |
| $is_windows_10_mobile |  |
| $image_picking_not_supported |  |
| $pre_release |  |
| $ios |  |
| $is_console |  |
| $can_quit |  |
| $is_settopbox |  |
| $microsoft_os |  |
| $apple_os |  |
| $google_os |  |
| $nx_os |  |
| $horizontal_safezone_size |  |
| $vertical_safezone_size |  |
| $can_splitscreen |  |
| $is_secondary_client |  |
| $multiplayer_requires_live_gold |  |
| $xbox_one |  |
| $is_pregame | If it's a out-game screen. It's in-game when you are playing in a world, server or realms |
| $is_win10_arm |  |
| $vibration_supported |  |
| $is_mobile_vr |  |
| $is_xboxlive_enabled |  |
| $device_must_be_removed_for_xbl_signin |  |
| $is_publish | It's public and not a developer version |
| $is_desktop |  |
| $is_ps4 |  |
| $is_on_3p_server |  |
| $ignore_3rd_party_servers |  |
| $is_berwick |  |

## ハードコードされたハイパーリンク

`#hyperlink` ではカスタム URL は許可されません。これらは機能します:

- `http://education.minecraft.net/eula`
- `http://pocketbeta.minecraft.net/p/how-to-join-and-leave-beta.html`
- `http://aka.ms/minecraftrealmsfb`
- `http://aka.ms/minecraftrealmsterms`
- `http://aka.ms/minecraftfb`
- `http://aka.ms/minecraftedusupport`
- `https://aka.ms/blockxboxmessages`
- `http://aka.ms/minecraftfbbeta`
- `https://minecraft.net/attribution`
- `http://aka.ms/mcedulogs`
- `https://minecraft.net/licensed-content/`
- `https://education.minecraft.net/eula`
- `https://aka.ms/mcedulogs`
- `https://aka.ms/minecraftrealmsterms`
- `https://aka.ms/minecraftfb`
- `https://aka.ms/minecraftfbbeta`
- `https://aka.ms/minecraftedusupport`
- `https://itunes.apple.com/us/app/minecraft/id479516143?mt=8`
- `https://account.xbox.com/Settings`
- `https://aka.ms/meeterms`
- `https://aka.ms/privacy`
- `https://aka.ms/MCBanned`
- `https://aka.ms/MCMultiplayerHelp`
- `https://aka.ms/meeeula`
- `https://aka.ms/mee_privacy`
- `https://www.minecraft.net/attribution/?hideChrome`
- `https://aka.ms/switchattribution`
- `https://www.minecraft.net/licensed-content/?hideChrome`
- `https://aka.ms/switchcontent`
- `https://social.xbox.com/changegamertag`

## ハードコードされたボタン ID

それらの中には、特定の画面でのみ動作するものもあります。

### ボタン ID:

- `button.menu_exit`
- `B` (`B` キーまたはコントローラー `B`)
- `Open Inventory` (`Open Inventory` キーバインド)
- `Enter` (`Enter` キー)
- `button.menu_select` (マウスクリック)
- `X` (コントローラー `X`)
- `button.menu_secondary_select`
- `button.controller_secondary_select`
- `button.controller_secondary_select_left`
- `R3` (コントローラー `R3`)
- `button.controller_start`
- `Arrow Up` (`Arrow Up` キー)
- `Arrow Down` (`Arrow Down` キー)
- `Arrow Left` (`Arrow Left` キー)
- `Arrow Right` (`Arrow Right` キー)
- `Left Bumper` (`Left Bumper` キーバインドまたはコントローラー `Left Bumper`)
- `Right Bumper` (`Right Bumper` キーバインドまたはコントローラー `Right Bumper`)
- `button.menu_alternate_tab_left`
- `button.menu_alternate_tab_right`
- `Tab` (`Tab` キーを使用)
- `button.menu_autocomplete_back`
- `button.controller_autocomplete`
- `button.controller_autocomplete_back`
- `Arrow Up` (`Arrow Up` キーを使用)
- `Arrow Down` (`Arrow Down` キーを使用)
- `button.controller_textedit_up`
- `button.controller_textedit_down`
- `button.menu_auto_place`
- `Drop Item` (`Drop Item` キーバインド)
- `Control` (`Control` + `Control` キー)
- `button.menu_clear`
- `Open Chat` (`Open Chat` キーバインド)
- `Mob Effects` (`Mob Effects` キーバインド)
- `Emote` (`Emote` キーバインド)
- `1` (エモートホイール) (`1` キー)
- `2` (エモートホイール) (`2` キー)
- `3` (エモートホイール) (`3` キー)
- `4` (エモートホイール) (`4` キー)
- `5` (エモートホイール) (`5` キー)
- `6` (エモートホイール) (`6` キー)
- `Mouse Wheel Up` (`Mouse Wheel Up`)
- `Mouse Wheel Down` (`Mouse Wheel Down`)
- `button.scoreboard`
- `F1` (`F1` キー)
- `button.hide_tooltips`
- `button.hide_paperdoll`
- `button.slot0`
- `1` (`1` キー)
- `2` (`2` キー)
- `3` (`3` キー)
- `4` (`4` キー)
- `5` (`5` キー)
- `6` (`6` キー)
- `7` (`7` キー)
- `8` (`8` キー)
- `9` (`9` キー)
- `button.menu_vr_realign`
- `any` (文字通りの名前)

### 特定の画面ボタン ID:

#### 設定 (`ui/settings_screen.json`)

- `button.open_content_log_history`
- `button.clear_content_log_files`
- `button.clear_msa_token_button`
- `button.terms_and_conditions_popup`
- `button.credits`
- `button.unlink_msa`
- `button.attribute_popup`
- `button.licensed_content`
- `button.font_license`
- `button.tos_hyperlink`
- `button.privpol_hyperlink`
- `button.tos_popup`
- `button.privpol_popup`
- `button.binding_button`
- `button.reset_binding`
- `button.reset_keyboard_bindings`
- `button.view_account_errors`

#### 本 (`ui/book_screen.json`)

- `button.prev_page`
- `button.next_page`
- `button.book_exit`

#### チャット (`ui/chat_screen.json`)

- `button.send`
- `button.chat_autocomplete`
- `button.chat_autocomplete_back`
- `button.chat_previous_message`
- `button.chat_next_message`
- `button.chat_menu_cancel`

#### コマンド ブロック (`ui/command_block_screen.json`)

- `command_block.input_minimize`
- `button.chat_autocomplete`
- `button.chat_autocomplete_back`

#### コメント (`ui/comment_screen.json`)

- `button.comment_options_close`
- `button.comment_feed_options_close`
- `button.close_comments`
- `button.comment_next_button`
- `button.comment_prev_button`

#### クレジット (`ui/credits_screen.json`)

- `button.show_skip`

#### デスメニュー (`ui/death_screen.json`)

- `button.respawn_button`
- `button.main_menu_button`

#### エモート ホイール (`ui/emote_screen_wheel.json`)

- `button.rebind_mode`
- `button.dressing_room`
- `button.emote_selected`
- `button.select_emote_slot_0`
- `button.select_emote_slot_1`
- `button.select_emote_slot_2`
- `button.select_emote_slot_3`
- `button.select_emote_slot_4`
- `button.select_emote_slot_5`
- `button.iterate_selection_left`
- `button.iterate_selection_right`

#### フィード (`ui/feed_screen.json`)

- `button.feed_image`
- `button.newpost`
- `button.add_screenshot`
- `button.feed_comment`
- `button.feed_prev_button`
- `button.feed_next_button`
- `button.feed_new_post_close`
- `button.feed_options_close`
- `button.close_feed`

#### ゲームメニュー (`ui/pause_screen.json`)

- `button.to_profile_or_skins_screen`
- `button.player_profile_card`
- `button.menu_continue`
- `button.menu_server_store`
- `button.screenshot`
- `button.menu_how_to_play`
- `button.menu_feedback`
- `button.menu_permission`
- `button.menu_invite_players`
- `button.menu_quit`
- `button.menu_feed`
- `button.pause_focus_filler`

#### ベッドで (`ui/in_bed_screen.json`)

- `button.wake_up_button`

#### 招待 (`ui/invite_screen.json`)

- `button.add_friend`
- `button.add_member`
- `button.send_invites`

#### フィードの管理 (`ui/manage_feed_screen.json`)

- `button.manage_feed_prev_button`
- `button.manage_feed_next_button`
- `button.manage_feed_ignore`
- `button.manage_feed_delete`
- `button.close_manage_feed`

#### アンビル (`ui/anvil_screen.json`)

- `button.anvil_take_all_place_all`
- `button.anvil_coalesce_stack`

#### 地図作成テーブル (`ui/cartography_screen.json`)

- `button.cartography_result_take_all_place_all`

#### エンチャントテーブル (`ui/enchanting_table_screen.json`)

- `button.enchant`

#### 砥石 (`ui/grindstone_screen.json`)

- `button.grindstone_take_all_place_all`
- `button.grindstone_coalesce_stack`

#### 織機 (`ui/loom_screen.json`)

- `button.loom_result_take_all_place_all`
- `button.pattern_select`

#### 村人取引 (`ui/trade_screen.json`)

- `button.cycle_recipe_left`
- `button.cycle_recipe_right`
- `button.trade_take_all_place_all`
- `button.trade_take_half_place_one`
- `button.trade_coalesce_stack`

#### プレイ (`ui/play_screen.json`)

- `button.menu_sign_in_to_view_realms`
- `button.menu_realms_world_item_edit`
- `button.menu_realms_feed`
- `button.menu_realms_world_item_remove`
- `button.menu_network_world_item`
- `button.menu_network_server_world_edit`
- `button.connect_to_third_party_server`
- `button.view_third_party_server_offers`
- `button.description_read_toggle`
- `button.news_read_toggle`
- `button.local_world_upload`
- `button.menu_start_local_world`
- `button.convert_legacy_world`
- `button.menu_local_world_item_edit`
- `button.menu_legacy_world_item_delete`
- `button.import_beta_retail_local_world`
- `button.import_beta_retail_legacy_world`
- `button.menu_network_add_friend`
- `button.menu_network_join_by_code`
- `button.menu_quick_play`
- `button.new_world_upload`
- `button.menu_local_world_create`
- `button.create_on_realms_button`
- `button.archived_world_upload`
- `button.menu_import_level`
- `button.menu_sync_legacy_worlds`
- `button.realms_warning_more_info`
- `button.menu_realm_world_trial`
- `button.menu_realm_nintendo_first_realm_purchase_button`
- `button.no_local_worlds_launch_help`
- `button.menu_network_join_by_code_popup_join`
- `button.join_server_anyway`
- `button.cancel_join_server`

### その他

- `button.try_menu_exit`
- `button.close_dialog`
- `button.menu_play`
- `$play_button_target` (**ハードコード**)
- `button.menu_store`
- `button.menu_achievements`
- `button.menu_settings`
- `button.signin`
- `button.menu_skins`
- `button.to_profile_screen`
- `button.menu_courses`
- `button.menu_tutorial`
- `button.featured_world`
- `button.switch_accounts`
- `button.launch_editions`
- `button.edu_feedback`
- `button.edu_resources`
- `button.menu_buy_game`
- `button.menu_invite_notification`
- `button.search`
- `button.hotbar_inventory_button`
- `button.select_offer`
- `button.action_button`
- `button.create_realm`
- `button.switch_accounts`
- `button.hotbar_select`
- `button.hotbar_ok`
- `button.slot_pressed`
- `button.hotbar_inventory_left`
- `button.hotbar_inventory_right`
- `button.hide_gui_all`
- `button.hide_tooltips_hud`
- `button.hide_paperdoll_hud`
- `button.slot_1`
- `button.slot_2`
- `button.slot_3`
- `button.slot_4`
- `button.slot_5`
- `button.slot_6`
- `button.slot_7`
- `button.slot_8`
- `button.slot_9`
- `button.slot_0`
- `button.chat`
- `button.menu_continue`
- `user_confirm_dialog.escape`
- `user_confirm_dialog.left_button`
- `user_confirm_dialog.middle_button`
- `user_confirm_dialog.rightcancel_button`
- `button.view_skin`
- `button.delete_action`
- `button.exit_student`
- `button.play_video`
- `button.menu_store_error`
- `button.left_panel_tab_increment`
- `button.left_panel_tab_decrement`
- `button.right_panel_tab_increment`
- `button.right_panel_tab_decrement`
- `button.layout_increment`
- `button.layout_decrement`
- `button.is_hovered`
- `button.container_take_all_place_all`
- `button.container_take_half_place_one`
- `button.container_auto_place`
- `button.coalesce_stack`
- `button.shape_drawing`
- `button.destroy_selection`
- `button.clear_selected_recipe`
- `button.clear_hotbar_or_remove_one`
- `button.clear_hotbar_or_drop`
- `button.container_reset_held`
- `button.container_auto_place`
- `button.container_slot_hovered`
- `button.button_hovered`
- `button.shift_pane_focus`
- `button.focus_left`
- `button.focus_right`
- `button.filter_toggle_hovered`
- `button.drop_one`
- `button.cursor_drop_one`
- `button.drop_all`
- `button.cursor_drop_all`
- `button.search_bar_clear`
- `button.search_bar_selected`
- `button.search_bar_deselected`
- `button.menu_leave_screen`
- `button.turn_doll`
- `button.select_skin`
- `button.skin_hovered`
- `button.skin_unhovered`
- `button.leave`
- `button.leave_on_device`
- `button.text_edit_box_selected`
- `button.text_edit_box_deselected`
- `button.text_edit_box_hovered`
- `button.text_edit_box_clear`
- `button.help`
- `button.menu_open_uri`
- `button.no_interaction`
- `button.copy_to_clipboard`
-   ...

## ハードコードされたコレクション名

それらはすべて特定の画面内でのみ行われます。

### 画面固有:

#### 本 (`ui/book_screen.json`)

- `book_pages`
- `pick_collection`

#### バンドル購入に関する警告 (`ui/bundle_purchase_warning_screen.json`)

- `owned_list`
- `unowned_list`

#### チャット (`ui/chat_screen.json`)

- `auto_complete`
- `font_colors`
- `host_main_collection`
- `players_collection`
- `host_teleport_collection`
- `host_time_collection`
- `host_weather_collection`

#### レルムの選択 (`ui/choose_realm_screen.json`)

- `realms_collection`

#### コイン購入 (`ui/coin_purchase_screen.json`)

- `coin_purchase_grid`

#### コメント (`ui/comment_screen.json`)

- `comment_collection`

#### コンテンツ ログ履歴 (`ui/content_log_history_screen.json`)

- `content_log_message`

#### ワールド アップセルの作成 (`ui/create_world_upsell_screen.json`)

- `world_list`
- `realm_list`

#### カスタム テンプレート (`ui/custom_templates_screen.json`)

- `templates_collection`

#### フィード (`ui/feed_screen.json`)

- `feed_collection`

#### HUD (`ui/hud_screen.json`)

- `boss_bars`
- `chat_text_grid`
- `hotbar_items`
- `scoreboard_players`
- `scoreboard_scores`
- `left_helper_collection`
- `right_helper_collection`

#### 招待 (`ui/invite_screen.json`)

- `online_platform_friends`
- `online_linked_account_friends`
- `online_xbox_live_friends`
- `offline_platform_friends`
- `offline_linked_account_friends`
- `offline_xbox_live_friends`

#### フィードの管理 (`ui/manage_feed_screen.json`)

- `manage_feed_collection`

#### マニフェストの検証 (`manifest_validation_screen.json`)

- `pack_errors`

#### モブエフェクト (`ui/mob_effects_screen.json`)

- `mob_effects_collection`

#### ゲームメニュー (`ui/pause_screen.json`)

- `players_collection`

#### PDP (`ui/pdp_screen.json`)

- `factory_collection`
- `ratings_star_collection`

#### 権限 (`ui/permissions_screen.json`)

- `pause_screen.json` - `pause_screen.json` でも使用されます
- `permissions_collection`

#### ペルソナ (`ui/persona_screen.json`)

- `color_collection`
- `skin_pack_in_grid_item`
- `persona_featured_skin_pack_collection`
- `body_size_collection`
- `arm_size_collection`
- `category_featured_collection`
- `main_featured_collection`
- `profile_featured_collection`
- `custom_section_collection`
- `featured_collection`
- `foobar_collection`
- `emote_collection`

#### プレイ (`ui/play_screen.json`)

- `friends_network_worlds`
- `cross_platform_friends_network_worlds`
- `lan_network_worlds`
- `personal_realms`
- `friends_realms`
- `servers_network_worlds`
- `third_party_server_network_worlds`
- `server_screenshot_collection`
- `server_games_collection`
- `local_worlds`
- `legacy_worlds`
- `beta_retail_local_worlds`
- `personal_realms`
- `loading_personal_realms`
- `friends_realms`
- `loading_friends_realms`

#### ポートフォリオ (`ui/portfolio_screen.json`)

- `photos`

#### 進捗状況 (`ui/progress_screen.json`)

- `required_resourcepacks`
- `optional_resourcepacks`

#### レルム保留中の招待 (`ui/realms_pending_invitations_screen.json`)

- `pending_invites_collection`

#### レルム設定 (`ui/realms_settings_screen.json`)

- `additional_realms_subscriptions_collection`
- `realms_branch_collection`
- `realms_backup_collection`
- `members_collection`
- `invited_friends_collection`
- `uninvited_friends_collection`
- `blocked_players_collection`

#### スクリーンショット ピッカー (`ui/screenshot_picker_screen.json`)

- `screenshotpicker_collection`

#### サーバー フォーム (`ui/server_form.json`)

- `custom_form`
- `form_buttons`
- `custom_dropdown`

#### 設定 (`ui/settings_screen.json`)

- `keyboard_standard_collection`
- `keyboard_full_collection`
- `gamepad_collection`
- `languages`
- `realms_plus_subscriptions_collection`
- `additional_realms_subscriptions_collection`
- `#selected_pack_items_global`
- `#available_pack_items_global`
- `#realms_pack_items_global`
- `#unowned_pack_items_global`
- `#invalid_pack_items_global`
- `#selected_pack_items_level`
- `#available_pack_items_level`
- `#realms_pack_items_level`
- `#unowned_pack_items_level`
- `#invalid_pack_items_level`
- `#selected_pack_items_addon`
- `#available_pack_items_addon`
- `#realms_pack_items_addon`
- `#unowned_pack_items_addon`
- `#invalid_pack_items_addon`
- `experimental_toggles`
- `world_panel`
- `world_template_panel`
- `resource_panel`
- `behavior_panel`
- `skin_panel`
- `cache_panel`
- `dependent_packs_panel`
- `dependency_panel`

#### 構造ブロック (`ui/structure_editor_screen.json`)

- `save_size_grid`
- `save_offset_grid`
- `load_offset_grid`
- `export_size_grid`
- `export_offset_grid`

#### シードピッカー (`ui/ugc_viewer_screen.json`)

- `ugc_items`

#### ワールド テンプレート (`ui/world_templates_screen.json`)

- `world_templates`
- `realms_plus_templates`
- `custom_world_templates`
- `#suggested_offers_collection`

#### アンビル (`ui/anvil_screen.json`)

- `anvil_input_items`
- `anvil_material_items`
- `anvil_result_items`

#### ビーコン (`ui/beacon_screen.json`)

- `beacon_payment_items`
- `speed`
- `haste`
- `resist`
- `jump`
- `strength`
- `regen`
- `extra`
- `confirm`
- `cancel`

#### 醸造スタンド (`ui/brewing_stand_screen.json`)

- `brewing_fuel_item`
- `brewing_input_item`
- `brewing_result_items`

#### 地図作成テーブル (`ui/cartography_screen.json`)

- `cartography_input_items`
- `cartography_additional_items`
- `cartography_result_items`

#### エンチャントテーブル (`ui/enchanting_table_screen.json`)

- `enchanting_input_items`
- `enchanting_lapis_items`
- `#enchant_buttons`

#### 炉 (`ui/furnace_screen.json`)

- `furnace_ingredient_items`
- `furnace_fuel_items`
- `furnace_output_items`

#### グリッドストーン (`ui/grindstone_screen.json`)

- `grindstone_input_items`
- `grindstone_additional_items`
- `grindstone_result_items`

#### 馬 (`ui/horse_screen.json`)

- `horse_equip_items`

#### 在庫 (`ui/inventory_screen_pocket.json` および `ui/inventory_screen_pocket.json`)

- `armor_items`
- `offhand_items`
- `crafting_input_items`
- `crafting_output_items`
- `recipe_book`

#### 織機 (`ui/loom_screen.json`)

- `loom_input_items`
- `loom_dye_items`
- `loom_material_items`
- `loom_result_items`
- `patterns`

#### 鍛冶テーブル (`ui/smithing_table_screen.json`)

- `smithing_table_input_items`
- `smithing_table_material_items`
- `smithing_table_result_items`

#### ストーンカッター (`ui/stonecutter_screen.json`)

- `stonecutter_input_items`
- `stonecutter_result_items`
- `stones`

#### 村人貿易 2 (`ui/trade_2_screen.json`)

- `trade2_ingredient1_item`
- `trade2_ingredient2_item`
- `trade2_result_item`
- `trade_item_1`
- `trade_item_2`
- `sell_item`
- `trades`
- `trade_tiers`

## ハードコードされたバインディング名

それらの中には、特定の画面でのみ動作するものもあります。

### 画面固有:

#### アカウント転送エラー (`ui/account_transfer_error_screen.json`)

- `#error_title_text`
- `#error_number_label`
- `#error_number`
- `#correlation_id_label`
- `#correlation_id`

#### 外部サーバーの追加 (`ui/add_external_server_screen.json`)

- `#play_button_enabled`
- `#play_button_disabled`
- `#save_button_enabled`
- `#save_button_disabled`

#### アドホック進行中 (`ui/adhoc_in_progress_screen.json`)

- `#adhoc_title`

#### 認証 (`ui/authentication_screen.json`)

- `#sign_in_visible`
- `#sign_in_ios_visible`
- `#sign_in_button_visible`
- `#sign_in_ios_buttons_visible`
- `#authentication_message`
- `#confirm_button_enabled`
- `#edu_store_visible`
- `#edu_store_purchase_info`
- `#asking_to_buy_visible`
- `#confirming_purchase_visible`
- `#demo_choice_visible`
- `#eula_visible`
- `#popup_text`
- `#popup_message_student_text`
- `#popup_message_student_visible`
- `#generic_popup_link_visible`
- `#trial_purchase_link_visible`
- `#show_popup_dismiss_button`

#### 本 (`ui/book_screen.json`)

- `#screenshot_path`
- `#is_photo_page`
- `#is_text_page`
- `#pick_grid_dimensions`
- `#page_number`
- `#title_text_box_item_name`
- `#author_editable`
- `#author_text_box_item_name`
- `#editable`
- `#viewing`
- `#signing`
- `#picking`
- `#exporting`
- `#page_visible`
- `#pick_item_visible`
- `#close_button_visible`
- `#edit_controls_active`
- `#finalize_button_enabled`

#### ろう付け (`ui/braze_screen.json`)

- `#image_texture`

#### バンドル購入に関する警告 (`ui/bundle_purchase_warning_screen.json`)

- `#banner_visible`
- `#offer_title`
- `#keyart_path`
- `#keyart_texture_file_system`

#### チャット (`ui/chat_screen.json`)

- `#keyboard_being_use`
- `#keyboard_button_focus_override_up`
- `#keyboard_button_focus_override_down`
- `#keyboard_button_visible`
- `#send_button_visible`
- `#send_button_accessibility_text`
- `#chat_visible`
- `#message_text_box_content`
- `#text_edit_box_focus_override_up`
- `#text_edit_box_focus_override_down`
- `#auto_complete_item`
- `#auto_complete_text`
- `#get_grid_size`
- `#chat_title_text`
- `#chat_typeface_visible`

#### レルムの選択 (`ui/choose_realm_screen.json`)

- `#realms_grid_dimension`
- `#world_button_focus_identifier`
- `#ten_player_button_visible`
- `#two_player_button_visible`
- `#realms_world_player_count`
- `#realms_game_online`
- `#realms_game_unavailable`
- `#realms_game_offline`

#### コイン購入 (`ui/coin_purchase_screen.json`)

- `#bonus_coins`
- `#coins_without_bonus`
- `#coin_offer_texture_name`
- `#coin_offer_texture_file_system`
- `#bonus_coins_visible`
- `#price_text`
- `#coins_required_for_purchase`
- `#show_missing_coins`
- `#coin_offer_size`
- `#has_coin_offers`
- `#coin_loading_visible`

#### コマンド ブロック (`ui/command_block_screen.json`)

- `#maximized_input_visible`
- `#block_type_icon_texture`
- `#close_button_visible_binding_name`
- `#command_impulse_mode`
- `#command_chain_mode`
- `#command_repeat_mode`
- `#block_type_dropdown_toggle_label`
- `#block_type_dropdown_label_color_binding`
- `#block_type_dropdown_enabled`
- `#command_conditional_mode`
- `#command_unconditional_mode`
- `#condition_dropdown_toggle_label`
- `#condition_dropdown_enabled`
- `#command_always_on_mode`
- `#command_needs_redstone_mode`
- `#redstone_dropdown_enabled`
- `#command_hover_note`
- `#execute_on_first_tick_enabled`
- `#command_tick_delay`
- `#command_text_edit`
- `#command_output_text`
- `#previous_block_type_text`
- `#previous_block_type_text_color`
- `#previous_condition_mode_text`
- `#previous_redstone_mode_text`
- `#minimize_button_visible_binding_name`

#### コメント (`ui/comment_screen.json`)

- `#report_to_club_button_visible_feeditem`
- `#report_to_enforcement_button_visible_feeditem`
- `#delete_button_visible_feeditem`
- `#report_to_club_button_visible_comment`
- `#report_to_enforcement_button_visible_comment`
- `#delete_button_visible_comment`
- `#comment_buttons_visible`
- `#feed_comment_page_collection_length`
- `#comment_content`
- `#is_author_linked_account`
- `#content`
- `#text_visible`
- `#likes_and_comments`
- `#screenshot_texture`
- `#screenshot_texture_source`
- `#textpost_content`
- `#textpost_visible`
- `#comment_text_box`
- `#comment_platform_tag`
- `#comment_gamertag`
- `#likes_and_time_since_comment_post`
- `#author_gamertag`
- `#time_since_feed_post`
- `#author_platform_tag`
- `#author_gamertag`

#### MSA リンク解除の確認 (`ui/confirm_msa_unlink_screen.json`)

- `#unlink_warning_text`
- `#unlink_consequences_acknowledged`
- `#confirm_0`
- `#confirm_0_enabled`
- `#confirm_1`
- `#confirm_1_enabled`
- `#confirm_2`
- `#confirm_2_enabled`
- `#confirm_3`
- `#confirm_3_enabled`

#### コンテンツ ログ履歴 (`ui/content_log_history_screen.json`)

- `#content_log_text`
- `#messages_size`

#### ワールド アップセルの作成 (`ui/create_world_upsell.json`)

- `#realm_button_text`
- `#realm_trial_available`

#### アンビル (`ui/anvil_screen.json`)

- `#cost_text`
- `#cost_text_green`
- `#cost_text_red`

#### ビーコン (`ui/beacon_screen.json`)

- `#supports_netherite`
- `#extra_image_selection`

#### 醸造スタンド (`ui/brewing_stand_screen.json`)

- `#empty_bottle_image_visible`
- `#empty_fuel_image_visible`
- `#brewing_bubbles_ratio`
- `#brewing_fuel_ratio`
- `#brewing_arrow_ratio`

#### 地図作成テーブル (`ui/cartography_screen.json`)

- `#is_none_mode`
- `#is_clone_mode`
- `#is_rename_mode`
- `#is_basic_map_mode`
- `#is_locator_map_mode`
- `#is_extend_mode`
- `#is_locked_mode`
- `#output_description`

#### エンチャントテーブル (`ui/enchanting_table_screen.json`)

- `#selectable_dust_is_visible`
- `#unselectable_dust_is_visible`
- `#runes`
- `#cost`
- `#unselectable_button_visibility`
- `#selectable_button_visibility`
- `#show_selected_button_highlight`
- `#active_enchant`
- `#inactive_enchant`
- `#input_item_id`
- `#output_item_id`
- `#enchant_hint`
- `#player_level_color`
- `#player_level_info`
- `#enchant_error`

#### 炉 (`ui/furnace_screen.json`)

- `#furnace_arrow_ratio`
- `#furnace_flame_ratio`
- `#output_name`

#### 馬 (`ui/horse_screen.json`)

- `#entity_id`
- `#equip_grid_dimensions`
- `#inv_grid_dimensions`
- `#sadle_slot_centered`
- `#has_saddle_slot`
- `#has_armor_slot`
- `#has_only_armor_slot`
- `#has_only_carpet_slot`
- `#has_armor_and_saddle_slot`
- `#has_carpet_and_saddle_slot`
- `#is_chested`
- `#renderer_tab_toggle`
- `#chest_tab_toggle`

#### 織機 (`ui/loom_screen.json`)

- `#pattern_cell_background_texture`
- `#container_cell_background_texture`
- `#empty_image_visible`
- `#banner_patterns`
- `#banner_colors`
- `#pattern_selector_total_items`
- `#result_patterns`
- `#result_colors`
- `#is_right_tab_loom`
- `#is_left_tab_patterns`

#### ストーンカッター (`ui/stonecutter_screen.json`)

- `#stone_cell_background_texture`
- `#container_cell_background_texture`
- `#item_stack_count`
- `#stone_selector_total_items`
- `#has_input_item`
- `#is_right_tab_stonecutter`
- `#is_left_tab_stones`

#### 死 (`ui/death_screen.json`)

- `#death_reason_text`
- `#respawn_visible`
- `#quit_enabled`
- `#quit_visible`
- `#buttons_and_deathmessage_visible`

#### 村人取引2 (`ui/trade2_screen.json`)

- `#name_label`
- `#trade_cell_background_texture`
- `#trade_item_count`
- `#single_slash_visible`
- `#double_slash_visible`
- `#second_trade_item_count`
- `#trade_price_different`
- `#trade_cross_out_visible`
- `#padding_around_sell_item`
- `#trade_possible`
- `#trade_toggle_state`
- `#trade_toggle_enabled`
- `#trade_tier_total`
- `#tier_name`
- `#is_tier_unlocked`
- `#is_left_tab_trade`
- `#show_level`
- `#tier_visible`
- `#trade_selector_total`
- `#has_second_buy_item`
- `#exp_bar_visible`
- `#exp_progress`
- `#exp_possible_progress`
- `#trade_details_button_1_visible`
- `#trade_details_button_2_visible`
- `#enchantment_details_button_visible`
- `#item_valid`

### 値は、表示されている画面によって異なります。

- `#title_text`
- `#body_text`
- `#hover_text`
- `#cross_out_icon`
- `#is_left_tab_inventory`
- `#selected_hover_text`

### その他:

- `#tts_dialog_body`
- `#button_enabled`
- `#using_touch`
- `#close_button_visible`

## 設定

### スライダー

| Name | Slider Name | Value Binding Name | TTS Value (`tts_value_changed`) | Slider Text | Enabled Binding Name |
| ------------------------- | ------------------------------- | -------------------------------- | ------------------------------- | --------------------------------------------- | ---------------------------------------- |
| Brightness | `gamma` | `#gamma` | `#gamma_text_value` | `#gamma_slider_label` | `#gamma_enabled` |
| Brightness (VR) | `vr_gamma` | `#vr_gamma` | `#vr_gamma_text_value` | `#vr_gamma_slider_label` | `#vr_gamma_enabled` |
| HUD Opacity | `interface_opacity` | `#interface_opacity` | `#interface_opacity_text_value` | `#interface_opacity_slider_label` | `#interface_opacity_enabled` |
| HUD Opacity (Splitscreen) | `splitscreen_interface_opacity` | `#splitscreen_interface_opacity` | `#interface_opacity_text_value` | `#splitscreen_interface_opacity_slider_label` | `#splitscreen_interface_opacity_enabled` |
| Field of View | `field_of_view` | `#field_of_view` | `#field_of_view_text_value` | `#field_of_view_slider_label` | `#field_of_view_enabled` |

### トグル

| Name | Toggle Name | State Binding Name | Enabled Binding Name |
| --------------------------------------- | ------------------------------------- | -------------------------------------- | ---------------------------------------------- |
| Invert Y Axis (Mouse) | `keyboard_mouse_invert_y_axis` | `#keyboard_mouse_invert_y_axis` | `#keyboard_mouse_invert_y_axis_enabled` |
| Auto Jump (Mouse) | `keyboard_mouse_autojump` | `#keyboard_mouse_autojump` | `#keyboard_mouse_autojump_enabled` |
| Show Full Keyboard Options | `keyboard_show_full_keyboard_options` | `#keyboard_show_full_keyboard_options` | `#keyboard_show_full_keyboard_options_enabled` |
| Hide Keyboard Tooltips | `hide_keyboard_tooltips` | `#hide_keyboard_tooltips` | `#hide_keyboard_tooltips_enabled` |
| Content File Log | `content_log_file` | `#content_log_file` | `#content_log_file_enabled` |
| Content Gui Log | `content_log_gui` | `#content_log_gui` | `#content_log_gui_enabled` |
| Use SSO | `ad_use_single_sign_on` | `#ad_use_single_sign_on` |  |
| Auto Update OFF | `#auto_update_mode_off` | `#auto_update_mode_off` |  |
| Auto Update ON with Cellular | `#auto_update_mode_on_with_cellular` | `#auto_update_mode_on_with_cellular` |  |
| Auto Update on WiFi Only | `#auto_update_mode_on_wifi_only` | `#auto_update_mode_on_wifi_only` |  |
| Auto Update Enabled | `auto_update_enabled` | `#auto_update_enabled` |  |
| Cross Platform Enabled | `crossplatform_toggle` | `#crossplatform_toggle` | `#crossplatform_toggle_enabled` |
| Allow Cellular Data | `allow_cellular_data` | `#allow_cellular_data` | `#allow_cellular_data_enabled` |
| Websocket Encryption | `websocket_encryption` | `#websocket_encryption` | `#websocket_encryption_enabled` |
| Only Trusted Skins Allowed | `only_trusted_skins_allowed` | `#only_trusted_skins_allowed` | `#only_trusted_skins_allowed_enabled` |
| Storage Location External | `#storage_location_radio_external` | `#storage_location_radio_external` | `#file_storage_location_enabled` |
| Storage Location App | `#storage_location_radio_package` | `#storage_location_radio_package` | `#file_storage_location_enabled` |
| First Person Perspective | `#thirdperson_radio_first` | `#thirdperson_radio_first` | `#third_person_dropdown_enabled` |
| Third Person Back Perspective | `#thirdperson_radio_third_back` | `#thirdperson_radio_third_back` | `#third_person_dropdown_enabled` |
| Third Person Front Perspective | `#thirdperson_radio_third_front` | `#thirdperson_radio_third_front` | `#third_person_dropdown_enabled` |
| Fullscreen | `full_screen` | `#full_screen` | `#full_screen_enabled` |
| Hide Hand | `hide_hand` | `#hide_hand` | `#hide_hand_enabled` |
| Hide Hand (VR) | `vr_hide_hand` | `#vr_hide_hand` | `#vr_hide_hand_enabled` |
| Hide Paperdoll | `hide_paperdoll` | `#hide_paperdoll` | `#hide_paperdoll_enabled` |
| Hide HUD | `hide_hud` | `#hide_hud` | `#hide_hud_enabled` |
| Hide HUD (VR) | `vr_hide_hud` | `#vr_hide_hud` | `#vr_hide_hud_enabled` |
| Screen Animations | `screen_animations` | `#screen_animations` | `#screen_animations_enabled` |
| Split Screen Horizontally | `#split_screen_radio_horizontal` | `#split_screen_radio_horizontal` | `#split_screen_dropdown_enabled` |
| Split Screen Vertically | `#split_screen_radio_vertical` | `#split_screen_radio_vertical` | `#split_screen_dropdown_enabled` |
| Show Auto Save Icon | `show_auto_save_icon` | `#show_auto_save_icon` | `#show_auto_save_icon_enabled` |
| Outline Selection | `classic_box_selection` | `#classic_box_selection` | `#classic_box_selection_enabled` |
| Outline Selection (VR) | `vr_classic_box_selection` | `#vr_classic_box_selection` | `#vr_classic_box_selection_enabled` |
| Show Players Names Ingame | `ingame_player_names` | `#ingame_player_names` | `#ingame_player_names_enabled` |
| Show Players Names Ingame (Splitscreen) | `splitscreen_ingame_player_names` | `#splitscreen_ingame_player_names` | `#splitscreen_ingame_player_names_enabled` |
| View Bobbing | `view_bobbing` | `#view_bobbing` | `#view_bobbing_enabled` |
| Camera Shake | `camera_shake` | `#camera_shake` | `#camera_shake_enabled` |
| Fancy Leaves | `transparent_leaves` | `#transparent_leaves` | `#transparent_leaves_enabled` |
| Fancy Leaves (VR) | `vr_transparent_leaves` | `#vr_transparent_leaves` | `#vr_transparent_leaves_enabled` |
| Fancy Bubbles | `bubble_particles` | `#bubble_particles` | `#bubble_particles_enabled` |
| Render Clouds | `render_clouds` | `#render_clouds` | `#render_clouds_enabled` |
| Fancy Clouds | `fancy_skies` | `#fancy_skies` | `#fancy_skies_enabled` |
| Smooth Lighting | `smooth_lighting` | `#smooth_lighting` | `#smooth_lighting_enabled` |
| Smooth Lighting (VR) | `graphics_toggle` | `#graphics_toggle` | `#graphics_toggle_enabled` |
| Graphics | `graphics_toggle` | `#graphics_toggle` | `#graphics_toggle_enabled` |
| Field of View | `field_of_view_toggle` | `#field_of_view_toggle` | `#field_of_view_toggle_enabled` |
| Classic UI Profile | `#ui_profile_radio_classic` | `#ui_profile_radio_classic` | `#ui_profile_dropdown_enabled` |
| Pocket UI Profile | `#ui_profile_radio_pocket` | `#ui_profile_radio_pocket` | `#ui_profile_dropdown_enabled` |
| Texel Anti-Aliasing | `texel_aa` | `#texel_aa` | `#texel_aa_enabled` |
| 3D Rendering (VR) | `vr_3d_rendering` | `#vr_3d_rendering` | `#vr_3d_rendering_enabled` |
| Mirror Texture (VR) | `vr_mirror_texture` | `#vr_mirror_texture` | `#vr_mirror_texture_enabled` |
| Hand Pointer Visible (VR) | `vr_hand_pointer` | `#vr_hand_pointer` | `#vr_hand_pointer_enabled` |
| Hands Visible (VR) | `vr_hands_visible` | `#vr_hands_visible` | `#vr_hands_visible_enabled` |
| Enable Auto TTS | `enable_auto_text_to_speech` | `#enable_auto_text_to_speech` | `#enable_auto_text_to_speech_enabled` |
| Enable UI TTS | `enable_ui_text_to_speech` | `#enable_ui_text_to_speech` | `#enable_ui_text_to_speech_enabled` |
| Enable Chat TTS | `enable_chat_text_to_speech` | `#enable_chat_text_to_speech` | `#enable_chat_text_to_speech_enabled` |
| Enable Open Chat Message | `enable_open_chat_message` | `#enable_open_chat_message` | `#enable_open_chat_message_enabled` |
| Camera Shake | `camera_shake` | `#camera_shake` | `#camera_shake_enabled` |
| Languages (Collection) | `languages` | `#language_initial_selected` |  |

## アイテム ID 補助 (`#item_id_aux`)

| Name | ID | Aux Values |
| ----------------- | :--: | :--------: |
| diamond | 306 | 20054016 |
| emerald | 519 | 34013184 |
| gold_ingot | 308 | 20185088 |
| iron_ingot | 307 | 20119552 |
| netherite_ingot | 616 | 40370176 |
| banner | 574 | 37617664 |
| saddle | 373 | 24444928 |
| cartography_table | -200 | -13107200 |
| chest | 54 | 3538944 |
| crafting_table | 58 | 3801088 |
| loom | -204 | -13369344 |
| stonecutter_block | -197 | -12910592 |

#### ブロック項目の補助値の計算方法:

補助 = ID \* 65536

ID = 補助 / 65536
65536 = 補助/ID

すべてのアイテム ID [here](https://learn.microsoft.com/minecraft/creator/reference/content/vanillalistingsreference/items) を取得します。
