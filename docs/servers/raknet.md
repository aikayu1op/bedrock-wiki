---
title: RakNet プロトコル
category: Protocols
mentions:
    - ZestiiSpaghett
    - MedicalJewel105
    - SmokeyStack
    - ThomasOrs
    - theaddonn
    - ismaileke
    - Tom-Teclador
    - bedrock-crustaceans
description: Bedrock 向けの RakNet プロトコルです。
---

Minecraft Bedrock は内部で複数の異なるプロトコルを使っており、その 1 つが [RakNet](http://www.jenkinssoftware.com/) です。
RakNet は外部サーバー向けの主要プロトコルで、いわゆるプレイ先のサーバーです。フレンドのサーバーだったり、特集サーバーだったりするかもしれません。

最も重要な点の 1 つは、RakNet が Udp ベースであることです。
Bedrock は MCBE サーバーのデフォルト RakNet ポートとして `19132`（Ipv4、ipv6 では `19133` を使用）を使いますが、必要ならポートは変更できます。

### RakNet の注意点

-   オフラインメッセージ ID は常に `0x00ffff00fefefefefdfdfdfd12345678` です。このバイト列は _Magic_ と呼ばれます。
-   オフラインメッセージ ID は、unconnected ping や pong などの unconnected message で送信されます。
-   最初のバイトはパケットの種類を識別するために使われます。

### データ型

| Type                 | Size | Range           | Notes                                                                         |
| -------------------- | ---- | --------------- | ----------------------------------------------------------------------------- |
| u8 (byte)            | 1    | 0-255           | 単一の byte                                                                   |
| i16 (short)          | 2    | -32768 - 32767  | 符号付き 16 ビット整数                                                         |
| u16 (unsigned short) | 2    | 0 - 65535       | 符号なし 16 ビット整数                                                         |
| u24 (unsigned int24) | 3    | 0 - 2^24-1      | 符号なし 21 ビット整数                                                         |
| i64 (long)           | 8    | -2^63 to 2^63-1 | 符号付き 64 ビット整数                                                         |
| bool (boolean)       | 1    | 0 - 1           | `0` は `false`、`1` は `true`                                                |
| String               | N/A  |                 | u16（Big Endian でエンコード）を前置した文字列。長さを表す                    |
| Guid                 | 8    |                 | i64 として保存される Globally Unique Identifier                               |
| Socket Address       | 7    |                 | IP バージョン 4/6 に 1 byte、IP に 4 byte、port に 2 byte                     |
| Magic                | 16   |                 | 特殊な定数バイト列 `0x00ffff00fefefefefdfdfdfd12345678`                        |

## 内容

-   [Unconnected Ping](#unconnected-pings)
-   [Unconnected Pong](#unconnected-pongs)
-   [Open Connection Request 1](#open-connection-request-1)
-   [Open Connection Reply 1](#open-connection-reply-1)
-   [Open Connection Request 2](#open-connection-request-2)
-   [Open Connection Reply 2](#open-connection-reply-2)
    （ここから先、RakNet の接続は確立済みであり、すべての RakNet メッセージは [Frame Set Packet](https://minecraft.wiki/w/RakNet#Frame_Set_Packet) に含まれます）
-   [Connection Request](#connection-request)
-   [Connection Request Accepted](#connection-request-accepted)
-   [New Incoming Connection](#new-incoming-connection)

### Unconnected Ping

Minecraft Bedrock は、利用可能なゲームがあるかを確認し、ゲームから MOTD を取得するために、登録されたすべてのサーバー（およびローカルネットワーク）へメッセージを送信します。
これらのメッセージは unconnected ping と呼ばれ、次の形式です。

`0x01 | client alive time in ms (unsigned long long) | magic | client GUID`

### Unconnected Pong

このメッセージの後、サーバーは unconnected pong と呼ばれる応答を返します。
これらのメッセージが unconnected と呼ばれるのは、クライアントがまだサーバーとの接続を確立していないためです。
形式は次のとおりです。

`0x1c | client alive time in ms (recorded from previous ping) | server GUID | Magic | string length | Edition (MCPE or MCEE for Education Edition);MOTD line 1;Protocol Version;Version Name;Player Count;Max Player Count;Server Unique ID;MOTD line 2;Game mode;Game mode (numeric);Port (IPv4);Port (IPv6);`

例:

`MCPE;Dedicated Server;527;1.19.1;0;10;13253860892328930865;Bedrock level;Survival;1;19132;19133;`

クライアントは、gamemode やその数値は使っていないようです。

### Open Connection Request 1

（Client -> Server）

クライアントがサーバーへ参加しようとするときに送ります。

`0x05 | Magic | Protocol version (currently 11 or 0x0b) | RakNet Null Padding`

null padding は、ネットワークが扱える最大パケットサイズを見つけるために使われているようです。

クライアントは、null padding を減らしながらこれをサーバーへ送信し、サーバーが [Open Connection Reply 1](#open-connection-reply-1) を返すまで続けます。

### Open Connection Reply 1

（Server -> Client）

クライアントが参加を試みたとき、サーバーはこれを返します。

`0x06 | magic | server GUID | ServerHasSecurity (boolean) | Cookie (uint32, if server has security) | MTU Size (Unsigned short)`

これはクライアントとサーバー間のハンドシェイクの前半です。

### Open Connection Request 2

（Client -> Server）

クライアントは、open connection reply 1 パケットを受け取ったあとにこれを返します。

`0x07 | magic | Cookie (uint32, if server has security) | Client supports security (Boolean(false), always false for the vanilla client, if server has security) | server Address | MTU Size (Unsigned short) | client GUID (Long)`

### Open Connection Reply 2

（Server -> Client）

これはクライアントとサーバー間のハンドシェイクの最後の部分です。

`0x08 | magic | server GUID (Long) | client Address | MTU Size | security(Boolean)`

**ここから先、すべての RakNet メッセージは [Frame Set Packet](https://minecraft.wiki/w/RakNet#Frame_Set_Packet) に含まれます。**

### Connection Request

（Client -> Server）

クライアントが接続要求を送る段階です。

`0x09 | client GUID (Long) | Request timestamp (Long) | Secure (Boolean)`

### Connection Request Accepted

（Server -> Client）

サーバーは、受信した接続要求への応答としてこのパケットを送ります。

`0x10 | client Address | System index (Short, unknown what this does. 0 works as a value (Minecraft client sends 47)) | System adresses ([]Address) | Ping time (Long) | Pong Time (Long)`

### New Incoming Connection

（Client -> Server）

これで RakNet 接続は完全に成功です。

`0x13 | server Address | internal Adress ([20(maybe 10)]Address) (i use 255.255.255.255:0) | Ping time (Long) | Pong Time (Long)`

::: tip

次の 2 つのパケット（と最初の Minecraft Protocol パケット）は、バニラクライアントではまとめて 1 回で送信されます。
RakNetProtocol では別々に送ることもできますが、カスタム RakNet 実装を持つサーバーは、バニラクライアントでは決して起きないこのケースをうまく処理できない場合があります。

:::

### New Incoming Connection

クライアントは、Connection Request Accepted に応答してこのパケットを送ります。

`0x13 | serverAddress (uint8) | clientMachineAddresses (address[10], Minecraft sends only one ipv6 together with a placeholder (see below) instead of the other 9) | clientSendTime (uint64) | serverSendTime (uint64)`

その他の clientMachineAddresses（Internal Addresses）の代わりのプレースホルダー:

> `0xd4 0x0b 0xa7 0x86 0xdd 0x98 0x33 0x00 0x00`
> 各 byte が、欠けている 9 個の clientMachineAddresses の 1 つを置き換えます

このパケットを送ったあと、接続を維持するために Connected Ping を定期的に送る必要があります。
サーバーもときどき Connected Ping を送ってくるので、Connected Pong を返してください。

### Connected Ping

クライアントは New Incoming Connection の直後、またはそれと同時にこのパケットを送ります。
このパケットは unreliable として送るべきです。
クライアント/サーバーはこれに対して Connected Pong を返します。

`0x00 | Time since start (uint64)`

### Connected Pong

クライアントまたはサーバーは、Connected Ping を受け取ったあとにこのパケットを送ります。
このパケットは unreliable として送るべきです。

`0x00 | Time since start client (uint64) | Time since start server (uint64)`

## 実装

ドキュメントだけですべてを細かく説明することはできないため、既存実装を見るのがとても役立ちます。
RakNet Protocol の実装一覧はこちらです。

| Name                                                                                            | Description                                                                         | Language               |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ---------------------- |
| [RakNet (Official)](https://github.com/facebookarchive/RakNet)                                  | RakNet is a cross platform, open source, C++ networking engine for game programmers | C++                    |
| [bedrock-crustaceans/raknet](https://github.com/bedrock-crustaceans/raknet)                     | RakNet implementation in Rust                                                       | Rust                   |
| [NetrexMC/RakNet](https://github.com/NetrexMC/RakNet)                                           | RakNet implementation in Rust                                                       | Rust                   |
| [rust-raknet](https://github.com/b23r0/rust-raknet)                                             | RakNet Protocol implementation by Rust                                              | Rust                   |
| [tokio-raknet](https://github.com/iAldrich23xX/tokio-raknet)                                    | RakNet Implementation build around the tokio async ecosystem                        | Rust                   |
| [transport-raknet](https://github.com/CloudburstMC/Network/tree/develop/transport-raknet)       | netty-transport-raknet                                                              | Java                   |
| [RakLib](https://github.com/pmmp/RakLib)                                                        | RakNet server implementation written in PHP                                         | PHP                    |
| [go-raknet](https://github.com/Sandertv/go-raknet)                                              | Go library implementing a basic version of the RakNet protocol                      | Go                     |
| [raknet-python](https://github.com/raknet-python/raknet-python)                                 | Python bindings for RakNet, a cross-platform networking engine for game programmers | Python                 |
| [PieRakNet](https://github.com/PieMC-Dev/PieRakNet)                                             | RakNet implementation, written in Python. Created for PieMC                         | Python                 |
| [JSPrismarine/raknet](https://github.com/JSPrismarine/JSPrismarine/tree/master/packages/raknet) |                                                                                     | Javascript, Typescript |

## ソース

::: tip
RakNet についてさらに読みたい場合は、Bedrock Protocol と RakNet のドキュメントを参照してください。

[RakNet Protocol Documentation](https://minecraft.wiki/w/RakNet)
[Other RakNet Protocol Documentation](https://github.com/vp817/RakNetProtocolDoc)
:::

このページは作成中です。まだ作業中なので、ぜひ貢献してください。
