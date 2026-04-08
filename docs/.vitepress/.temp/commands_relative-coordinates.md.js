import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/images/commands/relative-coordinates/coordinates.png";
const __pageData = JSON.parse('{"title":"座標系","description":"相対座標の仕組みを理解します。","frontmatter":{"title":"座標系","category":"General","mentions":["MedicalJewel105","Sprunkles137","7dev7urandom","Hatchibombotar","TheItsNameless","QuazChick"],"description":"相対座標の仕組みを理解します。"},"headers":[{"level":2,"title":"座標系","slug":"座標系","link":"#座標系","children":[]},{"level":2,"title":"相対座標 (~)","slug":"相対座標","link":"#相対座標","children":[{"level":3,"title":"回転","slug":"回転","link":"#回転","children":[]}]},{"level":2,"title":"ローカル座標 (^)","slug":"ローカル座標","link":"#ローカル座標","children":[]},{"level":2,"title":"補足","slug":"補足","link":"#補足","children":[]}],"relativePath":"commands/relative-coordinates.md","filePath":"commands/relative-coordinates.md"}');
const _sfc_main = { name: "commands/relative-coordinates.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="座標系" tabindex="-1">座標系 <a class="header-anchor" href="#座標系" aria-label="Permalink to &quot;座標系&quot;">​</a></h2><p>Minecraft は、ワールド内のブロックやエンティティの位置を、3次元座標の仕組みで保存します。各座標は1本の軸上の値を表します。順番は X、Y、Z です。構造物やブロックを設置するときも、エンティティをテレポートさせたり召喚したりするときも、座標を指定できますし、場合によっては必須です。ただし、必ずしも実数値である必要はありません。ワールド座標の代わりに、ワールド空間またはローカル空間に基づく相対値を使えます。</p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><p><em>ワールド設定で「座標を表示」を有効にしていれば、すでに座標に慣れているかもしれません。</em></p><h2 id="相対座標" tabindex="-1">相対座標 (~) <a class="header-anchor" href="#相対座標" aria-label="Permalink to &quot;相対座標 (~)&quot;">​</a></h2><p>相対座標は、実際の座標の代わりにチルダ <code class="shiki"><span>~</span></code> を使って表し、現在のワールド座標を基準にした位置を意味します。チルダの後ろに数値を入れると、現在位置からのオフセットを加えられます。これはワールド座標と混在できますが、ローカル座標とは混在できません。</p><p>例:</p><ul><li><code class="shiki"><span>~ ~ ~</span></code>: 変更なしの現在位置</li><li><code class="shiki"><span>~5 ~-2 ~</span></code>: X に 5 ブロック、Y に -2 ブロックのオフセットを加えた現在位置</li></ul><h3 id="回転" tabindex="-1">回転 <a class="header-anchor" href="#回転" aria-label="Permalink to &quot;回転&quot;">​</a></h3><p>相対座標は回転の文脈でも使えます。この場合は、現在の回転を基準にした回転量を表します。チルダの後ろに数値を入れることで、現在の回転にオフセットを加えられます。</p><p>例: <code class="shiki"><span>~90 ~</span></code> は現在の yaw（Y 軸回転）に 90° を加えます。</p><h2 id="ローカル座標" tabindex="-1">ローカル座標 (^) <a class="header-anchor" href="#ローカル座標" aria-label="Permalink to &quot;ローカル座標 (^)&quot;">​</a></h2><p>ローカル座標は相対座標に似ていますが、回転を基準にしたローカル空間の位置を表します。形式は <code class="shiki"><span>^left ^up ^forward</span></code> です。yaw と pitch の両方が 0 のときは、これを <code class="shiki"><span>~x ~y ~z</span></code> のように考えられます（真正面、つまり真南を向いている状態）。</p><p>相対座標と同様に、数値を入れてローカル空間での現在位置からのオフセットを指定できます。回転をコピーする対象のエンティティがない場合、x と y の回転は 0 とみなされます。</p><p>例:</p><ul><li><code class="shiki"><span>^10 ^ ^</span></code>: 左に 10 ブロックずらした現在位置</li><li><code class="shiki"><span>^ ^1.5 ^1</span></code>: 上に 1.5 ブロック、前に 1 ブロックずらした現在位置</li></ul><h2 id="補足" tabindex="-1">補足 <a class="header-anchor" href="#補足" aria-label="Permalink to &quot;補足&quot;">​</a></h2><ul><li>プレイヤーの目の高さは、足元から 1.62 ブロック上です。(<code class="shiki"><span>~ ~1.62 ~</span></code>)</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("commands/relative-coordinates.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const relativeCoordinates = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  relativeCoordinates as default
};
