import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/images/visuals/leash-position/model-1.png";
const _imports_1 = "/assets/images/visuals/leash-position/model-2.png";
const _imports_2 = "/assets/images/visuals/leash-position/locator-1.png";
const _imports_3 = "/assets/images/visuals/leash-position/model-3.png";
const _imports_4 = "/assets/images/visuals/leash-position/result-0.png";
const _imports_5 = "/assets/images/visuals/leash-position/result-1.png";
const __pageData = JSON.parse('{"title":"リード位置","description":"エンティティ上のリードの位置を調整します。","frontmatter":{"title":"リード位置","category":"Tutorials","mentions":["MedicalJewel105","SirLich","Overload1252"],"tags":["easy"],"description":"エンティティ上のリードの位置を調整します。"},"headers":[{"level":2,"title":"Blockbench の手順","slug":"blockbench-の手順","link":"#blockbench-の手順","children":[]},{"level":2,"title":"テスト","slug":"テスト","link":"#テスト","children":[]}],"relativePath":"visuals/leash-position.md","filePath":"visuals/leash-position.md"}');
const _sfc_main = { name: "visuals/leash-position.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Spoiler = resolveComponent("Spoiler");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>エンティティ上のリードの位置を変えたいと思ったことはありませんか？ もしそうなら、このページが役立ちます。</p><h2 id="blockbench-の手順" tabindex="-1">Blockbench の手順 <a class="header-anchor" href="#blockbench-の手順" aria-label="Permalink to &quot;Blockbench の手順&quot;">​</a></h2><p>リード位置を設定するには、Blockbench を使います。 モデルを開きます。この例ではラマのモデルです。</p><p><em>骨の回転が少し変でも気にしないでください。Mojang はアニメーション経由で正しくモデルを描画するのが好きです。</em></p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><p>次に、locator <code class="shiki"><span>lead</span></code> を探します。</p><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p><p>存在しない場合は、次の手順で作成できます。</p>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "作成する" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ol${_scopeId}><li${_scopeId}>グループを選択します。</li><li${_scopeId}>それを右クリックします。</li><li${_scopeId}>&quot;Add Locator&quot; を選びます。 <img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId}></li><li${_scopeId}><code class="shiki"${_scopeId}><span${_scopeId}>lead</span></code> に名前を変更します。</li></ol>`);
      } else {
        return [
          createVNode("ol", null, [
            createVNode("li", null, "グループを選択します。"),
            createVNode("li", null, "それを右クリックします。"),
            createVNode("li", null, [
              createTextVNode('"Add Locator" を選びます。 '),
              createVNode("img", {
                src: _imports_2,
                alt: ""
              })
            ]),
            createVNode("li", null, [
              createVNode("code", { class: "shiki" }, [
                createVNode("span", null, "lead")
              ]),
              createTextVNode(" に名前を変更します。")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>最後に、locator を好きな位置へ移動してモデルを保存します。</p><p><img${ssrRenderAttr("src", _imports_3)} alt=""></p><h2 id="テスト" tabindex="-1">テスト <a class="header-anchor" href="#テスト" aria-label="Permalink to &quot;テスト&quot;">​</a></h2><p>変更前:</p><p><img${ssrRenderAttr("src", _imports_4)} alt=""></p><p>変更後:</p><p><img${ssrRenderAttr("src", _imports_5)} alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("visuals/leash-position.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const leashPosition = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  leashPosition as default
};
