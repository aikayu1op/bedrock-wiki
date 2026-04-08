import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"エンティティの影を消す","description":"あの邪魔な影を消す方法です。","frontmatter":{"title":"エンティティの影を消す","tags":["intermediate"],"category":"Tutorials","mentions":["SirLich","solvedDev","Joelant05","MedicalJewel105","SmokeyStack","ThomasOrs"],"description":"あの邪魔な影を消す方法です。"},"headers":[{"level":2,"title":"小さな当たり判定","slug":"小さな当たり判定","link":"#小さな当たり判定","children":[]},{"level":2,"title":"非表示時にも描画する","slug":"非表示時にも描画する","link":"#非表示時にも描画する","children":[]},{"level":2,"title":"地中にテレポートする","slug":"地中にテレポートする","link":"#地中にテレポートする","children":[]},{"level":2,"title":"Runtime Identifier を使う","slug":"runtime-identifier-を使う","link":"#runtime-identifier-を使う","children":[]},{"level":2,"title":"Material を使う","slug":"material-を使う","link":"#material-を使う","children":[{"level":4,"title":"動作する影コード: すべてのエンティティに影を付ける場合","slug":"動作する影コード-すべてのエンティティに影を付ける場合","link":"#動作する影コード-すべてのエンティティに影を付ける場合","children":[]},{"level":4,"title":"影を無効化するコード: すべてのエンティティから影を消す場合","slug":"影を無効化するコード-すべてのエンティティから影を消す場合","link":"#影を無効化するコード-すべてのエンティティから影を消す場合","children":[]},{"level":4,"title":"Geometry + Material の回避策","slug":"geometry-material-の回避策","link":"#geometry-material-の回避策","children":[]}]}],"relativePath":"visuals/remove-shadows.md","filePath":"visuals/remove-shadows.md"}');
const _sfc_main = { name: "visuals/remove-shadows.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_Spoiler = resolveComponent("Spoiler");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>エンティティの影を消す方法はいくつもありますが、そのほとんどには望ましくない副作用があります。特定のエンティティだけの影を、副作用なしで完璧に消す確実な方法はありません。</p><p>このドキュメントでは、影を消すためのいくつかの方法と、それによって起こりうる影響を紹介します。</p><h2 id="小さな当たり判定" tabindex="-1">小さな当たり判定 <a class="header-anchor" href="#小さな当たり判定" aria-label="Permalink to &quot;小さな当たり判定&quot;">​</a></h2><p>ひとつの方法は、collision component のサイズを非常に小さくすることです。これによりエンティティとのやり取りや攻撃は難しくなりますが、影は消えます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`minecraft:entity &gt; components`);
      } else {
        return [
          createTextVNode("minecraft:entity > components")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;minecraft:collision_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;width&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0.1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;height&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0.1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><a href="https://bedrock.dev/docs/stable/Entities#minecraft:custom_hit_test" target="_blank" rel="noreferrer"><code class="shiki"><span>custom hit test component</span></code></a> を追加することもできます。<code class="shiki"><span>custom_hit_test</span></code> component を使うと、エンティティを攻撃できるようになりますが、操作することはできません。<code class="shiki"><span>custom_hit_test</span></code> では影は作成されません。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`minecraft:entity &gt; components`);
      } else {
        return [
          createTextVNode("minecraft:entity > components")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;minecraft:custom_hit_test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;hitboxes&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;pivot&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0.5</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// This is the position of the hitbox, you can change the X, Y and Z values.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;width&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0.8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;height&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0.7</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">        // And you can add many more hitboxes as you want, just copy-paste the hitbox inside the &quot;hitboxes&quot; array.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="非表示時にも描画する" tabindex="-1">非表示時にも描画する <a class="header-anchor" href="#非表示時にも描画する" aria-label="Permalink to &quot;非表示時にも描画する&quot;">​</a></h2><p>別の方法は、エンティティに透明化効果を付与して（これでエンティティの影も隠れます）、<code class="shiki"><span>&quot;minecraft:renders_when_invisible&quot;</span></code> component を適用することです。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`minecraft:entity &gt; components`);
      } else {
        return [
          createTextVNode("minecraft:entity > components")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;minecraft:renders_when_invisible&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;minecraft:spell_effects&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;add_effects&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;visible&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;effect&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;invisibility&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;duration&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;infinite&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="地中にテレポートする" tabindex="-1">地中にテレポートする <a class="header-anchor" href="#地中にテレポートする" aria-label="Permalink to &quot;地中にテレポートする&quot;">​</a></h2><p>操作が必要なダミーエンティティ（不可視）がある場合、<code class="shiki"><span>/teleport @x ~ ~-0.01 ~</span></code> のようにテレポートできます。これによりエンティティが少し地面にめり込み、影が表示されなくなります。</p><h2 id="runtime-identifier-を使う" tabindex="-1">Runtime Identifier を使う <a class="header-anchor" href="#runtime-identifier-を使う" aria-label="Permalink to &quot;Runtime Identifier を使う&quot;">​</a></h2><p>一部のエンティティには影がないか、あっても非常に小さいものがあります。これらの runtime identifier を使えば、影を消せます。欠点は、そのエンティティ固有のハードコードされた挙動も引き継ぐことです。これが問題になることもあります。詳しくは <a href="/entities/runtime-identifier">runtime identifier のドキュメント</a> を参照してください。</p><h2 id="material-を使う" tabindex="-1">Material を使う <a class="header-anchor" href="#material-を使う" aria-label="Permalink to &quot;Material を使う&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>この方法はすでにサポートされていません。Render Dragon の登場により、このような material は機能しなくなりました。真面目に使おうとしないでください。特に Marketplace マップで試すのは避けてください。</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li>このフォルダーはバニラ RP パックの例には含まれておらず、APK ファイルから書き出すか手動で追加する必要があります。</li><li>これはブロックでは未検証で、エンティティでのみ確認されています。ブロックでも動くことを確認できた場合は、追加できるよう知らせてください。</li></ul></div>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Removing shadows via Materials." }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4 id="動作する影コード-すべてのエンティティに影を付ける場合" tabindex="-1"${_scopeId}>動作する影コード: すべてのエンティティに影を付ける場合 <a class="header-anchor" href="#動作する影コード-すべてのエンティティに影を付ける場合" aria-label="Permalink to &quot;動作する影コード: すべてのエンティティに影を付ける場合&quot;"${_scopeId}>​</a></h4>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`RP/materials/shadows.material`);
            } else {
              return [
                createTextVNode("RP/materials/shadows.material")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;shadow_overlay&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;+states&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:[</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>        &quot;DisableDepthTest&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>        &quot;DisableCulling&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>        &quot;Blending&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>        &quot;EnableStencilTest&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    ],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;vertexShader&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;shaders/color.vertex&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;vrGeometryShader&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;shaders/color.geometry&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;fragmentShader&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;shaders/shadow_stencil_overlay.fragment&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;blendSrc&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;DestColor&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;blendDst&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;Zero&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;frontFace&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;stencilFunc&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;Equal&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;stencilPass&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;Replace&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}></div></div><h4 id="影を無効化するコード-すべてのエンティティから影を消す場合" tabindex="-1"${_scopeId}>影を無効化するコード: すべてのエンティティから影を消す場合 <a class="header-anchor" href="#影を無効化するコード-すべてのエンティティから影を消す場合" aria-label="Permalink to &quot;影を無効化するコード: すべてのエンティティから影を消す場合&quot;"${_scopeId}>​</a></h4>`);
        _push2(ssrRenderComponent(_component_CodeHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;shadow_overlay&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;+states&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:[</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>        &quot;DisableDepthTest&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>        &quot;DisableCulling&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>        &quot;Blending&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>        &quot;EnableStencilTest&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    ],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;vertexShader&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;vrGeometryShader&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;fragmentShader&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;blendSrc&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;DestColor&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;blendDst&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;Zero&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;frontFace&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;stencilFunc&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;Equal&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;stencilPass&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;Replace&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("h4", {
            id: "動作する影コード-すべてのエンティティに影を付ける場合",
            tabindex: "-1"
          }, [
            createTextVNode("動作する影コード: すべてのエンティティに影を付ける場合 "),
            createVNode("a", {
              class: "header-anchor",
              href: "#動作する影コード-すべてのエンティティに影を付ける場合",
              "aria-label": 'Permalink to "動作する影コード: すべてのエンティティに影を付ける場合"'
            }, "​")
          ]),
          createVNode(_component_CodeHeader, null, {
            default: withCtx(() => [
              createTextVNode("RP/materials/shadows.material")
            ]),
            _: 1
          }),
          createVNode("div", { class: "language-json vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "json"),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"shadow_overlay"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "+states"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":[")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '        "DisableDepthTest"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '        "DisableCulling"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '        "Blending"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '        "EnableStencilTest"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    ],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "vertexShader"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"shaders/color.vertex"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "vrGeometryShader"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"shaders/color.geometry"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "fragmentShader"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"shaders/shadow_stencil_overlay.fragment"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "blendSrc"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"DestColor"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "blendDst"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"Zero"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "frontFace"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "stencilFunc"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"Equal"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "stencilPass"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"Replace"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "2"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "3"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "4"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "5"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "6"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "7"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "8"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "9"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "10"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "11"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "12"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "13"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "14"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "15"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "16"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "17"),
              createVNode("br")
            ])
          ]),
          createVNode("h4", {
            id: "影を無効化するコード-すべてのエンティティから影を消す場合",
            tabindex: "-1"
          }, [
            createTextVNode("影を無効化するコード: すべてのエンティティから影を消す場合 "),
            createVNode("a", {
              class: "header-anchor",
              href: "#影を無効化するコード-すべてのエンティティから影を消す場合",
              "aria-label": 'Permalink to "影を無効化するコード: すべてのエンティティから影を消す場合"'
            }, "​")
          ]),
          createVNode(_component_CodeHeader),
          createVNode("div", { class: "language-json vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "json"),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"shadow_overlay"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "+states"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":[")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '        "DisableDepthTest"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '        "DisableCulling"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '        "Blending"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '        "EnableStencilTest"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    ],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "vertexShader"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '""'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "vrGeometryShader"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '""'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "fragmentShader"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '""'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "blendSrc"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"DestColor"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "blendDst"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"Zero"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "frontFace"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "stencilFunc"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"Equal"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "stencilPass"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ":"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"Replace"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "2"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "3"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "4"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "5"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "6"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "7"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "8"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "9"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "10"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "11"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "12"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "13"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "14"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "15"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "16"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "17"),
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="geometry-material-の回避策" tabindex="-1">Geometry + Material の回避策 <a class="header-anchor" href="#geometry-material-の回避策" aria-label="Permalink to &quot;Geometry + Material の回避策&quot;">​</a></h4><p>エンティティに影を覆うモデルを適用し、<code class="shiki"><span>&quot;banner_pole&quot;</span></code> material を使うことで、エンティティの影を隠せます。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("visuals/remove-shadows.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const removeShadows = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  removeShadows as default
};
