import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./4.l8Fub4Bp.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"プレイヤー参加時","description":"プレイヤーがワールドに参加したときに、指定したコマンドを実行するシステムです。","frontmatter":{"title":"プレイヤー参加時","category":"On Event Systems","tags":["easy"],"mentions":["BedrockCommands","zheaEvyline"],"nav_order":2,"description":"プレイヤーがワールドに参加したときに、指定したコマンドを実行するシステムです。"},"headers":[{"level":2,"title":"はじめに","slug":"はじめに","link":"#はじめに","children":[]},{"level":2,"title":"セットアップ","slug":"セットアップ","link":"#セットアップ","children":[]},{"level":2,"title":"システム","slug":"システム","link":"#システム","children":[]},{"level":2,"title":"解説","slug":"解説","link":"#解説","children":[]},{"level":2,"title":"Tick JSON","slug":"tick-json","link":"#tick-json","children":[]}],"relativePath":"commands/on-player-join.md","filePath":"commands/on-player-join.md"}');
const _sfc_main = { name: "commands/on-player-join.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_FolderView = resolveComponent("FolderView");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h2><p><a href="https://bedrockcommands.org/" target="_blank" rel="noreferrer">Sourced by the Bedrock Commands Community (BCC) Discord</a></p><p>このシステムは、プレイヤーがワールドに参加したときに、指定したコマンドを実行します。</p><h2 id="セットアップ" tabindex="-1">セットアップ <a class="header-anchor" href="#セットアップ" aria-label="Permalink to &quot;セットアップ&quot;">​</a></h2><p><em>次のコマンドをチャットで入力します。</em></p><p><code class="shiki"><span>/scoreboard objectives add wiki:joined dummy</span></code></p><p>functions を使っていて、ワールド初期化時に objective を自動追加したい場合は、<a href="/commands/on-first-world-load">ワールドの初回読み込み時</a> に記載された手順に従ってください。</p><h2 id="システム" tabindex="-1">システム <a class="header-anchor" href="#システム" aria-label="Permalink to &quot;システム&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/event/players/on_join.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/event/players/on_join.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## 初参加または \`wiki:joined\` を以前消去されたプレイヤーを \`wiki:joined\` objective に登録する</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players add @a wiki:joined 0</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## ここにコマンドを入れる（例）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">tp @a[scores={wiki:joined=0}] 0 65 0</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### プレイヤーを参加済みとして記録</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### オンライン・オフライン両方のプレイヤーの \`joined\` スコアを消去</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players reset * wiki:joined</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### オンラインのプレイヤーのスコアを 1 に設定</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players set @a wiki:joined 1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><img${ssrRenderAttr("src", _imports_0)} alt="Chain of 4 Command Blocks"></p><p>ここでは <code class="shiki"><span>/tp</span></code> コマンドを例として使っていますが、好きなコマンドを必要な数だけ使えます。</p><p>ただし、示された順序を守り、目的のコマンドに <code class="shiki"><span>scores={wiki:joined=0}</span></code> セレクター引数を正しく適用してください。</p><h2 id="解説" tabindex="-1">解説 <a class="header-anchor" href="#解説" aria-label="Permalink to &quot;解説&quot;">​</a></h2><p>プレイヤーが参加すると、その <code class="shiki"><span>wiki:joined</span></code> objective に <code class="shiki"><span>0</span></code> のスコアが追加されます。これにより、<code class="shiki"><span>scores</span></code> セレクター引数を使ってそのプレイヤーを対象にコマンドを実行できます。</p><p>コマンドを実行した直後に、ワイルドカード <strong><code class="shiki"><span>*</span></code></strong> を使ってその objective の全スコアをリセットします。すると、オンラインのままだったプレイヤーだけがスコア 1 に設定されます。</p><p>この方法では、コマンドはスコア 0 のプレイヤーだけを対象にするため、残ったプレイヤーには繰り返されません。再参加するか、次のコマンドを実行しない限りはそうです。</p><p><br><code class="shiki"><span>/scoreboard players set &lt;player&gt; joined 0</span></code></p><p>これは、スコア 1 にスコア 0 を <em>加えても</em> 変化しないからです。一方で、まだスコアを持たないプレイヤーにスコア 0 を加えると、そのスコアは 0 に設定されます。</p><h2 id="tick-json" tabindex="-1">Tick JSON <a class="header-anchor" href="#tick-json" aria-label="Permalink to &quot;Tick JSON&quot;">​</a></h2><p>コマンドブロックの代わりに functions を使う場合、<code class="shiki"><span>on_join</span></code> 関数を <code class="shiki"><span>tick.json</span></code> に追加して、ループさせて継続実行する必要があります。<code class="shiki"><span>tick.json</span></code> には文字列ごとにカンマを付ければ複数ファイルを追加できます。詳しくは <a href="/commands/mcfunctions#tick-json">Functions</a> のドキュメントを参照してください。</p>`);
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
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;wiki/event/players/on_join&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">  ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>functions を使う場合、パックのフォルダ構成は次のようになります。</p>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "BP",
    "BP/functions",
    "BP/functions/wiki",
    "BP/pack_icon.png",
    "BP/manifest.json",
    "BP/functions/wiki/event",
    "BP/functions/wiki/event/players",
    "BP/functions/wiki/event/players/on_join.mcfunction",
    "BP/functions/tick.json"
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("commands/on-player-join.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const onPlayerJoin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  onPlayerJoin as default
};
