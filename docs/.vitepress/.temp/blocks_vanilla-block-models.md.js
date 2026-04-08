import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"バニラのブロックモデル","description":"カスタムブロックで使えるように、ゲーム内に組み込まれているブロックモデルです。","frontmatter":{"title":"バニラのブロックモデル","description":"カスタムブロックで使えるように、ゲーム内に組み込まれているブロックモデルです。","category":"Documentation","tags":["beginner"],"related":["/blocks/block-models"],"license":true,"mentions":["QuazChick"]},"headers":[{"level":2,"title":"バニラモデルの適用","slug":"バニラモデルの適用","link":"#バニラモデルの適用","children":[]},{"level":2,"title":"バニラモデル一覧","slug":"バニラモデル一覧","link":"#バニラモデル一覧","children":[]}],"params":{"tables":{"/assets/tables/blocks/vanilla-block-models/models.json":{"columns":{"preview":{"name":"Preview"},"identifier":{"name":"Identifier","sortable":true},"notes":{"name":"Additional Notes"}},"rows":[{"preview":"<img src=\\"/assets/images/blocks/vanilla-block-models/cross.png\\" alt=\\"\\">","identifier":"<code class=\\"shiki\\"><span>minecraft:geometry.cross</span></code>","notes":["When used on a block, <code class=\\"shiki\\"><span>ambient_occlusion</span></code> and <code class=\\"shiki\\"><span>face_dimming</span></code> should be set to <code class=\\"shiki\\"><span style=\\"--shiki-dark:#569CD6;--shiki-light:#0000FF\\">false</span></code> in any <a href=\\"/blocks/block-components#material-instances\\">material instances</a>.","This model should only be used in combination with render methods that apply backface culling (<code class=\\"shiki\\"><span style=\\"--shiki-dark:#CE9178;--shiki-light:#A31515\\">\\"alpha_test_single_sided\\"</span></code>, <code class=\\"shiki\\"><span style=\\"--shiki-dark:#CE9178;--shiki-light:#A31515\\">\\"blend\\"</span></code> and <code class=\\"shiki\\"><span style=\\"--shiki-dark:#CE9178;--shiki-light:#A31515\\">\\"opaque\\"</span></code>) to avoid texture flickering."]},{"preview":"<img src=\\"/assets/images/blocks/vanilla-block-models/full_block.png\\" alt=\\"\\">","identifier":"<code class=\\"shiki\\"><span>minecraft:geometry.full_block</span></code>","notes":["When used by a block with the <code class=\\"shiki\\"><span style=\\"--shiki-dark:#CE9178;--shiki-light:#A31515\\">\\"opaque\\"</span></code> render method, a shadow is cast onto surrounding blocks and adjacent block faces are culled.","This model cannot be used in format versions prior to <a href=\\"/blocks/block-format-history#_1-26-0\\">1.26.0</a> as backwards compatibility mapping results in <code class=\\"shiki\\"><span>minecraft:geometry.full_block_v1</span></code> being used instead."]},{"preview":"<img src=\\"/assets/images/blocks/vanilla-block-models/full_block.png\\" alt=\\"\\">","identifier":"<code class=\\"shiki\\"><span>minecraft:geometry.full_block_v1</span></code>","notes":["<strong>Deprecated</strong> — the bottom face of this model is rotated 180 degrees compared to vanilla full blocks so <code class=\\"shiki\\"><span>minecraft:geometry.full_block</span></code> should be used instead.","When used by a block with the <code class=\\"shiki\\"><span style=\\"--shiki-dark:#CE9178;--shiki-light:#A31515\\">\\"opaque\\"</span></code> render method, a shadow is cast onto surrounding blocks and adjacent block faces are culled."]}]}}},"relativePath":"blocks/vanilla-block-models.md","filePath":"blocks/vanilla-block-models.md"}');
const _sfc_main = { name: "blocks/vanilla-block-models.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_Table = resolveComponent("Table");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>カスタムブロックはバニラの <a href="/blocks/block-shapes">block shapes</a> を使えませんが、Mojang は見た目を再現した <code class="shiki"><span>minecraft</span></code> 名前空間のモデルをいくつか用意しています。</p><div class="danger custom-block"><p class="custom-block-title">HARDCODED</p><p>現在、バニラのブロックモデルはデータ駆動ではないため、変更したり、バニラのリソースパック内の JSON ファイルとして見つけたりすることはできません。</p><p>これは、<a href="/blocks/block-components#geometry">geometry</a> コンポーネントの <code class="shiki"><span>bone_visibility</span></code> および <code class="shiki"><span>culling</span></code> パラメータにも対応していないことを意味します。</p></div><h2 id="バニラモデルの適用" tabindex="-1">バニラモデルの適用 <a class="header-anchor" href="#バニラモデルの適用" aria-label="Permalink to &quot;バニラモデルの適用&quot;">​</a></h2><p>バニラのブロックモデルは、<a href="/blocks/block-models">カスタムブロックモデル</a> と同じ方法で適用します。<a href="/blocks/block-components#geometry">geometry</a> コンポーネントを使い、テクスチャは <a href="/blocks/block-components#material-instances">material instances</a> で定義します。</p>`);
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
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;minecraft:geometry&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:geometry.full_block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;minecraft:material_instances&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;*&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;cobblestone&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="バニラモデル一覧" tabindex="-1">バニラモデル一覧 <a class="header-anchor" href="#バニラモデル一覧" aria-label="Permalink to &quot;バニラモデル一覧&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Table, { data: "models.json" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blocks/vanilla-block-models.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vanillaBlockModels = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vanillaBlockModels as default
};
