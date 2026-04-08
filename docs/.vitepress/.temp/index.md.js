import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bedrock Wiki","description":"","frontmatter":{"hidden":true,"show_contributors":false,"show_edit_link":false,"show_outline":false},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WikiImage = resolveComponent("WikiImage");
  const _component_CardGrid = resolveComponent("CardGrid");
  const _component_Card = resolveComponent("Card");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="home"><header>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "/assets/images/icons/logo.png",
    alt: "Bedrock Wiki ロゴ"
  }, null, _parent));
  _push(`<h1>Bedrock Wiki</h1><p>この Wiki は、Minecraft Bedrock の技術的な機能に関する知識を共有するためのサイトで、ドキュメント、チュートリアル、一般的な手順解説を収録しています。</p></header>`);
  _push(ssrRenderComponent(_component_CardGrid, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Card, {
          title: "初心者ガイド",
          link: "/guide/introduction",
          image: "/assets/images/icons/crafting_table.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>アドオンとの最初の出会いとして用意した、手順付きチュートリアル集です。</p><p${_scopeId2}>自分のプロジェクトをセットアップし、開発を始める方法を学べます。</p>`);
            } else {
              return [
                createVNode("p", null, "アドオンとの最初の出会いとして用意した、手順付きチュートリアル集です。"),
                createVNode("p", null, "自分のプロジェクトをセットアップし、開発を始める方法を学べます。")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "Discord",
          link: "/discord",
          image: "/assets/images/icons/book.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>Discord サーバーに参加して、アドオンについて学んだり、他の制作者に助けを求めたりできます。</p>`);
            } else {
              return [
                createVNode("p", null, "Discord サーバーに参加して、アドオンについて学んだり、他の制作者に助けを求めたりできます。")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "コマンド",
          link: "/commands/intro-to-command-blocks",
          image: "/assets/images/icons/command_block.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}><a href="/commands/intro-to-command-blocks"${_scopeId2}>初心者ガイド</a> — コマンドブロックの基本を学びましょう。</p><p${_scopeId2}><a href="/commands/mcfunctions"${_scopeId2}>関数</a> — コマンドをより速く、より強力に記述できる関数の使い方を学びましょう！</p>`);
            } else {
              return [
                createVNode("p", null, [
                  createVNode("a", { href: "/commands/intro-to-command-blocks" }, "初心者ガイド"),
                  createTextVNode(" — コマンドブロックの基本を学びましょう。")
                ]),
                createVNode("p", null, [
                  createVNode("a", { href: "/commands/mcfunctions" }, "関数"),
                  createTextVNode(" — コマンドをより速く、より強力に記述できる関数の使い方を学びましょう！")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "ブロック",
          link: "/blocks/blocks-intro",
          image: "/assets/images/icons/diamond_ore.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}><a href="/blocks/blocks-intro"${_scopeId2}>初心者ガイド</a> — 最初のブロックを作るための「Hello world!」ガイドです。</p><p${_scopeId2}><a href="/blocks/block-components"${_scopeId2}>ブロックコンポーネント</a> — 当たり判定など、カスタムブロックが持つ機能について学びましょう。</p>`);
            } else {
              return [
                createVNode("p", null, [
                  createVNode("a", { href: "/blocks/blocks-intro" }, "初心者ガイド"),
                  createTextVNode(" — 最初のブロックを作るための「Hello world!」ガイドです。")
                ]),
                createVNode("p", null, [
                  createVNode("a", { href: "/blocks/block-components" }, "ブロックコンポーネント"),
                  createTextVNode(" — 当たり判定など、カスタムブロックが持つ機能について学びましょう。")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "エンティティ",
          link: "/entities/entity-intro-bp",
          image: "/assets/images/icons/parrot.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}><a href="/entities/entity-intro-bp"${_scopeId2}>初心者ガイド</a> — ビヘイビアパックのエンティティファイル構造について学びましょう。</p><p${_scopeId2}><a href="/entities/troubleshooting-entities"${_scopeId2}>トラブルシューティング</a> — 見えないテクスチャなど、エンティティ作成時によくある問題の解決方法を学びましょう。</p>`);
            } else {
              return [
                createVNode("p", null, [
                  createVNode("a", { href: "/entities/entity-intro-bp" }, "初心者ガイド"),
                  createTextVNode(" — ビヘイビアパックのエンティティファイル構造について学びましょう。")
                ]),
                createVNode("p", null, [
                  createVNode("a", { href: "/entities/troubleshooting-entities" }, "トラブルシューティング"),
                  createTextVNode(" — 見えないテクスチャなど、エンティティ作成時によくある問題の解決方法を学びましょう。")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "アイテム",
          link: "/items/items-intro",
          image: "/assets/images/icons/iron_pickaxe.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}><a href="/items/items-intro"${_scopeId2}>初心者ガイド</a> — 最初のアイテムを作るための「Hello world!」ガイドです。</p><p${_scopeId2}><a href="/items/item-components"${_scopeId2}>アイテムコンポーネント</a> — 耐久度など、カスタムアイテムが持つ機能について学びましょう。</p>`);
            } else {
              return [
                createVNode("p", null, [
                  createVNode("a", { href: "/items/items-intro" }, "初心者ガイド"),
                  createTextVNode(" — 最初のアイテムを作るための「Hello world!」ガイドです。")
                ]),
                createVNode("p", null, [
                  createVNode("a", { href: "/items/item-components" }, "アイテムコンポーネント"),
                  createTextVNode(" — 耐久度など、カスタムアイテムが持つ機能について学びましょう。")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "スクリプト",
          image: "/assets/images/icons/levers.png",
          link: "/scripting/scripting-intro"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}><a href="/scripting/scripting-intro"${_scopeId2}>初心者ガイド</a> — Minecraft が提供する Script API の基本を学びましょう。</p><p${_scopeId2}><a href="/scripting/custom-commands"${_scopeId2}>カスタムコマンド</a> — スクリプトを使って自分だけのコマンドを作る方法を学びましょう！</p>`);
            } else {
              return [
                createVNode("p", null, [
                  createVNode("a", { href: "/scripting/scripting-intro" }, "初心者ガイド"),
                  createTextVNode(" — Minecraft が提供する Script API の基本を学びましょう。")
                ]),
                createVNode("p", null, [
                  createVNode("a", { href: "/scripting/custom-commands" }, "カスタムコマンド"),
                  createTextVNode(" — スクリプトを使って自分だけのコマンドを作る方法を学びましょう！")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "ワールド生成",
          link: "/world-generation/world-generation-intro",
          image: "/assets/images/icons/structure.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}><a href="/world-generation/world-generation-intro"${_scopeId2}>初心者ガイド</a> — カスタム構造物、鉱石、木、その他の生成要素の作成について学びましょう。</p>`);
            } else {
              return [
                createVNode("p", null, [
                  createVNode("a", { href: "/world-generation/world-generation-intro" }, "初心者ガイド"),
                  createTextVNode(" — カスタム構造物、鉱石、木、その他の生成要素の作成について学びましょう。")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "貢献する",
          link: "/contribute",
          image: "/assets/images/icons/writable_book.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>この Wiki はコミュニティによって作られ、維持されています！ Wiki を改善したいと思ったり、質問やフィードバックがあれば、ぜひご連絡ください。</p>`);
            } else {
              return [
                createVNode("p", null, "この Wiki はコミュニティによって作られ、維持されています！ Wiki を改善したいと思ったり、質問やフィードバックがあれば、ぜひご連絡ください。")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Card, {
            title: "初心者ガイド",
            link: "/guide/introduction",
            image: "/assets/images/icons/crafting_table.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, "アドオンとの最初の出会いとして用意した、手順付きチュートリアル集です。"),
              createVNode("p", null, "自分のプロジェクトをセットアップし、開発を始める方法を学べます。")
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "Discord",
            link: "/discord",
            image: "/assets/images/icons/book.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, "Discord サーバーに参加して、アドオンについて学んだり、他の制作者に助けを求めたりできます。")
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "コマンド",
            link: "/commands/intro-to-command-blocks",
            image: "/assets/images/icons/command_block.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createVNode("a", { href: "/commands/intro-to-command-blocks" }, "初心者ガイド"),
                createTextVNode(" — コマンドブロックの基本を学びましょう。")
              ]),
              createVNode("p", null, [
                createVNode("a", { href: "/commands/mcfunctions" }, "関数"),
                createTextVNode(" — コマンドをより速く、より強力に記述できる関数の使い方を学びましょう！")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "ブロック",
            link: "/blocks/blocks-intro",
            image: "/assets/images/icons/diamond_ore.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createVNode("a", { href: "/blocks/blocks-intro" }, "初心者ガイド"),
                createTextVNode(" — 最初のブロックを作るための「Hello world!」ガイドです。")
              ]),
              createVNode("p", null, [
                createVNode("a", { href: "/blocks/block-components" }, "ブロックコンポーネント"),
                createTextVNode(" — 当たり判定など、カスタムブロックが持つ機能について学びましょう。")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "エンティティ",
            link: "/entities/entity-intro-bp",
            image: "/assets/images/icons/parrot.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createVNode("a", { href: "/entities/entity-intro-bp" }, "初心者ガイド"),
                createTextVNode(" — ビヘイビアパックのエンティティファイル構造について学びましょう。")
              ]),
              createVNode("p", null, [
                createVNode("a", { href: "/entities/troubleshooting-entities" }, "トラブルシューティング"),
                createTextVNode(" — 見えないテクスチャなど、エンティティ作成時によくある問題の解決方法を学びましょう。")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "アイテム",
            link: "/items/items-intro",
            image: "/assets/images/icons/iron_pickaxe.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createVNode("a", { href: "/items/items-intro" }, "初心者ガイド"),
                createTextVNode(" — 最初のアイテムを作るための「Hello world!」ガイドです。")
              ]),
              createVNode("p", null, [
                createVNode("a", { href: "/items/item-components" }, "アイテムコンポーネント"),
                createTextVNode(" — 耐久度など、カスタムアイテムが持つ機能について学びましょう。")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "スクリプト",
            image: "/assets/images/icons/levers.png",
            link: "/scripting/scripting-intro"
          }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createVNode("a", { href: "/scripting/scripting-intro" }, "初心者ガイド"),
                createTextVNode(" — Minecraft が提供する Script API の基本を学びましょう。")
              ]),
              createVNode("p", null, [
                createVNode("a", { href: "/scripting/custom-commands" }, "カスタムコマンド"),
                createTextVNode(" — スクリプトを使って自分だけのコマンドを作る方法を学びましょう！")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "ワールド生成",
            link: "/world-generation/world-generation-intro",
            image: "/assets/images/icons/structure.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createVNode("a", { href: "/world-generation/world-generation-intro" }, "初心者ガイド"),
                createTextVNode(" — カスタム構造物、鉱石、木、その他の生成要素の作成について学びましょう。")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "貢献する",
            link: "/contribute",
            image: "/assets/images/icons/writable_book.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, "この Wiki はコミュニティによって作られ、維持されています！ Wiki を改善したいと思ったり、質問やフィードバックがあれば、ぜひご連絡ください。")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
