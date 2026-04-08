import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"スタイルガイド","description":"Minecraft の制作物を一貫させるためのガイドです。","frontmatter":{"title":"スタイルガイド","description":"Minecraft の制作物を一貫させるためのガイドです。","mentions":["SirLich","solvedDev","MedicalJewel105","ChibiMango","zheaEvyline","QuazChick"]},"headers":[{"level":2,"title":"フォルダー構成","slug":"フォルダー構成","link":"#フォルダー構成","children":[]},{"level":2,"title":"識別子","slug":"識別子","link":"#識別子","children":[]},{"level":2,"title":"ファイル名とフォルダー名","slug":"ファイル名とフォルダー名","link":"#ファイル名とフォルダー名","children":[]},{"level":2,"title":"Namespaces","slug":"namespaces","link":"#namespaces","children":[{"level":3,"title":"Namespace フォルダー","slug":"namespace-フォルダー","link":"#namespace-フォルダー","children":[]}]},{"level":2,"title":"サブインデックス","slug":"サブインデックス","link":"#サブインデックス","children":[]},{"level":2,"title":"グループとイベントは互いに補完するべき","slug":"グループとイベントは互いに補完するべき","link":"#グループとイベントは互いに補完するべき","children":[]},{"level":2,"title":"Short-Name は汎用的にする","slug":"short-name-は汎用的にする","link":"#short-name-は汎用的にする","children":[]},{"level":2,"title":"Functions","slug":"functions","link":"#functions","children":[{"level":3,"title":"Functions 内のコメント","slug":"functions-内のコメント","link":"#functions-内のコメント","children":[]}]},{"level":2,"title":"Scoreboard Objectives と Tags","slug":"scoreboard-objectives-と-tags","link":"#scoreboard-objectives-と-tags","children":[{"level":3,"title":"Score Holder","slug":"score-holder","link":"#score-holder","children":[]}]},{"level":2,"title":"可能ならアニメーションファイルをまとめる","slug":"可能ならアニメーションファイルをまとめる","link":"#可能ならアニメーションファイルをまとめる","children":[]},{"level":2,"title":"テクスチャは名前ではなくパスで分ける","slug":"テクスチャは名前ではなくパスで分ける","link":"#テクスチャは名前ではなくパスで分ける","children":[]},{"level":2,"title":".lang ファイルのコメント","slug":"lang-ファイルのコメント","link":"#lang-ファイルのコメント","children":[]},{"level":2,"title":"略語","slug":"略語","link":"#略語","children":[{"level":3,"title":"パックの種類","slug":"パックの種類","link":"#パックの種類","children":[]},{"level":3,"title":"言語","slug":"言語","link":"#言語","children":[]},{"level":3,"title":"その他","slug":"その他","link":"#その他","children":[]}]},{"level":2,"title":"定義フォーマットの順序","slug":"定義フォーマットの順序","link":"#定義フォーマットの順序","children":[{"level":3,"title":"Blocks","slug":"blocks","link":"#blocks","children":[]},{"level":3,"title":"Entities","slug":"entities","link":"#entities","children":[]},{"level":3,"title":"Items","slug":"items","link":"#items","children":[]}]},{"level":2,"title":"カスタムコンポーネント","slug":"カスタムコンポーネント","link":"#カスタムコンポーネント","children":[{"level":3,"title":"変数名","slug":"変数名","link":"#変数名","children":[]}]}],"relativePath":"meta/style-guide.md","filePath":"meta/style-guide.md"}');
const _sfc_main = { name: "meta/style-guide.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FolderView = resolveComponent("FolderView");
  const _component_Spoiler = resolveComponent("Spoiler");
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>この文書では、Bedrock Wiki のアドオン制作向けスタイルガイドを紹介します。このガイドは、アドオン制作中のベストプラクティスを促し、誰もが従える一貫した形式を作ることを目的としています。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>スタイルガイドは生きている文書であり、アドオン制作の変化に合わせて進化します。更新や変更が必要だと思ったら、ぜひ連絡してください！</p></div><h2 id="フォルダー構成" tabindex="-1">フォルダー構成 <a class="header-anchor" href="#フォルダー構成" aria-label="Permalink to &quot;フォルダー構成&quot;">​</a></h2><ul><li>ファイルパスにスペースを入れないでください。<code class="shiki"><span>use_underscores</span></code> を使いましょう。</li><li>識別子、ファイル名、フォルダー名に <code class="shiki"><span>CAPITALS</span></code> を使わないでください。ただし <code class="shiki"><span>&#39;BP&#39;</span></code> と <code class="shiki"><span>&#39;RP&#39;</span></code> のフォルダー名は大文字でも構いません。</li><li>どのパスも全体の文字数は 80 文字を超えないようにしてください（コンソールの制限）。</li><li>コンテンツフォルダーは、複数形と単数形の使い方を統一してください。すべて複数形にするか、すべて単数形にするかのどちらかにして、混ぜないでください。例:</li></ul><p>✅️ <strong>統一されている</strong>:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span>BP/functions/wiki/ability/ice_blast.mcfunction</span></span>
<span class="line"><span>BP/functions/wiki/ability/fire_trail.mcfunction</span></span>
<span class="line"><span>BP/functions/wiki/event/players/on_death.mcfunction</span></span>
<span class="line"><span>BP/functions/wiki/event/worlds/on_initialize.mcfunction</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>コンテンツフォルダー <code class="shiki"><span>ability</span></code> と <code class="shiki"><span>event</span></code> はどちらも単数形で統一されています。</li><li><code class="shiki"><span>event</span></code> フォルダー内のコンテンツフォルダーも、<code class="shiki"><span>players</span></code> と <code class="shiki"><span>worlds</span></code> の両方が複数形なので統一されています。</li></ul><p>❌️ <strong>統一されていない</strong>:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span>BP/functions/wiki/abilities/ice_blast.mcfunction</span></span>
<span class="line"><span>BP/functions/wiki/abilities/fire_trail.mcfunction</span></span>
<span class="line"><span>BP/functions/wiki/event/players/on_death.mcfunction</span></span>
<span class="line"><span>BP/functions/wiki/event/world/on_initialize.mcfunction</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><code class="shiki"><span>abilities</span></code> のコンテンツフォルダーだけが複数形で、<code class="shiki"><span>event</span></code> は単数形になっています。</li><li>さらに <code class="shiki"><span>event</span></code> フォルダー内でも、<code class="shiki"><span>players</span></code> は複数形なのに <code class="shiki"><span>world</span></code> は単数形です。</li></ul><h2 id="識別子" tabindex="-1">識別子 <a class="header-anchor" href="#識別子" aria-label="Permalink to &quot;識別子&quot;">​</a></h2><p>数字で始まる識別子は使わないでください。特に、<em>数字だけ</em> の識別子は避けてください。これは entities、component_groups、events、その他 <code class="shiki"><span>namespace:name</span></code> ペアを使うすべてに当てはまります。</p><h2 id="ファイル名とフォルダー名" tabindex="-1">ファイル名とフォルダー名 <a class="header-anchor" href="#ファイル名とフォルダー名" aria-label="Permalink to &quot;ファイル名とフォルダー名&quot;">​</a></h2><table tabindex="0"><thead><tr><th>概念</th><th>例</th></tr></thead><tbody><tr><td>Behavior Pack</td><td>dragons_BP</td></tr><tr><td>Resource Pack</td><td>dragons_RP</td></tr><tr><td>Geometry</td><td>dragon.geo.json</td></tr><tr><td>Animations</td><td>dragon.animation.json<br>dragon.anim.json</td></tr><tr><td>Animation Controllers</td><td>dragon.animation_controllers.json<br>dragon.ac.json</td></tr><tr><td>Entity</td><td>dragon.behavior.json<br>dragon.se.json<br><em>(se: server entity)</em></td></tr><tr><td>Client Entity</td><td>dragon.entity.json<br>dragon.client_entity.json<br>dragon.ce.json</td></tr><tr><td>Item</td><td>dragon_tooth.item.json</td></tr><tr><td>Legacy Item (BP)</td><td>dragon_tooth.item.bp.json</td></tr><tr><td>Legacy Item (RP)</td><td>dragon_tooth.item.rp.json</td></tr><tr><td>Render Controllers</td><td>dragon.render_controllers.json<br>dragon.rc.json</td></tr><tr><td>Loot Table</td><td>dragon.json</td></tr><tr><td>Recipe</td><td>dragon_saddle.recipe.json</td></tr><tr><td>Spawn Rules</td><td>dragon.spawn.json</td></tr><tr><td>Trade Table</td><td>dragon.json</td></tr><tr><td>Particle Effect</td><td>dragon_magic.particle.json</td></tr><tr><td>Texture</td><td>dragon.png</td></tr><tr><td>Script</td><td>dragonFlight.js</td></tr></tbody></table><h2 id="namespaces" tabindex="-1">Namespaces <a class="header-anchor" href="#namespaces" aria-label="Permalink to &quot;Namespaces&quot;">​</a></h2><p>適切な namespace は、自分自身かチームだけに固有であるべきです。<code class="shiki"><span>mob</span></code>、<code class="shiki"><span>cars</span></code>、<code class="shiki"><span>content</span></code>、<code class="shiki"><span>custom</span></code> のような namespace は、他の開発者も同じ namespace を思いつく可能性があるため、<strong>よくありません</strong>。</p><p><code class="shiki"><span>minecraft</span></code> namespace はバニラコンテンツ専用なので、バニラコンテンツを上書きする場合以外には使えません。</p><p>個人プロジェクトでは自分の名前を少し変えたものを、チームプロジェクトではチーム名を少し変えたものを使ってください。</p><p>複数の開発者が同じプロジェクトで作業するときは、namespace は常に共有されるべきです。クレジットを区別したい場合はサブインデックスを使います。例: <code class="shiki"><span>ascent.wiki:dragon</span></code></p><p>namespace を使う場所:</p><ul><li>Biomes <ul><li>Tags</li></ul></li><li>Blocks <ul><li>Culling rules</li><li>Culling layers</li><li>Crafting tags</li><li>Tags</li></ul></li><li>Entities <ul><li>Component groups</li><li>Events</li><li>Families</li></ul></li><li>Items <ul><li>Cooldown categories</li><li>Catalog groups</li><li>Tags</li></ul></li><li>Particles</li></ul><h3 id="namespace-フォルダー" tabindex="-1">Namespace フォルダー <a class="header-anchor" href="#namespace-フォルダー" aria-label="Permalink to &quot;Namespace フォルダー&quot;">​</a></h3><p>いくつかのコンテンツはファイルパスで識別されます。そのため、namespace として機能するフォルダーに入れるべきです。</p>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "BP/functions/<namespace>/*.mcfunction",
    "BP/loot_tables/<namespace>/*.json",
    "BP/trading/<namespace>/*.json",
    "BP/structures/<namespace>/*.mcstructure",
    "RP/sounds/<namespace>/*.ogg",
    "RP/textures/<namespace>/*.png"
  ] }, null, _parent));
  _push(`<p>他のフォルダーには namespace を含めないでください。</p><h2 id="サブインデックス" tabindex="-1">サブインデックス <a class="header-anchor" href="#サブインデックス" aria-label="Permalink to &quot;サブインデックス&quot;">​</a></h2><p>サブインデックスとは、連結された概念を区切るために <code class="shiki"><span>.</span></code> を使うことです。サブインデックスは、大きいものから小さいものへ降順で並べます。</p><p>✔️ <code class="shiki"><span>animation.controller.dragon.flying.taking_off</span></code></p><p>❌ <code class="shiki"><span>animation.controller.dragon_take_off_flying</span></code></p><p>サブインデックスでは、スペースの代わりに <code class="shiki"><span>.</span></code> ではなく <code class="shiki"><span>_</span></code> を使います。</p><p>✔️ <code class="shiki"><span>animation.controller.dragon.flying.taking_off</span></code></p><p>❌ <code class="shiki"><span>animation.controller.dragon.flying.taking.off</span></code></p><p>entities にもサブインデックスを使えます。例: <code class="shiki"><span>wiki:dragon.drake</span></code></p><h2 id="グループとイベントは互いに補完するべき" tabindex="-1">グループとイベントは互いに補完するべき <a class="header-anchor" href="#グループとイベントは互いに補完するべき" aria-label="Permalink to &quot;グループとイベントは互いに補完するべき&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Group</th><th>Event</th></tr></thead><tbody><tr><td>wiki:wild</td><td>✔️ wiki:become_wild</td></tr><tr><td>wiki:wild</td><td>❌ wiki:wild</td></tr><tr><td>wiki:tame</td><td>✔️ wiki:on_tame</td></tr><tr><td>wiki:tame</td><td>❌ wiki:tame</td></tr></tbody></table><h2 id="short-name-は汎用的にする" tabindex="-1">Short-Name は汎用的にする <a class="header-anchor" href="#short-name-は汎用的にする" aria-label="Permalink to &quot;Short-Name は汎用的にする&quot;">​</a></h2><p>Short-name はファイル固有の識別子で、識別子と表示名を対応付けるために使われます。アニメーションコントローラーや render controller を再利用できるので便利です。そのため、short-name は汎用的であるべきです。</p><p>✔️ <code class="shiki"><span>&quot;sit&quot;: &quot;animation.dragon.sit&quot;</span></code></p><p>❌ <code class="shiki"><span>&quot;dragon_sitting&quot;: &quot;animation.dragon.sit&quot;</span></code></p><p>この形式の short-name を使うと、<code class="shiki"><span>sit</span></code> short-name を使って sit アニメーションを再生できるので、すべてに共通の &quot;sit&quot; アニメーションコントローラーを使えます。</p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><ol><li>すべての <code class="shiki"><span>.mcfunction</span></code> ファイルは、functions フォルダー内の namespace 付きルートフォルダーに置く必要があります。Bedrock Wiki では <code class="shiki"><span>wiki</span></code> namespace を使いますが、あなたは自分の名前やプロジェクトに基づく namespace を選んでも構いません。詳細は <a href="/concepts/namespaces">namespaces</a> のページを参照してください。 <ul><li>✅️ <code class="shiki"><span>BP/functions/wiki/random_number.mcfunction</span></code></li><li>❌️ <code class="shiki"><span>BP/functions/random_number.mcfunction</span></code></li></ul></li><li>正しくネストされていなければなりません。 <ul><li>✅️ <code class="shiki"><span>BP/functions/wiki/teleport/zone/hell.mcfunction</span></code></li><li>❌️ <code class="shiki"><span>BP/functions/wiki/teleport_hellzone.mcfunction</span></code></li></ul></li><li>名前は <code class="shiki"><span>action_object</span></code> 構造に従う必要があります。つまり、動詞は対象の前に来るべきです。 <ul><li>✅️ <code class="shiki"><span>add_all</span></code></li><li>❌️ <code class="shiki"><span>all_add</span></code></li><li>✅️ <code class="shiki"><span>shuffle_position</span></code></li><li>❌️ <code class="shiki"><span>position_shuffle</span></code></li></ul></li></ol><h3 id="functions-内のコメント" tabindex="-1">Functions 内のコメント <a class="header-anchor" href="#functions-内のコメント" aria-label="Permalink to &quot;Functions 内のコメント&quot;">​</a></h3><ul><li>多数のコマンドを含む functions を扱うときは、コメント内で複数の <code class="shiki"><span>#</span></code> を使って見出しレベルを分けると整理しやすくなります。</li><li><em>任意で</em>、これらのレベルをさらに区別するために、次のようなスタイルを使えます。 <ul><li>level 1 headers - <strong># UPPERCASE</strong></li><li>level 2 headers - <strong>## Title Case</strong></li><li>level 3 headers - <strong>### Sentence case</strong></li></ul></li><li>コードが散らかって見えるので、見出しレベルを 3 つ以上使ったり、見出しを増やしすぎたりするのは避けましょう。参考用に、下の例ファイルを見てください。</li></ul>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Example Function File" }, {
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
  _push(`<p>可読性を高めるため、level 1 見出しの前には 2 行、level 2 見出しの前には 1 行の空行を入れる点に注意してください。</p><p>このやり方は、一貫した形式を作って誰もが従いやすくし、functions 全体で統一性を保つのに役立ちます。</p><h2 id="scoreboard-objectives-と-tags" tabindex="-1">Scoreboard Objectives と Tags <a class="header-anchor" href="#scoreboard-objectives-と-tags" aria-label="Permalink to &quot;Scoreboard Objectives と Tags&quot;">​</a></h2><ul><li>namespace で始め、<code class="shiki"><span>snake_case</span></code> を使う必要があります。 <ul><li>これにより、同じタグや objective を使うパックとの衝突を防げます。</li></ul></li><li>特殊文字として使えるのは小文字（a-z）、アンダースコア（<code class="shiki"><span>_</span></code>）、ドット（<code class="shiki"><span>.</span></code>）だけにしてください。</li></ul><p><strong>Objective の例:</strong></p><ul><li><code class="shiki"><span>wiki:blocks_traveled.overworld</span></code></li><li><code class="shiki"><span>wiki:q.is_sneaking</span></code></li><li><code class="shiki"><span>wiki:q.is_armed_any</span></code></li></ul><p><strong>Tag の例:</strong></p><ul><li><code class="shiki"><span>wiki:inventory.full</span></code></li><li><code class="shiki"><span>wiki:inventory.empty</span></code></li><li><code class="shiki"><span>wiki:is_flying</span></code></li></ul><div class="info custom-block"><p class="custom-block-title">NOTE:</p><p>Tags は明確な状態を表します。つまり、タグが存在するなら、その条件は true です。これが、同様の形で表現された Molang query に <code class="shiki"><span>q.</span></code> プレフィックスが付かない理由です。</p></div><h3 id="score-holder" tabindex="-1">Score Holder <a class="header-anchor" href="#score-holder" aria-label="Permalink to &quot;Score Holder&quot;">​</a></h3><ul><li>ドット（<code class="shiki"><span>.</span></code>）またはハッシュ（<code class="shiki"><span>#</span></code>）を先頭に付け、<code class="shiki"><span>PascalCase</span></code> を使う必要があります。 <ul><li>これにより、同名の gamertag との衝突を防ぎ、score holder が objective と密接に使われることから見た目でも区別しやすくなります。</li><li>namespace の代わりにプレフィックスを使うのは、名前空間付き objective がすでに他のパックとの衝突を防いでいるため、簡潔さを保つためです。</li></ul></li><li>ドット（<code class="shiki"><span>.</span></code>）以外の特殊文字は使えません。</li></ul><p><strong>例:</strong></p><ul><li><code class="shiki"><span>.Ores.Iron</span></code></li><li><code class="shiki"><span>.Ores.DeepslateIron</span></code></li><li><code class="shiki"><span>.200</span></code></li></ul><div class="tip custom-block"><p class="custom-block-title"><strong>TIP:</strong></p><p>ハッシュ（<code class="shiki"><span>#</span></code>）を付けた score holder は、scoreboard のサイドバーに表示されません。ただし、構文エラーを避けるためにダブルクォート（<code class="shiki"><span>&quot; &quot;</span></code>）で囲む必要があります。</p></div><h2 id="可能ならアニメーションファイルをまとめる" tabindex="-1">可能ならアニメーションファイルをまとめる <a class="header-anchor" href="#可能ならアニメーションファイルをまとめる" aria-label="Permalink to &quot;可能ならアニメーションファイルをまとめる&quot;">​</a></h2><p>例:</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, null, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.8.0&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;animations&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;animation.dragon.sit&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#F44747", "--shiki-light": "#CD3131" })}">...</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;animation.dragon.fly&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#F44747", "--shiki-light": "#CD3131" })}">...</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;animation.dragon.roar&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#F44747", "--shiki-light": "#CD3131" })}">...</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="テクスチャは名前ではなくパスで分ける" tabindex="-1">テクスチャは名前ではなくパスで分ける <a class="header-anchor" href="#テクスチャは名前ではなくパスで分ける" aria-label="Permalink to &quot;テクスチャは名前ではなくパスで分ける&quot;">​</a></h2><p>✔️ <code class="shiki"><span>RP/textures/wiki/dragon/red</span></code></p><p>❌ <code class="shiki"><span>RP/textures/wiki/dragon_red_skin</span></code></p><p>✔️ <code class="shiki"><span>RP/textures/wiki/npc/dragon_hunter/archer</span></code></p><p>❌ <code class="shiki"><span>RP/textures/wiki/npc/dragon_hunter_archer</span></code></p><h2 id="lang-ファイルのコメント" tabindex="-1"><code class="shiki"><span>.lang</span></code> ファイルのコメント <a class="header-anchor" href="#lang-ファイルのコメント" aria-label="Permalink to &quot;\`.lang\` ファイルのコメント&quot;">​</a></h2><p>ローカライザー向けのコメントは、必ず次の形式で行末に入れてください。</p><div class="language-lang vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">lang</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">the.key</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">=</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">The string</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">	## Comment, intended for the one localizing.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>行末コメントの前にある空白は、スペースではなくタブでなければなりません。</strong></p><p>行単位のコメントは整理のために使って構いませんが、ローカライズに重要な情報を入れるべきではありません。</p><h2 id="略語" tabindex="-1">略語 <a class="header-anchor" href="#略語" aria-label="Permalink to &quot;略語&quot;">​</a></h2><h3 id="パックの種類" tabindex="-1">パックの種類 <a class="header-anchor" href="#パックの種類" aria-label="Permalink to &quot;パックの種類&quot;">​</a></h3><table tabindex="0"><thead><tr><th>略語</th><th>パック種別</th></tr></thead><tbody><tr><td>BP</td><td>Behavior Pack</td></tr><tr><td>RP</td><td>Resource Pack</td></tr><tr><td>SP</td><td>Skin Pack</td></tr></tbody></table><h3 id="言語" tabindex="-1">言語 <a class="header-anchor" href="#言語" aria-label="Permalink to &quot;言語&quot;">​</a></h3><table tabindex="0"><thead><tr><th>略語</th><th>言語</th></tr></thead><tbody><tr><td>JS</td><td>JavaScript</td></tr><tr><td>JSON</td><td>JavaScript Object Notation</td></tr><tr><td>NBT</td><td>Named Binary Tag</td></tr><tr><td>TS</td><td>TypeScript</td></tr></tbody></table><h3 id="その他" tabindex="-1">その他 <a class="header-anchor" href="#その他" aria-label="Permalink to &quot;その他&quot;">​</a></h3><table tabindex="0"><thead><tr><th>略語</th><th>概念</th></tr></thead><tbody><tr><td>AC</td><td>Animation Controller</td></tr><tr><td>RPAC</td><td>Resource Pack Animation Controller</td></tr><tr><td>BPAC</td><td>Behavior Pack Animation Controller</td></tr><tr><td>BDS</td><td>Bedrock Dedicated Server</td></tr><tr><td>HUD</td><td>Heads-Up Display</td></tr><tr><td>IDE</td><td>Integrated Development Environment</td></tr><tr><td>OSS</td><td>Open-Source Software</td></tr><tr><td>UI</td><td>User Interface</td></tr><tr><td>VS Code</td><td>Visual Studio Code</td></tr></tbody></table><h2 id="定義フォーマットの順序" tabindex="-1">定義フォーマットの順序 <a class="header-anchor" href="#定義フォーマットの順序" aria-label="Permalink to &quot;定義フォーマットの順序&quot;">​</a></h2><p>ブロック、エンティティ、アイテムは、以下の順序に従う必要があります。</p><h3 id="blocks" tabindex="-1">Blocks <a class="header-anchor" href="#blocks" aria-label="Permalink to &quot;Blocks&quot;">​</a></h3><ul><li><code class="shiki"><span>format_version</span></code></li><li><code class="shiki"><span>minecraft:block</span></code><ul><li><code class="shiki"><span>description</span></code><ul><li><code class="shiki"><span>identifier</span></code></li><li><code class="shiki"><span>menu_category</span></code><ul><li><code class="shiki"><span>category</span></code></li><li><code class="shiki"><span>group</span></code></li></ul></li><li><code class="shiki"><span>states</span></code></li><li><code class="shiki"><span>traits</span></code></li></ul></li><li><code class="shiki"><span>components</span></code></li><li><code class="shiki"><span>permutations</span></code><ul><li><code class="shiki"><span>condition</span></code></li><li><code class="shiki"><span>components</span></code></li></ul></li></ul></li></ul><h3 id="entities" tabindex="-1">Entities <a class="header-anchor" href="#entities" aria-label="Permalink to &quot;Entities&quot;">​</a></h3><ul><li><code class="shiki"><span>format_version</span></code></li><li><code class="shiki"><span>minecraft:entity</span></code><ul><li><code class="shiki"><span>description</span></code><ul><li><code class="shiki"><span>identifier</span></code></li><li><code class="shiki"><span>spawn_category</span></code></li><li><code class="shiki"><span>is_spawnable</span></code></li><li><code class="shiki"><span>is_summonable</span></code></li><li><code class="shiki"><span>properties</span></code></li></ul></li><li><code class="shiki"><span>component_groups</span></code></li><li><code class="shiki"><span>components</span></code></li><li><code class="shiki"><span>events</span></code></li></ul></li></ul><h3 id="items" tabindex="-1">Items <a class="header-anchor" href="#items" aria-label="Permalink to &quot;Items&quot;">​</a></h3><ul><li><code class="shiki"><span>format_version</span></code></li><li><code class="shiki"><span>minecraft:item</span></code><ul><li><code class="shiki"><span>description</span></code><ul><li><code class="shiki"><span>identifier</span></code></li><li><code class="shiki"><span>menu_category</span></code><ul><li><code class="shiki"><span>category</span></code></li><li><code class="shiki"><span>group</span></code></li></ul></li></ul></li><li><code class="shiki"><span>components</span></code></li></ul></li></ul><h2 id="カスタムコンポーネント" tabindex="-1">カスタムコンポーネント <a class="header-anchor" href="#カスタムコンポーネント" aria-label="Permalink to &quot;カスタムコンポーネント&quot;">​</a></h2><h3 id="変数名" tabindex="-1">変数名 <a class="header-anchor" href="#変数名" aria-label="Permalink to &quot;変数名&quot;">​</a></h3><p>PascalCase を使い、<code class="shiki"><span>Block</span></code> または <code class="shiki"><span>Item</span></code> を接頭辞に、<code class="shiki"><span>Component</span></code> を接尾辞にしてください。たとえば <code class="shiki"><span>const BlockMeltableComponent = { ... }</span></code> のようにし、<code class="shiki"><span>const meltable = { ... }</span></code> のようにはしません。</p><p>これにより、<code class="shiki"><span>registerCustomComponent</span></code> で使っているものと、他の場所で使っている値を区別しやすくなります。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/style-guide.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const styleGuide = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  styleGuide as default
};
