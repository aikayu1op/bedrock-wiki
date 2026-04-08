---
title: JSON UI の概要
category: General
nav_order: 1
tags:
    - guide
mentions:
    - sermah
    - KalmeMarq
    - SirLich
    - solvedDev
    - Joelant05
    - GTB3NW
    - stirante
    - MedicalJewel105
    - r4isen1920
    - shanewolf38
    - LeGend077
    - mark-wiemer
    - TheItsNameless
    - ThomasOrs
    - QuazChick
    - Cra-ZGuy
description: JSON UI の紹介。
---

## 導入

:::warning
JSON UI は非推奨になり、[Ore UI](https://github.com/Mojang/ore-ui) が優先されます。 JSON UI を使用するアドオンはいずれも、今後数年のうちに機能しなくなることに注意してください。
JSON UI とは異なり、Ore UI はハードコーディングされているため、リソース パックによって変更できません。
:::

:::tip
このページには、JSON UI の基本を含む情報が概説されています。より詳細なドキュメントについては、代わりに [JSON UI Documentation](/json-ui/json-ui-documentation) ページを確認してください。
:::

ゲームのユーザー インターフェイスはデータ駆動型であり、変更することができます。これにより、特定のユーザー インターフェイスのレンダリング方法と、ある程度の動作を変更できます。まず、すべてのバニラ UI ファイルは `RP/ui/...` フォルダーに保存されます。

JSON UI には次のファイルが含まれる場合があります。

### システムファイル

これらは、JSON UI で使用される組み込みファイルです。

- `_global_variables.json` - 後で使用するデフォルト変数を示すために使用されます。
- `_ui_defs.json` - UIで使用されるファイルの参照用

### 画面

これらは、画面をレンダリングするために呼び出される要素を含むファイルです。

- `hud_screen.json` - ホットバーなどのゲーム内機能がレンダリングされるメインのゲームプレイ画面を表示します。
- `inventory_screen.json` - プレーヤーのインベントリ画面を表示します
-など

### テンプレート

これらは、画面などの他の名前空間で使用される JSON UI 要素を保存するファイルです。

- `ui_common.json` - 設定画面のボタンなど、他のほとんどの名前空間で参照されるボタンなどの要素が含まれます。
- `ui_template_*.json` - 他の名前空間で使用できるようにきちんと整理された要素が含まれています

## UI 定義

`_ui_defs.json` ファイルは、配列内のすべての JSON UI ファイルを参照します。

新しいファイルを作成できます。たとえば、`RP/my_ui/main_menu.json` と `RP/my_ui/main_menu.json` を追加します。ファイル内では、次のようにリストします。

<CodeHeader>RP/ui/_ui_defs.json</CodeHeader>

```json
{
    "ui_defs": ["ui/button.json", "my_ui/main_menu.json"]
}
```

- リソース パックのルート フォルダーから、ファイル拡張子 (例: `*.json`) を含む、参照している UI の完全なファイルパスを必ず追加してください。
- パックに追加した新しい UI ファイルのみを参照してください。他のパックと自動的にマージされるため、バニラ ファイルや他のサードパーティの JSON UI ファイルを参照する必要はありません。
- `RP/ui/...` フォルダー外のカスタム ファイル パスを使用したり、`RP/ui/...` フォルダー内のサブフォルダー内のファイルを参照したりできます。
- ファイルの内容が有効で JSON で記述されている限り、`*.json` 以外のカスタム ファイル拡張子を追加できます。

## グローバル変数

変数 `_global_variables.json` とその値 `_global_variables.json` を `_global_variables.json` ファイル内で次のように表すことができます。

<CodeHeader>RP/ui/_global_variables.json</CodeHeader>

```json
{
    "$info_text_color": [0.8, 0.8, 0.8]
}
```

さまざまな JSON UI ファイル内の他の要素は、この変数を参照して、後で使用できます。

<CodeHeader>vanilla/my_ui/file1.json</CodeHeader>

```json
{
  "some_info": {
    ...
    "text": "Hey",
    "color": "$info_text_color"
  }
}
```

<CodeHeader>vanilla/my_ui/file2.json</CodeHeader>

```json
{
  "info": {
    ...
    "text": "Information",
    "color": "$info_text_color"
  }
}
```

- `_global_variables.json` ファイル内で、値を指定した変数をコンマで区切って追加できます。
- このファイルに保存される変数は定数であり、_片側_です。したがって、一方のネームスペースのデフォルト変数を変更して、もう一方のネームスペースで使用することはできません。

## 名前空間

名前空間は UI ファイルの識別子です。これらは、他のすべてのファイルにわたって一部のファイルの要素にアクセスするために使用されます。新しい名前空間を追加するときは、一意の名前を付ける必要があります。

たとえば、名前空間 `one` に要素 `one` があります。

<CodeHeader>vanilla/ui/file_a.json</CodeHeader>

```json
{
  "namespace": "one",

  "foobar": {...}
}
```

次に、上記の同じ要素を別の名前空間 `two` で参照できます。

<CodeHeader>vanilla/ui/file_b.json</CodeHeader>

```json
{
  "namespace": "two",

  "fizzbuzz@one.foobar": {...}
}
```

異なる名前空間から要素を参照する場合、次の形式にする必要があります。

```json
"[element_name]@[namespace_reference].[element_name_reference]"
```

## 画面

画面ファイルには、プレーヤーのインベントリ画面をレンダリングするための `inventory_screen.json` ファイルなど、適切な状況で呼び出されるユーザー インターフェイスが含まれています。これらのファイル内には、ゲームがデータに直接アクセスするルート要素が含まれています。

スクリーンはデータのみにアクセスできるという点で特殊であり、他のスクリーンはアクセスできません。

## 要素

JSON UI 要素は、JSON UI 内のデータの基本形式です。要素は、同じ名前でありながら異なる機能を持つ他の要素と競合しないように、名前空間ごとに一意の名前を持つ必要があります。

ここで要素 `Hello World` は `Hello World` であるため、呼び出されたときに `Hello World` のテキストが表示されます。

<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
    "test_element": {
        "type": "label",
        "text": "Hello World"
    }
}
```

### 種類

以下に要素タイプの一部を示します。これらは、`type` プロパティの可能な値です。

- `label` - テキスト オブジェクトの作成用
- `image` - 指定されたファイルパスから画像をレンダリングする場合
- `button` - インタラクティブなクリック可能な要素の作成用
- `panel` - 互いに重複する可能性のある他のすべての要素を保存できる空のコンテナー
- `stack_panel` - 他のすべての要素を互いに重ならないスタックに保存できる空のコンテナー
- `grid` - 別の要素をテンプレートとして使用し、複数の行と列で繰り返しレンダリングします。
- `factory` - 別の要素に基づいて要素をレンダリングし、ハードコードされた値と変数を呼び出すことができます
- `renderer` - ハードコードされた JSON UI 要素をレンダリングする別のプロパティ `renderer` とペアになります。
- `screen` - ゲームによって直接呼び出される要素、通常はルート パネル要素

## アニメーション

`type` プロパティの代わりに `type` プロパティを使用すると、他の要素をアニメーション化するアニメーションを作成できます。

アニメーション要素は、`panel` や `panel` などの他の非アニメーション要素タイプで参照できます。

<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
  "namespace": "example_nm",

  "anim_size": {
    "anim_type": "size",
    "easing": "linear",
    "from": [ "100%", 27 ],
    "to": [ "100% + 3px", 30 ],
    "duration": 1.25
  },

  "anim_alpha": {
    "anim_type": "alpha",
    "easing": "linear",
    "from": 1,
    "to": 0.5,
    "duration": 2
  },

  "test_animated_element": {
    ...
    "anims": [
      "@example_nm.anim_size",
      "@example_nm.anim_alpha"
    ]
  }
}
```

