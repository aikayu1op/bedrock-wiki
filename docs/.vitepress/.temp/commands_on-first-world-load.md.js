import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ワールドの初回読み込み時","description":"パック適用後、ワールドが初めて読み込まれたときに特定のコマンドを実行するシステムです。","frontmatter":{"title":"ワールドの初回読み込み時","category":"On Event Systems","mentions":["BedrockCommands","zheaEvyline","SmokeyStack","cda94581"],"nav_order":0,"tags":["function"],"description":"パック適用後、ワールドが初めて読み込まれたときに特定のコマンドを実行するシステムです。"},"headers":[{"level":2,"title":"はじめに","slug":"はじめに","link":"#はじめに","children":[]},{"level":2,"title":"Tick JSON","slug":"tick-json","link":"#tick-json","children":[]},{"level":2,"title":"メイン MCFUNCTION","slug":"メイン-mcfunction","link":"#メイン-mcfunction","children":[]},{"level":2,"title":"システム","slug":"システム","link":"#システム","children":[]},{"level":2,"title":"フォルダ構成","slug":"フォルダ構成","link":"#フォルダ構成","children":[]}],"relativePath":"commands/on-first-world-load.md","filePath":"commands/on-first-world-load.md"}');
const _sfc_main = { name: "commands/on-first-world-load.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_FolderView = resolveComponent("FolderView");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h2><p><a href="https://bedrockcommands.org/" target="_blank" rel="noreferrer">Sourced by the Bedrock Commands Community (BCC) Discord</a></p><p>このシステムを使うと、パックを適用したあと、ワールドが最初に読み込まれたときに特定のコマンドを実行できます。</p><blockquote><p><strong>注:</strong> このシステムには <a href="/commands/mcfunctions">Function</a> パックが必要です。<code class="shiki"><span>tick.json</span></code> ファイルは、ワールド初期化直後にロジックを起動するために必要です。</p></blockquote><h2 id="tick-json" tabindex="-1">Tick JSON <a class="header-anchor" href="#tick-json" aria-label="Permalink to &quot;Tick JSON&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/tick.json`);
      } else {
        return [
          createTextVNode("BP/functions/tick.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">  &quot;values&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;wiki/main&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">  ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="メイン-mcfunction" tabindex="-1">メイン MCFUNCTION <a class="header-anchor" href="#メイン-mcfunction" aria-label="Permalink to &quot;メイン MCFUNCTION&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/main.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/main.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"># ON FIRST WORLD LOAD</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Execute Function if World Not Initialized</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute unless score .World wiki:q.is_initialised matches 1 run function wiki/event/worlds/on_initialise</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="システム" tabindex="-1">システム <a class="header-anchor" href="#システム" aria-label="Permalink to &quot;システム&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/event/worlds/on_initialise.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/event/worlds/on_initialise.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## ここにコマンドを入れます（例）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">say World initialized! Pack loaded for the first time.</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Initialization</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### 目標を追加</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard objectives add wiki:q.is_initialised dummy</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### 初期化済みとしてマーク</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players set .World wiki:q.is_initialised 1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>目的のコマンドが実行されると、このシステムは <code class="shiki"><span>wiki:q.is_initialised</span></code> というスコアボード目標を作成します。この目標は、<code class="shiki"><span>.World</span></code> という特定のスコア保持者を使ってワールドの初期化状態を追跡します。<code class="shiki"><span>.World</span></code> のスコアをすぐに <code class="shiki"><span>1</span></code> に設定することで、初期化ロジックは「固定」され、その後のティックやワールド再読み込み時に再実行されなくなります。</p><h2 id="フォルダ構成" tabindex="-1">フォルダ構成 <a class="header-anchor" href="#フォルダ構成" aria-label="Permalink to &quot;フォルダ構成&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "BP",
    "BP/functions",
    "BP/functions/wiki",
    "BP/functions/wiki/main.mcfunction",
    "BP/pack_icon.png",
    "BP/manifest.json",
    "BP/functions/wiki/event",
    "BP/functions/wiki/event/worlds",
    "BP/functions/wiki/event/worlds/on_initialise.mcfunction",
    "BP/functions/tick.json"
  ] }, null, _parent));
  _push(`<p>この構成では、<code class="shiki"><span>on_initialise</span></code> 関数は <code class="shiki"><span>main.mcfunction</span></code> から呼び出され、<code class="shiki"><span>tick.json</span></code> を通じて毎ティック実行されます。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("commands/on-first-world-load.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const onFirstWorldLoad = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  onFirstWorldLoad as default
};
