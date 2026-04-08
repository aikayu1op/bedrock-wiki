---
title: エンジン環境
description: Minecraft Bedrock の scripting engine 環境です。
category: Documentation
mentions:
    - conmaster2112
    - JaylyDev
    - ThomasOrs
    - MuhammadRestu999
    - QuazChick
    - MinecraftBedrockArabic
    - 8Crafter
---

Minecraft: Bedrock Edition では、QuickJS ベースの独自の JavaScript 版が使われています。
コードの整理と読み込みには ECMAScript module (ESM) system を使っており、ゲーム向けスクリプトをよりモジュール化され整理された形で書けます。

## よくある問題

### タイムアウトのサポート

Minecraft Scripting を始めたときによく直面するのが、タイミングの問題です。
コードのタイミング制御で標準的に使われるのは、ご存じのとおり `setTimeout`{lang=js} と `setInterval`{lang=js}、そしてそれらのキャンセル関数です。

これらの標準的な方法は、遅延をミリ秒単位で指定できるフレームベースの仕組みで使われますが、Minecraft はワールドの変化を tick 単位で処理します。
そのため、これらの方法は利用できず、今後も利用可能になる予定はありません。

代わりに Minecraft では、1 tick 単位で遅延できる [`system.runTimeout`{lang=js}](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/system#runtimeout) と [`system.runInterval`{lang=js}](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/system#runinterval) の system method を使います。これらは 1.19.70 で最初に追加されました。
詳しくは [このチュートリアル](/scripting/script-server#scheduling) または [Microsoft Learn](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/system) を参照してください。

### Eval のサポート

文字列形式のコードを実行する `eval` や `Function` method の使い勝手はあまり良くないため、この問題に直面する人は多くありません。

一部のブラウザーでも、主に `eval` method の使用が禁止されています。`eval` を使うと悪意あるコードが実行されるおそれがあるため、既定では無効になっています。

これらのコード評価用 method を有効にするには、manifest に追加する必要があります。この capability により、`Function()`{lang=js} コンストラクターも使えるようになります。

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "capabilities": ["script_eval"]
}
```

## サポート

-   **_サポートされているもの_**

    -   `BigInt`{lang=js} - 任意精度整数のグローバルサポート（例: `123n`{lang=js}）。
    -   `Object`{lang=js} - オブジェクト用の標準コンストラクター
    -   `Function`{lang=js} - 関数用の標準コンストラクター。使用するには pack manifest に `script_eval` capability を追加する必要があります。
    -   `Error`{lang=js} - (`EvalError`{lang=js}, `RangeError`{lang=js}, `ReferenceError`{lang=js}, `SyntaxError`{lang=js}, `TypeError`{lang=js}, `URIError`{lang=js}, `InternalError`{lang=js}, `AggregateError`{lang=js}) - エラー生成用のクラス
    -   `Array`{lang=js} - (`Int8Array`{lang=js}, `UInt8Array`{lang=js}, `Int16Array`{lang=js}, `UInt16Array`{lang=js}, `Int32Array`{lang=js}, `UInt32Array`{lang=js}, `Float32Array`{lang=js}, `Float64Array`{lang=js}, `SharedArrayBuffer`{lang=js}, `ArrayBuffer`{lang=js}, `UInt8ClampedArray`{lang=js}) Array オブジェクト用の標準コンストラクター
    -   `parseInt`{lang=js}, `parseFloat`{lang=js} - 文字列を数値に変換する標準 method
    -   `isNaN`{lang=js}, `isFinite`{lang=js} - 数値の種類を判定する標準 method
    -   `decodeURI`{lang=js}, `encodeURI`{lang=js} - URI パスをデコード・エンコードする標準 method
    -   `decodeURIComponent`{lang=js}, `encodeURIComponent`{lang=js} - URI コンポーネントをデコード・エンコードする標準 method
    -   `escape`{lang=js}, `unescape`{lang=js} - 非標準 method です。可能なら `decodeURI` / `encodeURI` を使ってください。
    -   `NaN`{lang=js}, `Infinity`{lang=js}, `undefined`{lang=js} - コード内で使う標準変数
    -   `__date_clock`{lang=js} - 現在時刻をマイクロ秒で取得する QuickJS の組み込み method
    -   `Number`{lang=js}, `Boolean`{lang=js}, `String`{lang=js}, `Symbol`{lang=js} - JS の基本型用の標準コンストラクター
    -   `Math`{lang=js} - 三角比や累乗など、主要な数学関数を持つ標準オブジェクト
    -   `Reflect`{lang=js} - 組み込み method を持つ標準オブジェクト
    -   `eval`{lang=js} - 文字列をコードとして評価する標準 method。使用するには pack manifest に `script_eval` capability を追加する必要があります。
    -   `globalThis`{lang=js} - グローバルスコープの変数にアクセスできる標準オブジェクト
    -   `Date`{lang=js} - 日付インスタンス用の標準コンストラクター
    -   `RegExp`{lang=js} - 正規表現インスタンス用の標準コンストラクター
    -   `JSON`{lang=js} - JSON の stringify と parse method を持つ標準オブジェクト
    -   `Proxy`{lang=js} - 組み込み proxy ハンドラー用の標準コンストラクター
    -   `Map`{lang=js}, `Set`{lang=js}, `WeakMap`{lang=js}, `WeakSet`{lang=js} - データ整理用オブジェクトの標準コンストラクター
    -   `DataView`{lang=js} - バイナリ配列操作用の標準コンストラクター
    -   `Promise`{lang=js} - 非同期処理用の標準コンストラクター
    -   `console`{lang=js} - 基本的な出力 method（`log`{lang=js}, `warn`{lang=js}, `error`{lang=js}, `info`{lang=js}）を持つ標準オブジェクト
    -   `print`{lang=js} - `console.log`{lang=js} の別名

-   **_サポートされていないもの_**

    -   `setTimeout`{lang=js} - コード実行のタイミングを調整する標準関数
    -   `setInterval`{lang=js} - 間隔をあけてコードを実行する標準関数
    -   `clearTimeout`{lang=js} - setTimeout 実行をキャンセルする標準関数
    -   `clearInterval`{lang=js} - setInterval 実行をキャンセルする標準関数

-   **拡張 method**

    QuickJS が公開している追加 method もいくつかありますが、劇的な変化は期待しないでください。

    文字列を HTML 形式で包む追加の string method もあります。たとえば、`"text".bolt()`{lang=js} → `<b>text<b>`{lang=html} です。
    これらの method は実用性がなく、ドキュメント化もされていませんし、今後する予定もありません。

## JavaScript エンジンの更新履歴

-   **_1.21 (Tricky Trials)_**

    -   `BigInt`{lang=js} - 任意精度整数のグローバルサポート（例: `123n`{lang=js}）。
    -   `Object.hasOwn(obj, prop)`{lang=js} - `obj`{lang=js} が `prop`{lang=js} という自身のプロパティを持つかどうかを確認します。
    -   `Array.prototype.findLast(callbackFn, thisArg?)`{lang=js} - 条件に一致する最後の項目を返します。
    -   `Array.prototype.at(index)`{lang=js} - 指定した `index`{lang=js} の要素を返します。
