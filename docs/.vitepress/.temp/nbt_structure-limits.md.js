import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./structure.BrPtEiW5.js";
import { _ as _imports_0$1 } from "./compound.Djso2cBT.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_2 = "/assets/images/nbt/structure-limits/nbt-screenshot-1.png";
const _imports_3 = "/assets/images/nbt/structure-limits/result.png";
const __pageData = JSON.parse('{"title":"構造物サイズ上限の拡張","description":"構造物のサイズ上限を拡張します。","frontmatter":{"title":"構造物サイズ上限の拡張","category":"Tutorials","mentions":["MedicalJewel105"],"tags":["easy"],"description":"構造物のサイズ上限を拡張します。"},"headers":[{"level":2,"title":"NBT の編集","slug":"nbt-の編集","link":"#nbt-の編集","children":[]},{"level":2,"title":"ヒント","slug":"ヒント","link":"#ヒント","children":[]}],"relativePath":"nbt/structure-limits.md","filePath":"nbt/structure-limits.md"}');
const _sfc_main = { name: "nbt/structure-limits.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="warning custom-block"><p class="custom-block-title">廃止済み</p><p>この方法は 1.20.50 のアップデート以降は動作しません。</p></div><p>既定では、Minecraft は 64x255x64 を超える構造物を保存できません。 このガイドでは、ストラクチャーブロックの構造物ボックスサイズを拡張する方法を学びます。</p><h2 id="nbt-の編集" tabindex="-1">NBT の編集 <a class="header-anchor" href="#nbt-の編集" aria-label="Permalink to &quot;NBT の編集&quot;">​</a></h2><ol><li>ストラクチャーブロックを構造物に含めてエクスポートします。</li><li>NBT エディタ（ここでは NBT Studio）で構造物を開き、ストラクチャーブロックを探します。</li></ol><p>構造物内のブロックがストラクチャーブロックだけなら、そのデータはここにあります。</p><p><img${ssrRenderAttr("src", _imports_0)} alt=""> extending_structure_block.mcstructure</p><blockquote><p><img${ssrRenderAttr("src", _imports_0$1)} alt=""> structure</p><blockquote><p><img${ssrRenderAttr("src", _imports_0$1)} alt=""> palette</p><blockquote><p><img${ssrRenderAttr("src", _imports_0$1)} alt=""> default</p><blockquote><p><img${ssrRenderAttr("src", _imports_0$1)} alt=""> block_position_data</p><blockquote><p><img${ssrRenderAttr("src", _imports_0$1)} alt=""> 0</p></blockquote></blockquote></blockquote></blockquote></blockquote><p><img${ssrRenderAttr("src", _imports_2)} alt=""></p><ol start="3"><li><code class="shiki"><span>xStructureSize</span></code>、<code class="shiki"><span>yStructureSize</span></code>、<code class="shiki"><span>zStructureSize</span></code> の値を希望の値に設定します。</li><li>構造物を保存し、ゲーム内で読み込みます。</li></ol><p><img${ssrRenderAttr("src", _imports_3)} alt=""></p><h2 id="ヒント" tabindex="-1">ヒント <a class="header-anchor" href="#ヒント" aria-label="Permalink to &quot;ヒント&quot;">​</a></h2><p>Ctrl を押しながらマウスホイールボタンを押すと、このストラクチャーブロックをインベントリに入れられます。 巨大な構造物を読み込むときは、構造物の読み込みアニメーション（Place by Block）を使うのがおすすめです。これでラグを最小限に抑えられます。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nbt/structure-limits.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const structureLimits = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  structureLimits as default
};
