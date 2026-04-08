import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/images/text/custom-emojis/glyph_E1_modified.png";
const __pageData = JSON.parse('{"title":"カスタム絵文字","description":"Minecraft に独自の絵文字を追加する方法を学びます。","frontmatter":{"title":"カスタム絵文字","description":"Minecraft に独自の絵文字を追加する方法を学びます。","category":"Emojis & Symbols","mentions":["SirLich","MedicalJewel105","QuazChick","MaragiDev","xKingDark","zheaEvyline"]},"headers":[{"level":2,"title":"グリフグリッドの編集","slug":"グリフグリッドの編集","link":"#グリフグリッドの編集","children":[{"level":3,"title":"グリフグリッドのテンプレート","slug":"グリフグリッドのテンプレート","link":"#グリフグリッドのテンプレート","children":[]},{"level":3,"title":"グリフ E0","slug":"グリフ-e0","link":"#グリフ-e0","children":[]},{"level":3,"title":"グリフ E1","slug":"グリフ-e1","link":"#グリフ-e1","children":[]}]},{"level":2,"title":"例","slug":"例","link":"#例","children":[]},{"level":2,"title":"ゲーム内で絵文字を使う","slug":"ゲーム内で絵文字を使う","link":"#ゲーム内で絵文字を使う","children":[]},{"level":2,"title":"絵文字の位置調整","slug":"絵文字の位置調整","link":"#絵文字の位置調整","children":[]},{"level":2,"title":"グリフ間の余白","slug":"グリフ間の余白","link":"#グリフ間の余白","children":[]},{"level":2,"title":"絵文字のリサイズ","slug":"絵文字のリサイズ","link":"#絵文字のリサイズ","children":[]}],"relativePath":"text/custom-emojis.md","filePath":"text/custom-emojis.md"}');
const _sfc_main = { name: "text/custom-emojis.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WikiImage = resolveComponent("WikiImage");
  const _component_FolderView = resolveComponent("FolderView");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>この方法は公式にはサポートされていません。Marketplace では多くの制作者が使っていますが、注意して扱ってください。</p></div><div class="danger custom-block"><p class="custom-block-title">ORE UI</p><p>絵文字は Ore UI の画面ではサポートされていません。</p></div><p>カスタム絵文字を作るには、バニラのスプライトシートを自分のものに置き換えることで、プリセット絵文字と非常によく似た方法を使います。 すでにバニラの絵文字で埋まっている文字セルもありますが、使える空きセルもあります。</p><p>まずは、下のスプライトシートをダウンロードして、リソースパックの <code class="shiki"><span>font</span></code> フォルダへ移動してください。</p><p>下には、自由に使えるカスタム絵文字入りの編集済みサンプルがあります。</p><h2 id="グリフグリッドの編集" tabindex="-1">グリフグリッドの編集 <a class="header-anchor" href="#グリフグリッドの編集" aria-label="Permalink to &quot;グリフグリッドの編集&quot;">​</a></h2><h3 id="グリフグリッドのテンプレート" tabindex="-1">グリフグリッドのテンプレート <a class="header-anchor" href="#グリフグリッドのテンプレート" aria-label="Permalink to &quot;グリフグリッドのテンプレート&quot;">​</a></h3><p>提供されているテンプレートグリッドは 256×256 ピクセルですが、より大きな絵文字に対応できるよう、もっと大きくしても構いません。</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "glyph_grid.png",
    width: "512",
    pixelated: ""
  }, null, _parent));
  _push(`<h3 id="グリフ-e0" tabindex="-1">グリフ E0 <a class="header-anchor" href="#グリフ-e0" aria-label="Permalink to &quot;グリフ E0&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "glyph_E0.png",
    caption: "RP/font/glyph_E0.png",
    pixelated: ""
  }, null, _parent));
  _push(`<h3 id="グリフ-e1" tabindex="-1">グリフ E1 <a class="header-anchor" href="#グリフ-e1" aria-label="Permalink to &quot;グリフ E1&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "glyph_E1.png",
    caption: "RP/font/glyph_E1.png",
    pixelated: ""
  }, null, _parent));
  _push(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code class="shiki"><span>E0</span></code> と <code class="shiki"><span>E1</span></code> だけがカスタム絵文字に使えるコードポイントではありません。 <code class="shiki"><span>E2</span></code>、<code class="shiki"><span>E3</span></code>、<code class="shiki"><span>E4</span></code>、<code class="shiki"><span>E5</span></code>、<code class="shiki"><span>E6</span></code>、<code class="shiki"><span>E7</span></code>、<code class="shiki"><span>E8</span></code>、<code class="shiki"><span>E9</span></code>、<code class="shiki"><span>EA</span></code>、<code class="shiki"><span>EB</span></code>、<code class="shiki"><span>EC</span></code>、<code class="shiki"><span>ED</span></code>、<code class="shiki"><span>EE</span></code>、<code class="shiki"><span>EF</span></code>、<code class="shiki"><span>F0</span></code>、<code class="shiki"><span>F1</span></code>、<code class="shiki"><span>F2</span></code>、<code class="shiki"><span>F3</span></code>、<code class="shiki"><span>F4</span></code>、<code class="shiki"><span>F5</span></code>、<code class="shiki"><span>F6</span></code>、<code class="shiki"><span>F7</span></code>、<code class="shiki"><span>F8</span></code> も使えます。これらはバニラで使われていないためです。</p><p>これらのコードポイントを使うと、ほかのパックとの競合もある程度減らせます。</p></div><h2 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h2><p><em>編集済みサンプル <code class="shiki"><span>glyph_E1.png</span></code> (CC0)。@zheaEvyline が自由利用向けに共有しているものです。</em></p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><p>既存のバニラテクスチャやカスタムテクスチャをグリフに追加して、ゲーム内で絵文字として使いたい場合は、@minato4743 が作成した <strong><a href="https://minato.beyondbedrock.org/web-apps/textures-to-glyph/" target="_blank" rel="noreferrer">Textures to Glyph Web Tool</a></strong> を使えば簡単にできます。</p><p>ファイルパスは次のようになります。</p>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "RP/font/glyph_E0.png",
    "RP/font/glyph_E1.png"
  ] }, null, _parent));
  _push(`<h2 id="ゲーム内で絵文字を使う" tabindex="-1">ゲーム内で絵文字を使う <a class="header-anchor" href="#ゲーム内で絵文字を使う" aria-label="Permalink to &quot;ゲーム内で絵文字を使う&quot;">​</a></h2><p>カスタム絵文字を <code class="shiki"><span>glyph_E0.png</span></code> または <code class="shiki"><span>glyph_E1.png</span></code> に配置したら、対応する文字や記号を取得する必要があります。下の変換ツールを使えば、その文字をコピーしてゲーム内に絵文字を表示できます。</p><p>入力の最初の 2 文字は、絵文字を追加したファイルに応じて <code class="shiki"><span>E0</span></code>、<code class="shiki"><span>E1</span></code>、または別のコードポイントになります。</p><p>次の 2 文字は画像内の位置で、<code class="shiki"><span>&lt;row&gt;&lt;column&gt;</span></code> という形式になっており、それぞれの文字は 16 進数の数字です。 この番号は上の画像を参照して確認できます。たとえば、<code class="shiki"><span>E0</span></code> の右上は <code class="shiki"><span>0F</span></code>、右下は <code class="shiki"><span>FF</span></code> です。</p><p>つまり、完成後は <code class="shiki"><span>E102</span></code> (<code class="shiki"><span>E1</span></code> + <code class="shiki"><span>02</span></code>) のようになります。</p><p>このコードを下の入力欄に入れて、<strong>変換</strong> を押してください。右側の記号をコピーして、Minecraft に貼り付けできます。</p><div><form><input id="hexValue" placeholder="16 進値" class="button" style="${ssrRenderStyle({ "background": "none", "outline": "none" })}"><input id="result" placeholder="結果" readonly class="button" style="${ssrRenderStyle({ "background": "none", "outline": "none", "margin-inline": "0.5em" })}"><button type="button" class="button" style="${ssrRenderStyle({ "cursor": "pointer" })}" onclick="document.getElementById(&#39;result&#39;).value = String.fromCodePoint(parseInt(document.getElementById(&#39;hexValue&#39;).value, 16))"> 変換 </button></form></div><p>代わりに、<strong><a href="https://everythingfonts.com/unicode/0xE300" target="_blank" rel="noreferrer">ここ</a></strong> のウェブサイトや、@NhanAZ が作成した <strong><a href="https://nhanaz.github.io/glyph/" target="_blank" rel="noreferrer">Glyph Web Tool</a></strong> を使って、文字や記号を取得することもできます。</p><h2 id="絵文字の位置調整" tabindex="-1">絵文字の位置調整 <a class="header-anchor" href="#絵文字の位置調整" aria-label="Permalink to &quot;絵文字の位置調整&quot;">​</a></h2><ul><li>絵文字を上下に動かしたい場合は、自分の絵文字スロット内で上下に移動させるだけです。</li><li>絵文字を左右に動かしたい場合は、移動させたい方向とは反対側の端に、5〜10% の不透明度のピクセルを 1 つ追加します (同じスロット内で)。 <ul><li>例: 絵文字を右に 2 ピクセル動かしたい場合は、左端のどこかに 5〜10% の不透明度のピクセルを 1 つ接続し、その左側にもう 1 つ追加します。</li></ul></li></ul><p><em>注: 以下の手順は、スロット幅をすべて使い切らない絵文字 (つまりスロットサイズより小さいもの) にのみ適用されます。</em></p><h2 id="グリフ間の余白" tabindex="-1">グリフ間の余白 <a class="header-anchor" href="#グリフ間の余白" aria-label="Permalink to &quot;グリフ間の余白&quot;">​</a></h2><p>ゲーム内で 2 つのグリフを近接して表示すると、その間に空白のピクセルが少し残ることがあります。これを直す方法は、元々複数スロットにまたがる絵文字が 1 つのスロットに収まるように、グリフ (PNG ファイル) を拡大縮小することだけです。</p><p>たとえば、<code class="shiki"><span>glyph_E1</span></code> ファイルで 16×16 スロットを 2 つ使って絵文字を作った場合、デフォルトファイルの解像度を 2 倍にして (<strong>256×256</strong> から <strong>512×512</strong> へ)、拡大後のグリフファイル内の <strong>32×32</strong> スロットの 1 つに <strong>16×32</strong> の絵文字を配置します。</p><h2 id="絵文字のリサイズ" tabindex="-1">絵文字のリサイズ <a class="header-anchor" href="#絵文字のリサイズ" aria-label="Permalink to &quot;絵文字のリサイズ&quot;">​</a></h2><p>絵文字のサイズを変更するには、グリフ (PNG ファイル) の解像度を 512×512 にします。解像度を 2 倍にするのは、ピクセル数が増えて編集スペースが広がるためです。これが終わったら、好みの画像編集ソフトで新しい絵文字を選び、サイズを変更して、絵文字スロットの中央に配置します。そうすると、ゲーム内で使うときに絵文字の周囲に余白ができます。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("text/custom-emojis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customEmojis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customEmojis as default
};
