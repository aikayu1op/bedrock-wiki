import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"アイテム形式の履歴","description":"各 Minecraft バージョンにおける data-driven item format の変更一覧です。","frontmatter":{"title":"アイテム形式の履歴","description":"各 Minecraft バージョンにおける data-driven item format の変更一覧です。","category":"Documentation","outline_depth":2,"license":true,"mentions":["QuazChick"]},"headers":[{"level":2,"title":"1.26.10","slug":"_1-26-10","link":"#_1-26-10","children":[{"level":3,"title":"コンポーネント","slug":"コンポーネント","link":"#コンポーネント","children":[]}]},{"level":2,"title":"1.26.0","slug":"_1-26-0","link":"#_1-26-0","children":[{"level":3,"title":"コンポーネント","slug":"コンポーネント-1","link":"#コンポーネント-1","children":[]}]},{"level":2,"title":"1.21.130","slug":"_1-21-130","link":"#_1-21-130","children":[{"level":3,"title":"コンポーネント","slug":"コンポーネント-2","link":"#コンポーネント-2","children":[]}]},{"level":2,"title":"1.21.120","slug":"_1-21-120","link":"#_1-21-120","children":[{"level":3,"title":"説明","slug":"説明","link":"#説明","children":[]},{"level":3,"title":"コンポーネント","slug":"コンポーネント-3","link":"#コンポーネント-3","children":[]}]},{"level":2,"title":"1.21.110","slug":"_1-21-110","link":"#_1-21-110","children":[{"level":3,"title":"コンポーネント","slug":"コンポーネント-4","link":"#コンポーネント-4","children":[]}]},{"level":2,"title":"1.21.90","slug":"_1-21-90","link":"#_1-21-90","children":[{"level":3,"title":"コンポーネント","slug":"コンポーネント-5","link":"#コンポーネント-5","children":[]}]},{"level":2,"title":"1.21.80","slug":"_1-21-80","link":"#_1-21-80","children":[{"level":3,"title":"コンポーネント","slug":"コンポーネント-6","link":"#コンポーネント-6","children":[]}]},{"level":2,"title":"1.21.60","slug":"_1-21-60","link":"#_1-21-60","children":[{"level":3,"title":"説明","slug":"説明-1","link":"#説明-1","children":[]},{"level":3,"title":"コンポーネント","slug":"コンポーネント-7","link":"#コンポーネント-7","children":[]}]},{"level":2,"title":"1.21.50","slug":"_1-21-50","link":"#_1-21-50","children":[{"level":3,"title":"コンポーネント","slug":"コンポーネント-8","link":"#コンポーネント-8","children":[]}]},{"level":2,"title":"1.21.40","slug":"_1-21-40","link":"#_1-21-40","children":[{"level":3,"title":"コンポーネント","slug":"コンポーネント-9","link":"#コンポーネント-9","children":[]}]},{"level":2,"title":"1.21.30","slug":"_1-21-30","link":"#_1-21-30","children":[{"level":3,"title":"コンポーネント","slug":"コンポーネント-10","link":"#コンポーネント-10","children":[]}]},{"level":2,"title":"1.21.20","slug":"_1-21-20","link":"#_1-21-20","children":[{"level":3,"title":"コンポーネント","slug":"コンポーネント-11","link":"#コンポーネント-11","children":[]}]},{"level":2,"title":"1.21.10","slug":"_1-21-10","link":"#_1-21-10","children":[{"level":3,"title":"コンポーネント","slug":"コンポーネント-12","link":"#コンポーネント-12","children":[]}]},{"level":2,"title":"1.21.0","slug":"_1-21-0","link":"#_1-21-0","children":[{"level":3,"title":"コンポーネント","slug":"コンポーネント-13","link":"#コンポーネント-13","children":[]},{"level":3,"title":"イベント","slug":"イベント","link":"#イベント","children":[]}]},{"level":2,"title":"1.20.60","slug":"_1-20-60","link":"#_1-20-60","children":[{"level":3,"title":"コンポーネント","slug":"コンポーネント-14","link":"#コンポーネント-14","children":[]}]},{"level":2,"title":"1.20.50","slug":"_1-20-50","link":"#_1-20-50","children":[{"level":3,"title":"コンポーネント","slug":"コンポーネント-15","link":"#コンポーネント-15","children":[]}]},{"level":2,"title":"1.20.40","slug":"_1-20-40","link":"#_1-20-40","children":[{"level":3,"title":"コンポーネント","slug":"コンポーネント-16","link":"#コンポーネント-16","children":[]}]},{"level":2,"title":"1.20.30","slug":"_1-20-30","link":"#_1-20-30","children":[{"level":3,"title":"コンポーネント","slug":"コンポーネント-17","link":"#コンポーネント-17","children":[]}]},{"level":2,"title":"1.20.20","slug":"_1-20-20","link":"#_1-20-20","children":[{"level":3,"title":"説明","slug":"説明-2","link":"#説明-2","children":[]},{"level":3,"title":"コンポーネント","slug":"コンポーネント-18","link":"#コンポーネント-18","children":[]}]},{"level":2,"title":"1.20.10","slug":"_1-20-10","link":"#_1-20-10","children":[{"level":3,"title":"コンポーネント","slug":"コンポーネント-19","link":"#コンポーネント-19","children":[]}]},{"level":2,"title":"1.20.0","slug":"_1-20-0","link":"#_1-20-0","children":[{"level":3,"title":"コンポーネント","slug":"コンポーネント-20","link":"#コンポーネント-20","children":[]}]}],"relativePath":"items/item-format-history.md","filePath":"items/item-format-history.md"}');
const _sfc_main = { name: "items/item-format-history.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Label = resolveComponent("Label");
  const _component_Tag = resolveComponent("Tag");
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="info custom-block"><p class="custom-block-title">`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` 変更</p><p>バージョン付きの変更を有効にするには、ファイルの <code class="shiki"><span>format_version</span></code> フィールドを更新する必要があります。</p></div><div class="info custom-block"><p class="custom-block-title">`);
  _push(ssrRenderComponent(_component_Tag, { name: "experimental" }, null, _parent));
  _push(` 変更</p><p>実験的な変更を有効にするには、ワールドで experiment を有効にする必要があります。</p></div><h2 id="_1-26-10" tabindex="-1">1.26.10 <a class="header-anchor" href="#_1-26-10" aria-label="Permalink to &quot;1.26.10&quot;">​</a></h2><h3 id="コンポーネント" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>更新 <code class="shiki"><span>minecraft:block_placer</span></code><ul><li><code class="shiki"><span>aligned_placement</span></code> パラメーターが追加されました。これは、ブロックを直前に置かれたブロックの位置に合わせるか、プレイヤーが移動を開始した方向の面に合わせるかを決めます。 <ul><li>既定値は <code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span></code> です。</li><li>1.26.10 で導入されましたが、このパラメーターはフォーマットバージョン 1.26.0 以降で利用できます。</li></ul></li></ul></li></ul><h2 id="_1-26-0" tabindex="-1">1.26.0 <a class="header-anchor" href="#_1-26-0" aria-label="Permalink to &quot;1.26.0&quot;">​</a></h2><h3 id="コンポーネント-1" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-1" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>更新 <code class="shiki"><span>minecraft:damage</span></code><ul><li><code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">255</span></code> を超える値を、最大 <code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">32767</span></code> まで正しくサポートするようになりました。</li></ul></li></ul><h2 id="_1-21-130" tabindex="-1">1.21.130 <a class="header-anchor" href="#_1-21-130" aria-label="Permalink to &quot;1.21.130&quot;">​</a></h2><h3 id="コンポーネント-2" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-2" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3><ul><li>追加 <code class="shiki"><span>minecraft:kinetic_weapon</span></code><ul><li>アイテム使用中に、プレイヤーが向かう先の各エンティティ（またはプレイヤーに向かってくる各エンティティ）へダメージを与え、さらに降ろしとノックバックも適用します。</li><li><code class="shiki"><span>delay</span></code> を含みます。これは kinetic ダメージと効果の適用が始まるまでの時間（tick）を決めます。</li><li><code class="shiki"><span>hitbox_margin</span></code> を含みます。これは、kinetic attack の対象になるために、各ターゲットの collision がプレイヤーの視線方向にどれだけ近い必要があるか（ブロック単位）を決めます。 <ul><li>既定では追加の hitbox margin はありません。</li></ul></li><li><code class="shiki"><span>reach</span></code> を含みます。これは、kinetic attack の対象になるために、エンティティがプレイヤーからどれだけ離れていればよいか（ブロック単位）を決めます。 <ul><li>既定では、プレイヤーから 0 〜 3 ブロックの範囲にいるエンティティが対象になります。</li></ul></li><li><code class="shiki"><span>creative_reach</span></code> を含みます。これは、プレイヤーがクリエイティブモードのときに適用される <code class="shiki"><span>reach</span></code> を決めます。 <ul><li>既定では、クリエイティブモードのプレイヤーは通常の <code class="shiki"><span>reach</span></code> 範囲に制限されます。</li></ul></li><li><code class="shiki"><span>damage_multiplier</span></code> を含みます。これは kinetic attack の基本ダメージに掛けて、倍率後のダメージ値を得ます。</li><li><code class="shiki"><span>damage_modifier</span></code> を含みます。これは倍率後のダメージ値に加算され、各ターゲットへ与える最終ダメージ値になります。</li><li><code class="shiki"><span>damage_conditions</span></code> を含みます。これはダメージを与えるために満たす必要がある条件一覧です。</li><li><code class="shiki"><span>dismount_conditions</span></code> を含みます。これは、kinetic attack によって各ターゲットが乗っているエンティティから降ろされるために満たす必要がある条件一覧です。 <ul><li>既定では、エンティティが降ろされることはありません。</li></ul></li><li><code class="shiki"><span>knockback_conditions</span></code> を含みます。これは、kinetic attack によって各ターゲットがノックバックを受けるために満たす必要がある条件一覧です。 <ul><li>既定では、ノックバックは適用されません。</li></ul></li></ul></li><li>追加 <code class="shiki"><span>minecraft:piercing_weapon</span></code><ul><li>攻撃時に、プレイヤーの視線方向にまっすぐ並んだすべてのエンティティへダメージを与えます。</li><li>プレイヤーと他のエンティティの間にブロック衝突がある場合、ダメージは防がれます。</li><li>ブロック採掘にこのアイテムを使えないようにします。</li><li><code class="shiki"><span>hitbox_margin</span></code> を含みます。これは、各エンティティの collision がプレイヤーの視線方向にどれだけ近い必要があるか（ブロック単位）を決めます。 <ul><li>既定では追加の hitbox margin はありません。</li></ul></li><li><code class="shiki"><span>reach</span></code> を含みます。これは、ダメージを受けるために、エンティティがプレイヤーからどれだけ離れていればよいか（ブロック単位）を決めます。 <ul><li>既定では、プレイヤーから 0 〜 3 ブロックの範囲にいるエンティティがダメージを受けます。</li></ul></li><li><code class="shiki"><span>creative_reach</span></code> を含みます。これは、プレイヤーがクリエイティブモードのときに適用される <code class="shiki"><span>reach</span></code> を決めます。 <ul><li>既定では、クリエイティブモードのプレイヤーは通常の <code class="shiki"><span>reach</span></code> 範囲に制限されます。</li></ul></li></ul></li><li>追加 <code class="shiki"><span>minecraft:swing_sounds</span></code><ul><li>アイテムを持っているときにプレイヤーが攻撃した際に発生する、バニラのサウンドイベントを決めます。</li><li><code class="shiki"><span>attack_miss</span></code> を含みます。これは、エンティティに当たらなかった、またはダメージが発生しなかったときのサウンドイベントを決めます。</li><li><code class="shiki"><span>attack_hit</span></code> を含みます。これは、エンティティに当たり、通常ダメージが発生したときのサウンドイベントを決めます。</li><li><code class="shiki"><span>attack_critical_hit</span></code> を含みます。これは、エンティティに当たり、クリティカルダメージが発生したときのサウンドイベントを決めます。</li></ul></li><li>更新 <code class="shiki"><span>minecraft:cooldown</span></code><ul><li><code class="shiki"><span>type</span></code> パラメーターが追加されました。これは、クールダウンが次のどの入力に作用するかを決めます。 <ul><li><code class="shiki"><span>use</span></code>（既定）は、アイテム使用時に発動し、クールダウン中はそのアイテムの使用を防ぎます。</li><li><code class="shiki"><span>attack</span></code> は、アイテムを持っている状態でプレイヤーが攻撃したときに発動し、クールダウン中はそのアイテムでの攻撃を防ぎます。</li></ul></li></ul></li><li>更新 <code class="shiki"><span>minecraft:use_modifiers</span></code><ul><li><code class="shiki"><span>start_sound</span></code> パラメーターが追加されました。これは、アイテムの使用開始時に発生するバニラのサウンドイベントを決めます。</li></ul></li></ul><h2 id="_1-21-120" tabindex="-1">1.21.120 <a class="header-anchor" href="#_1-21-120" aria-label="Permalink to &quot;1.21.120&quot;">​</a></h2><h3 id="説明" tabindex="-1">説明 <a class="header-anchor" href="#説明" aria-label="Permalink to &quot;説明&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<pre><code>-   \`menu_category\` が更新されました。
-   カテゴリのないアイテムも、コマンドで使えるようになりました。
-   \`is_hidden_in_commands\` が \`true\` の場合でも、そのアイテムはコマンドでは無効のままです。
</code></pre><h3 id="コンポーネント-3" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-3" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3><ul><li>追加 <code class="shiki"><span>minecraft:swing_duration</span></code><ul><li>採掘、攻撃、またはアイテム使用時のプレイヤーの振りアニメーションの長さ（秒単位）を決めます。</li></ul></li><li>更新 <code class="shiki"><span>minecraft:use_modifiers</span></code><ul><li><code class="shiki"><span>emit_vibrations</span></code> パラメーターが追加されました。これは、アイテムの使用開始時と終了時に振動を発するかどうかを決めます。</li></ul></li></ul><h2 id="_1-21-110" tabindex="-1">1.21.110 <a class="header-anchor" href="#_1-21-110" aria-label="Permalink to &quot;1.21.110&quot;">​</a></h2><h3 id="コンポーネント-4" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-4" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3><ul><li>追加 <code class="shiki"><span>minecraft:fire_resistant</span></code><ul><li>アイテムが火や溶岩で破壊されないかどうかを決めます。</li></ul></li></ul><h2 id="_1-21-90" tabindex="-1">1.21.90 <a class="header-anchor" href="#_1-21-90" aria-label="Permalink to &quot;1.21.90&quot;">​</a></h2><h3 id="コンポーネント-5" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-5" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3><ul><li>更新 <code class="shiki"><span>minecraft:wearable</span></code><ul><li><code class="shiki"><span>hides_player_location</span></code> パラメーターが追加されました。これは、そのアイテムを装備したプレイヤーが Locator Bar と Locator Maps から非表示になるかどうかを決めます。</li><li>既定では、wearable アイテムはプレイヤーを隠しません。</li></ul></li></ul>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li><p>削除 <code class="shiki"><span>minecraft:custom_components</span></code></p><ul><li><p>カスタムコンポーネントは、バニラコンポーネントと同じように <code class="shiki"><span>components</span></code> オブジェクトの項目として適用します。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`minecraft:block`);
      } else {
        return [
          createTextVNode("minecraft:block")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;minecraft:glint&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;wiki:custom_component&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;parameter&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;value&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li></ul></li></ul><h2 id="_1-21-80" tabindex="-1">1.21.80 <a class="header-anchor" href="#_1-21-80" aria-label="Permalink to &quot;1.21.80&quot;">​</a></h2><h3 id="コンポーネント-6" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-6" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Tag, { name: "experimental" }, null, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`カスタムコンポーネント V2`);
      } else {
        return [
          createTextVNode("カスタムコンポーネント V2")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>削除 <code class="shiki"><span>minecraft:custom_components</span></code><ul><li>カスタムコンポーネントは、バニラのコンポーネントと同じように <code class="shiki"><span>components</span></code> オブジェクトの項目として適用するようになりました。</li></ul></li></ul><h2 id="_1-21-60" tabindex="-1">1.21.60 <a class="header-anchor" href="#_1-21-60" aria-label="Permalink to &quot;1.21.60&quot;">​</a></h2><h3 id="説明-1" tabindex="-1">説明 <a class="header-anchor" href="#説明-1" aria-label="Permalink to &quot;説明&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<pre><code>-   \`menu_category\` が更新されました。
-   \`group\` パラメーターに namespace が必要になりました。例: \`minecraft:itemGroup.name.concrete\`
</code></pre><h3 id="コンポーネント-7" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-7" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>追加 <code class="shiki"><span>minecraft:storage_weight_limit</span></code><ul><li>storage item コンテナー内のすべてのアイテムの合計重量の上限を決めます。</li><li>storage item の <code class="shiki"><span>max_weight_limit</span></code> パラメーターを置き換えます。</li></ul></li><li>追加 <code class="shiki"><span>minecraft:storage_weight_modifier</span></code><ul><li>このアイテムが storage item の中にあるときに追加される重量を決めます。</li><li>0 の場合、このアイテムは storage item の中に入れられません。</li><li>storage item の <code class="shiki"><span>weight_in_storage_item</span></code> パラメーターを置き換えます。</li></ul></li><li>実験から解除 <code class="shiki"><span>minecraft:compostable</span></code></li><li>更新 <code class="shiki"><span>minecraft:block_placer</span></code><ul><li><code class="shiki"><span>replace_block_item</span></code> パラメーターが実験から解除されました。</li></ul></li><li>更新 <code class="shiki"><span>minecraft:storage_item</span></code><ul><li><code class="shiki"><span>max_weight_limit</span></code> パラメーターが削除されました。</li><li><code class="shiki"><span>weight_in_storage_item</span></code> パラメーターが削除されました。</li></ul></li></ul><h2 id="_1-21-50" tabindex="-1">1.21.50 <a class="header-anchor" href="#_1-21-50" aria-label="Permalink to &quot;1.21.50&quot;">​</a></h2><h3 id="コンポーネント-8" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-8" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Tag, { name: "experimental" }, null, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "blue" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`今後の Creator Features`);
      } else {
        return [
          createTextVNode("今後の Creator Features")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>追加 <code class="shiki"><span>minecraft:compostable</span></code><ul><li>このアイテムをコンポスターで使えるようにします。</li><li><code class="shiki"><span>composting_chance</span></code> を含み、コンポストレベルが増える確率を 0〜100 のパーセントで決めます。</li></ul></li></ul><h2 id="_1-21-40" tabindex="-1">1.21.40 <a class="header-anchor" href="#_1-21-40" aria-label="Permalink to &quot;1.21.40&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>数値を boolean 値の表現に使えなくなりました。</li><li>浮動小数点数を整数値の表現に使えなくなりました。</li></ul><h3 id="コンポーネント-9" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-9" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>実験から解除 <code class="shiki"><span>minecraft:bundle_interaction</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:storage_item</span></code></li></ul>`);
  _push(ssrRenderComponent(_component_Tag, { name: "experimental" }, null, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "blue" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`今後の Creator Features`);
      } else {
        return [
          createTextVNode("今後の Creator Features")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>更新 <code class="shiki"><span>minecraft:block_placer</span></code><ul><li><code class="shiki"><span>minecraft:icon</span></code> コンポーネントが適用されていない場合、指定した <code class="shiki"><span>block</span></code> がアイテムのアイコンとして使われます。</li><li><code class="shiki"><span>replace_block_item</span></code> パラメーターが追加されました。これは、指定した <code class="shiki"><span>block</span></code> の既定アイテムをこのアイテムで置き換えます。 <ul><li>これを機能させるには、アイテムとブロックの識別子が同じである必要があります。</li><li>ブロックアイテムの置き換えについては<a href="/blocks/blocks-as-items#replacing-block-items">こちら</a>を参照してください。</li></ul></li></ul></li></ul><h2 id="_1-21-30" tabindex="-1">1.21.30 <a class="header-anchor" href="#_1-21-30" aria-label="Permalink to &quot;1.21.30&quot;">​</a></h2><h3 id="コンポーネント-10" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-10" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>追加 <code class="shiki"><span>minecraft:dyeable</span></code><ul><li>可能にします。鍋の水でアイテムを染色できるようにします。</li><li>含みます。<code class="shiki"><span>default_color</span></code> を含みます。これは、アイテムが染色される前に使用する任意の色を決めます。</li><li>染色後、そのアイテムは <code class="shiki"><span>minecraft:icon</span></code> コンポーネントで定義された <code class="shiki"><span>default</span></code> ではなく <code class="shiki"><span>dyed</span></code> テクスチャを表示します。</li></ul></li><li>追加 <code class="shiki"><span>minecraft:rarity</span></code><ul><li>アイテムの基本レアリティを定義します（アイテム名の色で表示されます）。</li><li><code class="shiki"><span>common</span></code>、<code class="shiki"><span>uncommon</span></code>、<code class="shiki"><span>rare</span></code>、<code class="shiki"><span>epic</span></code> の各レアリティを受け付けます。</li><li>アイテムがエンチャントされている場合、可能であればレアリティは次のレベルに上がります。</li><li>このコンポーネントには機能上の効果はなく、<code class="shiki"><span>minecraft:hover_text_color</span></code> で上書きできます。</li></ul></li></ul>`);
  _push(ssrRenderComponent(_component_Tag, { name: "experimental" }, null, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "orange" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Bundles`);
      } else {
        return [
          createTextVNode("Bundles")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>追加 <code class="shiki"><span>minecraft:bundle_interaction</span></code><ul><li>アイテムにバンドルのインターフェースと機能を有効化します。</li><li><code class="shiki"><span>num_viewable_slots</span></code> を含みます。</li><li><code class="shiki"><span>minecraft:storage_item</span></code> コンポーネントの適用が必要です。</li></ul></li><li>追加 <code class="shiki"><span>minecraft:storage_item</span></code><ul><li>このアイテムが他のアイテムを格納できるようにします。</li><li><code class="shiki"><span>allow_nested_storage_items</span></code> を含みます。これは、他の storage item をコンテナー内に入れられるかどうかを決めます。</li><li><code class="shiki"><span>allowed_items</span></code> を含みます。これは、コンテナー内で許可されるアイテムを定義します。 <ul><li>空の場合、すべてのアイテムがコンテナー内で許可されます。</li></ul></li><li><code class="shiki"><span>banned_items</span></code> を含みます。これは、コンテナー内で許可されないアイテムを定義します。</li><li><code class="shiki"><span>max_slots</span></code> を含みます。これは、コンテナー内のスロット数を定義します。</li><li><code class="shiki"><span>max_weight_limit</span></code> を含みます。これは、コンテナー内の全アイテムの合計重量の上限を定義します。</li><li><code class="shiki"><span>weight_in_storage_item</span></code> を含みます。これは、別の storage item の中に入っているときにアイテムへ追加される重量を定義します。 <ul><li>値が 0 の場合、このアイテムは別の storage item の中に入れられません。</li></ul></li></ul></li></ul><h2 id="_1-21-20" tabindex="-1">1.21.20 <a class="header-anchor" href="#_1-21-20" aria-label="Permalink to &quot;1.21.20&quot;">​</a></h2><h3 id="コンポーネント-11" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-11" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>追加 <code class="shiki"><span>minecraft:damage_absorption</span></code><ul><li>本来は装備者が受けるはずのダメージを、そのアイテムが吸収するようにします。</li><li><code class="shiki"><span>absorbable_causes</span></code> を含みます。これは、アイテムで吸収できるダメージ原因の一覧（<code class="shiki"><span>entity_attack</span></code> や <code class="shiki"><span>magma</span></code> など）を定義します。</li><li><code class="shiki"><span>minecraft:durability</span></code> と <code class="shiki"><span>minecraft:wearable</span></code> コンポーネントが必要です。</li></ul></li><li>追加 <code class="shiki"><span>minecraft:durability_sensor</span></code><ul><li>ダメージを受けたときに効果を発生させるようにします。</li><li><code class="shiki"><span>durability_thresholds</span></code> を含みます。これは、耐久値のしきい値と、そのしきい値に達したときに発生する効果の両方を定義します。</li></ul></li></ul><h2 id="_1-21-10" tabindex="-1">1.21.10 <a class="header-anchor" href="#_1-21-10" aria-label="Permalink to &quot;1.21.10&quot;">​</a></h2><h3 id="コンポーネント-12" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-12" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>実験から解除 <code class="shiki"><span>minecraft:custom_components</span></code></li></ul><h2 id="_1-21-0" tabindex="-1">1.21.0 <a class="header-anchor" href="#_1-21-0" aria-label="Permalink to &quot;1.21.0&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Tag, { name: "experimental" }, null, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ホリデー クリエイター機能`);
      } else {
        return [
          createTextVNode("ホリデー クリエイター機能")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>削除 <code class="shiki"><span>events</span></code></li></ul><h3 id="コンポーネント-13" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-13" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Tag, { name: "experimental" }, null, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "yellow" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ベータ API`);
      } else {
        return [
          createTextVNode("ベータ API")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>追加 <code class="shiki"><span>minecraft:custom_components</span></code><ul><li>このブロックに適用するすべてのカスタムコンポーネントの一覧です。</li></ul></li></ul><h3 id="イベント" tabindex="-1">イベント <a class="header-anchor" href="#イベント" aria-label="Permalink to &quot;イベント&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Tag, { name: "experimental" }, null, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ホリデー クリエイター機能`);
      } else {
        return [
          createTextVNode("ホリデー クリエイター機能")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>削除 <code class="shiki"><span>add_mob_effect</span></code> レスポンス</li><li>削除 <code class="shiki"><span>damage</span></code> レスポンス</li><li>削除 <code class="shiki"><span>decrement_stack</span></code> レスポンス</li><li>削除 <code class="shiki"><span>remove_mob_effect</span></code> レスポンス</li><li>削除 <code class="shiki"><span>run_command</span></code> レスポンス</li><li>削除 <code class="shiki"><span>teleport</span></code> レスポンス</li><li>削除 <code class="shiki"><span>transform_item</span></code> レスポンス</li></ul><h2 id="_1-20-60" tabindex="-1">1.20.60 <a class="header-anchor" href="#_1-20-60" aria-label="Permalink to &quot;1.20.60&quot;">​</a></h2><h3 id="コンポーネント-14" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-14" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>更新 <code class="shiki"><span>minecraft:icon</span></code><ul><li><code class="shiki"><span>texture</span></code> パラメーターが削除されました。</li><li><code class="shiki"><span>textures</span></code> パラメーターが追加されました。これは、装飾鎧のトリムを含む、アイテムのアイコンに使用できる複数のテクスチャを一覧化します。 <ul><li><code class="shiki"><span>default</span></code> を含みます。これは <code class="shiki"><span>texture</span></code> パラメーターの置き換えです。</li></ul></li></ul></li></ul><h2 id="_1-20-50" tabindex="-1">1.20.50 <a class="header-anchor" href="#_1-20-50" aria-label="Permalink to &quot;1.20.50&quot;">​</a></h2><h3 id="コンポーネント-15" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-15" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>追加 <code class="shiki"><span>minecraft:tags</span></code><ul><li>このアイテムに適用されるタグの一覧です。</li><li><code class="shiki"><span>tag:*</span></code> コンポーネントを置き換えます。</li></ul></li><li>追加 <code class="shiki"><span>minecraft:use_modifiers</span></code><ul><li><code class="shiki"><span>use_duration</span></code> を含みます。これは、アイテムを完全に使用するのにかかる時間（秒単位）を定義します。 <ul><li><code class="shiki"><span>minecraft:use_duration</span></code> コンポーネントを置き換えます。</li></ul></li><li><code class="shiki"><span>movement_modifier</span></code> を含みます。これは、アイテム使用中の所持者の速度に倍率を適用します。</li></ul></li><li>削除 <code class="shiki"><span>minecraft:use_duration</span></code></li><li><code class="shiki"><span>tag:*</span></code> を使ってタグを適用する機能が削除されました。</li></ul>`);
  _push(ssrRenderComponent(_component_Tag, { name: "experimental" }, null, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ホリデー クリエイター機能`);
      } else {
        return [
          createTextVNode("ホリデー クリエイター機能")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>削除 <code class="shiki"><span>minecraft:chargeable</span></code></li><li>更新 <code class="shiki"><span>minecraft:digger</span></code><ul><li><code class="shiki"><span>on_dig</span></code> トリガー パラメーターが削除されました。</li></ul></li></ul><h2 id="_1-20-40" tabindex="-1">1.20.40 <a class="header-anchor" href="#_1-20-40" aria-label="Permalink to &quot;1.20.40&quot;">​</a></h2><h3 id="コンポーネント-16" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-16" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>更新 <code class="shiki"><span>minecraft:icon</span></code><ul><li>単一の文字列値を再び使用できるようになりました。例: <code class="shiki"><span>&quot;minecraft:icon&quot;: &quot;stick&quot;</span></code>。</li></ul></li></ul>`);
  _push(ssrRenderComponent(_component_Tag, { name: "experimental" }, null, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ホリデー クリエイター機能`);
      } else {
        return [
          createTextVNode("ホリデー クリエイター機能")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>削除 <code class="shiki"><span>minecraft:on_use</span></code> trigger</li><li>削除 <code class="shiki"><span>minecraft:on_use_on</span></code> trigger</li><li>削除 <code class="shiki"><span>minecraft:weapon</span></code></li></ul><h2 id="_1-20-30" tabindex="-1">1.20.30 <a class="header-anchor" href="#_1-20-30" aria-label="Permalink to &quot;1.20.30&quot;">​</a></h2><h3 id="コンポーネント-17" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-17" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>追加 <code class="shiki"><span>minecraft:interact_button</span></code><ul><li>タッチ操作時に表示されるボタンを有効にし、その表示テキストを設定します。</li><li><code class="shiki"><span>true</span></code> に設定すると、ボタンには &quot;Use Item&quot; と表示されます。</li></ul></li><li>実験から解除 <code class="shiki"><span>minecraft:enchantable</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:food</span></code></li></ul>`);
  _push(ssrRenderComponent(_component_Tag, { name: "experimental" }, null, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ホリデー クリエイター機能`);
      } else {
        return [
          createTextVNode("ホリデー クリエイター機能")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>削除 <code class="shiki"><span>minecraft:mining_speed</span></code></li></ul><h2 id="_1-20-20" tabindex="-1">1.20.20 <a class="header-anchor" href="#_1-20-20" aria-label="Permalink to &quot;1.20.20&quot;">​</a></h2><h3 id="説明-2" tabindex="-1">説明 <a class="header-anchor" href="#説明-2" aria-label="Permalink to &quot;説明&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>追加 <code class="shiki"><span>menu_category</span></code><ul><li><code class="shiki"><span>category</span></code> を含みます。これは、アイテムがどのタブに配置されるかを決めます。</li><li><code class="shiki"><span>group</span></code> を含みます。これは、そのアイテムがどの他のアイテムとまとめられるかを決めます。</li><li><code class="shiki"><span>is_hidden_in_commands</span></code> を含みます。これは、コマンドで使用したときにそのアイテムを無効として扱うかどうかを決めます。</li></ul></li></ul><h3 id="コンポーネント-18" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-18" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>実験から解除 <code class="shiki"><span>minecraft:allow_off_hand</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:damage</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:digger</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:enchantable</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:glint</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:hand_equipped</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:liquid_clipped</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:should_despawn</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:stacked_by_data</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:use_animation</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:use_duration</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:wearable</span></code></li></ul>`);
  _push(ssrRenderComponent(_component_Tag, { name: "experimental" }, null, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ホリデー クリエイター機能`);
      } else {
        return [
          createTextVNode("ホリデー クリエイター機能")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>削除 <code class="shiki"><span>minecraft:creative_category</span></code></li><li>Renamed <code class="shiki"><span>minecraft:foil</span></code> to <code class="shiki"><span>minecraft:glint</span></code></li><li>更新 <code class="shiki"><span>minecraft:digger</span></code><ul><li><code class="shiki"><span>on_dig</span></code> トリガー パラメーターが削除されました。</li></ul></li></ul><h2 id="_1-20-10" tabindex="-1">1.20.10 <a class="header-anchor" href="#_1-20-10" aria-label="Permalink to &quot;1.20.10&quot;">​</a></h2><h3 id="コンポーネント-19" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-19" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>実験から解除 <code class="shiki"><span>minecraft:block_placer</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:can_destroy_in_creative</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:cooldown</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:hover_text_color</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:max_stack_size</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:projectile</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:record</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:repairable</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:shooter</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:throwable</span></code></li></ul>`);
  _push(ssrRenderComponent(_component_Tag, { name: "experimental" }, null, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ホリデー クリエイター機能`);
      } else {
        return [
          createTextVNode("ホリデー クリエイター機能")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>削除 <code class="shiki"><span>minecraft:render_offsets</span></code></li></ul><h2 id="_1-20-0" tabindex="-1">1.20.0 <a class="header-anchor" href="#_1-20-0" aria-label="Permalink to &quot;1.20.0&quot;">​</a></h2><h3 id="コンポーネント-20" tabindex="-1">コンポーネント <a class="header-anchor" href="#コンポーネント-20" aria-label="Permalink to &quot;コンポーネント&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>実験から解除 <code class="shiki"><span>minecraft:display_name</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:durability</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:fuel</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:entity_placer</span></code></li><li>実験から解除 <code class="shiki"><span>minecraft:icon</span></code></li></ul>`);
  _push(ssrRenderComponent(_component_Tag, { name: "experimental" }, null, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ホリデー クリエイター機能`);
      } else {
        return [
          createTextVNode("ホリデー クリエイター機能")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Label, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`バージョン付き`);
      } else {
        return [
          createTextVNode("バージョン付き")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>削除 <code class="shiki"><span>minecraft:dye_powder</span></code></li><li>更新 <code class="shiki"><span>minecraft:repairable</span></code><ul><li>削除 <code class="shiki"><span>on_repaired</span></code> trigger parameter</li></ul></li></ul><hr><div class="danger custom-block"><p class="custom-block-title">UNDOCUMENTED</p><p><code class="shiki"><span>1.20.0</span></code> より前のバージョンの形式変更は、まだ記載されていません。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("items/item-format-history.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const itemFormatHistory = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  itemFormatHistory as default
};
