import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"取引の動作","description":"エンティティに村人のような取引能力を持たせる方法です。","frontmatter":{"title":"取引の動作","category":"General","nav_order":2,"mentions":["Ciosciaa","MedicalJewel105"],"description":"エンティティに村人のような取引能力を持たせる方法です。"},"headers":[],"relativePath":"loot/trading-behavior.md","filePath":"loot/trading-behavior.md"}');
const _sfc_main = { name: "loot/trading-behavior.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>エンティティを取引者にするには、<code class="shiki"><span>minecraft:trade_table</span></code> または <code class="shiki"><span>minecraft:economy_trade_table</span></code> コンポーネントを使います。どちらも指定したパスから取引 UI を開きますが、<code class="shiki"><span>economy_trade_table</span></code> の方には Village &amp; Pillage の取引要素に関する追加オプションがあります。ほかに必要な AI ゴールとしては、<code class="shiki"><span>minecraft:behavior.trade_with_player</span></code>、任意で <code class="shiki"><span>minecraft.behavior:trade_interest</span></code>（モブがアイテムを持ったり提示したりできるようにする）、さらに必要に応じて <code class="shiki"><span>&quot;minecraft:trade_resupply&quot;: {}</span></code> があります。</p><p>シンプルな取引 UI なら、<code class="shiki"><span>trade_table</span></code> と <code class="shiki"><span>trade_with_player</span></code> コンポーネントで十分です。</p><ol><li>エンティティのコンポーネントに <code class="shiki"><span>&quot;minecraft:behavior.trade_with_player&quot;: {}</span></code> を追加します。</li><li>次のコードをエンティティのコンポーネントグループにコピーします。ここでは <code class="shiki"><span>&quot;wiki:trader&quot;</span></code> とします。</li></ol>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/entities/trader.json`);
      } else {
        return [
          createTextVNode("BP/entities/trader.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;minecraft:trade_table&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">	&quot;display_name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;Trading Entity&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// Text to be displayed.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">	&quot;table&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;trading/trading_entity_trades.json&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// Path to the trade table file</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">	&quot;new_screen&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"> //If set to false, the UI will display as the pre-Village&amp;Pillage one.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li>次に、そのコンポーネントグループがイベント経由でエンティティに追加されていることを確認します。<code class="shiki"><span>minecraft:entity_spawned</span></code> イベントで追加するのがよいでしょう。スポーン時に発火するためです。 イベントやコンポーネントグループにまだ自信がない場合は、エンティティ定義のルールや概念を先に確認してください。<a href="/entities/entity-intro-bp">エンティティ入門</a> を参照してください。</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>コンポーネントに直接追加すると、ワールド内のすべてのエンティティに対して空の取引 UI が表示されるなど、さまざまな問題を引き起こします。取引 AI ゴールには既知の問題があるため、コンポーネントグループ内で追加する必要があります。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("loot/trading-behavior.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tradingBehavior = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tradingBehavior as default
};
