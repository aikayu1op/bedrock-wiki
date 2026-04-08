---
title: ボタンとトグル
category: Tutorials
tags:
    - beginner
mentions:
    - TheoristMC
description: このチュートリアルでは、トグルの仕組みを学びます。
---

## はじめに

:::warning
このページは、JSON-UI の基礎を理解している人向けです。まだ確認していなければ、[JSON UI Documentation](/json-ui/json-ui-documentation) を参照してください。
:::

カスタムボタンやトグルの作成は、JSON-UI に関するよくある話題です。このガイドでは、それらの仕組みと作成手順を順を追って説明します。

このチュートリアルでは、簡単にするため、既存のバニラのボタンとトグルを使用します。

### トグル

この例では、`ui/ui_template_toggles.json` を参照します。

<CodeHeader>RP/ui/your_file.json</CodeHeader>
```json
{
  "our_toggle@common_toggles.light_text_toggle": {
    "size": [
      64,
      32
    ],
    "$button_text": "Click me!",
    "$toggle_name": "wiki_toggle", // 必須ですが、ハードコード済みのトグル名を使わない限り効果はありません。
    "$toggle_view_binding_name": "wiki_toggle_state" // データ取得に使うトグル名です。
  }
}
```

これで完了です。これで動作するトグルができました。任意の画面に追加してテストできます。

さらに、トグルを使って UI 要素の表示・非表示を制御できます。

<CodeHeader>RP/ui/your_file.json</CodeHeader>
```json
{
  "our_toggle@common_toggles.light_text_toggle": {
    "size": [
      64,
      32
    ],
    "$button_text": "Click me!",
    "$toggle_name": "wiki_toggle", // 必須ですが、ハードコード済みのトグル名を使わない限り効果はありません。
    "$toggle_view_binding_name": "wiki_toggle_state" // データ取得に使うトグル名です。
  },
  "our_image": {
    "type": "image",
    "texture": "textures/items/apple",
    "size": [
      16,
      16
    ],
    "offset": [
      0,
      20
    ],
    "bindings": [
      {
        "binding_type": "view",
        "source_control_name": "wiki_toggle_state", // $toggle_view_binding_name で指定したトグル名
        "source_property_name": "#toggle_state", // トグル状態を真偽値で返すバインディングデータ
        "target_property_name": "#visible"
      }
    ]
  }
}
```

### ボタン

一般に、ボタンの機能は限定的です。主に、画面への移動やダイアログの表示といったハードコードされた用途で使われます。

この例では、`ui/ui_template_buttons.json` を参照します。

<CodeHeader>RP/ui/your_file.json</CodeHeader>
```json
{
  "our_button@common_buttons.light_text_button": {
    "size": [
      64,
      32
    ],
    "$button_text": "Click me!",
    "$pressed_button_name": "button.menu_exit" // 必須。任意のグローバルボタン名またはハードコード済みボタン名を指定できます。
  }
}
```

これで完了です。これで動作するボタンができました。クリックすると、現在の画面から抜けます。任意の画面に追加してテストできます。

## 発展的なボタンとトグル

### ホバー時のテキスト

ボタンにカーソルを重ねたときにテキストを表示したい場合は、**Content Buttons** を使う必要があります。

この例では、`ui/ui_template_buttons.json` と `ui/ui_common.json` を参照します。

<CodeHeader>RP/ui/your_file.json</CodeHeader>
```json
{
  "our_button@common_buttons.light_content_button": {
    "size": [
      18,
      18
    ],
    "$button_content": "namespace.our_button_content_panel", // 作成したコンテンツ要素を参照します。
    "$pressed_button_name": "button.menu_exit" // 必須。任意のグローバルボタン名またはハードコード済みボタン名を指定できます。
  },
  "our_button_content_panel": {
    "type": "panel",
    "controls": [
      {
        "our_image": {
          "type": "image",
          "texture": "textures/items/apple",
          "size": [
            16,
            16
          ]
        }
      },
      {
        // 任意の要素を使えますが、ここではゲーム内アイテムにカーソルを合わせたときのホバーテキストを使います。
        "our_hover_text@common.hover_text": {
          "ignored": "$default_state", // 必須。ボタンがデフォルト状態、またはホバーされていない場合に非表示になります。
          "property_bag": {
            "#hover_text": "" // ここに表示テキストを入れます。ローカライズは非対応なので、必要なら独自のホバーテキストを作成してください。
          }
        }
      }
    ]
  }
}
```

### アニメーションの再生

ボタンをクリックしたときにアニメーションを再生したい場合は、アニメーションの `play_event` プロパティで `$pressed_button_name` を使う必要があります。

例:

<CodeHeader>RP/ui/your_file.json</CodeHeader>
```json
{
    "example_animation": {
        "anim_type": "offset",
        "easing": "linear",
        "duration": 2,
        "from": [
            0,
            0
        ],
        "to": [
            -50,
            0
        ],
        "play_event": "button.example_button_id"
    },
    "example_button@common_buttons.light_text_button": {
        "$pressed_button_name": "button.example_button_id", // アニメーション側の play_event プロパティでこのボタンIDを使います
        "$button_text": "Play Animation",
        "size": [
            80,
            20
        ]
    },
    "example_label": {
        "type": "label",
        "text": "Example Text",
        "anims": [
            "@namespace.example_animation" // ここにアニメーションを追加します
        ],
        "anchor_from": "top_right",
        "anchor_to": "top_right"
    }
}
```