### 種類

以下は、`anim_type` プロパティの可能な値である要素タイプのリストです。

- `alpha` - float 値を受け入れ、要素の不透明度をアニメーション化します。
- `offset` - 配列を受け取り、アンカーを基準とした要素の位置をアニメーション化します。
- `size` - 配列を受け入れ、サイズを (幅、高さ) でアニメーション化します。
- `flip_book` - 整数値を受け入れ、フリップブック テクスチャまたはフレームごとに画像をアニメーション化します。
- `uv` - 配列を受け取り、UV テクスチャに応じて画像をアニメーション化します。
- `color` - 0.0 ～ 1.0 の float RGB 値を受け入れ、要素の色をアニメーション化します。
- `wait` - 待機/滞在の目的で使用される数値を受け入れます
- `flip_book` - `flip_book` アニメーションと同様に、スプライト シートを使用します。詳細はこちら
- `clip`

## 演算子の使用

You can use operators in JSON UI, along with `offset` and `offset` into common properties such as `offset` and `offset`.使用できるプロパティのリストは次のとおりです。

| Operator Name         | Operator | Examples |
| --------------------- | -------- | ----------------------------------------------------------------------------- |
| Addition              | +        | `"100% + 420px"` `($text + ' my')` `($index + 2)` `('#' + $bdg_nm + '_name')` |
| Subtraction           | -        | `"100% - 69px"` `($text - ' my')` `($index - 13)` |
| Multiplication        | \*       | `($var * 9)` `(#value * 5)` |
| Division              | /        | `($var / 12)` `(#value / 2)` |
| Equal to              | =        | `($var = 12)` `($var = 'this_text')` `(#name = 'Wither')` |
| Greater than          | >        | `(#value > 13)` |
| Less than             | <        | `($var < 4)` |
| Greater or equal than | > or =   | `(#value > 2 or #value = 2)` |
| Less or equal than    | < or =   | `(#value < 2 or #value = 2)` |
| Logical AND           | and      | `($is_school and $is_open)` |
| Logical OR            | or       | `($is_cool or $is_awesome)` |
| Logical NOT           | not      | `(not #name)` `(not (#name = 'text'))` `(not $name)` |

