import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"エンティティのビジュアル入門","description":"エンティティの見た目についての入門です。","frontmatter":{"title":"エンティティのビジュアル入門","nav_order":1,"tags":["guide"],"category":"General","mentions":["SirLich","MedicalJewel105","Overload1252"],"description":"エンティティの見た目についての入門です。"},"headers":[{"level":2,"title":"このセクションは何について？","slug":"このセクションは何について","link":"#このセクションは何について","children":[]}],"relativePath":"visuals/introduction.md","filePath":"visuals/introduction.md"}');
const _sfc_main = { name: "visuals/introduction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="このセクションは何について" tabindex="-1">このセクションは何について？ <a class="header-anchor" href="#このセクションは何について" aria-label="Permalink to &quot;このセクションは何について？&quot;">​</a></h2><p>ようこそ、旅人。ここはエンティティのビジュアルに関するセクションです。 ここでは、コンテンツの見た目を改善する方法を学べます。アドオンでは、全体の印象の多くが見た目で決まるため、このセクションは重要です。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("visuals/introduction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const introduction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  introduction as default
};
