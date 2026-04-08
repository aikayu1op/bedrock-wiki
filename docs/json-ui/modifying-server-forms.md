---
title: サーバーフォームの変更
category: Tutorials
tags:
    - intermediate
mentions:
    - TheoristMC
description: このチュートリアルでは、サーバーフォームを効率よく変更する方法を学びます。
---

## はじめに

:::warning
このページは、JSON-UI の基礎を理解している人向けです。まだ確認していなければ、[JSON UI Documentation](/json-ui/json-ui-documentation) を参照してください。
:::

サーバーフォームを編集するときは、互いに互換性があることを確認するのが重要です。このチュートリアルでは、その方法を説明します。

このチュートリアルでは、`ui/server_form.json` の中で実装します。

### アクションフォーム

まず、独自に作成したフォームを追加するために `main_screen_content` の controls を変更します。

<CodeHeader>RP/ui/server_form.json</CodeHeader>
```json
{
  "main_screen_content": {
    "modifications": [
      {
        "array_name": "controls",
        "operation": "insert_back",
        "value": [
          {
              "wiki_server_form_factory": { // 名前は何でもよいですが、"server_form_factory" と同じにはできません
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // 必須です。この名前は long_form に渡されるデータに紐づきます
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel"
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

これを複数回行うこともできますが、`"long_form"` 内でカスタムフォームをまとめた main panel を参照できるので、1 回だけにしておくのが推奨です。

<CodeHeader>RP/ui/server_form.json</CodeHeader>
```json
{
  "main_screen_content": {
    "modifications": [
      {
        "array_name": "controls",
        "operation": "insert_back",
        "value": [
          {
            "wiki_server_form_factory": { // 名前は任意ですが、"server_form_factory" と同じにはできません
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // 必須。この名前は long_form に渡されるデータに紐づきます
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel"
                }
              }
            }
          },
          {
            "wiki_server_form_factory_2": { // 名前は任意ですが、"server_form_factory" と同じにはできません or same as the sibling element
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // 必須。この名前は long_form に渡されるデータに紐づきます
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel_2"
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

次に、すべてのカスタムフォームを含む `"our_long_form_panel"` 要素を定義します。

<CodeHeader>RP/ui/server_form.json</CodeHeader>
```json
{
  "our_long_form_panel": {
    "type": "panel", // 任意の型を使えますが、ここでは分かりやすく panel を使います
    "bindings": [
      {
        "binding_name": "#title_text" // タイトルテキストを親側で定義しておくと、使うたびに呼び出さずに済みます
      }
    ],
    "controls": [
      // ここにフォームを参照できますが、ここでは例としてリンゴの画像を使います
      {
        "our_custom_made_long_form": {
          "type": "image",
          "texture": "textures/items/apple",
          "size": [
            32,
            32
          ],
          "$title_needs_to_contain": "wiki_form:", // このリンゴを表示するために、アクションフォームのタイトルに含まれている必要がある文字列
          "bindings": [
            {
              "binding_type": "view",
              "source_control_name": "our_long_form_panel", // #title_text バインディングを取得できる親の名前
              "source_property_name": "(not ((#title_text - $title_needs_to_contain) = #title_text))",
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },
  "main_screen_content": {
    "modifications": [
      {
        "array_name": "controls",
        "operation": "insert_back",
        "value": [
          {
            "wiki_server_form_factory": { // 名前は任意ですが、"server_form_factory" と同じにはできません
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // 必須。この名前は long_form に渡されるデータに紐づきます
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel"
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

これを試すと、通常のアクションフォームと重なってしまうことがあります。これを直すには、通常のロングフォーム側にもバインディングを定義する必要があります。

<CodeHeader>RP/ui/server_form.json</CodeHeader>  
```json
{
  "long_form": {
    "modifications": [
      {
        "array_name": "bindings",
        "operation": "insert_back",
        "value": [
          {
            "binding_name": "#title_text"
          },
          {
            "binding_type": "view",
            "source_property_name": "((#title_text - 'wiki_form:') = #title_text)", // $title_needs_to_contain で追加したタイトル条件をここでも定義します
            // ちなみに、フォームタイトルはこのように複数指定できます -> (#title_text - 'form_1' - 'form_2' - 'form_3')
            "target_property_name": "#visible"
          }
        ]
      }
    ]
  },
  "our_long_form_panel": {
    "type": "panel", // 型は任意ですが、ここでは分かりやすさのため panel を使います
    "bindings": [
      {
        "binding_name": "#title_text" // タイトルテキストを親側で定義しておくと、使うたびに呼び出さずに済みます
      }
    ],
    "controls": [
      // ここにフォームを参照できますが、ここでは例としてリンゴの画像を使います
      {
        "our_custom_made_long_form": {
          "type": "image",
          "texture": "textures/items/apple",
          "size": [
            32,
            32
          ],
          "$title_needs_to_contain": "wiki_form:", // このリンゴを表示するために、アクションフォームのタイトルに含まれている必要がある文字列
          "bindings": [
            {
              "binding_type": "view",
              "source_control_name": "our_long_form_panel", // #title_text バインディングを取得できる親の名前
              "source_property_name": "(not ((#title_text - $title_needs_to_contain) = #title_text))",
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },
  "main_screen_content": {
    "modifications": [
      {
        "array_name": "controls",
        "operation": "insert_back",
        "value": [
          {
            "wiki_server_form_factory": { // 名前は任意ですが、"server_form_factory" と同じにはできません
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // 必須。この名前は long_form に渡されるデータに紐づきます
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel"
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

これで、通常のロングフォームと重ならずにリンゴの画像が表示されるようになります。

### モーダルフォーム

モーダルフォームの編集はロングフォームの編集と同じですが、いくつかの部分を変更する必要があります。`server_form.json` 内ではモーダルフォームはカスタムフォームと呼ばれます。

まず、独自に作成したフォームを追加するために `main_screen_content` の controls を変更します。

<CodeHeader>RP/ui/server_form.json</CodeHeader>
```json
{
  "main_screen_content": {
    "modifications": [
      {
        "array_name": "controls",
        "operation": "insert_back",
        "value": [
          {
            "wiki_server_form_factory": { // 名前は任意ですが、"server_form_factory" と同じにはできません
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // 必須。この名前は long_form と custom_form に渡されるデータに紐づきます
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel",
                  "custom_form": "@server_form.our_custom_form_panel"
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

これを複数回行うこともできますが、`"custom_form"` 内でカスタムフォームをまとめた main panel を参照できるので、1 回だけにしておくのが推奨です。

<CodeHeader>RP/ui/server_form.json</CodeHeader>
```json
{
  "main_screen_content": {
    "modifications": [
      {
        "array_name": "controls",
        "operation": "insert_back",
        "value": [
          {
            "wiki_server_form_factory": { // 名前は任意ですが、"server_form_factory" と同じにはできません
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // 必須。この名前は long_form と custom_form に渡されるデータに紐づきます
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel",
                  "custom_form": "@server_form.our_custom_form_panel"
                }
              }
            }
          },
          {
            "wiki_server_form_factory_2": { // 名前は任意ですが、"server_form_factory" と同じにはできません or same as the sibling element
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // 必須。この名前は long_form と custom_form に渡されるデータに紐づきます
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel_2",
                  "custom_form": "@server_form.our_custom_form_panel_2"
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

次に、すべてのカスタムフォームを含む `"our_custom_form_panel"` 要素を定義します。

<CodeHeader>RP/ui/server_form.json</CodeHeader>
```json
{
  "our_custom_form_panel": {
    "type": "panel", // 型は任意ですが、ここでは分かりやすさのため panel を使います
    "bindings": [
      {
        "binding_name": "#title_text" // タイトルテキストを親側で定義しておくと、使うたびに呼び出さずに済みます
      }
    ],
    "controls": [
      // ここでフォームを参照できますが、ここでは例としてリンゴの画像を使います
      {
        "our_custom_made_custom_form": {
          "type": "image",
          "texture": "textures/items/apple",
          "size": [
            32,
            32
          ],
          "$title_needs_to_contain": "wiki_form:", // このリンゴを表示するために、モーダルフォームのタイトルに含まれている必要がある文字列
          "bindings": [
            {
              "binding_type": "view",
              "source_control_name": "our_custom_form_panel", // #title_text バインディングを取得できる親の名前
              "source_property_name": "(not ((#title_text - $title_needs_to_contain) = #title_text))",
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },
  "main_screen_content": {
    "modifications": [
      {
        "array_name": "controls",
        "operation": "insert_back",
        "value": [
          {
            "wiki_server_form_factory": { // 名前は任意ですが、"server_form_factory" と同じにはできません
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // 必須。この名前は long_form と custom_form に渡されるデータに紐づきます
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel",
                  "custom_form": "@server_form.our_custom_form_panel"
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

これを試すと、通常のモーダルフォームと重なってしまうことがあります。これを直すには、通常のカスタムフォーム側にもバインディングを定義する必要があります。

<CodeHeader>RP/ui/server_form.json</CodeHeader>  
```json
{
  "custom_form": {
    "modifications": [
      {
        "array_name": "bindings",
        "operation": "insert_back",
        "value": [
          {
            "binding_name": "#title_text"
          },
          {
            "binding_type": "view",
            "source_property_name": "((#title_text - 'wiki_form:') = #title_text)", // $title_needs_to_contain で追加したタイトル条件をここでも定義します
            // ちなみに、フォームタイトルはこのように複数指定できます -> (#title_text - 'form_1' - 'form_2' - 'form_3')
            "target_property_name": "#visible"
          }
        ]
      }
    ]
  },
  "our_custom_form_panel": {
    "type": "panel", // 型は任意ですが、ここでは分かりやすさのため panel を使います
    "bindings": [
      {
        "binding_name": "#title_text" // タイトルテキストを親側で定義しておくと、使うたびに呼び出さずに済みます
      }
    ],
    "controls": [
      // ここでフォームを参照できますが、ここでは例としてリンゴの画像を使います
      {
        "our_custom_made_custom_form": {
          "type": "image",
          "texture": "textures/items/apple",
          "size": [
            32,
            32
          ],
          "$title_needs_to_contain": "wiki_form:", // このリンゴを表示するために、モーダルフォームのタイトルに含まれている必要がある文字列
          "bindings": [
            {
              "binding_type": "view",
              "source_control_name": "our_custom_form_panel", // #title_text バインディングを取得できる親の名前
              "source_property_name": "(not ((#title_text - $title_needs_to_contain) = #title_text))",
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },
  "main_screen_content": {
    "modifications": [
      {
        "array_name": "controls",
        "operation": "insert_back",
        "value": [
          {
            "wiki_server_form_factory": { // 名前は任意ですが、"server_form_factory" と同じにはできません
              "type": "panel",
              "factory": {
                "name": "server_form_factory", // 必須。この名前は long_form と custom_form に渡されるデータに紐づきます
                "control_ids": {
                  "long_form": "@server_form.our_long_form_panel",
                  "custom_form": "@server_form.our_custom_form_panel"
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

これで、通常のカスタムフォームと重ならずにリンゴの画像が表示されるようになります。
