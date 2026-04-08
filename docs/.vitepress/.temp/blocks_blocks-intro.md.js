import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ブロック入門","description":"ブロックを作るための Hello world ガイドです。ブロック形式と基本的なカスタムブロックの作成方法を学びます。","frontmatter":{"title":"ブロック入門","description":"ブロックを作るための Hello world ガイドです。ブロック形式と基本的なカスタムブロックの作成方法を学びます。","category":"General","nav_order":1,"tags":["guide","beginner"],"mentions":["SirLich","solvedDev","Joelant05","Dreamedc2015","sermah","yanasakana","aexer0e","SmokeyStack","MedicalJewel105","stirante","ChibiMango","Hatchibombotar","fraysdev","Ciosciaa","Sprunkles137","ThomasOrs","QuazChick"]},"headers":[{"level":2,"title":"ブロックの登録","slug":"ブロックの登録","link":"#ブロックの登録","children":[{"level":3,"title":"ブロックの説明","slug":"ブロックの説明","link":"#ブロックの説明","children":[]}]},{"level":2,"title":"コンポーネントの追加","slug":"コンポーネントの追加","link":"#コンポーネントの追加","children":[]},{"level":2,"title":"テクスチャの適用","slug":"テクスチャの適用","link":"#テクスチャの適用","children":[{"level":3,"title":"面ごとのテクスチャ","slug":"面ごとのテクスチャ","link":"#面ごとのテクスチャ","children":[]}]},{"level":2,"title":"サウンドの適用","slug":"サウンドの適用","link":"#サウンドの適用","children":[]},{"level":2,"title":"名前の定義","slug":"名前の定義","link":"#名前の定義","children":[]},{"level":2,"title":"結果","slug":"結果","link":"#結果","children":[]},{"level":2,"title":"次は？","slug":"次は","link":"#次は","children":[]}],"relativePath":"blocks/blocks-intro.md","filePath":"blocks/blocks-intro.md"}');
const _sfc_main = { name: "blocks/blocks-intro.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_WikiImage = resolveComponent("WikiImage");
  const _component_CardGrid = resolveComponent("CardGrid");
  const _component_Card = resolveComponent("Card");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="tip custom-block"><p class="custom-block-title">FORMAT VERSION 1.26.10</p><p>このページでは、基本的なブロック機能について説明します。ほかのブロックコンポーネントについては <a href="/blocks/block-components">こちら</a> で詳しく学べます。</p></div><div class="danger custom-block"><p class="custom-block-title">NOTE</p><p>バニラのブロックはハードコードされています。上書きしたりアクセスしたりすることはできません。</p></div><p>Minecraft Bedrock では、バニラに似たさまざまな性質を持つカスタムブロックをワールドに追加できます。カスタムブロックは、植物のような複数段階の状態、向きのある配置、その他の便利な機能を持てます。</p><p>このチュートリアルでは、Minecraft の安定版向けに基本的なブロックを作成する方法を扱います。</p><h2 id="ブロックの登録" tabindex="-1">ブロックの登録 <a class="header-anchor" href="#ブロックの登録" aria-label="Permalink to &quot;ブロックの登録&quot;">​</a></h2><p>ブロック定義はエンティティと同様の構造です。説明と、ブロックの挙動を定義するコンポーネント一覧を含みます。</p><p>エンティティと違い、ブロックには <code class="shiki"><span>RP/blocks.json</span></code> 以外にリソース定義はありません。</p><p>以下は、カスタムブロックをクリエイティブインベントリに追加するための、<strong>最小限の</strong> ビヘイビア側コードです。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/blocks/custom_block.json`);
      } else {
        return [
          createTextVNode("BP/blocks/custom_block.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.26.10&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;minecraft:block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;menu_category&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;category&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;construction&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// The creative inventory or recipe book tab that the block is placed into</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;group&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:itemGroup.name.concrete&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// The expandable group that the block is a part of. (Optional)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;is_hidden_in_commands&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"> // Is the block hidden from use in commands? (Optional)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {} </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// Must be here, even if empty!</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="ブロックの説明" tabindex="-1">ブロックの説明 <a class="header-anchor" href="#ブロックの説明" aria-label="Permalink to &quot;ブロックの説明&quot;">​</a></h3><ul><li>ブロックの <code class="shiki"><span>identifier</span></code> を定義します。形式は <code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#808080", "--shiki-light": "#800000" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#800000" })}">namespace</span><span style="${ssrRenderStyle({ "--shiki-dark": "#808080", "--shiki-light": "#800000" })}">&gt;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#808080", "--shiki-light": "#800000" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#800000" })}">identifier</span><span style="${ssrRenderStyle({ "--shiki-dark": "#808080", "--shiki-light": "#800000" })}">&gt;</span></code> の一意な ID です。</li><li>どの <code class="shiki"><span>menu_category</span></code> に配置されるかを設定します。 <ul><li>任意で <code class="shiki"><span>group</span></code> と <code class="shiki"><span>is_hidden_in_commands</span></code> も指定できます。</li></ul></li></ul><p><em>ブロックの説明には <a href="/blocks/block-states">states</a> と <a href="/blocks/block-traits">traits</a> も含まれます。これらはそれぞれ別ページで解説しています。</em></p><h2 id="コンポーネントの追加" tabindex="-1">コンポーネントの追加 <a class="header-anchor" href="#コンポーネントの追加" aria-label="Permalink to &quot;コンポーネントの追加&quot;">​</a></h2><p>今のところ、カスタムブロックは既定のコンポーネント値を使っています（<a href="/blocks/block-components">こちら</a> で確認できます）。</p><p>それでは、自分の機能を設定しましょう！</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/blocks/custom_block.json`);
      } else {
        return [
          createTextVNode("BP/blocks/custom_block.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.26.10&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;minecraft:block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;menu_category&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;category&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;construction&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:destructible_by_mining&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;seconds_to_destroy&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">3</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:destructible_by_explosion&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;explosion_resistance&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">3</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:map_color&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;#ffffff&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:light_dampening&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:light_emission&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:loot&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;loot_tables/blocks/custom_block.json&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ul><li><a href="/blocks/block-components#destructible-by-mining"><code class="shiki"><span>minecraft:destructible_by_mining</span></code></a> は、プレイヤーがブロックを壊すまでに必要な採掘時間を定義します。現在のところ、ツールごとに破壊時間を変えることはできません。</li><li><a href="/blocks/block-components#destructible-by-explosion"><code class="shiki"><span>minecraft:destructible_by_explosion</span></code></a> は、爆発への耐性を定義します。値が大きいほど破壊されにくくなります。</li><li><a href="/blocks/block-components#map-color"><code class="shiki"><span>minecraft:map_color</span></code></a> は、Minecraft の地図上でこのブロックを表すために表示される 16 進数の色コードです。<code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;#ffffff&quot;</span></code> は白を意味します。ほかの色の 16 進数コードは <a href="https://www.google.com/search?q=hex+color+picker" target="_blank" rel="noreferrer">こちら</a> で確認できます。</li><li><a href="/blocks/block-components#light-dampening"><code class="shiki"><span>minecraft:light_dampening</span></code></a> は、通過する光をどれだけ遮るかを定義します。</li><li><a href="/blocks/block-components#light-emission"><code class="shiki"><span>minecraft:light_emission</span></code></a> は、ブロックが出力する光レベルを定義します。</li><li><a href="/blocks/block-components#loot"><code class="shiki"><span>minecraft:loot</span></code></a> は、ブロックがドロップするためのルートテーブルのパスを定義します。これを削除すると、ブロックは自分自身をドロップします。ルートテーブルについては <a href="/loot/loot-tables">こちら</a> で詳しく学べます。</li></ul><p><em>ほかのブロックコンポーネントも <a href="/blocks/block-components">こちら</a> から確認できます！</em></p><h2 id="テクスチャの適用" tabindex="-1">テクスチャの適用 <a class="header-anchor" href="#テクスチャの適用" aria-label="Permalink to &quot;テクスチャの適用&quot;">​</a></h2><p><a href="/blocks/block-components#geometry">geometry</a> と <a href="/blocks/block-components#material-instances">material instances</a> のコンポーネントを使って、ブロックの見た目を決めます。</p><p>基本の 16×16×16 ピクセルブロックには、<a href="/blocks/vanilla-block-models">バニラモデル</a> <code class="shiki"><span>minecraft:geometry.full_block</span></code> を使います。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`minecraft:block &gt; components`);
      } else {
        return [
          createTextVNode("minecraft:block > components")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;minecraft:geometry&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:geometry.full_block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;minecraft:material_instances&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;*&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_block&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>次に、テクスチャの短縮名を <code class="shiki"><span>RP/textures/terrain_texture.json</span></code> の画像ファイルパスに関連付ける必要があります。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RP/textures/terrain_texture.json`);
      } else {
        return [
          createTextVNode("RP/textures/terrain_texture.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;texture_data&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">        // Our texture shortname:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;wiki:custom_block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;textures&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;textures/wiki/blocks/custom_block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"> // Link to an image file name</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="面ごとのテクスチャ" tabindex="-1">面ごとのテクスチャ <a class="header-anchor" href="#面ごとのテクスチャ" aria-label="Permalink to &quot;面ごとのテクスチャ&quot;">​</a></h3><p>テクスチャは面ごとにも適用できます。たとえば、カスタムの「コンパスブロック」には次のような ✨すばらしい✨ テクスチャを使えます。</p><div style="${ssrRenderStyle({ "display": "grid", "grid-template-columns": "repeat(auto-fill, 192px)", "column-gap": "1em" })}">`);
  _push(ssrRenderComponent(_component_WikiImage, {
    caption: "RP/textures/wiki/blocks/compass_block_down.png",
    src: "compass_block_down.png",
    pixelated: "",
    width: "512"
  }, null, _parent));
  _push(ssrRenderComponent(_component_WikiImage, {
    caption: "RP/textures/wiki/blocks/compass_block_up.png",
    src: "compass_block_up.png",
    pixelated: "",
    width: "512"
  }, null, _parent));
  _push(ssrRenderComponent(_component_WikiImage, {
    caption: "RP/textures/wiki/blocks/compass_block_north.png",
    src: "compass_block_north.png",
    pixelated: "",
    width: "512"
  }, null, _parent));
  _push(ssrRenderComponent(_component_WikiImage, {
    caption: "RP/textures/wiki/blocks/compass_block_east.png",
    src: "compass_block_east.png",
    pixelated: "",
    width: "512"
  }, null, _parent));
  _push(ssrRenderComponent(_component_WikiImage, {
    caption: "RP/textures/wiki/blocks/compass_block_south.png",
    src: "compass_block_south.png",
    pixelated: "",
    width: "512"
  }, null, _parent));
  _push(ssrRenderComponent(_component_WikiImage, {
    caption: "RP/textures/wiki/blocks/compass_block_west.png",
    src: "compass_block_west.png",
    pixelated: "",
    width: "512"
  }, null, _parent));
  _push(`</div><p><a href="/blocks/block-components#material-instances">material instances</a> は次のようになります。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`minecraft:block &gt; components`);
      } else {
        return [
          createTextVNode("minecraft:block > components")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;minecraft:material_instances&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;down&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:compass_block_down&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"> // This texture appears in destruction particles</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;up&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:compass_block_up&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;north&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:compass_block_north&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;east&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:compass_block_east&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;south&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:compass_block_south&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;west&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:compass_block_west&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>以下の <code class="shiki"><span>terrain_texture.json</span></code> のデータも必要です。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RP/textures/terrain_texture.json`);
      } else {
        return [
          createTextVNode("RP/textures/terrain_texture.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;texture_data&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;wiki:compass_block_down&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;textures&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;textures/wiki/blocks/compass_block_down&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;wiki:compass_block_up&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;textures&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;textures/wiki/blocks/compass_block_up&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;wiki:compass_block_north&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;textures&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;textures/wiki/blocks/compass_block_north&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;wiki:compass_block_east&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;textures&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;textures/wiki/blocks/compass_block_east&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;wiki:compass_block_west&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;textures&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;textures/wiki/blocks/compass_block_west&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;wiki:compass_block_south&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;textures&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;textures/wiki/blocks/compass_block_south&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="サウンドの適用" tabindex="-1">サウンドの適用 <a class="header-anchor" href="#サウンドの適用" aria-label="Permalink to &quot;サウンドの適用&quot;">​</a></h2><p>カスタムブロックの採掘音、足音、破壊音、設置音は、<code class="shiki"><span>RP/blocks.json</span></code> の <code class="shiki"><span>sound</span></code> パラメータで決められます。</p><p>ブロックのサウンドについては <a href="/blocks/block-sounds">こちら</a> で詳しく学べます！</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RP/blocks.json`);
      } else {
        return [
          createTextVNode("RP/blocks.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.21.40&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;wiki:custom_block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;sound&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;grass&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="名前の定義" tabindex="-1">名前の定義 <a class="header-anchor" href="#名前の定義" aria-label="Permalink to &quot;名前の定義&quot;">​</a></h2><p>最後に、ブロック名を次のように定義します。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RP/texts/en_US.lang`);
      } else {
        return [
          createTextVNode("RP/texts/en_US.lang")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-lang vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">lang</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">tile.wiki:custom_block.name</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">=</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">Custom Block</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">tile.wiki:compass_block.name</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">=</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">Compass Block</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>翻訳については <a href="/text/text-intro">こちら</a> で詳しく学べます。</p><h2 id="結果" tabindex="-1">結果 <a class="header-anchor" href="#結果" aria-label="Permalink to &quot;結果&quot;">​</a></h2><p>このページでは、次の内容を学びました。</p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> ブロックの基本機能</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> すべてのブロック面にテクスチャを適用する方法</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 面ごとにテクスチャを適用する方法</li></ul><p>...でも、まだ始まりにすぎません。下で他のことも見てみましょう！</p><h2 id="次は" tabindex="-1">次は？ <a class="header-anchor" href="#次は" aria-label="Permalink to &quot;次は？&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CardGrid, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Card, {
          title: "機能を追加する",
          image: "/assets/images/icons/crafting_table.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>利用できるブロック <a href="/blocks/block-components"${_scopeId2}>components</a> を学んで、独自のゲームプレイを作りましょう。</p><p${_scopeId2}><a href="/blocks/block-components#geometry"${_scopeId2}>geometry</a> コンポーネントを使って、ブロックにカスタムモデルを付けてみませんか？ あわせて <a href="/blocks/block-components#collision-box"${_scopeId2}>collision</a> と <a href="/blocks/block-components#selection-box"${_scopeId2}>selection</a> のボックスも調整して、見た目に合わせられます。</p>`);
            } else {
              return [
                createVNode("p", null, [
                  createTextVNode("利用できるブロック "),
                  createVNode("a", { href: "/blocks/block-components" }, "components"),
                  createTextVNode(" を学んで、独自のゲームプレイを作りましょう。")
                ]),
                createVNode("p", null, [
                  createVNode("a", { href: "/blocks/block-components#geometry" }, "geometry"),
                  createTextVNode(" コンポーネントを使って、ブロックにカスタムモデルを付けてみませんか？ あわせて "),
                  createVNode("a", { href: "/blocks/block-components#collision-box" }, "collision"),
                  createTextVNode(" と "),
                  createVNode("a", { href: "/blocks/block-components#selection-box" }, "selection"),
                  createTextVNode(" のボックスも調整して、見た目に合わせられます。")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "バリアントを作成する",
          image: "/assets/images/icons/levers.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>ブロックの <a href="/blocks/block-states"${_scopeId2}>states</a> と <a href="/blocks/block-permutations"${_scopeId2}>permutations</a> を使って、条件に応じてコンポーネントを有効化できます。</p><p${_scopeId2}>たとえば、カスタムのタンクブロックに液体の深さレベルを追加し、複数種類の液体に対応させることができます。</p>`);
            } else {
              return [
                createVNode("p", null, [
                  createTextVNode("ブロックの "),
                  createVNode("a", { href: "/blocks/block-states" }, "states"),
                  createTextVNode(" と "),
                  createVNode("a", { href: "/blocks/block-permutations" }, "permutations"),
                  createTextVNode(" を使って、条件に応じてコンポーネントを有効化できます。")
                ]),
                createVNode("p", null, "たとえば、カスタムのタンクブロックに液体の深さレベルを追加し、複数種類の液体に対応させることができます。")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "バニラを再現する",
          image: "/assets/images/icons/diamond_ore.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>既存ブロックの完全再現をまとめたものを、<strong${_scopeId2}>Vanilla Re-Creations</strong> カテゴリでいくつか確認できます。</p><p${_scopeId2}>まずは <a href="/blocks/custom-glass-blocks"${_scopeId2}>custom glass blocks</a> から始めて、<a href="/blocks/block-components#material-instances"${_scopeId2}>material instances</a> を使ってみましょう！</p>`);
            } else {
              return [
                createVNode("p", null, [
                  createTextVNode("既存ブロックの完全再現をまとめたものを、"),
                  createVNode("strong", null, "Vanilla Re-Creations"),
                  createTextVNode(" カテゴリでいくつか確認できます。")
                ]),
                createVNode("p", null, [
                  createTextVNode("まずは "),
                  createVNode("a", { href: "/blocks/custom-glass-blocks" }, "custom glass blocks"),
                  createTextVNode(" から始めて、"),
                  createVNode("a", { href: "/blocks/block-components#material-instances" }, "material instances"),
                  createTextVNode(" を使ってみましょう！")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Card, {
            title: "機能を追加する",
            image: "/assets/images/icons/crafting_table.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createTextVNode("利用できるブロック "),
                createVNode("a", { href: "/blocks/block-components" }, "components"),
                createTextVNode(" を学んで、独自のゲームプレイを作りましょう。")
              ]),
              createVNode("p", null, [
                createVNode("a", { href: "/blocks/block-components#geometry" }, "geometry"),
                createTextVNode(" コンポーネントを使って、ブロックにカスタムモデルを付けてみませんか？ あわせて "),
                createVNode("a", { href: "/blocks/block-components#collision-box" }, "collision"),
                createTextVNode(" と "),
                createVNode("a", { href: "/blocks/block-components#selection-box" }, "selection"),
                createTextVNode(" のボックスも調整して、見た目に合わせられます。")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "バリアントを作成する",
            image: "/assets/images/icons/levers.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createTextVNode("ブロックの "),
                createVNode("a", { href: "/blocks/block-states" }, "states"),
                createTextVNode(" と "),
                createVNode("a", { href: "/blocks/block-permutations" }, "permutations"),
                createTextVNode(" を使って、条件に応じてコンポーネントを有効化できます。")
              ]),
              createVNode("p", null, "たとえば、カスタムのタンクブロックに液体の深さレベルを追加し、複数種類の液体に対応させることができます。")
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "バニラを再現する",
            image: "/assets/images/icons/diamond_ore.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createTextVNode("既存ブロックの完全再現をまとめたものを、"),
                createVNode("strong", null, "Vanilla Re-Creations"),
                createTextVNode(" カテゴリでいくつか確認できます。")
              ]),
              createVNode("p", null, [
                createTextVNode("まずは "),
                createVNode("a", { href: "/blocks/custom-glass-blocks" }, "custom glass blocks"),
                createTextVNode(" から始めて、"),
                createVNode("a", { href: "/blocks/block-components#material-instances" }, "material instances"),
                createTextVNode(" を使ってみましょう！")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blocks/blocks-intro.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blocksIntro = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  blocksIntro as default
};
