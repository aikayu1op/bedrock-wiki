import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./2.JagmdcKE.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"アイテムドロップの検出","description":"この手法を使うと、プレイヤーがドロップしたアイテムとそれ以外のドロップアイテムを区別できます。","frontmatter":{"title":"アイテムドロップの検出","category":"Detection Systems","tags":["easy"],"mentions":["BedrockCommands","PipiSpamton"],"description":"この手法を使うと、プレイヤーがドロップしたアイテムとそれ以外のドロップアイテムを区別できます。"},"headers":[{"level":2,"title":"はじめに","slug":"はじめに","link":"#はじめに","children":[]},{"level":2,"title":"コマンド","slug":"コマンド","link":"#コマンド","children":[]}],"relativePath":"commands/detect-item-drop.md","filePath":"commands/detect-item-drop.md"}');
const _sfc_main = { name: "commands/detect-item-drop.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h2><p><a href="https://bedrockcommands.org/" target="_blank" rel="noreferrer">Bedrock Commands Community (BCC) Discord が出典です</a></p><p>この手法を使うと、プレイヤーがドロップしたアイテムとそれ以外のドロップアイテムを区別できます。</p><h2 id="コマンド" tabindex="-1">コマンド <a class="header-anchor" href="#コマンド" aria-label="Permalink to &quot;コマンド&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/detect/item/is_dropped_by.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/detect/item/is_dropped_by.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## それ以外のアイテムにタグ付け</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### ちょうど南向き 0°</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">tag @e[type=item,ry=0,rym=0,tag=!wiki:source.player] add wiki:source.other</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## プレイヤーがドロップしたアイテムにタグ付け</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">tag @e[type=item,tag=!wiki:source.other] add wiki:source.player</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img${ssrRenderAttr("src", _imports_0)} alt="Chain of 2 Command Blocks"></p><div class="tip custom-block"><p class="custom-block-title">注</p><p>興味深いことに、南向き 0° のプレイヤーがドロップしたアイテムでも、正しく <code class="shiki"><span>wiki:source.player</span></code> としてタグ付けされます。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("commands/detect-item-drop.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const detectItemDrop = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  detectItemDrop as default
};
