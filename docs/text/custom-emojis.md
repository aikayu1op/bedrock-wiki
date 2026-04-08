---
title: カスタム絵文字
description: Minecraft に独自の絵文字を追加する方法を学びます。
category: Emojis & Symbols
mentions:
    - SirLich
    - MedicalJewel105
    - QuazChick
    - MaragiDev
    - xKingDark
    - zheaEvyline
---

:::warning
この方法は公式にはサポートされていません。Marketplace では多くの制作者が使っていますが、注意して扱ってください。
:::
:::danger ORE UI
絵文字は Ore UI の画面ではサポートされていません。
:::

カスタム絵文字を作るには、バニラのスプライトシートを自分のものに置き換えることで、プリセット絵文字と非常によく似た方法を使います。
すでにバニラの絵文字で埋まっている文字セルもありますが、使える空きセルもあります。

まずは、下のスプライトシートをダウンロードして、リソースパックの `font` フォルダへ移動してください。

下には、自由に使えるカスタム絵文字入りの編集済みサンプルがあります。

## グリフグリッドの編集

### グリフグリッドのテンプレート

提供されているテンプレートグリッドは 256×256 ピクセルですが、より大きな絵文字に対応できるよう、もっと大きくしても構いません。

<WikiImage src="glyph_grid.png" width="512" pixelated />

### グリフ E0

<WikiImage src="glyph_E0.png" caption="RP/font/glyph_E0.png" pixelated />

### グリフ E1

<WikiImage src="glyph_E1.png" caption="RP/font/glyph_E1.png" pixelated />

:::tip
`E0` と `E1` だけがカスタム絵文字に使えるコードポイントではありません。
`E2`、`E3`、`E4`、`E5`、`E6`、`E7`、`E8`、`E9`、`EA`、`EB`、`EC`、`ED`、`EE`、`EF`、`F0`、`F1`、`F2`、`F3`、`F4`、`F5`、`F6`、`F7`、`F8` も使えます。これらはバニラで使われていないためです。

これらのコードポイントを使うと、ほかのパックとの競合もある程度減らせます。
:::

## 例

_編集済みサンプル `glyph_E1.png` (CC0)。@zheaEvyline が自由利用向けに共有しているものです。_

![](glyph_E1_modified.png)

既存のバニラテクスチャやカスタムテクスチャをグリフに追加して、ゲーム内で絵文字として使いたい場合は、@minato4743 が作成した **[Textures to Glyph Web Tool](https://minato.beyondbedrock.org/web-apps/textures-to-glyph/)** を使えば簡単にできます。

ファイルパスは次のようになります。

<FolderView :paths="[
    'RP/font/glyph_E0.png',
    'RP/font/glyph_E1.png'
]" />

## ゲーム内で絵文字を使う

カスタム絵文字を `glyph_E0.png` または `glyph_E1.png` に配置したら、対応する文字や記号を取得する必要があります。下の変換ツールを使えば、その文字をコピーしてゲーム内に絵文字を表示できます。

入力の最初の 2 文字は、絵文字を追加したファイルに応じて `E0`、`E1`、または別のコードポイントになります。

次の 2 文字は画像内の位置で、`<row><column>` という形式になっており、それぞれの文字は 16 進数の数字です。
この番号は上の画像を参照して確認できます。たとえば、`E0` の右上は `0F`、右下は `FF` です。

つまり、完成後は `E102` (`E1` + `02`) のようになります。

このコードを下の入力欄に入れて、**変換** を押してください。右側の記号をコピーして、Minecraft に貼り付けできます。

<div>
    <form>
        <input
            id="hexValue"
            placeholder="16 進値"
            class="button"
            style="background: none; outline: none;"
        />
        <input
            id="result"
            placeholder="結果"
            readonly
            class="button"
            style="background: none; outline: none; margin-inline: 0.5em;"
        />
        <button
            type="button"
            class="button"
            style="cursor: pointer;"
            onclick="document.getElementById('result').value = String.fromCodePoint(parseInt(document.getElementById('hexValue').value, 16))"
        >
            変換
        </button>
    </form>
</div>

代わりに、**[ここ](https://everythingfonts.com/unicode/0xE300)** のウェブサイトや、@NhanAZ が作成した **[Glyph Web Tool](https://nhanaz.github.io/glyph/)** を使って、文字や記号を取得することもできます。

## 絵文字の位置調整

-   絵文字を上下に動かしたい場合は、自分の絵文字スロット内で上下に移動させるだけです。
-   絵文字を左右に動かしたい場合は、移動させたい方向とは反対側の端に、5〜10% の不透明度のピクセルを 1 つ追加します (同じスロット内で)。
    -   例: 絵文字を右に 2 ピクセル動かしたい場合は、左端のどこかに 5〜10% の不透明度のピクセルを 1 つ接続し、その左側にもう 1 つ追加します。

_注: 以下の手順は、スロット幅をすべて使い切らない絵文字 (つまりスロットサイズより小さいもの) にのみ適用されます。_

## グリフ間の余白

ゲーム内で 2 つのグリフを近接して表示すると、その間に空白のピクセルが少し残ることがあります。これを直す方法は、元々複数スロットにまたがる絵文字が 1 つのスロットに収まるように、グリフ (PNG ファイル) を拡大縮小することだけです。

たとえば、`glyph_E1` ファイルで 16×16 スロットを 2 つ使って絵文字を作った場合、デフォルトファイルの解像度を 2 倍にして (**256×256** から **512×512** へ)、拡大後のグリフファイル内の **32×32** スロットの 1 つに **16×32** の絵文字を配置します。

## 絵文字のリサイズ

絵文字のサイズを変更するには、グリフ (PNG ファイル) の解像度を 512×512 にします。解像度を 2 倍にするのは、ピクセル数が増えて編集スペースが広がるためです。これが終わったら、好みの画像編集ソフトで新しい絵文字を選び、サイズを変更して、絵文字スロットの中央に配置します。そうすると、ゲーム内で使うときに絵文字の周囲に余白ができます。
