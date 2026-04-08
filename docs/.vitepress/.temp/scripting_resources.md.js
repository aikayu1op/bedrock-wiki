import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Script Resources","description":"scripting に役立つリンク集です。","frontmatter":{"title":"Script Resources","category":"Documentation","mentions":["JaylyDev","SmokeyStack"],"description":"scripting に役立つリンク集です。"},"headers":[{"level":2,"title":"Script API の参考資料","slug":"script-api-の参考資料","link":"#script-api-の参考資料","children":[]}],"relativePath":"scripting/resources.md","filePath":"scripting/resources.md"}');
const _sfc_main = { name: "scripting/resources.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>JavaScript は、internet 上でよく知られた scripting language です。Script API で add-on を作成・開発するには、JavaScript を学ぶと役立ちます。</p><p>JavaScript は、次のような online course などで無料で学ぶのがおすすめです。</p><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Overview" target="_blank" rel="noreferrer">MDN JavaScript: JavaScript language overview</a></li><li><a href="https://www.codecademy.com/learn/introduction-to-javascript" target="_blank" rel="noreferrer">Codecademy: Introduction to JavaScript</a></li><li><a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="_blank" rel="noreferrer">freeCodeCamp.org: JavaScript Algorithms and Data Structures</a></li></ul><h2 id="script-api-の参考資料" tabindex="-1">Script API の参考資料 <a class="header-anchor" href="#script-api-の参考資料" aria-label="Permalink to &quot;Script API の参考資料&quot;">​</a></h2><p>Script API に関する online 資料はそこそこあります。重要なリンクには ⭐ を付けています。</p><ul><li><p>⭐ <a href="https://github.com/microsoft/minecraft-gametests" target="_blank" rel="noreferrer">Sample GameTests from Microsoft</a> - Sample GameTest behavior files for Minecraft Bedrock Edition. Minecraft supports GameTests - a combination of JavaScript + MCStructures - for validating facets of Minecraft behavior.</p></li><li><p>⭐ <a href="https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/" target="_blank" rel="noreferrer">Official Script API Documentation</a> - Microsoft&#39;s official documentation of high-level introduction of experimental Script API</p></li><li><p><a href="https://github.com/JaylyDev/ScriptAPI" target="_blank" rel="noreferrer">Script API Examples</a> - JavaScript code snippets that uses Script API modules only</p></li><li><p><a href="https://github.com/JaylyDev/scriptapi-starter" target="_blank" rel="noreferrer">Script API Starter Project</a> - A Visual Studio Code workspace setup specifically for Script API. This project is for writing JavaScript code (<a href="/scripting/typescript#script-api">for TypeScript users</a>).</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("scripting/resources.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resources = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  resources as default
};
