import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"スプラッシュテキスト","description":"Minecraft に独自のスプラッシュテキストを追加する方法を学びます。","frontmatter":{"title":"スプラッシュテキスト","description":"Minecraft に独自のスプラッシュテキストを追加する方法を学びます。","category":"General","license":true,"mentions":["Peawies","QuazChick"]},"headers":[{"level":2,"title":"スプラッシュの編集","slug":"スプラッシュの編集","link":"#スプラッシュの編集","children":[]}],"relativePath":"text/splashes.md","filePath":"text/splashes.md"}');
const _sfc_main = { name: "text/splashes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_WikiImage = resolveComponent("WikiImage");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>スプラッシュは、タイトル画面で Minecraft のロゴの横に表示される黄色いテキストです。 Minecraft には元からたくさんのスプラッシュテキストがありますが、これらも変更できます。</p><h2 id="スプラッシュの編集" tabindex="-1">スプラッシュの編集 <a class="header-anchor" href="#スプラッシュの編集" aria-label="Permalink to &quot;スプラッシュの編集&quot;">​</a></h2><p>カスタムスプラッシュテキストの作成はとても簡単です。リソースパック内に <code class="shiki"><span>splashes.json</span></code> ファイルを作成して編集するだけです。スプラッシュテキストは書式設定 (<code class="shiki"><span>§</span></code>) にも対応しています。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RP/splashes.json`);
      } else {
        return [
          createTextVNode("RP/splashes.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;canMerge&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;splashes&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">        &quot;my custom splash text&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">        &quot;and my second custom splash text!&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">        &quot;§4red §rand §agreen §rsplash text&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">        &quot;§l§kblablabla&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "splash_text_example.png",
    caption: "スプラッシュテキストの例",
    width: "400"
  }, null, _parent));
  _push(`<p><code class="shiki"><span>canMerge</span></code> パラメータは、ゲームがバニラのスプラッシュテキストとカスタムスプラッシュテキストを一緒に表示するかどうかを決めます。 このパラメータを <code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">true</span></code> にすると、スプラッシュテキストはバニラとカスタムの両方から選ばれます。 このパラメータを省略するか <code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span></code> にすると、スプラッシュテキストはカスタムのものだけから選ばれます。</p><p><code class="shiki"><span>canMerge</span></code> を <code class="shiki"><span>false</span></code> にした状態で <code class="shiki"><span>splashes</span></code> 配列を空にすると、ゲームはスプラッシュテキストを一切表示しません。</p><p>スプラッシュテキストの長さに上限はありませんが、長すぎると複数行に分割されたり、読めないほど小さくなったりします。</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "long_splash_text_example.png",
    caption: "長いスプラッシュテキストの例",
    width: "400"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("text/splashes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const splashes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  splashes as default
};
