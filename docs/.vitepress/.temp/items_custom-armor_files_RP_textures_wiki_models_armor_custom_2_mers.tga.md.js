import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RP/textures/wiki/models/armor/custom_2_mers.tga | カスタムアーマー","description":"","frontmatter":{"title":"RP/textures/wiki/models/armor/custom_2_mers.tga | カスタムアーマー","show_contributors":false,"license":{"code":"MIT"}},"headers":[],"params":{"file":"items/custom-armor/files/RP/textures/wiki/models/armor/custom_2_mers.tga","name":"custom_2_mers.tga","path":"RP/textures/wiki/models/armor/custom_2_mers.tga","sourcePath":"rp\\\\textures\\\\wiki\\\\models\\\\armor\\\\custom_2_mers.tga","example":{"id":"custom_armor","files":["BP/items/custom_boots.json","BP/items/custom_chestplate.json","BP/items/custom_helmet.json","BP/items/custom_leggings.json","BP/contents.json","BP/manifest.json","BP/pack_icon.png","RP/attachables/custom_boots.json","RP/attachables/custom_chestplate.json","RP/attachables/custom_helmet.json","RP/attachables/custom_leggings.json","RP/texts/en_US.lang","RP/texts/languages.json","RP/textures/wiki/items/custom_boots_mers.tga","RP/textures/wiki/items/custom_boots.png","RP/textures/wiki/items/custom_boots.texture_set.json","RP/textures/wiki/items/custom_chestplate_mers.tga","RP/textures/wiki/items/custom_chestplate.png","RP/textures/wiki/items/custom_chestplate.texture_set.json","RP/textures/wiki/items/custom_helmet_mers.tga","RP/textures/wiki/items/custom_helmet.png","RP/textures/wiki/items/custom_helmet.texture_set.json","RP/textures/wiki/items/custom_leggings_mers.tga","RP/textures/wiki/items/custom_leggings.png","RP/textures/wiki/items/custom_leggings.texture_set.json","RP/textures/wiki/models/armor/custom_1_mers.tga","RP/textures/wiki/models/armor/custom_1.png","RP/textures/wiki/models/armor/custom_1.texture_set.json","RP/textures/wiki/models/armor/custom_2_mers.tga","RP/textures/wiki/models/armor/custom_2.png","RP/textures/wiki/models/armor/custom_2.texture_set.json","RP/textures/wiki/models/armor/custom_baby_mers.tga","RP/textures/wiki/models/armor/custom_baby.png","RP/textures/wiki/models/armor/custom_baby.texture_set.json","RP/textures/item_texture.json","RP/textures/textures_list.json","RP/contents.json","RP/manifest.json","RP/pack_icon.png"],"archive":{"root":"","type":"mcaddon"}},"root":{"title":"カスタムアーマー","path":"items/custom-armor","type":"page"}},"relativePath":"items/custom-armor/files/RP/textures/wiki/models/armor/custom_2_mers.tga.md","filePath":"[file].md"}');
const _sfc_main = { name: "items/custom-armor/files/RP/textures/wiki/models/armor/custom_2_mers.tga.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WikiImage = resolveComponent("WikiImage");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgCAYAAACinX6EAAABjUlEQVR4AeXBPUqcURQA0DOPKS6D8Bq7wNcIKQSb2YGLskyVMjtIWvfhDrKDNMJ0aR5Y3CqGzEU/8tOJAeeds+G9mTWTaybXTK6ZXDO5ZnLN5JrJNZNrJtdMrplcM7lmcs3ktv5w5+bRUSBd+7Rxwpp/usVXhFPX/CWwx2IGW/+0N4vNnS+PnoWSSiCVUFIJv1z7uPGGNUcPOCiJAw5WB3xDKgd8dwq2BB6UVIaSCAzlQhnKmbeukRhWgY6OQKKjI62GU9AcDQwEUulIq6EkOrpT0Ags6FYd90ooi991p6CRGOhIBO6xIJDKPULpGAhv3dazgTMkFiUR6Eoqw5M7N4+OQkkllFQCiUAilLQKJMKTax83XtHW0QVSCX87x5kSuEAilVvscal8VhYsVpdI3GKPvXJrdY5FufTattc+bbzAnQ+P7LEogQVXSlcGAok9FiQC57hSujL8D1svllgwcI7Egm41lERgwcCZcoVuNZTw2rZebIcHdDTs0DHwDjurnVXHDj+UgXfYWaXX9hOgalqZi+cLBAAAAABJRU5ErkJggg==",
    alt: "",
    caption: "RP/textures/wiki/models/armor/custom_2_mers.tga",
    pixelated: ""
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("items/custom-armor/files/RP/textures/wiki/models/armor/custom_2_mers.tga.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const custom_2_mers_tga = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  custom_2_mers_tga as default
};
