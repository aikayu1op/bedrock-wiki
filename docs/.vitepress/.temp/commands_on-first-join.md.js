import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./3.DiXi2sCX.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"プレイヤーの初回参加時","description":"プレイヤーがワールドに初めて参加したときに、指定したコマンドを実行するシステムです。","frontmatter":{"title":"プレイヤーの初回参加時","category":"On Event Systems","tags":["easy"],"mentions":["BedrockCommands","zheaEvyline","SmokeyStack"],"nav_order":1,"description":"プレイヤーがワールドに初めて参加したときに、指定したコマンドを実行するシステムです。"},"headers":[{"level":2,"title":"はじめに","slug":"はじめに","link":"#はじめに","children":[]},{"level":2,"title":"システム","slug":"システム","link":"#システム","children":[]},{"level":2,"title":"解説","slug":"解説","link":"#解説","children":[]},{"level":2,"title":"フォルダ構成","slug":"フォルダ構成","link":"#フォルダ構成","children":[]}],"relativePath":"commands/on-first-join.md","filePath":"commands/on-first-join.md"}');
const _sfc_main = { name: "commands/on-first-join.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_FolderView = resolveComponent("FolderView");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h2><p><a href="https://bedrockcommands.org/" target="_blank" rel="noreferrer">Sourced by the Bedrock Commands Community (BCC) Discord</a></p><p>このシステムは、プレイヤーがワールドに初めて参加したときに、指定したコマンドを実行します。</p><h2 id="システム" tabindex="-1">システム <a class="header-anchor" href="#システム" aria-label="Permalink to &quot;システム&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/event/players/on_first_join.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/event/players/on_first_join.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## ここにコマンドを入れる（例）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### 石のツルハシ ×1 を与える</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">give @a[tag=!wiki:joined] stone_pickaxe</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### パン ×16 を与える</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">give @a[tag=!wiki:joined] bread 16</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## 参加済みとして記録</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">tag @a[tag=!wiki:joined] add wiki:joined</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img${ssrRenderAttr("src", _imports_0)} alt="Chain of 3 Command Blocks"></p><p>ここでは <code class="shiki"><span>/give</span></code> コマンドを 2 つ例として使っていますが、好きなコマンドを必要な数だけ使えます。</p><p>ただし、示された順序を守り、目的のコマンドに <code class="shiki"><span>tag=!wiki:joined</span></code> セレクター引数を正しく適用してください。</p><h2 id="解説" tabindex="-1">解説 <a class="header-anchor" href="#解説" aria-label="Permalink to &quot;解説&quot;">​</a></h2><p>プレイヤーがワールドに初めて参加したとき、そのプレイヤーには <code class="shiki"><span>joined</span></code> タグが付いていません。</p><p>タグのないプレイヤーに対して目的のコマンドを実行すると、その直後にタグが付与されます。そのため、次のコマンドでタグを外さない限り、同じコマンドは繰り返されません。</p><p><br><code class="shiki"><span>/tag &lt;player&gt; remove wiki:joined</span></code></p><h2 id="フォルダ構成" tabindex="-1">フォルダ構成 <a class="header-anchor" href="#フォルダ構成" aria-label="Permalink to &quot;フォルダ構成&quot;">​</a></h2><p>functions を使う場合、パックのフォルダ構成は次のようになります。</p>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "BP",
    "BP/functions",
    "BP/functions/wiki",
    "BP/functions/wiki/main.mcfunction",
    "BP/pack_icon.png",
    "BP/manifest.json",
    "BP/functions/wiki/event",
    "BP/functions/wiki/event/players",
    "BP/functions/wiki/event/players/on_first_join.mcfunction",
    "BP/functions/tick.json"
  ] }, null, _parent));
  _push(`<p>この構成では、<code class="shiki"><span>on_first_join</span></code> 関数は <code class="shiki"><span>main.mcfunction</span></code> から呼び出され、<code class="shiki"><span>tick.json</span></code> を通じて毎ティック実行されます。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("commands/on-first-join.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const onFirstJoin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  onFirstJoin as default
};
