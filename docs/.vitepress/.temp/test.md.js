import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./snippets.BJ6_Fc-G.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Wiki開発者用テストページ","description":"ただ説明があるページとして存在するための、説明付きページです。","frontmatter":{"title":"Wiki開発者用テストページ","description":"ただ説明があるページとして存在するための、説明付きページです。","outline_depth":6,"hidden":true,"mentions":["TheItsNameless","MedicalJewel105","SirLich","SmokeyStack","QuazChick"]},"headers":[{"level":2,"title":"引用","slug":"引用","link":"#引用","children":[]},{"level":2,"title":"ボタン","slug":"ボタン","link":"#ボタン","children":[{"level":3,"title":"デフォルト","slug":"デフォルト","link":"#デフォルト","children":[]},{"level":3,"title":"色付き","slug":"色付き","link":"#色付き","children":[]}]},{"level":2,"title":"コードブロック","slug":"コードブロック","link":"#コードブロック","children":[{"level":3,"title":"コードヘッダー","slug":"コードヘッダー","link":"#コードヘッダー","children":[]},{"level":3,"title":"行番号なし","slug":"行番号なし","link":"#行番号なし","children":[]}]},{"level":2,"title":"コメント","slug":"コメント","link":"#コメント","children":[]},{"level":2,"title":"コンテナ","slug":"コンテナ","link":"#コンテナ","children":[]},{"level":2,"title":"フォルダビュー","slug":"フォルダビュー","link":"#フォルダビュー","children":[]},{"level":2,"title":"見出し 2","slug":"見出し-2","link":"#見出し-2","children":[{"level":3,"title":"見出し 3","slug":"見出し-3","link":"#見出し-3","children":[{"level":4,"title":"見出し 4","slug":"見出し-4","link":"#見出し-4","children":[{"level":5,"title":"見出し 5","slug":"見出し-5","link":"#見出し-5","children":[{"level":6,"title":"見出し 6","slug":"見出し-6","link":"#見出し-6","children":[]}]}]}]}]},{"level":2,"title":"水平線","slug":"水平線","link":"#水平線","children":[]},{"level":2,"title":"リスト","slug":"リスト","link":"#リスト","children":[{"level":3,"title":"チェック済み","slug":"チェック済み","link":"#チェック済み","children":[]},{"level":3,"title":"順序付き","slug":"順序付き","link":"#順序付き","children":[]},{"level":3,"title":"順不同","slug":"順不同","link":"#順不同","children":[]}]},{"level":2,"title":"Molang","slug":"molang","link":"#molang","children":[]},{"level":2,"title":"スニペット","slug":"スニペット","link":"#スニペット","children":[]},{"level":2,"title":"ネタバレ","slug":"ネタバレ","link":"#ネタバレ","children":[]},{"level":2,"title":"Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong","slug":"looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong","link":"#looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong","children":[{"level":3,"title":"Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong","slug":"looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong-1","link":"#looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong-1","children":[{"level":4,"title":"Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong","slug":"looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong-2","link":"#looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong-2","children":[]}]}]},{"level":2,"title":"テーブル","slug":"テーブル","link":"#テーブル","children":[]}],"params":{"tables":{"/assets/tables/test/my_table.json":{"columns":{"number_column":{"name":"Number","sortable":true,"textAlign":"right"},"boolean_column":{"name":"Boolean","textAlign":"center"},"my_other_column":{"name":"Another Column"}},"rows":[{"number_column":1,"my_other_column":"Aute <strong>incididunt proident</strong> incididunt <s>ullamco</s> eiusmod ea dolor ea Lorem commodo. <em>Veniam nulla cillum officia incididunt deserunt. Dolor consectetur consectetur veniam consectetur Lorem incididunt esse non.</em> Mollit et do et ad. Commodo nostrud culpa Lorem reprehenderit sunt quis cupidatat id id tempor ullamco. Aliqua ipsum amet ea nisi culpa aliqua dolor aute duis nisi laborum incididunt incididunt Lorem. Anim irure fugiat et qui magna magna ullamco ullamco sint exercitation in commodo aliquip. Ad irure laborum deserunt irure qui proident elit. Incididunt minim magna occaecat proident ut cillum sunt culpa aliquip voluptate reprehenderit dolore. Est veniam sunt labore nulla. Quis pariatur id adipisicing sit magna elit commodo duis cillum voluptate esse nulla aliquip occaecat. Ea deserunt consequat tempor reprehenderit eu officia qui mollit. Officia exercitation nostrud do ipsum fugiat fugiat commodo commodo ipsum exercitation ex Lorem incididunt culpa.","boolean_column":true},{"boolean_column":false,"number_column":2,"my_other_column":"Proident amet id ut exercitation. Do esse exercitation eiusmod Lorem incididunt exercitation esse fugiat Lorem et. Magna eu ex excepteur qui est consectetur nostrud dolor ea est. Occaecat aliqua eu reprehenderit excepteur aute qui laborum consectetur incididunt eu anim pariatur."},{"number_column":3,"boolean_column":false,"my_other_column":["Proident amet <em>id</em> ut exercitation.","Do esse exercitation eiusmod Lorem incididunt exercitation esse fugiat Lorem et.","Magna eu ex excepteur qui est consectetur nostrud dolor ea est."]}]}}},"relativePath":"test.md","filePath":"test.md"}');
const _sfc_main = { name: "test.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_FolderView = resolveComponent("FolderView");
  const _component_Spoiler = resolveComponent("Spoiler");
  const _component_Table = resolveComponent("Table");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="danger custom-block"><p class="custom-block-title">SECRET</p><p>ここは開発者が新機能を開発し、バグを見つけるために使う特別な場所です。かなり散らかっていても気にしないでください。見た目を整える必要はありません！</p></div><p>ねえ、ここで何をしているんですか？ どうやってここに来たんですか？ wiki の編集に戻ってください！</p><h2 id="引用" tabindex="-1">引用 <a class="header-anchor" href="#引用" aria-label="Permalink to &quot;引用&quot;">​</a></h2><p><code class="shiki"><span>&gt;</span></code> を使うとスペースを作れます:</p><blockquote><p>移動しましたか？</p><blockquote><p>二重</p></blockquote></blockquote><p>実際には移動していません</p><p>インデントは <code class="shiki"><span>code</span></code> のように機能します:</p><pre><code>実際には移動していません
</code></pre><h2 id="ボタン" tabindex="-1">ボタン <a class="header-anchor" href="#ボタン" aria-label="Permalink to &quot;ボタン&quot;">​</a></h2><h3 id="デフォルト" tabindex="-1">デフォルト <a class="header-anchor" href="#デフォルト" aria-label="Permalink to &quot;デフォルト&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Button, { link: "#buttons" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`テキスト`);
      } else {
        return [
          createTextVNode("テキスト")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 id="色付き" tabindex="-1">色付き <a class="header-anchor" href="#色付き" aria-label="Permalink to &quot;色付き&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Button, {
    link: "#buttons",
    color: "red"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` テキスト `);
      } else {
        return [
          createTextVNode(" テキスト ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="コードブロック" tabindex="-1">コードブロック <a class="header-anchor" href="#コードブロック" aria-label="Permalink to &quot;コードブロック&quot;">​</a></h2><h3 id="コードヘッダー" tabindex="-1">コードヘッダー <a class="header-anchor" href="#コードヘッダー" aria-label="Permalink to &quot;コードヘッダー&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong.json `);
      } else {
        return [
          createTextVNode(" loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong.json ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;var&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;a very very very loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong value&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`func`);
      } else {
        return [
          createTextVNode("func")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`func`);
      } else {
        return [
          createTextVNode("func")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span>scoreboard players add @a joined 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#Your Commands Here (example)</span></span>
<span class="line"><span>tp @a[scores={joined=0}] 0 65 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>scoreboard players reset * joined</span></span>
<span class="line"><span>scoreboard players set @a joined 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>scoreboard objectives add world dummy</span></span>
<span class="line"><span>scoreboard players add initialized world 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#Your Commands Here (example)</span></span>
<span class="line"><span>execute if score initialized world matches 0 run say New world created!</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>scoreboard players set initialized world 1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="行番号なし" tabindex="-1">行番号なし <a class="header-anchor" href="#行番号なし" aria-label="Permalink to &quot;行番号なし&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;var&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;a very very very loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong value&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="コメント" tabindex="-1">コメント <a class="header-anchor" href="#コメント" aria-label="Permalink to &quot;コメント&quot;">​</a></h2><p>このテキストが見えますか（いいえ）？</p><h2 id="コンテナ" tabindex="-1">コンテナ <a class="header-anchor" href="#コンテナ" aria-label="Permalink to &quot;コンテナ&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">見出し!?</p><p>このように情報コンテナを作れます</p></div><div class="tip custom-block"><p class="custom-block-title">見出し!?</p><p>このようにヒントコンテナを作れます</p></div><div class="warning custom-block"><p class="custom-block-title">見出し!?</p><p>このように警告コンテナを作れます</p></div><div class="danger custom-block"><p class="custom-block-title">見出し!?</p><p>このように危険コンテナを作れます</p></div><h2 id="フォルダビュー" tabindex="-1">フォルダビュー <a class="header-anchor" href="#フォルダビュー" aria-label="Permalink to &quot;フォルダビュー&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "path/to/folder/with/file.mcfunction",
    "path/to/file.json",
    "get/out/of/my/swamp.mcstructure"
  ] }, null, _parent));
  _push(`<h2 id="見出し-2" tabindex="-1">見出し 2 <a class="header-anchor" href="#見出し-2" aria-label="Permalink to &quot;見出し 2&quot;">​</a></h2><p>テキスト</p><h3 id="見出し-3" tabindex="-1">見出し 3 <a class="header-anchor" href="#見出し-3" aria-label="Permalink to &quot;見出し 3&quot;">​</a></h3><p>テキスト</p><h4 id="見出し-4" tabindex="-1">見出し 4 <a class="header-anchor" href="#見出し-4" aria-label="Permalink to &quot;見出し 4&quot;">​</a></h4><p>テキスト</p><h5 id="見出し-5" tabindex="-1">見出し 5 <a class="header-anchor" href="#見出し-5" aria-label="Permalink to &quot;見出し 5&quot;">​</a></h5><p>テキスト</p><h6 id="見出し-6" tabindex="-1">見出し 6 <a class="header-anchor" href="#見出し-6" aria-label="Permalink to &quot;見出し 6&quot;">​</a></h6><p>テキスト</p><h2 id="水平線" tabindex="-1">水平線 <a class="header-anchor" href="#水平線" aria-label="Permalink to &quot;水平線&quot;">​</a></h2><p>テキスト...</p><hr><p>...そしてさらに！</p><h2 id="リスト" tabindex="-1">リスト <a class="header-anchor" href="#リスト" aria-label="Permalink to &quot;リスト&quot;">​</a></h2><h3 id="チェック済み" tabindex="-1">チェック済み <a class="header-anchor" href="#チェック済み" aria-label="Permalink to &quot;チェック済み&quot;">​</a></h3><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> a</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> b</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> c</li></ul><h3 id="順序付き" tabindex="-1">順序付き <a class="header-anchor" href="#順序付き" aria-label="Permalink to &quot;順序付き&quot;">​</a></h3><ol><li>a</li><li>b</li><li>c</li></ol><h3 id="順不同" tabindex="-1">順不同 <a class="header-anchor" href="#順不同" aria-label="Permalink to &quot;順不同&quot;">​</a></h3><ul><li>a</li><li>b</li><li>c</li></ul><h2 id="molang" tabindex="-1">Molang <a class="header-anchor" href="#molang" aria-label="Permalink to &quot;Molang&quot;">​</a></h2><div class="language-molang vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">molang</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">true</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0.0f</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-0.0f</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2.5e2</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2.5e+2</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">2.5e-2</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&#39;string&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">this</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">break</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">continue</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">return</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">!</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">=</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">&lt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">!=</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">==</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">&lt;=</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">&gt;=</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">? :</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">*</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">+</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">-</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">&amp;&amp;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">||</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">??</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">-&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">loop</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">()</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">for_each</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">()</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">c</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}">my_value</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">context</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}">my_value</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">q</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}">my_value</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">query</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}">my_value</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">query</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">my_value</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">()</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">math</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}">my_value</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">math</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">my_value</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">()</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">t</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">my_value</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">temp</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">my_value</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">v</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">my_value</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">variable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">my_value</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">array</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}">my_value</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">array</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}">textures</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">v</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">texture_index</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">geometry</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}">my_value</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">material</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}">my_value</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">texture</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}">my_value</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div><h2 id="スニペット" tabindex="-1">スニペット <a class="header-anchor" href="#スニペット" aria-label="Permalink to &quot;スニペット&quot;">​</a></h2><p><code class="shiki"><span>Ctrl + Space</span></code></p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><h2 id="ネタバレ" tabindex="-1">ネタバレ <a class="header-anchor" href="#ネタバレ" aria-label="Permalink to &quot;ネタバレ&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Title" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 id="looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong" tabindex="-1"${_scopeId}>Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong <a class="header-anchor" href="#looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong" aria-label="Permalink to &quot;Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong&quot;"${_scopeId}>​</a></h2><h3 id="looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong-1" tabindex="-1"${_scopeId}>Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong <a class="header-anchor" href="#looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong-1" aria-label="Permalink to &quot;Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong&quot;"${_scopeId}>​</a></h3><h4 id="looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong-2" tabindex="-1"${_scopeId}>Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong <a class="header-anchor" href="#looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong-2" aria-label="Permalink to &quot;Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong&quot;"${_scopeId}>​</a></h4><p${_scopeId}><code class="shiki"${_scopeId}><span${_scopeId}>somelongsinglecodeline:rjseut;lwkporiv;jr;oiU;OIRJB;OUBSOIU;LJ;OIJLj;fgdhokfdxhlpjklfjoijselvjlisue;vltjvzsa\\dfhgz\\dfgiuszehgiushezdgiuhsdghiksdaghkdsgaghkjsdhksdauhugkysdiuhiui</span></code></p>`);
      } else {
        return [
          createVNode("h2", {
            id: "looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong",
            tabindex: "-1"
          }, [
            createTextVNode("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong "),
            createVNode("a", {
              class: "header-anchor",
              href: "#looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong",
              "aria-label": 'Permalink to "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong"'
            }, "​")
          ]),
          createVNode("h3", {
            id: "looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong-1",
            tabindex: "-1"
          }, [
            createTextVNode("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong "),
            createVNode("a", {
              class: "header-anchor",
              href: "#looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong-1",
              "aria-label": 'Permalink to "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong"'
            }, "​")
          ]),
          createVNode("h4", {
            id: "looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong-2",
            tabindex: "-1"
          }, [
            createTextVNode("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong "),
            createVNode("a", {
              class: "header-anchor",
              href: "#looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong-2",
              "aria-label": 'Permalink to "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong"'
            }, "​")
          ]),
          createVNode("p", null, [
            createVNode("code", { class: "shiki" }, [
              createVNode("span", null, "somelongsinglecodeline:rjseut;lwkporiv;jr;oiU;OIRJB;OUBSOIU;LJ;OIJLj;fgdhokfdxhlpjklfjoijselvjlisue;vltjvzsa\\dfhgz\\dfgiuszehgiushezdgiuhsdghiksdaghkdsgaghkjsdhksdauhugkysdiuhiui")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="テーブル" tabindex="-1">テーブル <a class="header-anchor" href="#テーブル" aria-label="Permalink to &quot;テーブル&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Table, { data: "my_table.json" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("test.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const test = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  test as default
};
