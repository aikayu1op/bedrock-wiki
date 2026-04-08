import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"スポーンエッグの再テクスチャ","description":"エンティティのスポーンエッグの既定テクスチャを変更します。","frontmatter":{"title":"スポーンエッグの再テクスチャ","description":"エンティティのスポーンエッグの既定テクスチャを変更します。","category":"Tutorials","tags":["beginner"],"mentions":["SirLich","Joelant05","MedicalJewel105","aexer0e","QuazChick"]},"headers":[{"level":2,"title":"テクスチャを作成する","slug":"テクスチャを作成する","link":"#テクスチャを作成する","children":[]},{"level":2,"title":"テクスチャを追加する","slug":"テクスチャを追加する","link":"#テクスチャを追加する","children":[]},{"level":2,"title":"テクスチャに名前を付ける","slug":"テクスチャに名前を付ける","link":"#テクスチャに名前を付ける","children":[]},{"level":2,"title":"新しいテクスチャを使う","slug":"新しいテクスチャを使う","link":"#新しいテクスチャを使う","children":[]}],"relativePath":"visuals/retexturing-spawn-eggs.md","filePath":"visuals/retexturing-spawn-eggs.md"}');
const _sfc_main = { name: "visuals/retexturing-spawn-eggs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>カスタムエンティティには、スポーンエッグが自動的に付与されます。 このスポーンエッグはクリエイティブメニュー内にあり、<code class="shiki"><span>item.spawn_egg.entity.wiki:custom_entity.name</span></code> のような名前で表示されます。 スポーンエッグの名前もテクスチャも変更したい場合は、lang ファイルで設定できます。</p><p>このチュートリアルでは、スポーンエッグを再テクスチャして、卵らしさを減らし、スポーンさせる対象により近い見た目にします。</p><h2 id="テクスチャを作成する" tabindex="-1">テクスチャを作成する <a class="header-anchor" href="#テクスチャを作成する" aria-label="Permalink to &quot;テクスチャを作成する&quot;">​</a></h2><p>Blockbench を使えば、エンティティのスクリーンショットを簡単に撮れます。モデルを読み込み、ドロップダウンからスクリーンショットの書き出しを選びます。</p><p>このような画像が不要なら、自分でピクセルアートを作っても、好きな画像を使ってもかまいません。正方形であることだけ注意してください。</p><h2 id="テクスチャを追加する" tabindex="-1">テクスチャを追加する <a class="header-anchor" href="#テクスチャを追加する" aria-label="Permalink to &quot;テクスチャを追加する&quot;">​</a></h2><p>テクスチャファイルは <code class="shiki"><span>RP/textures</span></code> の下に追加します。 他のアドオンとの互換性問題を避けるため、アドオン内でテクスチャ専用のフォルダーを分けておくことを強くおすすめします。</p><p>この wiki ではテクスチャを <code class="shiki"><span>RP/textures/wiki</span></code> フォルダーに置いているため、テクスチャの場所は <code class="shiki"><span>RP/textures/wiki/items/spawn_egg/custom_entity.png</span></code> のようになります。</p><h2 id="テクスチャに名前を付ける" tabindex="-1">テクスチャに名前を付ける <a class="header-anchor" href="#テクスチャに名前を付ける" aria-label="Permalink to &quot;テクスチャに名前を付ける&quot;">​</a></h2><p>次に、テクスチャの短い名前を付けます。これは item texture atlas ファイルで設定できます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RP/textures/item_texture.json`);
      } else {
        return [
          createTextVNode("RP/textures/item_texture.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;texture_data&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;wiki:custom_entity_spawn_egg&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">            // &quot;wiki:custom_entity_spawn_egg&quot; はテクスチャの short-name で、後で参照できます</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;textures&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;textures/wiki/items/spawn_egg/custom_entity&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">        // ここに他のスポーンエッグテクスチャを追加できます</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="新しいテクスチャを使う" tabindex="-1">新しいテクスチャを使う <a class="header-anchor" href="#新しいテクスチャを使う" aria-label="Permalink to &quot;新しいテクスチャを使う&quot;">​</a></h2><p>これで、Resource Pack の entity ファイル内で新しいテクスチャを使えます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RP/entity/custom_entity.json#description`);
      } else {
        return [
          createTextVNode("RP/entity/custom_entity.json#description")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;spawn_egg&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:custom_entity_spawn_egg&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// &quot;wiki:custom_entity_spawn_egg&quot; は手順 1 で作成したテクスチャの short-name と一致させます</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;texture_index&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>さっそくテストしてみましょう。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("visuals/retexturing-spawn-eggs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const retexturingSpawnEggs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  retexturingSpawnEggs as default
};
