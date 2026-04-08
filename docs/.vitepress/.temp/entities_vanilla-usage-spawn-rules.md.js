import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Vanilla Usage Spawn Rules","description":"Automatically generated list of spawn rules components used in vanilla.","frontmatter":{"title":"Vanilla Usage Spawn Rules","category":"Documentation","mentions":["MedicalJewel105"],"description":"Automatically generated list of spawn rules components used in vanilla."},"headers":[{"level":2,"title":"biome_filter","slug":"biome-filter","link":"#biome-filter","children":[]},{"level":2,"title":"brightness_filter","slug":"brightness-filter","link":"#brightness-filter","children":[]},{"level":2,"title":"delay_filter","slug":"delay-filter","link":"#delay-filter","children":[]},{"level":2,"title":"density_limit","slug":"density-limit","link":"#density-limit","children":[]},{"level":2,"title":"difficulty_filter","slug":"difficulty-filter","link":"#difficulty-filter","children":[]},{"level":2,"title":"disallow_spawns_in_bubble","slug":"disallow-spawns-in-bubble","link":"#disallow-spawns-in-bubble","children":[]},{"level":2,"title":"distance_filter","slug":"distance-filter","link":"#distance-filter","children":[]},{"level":2,"title":"height_filter","slug":"height-filter","link":"#height-filter","children":[]},{"level":2,"title":"herd","slug":"herd","link":"#herd","children":[]},{"level":2,"title":"mob_event_filter","slug":"mob-event-filter","link":"#mob-event-filter","children":[]},{"level":2,"title":"permute_type","slug":"permute-type","link":"#permute-type","children":[]},{"level":2,"title":"player_in_village_filter","slug":"player-in-village-filter","link":"#player-in-village-filter","children":[]},{"level":2,"title":"spawn_event","slug":"spawn-event","link":"#spawn-event","children":[]},{"level":2,"title":"spawns_lava","slug":"spawns-lava","link":"#spawns-lava","children":[]},{"level":2,"title":"spawns_on_block_filter","slug":"spawns-on-block-filter","link":"#spawns-on-block-filter","children":[]},{"level":2,"title":"spawns_on_block_prevented_filter","slug":"spawns-on-block-prevented-filter","link":"#spawns-on-block-prevented-filter","children":[]},{"level":2,"title":"spawns_on_surface","slug":"spawns-on-surface","link":"#spawns-on-surface","children":[]},{"level":2,"title":"spawns_underground","slug":"spawns-underground","link":"#spawns-underground","children":[]},{"level":2,"title":"spawns_underwater","slug":"spawns-underwater","link":"#spawns-underwater","children":[]},{"level":2,"title":"weight","slug":"weight","link":"#weight","children":[]},{"level":2,"title":"world_age_filter","slug":"world-age-filter","link":"#world-age-filter","children":[]}],"relativePath":"entities/vanilla-usage-spawn-rules.md","filePath":"entities/vanilla-usage-spawn-rules.md"}');
const _sfc_main = { name: "entities/vanilla-usage-spawn-rules.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Spoiler = resolveComponent("Spoiler");
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>This page was created with <a href="https://github.com/Bedrock-OSS/bedrock-wiki-content-generator" target="_blank" rel="noreferrer">Wiki Content Generator</a>. If there are issues, contact us on <a href="https://discord.gg/XjV87YN" target="_blank" rel="noreferrer">Bedrock OSS</a> Discord server. Note that not more than 8 examples are shown for each component to keep this page fast to load. Namespace <code class="shiki"><span>minecraft</span></code> was also removed.If you want to see full page, you can do it <a href="/entities/vusr-full">here</a>. <em>Last updated for 1.21.60</em></p><h2 id="biome-filter" tabindex="-1">biome_filter <a class="header-anchor" href="#biome-filter" aria-label="Permalink to &quot;biome_filter&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>armadillo</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:biome_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;has_biome_tag&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;value&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;savanna&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:biome_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;all_of&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;has_biome_tag&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;value&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;mesa&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;has_biome_tag&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;operator&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;not&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;value&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;plateau&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:biome_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;all_of&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;has_biome_tag&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;value&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;mesa&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;has_biome_tag&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;value&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;plateau&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}></div></div><p${_scopeId}>axolotl</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:biome_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;has_biome_tag&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;operator&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;==&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;value&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;lush_caves&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}></div></div><p${_scopeId}>bat</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:biome_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;any_of&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;has_biome_tag&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;operator&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;==&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;value&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;caves&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;has_biome_tag&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;operator&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;==&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;value&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;animal&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}></div></div><p${_scopeId}>bee</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:biome_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;has_biome_tag&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;operator&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;==&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;value&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;plains&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;has_biome_tag&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;operator&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;==&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;value&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;sunflower_plains&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;has_biome_tag&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;operator&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;==&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;value&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;flower_forest&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}></div></div><p${_scopeId}>bogged</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:biome_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;any_of&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;has_biome_tag&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;operator&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;==&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;value&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;swamp&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;has_biome_tag&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;operator&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;==&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;value&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;mangrove_swamp&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}></div></div><p${_scopeId}>chicken</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:biome_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;has_biome_tag&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;operator&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;==&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;value&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;animal&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "armadillo"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:biome_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "test"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"has_biome_tag"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "value"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"savanna"')
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:biome_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "all_of"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "test"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"has_biome_tag"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "value"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"mesa"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "test"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"has_biome_tag"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "operator"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"not"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "value"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"plateau"')
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:biome_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "all_of"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "test"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"has_biome_tag"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "value"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"mesa"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "test"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"has_biome_tag"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "value"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"plateau"')
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "axolotl"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:biome_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "test"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"has_biome_tag"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "operator"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"=="'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "value"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"lush_caves"')
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "bat"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:biome_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "any_of"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "test"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"has_biome_tag"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "operator"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"=="'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "value"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"caves"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "test"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"has_biome_tag"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "operator"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"=="'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "value"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"animal"')
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "bee"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:biome_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "test"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"has_biome_tag"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "operator"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"=="'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "value"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"plains"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "test"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"has_biome_tag"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "operator"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"=="'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "value"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"sunflower_plains"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "test"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"has_biome_tag"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "operator"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"=="'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "value"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"flower_forest"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "bogged"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:biome_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "any_of"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "test"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"has_biome_tag"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "operator"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"=="'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "value"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"swamp"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "test"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"has_biome_tag"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "operator"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"=="'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "value"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"mangrove_swamp"')
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "chicken"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:biome_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "test"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"has_biome_tag"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "operator"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"=="'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "value"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"animal"')
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
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="brightness-filter" tabindex="-1">brightness_filter <a class="header-anchor" href="#brightness-filter" aria-label="Permalink to &quot;brightness_filter&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>armadillo</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:brightness_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>7</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>15</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;adjust_for_weather&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:brightness_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>7</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>15</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;adjust_for_weather&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:brightness_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>7</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>15</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;adjust_for_weather&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}></div></div><p${_scopeId}>bat</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:brightness_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;adjust_for_weather&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>true</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}></div></div><p${_scopeId}>bee</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:brightness_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>7</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>15</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;adjust_for_weather&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}></div></div><p${_scopeId}>bogged</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:brightness_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>7</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;adjust_for_weather&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>true</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}></div></div><p${_scopeId}>chicken</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:brightness_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>7</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>15</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;adjust_for_weather&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}></div></div><p${_scopeId}>cow</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:brightness_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>7</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>15</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;adjust_for_weather&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "armadillo"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:brightness_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "7"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "15"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "adjust_for_weather"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:brightness_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "7"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "15"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "adjust_for_weather"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:brightness_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "7"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "15"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "adjust_for_weather"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "bat"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:brightness_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "4"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "adjust_for_weather"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "true")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "bee"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:brightness_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "7"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "15"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "adjust_for_weather"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "bogged"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:brightness_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "7"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "adjust_for_weather"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "true")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "chicken"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:brightness_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "7"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "15"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "adjust_for_weather"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "cow"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:brightness_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "7"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "15"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "adjust_for_weather"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false")
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
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="delay-filter" tabindex="-1">delay_filter <a class="header-anchor" href="#delay-filter" aria-label="Permalink to &quot;delay_filter&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>pillager_patrol</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:delay_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>600</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>660</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:pillager_patrol_easy&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;spawn_chance&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>20</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:delay_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>600</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>660</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:pillager_patrol_normal&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;spawn_chance&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>20</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:delay_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>600</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>660</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:pillager_patrol_hard&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;spawn_chance&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>20</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "pillager_patrol"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:delay_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "600"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "660"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "identifier"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:pillager_patrol_easy"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "spawn_chance"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "20")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:delay_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "600"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "660"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "identifier"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:pillager_patrol_normal"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "spawn_chance"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "20")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:delay_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "600"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "660"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "identifier"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:pillager_patrol_hard"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "spawn_chance"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "20")
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
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="density-limit" tabindex="-1">density_limit <a class="header-anchor" href="#density-limit" aria-label="Permalink to &quot;density_limit&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>axolotl</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:density_limit&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;underground&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>5</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div><p${_scopeId}>bat</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:density_limit&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;surface&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>5</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div><p${_scopeId}>cod</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:density_limit&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;surface&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>20</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div><p${_scopeId}>creeper</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:density_limit&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;surface&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>5</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div><p${_scopeId}>dolphin</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:density_limit&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;surface&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>5</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;underground&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>drowned</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:density_limit&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;surface&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>5</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:density_limit&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;surface&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:density_limit&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;underground&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>5</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "axolotl"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:density_limit"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "underground"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "5")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "bat"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:density_limit"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "surface"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "5")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "cod"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:density_limit"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "surface"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "20")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "creeper"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:density_limit"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "surface"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "5")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "dolphin"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:density_limit"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "surface"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "5"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "underground"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "drowned"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:density_limit"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "surface"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "5")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:density_limit"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "surface"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "2")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:density_limit"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "underground"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "5")
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
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="difficulty-filter" tabindex="-1">difficulty_filter <a class="header-anchor" href="#difficulty-filter" aria-label="Permalink to &quot;difficulty_filter&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>bogged</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:difficulty_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;easy&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;hard&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>creeper</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:difficulty_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;easy&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;hard&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>drowned</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:difficulty_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;easy&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;hard&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:difficulty_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;easy&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;hard&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:difficulty_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;easy&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;hard&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>enderman</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:difficulty_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;easy&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;hard&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:difficulty_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;easy&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;hard&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:difficulty_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;easy&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;hard&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "bogged"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:difficulty_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"easy"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"hard"')
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "creeper"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:difficulty_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"easy"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"hard"')
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "drowned"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:difficulty_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"easy"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"hard"')
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:difficulty_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"easy"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"hard"')
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:difficulty_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"easy"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"hard"')
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "enderman"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:difficulty_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"easy"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"hard"')
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:difficulty_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"easy"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"hard"')
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:difficulty_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"easy"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"hard"')
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
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="disallow-spawns-in-bubble" tabindex="-1">disallow_spawns_in_bubble <a class="header-anchor" href="#disallow-spawns-in-bubble" aria-label="Permalink to &quot;disallow_spawns_in_bubble&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>axolotl</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:disallow_spawns_in_bubble&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "axolotl"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:disallow_spawns_in_bubble"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="distance-filter" tabindex="-1">distance_filter <a class="header-anchor" href="#distance-filter" aria-label="Permalink to &quot;distance_filter&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>cod</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:distance_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>12</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>32</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>pillager_patrol</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:distance_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>24</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>48</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:distance_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>24</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>48</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:distance_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>24</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>48</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>pufferfish</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:distance_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>12</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>32</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>salmon</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:distance_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>12</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>32</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:distance_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>12</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>32</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>tropicalfish</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:distance_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>12</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>32</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "cod"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:distance_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "12"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "32")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "pillager_patrol"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:distance_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "24"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "48")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:distance_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "24"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "48")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:distance_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "24"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "48")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "pufferfish"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:distance_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "12"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "32")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "salmon"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:distance_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "12"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "32")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:distance_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "12"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "32")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "tropicalfish"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:distance_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "12"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "32")
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
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="height-filter" tabindex="-1">height_filter <a class="header-anchor" href="#height-filter" aria-label="Permalink to &quot;height_filter&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>cod</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:height_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>64</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>dolphin</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:height_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>64</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>glow_squid</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:height_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-64</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>30</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>pufferfish</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:height_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>64</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>salmon</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:height_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>64</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:height_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>50</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>64</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>stray</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:height_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>60</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>66</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>tropicalfish</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:height_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>64</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "cod"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:height_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "64")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "dolphin"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:height_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "64")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "glow_squid"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:height_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-64"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "30")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "pufferfish"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:height_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "64")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "salmon"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:height_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "64")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:height_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "50"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "64")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "stray"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:height_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "60"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "66")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "tropicalfish"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:height_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "64")
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
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="herd" tabindex="-1">herd <a class="header-anchor" href="#herd" aria-label="Permalink to &quot;herd&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>armadillo</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:herd&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>3</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:herd&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:herd&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>axolotl</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:herd&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;event&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:entity_born&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;event_skip_count&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}></div></div><p${_scopeId}>bat</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:herd&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>8</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>bee</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:herd&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>bogged</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:herd&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>chicken</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:herd&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;max_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "armadillo"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:herd"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "2"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "3")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:herd"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "2")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:herd"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "2")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "axolotl"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:herd"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "4"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "event"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:entity_born"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "event_skip_count"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "2")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "bat"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:herd"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "8")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "bee"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:herd"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "bogged"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:herd"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "2")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "chicken"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:herd"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "2"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "max_size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "4")
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
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="mob-event-filter" tabindex="-1">mob_event_filter <a class="header-anchor" href="#mob-event-filter" aria-label="Permalink to &quot;mob_event_filter&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>pillager_patrol</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:mob_event_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;event&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:pillager_patrols_event&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:mob_event_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;event&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:pillager_patrols_event&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:mob_event_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;event&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:pillager_patrols_event&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "pillager_patrol"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:mob_event_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "event"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:pillager_patrols_event"')
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:mob_event_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "event"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:pillager_patrols_event"')
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:mob_event_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "event"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:pillager_patrols_event"')
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
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="permute-type" tabindex="-1">permute_type <a class="header-anchor" href="#permute-type" aria-label="Permalink to &quot;permute_type&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>pillager_patrol</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:permute_type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;weight&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>100</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;entity_type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:pillager&lt;minecraft:spawn_as_patrol_follower&gt;&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:permute_type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;weight&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>100</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;entity_type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:pillager&lt;minecraft:spawn_as_patrol_follower&gt;&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:permute_type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;weight&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>100</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;entity_type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:pillager&lt;minecraft:spawn_as_patrol_follower&gt;&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}></div></div><p${_scopeId}>zombie</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:permute_type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;weight&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>95</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;weight&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>5</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;entity_type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:zombie_villager_v2&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "pillager_patrol"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:permute_type"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "weight"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "100"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "entity_type"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:pillager<minecraft:spawn_as_patrol_follower>"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:permute_type"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "weight"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "100"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "entity_type"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:pillager<minecraft:spawn_as_patrol_follower>"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:permute_type"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "weight"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "100"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "entity_type"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:pillager<minecraft:spawn_as_patrol_follower>"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "zombie"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:permute_type"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "weight"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "95")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "weight"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "5"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "entity_type"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:zombie_villager_v2"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
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
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="player-in-village-filter" tabindex="-1">player_in_village_filter <a class="header-anchor" href="#player-in-village-filter" aria-label="Permalink to &quot;player_in_village_filter&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>pillager_patrol</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:player_in_village_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;distance&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>48</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;village_border_tolerance&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>32</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:player_in_village_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;distance&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>48</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;village_border_tolerance&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>32</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:player_in_village_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;distance&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>48</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;village_border_tolerance&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>32</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "pillager_patrol"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:player_in_village_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "distance"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "48"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "village_border_tolerance"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "32")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:player_in_village_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "distance"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "48"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "village_border_tolerance"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "32")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:player_in_village_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "distance"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "48"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "village_border_tolerance"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "32")
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
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="spawn-event" tabindex="-1">spawn_event <a class="header-anchor" href="#spawn-event" aria-label="Permalink to &quot;spawn_event&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>stray</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawn_event&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;event&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;change_to_skeleton&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawn_event&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;event&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;change_to_skeleton&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "stray"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawn_event"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "event"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"change_to_skeleton"')
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawn_event"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "event"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"change_to_skeleton"')
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
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="spawns-lava" tabindex="-1">spawns_lava <a class="header-anchor" href="#spawns-lava" aria-label="Permalink to &quot;spawns_lava&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>strider</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_lava&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "strider"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_lava"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="spawns-on-block-filter" tabindex="-1">spawns_on_block_filter <a class="header-anchor" href="#spawns-on-block-filter" aria-label="Permalink to &quot;spawns_on_block_filter&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>armadillo</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_block_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:grass_block&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:red_sand&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:coarse_dirt&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:brown_terracotta&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:hardened_clay&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:orange_terracotta&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:light_gray_terracotta&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:red_terracotta&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:white_terracotta&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:yellow_terracotta&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}><span class="line-number"${_scopeId}>18</span><br${_scopeId}><span class="line-number"${_scopeId}>19</span><br${_scopeId}><span class="line-number"${_scopeId}>20</span><br${_scopeId}><span class="line-number"${_scopeId}>21</span><br${_scopeId}><span class="line-number"${_scopeId}>22</span><br${_scopeId}><span class="line-number"${_scopeId}>23</span><br${_scopeId}><span class="line-number"${_scopeId}>24</span><br${_scopeId}><span class="line-number"${_scopeId}>25</span><br${_scopeId}><span class="line-number"${_scopeId}>26</span><br${_scopeId}><span class="line-number"${_scopeId}>27</span><br${_scopeId}><span class="line-number"${_scopeId}>28</span><br${_scopeId}><span class="line-number"${_scopeId}>29</span><br${_scopeId}><span class="line-number"${_scopeId}>30</span><br${_scopeId}><span class="line-number"${_scopeId}>31</span><br${_scopeId}><span class="line-number"${_scopeId}>32</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_block_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:grass_block&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:red_sand&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:coarse_dirt&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:brown_terracotta&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:hardened_clay&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:orange_terracotta&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:light_gray_terracotta&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:red_terracotta&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:white_terracotta&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:yellow_terracotta&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}><span class="line-number"${_scopeId}>18</span><br${_scopeId}><span class="line-number"${_scopeId}>19</span><br${_scopeId}><span class="line-number"${_scopeId}>20</span><br${_scopeId}><span class="line-number"${_scopeId}>21</span><br${_scopeId}><span class="line-number"${_scopeId}>22</span><br${_scopeId}><span class="line-number"${_scopeId}>23</span><br${_scopeId}><span class="line-number"${_scopeId}>24</span><br${_scopeId}><span class="line-number"${_scopeId}>25</span><br${_scopeId}><span class="line-number"${_scopeId}>26</span><br${_scopeId}><span class="line-number"${_scopeId}>27</span><br${_scopeId}><span class="line-number"${_scopeId}>28</span><br${_scopeId}><span class="line-number"${_scopeId}>29</span><br${_scopeId}><span class="line-number"${_scopeId}>30</span><br${_scopeId}><span class="line-number"${_scopeId}>31</span><br${_scopeId}><span class="line-number"${_scopeId}>32</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_block_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:grass_block&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:red_sand&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:coarse_dirt&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:brown_terracotta&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:hardened_clay&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:orange_terracotta&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:light_gray_terracotta&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:red_terracotta&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:white_terracotta&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:yellow_terracotta&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}><span class="line-number"${_scopeId}>18</span><br${_scopeId}><span class="line-number"${_scopeId}>19</span><br${_scopeId}><span class="line-number"${_scopeId}>20</span><br${_scopeId}><span class="line-number"${_scopeId}>21</span><br${_scopeId}><span class="line-number"${_scopeId}>22</span><br${_scopeId}><span class="line-number"${_scopeId}>23</span><br${_scopeId}><span class="line-number"${_scopeId}>24</span><br${_scopeId}><span class="line-number"${_scopeId}>25</span><br${_scopeId}><span class="line-number"${_scopeId}>26</span><br${_scopeId}><span class="line-number"${_scopeId}>27</span><br${_scopeId}><span class="line-number"${_scopeId}>28</span><br${_scopeId}><span class="line-number"${_scopeId}>29</span><br${_scopeId}><span class="line-number"${_scopeId}>30</span><br${_scopeId}><span class="line-number"${_scopeId}>31</span><br${_scopeId}><span class="line-number"${_scopeId}>32</span><br${_scopeId}></div></div><p${_scopeId}>axolotl</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_block_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:clay&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div><p${_scopeId}>bat</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_block_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:stone&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:granite&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:diorite&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:andesite&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:tuff&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:deepslate&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}></div></div><p${_scopeId}>chicken</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_block_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:grass_block&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div><p${_scopeId}>cow</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_block_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:grass_block&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div><p${_scopeId}>donkey</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_block_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:grass_block&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "armadillo"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_block_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:grass_block"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:red_sand"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:coarse_dirt"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:brown_terracotta"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:hardened_clay"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:orange_terracotta"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:light_gray_terracotta"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:red_terracotta"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:white_terracotta"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:yellow_terracotta"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_block_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:grass_block"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:red_sand"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:coarse_dirt"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:brown_terracotta"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:hardened_clay"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:orange_terracotta"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:light_gray_terracotta"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:red_terracotta"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:white_terracotta"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:yellow_terracotta"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_block_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:grass_block"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:red_sand"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:coarse_dirt"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:brown_terracotta"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:hardened_clay"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:orange_terracotta"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:light_gray_terracotta"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:red_terracotta"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:white_terracotta"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:yellow_terracotta"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "axolotl"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_block_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:clay"')
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "bat"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_block_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:stone"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:granite"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:diorite"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:andesite"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:tuff"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:deepslate"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "chicken"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_block_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:grass_block"')
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "cow"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_block_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:grass_block"')
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "donkey"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_block_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:grass_block"')
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="spawns-on-block-prevented-filter" tabindex="-1">spawns_on_block_prevented_filter <a class="header-anchor" href="#spawns-on-block-prevented-filter" aria-label="Permalink to &quot;spawns_on_block_prevented_filter&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>hoglin</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_block_prevented_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:nether_wart_block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:shroomlight&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>magma_cube</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_block_prevented_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:nether_wart_block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:shroomlight&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_block_prevented_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:nether_wart_block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:shroomlight&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>piglin</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_block_prevented_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:nether_wart_block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:shroomlight&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_block_prevented_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:nether_wart_block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:shroomlight&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>skeleton</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_block_prevented_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:nether_wart_block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:shroomlight&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>zombie_pigman</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_block_prevented_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:nether_wart_block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:shroomlight&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_block_prevented_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:nether_wart_block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:shroomlight&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "hoglin"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_block_prevented_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:nether_wart_block"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:shroomlight"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "magma_cube"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_block_prevented_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:nether_wart_block"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:shroomlight"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_block_prevented_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:nether_wart_block"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:shroomlight"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "piglin"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_block_prevented_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:nether_wart_block"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:shroomlight"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_block_prevented_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:nether_wart_block"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:shroomlight"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "skeleton"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_block_prevented_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:nether_wart_block"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:shroomlight"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "zombie_pigman"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_block_prevented_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:nether_wart_block"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:shroomlight"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_block_prevented_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:nether_wart_block"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:shroomlight"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
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
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="spawns-on-surface" tabindex="-1">spawns_on_surface <a class="header-anchor" href="#spawns-on-surface" aria-label="Permalink to &quot;spawns_on_surface&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>armadillo</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_surface&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_surface&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_surface&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div><p${_scopeId}>bee</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_surface&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div><p${_scopeId}>bogged</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_surface&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div><p${_scopeId}>chicken</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_surface&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div><p${_scopeId}>cod</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_surface&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div><p${_scopeId}>cow</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_on_surface&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "armadillo"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_surface"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_surface"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_surface"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "bee"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_surface"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "bogged"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_surface"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "chicken"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_surface"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "cod"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_surface"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "cow"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_on_surface"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="spawns-underground" tabindex="-1">spawns_underground <a class="header-anchor" href="#spawns-underground" aria-label="Permalink to &quot;spawns_underground&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>axolotl</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_underground&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div><p${_scopeId}>bat</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_underground&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div><p${_scopeId}>creeper</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_underground&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div><p${_scopeId}>drowned</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_underground&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div><p${_scopeId}>enderman</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_underground&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_underground&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_underground&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div><p${_scopeId}>ghast</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_underground&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "axolotl"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_underground"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "bat"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_underground"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "creeper"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_underground"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "drowned"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_underground"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "enderman"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_underground"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_underground"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_underground"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "ghast"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_underground"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="spawns-underwater" tabindex="-1">spawns_underwater <a class="header-anchor" href="#spawns-underwater" aria-label="Permalink to &quot;spawns_underwater&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>axolotl</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_underwater&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div><p${_scopeId}>cod</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_underwater&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div><p${_scopeId}>dolphin</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_underwater&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div><p${_scopeId}>drowned</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_underwater&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_underwater&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_underwater&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div><p${_scopeId}>glow_squid</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_underwater&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div><p${_scopeId}>guardian</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:spawns_underwater&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "axolotl"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_underwater"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "cod"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_underwater"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "dolphin"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_underwater"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "drowned"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_underwater"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_underwater"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_underwater"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "glow_squid"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_underwater"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "guardian"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:spawns_underwater"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="weight" tabindex="-1">weight <a class="header-anchor" href="#weight" aria-label="Permalink to &quot;weight&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>armadillo</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:weight&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>10</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:weight&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;rarity&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>3</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:weight&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;rarity&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}></div></div><p${_scopeId}>axolotl</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:weight&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>10</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div><p${_scopeId}>bat</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:weight&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>10</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div><p${_scopeId}>bee</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:weight&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>10</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div><p${_scopeId}>bogged</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:weight&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>40</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div><p${_scopeId}>chicken</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:weight&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>10</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "armadillo"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:weight"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "default"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "10")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:weight"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "default"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "rarity"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "3")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:weight"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "default"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "rarity"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "2")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "axolotl"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:weight"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "default"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "10")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "bat"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:weight"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "default"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "10")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "bee"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:weight"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "default"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "10")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "bogged"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:weight"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "default"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "40")
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, "chicken"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:weight"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "default"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "10")
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
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="world-age-filter" tabindex="-1">world_age_filter <a class="header-anchor" href="#world-age-filter" aria-label="Permalink to &quot;world_age_filter&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>pillager_patrol</p>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:world_age_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6000</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:world_age_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6000</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;minecraft:world_age_filter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6000</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, "pillager_patrol"),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:world_age_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6000")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:world_age_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6000")
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
              createVNode("br")
            ])
          ]),
          createVNode(_component_CodeHeader),
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"minecraft:world_age_filter"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6000")
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
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/vanilla-usage-spawn-rules.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vanillaUsageSpawnRules = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vanillaUsageSpawnRules as default
};
