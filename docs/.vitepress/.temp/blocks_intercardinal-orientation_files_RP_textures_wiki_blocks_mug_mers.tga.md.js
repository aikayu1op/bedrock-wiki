import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RP/textures/wiki/blocks/mug_mers.tga | Intercardinal Orientation","description":"","frontmatter":{"title":"RP/textures/wiki/blocks/mug_mers.tga | Intercardinal Orientation","show_contributors":false,"license":{"code":"MIT"}},"headers":[],"params":{"file":"blocks/intercardinal-orientation/files/RP/textures/wiki/blocks/mug_mers.tga","name":"mug_mers.tga","path":"RP/textures/wiki/blocks/mug_mers.tga","sourcePath":"rp\\\\textures\\\\wiki\\\\blocks\\\\mug_mers.tga","example":{"id":"intercardinal_block_orientation","files":["BP/blocks/mug.json","BP/scripts/index.js","BP/scripts/intercardinalOrientation.js","BP/contents.json","BP/manifest.json","BP/pack_icon.png","RP/models/blocks/mug.geo.json","RP/textures/wiki/blocks/mug_mers.tga","RP/textures/wiki/blocks/mug.png","RP/textures/wiki/blocks/mug.texture_set.json","RP/textures/terrain_texture.json","RP/textures/textures_list.json","RP/blocks.json","RP/contents.json","RP/manifest.json","RP/pack_icon.png"],"archive":{"root":"","type":"mcaddon"}},"root":{"title":"Intercardinal Orientation","path":"blocks/intercardinal-orientation","type":"page"}},"relativePath":"blocks/intercardinal-orientation/files/RP/textures/wiki/blocks/mug_mers.tga.md","filePath":"[file].md"}');
const _sfc_main = { name: "blocks/intercardinal-orientation/files/RP/textures/wiki/blocks/mug_mers.tga.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WikiImage = resolveComponent("WikiImage");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVElEQVR4AcXBwQ2AMAwEwc3JjbktF+C20hriB5ERRH4ww+8GhUlQcZKV8Si5CyqiSTSJJuNR8IVoEk2DwiR44yQnscFJnORKNBkbJsHK2OAkK9F0AL4xCSt5Cu4yAAAAAElFTkSuQmCC",
    alt: "",
    caption: "RP/textures/wiki/blocks/mug_mers.tga",
    pixelated: ""
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blocks/intercardinal-orientation/files/RP/textures/wiki/blocks/mug_mers.tga.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mug_mers_tga = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mug_mers_tga as default
};
