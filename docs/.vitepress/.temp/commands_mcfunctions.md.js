import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/images/commands/mcfunctions/pack_icon.png";
const _imports_1 = "/assets/images/guide/project-setup/pack_icon.png";
const _imports_2 = "/assets/images/commands/mcfunctions/content-log-toggles.png";
const _imports_3 = "/assets/images/commands/mcfunctions/content-log-history.png";
const _imports_4 = "/assets/mcfunction-file-vscode.CctbyPz4.png";
const __pageData = JSON.parse('{"title":"Functions","description":"MCBE の functions について学びます。","frontmatter":{"title":"Functions","category":"General","tags":["guide"],"mentions":["BedrockCommands","cda94581","zheaEvyline","jordanparki7"],"nav_order":3,"description":"MCBE の functions について学びます。"},"headers":[{"level":2,"title":"はじめに","slug":"はじめに","link":"#はじめに","children":[]},{"level":2,"title":"Function Pack のフォルダ構成","slug":"function-pack-のフォルダ構成","link":"#function-pack-のフォルダ構成","children":[]},{"level":2,"title":"初心者向けの注意","slug":"初心者向けの注意","link":"#初心者向けの注意","children":[]},{"level":2,"title":"コメントの書式ガイド","slug":"コメントの書式ガイド","link":"#コメントの書式ガイド","children":[]},{"level":2,"title":"function の作成","slug":"function-の作成","link":"#function-の作成","children":[]},{"level":2,"title":"実行","slug":"実行","link":"#実行","children":[]},{"level":2,"title":"Tick JSON","slug":"tick-json","link":"#tick-json","children":[]},{"level":2,"title":"サンプル Function Pack","slug":"サンプル-function-pack","link":"#サンプル-function-pack","children":[]},{"level":2,"title":"Functions のトラブルシューティング","slug":"functions-のトラブルシューティング","link":"#functions-のトラブルシューティング","children":[]},{"level":2,"title":"プロ向けの作業環境セットアップ（任意）","slug":"プロ向けの作業環境セットアップ-任意","link":"#プロ向けの作業環境セットアップ-任意","children":[{"level":3,"title":"1. Visual Studio Code (VS Code)","slug":"_1-visual-studio-code-vs-code","link":"#_1-visual-studio-code-vs-code","children":[]},{"level":3,"title":"2. GitHub によるバージョン管理","slug":"_2-github-によるバージョン管理","link":"#_2-github-によるバージョン管理","children":[]},{"level":3,"title":"3. GitHub Desktop","slug":"_3-github-desktop","link":"#_3-github-desktop","children":[]},{"level":3,"title":"4. フォルダのリンク","slug":"_4-フォルダのリンク","link":"#_4-フォルダのリンク","children":[]}]}],"relativePath":"commands/mcfunctions.md","filePath":"commands/mcfunctions.md"}');
const _sfc_main = { name: "commands/mcfunctions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FolderView = resolveComponent("FolderView");
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_Spoiler = resolveComponent("Spoiler");
  const _component_Card = resolveComponent("Card");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h2><p><a href="https://bedrockcommands.org/" target="_blank" rel="noreferrer">Sourced by the Bedrock Commands Community (BCC) Discord</a></p><p>Functions は、複数行のコマンドを含む <code class="shiki"><span>.mcfunction</span></code> ファイルです。ゲーム内では <code class="shiki"><span>/function</span></code> コマンドで実行します。</p><p>Functions は <strong>Behavior Pack</strong> 内の <strong>functions</strong> フォルダに作成します。function pack は、関数ファイルだけでシステムを構成します。</p><p>Functions は、コマンドブロックを行き来してシステムをデバッグする時間を減らすのに役立ちます。複数のワールドで使うためにシステムをまとめるのにも便利で、動作全体を変えられる多くの利点があります。</p><h2 id="function-pack-のフォルダ構成" tabindex="-1">Function Pack のフォルダ構成 <a class="header-anchor" href="#function-pack-のフォルダ構成" aria-label="Permalink to &quot;Function Pack のフォルダ構成&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "BP/functions/this_code.mcfunction",
    "BP/functions/more_of_this_code.mcfunction",
    "BP/functions/tick.json",
    "BP/functions/nested/this_code_is_nested.mcfunction"
  ] }, null, _parent));
  _push(`<p>一貫した形式を作り、誰にとっても追いやすくし、functions 全体の統一感を保つために、フォルダ構成では次のベストプラクティスに従うことをおすすめします。</p><ol><li>すべての <code class="shiki"><span>.mcfunction</span></code> ファイルは、functions フォルダ内の名前空間付きルートフォルダに入れる必要があります。Bedrock Wiki では <code class="shiki"><span>wiki</span></code> 名前空間を使っていますが、名前やプロジェクトに合わせて別の名前空間を選んでもかまいません。詳しくは <a href="/concepts/namespaces">namespaces</a> のページを参照してください。 <ul><li>✅️ <code class="shiki"><span>BP/functions/wiki/random_number.mcfunction</span></code></li><li>❌️ <code class="shiki"><span>BP/functions/random_number.mcfunction</span></code></li></ul></li><li>パック内のフォルダ名とファイル名は <code class="shiki"><span>snake_case</span></code> で付ける必要があります。 <ul><li>使えるのは <strong>小文字</strong> の英数字とアンダースコア (<code class="shiki"><span>_</span></code>) だけです。</li><li>✅️ <code class="shiki"><span>BP/functions/wiki/scoreboard/objectives/add_all.mcfunction</span></code></li><li>❌️ <code class="shiki"><span>BP/functions/wiki/scoreboard/objectives/Add-All.mcfunction</span></code></li></ul></li><li>適切にネストされている必要があります。 <ul><li>✅️ <code class="shiki"><span>BP/functions/wiki/teleport/zone/hell</span></code></li><li>❌ <code class="shiki"><span>BP/functions/wiki/teleport_hellzone</span></code></li></ul></li><li>名前は <code class="shiki"><span>action_object</span></code> 構造に従う必要があります。つまり、動詞を主語より前に置きます。 <ul><li>✅️ <code class="shiki"><span>add_all</span></code></li><li>❌️ <code class="shiki"><span>all_add</span></code></li><li>✅️ <code class="shiki"><span>shuffle_position</span></code></li><li>❌️ <code class="shiki"><span>position_shuffle</span></code></li></ul></li><li>どのパスも文字数は合計 80 文字を超えてはいけません（コンソールの制限）。</li><li>コンテンツフォルダの複数形・単数形は統一してください。すべて複数、またはすべて単数に揃え、混在させないでください。例:</li></ol><p>✅️ <strong>Consistent</strong>:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span>BP/functions/wiki/ability/ice_blast.mcfunction</span></span>
<span class="line"><span>BP/functions/wiki/ability/fire_trail.mcfunction</span></span>
<span class="line"><span>BP/functions/wiki/event/players/on_death.mcfunction</span></span>
<span class="line"><span>BP/functions/wiki/event/worlds/on_initialize.mcfunction</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>コンテンツフォルダ <code class="shiki"><span>ability</span></code> と <code class="shiki"><span>event</span></code> はどちらも単数形で統一されています。</li><li><code class="shiki"><span>event</span></code> 内のコンテンツフォルダも、<code class="shiki"><span>players</span></code> と <code class="shiki"><span>worlds</span></code> がどちらも複数形で統一されています。</li></ul><p>❌️ <strong>Inconsistent</strong>:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span>BP/functions/wiki/abilities/ice_blast.mcfunction</span></span>
<span class="line"><span>BP/functions/wiki/abilities/fire_trail.mcfunction</span></span>
<span class="line"><span>BP/functions/wiki/event/players/on_death.mcfunction</span></span>
<span class="line"><span>BP/functions/wiki/event/world/on_initialize.mcfunction</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>Only <code class="shiki"><span>abilities</span></code> content folder is pluralized while <code class="shiki"><span>event</span></code> is singular.</li><li>また、<code class="shiki"><span>event</span></code> フォルダ内では <code class="shiki"><span>players</span></code> が複数形なのに対し、<code class="shiki"><span>world</span></code> が単数形になっています。</li></ul><h2 id="初心者向けの注意" tabindex="-1">初心者向けの注意 <a class="header-anchor" href="#初心者向けの注意" aria-label="Permalink to &quot;初心者向けの注意&quot;">​</a></h2><p><em>以下は初心者向けの参考用 function ファイル例です。</em></p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/effects.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/effects.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"># These effects are for the spawn</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">effect @a[tag=wiki:at_spawn] regeneration 12 255 true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">effect @a[tag=wiki:at_spawn] saturation 12 255 true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">effect @a[tag=wiki:at_spawn] weakness 12 255 true</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"># These effects are for the nether</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">effect @a[tag=wiki:in_nether] fire_resistance 12 255 true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><p>function 内のコマンドはスラッシュ (<code class="shiki"><span>/</span></code>) で始められません。function ファイルの各新しい行は新しいコマンドを表します（空行は無視されます）。行頭をハッシュ (<code class="shiki"><span>#</span></code>) にしてコメントを追加できます。<code class="shiki"><span>#</span></code> の後のスペースは書式上の好みです。function のコメント書式ガイドについては、<strong><a href="#comments-style-guide">下</a></strong> の節を参照してください。</p></li><li><p>function 内のすべてのコマンドは <em>同じティック</em> で実行されます。そのため、大きな変化を起こす function は急なラグを生むことがあり、可能であれば一部のコマンドを複数ティックに分けるとよいです。ただし、function 内のコマンドは順番どおりに実行されます。</p></li><li><p>Minecraft Bedrock では、1 つの function ファイルで 10,000 コマンドを超えて実行できません。元のファイル内で実行されるほかの function ファイルもこれに含まれます。</p></li><li><p>条件付きコマンドを実行することはできません。そうした処理は何らかの形でコマンドブロックを使うか、1.19.50 の execute 構文を使う必要があります。</p></li><li><p>function 内で指定遅延付きのコマンドを実行するには、スコアボードタイマーを使って各ティックごとに少しずつカウントし、特定のスコアに達したときにファイル内のコマンドを実行します。セットアップは <a href="/commands/scoreboard-timers">Scoreboard Timers</a> のページを参照してください。</p></li></ul><h2 id="コメントの書式ガイド" tabindex="-1">コメントの書式ガイド <a class="header-anchor" href="#コメントの書式ガイド" aria-label="Permalink to &quot;コメントの書式ガイド&quot;">​</a></h2><ul><li>コマンドが多い function を扱うときは、コメントでハッシュ記号の数を変えて見出しレベルを分けると整理しやすくなります。</li><li><em>必要に応じて</em>、さらに区別するために次のスタイルを使えます。</li><li>レベル 1 見出し - <strong># 大文字</strong></li><li>レベル 2 見出し - <strong>## Title Case</strong></li><li>レベル 3 見出し - <strong>### Sentence case</strong></li><li>見出しレベルは 3 つ以下、または見出しの数を増やしすぎないようにしてください。コードが雑然として見えやすくなります。参考として、以下の例を見てください。</li></ul>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "サンプル function ファイル" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`BP/functions/wiki/ability/fire_trail.mcfunction`);
            } else {
              return [
                createTextVNode("BP/functions/wiki/ability/fire_trail.mcfunction")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}># ON PLAYER ITEM DROP</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>## Give Effects</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>### Fire resistance</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>execute at @e[type=item,name=&quot;Fire Trail Ability&quot;] run effect @p[r=3] fire_resistance 10 255</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>### Speed</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>execute at @e[type=item,name=&quot;Fire Trail Ability&quot;] run effect @p[r=3] speed 10 1 true</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>## Add Particle Time (10s)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>execute at @e[type=item,name=&quot;Fire Trail Ability&quot;] run scoreboard players set @p[r=3] abilities.fire_trail 200</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>## Delete Item</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>kill @e[type=item,name=&quot;Fire Trail Ability&quot;]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}># ENTITY TIMER</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>## Emit Particle Trail</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>execute at @a[scores={wiki:ability.fire_trail=1..}] run particle minecraft:basic_flame_particle ~~~</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>## Countdown Timer</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>scoreboard players remove @a [scores={wiki:ability.fire_trail=1..}] wiki:ability.fire_trail 1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}><span class="line-number"${_scopeId}>18</span><br${_scopeId}><span class="line-number"${_scopeId}>19</span><br${_scopeId}><span class="line-number"${_scopeId}>20</span><br${_scopeId}><span class="line-number"${_scopeId}>21</span><br${_scopeId}><span class="line-number"${_scopeId}>22</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode(_component_CodeHeader, null, {
            default: withCtx(() => [
              createTextVNode("BP/functions/wiki/ability/fire_trail.mcfunction")
            ]),
            _: 1
          }),
          createVNode("div", { class: "language-yaml vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "yaml"),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "# ON PLAYER ITEM DROP")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "## Give Effects")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "### Fire resistance")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, 'execute at @e[type=item,name="Fire Trail Ability"] run effect @p[r=3] fire_resistance 10 255')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "### Speed")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, 'execute at @e[type=item,name="Fire Trail Ability"] run effect @p[r=3] speed 10 1 true')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "## Add Particle Time (10s)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, 'execute at @e[type=item,name="Fire Trail Ability"] run scoreboard players set @p[r=3] abilities.fire_trail 200')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "## Delete Item")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, 'kill @e[type=item,name="Fire Trail Ability"]')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "# ENTITY TIMER")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "## Emit Particle Trail")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, "execute at @a[scores={wiki:ability.fire_trail=1..}] run particle minecraft:basic_flame_particle ~~~")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "## Countdown Timer")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, "scoreboard players remove @a [scores={wiki:ability.fire_trail=1..}] wiki:ability.fire_trail 1")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "2"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "3"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "4"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "5"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "6"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "7"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "8"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "9"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "10"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "11"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "12"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "13"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "14"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "15"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "16"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "17"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "18"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "19"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "20"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "21"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "22"),
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>可読性を高めるために、レベル 1 見出しの前には 2 行、レベル 2 見出しの前には 1 行の空行を入れています。</p><p>この書き方は一貫した形式を作り、誰にとっても追いやすくし、functions 全体の統一感を保つのに役立ちます。 スコアボードとタグの規約については、<strong><a href="/meta/style-guide#scoreboard-objectives-tags">Style Guide</a></strong> のページを参照してください。</p><h2 id="function-の作成" tabindex="-1">function の作成 <a class="header-anchor" href="#function-の作成" aria-label="Permalink to &quot;function の作成&quot;">​</a></h2><ol><li><p><code class="shiki"><span>📁 com.mojang</span></code> フォルダを見つけて、<code class="shiki"><span>📁 development_behavior_packs</span></code> に移動します。</p><ul><li>開発用フォルダは、パックがワールドファイルにキャッシュされないため、素早く再読み込みするのに使います。</li></ul></li><li><p>function pack 用のフォルダを任意の名前で作成します。これを Behavior Pack、または BP と呼びます。</p></li><li><p>BP フォルダ内に <code class="shiki"><span>📄 manifest.json</span></code> ファイルと、任意で <code class="shiki"><span>🖼 pack_icon.png</span></code> ファイルを作成します。</p><ul><li>manifest ファイルにはパック登録に必要な情報がすべて入ります。pack icon はパックメニューに表示されます。一般的には 128x128 または 256x256 の画像を使いますが、2 の累乗ならどの解像度でもかまいません。必要に応じて拡大・縮小されます。</li></ul></li></ol>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Sample 📄 manifest.json" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`BP/manifest.json`);
            } else {
              return [
                createTextVNode("BP/manifest.json")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;header&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;Write Your Pack Description Here&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;Write Your Pack Name Here&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;uuid&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;00000000-0000-0000-0000-000000000000&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;min_engine_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>19</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>73</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;modules&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;§r&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;data&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;uuid&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;00000000-0000-0000-0000-000000000000&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}><span class="line-number"${_scopeId}>18</span><br${_scopeId}></div></div><p${_scopeId}><code class="shiki"${_scopeId}><span${_scopeId}>uuid</span></code> フィールドは実際の uuid に置き換える必要があり、生成する 2 つは互いに異なる必要があります。uuid は <strong${_scopeId}><a href="https://uuidgenerator.net/" target="_blank" rel="noreferrer"${_scopeId}>uuidgenerator.net</a></strong> で生成できます。</p>`);
      } else {
        return [
          createVNode(_component_CodeHeader, null, {
            default: withCtx(() => [
              createTextVNode("BP/manifest.json")
            ]),
            _: 1
          }),
          createVNode("div", { class: "language-json vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "json"),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "format_version"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "2"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "header"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "description"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"Write Your Pack Description Here"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "name"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"Write Your Pack Name Here"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "uuid"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"00000000-0000-0000-0000-000000000000"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "version"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "min_engine_version"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "19"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "73"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "modules"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "description"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"§r"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "type"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"data"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "uuid"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"00000000-0000-0000-0000-000000000000"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "version"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    ]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "2"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "3"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "4"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "5"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "6"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "7"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "8"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "9"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "10"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "11"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "12"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "13"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "14"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "15"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "16"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "17"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "18"),
              createVNode("br")
            ])
          ]),
          createVNode("p", null, [
            createVNode("code", { class: "shiki" }, [
              createVNode("span", null, "uuid")
            ]),
            createTextVNode(" フィールドは実際の uuid に置き換える必要があり、生成する 2 つは互いに異なる必要があります。uuid は "),
            createVNode("strong", null, [
              createVNode("a", {
                href: "https://uuidgenerator.net/",
                target: "_blank",
                rel: "noreferrer"
              }, "uuidgenerator.net")
            ]),
            createTextVNode(" で生成できます。")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Spoiler, { title: "Sample 🖼 pack_icon.png" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Sample A:</p><p${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="pack_icon.png"${_scopeId}></p><p${_scopeId}>Sample B:</p><p${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="pack_icon.png"${_scopeId}></p>`);
      } else {
        return [
          createVNode("p", null, "Sample A:"),
          createVNode("p", null, [
            createVNode("img", {
              src: _imports_0,
              alt: "pack_icon.png"
            })
          ]),
          createVNode("p", null, "Sample B:"),
          createVNode("p", null, [
            createVNode("img", {
              src: _imports_1,
              alt: "pack_icon.png"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ol start="4"><li><p><code class="shiki"><span>📁 functions</span></code> フォルダを作成します。このフォルダ内で <strong>.mcfunction</strong> で終わるファイルは、ゲーム内で function として登録され、<code class="shiki"><span>/function &lt;function_name&gt;</span></code> で実行できます。</p><ul><li>ネストした function も使えます。function pack のフォルダ構成にあるように、functions フォルダからの相対パスでファイルを指定するだけです。</li></ul></li><li><p>ゲーム内で behavior pack を適用し、function を試します。function ファイルの変更は <code class="shiki"><span>/reload</span></code> を実行するか、再ログインするだけでワールドに反映されます。</p></li></ol><div class="tip custom-block"><p class="custom-block-title">注:</p><p>Functions にはバージョンがあり、<code class="shiki"><span>📄 manifest.json</span></code> に記載されたバージョンで動作します。たとえば次のようになります。</p><ul><li><code class="shiki"><span>min_engine_version</span></code> 1.19.50 or above will adopt the new execute syntax.</li><li><code class="shiki"><span>min_engine_version</span></code> 1.19.70 or above will require aux values be replaced with block states.</li></ul></div><h2 id="実行" tabindex="-1">実行 <a class="header-anchor" href="#実行" aria-label="Permalink to &quot;実行&quot;">​</a></h2><p>Functions は、ゲーム内で <code class="shiki"><span>/function name_of_function</span></code> と入力して実行できます。これにより、function ファイル内のすべてのコマンドが 1 ティック内で実行されます。</p><p>ネストした function たとえば <code class="shiki"><span>BP/functions/wiki/teleport/zone/hell</span></code> は、ネストしたフォルダパスを使って <code class="shiki"><span>/function wiki/teleport/zone/hell</span></code> のように実行できます。</p><h2 id="tick-json" tabindex="-1">Tick JSON <a class="header-anchor" href="#tick-json" aria-label="Permalink to &quot;Tick JSON&quot;">​</a></h2><p>functions フォルダ内の最後のファイルは <strong><code class="shiki"><span>tick.json</span></code></strong> です。これは、サーバー側で毎ゲームティック実行する function を指定します（反復コマンドブロックに似ています）。配置場所は <code class="shiki"><span>BP/functions</span></code> フォルダです。既定では、このファイルで実行される function はオーバーワールドの原点 (<code class="shiki"><span>0, 0, 0</span></code>) で実行されます。<strong>tick.json</strong> の例:</p>`);
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
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;wiki/function_1&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;wiki/function_2&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">  ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>注: このファイルの function は、プレイヤーが読み込まれているかどうかに関係なく、ワールドが <em>初期化</em> されるとすぐに実行されます。使い方を誤ると、意図しない挙動を起こすことがあります。</p></blockquote><h2 id="サンプル-function-pack" tabindex="-1">サンプル Function Pack <a class="header-anchor" href="#サンプル-function-pack" aria-label="Permalink to &quot;サンプル Function Pack&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Card, {
    image: "/assets/images/discord/bcc.png",
    title: "ダウンロード",
    link: "https://github.com/Bedrock-OSS/bedrock-examples/releases/download/download/functions_sample.mcpack"
  }, null, _parent));
  _push(`<h2 id="functions-のトラブルシューティング" tabindex="-1">Functions のトラブルシューティング <a class="header-anchor" href="#functions-のトラブルシューティング" aria-label="Permalink to &quot;Functions のトラブルシューティング&quot;">​</a></h2><p><code class="shiki"><span>/function</span></code> を使ったときに、function がコマンド候補に表示されないことがあります。これは通常、function 内の 1 つ以上のコマンドにエラーがあるためです。</p><p>クリエイター設定で <a href="/guide/troubleshooting#content-log">Content Log</a> を有効にすると、function pack にエラーがあるかどうか、どの function のどの行で、コマンドのどんな構文エラーが起きているかを確認できます。</p><p>エラー一覧は、ワールドを読み込むたび、または <code class="shiki"><span>/reload</span></code> を実行するたびに生成され、ファイル編集後の変更が反映されます。表示は数秒間画面上に出るほか、設定内の content log 履歴でも確認できます。</p><p><img${ssrRenderAttr("src", _imports_2)} alt="contentLogToggles"></p><p><img${ssrRenderAttr("src", _imports_3)} alt="contentLogHistory"></p><h2 id="プロ向けの作業環境セットアップ-任意" tabindex="-1">プロ向けの作業環境セットアップ（任意） <a class="header-anchor" href="#プロ向けの作業環境セットアップ-任意" aria-label="Permalink to &quot;プロ向けの作業環境セットアップ（任意）&quot;">​</a></h2><p>専用の作業環境を整えるのは、function pack やアドオンを本格的に開発する最後のステップです。基本的なテキストエディタでも function は書けますが、次のツールを使うとエラーをすぐ見つけられ、他人と共同作業でき、変更を Minecraft に直接同期できます。</p><h3 id="_1-visual-studio-code-vs-code" tabindex="-1">1. Visual Studio Code (VS Code) <a class="header-anchor" href="#_1-visual-studio-code-vs-code" aria-label="Permalink to &quot;1. Visual Studio Code (VS Code)&quot;">​</a></h3><p><strong>VS Code</strong> を指令室だと思ってください。強力で無料のコードエディタで、<code class="shiki"><span>.mcfunction</span></code> ファイルを書くのが Notepad よりずっと簡単になります。</p><ul><li><strong>ダウンロード:</strong> <a href="https://code.visualstudio.com/Download" target="_blank" rel="noreferrer">Official VS Code Site</a> から入手できます。</li><li><strong>必須プラグイン:</strong> インストールしたら、左サイドバーの <strong>Extensions</strong> アイコン（4 つの四角）をクリックし、<strong>MCBE Command Checker</strong> を検索します。</li><li><strong>なぜ使うのか?</strong><ul><li><strong>シンタックスハイライト:</strong> コマンドの種類に応じて色が変わり、読みやすくなります。</li><li><strong>自動補完:</strong> 入力中に、正しい引数・対象・ブロック名を提案してくれます。</li><li><strong>エラー検出:</strong> ゲームを開く前に、 টাইポや無効な構文を赤い下線で示してくれます。</li></ul></li></ul><p>例のスクリーンショット:</p><p><img${ssrRenderAttr("src", _imports_4)} alt="Editing a .mcfunction file in VSCode"></p><h3 id="_2-github-によるバージョン管理" tabindex="-1">2. GitHub によるバージョン管理 <a class="header-anchor" href="#_2-github-によるバージョン管理" aria-label="Permalink to &quot;2. GitHub によるバージョン管理&quot;">​</a></h3><p><strong>GitHub</strong> は、プロジェクトの「セーブポイント」として機能するクラウドサービスです。</p><ul><li><strong>アカウント作成:</strong> <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub.com</a> で登録します。</li><li><strong>利点:</strong><ul><li><strong>クラウドバックアップ:</strong> PC が壊れても作業を失いません。</li><li><strong>共同作業:</strong> コードへのリンクを共有でき、ファイルのやり取りなしで他人にレビューや修正を手伝ってもらえます。</li><li><strong>履歴:</strong> 今日の変更と 1 週間前の変更の違いを正確に確認できます。</li><li><strong>リリース:</strong> パックが公開可能になったら「Release」を作成できます。これにより、v1.0 や v2.1 のような特定バージョンをダウンロード可能な <code class="shiki"><span>.mcpack</span></code> として公開でき、プレイヤーが安定版を見つけやすくなります。</li></ul></li></ul><h3 id="_3-github-desktop" tabindex="-1">3. GitHub Desktop <a class="header-anchor" href="#_3-github-desktop" aria-label="Permalink to &quot;3. GitHub Desktop&quot;">​</a></h3><p>GitHub はクラウド上にありますが、<strong>GitHub Desktop</strong> はそれとやり取りするための PC アプリです。複雑な Git コマンドを覚えずにファイルを管理するには、初心者にとって最も簡単な方法です。</p><ul><li><strong>ダウンロード:</strong> <a href="https://desktop.github.com" target="_blank" rel="noreferrer">desktop.github.com</a> から入手できます。</li><li><strong>作業の流れ:</strong> VS Code でコードを書き終えたら、GitHub Desktop を使って変更を &quot;Commit&quot;（保存）し、&quot;Push&quot;（クラウドへアップロード）します。</li></ul><h3 id="_4-フォルダのリンク" tabindex="-1">4. フォルダのリンク <a class="header-anchor" href="#_4-フォルダのリンク" aria-label="Permalink to &quot;4. フォルダのリンク&quot;">​</a></h3><p>Bedrock 開発で最大の難関は、&quot;Work&quot; フォルダから Minecraft の &quot;Behavior Pack&quot; フォルダへファイルを移すことです。<strong>Directory Junction</strong>（実際のフォルダのように振る舞うショートカット）を作れば、この手動作業を省けます。</p><p><code class="shiki"><span>\\\\GitHub\\\\ProjectName</span></code> フォルダを Minecraft の <code class="shiki"><span>\\\\development_behavior_packs\\\\ProjectName</span></code> フォルダにリンクすると、VS Code で保存した変更は Minecraft のファイルに <strong>即座に反映</strong> されます。</p><p><strong>フォルダをリンクする方法（Windows）:</strong></p><ol><li>GitHub フォルダ内でプロジェクトを見つけます。</li></ol><blockquote><p>例:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span>C:\\Github\\YOUR_PROJECT_NAME</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></blockquote><ol start="2"><li>Minecraft の開発用フォルダを見つけます。</li></ol><blockquote><p>例:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span>C:\\Users\\YOUR_NAME\\AppData\\Roaming\\Minecraft Bedrock\\Users\\Shared\\games\\com.mojang\\development_behavior_packs\\YOUR_PROJECT_NAME</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></blockquote><ol start="3"><li><strong>コマンドプロンプト</strong> を管理者として開きます。</li><li><code class="shiki"><span>mklink /J</span></code> コマンドでリンクします。</li></ol><blockquote><p>例:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span>mklink /J &quot;Path\\To\\Minecraft\\Folder&quot; &quot;Path\\To\\GitHub\\Folder&quot;\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>これらのフォルダをリンクすれば、Minecraft を再起動したりワールドに入り直したりしなくても作業を試せます。VS Code で保存し、ゲーム内で <code class="shiki"><span>/reload</span></code> を実行するだけで、変更がすぐ反映されます。</p><p><strong>補足:</strong> VS Code の <strong>Auto Save</strong>（<strong>File &gt; Auto Save</strong>）を有効にすると、さらに速くなります。Minecraft に戻って <code class="shiki"><span>/reload</span></code> を実行するだけです。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("commands/mcfunctions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mcfunctions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mcfunctions as default
};
