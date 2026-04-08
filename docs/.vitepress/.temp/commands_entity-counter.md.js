import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_1 } from "./5.DwcU4oVp.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"エンティティカウンター","description":"ワールド内のプレイヤーやエンティティの総数を追跡し、その値に応じて目的のコマンドを実行できるシステムです。","frontmatter":{"title":"エンティティカウンター","category":"Scoreboard Systems","tags":["easy"],"mentions":["BedrockCommands","zheaEvyline"],"nav_order":3,"description":"ワールド内のプレイヤーやエンティティの総数を追跡し、その値に応じて目的のコマンドを実行できるシステムです。"},"headers":[{"level":2,"title":"はじめに","slug":"はじめに","link":"#はじめに","children":[]},{"level":2,"title":"セットアップ","slug":"セットアップ","link":"#セットアップ","children":[]},{"level":2,"title":"システム","slug":"システム","link":"#システム","children":[]},{"level":2,"title":"解説","slug":"解説","link":"#解説","children":[]},{"level":2,"title":"Tick JSON","slug":"tick-json","link":"#tick-json","children":[]}],"relativePath":"commands/entity-counter.md","filePath":"commands/entity-counter.md"}');
const _sfc_main = { name: "commands/entity-counter.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_FolderView = resolveComponent("FolderView");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h2><p><a href="https://bedrockcommands.org/" target="_blank" rel="noreferrer">Sourced by the Bedrock Commands Community (BCC) Discord</a></p><p>このシステムを使うと、ワールド内のプレイヤーやエンティティの総数を追跡し、その値に応じて目的のコマンドを実行できます。</p><blockquote><p>注: 読み込まれていないチャンク内のエンティティは追跡されません。ただし、プレイヤーは常に追跡できます。</p></blockquote><h2 id="セットアップ" tabindex="-1">セットアップ <a class="header-anchor" href="#セットアップ" aria-label="Permalink to &quot;セットアップ&quot;">​</a></h2><p><em>チャットに次のコマンドを入力してください：</em></p><p><code class="shiki"><span>/scoreboard objectives add wiki:count dummy</span></code></p><p>functions を使っていて、ワールド初期化時に目標を自動で追加したい場合は、<a href="/commands/on-first-world-load">ワールドの初回読み込み時</a> に記載されている手順に従ってください。</p><h2 id="システム" tabindex="-1">システム <a class="header-anchor" href="#システム" aria-label="Permalink to &quot;システム&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/scoreboard/players/tally_count.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/scoreboard/players/tally_count.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## 前回のカウントをリセット</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players set * wiki:count 0</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## 現在のカウントを取得（例）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### 生存しているプレイヤー</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @e[type=player] run scoreboard players add .Players.Alive wiki:count 1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### クリーパー</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @e[type=creeper] run scoreboard players add .Creeper wiki:count 1</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## ここにコマンドを入れます（例）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### 生存プレイヤーが 4 人以上ならメッセージを表示</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if score .Players.Alive wiki:count matches 4.. run title @a actionbar There are more than 4 players on the world.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### クリーパーが 3 匹以下ならメッセージを表示</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if score .Creeper wiki:count matches ..3 run title @a actionbar There are less than 3 creeper on the world.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><img${ssrRenderAttr("src", _imports_1)} alt="Chain of 5 Command Blocks"></p><p>ここでは例として生存プレイヤーとクリーパーを追跡していますが、好きなエンティティを必要な数だけ追跡できます。スコア保持者名も自由に変更できます。たとえば <code class="shiki"><span>.Players.Alive</span></code> を単に <code class="shiki"><span>Players</span></code> にすることもできます。</p><p>同様に、ここでは <code class="shiki"><span>/title</span></code> コマンドを例として実行しています。</p><ul><li>a) when there are 4 or more players <code class="shiki"><span>4..</span></code></li><li>b) when there are 3 .Creeper or less <code class="shiki"><span>..3</span></code></li></ul><p>これらも変更・拡張できます。たとえば <code class="shiki"><span>/title</span></code> の代わりに <code class="shiki"><span>/kill</span></code> を使うこともできます。</p><h2 id="解説" tabindex="-1">解説 <a class="header-anchor" href="#解説" aria-label="Permalink to &quot;解説&quot;">​</a></h2><ol><li><strong>コマンド 1:</strong> <code class="shiki"><span>wiki:count</span></code> のスコアボード目標にあるすべてのスコア保持者名を <code class="shiki"><span>0</span></code> に設定します。追跡対象のプレイヤーやエンティティも含まれます。</li><li><strong>コマンド 2, 3:</strong> カウントしたい各対象について、その対応するスコア保持者名にスコアを加算します。こうして総数を取得します。 <ul><li>例: クリーパーモブを <code class="shiki"><span>.Creeper</span></code> のスコア保持者名に対応させる。</li></ul></li><li><strong>コマンド 4, 5:</strong> これらは変更・拡張できる例のコマンドです。 <ul><li>取得した総数に基づいて、<code class="shiki"><span>/execute if score</span></code> 条件を使い、特定の値になったときに目的のコマンドを実行できます。 <ul><li><strong><code class="shiki"><span>n</span></code></strong> 任意の数 <code class="shiki"><span>n</span></code></li><li><strong><code class="shiki"><span>n..</span></code></strong> <code class="shiki"><span>n</span></code> 以上の任意の数</li><li><strong><code class="shiki"><span>..n</span></code></strong> <code class="shiki"><span>n</span></code> 以下の任意の数</li><li><strong><code class="shiki"><span>n..n1</span></code></strong> <code class="shiki"><span>n</span></code> から <code class="shiki"><span>n1</span></code> までの任意の数（小さい数を先に書く）</li></ul></li></ul></li></ol><div class="info custom-block"><p class="custom-block-title">注:</p><p>複数の目標にまたがる多数のスコア保持者を扱う場合は、パフォーマンス向上のため、ワイルドカード (<code class="shiki"><span>*</span></code>) を使うよりも、各スコア保持者ごとに前回のスコアを 0 にリセットすることをおすすめします。</p></div><h2 id="tick-json" tabindex="-1">Tick JSON <a class="header-anchor" href="#tick-json" aria-label="Permalink to &quot;Tick JSON&quot;">​</a></h2><p>コマンドブロックの代わりに関数を使う場合は、<code class="shiki"><span>tally_count</span></code> 関数を <code class="shiki"><span>tick.json</span></code> に追加して、ループさせながら継続実行させる必要があります。<code class="shiki"><span>tick.json</span></code> には各文字列の後ろにカンマを付けることで複数ファイルを追加できます。詳しくは <a href="/commands/mcfunctions#tick-json">Functions</a> のドキュメントを参照してください。</p>`);
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
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;wiki/scoreboard/players/tally_count&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">  ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>functions を使う場合、パックのフォルダ構成は次のようになります。</p>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "BP",
    "BP/functions",
    "BP/pack_icon.png",
    "BP/manifest.json",
    "BP/functions/wiki",
    "BP/functions/wiki/main.mcfunction",
    "BP/functions/wiki/scoreboard",
    "BP/functions/wiki/scoreboard/players",
    "BP/functions/wiki/scoreboard/players/tally_count.mcfunction",
    "BP/functions/tick.json"
  ] }, null, _parent));
  _push(`<p>この構成では、<code class="shiki"><span>tally_count</span></code> 関数は <code class="shiki"><span>main.mcfunction</span></code> から呼び出され、<code class="shiki"><span>tick.json</span></code> を通じて毎ティック実行されます。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("commands/entity-counter.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const entityCounter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  entityCounter as default
};
