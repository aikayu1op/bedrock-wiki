import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./6.COXF3-09.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"プレイヤー退出時","description":"プレイヤーがワールドを退出したときに、指定したコマンドを実行するシステムです。","frontmatter":{"title":"プレイヤー退出時","category":"On Event Systems","tags":["easy"],"mentions":["BedrockCommands","zheaEvyline"],"nav_order":3,"description":"プレイヤーがワールドを退出したときに、指定したコマンドを実行するシステムです。"},"headers":[{"level":2,"title":"はじめに","slug":"はじめに","link":"#はじめに","children":[]},{"level":2,"title":"セットアップ","slug":"セットアップ","link":"#セットアップ","children":[]},{"level":2,"title":"システム","slug":"システム","link":"#システム","children":[]},{"level":2,"title":"解説","slug":"解説","link":"#解説","children":[]},{"level":2,"title":"Tick JSON","slug":"tick-json","link":"#tick-json","children":[]}],"relativePath":"commands/on-player-leave.md","filePath":"commands/on-player-leave.md"}');
const _sfc_main = { name: "commands/on-player-leave.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_WikiImage = resolveComponent("WikiImage");
  const _component_FolderView = resolveComponent("FolderView");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h2><p><a href="https://bedrockcommands.org/" target="_blank" rel="noreferrer">Sourced by the Bedrock Commands Community Discord</a></p><p>このシステムは、プレイヤーがワールドを退出したときに、指定したコマンドを実行します。</p><blockquote><p><strong>注:</strong> ターゲットセレクターを使って、退出した <em>プレイヤー</em> に対してコマンドを実行することはできません。ただし、再参加したときにコマンドを実行するには、<a href="/commands/on-player-join">プレイヤー参加時</a> システムを使えます。</p></blockquote><h2 id="セットアップ" tabindex="-1">セットアップ <a class="header-anchor" href="#セットアップ" aria-label="Permalink to &quot;セットアップ&quot;">​</a></h2><p><em>チャットに次のコマンドを入力してください：</em></p><p><code class="shiki"><span>/scoreboard objectives add wiki:player_count dummy</span></code></p><p>関数を使っていて、ワールド初期化時に目標を自動で追加したい場合は、<a href="/commands/on-first-world-load">ワールドの初回読み込み時</a> に記載されている手順に従ってください。</p><h2 id="システム" tabindex="-1">システム <a class="header-anchor" href="#システム" aria-label="Permalink to &quot;システム&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/event/players/on_leave.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/event/players/on_leave.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## 現在のティックのプレイヤー数を取得</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### スコアをリセット</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players reset .CurrentTick wiki:player_count</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### スコアを集計</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a run scoreboard players add .CurrentTick wiki:player_count 1</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## 差分を取得（現在 - 前回）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players operation .CurrentTick wiki:player_count -= .PreviousTick wiki:player_count</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## ここにコマンドを入れます（例）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### 差が -1 以下ならメッセージを表示</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if score .CurrentTick wiki:player_count matches ..-1 run say One or more players have left the world</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## 次のゲームティックと比較するために現在のティックの人数を保存</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### スコアをリセット</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players reset .PreviousTick wiki:player_count</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### スコアを集計</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a run scoreboard players add .PreviousTick wiki:player_count 1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><img${ssrRenderAttr("src", _imports_0)} alt="Chain of 6 Command Blocks"></p><p>ここでは例として <code class="shiki"><span>/say</span></code> コマンドを使っていますが、好きなコマンドを必要な数だけ使えます。</p><p>ただし、必ず示された順序を守り、目的のコマンドには <code class="shiki"><span>/execute if score</span></code> 条件を正しく適用してください。</p><h2 id="解説" tabindex="-1">解説 <a class="header-anchor" href="#解説" aria-label="Permalink to &quot;解説&quot;">​</a></h2><p><code class="shiki"><span>.PreviousTick</span></code> のスコアはコマンドループの最後に更新されるため、次のゲームティックの冒頭で <code class="shiki"><span>.CurrentTick</span></code> のスコアと比較するのに使えます。</p><p>プレイヤー数は <a href="/commands/entity-counter">Entity Counter</a> システムを使って取得します。このシステムをよりよく理解するには、そちらのページを読むことをおすすめします。</p><p><code class="shiki"><span>.CurrentTick</span></code> のスコアから <code class="shiki"><span>.PreviousTick</span></code> のスコアを引くことで、プレイヤー数が次のどれに当てはまるかを判定できます。</p><ul><li>減少した（<code class="shiki"><span>..-1</span></code>）</li><li>増加した（<code class="shiki"><span>1..</span></code>）</li><li>変化しなかった（<code class="shiki"><span>0</span></code>）</li></ul><p>減少していれば、1 人以上のプレイヤーがゲームを退出したことを意味します。 これを使って、<code class="shiki"><span>.CurrentTick</span></code> が <code class="shiki"><span>-1</span></code> 以下のときにコマンドを実行できます。</p><ul><li><p>例えば、10 人のプレイヤーがいて 1 人が退出した場合:</p><ul><li><code class="shiki"><span>.CurrentTick - .PreviousTick = 9 - 10 = -1</span></code></li><li>これは <code class="shiki"><span>..-1</span></code> で検出できます</li></ul></li><li><p>まず <code class="shiki"><span>.CurrentTick</span></code> を取得し、次に減算を行い、その結果に基づいてコマンドを実行します。最後に <code class="shiki"><span>.PreviousTick</span></code> を更新して、次のゲームティックで使えるようにします。</p></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>コマンドブロックチェーンや関数内のすべてのコマンドは、数に関係なく、同じゲームティック内で順番に実行されます。このシステムが機能するのは、プレイヤーの参加・退出・死亡などのイベントがすべて発生したあと、ゲームティックの最後にコマンドが実行されるためです。</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "/assets/images/commands/intro-to-command-blocks/game-tick.png",
    alt: "Game Tick",
    height: "200"
  }, null, _parent));
  _push(`</div><h2 id="tick-json" tabindex="-1">Tick JSON <a class="header-anchor" href="#tick-json" aria-label="Permalink to &quot;Tick JSON&quot;">​</a></h2><p>コマンドブロックの代わりに関数を使う場合は、<code class="shiki"><span>on_leave</span></code> 関数を <code class="shiki"><span>tick.json</span></code> に追加して継続実行させる必要があります。<code class="shiki"><span>tick.json</span></code> には各文字列の後ろにカンマを付けることで複数ファイルを追加できます。詳しくは <a href="/commands/mcfunctions#tick-json">Functions</a> のドキュメントを参照してください。</p>`);
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
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;wiki/event/players/on_leave&quot;</span></span>
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
    "BP/functions/wiki/event/players/on_leave.mcfunction",
    "BP/functions/tick.json"
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("commands/on-player-leave.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const onPlayerLeave = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  onPlayerLeave as default
};
