import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MIT ライセンス","description":"","frontmatter":{"title":"MIT ライセンス","source":"https://opensource.org/license/MIT","show_outline":false},"headers":[],"relativePath":"licenses/MIT.md","filePath":"licenses/MIT.md"}');
const _sfc_main = { name: "licenses/MIT.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Copyright (c) ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Bedrock OSS</p><p>このソフトウェアおよび関連ドキュメントの複製を取得する者に対し、手数料なしで、本ソフトウェアを制限なく取り扱うことを許可します。これには、使用、複製、改変、結合、公開、配布、サブライセンス、および本ソフトウェアの複製を販売する権利が含まれます。また、本ソフトウェアが提供された相手にも同様の権利を許可できます。ただし、以下の条件に従うものとします。</p><p>上記の著作権表示および本許可表示は、本ソフトウェアのすべての複製または重要な部分に含めなければなりません。</p><p><strong>本ソフトウェアは「現状のまま」提供され、明示・黙示を問わず、商品性、特定目的への適合性、および非侵害の保証を含むいかなる保証もありません。著作者または著作権保持者は、契約、不法行為、またはその他のいかなる請求、損害、その他の責任についても責任を負いません。これは、本ソフトウェアまたはその利用、あるいはその他の取扱いに起因するものを含みます。</strong></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("licenses/MIT.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MIT = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MIT as default
};
