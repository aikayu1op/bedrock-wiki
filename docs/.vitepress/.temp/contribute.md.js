import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bedrock Wiki への貢献","description":"Bedrock Wiki にはあなたの貢献が必要です！","frontmatter":{"title":"Bedrock Wiki への貢献","description":"Bedrock Wiki にはあなたの貢献が必要です！","show_contributors":false,"show_outline":false,"hidden":true},"headers":[{"level":2,"title":"貢献について","slug":"貢献について","link":"#貢献について","children":[]}],"relativePath":"contribute.md","filePath":"contribute.md"}');
const _sfc_main = { name: "contribute.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CardGrid = resolveComponent("CardGrid");
  const _component_Card = resolveComponent("Card");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>こんにちは！</p><p>誤字を見つけましたか？ ガイドの途中で行き詰まりましたか？ 新しい何かを追加したいですか？ それなら、ここがぴったりの場所です！</p><h2 id="貢献について" tabindex="-1">貢献について <a class="header-anchor" href="#貢献について" aria-label="Permalink to &quot;貢献について&quot;">​</a></h2><p>Bedrock Wiki は完全なオープンソースプロジェクトであり、Bedrock OSS Organization と素晴らしいコミュニティによって維持されています。</p><p>Wiki に貢献するのに、Bedrock OSS の一員である必要はありません。この組織のメンバーは Wiki の編集経験があり、いつでも質問に答えられます。連絡を取りたい場合は、<a href="https://discord.gg/XjV87YN" target="_blank" rel="noreferrer">Discord サーバー</a> に参加してください。</p>`);
  _push(ssrRenderComponent(_component_CardGrid, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Card, {
          title: "GitHub",
          link: "https://github.com/Bedrock-OSS/bedrock-wiki",
          image: "/assets/images/misc/github.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>Wiki は GitHub 上でホスト・編集されており、編集内容はプルリクエストの手順で処理されます。</p><p${_scopeId2}>直接編集案を送っていただくのも大歓迎です。</p>`);
            } else {
              return [
                createVNode("p", null, "Wiki は GitHub 上でホスト・編集されており、編集内容はプルリクエストの手順で処理されます。"),
                createVNode("p", null, "直接編集案を送っていただくのも大歓迎です。")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "お問い合わせ",
          link: "https://discord.gg/XjV87YN",
          image: "/assets/images/discord/oss.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>Bedrock OSS は、Bedrock 向けのプログラミングに重点を置いた creators 向け Discord で、Wiki の編集内容はすべてそこで議論されます。</p><p${_scopeId2}>ここでは、Wiki の問題を報告したり、新しい記事の作業を共同で進めたり、各ページの著者と気軽に連絡を取ったりできます。</p>`);
            } else {
              return [
                createVNode("p", null, "Bedrock OSS は、Bedrock 向けのプログラミングに重点を置いた creators 向け Discord で、Wiki の編集内容はすべてそこで議論されます。"),
                createVNode("p", null, "ここでは、Wiki の問題を報告したり、新しい記事の作業を共同で進めたり、各ページの著者と気軽に連絡を取ったりできます。")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "やり方を学ぶ",
          link: "/contribute-how-to",
          image: "/assets/images/icons/compass.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>何をすればいいのかわからないですか？</p><p${_scopeId2}>作業環境のセットアップや GitHub の使い方を含め、Wiki への貢献方法の詳細は、ガイドをご覧ください！</p>`);
            } else {
              return [
                createVNode("p", null, "何をすればいいのかわからないですか？"),
                createVNode("p", null, "作業環境のセットアップや GitHub の使い方を含め、Wiki への貢献方法の詳細は、ガイドをご覧ください！")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "ページ編集",
          link: "/contribute-style",
          image: "/assets/images/icons/logo.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>スタイルを維持することはとても重要です。そうすることで、ガイドを学びやすく魅力的なまま保てます。すべてのページを統一したスタイルで書きましょう。</p><p${_scopeId2}>ここでは、特別なコンポーネントの使い方や、Wiki のスタイル調整を学べます。</p>`);
            } else {
              return [
                createVNode("p", null, "スタイルを維持することはとても重要です。そうすることで、ガイドを学びやすく魅力的なまま保てます。すべてのページを統一したスタイルで書きましょう。"),
                createVNode("p", null, "ここでは、特別なコンポーネントの使い方や、Wiki のスタイル調整を学べます。")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Card, {
            title: "GitHub",
            link: "https://github.com/Bedrock-OSS/bedrock-wiki",
            image: "/assets/images/misc/github.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, "Wiki は GitHub 上でホスト・編集されており、編集内容はプルリクエストの手順で処理されます。"),
              createVNode("p", null, "直接編集案を送っていただくのも大歓迎です。")
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "お問い合わせ",
            link: "https://discord.gg/XjV87YN",
            image: "/assets/images/discord/oss.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, "Bedrock OSS は、Bedrock 向けのプログラミングに重点を置いた creators 向け Discord で、Wiki の編集内容はすべてそこで議論されます。"),
              createVNode("p", null, "ここでは、Wiki の問題を報告したり、新しい記事の作業を共同で進めたり、各ページの著者と気軽に連絡を取ったりできます。")
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "やり方を学ぶ",
            link: "/contribute-how-to",
            image: "/assets/images/icons/compass.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, "何をすればいいのかわからないですか？"),
              createVNode("p", null, "作業環境のセットアップや GitHub の使い方を含め、Wiki への貢献方法の詳細は、ガイドをご覧ください！")
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "ページ編集",
            link: "/contribute-style",
            image: "/assets/images/icons/logo.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, "スタイルを維持することはとても重要です。そうすることで、ガイドを学びやすく魅力的なまま保てます。すべてのページを統一したスタイルで書きましょう。"),
              createVNode("p", null, "ここでは、特別なコンポーネントの使い方や、Wiki のスタイル調整を学べます。")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("contribute.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contribute = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contribute as default
};