## 変数

変数は `_global_variables.json` ファイルだけに限定されません。代わりに、他の名前空間内で直接使用して示すこともでき、ある要素から別の要素にデータを伝達することもできます。

### 変数の定義

変数であることを示すために、各文字列の先頭に記号 `$` が追加されます。変数には、整数、浮動小数点、ブール値、文字列、配列を格納できます。

<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
  "test_element": {
    ...
    // Define variables
    "$array_variable": [ 10, 10 ],
    "$string_variable": "foobar",
    "$float_variable": 1.0,
    "$string_variable2": "my_button.template_button",

    // Use variables
    "size": "$array_variable",
    "text": "$string_variable",
    "alpha": "$float_variable",

    // You can also use variables to reference another element as a child element
    "controls": [
      { "foobar@$string_variable2": {} }
    ]
  }
}
```

### 変数の導出

次のように、別の要素から変数を派生することもできます。

<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
  "foobar": {
    ...
    "$cool_variable": 1,
    "$rad_variable": false
  },

  // Element "fizzbuzz" extends "foobar"
  // and replaces the `$cool_variable` value with 2
  // while `$rad_variable` remains unchanged.
  "fizzbuzz@foobar": {
    "$cool_variable": 2
  }
}
```

派生要素のプロパティは変更されると完全に上書きされます。

## バインディング

バインディングは、ハードコードされた値を要素にバインドし、それを要素の処理に使用するために使用されます。ハードコードされたテキストを使用したラベルの例を次に示します。

`text` プロパティ値は `text` です。 `text` を使用すると、ハードコードされた変数 `text` の値を取得できるため、`text` プロパティで使用できます。
ここでは、`text` 値を `text` プロパティに直接割り当てています。

