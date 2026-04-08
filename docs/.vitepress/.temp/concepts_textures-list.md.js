import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"textures_list.json","description":"textures_list ファイルは、Minecraft が各テクスチャをキャッシュして、textures フォルダー内の各画像を探すより速く取得できるようにする仕組みです。","frontmatter":{"title":"textures_list.json","mentions":["SirLich","solvedDev","Joelant05","AFoxyToast","TheItsNameless"],"description":"textures_list ファイルは、Minecraft が各テクスチャをキャッシュして、textures フォルダー内の各画像を探すより速く取得できるようにする仕組みです。"},"headers":[{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"どのテクスチャを入れるべき？","slug":"どのテクスチャを入れるべき","link":"#どのテクスチャを入れるべき","children":[]},{"level":2,"title":"ファイル構成","slug":"ファイル構成","link":"#ファイル構成","children":[]},{"level":2,"title":"自動化","slug":"自動化","link":"#自動化","children":[]}],"relativePath":"concepts/textures-list.md","filePath":"concepts/textures-list.md"}');
const _sfc_main = { name: "concepts/textures-list.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p>textures list は、Minecraft が各テクスチャを <em>キャッシュ</em> して、textures フォルダー内の各画像を順に探すより速く取得できるようにする仕組みです。 テクスチャが大量にあるときは特に重要で、Minecraft がテクスチャを取り違えたり、まったく読み込まなかったりする可能性を減らせます。</p><p>textures をファイルに列挙していない場合、Minecraft が content log に <em>warning</em> を出すことがあります。 テクスチャ数が少ないなら無視しても構いませんが、それでも一覧には入れておくことが推奨されます。</p><h2 id="どのテクスチャを入れるべき" tabindex="-1">どのテクスチャを入れるべき？ <a class="header-anchor" href="#どのテクスチャを入れるべき" aria-label="Permalink to &quot;どのテクスチャを入れるべき？&quot;">​</a></h2><p>どんなテクスチャでも構いません。ベストプラクティスとパフォーマンスの観点からは、すべてのテクスチャを <code class="shiki"><span>textures_list.json</span></code> に入れるべきです。</p><h2 id="ファイル構成" tabindex="-1">ファイル構成 <a class="header-anchor" href="#ファイル構成" aria-label="Permalink to &quot;ファイル構成&quot;">​</a></h2><p>構成は単純です。ファイル自体は <code class="shiki"><span>RP/textures</span></code> に置き、名前は <code class="shiki"><span>textures_list.json</span></code> です。 ファイルにはテクスチャパスの配列を入れます（<code class="shiki"><span>textures</span></code> フォルダー内のファイルパスで、<code class="shiki"><span>.texture_set.json</span></code> や <code class="shiki"><span>.png</span></code> などの拡張子は除きます）。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RP/textures/textures_list.json`);
      } else {
        return [
          createTextVNode("RP/textures/textures_list.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">[</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;textures/blocks/foo&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;textures/blocks/bar&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;textures/items/foo&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;textures/items/bar&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;textures/models/foo&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;textures/models/bar&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;textures/entity/foo&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;textures/entity/bar&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="自動化" tabindex="-1">自動化 <a class="header-anchor" href="#自動化" aria-label="Permalink to &quot;自動化&quot;">​</a></h2><p>テクスチャが大量にあると、すべてのテクスチャパスを手で列挙するのは面倒です。 その場合は、便利なフィルターを備えた <a href="https://regolith-docs.readthedocs.io" target="_blank" rel="noreferrer">Regolith</a> を使うほうがよいかもしれません。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/textures-list.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const texturesList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  texturesList as default
};
