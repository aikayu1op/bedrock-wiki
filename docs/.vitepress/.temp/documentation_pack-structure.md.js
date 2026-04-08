import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"パックのフォルダー構成","description":"パックのフォルダー構成の例です。","frontmatter":{"title":"パックのフォルダー構成","description":"パックのフォルダー構成の例です。","show_outline":false,"mentions":["SirLich","ThijsHankelMC","MedicalJewel105","Ersatz77","ChibiMango","TheItsNameless","JaylyDev","SmokeyStack","QuazChick"]},"headers":[],"relativePath":"documentation/pack-structure.md","filePath":"documentation/pack-structure.md"}');
const _sfc_main = { name: "documentation/pack-structure.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FolderView = resolveComponent("FolderView");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "BP/aim_assist/presets/example.json",
    "BP/animation_controllers/example.ac.json",
    "BP/animations/example.animations.json",
    "BP/biomes/example.biome.json",
    "BP/blocks/example.block.json",
    "BP/cameras/presets/example.json",
    "BP/dialogue/example.dialogue.json",
    "BP/entities/example.se.json",
    "BP/feature_rules/example.json",
    "BP/features/example.json",
    "BP/functions/example.mcfunction",
    "BP/functions/tick.json",
    "BP/item_catalog/crafting_item_catalog.json",
    "BP/items/example.item.json",
    "BP/loot_tables/example.loot.json",
    "BP/recipes/example.recipe.json",
    "BP/scripts/example.js",
    "BP/spawn_rules/example.spawn.json",
    "BP/structures/<namespace>/example.mcstructure",
    "BP/texts/languages.json",
    "BP/texts/*.lang",
    "BP/trading/example.json",
    "BP/trading/economy_trades/example.json",
    "BP/worldgen/processors/example.json",
    "BP/worldgen/structure_sets/example.json",
    "BP/worldgen/structures/example.json",
    "BP/worldgen/template_pools/example.json",
    "BP/contents.json",
    "BP/manifest.json",
    "BP/pack_icon.png",
    "RP/animation_controllers/example.ac.json",
    "RP/animations/example.animations.json",
    "RP/atmospherics/example_atmospherics.json",
    "RP/attachables/example.attachable.json",
    "RP/biomes/example.client_biome.json",
    "RP/block_culling/example.json",
    "RP/color_grading/example_color_grading.json",
    "RP/entity/example.ce.json",
    "RP/fogs/example_fog_setting.json",
    "RP/font/emoticons.json",
    "RP/font/font_metadata.json",
    "RP/font/*.png",
    "RP/font/*.ttf",
    "RP/lighting/example_lighting.json",
    "RP/materials/example.material",
    "RP/models/blocks/example.geo.json",
    "RP/models/entity/example.geo.json",
    "RP/particles/example.particle.json",
    "RP/pbr/global.json",
    "RP/render_controllers/example.rc.json",
    "RP/shadows/global.json",
    "RP/sounds/example.fsb",
    "RP/sounds/example.mp3",
    "RP/sounds/example.ogg",
    "RP/sounds/example.wav",
    "RP/sounds/music_definitions.json",
    "RP/sounds/sound_definitions.json",
    "RP/texts/*/font/*.png",
    "RP/texts/*.lang",
    "RP/texts/language_names.json",
    "RP/texts/languages.json",
    "RP/textures/blocks/example.png",
    "RP/textures/entity/example.png",
    "RP/textures/environment/overworld_cubemap/cubemap_0.png",
    "RP/textures/environment/overworld_cubemap/cubemap_1.png",
    "RP/textures/environment/overworld_cubemap/cubemap_2.png",
    "RP/textures/environment/overworld_cubemap/cubemap_3.png",
    "RP/textures/environment/overworld_cubemap/cubemap_4.png",
    "RP/textures/environment/overworld_cubemap/cubemap_5.png",
    "RP/textures/items/example.png",
    "RP/textures/particle/example.png",
    "RP/textures/flipbook_textures.json",
    "RP/textures/item_texture.json",
    "RP/textures/terrain_texture.json",
    "RP/textures/textures_list.json",
    "RP/ui/_global_variables.json",
    "RP/ui/_ui_defs.json",
    "RP/ui/*.json",
    "RP/water/example_water.json",
    "RP/blocks.json",
    "RP/contents.json",
    "RP/loading_messages.json",
    "RP/manifest.json",
    "RP/pack_icon.png",
    "RP/sounds.json",
    "RP/splashes.json"
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/pack-structure.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const packStructure = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  packStructure as default
};
