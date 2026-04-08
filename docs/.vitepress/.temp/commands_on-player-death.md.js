import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./4.l8Fub4Bp.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"プレイヤー死亡時","description":"プレイヤーが死亡したときに、目的のコマンドを実行するシステムです。","frontmatter":{"title":"プレイヤー死亡時","category":"On Event Systems","tags":["easy"],"mentions":["BedrockCommands","zheaEvyline"],"nav_order":4,"description":"プレイヤーが死亡したときに、目的のコマンドを実行するシステムです。"},"headers":[{"level":2,"title":"はじめに","slug":"はじめに","link":"#はじめに","children":[]},{"level":2,"title":"セットアップ","slug":"セットアップ","link":"#セットアップ","children":[]},{"level":2,"title":"システム","slug":"システム","link":"#システム","children":[]},{"level":2,"title":"解説","slug":"解説","link":"#解説","children":[]},{"level":2,"title":"Tick JSON","slug":"tick-json","link":"#tick-json","children":[]},{"level":2,"title":"代替手段","slug":"代替手段","link":"#代替手段","children":[]}],"relativePath":"commands/on-player-death.md","filePath":"commands/on-player-death.md"}');
const _sfc_main = { name: "commands/on-player-death.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_FolderView = resolveComponent("FolderView");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h2><p><a href="https://bedrockcommands.org/" target="_blank" rel="noreferrer">Sourced by the Bedrock Commands Community (BCC) Discord</a></p><p>このシステムは、プレイヤーが死亡したときに目的のコマンドを実行します。</p><h2 id="セットアップ" tabindex="-1">セットアップ <a class="header-anchor" href="#セットアップ" aria-label="Permalink to &quot;セットアップ&quot;">​</a></h2><p><em>チャットに次のコマンドを入力してください：</em></p><p><code class="shiki"><span>/scoreboard objectives add wiki:q.is_alive dummy</span></code></p><p>functions を使っていて、ワールド初期化時に目標を自動で追加したい場合は、<a href="/commands/on-first-world-load">ワールドの初回読み込み時</a> に記載されている手順に従ってください。</p><h2 id="システム" tabindex="-1">システム <a class="header-anchor" href="#システム" aria-label="Permalink to &quot;システム&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/events/player/on_death.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/events/player/on_death.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## 状態マシン</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### まだ設定されていない場合、すべてのプレイヤー (@a) を「死亡」（状態 0）としてマーク</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players set @a[scores={wiki:q.is_alive=!-1}] wiki:q.is_alive 0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### すべての生存プレイヤー (@e[type=player]) を「生存」（状態 1）としてマーク</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players set @e[type=player] wiki:q.is_alive 1</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## ここにコマンドを入れます（例）:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### プレイヤーが「死亡」状態に入ったときに 1 回だけ実行</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[scores={wiki:q.is_alive=0}] run say I died</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### プレイヤーが死亡後、毎ティック実行</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[scores={wiki:q.is_alive=..0}] at @s run particle minecraft:soul_particle ~~~</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## 状態を更新</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### 1 回だけ実行するコマンドがループしないよう、死亡プレイヤーの状態 0 を -1 に移す</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players set @a[scores={wiki:q.is_alive=0}] wiki:q.is_alive -1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><img${ssrRenderAttr("src", _imports_0)} alt="Chain of 5 Command Blocks"></p><p>ここでは例として <code class="shiki"><span>/execute - say</span></code> コマンドを使っていますが、好きなコマンドを必要な数だけ使えます。</p><p>ただし、必ず示された順序を守り、目的のコマンドには <code class="shiki"><span>scores={wiki:q.is_alive=0}</span></code> セレクター引数を正しく適用してください。</p><h2 id="解説" tabindex="-1">解説 <a class="header-anchor" href="#解説" aria-label="Permalink to &quot;解説&quot;">​</a></h2><ul><li><strong><code class="shiki"><span>wiki:q.is_alive=0</span></code></strong> プレイヤーは <em>生存していない</em>（死亡）。</li><li><strong><code class="shiki"><span>wiki:q.is_alive=1</span></code></strong> プレイヤーは生存中。</li><li><strong><code class="shiki"><span>wiki:q.is_alive=2</span></code></strong> プレイヤーは死亡しており、目的のコマンドはすでに実行済みです。</li></ul><p><strong>各コマンドの役割:</strong></p><ol><li><strong>コマンド 1:</strong> すべてのプレイヤーを既定で <em>生存していない</em>（0）としてマークします。 <ul><li>スコア <code class="shiki"><span>2</span></code> は無視します。そうしないと、プレイヤー死亡時に実行したいコマンドが複数回発火してしまいます。</li></ul></li><li><strong>コマンド 2:</strong> すべての生存プレイヤーを「生存」（1）としてマークします。 <ul><li><code class="shiki"><span>@e</span></code> セレクターは生存中のプレイヤーだけを対象にできます。</li><li><code class="shiki"><span>@a</span></code> セレクターは、生死を問わずすべてのプレイヤーを対象にします。</li></ul></li><li><strong>コマンド 3:</strong> 生存プレイヤーが 1、非生存プレイヤーが 0 になったので、この情報を使って、プレイヤーが死亡（0）したときに目的のコマンドを実行します。</li><li><strong>コマンド 4:</strong> プレイヤーが死んだときに目的のコマンドを 1 回だけ実行したいので、スコアを <code class="shiki"><span>2</span></code> に設定します。これをしないと、リスポーンするまでコマンドが繰り返されます。</li></ol><h2 id="tick-json" tabindex="-1">Tick JSON <a class="header-anchor" href="#tick-json" aria-label="Permalink to &quot;Tick JSON&quot;">​</a></h2><p>コマンドブロックの代わりに関数を使う場合は、<code class="shiki"><span>on_death</span></code> 関数を <code class="shiki"><span>tick.json</span></code> に追加して、ループさせながら継続実行させる必要があります。<code class="shiki"><span>tick.json</span></code> には各文字列の後ろにカンマを付けることで複数ファイルを追加できます。詳しくは <a href="/commands/mcfunctions#tick-json">Functions</a> のドキュメントを参照してください。</p>`);
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
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;wiki/event/players/on_death&quot;</span></span>
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
    "BP/functions/wiki/event/players/on_death.mcfunction",
    "BP/functions/tick.json"
  ] }, null, _parent));
  _push(`<h2 id="代替手段" tabindex="-1">代替手段 <a class="header-anchor" href="#代替手段" aria-label="Permalink to &quot;代替手段&quot;">​</a></h2><p>この方法は、Minecraft <code class="shiki"><span>1.19.50</span></code> で新しい <code class="shiki"><span>/execute</span></code> 構文が導入されたあとに可能になりました。</p><div class="warning custom-block"><p class="custom-block-title">既知の問題:</p><p>2 人以上のプレイヤーが同じ地点にテレポートされ、そのうち 1 人が死亡しても残りのプレイヤーが動かない場合、このシステムはコマンドの実行に失敗します。</p></div><ul><li><code class="shiki"><span>wiki:q.is_dead</span></code> のスコアボード目標を追加してください: <ul><li><code class="shiki"><span>/scoreboard objectives add wiki:q.is_dead dummy</span></code></li></ul></li></ul>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/detect/player/is_dead.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/detect/player/is_dead.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## プレイヤーの状態を設定</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### 死亡していない</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players set @e[type=player] wiki:q.is_dead 0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### 死亡</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a at @s unless entity @e[type=player,r=0.01] run scoreboard players add @s wiki:q.is_dead 1</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## ここにコマンドを入れます（例）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### 死亡地点にアーマースタンドを召喚</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[scores={wiki:q.is_dead=1}] at @s run summon armor_stand &quot;Corpse&quot; ~~~</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### チャットに死亡メッセージを表示</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[scores={wiki:q.is_dead=1..}] run say I died and haven&#39;t respawned yet..</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><img${ssrRenderAttr("src", _imports_0)} alt="Chain of Four Command Blocks"></p><p><strong>状態:</strong></p><ul><li><strong><code class="shiki"><span>wiki:q.is_dead=0</span></code></strong> プレイヤーは <em>死亡していない</em>（生存中）。</li><li><strong><code class="shiki"><span>wiki:q.is_dead=1</span></code></strong> プレイヤーがちょうど死亡した状態です（「トリガー」用）。</li><li><strong><code class="shiki"><span>wiki:q.is_dead=1..</span></code></strong> プレイヤーはまだ死亡中です（繰り返し用）。</li></ul><p><strong>各コマンドの役割:</strong></p><ol><li><strong>コマンド 1:</strong> すべての生存プレイヤーを <em>死亡していない</em>（0）としてマークします。</li><li><strong>コマンド 2:</strong> プレイヤーの 0.01 ブロック以内に生存プレイヤーがいなければ、そのプレイヤーを死亡（1）としてマークします。 <ul><li>このロジックは、そのような小さい半径の中に入れるのは本人だけだという前提に基づきます。<code class="shiki"><span>/tp</span></code> コマンドなしで 2 人以上のプレイヤーがまったく同じ位置に立つ確率はほぼ 0 です。</li></ul></li><li><strong>コマンド 3, 4:</strong> これらは状態ごとの例のコマンドで、変更・拡張できます。</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("commands/on-player-death.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const onPlayerDeath = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  onPlayerDeath as default
};
