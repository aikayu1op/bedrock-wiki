import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RP/texts/en_US.lang | Block Models","description":"","frontmatter":{"title":"RP/texts/en_US.lang | Block Models","show_contributors":false,"license":{"code":"MIT"}},"headers":[],"params":{"file":"blocks/block-models/files/RP/texts/en_US.lang","name":"en_US.lang","path":"RP/texts/en_US.lang","sourcePath":"rp\\\\texts\\\\en_US.lang","example":{"id":"block_models","files":["BP/blocks/paper_bag.json","BP/contents.json","BP/manifest.json","BP/pack_icon.png","RP/models/blocks/paper_bag.geo.json","RP/texts/en_US.lang","RP/texts/languages.json","RP/textures/wiki/blocks/paper_bag_bottom_fold_mer.png","RP/textures/wiki/blocks/paper_bag_bottom_fold.png","RP/textures/wiki/blocks/paper_bag_bottom_fold.texture_set.json","RP/textures/wiki/blocks/paper_bag_mer.png","RP/textures/wiki/blocks/paper_bag_side_gusset_mer.png","RP/textures/wiki/blocks/paper_bag_side_gusset.png","RP/textures/wiki/blocks/paper_bag_side_gusset.texture_set.json","RP/textures/wiki/blocks/paper_bag.png","RP/textures/wiki/blocks/paper_bag.texture_set.json","RP/textures/terrain_texture.json","RP/textures/textures_list.json","RP/blocks.json","RP/contents.json","RP/manifest.json","RP/pack_icon.png"],"archive":{"root":"","type":"mcaddon"}},"root":{"title":"Block Models","path":"blocks/block-models","type":"page"}},"relativePath":"blocks/block-models/files/RP/texts/en_US.lang.md","filePath":"[file].md"}');
const _sfc_main = { name: "blocks/block-models/files/RP/texts/en_US.lang.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RP/texts/en_US.lang`);
      } else {
        return [
          createTextVNode("RP/texts/en_US.lang")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-lang vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">lang</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">tile.wiki:paper_bag.name</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">=</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">Paper Bag</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blocks/block-models/files/RP/texts/en_US.lang.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const en_US_lang = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  en_US_lang as default
};
