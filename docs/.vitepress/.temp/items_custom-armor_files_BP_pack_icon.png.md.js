import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BP/pack_icon.png | カスタムアーマー","description":"","frontmatter":{"title":"BP/pack_icon.png | カスタムアーマー","show_contributors":false,"license":{"code":"MIT"}},"headers":[],"params":{"file":"items/custom-armor/files/BP/pack_icon.png","name":"pack_icon.png","path":"BP/pack_icon.png","sourcePath":"bp\\\\pack_icon.png","example":{"id":"custom_armor","files":["BP/items/custom_boots.json","BP/items/custom_chestplate.json","BP/items/custom_helmet.json","BP/items/custom_leggings.json","BP/contents.json","BP/manifest.json","BP/pack_icon.png","RP/attachables/custom_boots.json","RP/attachables/custom_chestplate.json","RP/attachables/custom_helmet.json","RP/attachables/custom_leggings.json","RP/texts/en_US.lang","RP/texts/languages.json","RP/textures/wiki/items/custom_boots_mers.tga","RP/textures/wiki/items/custom_boots.png","RP/textures/wiki/items/custom_boots.texture_set.json","RP/textures/wiki/items/custom_chestplate_mers.tga","RP/textures/wiki/items/custom_chestplate.png","RP/textures/wiki/items/custom_chestplate.texture_set.json","RP/textures/wiki/items/custom_helmet_mers.tga","RP/textures/wiki/items/custom_helmet.png","RP/textures/wiki/items/custom_helmet.texture_set.json","RP/textures/wiki/items/custom_leggings_mers.tga","RP/textures/wiki/items/custom_leggings.png","RP/textures/wiki/items/custom_leggings.texture_set.json","RP/textures/wiki/models/armor/custom_1_mers.tga","RP/textures/wiki/models/armor/custom_1.png","RP/textures/wiki/models/armor/custom_1.texture_set.json","RP/textures/wiki/models/armor/custom_2_mers.tga","RP/textures/wiki/models/armor/custom_2.png","RP/textures/wiki/models/armor/custom_2.texture_set.json","RP/textures/wiki/models/armor/custom_baby_mers.tga","RP/textures/wiki/models/armor/custom_baby.png","RP/textures/wiki/models/armor/custom_baby.texture_set.json","RP/textures/item_texture.json","RP/textures/textures_list.json","RP/contents.json","RP/manifest.json","RP/pack_icon.png"],"archive":{"root":"","type":"mcaddon"}},"root":{"title":"カスタムアーマー","path":"items/custom-armor","type":"page"}},"relativePath":"items/custom-armor/files/BP/pack_icon.png.md","filePath":"[file].md"}');
const _sfc_main = { name: "items/custom-armor/files/BP/pack_icon.png.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WikiImage = resolveComponent("WikiImage");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEABAMAAACuXLVVAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAYUExURTEyMw4vPyCAxUqt7RpjqggbJaHf+////y8kg5cAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuMTITAUd0AAAAuGVYSWZJSSoACAAAAAUAGgEFAAEAAABKAAAAGwEFAAEAAABSAAAAKAEDAAEAAAACAAAAMQECABEAAABaAAAAaYcEAAEAAABsAAAAAAAAAPJ2AQDoAwAA8nYBAOgDAABQYWludC5ORVQgNS4xLjEyAAADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlgAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAACDfy8cctDT3wAAAZJJREFUeNrt3LtOwzAUgOF2YKdIPADlstNKZUewc8sTVOrOAq+Pciw1lhsaiOIB9P1TKlGfbyKVnXY2kyRJkqTfNV8MdAoAAAAAUG92rH+2bFv39tD22LQBAAAAAEw8Ot0AYvTNru2z7SMuM0D8wVUwQvEEAAAAADAxIIZsdvu23ejVsggAAAAAoB4gVW6LnMfAuAvcAwAAAABUBtzGZfN9LwAAAAAAkwEOTgh/Bnjrdkieu/eOOU0EAAAAAEiA2JZ+j8v4J3/dDJQBXruP8AAAAAAA4wHZtnS8Tnsh5aLz8g5R7qYAAAAAAIwHrIvSuWHcFi4W+449YwcAAADw1wHZUVwsdxcfk3dF23JqvCE91wYAAAAAMBpwUm46DE7Nyr7tEY05wQMAAAAAOLBks9dDTTEVAAAAAOAAECtvhgCrGk/TAQAAAABkgMEAAAAAACoCYuXLI7OXXQAAAAAAVQDZEeKRqvwcEAAAAABAKhZNR4j9s7PDwolHAwAAAABkZQ929Df1DQAAAAAAQJIkSdL/7wtW+X7DwbyhLwAAAABJRU5ErkJggg==",
    alt: "",
    caption: "BP/pack_icon.png",
    pixelated: ""
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("items/custom-armor/files/BP/pack_icon.png.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pack_icon_png = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pack_icon_png as default
};
