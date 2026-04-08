---
title: AFK検出器
mentions:
    - SirLich
    - BlueFrog130
    - SmokeyStack
    - Keyyard
    - Ultr4Anubis
description: プレイヤーがAFKのときにコマンドを実行します。
---

### AFK検出アニメーションコントローラー

<Button link="animation-controllers-intro">Animation Controller について詳しく見る</Button>

AFK のプレイヤーを追跡するために使える例です。

<CodeHeader>BP/animation_controllers/afk.ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.player.afk": {
            "states": {
                "default": {
                    "transitions": [
                        {
                            "stands_still": "!q.is_moving"
                        }
                    ]
                },
                "stands_still": {
                    "on_entry": ["v.afk = q.life_time;"],
                    "transitions": [
                        {
                            "afk": "(q.life_time - v.afk) >= 30 && !q.is_moving"
                        },
                        {
                            "default": "q.is_moving"
                        }
                    ]
                },
                "afk": {
                    "on_entry": ["/tag @s add AFK", "/say I'm now AFK"],
                    "animations": ["afk_animation"],
                    "transitions": [
                        {
                            "default": "q.is_moving"
                        }
                    ],
                    "on_exit": ["/tag @s remove AFK", "/say I'm no longer AFK"]
                }
            }
        }
    }
}
```

-   `"controller.animation.player.afk"` は、もちろん識別子です。
-   [Molang](https://bedrock.dev/r/MoLang) のクエリ `!q.is_moving` が false を返すと（プレイヤーが動いていないと）、状態は `"stand_still"` に移ります。
-   `"stand_still"` 状態では、プレイヤーが30秒間動かなければ `"afk"` に移り、そうでなければ `"default"` に戻ります。
-   `"afk"` 状態に入ると `"on_entry"` が発火し、次のスラッシュコマンドが実行されます。
-   `"animations"` には、状態が有効な間ずっと再生されるビヘイビアアニメーションの短い名前が入ります。これは[リソースアニメーションコントローラー](#animation-controller)と同様です。
-   プレイヤーが再び動くと、状態はもう一度 `"default"` に移ります。
    `"on_exit"` のコマンドが実行されます。
