import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/images/loot/recipes/recipe.png";
const _imports_1 = "/assets/images/loot/recipes/shapeless_recipe.png";
const _imports_2 = "/assets/images/loot/recipes/shaped_recipe.png";
const _imports_3 = "/assets/images/loot/recipes/furnace_recipe.png";
const _imports_4 = "/assets/images/loot/recipes/brewing_mix_recipe.png";
const _imports_5 = "/assets/images/loot/recipes/brewing_container_recipe.png";
const __pageData = JSON.parse('{"title":"レシピ","description":"レシピは、クラフトテーブル、かまど、焚き火、醸造台で行われるさまざまなアイテム取引を扱う仕組みです。","frontmatter":{"title":"レシピ","description":"レシピは、クラフトテーブル、かまど、焚き火、醸造台で行われるさまざまなアイテム取引を扱う仕組みです。","category":"Documentation","nav_order":3,"mentions":["Ciosciaa","SirLich","MedicalJewel105","TheHyperWhale","Lufurrius","QuazChick"]},"headers":[{"level":3,"title":"登録","slug":"登録","link":"#登録","children":[]},{"level":2,"title":"共通プロパティと構造","slug":"共通プロパティと構造","link":"#共通プロパティと構造","children":[{"level":3,"title":"フォーマットバージョン","slug":"フォーマットバージョン","link":"#フォーマットバージョン","children":[]},{"level":3,"title":"説明","slug":"説明","link":"#説明","children":[]},{"level":3,"title":"タグ","slug":"タグ","link":"#タグ","children":[]},{"level":3,"title":"レシピのアンロック","slug":"レシピのアンロック","link":"#レシピのアンロック","children":[]},{"level":3,"title":"アイテム記述子","slug":"アイテム記述子","link":"#アイテム記述子","children":[{"level":4,"title":"文字列参照","slug":"文字列参照","link":"#文字列参照","children":[]},{"level":4,"title":"アイテムオブジェクト","slug":"アイテムオブジェクト","link":"#アイテムオブジェクト","children":[]},{"level":4,"title":"追加識別子","slug":"追加識別子","link":"#追加識別子","children":[]}]}]},{"level":2,"title":"クラフト","slug":"クラフト","link":"#クラフト","children":[{"level":3,"title":"形状なしレシピ","slug":"形状なしレシピ","link":"#形状なしレシピ","children":[{"level":4,"title":"材料","slug":"材料","link":"#材料","children":[]},{"level":4,"title":"形状なしレシピの結果","slug":"形状なしレシピの結果","link":"#形状なしレシピの結果","children":[]}]},{"level":3,"title":"形状付きレシピ","slug":"形状付きレシピ","link":"#形状付きレシピ","children":[{"level":4,"title":"パターン","slug":"パターン","link":"#パターン","children":[{"level":5,"title":"行の正規化","slug":"行の正規化","link":"#行の正規化","children":[]},{"level":5,"title":"グリッドの自由度","slug":"グリッドの自由度","link":"#グリッドの自由度","children":[]},{"level":5,"title":"対称性","slug":"対称性","link":"#対称性","children":[]}]},{"level":4,"title":"キー","slug":"キー","link":"#キー","children":[]},{"level":4,"title":"形状付きレシピの結果","slug":"形状付きレシピの結果","link":"#形状付きレシピの結果","children":[]}]},{"level":3,"title":"レシピブック","slug":"レシピブック","link":"#レシピブック","children":[]},{"level":3,"title":"グルーピング","slug":"グルーピング","link":"#グルーピング","children":[]},{"level":3,"title":"優先度","slug":"優先度","link":"#優先度","children":[]}]},{"level":2,"title":"加熱","slug":"加熱","link":"#加熱","children":[{"level":3,"title":"加熱トランザクション","slug":"加熱トランザクション","link":"#加熱トランザクション","children":[]}]},{"level":2,"title":"醸造","slug":"醸造","link":"#醸造","children":[{"level":3,"title":"醸造トランザクション","slug":"醸造トランザクション","link":"#醸造トランザクション","children":[]},{"level":3,"title":"醸造ミックス","slug":"醸造ミックス","link":"#醸造ミックス","children":[]},{"level":3,"title":"醸造コンテナー","slug":"醸造コンテナー","link":"#醸造コンテナー","children":[]}]},{"level":2,"title":"上書き","slug":"上書き","link":"#上書き","children":[]},{"level":2,"title":"優先順位付け","slug":"優先順位付け","link":"#優先順位付け","children":[]}],"relativePath":"loot/recipes.md","filePath":"loot/recipes.md"}');
const _sfc_main = { name: "loot/recipes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FolderView = resolveComponent("FolderView");
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_Spoiler = resolveComponent("Spoiler");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>レシピは、クラフトテーブル、かまど、焚き火、醸造台で行われるさまざまなアイテム取引を扱う仕組みです。</p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>金床でのやり取りはレシピファイルではなく、<a href="/items/item-components">アイテム定義</a> 内で扱われます。機織り機の取引は現在利用できません。</p></div><p>レシピやその機能を使うために、実験的機能の切り替えは必要ありません。</p><h3 id="登録" tabindex="-1">登録 <a class="header-anchor" href="#登録" aria-label="Permalink to &quot;登録&quot;">​</a></h3><p>すべてのレシピは、behavior pack ルートの <code class="shiki"><span>recipes</span></code> フォルダに保存されます。ファイル名や配置は、任意のフォルダ階層で自由に整理できます。</p><p>This arbitrary structure is used for the paths in this document:</p>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "BP/recipes/brewing/negative/paralysis.json",
    "BP/recipes/crafting/weapons/cold_steel_sword.json",
    "BP/recipes/decorations/knobs/brass.json",
    "BP/recipes/magic/magic_ash.json",
    "BP/recipes/covered_arch.json",
    "BP/recipes/illumination_potion.json"
  ] }, null, _parent));
  _push(`<p>例として、次の <a href="#shaped-recipes">形状付きレシピ</a> で「cold steel sword」を作れます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/recipes/crafting/weapons/cold_steel_sword.json`);
      } else {
        return [
          createTextVNode("BP/recipes/crafting/weapons/cold_steel_sword.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.17.41&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;minecraft:recipe_shaped&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:cold_steel_sword&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;tags&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;crafting_table&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;altar&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;pattern&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;X&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;X&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;I&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;key&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;X&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:cold_steel&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;I&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:stick&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;unlock&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:cold_steel&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:wool&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;data&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">3</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;context&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;PlayerInWater&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        ],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;result&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:cold_steel_sword&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="共通プロパティと構造" tabindex="-1">共通プロパティと構造 <a class="header-anchor" href="#共通プロパティと構造" aria-label="Permalink to &quot;共通プロパティと構造&quot;">​</a></h2><h3 id="フォーマットバージョン" tabindex="-1">フォーマットバージョン <a class="header-anchor" href="#フォーマットバージョン" aria-label="Permalink to &quot;フォーマットバージョン&quot;">​</a></h3><p><a href="/guide/format-version">format version</a> は、レシピ本体で使われるスキーマの版を示すためのものです。最上位の <code class="shiki"><span>&quot;format_version&quot;</span></code> プロパティで指定します。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/`);
      } else {
        return [
          createTextVNode("#/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.17.41&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>実際には、フォーマットバージョンは任意の値にでき、省略もできます。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>それでもフォーマットバージョンは含めることを強く推奨します。実際の Minecraft バージョンを表す値にしておくと、将来の互換性確保に役立ちます。現在のリリース版か、直近のメジャーリリース版を使うとよいでしょう。</p></div><h3 id="説明" tabindex="-1">説明 <a class="header-anchor" href="#説明" aria-label="Permalink to &quot;説明&quot;">​</a></h3><p>どのレシピ型にも必須の <code class="shiki"><span>&quot;description&quot;</span></code> オブジェクトには、レシピの識別子が入ります。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shaped/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shaped/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:cold_steel_sword&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>その唯一の子である必須の <code class="shiki"><span>&quot;identifier&quot;</span></code> プロパティは、ワールドに適用されたすべてのパックを通してレシピを一意に識別するためのものです。レシピ識別子に対する名前空間の要件は特になく、同一パック内で完全なレシピ識別子が重複しないことだけが条件です。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>名前空間の使用を強く推奨します。名前空間は他のアドオン分野では標準であり、レシピをパック内で論理的に区切る助けになり、ワールドで複数の behavior pack を使う際の衝突を減らせます。</p></div><h3 id="タグ" tabindex="-1">タグ <a class="header-anchor" href="#タグ" aria-label="Permalink to &quot;タグ&quot;">​</a></h3><p>レシピは、必須の <code class="shiki"><span>&quot;tags&quot;</span></code> 配列プロパティを使ってクラフト用インターフェースに関連付けられます。このプロパティはどのレシピ型にも含める必要があります。これらのタグによって、<code class="shiki"><span>minecraft:crafting_table</span></code> コンポーネントを使う異なるブロック間でレシピを共有できます。レシピに <code class="shiki"><span>crafting_table</span></code> タグやバニラタグがなく、代わりにカスタムブロックのタグだけがある場合、そのレシピはそのカスタムブロックにだけ共有され、クラフトテーブルや石切り台などには共有されません。少なくとも 1 つのタグが必要です。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shaped/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shaped/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;tags&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;crafting_table&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;altar&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>バニラのインターフェースは、各レシピ種別ごとにタグが公開されています。</p><p>クラフト:</p><ul><li><code class="shiki"><span>crafting_table</span></code></li><li><code class="shiki"><span>stonecutter</span></code></li><li><code class="shiki"><span>smithing_table</span></code></li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>鍛冶台レシピを作りたい場合、2 つ目のスロットには <code class="shiki"><span>&lt;namespace&gt;:netherite_ingot</span></code> を使う必要があります。別の識別子では動作しません。<strong>これは 1.18.30 以降では動作しません</strong>。</p></div><p>調理と精錬:</p><ul><li><code class="shiki"><span>furnace</span></code></li><li><code class="shiki"><span>blast_furnace</span></code></li><li><code class="shiki"><span>smoker</span></code></li><li><code class="shiki"><span>campfire</span></code></li><li><code class="shiki"><span>soul_campfire</span></code></li></ul><p>醸造:</p><ul><li><code class="shiki"><span>brewing_stand</span></code></li></ul><p>教育:</p><ul><li><code class="shiki"><span>material_reducer</span></code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>さらに、<a href="/blocks/block-components#crafting-table">カスタムクラフトテーブル</a> は、クラフトレシピ用の独自タグを宣言できます。カスタムの調理・精錬ブロックやカスタム醸造台は、現在は利用できません。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>レシピを実質的に無効化したい場合（以前のレシピを<a href="#overrides">上書き</a>するときに便利です）、タグ配列を <code class="shiki"><span>[&quot;&quot;]</span></code> にします。</p></div><h3 id="レシピのアンロック" tabindex="-1">レシピのアンロック <a class="header-anchor" href="#レシピのアンロック" aria-label="Permalink to &quot;レシピのアンロック&quot;">​</a></h3><p>Minecraft 1.20.30 でレシピのアンロック機能が追加されました。レシピでこの機能を使うには、<code class="shiki"><span>manifest.json</span></code> の <code class="shiki"><span>min_engine_version</span></code> を 1.20.11 にする必要があります（1.20.30 が推奨です）。また、レシピに <code class="shiki"><span>unlock</span></code> 配列とそのオブジェクトを追加する必要があります。</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;unlock&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:cold_steel&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"> // Item to unlock recipe</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:wool&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// Item to unlock recipe</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;data&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">:  </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">3</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;context&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;PlayerInWater&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"> // Event to unlock recipe</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">  ]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>この配列内の各オブジェクトには <code class="shiki"><span>&quot;item&quot;</span></code> があり、レシピをアンロックするためにプレイヤーのインベントリに必要なアイテムを示します。data 値も受け付けます。<code class="shiki"><span>&quot;context&quot;</span></code> は、このレシピをアンロックするイベントを決めるために使います。<code class="shiki"><span>&quot;PlayerInWater&quot;</span></code> は、プレイヤーが水に入るとこのレシピをアンロックします。これはレシピで知られている唯一の context でもあります。</p><h3 id="アイテム記述子" tabindex="-1">アイテム記述子 <a class="header-anchor" href="#アイテム記述子" aria-label="Permalink to &quot;アイテム記述子&quot;">​</a></h3><p>レシピを扱うには、さまざまなプロパティでアイテムを参照する必要があります。アイテムは、文字列参照かアイテムオブジェクトのどちらかで指定できます。どちらの形式も data 値を扱えますが、count を指定できるのはアイテムオブジェクトだけです（レシピの出力で使えます）。レシピ入力では、data 値を指定しない場合、その識別子に属する任意の data 値のアイテムがその入力に使えます。出力の data 値は、明示しなければ <code class="shiki"><span>0</span></code> が既定値です。アイテムタグによるレシピ入力の選択には対応していません。</p><h4 id="文字列参照" tabindex="-1">文字列参照 <a class="header-anchor" href="#文字列参照" aria-label="Permalink to &quot;文字列参照&quot;">​</a></h4><p>一般に、文字列参照はそのアイテムの namespace と identifier を組み合わせたものです。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shapeless/ingredients/0`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shapeless/ingredients/0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:planks&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>文字列参照では、末尾に data 値を付けることもできます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shapeless/ingredients/0`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shapeless/ingredients/0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:planks:2&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="アイテムオブジェクト" tabindex="-1">アイテムオブジェクト <a class="header-anchor" href="#アイテムオブジェクト" aria-label="Permalink to &quot;アイテムオブジェクト&quot;">​</a></h4><p>アイテムオブジェクトは、アイテムをより明示的に参照するための構造です。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shapeless/ingredients/0`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shapeless/ingredients/0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:planks&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;data&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;count&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">3</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>必須の <code class="shiki"><span>&quot;item&quot;</span></code> プロパティは、文字列参照形式と同じように機能します。明示的な data フィールドも使えますが、文字列末尾の data 指定も <code class="shiki"><span>&quot;item&quot;</span></code> プロパティで引き続き使えます。ただし接尾辞形式と違い、<code class="shiki"><span>&quot;data&quot;</span></code> には Molang を入れられます。この Molang はワールド読み込み時に 1 回だけ評価され、クラフト試行ごとには評価されません。変数を使って、レシピ内のプロパティ間でデータを受け渡すことはできません。さらに、入力アイテムの性質を問い合わせることもできません。現在、<code class="shiki"><span>&quot;data&quot;</span></code> プロパティで使えることが知られている唯一のクエリは <code class="shiki"><span>q.get_actor_info_id</span></code> で、entity のスポーンエッグ ID をその識別子から調べるために使いますが、これは <code class="shiki"><span>&quot;item&quot;</span></code> にスポーンエッグの ID を直接設定することでも実現できます（例: <code class="shiki"><span>minecraft:chicken_spawn_egg</span></code>）。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shapeless/result`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shapeless/result")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:spawn_egg&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;data&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;q.get_actor_info_id(&#39;minecraft:chicken&#39;)&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>オプションの整数 <code class="shiki"><span>&quot;count&quot;</span></code> プロパティは、アイテムをスタックするために使えます。既定値は <code class="shiki"><span>1</span></code> です。現在、count の設定が機能するのは <a href="#crafting">crafting</a> と <a href="#heating">furnace</a> のレシピ出力、および <a href="#ingredients">shapeless recipe ingredients</a> だけです。指定した count は他の場所では無視されます。</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>スタックできないアイテムに <code class="shiki"><span>1</span></code> を超える count を指定すると、エラーになります。形状なしレシピや醸造ミックスのような、1 個だけ返すレシピ出力を 1 回の処理で複数個返すように強制する方法はありません。</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>トレードの <a href="/loot/trade-tables#items">table item descriptors</a> に似ていますが、レシピの item descriptor では functions を使えません。</p></div><h4 id="追加識別子" tabindex="-1">追加識別子 <a class="header-anchor" href="#追加識別子" aria-label="Permalink to &quot;追加識別子&quot;">​</a></h4><p>基本的なポーションを表すために、通常は使えない追加の識別子がレシピで利用できます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_brewing_mix/input`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_brewing_mix/input")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:potion_type:strength&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>これらの識別子はオブジェクト記法では使えず、文字列記法でのみ使えます。スプラッシュポーションと残留ポーションではバリアントは使えません。これらの識別子はすべて <code>minecraft:potion_type:<em>potion_effect</em></code> の形式で、<code><em>potion_effect</em></code> には次のいずれかを指定できます。</p><ul><li><code class="shiki"><span>water</span></code></li><li><code class="shiki"><span>awkward</span></code></li><li><code class="shiki"><span>mundane</span></code></li><li><code class="shiki"><span>thick</span></code></li><li><code class="shiki"><span>healing</span></code></li><li><code class="shiki"><span>regeneration</span></code></li><li><code class="shiki"><span>swiftness</span></code></li><li><code class="shiki"><span>strength</span></code></li><li><code class="shiki"><span>harming</span></code></li><li><code class="shiki"><span>poison</span></code></li><li><code class="shiki"><span>slowness</span></code></li><li><code class="shiki"><span>weakness</span></code></li><li><code class="shiki"><span>water_breathing</span></code></li><li><code class="shiki"><span>fire_resistance</span></code></li><li><code class="shiki"><span>nightvision</span></code></li><li><code class="shiki"><span>invisibility</span></code></li><li><code class="shiki"><span>leaping</span></code></li><li><code class="shiki"><span>slow_falling</span></code></li><li><code class="shiki"><span>turtle_master</span></code></li><li><code class="shiki"><span>wither</span></code></li><li><code class="shiki"><span>infested</span></code></li><li><code class="shiki"><span>oozing</span></code></li><li><code class="shiki"><span>weaving</span></code></li><li><code class="shiki"><span>wind_charged</span></code></li></ul><p>対応している場合は、<code class="shiki"><span>long_</span></code> と <code class="shiki"><span>strong_</span></code> の接頭辞を使って修正版ポーションを表せます。たとえば <code class="shiki"><span>minecraft:potion_type:strong_poison</span></code> です。</p><h2 id="クラフト" tabindex="-1">クラフト <a class="header-anchor" href="#クラフト" aria-label="Permalink to &quot;クラフト&quot;">​</a></h2><p>クラフト操作は、クラフトグリッドを使って入力を即座に出力へ変換します。クラフトレシピには 2 種類あり、入力を自由に並べられる <a href="#shapeless-recipes">shapeless recipes</a> と、入力の厳密な配置を定義する <a href="#shaped-recipes">shaped recipes</a> があります。 クラフトレシピは、クラフトテーブルと石切り台の両方に対応しています。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shapeless/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shapeless/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;tags&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;crafting_table&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;stonecutter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code class="shiki"><span>&quot;crafting_table&quot;</span></code> は、バニラのクラフトテーブルと、インベントリ内のプレイヤー用 2 × 2 クラフトグリッドの両方に適用されます。現在、どちらか一方だけを対象にする方法はありません。クラフトレシピはカスタムタグにも対応しており、レシピを <a href="/blocks/block-components#crafting-table">カスタムブロックが提供するクラフトグリッド</a> に関連付けられます。</p><h3 id="形状なしレシピ" tabindex="-1">形状なしレシピ <a class="header-anchor" href="#形状なしレシピ" aria-label="Permalink to &quot;形状なしレシピ&quot;">​</a></h3><p>形状なしレシピは、クラフトグリッド上で入力の集合を 1 つの出力にまとめるだけのレシピです。</p><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/recipes/decorations/knobs/brass.json`);
      } else {
        return [
          createTextVNode("BP/recipes/decorations/knobs/brass.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.17.41&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;minecraft:recipe_shapeless&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:brass_door_knob&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;group&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;handles&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;tags&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;construction_bench&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;ingredients&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">            &quot;wiki:brass&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:screw&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;data&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        ],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;unlock&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:cold_steel&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:wool&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;data&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">3</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;context&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;PlayerInWater&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        ],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;result&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:door_knob&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;data&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">3</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h4 id="材料" tabindex="-1">材料 <a class="header-anchor" href="#材料" aria-label="Permalink to &quot;材料&quot;">​</a></h4><p>必須の <code class="shiki"><span>&quot;ingredients&quot;</span></code> 配列プロパティには、そのクラフトレシピに必要な入力アイテムを列挙します。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shapeless/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shapeless/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;ingredients&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;wiki:brass&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:screw&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;data&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>各エントリーは <a href="#item-descriptors">item descriptor</a> です。材料に count がある場合、その count は複数のクラフトグリッドスロットにまたがって表現する必要があります。1 つのスロットに積み重ねたアイテムを使って製品を作ることはできません。クラフトに必要なアイテムが揃っていても、材料数が使用中のクラフトインターフェースで扱える数を超えると、そのレシピはレシピブック上で自動的に利用不可になります。</p><h4 id="形状なしレシピの結果" tabindex="-1">形状なしレシピの結果 <a class="header-anchor" href="#形状なしレシピの結果" aria-label="Permalink to &quot;形状なしレシピの結果&quot;">​</a></h4><p>形状なしレシピの出力は、必須の <code class="shiki"><span>&quot;result&quot;</span></code> プロパティで表し、<a href="#item-descriptors">item descriptor</a> か、その単一要素の配列として指定できます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shapeless/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shapeless/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;result&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:door_knob&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;data&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">3</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="形状付きレシピ" tabindex="-1">形状付きレシピ <a class="header-anchor" href="#形状付きレシピ" aria-label="Permalink to &quot;形状付きレシピ&quot;">​</a></h3><p>形状付きレシピは、クラフト時に使う材料が厳密な形に従うことを要求します。</p><p><img${ssrRenderAttr("src", _imports_2)} alt=""></p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/recipes/covered_arch.json`);
      } else {
        return [
          createTextVNode("BP/recipes/covered_arch.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.17.41&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;minecraft:recipe_shaped&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:covered_arch&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;tags&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;crafting_table&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;pattern&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;SSS&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;I I&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;I I&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;key&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;S&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:cloth&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;I&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:support&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;unlock&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:cold_steel&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:wool&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;data&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">3</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;context&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;PlayerInWater&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        ],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;result&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:covered_arch&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;count&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">3</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">            &quot;wiki:crafting_scrap&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h4 id="パターン" tabindex="-1">パターン <a class="header-anchor" href="#パターン" aria-label="Permalink to &quot;パターン&quot;">​</a></h4><p>必須の <code class="shiki"><span>&quot;pattern&quot;</span></code> 配列プロパティは、そのレシピで使う形を定義します。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shaped/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shaped/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;pattern&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;SSS&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;I I&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;I I&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>配列内の各要素は、クラフトグリッドの 1 行を表す文字列です。各文字はその行内の 1 スロットを表します。スペースは既定で空にするスロットを意味します。</p><p>文字は、アイテムを視覚的に表すための略記として機能します。各文字は <a href="#keys">key</a> に対応し、そのスロットに置くべきアイテムを指定します。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>パターンがスペースだけで構成されている場合、そのサイズに合う空のクラフトインターフェースは常にそのレシピに一致します。プレイヤーはクラフト出力を無限に取り出せ、Shift で回収すると即座にインベントリ上限まで埋まります。</p></div><h5 id="行の正規化" tabindex="-1">行の正規化 <a class="header-anchor" href="#行の正規化" aria-label="Permalink to &quot;行の正規化&quot;">​</a></h5><p>パターングリッドは最大で 3 × 3 ですが、それより小さくてもかまいません。文字列の長さが揃っていない場合、Minecraft は短い文字列を自動的に延長し、空きスロットにはスペースがあるものとして扱います。次の 2 つは等価です。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shaped/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shaped/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;pattern&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;MA&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;IFI&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;M&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shaped/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shaped/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;pattern&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;MA &quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;IFI&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;M  &quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>現在、カスタムブロックで設定できるものを含め、どのクラフトグリッドも 3 × 3 を超えられません。示されたパターンが現在のクラフトインターフェースで使えない場合、そのレシピはレシピブックで自動的に利用不可になります。</p></div><h5 id="グリッドの自由度" tabindex="-1">グリッドの自由度 <a class="header-anchor" href="#グリッドの自由度" aria-label="Permalink to &quot;グリッドの自由度&quot;">​</a></h5><p>スペースは、3 × 3 の余白を自動で埋めるものとしては扱われません。提示されたパターンが使用中のクラフトグリッドより小さい場合、構造と内容が保たれている限り、そのパターンはどこにでも配置できます。例として、クラフトテーブル上で次のパターンを考えます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shaped/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shaped/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;pattern&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;O&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;OO&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>この &quot;L&quot; 字形は、クラフトグリッドの左上隅に限定されません。3 × 3 グリッドを例にすると、このパターンは次のいずれの配置でも使えます。</p>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Possible Configurations" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}><em${_scopeId}>アンダースコアは空きスロットを表します。</em></p><div class="language- vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}></span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span${_scopeId}>O__</span></span>
<span class="line"${_scopeId}><span${_scopeId}>OO_</span></span>
<span class="line"${_scopeId}><span${_scopeId}>___</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div><div class="language- vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}></span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span${_scopeId}>_O_</span></span>
<span class="line"${_scopeId}><span${_scopeId}>_OO</span></span>
<span class="line"${_scopeId}><span${_scopeId}>___</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div><div class="language- vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}></span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span${_scopeId}>___</span></span>
<span class="line"${_scopeId}><span${_scopeId}>O__</span></span>
<span class="line"${_scopeId}><span${_scopeId}>OO_</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div><div class="language- vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}></span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span${_scopeId}>___</span></span>
<span class="line"${_scopeId}><span${_scopeId}>_O_</span></span>
<span class="line"${_scopeId}><span${_scopeId}>_OO</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("em", null, "アンダースコアは空きスロットを表します。")
          ]),
          createVNode("div", { class: "language- vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", null, "O__")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", null, "OO_")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", null, "___")
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
              createVNode("br")
            ])
          ]),
          createVNode("div", { class: "language- vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", null, "_O_")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", null, "_OO")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", null, "___")
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
              createVNode("br")
            ])
          ]),
          createVNode("div", { class: "language- vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", null, "___")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", null, "O__")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", null, "OO_")
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
              createVNode("br")
            ])
          ]),
          createVNode("div", { class: "language- vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", null, "___")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", null, "_O_")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", null, "_OO")
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
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>配置を特定の場所に限定したい場合は、明示的なスペースを使い、特定の位置を空きスロットとして強制します。次のパターンは、グリッドの左上隅でのみ使えます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shaped/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shaped/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;pattern&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;O  &quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;OO &quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;   &quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h5 id="対称性" tabindex="-1">対称性 <a class="header-anchor" href="#対称性" aria-label="Permalink to &quot;対称性&quot;">​</a></h5><p>すべての形状付きレシピは、もともと左右対称です。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shaped/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shaped/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;pattern&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;Z  &quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot; Z &quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;  Z&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>前のレシピは、プレイヤーにとって次のように設定されているのと同じものとしても使えます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shaped/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shaped/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;pattern&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;  Z&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot; Z &quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;Z  &quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="キー" tabindex="-1">キー <a class="header-anchor" href="#キー" aria-label="Permalink to &quot;キー&quot;">​</a></h4><p>キーは、<a href="#patterns">pattern</a> 内の文字に意味を与えます。必須の <code class="shiki"><span>&quot;key&quot;</span></code> オブジェクトプロパティで行い、キー名を <a href="#item-descriptors">item descriptors</a> に対応付けます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shaped/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shaped/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;key&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;S&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:cloth&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;I&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:support&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>pattern に含まれる各キーはここで定義しておく必要があります。キー名は大文字小文字を区別します。あるアイテムが複数の data 値を持ち、data 値が指定されていない場合、その識別子の任意のアイテムがそのキーに使えます。item descriptor に <code class="shiki"><span>&quot;count&quot;</span></code> プロパティがあっても無視され、<code class="shiki"><span>1</span></code> として扱われます。クラフトグリッドのスロット内の積み重なったアイテムは、1 個ずつしか消費されません。</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>Any unicode character from <code class="shiki"><span>U+0020</span></code> to <code class="shiki"><span>U+07FF</span></code> may be used as a key name. If a key name has more than one character, only the first character is considered. Since spaces are by default used to signify empty slots on a grid and there&#39;s no way to re-designate a key for a blank slot, it&#39;s not recommended to use them as a key.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If a character in the pattern is not present in the key map, it will be treated as though it were a space, a designated empty tile.</p></div><h4 id="形状付きレシピの結果" tabindex="-1">形状付きレシピの結果 <a class="header-anchor" href="#形状付きレシピの結果" aria-label="Permalink to &quot;形状付きレシピの結果&quot;">​</a></h4><p>形状付きクラフトレシピの出力は、<a href="#shapeless-results">形状なしレシピの対応物</a> と非常によく似ています。ただし、形状なしレシピの配列結果と違い、形状付きレシピの結果配列には複数の <a href="#item-descriptors">item descriptor</a> を含められます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shaped/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shaped/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;result&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:covered_arch&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;count&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">3</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">    &quot;wiki:crafting_scrap&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>配列の最初の要素は、クラフトブロックに表示される出力として使われます。表示された結果を出力スロットから取り出すと、他の値は自動的にプレイヤーのインベントリに入ります。1 回のクラフト操作で返せるアイテム数に上限はないようです。</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>プレイヤーのインベントリに収まりきらないアイテムは、クラフトテーブルの入力スロットの左から右、次に上から下の順で配置されます。そこにも収まらないものは、プレイヤーが &quot;Drop Item&quot; アクションを使ったかのように投げ出されます。</p></div><h3 id="レシピブック" tabindex="-1">レシピブック <a class="header-anchor" href="#レシピブック" aria-label="Permalink to &quot;レシピブック&quot;">​</a></h3><p>レシピブックは、利用可能なレシピを自動で索引化してプレイヤーに表示し、形状なしレシピの <a href="#ingredients">材料数</a> や形状付きレシピの <a href="#patterns">パターン制約</a> を賢く考慮します。複数のレシピが同じ出力を指す場合、レシピブックは独自の優先順位付けを使います。</p><p>比較対象の両方が形状なしレシピの場合、優先順位は次の順で決まります。</p><ul><li>最初に列挙された材料の数が少ないもの</li><li>より負の <a href="#priority">優先度</a></li><li>識別子文字列の値が小さいもの</li></ul><p>形状付きレシピでは、文字列比較で &quot;より小さい&quot; 識別子のレシピが常に優先されます。</p><p>形状付きレシピと形状なしレシピを比較する場合は、形状なしレシピを比較するときのルールが使われます。ただし、形状付きレシピについて解釈される材料数は、実際の材料数とは異なります。形状付きレシピの材料数がどのように決まるのかは正確には分かっていません。</p><h3 id="グルーピング" tabindex="-1">グルーピング <a class="header-anchor" href="#グルーピング" aria-label="Permalink to &quot;グルーピング&quot;">​</a></h3><p>この節は参考情報です。グループは、バニラ定義のクラフトレシピに、任意の <code class="shiki"><span>&quot;group&quot;</span></code> 文字列プロパティとして存在します。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shaped/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shaped/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;group&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;slingshots&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>このプロパティが何をするのか、あるいは何もしないのかは、現在のところ不明です。おそらく <a href="#recipe-book">レシピブック</a> と一緒に使うものだと思われますが、新しいカスタムグループを使っても、バニラ定義のグループを再利用しても、特に変化はないようです。</p><h3 id="優先度" tabindex="-1">優先度 <a class="header-anchor" href="#優先度" aria-label="Permalink to &quot;優先度&quot;">​</a></h3><p>クラフトレシピは、入力の競合を処理するための追加プロパティ <code class="shiki"><span>&quot;priority&quot;</span></code> に対応しており、主に、複数のレシピがその状況に適用されうるときの <a href="#prioritization">タイブレーク</a> として機能します。優先度は、クラフトレシピ型オブジェクト内で直接指定します。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_shaped/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_shaped/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;priority&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>優先度の値が低いクラフトレシピが優先されます。つまり、他の条件がすべて同じなら、優先度 <code class="shiki"><span>0</span></code> のレシピが優先度 <code class="shiki"><span>1</span></code> のレシピより使われます。必要なら優先度は負の値にできます。<code class="shiki"><span>&quot;priority&quot;</span></code> が指定されていない場合、優先度 <code class="shiki"><span>0</span></code> があるものとして扱われます。</p><h2 id="加熱" tabindex="-1">加熱 <a class="header-anchor" href="#加熱" aria-label="Permalink to &quot;加熱&quot;">​</a></h2><p>かまどレシピは、熱源を使って一定時間かけてアイテムを変換するために使います。やや名乗りが不正確ですが、かまどレシピは焚き火を含む、熱源を使うあらゆるインターフェースで使われます。</p><p><img${ssrRenderAttr("src", _imports_3)} alt=""></p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/recipes/magic/magic_ash.json`);
      } else {
        return [
          createTextVNode("BP/recipes/magic/magic_ash.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.17.41&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;minecraft:recipe_furnace&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:magic_ash&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;tags&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;soul_campfire&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;input&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:bone_fragments&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;output&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:magic_ash&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;count&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">4</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>すべてのバニラの加熱ブロックは、タグ経由でサポートされています。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_furnace/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_furnace/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;tags&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;furnace&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;blast_furnace&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;smoker&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;campfire&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;soul_campfire&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="加熱トランザクション" tabindex="-1">加熱トランザクション <a class="header-anchor" href="#加熱トランザクション" aria-label="Permalink to &quot;加熱トランザクション&quot;">​</a></h3><p>かまどレシピは、ちょうど 1 つの入力 <a href="#item-descriptors">item descriptor</a> を、ちょうど 1 つの出力 item descriptor に結び付けます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_furnace/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_furnace/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;input&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:bone_fragments&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;output&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;item&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:magic_ash&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;count&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">4</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>入力に指定された count は無視されます。調理・精錬レシピの XP 返却量や燃料源は変更できません。アイテムを加熱するのに必要な時間は、使用するブロックで決まり、変更できません。</p><h2 id="醸造" tabindex="-1">醸造 <a class="header-anchor" href="#醸造" aria-label="Permalink to &quot;醸造&quot;">​</a></h2><p>醸造レシピは、別のアイテムを触媒として使い、アイテムを変換するために使います。醸造レシピには 2 種類あり、入力から出力へ data を引き継がない <a href="#brewing-mixes">醸造ミックス</a> と、引き継ぐ <a href="#brewing-containers">醸造コンテナー</a> があります。</p><p>醸造レシピに対応しているインターフェースは 1 つだけです。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_brewing_container/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_brewing_container/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;tags&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;brewing_stand&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="醸造トランザクション" tabindex="-1">醸造トランザクション <a class="header-anchor" href="#醸造トランザクション" aria-label="Permalink to &quot;醸造トランザクション&quot;">​</a></h3><p>醸造トランザクションは <a href="#heating-transactions">加熱トランザクション</a> に似ており、入力と出力をそれぞれ 1 つの <a href="#item-descriptors">item descriptor</a> で指定します。ただし醸造レシピでは、触媒として <code class="shiki"><span>&quot;reagent&quot;</span></code> プロパティも必要で、これも 1 つの item descriptor しか指定できません。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`#/minecraft:recipe_brewing_mix/`);
      } else {
        return [
          createTextVNode("#/minecraft:recipe_brewing_mix/")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;input&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:flask&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;reagent&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:jade&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;output&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:insanity_resistance&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>これらの醸造プロパティでは、指定した count 値は無視されます。アイテムは 1 回の醸造で 1 つずつ変化することを意図しています。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>醸造レシピの入力アイテムがスタック可能な場合、変換時にスタック <em>全体</em> が消費されます。これを回避する方法は現在ありません。</p></div><p>醸造時間が経過すると、触媒は消費され、出力アイテムが入力アイテムを直接置き換えます。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>現在、生成される出力のスタック可否には不具合があり、data 値を指定したかどうかに関係なく発生します。特に、出力は同じ識別子と data 値を持つアイテムと互換性がなく、スタックしません。</p></div><h3 id="醸造ミックス" tabindex="-1">醸造ミックス <a class="header-anchor" href="#醸造ミックス" aria-label="Permalink to &quot;醸造ミックス&quot;">​</a></h3><p>醸造ミックスは、理論上は入力の data 値を出力の data 値から分離するように設計された、シンプルな醸造レシピです。</p><p><img${ssrRenderAttr("src", _imports_4)} alt=""></p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/recipes/brewing/negative/paralysis.json`);
      } else {
        return [
          createTextVNode("BP/recipes/brewing/negative/paralysis.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.17.41&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;minecraft:recipe_brewing_mix&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:paralysis_brew&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;tags&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;brewing_stand&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;input&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:amberglass_flask&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;reagent&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:viporfly_poison&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;output&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:paralysis_brew&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>残念ながら、醸造ミックスレシピでは、割り当てた data 値に不具合があります。</p><p>一般に、入力に data 値が指定されていると、醸造レシピは動作しません。例外は、入力が次のいずれかの場合だけです。</p><ul><li><code class="shiki"><span>minecraft:potion</span></code></li><li><code class="shiki"><span>minecraft:splash_potion</span></code></li><li><code class="shiki"><span>minecraft:lingering_potion</span></code></li><li><a href="#identifier-additions">Potion identifier additions</a></li></ul><p><code class="shiki"><span>&quot;data&quot;</span></code> プロパティ形式で reagent に data 値を指定すると、そのレシピの reagent として該当識別子のアイテムが置かれたとき、data 値に関係なく醸造は発生します。ただし、正しい data 値が一致した場合にのみ成功します。一致しない場合、醸造は成功したように見えますが、入力は出力に変換されません。失敗しても、reagent と blaze powder 燃料の一定割合は消費されます。</p></div><h3 id="醸造コンテナー" tabindex="-1">醸造コンテナー <a class="header-anchor" href="#醸造コンテナー" aria-label="Permalink to &quot;醸造コンテナー&quot;">​</a></h3><p>醸造コンテナーは、入力の data 値を変換後の出力に引き継ぐように設計されています。</p><p><img${ssrRenderAttr("src", _imports_5)} alt=""></p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/recipes/illumination_potion.json`);
      } else {
        return [
          createTextVNode("BP/recipes/illumination_potion.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.17.41&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;minecraft:recipe_brewing_container&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:illumination_potion&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;tags&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;brewing_stand&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;input&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:potion&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;reagent&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:radiant_berries&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;output&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:illumination_potion&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>醸造コンテナーは、入力について <a href="#brewing-mixes">brewing mixes</a> より厳格です。醸造コンテナーレシピで許可されるアイテム種別は、次のものだけです。</p><ul><li><code class="shiki"><span>minecraft:potion</span></code></li><li><code class="shiki"><span>minecraft:splash_potion</span></code></li><li><code class="shiki"><span>minecraft:lingering_potion</span></code></li><li><a href="#identifier-additions">Potion identifier additions</a></li></ul><p>醸造コンテナーレシピでは data 値が入力から出力へ引き継がれるため、<code class="shiki"><span>&quot;input&quot;</span></code> と <code class="shiki"><span>&quot;output&quot;</span></code> に指定した data 値は無視されます。</p><h2 id="上書き" tabindex="-1">上書き <a class="header-anchor" href="#上書き" aria-label="Permalink to &quot;上書き&quot;">​</a></h2><p>アドオンの他の領域と同様に、behavior pack の並び順は、ゲームプレイ中に Minecraft がどのファイルを使うかに影響します。リストの上にある behavior pack のエントリーは、下にあるものやベースのバニラパックより優先されます。</p><p>下位にあるパックのレシピを上書きするには、レシピ型と識別子の両方を一致させる必要があります。上書き用ファイルの名前や配置は自由で、内容だけが重要です。レシピでは部分的な上書きは認められず、レシピ全体を再定義する必要があります。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>上書きが機能するのは、レシピ型が <em>完全に</em> 一致するときだけです。ほとんどの場合、不一致だと既存のものとは別に新しいレシピが作られます。</p><p>2 つのクラフトレシピ型の間で変換する上書きを作ろうとすると、エラーになります。これを回避するには、まずバニラ定義をパックにコピーします。次に、そのファイルの <code class="shiki"><span>&quot;tags&quot;</span></code> を <code class="shiki"><span>[&quot;&quot;]</span></code> に設定します。これでレシピは実質的に無効になります。最後に、別のクラフトレシピ型として新しいファイルを用意し、エラーを避けるために別の識別子を選びます。</p></div><h2 id="優先順位付け" tabindex="-1">優先順位付け <a class="header-anchor" href="#優先順位付け" aria-label="Permalink to &quot;優先順位付け&quot;">​</a></h2><p><a href="#overrides">上書き</a> を考慮したうえで、入力に基づいて複数のレシピが適用される場合、出力は次のタイブレークを順に使って選ばれます。</p><ul><li>Recipes declared in higher-ordered packs in the world behavior packs list</li><li>If for crafting recipes, <em>lower</em>-valued <a href="#priority">priority properties</a></li><li>If for crafting recipes, <a href="#shaped-recipes">shaped recipes</a> over <a href="#shapeless-recipes">shapeless ones</a></li><li>&quot;Lesser&quot; identifiers, as interpreted by string comparison</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("loot/recipes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const recipes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  recipes as default
};
