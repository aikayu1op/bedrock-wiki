import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Script API とは？","description":"スクリプトって一体何なの？","frontmatter":{"title":"Script API とは？","category":"General","nav_order":2,"mentions":["conmaster2112","Herobrine643928","JaylyDev","SmokeyStack","ThomasOrs","gdm3"],"description":"スクリプトって一体何なの？"},"headers":[{"level":2,"title":"API","slug":"api","link":"#api","children":[]},{"level":2,"title":"Script API","slug":"script-api","link":"#script-api","children":[]},{"level":2,"title":"API Modules?","slug":"api-modules","link":"#api-modules","children":[]}],"relativePath":"scripting/what-is-script.md","filePath":"scripting/what-is-script.md"}');
const _sfc_main = { name: "scripting/what-is-script.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Script API は現在も活発に開発されており、破壊的変更が頻繁にあります。このページは Minecraft 1.21.20 の形式を前提としています。</p></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><p>API は Application Programming Interface の略で、2つのアプリケーション間でやり取りを成立させるための仕組みです。「アプリケーション」という言葉は、想像以上に幅広いものを含みます。単純なスクリプト、ゲーム、あるいは OS 全体もアプリケーションになりえます。</p><p>日常的に触れている API の例は、まさに目の前にあります。それはアプリケーションと OS の間にある API です。画面上のカーソルがその例です。なぜ API と関係があるのでしょうか。アプリケーションは、OS が提供する API を通じてカーソルが画面のどこにあるかを把握でき、自前でカーソルを実装する必要がないからです。これにより、Minecraft のようなプログラムも API を利用して動作できます。</p><p>要するに、API は 2つ以上のアプリケーション間で行われる相互または一方向のやり取りの仕組みです。</p><h2 id="script-api" tabindex="-1">Script API <a class="header-anchor" href="#script-api" aria-label="Permalink to &quot;Script API&quot;">​</a></h2><p>「Script API」という言葉をどこかで聞いたことがあるかもしれません。この名前の下に何があるのかを知ることは重要です。</p><p>この言葉を聞くと、多くの人はプログラムやスクリプト、あるいはプログラミング言語まで連想するかもしれません（<code class="shiki"><span>Mysterious Experiments in Minecraft? :]</span></code> ）。しかし実際には、これはただの API です。API は Minecraft とやり取りするための関数群です。イベントを受け取り、ブロックを読み取り、エンティティを変更し、パーティクルを生成する、といったことができます。この API は <a href="https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/minecraft-server" target="_blank" rel="noreferrer">公式サイト</a> にも詳しいドキュメントがあります。</p><h2 id="api-modules" tabindex="-1">API Modules? <a class="header-anchor" href="#api-modules" aria-label="Permalink to &quot;API Modules?&quot;">​</a></h2><p>API は機能ごとにいくつかのサブモジュールに分かれています。API の一部の関数は一般ユーザー向けには安全でない場合があるため、サーバーでのみ使えたり、特定の端末では動作しなかったりします。そのため、API 関数を用途別に分けたパッケージを Module と呼んでいます。</p><p>Module 名は、含まれる機能にちなんだものにするべきです。</p><p><a href="https://github.com/JaylyDev/ScriptAPI/tree/main/docs/MinecraftApi#readme" target="_blank" rel="noreferrer">Original Credits</a> - Written by <a href="https://github.com/conmaster2112" target="_blank" rel="noreferrer">ConMaster2112</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("scripting/what-is-script.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const whatIsScript = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  whatIsScript as default
};
