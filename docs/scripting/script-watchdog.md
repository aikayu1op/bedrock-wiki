---
title: Script Watchdog
category: Documentation
tags:
    - experimental
mentions:
    - JaylyDev
    - SmokeyStack
    - ThomasOrs
description: Watchdog は、Minecraft script plugin で既定で有効になっている script engine のパフォーマンスシステムです。
---

Watchdog は、Minecraft script plugin で既定で有効になっている script engine のパフォーマンスシステムです。

## Watchdog の設定

1.19.20 以降、script environment のパフォーマンスを管理する watchdog 設定があります。これらの設定は world や realm では変更できませんが、[Dedicated Server](https://www.minecraft.net/en-us/download/server/bedrock) の `server.properties` から変更できます。以下は既定の watchdog 設定で、world と realm のすべての端末で同じです。

<CodeHeader>bedrock-server/server.properties</CodeHeader>

```ini
# Enables the watchdog (default = true)
script-watchdog-enable=true

# Sets the watchdog threshold for single tick hangs (default = 3000 ms)
script-watchdog-hang-threshold=3000

# Sets the watchdog threshold for single tick spikes (default = 100 ms)
script-watchdog-spike-threshold=100

# Sets the watchdog threshold for slow scripts over multiple ticks (default = 2ms)
script-watchdog-slow-threshold=2

# Saves and shuts down the world when the combined memory usage exceeds the given threshold (in megabytes).
# Setting this value to 0 disables the limit. (default = 250)
script-watchdog-memory-limit=250

# Produces a content log warning when the combined memory usage exceeds the given threshold (in megabytes).
# Setting this value to 0 disables the warning. (default = 100)
script-watchdog-memory-warning=100

# Enables watchdog exception handling via the events.beforeWatchdogTerminate event (default = true)
script-watchdog-enable-exception-handling=true

# Enables server shutdown in the case of an unhandled watchdog exception (default = true)
script-watchdog-enable-shutdown=true

# Throws a critical exception when a hang occurs (default = true)
script-watchdog-hang-exception=true
```

## Watchdog メッセージ

これらの watchdog メッセージは、エラーまたは警告として `[Watchdog]` ラベル付きで出力されます。警告やエラーとして表示され、無視すべきではありません。

### behavior pack '%s' で遅い script を検出しました（平均 x ms）

script runtime が一定時間以上遅れています。

### behavior pack '%s' で x ms の script spike を検出しました

script runtime に急激な負荷上昇があります。

### behavior pack '%s' で out of memory 例外を検出しました

この error は、合計メモリ使用量がしきい値を超えたときに発生します。

これは Watchdog termination によって world を保存して終了し、`BeforeWatchdogTerminateEvent` でキャンセルすることはできません。

### behavior pack '%s' で x ms の script hang を検出しました

script が、単一 tick の watchdog しきい値を超えて特定の場所で停止しています。

これは通常、`while` loop や `for` loop` のような反復処理が原因です。

### behavior pack '%s' で stack overflow を検出しました

終了条件のない再帰関数（自分自身を呼ぶ function）があると発生します。

### 高いメモリ使用量を検出しました

合計メモリ使用量が指定されたしきい値（メガバイト）を超えると、content log に警告を出します。

### behavior pack '%s' で型 '%s' の未処理の重大な例外が発生しました

未処理の重大な例外が発生すると、content log に error を出します。

watchdog が behavior pack の script の実行を終了する理由はいくつかあります。

-   `hang`: hang または無限 loop により script が応答しない。
-   `stackOverflow`: 長く、場合によっては無限に続く function 呼び出しの連鎖。

## Watchdog 終了をキャンセルする

Minecraft の scripting API を使うと、パフォーマンス watchdog system の違反によって script runtime が終了されるときに呼ばれる callback に接続できます。

この event を使うと、script runtime の終了をキャンセルして、watchdog が server の実行を止めないようにできます。ただし、server の設定によっては終了のキャンセルが許可されない場合があります。

```js
import { system } from "@minecraft/server";

system.events.beforeWatchdogTerminate.subscribe((event) => {
    event.cancel = true;
    console.warn(`[Watchdog] Canceled critical exception of type '${event.cancelationReason}`);
});
```

## Watchdog コマンド

Watchdog 実装には Minecraft の slash command があり、`/script watchdog` command で使えます。

-   `/script watchdog exportstats`: scripting environment の performance profiling を書き出します。plugin handle と runtime 情報が含まれます。

---

[Original Credit](https://github.com/JaylyDev/ScriptAPI/blob/main/docs/MinecraftApi/Watchdog.md)
