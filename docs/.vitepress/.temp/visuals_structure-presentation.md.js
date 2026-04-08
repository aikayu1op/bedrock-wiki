import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/images/visuals/structure-presentation/in-game.png";
const _imports_1 = "/assets/images/visuals/structure-presentation/structure-block-0.png";
const _imports_2 = "/assets/images/visuals/structure-presentation/structure-block-1.png";
const _imports_3 = "/assets/images/visuals/structure-presentation/structure_presentation_pack.png";
const _imports_4 = "/assets/images/visuals/structure-presentation/pack_gradient_result.png";
const _imports_5 = "/assets/images/visuals/structure-presentation/model-render.png";
const __pageData = JSON.parse('{"title":"構造物のプレゼンテーション","description":"","frontmatter":{"title":"構造物のプレゼンテーション","category":"Ideas","mentions":["MedicalJewel105","LeGend077","ThomasOrs"]},"headers":[{"level":2,"title":"見せ方","slug":"見せ方","link":"#見せ方","children":[{"level":3,"title":"ゲーム内スクリーンショット","slug":"ゲーム内スクリーンショット","link":"#ゲーム内スクリーンショット","children":[]},{"level":3,"title":"ストラクチャーブロック内で撮る","slug":"ストラクチャーブロック内で撮る","link":"#ストラクチャーブロック内で撮る","children":[]},{"level":3,"title":"レンダリングした 3D オブジェクト","slug":"レンダリングした-3d-オブジェクト","link":"#レンダリングした-3d-オブジェクト","children":[]}]}],"relativePath":"visuals/structure-presentation.md","filePath":"visuals/structure-presentation.md"}');
const _sfc_main = { name: "visuals/structure-presentation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>このページでは、構造物の見せ方をいくつか紹介し、アドオンやその機能をわかりやすく示せるようにします。</p><h2 id="見せ方" tabindex="-1">見せ方 <a class="header-anchor" href="#見せ方" aria-label="Permalink to &quot;見せ方&quot;">​</a></h2><p>構造物を人に見せる方法はいろいろあります。たとえば、次のようなものです。</p><ul><li>構造物をゲーム内でスクリーンショットする。</li><li>ストラクチャーブロック内でスクリーンショットする。</li><li>構造物を 3D オブジェクトとして作成する。</li></ul><p>以下では、ピリジャーの前哨基地を例にして、3 つの方法を順に見ていきます。</p><h3 id="ゲーム内スクリーンショット" tabindex="-1">ゲーム内スクリーンショット <a class="header-anchor" href="#ゲーム内スクリーンショット" aria-label="Permalink to &quot;ゲーム内スクリーンショット&quot;">​</a></h3><p>これは最も簡単な方法で、手早く実行できます。世界の文脈の中で構造物を見せられる利点もありますが、欠点もあります。撮影場所を探す必要があったり、良い角度を見つけにくかったりします。</p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><h3 id="ストラクチャーブロック内で撮る" tabindex="-1">ストラクチャーブロック内で撮る <a class="header-anchor" href="#ストラクチャーブロック内で撮る" aria-label="Permalink to &quot;ストラクチャーブロック内で撮る&quot;">​</a></h3><p>この方法なら、ゲーム内で撮るときのいくつかの欠点を避けられます。ほかのブロックを映さず、構造物だけに集中できます。</p><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p><p><a href="/json-ui/json-ui-intro">JSON UI</a> を編集すれば、背景色を変えたり、ほかの要素を消したりして、この方法をさらに改善できます。</p><p><img${ssrRenderAttr("src", _imports_2)} alt=""></p><p>あるいは、@minato4743 の <strong>Structure Presentation Pack</strong> を使えば手順を簡略化できます。既定の色やグラデーションに加えて、プレビュー矢印を隠す切り替えも含まれています。</p>`);
  _push(ssrRenderComponent(_component_Button, {
    link: "/assets/packs/visuals/structure-presentation/structure_presentation_pack.mcpack",
    download: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Pack をダウンロード `);
      } else {
        return [
          createTextVNode(" Pack をダウンロード ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p><img${ssrRenderAttr("src", _imports_3)} alt=""></p><p><img${ssrRenderAttr("src", _imports_4)} alt=""></p><h3 id="レンダリングした-3d-オブジェクト" tabindex="-1">レンダリングした 3D オブジェクト <a class="header-anchor" href="#レンダリングした-3d-オブジェクト" aria-label="Permalink to &quot;レンダリングした 3D オブジェクト&quot;">​</a></h3><p>構造物は、ストラクチャーブロックの UI から 3D モデルとして書き出せます。</p><p><img${ssrRenderAttr("src", _imports_5)} alt=""></p><p>この方法は Windows ユーザーのみ利用できます。 Paint 3D で簡単なレンダリングを作ることも、Blender でより高度なレンダリングを作ることもできます。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("visuals/structure-presentation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const structurePresentation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  structurePresentation as default
};
