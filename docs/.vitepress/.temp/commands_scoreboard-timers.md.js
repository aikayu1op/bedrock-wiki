import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./8.CUqnGdP3.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_1 = "/assets/images/commands/command-block-chain/7.png";
const __pageData = JSON.parse('{"title":"スコアボードタイマー","description":"スコアボードを使ってワールドタイマーやエンティティタイマーを作成します。","frontmatter":{"title":"スコアボードタイマー","category":"Scoreboard Systems","mentions":["BedrockCommands","zheaEvyline"],"nav_order":5,"description":"スコアボードを使ってワールドタイマーやエンティティタイマーを作成します。"},"headers":[{"level":2,"title":"はじめに","slug":"はじめに","link":"#はじめに","children":[]},{"level":2,"title":"セットアップ","slug":"セットアップ","link":"#セットアップ","children":[]},{"level":2,"title":"システム","slug":"システム","link":"#システム","children":[]},{"level":2,"title":"解説","slug":"解説","link":"#解説","children":[]},{"level":2,"title":"回数制限付きイベントの定義","slug":"回数制限付きイベントの定義","link":"#回数制限付きイベントの定義","children":[]},{"level":2,"title":"間隔中にコマンドを実行する","slug":"間隔中にコマンドを実行する","link":"#間隔中にコマンドを実行する","children":[]},{"level":2,"title":"エンティティタイマー","slug":"エンティティタイマー","link":"#エンティティタイマー","children":[]}],"relativePath":"commands/scoreboard-timers.md","filePath":"commands/scoreboard-timers.md"}');
const _sfc_main = { name: "commands/scoreboard-timers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h2><p><a href="https://bedrockcommands.org/" target="_blank" rel="noreferrer">Sourced by the Bedrock Commands Community (BCC) Discord</a></p><p>このシステムを使うと、目的のコマンドを正確な間隔で実行でき、必要に応じて遅延を自由に調整できます。</p><p><strong>例:</strong></p><ul><li>2 時間ごとにチャットメッセージを送る。</li><li>10 分ごとに &#39;lag clear&#39; 関数を実行する。</li><li>30 秒ごとにプレイヤーに &#39;speed&#39; を付与する。</li></ul><p>このシステムは、ワールド内で複数のタイマーを管理するときに特に便利です。コマンドブロックでは <a href="/commands/intro-to-command-blocks#command-block-tick-delay">Tick Delay</a> を使ってコマンド実行を遅らせられますが、関数を使う場合はこのようなシステムが必要になります。</p><p>コマンドブロックを使う場合でも、このシステムを使うのがおすすめです。ワールドのタイマーをすべて同じ開始時刻で同期させたいときにも役立ちます。</p><h2 id="セットアップ" tabindex="-1">セットアップ <a class="header-anchor" href="#セットアップ" aria-label="Permalink to &quot;セットアップ&quot;">​</a></h2><p><em>チャットに次のコマンドを入力します。</em></p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, null, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">/scoreboard objectives add wiki:ticks dummy</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">/scoreboard objectives add wiki:events dummy</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>これらの目標を作成したら、次は <code class="shiki"><span>ticks</span></code> 目標を使って各繰り返しイベントの間隔を定義します。</p><p>そのためには、まず Minecraft では 1 秒がおよそ 20 ゲームティックであることを知っておく必要があります。この知識をもとに、定義したい各間隔に対応するティック数を基本的な計算で求めます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, null, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"># 2h = 20t × 60s × 60m × 2h = 144000t</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">/scoreboard players set .2h wiki:ticks 144000</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"># 10m = 20t × 60s × 10m = 12000t</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">/scoreboard players set .10m wiki:ticks 12000</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"># 30s = 20t × 30s = 600t</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">/scoreboard players set .30s wiki:ticks 600</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>スコアボードのデータを設定できたので、ここからは定義した間隔に基づいてタイマーを動かせます。</p><h2 id="システム" tabindex="-1">システム <a class="header-anchor" href="#システム" aria-label="Permalink to &quot;システム&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/scoreboard/world_timer.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/scoreboard/world_timer.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## ワールドタイマー / 時計</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Increment +1 tick</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players add .Timer wiki:ticks 1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Apply current ticks passed to all events</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players operation * wiki:events = .Timer wiki:ticks</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## チャットメッセージ（2 時間ごと）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players operation .ChatMessage wiki:events %= .2h wiki:ticks</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if score .ChatMessage wiki:events matches 0 run say Technoblade never dies!</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## ラグクリア（10 分ごと）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players operation .LagClear wiki:events %= .10m wiki:ticks</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if score .LagClear wiki:events matches 0 run function clear_lag</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## スピード効果（30 秒ごと）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players operation .SpeedEffect wiki:events %= .30s wiki:ticks</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if score .SpeedEffect wiki:events matches 0 run effect @a speed 10 2 true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><img${ssrRenderAttr("src", _imports_0)} alt="Chain of 8 Command Blocks"></p><p>ここでは実装例として 3 つ挙げていますが、好きなタイマーを必要な数だけ追加できます。</p><p>ただし、必ず示された順序を守り、目的のコマンドには <code class="shiki"><span>/execute if score</span></code> 条件を正しく適用してください。</p><h2 id="解説" tabindex="-1">解説 <a class="header-anchor" href="#解説" aria-label="Permalink to &quot;解説&quot;">​</a></h2><p><strong><code class="shiki"><span>wiki:events</span></code></strong> — この目標では、ワールドで使いたい繰り返しイベントをすべてラベル付けします。</p><ul><li><code class="shiki"><span>.ChatMessage</span></code></li><li><code class="shiki"><span>.LagClear</span></code></li><li><code class="shiki"><span>.SpeedEffect</span></code></li></ul><p><em>注: これら 3 つはすべて、その目標内のスコア保持者です。</em></p><p><strong><code class="shiki"><span>wiki:ticks</span></code></strong> — この目標では、イベントの間隔を定義し、スコアボードタイマーも動かします。</p><ul><li><code class="shiki"><span>.2h</span></code> interval (static score: 144000)</li><li><code class="shiki"><span>.10m</span></code> interval (static score: 12000)</li><li><code class="shiki"><span>.30s</span></code> interval (static score: 600)</li><li><code class="shiki"><span>.Timer</span></code> clock (variable score: n+1)</li></ul><p><em>注: これら 4 つはすべて、その目標内のスコア保持者です。</em></p><p><strong>コマンド 1:</strong> このコマンドは、スコア保持者 <code class="shiki"><span>.Timer</span></code> に毎ティック +1 を加え、ゲーム内で 1 ティック経過したことを示します。これが、ワールド上のすべての繰り返しイベントに使うスコアボードタイマー / 時計です。</p><p><strong>コマンド 2:</strong> ここでは、<code class="shiki"><span>*</span></code> ワイルドカードセレクターを使って <code class="shiki"><span>.Timer</span></code> のスコアをすべてのイベントにコピーします。これにより、各イベントの間隔に達したかどうかを判定できます。例:</p><ul><li><code class="shiki"><span>.Timer</span></code> のスコアが 1200 なら、1200 ゲームティックが経過したことを意味します。</li><li>このコマンドにより、すべてのイベントのスコア保持者（<code class="shiki"><span>.ChatMessage</span></code>、<code class="shiki"><span>.LagClear</span></code>、<code class="shiki"><span>.SpeedEffect</span></code>）のスコアも 1200 になります。</li></ul><p><strong>コマンド 3:</strong> <code class="shiki"><span>%=</span></code> の剰余演算を使い、イベントスコアが割り当てられた間隔で割り切れるかを確認します。つまり、余りが 0 かどうかを見ます。</p><ul><li>Chat Message: <code class="shiki"><span>1200/144000</span></code><ul><li>Q=0, R=1200 — <em>interval not reached.</em></li></ul></li><li>Lag Clear: <code class="shiki"><span>1200/12000</span></code><ul><li>Q=0, R=1200 — <em>interval not reached.</em></li></ul></li><li>Speed Effect: <code class="shiki"><span>1200/600</span></code><ul><li>Q=2, R=0 — <em>interval reached.</em></li><li>Hence, commands for the <code class="shiki"><span>.SpeedEffect</span></code> event can be executed.</li></ul></li></ul><p>ここでは、<code class="shiki"><span>.ChatMessage</span></code> と <code class="shiki"><span>.LagClear</span></code> のイベントはまだ発生しておらず、<code class="shiki"><span>.SpeedEffect</span></code> のイベントは 2 回目の発生です。</p><p>注: Minecraft のスコアボード除算は切り捨てです。つまり、小数点以下は無視され、整数だけで計算されます。</p><p><strong>コマンド 4:</strong> 計算で得られた余りを、対応するイベントのスコア保持者に適用します。これを使って、スコアが <code class="shiki"><span>0</span></code> のときにコマンドを実行できます。</p><p>残りのコマンドも同じ構造で、イベント名と間隔だけが変わります。</p><h2 id="回数制限付きイベントの定義" tabindex="-1">回数制限付きイベントの定義 <a class="header-anchor" href="#回数制限付きイベントの定義" aria-label="Permalink to &quot;回数制限付きイベントの定義&quot;">​</a></h2><p>イベントの発生回数を制限するには、<code class="shiki"><span>wiki:occurrences</span></code> という新しい目標を作成し、以下のようにそのイベントが何回起きるかを定義します。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, null, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">/scoreboard objectives add wiki:occurrences dummy</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">/scoreboard players set .ChatMessage wiki:occurrences 5</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">/scoreboard players set .SpeedEffect wiki:occurrences 10</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>それができたら、以下のようにシステムを修正します。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/scoreboard/world_timer.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/scoreboard/world_timer.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## ワールドタイマー / 時計</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### +1 ティック加算</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players add .Timer wiki:ticks 1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### 現在の経過時間をすべてのイベントに適用</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players operation * wiki:events = .Timer wiki:ticks</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## チャットメッセージ（10 分ごと）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players operation .ChatMessage wiki:events %= .2h wiki:ticks</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if score .ChatMessage wiki:events matches 0 if score .ChatMessage wiki:occurrences matches 1.. run say Technoblade never dies!</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if score .ChatMessage wiki:events matches 0 if score .ChatMessage wiki:occurrences matches 1.. run scoreboard players remove .ChatMessage wiki:occurrences 1</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## スピード効果（30 秒ごと）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players operation .SpeedEffect wiki:events %= .30s wiki:ticks</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if score .SpeedEffect wiki:events matches 0 if score .SpeedEffect wiki:occurrences matches 1.. run effect @a speed 10 2 true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if score .SpeedEffect wiki:events matches 0 if score .SpeedEffect wiki:occurrences matches 1.. run scoreboard players remove .SpeedEffect wiki:occurrences 1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><img${ssrRenderAttr("src", _imports_0)} alt="Chain of 8 Command Blocks"></p><h2 id="間隔中にコマンドを実行する" tabindex="-1">間隔中にコマンドを実行する <a class="header-anchor" href="#間隔中にコマンドを実行する" aria-label="Permalink to &quot;間隔中にコマンドを実行する&quot;">​</a></h2><p>イベントの間隔の間ずっとコマンドを継続実行したい場合は、以下の手法を使えます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, null, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Speed Effect (every 30s) + Particle (every tick)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players operation .SpeedEffect wiki:events %= .30s wiki:ticks</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if score .SpeedEffect wiki:occurrences matches 1.. as @a at @s run particle minecraft:shulker_bullet ~~~</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if score .SpeedEffect wiki:events matches 0 if score .SpeedEffect wiki:occurrences matches 1.. run effect @a speed 10 2 true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute if score .SpeedEffect wiki:events matches 0 if score .SpeedEffect wiki:occurrences matches 1.. run scoreboard players remove .SpeedEffect wiki:occurrences 1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>3 行目にあるように、タイマーが動いている間にコマンドを実行したいなら、<code class="shiki"><span>if score</span></code> のうち「すべての発生が終わったか」を確認する条件を外すだけです。その代わり、発生回数がまだ残っているかだけを確認します。</p><p>たとえば、このイベントの <code class="shiki"><span>wiki:occurrences</span></code> を <code class="shiki"><span>10</span></code> に設定したとします。その場合、30 秒のイベントを 10 回繰り返すので、合計 300 秒の粒子トレイルが表示されます。</p><h2 id="エンティティタイマー" tabindex="-1">エンティティタイマー <a class="header-anchor" href="#エンティティタイマー" aria-label="Permalink to &quot;エンティティタイマー&quot;">​</a></h2><p>エンティティのデスポーンイベントのような場合は、同期タイマーではイベントが早すぎるタイミングで発火してしまうことがあるため、各エンティティごとに別々のタイマーを動かす必要があります。そのようなときは Async Timer が役立ちます。</p><p>たとえば、次のような処理をしたいとします。</p><ol><li>kill all entities named &quot;wiki:station&quot; 5 minutes after they&#39;ve been summoned.</li><li>play a shulker particle around them during that timeframe.</li><li>play a flame particle around them in the first 10 seconds.</li><li>play a pling sound to nearby players when the timer reaches half way.</li><li>stop the timer if a passive mob is nearby.</li><li>loop the timer if a hostile mob is nearby.</li></ol>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/scoreboard/players/entity_timer.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/scoreboard/players/entity_timer.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## タイマーを動かす</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">scoreboard players add @e[name=&quot;wiki:station&quot;,scores={wiki:ticks=0..}] wiki:ticks 1</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"># タイマー動作中にコマンドを実行</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @e[name=&quot;wiki:station&quot;,scores={wiki:ticks=0..}] at @s run particle minecraft:shulker_bullet ~~~</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"># ある期間内にコマンドを実行</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @e[name=&quot;wiki:station&quot;,scores={wiki:ticks=0..200}] at @s run particle minecraft:basic_flame_particle ~~~</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"># 正確な間隔でコマンドを実行</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @e[name=&quot;wiki:station&quot;,scores={wiki:ticks=3600}] at @s run playsound note.pling @a[r=10]</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"># タイマーを停止</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @e[name=&quot;wiki:station&quot;] at @s if entity @e[family=pacified,r=10,c=1] run scoreboard players set @s ticks -1</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"># タイマーをループ</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @e[name=&quot;wiki:station&quot;,scores={wiki:ticks=6000}] at @s if entity @e[family=monster,r=10,c=1] run scoreboard players set @s ticks 0</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"># タイマー終了</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">kill @e[name=&quot;wiki:station&quot;,scores={wiki:ticks=6000}]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><img${ssrRenderAttr("src", _imports_1)} alt="Chain of 7 Command Blocks"></p><p>示したとおり、期間が終わったときにスコアを <code class="shiki"><span>0</span></code> にするとタイマーはループします。<code class="shiki"><span>-1</span></code> にすると停止 / 無効化できます。再度 <code class="shiki"><span>0</span></code> に設定すれば、また開始できます。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("commands/scoreboard-timers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const scoreboardTimers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  scoreboardTimers as default
};
