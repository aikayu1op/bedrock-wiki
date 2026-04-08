import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RP/textures/wiki/blocks/custom_glass.png | カスタムガラス","description":"","frontmatter":{"title":"RP/textures/wiki/blocks/custom_glass.png | カスタムガラス","show_contributors":false,"license":{"code":"MIT"}},"headers":[],"params":{"file":"blocks/custom-glass-blocks/files/RP/textures/wiki/blocks/custom_glass.png","name":"custom_glass.png","path":"RP/textures/wiki/blocks/custom_glass.png","sourcePath":"rp\\\\textures\\\\wiki\\\\blocks\\\\custom_glass.png","example":{"id":"custom_glass","files":["BP/blocks/custom_glass.json","BP/contents.json","BP/manifest.json","BP/pack_icon.png","RP/block_culling/custom_glass.json","RP/models/blocks/custom_glass.geo.json","RP/texts/en_US.lang","RP/texts/languages.json","RP/textures/wiki/blocks/custom_glass.png","RP/textures/terrain_texture.json","RP/textures/textures_list.json","RP/blocks.json","RP/contents.json","RP/manifest.json","RP/pack_icon.png"],"archive":{"root":"","type":"mcaddon"}},"root":{"title":"カスタムガラス","path":"blocks/custom-glass-blocks","type":"page"}},"relativePath":"blocks/custom-glass-blocks/files/RP/textures/wiki/blocks/custom_glass.png.md","filePath":"[file].md"}');
const _sfc_main = { name: "blocks/custom-glass-blocks/files/RP/textures/wiki/blocks/custom_glass.png.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WikiImage = resolveComponent("WikiImage");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuN4vW9zkAAAC2ZVhJZklJKgAIAAAABQAaAQUAAQAAAEoAAAAbAQUAAQAAAFIAAAAoAQMAAQAAAAIAAAAxAQIAEAAAAFoAAABphwQAAQAAAGoAAAAAAAAA8nYBAOgDAADydgEA6AMAAFBhaW50Lk5FVCA1LjEuNwADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlAAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAABCqaniuvll8QAAAN5JREFUOE+NkjEShCAMRT82lOm8QYq9jzdwPJS1jWNj7Uk8B1ClYoud7CBEd3/HSyYDjzhmzqgSQgARXc51tO6YOQ/D8NJCSgnLspz7vl/YNE3nOI4XdhzH2ZUgpaTHholIwwCgUwgAMUbEGOG9b5jVF0L4DFBYp2Te+4YREVzf9xnFFbXxjtXcMXOe5/mnsG3bznVdm75Ov+gfYRYzJVpMRBr2HaBQYwmzmIh8HOgzROSnRGXKzU28E2aJNSWWTU9iRcSWaAm7285OJ5dyNLWwmgGAI6KMh22rayUHgDf5UiX8CbGZoAAAAABJRU5ErkJggg==",
    alt: "",
    caption: "RP/textures/wiki/blocks/custom_glass.png",
    pixelated: ""
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blocks/custom-glass-blocks/files/RP/textures/wiki/blocks/custom_glass.png.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const custom_glass_png = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  custom_glass_png as default
};
