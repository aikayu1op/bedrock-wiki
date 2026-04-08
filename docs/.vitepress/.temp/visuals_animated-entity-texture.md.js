import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/images/visuals/animated-entity-texture/result.gif";
const __pageData = JSON.parse('{"title":"エンティティのテクスチャアニメーション","description":"ブロックのフリップブックテクスチャに似た、エンティティ用のアニメーションテクスチャを作る方法を学びます。","frontmatter":{"title":"エンティティのテクスチャアニメーション","description":"ブロックのフリップブックテクスチャに似た、エンティティ用のアニメーションテクスチャを作る方法を学びます。","category":"Tutorials","mentions":["MedicalJewel105","IlkinQafarov","TheItsNameless","SmokeyStack","QuazChick"],"tags":["intermediate"]},"headers":[{"level":2,"title":"出典","slug":"出典","link":"#出典","children":[]},{"level":2,"title":"テクスチャ","slug":"テクスチャ","link":"#テクスチャ","children":[]},{"level":2,"title":"アニメーション付き Material","slug":"アニメーション付き-material","link":"#アニメーション付き-material","children":[{"level":3,"title":"Material を作成する","slug":"material-を作成する","link":"#material-を作成する","children":[]},{"level":3,"title":"Material を適用する","slug":"material-を適用する","link":"#material-を適用する","children":[]}]},{"level":2,"title":"Render Controller","slug":"render-controller","link":"#render-controller","children":[]},{"level":2,"title":"結果","slug":"結果","link":"#結果","children":[]},{"level":2,"title":"サンプル Pack をダウンロード","slug":"サンプル-pack-をダウンロード","link":"#サンプル-pack-をダウンロード","children":[]}],"relativePath":"visuals/animated-entity-texture.md","filePath":"visuals/animated-entity-texture.md"}');
const _sfc_main = { name: "visuals/animated-entity-texture.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_YouTubeEmbed = resolveComponent("YouTubeEmbed");
  const _component_WikiImage = resolveComponent("WikiImage");
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>このページでは、ブロックのフリップブックテクスチャに似た、エンティティ用のアニメーションテクスチャを作る方法を学びます。</p><h2 id="出典" tabindex="-1">出典 <a class="header-anchor" href="#出典" aria-label="Permalink to &quot;出典&quot;">​</a></h2><p>このページは <a href="https://www.youtube.com/channel/UC-ljddYkFdTQl-MVEaVvbuQ" target="_blank" rel="noreferrer">AgentMindStorm</a> の内容をもとにしています。</p>`);
  _push(ssrRenderComponent(_component_YouTubeEmbed, { id: "F6e-w1rCEi4" }, null, _parent));
  _push(`<h2 id="テクスチャ" tabindex="-1">テクスチャ <a class="header-anchor" href="#テクスチャ" aria-label="Permalink to &quot;テクスチャ&quot;">​</a></h2><p>まず、エンティティ用の新しいテクスチャフレームを描きます。このチュートリアルでは、周囲を見回す牛を使います。</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "cow.png",
    alt: "Frames of an animated cow texture stacked on top of each other",
    width: "180",
    pixelated: ""
  }, null, _parent));
  _push(`<p>テクスチャは、ブロックのフリップブックテクスチャと同じように縦に並べます。 この例では 4 フレームです。</p><h2 id="アニメーション付き-material" tabindex="-1">アニメーション付き Material <a class="header-anchor" href="#アニメーション付き-material" aria-label="Permalink to &quot;アニメーション付き Material&quot;">​</a></h2><h3 id="material-を作成する" tabindex="-1">Material を作成する <a class="header-anchor" href="#material-を作成する" aria-label="Permalink to &quot;Material を作成する&quot;">​</a></h3><p>このガイドでは material を変更する必要があります。ただし Render Dragon により material は古くなっているため、<strong>自己責任で使ってください</strong>。</p><p>アニメーションテクスチャを使うには、エンティティの material を <code class="shiki"><span>USE_UV_ANIM</span></code> property を持つものに変更する必要があります。 新しい material を追加してみましょう。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RP/materials/entity.material`);
      } else {
        return [
          createTextVNode("RP/materials/entity.material")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;materials&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.0.0&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;custom_animated:entity&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;+defines&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;USE_UV_ANIM&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>または、既存の material に追加することもできます。既定の material file を確認してください。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, null, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;+defines&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;USE_UV_ANIM&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`);
  _push(ssrRenderComponent(_component_Button, {
    link: "/assets/packs/visuals/animated-entity-texture/entity.material",
    download: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Download default entity.material file `);
      } else {
        return [
          createTextVNode(" Download default entity.material file ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>すべてのエンティティで簡単にできるわけではありません。 一部のエンティティは複数の material を持つため、テクスチャをアニメーションさせたい場合は、そのエンティティのすべての material にこの property を追加する必要があります。</p></div><h3 id="material-を適用する" tabindex="-1">Material を適用する <a class="header-anchor" href="#material-を適用する" aria-label="Permalink to &quot;Material を適用する&quot;">​</a></h3><p>次に進む前に、client entity file に新しい material を定義する必要があります。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`minecraft:client_entity &gt; description`);
      } else {
        return [
          createTextVNode("minecraft:client_entity > description")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;materials&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">	&quot;default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;custom_animated&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="render-controller" tabindex="-1">Render Controller <a class="header-anchor" href="#render-controller" aria-label="Permalink to &quot;Render Controller&quot;">​</a></h2><p>そのあとで render controller を編集します。</p><p>Here we will add <code class="shiki"><span>uv_anim</span></code> component with offset and scale properties:</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RP/render_controllers/cow.render_controllers.json &gt; controller.render.cow`);
      } else {
        return [
          createTextVNode("RP/render_controllers/cow.render_controllers.json > controller.render.cow")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;uv_anim&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;offset&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;math.mod(math.floor(q.life_time * frames_per_second), frame_count) / frame_count&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;scale&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1 / frame_count&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>ここで <code class="shiki"><span>frames_per_second</span></code> は 1秒あたりに切り替えたいフレーム数、<code class="shiki"><span>frame_count</span></code> は総フレーム数です。 この式は、life time に応じて texture の offset とサイズを計算します。</p><h2 id="結果" tabindex="-1">結果 <a class="header-anchor" href="#結果" aria-label="Permalink to &quot;結果&quot;">​</a></h2><p>さあ、作ったものをテストしましょう。</p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><h2 id="サンプル-pack-をダウンロード" tabindex="-1">サンプル Pack をダウンロード <a class="header-anchor" href="#サンプル-pack-をダウンロード" aria-label="Permalink to &quot;サンプル Pack をダウンロード&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Button, { link: "https://github.com/Bedrock-OSS/bedrock-examples/releases/download/download/animated_entity_texture.mcpack" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Download MCPACK `);
      } else {
        return [
          createTextVNode(" Download MCPACK ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("visuals/animated-entity-texture.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const animatedEntityTexture = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  animatedEntityTexture as default
};
