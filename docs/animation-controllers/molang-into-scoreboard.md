---
title: Molangをスコアボードへ
mentions:
    - SirLich
    - MedicalJewel105
    - shanewolf38
    - Lufurrius
    - TheItsNameless
    - ThomasOrs
description: Molang の変数値をスコアボード値に変換します。
---

以下は、任意の Molang（変数、クエリなど）を即座にスコアへ読み込む方法です。コントローラーの `convert` 状態で呼び出すアニメーション名が、エンティティで定義したアニメーション名（`animation.namespace.molang_to_score`）と一致していることを確認してください。

**注:** セットアップの一部として、次の2つのコマンドをワールド内で実行する必要があります。
`/scoreboard objectives add MoLang dummy`
`/scoreboard players set "#10" MoLang 10`

<CodeHeader>BP/animation_controllers/molang_to_score.animation_controllers.json</CodeHeader>

```json
"controller.animation.namespace.molang_to_score": {
  "initial_state": "idle",
  "states": {
    "idle": {
      "transitions": [ { "convert": "<condition to start conversion>" } ],
      "on_exit": [ "/scoreboard players set @s MoLang 0", "/scoreboard players set \"#var\" MoLang 0", "v.convert = <variable to convert>;", "v.digit = 1000000000;" ]
    },
    "convert": {
      "animations": [
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score"
      ],
      "transitions": [ { "idle": "1" } ]
    }
  }
}
```

<CodeHeader>BP/animations/molang_to_score.animation.json</CodeHeader>

```json
"animation.namespace.molang_to_score": {
  "animation_length": 10.0,
  "anim_time_update": "t.digit = Math.mod(Math.floor(v.convert / v.digit), 10) + 0.1; v.digit = v.digit / 10; return t.digit;",
  "timeline": {
    "0.0": [ "/scoreboard players operation @s MoLang *= \"#10\" MoLang", "/scoreboard players operation @s MoLang += \"#var\" MoLang", "/scoreboard players set \"#var\" MoLang 0" ],
    "1.0": [ "/scoreboard players set \"#var\" MoLang 1" ],
    "2.0": [ "/scoreboard players set \"#var\" MoLang 2" ],
    "3.0": [ "/scoreboard players set \"#var\" MoLang 3" ],
    "4.0": [ "/scoreboard players set \"#var\" MoLang 4" ],
    "5.0": [ "/scoreboard players set \"#var\" MoLang 5" ],
    "6.0": [ "/scoreboard players set \"#var\" MoLang 6" ],
    "7.0": [ "/scoreboard players set \"#var\" MoLang 7" ],
    "8.0": [ "/scoreboard players set \"#var\" MoLang 8" ],
    "9.0": [ "/scoreboard players set \"#var\" MoLang 9" ]
  }
}
```

**説明:** 変換が始まると、コントローラーはプレイヤーの Molang スコアと `#var`（フェイクプレイヤー）の Molang スコアをリセットします。変換用変数 `v.convert` を初期化し、桁変数 `v.digit` を 10 桁目（10^10）を取得する値に設定します。すると最初のアニメーションが実行され、アニメーション時間が 10 桁目に合わせられ、次の桁（9桁目、10^9）を取得するように `digit` 変数が設定されます。タイムラインの各インデックスは、設定された時間まで実行されるため、タイムラインの `0.0` は常に実行されます。これによりプレイヤーの Molang スコアが 10 倍され、正しい桁が入るようになり、その後で最後に取得した桁が加算されます（最初の実行では `#var` がコントローラーによってリセットされているため、これは常に 0 です）。この処理をさらに 10 回繰り返して、変換変数の 10 桁すべてを取得します。各アニメーションは前のアニメーションで設定された桁を取得するため、アニメーションは 11 回実行されます。

ゲーム内で変換のテストを行うには、`<condition to start conversion>` を `q.is_using_item` に、`<variable to convert>` を `Math.random_integer(0, 9999)` に設定します。リンゴを持って食べ始め、数字が変わっていく様子を確認してください。
