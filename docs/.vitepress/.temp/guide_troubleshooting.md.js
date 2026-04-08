import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./content_log.98hGrexA.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"トラブルシューティング","description":"アドオンの問題を解決するためのシンプルなガイドです。","frontmatter":{"title":"トラブルシューティング","category":"Extra","description":"アドオンの問題を解決するためのシンプルなガイドです。","prefix":"c. ","nav_order":3,"tags":["help"],"mentions":["SirLich","Joelant05","destruc7ion","Dreamedc2015","MedicalJewel105","Lufurrius","SmokeyStack","QuazChick"]},"headers":[{"level":2,"title":"リロード","slug":"リロード","link":"#リロード","children":[]},{"level":2,"title":"環境","slug":"環境","link":"#環境","children":[]},{"level":2,"title":"Content Log","slug":"content-log","link":"#content-log","children":[{"level":3,"title":"Content Log のファイル","slug":"content-log-のファイル","link":"#content-log-のファイル","children":[]}]},{"level":2,"title":"バニラサンプルの利用","slug":"バニラサンプルの利用","link":"#バニラサンプルの利用","children":[]},{"level":2,"title":"JSON スキーマ","slug":"json-スキーマ","link":"#json-スキーマ","children":[]},{"level":2,"title":"アドオンのトラブルシューティング","slug":"アドオンのトラブルシューティング","link":"#アドオンのトラブルシューティング","children":[{"level":3,"title":"ブロック","slug":"ブロック","link":"#ブロック","children":[]},{"level":3,"title":"エンティティ","slug":"エンティティ","link":"#エンティティ","children":[]},{"level":3,"title":"アイテム","slug":"アイテム","link":"#アイテム","children":[]}]}],"relativePath":"guide/troubleshooting.md","filePath":"guide/troubleshooting.md"}');
const _sfc_main = { name: "guide/troubleshooting.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Minecraft でアドオンを作るのは、<em>慣れてしまえば</em> 比較的わかりやすい作業です。最初のうちは、たいてい苛立ちやバグが多い過程になります。この文書には、厄介なバグを直すためのヒントやコツ、そしてベストプラクティスがまとめられています。</p><p>特定の分野のトラブルシューティングに入る前に、ページ全体を読んでください。</p><h2 id="リロード" tabindex="-1">リロード <a class="header-anchor" href="#リロード" aria-label="Permalink to &quot;リロード&quot;">​</a></h2><p>まず、Minecraft を必ず再読み込みしてください。つまり、ゲームを完全に終了してから再起動します。これは多くのエラーを見つける助けになります。特に、テクスチャや loot table のようにファイルパス経由で参照されるアセットに関するエラーに有効です。</p><h2 id="環境" tabindex="-1">環境 <a class="header-anchor" href="#環境" aria-label="Permalink to &quot;環境&quot;">​</a></h2><p>厄介なバグを防ぐ最善の方法は、正しい環境で作業することです。エディターのおすすめについては、<a href="/guide/software-preparation">ソフトウェア準備ドキュメント</a> を確認してください。</p><p>最も重要なのは、JSON リンターを用意すること（または <a href="https://jsonlint.com/" target="_blank" rel="noreferrer">オンライン JSON リンター</a> を使うこと）と、パックを <code class="shiki"><span>development_behavior_packs</span></code> と <code class="shiki"><span>development_resource_packs</span></code> に置くことです。 パックを通常のフォルダーに置いたままだと、「pack caching」問題が起こることがあります。これは、一方の場所でファイルを編集しているのに、ゲーム側が古いファイルを使い続けてしまう現象です。</p><h2 id="content-log" tabindex="-1">Content Log <a class="header-anchor" href="#content-log" aria-label="Permalink to &quot;Content Log&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Content Log を使いましょう！</p><p>Content log は、アドオンをデバッグするために使える最良のツールです。この手順は飛ばさないでください！</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>エラーはワールドの読み込みごとに消去されないため、Content log に表示されるエラーは以前の読み込み時の <em>古い</em> エラーである場合があります。</p></div><p>「Content Log」は、パック内で見つかった問題の一覧です。Minecraft は、ワールドを読み込むたび、またはグローバル Resource pack を変更するたびに、この一覧を生成します。</p><p>次のような問題を検出できます。</p><ul><li>テクスチャパスが間違っている</li><li>コンポーネント名のスペルミス</li><li>JSON 形式が正しくない</li></ul><p>Content log は <code class="shiki"><span>Settings &gt; Creator</span></code> で有効にできます。Content log は読み込み時にゲーム内へ表示され、プレイ中にさらにエラーが発生した場合も表示されます。</p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><h3 id="content-log-のファイル" tabindex="-1">Content Log のファイル <a class="header-anchor" href="#content-log-のファイル" aria-label="Permalink to &quot;Content Log のファイル&quot;">​</a></h3><p>Content log は <code class="shiki"><span>.txt</span></code> 形式で次の場所に保存されます。</p><ul><li>Windows: <code class="shiki"><span>%APPDATA%\\logs</span></code></li><li>Android: <code class="shiki"><span>/storage/emulated/0/Android/data/com.mojang.minecraftpe/files/games/com.mojang/logs</span></code></li></ul><h2 id="バニラサンプルの利用" tabindex="-1">バニラサンプルの利用 <a class="header-anchor" href="#バニラサンプルの利用" aria-label="Permalink to &quot;バニラサンプルの利用&quot;">​</a></h2><p>バニラの resource pack と behavior pack は <a href="https://github.com/Mojang/bedrock-samples" target="_blank" rel="noreferrer">ここ</a> で見つけられます。 バニラと自分のコードを比較すると、問題の特定に役立つかもしれません！</p><h2 id="json-スキーマ" tabindex="-1">JSON スキーマ <a class="header-anchor" href="#json-スキーマ" aria-label="Permalink to &quot;JSON スキーマ&quot;">​</a></h2><p>JSON Schema はファイル検証に役立つツールです。JSON Schema については <a href="/meta/using-schemas">こちら</a> で詳しく学べます。</p><h2 id="アドオンのトラブルシューティング" tabindex="-1">アドオンのトラブルシューティング <a class="header-anchor" href="#アドオンのトラブルシューティング" aria-label="Permalink to &quot;アドオンのトラブルシューティング&quot;">​</a></h2><h3 id="ブロック" tabindex="-1">ブロック <a class="header-anchor" href="#ブロック" aria-label="Permalink to &quot;ブロック&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Button, { link: "/blocks/troubleshooting-blocks" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ブロックのトラブルシューティング`);
      } else {
        return [
          createTextVNode("ブロックのトラブルシューティング")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 id="エンティティ" tabindex="-1">エンティティ <a class="header-anchor" href="#エンティティ" aria-label="Permalink to &quot;エンティティ&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Button, { link: "/entities/troubleshooting-entities" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`エンティティのトラブルシューティング`);
      } else {
        return [
          createTextVNode("エンティティのトラブルシューティング")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 id="アイテム" tabindex="-1">アイテム <a class="header-anchor" href="#アイテム" aria-label="Permalink to &quot;アイテム&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Button, { link: "/items/troubleshooting-items" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`アイテムのトラブルシューティング`);
      } else {
        return [
          createTextVNode("アイテムのトラブルシューティング")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/troubleshooting.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const troubleshooting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  troubleshooting as default
};
