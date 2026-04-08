import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./3.DiXi2sCX.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"プレイヤーリスポーン時","description":"プレイヤーが死亡状態からリスポーンしたときに、指定したコマンドを実行するシステムです。","frontmatter":{"title":"プレイヤーリスポーン時","category":"On Event Systems","tags":["easy"],"mentions":["BedrockCommands","zheaEvyline"],"nav_order":5,"description":"プレイヤーが死亡状態からリスポーンしたときに、指定したコマンドを実行するシステムです。"},"headers":[{"level":2,"title":"はじめに","slug":"はじめに","link":"#はじめに","children":[]},{"level":2,"title":"セットアップ","slug":"セットアップ","link":"#セットアップ","children":[]},{"level":2,"title":"システム","slug":"システム","link":"#システム","children":[]},{"level":2,"title":"解説","slug":"解説","link":"#解説","children":[]},{"level":2,"title":"Tick JSON","slug":"tick-json","link":"#tick-json","children":[]}],"relativePath":"commands/on-player-respawn.md","filePath":"commands/on-player-respawn.md"}');
const _sfc_main = { name: "commands/on-player-respawn.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_FolderView = resolveComponent("FolderView");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h2><p><a href="https://bedrockcommands.org/" target="_blank" rel="noreferrer">Sourced by the Bedrock Commands Community (BCC) Discord</a></p><p>このシステムは、プレイヤーが死亡状態からリスポーンしたときに、指定したコマンドを実行します。</p><h2 id="セットアップ" tabindex="-1">セットアップ <a class="header-anchor" href="#セットアップ" aria-label="Permalink to &quot;セットアップ&quot;">​</a></h2><p><em>チャットに次のコマンドを入力してください：</em></p><p><code class="shiki"><span>/scoreboard objectives add wiki:respawn dummy</span></code></p><p>関数を使っていて、ワールド初期化時にこの目標を自動で追加したい場合は、<a href="/commands/on-first-world-load">ワールドの初回読み込み時</a> に記載されている手順に従ってください。</p><h2 id="システム" tabindex="-1">システム <a class="header-anchor" href="#システム" aria-label="Permalink to &quot;システム&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/events/player/on_respawn.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/events/player/on_respawn.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## ここにコマンドを入れます（例）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @e[scores={wiki:respawn=1}] run say I died and respawned.</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## プレイヤーの状態を設定</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### 現在リスポーン中</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players set @a wiki:respawn 1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### 現在リスポーン中ではない</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players set @e[type=player] wiki:respawn 0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img${ssrRenderAttr("src", _imports_0)} alt="Chain of 3 Command Blocks"></p><p>ここでは例として <code class="shiki"><span>/execute - say</span></code> コマンドを使っていますが、好きなコマンドを必要な数だけ使えます。</p><p>ただし、必ず示された順序を守り、目的のコマンドには <code class="shiki"><span>@e[scores={wiki:respawn=1}]</span></code> セレクター引数を正しく適用してください。</p><h2 id="解説" tabindex="-1">解説 <a class="header-anchor" href="#解説" aria-label="Permalink to &quot;解説&quot;">​</a></h2><ul><li><strong><code class="shiki"><span>wiki:respawn=0</span></code></strong> は、プレイヤーが生存しているか、すでにリスポーン済みであることを示します。</li><li><strong><code class="shiki"><span>wiki:respawn=1</span></code></strong> は、プレイヤーが死亡しているか、ちょうどリスポーンした直後（現在のゲームティック内）であることを示します。</li><li><strong><code class="shiki"><span>@a</span></code></strong> セレクターは、生死を問わずすべてのプレイヤーを対象にします。そのため、<code class="shiki"><span>1</span></code> を付けて「リスポーン中」を示すために使います。</li><li><strong><code class="shiki"><span>@e</span></code></strong> セレクターは一方で、生存しているプレイヤーだけを対象にします。そのため、これを使って生存中のプレイヤーを <code class="shiki"><span>0</span></code> の「リスポーン済み」として設定できます。</li></ul><p>これで、<em>リスポーン中</em> のプレイヤーが <code class="shiki"><span>1</span></code>、<em>リスポーン済み</em> のプレイヤーが <code class="shiki"><span>0</span></code> だとわかりました。この知識を使えば、スコアが <code class="shiki"><span>1</span></code> のプレイヤーが死亡状態から復帰したときに、目的のコマンドを実行できます。対象は <code class="shiki"><span>@e</span></code> セレクターで指定します。</p><p>このシステムでは、目的のコマンドは残り 2 つのコマンドより前に置く必要があります。プレイヤーはコマンドが実行される前、ゲームティックの開始時に死亡状態から生存状態へ変わるためです。</p><p>そのため、これらを最後に置くと、残りの 2 つのコマンドが先にリスポーン中のプレイヤーのスコアを <code class="shiki"><span>0</span></code> にしてしまい、実行したいコマンドはそのプレイヤーを選択できなくなります。セレクター引数は <code class="shiki"><span>0</span></code> ではなく <code class="shiki"><span>@e[scores={wiki:respawn=1}]</span></code> だからです。<code class="shiki"><span>0</span></code> を使うと、すでにリスポーンしたプレイヤーに対しても無限に繰り返されてしまいます。</p><h2 id="tick-json" tabindex="-1">Tick JSON <a class="header-anchor" href="#tick-json" aria-label="Permalink to &quot;Tick JSON&quot;">​</a></h2><p>コマンドブロックの代わりに関数を使う場合は、<code class="shiki"><span>on_respawn</span></code> 関数を <code class="shiki"><span>tick.json</span></code> に追加して、ループさせながら継続実行する必要があります。<code class="shiki"><span>tick.json</span></code> には、各文字列の後ろにカンマを付けることで複数ファイルを追加できます。詳しくは <a href="/commands/mcfunctions#tick-json">Functions</a> のドキュメントを参照してください。</p>`);
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
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;wiki/event/players/on_respawn&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">  ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>関数を使う場合、パックのフォルダ構成は次のようになります。</p>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "BP",
    "BP/functions",
    "BP/functions/wiki",
    "BP/pack_icon.png",
    "BP/manifest.json",
    "BP/functions/wiki/event",
    "BP/functions/wiki/event/players",
    "BP/functions/wiki/event/players/on_respawn.mcfunction",
    "BP/functions/tick.json"
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("commands/on-player-respawn.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const onPlayerRespawn = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  onPlayerRespawn as default
};
