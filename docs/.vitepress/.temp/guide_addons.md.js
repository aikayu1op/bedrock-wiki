import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"アドオンの解説","description":"アドオンの基本","frontmatter":{"title":"アドオンの解説","category":"Guide","description":"アドオンの基本","nav_order":2,"prefix":"2. ","mentions":["SirLich","Dreamedc2015","sermah","cda94581","BluMonkie","TheItsNameless","MedicalJewel105","ChibiMango","profeplaysminecraft","aym-i","SmokeyStack","QuazChick"]},"headers":[{"level":2,"title":"アドオンとは？","slug":"アドオンとは","link":"#アドオンとは","children":[]},{"level":2,"title":"Behavior Pack と Resource Pack の違いは？","slug":"behavior-pack-と-resource-pack-の違いは","link":"#behavior-pack-と-resource-pack-の違いは","children":[{"level":3,"title":"Resource Pack","slug":"resource-pack","link":"#resource-pack","children":[]},{"level":3,"title":"Behavior Pack","slug":"behavior-pack","link":"#behavior-pack","children":[]},{"level":3,"title":"パック間の通信","slug":"パック間の通信","link":"#パック間の通信","children":[]}]},{"level":2,"title":"次へ","slug":"次へ","link":"#次へ","children":[]}],"relativePath":"guide/addons.md","filePath":"guide/addons.md"}');
const _sfc_main = { name: "guide/addons.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="アドオンとは" tabindex="-1">アドオンとは？ <a class="header-anchor" href="#アドオンとは" aria-label="Permalink to &quot;アドオンとは？&quot;">​</a></h2><p>アドオンを使うと、Minecraft の内容を <em>変更</em> したり、既存のコンテンツを <em>削除</em> したり、自分の要素を <em>追加</em> したりして、Minecraft の体験を拡張できます。アドオンは非常に強力で、カスタムエンティティ、アイテム、ブロックに加え、カスタムの loot table やクラフトレシピなども作成できます。想像力しだいです！</p><p>アドオンは主に <a href="/guide/understanding-json">json</a> で記述されます。json は構造化されたデータ形式です。アドオンとは基本的に、ゲームに何らかの変更や追加を行う json ファイル、画像、音声の集合です。</p><div class="tip custom-block"><p class="custom-block-title">Scripting API</p><p>このガイドを書いた当時から、&#39;Add-On&#39; の定義は JavaScript の scripting API まで含むようになりました。この API については、このサイトの別の場所で詳しく学べます。</p></div><h2 id="behavior-pack-と-resource-pack-の違いは" tabindex="-1">Behavior Pack と Resource Pack の違いは？ <a class="header-anchor" href="#behavior-pack-と-resource-pack-の違いは" aria-label="Permalink to &quot;Behavior Pack と Resource Pack の違いは？&quot;">​</a></h2><p>アドオンは 2 種類のパックに分かれます。Resource Pack と Behavior Pack です。どちらも単独で機能しますが、一般的には一緒に使います。Resource Pack と Behavior Pack の両方がそろっているものを <em>アドオン</em> と呼びます。</p><h3 id="resource-pack" tabindex="-1">Resource Pack <a class="header-anchor" href="#resource-pack" aria-label="Permalink to &quot;Resource Pack&quot;">​</a></h3><p>Resource Pack は <em>クライアント</em> または RP とも呼ばれ、アドオンの <em>見た目</em> と <em>音</em> を担当します。たとえば次のようなものです。</p><ul><li>テクスチャ</li><li>音</li><li>ジオメトリ</li><li>アニメーション</li><li>パーティクル</li></ul><h3 id="behavior-pack" tabindex="-1">Behavior Pack <a class="header-anchor" href="#behavior-pack" aria-label="Permalink to &quot;Behavior Pack&quot;">​</a></h3><p>Behavior Pack は <em>サーバー</em> または BP とも呼ばれ、アドオンの <em>ロジック</em> を担当します。たとえば次のようなものです。</p><ul><li>エンティティの動作</li><li>クラフトレシピ</li><li>loot table</li><li>カスタム関数</li></ul><h3 id="パック間の通信" tabindex="-1">パック間の通信 <a class="header-anchor" href="#パック間の通信" aria-label="Permalink to &quot;パック間の通信&quot;">​</a></h3><p>ほとんどの場合、RP と BP は両方セットで使います。これらのパックは、片方で定義したアセットをもう片方から参照できるという意味で、互いに通信したり、正しく動作するために相手を必要としたりします。たとえば、カスタムエンティティを作るには 2 つのファイルが必要です。</p><ul><li>RP のエンティティ定義。エンティティの <em>見た目</em> を説明するもの</li><li>BP のエンティティ定義。エンティティの <em>動作</em> を説明するもの</li></ul><h2 id="次へ" tabindex="-1">次へ <a class="header-anchor" href="#次へ" aria-label="Permalink to &quot;次へ&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">学んだこと</p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> アドオンは Minecraft のコンテンツを変更したり、自分の要素を追加したりする</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> アドオンは主に JSON で書かれる</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> アドオンは <strong>Resource Pack</strong> と <strong>Behavior Pack</strong> に分かれる <ul><li>Resource Pack にはテクスチャ、音などが含まれ、ゲームの見た目を制御する</li><li>Behavior Pack にはエンティティの挙動、クラフトレシピなどが含まれ、ゲームのロジックを制御する</li></ul></li></ul></div>`);
  _push(ssrRenderComponent(_component_Button, { link: "/guide/software-preparation" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`次へ: ソフトウェアと準備`);
      } else {
        return [
          createTextVNode("次へ: ソフトウェアと準備")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/addons.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addons = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  addons as default
};
