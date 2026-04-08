import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"高度なマニフェスト","description":"マニフェストの扱い方をより詳しく解説するガイド [作成中]","frontmatter":{"title":"高度なマニフェスト","category":"Extra","description":"マニフェストの扱い方をより詳しく解説するガイド [作成中]","nav_order":4,"prefix":"d. ","mentions":["MRBBATES1","Lufurrius","SirLich","smell-of-curry","MedicalJewel105","QuazChick"]},"headers":[{"level":2,"title":"UUID とは","slug":"uuid-とは","link":"#uuid-とは","children":[{"level":3,"title":"正しい UUID の生成方法","slug":"正しい-uuid-の生成方法","link":"#正しい-uuid-の生成方法","children":[]}]},{"level":2,"title":"","slug":"","link":"#","children":[{"level":3,"title":"UUID FAQ","slug":"uuid-faq","link":"#uuid-faq","children":[]}]}],"relativePath":"guide/advancedmanifest.md","filePath":"guide/advancedmanifest.md"}');
const _sfc_main = { name: "guide/advancedmanifest.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>これは付録ページです。ガイドの最初から始めるなら<a href="/guide/introduction">ここ</a>です。</p></div><p>このページでは、manifest.json ファイルについてより詳しく説明します。ここでは UUID とは何か、そしてそれをどう追加するかを詳しく扱います。さらに、依存関係、さまざまな format version、メタデータの含め方についても説明します。</p><p>あわせて、Behavior pack、Resource pack、Skin pack の違いについても説明します。</p><h2 id="uuid-とは" tabindex="-1">UUID とは <a class="header-anchor" href="#uuid-とは" aria-label="Permalink to &quot;UUID とは&quot;">​</a></h2><p>UUID は Universal Unique Identifier の略です。UUID には 5 つのバージョンと、1 つの一般的な非公式版があります。UUID は数字、文字、ダッシュを含む 36 文字の文字列です。</p><p>Minecraft が使うのは Version 4: Variant 1 で、完全なランダム値です。これが Minecraft 内であなたのパックを一意に識別するものになります。</p><h3 id="正しい-uuid-の生成方法" tabindex="-1">正しい UUID の生成方法 <a class="header-anchor" href="#正しい-uuid-の生成方法" aria-label="Permalink to &quot;正しい UUID の生成方法&quot;">​</a></h3><p><a href="https://www.uuidgenerator.net/version4/" target="_blank" rel="noreferrer">UUID Generator</a> や <a href="https://www.uuidtools.com/generate/v4" target="_blank" rel="noreferrer">UUID Tools</a> のようなオンラインサイトを使って、Minecraft に必要な正しいバージョンの UUID を生成できます。</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><h3 id="uuid-faq" tabindex="-1">UUID FAQ <a class="header-anchor" href="#uuid-faq" aria-label="Permalink to &quot;UUID FAQ&quot;">​</a></h3><ul><li><p><strong>UUID は大文字・小文字を区別しますか？</strong></p><ul><li><em>いいえ。UUID は 16 進数で書かれ、0-9 の数字と a-f の文字を使います。大文字と小文字の区別はありません。</em></li></ul></li><li><p><strong>header 用 UUID と modules 用 UUID を同じにできますか？</strong></p><ul><li><em>いいえ。header 用と module 用の UUID は別々である必要があります。</em></li></ul></li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>このページは作成中です！</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/advancedmanifest.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const advancedmanifest = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  advancedmanifest as default
};