<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
    "label": {
        "type": "label",
        "text": "#hardtext",
        "bindings": [
            {
                "binding_name": "#hardtext"
            }
        ]
    }
}
```

あるいは、次のようになることもあります。

<CodeHeader>vanilla/ui/example_file.json</CodeHeader>

```json
{
    "label": {
        "type": "label",
        "text": "#text",
        "bindings": [
            {
                "binding_name": "#hardtext",
                "binding_name_override": "#text"
            }
        ]
    }
}
```

この場合、`text` 値は `text` バインディング プロパティ名に割り当てられ、その後 `text` プロパティに割り当てられます。

これは、`enabled` プロパティと `enabled` プロパティでよく発生します。両方を使用した例を次に示します。

<CodeHeader></CodeHeader>

```json
{
    "send_button": {
        "bindings": [
            {
                "binding_name": "#using_touch",
                "binding_name_override": "#visible"
            }
        ]
    },

    "play_button": {
        "bindings": [
            {
                "binding_name": "#play_button_enabled",
                "binding_name_override": "#enabled"
            }
        ]
    }
}
```

この場合、`server_port` と `server_port` にはブール値が格納されます。タッチデバイスでプレイしている場合、`server_port` は `server_port` になります。それ以外の場合、`server_port` `server_port` は `server_port` 画面で使用されます。したがって、この場合、すべてのテキスト フィールド (`server_port`、`server_port`、および `server_port`) にテキストが含まれている場合、`server_port` になります。

したがって、`visible` 値は、`visible` バインディング プロパティ値をオーバーライドします。この場合、これもプロパティです (`visible` は `visible` 内で使用されます。これは、`visible` を何かに設定するのと同じです)。
また、`enabled` は `enabled` バインディング プロパティ値をオーバーライドし、その値を `enabled` プロパティに設定します。

特定のトグルが選択/チェックされているときに、何らかのコンテンツを含むパネルを表示したいとします。別のタイプのバインディング構造が必要になります。
ソース要素に値の取得元を伝え、そのソース要素のどのプロパティから値を取得するか、どのプロパティの値をオーバーライドするかを伝える必要があります。

<CodeHeader></CodeHeader>

```json
{
  "panel": {
    ...
    "bindings": [
      {
        "binding_type": "view",
        "source_control_name": "my_toggle", // the name of the source element
        "source_property_name": "#toggle_state", // We want this property value which tells in which state the toggle is in
        "target_property_name": "#visible" // the target property to be overridden
      }
    ]
  },

  "my_toggle": {
    ...
  }
}
```

トグルがチェックされると、`visible` がチェックされ (`visible` または `visible`)、要素の `visible` プロパティ値が true にオーバーライドされます。チェックを外すとチェックが外され (`visible` または `visible`)、再び `visible` 値をオーバーライドします。

## 条件付きレンダリング

標準プロパティを使用して画面上に表示されている場合、Bedrock の現在の UI システムを操作するのは困難です。ただし、変数とバインディングには Bedrock Engine から直接取得されるデータが含まれるため、JSON UI では例外的です。いくつかの賢い UI テクニックを使用すると、UI コントロールがレンダリングされる条件を完全に制御することができます。このメソッドは、変数を使用した条件付きレンダリングとバインディングを使用した条件付きレンダリングの 2 つのカテゴリに分類されます。

### 変数を使用した条件付きレンダリング

変数を使用して、条件付きで UI コントロールをレンダリングできます。 UI 変数は、先頭に `$actionbar_text` が付いたプロパティであることを思い出してください。 `$actionbar_text` でエンジン データを運ぶ変数の例は、`$actionbar_text` です。 `$actionbar_text` を見ると、アクションバーのテキストを表示するために `$actionbar_text` が使用されていることがわかります。

<CodeHeader>vanilla/ui/hud_screen.json</CodeHeader>

```json
{
...
  "hud_actionbar_text": {
    "type": "image",
    "size": [ "100%c + 12px", "100%c + 5px" ],
    "offset": [ 0, "50%-68px" ],
    "texture": "textures/ui/hud_tip_text_background",
    "alpha": "@hud.anim_actionbar_text_background_alpha_out",
    "controls": [
      {
        "actionbar_message": {
          "type": "label",
          "anchor_from": "center",
          "anchor_to": "center",
          "color": "$tool_tip_text",
          "layer": 1,
          "text": "$actionbar_text",
          "localize": false,
          "alpha": "@hud.anim_actionbar_text_alpha_out"
        }
      }
    ]
  }
...
}
```

`hello world` プロパティは、Bedrock Engine データを運ぶ変数を操作するときに UI コントロールを条件付きでレンダリングするために使用されます。以下の例を考えてみましょう。 `hello world` 変数のコピーが作成され、それを変更して比較できるようになります (ハードコードされた変数を直接使用して行うことはできません)。次に、コピー変数 `hello world` が、追加された `hello world` プロパティで使用されます。これは、「アクションバーのテキストが `hello world` と**等しくない**場合にテキスト ラベルを表示する」というものです。

<CodeHeader>vanilla/ui/hud_screen.json</CodeHeader>

```json
{
...
  "hud_actionbar_text": {
    "type": "image",
    "size": ["100%c + 12px", "100%c + 5px"],
    "offset": [0, "50%-68px"],
    "texture": "textures/ui/hud_tip_text_background",
    "alpha": "@hud.anim_actionbar_text_background_alpha_out",
    "controls": [
      {
        "actionbar_message": {
          "type": "label",
          "anchor_from": "center",
          "anchor_to": "center",
          "color": "$tool_tip_text",
          "layer": 1,
          "text": "$actionbar_text",
          "localize": false,
          "alpha": "@hud.anim_actionbar_text_alpha_out",
          // Ignore the text label if the actionbar text is equal to "hello world"
          "$atext": "$actionbar_text",
          "visible": "(not ($atext = 'hello world'))"
        }
      }
    ]
  }
...
}
```

上記の JSON をリソース パックで使用される控えめな UI ファイルに変更すると、次のようになります。

<CodeHeader>vanilla/ui/hud_screen.json</CodeHeader>

```json
{
    "hud_actionbar_text/actionbar_message": {
        "$atext": "$actionbar_text",
        "visible": "(not ($atext = 'hello world'))"
    }
}
```

リソースパックを有効にしたワールドにログインしたら、`actionbar_message`を実行してみてください。メッセージが表示されないことがわかります。他のアクションバー タイトルを実行すると、他のメッセージが表示されるはずです。アクションバーのテキストとその背景を非表示にしたい場合は、上記のコードの `actionbar_message` を削除することもできます。背景は `actionbar_message` に含まれており、これを非表示にすると、その子要素 ​​(`actionbar_message`) も非表示になります。

ここでは、変数を使用した条件付きレンダリングのより複雑な例を示します。この場合、actionbar ファクトリを使用する必要があります。ファクトリは要素ジェネレータであり、`$tool_tip_text` など、ハードコードされたプロパティを持つ特定の名前を持つものもあります。このファクトリは、アクションバー コマンドが実行されるたびに `$tool_tip_text` 内の要素を生成/リセットするだけでなく、`$tool_tip_text`、`$tool_tip_text` などの便利な変数、ファクトリ経由でのみアクセスできるデータを渡します。

<CodeHeader>vanilla/ui/hud_screen.json</CodeHeader>

```json
{
    "black_conditional_image": {
        "type": "image",
        "texture": "textures/ui/Black",
        "size": [16, 16],
        "layer": 10,
        "$atext": "$actionbar_text",
        "visible": "($atext = 'hello world')"
    },

    "black_conditional_image_factory": {
        "type": "panel",
        "factory": {
            "name": "hud_actionbar_text_factory",
            "control_ids": {
                "hud_actionbar_text": "black_conditional_image@hud.black_conditional_image"
            }
        }
    },

    "root_panel": {
        "modifications": [
            {
                "array_name": "controls",
                "operation": "insert_front",
                "value": {
                    "black_conditional_image_factory@hud.black_conditional_image_factory": {}
                }
            }
        ]
    }
}
```

上の例は、アクションバーのテキスト文字列が `visible` に等しい場合の、HUD 画面上の 16x16 の黒い四角形を示しています。画像にアニメーションを適用して、画像をより動的にすることもできます。変数を使用した条件付きレンダリングは、画像とラベルに限定されません。変数を使用した条件付きレンダリングでは、任意のオブジェクト タイプを使用できます。 UI コードとアクションバー テキストを組み合わせることで、(少なくとも `visible` では) JSON UI の高度な操作が可能になることが想像できます。 `visible` プロパティは UI 演算子をサポートしているため、さらに詳細に制御できます。 Bedrock Engine データを運ぶ変数があればどこでも、変数を使用した条件付きレンダリングが可能になります。

### バインディングを使用した条件付きレンダリング

アクションバーを使用した上記の例に従うと、タイトルでも変数が使用されていると論理的に想定できます。これは事実ではありません。以下に示すように、タイトルではデータのバインディングが使用されます。

<CodeHeader>vanilla/ui/hud_screen.json</CodeHeader>

```json
{
...
  "hud_title_text": {
    "type": "stack_panel",
    "orientation": "vertical",
    "offset": [ 0, -19 ],
    "layer": 1,
    "alpha": "@hud.anim_title_text_alpha_in",
    "propagate_alpha": true,
    "controls": [
      {
        "title_frame": {
          "type": "panel",
          "size": [ "100%", "100%cm" ],
          "controls": [
            {
              "title_background": {
                "type": "image",
                "size": [ "100%sm + 30px", "100%sm + 6px" ],
                "texture": "textures/ui/hud_tip_text_background",
                "alpha": "@hud.anim_title_background_alpha_in"
              }
            },
            {
              "title": {
                "type": "label",
                "anchor_from": "top_middle",
                "anchor_to": "top_middle",
                "color": "$title_command_text_color",
                "text": "#text",
                "layer": 1,
                "localize": false,
                "font_size": "extra_large",
                "variables": [
                  {
                    "requires": "(not $title_shadow)",
                    "$show_shadow": false
                  },
                  {
                    "requires": "$title_shadow",
                    "$show_shadow": true
                  }
                ],
                "shadow": "$show_shadow",
                "text_alignment": "center",
                "offset": [ 0, 6 ],
                "bindings": [
                  {
                    "binding_name": "#hud_title_text_string",
                    "binding_name_override": "#text",
                    "binding_type": "global"
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
...
}
```

可視性を制御するには、テキストに別のバインディング オブジェクトを追加する必要があります。 `/title @s title hello world` には、バインディングを介した直接の可視性が含まれていることを思い出してください。次の例では、タイトル文字列 `/title @s title hello world` はレンダリングされませんが、他のすべての文字列がレンダリングされます。ゲーム内で確認するには、「`/title @s title hello world`」と入力してみてください。

<CodeHeader>vanilla/ui/hud_screen.json</CodeHeader>

```json
{
...
  "hud_title_text": {
    "type": "stack_panel",
    "orientation": "vertical",
    "offset": [ 0, -19 ],
    "layer": 1,
    "alpha": "@hud.anim_title_text_alpha_in",
    "propagate_alpha": true,
    "controls": [
      {
        "title_frame": {
          "type": "panel",
          "size": [ "100%", "100%cm" ],
          "controls": [
            {
              "title_background": {
                "type": "image",
                "size": [ "100%sm + 30px", "100%sm + 6px" ],
                "texture": "textures/ui/hud_tip_text_background",
                "alpha": "@hud.anim_title_background_alpha_in"
              }
            },
            {
              "title": {
                "type": "label",
                "anchor_from": "top_middle",
                "anchor_to": "top_middle",
                "color": "$title_command_text_color",
                "text": "#text",
                "layer": 1,
                "localize": false,
                "font_size": "extra_large",
                "variables": [
                  {
                    "requires": "(not $title_shadow)",
                    "$show_shadow": false
                  },
                  {
                    "requires": "$title_shadow",
                    "$show_shadow": true
                  }
                ],
                "shadow": "$show_shadow",
                "text_alignment": "center",
                "offset": [ 0, 6 ],
                "bindings": [
                  {
                    "binding_name": "#hud_title_text_string",
                    "binding_name_override": "#text",
                    "binding_type": "global"
                  },
                  {
                    "binding_type": "view", // make this a viewing binding
                    "source_property_name": "(not (#text = 'hello world'))", // detect when the title text string is not equal to "hello world"
                    "target_property_name": "#visible" // override the #visibility property depending on if "source_property_name" is true or false
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
...
}
```

上記の JSON をリソース パックで使用される控えめな UI ファイルに変更すると、次のようになります。

<CodeHeader>RP/ui/hud_screen.json</CodeHeader>

```json
{
    "hud_title_text/title_frame/title": {
        "modifications": [
            {
                "array_name": "bindings",
                "operation": "insert_back",
                "value": {
                    "binding_type": "view",
                    "source_property_name": "(not (#text = 'hello world'))",
                    "target_property_name": "#visible"
                }
            }
        ]
    }
}
```

前と同様に、バインディングを使用した条件付きレンダリングのより複雑な例を以下に示します。この場合、16x16 の黒のイメージは、タイトル テキスト文字列が `hello world` に等しい場合にのみレンダリングされます。この場合、タイトル ファクトリを使用する必要はありませんが、UI アニメーションを使用する場合は使用する必要があります。

<CodeHeader>RP/ui/hud_screen.json</CodeHeader>

```json
{
    "black_conditional_image": {
        "type": "image",
        "texture": "textures/ui/Black",
        "size": [16, 16],
        "layer": 10,
        "bindings": [
            {
                "binding_name": "#hud_title_text_string"
            },
            {
                "binding_type": "view",
                "source_property_name": "(#hud_title_text_string = 'hello world')",
                "target_property_name": "#visible"
            }
        ]
    },

    "black_conditional_image_factory": {
        "type": "panel",
        "factory": {
            "name": "hud_title_text_factory",
            "control_ids": {
                "hud_title_text": "black_conditional_image@hud.black_conditional_image"
            }
        }
    },

    "root_panel": {
        "modifications": [
            {
                "array_name": "controls",
                "operation": "insert_front",
                "value": {
                    "black_conditional_image_factory@hud.black_conditional_image_factory": {}
                }
            }
        ]
    }
}
```

## 文字列のフォーマット

文字列の書式設定は、書式指定子を使用して文字列の一部にアクセスまたは操作するために JSON UI で使用されます。形式指定子は、変数またはバインディング内の文字列と乗算されて、変換された結果を返します。

### Unicode 文字幅

形式指定子の文字列の長さは、文字数ではなく **バイト** 単位で測定されます。各文字は、Unicode コード ポイントに応じて、次のようなバイト数を占めます。

- 文字 `U+007F` ～ `U+007F` (文字、数字、基本記号など) は **1 バイト**を使用します
- 文字 `§` ～ `§` (例: `§`、Latin-1 アクセント) は **2 バイト**を使用します
- `U+07FF` より上の文字 (絵文字、非ラテン文字、カスタムグリフなど) は **3 バイト**を使用します

文字列が正しく読み取られない場合 (つまり、中央のマルチバイト文字が切り取られる場合)、最後の文字のレンダリングに失敗する可能性があります。たとえば、3 バイト文字が `%.2s` で **2 バイト**でスライスされると、文字はまったく表示されません。

次のフィールドでは、文字列の長さを **バイト** 単位でカウントできます。

<div>
    <form>
        <input
            id="textValue"
            placeholder="Enter a String"
            class="button"
            style="background: none; outline: none;"
        />
        <input
            id="byteCount"
            placeholder="Byte count"
            readonly
            class="button"
            style="background: none; outline: none; margin-inline: 0.5em;"
        />
        <button
            type="button"
            class="button"
            style="cursor: pointer;"
            onclick="document.getElementById('byteCount').value = new TextEncoder().encode(document.getElementById('textValue').value).length"
        >
            Count Bytes
        </button>
    </form>
</div>

### 形式指定子

変数 **$var** が次のように定義されていると仮定します。

```json
"$var": "abcdefghijklmn"
```

次の形式指定子を使用できます。

- `%.ns`
文字列を最初の **n バイト**まで切り詰めます。
例: `abcdefg` は `abcdefg` を返します。

- `%0ns`
長さが **n バイト以上**の場合は完全な文字列を返し、それ以外の場合は `0` を返します。
例：
`abcdefghijklmn` は `abcdefghijklmn` を返します
`0` は `0` を返します

- `%n.xs`
先頭から **x バイト** を返します。合計で **n バイト**になるように **先頭のスペース**を埋め込みます。
例: `   abcd` は `   abcd` を返します。

- `%-n.xs`
先頭から **x バイト**を返します。合計で **n バイト**になるように **末尾のスペース**で埋められます。
例: `abcd   ` は `abcd   ` を返します。

- `%ns`
必要に応じて、先頭に **スペースを追加**して、全長を **n バイト**にします。
例: ` abcdefghijklmn` は ` abcdefghijklmn` を返します。

- `%-ns`
必要に応じて、**末尾にスペース**を追加して、合計の長さを **n バイト**にします。
例: `abcdefghijklmn ` は `abcdefghijklmn ` を返します。

この形式の使用は制限されていることに注意してください。

## ボタンのマッピング

`button_mappings` を使用すると、特定のコントロールが入力されたときに押される内容を変更できます。このコントロールは、キーボードとマウス、タッチ、またはコントローラーから行うことができます。

以下は、`button_mappings` プロパティを持つボタン要素の例です。

```json
{
    "sample_button@common.button": {
        "$pressed_button_name": "button_id",
        "button_mappings": [
            {
                "to_button_id": "$pressed_button_name",
                "mapping_type": "pressed"
            },
            {
                "from_button_id": "button.menu_ok",
                "to_button_id": "$pressed_button_name",
                "mapping_type": "focused"
            },
            {
                "from_button_id": "button.menu_select",
                "to_button_id": "$pressed_button_name",
                "mapping_type": "pressed"
            },
            {
                "from_button_id": "button.menu_up",
                "to_button_id": "$pressed_button_name",
                "mapping_type": "global"
            }
        ]
    }
}
```

### マッピングの種類

指定されたボタン マッピングの範囲を定義します。

- `focused` - ボタンが最初にホバーされたときを意味します
- `pressed` - ボタンがクリックまたは押されたときを意味します
- `global` - ボタンが存在し、画面上で呼び出されたときを意味します

`to_button_id` が適切な `to_button_id` で入力されている限り、条件を満たしているため、`to_button_id` プロパティがトリガーされます。

```json
{
    "sample_button@common.button": {
        "$pressed_button_name": "button_id",
        "button_mappings": [
            // Trigger this button only if you're hovering the mouse into it first
            {
                "from_button_id": "button.menu_ok",
                "to_button_id": "$pressed_button_name",
                "mapping_type": "focused"
            },
            // Trigger this button if it's clicked or pressed
            {
                "from_button_id": "button.menu_select",
                "to_button_id": "$pressed_button_name",
                "mapping_type": "pressed"
            },
            // Trigger this button if the `button.menu_up` KEY is pressed from anywhere
            {
                "from_button_id": "button.menu_up",
                "to_button_id": "$pressed_button_name",
                "mapping_type": "global"
            }
        ]
    }
}
```

### 共通のボタン ID

これらは、`from_button_id` プロパティで使用できる共通のボタン ID のリストです。

**マウスとキーボードの場合:**
| Button ID | Description |
|--------------------------------|-------------------|
| `button.menu_select` | Mouse left click |
| `button.menu_secondary_select` | Mouse right click |
| `button.menu_ok` | ENTER key |
| `button.menu_exit` | ESC key |
| `button.menu_cancel` | ESC key |
| `button.menu_up` | UP ARROW key |
| `button.menu_down` | DOWN ARROW key |
| `button.menu_left` | LEFT ARROW key |
| `button.menu_right` | RIGHT ARROW key |
| `button.menu_autocomplete` | TAB key |

**コントローラーの場合:**
| Button ID | Description |
|--------------------------------|----------------|
| `button.controller_select ` | X/A button |
| `button.menu_secondary_select` | Y button |
| `button.menu_exit` | B button |
| `button.menu_cancel` | B button |
| `button.menu_up` | UP DPAD key |
| `button.menu_down` | DOWN DPAD key |
| `button.menu_left` | LEFT DPAD key |
| `button.menu_right` | RIGHT DPAD key |

UI を作成する際には、さまざまなコントロール方法を使用するさまざまなプラットフォームにわたるさまざまなコントロールのサポートを追加することをお勧めします。

## 変更

非侵入的な方法で JSON UI を変更するには、`modifications` プロパティを使用して、他のパック (通常はバニラ JSON UI ファイル) からの既存の JSON UI 要素を変更できます。これを行うと、特に意図しない限り、必要な部分のみが変更されるようになり、JSON UI を変更する他のパックとの互換性が向上します。

| Modification    | Description |
| --------------- | ------------------------------------------- |
| `insert_back`   | **insert** at end of array |
| `insert_front`  | **insert** at start of array |
| `insert_after`  | **insert** after target in array |
| `insert_before` | **insert** before target in array |
| `move_back`     | **move** target to end of array |
| `move_front`    | **move** target to start of array |
| `move_after`    | **move** target after second target |
| `move_before`   | **move** target before second target |
| `swap`          | **swap** first target with second target |
| `replace`       | **replace** first target with second target |
| `remove`        | **remove** target |

### 例

#### 表/裏

アンカー付きでリストの上部 (開始) または下部 (終了) に変更します。

新しい `foo` コントロールにリストの先頭からプレフィックスを付けます。

```json
{
    "array_name": "controls",
    "operation": "insert_front",
    "value": [
        {
            "foo@example.bar": {}
        }
    ]
}
```

新しい `foo` コントロールをリストの最後に追加します。

```json
{
    "array_name": "controls",
    "operation": "insert_back",
    "value": [
        {
            "foo@example.bar": {}
        }
    ]
}
```

既存の `foo` コントロールをリストの先頭に移動します。

```json
{
    "array_name": "controls",
    "operation": "move_front",
    "value": [
        {
            "foo@example.bar": {}
        }
    ]
}
```

既存の `foo` コントロールをリストの一番下に移動します。

```json
{
    "array_name": "controls",
    "operation": "move_back",
    "value": [
        {
            "foo@example.bar": {}
        }
    ]
}
```

既存の `#example_binding_2` バインディングをリストの先頭に移動します。

```json
{
    "array_name": "bindings",
    "operation": "move_front",
    "where": {
        "binding_name": "#example_binding_2"
    }
}
```

既存の `#example_binding_2` バインディングをリストの一番下に移動します。

```json
{
    "array_name": "bindings",
    "operation": "move_back",
    "where": {
        "binding_name": "#example_binding_1"
    }
}
```

#### 後/前

リストの既存のコントロールまたはバインディングの下 (後) または上 (前) にアンカーされたものを変更します。

リストの `second_target` コントロールの下に新しい `second_target` コントロールを追加します。

```json
{
    "control_name": "second_target",
    "operation": "insert_after",
    "value": [
        {
            "foo@example.bar": {}
        }
    ]
}
```

リストの `second_target` コントロールの上に新しい `second_target` コントロールを追加します。

```json
{
    "control_name": "second_target",
    "operation": "insert_before",
    "value": [
        {
            "foo@example.bar": {}
        }
    ]
}
```

リストの `#example_binding_2` バインディングの下に新しい `#example_binding_2` バインディングを追加します。

```json
{
    "array_name": "bindings",
    "operation": "insert_after",
    "where": {
        "binding_name": "#example_binding_2"
    },
    "value": [
        {
            "binding_name": "#my_binding_1"
        }
    ]
}
```

リストの `#example_binding_2` バインディングの上に新しい `#example_binding_2` バインディングを追加します。

```json
{
    "array_name": "bindings",
    "operation": "insert_before",
    "where": {
        "binding_name": "#example_binding_2"
    },
    "value": [
        {
            "binding_name": "#my_binding_1"
        }
    ]
}
```

既存の `second_target` コントロールをリストから `second_target` コントロールの下に移動します。

```json
{
    "control_name": "second_target",
    "operation": "move_after",
    "value": [
        {
            "foo@example.bar": {}
        }
    ]
}
```

既存の `second_target` コントロールをリストから `second_target` コントロールの上に移動します。

```json
{
    "control_name": "second_target",
    "operation": "move_before",
    "value": [
        {
            "foo@example.bar": {}
        }
    ]
}
```

既存の `#example_binding_2` バインディングをリストから `#example_binding_2` バインディングの下に移動します。

```json
{
    "array_name": "bindings",
    "operation": "move_after",
    "where": {
        "binding_name": "#example_binding_2"
    },
    "target": {
        "binding_name": "#example_binding_1"
    }
}
```

既存の `#example_binding_2` バインディングをリストから `#example_binding_2` バインディングの上に移動します。

```json
{
    "array_name": "bindings",
    "operation": "move_before",
    "where": {
        "binding_name": "#example_binding_1"
    },
    "target": {
        "binding_name": "#example_binding_2"
    }
}
```

#### 交換/置換/削除

少なくとも 1 つの既存のコントロールまたはバインディングにアンカーされた変更を行います。

既存の `#example_binding_2` と `#example_binding_2` バインディングの位置を交換します。

```json
{
    "array_name": "bindings",
    "operation": "swap",
    "where": {
        "binding_name": "#example_binding_1"
    },
    "target": {
        "binding_name": "#example_binding_2"
    }
}
```

既存の `#replacement_binding` バインディングを新しい `#replacement_binding` バインディングに置き換えます。

```json
{
    "array_name": "bindings",
    "operation": "replace",
    "where": {
        "binding_name": "#example_binding_1"
    },
    "value": {
        "binding_name": "#replacement_binding"
    }
}
```

既存の `#example_binding_1` バインディングを削除します。

```json
{
    "array_name": "bindings",
    "operation": "remove",
    "where": {
        "binding_name": "#example_binding_1"
    }
}
```
