import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_1$1 } from "./1.MC0i4d8f.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_1 = "/assets/images/commands/orbital-camera/2d-visualization.gif";
const __pageData = JSON.parse('{"title":"軌道カメラ","description":"この手法では、カメラの回転をプレイヤー・エンティティ・座標の周囲を回る軌道に限定でき、軌道の高さと半径も自由に調整できます。","frontmatter":{"title":"軌道カメラ","category":"Techniques","mentions":["BedrockCommands","zheaEvyline"],"description":"この手法では、カメラの回転をプレイヤー・エンティティ・座標の周囲を回る軌道に限定でき、軌道の高さと半径も自由に調整できます。"},"headers":[{"level":2,"title":"はじめに","slug":"はじめに","link":"#はじめに","children":[]},{"level":2,"title":"動画デモ","slug":"動画デモ","link":"#動画デモ","children":[]},{"level":2,"title":"コマンド","slug":"コマンド","link":"#コマンド","children":[]}],"relativePath":"commands/orbital-camera.md","filePath":"commands/orbital-camera.md"}');
const _sfc_main = { name: "commands/orbital-camera.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_YouTubeEmbed = resolveComponent("YouTubeEmbed");
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h2><p><a href="https://bedrockcommands.org/" target="_blank" rel="noreferrer">Sourced by the Bedrock Commands Community (BCC) Discord</a></p><p>この手法では、カメラの回転をプレイヤー・エンティティ・座標の周囲を回る軌道に限定でき、軌道の高さと半径も自由に調整できます。</p><h2 id="動画デモ" tabindex="-1">動画デモ <a class="header-anchor" href="#動画デモ" aria-label="Permalink to &quot;動画デモ&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_YouTubeEmbed, { id: "yOlWjTpInFE" }, null, _parent));
  _push(`<h2 id="コマンド" tabindex="-1">コマンド <a class="header-anchor" href="#コマンド" aria-label="Permalink to &quot;コマンド&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/camera/orbital.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/camera/orbital.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @p at @s anchored eyes rotated ~ 0 positioned ^^1^-2 run camera @s set minecraft:free ease 0.1 linear pos ~~~ facing @s</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img${ssrRenderAttr("src", _imports_1$1)} alt="One Repeating Command Block"></p><p><strong>2D 可視化:</strong></p><p><img${ssrRenderAttr("src", _imports_1)} alt="Orbital Camera 2D Visualization"></p><p><strong>コマンドの分解</strong></p><ul><li><code class="shiki"><span>as @p</span></code><ul><li>実行対象を最も近いプレイヤーに設定します。</li></ul></li><li><code class="shiki"><span>at @s</span></code><ul><li>実行位置を対象プレイヤー自身の位置に設定します。</li></ul></li><li><code class="shiki"><span>anchored eyes</span></code><ul><li>実行位置を対象プレイヤーの目の高さまで引き上げます。</li></ul></li><li><code class="shiki"><span>rotated ~ 0</span></code><ul><li>実行回転を対象プレイヤーの水平回転基準で設定しつつ、垂直回転を 0°（真っすぐ）に固定します。</li><li>逆に水平回転を固定したい場合は、<code class="shiki"><span>rotated 0 ~</span></code> とします。 <ul><li>注: 値 <code class="shiki"><span>0</span></code> は必要な向きに合わせて変更できます。詳しくは <a href="/commands/selectors#rotation">Rotations</a> を参照してください。</li></ul></li><li>垂直回転を固定したくない場合は、この部分を丸ごと省略して完全な球面回転にできます。ただし、その場合でもカメラが地面の下に潜るのは防げません。</li></ul></li><li><code class="shiki"><span>positioned ^^1^-2</span></code><ul><li>実行位置をプレイヤーの 1 ブロック上、かつ 2 ブロック後方へ移動します。</li><li>値 <code class="shiki"><span>1</span></code> を増減すると、軌道の高さを増減できます。</li><li>値 <code class="shiki"><span>-2</span></code> を増減すると、軌道の半径を増減できます。 <ul><li>負の値はプレイヤーの後方に位置を設定します。</li><li>正の値はプレイヤーの前方に位置を設定します。</li><li>詳しくは <a href="/commands/relative-coordinates">座標系</a> を参照してください。</li></ul></li></ul></li><li><code class="shiki"><span>run camera @s set minecraft:free ease 0.1 linear pos ~~~</span></code><ul><li>相対座標（対象プレイヤーの視点から 1 ブロック上、2 ブロック後方）に、<code class="shiki"><span>minecraft:free</span></code> プリセットと <code class="shiki"><span>linear</span></code> の ease 値 <code class="shiki"><span>0.1</span></code> を使ってカメラを設定します。</li><li>カメラ移動速度は ease 値 <code class="shiki"><span>0.1</span></code> を増減して調整できます。</li><li><code class="shiki"><span>/camera</span></code> コマンドと、プリセットや ease などの利用可能なオプションについては、次の資料を参照してください。 <ul><li><a href="https://learn.microsoft.com/en-us/minecraft/creator/documents/cameracommandintroduction" target="_blank" rel="noreferrer">Introduction to Camera Command</a></li><li><a href="https://youtu.be/GnYrZlBCyWg" target="_blank" rel="noreferrer">Camera Command Video Tutorial</a></li></ul></li></ul></li><li><code class="shiki"><span>facing @s</span></code><ul><li>カメラの向きを対象プレイヤー自身の方向へ向けます。</li></ul></li></ul><p><strong>類似例</strong></p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/camera/orbital.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/camera/orbital.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"># To orbit camera around entity tagged with &#39;wiki:orbital_camera.focus&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @p at @e[tag=wiki:orbital_camera.focus] anchored eyes rotated as @s rotated ~ 0 positioned ^^1^-5 run camera @s set minecraft:free ease 0.1 linear pos ~~~ facing @e[tag=wiki:orbital_camera.focus]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img${ssrRenderAttr("src", _imports_1$1)} alt="One Repeating Command Block"></p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/camera/orbital.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/camera/orbital.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"># To orbit camera around position 6 7 8</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @p positioned 6 7 8 rotated as @s rotated ~ 0 positioned ^^1^-5 run camera @s set minecraft:free ease 0.1 linear pos ~~~ facing 6 7 8</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img${ssrRenderAttr("src", _imports_1$1)} alt="One Repeating Command Block"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("commands/orbital-camera.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const orbitalCamera = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  orbitalCamera as default
};
