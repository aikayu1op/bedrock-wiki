import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0$1 } from "./8.CUqnGdP3.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/images/commands/compass-display/demo.gif";
const __pageData = JSON.parse('{"title":"コンパス表示","description":"コマンドを使ってコンパス表示を作成します。","frontmatter":{"title":"コンパス表示","category":"Useful Creations","tags":["easy"],"mentions":["BedrockCommands","fantasy9967"],"description":"コマンドを使ってコンパス表示を作成します。"},"headers":[{"level":2,"title":"はじめに","slug":"はじめに","link":"#はじめに","children":[]},{"level":2,"title":"コマンド","slug":"コマンド","link":"#コマンド","children":[]}],"relativePath":"commands/compass-display.md","filePath":"commands/compass-display.md"}');
const _sfc_main = { name: "commands/compass-display.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h2><p><a href="https://bedrockcommands.org/" target="_blank" rel="noreferrer">Bedrock Commands Community (BCC) Discord が出典です</a></p><p>コマンドを使って、アクションバーにコンパス表示を出します。</p><p><img${ssrRenderAttr("src", _imports_0)} alt="デモ GIF"></p><h2 id="コマンド" tabindex="-1">コマンド <a class="header-anchor" href="#コマンド" aria-label="Permalink to &quot;コマンド&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/displays/compass.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/displays/compass.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">title @a[rym=157.5,ry=-157.5] actionbar North (N)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">title @a[rym=-22.5,ry=22.5] actionbar South (S)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">title @a[rym=-112.5,ry=-67.5] actionbar East (E)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">title @a[rym=67.5,ry=112.5] actionbar West (W)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">title @a[rym=-157.5,ry=-112.5] actionbar Northeast (NE)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">title @a[rym=112.5,ry=157.5] actionbar Northwest (NW)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">title @a[rym=-67.5,ry=-22.5] actionbar Southeast (SE)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">title @a[rym=22.5,ry=67.5] actionbar Southwest (SW)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img${ssrRenderAttr("src", _imports_0$1)} alt="Chain of 8 Command Blocks"></p><p>回転セレクター引数 <code class="shiki"><span>ry</span></code> と <code class="shiki"><span>rym</span></code> の仕組みを理解するには、<strong><a href="/commands/selectors#rotation">こちら</a></strong> を参照してください。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>上記のコマンドは、<strong><a href="/commands/detect-movements#is-sneaking">しゃがみ判定</a></strong> や <strong><a href="/commands/selectors#items">hasitem</a></strong> セレクター引数と組み合わせることで、表示の発動条件を追加できます。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("commands/compass-display.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const compassDisplay = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  compassDisplay as default
};
