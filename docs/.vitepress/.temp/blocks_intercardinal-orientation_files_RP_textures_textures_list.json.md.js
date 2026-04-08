import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RP/textures/textures_list.json | Intercardinal Orientation","description":"","frontmatter":{"title":"RP/textures/textures_list.json | Intercardinal Orientation","show_contributors":false,"license":{"code":"MIT"}},"headers":[],"params":{"file":"blocks/intercardinal-orientation/files/RP/textures/textures_list.json","name":"textures_list.json","path":"RP/textures/textures_list.json","sourcePath":"rp\\\\textures\\\\textures_list.json","example":{"id":"intercardinal_block_orientation","files":["BP/blocks/mug.json","BP/scripts/index.js","BP/scripts/intercardinalOrientation.js","BP/contents.json","BP/manifest.json","BP/pack_icon.png","RP/models/blocks/mug.geo.json","RP/textures/wiki/blocks/mug_mers.tga","RP/textures/wiki/blocks/mug.png","RP/textures/wiki/blocks/mug.texture_set.json","RP/textures/terrain_texture.json","RP/textures/textures_list.json","RP/blocks.json","RP/contents.json","RP/manifest.json","RP/pack_icon.png"],"archive":{"root":"","type":"mcaddon"}},"root":{"title":"Intercardinal Orientation","path":"blocks/intercardinal-orientation","type":"page"}},"relativePath":"blocks/intercardinal-orientation/files/RP/textures/textures_list.json.md","filePath":"[file].md"}');
const _sfc_main = { name: "blocks/intercardinal-orientation/files/RP/textures/textures_list.json.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
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
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;textures/wiki/blocks/mug&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blocks/intercardinal-orientation/files/RP/textures/textures_list.json.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const textures_list_json = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  textures_list_json as default
};
