import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"はじめに","description":"「はじめに」ガイドの概要","frontmatter":{"title":"はじめに","category":"Guide","description":"「はじめに」ガイドの概要","tags":["guide"],"nav_order":1,"prefix":"1. ","mentions":["KaiFireborn","SirLich","BlueFrog130","sermah","SmokeyStack","TheItsNameless","MedicalJewel105","smell-of-curry","Hatchibombotar","aym-i","QuazChick"]},"headers":[{"level":2,"title":"アドオンとは？","slug":"アドオンとは","link":"#アドオンとは","children":[]},{"level":2,"title":"何が学べるの？","slug":"何が学べるの","link":"#何が学べるの","children":[]},{"level":2,"title":"このガイドは最新？","slug":"このガイドは最新","link":"#このガイドは最新","children":[]},{"level":2,"title":"付録ページ","slug":"付録ページ","link":"#付録ページ","children":[]},{"level":2,"title":"ガイドを終えたら","slug":"ガイドを終えたら","link":"#ガイドを終えたら","children":[]},{"level":2,"title":"次へ","slug":"次へ","link":"#次へ","children":[]}],"relativePath":"guide/introduction.md","filePath":"guide/introduction.md"}');
const _sfc_main = { name: "guide/introduction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="アドオンとは" tabindex="-1">アドオンとは？ <a class="header-anchor" href="#アドオンとは" aria-label="Permalink to &quot;アドオンとは？&quot;">​</a></h2><p>アドオンは、Minecraft: Bedrock Edition（<em>Android、Chromebook、コンソール、Windows、iOS</em>）における Java Edition の MOD に相当するものです。</p><p>ただし Java Edition とは異なり、Bedrock Edition の API はコミュニティではなく Mojang が公式に管理しており、後方互換性があります。つまり、古いバージョンの Minecraft 向けに作られたアドオンは、将来のバージョンでも引き続き動作します。</p><p>一般的には、<em>MOD</em> はゲームを <em>修正する</em> もの、<em>アドオン</em> はゲームに <em>追加する</em> ものだと考えるとよいでしょう。これは Mojang が提供する開発の方向性に沿ったものです。 バニラの内容を直接変更することも可能ですが、複数のアドオンが同じ要素を変更すると互換性の問題が起きる場合があるため、推奨されません。</p><div class="tip custom-block"><p class="custom-block-title">代替リソース</p><p>このガイドにも自信はありますが、始め方はこれだけではありません。 Mojang は Creator Platform 上で独自の <a href="https://learn.microsoft.com/minecraft/creator/documents/gettingstarted" target="_blank" rel="noreferrer">はじめ方ガイド</a> を公開しているので、別の説明が必要ならそちらも参考にできます。</p></div><h2 id="何が学べるの" tabindex="-1">何が学べるの？ <a class="header-anchor" href="#何が学べるの" aria-label="Permalink to &quot;何が学べるの？&quot;">​</a></h2><p>このガイドは初心者向けのチュートリアルで、アドオン作成の最初の段階を順を追って学べるように構成されています。 ここでは、完全に動作する独自の Ghost エンティティ、Ectoplasm アイテム、そして関連するいくつかのファイルを作成します。</p><p>このガイドを終えるころには、ひとりでアドオン一式を作り上げ、実際に遊んだり改造したりできるようになります。</p><h2 id="このガイドは最新" tabindex="-1">このガイドは最新？ <a class="header-anchor" href="#このガイドは最新" aria-label="Permalink to &quot;このガイドは最新？&quot;">​</a></h2><p>このガイドは、Minecraft: Bedrock Edition の最新の <em>安定版</em> 向けに書かれています。 古いバージョンでは動作しない内容が多く、今後のバージョンで変更される部分もあります。</p><p>できるだけ最新の状態を保つようにしていますので、心配はいりません。</p><h2 id="付録ページ" tabindex="-1">付録ページ <a class="header-anchor" href="#付録ページ" aria-label="Permalink to &quot;付録ページ&quot;">​</a></h2><p>この手順ガイドに加えて、このセクションにはいくつかの追加ページがあります。必要に応じて自由に参照してください。</p><ul><li><a href="/guide/understanding-json">JSON の理解</a></li><li><a href="/guide/download-packs">サンプルパックのダウンロード</a></li><li><a href="/guide/troubleshooting">トラブルシューティング</a></li></ul><h2 id="ガイドを終えたら" tabindex="-1">ガイドを終えたら <a class="header-anchor" href="#ガイドを終えたら" aria-label="Permalink to &quot;ガイドを終えたら&quot;">​</a></h2><p>ガイドセクションの最後まで進めば、最初のアドオンが完成します。さらに知識を広げるために、次のことも試してみてください。</p><ul><li><p>自分のプロジェクトを始めてみましょう！</p></li><li><p>付録にある各セクションのサブガイドを使って、MCBE（Minecraft: Bedrock Edition）に追加する他の要素も学んでみましょう。</p><p>たとえば、ブロック、バイオーム、アイテム、アニメーションコントローラー、さらには JavaScript によるスクリプトまで含まれます。</p><p>一部のセクションでは、各トピックについてより技術的で詳細なチュートリアルや資料も用意されています。</p></li></ul><h2 id="次へ" tabindex="-1">次へ <a class="header-anchor" href="#次へ" aria-label="Permalink to &quot;次へ&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Button, { link: "/guide/addons" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`次へ: アドオンの解説`);
      } else {
        return [
          createTextVNode("次へ: アドオンの解説")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/introduction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const introduction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  introduction as default
};
