import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Discord","description":"Bedrock Wiki の Discord コミュニティです。","frontmatter":{"title":"Discord","description":"Bedrock Wiki の Discord コミュニティです。","show_contributors":false,"show_outline":false,"hidden":true},"headers":[{"level":2,"title":"サーバー","slug":"サーバー","link":"#サーバー","children":[]}],"relativePath":"discord.md","filePath":"discord.md"}');
const _sfc_main = { name: "discord.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CardGrid = resolveComponent("CardGrid");
  const _component_Card = resolveComponent("Card");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Bedrock Wiki は、参加を歓迎している 2 つの活発な Discord コミュニティによって支えられています。さらに、Bedrock 向けツールやコンテンツ、あるいは単純に交流を目的としたコミュニティ Discord の一覧も継続的に更新しています。</p><p>質問をしたり、Bedrock アドオンに参加したり、このサイトに貢献したりするために、ぜひ気軽に参加してください。</p><h2 id="サーバー" tabindex="-1">サーバー <a class="header-anchor" href="#サーバー" aria-label="Permalink to &quot;サーバー&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CardGrid, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Card, {
          title: "Bedrock Add-Ons",
          link: "https://discord.gg/46JUdQb",
          image: "/assets/images/discord/bao.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>Bedrock Add-Ons は、アドオンの学習と制作のための creators 向けの中心的な Discord です。</p><p${_scopeId2}>ここでは、アドオンについて学んだり、質問したり、イベントに参加したりできます。</p>`);
            } else {
              return [
                createVNode("p", null, "Bedrock Add-Ons は、アドオンの学習と制作のための creators 向けの中心的な Discord です。"),
                createVNode("p", null, "ここでは、アドオンについて学んだり、質問したり、イベントに参加したりできます。")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "Bedrock OSS",
          link: "https://discord.gg/XjV87YN",
          image: "/assets/images/discord/oss.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>Bedrock OSS は、Bedrock 向けのプログラミングに重点を置いた creators 向け Discord です。</p><p${_scopeId2}>ここでは、wiki の問題を報告したり、新しい記事の作業を共同で進めたり、bridge. や Blockception の VSCode アドオンなど Bedrock ツールの助けを得たりできます。</p>`);
            } else {
              return [
                createVNode("p", null, "Bedrock OSS は、Bedrock 向けのプログラミングに重点を置いた creators 向け Discord です。"),
                createVNode("p", null, "ここでは、wiki の問題を報告したり、新しい記事の作業を共同で進めたり、bridge. や Blockception の VSCode アドオンなど Bedrock ツールの助けを得たりできます。")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "追加サーバー",
          link: "/meta/useful-links#discord-links",
          image: "/assets/images/icons/book.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>コミュニティ Discord の一覧も管理しており、<a href="/meta/useful-links"${_scopeId2}>便利なリンク</a> のページで確認できます。</p>`);
            } else {
              return [
                createVNode("p", null, [
                  createTextVNode("コミュニティ Discord の一覧も管理しており、"),
                  createVNode("a", { href: "/meta/useful-links" }, "便利なリンク"),
                  createTextVNode(" のページで確認できます。")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Card, {
            title: "Bedrock Add-Ons",
            link: "https://discord.gg/46JUdQb",
            image: "/assets/images/discord/bao.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, "Bedrock Add-Ons は、アドオンの学習と制作のための creators 向けの中心的な Discord です。"),
              createVNode("p", null, "ここでは、アドオンについて学んだり、質問したり、イベントに参加したりできます。")
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "Bedrock OSS",
            link: "https://discord.gg/XjV87YN",
            image: "/assets/images/discord/oss.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, "Bedrock OSS は、Bedrock 向けのプログラミングに重点を置いた creators 向け Discord です。"),
              createVNode("p", null, "ここでは、wiki の問題を報告したり、新しい記事の作業を共同で進めたり、bridge. や Blockception の VSCode アドオンなど Bedrock ツールの助けを得たりできます。")
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "追加サーバー",
            link: "/meta/useful-links#discord-links",
            image: "/assets/images/icons/book.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createTextVNode("コミュニティ Discord の一覧も管理しており、"),
                createVNode("a", { href: "/meta/useful-links" }, "便利なリンク"),
                createTextVNode(" のページで確認できます。")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("discord.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const discord = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  discord as default
};
