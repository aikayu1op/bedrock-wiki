import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Attachables","description":"アイテム attachables のドキュメントです。","frontmatter":{"title":"Attachables","description":"アイテム attachables のドキュメントです。","category":"Documentation","tags":["beginner"],"mentions":["Sprunkles137","MedicalJewel105","AdamRaichu","Lufurrius","TheItsNameless"]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[{"level":3,"title":"File Structure","slug":"file-structure","link":"#file-structure","children":[]},{"level":3,"title":"Attachable 定義","slug":"attachable-定義","link":"#attachable-定義","children":[]}]},{"level":2,"title":"Method 1 - Attached to the Skeleton","slug":"method-1-attached-to-the-skeleton","link":"#method-1-attached-to-the-skeleton","children":[{"level":3,"title":"Setting up the Skeleton","slug":"setting-up-the-skeleton","link":"#setting-up-the-skeleton","children":[]},{"level":3,"title":"Display Settings","slug":"display-settings","link":"#display-settings","children":[]},{"level":3,"title":"First-person Animations","slug":"first-person-animations","link":"#first-person-animations","children":[]},{"level":3,"title":"Conclusion","slug":"conclusion","link":"#conclusion","children":[]}]},{"level":2,"title":"Method 2 - Bound to a Bone","slug":"method-2-bound-to-a-bone","link":"#method-2-bound-to-a-bone","children":[{"level":3,"title":"Model Binding","slug":"model-binding","link":"#model-binding","children":[]},{"level":3,"title":"Display Settings","slug":"display-settings-1","link":"#display-settings-1","children":[]},{"level":3,"title":"First-person Animations","slug":"first-person-animations-1","link":"#first-person-animations-1","children":[]}]},{"level":2,"title":"Example Pack","slug":"example-pack","link":"#example-pack","children":[]}],"relativePath":"items/attachables.md","filePath":"items/attachables.md"}');
const _sfc_main = { name: "items/attachables.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FolderView = resolveComponent("FolderView");
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_Tag = resolveComponent("Tag");
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>このドキュメントでは、Molang、render controller、アニメーション、client entity 定義の基本を理解していることを前提にしています。まずは <a href="/entities/entity-intro-rp">client entities</a> の基礎を確認してください。</p></div><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>カスタムアイテムやブロックを設計すると、Minecraft はテンプレートからモデルを生成し、持ったときに表示できるようにします。これは、アイテムのスプライトを押し出したテクスチャメッシュにしたり、ブロックをそのモデルで表示したりする形になります。<strong>attachables</strong> と呼ばれる仕組みを使えば、こうしたアイテムを持ったときに表示する独自モデルを作成できます。</p><p>棒を望遠鏡のように見せたいと思ったことはありませんか？ あるいは、回転する刃の大きなチェーンソーを構えたいと思ったことは？ attachables ならそれを実現できます。</p><p>このドキュメントでは、使うジオメトリの構造に応じた <strong>2 つの異なる方法</strong> で attachables を作る手順を説明します。</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>attachables は、アイテムやブロックを装備したときにエンティティモデルを描画する仕組みです。つまり、メインハンド、オフハンド、アーマースロットにアイテムを持たせることを意味します。</p><p>attachable 定義は client entity 定義とよく似た設計で、attachable を表示するためのテクスチャ、マテリアル、ジオメトリ、アニメーションを定義できます。</p><h3 id="file-structure" tabindex="-1">File Structure <a class="header-anchor" href="#file-structure" aria-label="Permalink to &quot;File Structure&quot;">​</a></h3><p>attachable 定義は <code class="shiki"><span>attachables</span></code> フォルダ内に置きます。ファイル構成は、他の点ではカスタムエンティティと同じです。</p>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "RP/animations/my_item.animation.json",
    "RP/attachables/my_item.entity.json",
    "RP/models/entity/my_item.geo.json",
    "RP/textures/entity/my_item.png",
    "RP/manifest.json"
  ] }, null, _parent));
  _push(`<h3 id="attachable-定義" tabindex="-1">Attachable 定義 <a class="header-anchor" href="#attachable-定義" aria-label="Permalink to &quot;Attachable 定義&quot;">​</a></h3><p>以下は attachable の基本例です。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RP/attachables/stick.entity.json`);
      } else {
        return [
          createTextVNode("RP/attachables/stick.entity.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.10.0&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;minecraft:attachable&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;minecraft:stick&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;materials&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;entity&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;enchanted&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;entity_alphatest_glint&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;textures&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;textures/entity/steve&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;enchanted&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;textures/misc/enchanted_item_glint&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;geometry&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;geometry.wiki.steve_head&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;animations&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;hold_first_person&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;animation.steve_head.hold_first_person&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;hold_third_person&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;animation.steve_head.hold_third_person&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;scripts&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;animate&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                        &quot;hold_first_person&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;context.is_first_person == 1.0&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                        &quot;hold_third_person&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;context.is_first_person == 0.0&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;render_controllers&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;controller.render.item_default&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>この attachable 定義で押さえておくべき重要な点は次のとおりです。</p><ul><li>識別子は既存のブロックまたはアイテム ID と一致させます。こうすると、そのアイテムを装備したときに attachable が有効になり、持ったときに表示される元のモデルを置き換えます。</li><li>エンチャントのきらめき用にマテリアルとテクスチャが指定されています。エンチャント時にきらめきを表示したい場合は、これを残しておくことが重要です。</li></ul><p>attachables の作成は、client entity ファイルを作るより少し手間がかかります。装備時に正しく見えるよう、ジオメトリの骨組みを適切にリギングする必要があります。</p><h2 id="method-1-attached-to-the-skeleton" tabindex="-1">Method 1 - Attached to the Skeleton <a class="header-anchor" href="#method-1-attached-to-the-skeleton" aria-label="Permalink to &quot;Method 1 - Attached to the Skeleton&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Tag, { name: "beginner" }, null, _parent));
  _push(`<p>最初の方法では、プレイヤーのスケルトンを複製し、その骨の 1 つにモデルを接続することで attachable を構築します。</p><p>この方法は、1 種類の mob/entity、特にプレイヤーに対して使うモデルや、1 つの装備スロットだけを扱う場合に向いています。Blockbench で完成形を確認しやすいのも利点です。</p><h3 id="setting-up-the-skeleton" tabindex="-1">Setting up the Skeleton <a class="header-anchor" href="#setting-up-the-skeleton" aria-label="Permalink to &quot;Setting up the Skeleton&quot;">​</a></h3><p>モデルを正しい bone に親子付けするには、プレイヤーのスケルトンを再構築する必要があります。そうしないと、どこにも親が付かず、プレイヤーの上で自由に浮いてしまいます。</p><p>テキストエディタで、提供されている player skeleton ファイルの bones を geometry ファイルへコピーし、モデルの cubes の親を <code class="shiki"><span>rightItem</span></code> bone に設定します。その geometry を resource pack に保存してください。</p><p>便宜上、このようなモデルはすでに用意されています。プレイヤーモデルの cubes はすでに削除済みです。</p>`);
  _push(ssrRenderComponent(_component_Button, {
    download: "",
    link: "/assets/packs/items/attachables/method_one/steve_head.geo.json"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 📄 Geometry File `);
      } else {
        return [
          createTextVNode(" 📄 Geometry File ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 id="display-settings" tabindex="-1">Display Settings <a class="header-anchor" href="#display-settings" aria-label="Permalink to &quot;Display Settings&quot;">​</a></h3><p>モデルがプレイヤーの足元に浮いているのは理想的ではありません。次のステップでは、プレイヤー上で正しく表示するためのアニメーションを作成します。</p><p>新しいアニメーションを 2 つ作成します。1 つは一人称でアイテムを持つ用、もう 1 つは三人称で持つ用です。三人称アニメーションを選択し、好きな位置に配置してください。そのアニメーションを resource pack に保存します。</p><p>以下はそのアニメーションの例です。ここには一人称アニメーションも含まれており、その作り方は下のセクションで説明します。</p>`);
  _push(ssrRenderComponent(_component_Button, {
    download: "",
    link: "/assets/packs/items/attachables/method_one/steve_head.animation.json"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 📄 Animation File `);
      } else {
        return [
          createTextVNode(" 📄 Animation File ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 id="first-person-animations" tabindex="-1">First-person Animations <a class="header-anchor" href="#first-person-animations" aria-label="Permalink to &quot;First-person Animations&quot;">​</a></h3><p>一人称アニメーションを作りやすくするため、一人称視点での腕の位置を再現する必要があります。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>プレイヤーの手のアニメーションを追加するには、attachables のアニメーションではなく、プレイヤーのアニメーションを使う必要があります。</p></div><p>次のガイド用アニメーションを Blockbench にインポートしてください。これは右腕の bone に (95, -45, 115) の回転と (13.5, -10, 12) の移動を適用し、一人称視点での腕の位置を正確に再現します。</p>`);
  _push(ssrRenderComponent(_component_Button, {
    download: "",
    link: "/assets/packs/items/attachables/method_one/attachable_guide.animation.json"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 📄 Attachable Guide File `);
      } else {
        return [
          createTextVNode(" 📄 Attachable Guide File ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>ここが少し難しいところです。あなたの一人称アニメーションと、ガイドの一人称アニメーションの両方を同時に再生する必要があります。</p><p>変更を加えるときは、必ず自分のアニメーションを編集している状態にしてください。まずそれを選択し、その上にガイドの一人称アニメーションを再生します。</p></div><h3 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h3><p>ここまで設定できたら、プレイヤースケルトンに <em>cubes</em> が残っていれば削除し、bone は残してください。ゲーム内でモデルを確認してみましょう。</p><h2 id="method-2-bound-to-a-bone" tabindex="-1">Method 2 - Bound to a Bone <a class="header-anchor" href="#method-2-bound-to-a-bone" aria-label="Permalink to &quot;Method 2 - Bound to a Bone&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Tag, { name: "intermediate" }, null, _parent));
  _push(`<p>2 つ目の方法では、attachable の geometry を model binding で構築します。これにより、装備スロットに対応する mob の geometry 内の bone にモデルを直接結びつけられます。Minecraft は、トライデント、望遠鏡、弓、盾などの attachable アイテムに model binding を使っています。</p><p>この方法では、attachable を他の mob や装備スロットにより動的に適用できますが、model binding には奇妙な癖もあります。これについては下で説明します。開発者によっては、この方法の方が動作させるのが難しいと感じるかもしれません。</p><h3 id="model-binding" tabindex="-1">Model Binding <a class="header-anchor" href="#model-binding" aria-label="Permalink to &quot;Model Binding&quot;">​</a></h3><p>最初の手順は、モデルファイルのフォーマットバージョンをまだなら <code class="shiki"><span>&quot;1.16.0&quot;</span></code> に更新することです。モデルが古い形式のファイルなら、続ける前に変換してください。Blockbench にはそのためのツールがあります（File → Convert Project）。</p><p>次に、geometry のルート bone を、アイテムが配置される装備スロットに結びつけるよう変更します。skeleton head geometry ファイルの抜粋の 4 行目に注目してください。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RP/models/entity/skeleton_head.geo.json`);
      } else {
        return [
          createTextVNode("RP/models/entity/skeleton_head.geo.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// A bone</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;skeleton_head&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;binding&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;q.item_slot_to_bone_name(context.item_slot)&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;pivot&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;cubes&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;uv&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>bone の <code class="shiki"><span>&quot;parent&quot;</span></code> キーは文字列を受け取り、入力した bone 名が現在の bone の親になります。子 bone は位置を保ったまま、親 bone を基準に移動します。</p><p>一方 <code class="shiki"><span>&quot;binding&quot;</span></code> キーは Molang を受け取り、入力した bone 名の pivot point を、子 bone とその子孫が継承する <em>root position</em> として扱います。</p><p><code class="shiki"><span>&quot;binding&quot;</span></code> の値には Molang query <code class="shiki"><span>q.item_slot_to_bone_name</span></code> を使います。これはスロット名を bone 名へ変換し、引数として contextual variable <code class="shiki"><span>context.item_slot</span></code> を受け取ります。これにより、アイテムが属する装備スロット名を、プレイヤーの geometry にある対応する bone 名へ変換します。変換は次のとおりです。</p><ul><li><code class="shiki"><span>&#39;main_hand&#39;</span></code> → &quot;rightitem&quot;</li><li><code class="shiki"><span>&#39;off_hand&#39;</span></code> → &quot;leftitem&quot;</li></ul><p>bone に model binding を適用し、geometry を resource pack に保存します。</p><p>この binding を適用したモデル例は次のとおりです。</p>`);
  _push(ssrRenderComponent(_component_Button, {
    download: "",
    link: "/assets/packs/items/attachables/method_two/skeleton_head.geo.json"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 📄 Geometry File `);
      } else {
        return [
          createTextVNode(" 📄 Geometry File ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 id="display-settings-1" tabindex="-1">Display Settings <a class="header-anchor" href="#display-settings-1" aria-label="Permalink to &quot;Display Settings&quot;">​</a></h3><p>ここまでできたら、次は一人称と三人称でモデルを表示するためのアニメーションを設定します。</p><p>新しいアニメーションを 2 つ作成します。1 つは一人称でアイテムを持つ用、もう 1 つは三人称で持つ用です。</p><p>これらのアニメーションを作りやすくするため、次の手順を行ってください。</p><ul><li><p>次の player skeleton モデルをダウンロードします。モデルの位置調整の視覚補助として使います。</p>`);
  _push(ssrRenderComponent(_component_Button, {
    download: "",
    link: "/assets/packs/items/attachables/method_two/player_skeleton.geo.json"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 📄 Player Skeleton File `);
      } else {
        return [
          createTextVNode(" 📄 Player Skeleton File ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li><p>テキストエディタで、モデルの bones と cubes を player skeleton モデルに追加し、その player skeleton モデルを Blockbench にインポートします。</p></li><li><p>モデルの root bone を、player skeleton 内の <code class="shiki"><span>rightItem</span></code> bone の子に設定します。</p></li><li><p>次の animation file をダウンロードし、<code class="shiki"><span>wiki.third_person_guide</span></code> アニメーションをインポートします。これは後で位置調整をしやすくするために使います。</p>`);
  _push(ssrRenderComponent(_component_Button, {
    download: "",
    link: "/assets/packs/items/attachables/method_two/attachable_guide.animation.json"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 📄 Attachable Guide File `);
      } else {
        return [
          createTextVNode(" 📄 Attachable Guide File ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><p>これらのガイドアニメーションには 1 つ特徴があります。Minecraft が bound bone に適用する -24 の y 位置オフセットを打ち消すため、right item bone の y 位置に -24 のオフセットを適用しています。なぜこうなるのかは、現時点では不明です。</p><div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>方法 1 と同様に、正しい位置にするには <strong>2 つ</strong> のアニメーションを同時に再生する必要があります。</p><p>変更を加えるときは、必ず自分のアニメーションを編集している状態にしてください。まずそれを選択し、その上にガイドアニメーションを再生します。</p></div><p>両方のアニメーションを再生し、モデルを好きな位置に配置します。そのアニメーションを resource pack に保存してください。</p><p>この位置調整用のアニメーション例はこちらです。</p>`);
  _push(ssrRenderComponent(_component_Button, {
    download: "",
    link: "/assets/packs/items/attachables/method_two/skeleton_head.animation.json"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 📄 Animation File `);
      } else {
        return [
          createTextVNode(" 📄 Animation File ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 id="first-person-animations-1" tabindex="-1">First-person Animations <a class="header-anchor" href="#first-person-animations-1" aria-label="Permalink to &quot;First-person Animations&quot;">​</a></h3><p>三人称アニメーションと同様に、Attachable Guide ファイルを見て <code class="shiki"><span>wiki.first_person_guide</span></code> アニメーションを Blockbench にインポートします。自分のアニメーションとガイドの一人称アニメーションを同時に再生し、調整して保存します。</p><h2 id="example-pack" tabindex="-1">Example Pack <a class="header-anchor" href="#example-pack" aria-label="Permalink to &quot;Example Pack&quot;">​</a></h2><p>これらの方法はすべて、参考用のサンプルパックとしてまとめられています。詰まったときや、動作する例を見たいときに利用できます。</p>`);
  _push(ssrRenderComponent(_component_Button, {
    download: "",
    link: "https://github.com/Bedrock-OSS/bedrock-examples/releases/download/download/attachable-example.mcpack"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 💾 Example Pack `);
      } else {
        return [
          createTextVNode(" 💾 Example Pack ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("items/attachables.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const attachables = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  attachables as default
};
