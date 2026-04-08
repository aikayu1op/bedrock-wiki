---
title: ベストプラクティス
category: General
nav_order: 2
tags:
    - guide
mentions:
    - LukasPAH
    - SmokeyStack
    - TheItsNameless
    - ThomasOrs
description: JSON UI の扱い方に関するベストな方法です。
---

:::tip Info
この記事の内容は、JSON-UI システムにある程度慣れていることを前提としています。JSON-UI が初めてなら、[JSON-UI Intro](/json-ui/json-ui-intro) と [JSON-UI Documentation](/json-ui/json-ui-documentation) を読んで基礎を確認してください。
:::

## 互換性を最大化し、UI の破損を最小限にする

JSON-UI は他のアドオンシステムとは異なり、**バージョン管理されていません**。UI に加えた変更は、Mojang が JSON-UI システムを更新・修正するたびに壊れる可能性があります。幸い、Mojang がバニラ UI を変更しても、壊れにくくするためにできることがいくつかあります。

### 必要な部分だけを変更する

UI が壊れるリスクを最小化する最も効果的な方法は、必要な変更だけを行うことです。たとえば、XP バーの影だけを無効化したいなら、パックの `hud_screen.json` に次のような内容を追加しようと考えるかもしれません。

```json
{
    "progress_text_label": {
        "type": "label",
        "shadow": false,
        "text": "#level_number",
        "color": "$experience_text_color",
        "anchor_from": "top_middle",
        "anchor_to": "bottom_middle",
        "bindings": [
            {
                "binding_name": "#level_number",
                "binding_type": "global"
            },
            {
                "binding_name": "#level_number_visible",
                "binding_type": "global",
                "binding_name_override": "#visible"
            }
        ]
    }
}
```

これは技術的には正しいですが、いくつかの理由で壊れやすくなります。Mojang がバインディング名を変更したらどうなるでしょうか。アンカーを変えたらどうでしょうか。要素にオフセットを追加したらどうでしょうか。あなたの変更はバニラ UI と戦略的にマージされるため、余分な詳細を含めるのは冗長で、カスタム UI が壊れる原因になりやすいです。これを避けるには、要素に `shadow` プロパティだけを含めれば十分です。

```json
{
    "progress_text_label": {
        "shadow": false
    }
}
```

こうすると将来的に壊れにくくなるだけでなく、見た目もすっきりし、ファイルサイズも大幅に減ります。

必要な部分だけを変更することで、UI 内の潜在的な故障箇所を減らせます。これは、バニラ UI が更新されたときにカスタム UI が壊れるのを防ぐうえで非常に有効です。最後に、**バニラ UI ファイルの中身を変更ごと丸ごとパックに入れているなら、それは JSON-UI のやり方として間違っています**。

### 変更戦略を活用する

