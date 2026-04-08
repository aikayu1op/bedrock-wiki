import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RP/texts/en_US.lang | カスタムアーマー","description":"","frontmatter":{"title":"RP/texts/en_US.lang | カスタムアーマー","show_contributors":false,"license":{"code":"MIT"}},"headers":[],"params":{"file":"items/custom-armor/files/RP/texts/en_US.lang","name":"en_US.lang","path":"RP/texts/en_US.lang","sourcePath":"rp\\\\texts\\\\en_US.lang","example":{"id":"custom_armor","files":["BP/items/custom_boots.json","BP/items/custom_chestplate.json","BP/items/custom_helmet.json","BP/items/custom_leggings.json","BP/contents.json","BP/manifest.json","BP/pack_icon.png","RP/attachables/custom_boots.json","RP/attachables/custom_chestplate.json","RP/attachables/custom_helmet.json","RP/attachables/custom_leggings.json","RP/texts/en_US.lang","RP/texts/languages.json","RP/textures/wiki/items/custom_boots_mers.tga","RP/textures/wiki/items/custom_boots.png","RP/textures/wiki/items/custom_boots.texture_set.json","RP/textures/wiki/items/custom_chestplate_mers.tga","RP/textures/wiki/items/custom_chestplate.png","RP/textures/wiki/items/custom_chestplate.texture_set.json","RP/textures/wiki/items/custom_helmet_mers.tga","RP/textures/wiki/items/custom_helmet.png","RP/textures/wiki/items/custom_helmet.texture_set.json","RP/textures/wiki/items/custom_leggings_mers.tga","RP/textures/wiki/items/custom_leggings.png","RP/textures/wiki/items/custom_leggings.texture_set.json","RP/textures/wiki/models/armor/custom_1_mers.tga","RP/textures/wiki/models/armor/custom_1.png","RP/textures/wiki/models/armor/custom_1.texture_set.json","RP/textures/wiki/models/armor/custom_2_mers.tga","RP/textures/wiki/models/armor/custom_2.png","RP/textures/wiki/models/armor/custom_2.texture_set.json","RP/textures/wiki/models/armor/custom_baby_mers.tga","RP/textures/wiki/models/armor/custom_baby.png","RP/textures/wiki/models/armor/custom_baby.texture_set.json","RP/textures/item_texture.json","RP/textures/textures_list.json","RP/contents.json","RP/manifest.json","RP/pack_icon.png"],"archive":{"root":"","type":"mcaddon"}},"root":{"title":"カスタムアーマー","path":"items/custom-armor","type":"page"}},"relativePath":"items/custom-armor/files/RP/texts/en_US.lang.md","filePath":"[file].md"}');
const _sfc_main = { name: "items/custom-armor/files/RP/texts/en_US.lang.md" };
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
  _push(`<div class="language-lang vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">lang</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">item.wiki:custom_helmet</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">=</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">Custom Helmet</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">item.wiki:custom_chestplate</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">=</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">Custom Chestplate</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">item.wiki:custom_leggings</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">=</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">Custom Leggings</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">item.wiki:custom_boots</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">=</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">Custom Boots</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("items/custom-armor/files/RP/texts/en_US.lang.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const en_US_lang = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  en_US_lang as default
};
