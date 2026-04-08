import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"状態数の上限を避ける","description":"ブロックの各状態には 16 個までという有効値の上限があり、これを超えることはできません。このガイドでは、その上限に達しないようにする方法を説明します。","frontmatter":{"title":"状態数の上限を避ける","description":"ブロックの各状態には 16 個までという有効値の上限があり、これを超えることはできません。このガイドでは、その上限に達しないようにする方法を説明します。","category":"Tutorials","tags":["expert"],"related":["/blocks/block-states"],"mentions":["Kaioga5","QuazChick"]},"headers":[{"level":2,"title":"仕組み","slug":"仕組み","link":"#仕組み","children":[]},{"level":2,"title":"ロジック","slug":"ロジック","link":"#ロジック","children":[]},{"level":2,"title":"見え方","slug":"見え方","link":"#見え方","children":[]}],"relativePath":"blocks/avoiding-state-limit.md","filePath":"blocks/avoiding-state-limit.md"}');
const _sfc_main = { name: "blocks/avoiding-state-limit.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>ブロックの各状態には 16 個までという有効値の上限があり、これを超えることはできません。 このガイドでは、その上限に達しないようにする方法を説明します。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>このチュートリアルでは、1 つの状態に 16 個以上の値を持たせる方法は紹介しません。ただし、この方法を使えば同じ結果を再現できます。</p></div><h2 id="仕組み" tabindex="-1">仕組み <a class="header-anchor" href="#仕組み" aria-label="Permalink to &quot;仕組み&quot;">​</a></h2><p>この方法では、2 つ以上の状態を組み合わせて、パーミュテーションや条件の中で再利用・参照します。たとえば、英語アルファベットを扱うブロックには 26 個の値が必要です。組み合わせを使えば、より少ない値で表現できます。</p><h2 id="ロジック" tabindex="-1">ロジック <a class="header-anchor" href="#ロジック" aria-label="Permalink to &quot;ロジック&quot;">​</a></h2><p>上の例でコードが行うことは次のとおりです。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span>1 &amp; 1 = A   1 &amp; 5 = E   1 &amp; 9 =  I   1 &amp; 13 = M</span></span>
<span class="line"><span>1 &amp; 2 = B   1 &amp; 6 = F   1 &amp; 10 = J</span></span>
<span class="line"><span>1 &amp; 3 = C   1 &amp; 7 = G   1 &amp; 11 = K</span></span>
<span class="line"><span>1 &amp; 4 = D   1 &amp; 8 = H   1 &amp; 12 = L</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>そして次に:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span>2 &amp; 1 = N   2 &amp; 5 = R   2 &amp; 9 =  V   2 &amp; 13 = Z</span></span>
<span class="line"><span>2 &amp; 2 = O   2 &amp; 6 = S   2 &amp; 10 = W</span></span>
<span class="line"><span>2 &amp; 3 = P   2 &amp; 7 = T   2 &amp; 11 = X</span></span>
<span class="line"><span>2 &amp; 4 = Q   2 &amp; 8 = U   2 &amp; 12 = Y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>この方法を使うと、わずか 15 個の値で同じ結果を実現できます。組み合わせに使える値が増えるほど、状態の上限も高くなります。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>2 つより多い値を使えば、さらに多くの組み合わせを作れます。</p></div><h2 id="見え方" tabindex="-1">見え方 <a class="header-anchor" href="#見え方" aria-label="Permalink to &quot;見え方&quot;">​</a></h2><p>上の例を参考にすると、状態は次のようになります。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`minecraft:block &gt; description`);
      } else {
        return [
          createTextVNode("minecraft:block > description")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;states&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;wiki:value&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">3</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">5</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">7</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">9</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">10</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">11</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">12</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">13</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;wiki:division&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>条件は次のようになります。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Permutation Condition`);
      } else {
        return [
          createTextVNode("Permutation Condition")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-molang vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">molang</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">q</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">block_state</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&#39;wiki:division&#39;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) == </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> &amp;&amp; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">q</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">block_state</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&#39;wiki:value&#39;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) == </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Permutation Condition`);
      } else {
        return [
          createTextVNode("Permutation Condition")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-molang vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">molang</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">q</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">block_state</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&#39;wiki:division&#39;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) == </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> &amp;&amp; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">q</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">block_state</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&#39;wiki:value&#39;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) == </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blocks/avoiding-state-limit.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const avoidingStateLimit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  avoidingStateLimit as default
};
