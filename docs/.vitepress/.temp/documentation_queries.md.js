import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Molang クエリ","description":"いくつかの Molang クエリを解説します。","frontmatter":{"title":"Molang クエリ","description":"いくつかの Molang クエリを解説します。","outline_depth":2,"mentions":["SirLich","solvedDev","stirante","SmokeyStack","Dreamedc2015","Ultr4Anubis","MedicalJewel105","TreaBeane","r4isen1920","ChillRx","Lufurrius","TheItsNameless","ThomasOrs"]},"headers":[{"level":2,"title":"query.armor_texture_slot","slug":"query-armor-texture-slot","link":"#query-armor-texture-slot","children":[{"level":3,"title":"X","slug":"x","link":"#x","children":[]},{"level":3,"title":"Y","slug":"y","link":"#y","children":[]},{"level":3,"title":"Y for horses","slug":"y-for-horses","link":"#y-for-horses","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"query.armor_material_slot","slug":"query-armor-material-slot","link":"#query-armor-material-slot","children":[{"level":3,"title":"X","slug":"x-1","link":"#x-1","children":[]},{"level":3,"title":"Y","slug":"y-1","link":"#y-1","children":[]}]},{"level":2,"title":"query.armor_color_slot","slug":"query-armor-color-slot","link":"#query-armor-color-slot","children":[{"level":3,"title":"Slot","slug":"slot","link":"#slot","children":[]},{"level":3,"title":"Channel","slug":"channel","link":"#channel","children":[]},{"level":3,"title":"Color","slug":"color","link":"#color","children":[]}]},{"level":2,"title":"query.get_equipped_item_name","slug":"query-get-equipped-item-name","link":"#query-get-equipped-item-name","children":[]},{"level":2,"title":"query.get_name","slug":"query-get-name","link":"#query-get-name","children":[]},{"level":2,"title":"query.is_name_any","slug":"query-is-name-any","link":"#query-is-name-any","children":[]},{"level":2,"title":"query.is_item_name_any","slug":"query-is-item-name-any","link":"#query-is-item-name-any","children":[{"level":3,"title":"Test for items within the player's inventory","slug":"test-for-items-within-the-player-s-inventory","link":"#test-for-items-within-the-player-s-inventory","children":[]}]},{"level":2,"title":"query.is_enchanted","slug":"query-is-enchanted","link":"#query-is-enchanted","children":[]},{"level":2,"title":"query.is_eating","slug":"query-is-eating","link":"#query-is-eating","children":[]},{"level":2,"title":"query.is_ghost","slug":"query-is-ghost","link":"#query-is-ghost","children":[]},{"level":2,"title":"query.is_grazing","slug":"query-is-grazing","link":"#query-is-grazing","children":[]},{"level":2,"title":"query.is_jumping","slug":"query-is-jumping","link":"#query-is-jumping","children":[]},{"level":2,"title":"query.modified_move_speed","slug":"query-modified-move-speed","link":"#query-modified-move-speed","children":[]},{"level":2,"title":"query.log","slug":"query-log","link":"#query-log","children":[]},{"level":2,"title":"query.on_fire_time","slug":"query-on-fire-time","link":"#query-on-fire-time","children":[]},{"level":2,"title":"query.scoreboard","slug":"query-scoreboard","link":"#query-scoreboard","children":[]},{"level":2,"title":"query.structural_integrity","slug":"query-structural-integrity","link":"#query-structural-integrity","children":[]},{"level":2,"title":"variable.attack_time","slug":"variable-attack-time","link":"#variable-attack-time","children":[{"level":3,"title":"Explanation","slug":"explanation","link":"#explanation","children":[]},{"level":3,"title":"For entities","slug":"for-entities","link":"#for-entities","children":[]},{"level":3,"title":"For the Player","slug":"for-the-player","link":"#for-the-player","children":[]}]},{"level":2,"title":"query.is_roaring","slug":"query-is-roaring","link":"#query-is-roaring","children":[]},{"level":2,"title":"query.head_x_rotation","slug":"query-head-x-rotation","link":"#query-head-x-rotation","children":[]},{"level":2,"title":"query.head_y_rotation","slug":"query-head-y-rotation","link":"#query-head-y-rotation","children":[]},{"level":2,"title":"query.target_x_rotation and query.target_y_rotation","slug":"query-target-x-rotation-and-query-target-y-rotation","link":"#query-target-x-rotation-and-query-target-y-rotation","children":[]},{"level":2,"title":"query.time_of_day","slug":"query-time-of-day","link":"#query-time-of-day","children":[]},{"level":2,"title":"query.eye_target_x_rotation and query.eye_target_y_rotation","slug":"query-eye-target-x-rotation-and-query-eye-target-y-rotation","link":"#query-eye-target-x-rotation-and-query-eye-target-y-rotation","children":[]},{"level":2,"title":"variable.short_arm_offset_right","slug":"variable-short-arm-offset-right","link":"#variable-short-arm-offset-right","children":[]},{"level":2,"title":"variable.short_arm_offset_left","slug":"variable-short-arm-offset-left","link":"#variable-short-arm-offset-left","children":[]},{"level":2,"title":"query.movement_direction","slug":"query-movement-direction","link":"#query-movement-direction","children":[]},{"level":2,"title":"query.block_neighbor_has_any_tag and query.relative_block_has_any_tag","slug":"query-block-neighbor-has-any-tag-and-query-relative-block-has-any-tag","link":"#query-block-neighbor-has-any-tag-and-query-relative-block-has-any-tag","children":[]}],"relativePath":"documentation/queries.md","filePath":"documentation/queries.md"}`);
const _sfc_main = { name: "documentation/queries.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Spoiler = resolveComponent("Spoiler");
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Bedrock の Molang ドキュメントは、悪名高いほど分かりづらいです。このページでは、可能な限り個別のクエリに追加情報を与えることで、その問題を少しでも改善しようとしています。このページは通読するものではなく、検索して使うことを想定しています。サイドバーを使うか、<code class="shiki"><span>ctrl-f</span></code> で移動してください。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>このページは網羅的な一覧ではありません。追加情報を書いたクエリだけを載せています。完全な一覧は <a href="https://bedrock.dev/docs/stable/Molang#List%20of%20Entity%20Queries" target="_blank" rel="noreferrer">こちら</a> で確認できます。</p></div><h2 id="query-armor-texture-slot" tabindex="-1">query.armor_texture_slot <a class="header-anchor" href="#query-armor-texture-slot" aria-label="Permalink to &quot;query.armor_texture_slot&quot;">​</a></h2><p>Formatted like: <code class="shiki"><span>query.armor_texture_slot(x) = y</span></code>.</p><p>Where <code class="shiki"><span>x</span></code> and <code class="shiki"><span>y</span></code> are both integer arguments, from the following table:</p><h3 id="x" tabindex="-1">X <a class="header-anchor" href="#x" aria-label="Permalink to &quot;X&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Argument</th><th>Slot</th></tr></thead><tbody><tr><td>0</td><td>Helmet</td></tr><tr><td>1</td><td>Chestplace</td></tr><tr><td>2</td><td>Leggings</td></tr><tr><td>3</td><td>Boots</td></tr></tbody></table><h3 id="y" tabindex="-1">Y <a class="header-anchor" href="#y" aria-label="Permalink to &quot;Y&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Argument</th><th>Type</th></tr></thead><tbody><tr><td>-1</td><td>none</td></tr><tr><td>0</td><td>Leather armor piece</td></tr><tr><td>1</td><td>Chain armor piece</td></tr><tr><td>2</td><td>Iron armor piece</td></tr><tr><td>3</td><td>Diamond armor piece</td></tr><tr><td>4</td><td>Gold armor piece</td></tr><tr><td>5</td><td>Elytra</td></tr><tr><td>6</td><td>Turtle helmet</td></tr><tr><td>7</td><td>Netherite armor piece</td></tr></tbody></table><h3 id="y-for-horses" tabindex="-1">Y for horses <a class="header-anchor" href="#y-for-horses" aria-label="Permalink to &quot;Y for horses&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Argument</th><th>Type</th></tr></thead><tbody><tr><td>1</td><td>Leather armor piece</td></tr><tr><td>2</td><td>Iron armor piece</td></tr><tr><td>3</td><td>Gold armor piece</td></tr><tr><td>4</td><td>Diamond armor piece</td></tr></tbody></table><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p><code class="shiki"><span>query.armor_texture_slot(3) == 1</span></code>: queries for Iron Boots.</p><h2 id="query-armor-material-slot" tabindex="-1">query.armor_material_slot <a class="header-anchor" href="#query-armor-material-slot" aria-label="Permalink to &quot;query.armor_material_slot&quot;">​</a></h2><p>Formatted like: <code class="shiki"><span>query.armor_material_slot(x) = y</span></code>.</p><p>Where <code class="shiki"><span>x</span></code> and <code class="shiki"><span>y</span></code> are both integer arguments, from the following table:</p><h3 id="x-1" tabindex="-1">X <a class="header-anchor" href="#x-1" aria-label="Permalink to &quot;X&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Argument</th><th>Slot</th></tr></thead><tbody><tr><td>0</td><td>Helmet</td></tr><tr><td>1</td><td>Chestplace</td></tr><tr><td>2</td><td>Leggings</td></tr><tr><td>3</td><td>Boots</td></tr></tbody></table><h3 id="y-1" tabindex="-1">Y <a class="header-anchor" href="#y-1" aria-label="Permalink to &quot;Y&quot;">​</a></h3><p>Unknown, possibly:</p><table tabindex="0"><thead><tr><th>Argument</th><th>Slot</th></tr></thead><tbody><tr><td>0</td><td>Default armor material</td></tr><tr><td>1</td><td>Enchanted armor material</td></tr><tr><td>2</td><td>Leather armor material</td></tr><tr><td>3</td><td>Leather enchanted material</td></tr></tbody></table><h2 id="query-armor-color-slot" tabindex="-1">query.armor_color_slot <a class="header-anchor" href="#query-armor-color-slot" aria-label="Permalink to &quot;query.armor_color_slot&quot;">​</a></h2><p><em>Notice: As of version <code class="shiki"><span>1.16.100.51</span></code>, this query is crashing minecraft. It might be fixed in later versions.</em></p><p>Formatted like: <code class="shiki"><span>color = query.armor_color_slot(slot, channel)</span></code>.</p><p>Where <code class="shiki"><span>slot</span></code> and <code class="shiki"><span>channel</span></code> are both integer arguments, from the following tables:</p><h3 id="slot" tabindex="-1">Slot <a class="header-anchor" href="#slot" aria-label="Permalink to &quot;Slot&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Argument</th><th>Slot</th></tr></thead><tbody><tr><td>0</td><td>Helmet</td></tr><tr><td>1</td><td>Chestplace</td></tr><tr><td>2</td><td>Leggings</td></tr><tr><td>3</td><td>Boots</td></tr></tbody></table><h3 id="channel" tabindex="-1">Channel <a class="header-anchor" href="#channel" aria-label="Permalink to &quot;Channel&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Argument</th><th>Slot</th></tr></thead><tbody><tr><td>0</td><td>Red channel</td></tr><tr><td>1</td><td>Green channel</td></tr><tr><td>2</td><td>Blue channel</td></tr><tr><td>3</td><td>Alpha channel</td></tr></tbody></table><h3 id="color" tabindex="-1">Color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;Color&quot;">​</a></h3><p>Query returns color value in specified channel.</p><h2 id="query-get-equipped-item-name" tabindex="-1">query.get_equipped_item_name <a class="header-anchor" href="#query-get-equipped-item-name" aria-label="Permalink to &quot;query.get_equipped_item_name&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>DEPRECATED QUERY:</strong> It is recommended to use the new query (<code class="shiki"><span>query.is_item_name_any</span></code>) if possible as it is more of an updated version of this query. However, this query will still continue to work in the future for backwards compatibility.</p></div><p>Formatted like: <code class="shiki"><span>query.get_equipped_item_name(&#39;main_hand&#39;) = &#39;item_name&#39;</span></code></p><p>Takes one optional hand slot as a parameter (0 or &#39;main_hand&#39; for main hand, 1 or &#39;off_hand&#39; for off hand), and a second parameter (0=default) if you would like the equipped item or any non-zero number for the currently rendered item, and returns the name of the item in the requested slot (defaulting to the main hand if no parameter is supplied) if there is one, otherwise returns &#39;&#39;.</p><p>Where <code class="shiki"><span>item_name</span></code> is the item you want to test for. No namespace, and please notice the quotes.</p><p>Example: <code class="shiki"><span>&quot;query.get_equipped_item_name == &#39;diamond&#39;&quot;</span></code></p><p><strong>Can you test for items in the inventory? Yes! Using the new query <code class="shiki"><span>query.is_item_name_any</span></code>.</strong></p><h2 id="query-get-name" tabindex="-1">query.get_name <a class="header-anchor" href="#query-get-name" aria-label="Permalink to &quot;query.get_name&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>DEPRECATED QUERY:</strong> It is recommended to use the new query (<code class="shiki"><span>query.is_name_any</span></code>) if possible as it is more of an updated version of this query. However, this query will still continue to work in the future for backwards compatibility.</p></div><p>Formatted like: <code class="shiki"><span>query.get_name == &#39;Name&#39;</span></code></p><p>Turns true if actual in-game displayed name matches name (use OnixClient to see names in third view). Needs to be used in special conditions.</p>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`animation_controllers/ac.json`);
            } else {
              return [
                createTextVNode("animation_controllers/ac.json")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;1.10.0&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;animation_controllers&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;controller.animation.ac&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;initial_state&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;states&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;transitions&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;active&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;query.is_alive&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;active&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;transitions&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;(1.0)&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    ],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;animations&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;anim&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;query.get_name == &#39;...&#39;&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> // You can use it only here!</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}><span class="line-number"${_scopeId}>18</span><br${_scopeId}><span class="line-number"${_scopeId}>19</span><br${_scopeId}><span class="line-number"${_scopeId}>20</span><br${_scopeId}><span class="line-number"${_scopeId}>21</span><br${_scopeId}><span class="line-number"${_scopeId}>22</span><br${_scopeId}><span class="line-number"${_scopeId}>23</span><br${_scopeId}><span class="line-number"${_scopeId}>24</span><br${_scopeId}><span class="line-number"${_scopeId}>25</span><br${_scopeId}><span class="line-number"${_scopeId}>26</span><br${_scopeId}><span class="line-number"${_scopeId}>27</span><br${_scopeId}><span class="line-number"${_scopeId}>28</span><br${_scopeId}><span class="line-number"${_scopeId}>29</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode(_component_CodeHeader, null, {
            default: withCtx(() => [
              createTextVNode("animation_controllers/ac.json")
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
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"1.10.0"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "animation_controllers"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "controller.animation.ac"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "initial_state"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"default"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "states"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "default"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "transitions"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "active"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"query.is_alive"')
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
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "active"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "transitions"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "default"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"(1.0)"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    ],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "animations"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "anim"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"query.get_name == '...'"`),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " // You can use it only here!")
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
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            }")
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
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="query-is-name-any" tabindex="-1">query.is_name_any <a class="header-anchor" href="#query-is-name-any" aria-label="Permalink to &quot;query.is_name_any&quot;">​</a></h2><p>Formatted like: <code class="shiki"><span>query.get_name(&#39;Name1&#39;, &#39;Name2&#39;)</span></code>. Takes one or more arguments. Turns true if actual in-game displayed name matches one of the given names. Needs to be used in special conditions.</p>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`animation_controllers/ac.json`);
            } else {
              return [
                createTextVNode("animation_controllers/ac.json")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;1.10.0&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;animation_controllers&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;controller.animation.ac&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;initial_state&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;states&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;transitions&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;active&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;query.is_alive&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;active&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;transitions&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;(1.0)&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    ],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;animations&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;anim&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;query.is_name_any(...)&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> // You can use it only here!</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}><span class="line-number"${_scopeId}>18</span><br${_scopeId}><span class="line-number"${_scopeId}>19</span><br${_scopeId}><span class="line-number"${_scopeId}>20</span><br${_scopeId}><span class="line-number"${_scopeId}>21</span><br${_scopeId}><span class="line-number"${_scopeId}>22</span><br${_scopeId}><span class="line-number"${_scopeId}>23</span><br${_scopeId}><span class="line-number"${_scopeId}>24</span><br${_scopeId}><span class="line-number"${_scopeId}>25</span><br${_scopeId}><span class="line-number"${_scopeId}>26</span><br${_scopeId}><span class="line-number"${_scopeId}>27</span><br${_scopeId}><span class="line-number"${_scopeId}>28</span><br${_scopeId}><span class="line-number"${_scopeId}>29</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode(_component_CodeHeader, null, {
            default: withCtx(() => [
              createTextVNode("animation_controllers/ac.json")
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
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"1.10.0"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "animation_controllers"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "controller.animation.ac"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "initial_state"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"default"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "states"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "default"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "transitions"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "active"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"query.is_alive"')
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
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "active"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "transitions"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "default"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"(1.0)"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    ],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "animations"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "anim"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"query.is_name_any(...)"'),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " // You can use it only here!")
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
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            }")
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
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="query-is-item-name-any" tabindex="-1">query.is_item_name_any <a class="header-anchor" href="#query-is-item-name-any" aria-label="Permalink to &quot;query.is_item_name_any&quot;">​</a></h2><p>Formatted like: <code class="shiki"><span>query.is_item_name_any(&#39;slot.weapon.mainhand&#39;, 0, &#39;namespace:item_name&#39;)</span></code></p><p>Takes the equipment slot name first, followed by the slot index value, and then the list of item names with namespaces after it.</p><p>Possible equipment slot are as follows:</p><table tabindex="0"><thead><tr><th>Slot Name</th><th>Slot Counts</th><th>Description</th></tr></thead><tbody><tr><td><code class="shiki"><span>slot.weapon.mainhand</span></code></td><td>0</td><td>Usually any held items are in here</td></tr><tr><td><code class="shiki"><span>slot.weapon.offhand</span></code></td><td>0</td><td>Offhand slot for things like <code class="shiki"><span>Shield</span></code>, <code class="shiki"><span>Totem of Undying</span></code> or a <code class="shiki"><span>Map</span></code></td></tr><tr><td><code class="shiki"><span>slot.armor.head</span></code></td><td>0</td><td>Head armor piece</td></tr><tr><td><code class="shiki"><span>slot.armor.chest</span></code></td><td>0</td><td>Chestplate armor piece</td></tr><tr><td><code class="shiki"><span>slot.armor.legs</span></code></td><td>0</td><td>Leggings armor piece</td></tr><tr><td><code class="shiki"><span>slot.armor.feet</span></code></td><td>0</td><td>Boots armor piece</td></tr><tr><td><code class="shiki"><span>slot.armor</span></code></td><td>0</td><td>Horse armor</td></tr><tr><td><code class="shiki"><span>slot.saddle</span></code></td><td>0</td><td>Saddle slot</td></tr><tr><td><code class="shiki"><span>slot.hotbar</span></code></td><td>0 to 8</td><td>Player hotbar slots</td></tr><tr><td><code class="shiki"><span>slot.inventory</span></code></td><td>0+ (varies)</td><td>Entities that has an inventory, like the player, minecart with chests, donkey, etc.</td></tr><tr><td><code class="shiki"><span>slot.enderchest</span></code></td><td>0 to 26</td><td>Ender chest inventory for players only</td></tr></tbody></table><h3 id="test-for-items-within-the-player-s-inventory" tabindex="-1">Test for items within the player&#39;s inventory <a class="header-anchor" href="#test-for-items-within-the-player-s-inventory" aria-label="Permalink to &quot;Test for items within the player&#39;s inventory&quot;">​</a></h3><p>Formatted like: <code class="shiki"><span>t.val = 0; t.i = 0; loop(27, {t.val = q.is_item_name_any(&#39;slot.inventory&#39;, t.i, &#39;namespace:item_name&#39;); t.val ? break; t.i = t.i+1;});</span></code></p><p>Replace <code class="shiki"><span>namespace:item_name</span></code> with any item you wish to check for. This simply loops through all 27 slots of the inventory and returns <code class="shiki"><span>1.0</span></code> if it has found any slot that has the specified item provided. Note that the hotbar is in a different slot from the main inventory slot so you will have to check that separately.</p><h2 id="query-is-enchanted" tabindex="-1">query.is_enchanted <a class="header-anchor" href="#query-is-enchanted" aria-label="Permalink to &quot;query.is_enchanted&quot;">​</a></h2><p>Formatted like: <code class="shiki"><span>is_enchanted = query.is_enchanted</span></code>.</p><p>Return 1.0 or 0.0 based on whether the entity is enchanted.</p><p><em>Currently, can be only used in materials.</em></p><h2 id="query-is-eating" tabindex="-1">query.is_eating <a class="header-anchor" href="#query-is-eating" aria-label="Permalink to &quot;query.is_eating&quot;">​</a></h2><p>This query tracks when certain entities are &#39;eating&#39;. It&#39;s not used for the player. To trigger, use one of the following components: - <code class="shiki"><span>minecraft:behavior.eat_carried_item</span></code> - <code class="shiki"><span>minecraft:behavior.snacking</span></code></p><h2 id="query-is-ghost" tabindex="-1">query.is_ghost <a class="header-anchor" href="#query-is-ghost" aria-label="Permalink to &quot;query.is_ghost&quot;">​</a></h2><p>Formatted like: <code class="shiki"><span>is_ghost = query.is_ghost</span></code>.</p><p>Return 1.0 or 0.0 based on whether the entity is a ghost.</p><p><em>Currently, only returns 1.0 for a guardian ghost and is used by its renderer.</em></p><h2 id="query-is-grazing" tabindex="-1">query.is_grazing <a class="header-anchor" href="#query-is-grazing" aria-label="Permalink to &quot;query.is_grazing&quot;">​</a></h2><p>Formatted like: <code class="shiki"><span>is_grazing = query.is_grazing</span></code>.</p><p>Return 1.0 or 0.0 based on whether the entity is eating a block.</p><p><em>Currently, only returns 1.0 for a sheep and entities using runtime identifier of a sheep.</em></p><h2 id="query-is-jumping" tabindex="-1">query.is_jumping <a class="header-anchor" href="#query-is-jumping" aria-label="Permalink to &quot;query.is_jumping&quot;">​</a></h2><p>Formatted like: <code class="shiki"><span>is_jumping = query.is_jumping</span></code>.</p><p>Return 1.0 or 0.0 based on whether the entity is jumping.</p><p>For the player, conditions for its activation are:</p><ul><li>the jump button is pressed (includes being in water and climbing a scaffolding)</li><li>OR auto-jump is triggered</li><li>OR swimming with auto-jump</li><li>OR charging the jump of a ridable entity</li></ul><h2 id="query-modified-move-speed" tabindex="-1">query.modified_move_speed <a class="header-anchor" href="#query-modified-move-speed" aria-label="Permalink to &quot;query.modified_move_speed&quot;">​</a></h2><p>Formatted like: <code class="shiki"><span>modified_move_speed = query.modified_move_speed</span></code>.</p><p>Returns the current walk speed of the entity modified by status flags such as is_baby or on_fire</p><p>Value example:</p><ul><li>Player is walking: around 0.86</li><li>Player is sprinting: 1.0</li><li>Player is sprinting and jumping: 0.35</li><li>Player is walking on fire: 1.0</li><li>Player is sprinting on fire: 1.0</li><li>Player is sprinting and jumping on fire: 0.525</li></ul><h2 id="query-log" tabindex="-1">query.log <a class="header-anchor" href="#query-log" aria-label="Permalink to &quot;query.log&quot;">​</a></h2><p>Content log is NOT debug log, they&#39;re different files. <code class="shiki"><span>query.log</span></code> outputs to the debug log only.</p><h2 id="query-on-fire-time" tabindex="-1">query.on_fire_time <a class="header-anchor" href="#query-on-fire-time" aria-label="Permalink to &quot;query.on_fire_time&quot;">​</a></h2><p>Formatted like: <code class="shiki"><span>on_fire_time = query.on_fire_time</span></code>.</p><p>Returns the time in ticks since the entity started or stopped being on fire, else it returns 0.0</p><p>Value example:</p><ul><li>Entity is summoned: value is 0</li><li>Entity is ignited: value is 0 and starts counting up 1 every tick</li><li>Entity is on fire for 2 seconds already: value is 40 and still counts up 1 every tick</li><li>Entity stops being on fire: value resets to 0 and continues to count up 1 every tick despite not being on fire</li><li>Entity is ignited second time: value resets to 0 and continues counting up 1 every tick</li><li>Entity stops being on fire the second time: value resets to 0 and continues to count up 1 every tick despite not being on fire</li></ul><p>Basically it&#39;s tick timer that starts after entity is first ignited and resets every time it changes from/to being on fire.</p><h2 id="query-scoreboard" tabindex="-1">query.scoreboard <a class="header-anchor" href="#query-scoreboard" aria-label="Permalink to &quot;query.scoreboard&quot;">​</a></h2><p>Formatted like: <code class="shiki"><span>query.scoreboard(&#39;objective_name&#39;) &gt; 0</span></code></p><p>Returns 1.0 or 0.0 if the queried value is within the specified range provided. Or based on score count, molang operator and number.</p><p>Note that sometimes it might not work because of unknown reasons. One of which is that this cannot query scoreboard objective names with uppercase letters. In this case, for example, objective <code class="shiki"><span>testfoo</span></code> will work but <strong>not</strong> <code class="shiki"><span>testFoo</span></code>.</p><h2 id="query-structural-integrity" tabindex="-1">query.structural_integrity <a class="header-anchor" href="#query-structural-integrity" aria-label="Permalink to &quot;query.structural_integrity&quot;">​</a></h2><p>Formatted like: <code class="shiki"><span>structural_integrity = query.structural_integrity</span></code>.</p><p>Used by boats and minecarts for destroying it. It will decrease when attacking the entity and will recover with time. Probably unusable by anything other than boats and minecarts.</p><h2 id="variable-attack-time" tabindex="-1">variable.attack_time <a class="header-anchor" href="#variable-attack-time" aria-label="Permalink to &quot;variable.attack_time&quot;">​</a></h2><h3 id="explanation" tabindex="-1">Explanation <a class="header-anchor" href="#explanation" aria-label="Permalink to &quot;Explanation&quot;">​</a></h3><p>This variable is setup as IF it was a query. In other words, it can be used on any entity, both on the client and server, regardless of whether you setup/define the variable correctly.</p><h3 id="for-entities" tabindex="-1">For entities <a class="header-anchor" href="#for-entities" aria-label="Permalink to &quot;For entities&quot;">​</a></h3><p>The variable tracks when the entity is swinging to attack. When not attacking, it will return 0.0, when attacking it will range from 0.0 to the total attack time, which may be around 0.3 or something similar. For players, this value ranges from 0.0 to 1.0. The variable returns a percentage, in the form of a decimal, for how far into the attack the entity is. For example, if an entity is halfway into its attack swing, then the variable will return 0.5. It increments linearly.</p><h3 id="for-the-player" tabindex="-1">For the Player <a class="header-anchor" href="#for-the-player" aria-label="Permalink to &quot;For the Player&quot;">​</a></h3><p>For the player, the variable will track whenever the arm bones are swinging, this includes:</p><ul><li>placing blocks</li><li>placing entities</li><li>interacting (when swing is enabled)</li><li>melee attack</li></ul><h2 id="query-is-roaring" tabindex="-1">query.is_roaring <a class="header-anchor" href="#query-is-roaring" aria-label="Permalink to &quot;query.is_roaring&quot;">​</a></h2><p>Evaluates to true when a <code class="shiki"><span>knockback_roar</span></code> attack is happening.</p><h2 id="query-head-x-rotation" tabindex="-1">query.head_x_rotation <a class="header-anchor" href="#query-head-x-rotation" aria-label="Permalink to &quot;query.head_x_rotation&quot;">​</a></h2><p>Formatted like: <code class="shiki"><span>query.head_x_rotation(x)</span></code></p><p>Where <code class="shiki"><span>x</span></code> specifies the head of the entity. It is not really relevant for any entity but the wither.</p><p>Returns head pitch. looking up returns <code class="shiki"><span>-89.9</span></code>, looking all the way down returns <code class="shiki"><span>89.9</span></code>.</p><h2 id="query-head-y-rotation" tabindex="-1">query.head_y_rotation <a class="header-anchor" href="#query-head-y-rotation" aria-label="Permalink to &quot;query.head_y_rotation&quot;">​</a></h2><p>Formatted like: <code class="shiki"><span>query.head_y_rotation(x)</span></code></p><p>Where <code class="shiki"><span>x</span></code> specifies the head of the entity. It is not really relevant for any entity but the wither.</p><p>Returns yaw of the head from <code class="shiki"><span>-179.9</span></code> to <code class="shiki"><span>179.9</span></code>. the values wrap around so like if you are at <code class="shiki"><span>-179.9</span></code> and you turn just a little bit, it instantly goes to <code class="shiki"><span>179.9</span></code>.</p><h2 id="query-target-x-rotation-and-query-target-y-rotation" tabindex="-1">query.target_x_rotation and query.target_y_rotation <a class="header-anchor" href="#query-target-x-rotation-and-query-target-y-rotation" aria-label="Permalink to &quot;query.target_x_rotation and query.target_y_rotation&quot;">​</a></h2><p>Identical to the respective <code class="shiki"><span>query.head_*_rotation</span></code>, however has no optional argument for selecting head.</p><h2 id="query-time-of-day" tabindex="-1">query.time_of_day <a class="header-anchor" href="#query-time-of-day" aria-label="Permalink to &quot;query.time_of_day&quot;">​</a></h2><p>Returns the time of day (midnight=0.0, sunrise=0.25, noon=0.5, sunset=0.75) of the dimension the entity is in. Day time is calculated via this formula:</p><p><code class="shiki"><span>f(x) = (x*0.25/2400)mod 1</span></code></p><p>query.time_of_day - day time table</p>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table tabindex="0"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}><code class="shiki"${_scopeId}><span${_scopeId}>query.time_of_day</span></code></th><th${_scopeId}>Day Time</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>0.00</td><td${_scopeId}>18000</td></tr><tr${_scopeId}><td${_scopeId}>0.01</td><td${_scopeId}>18240</td></tr><tr${_scopeId}><td${_scopeId}>0.02</td><td${_scopeId}>18480</td></tr><tr${_scopeId}><td${_scopeId}>0.03</td><td${_scopeId}>18720</td></tr><tr${_scopeId}><td${_scopeId}>0.04</td><td${_scopeId}>18960</td></tr><tr${_scopeId}><td${_scopeId}>0.05</td><td${_scopeId}>19200</td></tr><tr${_scopeId}><td${_scopeId}>0.06</td><td${_scopeId}>19440</td></tr><tr${_scopeId}><td${_scopeId}>0.07</td><td${_scopeId}>19680</td></tr><tr${_scopeId}><td${_scopeId}>0.08</td><td${_scopeId}>19920</td></tr><tr${_scopeId}><td${_scopeId}>0.09</td><td${_scopeId}>20162</td></tr><tr${_scopeId}><td${_scopeId}>0.10</td><td${_scopeId}>20400</td></tr><tr${_scopeId}><td${_scopeId}>0.11</td><td${_scopeId}>20640</td></tr><tr${_scopeId}><td${_scopeId}>0.12</td><td${_scopeId}>20880</td></tr><tr${_scopeId}><td${_scopeId}>0.13</td><td${_scopeId}>21120</td></tr><tr${_scopeId}><td${_scopeId}>0.14</td><td${_scopeId}>21360</td></tr><tr${_scopeId}><td${_scopeId}>0.15</td><td${_scopeId}>21602</td></tr><tr${_scopeId}><td${_scopeId}>0.16</td><td${_scopeId}>21840</td></tr><tr${_scopeId}><td${_scopeId}>0.17</td><td${_scopeId}>22080</td></tr><tr${_scopeId}><td${_scopeId}>0.18</td><td${_scopeId}>22322</td></tr><tr${_scopeId}><td${_scopeId}>0.19</td><td${_scopeId}>22560</td></tr><tr${_scopeId}><td${_scopeId}>0.20</td><td${_scopeId}>22800</td></tr><tr${_scopeId}><td${_scopeId}>0.21</td><td${_scopeId}>23040</td></tr><tr${_scopeId}><td${_scopeId}>0.22</td><td${_scopeId}>23280</td></tr><tr${_scopeId}><td${_scopeId}>0.23</td><td${_scopeId}>23520</td></tr><tr${_scopeId}><td${_scopeId}>0.24</td><td${_scopeId}>23760</td></tr><tr${_scopeId}><td${_scopeId}>0.25</td><td${_scopeId}>0</td></tr><tr${_scopeId}><td${_scopeId}>0.26</td><td${_scopeId}>240</td></tr><tr${_scopeId}><td${_scopeId}>0.27</td><td${_scopeId}>480</td></tr><tr${_scopeId}><td${_scopeId}>0.28</td><td${_scopeId}>720</td></tr><tr${_scopeId}><td${_scopeId}>0.29</td><td${_scopeId}>960</td></tr><tr${_scopeId}><td${_scopeId}>0.30</td><td${_scopeId}>1202</td></tr><tr${_scopeId}><td${_scopeId}>0.31</td><td${_scopeId}>1440</td></tr><tr${_scopeId}><td${_scopeId}>0.32</td><td${_scopeId}>1680</td></tr><tr${_scopeId}><td${_scopeId}>0.33</td><td${_scopeId}>1922</td></tr><tr${_scopeId}><td${_scopeId}>0.34</td><td${_scopeId}>2160</td></tr><tr${_scopeId}><td${_scopeId}>0.35</td><td${_scopeId}>2400</td></tr><tr${_scopeId}><td${_scopeId}>0.36</td><td${_scopeId}>2642</td></tr><tr${_scopeId}><td${_scopeId}>0.37</td><td${_scopeId}>2880</td></tr><tr${_scopeId}><td${_scopeId}>0.38</td><td${_scopeId}>3120</td></tr><tr${_scopeId}><td${_scopeId}>0.39</td><td${_scopeId}>3360</td></tr><tr${_scopeId}><td${_scopeId}>0.40</td><td${_scopeId}>3600</td></tr><tr${_scopeId}><td${_scopeId}>0.41</td><td${_scopeId}>3840</td></tr><tr${_scopeId}><td${_scopeId}>0.42</td><td${_scopeId}>4080</td></tr><tr${_scopeId}><td${_scopeId}>0.43</td><td${_scopeId}>4320</td></tr><tr${_scopeId}><td${_scopeId}>0.44</td><td${_scopeId}>4560</td></tr><tr${_scopeId}><td${_scopeId}>0.45</td><td${_scopeId}>4800</td></tr><tr${_scopeId}><td${_scopeId}>0.46</td><td${_scopeId}>5040</td></tr><tr${_scopeId}><td${_scopeId}>0.47</td><td${_scopeId}>5280</td></tr><tr${_scopeId}><td${_scopeId}>0.48</td><td${_scopeId}>5520</td></tr><tr${_scopeId}><td${_scopeId}>0.49</td><td${_scopeId}>5760</td></tr><tr${_scopeId}><td${_scopeId}>0.50</td><td${_scopeId}>6000</td></tr><tr${_scopeId}><td${_scopeId}>0.51</td><td${_scopeId}>6240</td></tr><tr${_scopeId}><td${_scopeId}>0.52</td><td${_scopeId}>6480</td></tr><tr${_scopeId}><td${_scopeId}>0.53</td><td${_scopeId}>6720</td></tr><tr${_scopeId}><td${_scopeId}>0.54</td><td${_scopeId}>6960</td></tr><tr${_scopeId}><td${_scopeId}>0.55</td><td${_scopeId}>7200</td></tr><tr${_scopeId}><td${_scopeId}>0.56</td><td${_scopeId}>7440</td></tr><tr${_scopeId}><td${_scopeId}>0.57</td><td${_scopeId}>7680</td></tr><tr${_scopeId}><td${_scopeId}>0.58</td><td${_scopeId}>7920</td></tr><tr${_scopeId}><td${_scopeId}>0.59</td><td${_scopeId}>8160</td></tr><tr${_scopeId}><td${_scopeId}>0.60</td><td${_scopeId}>8402</td></tr><tr${_scopeId}><td${_scopeId}>0.61</td><td${_scopeId}>8640</td></tr><tr${_scopeId}><td${_scopeId}>0.62</td><td${_scopeId}>8880</td></tr><tr${_scopeId}><td${_scopeId}>0.63</td><td${_scopeId}>9120</td></tr><tr${_scopeId}><td${_scopeId}>0.64</td><td${_scopeId}>9360</td></tr><tr${_scopeId}><td${_scopeId}>0.65</td><td${_scopeId}>9600</td></tr><tr${_scopeId}><td${_scopeId}>0.66</td><td${_scopeId}>9842</td></tr><tr${_scopeId}><td${_scopeId}>0.67</td><td${_scopeId}>10080</td></tr><tr${_scopeId}><td${_scopeId}>0.68</td><td${_scopeId}>10320</td></tr><tr${_scopeId}><td${_scopeId}>0.69</td><td${_scopeId}>10560</td></tr><tr${_scopeId}><td${_scopeId}>0.70</td><td${_scopeId}>10800</td></tr><tr${_scopeId}><td${_scopeId}>0.71</td><td${_scopeId}>11040</td></tr><tr${_scopeId}><td${_scopeId}>0.72</td><td${_scopeId}>11282</td></tr><tr${_scopeId}><td${_scopeId}>0.73</td><td${_scopeId}>11520</td></tr><tr${_scopeId}><td${_scopeId}>0.74</td><td${_scopeId}>11760</td></tr><tr${_scopeId}><td${_scopeId}>0.75</td><td${_scopeId}>12000</td></tr><tr${_scopeId}><td${_scopeId}>0.76</td><td${_scopeId}>12240</td></tr><tr${_scopeId}><td${_scopeId}>0.77</td><td${_scopeId}>12480</td></tr><tr${_scopeId}><td${_scopeId}>0.78</td><td${_scopeId}>12720</td></tr><tr${_scopeId}><td${_scopeId}>0.79</td><td${_scopeId}>12962</td></tr><tr${_scopeId}><td${_scopeId}>0.80</td><td${_scopeId}>13200</td></tr><tr${_scopeId}><td${_scopeId}>0.81</td><td${_scopeId}>13440</td></tr><tr${_scopeId}><td${_scopeId}>0.82</td><td${_scopeId}>13680</td></tr><tr${_scopeId}><td${_scopeId}>0.83</td><td${_scopeId}>13920</td></tr><tr${_scopeId}><td${_scopeId}>0.84</td><td${_scopeId}>14160</td></tr><tr${_scopeId}><td${_scopeId}>0.85</td><td${_scopeId}>14402</td></tr><tr${_scopeId}><td${_scopeId}>0.86</td><td${_scopeId}>14640</td></tr><tr${_scopeId}><td${_scopeId}>0.87</td><td${_scopeId}>14880</td></tr><tr${_scopeId}><td${_scopeId}>0.88</td><td${_scopeId}>15120</td></tr><tr${_scopeId}><td${_scopeId}>0.89</td><td${_scopeId}>15360</td></tr><tr${_scopeId}><td${_scopeId}>0.90</td><td${_scopeId}>15600</td></tr><tr${_scopeId}><td${_scopeId}>0.91</td><td${_scopeId}>15842</td></tr><tr${_scopeId}><td${_scopeId}>0.92</td><td${_scopeId}>16080</td></tr><tr${_scopeId}><td${_scopeId}>0.93</td><td${_scopeId}>16320</td></tr><tr${_scopeId}><td${_scopeId}>0.94</td><td${_scopeId}>16560</td></tr><tr${_scopeId}><td${_scopeId}>0.95</td><td${_scopeId}>16800</td></tr><tr${_scopeId}><td${_scopeId}>0.96</td><td${_scopeId}>17040</td></tr><tr${_scopeId}><td${_scopeId}>0.97</td><td${_scopeId}>17282</td></tr><tr${_scopeId}><td${_scopeId}>0.98</td><td${_scopeId}>17520</td></tr><tr${_scopeId}><td${_scopeId}>0.99</td><td${_scopeId}>17760</td></tr><tr${_scopeId}><td${_scopeId}>1.00</td><td${_scopeId}>18000</td></tr></tbody></table><p${_scopeId}>Credit: <a href="https://gist.github.com/DoubleF3lix/a03afde0a979dfa41e8525ee92f12ca5" target="_blank" rel="noreferrer"${_scopeId}>Analysis of query.time_of_day</a></p>`);
      } else {
        return [
          createVNode("table", { tabindex: "0" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, [
                  createVNode("code", { class: "shiki" }, [
                    createVNode("span", null, "query.time_of_day")
                  ])
                ]),
                createVNode("th", null, "Day Time")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "0.00"),
                createVNode("td", null, "18000")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.01"),
                createVNode("td", null, "18240")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.02"),
                createVNode("td", null, "18480")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.03"),
                createVNode("td", null, "18720")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.04"),
                createVNode("td", null, "18960")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.05"),
                createVNode("td", null, "19200")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.06"),
                createVNode("td", null, "19440")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.07"),
                createVNode("td", null, "19680")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.08"),
                createVNode("td", null, "19920")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.09"),
                createVNode("td", null, "20162")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.10"),
                createVNode("td", null, "20400")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.11"),
                createVNode("td", null, "20640")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.12"),
                createVNode("td", null, "20880")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.13"),
                createVNode("td", null, "21120")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.14"),
                createVNode("td", null, "21360")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.15"),
                createVNode("td", null, "21602")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.16"),
                createVNode("td", null, "21840")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.17"),
                createVNode("td", null, "22080")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.18"),
                createVNode("td", null, "22322")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.19"),
                createVNode("td", null, "22560")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.20"),
                createVNode("td", null, "22800")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.21"),
                createVNode("td", null, "23040")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.22"),
                createVNode("td", null, "23280")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.23"),
                createVNode("td", null, "23520")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.24"),
                createVNode("td", null, "23760")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.25"),
                createVNode("td", null, "0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.26"),
                createVNode("td", null, "240")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.27"),
                createVNode("td", null, "480")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.28"),
                createVNode("td", null, "720")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.29"),
                createVNode("td", null, "960")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.30"),
                createVNode("td", null, "1202")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.31"),
                createVNode("td", null, "1440")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.32"),
                createVNode("td", null, "1680")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.33"),
                createVNode("td", null, "1922")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.34"),
                createVNode("td", null, "2160")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.35"),
                createVNode("td", null, "2400")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.36"),
                createVNode("td", null, "2642")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.37"),
                createVNode("td", null, "2880")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.38"),
                createVNode("td", null, "3120")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.39"),
                createVNode("td", null, "3360")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.40"),
                createVNode("td", null, "3600")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.41"),
                createVNode("td", null, "3840")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.42"),
                createVNode("td", null, "4080")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.43"),
                createVNode("td", null, "4320")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.44"),
                createVNode("td", null, "4560")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.45"),
                createVNode("td", null, "4800")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.46"),
                createVNode("td", null, "5040")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.47"),
                createVNode("td", null, "5280")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.48"),
                createVNode("td", null, "5520")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.49"),
                createVNode("td", null, "5760")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.50"),
                createVNode("td", null, "6000")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.51"),
                createVNode("td", null, "6240")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.52"),
                createVNode("td", null, "6480")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.53"),
                createVNode("td", null, "6720")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.54"),
                createVNode("td", null, "6960")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.55"),
                createVNode("td", null, "7200")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.56"),
                createVNode("td", null, "7440")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.57"),
                createVNode("td", null, "7680")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.58"),
                createVNode("td", null, "7920")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.59"),
                createVNode("td", null, "8160")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.60"),
                createVNode("td", null, "8402")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.61"),
                createVNode("td", null, "8640")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.62"),
                createVNode("td", null, "8880")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.63"),
                createVNode("td", null, "9120")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.64"),
                createVNode("td", null, "9360")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.65"),
                createVNode("td", null, "9600")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.66"),
                createVNode("td", null, "9842")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.67"),
                createVNode("td", null, "10080")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.68"),
                createVNode("td", null, "10320")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.69"),
                createVNode("td", null, "10560")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.70"),
                createVNode("td", null, "10800")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.71"),
                createVNode("td", null, "11040")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.72"),
                createVNode("td", null, "11282")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.73"),
                createVNode("td", null, "11520")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.74"),
                createVNode("td", null, "11760")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.75"),
                createVNode("td", null, "12000")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.76"),
                createVNode("td", null, "12240")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.77"),
                createVNode("td", null, "12480")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.78"),
                createVNode("td", null, "12720")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.79"),
                createVNode("td", null, "12962")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.80"),
                createVNode("td", null, "13200")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.81"),
                createVNode("td", null, "13440")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.82"),
                createVNode("td", null, "13680")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.83"),
                createVNode("td", null, "13920")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.84"),
                createVNode("td", null, "14160")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.85"),
                createVNode("td", null, "14402")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.86"),
                createVNode("td", null, "14640")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.87"),
                createVNode("td", null, "14880")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.88"),
                createVNode("td", null, "15120")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.89"),
                createVNode("td", null, "15360")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.90"),
                createVNode("td", null, "15600")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.91"),
                createVNode("td", null, "15842")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.92"),
                createVNode("td", null, "16080")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.93"),
                createVNode("td", null, "16320")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.94"),
                createVNode("td", null, "16560")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.95"),
                createVNode("td", null, "16800")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.96"),
                createVNode("td", null, "17040")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.97"),
                createVNode("td", null, "17282")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.98"),
                createVNode("td", null, "17520")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "0.99"),
                createVNode("td", null, "17760")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "1.00"),
                createVNode("td", null, "18000")
              ])
            ])
          ]),
          createVNode("p", null, [
            createTextVNode("Credit: "),
            createVNode("a", {
              href: "https://gist.github.com/DoubleF3lix/a03afde0a979dfa41e8525ee92f12ca5",
              target: "_blank",
              rel: "noreferrer"
            }, "Analysis of query.time_of_day")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="query-eye-target-x-rotation-and-query-eye-target-y-rotation" tabindex="-1">query.eye_target_x_rotation and query.eye_target_y_rotation <a class="header-anchor" href="#query-eye-target-x-rotation-and-query-eye-target-y-rotation" aria-label="Permalink to &quot;query.eye_target_x_rotation and query.eye_target_y_rotation&quot;">​</a></h2><p>Not valid for player. not really sure what its good for.</p><h2 id="variable-short-arm-offset-right" tabindex="-1">variable.short_arm_offset_right <a class="header-anchor" href="#variable-short-arm-offset-right" aria-label="Permalink to &quot;variable.short_arm_offset_right&quot;">​</a></h2><p>Returns the offset factor for the player&#39;s rightarm bone compared to the default skin geometry. Slim-armed (3 pixel wide) skins will return <code class="shiki"><span>0.5</span></code> when equipped on the player. Normal (4 pixel wide) skins will return <code class="shiki"><span>0.0</span></code> when equipped on the player. Note: the player must go into 1st person perspective at least once for this variable to be initialized and usable elsewhere on the entity.</p><h2 id="variable-short-arm-offset-left" tabindex="-1">variable.short_arm_offset_left <a class="header-anchor" href="#variable-short-arm-offset-left" aria-label="Permalink to &quot;variable.short_arm_offset_left&quot;">​</a></h2><p>Identical behavior to <code class="shiki"><span>variable.short_arm_offset_right</span></code> except it references the player leftarm bone.</p><h2 id="query-movement-direction" tabindex="-1">query.movement_direction <a class="header-anchor" href="#query-movement-direction" aria-label="Permalink to &quot;query.movement_direction&quot;">​</a></h2><p>Returns one of the 3 components from the normalized vector of the entity movement meaning the magnitude/modulus/length of the vector is between 0 and 1.</p><p><strong>Note</strong>: As of writing the documentation, the value returned from any of the axis will change depending on the speed of the entity (If the entity is on the ground the value will be less than the value of the entity if it were in the air even if it is moving in the same direction).</p><p>To get the actual normalized velocity vector of the entity movement you will have to normalize the values. Here is the Molang setup:</p><div class="language-molang vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">molang</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">variable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">mag</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">math</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">sqrt</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">( </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">math</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">pow</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">( </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">query</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">movement_direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">), </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> ) + </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">math</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">pow</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">( </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">query</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">movement_direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">), </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) + </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">math</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">pow</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">( </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">query</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">movement_direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">), </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">));</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">variable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">xNorm</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">query</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">movement_direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) / </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">variable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">mag</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">variable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">yNorm</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">query</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">movement_direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) / </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">variable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">mag</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">variable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">zNorm</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">query</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">movement_direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) / </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">variable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">mag</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>For more information on normalized vectors you can play around with this <a href="https://www.desmos.com/calculator/hhoamwgve2">Desmos graph</a></p><table tabindex="0"><thead><tr><th>Argument</th><th>Axis</th></tr></thead><tbody><tr><td>0</td><td>X</td></tr><tr><td>1</td><td>Y</td></tr><tr><td>2</td><td>Z</td></tr></tbody></table><h2 id="query-block-neighbor-has-any-tag-and-query-relative-block-has-any-tag" tabindex="-1">query.block_neighbor_has_any_tag and query.relative_block_has_any_tag <a class="header-anchor" href="#query-block-neighbor-has-any-tag-and-query-relative-block-has-any-tag" aria-label="Permalink to &quot;query.block_neighbor_has_any_tag and query.relative_block_has_any_tag&quot;">​</a></h2><p>Requires <code class="shiki"><span>Experimental Molang Features</span></code> to use. From the docs <code class="shiki"><span>Takes a relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has any of the tags provided</span></code>. This is useful for using connecting blocks or detecting entities.</p><p><code class="shiki"><span>query.block_neighbor_has_any_tag</span></code> - Takes block position <code class="shiki"><span>query.relative_block_has_any_tag</span></code> - Takes entity position</p><p>The syntax for it is <code class="shiki"><span>q.block_neighbor_has_any_tag(x,y,z,&#39;tag_name&#39;)</span></code> and <code class="shiki"><span>q.relative_block_has_any_tag(x,y,z,&#39;tag_name&#39;)</span></code>.</p><p>Example:</p><ul><li><code class="shiki"><span>q.relative_block_has_any_tag(0,-1,0,&#39;grass&#39;)</span></code> would try to detect a block with the grass tag one block under the entity.</li><li><code class="shiki"><span>q.block_neighbor_has_any_tag(0,-1,0,&#39;grass&#39;)</span></code> would try to detect a block with the grass tag one block under the block.</li></ul><p>To do multiple tags you would use <code class="shiki"><span>q.correct_query(0,-1,0,&#39;grass&#39;, &#39;plant&#39;)</span></code> with <code class="shiki"><span>correct_query</span></code> being replaced by the right query.</p><p>Note that this can also detect custom tags and <a href="/blocks/block-tags">vanilla tags</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/queries.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const queries = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  queries as default
};
