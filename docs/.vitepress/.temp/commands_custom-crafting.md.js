import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_1 } from "./1.MC0i4d8f.js";
import { _ as _imports_0 } from "./2.JagmdcKE.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"カスタムクラフト","description":"ドロッパーを使ってクラフトテーブルを再現するコマンドです。","frontmatter":{"title":"カスタムクラフト","category":"Useful Creations","tags":["easy"],"mentions":["TwigYT","zheaEvyline"],"description":"ドロッパーを使ってクラフトテーブルを再現するコマンドです。"},"headers":[{"level":2,"title":"はじめに","slug":"はじめに","link":"#はじめに","children":[]},{"level":2,"title":"Setup","slug":"setup","link":"#setup","children":[]},{"level":2,"title":"System","slug":"system","link":"#system","children":[]},{"level":2,"title":"ヒント","slug":"ヒント","link":"#ヒント","children":[]}],"relativePath":"commands/custom-crafting.md","filePath":"commands/custom-crafting.md"}');
const _sfc_main = { name: "commands/custom-crafting.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WikiImage = resolveComponent("WikiImage");
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h2><p>このガイドでは、ドロッパーを使ってクラフトテーブルを再現し、実質的に 1 つのコマンドだけで「カスタムクラフト」システムを作る方法を学びます。用途の例としては、サーバーやアドベンチャーマップで、エンチャント付きの武器やカスタム名付きアイテムをクラフトする方法があります。</p><p>注: このガイドにおけるカスタムクラフターの位置は固定です。ワールドのどこにでも配置できる、より動的な方法については、@CrunchyCookie の <a href="https://www.youtube.com/watch?v=pzQzldaSORs" target="_blank" rel="noreferrer">Custom Crafting</a> の YouTube 動画を参照してください。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>クラフトテーブルを使うカスタムクラフトレシピを作成する場合は、<a href="/loot/recipes">こちら</a> の wiki ページを参照してください。</p></div><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><p>このシステムでは、追加したいカスタムレシピアイテムごとに 2 つのドロッパーが必要です。</p><ol><li>レシピを入れたドロッパー。</li><li>レシピの出力を入れたドロッパー。</li></ol><p>例:</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "recipe.png",
    alt: "Custom Recipe",
    width: "200",
    pixelated: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "recipe-output.png",
    alt: "Custom Recipe Output",
    width: "200",
    pixelated: ""
  }, null, _parent));
  _push(`<p>この 2 つのドロッパーは通常、コマンドブロックの近くか、オペレーター以外のプレイヤーがアクセスできない場所に置きます。</p><p>セットアップを完了するには、プレイヤーにカスタムクラフトを行わせたい場所に最後のドロッパーを 1 つ置きます。これがカスタム <strong>クラフター</strong> になります。</p><h2 id="system" tabindex="-1">System <a class="header-anchor" href="#system" aria-label="Permalink to &quot;System&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/custom_crafting.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/custom_crafting.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## If Recipe Matches Crafter: Clone Recipe Output to Crafter</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if blocks &lt;recipe&gt; &lt;recipe&gt; &lt;crafter&gt; masked run clone &lt;recipe_output&gt; &lt;recipe_output&gt; &lt;crafter&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img${ssrRenderAttr("src", _imports_1)} alt="One repeating Command Block"></p><p><strong>定義:</strong></p><ul><li><code class="shiki"><span>&lt;crafter&gt;</span></code> — <strong>クラフター</strong> として使うドロッパーの入力座標 (x,y,z)。</li><li><code class="shiki"><span>&lt;recipe&gt;</span></code> — <strong>レシピ</strong> を入れたドロッパーの入力座標 (x,y,z)。</li><li><code class="shiki"><span>&lt;recipe_output&gt;</span></code> — レシピの <strong>出力</strong> を入れたドロッパーの入力座標 (x,y,z)。</li></ul><p>必要であれば、@TwigYT が共有した .mcstructure のサンプルをダウンロードできます。</p>`);
  _push(ssrRenderComponent(_component_Button, {
    link: "/assets/packs/commands/custom-crafting/custom_crafter_example.mcstructure",
    download: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` サンプル MCSTRUCTURE をダウンロード `);
      } else {
        return [
          createTextVNode(" サンプル MCSTRUCTURE をダウンロード ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "completed-setup.png",
    alt: "Completed Setup",
    width: "800"
  }, null, _parent));
  _push(`<blockquote><p>注: 構造ブロックで構造物を取り込んだあとも、上で定義したとおりにコマンドブロック内の値を置き換える必要があります。</p></blockquote><h2 id="ヒント" tabindex="-1">ヒント <a class="header-anchor" href="#ヒント" aria-label="Permalink to &quot;ヒント&quot;">​</a></h2><p>次のように <code class="shiki"><span>playsound</span></code> コマンドを追加すると、クラフト体験を少しだけ向上させられます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/custom_crafting.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/custom_crafting.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## If Recipe Matches Crafter: Play Sound Upon Crafting (optional)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if blocks &lt;recipe&gt; &lt;recipe&gt; &lt;crafter&gt; masked positioned &lt;crafter&gt; run playsound smithing_table.use @a[r=7]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## If Recipe Matches Crafter: Clone Recipe Output to Crafter</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if blocks &lt;recipe&gt; &lt;recipe&gt; &lt;crafter&gt; masked run clone &lt;recipe_out&gt; &lt;recipe_output&gt; &lt;crafter&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img${ssrRenderAttr("src", _imports_0)} alt="Chain of Two Command Blocks"></p><p>さらに進めるなら、<a href="/commands/block-entities">MBE</a> や <a href="/commands/display-entities">Fox MBE</a> を使って、ドロッパーにクラフトテーブルや鍛冶台の見た目をオーバーレイとして与えることもできます。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("commands/custom-crafting.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customCrafting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customCrafting as default
};
