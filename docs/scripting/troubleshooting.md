---
title: JavaScript のトラブルシューティング
category: Documentation
mentions:
    - Herobrine643928
    - JaylyDev
    - SmokeyStack
    - ThomasOrs
description: JS のトラブルシューティングです。
---

この記事では、あらゆる JavaScript の問題をデバッグするための基本的な流れを学べます。

## エラーリファレンス

これらのエラーはコードのデバッグに役立ちますが、報告された問題がすぐに明確になるとは限りません。これらのエラーの多くは JavaScript engine で一般的なので、検索エンジン（例: Google 検索）で見つけられます。

各 Error class の詳細は、各エラー名の下にあるリンクをクリックすると `MDN` で確認できます。

-   [`EvalError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError)
    -   Creates an instance representing an error that occurs regarding the global function `eval()`.
-   [`RangeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
    -   Creates an instance representing an error that occurs when a numeric variable or parameter is outside its valid range.
-   [`ReferenceError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
    -   無効な参照を逆参照したときに発生するエラーのインスタンスを表します。Minecraft Script Engine では、このエラーが発生する明確な理由がない参照エラーがあります。
    -   Native object bound to prototype does not exist.
-   [`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
    -   Creates an instance representing a syntax error.
-   [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
    -   Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
-   [`URIError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError)
    -   Creates an instance representing an error that occurs when `encodeURI", "encodeURI()` or `decodeURI", "decodeURI()` are passed invalid parameters.
-   [`AggregateError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)
    -   Creates an instance representing several errors wrapped in a single error when multiple errors need to be reported by an operation, for example by `Promise.any()`.
-   [`InternalError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError)
    -   JavaScript エンジン内部でエラーが投げられたときに発生するエラーのインスタンスを表します。Minecraft JS では、次のエラーがあります。
        -   stack overflow
        -   out of memory

## Minecraft JS のエラー

Minecraft Bedrock Edition は QuickJS ベースの独自 JavaScript 版を使っているため、Minecraft にしか存在しないエラーがいくつかあります。API がネイティブ C++ で作られているので、これらのエラーはかなりよく起こります。

### InternalError: out of memory

このエラーは、合計メモリ使用量が 250 メガバイトを超えたときに発生します。

これは Watchdog による終了としてワールドを保存・停止し、`BeforeWatchdogTerminateEvent` ではキャンセルできません。

メモリ制限は、`server.properties` の `script-watchdog-memory-limit` を変更して調整できます。`0` にすると制限は無効になります。

### InternalError: stack overflow

Occurs when there is a recursive function (a function that calls itself) without an exit point.

Example code:

```js
function loop(x) {
    // The base case is missing
    loop(x + 1); // Recursive call
}
loop(0);
// InternalError: stack overflow
```

### InternalError: interrupted

ランタイムのコストがごく小さい場合に発生します。これはスクリプトの構成によって起こります。

### TypeError: no setter for property

getter だけが定義されたプロパティに新しい値を設定しようとしたときに発生します。

これは、ネイティブモジュールからネイティブオブジェクトのプロパティを設定しようとしたときによく起こります。

### TypeError: value is not iterable

反復可能オブジェクトではない値に対して反復しようとしたときに発生します。

Click [**here**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/is_not_iterable) for more information.

### TypeError: not a function

関数として値を呼び出そうとしたが、その値が実際には関数ではないときに発生します。Script API は Minecraft の changelog で触れられないままメソッドが削除・改名されることがあるため、よく起こります。

Click [**here**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function) for more information.

### TypeError: Native Type Conversion Failed

ネイティブメソッドの必須パラメーターに、誤った型の値を入れたときに発生します。

### TypeError: Native Variant Type Conversion Failed

ネイティブメソッドの任意パラメーターに、誤った型の値を入れたときに発生します。

### TypeError: Object did not have a native handle

::: warning
このエラーは公式に公開されていないため、説明は推測です。
:::

このエラーは、スクリプトが JavaScript オブジェクトから native handle を取得しようとしたが、その handle インスタンスが解放されていたときに発生します。

### ReferenceError: Native object bound to prototype does not exist.

::: warning
このエラーは公式に公開されていないため、説明は推測です。
:::

このエラーは、予期しない理由で native codebase がそのメソッドをサポートしていないときに発生します。状況によっては、ゲームを再起動すると解決します。

## Debugging

Debugging allows you to find the exact point where you made a mistake on your JavaScript code. Minecraft has a built-in JavaScript debugger which you can enable by turning on Content Log GUI located in `Settings > Creator`.

### Logging level

-   **[Scripting][Inform]**

    you can use `console.log()` or `console.info()` to display JavaScript values, however they are only displayed in [Content Log file](/guide/troubleshooting#content-log-file), which you can see them [here](/guide/troubleshooting#content-log-file).

    `00:00:00-[Scripting][Inform]-`: This text is triggered when `console.log()` or `console.info()` is used.

-   **[Scripting][Warning]**

    これにより、Content Log GUI と content log ファイルの両方に警告メッセージが出力されます。関数が呼ばれたとき、次のテキストが表示されます。

    `00:00:00-[Scripting][Warning]-`: This text is triggered when `console.warn()` is used.

-   **[Scripting][Error]**

    これにより、Content Log GUI と content log ファイルの両方にエラーメッセージが出力されます。関数が呼ばれたとき、次のテキストが表示されます。

    `00:00:00-[Scripting][Error]-`: This text is triggered when `console.error()` is used.

### Stack trace

A stack trace is a list of the functions, in order, that lead to a breakpoint in a software program.

これは、コード内の問題の原因を見つけるのに役立ちます。

Example:

```
[Scripting][error]-SyntaxError: unexpected character
    at <anonymous> (index.js:16)
    at parse (native)
    at r (bundle.js)
    at <anonymous> (bundle.js)
```

-   Error name: SyntaxError
-   Error message: unexpected character
-   Where the error cause: line 16 in file `index.js`

---

[Original Credit](https://github.com/JaylyDev/ScriptAPI/blob/main/docs/JavaScript/Error.md)
