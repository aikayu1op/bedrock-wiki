import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"翻訳状況","description":"このページは、翻訳済みまたは次回軽く確認すればよい項目をまとめた作業メモです。","frontmatter":{"title":"翻訳状況","description":"このページは、翻訳済みまたは次回軽く確認すればよい項目をまとめた作業メモです。","category":"General","nav_order":99,"hidden":true},"headers":[{"level":2,"title":"翻訳済み","slug":"翻訳済み","link":"#翻訳済み","children":[]},{"level":2,"title":"次回は軽く確認でよい候補","slug":"次回は軽く確認でよい候補","link":"#次回は軽く確認でよい候補","children":[]}],"relativePath":"items/translation-status.md","filePath":"items/translation-status.md"}');
const _sfc_main = { name: "items/translation-status.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>このページは、翻訳作業の進捗を残すためのメモです。</p><h2 id="翻訳済み" tabindex="-1">翻訳済み <a class="header-anchor" href="#翻訳済み" aria-label="Permalink to &quot;翻訳済み&quot;">​</a></h2><ul><li><code class="shiki"><span>README.md</span></code></li><li><code class="shiki"><span>examples/resources/block_models/bp/manifest.json</span></code></li><li><code class="shiki"><span>docs/items/items-intro.md</span></code></li><li><code class="shiki"><span>docs/items/item-catalog.md</span></code></li><li><code class="shiki"><span>docs/items/item-event-migration.md</span></code></li><li><code class="shiki"><span>docs/items/item-events.md</span></code></li><li><code class="shiki"><span>docs/items/custom-armor.md</span></code></li><li><code class="shiki"><span>docs/items/attachables.md</span></code></li><li><code class="shiki"><span>docs/items/vanilla-item-groups.md</span></code></li><li><code class="shiki"><span>docs/items/vanilla-item-tags.md</span></code></li><li><code class="shiki"><span>docs/items/enchantments.md</span></code></li><li><code class="shiki"><span>docs/items/troubleshooting-items.md</span></code></li><li><code class="shiki"><span>docs/items/item-tags.md</span></code></li><li><code class="shiki"><span>docs/items/custom-food.md</span></code></li><li><code class="shiki"><span>docs/items/custom-weapons.md</span></code></li><li><code class="shiki"><span>docs/items/custom-pottery-sherds.md</span></code></li><li><code class="shiki"><span>docs/items/throwable.md</span></code></li><li><code class="shiki"><span>docs/items/spawning-items.md</span></code></li><li><code class="shiki"><span>docs/items/equipped-item-commands.md</span></code></li><li><code class="shiki"><span>docs/items/vanilla-usage-items.md</span></code></li><li><code class="shiki"><span>docs/items/item-format-history.md</span></code></li><li><code class="shiki"><span>docs/items/tool-durability.md</span></code></li></ul><h2 id="次回は軽く確認でよい候補" tabindex="-1">次回は軽く確認でよい候補 <a class="header-anchor" href="#次回は軽く確認でよい候補" aria-label="Permalink to &quot;次回は軽く確認でよい候補&quot;">​</a></h2><ul><li>なし</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("items/translation-status.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const translationStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  translationStatus as default
};
