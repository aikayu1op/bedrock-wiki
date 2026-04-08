import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"contents.json","description":"パック内のすべてのファイルを一覧化するファイルです。","frontmatter":{"title":"contents.json","description":"パック内のすべてのファイルを一覧化するファイルです。","mentions":["MedicalJewel105","Osaxely","SirLich","solvedDev","Joelant05","Jorginhor","TheItsNameless","QuazChick"]},"headers":[{"level":2,"title":"JSON 形式","slug":"json-形式","link":"#json-形式","children":[]},{"level":2,"title":"手順の自動化","slug":"手順の自動化","link":"#手順の自動化","children":[]},{"level":2,"title":"追加情報","slug":"追加情報","link":"#追加情報","children":[]}],"relativePath":"concepts/contents.md","filePath":"concepts/contents.md"}');
const _sfc_main = { name: "concepts/contents.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_FolderView = resolveComponent("FolderView");
  _push(`<div${ssrRenderAttrs(_attrs)}><p><code class="shiki"><span>contents.json</span></code> は、おそらくゲームがパック内のファイルをより簡単に処理するために使うファイルです。 パックを正常に動かすために、このファイルを入れることは必須ではありません。</p><p>主な目的は Marketplace コンテンツ内のファイルを暗号化できるようにすることですが、暗号化されていないバニラパックにも含まれています。</p><h2 id="json-形式" tabindex="-1">JSON 形式 <a class="header-anchor" href="#json-形式" aria-label="Permalink to &quot;JSON 形式&quot;">​</a></h2><p><code class="shiki"><span>contents.json</span></code> ファイルは、パックの <code class="shiki"><span>manifest.json</span></code> と同じ場所、つまりパックディレクトリのルートに置かれます。 <code class="shiki"><span>content</span></code> パラメータの下に配列として、パックに含まれるファイル一覧が入ります。</p><p>各 <code class="shiki"><span>content</span></code> エントリには 2 つのパラメータがあります。</p><ul><li><code class="shiki"><span>path</span></code> — パックのルートディレクトリからの相対パスです。ファイル拡張子を含める必要があります。</li><li><code class="shiki"><span>key</span></code>（任意）— 暗号化されたファイルを復号するためのキーです。</li></ul>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RP/contents.json`);
      } else {
        return [
          createTextVNode("RP/contents.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;content&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;path&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;animation_controllers/custom_entity.animation_controllers.json&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;path&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;animations/my_animation.animations.json&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;path&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;entity/custom_entity.entity.json&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;path&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;texts/en_US.lang&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;path&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;textures/wiki/blocks/custom_block.png&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;path&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;textures/textures_list.json&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;path&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;contents.json&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;path&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;manifest.json&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "RP/animation_controllers/custom_entity.animation_controllers.json",
    "RP/animations/my_animation.animations.json",
    "RP/entity/custom_entity.entity.json",
    "RP/texts/en_US.lang",
    "RP/textures/wiki/blocks/custom_block.png",
    "RP/textures/textures_list.json",
    "RP/contents.json",
    "RP/manifest.json"
  ] }, null, _parent));
  _push(`<h2 id="手順の自動化" tabindex="-1">手順の自動化 <a class="header-anchor" href="#手順の自動化" aria-label="Permalink to &quot;手順の自動化&quot;">​</a></h2><p><code class="shiki"><span>contents.json</span></code> ファイルは、ゲーム自身によって自動生成できます。 Minecraft に生成させれば、作成ミスを防げます。</p><p>ただし、先にファイルを用意する必要があります。アドオンのルートディレクトリに <code class="shiki"><span>contents.json</span></code> という空のファイルを作成し、空の中かっこを書いておきます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP|RP/contents.json`);
      } else {
        return [
          createTextVNode("BP|RP/contents.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>ファイルの内容は、次回ゲーム起動時に自動で書き込まれます。</p><h2 id="追加情報" tabindex="-1">追加情報 <a class="header-anchor" href="#追加情報" aria-label="Permalink to &quot;追加情報&quot;">​</a></h2><ul><li>この自動処理は、パックの場所（development フォルダーでも通常フォルダーでも）に関係なく利用できます。</li><li>サブパックごとに <code class="shiki"><span>contents.json</span></code> を作る必要はありません。パックのルートにあるファイルだけで十分です。</li><li>このファイルは、パックを正常に動かすために必須ではありません。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/contents.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contents = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contents as default
};
