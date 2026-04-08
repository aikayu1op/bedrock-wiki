import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BP/scripts/index.js | Custom Heads","description":"","frontmatter":{"title":"BP/scripts/index.js | Custom Heads","show_contributors":false,"license":{"code":"MIT"}},"headers":[],"params":{"file":"blocks/custom-heads/files/BP/scripts/index.js","name":"index.js","path":"BP/scripts/index.js","sourcePath":"bp\\\\scripts\\\\index.js","example":{"id":"custom_heads","files":["BP/blocks/custom_head.json","BP/items/custom_head.json","BP/scripts/headDrops.js","BP/scripts/index.js","BP/scripts/intercardinalOrientation.js","BP/contents.json","BP/manifest.json","BP/pack_icon.png","RP/models/blocks/custom_head.geo.json","RP/texts/en_US.lang","RP/texts/languages.json","RP/textures/wiki/custom_head_back_mers.tga","RP/textures/wiki/custom_head_back.png","RP/textures/wiki/custom_head_back.texture_set.json","RP/textures/wiki/custom_head_bottom_mers.tga","RP/textures/wiki/custom_head_bottom.png","RP/textures/wiki/custom_head_bottom.texture_set.json","RP/textures/wiki/custom_head_front_mers.tga","RP/textures/wiki/custom_head_front.png","RP/textures/wiki/custom_head_front.texture_set.json","RP/textures/wiki/custom_head_left_mers.tga","RP/textures/wiki/custom_head_left.png","RP/textures/wiki/custom_head_left.texture_set.json","RP/textures/wiki/custom_head_right_mers.tga","RP/textures/wiki/custom_head_right.png","RP/textures/wiki/custom_head_right.texture_set.json","RP/textures/wiki/custom_head_top_mers.tga","RP/textures/wiki/custom_head_top.png","RP/textures/wiki/custom_head_top.texture_set.json","RP/textures/terrain_texture.json","RP/textures/textures_list.json","RP/blocks.json","RP/contents.json","RP/manifest.json","RP/pack_icon.png"],"archive":{"root":"","type":"mcaddon"}},"root":{"title":"Custom Heads","path":"blocks/custom-heads","type":"page"}},"relativePath":"blocks/custom-heads/files/BP/scripts/index.js.md","filePath":"[file].md"}');
const _sfc_main = { name: "blocks/custom-heads/files/BP/scripts/index.js.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/scripts/index.js`);
      } else {
        return [
          createTextVNode("BP/scripts/index.js")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">import</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"> &#39;./headDrops.js&#39;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">import</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"> &#39;./intercardinalOrientation.js&#39;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blocks/custom-heads/files/BP/scripts/index.js.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_js = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index_js as default
};
