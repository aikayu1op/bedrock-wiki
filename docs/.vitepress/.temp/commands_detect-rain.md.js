import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"雨の検出","description":"コマンドを使って雨を検出します。","frontmatter":{"title":"雨の検出","category":"Detection Systems","tags":["easy"],"mentions":["BedrockCommands","zheaEvyline"],"description":"コマンドを使って雨を検出します。"},"headers":[{"level":2,"title":"はじめに","slug":"はじめに","link":"#はじめに","children":[]},{"level":2,"title":"セットアップ","slug":"セットアップ","link":"#セットアップ","children":[]},{"level":2,"title":"システム","slug":"システム","link":"#システム","children":[]},{"level":2,"title":"フォルダ構成","slug":"フォルダ構成","link":"#フォルダ構成","children":[]}],"relativePath":"commands/detect-rain.md","filePath":"commands/detect-rain.md"}');
const _sfc_main = { name: "commands/detect-rain.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_FolderView = resolveComponent("FolderView");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h2><p><a href="https://bedrockcommands.org/" target="_blank" rel="noreferrer">Bedrock Commands Community (BCC) Discord が出典です</a></p><p>このシステムを使うと、オーバーワールドで雨が降り始めるたびにコマンドを自動実行できます。</p><div class="warning custom-block"><p class="custom-block-title">制限:</p><p>このシステムは、雨で火がすぐに消える仕組みに依存しています。そのため、正しく動作させるには <strong>Fire Spread</strong> のゲームルールを有効にしておく必要があります。</p></div><h2 id="セットアップ" tabindex="-1">セットアップ <a class="header-anchor" href="#セットアップ" aria-label="Permalink to &quot;セットアップ&quot;">​</a></h2><p><em>次のコマンドをチャットで入力します。</em></p><p><code class="shiki"><span>/scoreboard objectives add wiki:q.is_raining dummy</span></code></p><p>functions を使っていて、ワールド初期化時に自動で objective を追加したい場合は、<a href="/commands/on-first-world-load">ワールドの初回読み込み時</a> に記載された手順に従ってください。</p><p><strong>手順:</strong></p><ol><li>ティック範囲内、または常に読み込まれたままのチャンクにあるオーバーワールドの座標を選びます。</li><li>その座標の上に、空をふさぐブロックがないことを確認します。</li><li>プレイヤーが検出用ブロック（火）に干渉できないよう、周囲を保護します。</li></ol><h2 id="システム" tabindex="-1">システム <a class="header-anchor" href="#システム" aria-label="Permalink to &quot;システム&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/detect/weather/is_raining.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/detect/weather/is_raining.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## State Machine</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### If fire is gone and wasn&#39;t already raining, set to state 1 (Just Started)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute unless block 0 0 0 fire unless score .Weather wiki:q.is_raining matches 2 run scoreboard players set .Weather wiki:q.is_raining 1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### If fire is still there, set to state 0 (Clear Weather)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if block 0 0 0 fire run scoreboard players set .Weather wiki:q.is_raining 0</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Maintain Fire</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Place new fire block at the coordinate to check next game tick</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">setblock 0 0 0 fire</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Your Commands Here (Examples):</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Runs every tick while it is raining</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if score .Weather wiki:q.is_raining matches 1.. run title @a actionbar It is raining.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Runs only once when the rain first starts</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if score .Weather wiki:q.is_raining matches 1 run say It has started raining.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Runs every tick when it is not raining</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if score .Weather wiki:q.is_raining matches 0 run title @a actionbar It&#39;s not raining.</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Update State</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Move from state 1 to state 2 to stop the &quot;once&quot; command from looping</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if score .Weather wiki:q.is_raining matches 1 run scoreboard players set .Weather wiki:q.is_raining 2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>この同じ順序を守り、<code class="shiki"><span>execute if score .Weather wiki:q.is_raining matches</span></code> の構造を、目的のコマンドに合わせて正しく適用する必要があります。また、プレースホルダーの座標 <code class="shiki"><span>(0, 0, 0)</span></code> は、実際にワールドで使う検出座標に置き換えてください。</p><h2 id="フォルダ構成" tabindex="-1">フォルダ構成 <a class="header-anchor" href="#フォルダ構成" aria-label="Permalink to &quot;フォルダ構成&quot;">​</a></h2><p>functions を使う場合、ビヘイビアパックは次のように整理します。</p>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "BP",
    "BP/functions",
    "BP/pack_icon.png",
    "BP/manifest.json",
    "BP/functions/wiki",
    "BP/functions/wiki/main",
    "BP/functions/wiki/detect",
    "BP/functions/wiki/detect/weather",
    "BP/functions/wiki/detect/weather/is_raining.mcfunction",
    "BP/functions/tick.json"
  ] }, null, _parent));
  _push(`<p>この構成では、<code class="shiki"><span>is_raining</span></code> 関数は <code class="shiki"><span>main.mcfunction</span></code> から呼び出され、<code class="shiki"><span>tick.json</span></code> を通じて毎ティック実行されます。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("commands/detect-rain.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const detectRain = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  detectRain as default
};
