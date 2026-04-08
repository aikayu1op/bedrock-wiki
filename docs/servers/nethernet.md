---
title: NetherNet プロトコル
category: Protocols
mentions:
    - theaddonn
    - bedrock-crustaceans
description: Bedrock 向けの NetherNet プロトコルです。
---

Minecraft Bedrock は内部で複数の異なるプロトコルを使っており、その 1 つが NetherNet です。
NetherNet は xbox live セッションで使われる主要プロトコルで、web-rtc を基盤としています。

::: tip
NetherNet はかなり新しく、まだ完成していません。RakNet ほどよく知られておらず、理解も進んでいません。
:::

NetherNet についてはまだわかっていないことが多いため、[df-mc が作成したドキュメント](https://github.com/df-mc/nethernet-spec) を参照することしかできません。

## 実装

ドキュメントだけですべてを細かく説明することはできないため、既存実装を見るのがとても役立ちます。
NetherNet の実装一覧はこちらです。

| Name                                                                              | Description                                                       | Language               |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------- |
| [go-nethernet](https://github.com/df-mc/go-nethernet)                             | Go library implementing a basic version of the NetherNet protocol | Go                     |
| [bedrock-crustaceans/nethernet](https://github.com/bedrock-crustaceans/nethernet) | NetherNet implementation in Rust                                  | Rust                   |
| [node-nethernet](https://github.com/PrismarineJS/node-nethernet)                  | NetherNet implementation in NodeJS                                | JavaScript, TypeScript |

このページは作成中です。まだ作業中なので、ぜひ貢献してください。
