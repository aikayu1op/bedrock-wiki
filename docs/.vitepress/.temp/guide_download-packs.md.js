import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"サンプルパックのダウンロード","description":"サンプルパックをダウンロードするための付録","frontmatter":{"title":"サンプルパックのダウンロード","category":"Extra","description":"サンプルパックをダウンロードするための付録","prefix":"b. ","nav_order":2,"show_outline":false,"mentions":["SirLich","Joelant05","Dreamedc2015","sermah","SmokeyStack","MedicalJewel105","Lufurrius","TheDoctor15","TheItsNameless","QuazChick"]},"headers":[],"relativePath":"guide/download-packs.md","filePath":"guide/download-packs.md"}');
const _sfc_main = { name: "guide/download-packs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>これは付録ページです。ガイドの最初から始めるなら<a href="/guide/introduction">ここ</a>です。</p></div><p>ガイドを最大限に活用するには、各ガイド演習に必ず自分で取り組んでみてください。とはいえ、どうしても行き詰まった場合は、サンプルパックが役立つ参考資料になります。</p><p>ダウンロードはこちら:</p>`);
  _push(ssrRenderComponent(_component_Button, { link: "https://github.com/Bedrock-OSS/bedrock-examples/releases/download/download/guide.mcaddon" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` アドオンをダウンロード `);
      } else {
        return [
          createTextVNode(" アドオンをダウンロード ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>インストールするには、ダウンロードしたパックに応じて、ビヘイビアパックを Minecraft フォルダーの <code class="shiki"><span>com.mojang\\development_behavior_packs</span></code> または <code class="shiki"><span>com.mojang\\development_*_packs</span></code> に解凍してください。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/download-packs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const downloadPacks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  downloadPacks as default
};
