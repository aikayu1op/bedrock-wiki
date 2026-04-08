import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RP/textures/wiki/blocks/custom_crop_0.png | Custom Crops","description":"","frontmatter":{"title":"RP/textures/wiki/blocks/custom_crop_0.png | Custom Crops","show_contributors":false,"license":{"code":"MIT"}},"headers":[],"params":{"file":"blocks/custom-crops/files/RP/textures/wiki/blocks/custom_crop_0.png","name":"custom_crop_0.png","path":"RP/textures/wiki/blocks/custom_crop_0.png","sourcePath":"rp\\\\textures\\\\wiki\\\\blocks\\\\custom_crop_0.png","example":{"id":"custom_crops","files":["BP/blocks/custom_crop.json","BP/items/custom_food.json","BP/items/custom_seeds.json","BP/loot_tables/wiki/blocks/custom_crop_mature.json","BP/loot_tables/wiki/blocks/custom_crop_young.json","BP/scripts/cropGrowth.js","BP/scripts/index.js","BP/contents.json","BP/manifest.json","BP/pack_icon.png","RP/models/blocks/custom_crop.geo.json","RP/texts/en_US.lang","RP/texts/languages.json","RP/textures/wiki/blocks/custom_crop_0.png","RP/textures/wiki/blocks/custom_crop_1.png","RP/textures/wiki/blocks/custom_crop_2.png","RP/textures/wiki/blocks/custom_crop_3.png","RP/textures/wiki/items/custom_food.png","RP/textures/wiki/items/custom_seeds.png","RP/textures/item_texture.json","RP/textures/terrain_texture.json","RP/textures/textures_list.json","RP/blocks.json","RP/contents.json","RP/manifest.json","RP/pack_icon.png"],"archive":{"root":"","type":"mcaddon"}},"root":{"title":"Custom Crops","path":"blocks/custom-crops","type":"page"}},"relativePath":"blocks/custom-crops/files/RP/textures/wiki/blocks/custom_crop_0.png.md","filePath":"[file].md"}');
const _sfc_main = { name: "blocks/custom-crops/files/RP/textures/wiki/blocks/custom_crop_0.png.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WikiImage = resolveComponent("WikiImage");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtSURBVDjLY2AYBaNgFNAWaBdo/ffq1/gPYoNoEB+vBrVkVbgiEE0MH6dBpPABuAsd3OD0ZTYAAAAASUVORK5CYII=",
    alt: "",
    caption: "RP/textures/wiki/blocks/custom_crop_0.png",
    pixelated: ""
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blocks/custom-crops/files/RP/textures/wiki/blocks/custom_crop_0.png.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const custom_crop_0_png = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  custom_crop_0_png as default
};
