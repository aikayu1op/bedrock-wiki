---
title: 入力キー
description: プレイヤー設定に一致する入力キーを表示する方法を学びます。
category: Emojis & Symbols
license: true
mentions:
    - QuazChick
---

入力キーを使うと、プレイヤーの入力を自動で検出し、Windows でのスニーク時の "SHIFT" のように、各アクションに対応したボタンを表示できます。

## 入力キーの表示

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
action.hint.exit.rollercoaster=Press :_input_key.sneak: to end the ride
```

![Press B to end the ride](exit_rollercoaster_action_hint.png)

## 入力キー一覧

以下は、各入力タイプのデフォルト操作設定の結果です。
`Unassigned` を含む下のテキストはすべてそのまま表示され、プレイヤーに見えます。

存在しない入力キー (`:_input_key.fake:` など) は、常に "Unassigned" になります。

### 一般的な入力キー

| 名前               | ショートコード                   | キーボード & マウス                                     | フルキーボードプレイ   | タッチ                                            | Xbox                                                            | Nintendo Switch                                                 | PlayStation                                                     |
| ------------------ | -------------------------------- | ------------------------------------------------------- | ---------------------- | ------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| 攻撃               | `:_input_key.attack:`            | ![](/assets/images/text/emojis/mouse/left_button.png)   | Q                      | ![](/assets/images/text/emojis/touch/attack.png)  | ![](/assets/images/text/emojis/xbox/right_trigger.png)          | ![](/assets/images/text/emojis/switch/right_trigger.png)        | ![](/assets/images/text/emojis/playstation/right_trigger.png)   |
| 使用               | `:_input_key.use:`               | ![](/assets/images/text/emojis/mouse/right_button.png)  | E                      | ![](/assets/images/text/emojis/touch/place.png)   | ![](/assets/images/text/emojis/xbox/left_trigger.png)           | ![](/assets/images/text/emojis/switch/left_trigger.png)         | ![](/assets/images/text/emojis/playstation/left_trigger.png)    |
| チャット           | `:_input_key.chat:`              | T                                                       | T                      | ![](/assets/images/text/emojis/touch/chat.png)    | ![](/assets/images/text/emojis/xbox/dpad_right.png)             | ![](/assets/images/text/emojis/switch/dpad_right.png)           | ![](/assets/images/text/emojis/playstation/dpad_right.png)      |
| ドロップ           | `:_input_key.drop:`              | Q                                                       | Z                      | Unassigned                                        | ![](/assets/images/text/emojis/xbox/dpad_down.png)              | ![](/assets/images/text/emojis/switch/dpad_down.png)            | ![](/assets/images/text/emojis/playstation/dpad_down.png)       |
| エモート           | `:_input_key.emote:`             | B                                                       | B                      | ![](/assets/images/text/emojis/touch/emote.png)   | ![](/assets/images/text/emojis/xbox/dpad_left.png)              | ![](/assets/images/text/emojis/switch/dpad_left.png)            | ![](/assets/images/text/emojis/playstation/dpad_left.png)       |
| ジャンプ           | `:_input_key.jump:`              | SPACE                                                   | SPACE                  | ![](/assets/images/text/emojis/touch/jump.png)    | ![](/assets/images/text/emojis/xbox/a_button.png)               | ![](/assets/images/text/emojis/switch/a_button.png)             | ![](/assets/images/text/emojis/playstation/cross.png)           |
| スニーク           | `:_input_key.sneak:`             | SHIFT                                                   | SHIFT                  | ![](/assets/images/text/emojis/touch/sneak.png)   | ![](/assets/images/text/emojis/xbox/b_button.png)               | ![](/assets/images/text/emojis/switch/b_button.png)             | ![](/assets/images/text/emojis/playstation/circle.png)          |
| スプリント         | `:_input_key.sprint:`            | CONTROL                                                 | CONTROL                | ![](/assets/images/text/emojis/touch/sprint.png)  | ![](/assets/images/text/emojis/xbox/left_stick.png)             | ![](/assets/images/text/emojis/switch/left_stick.png)           | ![](/assets/images/text/emojis/playstation/left_stick.png)      |
| 前方               | `:_input_key.forward:`           | W                                                       | W                      | ![](/assets/images/text/emojis/touch/forward.png) | ![](/assets/images/text/emojis/controller/left_stick_up.png)    | ![](/assets/images/text/emojis/controller/left_stick_up.png)    | ![](/assets/images/text/emojis/controller/left_stick_up.png)    |
| 後方               | `:_input_key.back:`              | S                                                       | S                      | ![](/assets/images/text/emojis/touch/back.png)    | ![](/assets/images/text/emojis/controller/left_stick_down.png)  | ![](/assets/images/text/emojis/controller/left_stick_down.png)  | ![](/assets/images/text/emojis/controller/left_stick_down.png)  |
| 左                 | `:_input_key.left:`              | A                                                       | A                      | ![](/assets/images/text/emojis/touch/left.png)    | ![](/assets/images/text/emojis/controller/left_stick_left.png)  | ![](/assets/images/text/emojis/controller/left_stick_left.png)  | ![](/assets/images/text/emojis/controller/left_stick_left.png)  |
| 右                 | `:_input_key.right:`             | D                                                       | D                      | ![](/assets/images/text/emojis/touch/right.png)   | ![](/assets/images/text/emojis/controller/left_stick_right.png) | ![](/assets/images/text/emojis/controller/left_stick_right.png) | ![](/assets/images/text/emojis/controller/left_stick_right.png) |
| インベントリ       | `:_input_key.inventory:`         | E                                                       | C                      | Unassigned                                        | ![](/assets/images/text/emojis/xbox/y_button.png)               | ![](/assets/images/text/emojis/switch/x_button.png)             | ![](/assets/images/text/emojis/playstation/triangle.png)        |
| アイテムを左へ切替 | `:_input_key.cycleItemLeft:`     | Unassigned                                              | PAGE UP                | Unassigned                                        | ![](/assets/images/text/emojis/xbox/left_bumper.png)            | ![](/assets/images/text/emojis/switch/left_bumper.png)          | ![](/assets/images/text/emojis/playstation/left_bumper.png)     |
| アイテムを右へ切替 | `:_input_key.cycleItemRight:`    | Unassigned                                              | PAGE DOWN              | Unassigned                                        | ![](/assets/images/text/emojis/xbox/right_bumper.png)           | ![](/assets/images/text/emojis/switch/right_bumper.png)         | ![](/assets/images/text/emojis/playstation/right_bumper.png)    |
| 視点切り替え       | `:_input_key.togglePerspective:` | F5                                                      | F5                     | Unassigned                                        | Unassigned                                                      | Unassigned                                                      | Unassigned                                                      |
| ブロックを取得     | `:_input_key.pickItem:`          | ![](/assets/images/text/emojis/mouse/middle_button.png) | X                      | Unassigned                                        | Unassigned                                                      | Unassigned                                                      | Unassigned                                                      |

### キーボード & マウスの入力キー

| 名前                     | ショートコード                       | キーボード & マウス | フルキーボードプレイ |
| ------------------------ | ------------------------------------ | ---------------- | ---------------------- |
| コマンドマクロ 1         | `:_input_key.commandmacro.0:`        | Unassigned       | Unassigned             |
| コマンドマクロ 2         | `:_input_key.commandmacro.1:`        | Unassigned       | Unassigned             |
| コマンドマクロ 3         | `:_input_key.commandmacro.2:`        | Unassigned       | Unassigned             |
| コマンドマクロ 4         | `:_input_key.commandmacro.3:`        | Unassigned       | Unassigned             |
| コマンドマクロ 5         | `:_input_key.commandmacro.4:`        | Unassigned       | Unassigned             |
| コマンドマクロ 6         | `:_input_key.commandmacro.5:`        | Unassigned       | Unassigned             |
| コマンドマクロ 7         | `:_input_key.commandmacro.6:`        | Unassigned       | Unassigned             |
| コマンドマクロ 8         | `:_input_key.commandmacro.7:`        | Unassigned       | Unassigned             |
| コマンドマクロ 9         | `:_input_key.commandmacro.8:`        | Unassigned       | Unassigned             |
| コマンドマクロ 10        | `:_input_key.commandmacro.9:`        | Unassigned       | Unassigned             |
| 座標をコピー            | `:_input_key.copyCoordinates:`       | Unassigned       | Unassigned             |
| 向き付き座標をコピー    | `:_input_key.copyFacingCoordinates:` | Unassigned       | Unassigned             |
| ホットバー スロット 1    | `:_input_key.hotbar.1:`              | 1                | 1                      |
| ホットバー スロット 2    | `:_input_key.hotbar.2:`              | 2                | 2                      |
| ホットバー スロット 3    | `:_input_key.hotbar.3:`              | 3                | 3                      |
| ホットバー スロット 4    | `:_input_key.hotbar.4:`              | 4                | 4                      |
| ホットバー スロット 5    | `:_input_key.hotbar.5:`              | 5                | 5                      |
| ホットバー スロット 6    | `:_input_key.hotbar.6:`              | 6                | 6                      |
| ホットバー スロット 7    | `:_input_key.hotbar.7:`              | 7                | 7                      |
| ホットバー スロット 8    | `:_input_key.hotbar.8:`              | 8                | 8                      |
| ホットバー スロット 9    | `:_input_key.hotbar.9:`              | 9                | 9                      |
| 視点上微調整            | `:_input_key.lookUpSlight:`          | Unassigned       | SUBTRACT               |
| 視点下微調整            | `:_input_key.lookDownSlight:`        | Unassigned       | ADD                    |
| 左下を向く              | `:_input_key.lookDownLeft:`          | Unassigned       | NUMPAD1                |
| 下を見る                | `:_input_key.lookDown:`              | Unassigned       | NUMPAD2                |
| 右下を向く              | `:_input_key.lookDownRight:`         | Unassigned       | NUMPAD3                |
| 左を見る                | `:_input_key.lookLeft:`              | Unassigned       | NUMPAD4                |
| 中央を見る              | `:_input_key.lookCenter:`            | Unassigned       | NUMPAD5                |
| 右を見る                | `:_input_key.lookRight:`             | Unassigned       | NUMPAD6                |
| 左上を向く              | `:_input_key.lookUpLeft:`            | Unassigned       | NUMPAD7                |
| 上を見る                | `:_input_key.lookUp:`                | Unassigned       | NUMPAD8                |
| 右上を向く              | `:_input_key.lookUpRight:`           | Unassigned       | NUMPAD9                |
| 視点上スムーズ移動      | `:_input_key.lookUpSmooth:`          | Unassigned       | UP                     |
| 視点下スムーズ移動      | `:_input_key.lookDownSmooth:`        | Unassigned       | DOWN                   |
| 視点左スムーズ移動      | `:_input_key.lookLeftSmooth:`        | Unassigned       | LEFT                   |
| 視点右スムーズ移動      | `:_input_key.lookRightSmooth:`       | Unassigned       | RIGHT                  |
| メニューを閉じる        | `:_input_key.menuCancel:`            | Button5          | P                      |
| モブ効果                | `:_input_key.mobEffects:`            | Z                | TAB                    |
| コマンドを開く          | `:_input_key.command:`               | SLASH            | SLASH                  |
| 通知を開く              | `:_input_key.interactwithtoast:`     | N                | N                      |

### コントローラーの入力キー

| 名前                          | ショートコード                                | Xbox                                                 | Nintendo Switch                                        | PlayStation                                                 |
| ----------------------------- | --------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------- |
| ゆっくり上昇               | `:_input_key.flyUpSlow:`                      | Unassigned                                           | Unassigned                                             | Unassigned                                                  |
| ゆっくり下降               | `:_input_key.flyDownSlow:`                    | ![](/assets/images/text/emojis/xbox/right_stick.png) | ![](/assets/images/text/emojis/switch/right_stick.png) | ![](/assets/images/text/emojis/playstation/right_stick.png) |
| モブ効果/通知を開く       | `:_input_key.mobeffectsandinteractwithtoast:` | ![](/assets/images/text/emojis/xbox/select.png)      | ![](/assets/images/text/emojis/switch/minus.png)       | ![](/assets/images/text/emojis/playstation/touch_pad.png)   |
