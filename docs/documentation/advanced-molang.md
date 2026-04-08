---
title: 高度な Molang
description: Molang のより高度なトピックを学びます。
mentions:
    - Ciosciaa
    - TheItsNameless
    - QuazChick
---

## 値

-   Molang のすべての式は、等価比較のために値を返します。ほとんどの式は `0` を返します。特に、代入は代入した値を返し、ループは、もし存在すればループ文の解決値を返します。
-   Molang のすべての値は、実質的に単精度浮動小数点です。
-   `this` は、評価中に蓄積されたフィールドの現在値を参照するために使われます。アニメーションでしか使えないように見えますが、他でも使えるかもしれません。たとえば、ボーンの `x` `scale` に蓄積された変換が `62` を生む場合、最後のアニメーションで `x` `scale` を `-this` にすると `-62` になり、以前の変換を打ち消せます。これはバニラアニメーションのさまざまな箇所で使われています。アニメーション外では、`this` は常に `0` を返すようです。

### 真偽値

-   Molang では真偽値を使えます。`true` は `1`、`false` は `0` に解決されます。

### 数値

-   数値の前に `0` を付けて、コード上で見やすく揃えることができます。
-   数値には `2.5e2` のような指数表記を使えます。これは 250 と同じです。`e` の後に `+` や `-` を付けて指数の向きを指定できます。
-   数値の末尾に `f` を 1つ付けることがあります。これは浮動小数点値を示すのによく使われます。バニラコードのあちこちで見られますが、機能はないと思われます。

### 文字列

-   文字列では `\`（JSON では `\\`）が何らかのエスケープ、あるいは別の用途として使われます。これが何に使われるのかは分かっていません。`'` で正しく終了しない専用のサブパーサーに、後続の 2 文字が渡されることは分かっています。そのため、Molang の文字列 `"v.type = '\\x';"` は無効です。通常は文字列の終わりを表すため単独では使えない `'` も、`\` の後ろ 2 文字の中では使えます。
-   文字列値は、float として表現されるため、（ほとんど）増分的です。1 文字の文字列なら、等価演算子や比較演算子で比較でき、事実上その内容を「調整」することもできます。複数文字の挙動は不明です。

## Operators

The complete precedence list, from first to last evaluated:

1. `()` and `[]`
2. `->`
3. `!` and `-` (unary negation)
4. `*` and `/`
5. `+` and `-` (binary subtraction)
6. `<`, `<=`, `>`, and `>=`
7. `==` and `!=`
8. `&&`
9. `||`
10. `?` and `? :`
11. `??`
12. `=`
13. `return`

-   Operators are considered from left to right for all operators except the conditionals.
-   Multiple `->` cannot be used in the same statement.
-   Logical operators short-circuit.

## Statements

-   Assignments return the value assigned. You can therefore chain assignments if you need separate variables to work with from a single value, such as with `v.iterator_x = (v.iterator_z = math.random_integer(16, 32));`.
-   The last statement inside a brace scope does not need to end with a `;`.
-   Brace scopes can be used anywhere an expression can be used. `v.spawn_point ?? { v.target = false; };`, for example, would set `v.target` to `false` if `v.spawn_point` were not defined.

## Collections

-   The result of array subscripts cannot directly be an argument to `+`, `-`, `*`, or `/` but may still be used directly as function parameters (even math functions) or with other operators.

## Evaluation

-   `initialize` and `pre_animation` are lazily concatenated. Molang strings in these arrays must be syntactically valid independently, but the basic concatenation of all independent strings must also be a valid Molang input.

## Limits

-   Molang showed no reasonable limits to any language functionality, aside from numeric size. Loop counts, string lengths, Molang input length, collection size, etc., were observed to hold in very unreasonable situations.
