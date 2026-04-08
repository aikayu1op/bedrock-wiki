import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"NetherNet プロトコル","description":"Bedrock 向けの NetherNet プロトコルです。","frontmatter":{"title":"NetherNet プロトコル","category":"Protocols","mentions":["theaddonn","bedrock-crustaceans"],"description":"Bedrock 向けの NetherNet プロトコルです。"},"headers":[{"level":2,"title":"実装","slug":"実装","link":"#実装","children":[]}],"relativePath":"servers/nethernet.md","filePath":"servers/nethernet.md"}');
const _sfc_main = { name: "servers/nethernet.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Minecraft Bedrock は内部で複数の異なるプロトコルを使っており、その 1 つが NetherNet です。 NetherNet は xbox live セッションで使われる主要プロトコルで、web-rtc を基盤としています。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>NetherNet はかなり新しく、まだ完成していません。RakNet ほどよく知られておらず、理解も進んでいません。</p></div><p>NetherNet についてはまだわかっていないことが多いため、<a href="https://github.com/df-mc/nethernet-spec" target="_blank" rel="noreferrer">df-mc が作成したドキュメント</a> を参照することしかできません。</p><h2 id="実装" tabindex="-1">実装 <a class="header-anchor" href="#実装" aria-label="Permalink to &quot;実装&quot;">​</a></h2><p>ドキュメントだけですべてを細かく説明することはできないため、既存実装を見るのがとても役立ちます。 NetherNet の実装一覧はこちらです。</p><table tabindex="0"><thead><tr><th>Name</th><th>Description</th><th>Language</th></tr></thead><tbody><tr><td><a href="https://github.com/df-mc/go-nethernet" target="_blank" rel="noreferrer">go-nethernet</a></td><td>Go library implementing a basic version of the NetherNet protocol</td><td>Go</td></tr><tr><td><a href="https://github.com/bedrock-crustaceans/nethernet" target="_blank" rel="noreferrer">bedrock-crustaceans/nethernet</a></td><td>NetherNet implementation in Rust</td><td>Rust</td></tr><tr><td><a href="https://github.com/PrismarineJS/node-nethernet" target="_blank" rel="noreferrer">node-nethernet</a></td><td>NetherNet implementation in NodeJS</td><td>JavaScript, TypeScript</td></tr></tbody></table><p>このページは作成中です。まだ作業中なので、ぜひ貢献してください。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("servers/nethernet.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nethernet = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nethernet as default
};
