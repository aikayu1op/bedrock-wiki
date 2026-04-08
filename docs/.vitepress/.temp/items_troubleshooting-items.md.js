import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"アイテムのトラブルシューティング","description":"アイテムに関するトラブルシューティングガイドです。","frontmatter":{"title":"アイテムのトラブルシューティング","description":"アイテムに関するトラブルシューティングガイドです。","category":"General","tags":["help"],"mentions":["SmokeyStack","yanasakana","SirLich","MedicalJewel105","TheDoctor15","ThomasOrs","QuazChick"]},"headers":[{"level":2,"title":"まずここから","slug":"まずここから","link":"#まずここから","children":[{"level":3,"title":"アイテムが存在しない","slug":"アイテムが存在しない","link":"#アイテムが存在しない","children":[]},{"level":3,"title":"テクスチャが見つからない","slug":"テクスチャが見つからない","link":"#テクスチャが見つからない","children":[]}]},{"level":2,"title":"では次は？","slug":"では次は","link":"#では次は","children":[]}],"relativePath":"items/troubleshooting-items.md","filePath":"items/troubleshooting-items.md"}');
const _sfc_main = { name: "items/troubleshooting-items.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>このページには <em>items</em> に関するトラブルシューティング情報があります。続ける前に、<a href="/guide/troubleshooting">global troubleshooting</a> のドキュメントを読んでください。</p></div><h2 id="まずここから" tabindex="-1">まずここから <a class="header-anchor" href="#まずここから" aria-label="Permalink to &quot;まずここから&quot;">​</a></h2><blockquote><p>「チュートリアルに従ったのに、あるいは自分でアイテムを作ろうとしたら、何かがおかしい！」</p></blockquote><p>慌てる必要はありません。このページがよくある問題のデバッグを手伝います。</p><h3 id="アイテムが存在しない" tabindex="-1">アイテムが存在しない <a class="header-anchor" href="#アイテムが存在しない" aria-label="Permalink to &quot;アイテムが存在しない&quot;">​</a></h3><ul><li>パックが実際にワールドへ適用されていることを確認する</li><li>アイテムが <code class="shiki"><span>BP/items/</span></code> フォルダにあることを確認する</li><li><a href="https://jsonlint.com/" target="_blank" rel="noreferrer">jsonlint</a> で、アイテムが有効な JSON であることを確認する</li><li>識別子がすべて小文字で、<code class="shiki"><span>wiki:my_item</span></code> のような形になっていることを確認する</li></ul><h3 id="テクスチャが見つからない" tabindex="-1">テクスチャが見つからない <a class="header-anchor" href="#テクスチャが見つからない" aria-label="Permalink to &quot;テクスチャが見つからない&quot;">​</a></h3><p><code class="shiki"><span>item_texture.json</span></code> ファイルを確認してください。名前が正しく、適切なフォルダにあることを確認します。間違った名前の例:</p><ul><li>⚠️ <code class="shiki"><span>texture/item_texture.json</span></code></li><li>⚠️ <code class="shiki"><span>textures/Item_texture.json</span></code></li><li>⚠️ <code class="shiki"><span>textures/item_textures.json</span></code></li></ul><p>Here is an example file to compare against:</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RP/textures/item_texture.json`);
      } else {
        return [
          createTextVNode("RP/textures/item_texture.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;texture_data&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;wiki:your_item_icon&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;textures&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;textures/items/your_item_icon&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>次に、アイテムの BP ファイルを確認します。アイテムファイルの components セクションに <code class="shiki"><span>minecraft:icon</span></code> コンポーネントを配置してください。名前が正しいことも確認します。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/items/your_item.json`);
      } else {
        return [
          createTextVNode("BP/items/your_item.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.26.10&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;minecraft:item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:your_item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;menu_category&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;category&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;items&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:icon&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:your_item_icon&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"> // Make sure this string matches the shortname you put in item_texture.json</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>ここまで正しく行えていれば、アイテムにテクスチャが表示されるはずです。</p><h2 id="では次は" tabindex="-1">では次は？ <a class="header-anchor" href="#では次は" aria-label="Permalink to &quot;では次は？&quot;">​</a></h2><p>これでガイドは終わりです。それでも問題がある場合は、<a href="/discord">discord server</a> に参加して質問してください。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("items/troubleshooting-items.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const troubleshootingItems = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  troubleshootingItems as default
};
