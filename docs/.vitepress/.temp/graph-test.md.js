import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MolangGraph","description":"","frontmatter":{"title":"MolangGraph","show_contributors":false,"show_outline":false,"hidden":true},"headers":[],"relativePath":"graph-test.md","filePath":"graph-test.md"}');
const _sfc_main = { name: "graph-test.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MolangGraph = resolveComponent("MolangGraph");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_MolangGraph, {
    code: "query.anim_time",
    fromX: -1,
    toX: 2,
    fromY: -1.1,
    toY: 1.1,
    stepSize: 0.02
  }, null, _parent));
  _push(ssrRenderComponent(_component_MolangGraph, {
    code: "math.cos(query.anim_time * 360)",
    fromX: -2,
    toX: 2,
    fromY: -1.1,
    toY: 2,
    stepSize: 0.02
  }, null, _parent));
  _push(ssrRenderComponent(_component_MolangGraph, {
    code: "q.anim_time == 0 ? 0 : q.anim_time == 1 ? 1 : math.pow(2, -10 * math.clamp(q.anim_time, 0, 1)) * math.sin((math.clamp(q.anim_time, 0, 1) * 10 - 0.75) * 120) + 1",
    toY: 2,
    stepSize: 1e-3
  }, null, _parent));
  _push(ssrRenderComponent(_component_MolangGraph, {
    code: "q.anim_time == 0 ? 0 : q.anim_time == 1 ? 1 : q.anim_time < 0.5 ? -(math.pow(2, 20 * math.clamp(q.anim_time, 0, 1) - 10) * math.sin((20 * math.clamp(q.anim_time, 0, 1) - 11.125) * 80)) / 2 : (math.pow(2, -20 * math.clamp(q.anim_time, 0, 1) + 10) * math.sin((20 * math.clamp(q.anim_time, 0, 1) - 11.125) * 80)) / 2 + 1",
    fromY: -1,
    toY: 2,
    stepSize: 1e-3
  }, null, _parent));
  _push(ssrRenderComponent(_component_MolangGraph, {
    code: "q.anim_time < 0.5 ? (math.pow(2 * math.clamp(q.anim_time, 0, 1), 2) * ((2.5949095 + 1) * 2 * math.clamp(q.anim_time, 0, 1) - 2.5949095)) / 2 : (math.pow(2 * math.clamp(q.anim_time, 0, 1) - 2, 2) * ((2.5949095 + 1) * (math.clamp(q.anim_time, 0, 1) * 2 - 2) + 2.5949095) + 2) / 2",
    fromY: -1,
    toY: 2,
    stepSize: 1e-3
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("graph-test.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const graphTest = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  graphTest as default
};