[wiki に記載されている変更戦略](/json-ui/json-ui-intro#modifications) を使うのも、Mojang が UI を更新したときの破損リスクを減らす良い方法です。たとえば、多くのアドオン制作者は、ゲームプレイ関連情報を表示するために HUD に要素を追加します。よくある手法は、`custom_ui@namespace.custom_ui` のようなカスタム UI を `hud_screen.json` のルートパネルにマージすることです。

```json
{
    "root_panel": {
        "type": "panel",
        "$xp_control_offset|default": [ 0, -13 ],
        "variables": [
            {
                "requires": "$education_edition",
                "$left_helpers": "hud.left_helpers_edu"
            },
            {
                "requires": "(not $education_edition)",
                "$left_helpers": "hud.left_helpers"
            }
        ],
        "controls": [
            {
                "custom_ui@namespace.custom_ui": {} // <--- ここにカスタム UI を追加しがちです！
            },
            { "left_helpers@$left_helpers": {} },
            { "right_helpers@hud.right_helpers": {} },
            { "emote_helpers@hud.emote_helpers": {} },
            { "centered_gui_elements@centered_gui_elements": {} },
            { "centered_gui_elements_at_bottom_middle@centered_gui_elements_at_bottom_middle": {} }
            ... // 残りの control はここから続きます。
        ]
    }
}
```

カスタム control をバニラのルートパネルに直接マージすると、将来 UI が壊れる確率が大きく上がります。たとえば、将来 Mojang がルートパネルの control 名を変更した場合、UI が存在しない要素や大きく変わった要素を参照してしまい、エラーやクラッシュの原因になり得ます。

これを避けるには、[変更戦略](/json-ui/json-ui-intro#modifications) を使ってください。

```json
{
    "root_panel": {
        "modifications": [
            {
                "array_name": "controls",
                "operation": "insert_front",
                "value": [
                    {
                        "custom_ui@namespace.custom_ui": {}
                    }
                ]
            }
        ]
    }
}
```

`modifications` 配列を使った変更は、バニラ UI や他のパックと戦略的にマージされ、ルートパネルの兄弟 control を変えずに済みます。これにより、他のリソースパックとの互換性が上がり、UI が壊れる可能性が下がります。

### ネストされたツリー内の control を直接変更しない

もう 1 つよくある失敗要因は、深くネストされた control を変更することです。以下は、ネストされた control を持つ UI 要素の例です。

```json
{
    "label": {
        "type": "label",
        "text": "hello world",
        "color": [1, 1, 1]
    },

    "bg_image": {
        "type": "image",
        "texture": "textures/ui/Black",
        "alpha": 0.7
    },

    "panel_with_label_and_bg": {
        "type": "panel",
        "size": ["100%c", "100%c"],
        "controls": [
            {
                "bg_image@bg_image": {
                    "size": ["100%c + 2px", "100%c + 2px"],
                    "controls": [
                        {
                            "label@label": {
                                "layer": 5
                            }
                        }
                    ]
                }
            }
        ]
    }
}
```

この UI をうまく変更するには、可能な限りネストツリーを避けるべきです。たとえば、label の色を白からグレーにし、背景画像を透明にしたいなら、ツリー内ではなく要素定義側の color と opacity を変更します (必要なものだけを変更することを忘れずに)。

```json
{
    "label": {
        "color": [0.5, 0.5, 0.5]
    },

    "bg_image": {
        "alpha": 0
    }
}
```

ただし、ツリーの変更を避けられないこともあります。その場合は、ネストされたツリー内の特定の control を狙う次の構文を使います。たとえば、bg image のサイズと label の layer を変更するなら、次のようにします。

```json
{
    "panel_with_label_and_bg/bg_image": {
        "size": ["100%c", "100%c"]
    },

    "panel_with_label_and_bg/bg_image/label": {
        "layer": -5
    }
}
```

`/` は指定した要素の子 control を対象にします。ただし、指定した子 control 名が存在しない場合はリソースパックエラーになります。UI 自体は通常どおり動作しますが、そのため、できる限りネストツリーの control を直接狙わない方が望ましいです。

### エントリポイントは 1 つにする

特定の画面にカスタム UI を追加するには、どこかでバニラ UI とマージする必要があります。これをエントリポイントと呼びます。UI が壊れにくくなるよう、可能であればカスタム UI は 1 か所のエントリポイントでバニラ UI とマージするのがベストプラクティスです。以下は、`hud_screen.json` で 2 つのエントリポイントを使っている例です。

```json
{
    "root_panel": {
        "modifications": [
            {
                "array_name": "controls",
                "operation": "insert_front",
                "value": [
                    {
                        "custom_ui_control_1@namespace_1.custom_ui_control_1": {}
                    }
                ]
            }
        ]
    },

    "hud_content": {
        "modifications": [
            {
                "array_name": "controls",
                "operation": "insert_front",
                "value": [
                    {
                        "custom_ui_control_2@namespace_2.custom_ui_control_2": {}
                    }
                ]
            }
        ]
    }
}
```

次のようにすれば、エントリポイントを 1 つに減らし、`custom_ui_control_1` と `custom_ui_control_2` を `hud_content` か `root_panel` のどちらかにまとめられます。

```json
{
    "root_panel": {
        "modifications": [
            {
                "array_name": "controls",
                "operation": "insert_front",
                "value": [
                    {
                        "custom_ui_control_1@namespace_1.custom_ui_control_1": {}
                    },
                    {
                        "custom_ui_control_2@namespace_1.custom_ui_control_2": {}
                    }
                ]
            }
        ]
    }
}
```

エントリポイントを 1 つにすると、UI が壊れる可能性を下げられます。たとえば Mojang が `hud_content` の control 名を更新した場合、一部のカスタム UI が壊れるかもしれません。エントリポイントが 1 つなら、デバッグもその 1 か所だけを考えればよいので楽になります。

### バニラの namespace を使わない

UI の大部分を変更したり、大量のカスタム UI を追加したりする場合は、可能な限りバニラの namespace ファイル内で作業するのを避けるべきです。そのためには、[UI Definition File](/json-ui/json-ui-intro#ui-defs) に独自の [namespace](/json-ui/json-ui-intro#namespaces) を持つカスタム UI ファイルを追加します。UI をエントリポイントにマージするときは、control 定義内で `element@namespace.element` 構文を使えば、別 namespace の要素を参照できます。カスタム namespace を使うことで、バニラの control 名との衝突が起きにくくなり、問題の発生を抑えられます。さらに、他の多くのアドオンシステムと同様、namespace は `wiki:namespace` のような prefix もサポートし、`element@wiki:namespace.element` として参照できます。prefix はバニラの namespace との衝突回避にも役立ちます。

## パフォーマンスを最大化する

FPS の観点では、JSON-UI はエンティティに次いで 2 番目に負荷の高いアドオン部分です。インベントリを開くと FPS が半分になることがある理由を考えたことはあるでしょうか。短く言えば、JSON-UI は非常に最適化不足だからで、FPS 低下につながります。カスタム UI を大量に追加すると、**大きなオーバーヘッド** が生じ、ゲーム内フレームレートの低下、画面の読み込み時間増加、全体的なユーザー体験の悪化につながる可能性があります。

### UI 内の演算子を減らす

[Operators](/json-ui/json-ui-intro#using-operators) は、条件の評価、計算、文字列の変更に使われます。これらは [conditional rendering](/json-ui/json-ui-intro#conditional-rendering) のような技法に便利ですが、使うと**かなりのオーバーヘッド**が発生します。たとえば、`"$var": "(2 * (-1 * $number))"` という変数があるなら、`"$var": "(-2 * $number)"` と簡潔にした方がずっと高速です。式はできるだけ単純化し、不要な式は削除して、評価時間をできる限り短くするのが最善です。

### UI 内のバインディングを減らす

演算子と同様に、多くの [bindings](/json-ui/json-ui-intro#bindings) を使うことも**大きなオーバーヘッド**になります。設定画面の表示に時間がかかる理由の 1 つは、すべてのトグルやオプションが多数の特定バインディングに結びついているためです。機能に寄与しないバインディングや、単純化できるバインディングを減らすことも、パフォーマンス向上に非常に有効です。

### 不要な control を追加しない

JSON-UI でパフォーマンスを上げる最善策の 1 つは、使っていない、または不要な control を削除することです。この例では、子 control の `panel` は空の panel なので不要です。

```json
{
    "element": {
        "type": "image",
        "texture": "textures/ui/Black",
        "controls": [
            {
                "panel": {
                    "type": "panel"
                }
            },
            {
                "label": {
                    "type": "label",
                    "text": "hello world"
                }
            }
        ]
    }
}
```

これを直すには、UI ツリーから削除するか、`panel` control に `"ignored": true` を追加します。`"ignored": true` を使うのは削除と同じです。control とその子 control は UI で評価されなくなるため、最初から存在しないのと同じ性能になります。**`"visible": false` では同じ効果はなく、control は引き続き評価されます。**

```json
{
    "element": {
        "type": "image",
        "texture": "textures/ui/Black",
        "controls": [
            {
                "label": {
                    "type": "label",
                    "text": "hello world"
                }
            }
        ]
    }
}
```

```json
{
    "element": {
        "type": "image",
        "texture": "textures/ui/Black",
        "controls": [
            {
                "panel": {
                    "type": "panel",
                    "ignored": true
                }
            },
            {
                "label": {
                    "type": "label",
                    "text": "hello world"
                }
            }
        ]
    }
}
```

場合によっては、複数の control を 1 つの要素にまとめて単純化できます。たとえば、`#hud_title_text_string` が 1 から 5 の特定の数値のときに特定の画像を表示したいなら、個別に評価される 5 個の control を追加しようと考えるかもしれません。

```json
{
    "image_template": {
        "type": "image",
        "texture": "$texture",
        "bindings": [
            {
                "binding_name": "#hud_title_text_string"
            },
            {
                "binding_type": "view",
                "source_property_name": "(#hud_title_text_string = $binding_text)",
                "target_property_name": "#visible"
            }
        ]
    },

    "image_1@image_template": {
        "$texture": "textures/wiki/ui/example_1",
        "$binding_text": "1"
    },

    "image_2@image_template": {
        "$texture": "textures/wiki/ui/example_2",
        "$binding_text": "2"
    },

    "image_3@image_template": {
        "$texture": "textures/wiki/ui/example_3",
        "$binding_text": "3"
    },

    "image_4@image_template": {
        "$texture": "textures/wiki/ui/example_4",
        "$binding_text": "4"
    },

    "image_5@image_template": {
        "$texture": "textures/wiki/ui/example_5",
        "$binding_text": "5"
    }
}
```

もう少し工夫すれば、これは 1 つの control に大幅に簡略化でき、演算子・バインディング・control の数を全体的に減らせます。

```json
{
    "image": {
        "type": "image",
        "texture": "#texture",
        "bindings": [
            {
                "binding_name": "#hud_title_text_string"
            },
            {
                "binding_type": "view",
                "source_property_name": "(((#hud_title_text_string * 1) > 0) and ((#hud_title_text_string * 1) < 6))",
                "target_property_name": "#visible"
            },
            {
                "binding_type": "view",
                "source_property_name": "('textures/wiki/ui/example_' + #hud_title_text_string)",
                "target_property_name": "#texture"
            }
        ]
    }
}
```

総じて、UI のパフォーマンスを改善するには、何をしたいのかを正確に把握し、できるだけこれらの一般的な指針に沿って調整することが重要です。1 つの control を最適化しないままでも、目立った違いは出ないかもしれません。しかし、最適化されていない control を大量に放置すると、もともと最適化不足な UI システムの上でさらにパフォーマンスが悪化し始めます。
