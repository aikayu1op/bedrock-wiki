import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_1 } from "./5.DwcU4oVp.js";
import { _ as _imports_0$1 } from "./8.CUqnGdP3.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/images/commands/execute-at-block/demo_1.gif";
const _imports_2 = "/assets/images/commands/execute-at-block/demo_2.gif";
const __pageData = JSON.parse('{"title":"ブロックバリアント上で実行","description":"どんなブロックバリアントの位置でも、動的にコマンドを実行する方法を学びます。","frontmatter":{"title":"ブロックバリアント上で実行","category":"Techniques","mentions":["BedrockCommands","PipiSpamton","zheaEvyline"],"nav_order":2,"description":"どんなブロックバリアントの位置でも、動的にコマンドを実行する方法を学びます。"},"headers":[{"level":2,"title":"はじめに","slug":"はじめに","link":"#はじめに","children":[]},{"level":2,"title":"システム","slug":"システム","link":"#システム","children":[]},{"level":2,"title":"各コマンドの役割","slug":"各コマンドの役割","link":"#各コマンドの役割","children":[]},{"level":2,"title":"システム - 変更版","slug":"システム-変更版","link":"#システム-変更版","children":[]}],"relativePath":"commands/execute-at-block.md","filePath":"commands/execute-at-block.md"}');
const _sfc_main = { name: "commands/execute-at-block.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_FolderView = resolveComponent("FolderView");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h2><p><a href="https://bedrockcommands.org/" target="_blank" rel="noreferrer">Sourced by the Bedrock Commands Community (BCC) Discord</a></p><p>この手法を使うと、各座標を個別に指定しなくても、任意のブロックバリアントの位置でコマンドを実行できます。</p><p><strong>クレジット:</strong> <em>@oyakodon10</em></p><p><img${ssrRenderAttr("src", _imports_0)} alt="Demonstration GIF"></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li>このシステムは、対象ブロック数が多い場合は注意して使ってください。ブロックごとに一時的なエンティティが生成されるため、ラグが発生することがあります。</li><li>満杯のコンポスターを含む範囲で使うと、誤ってそれらを置き換えてしまうことがあります。ワールド内に影響を受ける可能性のある建築やブロックがある場合は、ページ末尾の少し調整した版 <strong><a href="/commands/execute-at-block#system-modified">こちら</a></strong> を使ってください。こちらは <strong>3 つの追加コマンド</strong> を含みます。</li></ul></div><h2 id="システム" tabindex="-1">システム <a class="header-anchor" href="#システム" aria-label="Permalink to &quot;システム&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/execute_at_blocks/diamond_block.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/execute_at_blocks/diamond_block.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## [ブロック] を [範囲] の中で満杯のコンポスターに置き換える</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute at @a run fill ~8~8~8 ~-8~-1~-8 composter [&quot;composter_fill_level&quot;=8] replace diamond_block</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## 既存のアイテムドロップに無視タグを付ける</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">tag @e[type=item] add wiki:ignored.item</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## 満杯のコンポスターに骨粉を落とさせる</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### 満杯のコンポスターを元の [ブロック] に置き換えることで行います</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute at @a run fill ~8~8~8 ~-8~-1~-8 diamond_block replace composter [&quot;composter_fill_level&quot;=8]</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## ここにコマンドを入れます（例）:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### プレイヤー付近のすべてのダイヤモンドブロックの上にシュルカーボルトの粒子を出す</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute at @e[type=item,tag=!wiki:ignored.item] align xyz positioned ~0.5~0.5~0.5 run particle minecraft:shulker_bullet ~~1~</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## システムが生成した骨粉ドロップをすべて削除</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">kill @e[type=item,tag=!wiki:ignored.item]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><img${ssrRenderAttr("src", _imports_1)} alt="Chain of Five Command Blocks"></p><p>ここでは例として <code class="shiki"><span>/particle</span></code> コマンドを使っていますが、好きなコマンドを必要な数だけ使えます。</p><p>ただし、必ず示された順序を守り、目的のコマンドには <code class="shiki"><span>execute at @e[type=item,tag=!wiki:ignored.item] align xyz positioned ~0.5~0.5~0.5 run</span></code> を正しく組み込んでください。</p><p>また、使うブロック（<code class="shiki"><span>diamond_block</span></code>）や対象範囲（<code class="shiki"><span>at @a run fill ~8~8~8 ~-8~-1~-8</span></code>）は好みに合わせて変更できます。たとえば <code class="shiki"><span>gold_block</span></code> や <code class="shiki"><span>iron_block</span></code>、<code class="shiki"><span>fill 8 8 8 -12 -12 -12</span></code> や <code class="shiki"><span>at @a fill ~3~3~3 ~-3~-3~-3</span></code> などです。</p><h2 id="各コマンドの役割" tabindex="-1">各コマンドの役割 <a class="header-anchor" href="#各コマンドの役割" aria-label="Permalink to &quot;各コマンドの役割&quot;">​</a></h2><ul><li><strong>コマンド 1:</strong> 指定した範囲内の任意のブロック（例: ダイヤモンドブロック）を、骨粉で満たされたコンポスターに置き換えます。 <ul><li>満杯のコンポスターには便利な挙動があります。破壊または置き換えられると、中に入っていた骨粉を落とします。</li></ul></li><li><strong>コマンド 2:</strong> 既存のアイテムドロップ（例: プレイヤーが落とした装備）すべてに <code class="shiki"><span>wiki:ignored.item</span></code> を付けます。これにより、コマンド 5 ではコンポスターが落とした骨粉だけを削除し、システム外で生成されたほかのアイテムドロップは無視できます。</li><li><strong>コマンド 3:</strong> コマンド 1 で説明したとおり、コンポスターを元のブロック（例: ダイヤモンドブロック）に戻します。これでコンポスター内の骨粉が落ちるので、セレクターで対象にして、その位置で目的のコマンドを実行できます。</li><li><strong>コマンド 4:</strong> 先ほど説明したとおり、これは用途に応じて変更・拡張できる例のコマンドです。</li><li><strong>コマンド 5:</strong> システムの最後のコマンドです。コンポスターが生成した骨粉ドロップをすべて削除し、ワールド内のアイテムドロップ増加によるラグを防ぎます。</li></ul><p>functions を使う場合、パックのフォルダ構成は次のようになります。</p>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "BP",
    "BP/functions",
    "BP/functions/wiki",
    "BP/functions/wiki/main.mcfunction",
    "BP/pack_icon.png",
    "BP/manifest.json",
    "BP/functions/wiki/execute_at_blocks",
    "BP/functions/wiki/execute_at_blocks/diamond_block.mcfunction"
  ] }, null, _parent));
  _push(`<p>この構成では、<code class="shiki"><span>diamond_block</span></code> 関数は <code class="shiki"><span>main.mcfunction</span></code> から呼び出され、<code class="shiki"><span>tick.json</span></code> を通じて毎ティック実行されます。</p><h2 id="システム-変更版" tabindex="-1">システム - 変更版 <a class="header-anchor" href="#システム-変更版" aria-label="Permalink to &quot;システム - 変更版&quot;">​</a></h2><p>これは少し変更した版で、ワールド内にすでに存在する満杯のコンポスターには影響しません。</p><p><img${ssrRenderAttr("src", _imports_2)} alt="Demonstration GIF"></p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/execute_at_blocks/diamond_block.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/execute_at_blocks/diamond_block.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## 既存のアイテムドロップに無視タグを付ける</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">tag @e[type=item] add wiki:ignored.item</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## 🟩 [範囲] 内の既存の満杯コンポスターに骨粉を落とさせる</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### 空気で置き換えることで行います</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute at @a run fill ~8~8~8 ~-8~-1~-8 air replace composter [&quot;composter_fill_level&quot;=8]</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## 🟩 既存の満杯コンポスターのドロップに無視タグを付ける</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">tag @e[type=item,tag=!wiki:ignored.item] add wiki:ignored.composter</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## [ブロック] を [範囲] の中で満杯のコンポスターに置き換える</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute at @a run fill ~8~8~8 ~-8~-1~-8 composter [&quot;composter_fill_level&quot;=8] replace diamond_block</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## システムの満杯コンポスターに骨粉を落とさせる</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### 元の [ブロック] に置き換えることで行います</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute at @a run fill ~8~8~8 ~-8~-1~-8 diamond_block replace composter [&quot;composter_fill_level&quot;=8]</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## 🟩 以前から存在していた満杯コンポスターを戻す</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute at @e[type=item,tag=wiki:ignored.composter] run setblock ~~~ composter [&quot;composter_fill_level&quot;=8]</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## ここにコマンドを入れます（例）:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### プレイヤー付近のすべてのダイヤモンドブロックの上にシュルカーボルトの粒子を出す</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute at @e[type=item,tag=!wiki:ignored.item,tag=!wiki:ignored.composter] align xyz positioned ~0.5~0.5~0.5 run particle minecraft:shulker_bullet ~~1~</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## システムが生成した骨粉ドロップをすべて削除</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">kill @e[type=item,tag=!wiki:ignored.item]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><img${ssrRenderAttr("src", _imports_0$1)} alt="Chain of Eight Command Blocks"></p><blockquote><p>注: 🟩 が付いたレベル 2 見出し以下のコマンドは、新しく追加されたものです。</p></blockquote><p>元のシステムでは、実行したいコマンドで <code class="shiki"><span>wiki:ignored.item</span></code> タグを無視するだけで済みました。しかし、この変更版では、上で示したように <code class="shiki"><span>wiki:ignored.composter</span></code> タグも無視する必要があります。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("commands/execute-at-block.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const executeAtBlock = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  executeAtBlock as default
};
