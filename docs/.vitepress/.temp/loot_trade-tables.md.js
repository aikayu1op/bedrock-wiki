import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/images/loot/trade-tables/trading.png";
const __pageData = JSON.parse('{"title":"Trade Tables","description":"トレードテーブルは、entity のアイテム取引の基礎データを表します。","frontmatter":{"title":"Trade Tables","category":"Documentation","nav_order":2,"mentions":["Ciosciaa","SirLich","TheItsNameless","QuazChick"],"description":"トレードテーブルは、entity のアイテム取引の基礎データを表します。"},"headers":[{"level":2,"title":"統合","slug":"統合","link":"#統合","children":[]},{"level":2,"title":"構造","slug":"構造","link":"#構造","children":[{"level":3,"title":"階層","slug":"階層","link":"#階層","children":[{"level":4,"title":"経験条件","slug":"経験条件","link":"#経験条件","children":[]},{"level":4,"title":"Tier のアンロック","slug":"tier-のアンロック","link":"#tier-のアンロック","children":[{"level":5,"title":"初期 Tier の経験値","slug":"初期-tier-の経験値","link":"#初期-tier-の経験値","children":[]},{"level":5,"title":"Tier の固定","slug":"tier-の固定","link":"#tier-の固定","children":[]}]}]},{"level":3,"title":"取引グループ","slug":"取引グループ","link":"#取引グループ","children":[]},{"level":3,"title":"取引","slug":"取引","link":"#取引","children":[{"level":4,"title":"必要アイテムと提供アイテム","slug":"必要アイテムと提供アイテム","link":"#必要アイテムと提供アイテム","children":[]},{"level":4,"title":"取引回数制限","slug":"取引回数制限","link":"#取引回数制限","children":[]},{"level":4,"title":"プレイヤー経験値","slug":"プレイヤー経験値","link":"#プレイヤー経験値","children":[]},{"level":4,"title":"取引者経験値","slug":"取引者経験値","link":"#取引者経験値","children":[]}]},{"level":3,"title":"選択肢","slug":"選択肢","link":"#選択肢","children":[]},{"level":3,"title":"アイテム","slug":"アイテム","link":"#アイテム","children":[{"level":4,"title":"アイテム参照","slug":"アイテム参照","link":"#アイテム参照","children":[]},{"level":4,"title":"数量","slug":"数量","link":"#数量","children":[]},{"level":4,"title":"価格倍率","slug":"価格倍率","link":"#価格倍率","children":[{"level":5,"title":"変動要因","slug":"変動要因","link":"#変動要因","children":[]},{"level":5,"title":"コスト計算","slug":"コスト計算","link":"#コスト計算","children":[]}]},{"level":4,"title":"関数","slug":"関数","link":"#関数","children":[{"level":5,"title":"一般的に使えない関数","slug":"一般的に使えない関数","link":"#一般的に使えない関数","children":[]},{"level":5,"title":"必要アイテムでは使えない関数","slug":"必要アイテムでは使えない関数","link":"#必要アイテムでは使えない関数","children":[]},{"level":5,"title":"数量を変えるエンチャント関数","slug":"数量を変えるエンチャント関数","link":"#数量を変えるエンチャント関数","children":[{"level":6,"title":"レベル付きエンチャント関数","slug":"レベル付きエンチャント関数","link":"#レベル付きエンチャント関数","children":[]},{"level":6,"title":"取引用本エンチャント関数","slug":"取引用本エンチャント関数","link":"#取引用本エンチャント関数","children":[]}]},{"level":5,"title":"スポーンエッグの trader バインド","slug":"スポーンエッグの-trader-バインド","link":"#スポーンエッグの-trader-バインド","children":[]}]}]}]},{"level":2,"title":"上書き","slug":"上書き","link":"#上書き","children":[]}],"relativePath":"loot/trade-tables.md","filePath":"loot/trade-tables.md"}');
const _sfc_main = { name: "loot/trade-tables.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FolderView = resolveComponent("FolderView");
  const _component_Spoiler = resolveComponent("Spoiler");
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>トレードテーブルは、entity のアイテム取引の基礎データを表します。トレードテーブルは単独では機能せず、<a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Aeconomy_trade_table" target="_blank" rel="noreferrer">entity component</a> から参照する必要があります。トレードテーブルで使えるランダム化プロパティにより、同じトレードテーブルを参照していても、entity ごとに取引内容、アイテム数、コスト計算が変化することがあります。</p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><p>トレードテーブルには識別子もバージョン管理もありません。ルートテーブルと同様に、トレードテーブルは Molang をサポートせず、range object や <a href="#functions">functions</a> のような JSON 構造に依存します。別物ではありますが、トレードテーブルでもコメントは使えます。</p><h2 id="統合" tabindex="-1">統合 <a class="header-anchor" href="#統合" aria-label="Permalink to &quot;統合&quot;">​</a></h2><p>トレードテーブルは、ブロックやバイオームのような主要なアドオン要素ではありません。特定のフォルダに置くことで登録されるのではなく、entity から参照されます。トレードテーブルは behavior pack 内のどこに置いてもかまいません。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>カスタムのトレードテーブルを追加する際は、パック間の衝突を避けるため、<code class="shiki"><span>trading</span></code> フォルダの最上位に namespace フォルダ（ここでは <code class="shiki"><span>wiki</span></code> と呼んでいます）を入れることを推奨します。</p></div>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "BP/trading/wiki/minister.json",
    "BP/trading/economy_trades/cleric_trades.json"
  ] }, null, _parent));
  _push(`<p>以下の例は、この文書全体で参照・解説されます。</p>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Trade Table File Example" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`BP/trading/wiki/minister.json`);
            } else {
              return [
                createTextVNode("BP/trading/wiki/minister.json")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;tiers&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;groups&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;num_to_select&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;trades&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;wants&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                    &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:blessing_glyph&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                    &quot;quantity&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                        &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                        &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                    },</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                    &quot;price_multiplier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0.5</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                    &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:book&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                            ],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;gives&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                    &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:enchanted_book&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                    &quot;functions&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                            &quot;function&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;enchant_book_for_trading&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                            &quot;base_cost&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                            &quot;base_random_cost&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>12</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                            &quot;per_level_cost&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                            &quot;per_level_random_cost&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>8</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                    ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                            ],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;max_uses&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>7</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;trader_exp&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>3</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;wants&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                    &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:crystalline_spiritite&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                    &quot;quantity&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>32</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                    &quot;price_multiplier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0.125</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                            ],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;gives&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                    &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:exalted_blade&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                    &quot;functions&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                            &quot;function&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;enchant_with_levels&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                            &quot;treasure&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                            &quot;levels&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                                &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>15</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                                &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>25</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                            }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                    ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                            ],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;max_uses&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;reward_exp&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;trader_exp&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>8</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;total_exp_required&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>28</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;trades&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;wants&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;choice&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                    &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:sacred_stones&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                    &quot;quantity&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                        &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                        &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                    },</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                    &quot;price_multiplier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0.5</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                    &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:blessed_beads&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                    &quot;quantity&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                        &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                        &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>24</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                    },</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                    &quot;price_multiplier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0.5</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                            ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    ],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;gives&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:aeleon_jewels&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                            &quot;quantity&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                                &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                            }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                    ],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;max_uses&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}><span class="line-number"${_scopeId}>18</span><br${_scopeId}><span class="line-number"${_scopeId}>19</span><br${_scopeId}><span class="line-number"${_scopeId}>20</span><br${_scopeId}><span class="line-number"${_scopeId}>21</span><br${_scopeId}><span class="line-number"${_scopeId}>22</span><br${_scopeId}><span class="line-number"${_scopeId}>23</span><br${_scopeId}><span class="line-number"${_scopeId}>24</span><br${_scopeId}><span class="line-number"${_scopeId}>25</span><br${_scopeId}><span class="line-number"${_scopeId}>26</span><br${_scopeId}><span class="line-number"${_scopeId}>27</span><br${_scopeId}><span class="line-number"${_scopeId}>28</span><br${_scopeId}><span class="line-number"${_scopeId}>29</span><br${_scopeId}><span class="line-number"${_scopeId}>30</span><br${_scopeId}><span class="line-number"${_scopeId}>31</span><br${_scopeId}><span class="line-number"${_scopeId}>32</span><br${_scopeId}><span class="line-number"${_scopeId}>33</span><br${_scopeId}><span class="line-number"${_scopeId}>34</span><br${_scopeId}><span class="line-number"${_scopeId}>35</span><br${_scopeId}><span class="line-number"${_scopeId}>36</span><br${_scopeId}><span class="line-number"${_scopeId}>37</span><br${_scopeId}><span class="line-number"${_scopeId}>38</span><br${_scopeId}><span class="line-number"${_scopeId}>39</span><br${_scopeId}><span class="line-number"${_scopeId}>40</span><br${_scopeId}><span class="line-number"${_scopeId}>41</span><br${_scopeId}><span class="line-number"${_scopeId}>42</span><br${_scopeId}><span class="line-number"${_scopeId}>43</span><br${_scopeId}><span class="line-number"${_scopeId}>44</span><br${_scopeId}><span class="line-number"${_scopeId}>45</span><br${_scopeId}><span class="line-number"${_scopeId}>46</span><br${_scopeId}><span class="line-number"${_scopeId}>47</span><br${_scopeId}><span class="line-number"${_scopeId}>48</span><br${_scopeId}><span class="line-number"${_scopeId}>49</span><br${_scopeId}><span class="line-number"${_scopeId}>50</span><br${_scopeId}><span class="line-number"${_scopeId}>51</span><br${_scopeId}><span class="line-number"${_scopeId}>52</span><br${_scopeId}><span class="line-number"${_scopeId}>53</span><br${_scopeId}><span class="line-number"${_scopeId}>54</span><br${_scopeId}><span class="line-number"${_scopeId}>55</span><br${_scopeId}><span class="line-number"${_scopeId}>56</span><br${_scopeId}><span class="line-number"${_scopeId}>57</span><br${_scopeId}><span class="line-number"${_scopeId}>58</span><br${_scopeId}><span class="line-number"${_scopeId}>59</span><br${_scopeId}><span class="line-number"${_scopeId}>60</span><br${_scopeId}><span class="line-number"${_scopeId}>61</span><br${_scopeId}><span class="line-number"${_scopeId}>62</span><br${_scopeId}><span class="line-number"${_scopeId}>63</span><br${_scopeId}><span class="line-number"${_scopeId}>64</span><br${_scopeId}><span class="line-number"${_scopeId}>65</span><br${_scopeId}><span class="line-number"${_scopeId}>66</span><br${_scopeId}><span class="line-number"${_scopeId}>67</span><br${_scopeId}><span class="line-number"${_scopeId}>68</span><br${_scopeId}><span class="line-number"${_scopeId}>69</span><br${_scopeId}><span class="line-number"${_scopeId}>70</span><br${_scopeId}><span class="line-number"${_scopeId}>71</span><br${_scopeId}><span class="line-number"${_scopeId}>72</span><br${_scopeId}><span class="line-number"${_scopeId}>73</span><br${_scopeId}><span class="line-number"${_scopeId}>74</span><br${_scopeId}><span class="line-number"${_scopeId}>75</span><br${_scopeId}><span class="line-number"${_scopeId}>76</span><br${_scopeId}><span class="line-number"${_scopeId}>77</span><br${_scopeId}><span class="line-number"${_scopeId}>78</span><br${_scopeId}><span class="line-number"${_scopeId}>79</span><br${_scopeId}><span class="line-number"${_scopeId}>80</span><br${_scopeId}><span class="line-number"${_scopeId}>81</span><br${_scopeId}><span class="line-number"${_scopeId}>82</span><br${_scopeId}><span class="line-number"${_scopeId}>83</span><br${_scopeId}><span class="line-number"${_scopeId}>84</span><br${_scopeId}><span class="line-number"${_scopeId}>85</span><br${_scopeId}><span class="line-number"${_scopeId}>86</span><br${_scopeId}><span class="line-number"${_scopeId}>87</span><br${_scopeId}><span class="line-number"${_scopeId}>88</span><br${_scopeId}><span class="line-number"${_scopeId}>89</span><br${_scopeId}><span class="line-number"${_scopeId}>90</span><br${_scopeId}><span class="line-number"${_scopeId}>91</span><br${_scopeId}><span class="line-number"${_scopeId}>92</span><br${_scopeId}><span class="line-number"${_scopeId}>93</span><br${_scopeId}><span class="line-number"${_scopeId}>94</span><br${_scopeId}><span class="line-number"${_scopeId}>95</span><br${_scopeId}><span class="line-number"${_scopeId}>96</span><br${_scopeId}><span class="line-number"${_scopeId}>97</span><br${_scopeId}><span class="line-number"${_scopeId}>98</span><br${_scopeId}><span class="line-number"${_scopeId}>99</span><br${_scopeId}><span class="line-number"${_scopeId}>100</span><br${_scopeId}><span class="line-number"${_scopeId}>101</span><br${_scopeId}><span class="line-number"${_scopeId}>102</span><br${_scopeId}><span class="line-number"${_scopeId}>103</span><br${_scopeId}><span class="line-number"${_scopeId}>104</span><br${_scopeId}><span class="line-number"${_scopeId}>105</span><br${_scopeId}><span class="line-number"${_scopeId}>106</span><br${_scopeId}><span class="line-number"${_scopeId}>107</span><br${_scopeId}><span class="line-number"${_scopeId}>108</span><br${_scopeId}><span class="line-number"${_scopeId}>109</span><br${_scopeId}><span class="line-number"${_scopeId}>110</span><br${_scopeId}><span class="line-number"${_scopeId}>111</span><br${_scopeId}><span class="line-number"${_scopeId}>112</span><br${_scopeId}><span class="line-number"${_scopeId}>113</span><br${_scopeId}><span class="line-number"${_scopeId}>114</span><br${_scopeId}><span class="line-number"${_scopeId}>115</span><br${_scopeId}><span class="line-number"${_scopeId}>116</span><br${_scopeId}><span class="line-number"${_scopeId}>117</span><br${_scopeId}><span class="line-number"${_scopeId}>118</span><br${_scopeId}><span class="line-number"${_scopeId}>119</span><br${_scopeId}><span class="line-number"${_scopeId}>120</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode(_component_CodeHeader, null, {
            default: withCtx(() => [
              createTextVNode("BP/trading/wiki/minister.json")
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
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "tiers"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "groups"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "num_to_select"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "trades"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "wants"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                    "item"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:blessing_glyph"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                    "quantity"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                        "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "2"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                        "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                    "price_multiplier"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0.5")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                    "item"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:book"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                            ],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "gives"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                    "item"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:enchanted_book"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                    "functions"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                            "function"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"enchant_book_for_trading"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                            "base_cost"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "4"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                            "base_random_cost"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "12"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                            "per_level_cost"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "4"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                            "per_level_random_cost"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "8")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                    ]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                            ],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "max_uses"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "7"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "trader_exp"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "3")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "wants"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                    "item"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:crystalline_spiritite"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                    "quantity"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "32"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                    "price_multiplier"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0.125")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                            ],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "gives"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                    "item"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:exalted_blade"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                    "functions"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                            "function"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"enchant_with_levels"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                            "treasure"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "true"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                            "levels"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                                "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "15"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                                "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "25")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                            }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                    ]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                            ],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "max_uses"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "2"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "reward_exp"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "trader_exp"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "8")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    ]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            ]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "total_exp_required"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "28"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "trades"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "wants"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "choice"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                    "item"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:sacred_stones"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                    "quantity"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                        "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "4"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                        "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                    "price_multiplier"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0.5")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                    "item"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:blessed_beads"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                    "quantity"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                        "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                        "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "24")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                    "price_multiplier"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0.5")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                            ]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    ],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "gives"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "item"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:aeleon_jewels"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                            "quantity"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                "min"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "4"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                                "max"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                            }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                    ],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "max_uses"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            ]")
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
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "19"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "20"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "21"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "22"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "23"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "24"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "25"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "26"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "27"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "28"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "29"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "30"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "31"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "32"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "33"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "34"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "35"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "36"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "37"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "38"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "39"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "40"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "41"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "42"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "43"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "44"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "45"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "46"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "47"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "48"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "49"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "50"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "51"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "52"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "53"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "54"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "55"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "56"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "57"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "58"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "59"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "60"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "61"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "62"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "63"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "64"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "65"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "66"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "67"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "68"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "69"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "70"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "71"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "72"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "73"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "74"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "75"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "76"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "77"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "78"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "79"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "80"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "81"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "82"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "83"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "84"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "85"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "86"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "87"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "88"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "89"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "90"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "91"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "92"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "93"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "94"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "95"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "96"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "97"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "98"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "99"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "100"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "101"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "102"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "103"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "104"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "105"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "106"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "107"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "108"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "109"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "110"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "111"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "112"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "113"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "114"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "115"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "116"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "117"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "118"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "119"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "120"),
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="構造" tabindex="-1">構造 <a class="header-anchor" href="#構造" aria-label="Permalink to &quot;構造&quot;">​</a></h2><p>トレードテーブルは、バージョンなし・名前空間なしのオブジェクトとして表されます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#`);
      } else {
        return [
          createTextVNode("#")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">	&quot;tiers&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">		{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">			&quot;groups&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#F44747", "--shiki-light": "#CD3131" })}">…</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">		},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">		{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">			&quot;total_exp_required&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">28</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">			&quot;trades&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#F44747", "--shiki-light": "#CD3131" })}">…</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">		}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">	]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>トレードテーブルは <a href="#tiers">tiers</a> を使って取引の構成を整理します。tier は必須の最上位 <code class="shiki"><span>&quot;tiers&quot;</span></code> 配列プロパティで定義します。tier は取引画面に順番どおりに表示されます。</p><h3 id="階層" tabindex="-1">階層 <a class="header-anchor" href="#階層" aria-label="Permalink to &quot;階層&quot;">​</a></h3><p>tier はアンロック可能な取引のまとまりとして機能し、トレードテーブル内で最上位のグループ単位になります。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/tiers/0`);
      } else {
        return [
          createTextVNode("#/tiers/0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">	&quot;groups&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#F44747", "--shiki-light": "#CD3131" })}">…</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/tiers/1`);
      } else {
        return [
          createTextVNode("#/tiers/1")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">	&quot;total_exp_required&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">28</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">	&quot;trades&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#F44747", "--shiki-light": "#CD3131" })}">…</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>各 tier は、<a href="#trades">trades</a> の集合（<code class="shiki"><span>&quot;trades&quot;</span></code>）または <a href="#groups">trade groups</a>（<code class="shiki"><span>&quot;groups&quot;</span></code>）のどちらかを表す必要があります。これらのうち少なくとも 1 つが必要です。trades を指定した場合、その tier にはそれらすべての取引が表示されます。代わりに groups を指定した場合、その tier では列挙されたすべての group から取引が使われます。各 group がどの取引を選ぶかは、その設定に依存します。</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>tier に <code class="shiki"><span>&quot;trades&quot;</span></code> と <code class="shiki"><span>&quot;groups&quot;</span></code> の両方がある場合、<code class="shiki"><span>trades</span></code> の記述は無視され、groups が優先されます。</p></div><p>tier 内では、取引は取引画面に順番どおりに表示されます。取引が group 化されている場合、その group も定義順に表示され、group ごと、さらにその中の trade ごとに整理されます。ある group の取引は他の group の取引と見た目上区別されません。視覚的に分かれて識別できるのは tier のみです。</p><h4 id="経験条件" tabindex="-1">経験条件 <a class="header-anchor" href="#経験条件" aria-label="Permalink to &quot;経験条件&quot;">​</a></h4><p>tier は、<em>trader</em> が経験値のしきい値を満たしたときにアンロックされます。各 trader には固有の累積経験値があり、プレイヤーとの取引で増えていきます。取引ごとに得られる経験値量は、その取引の <a href="#trader-experience">experience reward</a> に依存します。オプションの <code class="shiki"><span>&quot;total_exp_required&quot;</span></code> プロパティは、その tier を解放するために trader に必要な経験値を示します。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/tiers/1/`);
      } else {
        return [
          createTextVNode("#/tiers/1/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;total_exp_required&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">28</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>既定では、必要経験値は trade tier のインデックスに設定されます。つまり、2 番目の tier には trader に 1 XP が必要で、3 番目の tier には 2 XP が必要です。最初の tier は常に自動でアンロックされ、<a href="#initial-tier-experience">設定された経験値しきい値に関係なく</a> 有効になります。</p><h4 id="tier-のアンロック" tabindex="-1">Tier のアンロック <a class="header-anchor" href="#tier-のアンロック" aria-label="Permalink to &quot;Tier のアンロック&quot;">​</a></h4><p>tier は順番にアンロックされます。新しい tier がアンロックされると、続く tier も現在の XP で条件を満たしているか追加で確認されます。満たしていればアンロックされ、その次の tier も同様に確認されます。tier のアンロックは、付与された trader 経験値で複数の tier を解放できる場合や、<a href="#initial-tier-experience">指定した初期経験値</a> がゲーム側で正しく更新された結果として後続 tier が解放される場合に行われます。</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>tier は 1 つずつ確認されるため、ある tier の XP 条件を満たさずにアンロックが止まると、その後ろの tier は、それらの条件を満たしていても確認されません。</p></div><h5 id="初期-tier-の経験値" tabindex="-1">初期 Tier の経験値 <a class="header-anchor" href="#初期-tier-の経験値" aria-label="Permalink to &quot;初期 Tier の経験値&quot;">​</a></h5><p>最初の tier の経験値しきい値が 0 以外の場合は特別な扱いになります。負の値なら、<em>すべて</em> の tier がアンロックされます。0 より大きい場合は、trader の初期経験値がその値に設定されます。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>初期 tier の経験値しきい値が 0 以外の場合、trader の取引内容を実際のトレードテーブルに反映するには手動更新が必要です。この場合、取引を 1 回行うか、取引画面を閉じて再度開くと正しく更新されます。最初は、他の tier がアンロックされるはずでも、最初の tier だけが利用可能になります。</p></div><h5 id="tier-の固定" tabindex="-1">Tier の固定 <a class="header-anchor" href="#tier-の固定" aria-label="Permalink to &quot;Tier の固定&quot;">​</a></h5><p><a href="#initial-tier-experience">初期 tier</a> を除けば、取引を tier で固定できます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Example Tier Freeze`);
      } else {
        return [
          createTextVNode("Example Tier Freeze")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;total_exp_required&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>前の tier がアンロックされると、負の XP 要件を持つ tier は <a href="#tier-unlocking">期待どおり</a> すぐにアンロックされます。ただし、プレイヤーがその先の tier に進むことはできません。</p><h3 id="取引グループ" tabindex="-1">取引グループ <a class="header-anchor" href="#取引グループ" aria-label="Permalink to &quot;取引グループ&quot;">​</a></h3><p>取引グループは、個々の trader がその階層でどの取引を使うかをランダムに選ぶ方法です。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/tiers/0/groups/0`);
      } else {
        return [
          createTextVNode("#/tiers/0/groups/0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">	&quot;num_to_select&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">	&quot;trades&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#F44747", "--shiki-light": "#CD3131" })}">…</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>選択対象の取引は、必須の <code class="shiki"><span>&quot;trades&quot;</span></code> 配列で指定します。各エントリーは <a href="#trades">trade</a> です。オプションの <code class="shiki"><span>&quot;num_to_select&quot;</span></code> プロパティで示した数だけの取引が、各 trader のその tier で選ばれます。<code class="shiki"><span>&quot;num_to_select&quot;</span></code> が <code class="shiki"><span>0</span></code> の場合は、すべての取引が選ばれます。これが既定値です。</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>trade group を入れ子にして、より高度な確率選択を行うことはできません。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>現在は、ランダム選択数を指定することはできません。取引ごとの重み付けにも対応していませんが、配列内で取引を重複させることで、選ばれる可能性を実質的に高められます。</p></div><h3 id="取引" tabindex="-1">取引 <a class="header-anchor" href="#取引" aria-label="Permalink to &quot;取引&quot;">​</a></h3><p>取引は、trader とプレイヤーの間の交換を表します。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/tiers/0/trades/1`);
      } else {
        return [
          createTextVNode("#/tiers/0/trades/1")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">	&quot;wants&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#F44747", "--shiki-light": "#CD3131" })}">…</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">	&quot;gives&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#F44747", "--shiki-light": "#CD3131" })}">…</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">	&quot;max_uses&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">	&quot;reward_exp&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">	&quot;trader_exp&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>取引スロットに一度選ばれた trade は、根本的には変化しません。特定の状況で変更できるのは <a href="#quantity">quantity</a> だけです。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>個別の trade 定義は、取引そのもの以外にも影響します。たとえば、プレイヤーがアイテムを持っていることに応じて、entity が <a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.trade_interest" target="_blank" rel="noreferrer">特定のアイテムを持つ</a> ことがあります。</p></div><h4 id="必要アイテムと提供アイテム" tabindex="-1">必要アイテムと提供アイテム <a class="header-anchor" href="#必要アイテムと提供アイテム" aria-label="Permalink to &quot;必要アイテムと提供アイテム&quot;">​</a></h4><p>基本の取引単位は <code class="shiki"><span>&quot;wants&quot;</span></code> と <code class="shiki"><span>&quot;gives&quot;</span></code> で定義します。プレイヤーは <code class="shiki"><span>&quot;wants&quot;</span></code> を渡して <code class="shiki"><span>&quot;gives&quot;</span></code> を受け取ります。どちらのプロパティも配列で、必須です。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/tiers/0/trades/1/`);
      } else {
        return [
          createTextVNode("#/tiers/0/trades/1/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;wants&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#F44747", "--shiki-light": "#CD3131" })}">…</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;gives&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#F44747", "--shiki-light": "#CD3131" })}">…</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>1 つの trade には 1 つから 2 つまでの必要アイテムを含められ、提供アイテムはちょうど 1 つでなければなりません。どちらの配列の各エントリーも、<a href="#items">item</a> または <a href="#choices">choice</a> のどちらかにできます。</p><p>取引画面は、必要アイテムの数に応じて表示を変えます。場合によっては、<a href="#quantity-modifying-enchantment-functions">quantity-modifying enchantment functions</a> のような一部の取引修飾は、最初の必要アイテムにしか影響しません。</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>item と choice の両方を含むオブジェクトをエントリーとして与えた場合、choice の部分だけが考慮され、item の部分は無視されます。</p></div><h4 id="取引回数制限" tabindex="-1">取引回数制限 <a class="header-anchor" href="#取引回数制限" aria-label="Permalink to &quot;取引回数制限&quot;">​</a></h4><p>trader は通常、個別の trade を一定回数だけ行うと、補充が必要になります。この回数は数値 <code class="shiki"><span>&quot;max_uses&quot;</span></code> プロパティで設定します。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/tiers/0/trades/1/`);
      } else {
        return [
          createTextVNode("#/tiers/0/trades/1/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;max_uses&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>取引回数制限は trade ごとに個別です。1 つの trade で在庫が減っても、必要アイテムと提供アイテムが同じ別の trade には影響しません。既定では、trader は各 trade を 7 回行うと補充が必要になります。</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>補充の処理は entity component（<code class="shiki"><span>&quot;minecraft:trade_resupply&quot;: {}</span></code>）で行われます。</p></div><p>値に <code class="shiki"><span>0</span></code> を指定すると、その trade は取引画面に表示されますが、使用はできません。負の値を指定すると、その trade は補充不要になり、無限に使えます。</p><h4 id="プレイヤー経験値" tabindex="-1">プレイヤー経験値 <a class="header-anchor" href="#プレイヤー経験値" aria-label="Permalink to &quot;プレイヤー経験値&quot;">​</a></h4><p><em>player</em> 向けの経験値オーブは、オプションの Boolean <code class="shiki"><span>&quot;reward_exp&quot;</span></code> プロパティで無効化できます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/tiers/0/trades/1/`);
      } else {
        return [
          createTextVNode("#/tiers/0/trades/1/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;reward_exp&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>既定では <code class="shiki"><span>&quot;reward_exp&quot;</span></code> は true で、プレイヤーは取引で一定の経験値を受け取ります。受け取る経験値量は、トレードテーブル内では変更できません。</p><h4 id="取引者経験値" tabindex="-1">取引者経験値 <a class="header-anchor" href="#取引者経験値" aria-label="Permalink to &quot;取引者経験値&quot;">​</a></h4><p>プレイヤーが取引を確定すると、trader が経験値を得ることがあります。このプロパティは、<a href="#tiers">tiers</a> を使った取引進行システムを作るうえで重要です。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/tiers/0/trades/1/`);
      } else {
        return [
          createTextVNode("#/tiers/0/trades/1/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;trader_exp&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><em>trader</em> に与える経験値量は、オプションの数値プロパティ <code class="shiki"><span>&quot;trader_exp&quot;</span></code> で指定します。既定では trader は 1 XP を受け取ります。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>線形でない階層配置では、上位階層ほど trader 経験値を増やすのが一般的です。そうすると、下位階層の取引は上位階層の取引よりレベル上昇への影響が小さくなります。</p></div><h3 id="選択肢" tabindex="-1">選択肢 <a class="header-anchor" href="#選択肢" aria-label="Permalink to &quot;選択肢&quot;">​</a></h3><p>選択肢は、取引に使うアイテムをランダムに選ぶためのシンプルなオブジェクトです。trader の各インスタンスごとに、その trade 用のアイテムが一様ランダムで 1 つ選ばれます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/tiers/1/trades/0/wants/0`);
      } else {
        return [
          createTextVNode("#/tiers/1/trades/0/wants/0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">	&quot;choice&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">		{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">			&quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:sacred_stones&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#F44747", "--shiki-light": "#CD3131" })}">			…</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">		},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">		{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">			&quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:blessed_beads&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#F44747", "--shiki-light": "#CD3131" })}">			…</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">		}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">	]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>選択肢には、必須の <code class="shiki"><span>&quot;choice&quot;</span></code> 配列プロパティだけが含まれます。配列内の各エントリーは <a href="#items">item</a> です。少なくとも 1 つのアイテムが必要です。</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>選択肢を入れ子にすることはできません。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>現在、特定のアイテムの重みを指定する方法はありませんが、配列内でアイテムを重複させることで、選ばれる確率を実質的に高められます。</p></div><h3 id="アイテム" tabindex="-1">アイテム <a class="header-anchor" href="#アイテム" aria-label="Permalink to &quot;アイテム&quot;">​</a></h3><p>アイテムは trade の対象です。必要アイテムと提供アイテムで定義は共通ですが、使う場所によっていくつかの意味合いが変わります。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/tiers/1/trades/0/wants/0/choice/0`);
      } else {
        return [
          createTextVNode("#/tiers/1/trades/0/wants/0/choice/0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:sacred_stones&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;quantity&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">6</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;price_multiplier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0.5</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/tiers/0/groups/0/trades/1/gives/0`);
      } else {
        return [
          createTextVNode("#/tiers/0/groups/0/trades/1/gives/0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:exalted_blade&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;functions&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;function&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;enchant_with_levels&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;treasure&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;levels&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">15</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">25</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="アイテム参照" tabindex="-1">アイテム参照 <a class="header-anchor" href="#アイテム参照" aria-label="Permalink to &quot;アイテム参照&quot;">​</a></h4><p>trade 内では、必須の <code class="shiki"><span>&quot;item&quot;</span></code> 文字列プロパティを使ってアイテムを参照します。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/tiers/1/trades/0/wants/0/choice/0/`);
      } else {
        return [
          createTextVNode("#/tiers/1/trades/0/wants/0/choice/0/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:exalted_blade&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>item reference は、アイテムの識別子を指している必要があります。data 値は接尾辞としてその場で指定できます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Example Data Assignment`);
      } else {
        return [
          createTextVNode("Example Data Assignment")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:log:2&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>data 値は <code class="shiki"><span>set_data</span></code> 関数でも設定できますし、こちらのほうがランダム化もしやすいです。</p></div><p><em>必要アイテム</em> に data 値が指定されていない場合、その識別子を持つ任意のアイテムを取引できます。<em>提供アイテム</em> に data 値が指定されていない場合は、data 値 <code class="shiki"><span>0</span></code> が既定です。</p><h4 id="数量" tabindex="-1">数量 <a class="header-anchor" href="#数量" aria-label="Permalink to &quot;数量&quot;">​</a></h4><p>オプションの <code class="shiki"><span>&quot;quantity&quot;</span></code> プロパティは、trade で必要または提供されるアイテム数を指定します。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/tiers/1/trades/0/wants/0/choice/0/`);
      } else {
        return [
          createTextVNode("#/tiers/1/trades/0/wants/0/choice/0/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;quantity&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">	&quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">	&quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">6</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>quantity は、上の例のように整数リテラルまたは range object で指定できます。range object の場合は、指定範囲内から両端を含めて一様ランダムに値が選ばれます。quantity を指定しない場合、アイテム数の既定値は 1 です。</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>quantity は常にスタックサイズの範囲内に収まり、trade の 1 スロットにしか影響しません。たとえば、1 スロットで 100 枚の木材を要求することはできません（ただし <code class="shiki"><span>&quot;wants&quot;</span></code> を 2 つ使えば可能です）。また、積み重ねられない剣を 1 回の trade で 2 本渡すこともできません。</p></div><h4 id="価格倍率" tabindex="-1">価格倍率 <a class="header-anchor" href="#価格倍率" aria-label="Permalink to &quot;価格倍率&quot;">​</a></h4><p>価格倍率は、特定のイベントによってアイテムの <a href="#quantity">基本数量</a> がどう変わるかを決めます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/tiers/1/trades/0/wants/0/choice/0/`);
      } else {
        return [
          createTextVNode("#/tiers/1/trades/0/wants/0/choice/0/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;price_multiplier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0.5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code class="shiki"><span>&quot;price_multiplier&quot;</span></code> は任意で、既定値は <code class="shiki"><span>0</span></code> です。価格倍率を使う仕組みには、現行のものと旧式の 2 種類があります。現行システムでは、指定された価格倍率は trade の <em>最初の必要アイテム</em> にしか影響しません。旧式システムでは、任意の <em>必要アイテム</em> に影響します。</p><h5 id="変動要因" tabindex="-1">変動要因 <a class="header-anchor" href="#変動要因" aria-label="Permalink to &quot;変動要因&quot;">​</a></h5><p>trade 価格は、いくつかの要因で変動します。</p><ul><li>需要の増加。複数回の <a href="#trade-limit">resupply</a> をまたいで同じアイテムを取引したときに発生します。</li><li>直近で治療されたこと。たとえば zombie villager から villager を治療した場合などです。</li><li>直近で治療された trader の <em>近く</em> にいること</li><li>&quot;Hero of the Village&quot; の影響を受けているプレイヤーとの取引</li></ul><p>価格倍率は、固定値を使う新しい価格計算式でプレイヤーが &quot;Hero of the Village&quot; を持っている場合を除き、これらすべての状況に影響します。</p><h5 id="コスト計算" tabindex="-1">コスト計算 <a class="header-anchor" href="#コスト計算" aria-label="Permalink to &quot;コスト計算&quot;">​</a></h5><p>価格倍率は、取引の需要が増えたときのコスト増加に直接かつ専ら影響します。既定では需要は 0 であり、その値を下回ることはありません。取引の需要は累積し、その取引が <a href="#trade-limit">使い切られた</a> 後の補充で増え、補充の間に取引が行われなかった場合は減少します。</p><p>需要だけによるコスト増加は線形で、需要が 1 増えるごとに、価格倍率で与えられる基本コストの一部が加算されます。次の変数を仮定すると…</p><table tabindex="0"><thead><tr><th>変数</th><th>意味</th></tr></thead><tbody><tr><td><em>c</em></td><td>総コスト</td></tr><tr><td><em>p</em></td><td>基本コスト。<a href="#quantity-modifying-enchantment-functions">quantity overrides</a> を含む</td></tr><tr><td><em>m</em></td><td>価格倍率</td></tr><tr><td><em>d</em></td><td>現在の需要</td></tr></tbody></table><p>…他の要因がない場合、次の式で総コストを計算できます。</p><p><em>c</em> = <em>p</em> × (1 + <em>m</em> * <em>d</em>)</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>他の状況では、コスト計算に entity のプロパティも使われますが、ここでは扱いません。</p></div><p>価格倍率が <code class="shiki"><span>0</span></code> の場合、ほとんどの状況で quantity は一定のままです（ただし、新しい価格計算式を使う &quot;Hero of the Village&quot; 修正は例外です）。</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>負の価格倍率も指定できますが、<a href="#trade-limit">demand</a> による増加コストには影響せず、実質的に <code class="shiki"><span>0</span></code> に丸められます。ただし、trader が最近治療された場合、最近治療された別の trader の近くにいる場合、または &quot;Hero of the Village&quot; 付きのプレイヤーとの取引で <em>旧価格計算式</em> を使う場合には、負の値でも価格に影響します。</p></div><h4 id="関数" tabindex="-1">関数 <a class="header-anchor" href="#関数" aria-label="Permalink to &quot;関数&quot;">​</a></h4><p>関数は、アイテムの性質を変更するために使います。オプションの <code class="shiki"><span>&quot;functions&quot;</span></code> 配列には、そのアイテムに適用する関数の集まりを入れます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/tiers/0/groups/0/trades/1/gives/0/`);
      } else {
        return [
          createTextVNode("#/tiers/0/groups/0/trades/1/gives/0/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;functions&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">	{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">		&quot;function&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;enchant_with_levels&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">		&quot;treasure&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">		&quot;levels&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">			&quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">15</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">			&quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">25</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">		}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">	}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>トレードテーブルで使う関数はルートテーブルと共通です。必要アイテムの宣言で使うと（<a href="#unusable-wanted-item-functions">使用可能な範囲</a> で）、必要アイテムの性質を制限する役割になります。この種の関数制限は最初の必要アイテムにしか影響しません。</p><h5 id="一般的に使えない関数" tabindex="-1">一般的に使えない関数 <a class="header-anchor" href="#一般的に使えない関数" aria-label="Permalink to &quot;一般的に使えない関数&quot;">​</a></h5><p>一般に、関数は取引でも問題なく動作します。ただし次のものはトレードテーブルのどこでも動作しません。</p><ul><li><code class="shiki"><span>set_count</span></code></li><li><code class="shiki"><span>furnace_smelt</span></code></li><li><code class="shiki"><span>looting_enchant</span></code></li><li><code class="shiki"><span>trader_material_type</span></code></li></ul><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p><code class="shiki"><span>set_count</span></code> の機能は <a href="#quantity">quantity property</a> で置き換えられています。</p><p><code class="shiki"><span>trader_material_type</span></code> はバニラの 1 つのトレードテーブルにしか登場しません。理論上は entity の mark variant に基づいて item の data 値を設定するはずですが、カスタム用途では使えないようです。</p></div><h5 id="必要アイテムでは使えない関数" tabindex="-1">必要アイテムでは使えない関数 <a class="header-anchor" href="#必要アイテムでは使えない関数" aria-label="Permalink to &quot;必要アイテムでは使えない関数&quot;">​</a></h5><p>一般に、必要アイテムの属性を関数で指定すると、提示されるアイテムはその属性に一致している必要があります。ただし、次の関数は厳密な一致を強制しないため、必要アイテムでは無意味です。</p><ul><li><code class="shiki"><span>set_name</span></code></li><li><code class="shiki"><span>set_lore</span></code></li><li><code class="shiki"><span>set_damage</span></code></li><li><code class="shiki"><span>set_book_contents</span></code></li><li><code class="shiki"><span>random_dye</span></code></li><li><code class="shiki"><span>fill_container</span></code></li></ul><h5 id="数量を変えるエンチャント関数" tabindex="-1">数量を変えるエンチャント関数 <a class="header-anchor" href="#数量を変えるエンチャント関数" aria-label="Permalink to &quot;数量を変えるエンチャント関数&quot;">​</a></h5><p>実際には 2 つの関数が、<em>提供アイテム</em> として使われる場合に最初の <em>必要アイテム</em> の quantity を設定し、最初の必要アイテムに指定された <a href="#quantity">quantity</a> を上書きすることがあります。</p><ul><li><code class="shiki"><span>enchant_with_levels</span></code></li><li><code class="shiki"><span>enchant_book_for_trading</span></code></li></ul><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>quantity を上書きしても、すべての <a href="#fluctuation-factors">modified trade prices</a> は正しく適応します。これらの関数は、旧コスト計算式を使っていても、2 つ目の必要アイテムの quantity には影響しません。これらの関数を <em>必要アイテム</em> に使った場合、quantity は上書きされません。</p></div><h6 id="レベル付きエンチャント関数" tabindex="-1">レベル付きエンチャント関数 <a class="header-anchor" href="#レベル付きエンチャント関数" aria-label="Permalink to &quot;レベル付きエンチャント関数&quot;">​</a></h6><p><code class="shiki"><span>enchant_with_levels</span></code> は、エンチャントテーブルで付与したかのように、アイテムにランダムでエンチャントを付けます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/tiers/0/groups/0/trades/1/gives/0/functions/0`);
      } else {
        return [
          createTextVNode("#/tiers/0/groups/0/trades/1/gives/0/functions/0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;function&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;enchant_with_levels&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;treasure&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;levels&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;min&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">5</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;max&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">25</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>最初の必要アイテムのコストは、この関数で選ばれたレベル値（負になる場合は <code class="shiki"><span>0</span></code> に切り上げ）を元の <a href="#quantity">quantity</a> に加算して決まります。レベル値はオプションの <code class="shiki"><span>&quot;levels&quot;</span></code> プロパティから算出されます。数値リテラルを使った場合は、その値が選ばれたレベル値になります。上のように range object を使う場合は、指定した最小値と最大値の間から両端を含めて乱数を振ります。その乱数が選ばれたレベル値になります。上の例では、最初の必要アイテムのコストは 5 増えて 25 になります。</p><h6 id="取引用本エンチャント関数" tabindex="-1">取引用本エンチャント関数 <a class="header-anchor" href="#取引用本エンチャント関数" aria-label="Permalink to &quot;取引用本エンチャント関数&quot;">​</a></h6><p><code class="shiki"><span>enchant_book_for_trading</span></code> は、取引用にのみ使うことを意図したものです。各プロパティの組み合わせで、最初の必要アイテムのコストが決まります。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/tiers/0/groups/0/trades/0/gives/0/functions/0`);
      } else {
        return [
          createTextVNode("#/tiers/0/groups/0/trades/0/gives/0/functions/0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;function&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;enchant_book_for_trading&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;base_cost&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;base_random_cost&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">12</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;per_level_cost&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;per_level_random_cost&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>この関数は本に使うことだけを想定しており、宝エンチャントを含むすべての呪い以外のエンチャントから、1 つのエンチャントを振ります。この関数は現在のアイテムに合わせて調整されません。本に使えばエンチャントは必ず成功しますが、他のエンチャント可能なものに使うと、成功しない場合があります。</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>おそらく失敗時には、そのアイテムに適用できないエンチャントが選ばれ、その無関係なエンチャントの適用に失敗するため、結果として無エンチャントのアイテムになります。したがって、本以外へのエンチャント成功率は、そのアイテムに適用可能なエンチャント数に比例します。</p></div><p>総コストは、振られたエンチャントとは独立した基本コストと、ランダムロールに依存するレベルごとのコストから決まります。コスト設定プロパティはすべて任意です。</p><p>基本コストは、開始値とランダムロールを足し合わせて計算されます。開始値は <code class="shiki"><span>&quot;base_cost&quot;</span></code> で指定し、既定値は <code class="shiki"><span>2</span></code> です。ランダムロールは <code class="shiki"><span>&quot;base_random_cost&quot;</span></code> で指定し、既定値は <code class="shiki"><span>4</span></code> です。trader 用の trade が生成されるとき、0 から <code class="shiki"><span>&quot;base_random_cost&quot;</span></code> までの間から両端を含めて一様ランダムに値が選ばれます。</p><p>選ばれたエンチャントの各レベルについても、基本コスト計算と同じ処理が行われます。固定値に、一様ランダムに選ばれた値を加えます。この場合、基本のレベルごとのコストは <code class="shiki"><span>&quot;per_level_cost&quot;</span></code> で指定し、既定値は <code class="shiki"><span>3</span></code> です。ランダムなレベルごとのコストは <code class="shiki"><span>&quot;per_level_random_cost&quot;</span></code> で指定し、既定値は <code class="shiki"><span>10</span></code> です。レベルごとのランダムロールは、各レベルで異なっていてもかまいません。</p><p>基本コストと各レベルのコストが計算されたら、それらを合計して総コストを求めます。最後に、選ばれたエンチャントが宝エンチャントなら、コストは 2 倍になります。通常どおり、このコストは 1 未満にも、そのアイテムのスタックサイズを超えることもできません。この式は、trader が使っている価格システムに関係なく成り立ちます。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>どちらかのランダムコストプロパティが負の値だと、コストが、指定した <a href="#quantity">quantity</a> か最初の必要アイテムの最大スタックサイズのどちらかになる 50-50 の可能性があるようです。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>総コストが負になる場合（負のランダムコストプロパティを使っていない前提では）、影響を受ける必要アイテムに指定された <a href="#quantity">quantity</a> が代わりに使われます。これを保証する最も簡単な方法は次のとおりです。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`数量ベースのエンチャント本コストの例`);
      } else {
        return [
          createTextVNode("数量ベースのエンチャント本コストの例")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;function&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;enchant_book_for_trading&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;base_cost&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;base_random_cost&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;per_level_cost&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;per_level_random_cost&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></div><h5 id="スポーンエッグの-trader-バインド" tabindex="-1">スポーンエッグの trader バインド <a class="header-anchor" href="#スポーンエッグの-trader-バインド" aria-label="Permalink to &quot;スポーンエッグの trader バインド&quot;">​</a></h5><p><code class="shiki"><span>&quot;set_actor_id&quot;</span></code> 関数は、<code class="shiki"><span>&quot;id&quot;</span></code> で与えられた entity 識別子に基づいて、スポーンエッグの data 値を設定するために使います。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`スポーンエッグの trader バインド例`);
      } else {
        return [
          createTextVNode("スポーンエッグの trader バインド例")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;function&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;set_actor_id&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>トレードテーブルでは、ID が指定されない場合、その取引者のエンティティ種別がエッグに割り当てられます。</p><h2 id="上書き" tabindex="-1">上書き <a class="header-anchor" href="#上書き" aria-label="Permalink to &quot;上書き&quot;">​</a></h2><p>トレードテーブルは data 内識別子を使わないため、以前のトレードテーブルを新しいものに置き換えるだけで上書きできます。詳しくは <a href="/concepts/overwriting-assets">アセットの上書きはこちら</a> を参照してください。</p><p>以下は、各取引者で現在使われているバニラのトレードテーブルです。</p><table tabindex="0"><thead><tr><th>取引者</th><th>パス</th></tr></thead><tbody><tr><td>石工</td><td><code class="shiki"><span>BP/trading/economy_trades/stone_mason_trades.json</span></code></td></tr><tr><td>農民</td><td><code class="shiki"><span>BP/trading/economy_trades/farmer_trades.json</span></code></td></tr><tr><td>釣り人</td><td><code class="shiki"><span>BP/trading/economy_trades/fisherman_trades.json</span></code></td></tr><tr><td>肉屋</td><td><code class="shiki"><span>BP/trading/economy_trades/butcher_trades.json</span></code></td></tr><tr><td>羊飼い</td><td><code class="shiki"><span>BP/trading/economy_trades/shepherd_trades.json</span></code></td></tr><tr><td>革細工師</td><td><code class="shiki"><span>BP/trading/economy_trades/leather_worker_trades.json</span></code></td></tr><tr><td>蔵書管理者</td><td><code class="shiki"><span>BP/trading/economy_trades/librarian_trades.json</span></code></td></tr><tr><td>地図師</td><td><code class="shiki"><span>BP/trading/economy_trades/cartographer_trades.json</span></code></td></tr><tr><td>聖職者</td><td><code class="shiki"><span>BP/trading/economy_trades/cleric_trades.json</span></code></td></tr><tr><td>道具鍛冶</td><td><code class="shiki"><span>BP/trading/economy_trades/tool_smith_trades.json</span></code></td></tr><tr><td>武器鍛冶</td><td><code class="shiki"><span>BP/trading/economy_trades/weapon_smith_trades.json</span></code></td></tr><tr><td>矢師</td><td><code class="shiki"><span>BP/trading/economy_trades/fletcher_trades.json</span></code></td></tr><tr><td>防具鍛冶</td><td><code class="shiki"><span>BP/trading/economy_trades/armorer_trades.json</span></code></td></tr><tr><td>行商人</td><td><code class="shiki"><span>BP/trading/economy_trades/wandering_trader_trades.json</span></code></td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p><code class="shiki"><span>trading</span></code> フォルダ直下にも追加のトレードテーブルがありますが、これらは非推奨です。現在使われているのは <code class="shiki"><span>economy_trades</span></code> サブフォルダ内のテーブルだけです。</p></div><p>別の方法として、取引者 entity 定義を更新して、新しいトレードテーブルの場所を指すようにできます。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("loot/trade-tables.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tradeTables = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tradeTables as default
};
