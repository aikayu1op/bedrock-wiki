import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hacktoberfest","description":"Hacktoberfest に参加して Wiki に貢献しよう！","frontmatter":{"title":"Hacktoberfest","description":"Hacktoberfest に参加して Wiki に貢献しよう！","show_contributors":false,"show_outline":false,"hidden":true},"headers":[{"level":2,"title":"始め方","slug":"始め方","link":"#始め方","children":[]},{"level":2,"title":"どこに貢献するか","slug":"どこに貢献するか","link":"#どこに貢献するか","children":[]},{"level":2,"title":"お礼","slug":"お礼","link":"#お礼","children":[]}],"relativePath":"hacktoberfest.md","filePath":"hacktoberfest.md"}');
const _sfc_main = { name: "hacktoberfest.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WikiImage = resolveComponent("WikiImage");
  const _component_CardGrid = resolveComponent("CardGrid");
  const _component_Card = resolveComponent("Card");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: {
      dark: "hf10_horz_fcl_rgb.png",
      light: "hf10_horz_fcd_rgb.png"
    },
    alt: "Hacktoberfest ロゴ",
    width: "600"
  }, null, _parent));
  _push(`<p>Hacktoberfest は、オープンソース技術の改善と成長に向けた、1 か月間のオープンソース祝賀イベントです。10 月のあいだ、オープンソースソフトウェアの愛好者、初心者、開発者コミュニティの誰もが、オープンソースプロジェクトへ貢献する形で参加できます。 この年次イベントは、意味のある貢献をオープンソースのエコシステムに促し、オープンソースプロジェクトを広め、誰でも歓迎する健全なコミュニティを支えるうえで大きな役割を果たしています。</p><p>私たち bedrock OSS も力になりたいと考えており、オープンソースプロジェクトの貢献者を募集しています。手伝えるプロジェクトは <a href="#where-to-contribute">どこに貢献するか</a> を見てください。どう手伝えばよいかわからない場合は、<a href="#how-to-get-started">始め方</a> を読むことをおすすめします。</p><div class="warning custom-block"><p class="custom-block-title">注意！</p><p>10 年を経て、Hacktoberfest は従来の T シャツ報酬からデジタル報酬キットへ移行しています。詳しくは <a href="https://hacktoberfest.com/about/#digital-rewards" target="_blank" rel="noreferrer">こちら</a> をご覧ください。</p></div><h2 id="始め方" tabindex="-1">始め方 <a class="header-anchor" href="#始め方" aria-label="Permalink to &quot;始め方&quot;">​</a></h2><p>まずは公式の <a href="https://hacktoberfest.com/participation/#beginner-resources" target="_blank" rel="noreferrer">Hacktoberfest ガイド</a> を読んで始めてください。そのあと、下の組織やプロジェクトを確認しましょう。疑問があれば <a href="https://discord.gg/XjV87YN" target="_blank" rel="noreferrer">discord に参加</a> して連絡してください。親切な人たちがいます！</p><h2 id="どこに貢献するか" tabindex="-1">どこに貢献するか <a class="header-anchor" href="#どこに貢献するか" aria-label="Permalink to &quot;どこに貢献するか&quot;">​</a></h2><p>以下は、Hacktoberfest に参加している組織とそのプロジェクトの一覧です。</p>`);
  _push(ssrRenderComponent(_component_CardGrid, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Card, {
          title: "Bedrock OSS",
          link: "https://github.com/Bedrock-OSS",
          image: "bedrockoss.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}><a href="https://github.com/Bedrock-OSS/bedrock-loot-gen" target="_blank" rel="noreferrer"${_scopeId2}>Bedrock Loot Gen</a> — Bedrock Edition のルートテーブルを作成するための Web サイト。</p><p${_scopeId2}><a href="https://github.com/Bedrock-OSS/bedrock-wiki" target="_blank" rel="noreferrer"${_scopeId2}>Bedrock Wiki</a> — Minecraft Bedrock の技術的な機能についての知識共有サイト。</p><p${_scopeId2}><a href="https://github.com/Bedrock-OSS/regolith" target="_blank" rel="noreferrer"${_scopeId2}>Regolith</a> — Bedrock Edition の Minecraft 向けアドオンコンパイラ。</p><p${_scopeId2}><em${_scopeId2}>参加中の Bedrock OSS プロジェクトの一覧は <a href="https://github.com/orgs/Bedrock-OSS/repositories?q=topic%3Ahacktoberfest" target="_blank" rel="noreferrer"${_scopeId2}>こちら</a> から確認できます。</em></p>`);
            } else {
              return [
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://github.com/Bedrock-OSS/bedrock-loot-gen",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "Bedrock Loot Gen"),
                  createTextVNode(" — Bedrock Edition のルートテーブルを作成するための Web サイト。")
                ]),
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://github.com/Bedrock-OSS/bedrock-wiki",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "Bedrock Wiki"),
                  createTextVNode(" — Minecraft Bedrock の技術的な機能についての知識共有サイト。")
                ]),
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://github.com/Bedrock-OSS/regolith",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "Regolith"),
                  createTextVNode(" — Bedrock Edition の Minecraft 向けアドオンコンパイラ。")
                ]),
                createVNode("p", null, [
                  createVNode("em", null, [
                    createTextVNode("参加中の Bedrock OSS プロジェクトの一覧は "),
                    createVNode("a", {
                      href: "https://github.com/orgs/Bedrock-OSS/repositories?q=topic%3Ahacktoberfest",
                      target: "_blank",
                      rel: "noreferrer"
                    }, "こちら"),
                    createTextVNode(" から確認できます。")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "Blockception",
          link: "https://github.com/Blockception",
          image: "blockception.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}><a href="https://github.com/Blockception/Minecraft-Error-Codes" target="_blank" rel="noreferrer"${_scopeId2}>Minecraft Error Codes</a> — プラグインが投げうるすべてのエラーコードと、その説明。</p><p${_scopeId2}><a href="https://github.com/Blockception/Minecraft-bedrock-json-schemas" target="_blank" rel="noreferrer"${_scopeId2}>Minecraft JSON Schemas</a> — Minecraft Bedrock 用の JSON 検証スキーマファイル。</p><p${_scopeId2}><a href="https://github.com/Blockception/VSCode-Bedrock-Development-Extension" target="_blank" rel="noreferrer"${_scopeId2}>VSCode Development Extension</a> — Minecraft Bedrock 開発に使う拡張機能。</p><p${_scopeId2}><em${_scopeId2}>参加中の Bedrock OSS プロジェクトの一覧は <a href="https://github.com/orgs/Blockception/repositories?q=topic%3Ahacktoberfest" target="_blank" rel="noreferrer"${_scopeId2}>こちら</a> から確認できます。</em></p>`);
            } else {
              return [
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://github.com/Blockception/Minecraft-Error-Codes",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "Minecraft Error Codes"),
                  createTextVNode(" — プラグインが投げうるすべてのエラーコードと、その説明。")
                ]),
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://github.com/Blockception/Minecraft-bedrock-json-schemas",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "Minecraft JSON Schemas"),
                  createTextVNode(" — Minecraft Bedrock 用の JSON 検証スキーマファイル。")
                ]),
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://github.com/Blockception/VSCode-Bedrock-Development-Extension",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "VSCode Development Extension"),
                  createTextVNode(" — Minecraft Bedrock 開発に使う拡張機能。")
                ]),
                createVNode("p", null, [
                  createVNode("em", null, [
                    createTextVNode("参加中の Bedrock OSS プロジェクトの一覧は "),
                    createVNode("a", {
                      href: "https://github.com/orgs/Blockception/repositories?q=topic%3Ahacktoberfest",
                      target: "_blank",
                      rel: "noreferrer"
                    }, "こちら"),
                    createTextVNode(" から確認できます。")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "SirLich",
          link: "https://github.com/SirLich",
          image: "sirlich.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}><a href="https://github.com/SirLich/bedrock-schema-docs" target="_blank" rel="noreferrer"${_scopeId2}>Bedrock Schema Docs</a> — Blockception のスキーマから自動生成されたドキュメント。</p><p${_scopeId2}><a href="https://github.com/SirLich/reticulator" target="_blank" rel="noreferrer"${_scopeId2}>Reticulator</a> — Minecraft Bedrock の pack-access ライブラリ。</p><p${_scopeId2}><em${_scopeId2}>SirLich の参加中プロジェクトの一覧は <a href="https://github.com/SirLich/repositories?q=topic%3Ahacktoberfest" target="_blank" rel="noreferrer"${_scopeId2}>こちら</a> から確認できます。</em></p>`);
            } else {
              return [
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://github.com/SirLich/bedrock-schema-docs",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "Bedrock Schema Docs"),
                  createTextVNode(" — Blockception のスキーマから自動生成されたドキュメント。")
                ]),
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://github.com/SirLich/reticulator",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "Reticulator"),
                  createTextVNode(" — Minecraft Bedrock の pack-access ライブラリ。")
                ]),
                createVNode("p", null, [
                  createVNode("em", null, [
                    createTextVNode("SirLich の参加中プロジェクトの一覧は "),
                    createVNode("a", {
                      href: "https://github.com/SirLich/repositories?q=topic%3Ahacktoberfest",
                      target: "_blank",
                      rel: "noreferrer"
                    }, "こちら"),
                    createTextVNode(" から確認できます。")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "MCDevKit",
          link: "https://github.com/MCDevKit",
          image: "mcdevkit.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}><a href="https://github.com/MCDevKit/jsonte" target="_blank" rel="noreferrer"${_scopeId2}>jsonte</a> — Minecraft Bedrock Add-On 開発向けに JSON ファイルを簡単に生成できる JSON テンプレートエンジン。</p><p${_scopeId2}><em${_scopeId2}>MCDevKit の参加中プロジェクトの一覧は <a href="https://github.com/orgs/MCDevKit/repositories?q=topic%3Ahacktoberfest" target="_blank" rel="noreferrer"${_scopeId2}>こちら</a> から確認できます。</em></p>`);
            } else {
              return [
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://github.com/MCDevKit/jsonte",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "jsonte"),
                  createTextVNode(" — Minecraft Bedrock Add-On 開発向けに JSON ファイルを簡単に生成できる JSON テンプレートエンジン。")
                ]),
                createVNode("p", null, [
                  createVNode("em", null, [
                    createTextVNode("MCDevKit の参加中プロジェクトの一覧は "),
                    createVNode("a", {
                      href: "https://github.com/orgs/MCDevKit/repositories?q=topic%3Ahacktoberfest",
                      target: "_blank",
                      rel: "noreferrer"
                    }, "こちら"),
                    createTextVNode(" から確認できます。")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "bridge.",
          link: "https://github.com/bridge-core",
          image: "bridge.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}><a href="https://github.com/bridge-core/docs" target="_blank" rel="noreferrer"${_scopeId2}>bridge. Documentation</a> — bridge. とその機能を紹介することを目的としたドキュメント。</p><p${_scopeId2}><a href="https://github.com/bridge-core/editor" target="_blank" rel="noreferrer"${_scopeId2}>bridge. Editor</a> — bridge. は Minecraft Bedrock Add-On 作成向けに設計された IDE です。</p><p${_scopeId2}><a href="https://github.com/bridge-core/dash-compiler" target="_blank" rel="noreferrer"${_scopeId2}>Dash Compiler</a> — Dash コンパイラは、Minecraft Bedrock Edition 向けの高速で信頼性が高く、プラットフォーム非依存のコンパイラです。</p><p${_scopeId2}><a href="https://github.com/bridge-core/deno-dash-compiler" target="_blank" rel="noreferrer"${_scopeId2}>Deno Dash Compiler</a> — <a href="https://deno.land/" target="_blank" rel="noreferrer"${_scopeId2}>Deno</a> 内で動く、Dash コンパイラのスタンドアロン実装です。</p><p${_scopeId2}><a href="https://github.com/bridge-core/molang" target="_blank" rel="noreferrer"${_scopeId2}>Molang Parser</a> — JavaScript と TypeScript アプリケーション向けの高速な Molang パーサー。</p><p${_scopeId2}><em${_scopeId2}>bridge. の参加中プロジェクトの一覧は <a href="https://github.com/orgs/bridge-core/repositories?q=topic%3Ahacktoberfest" target="_blank" rel="noreferrer"${_scopeId2}>こちら</a> から確認できます。</em></p>`);
            } else {
              return [
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://github.com/bridge-core/docs",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "bridge. Documentation"),
                  createTextVNode(" — bridge. とその機能を紹介することを目的としたドキュメント。")
                ]),
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://github.com/bridge-core/editor",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "bridge. Editor"),
                  createTextVNode(" — bridge. は Minecraft Bedrock Add-On 作成向けに設計された IDE です。")
                ]),
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://github.com/bridge-core/dash-compiler",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "Dash Compiler"),
                  createTextVNode(" — Dash コンパイラは、Minecraft Bedrock Edition 向けの高速で信頼性が高く、プラットフォーム非依存のコンパイラです。")
                ]),
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://github.com/bridge-core/deno-dash-compiler",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "Deno Dash Compiler"),
                  createTextVNode(" — "),
                  createVNode("a", {
                    href: "https://deno.land/",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "Deno"),
                  createTextVNode(" 内で動く、Dash コンパイラのスタンドアロン実装です。")
                ]),
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://github.com/bridge-core/molang",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "Molang Parser"),
                  createTextVNode(" — JavaScript と TypeScript アプリケーション向けの高速な Molang パーサー。")
                ]),
                createVNode("p", null, [
                  createVNode("em", null, [
                    createTextVNode("bridge. の参加中プロジェクトの一覧は "),
                    createVNode("a", {
                      href: "https://github.com/orgs/bridge-core/repositories?q=topic%3Ahacktoberfest",
                      target: "_blank",
                      rel: "noreferrer"
                    }, "こちら"),
                    createTextVNode(" から確認できます。")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Card, {
            title: "Bedrock OSS",
            link: "https://github.com/Bedrock-OSS",
            image: "bedrockoss.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createVNode("a", {
                  href: "https://github.com/Bedrock-OSS/bedrock-loot-gen",
                  target: "_blank",
                  rel: "noreferrer"
                }, "Bedrock Loot Gen"),
                createTextVNode(" — Bedrock Edition のルートテーブルを作成するための Web サイト。")
              ]),
              createVNode("p", null, [
                createVNode("a", {
                  href: "https://github.com/Bedrock-OSS/bedrock-wiki",
                  target: "_blank",
                  rel: "noreferrer"
                }, "Bedrock Wiki"),
                createTextVNode(" — Minecraft Bedrock の技術的な機能についての知識共有サイト。")
              ]),
              createVNode("p", null, [
                createVNode("a", {
                  href: "https://github.com/Bedrock-OSS/regolith",
                  target: "_blank",
                  rel: "noreferrer"
                }, "Regolith"),
                createTextVNode(" — Bedrock Edition の Minecraft 向けアドオンコンパイラ。")
              ]),
              createVNode("p", null, [
                createVNode("em", null, [
                  createTextVNode("参加中の Bedrock OSS プロジェクトの一覧は "),
                  createVNode("a", {
                    href: "https://github.com/orgs/Bedrock-OSS/repositories?q=topic%3Ahacktoberfest",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "こちら"),
                  createTextVNode(" から確認できます。")
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "Blockception",
            link: "https://github.com/Blockception",
            image: "blockception.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createVNode("a", {
                  href: "https://github.com/Blockception/Minecraft-Error-Codes",
                  target: "_blank",
                  rel: "noreferrer"
                }, "Minecraft Error Codes"),
                createTextVNode(" — プラグインが投げうるすべてのエラーコードと、その説明。")
              ]),
              createVNode("p", null, [
                createVNode("a", {
                  href: "https://github.com/Blockception/Minecraft-bedrock-json-schemas",
                  target: "_blank",
                  rel: "noreferrer"
                }, "Minecraft JSON Schemas"),
                createTextVNode(" — Minecraft Bedrock 用の JSON 検証スキーマファイル。")
              ]),
              createVNode("p", null, [
                createVNode("a", {
                  href: "https://github.com/Blockception/VSCode-Bedrock-Development-Extension",
                  target: "_blank",
                  rel: "noreferrer"
                }, "VSCode Development Extension"),
                createTextVNode(" — Minecraft Bedrock 開発に使う拡張機能。")
              ]),
              createVNode("p", null, [
                createVNode("em", null, [
                  createTextVNode("参加中の Bedrock OSS プロジェクトの一覧は "),
                  createVNode("a", {
                    href: "https://github.com/orgs/Blockception/repositories?q=topic%3Ahacktoberfest",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "こちら"),
                  createTextVNode(" から確認できます。")
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "SirLich",
            link: "https://github.com/SirLich",
            image: "sirlich.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createVNode("a", {
                  href: "https://github.com/SirLich/bedrock-schema-docs",
                  target: "_blank",
                  rel: "noreferrer"
                }, "Bedrock Schema Docs"),
                createTextVNode(" — Blockception のスキーマから自動生成されたドキュメント。")
              ]),
              createVNode("p", null, [
                createVNode("a", {
                  href: "https://github.com/SirLich/reticulator",
                  target: "_blank",
                  rel: "noreferrer"
                }, "Reticulator"),
                createTextVNode(" — Minecraft Bedrock の pack-access ライブラリ。")
              ]),
              createVNode("p", null, [
                createVNode("em", null, [
                  createTextVNode("SirLich の参加中プロジェクトの一覧は "),
                  createVNode("a", {
                    href: "https://github.com/SirLich/repositories?q=topic%3Ahacktoberfest",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "こちら"),
                  createTextVNode(" から確認できます。")
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "MCDevKit",
            link: "https://github.com/MCDevKit",
            image: "mcdevkit.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createVNode("a", {
                  href: "https://github.com/MCDevKit/jsonte",
                  target: "_blank",
                  rel: "noreferrer"
                }, "jsonte"),
                createTextVNode(" — Minecraft Bedrock Add-On 開発向けに JSON ファイルを簡単に生成できる JSON テンプレートエンジン。")
              ]),
              createVNode("p", null, [
                createVNode("em", null, [
                  createTextVNode("MCDevKit の参加中プロジェクトの一覧は "),
                  createVNode("a", {
                    href: "https://github.com/orgs/MCDevKit/repositories?q=topic%3Ahacktoberfest",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "こちら"),
                  createTextVNode(" から確認できます。")
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "bridge.",
            link: "https://github.com/bridge-core",
            image: "bridge.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createVNode("a", {
                  href: "https://github.com/bridge-core/docs",
                  target: "_blank",
                  rel: "noreferrer"
                }, "bridge. Documentation"),
                createTextVNode(" — bridge. とその機能を紹介することを目的としたドキュメント。")
              ]),
              createVNode("p", null, [
                createVNode("a", {
                  href: "https://github.com/bridge-core/editor",
                  target: "_blank",
                  rel: "noreferrer"
                }, "bridge. Editor"),
                createTextVNode(" — bridge. は Minecraft Bedrock Add-On 作成向けに設計された IDE です。")
              ]),
              createVNode("p", null, [
                createVNode("a", {
                  href: "https://github.com/bridge-core/dash-compiler",
                  target: "_blank",
                  rel: "noreferrer"
                }, "Dash Compiler"),
                createTextVNode(" — Dash コンパイラは、Minecraft Bedrock Edition 向けの高速で信頼性が高く、プラットフォーム非依存のコンパイラです。")
              ]),
              createVNode("p", null, [
                createVNode("a", {
                  href: "https://github.com/bridge-core/deno-dash-compiler",
                  target: "_blank",
                  rel: "noreferrer"
                }, "Deno Dash Compiler"),
                createTextVNode(" — "),
                createVNode("a", {
                  href: "https://deno.land/",
                  target: "_blank",
                  rel: "noreferrer"
                }, "Deno"),
                createTextVNode(" 内で動く、Dash コンパイラのスタンドアロン実装です。")
              ]),
              createVNode("p", null, [
                createVNode("a", {
                  href: "https://github.com/bridge-core/molang",
                  target: "_blank",
                  rel: "noreferrer"
                }, "Molang Parser"),
                createTextVNode(" — JavaScript と TypeScript アプリケーション向けの高速な Molang パーサー。")
              ]),
              createVNode("p", null, [
                createVNode("em", null, [
                  createTextVNode("bridge. の参加中プロジェクトの一覧は "),
                  createVNode("a", {
                    href: "https://github.com/orgs/bridge-core/repositories?q=topic%3Ahacktoberfest",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "こちら"),
                  createTextVNode(" から確認できます。")
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="お礼" tabindex="-1">お礼 <a class="header-anchor" href="#お礼" aria-label="Permalink to &quot;お礼&quot;">​</a></h2><p>これを読んでいるということは、オープンソースプロジェクトへの貢献に興味があるということです。それは素晴らしいことです。上に挙げたプロジェクトへの貢献を楽しんでもらえたらうれしいですし、いずれあなたが私たちのコミュニティの一員になることを願っています。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("hacktoberfest.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hacktoberfest = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hacktoberfest as default
};
