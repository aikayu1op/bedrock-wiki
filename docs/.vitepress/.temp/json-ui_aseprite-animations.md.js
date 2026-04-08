import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Aseprite アニメーション","description":"Aseprite でアニメーションを作成し、JSON UI で表示する方法を学びます。","frontmatter":{"title":"Aseprite アニメーション","description":"Aseprite でアニメーションを作成し、JSON UI で表示する方法を学びます。","category":"Tutorials","mentions":["TheDataLioness","shanewolf38","TheItsNameless","LeGend077","stirante"]},"headers":[{"level":2,"title":"Aseprite の紹介","slug":"aseprite-の紹介","link":"#aseprite-の紹介","children":[]},{"level":2,"title":"Aseprite でアニメーションを作成する","slug":"aseprite-でアニメーションを作成する","link":"#aseprite-でアニメーションを作成する","children":[]},{"level":2,"title":"JSON UI で Aseprite アニメーションを使う","slug":"json-ui-で-aseprite-アニメーションを使う","link":"#json-ui-で-aseprite-アニメーションを使う","children":[]}],"relativePath":"json-ui/aseprite-animations.md","filePath":"json-ui/aseprite-animations.md"}');
const _sfc_main = { name: "json-ui/aseprite-animations.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FolderView = resolveComponent("FolderView");
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="aseprite-の紹介" tabindex="-1">Aseprite の紹介 <a class="header-anchor" href="#aseprite-の紹介" aria-label="Permalink to &quot;Aseprite の紹介&quot;">​</a></h2><p><a href="https://www.aseprite.org/" target="_blank" rel="noreferrer">Aseprite</a> は、スキンやリソースパックを簡単に作れるよう設計された、有料のピクセルアート制作アプリです。 豊富なツール、充実したドキュメント、チュートリアルを備え、あらゆるレベルのアーティストに対応しています。 ソースコードは、個人利用に限り無料でコンパイルできます。</p><p><a href="https://libresprite.github.io/" target="_blank" rel="noreferrer">LibreSprite</a> は、Aseprite の代替となる無料かつオープンソースのツールです。 Aseprite の最後のオープンソース版から分岐したもので、このチュートリアルは LibreSprite でも実践できます。</p><h2 id="aseprite-でアニメーションを作成する" tabindex="-1">Aseprite でアニメーションを作成する <a class="header-anchor" href="#aseprite-でアニメーションを作成する" aria-label="Permalink to &quot;Aseprite でアニメーションを作成する&quot;">​</a></h2><p><code class="shiki"><span>frameimage</span></code> という名前で 1 から 5 まで連番のフレーム画像があるとします。 最初の画像を読み込むと、Aseprite は同じ名前で番号だけが異なる他の画像を自動的に認識します。 その後、それらを正しい順序で並べてアニメーションを作成します。</p>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "frameimage1.png",
    "frameimage2.png",
    "frameimage3.png",
    "frameimage4.png",
    "frameimage5.png"
  ] }, null, _parent));
  _push(`<p>矢印キーで全フレームを移動し、<code class="shiki"><span>Enter</span></code> キーでアニメーションの再生と一時停止を切り替えます。 <code class="shiki"><span>Tab</span></code> キーでタイムラインを開き、個別のフレームを選択できます。 タイムライン上のフレームを右クリックすると、各種設定にアクセスできます。</p><p>アニメーションを書き出すには、<code class="shiki"><span>Ctrl + E</span></code> のショートカットを使うか、<code class="shiki"><span>ファイル</span></code> -&gt; <code class="shiki"><span>スプライトシートに書き出し</span></code> に進みます。 出力設定では、<code class="shiki"><span>Output file</span></code> と <code class="shiki"><span>JSON Data</span></code> を選択してください。 <code class="shiki"><span>Hash</span></code> と <code class="shiki"><span>Array</span></code> の選択肢があるドロップダウンが表示されます。 <code class="shiki"><span>Array</span></code> オプションを選択しないと、正しく書き出されません。</p><p>これで、<code class="shiki"><span>SpriteSheet</span></code> 画像と JSON ファイルの 2 つができているはずです。 両方のファイルが同じ名前で、拡張子だけが異なっていることを確認してください。</p><h2 id="json-ui-で-aseprite-アニメーションを使う" tabindex="-1">JSON UI で Aseprite アニメーションを使う <a class="header-anchor" href="#json-ui-で-aseprite-アニメーションを使う" aria-label="Permalink to &quot;JSON UI で Aseprite アニメーションを使う&quot;">​</a></h2><p><code class="shiki"><span>aseprite_flip_book</span></code> アニメーションタイプは、<code class="shiki"><span>image</span></code> 型要素の <code class="shiki"><span>uv</span></code> プロパティにしか使えません。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RP/ui/example_file.json`);
      } else {
        return [
          createTextVNode("RP/ui/example_file.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;image_element&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;image&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;textures/wiki/ui/my_sprite_file&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;uv_size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">32</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">32</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;uv&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;@example_namespace.image_uv_animation&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;image_uv_animation&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;anim_type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;aseprite_flip_book&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;initial_uv&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code class="shiki"><span>texture</span></code> フィールドには、書き出したファイルの拡張子を除いたパスを設定します。 <code class="shiki"><span>uv_size</span></code> フィールドには、1 フレームの幅と高さを設定します。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("json-ui/aseprite-animations.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const asepriteAnimations = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  asepriteAnimations as default
};
