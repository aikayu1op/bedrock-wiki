import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Shared Constructs","description":"JSON 構文はアドオンシステム内の複数の場所で使えます。","frontmatter":{"title":"Shared Constructs","description":"JSON 構文はアドオンシステム内の複数の場所で使えます。","mentions":["Ciosciaa","ThomasOrs","QuazChick"]},"headers":[{"level":2,"title":"ブロック記述子","slug":"ブロック記述子","link":"#ブロック記述子","children":[{"level":3,"title":"ブロックタイプ記述子","slug":"ブロックタイプ記述子","link":"#ブロックタイプ記述子","children":[]},{"level":3,"title":"ブロック状態記述子","slug":"ブロック状態記述子","link":"#ブロック状態記述子","children":[]},{"level":3,"title":"ブロックタグ記述子","slug":"ブロックタグ記述子","link":"#ブロックタグ記述子","children":[]}]},{"level":2,"title":"アイテム記述子","slug":"アイテム記述子","link":"#アイテム記述子","children":[{"level":3,"title":"アイテムタイプ記述子","slug":"アイテムタイプ記述子","link":"#アイテムタイプ記述子","children":[]},{"level":3,"title":"アイテムタグ記述子","slug":"アイテムタグ記述子","link":"#アイテムタグ記述子","children":[]}]},{"level":2,"title":"範囲オブジェクト","slug":"範囲オブジェクト","link":"#範囲オブジェクト","children":[]},{"level":2,"title":"分数オブジェクト","slug":"分数オブジェクト","link":"#分数オブジェクト","children":[]}],"relativePath":"documentation/shared-constructs.md","filePath":"documentation/shared-constructs.md"}');
const _sfc_main = { name: "documentation/shared-constructs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>JSON 構文は、アドオンシステム内の複数の場所で表現できます。</p><h2 id="ブロック記述子" tabindex="-1">ブロック記述子 <a class="header-anchor" href="#ブロック記述子" aria-label="Permalink to &quot;ブロック記述子&quot;">​</a></h2><p>ブロック記述子は、指定した条件に一致するブロックを判定するために使えます。 たとえば、ブロック記述子はブロックの <a href="/blocks/block-components#placement-filter">配置フィルター</a> で、カスタムブロックがどの種類のブロック上に存続できるかを判定するために使われます。</p><h3 id="ブロックタイプ記述子" tabindex="-1">ブロックタイプ記述子 <a class="header-anchor" href="#ブロックタイプ記述子" aria-label="Permalink to &quot;ブロックタイプ記述子&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Block Descriptor`);
      } else {
        return [
          createTextVNode("Block Descriptor")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_block&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="ブロック状態記述子" tabindex="-1">ブロック状態記述子 <a class="header-anchor" href="#ブロック状態記述子" aria-label="Permalink to &quot;ブロック状態記述子&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Block Descriptor`);
      } else {
        return [
          createTextVNode("Block Descriptor")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;states&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;wiki:custom_state&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">5</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="ブロックタグ記述子" tabindex="-1">ブロックタグ記述子 <a class="header-anchor" href="#ブロックタグ記述子" aria-label="Permalink to &quot;ブロックタグ記述子&quot;">​</a></h3><p><code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">q</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">all_tags</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">()</span></code> と <code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">q</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">any_tag</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">()</span></code> のクエリ関数だけにアクセスできます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Block Tags Descriptor`);
      } else {
        return [
          createTextVNode("Block Tags Descriptor")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;tags&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;q.any_tag(&#39;minecraft:is_axe_item_destructible&#39;, &#39;wiki:custom_tag&#39;)&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="アイテム記述子" tabindex="-1">アイテム記述子 <a class="header-anchor" href="#アイテム記述子" aria-label="Permalink to &quot;アイテム記述子&quot;">​</a></h2><p>アイテム記述子は、指定した条件に一致するアイテムを判定するために使えます。 たとえば、アイテム記述子はアイテムの <a href="/items/item-components#repairable">修復可能</a> コンポーネントで、どの種類のアイテムを使ってそのアイテムを修復できるかを判定するために使われます。</p><h3 id="アイテムタイプ記述子" tabindex="-1">アイテムタイプ記述子 <a class="header-anchor" href="#アイテムタイプ記述子" aria-label="Permalink to &quot;アイテムタイプ記述子&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Item Descriptor`);
      } else {
        return [
          createTextVNode("Item Descriptor")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_item&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="アイテムタグ記述子" tabindex="-1">アイテムタグ記述子 <a class="header-anchor" href="#アイテムタグ記述子" aria-label="Permalink to &quot;アイテムタグ記述子&quot;">​</a></h3><p><code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">q</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">all_tags</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">()</span></code> と <code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">q</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">any_tag</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">()</span></code> のクエリ関数だけにアクセスできます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Item Tags Descriptor`);
      } else {
        return [
          createTextVNode("Item Tags Descriptor")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;tags&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;q.any_tag(&#39;minecraft:is_axe&#39;, &#39;wiki:custom_tag&#39;)&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="範囲オブジェクト" tabindex="-1">範囲オブジェクト <a class="header-anchor" href="#範囲オブジェクト" aria-label="Permalink to &quot;範囲オブジェクト&quot;">​</a></h2><p>範囲オブジェクトは、2つの数値の間の幅を定義します。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Range Object Example`);
      } else {
        return [
          createTextVNode("Range Object Example")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">4</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>指定された場合、最小値と最大値の両端を含めた範囲からランダムな値が選ばれます。抽選結果は保持されず、範囲オブジェクトが使われるたびに新しい乱数が引かれます。最大値は最小値より小さくできませんが、同じ値にして固定値にすることはできます。</p><h2 id="分数オブジェクト" tabindex="-1">分数オブジェクト <a class="header-anchor" href="#分数オブジェクト" aria-label="Permalink to &quot;分数オブジェクト&quot;">​</a></h2><p>分数オブジェクトは、分子と分母を使って分数を定義します。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Fraction Object Example`);
      } else {
        return [
          createTextVNode("Fraction Object Example")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;numerator&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">3</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;denominator&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">5</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>このオブジェクトの代わりに使われる値は、<code class="shiki"><span>numerator</span></code> ÷ <code class="shiki"><span>denominator</span></code> の計算結果です。分子と分母はどちらも少なくとも <code class="shiki"><span>1</span></code> である必要があり、分母を分子と同じ値にはできません。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/shared-constructs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sharedConstructs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sharedConstructs as default
};
