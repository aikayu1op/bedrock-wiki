import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RP/textures/wiki/blocks/paper_bag_side_gusset.png | Block Models","description":"","frontmatter":{"title":"RP/textures/wiki/blocks/paper_bag_side_gusset.png | Block Models","show_contributors":false,"license":{"code":"MIT"}},"headers":[],"params":{"file":"blocks/block-models/files/RP/textures/wiki/blocks/paper_bag_side_gusset.png","name":"paper_bag_side_gusset.png","path":"RP/textures/wiki/blocks/paper_bag_side_gusset.png","sourcePath":"rp\\\\textures\\\\wiki\\\\blocks\\\\paper_bag_side_gusset.png","example":{"id":"block_models","files":["BP/blocks/paper_bag.json","BP/contents.json","BP/manifest.json","BP/pack_icon.png","RP/models/blocks/paper_bag.geo.json","RP/texts/en_US.lang","RP/texts/languages.json","RP/textures/wiki/blocks/paper_bag_bottom_fold_mer.png","RP/textures/wiki/blocks/paper_bag_bottom_fold.png","RP/textures/wiki/blocks/paper_bag_bottom_fold.texture_set.json","RP/textures/wiki/blocks/paper_bag_mer.png","RP/textures/wiki/blocks/paper_bag_side_gusset_mer.png","RP/textures/wiki/blocks/paper_bag_side_gusset.png","RP/textures/wiki/blocks/paper_bag_side_gusset.texture_set.json","RP/textures/wiki/blocks/paper_bag.png","RP/textures/wiki/blocks/paper_bag.texture_set.json","RP/textures/terrain_texture.json","RP/textures/textures_list.json","RP/blocks.json","RP/contents.json","RP/manifest.json","RP/pack_icon.png"],"archive":{"root":"","type":"mcaddon"}},"root":{"title":"Block Models","path":"blocks/block-models","type":"page"}},"relativePath":"blocks/block-models/files/RP/textures/wiki/blocks/paper_bag_side_gusset.png.md","filePath":"[file].md"}');
const _sfc_main = { name: "blocks/block-models/files/RP/textures/wiki/blocks/paper_bag_side_gusset.png.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WikiImage = resolveComponent("WikiImage");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkklEQVQ4EdWQMQqEMBBFcxxdFD3cFoKFgo13sLBKsWxh5/WULzyYQhljZ2D4KfLeZCb8+3KztY71Zit4x8K6W1h3jw+xLS5/sAzVPYGV8APBSQJJVIDkrRGAHwnmJj86I6Gz8tcV/g4ksBIEgpMEiABJdweAJCDpCqZvdoxwJojtx9+BBFZCZ8FJAkSApDvC+x/sI5PxPigmWa0AAAAASUVORK5CYII=",
    alt: "",
    caption: "RP/textures/wiki/blocks/paper_bag_side_gusset.png",
    pixelated: ""
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blocks/block-models/files/RP/textures/wiki/blocks/paper_bag_side_gusset.png.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const paper_bag_side_gusset_png = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  paper_bag_side_gusset_png as default
};
