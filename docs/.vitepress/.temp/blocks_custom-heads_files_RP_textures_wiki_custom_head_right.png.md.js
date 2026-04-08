import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RP/textures/wiki/custom_head_right.png | Custom Heads","description":"","frontmatter":{"title":"RP/textures/wiki/custom_head_right.png | Custom Heads","show_contributors":false,"license":{"code":"MIT"}},"headers":[],"params":{"file":"blocks/custom-heads/files/RP/textures/wiki/custom_head_right.png","name":"custom_head_right.png","path":"RP/textures/wiki/custom_head_right.png","sourcePath":"rp\\\\textures\\\\wiki\\\\custom_head_right.png","example":{"id":"custom_heads","files":["BP/blocks/custom_head.json","BP/items/custom_head.json","BP/scripts/headDrops.js","BP/scripts/index.js","BP/scripts/intercardinalOrientation.js","BP/contents.json","BP/manifest.json","BP/pack_icon.png","RP/models/blocks/custom_head.geo.json","RP/texts/en_US.lang","RP/texts/languages.json","RP/textures/wiki/custom_head_back_mers.tga","RP/textures/wiki/custom_head_back.png","RP/textures/wiki/custom_head_back.texture_set.json","RP/textures/wiki/custom_head_bottom_mers.tga","RP/textures/wiki/custom_head_bottom.png","RP/textures/wiki/custom_head_bottom.texture_set.json","RP/textures/wiki/custom_head_front_mers.tga","RP/textures/wiki/custom_head_front.png","RP/textures/wiki/custom_head_front.texture_set.json","RP/textures/wiki/custom_head_left_mers.tga","RP/textures/wiki/custom_head_left.png","RP/textures/wiki/custom_head_left.texture_set.json","RP/textures/wiki/custom_head_right_mers.tga","RP/textures/wiki/custom_head_right.png","RP/textures/wiki/custom_head_right.texture_set.json","RP/textures/wiki/custom_head_top_mers.tga","RP/textures/wiki/custom_head_top.png","RP/textures/wiki/custom_head_top.texture_set.json","RP/textures/terrain_texture.json","RP/textures/textures_list.json","RP/blocks.json","RP/contents.json","RP/manifest.json","RP/pack_icon.png"],"archive":{"root":"","type":"mcaddon"}},"root":{"title":"Custom Heads","path":"blocks/custom-heads","type":"page"}},"relativePath":"blocks/custom-heads/files/RP/textures/wiki/custom_head_right.png.md","filePath":"[file].md"}');
const _sfc_main = { name: "blocks/custom-heads/files/RP/textures/wiki/custom_head_right.png.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WikiImage = resolveComponent("WikiImage");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAbUExURbCYZMmtcNO4febMlJ6LYEtCMVJINVlQO0Y9LDMcBwMAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuMTGKCBbOAAAAuGVYSWZJSSoACAAAAAUAGgEFAAEAAABKAAAAGwEFAAEAAABSAAAAKAEDAAEAAAACAAAAMQECABEAAABaAAAAaYcEAAEAAABsAAAAAAAAAPJ2AQDoAwAA8nYBAOgDAABQYWludC5ORVQgNS4xLjExAAADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlgAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAABc7WH6CeiquwAAADBJREFUGNNjYFQyVmRQYlZwYFAWYgljMGZ0LWdgDAxLZ3BILy9jcItIT2UILU8rAwB5WAgx3fZpZAAAAABJRU5ErkJggg==",
    alt: "",
    caption: "RP/textures/wiki/custom_head_right.png",
    pixelated: ""
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blocks/custom-heads/files/RP/textures/wiki/custom_head_right.png.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const custom_head_right_png = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  custom_head_right_png as default
};
