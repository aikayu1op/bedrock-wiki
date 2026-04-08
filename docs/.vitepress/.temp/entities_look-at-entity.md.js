import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Look at Entity","description":"The following tutorial provides a resource pack method to detect when the player is looking at an entity.","frontmatter":{"title":"Look at Entity","category":"Tutorials","tags":["intermediate"],"mentions":["shanewolf38","MedicalJewel105","TheItsNameless","SmokeyStack"],"description":"The following tutorial provides a resource pack method to detect when the player is looking at an entity."},"headers":[{"level":2,"title":"variable","slug":"variable","link":"#variable","children":[]},{"level":2,"title":"Modifying","slug":"modifying","link":"#modifying","children":[]},{"level":2,"title":"Explanation","slug":"explanation","link":"#explanation","children":[]}],"relativePath":"entities/look-at-entity.md","filePath":"entities/look-at-entity.md"}');
const _sfc_main = { name: "entities/look-at-entity.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>The following tutorial provides a resource pack method to detect when the player is looking at an entity. The code below must be placed inside the entity that will be looked at by the player, and will provide a variable <code class="shiki"><span>v.look_at_entity</span></code> which returns true when the entity is being looked at.</p><h2 id="variable" tabindex="-1">variable <a class="header-anchor" href="#variable" aria-label="Permalink to &quot;variable&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RP/entity/mob.entity.json`);
      } else {
        return [
          createTextVNode("RP/entity/mob.entity.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;pre_animation&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">  &quot;v.look_at_entity = Math.abs(Math.abs(q.rotation_to_camera(1) - q.camera_rotation(1)) - 180) &lt; (20 / q.distance_from_camera) &amp;&amp; Math.abs(q.rotation_to_camera(0) + q.camera_rotation(0)) &lt; (10 / q.distance_from_camera);&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Because the query <code class="shiki"><span>q.rotation_to_camera</span></code> is based at the origin of the entity (their feet), the vertical detection range will be based around the bottom of the entity. The code below creates a modified variable for the vertical angle which takes a positional offset into account to allow the vertical detection range to be based around the center of the entity.</p></div>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RP/entity/mob.entity.json`);
      } else {
        return [
          createTextVNode("RP/entity/mob.entity.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;pre_animation&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">  &quot;v.rotation_to_camera_0 = -Math.atan2(-q.distance_from_camera * Math.sin(q.rotation_to_camera(0)) - 1, q.distance_from_camera * Math.cos(q.rotation_to_camera(0)));&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">  &quot;v.look_at_entity = Math.abs(Math.abs(q.rotation_to_camera(1) - q.camera_rotation(1)) - 180) &lt; (20 / q.distance_from_camera) &amp;&amp; Math.abs(v.rotation_to_camera_0 + q.camera_rotation(0)) &lt; (60 / q.distance_from_camera);&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="modifying" tabindex="-1">Modifying <a class="header-anchor" href="#modifying" aria-label="Permalink to &quot;Modifying&quot;">​</a></h2><p>The provided code is very accurate for the standard Minecraft mob size of 1 block wide and 2 blocks tall, but for entities of different sizes the parameters should be changed. The <code class="shiki"><span>- 1</span></code> controls the positional offset of the center of the mob (- is upward, + is downward), the <code class="shiki"><span>20</span></code> controls the horizontal angle sensitivity, and the <code class="shiki"><span>60</span></code> controls the vertical angle sensitivity.</p><h2 id="explanation" tabindex="-1">Explanation <a class="header-anchor" href="#explanation" aria-label="Permalink to &quot;Explanation&quot;">​</a></h2><p>The variable detects when the player is looking at the entity by checking if the rotation angle required for the entity to look at the player is opposite the rotation angle required for the player to look at the entity. The horizontal and vertical angle sensitivity are modified by the distance of the entity from the camera to maintain accuracy.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/look-at-entity.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lookAtEntity = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lookAtEntity as default
};
