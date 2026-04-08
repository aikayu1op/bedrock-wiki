import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/images/blocks/custom-crops/model.png";
const __pageData = JSON.parse('{"title":"Custom Crops","description":"Learn how to create your own crop blocks that grow just like vanilla crops!","frontmatter":{"title":"Custom Crops","example":"custom_crops","description":"Learn how to create your own crop blocks that grow just like vanilla crops!","category":"Vanilla Re-Creations","tags":["intermediate","scripting"],"license":true,"mentions":["Ivyman1992","Provedule","ThomasOrs","QuazChick","SmokeyStack"]},"headers":[{"level":2,"title":"Crop Model","slug":"crop-model","link":"#crop-model","children":[]},{"level":2,"title":"Initial Block JSON","slug":"initial-block-json","link":"#initial-block-json","children":[]},{"level":2,"title":"Crop Growth Component","slug":"crop-growth-component","link":"#crop-growth-component","children":[{"level":3,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":3,"title":"Initial Script","slug":"initial-script","link":"#initial-script","children":[]},{"level":3,"title":"Calculating Growth Speed","slug":"calculating-growth-speed","link":"#calculating-growth-speed","children":[]},{"level":3,"title":"Random Ticking","slug":"random-ticking","link":"#random-ticking","children":[]},{"level":3,"title":"Fertilization","slug":"fertilization","link":"#fertilization","children":[]},{"level":3,"title":"Final Script","slug":"final-script","link":"#final-script","children":[]}]},{"level":2,"title":"Growth Permutations","slug":"growth-permutations","link":"#growth-permutations","children":[]},{"level":2,"title":"Final Block JSON","slug":"final-block-json","link":"#final-block-json","children":[]},{"level":2,"title":"Crop Loot","slug":"crop-loot","link":"#crop-loot","children":[{"level":3,"title":"Young Crop Loot Table","slug":"young-crop-loot-table","link":"#young-crop-loot-table","children":[]},{"level":3,"title":"Mature Crop Loot Table","slug":"mature-crop-loot-table","link":"#mature-crop-loot-table","children":[]}]},{"level":2,"title":"Custom Seeds","slug":"custom-seeds","link":"#custom-seeds","children":[]},{"level":2,"title":"Custom Food","slug":"custom-food","link":"#custom-food","children":[]},{"level":2,"title":"Result","slug":"result","link":"#result","children":[]}],"params":{"example":{"id":"custom_crops","files":["BP/blocks/custom_crop.json","BP/items/custom_food.json","BP/items/custom_seeds.json","BP/loot_tables/wiki/blocks/custom_crop_mature.json","BP/loot_tables/wiki/blocks/custom_crop_young.json","BP/scripts/cropGrowth.js","BP/scripts/index.js","BP/contents.json","BP/manifest.json","BP/pack_icon.png","RP/models/blocks/custom_crop.geo.json","RP/texts/en_US.lang","RP/texts/languages.json","RP/textures/wiki/blocks/custom_crop_0.png","RP/textures/wiki/blocks/custom_crop_1.png","RP/textures/wiki/blocks/custom_crop_2.png","RP/textures/wiki/blocks/custom_crop_3.png","RP/textures/wiki/items/custom_food.png","RP/textures/wiki/items/custom_seeds.png","RP/textures/item_texture.json","RP/textures/terrain_texture.json","RP/textures/textures_list.json","RP/blocks.json","RP/contents.json","RP/manifest.json","RP/pack_icon.png"],"archive":{"root":"","type":"mcaddon"}}},"relativePath":"blocks/custom-crops.md","filePath":"blocks/custom-crops.md"}');
const _sfc_main = { name: "blocks/custom-crops.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Spoiler = resolveComponent("Spoiler");
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_FolderView = resolveComponent("FolderView");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="tip custom-block"><p class="custom-block-title">FORMAT VERSION 1.26.10</p><p>This tutorial assumes a good understanding of blocks and scripting. Check out the <a href="/blocks/blocks-intro">blocks guide</a>, <a href="/blocks/block-states">block states</a> and <a href="/blocks/block-events">block events</a> before starting.</p></div><p>If you aren&#39;t a fan of carrots — that&#39;s fine. You can make your own (far superior) crop!</p><p>Making crops is not as difficult as you may think, it just takes a little practice and forethought in coding a specific series of events. This page will guide you through the process of creating a unique crop block as well as its seed and food items.</p><p><strong>Issues:</strong></p><ul><li>Custom crops cannot be destroyed by flowing lava.</li><li>Custom crops cannot be grown by bees carrying nectar.</li><li>Custom crops become dark when surrounded by full blocks.</li><li>Custom crops drop as items when destroyed by an item with the &quot;Silk Touch&quot; enchantment.</li><li>Custom crop drop rates do not match vanilla and are not affected by the &quot;Fortune&quot; enchantment.</li><li>Custom crops can be interacted with, even when the player is not holding a fertilizer such as Bone Meal.</li><li>Pressing &quot;Pick Block&quot; when looking a custom crop results in the player being given a crop block rather than seeds.</li></ul><h2 id="crop-model" tabindex="-1">Crop Model <a class="header-anchor" href="#crop-model" aria-label="Permalink to &quot;Crop Model&quot;">​</a></h2><p>If you look at crops like carrots and potatoes in-game, you will see that they are made up of 4 planes that are situated 4 pixels from each edge, as shown in the screenshot below.</p><p>It is noteworthy to mention that each plane sits 1 pixel down, unlike traditional blocks. If you forget to lower the planes down by one, then the crops will appear to grow one pixel higher then the top of farmland which has a shorter model.</p><p>By lowering the position down a pixel, it will sit above farmland perfectly making everything right in our blocky world. Here is a template model for the crop:</p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Example Crop Model" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<a href="/blocks/custom-crops/files/RP/models/blocks/custom_crop.geo.json" title="View File"${_scopeId2}>RP/models/blocks/custom_crop.geo.json</a>`);
            } else {
              return [
                createVNode("a", {
                  href: "/blocks/custom-crops/files/RP/models/blocks/custom_crop.geo.json",
                  title: "View File"
                }, "RP/models/blocks/custom_crop.geo.json")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;1.26.10&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;minecraft:geometry&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;geometry.custom_crop&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;texture_width&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;texture_height&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;bones&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;crop&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;pivot&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;cubes&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;uv&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                &quot;north&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;uv&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;uv_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                &quot;south&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;uv&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;uv_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                            }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;uv&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                &quot;north&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;uv&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;uv_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                &quot;south&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;uv&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;uv_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                            }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;uv&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                &quot;east&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;uv&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;uv_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                &quot;west&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;uv&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;uv_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                            }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;uv&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                &quot;east&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;uv&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;uv_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                &quot;west&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;uv&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;uv_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                            }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}><span class="line-number"${_scopeId}>18</span><br${_scopeId}><span class="line-number"${_scopeId}>19</span><br${_scopeId}><span class="line-number"${_scopeId}>20</span><br${_scopeId}><span class="line-number"${_scopeId}>21</span><br${_scopeId}><span class="line-number"${_scopeId}>22</span><br${_scopeId}><span class="line-number"${_scopeId}>23</span><br${_scopeId}><span class="line-number"${_scopeId}>24</span><br${_scopeId}><span class="line-number"${_scopeId}>25</span><br${_scopeId}><span class="line-number"${_scopeId}>26</span><br${_scopeId}><span class="line-number"${_scopeId}>27</span><br${_scopeId}><span class="line-number"${_scopeId}>28</span><br${_scopeId}><span class="line-number"${_scopeId}>29</span><br${_scopeId}><span class="line-number"${_scopeId}>30</span><br${_scopeId}><span class="line-number"${_scopeId}>31</span><br${_scopeId}><span class="line-number"${_scopeId}>32</span><br${_scopeId}><span class="line-number"${_scopeId}>33</span><br${_scopeId}><span class="line-number"${_scopeId}>34</span><br${_scopeId}><span class="line-number"${_scopeId}>35</span><br${_scopeId}><span class="line-number"${_scopeId}>36</span><br${_scopeId}><span class="line-number"${_scopeId}>37</span><br${_scopeId}><span class="line-number"${_scopeId}>38</span><br${_scopeId}><span class="line-number"${_scopeId}>39</span><br${_scopeId}><span class="line-number"${_scopeId}>40</span><br${_scopeId}><span class="line-number"${_scopeId}>41</span><br${_scopeId}><span class="line-number"${_scopeId}>42</span><br${_scopeId}><span class="line-number"${_scopeId}>43</span><br${_scopeId}><span class="line-number"${_scopeId}>44</span><br${_scopeId}><span class="line-number"${_scopeId}>45</span><br${_scopeId}><span class="line-number"${_scopeId}>46</span><br${_scopeId}><span class="line-number"${_scopeId}>47</span><br${_scopeId}><span class="line-number"${_scopeId}>48</span><br${_scopeId}><span class="line-number"${_scopeId}>49</span><br${_scopeId}><span class="line-number"${_scopeId}>50</span><br${_scopeId}><span class="line-number"${_scopeId}>51</span><br${_scopeId}><span class="line-number"${_scopeId}>52</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode(_component_CodeHeader, null, {
            default: withCtx(() => [
              createVNode("a", {
                href: "/blocks/custom-crops/files/RP/models/blocks/custom_crop.geo.json",
                title: "View File"
              }, "RP/models/blocks/custom_crop.geo.json")
            ]),
            _: 1
          }),
          createVNode("div", { class: "language-json vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "json"),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "format_version"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"1.26.10"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "minecraft:geometry"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "description"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "identifier"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"geometry.custom_crop"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "texture_width"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "texture_height"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "bones"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"crop"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "pivot"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "cubes"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "origin"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-4"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "uv"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                "north"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"uv"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "], "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"uv_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                "south"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"uv"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "], "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"uv_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                            }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "origin"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "4"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "uv"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                "north"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"uv"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "], "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"uv_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                "south"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"uv"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "], "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"uv_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                            }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "origin"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "4"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "uv"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                "east"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"uv"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "], "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"uv_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                "west"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"uv"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "], "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"uv_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                            }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "origin"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-4"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "uv"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                "east"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"uv"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "], "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"uv_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                "west"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"uv"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "], "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"uv_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                            }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    ]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            ]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    ]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "2"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "3"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "4"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "5"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "6"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "7"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "8"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "9"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "10"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "11"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "12"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "13"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "14"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "15"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "16"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "17"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "18"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "19"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "20"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "21"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "22"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "23"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "24"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "25"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "26"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "27"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "28"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "29"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "30"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "31"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "32"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "33"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "34"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "35"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "36"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "37"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "38"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "39"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "40"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "41"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "42"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "43"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "44"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "45"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "46"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "47"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "48"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "49"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "50"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "51"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "52"),
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="initial-block-json" tabindex="-1">Initial Block JSON <a class="header-anchor" href="#initial-block-json" aria-label="Permalink to &quot;Initial Block JSON&quot;">​</a></h2><p>To start with, we want our crops to have 8 stages of growth like vanilla crops, so the block should include a state with 8 values.</p><p>This code example also includes the base components of our crop which will be active in every permutation.</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/blocks/custom_crop.json`);
      } else {
        return [
          createTextVNode("BP/blocks/custom_crop.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.26.10&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;minecraft:block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_crop&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;states&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;wiki:growth&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;values&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">7</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;tag:minecraft:crop&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:collision_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">            // Visuals</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:destruction_particles&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;particle_count&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">48</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:geometry&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;geometry.custom_crop&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// Model provided in the previous step</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:material_instances&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;*&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_crop_0&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;render_method&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;alpha_test_single_sided&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;ambient_occlusion&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;face_dimming&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">            // Break the crop if it isn&#39;t placed on farmland</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:placement_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;conditions&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                        &quot;allowed_faces&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;up&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                        &quot;block_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:farmland&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">            // Prevent rain from splashing and snow from accumulating on top of the block</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:precipitation_interactions&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;precipitation_behavior&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;none&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">            // Break the crop when water flows into it</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:liquid_detection&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;detection_rules&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                        &quot;liquid_type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;water&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                        &quot;on_liquid_touches&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;popped&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">            // Break the crop when it is pushed by a piston</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:movable&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;movement_type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;popped&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">            // Prevent blocks such as fences and glass panes from connecting</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:connection_rule&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;accepts_connections_from&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;none&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><h2 id="crop-growth-component" tabindex="-1">Crop Growth Component <a class="header-anchor" href="#crop-growth-component" aria-label="Permalink to &quot;Crop Growth Component&quot;">​</a></h2><p>Minecraft doesn&#39;t expose the vanilla crop growth functionality for use in custom blocks, so we&#39;ll have to re-create the growth system from scratch using a custom component!</p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>Over the next few headings, we&#39;ll explore the code behind replicating vanilla crop growth using the following parameters. Afterwards, you&#39;ll be provided with the full script which can be copied into your pack.</p>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Crop Growth Parameters" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><code class="shiki"${_scopeId}><span${_scopeId}>growth_state</span></code> — String <ul${_scopeId}><li${_scopeId}>The name of the state used for the crop&#39;s current growth stage.</li><li${_scopeId}>In this tutorial, we will be using <code class="shiki"${_scopeId}><span${_scopeId}>wiki:growth</span></code> but you should change the namespace to something that uniquely identifies your add-on.</li></ul></li><li${_scopeId}><code class="shiki"${_scopeId}><span${_scopeId}>max_growth</span></code> — Integer <ul${_scopeId}><li${_scopeId}>The maximum value of the growth state.</li></ul></li><li${_scopeId}><code class="shiki"${_scopeId}><span${_scopeId}>min_light_level</span></code> — Integer <ul${_scopeId}><li${_scopeId}>The minimum light level required for the crop to grow via random ticking.</li></ul></li><li${_scopeId}><code class="shiki"${_scopeId}><span${_scopeId}>farmland_search_range</span></code> — Integer <ul${_scopeId}><li${_scopeId}>Maximum offset in each direction of the X and Z axes where farmland can be found.</li></ul></li><li${_scopeId}><code class="shiki"${_scopeId}><span${_scopeId}>farmland_speed_modifier</span></code> — Float <ul${_scopeId}><li${_scopeId}>Growth speed added per farmland block found.</li></ul></li><li${_scopeId}><code class="shiki"${_scopeId}><span${_scopeId}>farmland_moisture_speed_modifier</span></code> — Float <ul${_scopeId}><li${_scopeId}>Growth speed added in addition to <code class="shiki"${_scopeId}><span${_scopeId}>farmland_speed_modifier</span></code> if the farmland is wet.</li></ul></li><li${_scopeId}><code class="shiki"${_scopeId}><span${_scopeId}>neighboring_farmland_speed_multiplier</span></code> — Float <ul${_scopeId}><li${_scopeId}>The total speed modifier of each farmland block that is not directly underneath the crop is multiplied by this value before being adding to the growth speed.</li></ul></li><li${_scopeId}><code class="shiki"${_scopeId}><span${_scopeId}>crowding_speed_multiplier</span></code> — Float <ul${_scopeId}><li${_scopeId}>The total speed after searching for farmland is multiplied by this value if the crop is crowded by other crops of the same type.</li></ul></li><li${_scopeId}><code class="shiki"${_scopeId}><span${_scopeId}>growth_on_fertilize</span></code> — Integer Range <code class="shiki"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>min</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>max</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></code><ul${_scopeId}><li${_scopeId}>The minimum and maximum growth that can be added when a non-creative mode player interacts with the block using Bone Meal.</li></ul></li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("code", { class: "shiki" }, [
                createVNode("span", null, "growth_state")
              ]),
              createTextVNode(" — String "),
              createVNode("ul", null, [
                createVNode("li", null, "The name of the state used for the crop's current growth stage."),
                createVNode("li", null, [
                  createTextVNode("In this tutorial, we will be using "),
                  createVNode("code", { class: "shiki" }, [
                    createVNode("span", null, "wiki:growth")
                  ]),
                  createTextVNode(" but you should change the namespace to something that uniquely identifies your add-on.")
                ])
              ])
            ]),
            createVNode("li", null, [
              createVNode("code", { class: "shiki" }, [
                createVNode("span", null, "max_growth")
              ]),
              createTextVNode(" — Integer "),
              createVNode("ul", null, [
                createVNode("li", null, "The maximum value of the growth state.")
              ])
            ]),
            createVNode("li", null, [
              createVNode("code", { class: "shiki" }, [
                createVNode("span", null, "min_light_level")
              ]),
              createTextVNode(" — Integer "),
              createVNode("ul", null, [
                createVNode("li", null, "The minimum light level required for the crop to grow via random ticking.")
              ])
            ]),
            createVNode("li", null, [
              createVNode("code", { class: "shiki" }, [
                createVNode("span", null, "farmland_search_range")
              ]),
              createTextVNode(" — Integer "),
              createVNode("ul", null, [
                createVNode("li", null, "Maximum offset in each direction of the X and Z axes where farmland can be found.")
              ])
            ]),
            createVNode("li", null, [
              createVNode("code", { class: "shiki" }, [
                createVNode("span", null, "farmland_speed_modifier")
              ]),
              createTextVNode(" — Float "),
              createVNode("ul", null, [
                createVNode("li", null, "Growth speed added per farmland block found.")
              ])
            ]),
            createVNode("li", null, [
              createVNode("code", { class: "shiki" }, [
                createVNode("span", null, "farmland_moisture_speed_modifier")
              ]),
              createTextVNode(" — Float "),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createTextVNode("Growth speed added in addition to "),
                  createVNode("code", { class: "shiki" }, [
                    createVNode("span", null, "farmland_speed_modifier")
                  ]),
                  createTextVNode(" if the farmland is wet.")
                ])
              ])
            ]),
            createVNode("li", null, [
              createVNode("code", { class: "shiki" }, [
                createVNode("span", null, "neighboring_farmland_speed_multiplier")
              ]),
              createTextVNode(" — Float "),
              createVNode("ul", null, [
                createVNode("li", null, "The total speed modifier of each farmland block that is not directly underneath the crop is multiplied by this value before being adding to the growth speed.")
              ])
            ]),
            createVNode("li", null, [
              createVNode("code", { class: "shiki" }, [
                createVNode("span", null, "crowding_speed_multiplier")
              ]),
              createTextVNode(" — Float "),
              createVNode("ul", null, [
                createVNode("li", null, "The total speed after searching for farmland is multiplied by this value if the crop is crowded by other crops of the same type.")
              ])
            ]),
            createVNode("li", null, [
              createVNode("code", { class: "shiki" }, [
                createVNode("span", null, "growth_on_fertilize")
              ]),
              createTextVNode(" — Integer Range "),
              createVNode("code", { class: "shiki" }, [
                createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "min"),
                createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "max"),
                createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
              ]),
              createVNode("ul", null, [
                createVNode("li", null, "The minimum and maximum growth that can be added when a non-creative mode player interacts with the block using Bone Meal.")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>This is the configuration we will be using for our custom crop:</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`minecraft:block &gt; components`);
      } else {
        return [
          createTextVNode("minecraft:block > components")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;wiki:crop_growth&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;growth_state&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:growth&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;max_growth&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">7</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">    // Require a light level of 9 or above in order to grow on random ticks</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;min_light_level&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">9</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">    // Match the growth speed of vanilla crops</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;farmland_search_range&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;farmland_speed_modifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;farmland_moisture_speed_modifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;neighboring_farmland_speed_multiplier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0.25</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;crowding_speed_multiplier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0.5</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">    // Add 2-5 growth stages at random when a non-creative mode player uses Bone Meal on the crop</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;growth_on_fertilize&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">5</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="initial-script" tabindex="-1">Initial Script <a class="header-anchor" href="#initial-script" aria-label="Permalink to &quot;Initial Script&quot;">​</a></h3><p>Below is the basis for the crop growth script that will be included in the behavior pack. It imports what is required from the <code class="shiki"><span>@minecraft/server</span></code> module and sets up the registration of the custom component for use in block JSON definitions.</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/scripts/cropGrowth.js`);
      } else {
        return [
          createTextVNode("BP/scripts/cropGrowth.js")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">import</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">system</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">EquipmentSlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">GameMode</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> } </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"> &quot;@minecraft/server&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">export</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"> const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> cropGrowthComponentName</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:crop_growth&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">/** </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">@type</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"> {import(&quot;@minecraft/server&quot;).BlockCustomComponent}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"> */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> BlockCropGrowthComponent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">    // Event hooks will go here</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">};</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">system</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">beforeEvents</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">startup</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">subscribe</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(({ </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">blockComponentRegistry</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">=&gt;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">    blockComponentRegistry</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">registerCustomComponent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">        cropGrowthComponentName</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">        BlockCropGrowthComponent</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="calculating-growth-speed" tabindex="-1">Calculating Growth Speed <a class="header-anchor" href="#calculating-growth-speed" aria-label="Permalink to &quot;Calculating Growth Speed&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/scripts/cropGrowth.js`);
      } else {
        return [
          createTextVNode("BP/scripts/cropGrowth.js")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">function</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"> getGrowthSpeed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growthParams</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    let</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"> speed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">    // Increase growth speed based on nearby farmland blocks and their moisture</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    for</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> farmland</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"> of</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"> getFarmlandIterator</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growthParams</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">farmland_search_range</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">)) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">        let</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"> speedModifier</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growthParams</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">farmland_speed_modifier</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> moisture</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">farmland</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">getState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;moisturized_amount&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">moisture</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> &gt; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">            speedModifier</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> += </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growthParams</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">farmland_moisture_speed_modifier</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> isDirectlyBelowCrop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">farmland</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> &amp;&amp; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">farmland</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">isDirectlyBelowCrop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">            speedModifier</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> *= </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growthParams</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">neighboring_farmland_speed_multiplier</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">        speed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> += </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">speedModifier</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">    // Halves the growth speed if there are surrounding crops of the same type in vanilla (where &quot;crowding_speed_multiplier&quot; is 0.5)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">isCrowded</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">)) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">        speed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> *= </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growthParams</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crowding_speed_multiplier</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"> speed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">function*</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"> getFarmlandIterator</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">searchRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    for</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">let</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"> x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = -</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">searchRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> &lt;= </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">searchRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">++) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">        for</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">let</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"> z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = -</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">searchRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> &lt;= </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">searchRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">++) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">            const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">offset</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">({ </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">y:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> -</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> });</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">            // Yield the block if it is farmland</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">            const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> isFarmland</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:farmland&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">            if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">isFarmland</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">yield</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"> block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">function</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"> isCrowded</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> northBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">north</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> southBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">south</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> westBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">west</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> eastBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">east</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">();</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> isEnclosed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> =</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">westBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> || </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">eastBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) &amp;&amp;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">northBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> || </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">southBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">);</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">isEnclosed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"> true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> isCropDiagonallyAdjacent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> =</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">        northBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">west</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">()?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> ||</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">        northBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">east</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">()?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> ||</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">        southBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">west</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">()?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> ||</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">        southBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">east</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">()?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">isCropDiagonallyAdjacent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"> true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"> false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><p>We can now use the <code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">getGrowthSpeed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">()</span></code> function to create another function which randomly returns <code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">true</span></code> or <code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span></code> based on the calculated speed.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">function</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"> randomInt</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">min</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">max</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"> min</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> + </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">Math</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">floor</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">Math</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">random</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">() * (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">max</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> - </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">min</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> + </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">));</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">export</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"> function</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"> randomShouldCropGrow</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growthParams</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> growthSpeed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">getGrowthSpeed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growthParams</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> growthChanceRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">Math</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">floor</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">25</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> / </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growthSpeed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">);</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"> randomInt</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growthChanceRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="random-ticking" tabindex="-1">Random Ticking <a class="header-anchor" href="#random-ticking" aria-label="Permalink to &quot;Random Ticking&quot;">​</a></h3><p>Each random tick, we will make sure that the crop has enough light to grow and is not already fully grown.</p><p>Then, we use the <code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">randomShouldCropGrow</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">()</span></code> function to determine whether the crop should grow on the random tick based on the calculated growth speed.</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BlockCropGrowthComponent`);
      } else {
        return [
          createTextVNode("BlockCropGrowthComponent")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">onRandomTick</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">({ </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }, { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">params</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">    // Growth parameters</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> growthState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">params</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growth_state</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> maxGrowth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">params</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">max_growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> minLightLevel</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">params</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">min_light_level</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">    // Ensure that the minimum light level is met</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">getLightLevel</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">() &lt; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">minLightLevel</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}">permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> } = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">    // Get the current growth of the crop</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">getState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growthState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) ?? </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">maxGrowth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">    // Ensure that the crop is not already fully grown</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">maxGrowth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">    // Only grow on some random ticks</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">randomShouldCropGrow</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">params</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">)) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">    // Increment the growth state</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">    block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">setPermutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">withState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growthState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> + </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">));</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="fertilization" tabindex="-1">Fertilization <a class="header-anchor" href="#fertilization" aria-label="Permalink to &quot;Fertilization&quot;">​</a></h3><p>Fertilization refers to using a fertilizer (such as Bone Meal) on the crop to cause immediate growth.</p><p>For this, we&#39;ll use the <a href="/blocks/block-events#player-interact"><code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">onPlayerInteract</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">()</span></code></a> event hook to add a random value to <code class="shiki"><span>wiki:growth</span></code> when using Bone Meal, or fully grow the crop in creative mode or when using Minecraft Education&#39;s &quot;Super Fertilizer&quot;.</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BlockCropGrowthComponent`);
      } else {
        return [
          createTextVNode("BlockCropGrowthComponent")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">onPlayerInteract</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">({ </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">dimension</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">player</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }, { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">params</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">player</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> equippable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">player</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">getComponent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:equippable&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">equippable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">equippable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">getEquipmentSlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">EquipmentSlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">Mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">hasItem</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">()) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> hasBoneMeal</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:bone_meal&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// Whether the player is holding Bone Meal</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> hasRapidFertilizer</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:rapid_fertilizer&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// Whether the player is holding Super Fertilizer (from Minecraft Eduction)</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">    // Exit if the player is not holding Bone Meal or Super Fertilizer</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">hasBoneMeal</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> &amp;&amp; !</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">hasRapidFertilizer</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> isCreative</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">player</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">getGameMode</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">() === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">GameMode</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">Creative</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// Whether the player is in creative mode</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">    // Growth parameters</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> growthState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">params</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growth_state</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> growthRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">params</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growth_on_fertilize</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> maxGrowth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">params</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">max_growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}">permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> } = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">hasRapidFertilizer</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> || </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">isCreative</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">        // Grow the crop fully when the player is holding Super Fertilizer or is in creative mode</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">        block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">setPermutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">withState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growthState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">maxGrowth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">));</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    else</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">        // Add a random amount of growth when the player is using Bone Meal and is not in creative mode</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">        let</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"> growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">getState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growthState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">);</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">        growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> += </span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">randomInt</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(...</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growthRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">); </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// Add a random amount of growth in the &quot;growth_on_fertilize&quot; range</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">        growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">Math</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">min</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">maxGrowth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">); </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// Prevent the new growth from being over the maximum</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">        block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">setPermutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">withState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growthState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">));</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">    // Decrement the item stack when the player is not in creative mode</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">isCreative</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">amount</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> &gt; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">amount</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">--;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">        else</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"> mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">setItem</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">undefined</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">    // Play effects</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> effectLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">center</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">    dimension</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">playSound</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;item.bone_meal.use&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">effectLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">    dimension</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">spawnParticle</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:crop_growth_emitter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">effectLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><h3 id="final-script" tabindex="-1">Final Script <a class="header-anchor" href="#final-script" aria-label="Permalink to &quot;Final Script&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Crop Growth Script" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<a href="/blocks/custom-crops/files/BP/scripts/cropGrowth.js" title="View File"${_scopeId2}>BP/scripts/cropGrowth.js</a>`);
            } else {
              return [
                createVNode("a", {
                  href: "/blocks/custom-crops/files/BP/scripts/cropGrowth.js",
                  title: "View File"
                }, "BP/scripts/cropGrowth.js")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="language-js vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>system</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>EquipmentSlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>GameMode</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> } </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}> &#39;@minecraft/server&#39;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> cropGrowthComponentName</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:crop_growth&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>/** </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@type</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {import(&quot;@minecraft/server&quot;).BlockCustomComponent}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> */</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> BlockCropGrowthComponent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>    onRandomTick</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>({ </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> }, { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>params</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> }) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>        // Growth parameters</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> growthState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>params</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growth_state</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> maxGrowth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>params</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>max_growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> minLightLevel</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>params</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>min_light_level</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>        // Ensure that the minimum light level is met</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getLightLevel</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>() &lt; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>minLightLevel</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>            return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}>permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> } = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>        // Get the current growth of the crop</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growthState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) ?? </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>maxGrowth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>        // Ensure that the crop is not already fully grown</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>maxGrowth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>            return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>        // Only grow on some random ticks</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>randomShouldCropGrow</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>params</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>))</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>            return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>        // Increment the growth state</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>setPermutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>withState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growthState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> + </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>));</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>    onPlayerInteract</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>({ </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>dimension</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>player</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> }, { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>params</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> }) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>player</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>            return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> equippable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>player</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getComponent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:equippable&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>equippable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>            return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>equippable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getEquipmentSlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>EquipmentSlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>hasItem</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>())</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>            return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> hasBoneMeal</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:bone_meal&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>// Whether the player is holding Bone Meal</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> hasRapidFertilizer</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:rapid_fertilizer&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>// Whether the player is holding Super Fertilizer (from Minecraft Eduction)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>        // Exit if the player is not holding Bone Meal or Super Fertilizer</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>hasBoneMeal</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &amp;&amp; !</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>hasRapidFertilizer</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>            return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> isCreative</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>player</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getGameMode</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>() === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>GameMode</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Creative</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>// Whether the player is in creative mode</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>        // Growth parameters</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> growthState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>params</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growth_state</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> growthRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>params</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growth_on_fertilize</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> maxGrowth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>params</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>max_growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}>permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> } = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>hasRapidFertilizer</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> || </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>isCreative</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>            // Grow the crop fully when the player is holding Super Fertilizer or is in creative mode</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>            block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>setPermutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>withState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growthState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>maxGrowth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>));</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        else</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>            // Add a random amount of growth when the player is using Bone Meal and is not in creative mode</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>            let</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growthState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>            growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> += </span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>randomInt</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(...</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growthRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>); </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>// Add a random amount of growth in the &quot;growth_on_fertilize&quot; range</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>            growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Math</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>min</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>maxGrowth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>); </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>// Prevent the new growth from being over the maximum</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>            block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>setPermutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>withState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growthState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growth</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>));</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>        // Decrement the item stack when the player is not in creative mode</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>isCreative</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>            if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>amount</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &gt; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>                mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>amount</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>--;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>            else</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>                mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>setItem</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>undefined</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>        // Play effects</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> effectLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>center</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        dimension</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>playSound</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;item.bone_meal.use&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>effectLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        dimension</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>spawnParticle</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:crop_growth_emitter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>effectLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>system</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>beforeEvents</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>startup</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>subscribe</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(({ </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>blockComponentRegistry</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> }) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>    blockComponentRegistry</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>registerCustomComponent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>cropGrowthComponentName</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>BlockCropGrowthComponent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>});</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>/**</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {number}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> min</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> The minimum integer</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {number}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> max</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> The maximum integer</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@returns</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {number}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> A random integer between the \`min\` and \`max\` parameters (inclusive)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> */</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> randomInt</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>min</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>max</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>    return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> min</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> + </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Math</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>floor</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Math</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>random</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>() * (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>max</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> - </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>min</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> + </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>));</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> randomShouldCropGrow</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growthParams</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> growthSpeed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getGrowthSpeed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growthParams</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> growthChanceRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Math</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>floor</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>25</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> / </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growthSpeed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>    return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> randomInt</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growthChanceRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>/**</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {import(&quot;@minecraft/server&quot;).Block}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> The block to get the growth speed of</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@returns</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {number}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> A number representing the growth speed of the crop</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> */</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> getGrowthSpeed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growthParams</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    let</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> speed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>    // Increase growth speed based on nearby farmland blocks and their moisture</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>    for</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> farmland</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}> of</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> getFarmlandIterator</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growthParams</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>farmland_search_range</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        let</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> speedModifier</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growthParams</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>farmland_speed_modifier</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> moisture</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>farmland</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;moisturized_amount&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>moisture</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &gt; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>            speedModifier</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> += </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growthParams</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>farmland_moisture_speed_modifier</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> isDirectlyBelowCrop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>farmland</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &amp;&amp; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>farmland</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>isDirectlyBelowCrop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>            speedModifier</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> *= </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growthParams</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>neighboring_farmland_speed_multiplier</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        speed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> += </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>speedModifier</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>    // Halves the growth speed if there are surrounding crops of the same type in vanilla (where &quot;crowding_speed_multiplier&quot; is 0.5)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>isCrowded</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        speed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> *= </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>growthParams</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crowding_speed_multiplier</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>    return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> speed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>/**</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {import(&quot;@minecraft/server&quot;).Block}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> crop</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {number}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> searchRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> Maximum offset in each direction of the X and Z axes where farmland can be found</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@returns</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {Generator}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> A generator that iterates through each farmland block in an area underneath the crop</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> */</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>function*</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> getFarmlandIterator</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>searchRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>    for</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>let</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = -</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>searchRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &lt;= </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>searchRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>++) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        for</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>let</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = -</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>searchRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &lt;= </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>searchRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>++) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>            const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>offset</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>({ </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>y:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> -</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> });</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>            // Yield the block if it is farmland</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>            const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> isFarmland</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:farmland&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>            if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>isFarmland</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>                yield</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>/**</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {Block}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> crop</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@returns</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {boolean}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> Whether there are surrounding crops of the same type</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> */</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> isCrowded</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> northBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>north</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> southBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>south</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> westBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>west</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> eastBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>east</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> isEnclosed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>westBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> || </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>eastBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) &amp;&amp;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>northBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> || </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>southBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>isEnclosed</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}> true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> isCropDiagonallyAdjacent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>northBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>west</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>()?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> ||</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        northBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>east</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>()?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> ||</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        southBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>west</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>()?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> ||</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        southBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>east</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>()?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>crop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>isCropDiagonallyAdjacent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}> true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>    return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}> false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>export</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>cropGrowthComponentName</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>randomShouldCropGrow</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> };</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}><span class="line-number"${_scopeId}>18</span><br${_scopeId}><span class="line-number"${_scopeId}>19</span><br${_scopeId}><span class="line-number"${_scopeId}>20</span><br${_scopeId}><span class="line-number"${_scopeId}>21</span><br${_scopeId}><span class="line-number"${_scopeId}>22</span><br${_scopeId}><span class="line-number"${_scopeId}>23</span><br${_scopeId}><span class="line-number"${_scopeId}>24</span><br${_scopeId}><span class="line-number"${_scopeId}>25</span><br${_scopeId}><span class="line-number"${_scopeId}>26</span><br${_scopeId}><span class="line-number"${_scopeId}>27</span><br${_scopeId}><span class="line-number"${_scopeId}>28</span><br${_scopeId}><span class="line-number"${_scopeId}>29</span><br${_scopeId}><span class="line-number"${_scopeId}>30</span><br${_scopeId}><span class="line-number"${_scopeId}>31</span><br${_scopeId}><span class="line-number"${_scopeId}>32</span><br${_scopeId}><span class="line-number"${_scopeId}>33</span><br${_scopeId}><span class="line-number"${_scopeId}>34</span><br${_scopeId}><span class="line-number"${_scopeId}>35</span><br${_scopeId}><span class="line-number"${_scopeId}>36</span><br${_scopeId}><span class="line-number"${_scopeId}>37</span><br${_scopeId}><span class="line-number"${_scopeId}>38</span><br${_scopeId}><span class="line-number"${_scopeId}>39</span><br${_scopeId}><span class="line-number"${_scopeId}>40</span><br${_scopeId}><span class="line-number"${_scopeId}>41</span><br${_scopeId}><span class="line-number"${_scopeId}>42</span><br${_scopeId}><span class="line-number"${_scopeId}>43</span><br${_scopeId}><span class="line-number"${_scopeId}>44</span><br${_scopeId}><span class="line-number"${_scopeId}>45</span><br${_scopeId}><span class="line-number"${_scopeId}>46</span><br${_scopeId}><span class="line-number"${_scopeId}>47</span><br${_scopeId}><span class="line-number"${_scopeId}>48</span><br${_scopeId}><span class="line-number"${_scopeId}>49</span><br${_scopeId}><span class="line-number"${_scopeId}>50</span><br${_scopeId}><span class="line-number"${_scopeId}>51</span><br${_scopeId}><span class="line-number"${_scopeId}>52</span><br${_scopeId}><span class="line-number"${_scopeId}>53</span><br${_scopeId}><span class="line-number"${_scopeId}>54</span><br${_scopeId}><span class="line-number"${_scopeId}>55</span><br${_scopeId}><span class="line-number"${_scopeId}>56</span><br${_scopeId}><span class="line-number"${_scopeId}>57</span><br${_scopeId}><span class="line-number"${_scopeId}>58</span><br${_scopeId}><span class="line-number"${_scopeId}>59</span><br${_scopeId}><span class="line-number"${_scopeId}>60</span><br${_scopeId}><span class="line-number"${_scopeId}>61</span><br${_scopeId}><span class="line-number"${_scopeId}>62</span><br${_scopeId}><span class="line-number"${_scopeId}>63</span><br${_scopeId}><span class="line-number"${_scopeId}>64</span><br${_scopeId}><span class="line-number"${_scopeId}>65</span><br${_scopeId}><span class="line-number"${_scopeId}>66</span><br${_scopeId}><span class="line-number"${_scopeId}>67</span><br${_scopeId}><span class="line-number"${_scopeId}>68</span><br${_scopeId}><span class="line-number"${_scopeId}>69</span><br${_scopeId}><span class="line-number"${_scopeId}>70</span><br${_scopeId}><span class="line-number"${_scopeId}>71</span><br${_scopeId}><span class="line-number"${_scopeId}>72</span><br${_scopeId}><span class="line-number"${_scopeId}>73</span><br${_scopeId}><span class="line-number"${_scopeId}>74</span><br${_scopeId}><span class="line-number"${_scopeId}>75</span><br${_scopeId}><span class="line-number"${_scopeId}>76</span><br${_scopeId}><span class="line-number"${_scopeId}>77</span><br${_scopeId}><span class="line-number"${_scopeId}>78</span><br${_scopeId}><span class="line-number"${_scopeId}>79</span><br${_scopeId}><span class="line-number"${_scopeId}>80</span><br${_scopeId}><span class="line-number"${_scopeId}>81</span><br${_scopeId}><span class="line-number"${_scopeId}>82</span><br${_scopeId}><span class="line-number"${_scopeId}>83</span><br${_scopeId}><span class="line-number"${_scopeId}>84</span><br${_scopeId}><span class="line-number"${_scopeId}>85</span><br${_scopeId}><span class="line-number"${_scopeId}>86</span><br${_scopeId}><span class="line-number"${_scopeId}>87</span><br${_scopeId}><span class="line-number"${_scopeId}>88</span><br${_scopeId}><span class="line-number"${_scopeId}>89</span><br${_scopeId}><span class="line-number"${_scopeId}>90</span><br${_scopeId}><span class="line-number"${_scopeId}>91</span><br${_scopeId}><span class="line-number"${_scopeId}>92</span><br${_scopeId}><span class="line-number"${_scopeId}>93</span><br${_scopeId}><span class="line-number"${_scopeId}>94</span><br${_scopeId}><span class="line-number"${_scopeId}>95</span><br${_scopeId}><span class="line-number"${_scopeId}>96</span><br${_scopeId}><span class="line-number"${_scopeId}>97</span><br${_scopeId}><span class="line-number"${_scopeId}>98</span><br${_scopeId}><span class="line-number"${_scopeId}>99</span><br${_scopeId}><span class="line-number"${_scopeId}>100</span><br${_scopeId}><span class="line-number"${_scopeId}>101</span><br${_scopeId}><span class="line-number"${_scopeId}>102</span><br${_scopeId}><span class="line-number"${_scopeId}>103</span><br${_scopeId}><span class="line-number"${_scopeId}>104</span><br${_scopeId}><span class="line-number"${_scopeId}>105</span><br${_scopeId}><span class="line-number"${_scopeId}>106</span><br${_scopeId}><span class="line-number"${_scopeId}>107</span><br${_scopeId}><span class="line-number"${_scopeId}>108</span><br${_scopeId}><span class="line-number"${_scopeId}>109</span><br${_scopeId}><span class="line-number"${_scopeId}>110</span><br${_scopeId}><span class="line-number"${_scopeId}>111</span><br${_scopeId}><span class="line-number"${_scopeId}>112</span><br${_scopeId}><span class="line-number"${_scopeId}>113</span><br${_scopeId}><span class="line-number"${_scopeId}>114</span><br${_scopeId}><span class="line-number"${_scopeId}>115</span><br${_scopeId}><span class="line-number"${_scopeId}>116</span><br${_scopeId}><span class="line-number"${_scopeId}>117</span><br${_scopeId}><span class="line-number"${_scopeId}>118</span><br${_scopeId}><span class="line-number"${_scopeId}>119</span><br${_scopeId}><span class="line-number"${_scopeId}>120</span><br${_scopeId}><span class="line-number"${_scopeId}>121</span><br${_scopeId}><span class="line-number"${_scopeId}>122</span><br${_scopeId}><span class="line-number"${_scopeId}>123</span><br${_scopeId}><span class="line-number"${_scopeId}>124</span><br${_scopeId}><span class="line-number"${_scopeId}>125</span><br${_scopeId}><span class="line-number"${_scopeId}>126</span><br${_scopeId}><span class="line-number"${_scopeId}>127</span><br${_scopeId}><span class="line-number"${_scopeId}>128</span><br${_scopeId}><span class="line-number"${_scopeId}>129</span><br${_scopeId}><span class="line-number"${_scopeId}>130</span><br${_scopeId}><span class="line-number"${_scopeId}>131</span><br${_scopeId}><span class="line-number"${_scopeId}>132</span><br${_scopeId}><span class="line-number"${_scopeId}>133</span><br${_scopeId}><span class="line-number"${_scopeId}>134</span><br${_scopeId}><span class="line-number"${_scopeId}>135</span><br${_scopeId}><span class="line-number"${_scopeId}>136</span><br${_scopeId}><span class="line-number"${_scopeId}>137</span><br${_scopeId}><span class="line-number"${_scopeId}>138</span><br${_scopeId}><span class="line-number"${_scopeId}>139</span><br${_scopeId}><span class="line-number"${_scopeId}>140</span><br${_scopeId}><span class="line-number"${_scopeId}>141</span><br${_scopeId}><span class="line-number"${_scopeId}>142</span><br${_scopeId}><span class="line-number"${_scopeId}>143</span><br${_scopeId}><span class="line-number"${_scopeId}>144</span><br${_scopeId}><span class="line-number"${_scopeId}>145</span><br${_scopeId}><span class="line-number"${_scopeId}>146</span><br${_scopeId}><span class="line-number"${_scopeId}>147</span><br${_scopeId}><span class="line-number"${_scopeId}>148</span><br${_scopeId}><span class="line-number"${_scopeId}>149</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode(_component_CodeHeader, null, {
            default: withCtx(() => [
              createVNode("a", {
                href: "/blocks/custom-crops/files/BP/scripts/cropGrowth.js",
                title: "View File"
              }, "BP/scripts/cropGrowth.js")
            ]),
            _: 1
          }),
          createVNode("div", { class: "language-js vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "js"),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "import"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "system"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "EquipmentSlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "GameMode"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " } "),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "from"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, " '@minecraft/server'"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " cropGrowthComponentName"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:crop_growth"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "/** "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@type"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, ' {import("@minecraft/server").BlockCustomComponent}'),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " */")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " BlockCropGrowthComponent"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "    onRandomTick"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "({ "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " }, { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "params"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " }) {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "        // Growth parameters")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " growthState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "params"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growth_state"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " maxGrowth"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "params"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "max_growth"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " minLightLevel"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "params"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "min_light_level"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "        // Ensure that the minimum light level is met")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getLightLevel"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "() < "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "minLightLevel"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "            return"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " { "),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, "permutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " } = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "        // Get the current growth of the crop")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " growth"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "permutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growthState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") ?? "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "maxGrowth"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "        // Ensure that the crop is not already fully grown")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growth"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "maxGrowth"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "            return"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "        // Only grow on some random ticks")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " (!"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "randomShouldCropGrow"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "params"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "))")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "            return"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "        // Increment the growth state")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "setPermutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "permutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "withState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growthState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growth"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " + "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "));")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "    onPlayerInteract"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "({ "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "dimension"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "player"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " }, { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "params"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " }) {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " (!"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "player"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "            return"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " equippable"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "player"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getComponent"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:equippable"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " (!"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "equippable"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "            return"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "equippable"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getEquipmentSlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "EquipmentSlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " (!"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "hasItem"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "())")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "            return"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " hasBoneMeal"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:bone_meal"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "; "),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "// Whether the player is holding Bone Meal")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " hasRapidFertilizer"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:rapid_fertilizer"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "; "),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "// Whether the player is holding Super Fertilizer (from Minecraft Eduction)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "        // Exit if the player is not holding Bone Meal or Super Fertilizer")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " (!"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "hasBoneMeal"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " && !"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "hasRapidFertilizer"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "            return"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " isCreative"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "player"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getGameMode"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "() === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "GameMode"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Creative"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "; "),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "// Whether the player is in creative mode")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "        // Growth parameters")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " growthState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "params"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growth_state"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " growthRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "params"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growth_on_fertilize"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " maxGrowth"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "params"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "max_growth"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " { "),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, "permutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " } = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "hasRapidFertilizer"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " || "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "isCreative"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "            // Grow the crop fully when the player is holding Super Fertilizer or is in creative mode")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "            block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "setPermutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "permutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "withState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growthState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "maxGrowth"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "));")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        else"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "            // Add a random amount of growth when the player is using Bone Meal and is not in creative mode")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "            let"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " growth"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "permutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growthState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "            growth"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " += "),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "randomInt"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "(..."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growthRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "); "),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, '// Add a random amount of growth in the "growth_on_fertilize" range')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "            growth"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Math"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "min"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growth"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "maxGrowth"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "); "),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "// Prevent the new growth from being over the maximum")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "            block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "setPermutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "permutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "withState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growthState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growth"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "));")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "        // Decrement the item stack when the player is not in creative mode")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " (!"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "isCreative"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "            if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "amount"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " > "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "                mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "amount"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "--;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "            else")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "                mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "setItem"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "undefined"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "        // Play effects")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " effectLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "center"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        dimension"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "playSound"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"item.bone_meal.use"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "effectLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        dimension"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "spawnParticle"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:crop_growth_emitter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "effectLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "system"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "beforeEvents"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "startup"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "subscribe"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "(({ "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "blockComponentRegistry"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " }) "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "=>"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "    blockComponentRegistry"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "registerCustomComponent"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "cropGrowthComponentName"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "BlockCropGrowthComponent"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "});")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "/**")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {number}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " min"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " The minimum integer")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {number}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " max"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " The maximum integer")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@returns"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {number}"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " A random integer between the `min` and `max` parameters (inclusive)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " */")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "function"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " randomInt"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "min"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "max"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "    return"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " min"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " + "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Math"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "floor"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Math"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "random"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "() * ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "max"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " - "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "min"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " + "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "));")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "function"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " randomShouldCropGrow"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growthParams"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " growthSpeed"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getGrowthSpeed"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growthParams"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " growthChanceRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Math"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "floor"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "25"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " / "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growthSpeed"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "    return"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " randomInt"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growthChanceRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") === "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "/**")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, ' {import("@minecraft/server").Block}'),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " crop"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " The block to get the growth speed of")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@returns"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {number}"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " A number representing the growth speed of the crop")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " */")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "function"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " getGrowthSpeed"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growthParams"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    let"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " speed"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "    // Increase growth speed based on nearby farmland blocks and their moisture")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "    for"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " farmland"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, " of"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " getFarmlandIterator"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growthParams"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "farmland_search_range"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")) {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        let"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " speedModifier"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growthParams"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "farmland_speed_modifier"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " moisture"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "farmland"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "permutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"moisturized_amount"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "moisture"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " > "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "            speedModifier"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " += "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growthParams"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "farmland_moisture_speed_modifier"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " isDirectlyBelowCrop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "farmland"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "x"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "x"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " && "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "farmland"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "z"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "z"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " (!"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "isDirectlyBelowCrop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "            speedModifier"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " *= "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growthParams"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "neighboring_farmland_speed_multiplier"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        speed"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " += "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "speedModifier"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, '    // Halves the growth speed if there are surrounding crops of the same type in vanilla (where "crowding_speed_multiplier" is 0.5)')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "    if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "isCrowded"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")) {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        speed"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " *= "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "growthParams"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crowding_speed_multiplier"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "    return"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " speed"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "/**")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, ' {import("@minecraft/server").Block}'),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " crop")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {number}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " searchRange"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " Maximum offset in each direction of the X and Z axes where farmland can be found")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@returns"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {Generator}"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " A generator that iterates through each farmland block in an area underneath the crop")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " */")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "function*"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " getFarmlandIterator"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "searchRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "    for"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "let"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " x"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = -"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "searchRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "; "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "x"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " <= "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "searchRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "; "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "x"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "++) {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        for"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "let"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " z"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = -"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "searchRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "; "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "z"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " <= "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "searchRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "; "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "z"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "++) {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "            const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "offset"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "({ "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "x"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "y:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " -"),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "z"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " });")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "            // Yield the block if it is farmland")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "            const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " isFarmland"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "?."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:farmland"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "            if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "isFarmland"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "                yield"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "/**")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {Block}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " crop")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@returns"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {boolean}"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " Whether there are surrounding crops of the same type")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " */")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "function"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " isCrowded"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " northBlock"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "north"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " southBlock"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "south"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " westBlock"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "west"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " eastBlock"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "east"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " isEnclosed"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "westBlock"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "?."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " || "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "eastBlock"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "?."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") &&")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "northBlock"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "?."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " || "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "southBlock"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "?."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "    if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "isEnclosed"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        return"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, " true"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " isCropDiagonallyAdjacent"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "northBlock"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "?."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "west"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "()?."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ||")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        northBlock"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "?."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "east"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "()?."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ||")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        southBlock"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "?."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "west"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "()?."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ||")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        southBlock"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "?."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "east"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "()?."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "crop"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "    if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "isCropDiagonallyAdjacent"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        return"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, " true"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "    return"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, " false"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "export"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "cropGrowthComponentName"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "randomShouldCropGrow"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " };")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "2"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "3"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "4"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "5"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "6"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "7"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "8"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "9"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "10"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "11"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "12"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "13"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "14"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "15"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "16"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "17"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "18"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "19"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "20"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "21"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "22"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "23"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "24"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "25"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "26"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "27"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "28"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "29"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "30"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "31"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "32"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "33"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "34"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "35"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "36"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "37"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "38"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "39"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "40"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "41"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "42"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "43"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "44"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "45"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "46"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "47"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "48"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "49"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "50"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "51"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "52"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "53"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "54"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "55"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "56"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "57"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "58"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "59"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "60"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "61"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "62"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "63"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "64"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "65"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "66"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "67"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "68"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "69"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "70"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "71"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "72"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "73"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "74"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "75"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "76"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "77"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "78"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "79"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "80"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "81"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "82"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "83"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "84"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "85"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "86"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "87"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "88"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "89"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "90"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "91"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "92"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "93"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "94"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "95"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "96"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "97"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "98"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "99"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "100"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "101"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "102"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "103"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "104"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "105"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "106"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "107"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "108"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "109"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "110"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "111"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "112"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "113"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "114"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "115"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "116"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "117"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "118"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "119"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "120"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "121"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "122"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "123"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "124"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "125"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "126"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "127"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "128"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "129"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "130"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "131"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "132"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "133"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "134"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "135"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "136"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "137"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "138"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "139"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "140"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "141"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "142"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "143"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "144"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "145"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "146"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "147"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "148"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "149"),
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="growth-permutations" tabindex="-1">Growth Permutations <a class="header-anchor" href="#growth-permutations" aria-label="Permalink to &quot;Growth Permutations&quot;">​</a></h2><p>So we know how to set our block states, what happens when our block has a particular permutation?</p><p>The <code class="shiki"><span>permutations</span></code> array below sets the block&#39;s selection box, loot table and texture based on its <code class="shiki"><span>wiki:growth</span></code> state. For example, if <code class="shiki"><span>wiki:growth</span></code> is <code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">7</span></code>, the texture is set to <code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_crop_3&quot;</span></code> and the crop is able to drop food.</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`minecraft:block`);
      } else {
        return [
          createTextVNode("minecraft:block")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;permutations&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;q.block_state(&#39;wiki:growth&#39;) &lt; 7&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">            // Loot table for when the crop is not fully grown; vanilla crops only drop seeds when young</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:loot&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;loot_tables/wiki/blocks/custom_crop_young.json&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;q.block_state(&#39;wiki:growth&#39;) == 0&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:selection_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1.6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;q.block_state(&#39;wiki:growth&#39;) == 1&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:selection_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">3.2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;q.block_state(&#39;wiki:growth&#39;) &gt;= 2&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:material_instances&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;*&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_crop_1&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;render_method&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;alpha_test_single_sided&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;ambient_occlusion&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;face_dimming&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;q.block_state(&#39;wiki:growth&#39;) == 2&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:selection_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">4.8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;q.block_state(&#39;wiki:growth&#39;) == 3&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:selection_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">6.4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;q.block_state(&#39;wiki:growth&#39;) &gt;= 4&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:material_instances&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;*&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_crop_2&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;render_method&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;alpha_test_single_sided&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;ambient_occlusion&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;face_dimming&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;q.block_state(&#39;wiki:growth&#39;) == 4&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:selection_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;q.block_state(&#39;wiki:growth&#39;) == 5&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:selection_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">9.6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;q.block_state(&#39;wiki:growth&#39;) == 6&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:selection_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">11.2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;q.block_state(&#39;wiki:growth&#39;) == 7&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:material_instances&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;*&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_crop_3&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;render_method&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;alpha_test_single_sided&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;ambient_occlusion&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;face_dimming&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:selection_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">12.8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">            // Drop different loot when fully grown</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:loot&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;loot_tables/wiki/blocks/custom_crop_mature.json&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">GROWTH STAGES</p><p>You can have more or fewer growth permutations depending on how many stages you want your crop to have. However, don&#39;t forget to also change the state&#39;s <code class="shiki"><span>max</span></code> parameter and the component&#39;s <code class="shiki"><span>max_growth</span></code> parameter.</p></div><h2 id="final-block-json" tabindex="-1">Final Block JSON <a class="header-anchor" href="#final-block-json" aria-label="Permalink to &quot;Final Block JSON&quot;">​</a></h2><p>Here is the entire <code class="shiki"><span>wiki:custom_crop</span></code> file for reference.</p>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Custom Crop Block JSON" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<a href="/blocks/custom-crops/files/BP/blocks/custom_crop.json" title="View File"${_scopeId2}>BP/blocks/custom_crop.json</a>`);
            } else {
              return [
                createVNode("a", {
                  href: "/blocks/custom-crops/files/BP/blocks/custom_crop.json",
                  title: "View File"
                }, "BP/blocks/custom_crop.json")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;1.26.10&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;minecraft:block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:custom_crop&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;states&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;wiki:growth&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;values&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>7</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;tag:minecraft:crop&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {},</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;minecraft:collision_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>            // Trigger growth on random ticks and when interacting with Bone Meal</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;wiki:crop_growth&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;growth_state&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:growth&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;max_growth&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>7</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>                // Require a light level of 9 or above in order to grow on random ticks</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;min_light_level&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>9</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>                // Match the growth speed of vanilla crops</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;farmland_search_range&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;farmland_speed_modifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;farmland_moisture_speed_modifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;neighboring_farmland_speed_multiplier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0.25</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;crowding_speed_multiplier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0.5</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>                // Add 2-5 growth stages at random when a non-creative mode player uses Bone Meal on the crop</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;growth_on_fertilize&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>5</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>            // Visuals</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;minecraft:destruction_particles&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;particle_count&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>48</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;minecraft:geometry&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;geometry.custom_crop&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;minecraft:material_instances&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;*&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:custom_crop_0&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;render_method&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;alpha_test_single_sided&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;ambient_occlusion&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;face_dimming&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>            // Break the crop if it isn&#39;t placed on farmland</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;minecraft:placement_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;conditions&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;allowed_faces&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;up&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;block_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:farmland&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>            // Prevent rain from splashing and snow from accumulating on top of the block</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;minecraft:precipitation_interactions&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;precipitation_behavior&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;none&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>            // Break the crop when water flows into it</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;minecraft:liquid_detection&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;detection_rules&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;liquid_type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;water&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;on_liquid_touches&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;popped&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>            // Break the crop when it is pushed by a piston</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;minecraft:movable&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;movement_type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;popped&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>            // Prevent blocks such as fences and glass panes from connecting</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;minecraft:connection_rule&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;accepts_connections_from&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;none&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;permutations&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:growth&#39;) &lt; 7&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>                    // Loot table for when the crop is not fully grown; vanilla crops only drop seeds when young</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;minecraft:loot&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;loot_tables/wiki/blocks/custom_crop_young.json&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:growth&#39;) == 0&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;minecraft:selection_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1.6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:growth&#39;) == 1&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;minecraft:selection_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>3.2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:growth&#39;) &gt;= 2&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;minecraft:material_instances&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;*&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:custom_crop_1&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;render_method&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;alpha_test_single_sided&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;ambient_occlusion&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;face_dimming&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:growth&#39;) == 2&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;minecraft:selection_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>4.8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:growth&#39;) == 3&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;minecraft:selection_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6.4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:growth&#39;) &gt;= 4&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;minecraft:material_instances&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;*&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:custom_crop_2&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;render_method&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;alpha_test_single_sided&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;ambient_occlusion&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;face_dimming&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:growth&#39;) == 4&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;minecraft:selection_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:growth&#39;) == 5&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;minecraft:selection_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>9.6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:growth&#39;) == 6&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;minecraft:selection_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>11.2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:growth&#39;) == 7&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;minecraft:material_instances&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;*&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:custom_crop_3&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;render_method&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;alpha_test_single_sided&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;ambient_occlusion&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;face_dimming&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;minecraft:selection_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                        &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>12.8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>                    // Drop different loot when fully grown</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;minecraft:loot&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;loot_tables/wiki/blocks/custom_crop_mature.json&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}><span class="line-number"${_scopeId}>18</span><br${_scopeId}><span class="line-number"${_scopeId}>19</span><br${_scopeId}><span class="line-number"${_scopeId}>20</span><br${_scopeId}><span class="line-number"${_scopeId}>21</span><br${_scopeId}><span class="line-number"${_scopeId}>22</span><br${_scopeId}><span class="line-number"${_scopeId}>23</span><br${_scopeId}><span class="line-number"${_scopeId}>24</span><br${_scopeId}><span class="line-number"${_scopeId}>25</span><br${_scopeId}><span class="line-number"${_scopeId}>26</span><br${_scopeId}><span class="line-number"${_scopeId}>27</span><br${_scopeId}><span class="line-number"${_scopeId}>28</span><br${_scopeId}><span class="line-number"${_scopeId}>29</span><br${_scopeId}><span class="line-number"${_scopeId}>30</span><br${_scopeId}><span class="line-number"${_scopeId}>31</span><br${_scopeId}><span class="line-number"${_scopeId}>32</span><br${_scopeId}><span class="line-number"${_scopeId}>33</span><br${_scopeId}><span class="line-number"${_scopeId}>34</span><br${_scopeId}><span class="line-number"${_scopeId}>35</span><br${_scopeId}><span class="line-number"${_scopeId}>36</span><br${_scopeId}><span class="line-number"${_scopeId}>37</span><br${_scopeId}><span class="line-number"${_scopeId}>38</span><br${_scopeId}><span class="line-number"${_scopeId}>39</span><br${_scopeId}><span class="line-number"${_scopeId}>40</span><br${_scopeId}><span class="line-number"${_scopeId}>41</span><br${_scopeId}><span class="line-number"${_scopeId}>42</span><br${_scopeId}><span class="line-number"${_scopeId}>43</span><br${_scopeId}><span class="line-number"${_scopeId}>44</span><br${_scopeId}><span class="line-number"${_scopeId}>45</span><br${_scopeId}><span class="line-number"${_scopeId}>46</span><br${_scopeId}><span class="line-number"${_scopeId}>47</span><br${_scopeId}><span class="line-number"${_scopeId}>48</span><br${_scopeId}><span class="line-number"${_scopeId}>49</span><br${_scopeId}><span class="line-number"${_scopeId}>50</span><br${_scopeId}><span class="line-number"${_scopeId}>51</span><br${_scopeId}><span class="line-number"${_scopeId}>52</span><br${_scopeId}><span class="line-number"${_scopeId}>53</span><br${_scopeId}><span class="line-number"${_scopeId}>54</span><br${_scopeId}><span class="line-number"${_scopeId}>55</span><br${_scopeId}><span class="line-number"${_scopeId}>56</span><br${_scopeId}><span class="line-number"${_scopeId}>57</span><br${_scopeId}><span class="line-number"${_scopeId}>58</span><br${_scopeId}><span class="line-number"${_scopeId}>59</span><br${_scopeId}><span class="line-number"${_scopeId}>60</span><br${_scopeId}><span class="line-number"${_scopeId}>61</span><br${_scopeId}><span class="line-number"${_scopeId}>62</span><br${_scopeId}><span class="line-number"${_scopeId}>63</span><br${_scopeId}><span class="line-number"${_scopeId}>64</span><br${_scopeId}><span class="line-number"${_scopeId}>65</span><br${_scopeId}><span class="line-number"${_scopeId}>66</span><br${_scopeId}><span class="line-number"${_scopeId}>67</span><br${_scopeId}><span class="line-number"${_scopeId}>68</span><br${_scopeId}><span class="line-number"${_scopeId}>69</span><br${_scopeId}><span class="line-number"${_scopeId}>70</span><br${_scopeId}><span class="line-number"${_scopeId}>71</span><br${_scopeId}><span class="line-number"${_scopeId}>72</span><br${_scopeId}><span class="line-number"${_scopeId}>73</span><br${_scopeId}><span class="line-number"${_scopeId}>74</span><br${_scopeId}><span class="line-number"${_scopeId}>75</span><br${_scopeId}><span class="line-number"${_scopeId}>76</span><br${_scopeId}><span class="line-number"${_scopeId}>77</span><br${_scopeId}><span class="line-number"${_scopeId}>78</span><br${_scopeId}><span class="line-number"${_scopeId}>79</span><br${_scopeId}><span class="line-number"${_scopeId}>80</span><br${_scopeId}><span class="line-number"${_scopeId}>81</span><br${_scopeId}><span class="line-number"${_scopeId}>82</span><br${_scopeId}><span class="line-number"${_scopeId}>83</span><br${_scopeId}><span class="line-number"${_scopeId}>84</span><br${_scopeId}><span class="line-number"${_scopeId}>85</span><br${_scopeId}><span class="line-number"${_scopeId}>86</span><br${_scopeId}><span class="line-number"${_scopeId}>87</span><br${_scopeId}><span class="line-number"${_scopeId}>88</span><br${_scopeId}><span class="line-number"${_scopeId}>89</span><br${_scopeId}><span class="line-number"${_scopeId}>90</span><br${_scopeId}><span class="line-number"${_scopeId}>91</span><br${_scopeId}><span class="line-number"${_scopeId}>92</span><br${_scopeId}><span class="line-number"${_scopeId}>93</span><br${_scopeId}><span class="line-number"${_scopeId}>94</span><br${_scopeId}><span class="line-number"${_scopeId}>95</span><br${_scopeId}><span class="line-number"${_scopeId}>96</span><br${_scopeId}><span class="line-number"${_scopeId}>97</span><br${_scopeId}><span class="line-number"${_scopeId}>98</span><br${_scopeId}><span class="line-number"${_scopeId}>99</span><br${_scopeId}><span class="line-number"${_scopeId}>100</span><br${_scopeId}><span class="line-number"${_scopeId}>101</span><br${_scopeId}><span class="line-number"${_scopeId}>102</span><br${_scopeId}><span class="line-number"${_scopeId}>103</span><br${_scopeId}><span class="line-number"${_scopeId}>104</span><br${_scopeId}><span class="line-number"${_scopeId}>105</span><br${_scopeId}><span class="line-number"${_scopeId}>106</span><br${_scopeId}><span class="line-number"${_scopeId}>107</span><br${_scopeId}><span class="line-number"${_scopeId}>108</span><br${_scopeId}><span class="line-number"${_scopeId}>109</span><br${_scopeId}><span class="line-number"${_scopeId}>110</span><br${_scopeId}><span class="line-number"${_scopeId}>111</span><br${_scopeId}><span class="line-number"${_scopeId}>112</span><br${_scopeId}><span class="line-number"${_scopeId}>113</span><br${_scopeId}><span class="line-number"${_scopeId}>114</span><br${_scopeId}><span class="line-number"${_scopeId}>115</span><br${_scopeId}><span class="line-number"${_scopeId}>116</span><br${_scopeId}><span class="line-number"${_scopeId}>117</span><br${_scopeId}><span class="line-number"${_scopeId}>118</span><br${_scopeId}><span class="line-number"${_scopeId}>119</span><br${_scopeId}><span class="line-number"${_scopeId}>120</span><br${_scopeId}><span class="line-number"${_scopeId}>121</span><br${_scopeId}><span class="line-number"${_scopeId}>122</span><br${_scopeId}><span class="line-number"${_scopeId}>123</span><br${_scopeId}><span class="line-number"${_scopeId}>124</span><br${_scopeId}><span class="line-number"${_scopeId}>125</span><br${_scopeId}><span class="line-number"${_scopeId}>126</span><br${_scopeId}><span class="line-number"${_scopeId}>127</span><br${_scopeId}><span class="line-number"${_scopeId}>128</span><br${_scopeId}><span class="line-number"${_scopeId}>129</span><br${_scopeId}><span class="line-number"${_scopeId}>130</span><br${_scopeId}><span class="line-number"${_scopeId}>131</span><br${_scopeId}><span class="line-number"${_scopeId}>132</span><br${_scopeId}><span class="line-number"${_scopeId}>133</span><br${_scopeId}><span class="line-number"${_scopeId}>134</span><br${_scopeId}><span class="line-number"${_scopeId}>135</span><br${_scopeId}><span class="line-number"${_scopeId}>136</span><br${_scopeId}><span class="line-number"${_scopeId}>137</span><br${_scopeId}><span class="line-number"${_scopeId}>138</span><br${_scopeId}><span class="line-number"${_scopeId}>139</span><br${_scopeId}><span class="line-number"${_scopeId}>140</span><br${_scopeId}><span class="line-number"${_scopeId}>141</span><br${_scopeId}><span class="line-number"${_scopeId}>142</span><br${_scopeId}><span class="line-number"${_scopeId}>143</span><br${_scopeId}><span class="line-number"${_scopeId}>144</span><br${_scopeId}><span class="line-number"${_scopeId}>145</span><br${_scopeId}><span class="line-number"${_scopeId}>146</span><br${_scopeId}><span class="line-number"${_scopeId}>147</span><br${_scopeId}><span class="line-number"${_scopeId}>148</span><br${_scopeId}><span class="line-number"${_scopeId}>149</span><br${_scopeId}><span class="line-number"${_scopeId}>150</span><br${_scopeId}><span class="line-number"${_scopeId}>151</span><br${_scopeId}><span class="line-number"${_scopeId}>152</span><br${_scopeId}><span class="line-number"${_scopeId}>153</span><br${_scopeId}><span class="line-number"${_scopeId}>154</span><br${_scopeId}><span class="line-number"${_scopeId}>155</span><br${_scopeId}><span class="line-number"${_scopeId}>156</span><br${_scopeId}><span class="line-number"${_scopeId}>157</span><br${_scopeId}><span class="line-number"${_scopeId}>158</span><br${_scopeId}><span class="line-number"${_scopeId}>159</span><br${_scopeId}><span class="line-number"${_scopeId}>160</span><br${_scopeId}><span class="line-number"${_scopeId}>161</span><br${_scopeId}><span class="line-number"${_scopeId}>162</span><br${_scopeId}><span class="line-number"${_scopeId}>163</span><br${_scopeId}><span class="line-number"${_scopeId}>164</span><br${_scopeId}><span class="line-number"${_scopeId}>165</span><br${_scopeId}><span class="line-number"${_scopeId}>166</span><br${_scopeId}><span class="line-number"${_scopeId}>167</span><br${_scopeId}><span class="line-number"${_scopeId}>168</span><br${_scopeId}><span class="line-number"${_scopeId}>169</span><br${_scopeId}><span class="line-number"${_scopeId}>170</span><br${_scopeId}><span class="line-number"${_scopeId}>171</span><br${_scopeId}><span class="line-number"${_scopeId}>172</span><br${_scopeId}><span class="line-number"${_scopeId}>173</span><br${_scopeId}><span class="line-number"${_scopeId}>174</span><br${_scopeId}><span class="line-number"${_scopeId}>175</span><br${_scopeId}><span class="line-number"${_scopeId}>176</span><br${_scopeId}><span class="line-number"${_scopeId}>177</span><br${_scopeId}><span class="line-number"${_scopeId}>178</span><br${_scopeId}><span class="line-number"${_scopeId}>179</span><br${_scopeId}><span class="line-number"${_scopeId}>180</span><br${_scopeId}><span class="line-number"${_scopeId}>181</span><br${_scopeId}><span class="line-number"${_scopeId}>182</span><br${_scopeId}><span class="line-number"${_scopeId}>183</span><br${_scopeId}><span class="line-number"${_scopeId}>184</span><br${_scopeId}><span class="line-number"${_scopeId}>185</span><br${_scopeId}><span class="line-number"${_scopeId}>186</span><br${_scopeId}><span class="line-number"${_scopeId}>187</span><br${_scopeId}><span class="line-number"${_scopeId}>188</span><br${_scopeId}><span class="line-number"${_scopeId}>189</span><br${_scopeId}><span class="line-number"${_scopeId}>190</span><br${_scopeId}><span class="line-number"${_scopeId}>191</span><br${_scopeId}><span class="line-number"${_scopeId}>192</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode(_component_CodeHeader, null, {
            default: withCtx(() => [
              createVNode("a", {
                href: "/blocks/custom-crops/files/BP/blocks/custom_crop.json",
                title: "View File"
              }, "BP/blocks/custom_crop.json")
            ]),
            _: 1
          }),
          createVNode("div", { class: "language-json vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "json"),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "format_version"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"1.26.10"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "minecraft:block"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "description"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "identifier"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:custom_crop"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "states"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "wiki:growth"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "values"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "7"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "tag:minecraft:crop"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {},")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "minecraft:collision_box"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "            // Trigger growth on random ticks and when interacting with Bone Meal")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "wiki:crop_growth"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "growth_state"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:growth"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "max_growth"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "7"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "                // Require a light level of 9 or above in order to grow on random ticks")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "min_light_level"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "9"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "                // Match the growth speed of vanilla crops")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "farmland_search_range"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "farmland_speed_modifier"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "farmland_moisture_speed_modifier"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "2"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "neighboring_farmland_speed_multiplier"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0.25"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "crowding_speed_multiplier"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0.5"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "                // Add 2-5 growth stages at random when a non-creative mode player uses Bone Meal on the crop")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "growth_on_fertilize"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "2"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "5"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "            // Visuals")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "minecraft:destruction_particles"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "particle_count"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "48")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "minecraft:geometry"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"geometry.custom_crop"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "minecraft:material_instances"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "*"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "texture"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:custom_crop_0"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "render_method"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"alpha_test_single_sided"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "ambient_occlusion"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "face_dimming"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "            // Break the crop if it isn't placed on farmland")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "minecraft:placement_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "conditions"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "allowed_faces"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"up"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "block_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:farmland"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                ]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "            // Prevent rain from splashing and snow from accumulating on top of the block")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "minecraft:precipitation_interactions"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "precipitation_behavior"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"none"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "            // Break the crop when water flows into it")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "minecraft:liquid_detection"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "detection_rules"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "liquid_type"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"water"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "on_liquid_touches"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"popped"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                ]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "            // Break the crop when it is pushed by a piston")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "minecraft:movable"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "movement_type"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"popped"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "            // Prevent blocks such as fences and glass panes from connecting")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "minecraft:connection_rule"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "accepts_connections_from"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"none"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "permutations"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "condition"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:growth') < 7"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "                    // Loot table for when the crop is not fully grown; vanilla crops only drop seeds when young")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "minecraft:loot"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"loot_tables/wiki/blocks/custom_crop_young.json"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "condition"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:growth') == 0"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "minecraft:selection_box"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "origin"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1.6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "condition"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:growth') == 1"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "minecraft:selection_box"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "origin"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "3.2"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "condition"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:growth') >= 2"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "minecraft:material_instances"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "*"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "texture"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:custom_crop_1"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "render_method"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"alpha_test_single_sided"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "ambient_occlusion"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "face_dimming"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "condition"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:growth') == 2"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "minecraft:selection_box"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "origin"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "4.8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "condition"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:growth') == 3"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "minecraft:selection_box"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "origin"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6.4"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "condition"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:growth') >= 4"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "minecraft:material_instances"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "*"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "texture"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:custom_crop_2"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "render_method"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"alpha_test_single_sided"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "ambient_occlusion"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "face_dimming"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "condition"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:growth') == 4"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "minecraft:selection_box"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "origin"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "condition"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:growth') == 5"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "minecraft:selection_box"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "origin"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "9.6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "condition"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:growth') == 6"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "minecraft:selection_box"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "origin"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "11.2"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "condition"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:growth') == 7"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "minecraft:material_instances"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "*"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "texture"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:custom_crop_3"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "render_method"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"alpha_test_single_sided"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "ambient_occlusion"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "face_dimming"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "minecraft:selection_box"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "origin"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                        "size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "12.8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "                    // Drop different loot when fully grown")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "minecraft:loot"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"loot_tables/wiki/blocks/custom_crop_mature.json"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        ]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "2"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "3"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "4"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "5"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "6"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "7"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "8"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "9"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "10"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "11"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "12"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "13"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "14"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "15"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "16"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "17"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "18"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "19"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "20"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "21"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "22"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "23"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "24"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "25"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "26"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "27"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "28"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "29"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "30"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "31"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "32"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "33"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "34"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "35"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "36"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "37"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "38"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "39"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "40"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "41"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "42"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "43"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "44"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "45"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "46"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "47"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "48"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "49"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "50"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "51"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "52"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "53"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "54"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "55"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "56"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "57"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "58"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "59"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "60"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "61"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "62"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "63"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "64"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "65"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "66"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "67"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "68"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "69"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "70"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "71"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "72"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "73"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "74"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "75"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "76"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "77"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "78"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "79"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "80"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "81"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "82"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "83"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "84"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "85"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "86"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "87"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "88"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "89"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "90"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "91"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "92"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "93"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "94"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "95"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "96"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "97"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "98"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "99"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "100"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "101"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "102"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "103"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "104"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "105"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "106"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "107"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "108"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "109"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "110"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "111"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "112"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "113"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "114"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "115"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "116"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "117"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "118"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "119"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "120"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "121"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "122"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "123"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "124"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "125"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "126"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "127"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "128"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "129"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "130"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "131"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "132"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "133"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "134"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "135"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "136"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "137"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "138"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "139"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "140"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "141"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "142"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "143"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "144"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "145"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "146"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "147"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "148"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "149"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "150"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "151"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "152"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "153"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "154"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "155"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "156"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "157"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "158"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "159"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "160"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "161"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "162"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "163"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "164"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "165"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "166"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "167"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "168"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "169"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "170"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "171"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "172"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "173"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "174"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "175"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "176"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "177"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "178"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "179"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "180"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "181"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "182"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "183"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "184"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "185"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "186"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "187"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "188"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "189"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "190"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "191"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "192"),
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="crop-loot" tabindex="-1">Crop Loot <a class="header-anchor" href="#crop-loot" aria-label="Permalink to &quot;Crop Loot&quot;">​</a></h2><p>Below are some example loot tables that your custom crop could use:</p><h3 id="young-crop-loot-table" tabindex="-1">Young Crop Loot Table <a class="header-anchor" href="#young-crop-loot-table" aria-label="Permalink to &quot;Young Crop Loot Table&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="/blocks/custom-crops/files/BP/loot_tables/wiki/blocks/custom_crop_young.json" title="View File"${_scopeId}>BP/loot_tables/wiki/blocks/custom_crop_young.json</a>`);
      } else {
        return [
          createVNode("a", {
            href: "/blocks/custom-crops/files/BP/loot_tables/wiki/blocks/custom_crop_young.json",
            title: "View File"
          }, "BP/loot_tables/wiki/blocks/custom_crop_young.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;pools&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;rolls&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;entries&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_seeds&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="mature-crop-loot-table" tabindex="-1">Mature Crop Loot Table <a class="header-anchor" href="#mature-crop-loot-table" aria-label="Permalink to &quot;Mature Crop Loot Table&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="/blocks/custom-crops/files/BP/loot_tables/wiki/blocks/custom_crop_mature.json" title="View File"${_scopeId}>BP/loot_tables/wiki/blocks/custom_crop_mature.json</a>`);
      } else {
        return [
          createVNode("a", {
            href: "/blocks/custom-crops/files/BP/loot_tables/wiki/blocks/custom_crop_mature.json",
            title: "View File"
          }, "BP/loot_tables/wiki/blocks/custom_crop_mature.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;pools&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;rolls&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;entries&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_food&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;functions&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                        {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                            &quot;function&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;set_count&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                            &quot;count&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">5</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                    ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;rolls&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;entries&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_seeds&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;functions&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                        {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                            &quot;function&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;set_count&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                            &quot;count&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                    ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="custom-seeds" tabindex="-1">Custom Seeds <a class="header-anchor" href="#custom-seeds" aria-label="Permalink to &quot;Custom Seeds&quot;">​</a></h2><p>Holding a crop block in your hand wouldn&#39;t look right, so we place the crop with seeds! Below is the JSON for a custom item that places your crop.</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="/blocks/custom-crops/files/BP/items/custom_seeds.json" title="View File"${_scopeId}>BP/items/custom_seeds.json</a>`);
      } else {
        return [
          createVNode("a", {
            href: "/blocks/custom-crops/files/BP/items/custom_seeds.json",
            title: "View File"
          }, "BP/items/custom_seeds.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.26.10&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;minecraft:item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_seeds&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// Make sure this is different from your crop&#39;s ID</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;menu_category&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;category&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;nature&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;group&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:itemGroup.name.seed&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:block_placer&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_crop&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:compostable&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;composting_chance&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">30</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"> // 30% chance to increment the compost level</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:icon&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_seeds&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="custom-food" tabindex="-1">Custom Food <a class="header-anchor" href="#custom-food" aria-label="Permalink to &quot;Custom Food&quot;">​</a></h2><p>Your crop can&#39;t only drop seeds! Create a custom food using the template below.</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="/blocks/custom-crops/files/BP/items/custom_food.json" title="View File"${_scopeId}>BP/items/custom_food.json</a>`);
      } else {
        return [
          createVNode("a", {
            href: "/blocks/custom-crops/files/BP/items/custom_food.json",
            title: "View File"
          }, "BP/items/custom_food.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.26.10&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;minecraft:item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_food&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// Make sure this is different from your crop and seeds&#39; ID.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;menu_category&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;category&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;nature&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;group&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:itemGroup.name.crop&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:icon&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_food&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:compostable&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;composting_chance&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">65</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"> // 65% chance to increment the compost level</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:food&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;nutrition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;saturation_modifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0.6</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:use_animation&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;eat&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:use_modifiers&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;use_duration&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1.6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;movement_modifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0.35</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:tags&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;tags&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:is_food&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-label="Permalink to &quot;Result&quot;">​</a></h2><p>Your pack should now contain the following files:</p>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "BP/blocks/custom_crop.json",
    "BP/items/custom_food.json",
    "BP/items/custom_seeds.json",
    "BP/loot_tables/wiki/blocks/custom_crop_mature.json",
    "BP/loot_tables/wiki/blocks/custom_crop_young.json",
    "BP/scripts/cropGrowth.js"
  ] }, null, _parent));
  _push(`<p>With the help of this tutorial/template, you now have the knowledge and skills to create your own custom crop, as well as its seed and food items.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blocks/custom-crops.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customCrops = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customCrops as default
};
