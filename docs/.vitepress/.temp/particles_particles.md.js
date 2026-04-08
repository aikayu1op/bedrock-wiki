import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"パーティクル入門","description":"Minecraft Bedrock のパーティクル入門です。","frontmatter":{"title":"パーティクル入門","category":"General","tags":["guide"],"mentions":["SirLich","MedicalJewel105","TheItsNameless"],"description":"Minecraft Bedrock のパーティクル入門です。"},"headers":[{"level":2,"title":"パーティクルシステム","slug":"パーティクルシステム","link":"#パーティクルシステム","children":[{"level":3,"title":"パーティクル","slug":"パーティクル","link":"#パーティクル","children":[]},{"level":3,"title":"エミッター","slug":"エミッター","link":"#エミッター","children":[]}]},{"level":2,"title":"最初のパーティクルを作る","slug":"最初のパーティクルを作る","link":"#最初のパーティクルを作る","children":[]}],"relativePath":"particles/particles.md","filePath":"particles/particles.md"}');
const _sfc_main = { name: "particles/particles.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FolderView = resolveComponent("FolderView");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="パーティクルシステム" tabindex="-1">パーティクルシステム <a class="header-anchor" href="#パーティクルシステム" aria-label="Permalink to &quot;パーティクルシステム&quot;">​</a></h2><p><a href="https://www.wikiwand.com/en/Particle_system" target="_blank" rel="noreferrer">パーティクルシステム</a> は、ゲーム物理、モーショングラフィックス、コンピューターグラフィックスで使われる手法で、小さなスプライトを多数使って、煙、火、虫の群れのような説得力のある効果を作り出します。Bedrock Edition の Minecraft では、自分のカスタムテクスチャと独自の動きのロジックを使って、新しいパーティクルシステムを作れます。これにより、パーティクルは非常に楽しく、強力になります！</p><p>パーティクルにおける MoLang の統合も非常によく整備されており、異なるパーティクル間や、エンティティとパーティクルの間でデータを受け渡しできます。</p><h3 id="パーティクル" tabindex="-1">パーティクル <a class="header-anchor" href="#パーティクル" aria-label="Permalink to &quot;パーティクル&quot;">​</a></h3><p>「パーティクル」または「particle instance」は、3D 空間に配置され、それ自体がどう動き、どのように見た目を変えるかのロジックを持つ 1 つのスプライト（テクスチャ）です。パーティクルの例には次のようなものがあります。</p><ul><li>1 枚の雪の結晶</li><li>1 つの雨粒</li><li>ひと筋の煙</li></ul><h3 id="エミッター" tabindex="-1">エミッター <a class="header-anchor" href="#エミッター" aria-label="Permalink to &quot;エミッター&quot;">​</a></h3><p>「エミッター」または「particle emitter」は、多数のパーティクルを一度に（爆発）または時間をかけて（持続的に）生成できるシステムです。エミッターには、どう動くか、いくつ生成するか、どこで生成するかの独自ロジックがあります。エミッターの例には次のようなものがあります。</p><ul><li>吹雪（雪の結晶を生成する）</li><li>雨（雨粒を生成する）</li><li>煙突の煙（煙の筋を生成する）</li></ul><h2 id="最初のパーティクルを作る" tabindex="-1">最初のパーティクルを作る <a class="header-anchor" href="#最初のパーティクルを作る" aria-label="Permalink to &quot;最初のパーティクルを作る&quot;">​</a></h2><p>パーティクルを作るには、resource pack、テクスチャ、そして particle definition ファイルが必要です。</p>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "RP/particles/snowflake.json",
    "RP/textures/wiki/particles/snowflake.png"
  ] }, null, _parent));
  _push(`<p><a href="https://jannisx11.github.io/snowstorm/" target="_blank" rel="noreferrer">Snowstorm</a> を使うと、パーティクルを作成できます。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("particles/particles.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const particles = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  particles as default
};
