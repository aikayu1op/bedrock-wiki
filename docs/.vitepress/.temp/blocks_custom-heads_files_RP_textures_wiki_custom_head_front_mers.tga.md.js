import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RP/textures/wiki/custom_head_front_mers.tga | Custom Heads","description":"","frontmatter":{"title":"RP/textures/wiki/custom_head_front_mers.tga | Custom Heads","show_contributors":false,"license":{"code":"MIT"}},"headers":[],"params":{"file":"blocks/custom-heads/files/RP/textures/wiki/custom_head_front_mers.tga","name":"custom_head_front_mers.tga","path":"RP/textures/wiki/custom_head_front_mers.tga","sourcePath":"rp\\\\textures\\\\wiki\\\\custom_head_front_mers.tga","example":{"id":"custom_heads","files":["BP/blocks/custom_head.json","BP/items/custom_head.json","BP/scripts/headDrops.js","BP/scripts/index.js","BP/scripts/intercardinalOrientation.js","BP/contents.json","BP/manifest.json","BP/pack_icon.png","RP/models/blocks/custom_head.geo.json","RP/texts/en_US.lang","RP/texts/languages.json","RP/textures/wiki/custom_head_back_mers.tga","RP/textures/wiki/custom_head_back.png","RP/textures/wiki/custom_head_back.texture_set.json","RP/textures/wiki/custom_head_bottom_mers.tga","RP/textures/wiki/custom_head_bottom.png","RP/textures/wiki/custom_head_bottom.texture_set.json","RP/textures/wiki/custom_head_front_mers.tga","RP/textures/wiki/custom_head_front.png","RP/textures/wiki/custom_head_front.texture_set.json","RP/textures/wiki/custom_head_left_mers.tga","RP/textures/wiki/custom_head_left.png","RP/textures/wiki/custom_head_left.texture_set.json","RP/textures/wiki/custom_head_right_mers.tga","RP/textures/wiki/custom_head_right.png","RP/textures/wiki/custom_head_right.texture_set.json","RP/textures/wiki/custom_head_top_mers.tga","RP/textures/wiki/custom_head_top.png","RP/textures/wiki/custom_head_top.texture_set.json","RP/textures/terrain_texture.json","RP/textures/textures_list.json","RP/blocks.json","RP/contents.json","RP/manifest.json","RP/pack_icon.png"],"archive":{"root":"","type":"mcaddon"}},"root":{"title":"Custom Heads","path":"blocks/custom-heads","type":"page"}},"relativePath":"blocks/custom-heads/files/RP/textures/wiki/custom_head_front_mers.tga.md","filePath":"[file].md"}');
const _sfc_main = { name: "blocks/custom-heads/files/RP/textures/wiki/custom_head_front_mers.tga.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WikiImage = resolveComponent("WikiImage");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAf0lEQVR4ASXBzwrBcAAA4M/89ocWLXJwcZmrJ1OewGt4D4/jsiip3RZxYJO07xtwRIUOa72HXhCIEaHBCSk2uPsLnNGgQ4UcNWKsRNwwQYw5AlLMcBVRYIc9WoywxxaZAQfckKHEFxc8sRQIWGCKF1qUqJEI5CjwwRhvBCQY+gFLrBppma7bBwAAAABJRU5ErkJggg==",
    alt: "",
    caption: "RP/textures/wiki/custom_head_front_mers.tga",
    pixelated: ""
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blocks/custom-heads/files/RP/textures/wiki/custom_head_front_mers.tga.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const custom_head_front_mers_tga = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  custom_head_front_mers_tga as default
};
