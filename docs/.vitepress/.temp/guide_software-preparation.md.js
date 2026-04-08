import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ソフトウェアと準備","description":"開発環境のセットアップ方法","frontmatter":{"title":"ソフトウェアと準備","category":"Guide","description":"開発環境のセットアップ方法","nav_order":3,"prefix":"3. ","mentions":["SirLich","Dreamedc2015","sermah","cda94581","Joelant05","MedicalJewel105","TheItsNameless","TheDoctor15","ChibiMango","profeplaysminecraft","solvedDev","aym-i","SmokeyStack","ThomasOrs","QuazChick"]},"headers":[{"level":2,"title":"Minecraft Bedrock Edition をダウンロードする","slug":"minecraft-bedrock-edition-をダウンロードする","link":"#minecraft-bedrock-edition-をダウンロードする","children":[]},{"level":2,"title":"エディターを選ぶ","slug":"エディターを選ぶ","link":"#エディターを選ぶ","children":[{"level":3,"title":"VSCode","slug":"vscode","link":"#vscode","children":[]},{"level":3,"title":"bridge.","slug":"bridge","link":"#bridge","children":[]},{"level":3,"title":"モバイルエディター","slug":"モバイルエディター","link":"#モバイルエディター","children":[{"level":4,"title":"Android","slug":"android","link":"#android","children":[]},{"level":4,"title":"iOS","slug":"ios","link":"#ios","children":[]}]}]},{"level":2,"title":"Blockbench","slug":"blockbench","link":"#blockbench","children":[]},{"level":2,"title":"画像エディター","slug":"画像エディター","link":"#画像エディター","children":[{"level":3,"title":"Krita","slug":"krita","link":"#krita","children":[]},{"level":3,"title":"GIMP","slug":"gimp","link":"#gimp","children":[]},{"level":3,"title":"Paint.NET","slug":"paint-net","link":"#paint-net","children":[]},{"level":3,"title":"Pixilart","slug":"pixilart","link":"#pixilart","children":[]},{"level":3,"title":"Piskel","slug":"piskel","link":"#piskel","children":[]},{"level":3,"title":"Libresprite","slug":"libresprite","link":"#libresprite","children":[]}]},{"level":2,"title":"追加資料","slug":"追加資料","link":"#追加資料","children":[{"level":3,"title":"Discord に参加する","slug":"discord-に参加する","link":"#discord-に参加する","children":[]},{"level":3,"title":"Vanilla Packs","slug":"vanilla-packs","link":"#vanilla-packs","children":[]},{"level":3,"title":"ドキュメント","slug":"ドキュメント","link":"#ドキュメント","children":[]},{"level":3,"title":"トラブルシューティングと追加ヘルプ","slug":"トラブルシューティングと追加ヘルプ","link":"#トラブルシューティングと追加ヘルプ","children":[]}]},{"level":2,"title":"次へ","slug":"次へ","link":"#次へ","children":[]}],"relativePath":"guide/software-preparation.md","filePath":"guide/software-preparation.md"}');
const _sfc_main = { name: "guide/software-preparation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Spoiler = resolveComponent("Spoiler");
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>アドオンの作成を始める前に、必要なツールとアプリケーションをインストールする必要があります。開発は Windows 10 が最も簡単ですが、該当する場合は Android と iOS 向けの代替手段も用意しています。</p><p>このページでは、インストールすべきソフトウェアの一覧と、セットアップのための設定のヒントを紹介します。</p><h2 id="minecraft-bedrock-edition-をダウンロードする" tabindex="-1">Minecraft Bedrock Edition をダウンロードする <a class="header-anchor" href="#minecraft-bedrock-edition-をダウンロードする" aria-label="Permalink to &quot;Minecraft Bedrock Edition をダウンロードする&quot;">​</a></h2><ul><li><a href="https://xbox.com/games/store/minecraft-for-windows/9NBLGGH2JHXJ" target="_blank" rel="noreferrer">Windows</a></li><li><a href="https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&amp;hl=en" target="_blank" rel="noreferrer">Android</a></li><li><a href="https://apps.apple.com/us/app/minecraft/id479516143" target="_blank" rel="noreferrer">iOS</a></li><li><a href="https://discord.gg/VJTZ3KaTx6" target="_blank" rel="noreferrer">Linux で MC を動かす</a></li></ul><h2 id="エディターを選ぶ" tabindex="-1">エディターを選ぶ <a class="header-anchor" href="#エディターを選ぶ" aria-label="Permalink to &quot;エディターを選ぶ&quot;">​</a></h2><p>アドオンはどんなテキストエディターでも作れますが、専用エディターを使うほうがずっと快適です。良いエディターは、コード補完、エラー検出、エディター内ドキュメントを提供してくれます。</p><p>初心者に最適なエディターについては意見が分かれますが、一般的には VSCode か bridge. を選べば間違いありません。モバイルの場合は、モバイル向けの代替エディターを使う必要があります。</p><h3 id="vscode" tabindex="-1">VSCode <a class="header-anchor" href="#vscode" aria-label="Permalink to &quot;VSCode&quot;">​</a></h3><p>VSCode は汎用テキストエディター兼 IDE です。VSCode を使えば、強力な拡張機能やアドオンに支えられながら、プレーンテキストでアドオンを編集できます。プログラマーや上級者にはとても良い選択肢です。</p><p><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">⚙️ VSCode をインストール</a></p>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "VSCode の設定" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>アドオン編集を簡単にする VSCode 向けのパッケージはいくつもあります。</p><ul${_scopeId}><li${_scopeId}><a href="https://marketplace.visualstudio.com/items?itemName=BlockceptionLtd.blockceptionvscodeminecraftbedrockdevelopmentextension" target="_blank" rel="noreferrer"${_scopeId}>Blockception&#39;s Minecraft Bedrock Development</a></li><li${_scopeId}><a href="https://marketplace.visualstudio.com/items?itemName=arcensoth.language-mcfunction" target="_blank" rel="noreferrer"${_scopeId}>.mcfunction support</a></li><li${_scopeId}><a href="https://marketplace.visualstudio.com/items?itemName=zz5840.minecraft-lang-colorizer" target="_blank" rel="noreferrer"${_scopeId}>.lang support</a></li><li${_scopeId}><a href="https://marketplace.visualstudio.com/items?itemName=destruc7i0n.vscode-bedrock-definitions" target="_blank" rel="noreferrer"${_scopeId}>Bedrock Definitions</a></li><li${_scopeId}><a href="https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json" target="_blank" rel="noreferrer"${_scopeId}>Prettify-json</a></li><li${_scopeId}><a href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker" target="_blank" rel="noreferrer"${_scopeId}>Spell Checker (for writing wiki)</a></li><li${_scopeId}><a href="https://marketplace.visualstudio.com/items?itemName=JannisX11.snowstorm" target="_blank" rel="noreferrer"${_scopeId}>Snowstorm Particle Editor</a></li><li${_scopeId}><a href="https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator" target="_blank" rel="noreferrer"${_scopeId}>UUID Generator</a></li></ul>`);
      } else {
        return [
          createVNode("p", null, "アドオン編集を簡単にする VSCode 向けのパッケージはいくつもあります。"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("a", {
                href: "https://marketplace.visualstudio.com/items?itemName=BlockceptionLtd.blockceptionvscodeminecraftbedrockdevelopmentextension",
                target: "_blank",
                rel: "noreferrer"
              }, "Blockception's Minecraft Bedrock Development")
            ]),
            createVNode("li", null, [
              createVNode("a", {
                href: "https://marketplace.visualstudio.com/items?itemName=arcensoth.language-mcfunction",
                target: "_blank",
                rel: "noreferrer"
              }, ".mcfunction support")
            ]),
            createVNode("li", null, [
              createVNode("a", {
                href: "https://marketplace.visualstudio.com/items?itemName=zz5840.minecraft-lang-colorizer",
                target: "_blank",
                rel: "noreferrer"
              }, ".lang support")
            ]),
            createVNode("li", null, [
              createVNode("a", {
                href: "https://marketplace.visualstudio.com/items?itemName=destruc7i0n.vscode-bedrock-definitions",
                target: "_blank",
                rel: "noreferrer"
              }, "Bedrock Definitions")
            ]),
            createVNode("li", null, [
              createVNode("a", {
                href: "https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json",
                target: "_blank",
                rel: "noreferrer"
              }, "Prettify-json")
            ]),
            createVNode("li", null, [
              createVNode("a", {
                href: "https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker",
                target: "_blank",
                rel: "noreferrer"
              }, "Spell Checker (for writing wiki)")
            ]),
            createVNode("li", null, [
              createVNode("a", {
                href: "https://marketplace.visualstudio.com/items?itemName=JannisX11.snowstorm",
                target: "_blank",
                rel: "noreferrer"
              }, "Snowstorm Particle Editor")
            ]),
            createVNode("li", null, [
              createVNode("a", {
                href: "https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator",
                target: "_blank",
                rel: "noreferrer"
              }, "UUID Generator")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 id="bridge" tabindex="-1">bridge. <a class="header-anchor" href="#bridge" aria-label="Permalink to &quot;bridge.&quot;">​</a></h3><p><a href="https://bridge-core.app/" target="_blank" rel="noreferrer">bridge.</a> は、Minecraft アドオン向けの軽量な専用 IDE です。<a href="https://bridge-core.app/guide/features/" target="_blank" rel="noreferrer">革新的な機能</a>として、<a href="https://bridge-core.app/guide/features/index.html#file-previews" target="_blank" rel="noreferrer">エンティティとブロックのプレビュー</a>、<a href="https://bridge-core.app/guide/features/index.html#auto-completions-and-validation" target="_blank" rel="noreferrer">豊富なオートコンプリートとファイル検証</a>、<a href="https://bridge-core.app/guide/features/index.html#advanced-file-creation" target="_blank" rel="noreferrer">プリセットを使った高度なファイル作成</a> などがあります。 bridge. には、経験豊富なアドオン制作者向けの通常のテキストエディターと、初心者が JSON ファイル編集を始めやすいツリーエディターが含まれています。</p>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "bridge. の設定" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><a href="https://bridge-core.app/guide/why-bridge" target="_blank" rel="noreferrer"${_scopeId}>bridge. を使うべき理由について詳しく読む</a></li><li${_scopeId}><a href="https://bridge-core.app/guide/index" target="_blank" rel="noreferrer"${_scopeId}>bridge. で始めるためのガイドを読む</a></li><li${_scopeId}><a href="https://editor.bridge-core.app/" target="_blank" rel="noreferrer"${_scopeId}>bridge. online を試す</a></li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("a", {
                href: "https://bridge-core.app/guide/why-bridge",
                target: "_blank",
                rel: "noreferrer"
              }, "bridge. を使うべき理由について詳しく読む")
            ]),
            createVNode("li", null, [
              createVNode("a", {
                href: "https://bridge-core.app/guide/index",
                target: "_blank",
                rel: "noreferrer"
              }, "bridge. で始めるためのガイドを読む")
            ]),
            createVNode("li", null, [
              createVNode("a", {
                href: "https://editor.bridge-core.app/",
                target: "_blank",
                rel: "noreferrer"
              }, "bridge. online を試す")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 id="モバイルエディター" tabindex="-1">モバイルエディター <a class="header-anchor" href="#モバイルエディター" aria-label="Permalink to &quot;モバイルエディター&quot;">​</a></h3><h4 id="android" tabindex="-1">Android <a class="header-anchor" href="#android" aria-label="Permalink to &quot;Android&quot;">​</a></h4><ul><li><a href="https://play.google.com/store/apps/details?id=com.foxdebug.acodefree" target="_blank" rel="noreferrer">ACode Editor</a></li><li><a href="https://bridge-core.app/" target="_blank" rel="noreferrer">bridge. v2</a></li></ul><h4 id="ios" tabindex="-1">iOS <a class="header-anchor" href="#ios" aria-label="Permalink to &quot;iOS&quot;">​</a></h4><ul><li><a href="https://apps.apple.com/us/app/kodex/id1038574481" target="_blank" rel="noreferrer">Kodex</a></li><li><a href="https://bridge-core.app/" target="_blank" rel="noreferrer">bridge. v2</a></li></ul><h2 id="blockbench" tabindex="-1">Blockbench <a class="header-anchor" href="#blockbench" aria-label="Permalink to &quot;Blockbench&quot;">​</a></h2><ul><li><a href="https://blockbench.net/" target="_blank" rel="noreferrer">Blockbench</a> は、Minecraft のモデル、テクスチャ、アニメーションを作るのによく使われる「箱型 3D モデルエディター」です。モバイルでも使える Web ブラウザー版もあります。</li></ul><h2 id="画像エディター" tabindex="-1">画像エディター <a class="header-anchor" href="#画像エディター" aria-label="Permalink to &quot;画像エディター&quot;">​</a></h2><p>画像エディターを選ぶときは、Minecraft の伝統的なスタイルがシンプルな 16x16 のピクセルアートで構成されていることを覚えておくとよいでしょう。使える強力で無料のアートソフトはたくさんあります。ただし、その多くは Minecraft のグラフィック制作に必要以上の機能を持っており、それらを習得するには時間がかかります。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>自分にとって使いやすく、快適だと感じるプログラムを選びましょう。多くのアドオン制作者は、用途ごとに別のアートソフトを使い分けています。（例: ほとんどのアートは paint.net、Minecraft ブロックのアニメーションは Piskel など。）自分に合うものを選んでください！</p></div><h3 id="krita" tabindex="-1">Krita <a class="header-anchor" href="#krita" aria-label="Permalink to &quot;Krita&quot;">​</a></h3><p>Krita は、アーティストに無料で強力なデジタルアートツールを提供することを目標とした、強力なオープンソースのアートプログラムです。Minecraft に必要な機能は十分にそろっており、Mac と PC のどちらでも使えます。</p><ul><li><strong>+ 長所:</strong> 直感的な UI のピクセルブラシを含む多くの機能があります。</li><li><strong>- 短所:</strong> ツールに慣れるまで少し時間がかかります。</li></ul><p><a href="https://krita.org/en/" target="_blank" rel="noreferrer">Krita をダウンロード</a></p><h3 id="gimp" tabindex="-1">GIMP <a class="header-anchor" href="#gimp" aria-label="Permalink to &quot;GIMP&quot;">​</a></h3><p>GIMP は Krita に似た、無料でオープンソースのデジタルアートプログラムで、非常に多くのツールを備えています。Krita がイラスト寄りなのに対して、GIMP は画像加工（Photoshop のような用途）に重点を置いています。GIMP も Mac と PC のどちらでも使えます。</p><ul><li><strong>+ 長所:</strong> Minecraft のアート編集に十分なツールがあります</li><li><strong>- 短所:</strong> インターフェースが直感的ではありません。強力ではありますが、習得にはかなりの学習コストがあります。</li></ul><p><a href="https://www.gimp.org/" target="_blank" rel="noreferrer">GIMP をダウンロード</a></p><h3 id="paint-net" tabindex="-1">Paint.NET <a class="header-anchor" href="#paint-net" aria-label="Permalink to &quot;Paint.NET&quot;">​</a></h3><p>Paint.NET は、シンプルでありながら強力な画像編集・アートソフトです。Krita や GIMP のように膨大なツールがあるわけではありませんが、その代わりにシンプルさと使いやすさがあります。</p><ul><li><strong>+ 長所:</strong> 使いやすく、覚えやすいです。</li><li><strong>- 短所:</strong> Windows でしか使えません。</li></ul><p><a href="https://www.getpaint.net" target="_blank" rel="noreferrer">Paint.NET をダウンロード</a></p><h3 id="pixilart" tabindex="-1">Pixilart <a class="header-anchor" href="#pixilart" aria-label="Permalink to &quot;Pixilart&quot;">​</a></h3><p>Pixilart は、Web ベースのピクセルアートソフトです。ピクセルアートに特化しているため、非常にシンプルに使えます。リサイズ機能も強力で、ピクセルアートの細部を失わずにサイズ変更できるので便利です。</p><ul><li><strong>+ 長所:</strong> 使いやすく、覚えやすいです。ピクセルアート専用に作られています。</li><li><strong>- 短所:</strong> インターネット接続が必要です。欲しい機能がない場合があります。</li></ul><p><a href="https://www.pixilart.com/" target="_blank" rel="noreferrer">Pixilart を使う</a></p><h3 id="piskel" tabindex="-1">Piskel <a class="header-anchor" href="#piskel" aria-label="Permalink to &quot;Piskel&quot;">​</a></h3><p>Piskel は、ピクセル化されたスプライト（またはゲームキャラクターのアニメーション）を作ることに特化した Web ベースのピクセルアートソフトです。Pixilart と同様に、使い方は簡単です。フリップブック（Minecraft のブロックやスキンのアニメーション）を作るのにも向いています。</p><ul><li><strong>+ 長所:</strong> 使いやすく、覚えやすいです。フリップブックアニメーションに最適です</li><li><strong>- 短所:</strong> インターネット接続が必要です。基本的なツールしかありません。</li></ul><p><a href="https://www.piskelapp.com/" target="_blank" rel="noreferrer">Piskel をダウンロード</a></p><h3 id="libresprite" tabindex="-1">Libresprite <a class="header-anchor" href="#libresprite" aria-label="Permalink to &quot;Libresprite&quot;">​</a></h3><p>LibreSprite は、スプライトを作成・アニメーション化するための無料のオープンソースプログラムです。Aseprite の最後の GPLv2 コミットをベースにしています。</p><ul><li><strong>+ 長所</strong>: 基本的で使いやすく、カスタマイズ可能で、ピクセルアーティスト向けに作られています。</li><li><strong>- 短所</strong>: Mac では動かない場合があります。小規模なコミュニティだけで保守されています。</li></ul><h2 id="追加資料" tabindex="-1">追加資料 <a class="header-anchor" href="#追加資料" aria-label="Permalink to &quot;追加資料&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>このガイドではアドオン開発の最初の段階を案内しますが、網羅的ではありません。アドオンについてさらに学ぶには、ほかの情報源も使う必要があります。ここではそのリンクを紹介します。</p></div><h3 id="discord-に参加する" tabindex="-1">Discord に参加する <a class="header-anchor" href="#discord-に参加する" aria-label="Permalink to &quot;Discord に参加する&quot;">​</a></h3><p>このガイドで助けが必要なら、<a href="/discord">Discord サーバー</a> に参加するのが最適です。</p><h3 id="vanilla-packs" tabindex="-1">Vanilla Packs <a class="header-anchor" href="#vanilla-packs" aria-label="Permalink to &quot;Vanilla Packs&quot;">​</a></h3><p>Minecraft のバニラファイルは、参考資料としてとても役立ちます。これらのパックをダウンロードして、パソコンの使いやすい場所に保存しておきましょう。アイテム、エンティティ、アニメーションの例が必要になったときに、これらのファイルを参考にできます。</p><ul><li><a href="https://github.com/Mojang/bedrock-samples/releases" target="_blank" rel="noreferrer">Vanilla packs</a></li></ul><h3 id="ドキュメント" tabindex="-1">ドキュメント <a class="header-anchor" href="#ドキュメント" aria-label="Permalink to &quot;ドキュメント&quot;">​</a></h3><p>アドオンに関する良質なドキュメントはたくさんあります。できるだけ目を通し、ブックマークも検討してください。</p><ul><li><a href="https://bedrock.dev/" target="_blank" rel="noreferrer">bedrock.dev</a>: 参考ドキュメント。</li><li><a href="https://wiki.bedrock.dev/" target="_blank" rel="noreferrer">wiki.bedrock.dev</a>: チュートリアルとガイド。</li><li><a href="https://docs.microsoft.com/en-us/minecraft/creator/" target="_blank" rel="noreferrer">MS Docs</a>: アドオン向けの Microsoft 公式クリエーターポータル。</li></ul><h3 id="トラブルシューティングと追加ヘルプ" tabindex="-1">トラブルシューティングと追加ヘルプ <a class="header-anchor" href="#トラブルシューティングと追加ヘルプ" aria-label="Permalink to &quot;トラブルシューティングと追加ヘルプ&quot;">​</a></h3><ul><li>JSON 形式がかなり難しく感じるなら、<a href="/guide/understanding-json">JSON の理解ガイド</a> を読んでみてください。</li><li>変なエラーで行き詰まったら、<a href="/guide/troubleshooting">トラブルシューティングガイド</a> を読んでみてください。</li><li>追加ツールは <a href="/meta/useful-links">ここ</a> から見られます。</li></ul><h2 id="次へ" tabindex="-1">次へ <a class="header-anchor" href="#次へ" aria-label="Permalink to &quot;次へ&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">学んだこと</p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 必要なソフトウェアをインストールした</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> Vanilla のサンプルファイルをダウンロードした</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> <code class="shiki"><span>com.mojang</span></code> フォルダーを見つけて、アドオンのワークスペースを作成する</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 最初のアドオンの manifest とパックアイコンを作成する</li></ul></div>`);
  _push(ssrRenderComponent(_component_Button, { link: "/guide/project-setup" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`次へ: プロジェクトのセットアップ`);
      } else {
        return [
          createTextVNode("次へ: プロジェクトのセットアップ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/software-preparation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const softwarePreparation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  softwarePreparation as default
};
