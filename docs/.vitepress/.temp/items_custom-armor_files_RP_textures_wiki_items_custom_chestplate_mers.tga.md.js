import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RP/textures/wiki/items/custom_chestplate_mers.tga | カスタムアーマー","description":"","frontmatter":{"title":"RP/textures/wiki/items/custom_chestplate_mers.tga | カスタムアーマー","show_contributors":false,"license":{"code":"MIT"}},"headers":[],"params":{"file":"items/custom-armor/files/RP/textures/wiki/items/custom_chestplate_mers.tga","name":"custom_chestplate_mers.tga","path":"RP/textures/wiki/items/custom_chestplate_mers.tga","sourcePath":"rp\\\\textures\\\\wiki\\\\items\\\\custom_chestplate_mers.tga","example":{"id":"custom_armor","files":["BP/items/custom_boots.json","BP/items/custom_chestplate.json","BP/items/custom_helmet.json","BP/items/custom_leggings.json","BP/contents.json","BP/manifest.json","BP/pack_icon.png","RP/attachables/custom_boots.json","RP/attachables/custom_chestplate.json","RP/attachables/custom_helmet.json","RP/attachables/custom_leggings.json","RP/texts/en_US.lang","RP/texts/languages.json","RP/textures/wiki/items/custom_boots_mers.tga","RP/textures/wiki/items/custom_boots.png","RP/textures/wiki/items/custom_boots.texture_set.json","RP/textures/wiki/items/custom_chestplate_mers.tga","RP/textures/wiki/items/custom_chestplate.png","RP/textures/wiki/items/custom_chestplate.texture_set.json","RP/textures/wiki/items/custom_helmet_mers.tga","RP/textures/wiki/items/custom_helmet.png","RP/textures/wiki/items/custom_helmet.texture_set.json","RP/textures/wiki/items/custom_leggings_mers.tga","RP/textures/wiki/items/custom_leggings.png","RP/textures/wiki/items/custom_leggings.texture_set.json","RP/textures/wiki/models/armor/custom_1_mers.tga","RP/textures/wiki/models/armor/custom_1.png","RP/textures/wiki/models/armor/custom_1.texture_set.json","RP/textures/wiki/models/armor/custom_2_mers.tga","RP/textures/wiki/models/armor/custom_2.png","RP/textures/wiki/models/armor/custom_2.texture_set.json","RP/textures/wiki/models/armor/custom_baby_mers.tga","RP/textures/wiki/models/armor/custom_baby.png","RP/textures/wiki/models/armor/custom_baby.texture_set.json","RP/textures/item_texture.json","RP/textures/textures_list.json","RP/contents.json","RP/manifest.json","RP/pack_icon.png"],"archive":{"root":"","type":"mcaddon"}},"root":{"title":"カスタムアーマー","path":"items/custom-armor","type":"page"}},"relativePath":"items/custom-armor/files/RP/textures/wiki/items/custom_chestplate_mers.tga.md","filePath":"[file].md"}');
const _sfc_main = { name: "items/custom-armor/files/RP/textures/wiki/items/custom_chestplate_mers.tga.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WikiImage = resolveComponent("WikiImage");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6ElEQVR4AaXBIW7CUAAA0Adp0slfNfMdCUHVTiJ6jkoutUoMl+ASVSCaIOpXi1vTMTb4dby3YO0VSy/KTBqpnUeN1E7m7lBSRELPR2vWoaSIhJ6P1mjproiEFbacSxp/GpxLii1hhegmcxeMKhy5RJOmNTmXDJFgVKFzk7l777l+MuCrR+QSTYJRbxI68t5NZvKGTcsJA4qIFcGTnhyb1k1mUvuxbzmXWBEqqZ5NS+3XUiIYVVIVwbOlWeEodTQjkwgYOonQmZFJ5AhGnUTu2YK1R3ucSq4e5di01P5bsJbam1d7tmDtFd8zizLGfMHtFwAAAABJRU5ErkJggg==",
    alt: "",
    caption: "RP/textures/wiki/items/custom_chestplate_mers.tga",
    pixelated: ""
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("items/custom-armor/files/RP/textures/wiki/items/custom_chestplate_mers.tga.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const custom_chestplate_mers_tga = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  custom_chestplate_mers_tga as default
};
