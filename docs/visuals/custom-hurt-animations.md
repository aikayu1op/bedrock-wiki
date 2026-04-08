---
title: 被ダメージアニメーション
tags:
    - intermediate
mentions:
    - MedicalJewel105
    - stekdev17
category: Tutorials
description: エンティティがダメージを受けたときにカスタムアニメーションを発動する方法を解説します。
---

このガイドでは、エンティティのカスタム被ダメージアニメーションを発動する方法を説明します。
現時点では、カスタム被ダメージアニメーションを作る決定的な方法はあまりありません（少なくとも私の知る限りでは）。

## BP のエンティティ側

最初にエンティティファイルを設定します。properties をサポートするファイルバージョンを使ってください。

Add the following to entity description:

<CodeHeader>BP/entity/my_entity.json#description</CodeHeader>

```json
"properties": {
    "wiki:is_hurt": {
        "client_sync": true, // so we can use it in RP
        "type": "bool",
        "default": false
    }
}
```

そして、component groups には次を追加します。

<CodeHeader>BP/entity/my_entity.json#component_groups</CodeHeader>

```json
"wiki:hurt_group": {
    "minecraft:timer": {
        "time": 0.1,
        "time_down_event": {
            "event": "wiki:on_not_hurt_event"
        }
    }
}
```

この component group を追加し、プロパティを切り替えるイベントです。

<CodeHeader>BP/entity/my_entity.json#events</CodeHeader>

```json
"wiki:on_hurt_event": {
    "set_property": {
        "wiki:is_hurt": true
    },
    "add": {
        "component_groups": [
            "wiki:hurt_group"
        ]
    }
},
"wiki:on_not_hurt_event": {
    "remove": {
        "component_groups": [
            "wiki:hurt_group"
        ]
    },
    "set_property": {
        "wiki:is_hurt": false
    }
}
```

このイベントを呼ぶには、components に `damage_sensor` を追加します。

<CodeHeader>BP/entity/my_entity.json#components</CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "all",
        "on_damage": {
            "event": "wiki:on_hurt_event"
        }
    }
}
```

## RP の AC 側

このようにして、被ダメージアニメーションの state に遷移できます: `"damage_state": "q.property('wiki:is_hurt')"`。そこから `"default": "q.all_animations_finished"` を使います。

これはカスタムボートを作るときにも役立つかもしれません。
