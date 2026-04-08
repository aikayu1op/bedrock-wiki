import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderVNode, ssrRenderClass, renderToString } from "vue/server-renderer";
import { ref, onMounted, shallowRef, inject, computed, watch, reactive, markRaw, readonly, nextTick, defineComponent, h, onBeforeMount, mergeProps, useSSRContext, watchEffect, unref, watchPostEffect, resolveComponent, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createVNode, Fragment, renderList, resolveDynamicComponent, toRefs, onBeforeUnmount, onUnmounted, createSSRApp } from "vue";
import { usePreferredDark, useDark, useMediaQuery, useStorage, useWindowSize } from "@vueuse/core";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
import docsearch from "@docsearch/js";
import { Molang } from "molang";
const isVisible = ref(true);
function useSidebarVisibility() {
  onMounted(() => {
    const query = window.matchMedia("(max-width: 900px)");
    isVisible.value = !query.matches;
  });
  return isVisible;
}
function deserializeFunctions(r) {
  return Array.isArray(r) ? r.map(deserializeFunctions) : typeof r == "object" && r !== null ? Object.keys(r).reduce((t, n) => (t[n] = deserializeFunctions(r[n]), t), {}) : typeof r == "string" && r.startsWith("_vp-fn_") ? new Function(`return ${r.slice(7)}`)() : r;
}
const siteData = deserializeFunctions(JSON.parse('{"lang":"en-US","dir":"ltr","title":"Bedrock Wiki","description":"A knowledge-sharing website for technical features of Minecraft Bedrock.","base":"/","head":[],"router":{"prefetchLinks":true},"appearance":true,"themeConfig":{"longTitle":"The Bedrock Wiki","url":"https://wiki.bedrock.dev","repository":"https://github.com/Bedrock-OSS/bedrock-wiki","branch":"wiki","examples":{"repository":"https://github.com/Bedrock-OSS/bedrock-examples","branch":"main"},"algolia":{"appId":"N9ZHAYJQII","apiKey":"a664f5a5da631810a08e1a48554fe523","indexName":"wiki-bedrock","placeholder":"Search Bedrock Wiki…"},"navigation":[{"text":"Discord","link":"/discord"},{"text":"Contribute","link":"/contribute"},{"text":"bedrock.dev","link":"https://bedrock.dev"},{"text":"MS Learn","link":"https://learn.microsoft.com/minecraft/creator/"}]},"locales":{},"scrollOffset":134,"cleanUrls":true}'));
const __vite_import_meta_env__ = {};
const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const HASH_RE = /#.*$/;
const HASH_OR_QUERY_RE = /[?#].*$/;
const INDEX_OR_EXT_RE = /(?:(^|\/)index)?\.(?:md|html)$/;
const inBrowser = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "404.md",
  filePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0,
  isNotFound: true
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_OR_QUERY_RE, "").replace(INDEX_OR_EXT_RE, "$1");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function getLocaleForPath(siteData2, relativePath) {
  return Object.keys((siteData2 == null ? void 0 : siteData2.locales) || {}).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, true)) || "root";
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a, _b, _c, _d, _e, _f, _g;
  const localeIndex = getLocaleForPath(siteData2, relativePath);
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a = siteData2.locales[localeIndex]) == null ? void 0 : _a.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c = siteData2.locales[localeIndex]) == null ? void 0 : _c.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e = siteData2.locales[localeIndex]) == null ? void 0 : _e.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  if (title === templateString.slice(3)) {
    return title;
  }
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const KNOWN_EXTENSIONS = /* @__PURE__ */ new Set();
function treatAsHtml(filename) {
  var _a;
  if (KNOWN_EXTENSIONS.size === 0) {
    const extraExts = typeof process === "object" && ((_a = process.env) == null ? void 0 : _a.VITE_EXTRA_EXTENSIONS) || (__vite_import_meta_env__ == null ? void 0 : __vite_import_meta_env__.VITE_EXTRA_EXTENSIONS) || "";
    ("3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip" + (extraExts && typeof extraExts === "string" ? "," + extraExts : "")).split(",").forEach((ext2) => KNOWN_EXTENSIONS.add(ext2));
  }
  const ext = filename.split(".").pop();
  return ext == null || !KNOWN_EXTENSIONS.has(ext.toLowerCase());
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  const appearance = site.value.appearance;
  const isDark = appearance === "force-dark" ? ref(true) : appearance === "force-auto" ? usePreferredDark() : appearance ? useDark({
    storageKey: APPEARANCE_KEY,
    initialValue: () => appearance === "dark" ? "dark" : "auto",
    ...typeof appearance === "object" ? appearance : {}
  }) : ref(false);
  const hashRef = ref(inBrowser ? location.hash : "");
  if (inBrowser) {
    window.addEventListener("hashchange", () => {
      hashRef.value = location.hash;
    });
  }
  watch(() => route.data, () => {
    hashRef.value = inBrowser ? location.hash : "";
  });
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    params: computed(() => route.data.params),
    lang: computed(() => site.value.lang),
    dir: computed(() => route.data.frontmatter.dir || site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => createTitle(site.value, route.data)),
    description: computed(() => route.data.description || site.value.description),
    isDark,
    hash: computed(() => hashRef.value)
  };
}
function useData$1() {
  const data2 = inject(dataSymbol);
  if (!data2) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data2;
}
function joinPath(base, path) {
  return `${base}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || !path.startsWith("/") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser) {
      const base = "/";
      pagePath = sanitizeFileName(pagePath.slice(base.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      if (!pageHash)
        return null;
      pagePath = `${base}${"assets"}/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
let contentUpdatedCallbacks = [];
function getScrollOffset() {
  let scrollOffset = siteDataRef.value.scrollOffset;
  let offset = 0;
  let padding = 24;
  if (typeof scrollOffset === "object" && "padding" in scrollOffset) {
    padding = scrollOffset.padding;
    scrollOffset = scrollOffset.selector;
  }
  if (typeof scrollOffset === "number") {
    offset = scrollOffset;
  } else if (typeof scrollOffset === "string") {
    offset = tryOffsetSelector(scrollOffset, padding);
  } else if (Array.isArray(scrollOffset)) {
    for (const selector of scrollOffset) {
      const res = tryOffsetSelector(selector, padding);
      if (res) {
        offset = res;
        break;
      }
    }
  }
  return offset;
}
function tryOffsetSelector(selector, padding) {
  const el = document.querySelector(selector);
  if (!el)
    return 0;
  const bot = el.getBoundingClientRect().bottom;
  if (bot < 0)
    return 0;
  return bot + padding;
}
const RouterSymbol = Symbol();
const fakeHost = "http://a.com";
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser ? location.href : "/") {
    var _a, _b;
    href = normalizeHref(href);
    if (await ((_a = router.onBeforeRouteChange) == null ? void 0 : _a.call(router, href)) === false)
      return;
    if (inBrowser && href !== normalizeHref(location.href)) {
      history.replaceState({ scrollPosition: window.scrollY }, "");
      history.pushState({}, "", href);
    }
    await loadPage(href);
    await ((_b = router.onAfterRouteChange ?? router.onAfterRouteChanged) == null ? void 0 : _b(href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    var _a, _b;
    if (await ((_a = router.onBeforePageLoad) == null ? void 0 : _a.call(router, href)) === false)
      return;
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (!page) {
        throw new Error(`Page not found: ${pendingPath}`);
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        await ((_b = router.onAfterPageLoad) == null ? void 0 : _b.call(router, href));
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser) {
          nextTick(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState({}, "", href);
            }
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.getElementById(decodeURIComponent(targetLoc.hash).slice(1));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch|Page not found/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        const relativePath = inBrowser ? pendingPath.replace(/(^|\/)$/, "$1index").replace(/(\.html)?$/, ".md").replace(/^\//, "") : "404.md";
        route.data = { ...notFoundPageData, relativePath };
      }
    }
  }
  if (inBrowser) {
    if (history.state === null) {
      history.replaceState({}, "");
    }
    window.addEventListener("click", (e) => {
      if (e.defaultPrevented || !(e.target instanceof Element) || e.target.closest("button") || // temporary fix for docsearch action buttons
      e.button !== 0 || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)
        return;
      const link2 = e.target.closest("a");
      if (!link2 || link2.closest(".vp-raw") || link2.hasAttribute("download") || link2.hasAttribute("target"))
        return;
      const linkHref = link2.getAttribute("href") ?? (link2 instanceof SVGAElement ? link2.getAttribute("xlink:href") : null);
      if (linkHref == null)
        return;
      const { href, origin, pathname, hash, search } = new URL(linkHref, link2.baseURI);
      const currentUrl = new URL(location.href);
      if (origin === currentUrl.origin && treatAsHtml(pathname)) {
        e.preventDefault();
        if (pathname === currentUrl.pathname && search === currentUrl.search) {
          if (hash !== currentUrl.hash) {
            history.pushState({}, "", href);
            window.dispatchEvent(new HashChangeEvent("hashchange", {
              oldURL: currentUrl.href,
              newURL: href
            }));
          }
          if (hash) {
            scrollTo(link2, hash, link2.classList.contains("header-anchor"));
          } else {
            window.scrollTo(0, 0);
          }
        } else {
          go(href);
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", async (e) => {
      var _a;
      if (e.state === null)
        return;
      const href = normalizeHref(location.href);
      await loadPage(href, e.state && e.state.scrollPosition || 0);
      await ((_a = router.onAfterRouteChange ?? router.onAfterRouteChanged) == null ? void 0 : _a(href));
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.getElementById(decodeURIComponent(hash).slice(1));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let scrollToTarget = function() {
      if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight)
        window.scrollTo(0, targetTop);
      else
        window.scrollTo({ left: 0, top: targetTop, behavior: "smooth" });
    };
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - getScrollOffset() + targetPadding;
    requestAnimationFrame(scrollToTarget);
  }
}
function normalizeHref(href) {
  const url = new URL(href, fakeHost);
  url.pathname = url.pathname.replace(/(^|\/)index(\.html)?$/, "$1");
  if (siteDataRef.value.cleanUrls)
    url.pathname = url.pathname.replace(/\.html$/, "");
  else if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html"))
    url.pathname += ".html";
  return url.pathname + url.search + url.hash;
}
const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn());
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    as: { type: [Object, String], default: "div" }
  },
  setup(props) {
    const route = useRoute();
    const { frontmatter, site } = useData$1();
    watch(frontmatter, runCbs, { deep: true, flush: "post" });
    return () => h(props.as, site.value.contentProps ?? { style: { position: "relative" } }, [
      route.component ? h(route.component, {
        onVnodeMounted: runCbs,
        onVnodeUpdated: runCbs,
        onVnodeUnmounted: runCbs
      }) : "404 Page Not Found"
    ]);
  }
});
function useFilePageRouter() {
  const router = useRouter();
  onMounted(() => {
    window.addEventListener(
      "click",
      (e) => {
        if (e.defaultPrevented || !(e.target instanceof Element) || e.target.closest("button") || // temporary fix for docsearch action buttons
        e.button !== 0 || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
          return;
        }
        const link2 = e.target.closest("a");
        if (!link2 || link2.download || link2.target) return;
        const { href, origin, pathname } = new URL(link2.href, link2.baseURI);
        if (origin === location.origin && isFilePageLink(pathname)) {
          e.preventDefault();
          router.go(href);
        }
      },
      { capture: true }
    );
  });
}
function isFilePageLink(pathname) {
  return /^\/.+(\/.+)?\/files\//i.test(pathname);
}
function useData() {
  return useData$1();
}
function useFilePage() {
  const { params } = useData();
  return computed(() => {
    var _a;
    return ((_a = params.value) == null ? void 0 : _a.file) ? params.value : void 0;
  });
}
function useIsMobile() {
  return useMediaQuery("(max-width: 900px)");
}
const data$4 = JSON.parse('{"/blocks/block-materials":"/blocks/block-components#render-methods","/blocks/blocks-16":"/blocks/blocks-intro","/blocks/blocks-stable":"/blocks/blocks-intro","/blocks/block-tags#list-of-vanilla-tags":"/blocks/vanilla-block-tags","/blocks/custom-trapdoor":"/blocks/custom-trapdoors","/blocks/precise-rotation":"/blocks/intercardinal-orientation","/blocks/rotatable-blocks":"/blocks/block-orientation","/commands/item-drop-detection":"/commands/detect-item-drop","/commands/look-detection":"/commands/detect-looking","/commands/movement-detections":"/commands/detect-movements","/commands/nbt-commands":"/commands/giving-nbt-items","/commands/tellraw":"/text/rawtext","/concepts/animation-controllers":"/animation-controllers/animation-controllers-intro","/concepts/biomes":"/world-generation/biomes","/concepts/blocks":"/blocks/blocks-intro","/concepts/components-events-groups":"/entities/entity-intro-bp","/concepts/emojis":"/text/emojis","/concepts/entity-properties":"/entities/entity-properties","/concepts/items":"/items/item-components","/concepts/json-ui":"/json-ui/json-ui-intro","/concepts/math-based-animations":"/visuals/math-based-animations","/concepts/mcfunction":"/commands/mcfunction","/concepts/rawtext":"/text/rawtext","/concepts/render-controller":"/visuals/render-controller","/concepts/text-and-translations":"/text/text-intro","/concepts/texture-list":"/concepts/textures-list","/documentation/biome-tags":"/world-generation/biome-tags","/documentation/block-model-materials":"/blocks/block-components#render-methods","/documentation/block-shapes":"/blocks/block-shapes","/documentation/block-tags":"/blocks/block-tags","/documentation/creative-categories":"/items/item-catalog","/documentation/dummy-components":"/entities/dummy-components","/documentation/emojis":"/text/emojis","/documentation/item-groups":"/items/item-groups","/documentation/json-ui":"/json-ui/json-ui-documentation","/documentation/menu-categories":"/items/item-catalog","/documentation/projectiles":"/entities/projectiles","/documentation/runtime-identifier":"/entities/runtime-identifier","/documentation/subpacks":"/concepts/subpacks","/documentation/tellraw":"/text/rawtext","/entities/entities-intro":"/entities/entity-intro-bp","/entities/entity-holds-item":"/entities/holding-items","/entities/entity-transforms":"/entities/coordinate-space-conversion","/entities/introduction-to-aec":"/entities/area-effect-clouds","/entities/npc-dialogs":"/entities/npc-dialogue","/items/3d-items":"/items/attachables","/items/custom-pottery-sherd":"/items/custom-pottery-sherds","/items/custom-weapon":"/items/custom-weapons","/items/item-groups":"/items/vanilla-item-groups","/items/item-tags#list-of-vanilla-tags":"/items/vanilla-item-tags","/json-ui/custom-buttons":"/json-ui/buttons-and-toggles","/knowledge/addon-performance":"/meta/addon-performance","/knowledge/addon-programming":"/meta/addon-programming","/knowledge/bedrock-modeling":"/visuals/bedrock-modeling","/knowledge/entity-movement":"/entities/entity-movement","/knowledge/nbt_commands":"/commands/giving-nbt-items","/knowledge/style-guide":"/meta/style-guide","/knowledge/useful-links":"/meta/useful-links","/knowledge/using-schemas":"/meta/using-schemas","/knowledge/version-control":"/meta/version-control","/nbt/experimental-education-edition":"/nbt/enabling-experiments","/scripting/custom-command":"/scripting/custom-commands","/scripting/gametest-form":"/scripting/server-forms","/scripting/gametest-qna":"/meta/gametest-qna","/scripting/scripting-editor-qna":"/meta/scripting-editor-qna","/scripting/starting-scripts":"/scripting/scripting-intro","/troubleshooting/entities":"/entities/troubleshooting-entities","/troubleshooting/items":"/items/troubleshooting-items","/tutorials/beginner-commands":"/commands/commands-intro","/tutorials/block-texture-variation":"/blocks/block-texture-variation","/tutorials/boat-entities":"/entities/boat-entities","/tutorials/cancelling-death-animation":"/entities/cancelling-death-animation","/tutorials/controlling-flying-entities":"/entities/flying-entities","/tutorials/craftable-spawneggs":"/loot/craftable-spawneggs","/tutorials/custom-armor":"/entities/custom-armor","/tutorials/disabling-particles":"/visuals/disabling-particles","/tutorials/disabling-team-damage":"/entities/disabling-team-damage","/tutorials/egg-drops":"/loot/egg-drops","/tutorials/entity-commands":"/commands/animation-controllers","/tutorials/entity-events":"/entities/entity-events","/tutorials/entity-holds-item":"/entities/holding-items","/tutorials/fake_blocks":"/blocks/fake-blocks","/tutorials/invulnerable-entities":"/entities/invulnerable-entities","/tutorials/item-models":"/items/attachables","/tutorials/npc-dialogs":"/entities/npc-dialogue","/tutorials/pathfinding-entities":"/entities/pathfinding-entities","/tutorials/player-geometry":"/visuals/player-geometry","/tutorials/remove-shadows":"/visuals/remove-shadows","/tutorials/respawn-commands":"/commands/respawn-commands","/tutorials/retexturing-spawn-eggs":"/visuals/retexturing-spawn-eggs","/tutorials/solid-entities":"/entities/solid-entities","/tutorials/spawning-items":"/items/spawning-items","/tutorials/text-localization":"/text/text-intro","/tutorials/timers":"/entities/timers","/vanilla-usage/items":"/items/vanilla-usage-items","/vanilla-usage/components":"/entities/vanilla-usage-components","/vanilla-usage/spawn-rules":"/entities/vanilla-usage-spawn-rules","/visuals/deferred-qna":"/meta/deferred-qna","/visuals/entity-visuals-intro":"/entities/render-controllers","/visuals/render-controllers":"/entities/render-controllers","/visuals/custom-skin-packs":"/visuals/skin-packs","/world-generation/custom-ores":"/loot/generating-custom-ores","/world-generation/randomized-structure-loot":"/loot/randomized-structure-loot"}');
function useRedirect() {
  const router = useRouter();
  function redirect() {
    let from = router.route.path.replace(".html", "");
    let to = data$4[from];
    if (to === void 0) {
      from += window.location.hash;
      to = data$4[from];
    }
    if (to) router.go(to);
  }
  onBeforeMount(redirect);
  router.onAfterRouteChange = redirect;
}
const _imports_0 = "/favicon.ico";
const _sfc_main$I = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "icon",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path></svg>`);
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/icons/MenuIcon.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const MenuIcon = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$H = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "icon",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M21,15.61L19.59,17L14.58,12L19.59,7L21,8.39L17.44,12L21,15.61M3,6H16V8H3V6M3,13V11H13V13H3M3,18V16H16V18H3Z"></path></svg>`);
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/icons/MenuOpenIcon.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const MenuOpenIcon = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$G = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.3em",
    height: "1.3em",
    style: { "vertical-align": "-0.2lh" },
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, _attrs))}><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/icons/ExternalIcon.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const ExternalIcon = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$7]]);
function useNavLink(item) {
  const route = useRoute();
  const isExternal2 = computed(() => isExternalCheck(item.link));
  const props = computed(() => {
    const routePath = normalizePath(`/${route.data.relativePath}`);
    let active;
    if (item.activeMatch) {
      active = new RegExp(item.activeMatch).test(routePath);
    } else {
      const itemPath = normalizePath(item.link);
      active = itemPath === "/" ? itemPath === routePath : routePath.startsWith(itemPath);
    }
    return {
      class: {
        active,
        isExternal: isExternal2.value
      },
      href: isExternal2.value ? item.link : withBase(item.link),
      target: isExternal2.value ? "_blank" : void 0
    };
  });
  return {
    props,
    isExternal: isExternal2
  };
}
function normalizePath(path) {
  return path.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\.(html|md)$/, "").replace(/\/index$/, "/");
}
const outboundRE = /^[a-z]+:/i;
function isExternalCheck(path) {
  return outboundRE.test(path);
}
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    class: {},
    link: {},
    activeMatch: {}
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { props: linkProps, isExternal: isExternal2 } = useNavLink(props);
    useIsMobile();
    useSidebarVisibility();
    watchEffect(() => {
      emit("change", linkProps.value.class.active);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: props.class
      }, unref(linkProps), _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (unref(isExternal2)) {
        _push(ssrRenderComponent(ExternalIcon, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
    };
  }
});
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/navigation/NavLink.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const _sfc_main$E = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/icons/ChevronRightIcon.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const ChevronRightIcon = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$D = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/icons/DesktopMacIcon.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const DesktopMacIcon = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$C = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/icons/LightThemeIcon.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const LightThemeIcon = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$B = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/icons/DarkThemeIcon.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const DarkThemeIcon = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "AppearanceDropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDark } = useData();
    const theme = useStorage("vitepress-theme-appearance", "auto");
    const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
    watchPostEffect(() => {
      isDark.value = theme.value === "auto" ? prefersDark.value : theme.value === "dark";
    });
    const ThemeIcon = computed(() => {
      switch (theme.value) {
        case "dark":
          return DarkThemeIcon;
        case "light":
          return LightThemeIcon;
        default:
          return DesktopMacIcon;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "appearance-control" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(ThemeIcon), null, null, _parent));
      _push(`<select name="theme" title="Change Theme"><option value="auto"${ssrIncludeBooleanAttr(Array.isArray(unref(theme)) ? ssrLooseContain(unref(theme), "auto") : ssrLooseEqual(unref(theme), "auto")) ? " selected" : ""}>System</option><option value="dark"${ssrIncludeBooleanAttr(Array.isArray(unref(theme)) ? ssrLooseContain(unref(theme), "dark") : ssrLooseEqual(unref(theme), "dark")) ? " selected" : ""}>Dark</option><option value="light"${ssrIncludeBooleanAttr(Array.isArray(unref(theme)) ? ssrLooseContain(unref(theme), "light") : ssrLooseEqual(unref(theme), "light")) ? " selected" : ""}>Light</option></select>`);
      _push(ssrRenderComponent(ChevronRightIcon, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/navigation/AppearanceDropdown.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "AlgoliaSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme } = useData();
    const options = theme.value.algolia;
    const route = useRoute();
    const router = useRouter();
    watch(
      () => options,
      (value) => {
        initialize(value);
      }
    );
    onMounted(() => {
      initialize(options);
    });
    const docsearchProps = {
      container: "#docsearch",
      maxResultsPerGroup: 20,
      navigator: {
        navigate: ({ itemUrl }) => {
          const url = new URL(window.location.origin + itemUrl);
          if (route.path === url.pathname) {
            window.location.assign(url);
          } else {
            router.go(itemUrl);
          }
        }
      },
      transformItems: (items) => {
        const transformedItems = [];
        for (const item of items) {
          const url = new URL(item.url);
          if (url.pathname.endsWith(".html")) continue;
          if (url.hash === "#app") url.hash = "";
          const transformedItem = {
            ...item,
            url: url.pathname + url.hash
          };
          transformedItems.push(transformedItem);
        }
        return transformedItems;
      }
    };
    function initialize(userOptions) {
      docsearch({ ...userOptions, ...docsearchProps });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "docsearch" }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/navigation/AlgoliaSearch.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme } = useData();
    const isAppearanceDropdownVisible = useMediaQuery("(min-width: 330px)");
    const isShortTitle = useMediaQuery("(max-width: 400px)");
    const isSidebarVisible = useSidebarVisibility();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}><button type="button" class="header__menu-button" aria-label="Toggle Sidebar Visibility">`);
      if (unref(isSidebarVisible)) {
        _push(ssrRenderComponent(MenuOpenIcon, null, null, _parent));
      } else {
        _push(ssrRenderComponent(MenuIcon, null, null, _parent));
      }
      _push(`</button><a class="header__title" href="/"><img${ssrRenderAttr("src", _imports_0)} alt=""><span>${ssrInterpolate(unref(isShortTitle) ? "Wiki" : unref(site).title)}</span></a><div class="header__content"><ul class="header__links"><!--[-->`);
      ssrRenderList(unref(theme).navigation, (item, i) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_sfc_main$F, {
          link: item.link,
          "active-match": item.activeMatch
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(isAppearanceDropdownVisible)) {
              _push2(ssrRenderComponent(_sfc_main$A, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$z, null, null, _parent2, _scopeId));
          } else {
            return [
              unref(isAppearanceDropdownVisible) ? (openBlock(), createBlock(_sfc_main$A, { key: 0 })) : createCommentVNode("", true),
              createVNode(_sfc_main$z)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/navigation/Header.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const data$3 = JSON.parse(`{"links":[],"sections":[{"id":"guide","title":"Beginner's Guide","order":1,"links":[],"categories":[{"title":"Guide","color":"green","links":[{"prefix":"1. ","title":"はじめに","order":1,"link":"/guide/introduction","tags":["guide"]},{"prefix":"2. ","title":"アドオンの解説","order":2,"link":"/guide/addons"},{"prefix":"3. ","title":"ソフトウェアと準備","order":3,"link":"/guide/software-preparation"},{"prefix":"4. ","title":"プロジェクトのセットアップ","order":4,"link":"/guide/project-setup"},{"prefix":"5. ","title":"カスタムアイテムの作成","order":5,"link":"/guide/custom-item"},{"prefix":"6. ","title":"Create a Custom Entity","order":6,"link":"/guide/custom-entity"},{"prefix":"7. ","title":"Blockbench: モデリング、テクスチャ作成、アニメーション","order":7,"link":"/guide/blockbench"},{"prefix":"8. ","title":"ルートテーブル、スポーンルール、クラフトレシピの追加","order":8,"link":"/guide/loot-table"}]},{"title":"Extra","color":"blue","links":[{"prefix":"a. ","title":"JSON の理解","order":1,"link":"/guide/understanding-json"},{"prefix":"b. ","title":"サンプルパックのダウンロード","order":2,"link":"/guide/download-packs"},{"prefix":"c. ","title":"トラブルシューティング","order":3,"link":"/guide/troubleshooting","tags":["help"]},{"prefix":"d. ","title":"高度なマニフェスト","order":4,"link":"/guide/advancedmanifest"},{"prefix":"e. ","title":"フォーマットバージョン","order":5,"link":"/guide/format-version"},{"prefix":"f. ","title":"Project Setup Android","order":6,"link":"/guide/project-setup-android"}]}]},{"id":"animation-controllers","title":"Animation Controllers","links":[{"title":"アニメーションコントローラー入門","order":1,"link":"/animation-controllers/animation-controllers-intro","tags":["guide"]},{"title":"Entity Commands","order":2,"link":"/animation-controllers/entity-commands","tags":["intermediate"]},{"title":"AFK検出器","link":"/animation-controllers/afk-animation-controller"},{"title":"Death Commands","link":"/animation-controllers/death-commands"},{"title":"Molangをスコアボードへ","link":"/animation-controllers/molang-into-scoreboard"},{"title":"リスポーン時コマンド","link":"/animation-controllers/respawn-commands"}],"categories":[]},{"id":"blocks","title":"Blocks","links":[],"categories":[{"title":"General","color":"blue","links":[{"title":"ブロック入門","order":1,"link":"/blocks/blocks-intro","tags":["guide","beginner"]},{"title":"Block Components","order":2,"link":"/blocks/block-components"},{"title":"ブロックタグ","order":3,"link":"/blocks/block-tags"},{"title":"ブロックの状態","order":4,"link":"/blocks/block-states"},{"title":"ブロックの trait","order":5,"link":"/blocks/block-traits"},{"title":"ブロックのパーミュテーション","order":7,"link":"/blocks/block-permutations"},{"title":"Block Events","order":8,"link":"/blocks/block-events","tags":["scripting"]},{"title":"Block Event Migration","order":9,"link":"/blocks/block-event-migration","tags":["help"]},{"title":"ブロックのトラブルシューティング","link":"/blocks/troubleshooting-blocks","tags":["help"]},{"title":"ブロックをアイテムとして扱う","link":"/blocks/blocks-as-items","tags":["intermediate"]}]},{"title":"Visuals","color":"purple","links":[{"title":"Block Models","link":"/blocks/block-models","tags":["guide","beginner","easy"]},{"title":"ブロックのカリング","link":"/blocks/block-culling","tags":["intermediate"]},{"title":"ブロックのテクスチャアニメーション","link":"/blocks/flipbook-textures","tags":["intermediate"]},{"title":"ブロックのテクスチャ変種","link":"/blocks/block-texture-variation","tags":["intermediate"]},{"title":"ブロックの着色","link":"/blocks/block-tinting","tags":["easy"]}]},{"title":"Tutorials","color":"green","links":[{"title":"Block Orientation","link":"/blocks/block-orientation","tags":["easy"]},{"title":"Fake Blocks","link":"/blocks/fake-blocks","tags":["intermediate","scripting"]},{"title":"Intercardinal Orientation","link":"/blocks/intercardinal-orientation","tags":["intermediate","scripting"]},{"title":"Tool-Based Destruction","link":"/blocks/tool-based-destruction","tags":["intermediate"]},{"title":"効果の適用","link":"/blocks/applying-effects","tags":["easy","scripting"]},{"title":"鉱石のルートテーブル","link":"/blocks/ore-loot-tables","tags":["easy","scripting"]},{"title":"状態数の上限を避ける","link":"/blocks/avoiding-state-limit","tags":["expert"]}]},{"title":"Vanilla Re-Creations","color":"orange","links":[{"title":"Custom Crops","link":"/blocks/custom-crops","tags":["intermediate","scripting"]},{"title":"Custom Glazed Terracotta","link":"/blocks/custom-glazed-terracotta","tags":["beginner","easy"]},{"title":"Custom Heads","link":"/blocks/custom-heads","tags":["expert","scripting"]},{"title":"Custom Trapdoors","link":"/blocks/custom-trapdoors","tags":["intermediate","scripting"]},{"title":"カスタムガラス","link":"/blocks/custom-glass-blocks","tags":["beginner","easy"]}]},{"title":"Documentation","color":"red","links":[{"title":"Block Format History","link":"/blocks/block-format-history"},{"title":"Block Shapes","link":"/blocks/block-shapes","tags":["deprecated"]},{"title":"Block Sounds","link":"/blocks/block-sounds"},{"title":"バニラのブロックタグ","link":"/blocks/vanilla-block-tags"},{"title":"バニラのブロックモデル","link":"/blocks/vanilla-block-models","tags":["beginner"]},{"title":"バニラのボクセル形状","link":"/blocks/vanilla-voxel-shapes","tags":["experimental"]},{"title":"レッドストーンコンポーネント","link":"/blocks/redstone-components","tags":["intermediate"]}]}]},{"id":"commands","title":"Commands","links":[],"categories":[{"title":"General","color":"green","links":[{"title":"Intro to Command Blocks","order":1,"link":"/commands/intro-to-command-blocks","tags":["easy"]},{"title":"セレクターの理解","order":2,"link":"/commands/selectors"},{"title":"Functions","order":3,"link":"/commands/mcfunctions","tags":["guide"]},{"title":"Giving NBT Items","link":"/commands/giving-nbt-items"},{"title":"スコアボードの操作","link":"/commands/scoreboard-operations","tags":["easy"]},{"title":"ブロックステート","link":"/commands/block-states","tags":["easy"]},{"title":"座標系","link":"/commands/relative-coordinates"}]},{"title":"Commands","color":"green","links":[{"title":"Damage","link":"/commands/damage","tags":["easy"]},{"title":"Execute","link":"/commands/new-execute","tags":["easy"]},{"title":"Playanimation","link":"/commands/playanimation"},{"title":"Playsound","link":"/commands/playsound","tags":["easy"]}]},{"title":"On Event Systems","color":"blue","links":[{"title":"ワールドの初回読み込み時","order":0,"link":"/commands/on-first-world-load","tags":["function"]},{"title":"プレイヤーの初回参加時","order":1,"link":"/commands/on-first-join","tags":["easy"]},{"title":"プレイヤー参加時","order":2,"link":"/commands/on-player-join","tags":["easy"]},{"title":"プレイヤー退出時","order":3,"link":"/commands/on-player-leave","tags":["easy"]},{"title":"プレイヤー死亡時","order":4,"link":"/commands/on-player-death","tags":["easy"]},{"title":"プレイヤーリスポーン時","order":5,"link":"/commands/on-player-respawn","tags":["easy"]}]},{"title":"Scoreboard Systems","color":"blue","links":[{"title":"エンティティカウンター","order":3,"link":"/commands/entity-counter","tags":["easy"]},{"title":"スコアボードタイマー","order":5,"link":"/commands/scoreboard-timers"},{"title":"Comparing And Retrieving Scores","link":"/commands/comparing-scores"}]},{"title":"Detection Systems","color":"blue","links":[{"title":"Look Detection","order":6,"link":"/commands/detect-looking","tags":["intermediate"]},{"title":"Movement Detections","link":"/commands/detect-movements"},{"title":"アイテムドロップの検出","link":"/commands/detect-item-drop","tags":["easy"]},{"title":"雨の検出","link":"/commands/detect-rain","tags":["easy"]}]},{"title":"Techniques","color":"orange","links":[{"title":"execute での論理ゲート","order":1,"link":"/commands/logic-gates","tags":["concept"]},{"title":"ブロックバリアント上で実行","order":2,"link":"/commands/execute-at-block"},{"title":"実行フォーキング","order":3,"link":"/commands/execution-forking","tags":["concept"]},{"title":"MBE - Max's Block Entity","order":4,"link":"/commands/block-entities"},{"title":"コマンドにおける二進数","order":4,"link":"/commands/binary-logic","tags":["concept"]},{"title":"FMBE - 表示エンティティを作る新しい方法","order":5,"link":"/commands/display-entities","tags":["intermediate"]},{"title":"動的表示","order":9,"link":"/commands/dynamic-displays","tags":["intermediate"]},{"title":"軌道カメラ","link":"/commands/orbital-camera"}]},{"title":"Useful Creations","color":"yellow","links":[{"title":"Sphere Command","order":6,"link":"/commands/sphere-command","tags":["intermediate"]},{"title":"カスタムクラフト","link":"/commands/custom-crafting","tags":["easy"]},{"title":"コンパス表示","link":"/commands/compass-display","tags":["easy"]},{"title":"マルチプレイヤー位置入れ替え","link":"/commands/rearrange-positions","tags":["function"]}]}]},{"id":"concepts","title":"Concepts","links":[{"title":"contents.json","link":"/concepts/contents"},{"title":"Molang","link":"/concepts/molang","tags":["intermediate"]},{"title":"Shaders","link":"/concepts/shaders"},{"title":"Texture Atlases","link":"/concepts/texture-atlases","tags":["intermediate"]},{"title":"textures_list.json","link":"/concepts/textures-list"},{"title":"アセットの上書き","link":"/concepts/overwriting-assets","tags":["intermediate"]},{"title":"サウンド","link":"/concepts/sounds","tags":["intermediate"]},{"title":"サブパック","link":"/concepts/subpacks"},{"title":"名前空間","link":"/concepts/namespaces"}],"categories":[]},{"id":"documentation","title":"Documentation","links":[{"title":"Fog ID","link":"/documentation/fog-ids"},{"title":"Molang クエリ","link":"/documentation/queries"},{"title":"Shared Constructs","link":"/documentation/shared-constructs"},{"title":"Sound Definitions","link":"/documentation/sound-definitions"},{"title":"パックのフォルダー構成","link":"/documentation/pack-structure"},{"title":"バニラ Material","link":"/documentation/materials","tags":["expert"]},{"title":"ファイル形式","link":"/documentation/file-types"},{"title":"マテリアル設定の説明","link":"/documentation/material-config-description","tags":["expert"]},{"title":"高度な Molang","link":"/documentation/advanced-molang"}],"categories":[]},{"id":"entities","title":"Entities","links":[],"categories":[{"title":"General","color":"blue","links":[{"title":"Intro to Entities BP","order":1,"link":"/entities/entity-intro-bp","tags":["guide","beginner"]},{"title":"Intro to Entities RP","order":2,"link":"/entities/entity-intro-rp","tags":["guide","beginner"]},{"title":"Troubleshooting Entities","order":3,"link":"/entities/troubleshooting-entities","tags":["help"]},{"title":"Entity Events","link":"/entities/entity-events","tags":["beginner"]},{"title":"Entity Properties","link":"/entities/entity-properties"},{"title":"NPC Dialogue","link":"/entities/npc-dialogue","tags":["intermediate"]},{"title":"Render Controllers","link":"/entities/render-controllers","tags":["beginner"]},{"title":"Spawn Rules","link":"/entities/spawn-rules"}]},{"title":"Tutorials","color":"green","links":[{"title":"Area Effect Clouds","link":"/entities/area-effect-clouds","tags":["intermediate"]},{"title":"Coordinate Space Conversion","link":"/entities/coordinate-space-conversion","tags":["intermediate"]},{"title":"Creating Boats","link":"/entities/boat-entities","tags":["intermediate"]},{"title":"Detecting Other Entities","link":"/entities/detecting-other-entities","tags":["intermediate"]},{"title":"Disabling Team Damage","link":"/entities/disabling-team-damage","tags":["intermediate"]},{"title":"Dummy Entities","link":"/entities/dummy-entities","tags":["beginner"]},{"title":"Entity Attacks","link":"/entities/entity-attack","tags":["intermediate"]},{"title":"Entity Movement","link":"/entities/entity-movement"},{"title":"Entity Timers","link":"/entities/timers","tags":["intermediate"]},{"title":"Holding Items","link":"/entities/holding-items","tags":["intermediate"]},{"title":"Invulnerable Entities","link":"/entities/invulnerable-entities","tags":["beginner"]},{"title":"Look at Entity","link":"/entities/look-at-entity","tags":["intermediate"]},{"title":"Riding Flying Entities","link":"/entities/flying-entities","tags":["intermediate"]},{"title":"Sleeping Entities","link":"/entities/sleeping-entities","tags":["intermediate"]},{"title":"Solid Entities","link":"/entities/solid-entities","tags":["intermediate"]},{"title":"Spawning Tamed Entities","link":"/entities/spawning-tamed-entities","tags":["scripting","intermediate"]},{"title":"Village Mechanic","link":"/entities/village-mechanic"}]},{"title":"Documentation","color":"red","links":[{"title":"Dummy Components","link":"/entities/dummy-components"},{"title":"Non-Mob Runtime Identifiers","link":"/entities/non-mob-runtime-identifiers"},{"title":"Projectiles","link":"/entities/projectiles"},{"title":"Runtime Identifiers","link":"/entities/runtime-identifier"},{"title":"Vanilla Usage Components","link":"/entities/vanilla-usage-components"},{"title":"Vanilla Usage Spawn Rules","link":"/entities/vanilla-usage-spawn-rules"}]}]},{"id":"items","title":"Items","links":[],"categories":[{"title":"General","color":"blue","links":[{"title":"アイテム入門","order":1,"link":"/items/items-intro","tags":["guide","beginner"]},{"title":"Item Components","order":2,"link":"/items/item-components"},{"title":"アイテムタグ","order":3,"link":"/items/item-tags"},{"title":"アイテムイベント","order":4,"link":"/items/item-events","tags":["scripting"]},{"title":"アイテムイベントの移行","order":5,"link":"/items/item-event-migration","tags":["help"]},{"title":"アイテムカタログ","link":"/items/item-catalog"},{"title":"アイテムのトラブルシューティング","link":"/items/troubleshooting-items","tags":["help"]}]},{"title":"Tutorials","color":"green","links":[{"title":"アイテムのスポーン","link":"/items/spawning-items","tags":["intermediate"]},{"title":"カスタムアーマー","link":"/items/custom-armor"},{"title":"カスタムフード","link":"/items/custom-food","tags":["easy","scripting"]},{"title":"カスタム陶片","link":"/items/custom-pottery-sherds","tags":["easy"]},{"title":"カスタム武器","link":"/items/custom-weapons","tags":["easy"]},{"title":"装備ベースのコマンド","link":"/items/equipped-item-commands","tags":["intermediate"]},{"title":"投げられるアイテム","link":"/items/throwable","tags":["intermediate"]}]},{"title":"Documentation","color":"red","links":[{"title":"エンチャント","order":5,"link":"/items/enchantments"},{"title":"Attachables","link":"/items/attachables","tags":["beginner"]},{"title":"Numerical Item IDs","link":"/items/numerical-item-ids"},{"title":"アイテム形式の履歴","link":"/items/item-format-history"},{"title":"バニラのアイテムグループ","link":"/items/vanilla-item-groups"},{"title":"バニラのアイテムタグ","link":"/items/vanilla-item-tags"},{"title":"バニラの使用コンポーネント","link":"/items/vanilla-usage-items"}]}]},{"id":"json-ui","title":"JSON UI","links":[],"categories":[{"title":"General","color":"blue","links":[{"title":"JSON UI の概要","order":1,"link":"/json-ui/json-ui-intro","tags":["guide"]},{"title":"ベストプラクティス","order":2,"link":"/json-ui/best-practices","tags":["guide"]}]},{"title":"Tutorials","color":"green","links":[{"title":"Aseprite アニメーション","link":"/json-ui/aseprite-animations"},{"title":"HUD 要素の追加","link":"/json-ui/add-hud-elements","tags":["beginner"]},{"title":"サーバーフォームの変更","link":"/json-ui/modifying-server-forms","tags":["intermediate"]},{"title":"タイトルテキストの保持","link":"/json-ui/preserve-title-texts","tags":["intermediate"]},{"title":"ボタンとトグル","link":"/json-ui/buttons-and-toggles","tags":["beginner"]},{"title":"文字列から数値へ","link":"/json-ui/string-to-number","tags":["intermediate"]}]},{"title":"Documentation","color":"red","links":[{"title":"JSON UIドキュメント","order":1,"link":"/json-ui/json-ui-documentation"}]}]},{"id":"loot","title":"Loot, Recipes & Trading","links":[],"categories":[{"title":"General","color":"blue","links":[{"title":"取引の動作","order":2,"link":"/loot/trading-behavior"}]},{"title":"Documentation","color":"red","links":[{"title":"ルートテーブル","order":1,"link":"/loot/loot-tables"},{"title":"Trade Tables","order":2,"link":"/loot/trade-tables"},{"title":"レシピ","order":3,"link":"/loot/recipes"},{"title":"アイテム関数","order":4,"link":"/loot/item-functions"}]},{"title":"Tutorials","color":"green","links":[{"title":"ランダム化された構造物のルート","link":"/loot/randomized-structure-loot","tags":["easy"]}]}]},{"id":"meta","title":"Meta","links":[{"title":"アドオンのパフォーマンス","link":"/meta/addon-performance"},{"title":"スキーマの使い方","link":"/meta/using-schemas"},{"title":"スタイルガイド","link":"/meta/style-guide"},{"title":"バージョン管理","link":"/meta/version-control"},{"title":"便利なリンク","link":"/meta/useful-links"}],"categories":[{"title":"Q&A","color":"green","links":[{"title":"Blocks and Items Q&A 2024/08/30","link":"/meta/blocks-items-qna"},{"title":"Deferred Technical Preview Q&A 2024/02/23","link":"/meta/deferred-qna"},{"title":"GameTest Q&A 2021/08/06","link":"/meta/gametest-qna"},{"title":"Scripting and Editor Q&A 2023/09/22","link":"/meta/scripting-editor-qna"},{"title":"World Generation Q&A 2024/11/15","link":"/meta/world-gen-qna"}]}]},{"id":"nbt","title":"NBT","links":[],"categories":[{"title":"General","color":"blue","links":[{"title":".mcstructure","link":"/nbt/mcstructure"}]},{"title":"Tutorials","color":"green","links":[{"title":"NBTを編集して実験機能を有効にする","link":"/nbt/enabling-experiments","tags":["intermediate"]},{"title":"構造物サイズ上限の拡張","link":"/nbt/structure-limits","tags":["easy"]}]},{"title":"NBT in Depth","color":"red","links":[{"title":"About NBT (Named Binary Tag)","link":"/nbt/nbt-in-depth","tags":["expert"]},{"title":"NBT Libraries","link":"/nbt/libraries","tags":["expert"]},{"title":"NBT 読み取りの例","link":"/nbt/step-by-step-example","tags":["expert"]}]}]},{"id":"particles","title":"Particles","links":[],"categories":[{"title":"General","color":"blue","links":[{"title":"パーティクル入門","link":"/particles/particles","tags":["guide"]}]},{"title":"Tutorials","color":"green","links":[{"title":"パーティクルを無効化する","link":"/particles/disabling-particles","tags":["beginner"]}]},{"title":"Documentation","color":"red","links":[{"title":"Vanilla Particles","link":"/particles/vanilla-particles"}]}]},{"id":"scripting","title":"Scripting","links":[],"categories":[{"title":"General","color":"blue","links":[{"title":"スクリプト入門","order":1,"link":"/scripting/scripting-intro"},{"title":"Script API とは？","order":2,"link":"/scripting/what-is-script"},{"title":"API モジュール","order":3,"link":"/scripting/api-modules"}]},{"title":"Tutorials","color":"green","links":[{"title":"GameTest","link":"/scripting/game-tests","tags":["experimental"]},{"title":"Script Request API","link":"/scripting/script-net","tags":["experimental"]},{"title":"Script のコア機能","link":"/scripting/script-server"},{"title":"Script の権限","link":"/scripting/privileges","tags":["beginner"]},{"title":"カスタムコマンド","link":"/scripting/custom-commands"},{"title":"サーバー向けフォーム","link":"/scripting/server-forms"},{"title":"ブロック配置の防止","link":"/scripting/placement-prevention","tags":["experimental"]}]},{"title":"Documentation","color":"red","links":[{"title":"JavaScript のトラブルシューティング","link":"/scripting/troubleshooting"},{"title":"Script Resources","link":"/scripting/resources"},{"title":"Script Watchdog","link":"/scripting/script-watchdog","tags":["experimental"]},{"title":"TypeScript","link":"/scripting/typescript"},{"title":"エンジン環境","link":"/scripting/api-environment"}]}]},{"id":"servers","title":"Servers","links":[],"categories":[{"title":"Software","color":"red","links":[{"title":"Bedrock サーバーソフトウェア","link":"/servers/server-software"},{"title":"Bedrock のサーバーソフトウェア","link":"/servers/bedrock"}]},{"title":"Protocols","color":"green","links":[{"title":"NetherNet プロトコル","link":"/servers/nethernet"},{"title":"RakNet プロトコル","link":"/servers/raknet"}]}]},{"id":"text","title":"Text & Localization","links":[],"categories":[{"title":"General","color":"blue","links":[{"title":"テキストとローカライズの入門","order":1,"link":"/text/text-intro"},{"title":"Raw Text","link":"/text/rawtext"},{"title":"スプラッシュテキスト","link":"/text/splashes"}]},{"title":"Emojis & Symbols","color":"green","links":[{"title":"Fonts","order":1,"link":"/text/fonts"},{"title":"絵文字の入門","order":2,"link":"/text/emojis"},{"title":"カスタム絵文字","link":"/text/custom-emojis"},{"title":"入力キー","link":"/text/input-keys"}]}]},{"id":"visuals","title":"Visuals","links":[],"categories":[{"title":"General","color":"blue","links":[{"title":"エンティティのビジュアル入門","order":1,"link":"/visuals/introduction","tags":["guide"]},{"title":"Bedrock Modeling","order":2,"link":"/visuals/bedrock-modeling"},{"title":"Material","link":"/visuals/materials","tags":["expert"]},{"title":"Material Creations","link":"/visuals/material-creations","tags":["expert"]},{"title":"Math-Based Animations","link":"/visuals/math-based-animations","tags":["intermediate"]},{"title":"アニメーション内のエフェクト","link":"/visuals/animation-effects"},{"title":"カスタム死亡アニメーション","link":"/visuals/death-animations","tags":["intermediate"]},{"title":"スキンパック","link":"/visuals/skin-packs"}]},{"title":"Tutorials","color":"green","links":[{"title":"Player Geometry","link":"/visuals/player-geometry","tags":["beginner"]},{"title":"エンティティのテクスチャアニメーション","link":"/visuals/animated-entity-texture","tags":["intermediate"]},{"title":"エンティティの影を消す","link":"/visuals/remove-shadows","tags":["intermediate"]},{"title":"スポーンエッグの再テクスチャ","link":"/visuals/retexturing-spawn-eggs","tags":["beginner"]},{"title":"リード位置","link":"/visuals/leash-position","tags":["easy"]},{"title":"発光するエンティティのテクスチャ","link":"/visuals/glowing-texture"},{"title":"被ダメージアニメーション","link":"/visuals/custom-hurt-animations","tags":["intermediate"]}]},{"title":"Ideas","color":"orange","links":[{"title":"構造物のプレゼンテーション","link":"/visuals/structure-presentation"}]}]},{"id":"world-generation","title":"World Generation","links":[],"categories":[{"title":"General","color":"blue","links":[{"title":"ワールド生成の入門","order":1,"link":"/world-generation/world-generation-intro","tags":["guide"]},{"title":"Biomes","link":"/world-generation/biomes","tags":["guide","experimental"]},{"title":"Feature Types","link":"/world-generation/feature-types"},{"title":"Jigsaw Structures","link":"/world-generation/jigsaw-structures"}]},{"title":"Tutorials","color":"green","links":[{"title":"Feature のブロック条件","link":"/world-generation/feature-block-conditions","tags":["experimental"]},{"title":"Generating Custom Ores","link":"/world-generation/generating-custom-ores","tags":["experimental"]},{"title":"Generating Custom Structures","link":"/world-generation/structure-features"},{"title":"Heightmap Noise","link":"/world-generation/heightmap-noise","tags":["experimental"]},{"title":"パッチの生成","link":"/world-generation/surface-builder","tags":["experimental"]}]},{"title":"Documentation","color":"red","links":[{"title":"バイオームタグ","link":"/world-generation/biome-tags"}]}]}]}`);
function displayError(error) {
  throw error;
}
const data$2 = JSON.parse('{"beginner":{"color":"blue"},"beta":{"color":"yellow"},"concept":{"color":"blue","sidebar":true},"deprecated":{"color":"red"},"easy":{"color":"blue"},"experimental":{"color":"orange"},"expert":{"color":"red"},"function":{"color":"blue","sidebar":true},"guide":{"color":"green","sidebar":true},"help":{"color":"blue","sidebar":true},"info":{"color":"blue","sidebar":true},"intermediate":{"color":"orange"},"method":{"color":"orange"},"outdated":{"color":"red","sidebar":true},"scripting":{"color":"yellow","sidebar":{"text":"Scripts"}}}');
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "Label",
  __ssrInlineRender: true,
  props: {
    color: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "label",
        "data-accent-color": __props.color
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/Label.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "Tag",
  __ssrInlineRender: true,
  props: {
    name: {},
    sidebar: { type: Boolean }
  },
  setup(__props) {
    const tag = computed(() => {
      const tag2 = data$2[__props.name];
      if (!tag2) {
        displayError(
          new TypeError(
            `No tag with the name "${__props.name}" exists. If you would like to add a tag, you can do so in "docs/tags.yaml".`
          )
        );
      }
      let { text = __props.name, color, sidebar: sidebarOptions } = tag2;
      if (__props.sidebar) {
        if (!sidebarOptions) return;
        if (typeof sidebarOptions === "object") text = sidebarOptions.text;
      }
      return { text, color };
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (tag.value !== void 0) {
        _push(ssrRenderComponent(_sfc_main$x, mergeProps({
          color: tag.value.color
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tag.value.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tag.value.text), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/Tag.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "SidebarLink",
  __ssrInlineRender: true,
  props: {
    prefix: {},
    title: {},
    order: {},
    link: {},
    tags: {}
  },
  setup(__props) {
    const element = ref();
    function activate() {
      setTimeout(() => {
        var _a;
        (_a = element.value) == null ? void 0 : _a.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        ref_key: "element",
        ref: element,
        class: "sidebar__link"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$F, {
        link: __props.link,
        "active-match": `^${__props.link}($|/|\\.html)`,
        onChange: (isActive2) => isActive2 && activate()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            if (__props.prefix !== void 0) {
              _push2(`<strong${_scopeId}>${ssrInterpolate(__props.prefix)}</strong>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span${_scopeId}>${ssrInterpolate(__props.title)}</span></div>`);
            if (__props.tags !== void 0) {
              _push2(`<div class="sidebar__link__tags"${_scopeId}><!--[-->`);
              ssrRenderList(__props.tags, (name) => {
                _push2(ssrRenderComponent(_sfc_main$w, {
                  key: name,
                  name,
                  sidebar: ""
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", null, [
                __props.prefix !== void 0 ? (openBlock(), createBlock("strong", { key: 0 }, toDisplayString(__props.prefix), 1)) : createCommentVNode("", true),
                createVNode("span", null, toDisplayString(__props.title), 1)
              ]),
              __props.tags !== void 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "sidebar__link__tags"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.tags, (name) => {
                  return openBlock(), createBlock(_sfc_main$w, {
                    key: name,
                    name,
                    sidebar: ""
                  }, null, 8, ["name"]);
                }), 128))
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/navigation/SidebarLink.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "SidebarCategory",
  __ssrInlineRender: true,
  props: {
    title: {},
    color: {},
    links: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        class: "sidebar__category",
        "data-accent-color": __props.color
      }, _attrs))}><header>${ssrInterpolate(__props.title)}</header><ul><!--[-->`);
      ssrRenderList(__props.links, (link2) => {
        _push(ssrRenderComponent(_sfc_main$v, mergeProps({
          key: link2.link
        }, { ref_for: true }, link2), null, _parent));
      });
      _push(`<!--]--></ul></li>`);
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/navigation/SidebarCategory.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "SidebarSection",
  __ssrInlineRender: true,
  props: {
    id: {},
    title: {},
    order: {},
    links: {},
    categories: {},
    open: { type: Boolean }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<details${ssrRenderAttrs(mergeProps({
        class: "sidebar__section",
        open: __props.open
      }, _attrs))}><summary>${ssrInterpolate(__props.title)} `);
      _push(ssrRenderComponent(ChevronRightIcon, null, null, _parent));
      _push(`</summary><ul><!--[-->`);
      ssrRenderList(__props.links, (link2) => {
        _push(ssrRenderComponent(_sfc_main$v, mergeProps({
          key: link2.link
        }, { ref_for: true }, link2), null, _parent));
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(__props.categories, (category) => {
        _push(ssrRenderComponent(_sfc_main$u, mergeProps({
          key: category.title
        }, { ref_for: true }, category), null, _parent));
      });
      _push(`<!--]--></ul></details>`);
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/navigation/SidebarSection.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, theme } = useData();
    const { links, sections } = data$3;
    const isMobile = useIsMobile();
    const activeSection = computed(() => {
      var _a;
      return (_a = page.value.relativePath.match(/^[^/]+/)) == null ? void 0 : _a[0];
    });
    const openSection = ref();
    watch(activeSection, (id) => {
      if (id === openSection.value) openSection.value = void 0;
    });
    function toggleSection(id) {
      if (id === openSection.value) openSection.value = void 0;
      else openSection.value = id;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar" }, _attrs))}>`);
      if (unref(links).length > 0 || unref(isMobile) && unref(theme).navigation.length > 0) {
        _push(`<ul>`);
        if (unref(isMobile)) {
          _push(`<!--[-->`);
          ssrRenderList(unref(theme).navigation, (item) => {
            _push(`<li class="sidebar__link">`);
            _push(ssrRenderComponent(_sfc_main$F, {
              link: item.link,
              "active-match": item.activeMatch
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(item.text)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.text), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(unref(links), (link2) => {
          _push(ssrRenderComponent(_sfc_main$v, mergeProps({
            key: link2.link
          }, { ref_for: true }, link2), null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(sections), (section) => {
        _push(ssrRenderComponent(_sfc_main$t, mergeProps({
          key: section.id
        }, { ref_for: true }, section, {
          open: openSection.value === section.id || activeSection.value === section.id,
          onClick: () => toggleSection(section.id)
        }), null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/navigation/Sidebar.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "frame-corner",
    xmlns: "http://www.w3.org/2000/svg",
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "var(--light-bg-color)",
    stroke: "var(--border-color)"
  }, _attrs))}><path d="M 0,0 V 11 A 11,11 0 0 1 11,0 Z" style="${ssrRenderStyle({ "stroke-width": "2", "paint-order": "stroke fill" })}"></path></svg>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/icons/FrameCorner.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const FrameCorner = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$2]]);
const absolutePathPattern = /^(\/|[a-z]+:)/;
function assetPath(assetsDirectory, relativePath, path) {
  let assetPath2 = "";
  if (!absolutePathPattern.test(path)) {
    assetPath2 += `/assets/${assetsDirectory}/${relativePath.replace(/\.md$/, "/")}`;
  }
  assetPath2 += path;
  return assetPath2;
}
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "WikiImage",
  __ssrInlineRender: true,
  props: {
    alt: {},
    caption: {},
    src: {},
    pixelated: { type: Boolean },
    width: {},
    height: {},
    link: {}
  },
  setup(__props) {
    const props = __props;
    const { page } = useData();
    const imageSource = (src) => withBase(assetPath("images", page.value.relativePath, src));
    const style = computed(() => ({
      imageRendering: props.pixelated ? "pixelated" : void 0,
      objectFit: "contain"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.link ? "a" : "div"), mergeProps({
        class: "wiki-image",
        "data-captioned": __props.caption ? "" : void 0,
        href: __props.link
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (typeof __props.src === "string") {
              _push2(`<img${ssrRenderAttr("src", imageSource(__props.src))}${ssrRenderAttr("alt", __props.alt)}${ssrRenderAttr("width", __props.width)}${ssrRenderAttr("height", __props.height)} style="${ssrRenderStyle(style.value)}" data-v-488654ef${_scopeId}>`);
            } else {
              _push2(`<!--[--><img${ssrRenderAttr("src", imageSource(__props.src.dark))}${ssrRenderAttr("alt", __props.alt)}${ssrRenderAttr("width", __props.width)}${ssrRenderAttr("height", __props.height)} style="${ssrRenderStyle(style.value)}" data-theme="dark" data-v-488654ef${_scopeId}><img${ssrRenderAttr("src", imageSource(__props.src.light))}${ssrRenderAttr("alt", __props.alt)}${ssrRenderAttr("width", __props.width)}${ssrRenderAttr("height", __props.height)} style="${ssrRenderStyle(style.value)}" data-theme="light" data-v-488654ef${_scopeId}><!--]-->`);
            }
            if (__props.caption) {
              _push2(`<div class="caption" data-v-488654ef${_scopeId}>${ssrInterpolate(__props.caption)}</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              typeof __props.src === "string" ? (openBlock(), createBlock("img", {
                key: 0,
                src: imageSource(__props.src),
                alt: __props.alt,
                width: __props.width,
                height: __props.height,
                style: style.value
              }, null, 12, ["src", "alt", "width", "height"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode("img", {
                  src: imageSource(__props.src.dark),
                  alt: __props.alt,
                  width: __props.width,
                  height: __props.height,
                  style: style.value,
                  "data-theme": "dark"
                }, null, 12, ["src", "alt", "width", "height"]),
                createVNode("img", {
                  src: imageSource(__props.src.light),
                  alt: __props.alt,
                  width: __props.width,
                  height: __props.height,
                  style: style.value,
                  "data-theme": "light"
                }, null, 12, ["src", "alt", "width", "height"])
              ], 64)),
              __props.caption ? (openBlock(), createBlock("div", {
                key: 2,
                class: "caption"
              }, toDisplayString(__props.caption), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/WikiImage.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const WikiImage = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-488654ef"]]);
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(_attrs)} data-v-663bb7fd><h1 data-v-663bb7fd>Page Not Found</h1><p data-v-663bb7fd>We couldn&#39;t find the page you were looking for.</p>`);
      _push(ssrRenderComponent(WikiImage, {
        src: "/assets/images/misc/dead_bush.png",
        alt: "Dead Bush"
      }, null, _parent));
      _push(`<p data-v-663bb7fd>Don&#39;t type <code data-v-663bb7fd>/spawnpoint</code> here!</p></article>`);
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/NotFound.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-663bb7fd"]]);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "Contributors",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter } = useData$1();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h2 id="contributors">Contributors</h2><div class="contributors"><!--[-->`);
      ssrRenderList(unref(frontmatter).mentions, (login) => {
        _push(`<a${ssrRenderAttr("title", login)}${ssrRenderAttr("href", "https://github.com/" + login)} target="_blank" rel="noopener noreferrer"><img${ssrRenderAttr("src", "https://github.com/" + login + ".png?size=32")} alt=""></a>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/Contributors.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "EditLink",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, page } = useData();
    const filePage = useFilePage();
    const link2 = computed(() => {
      const { repository, branch, examples } = site.value.themeConfig;
      if (filePage.value) {
        if (examples === void 0) return;
        const { repository: repository2, branch: branch2 } = examples;
        const { example, sourcePath } = filePage.value;
        return `${repository2}/edit/${branch2}/resources/${example.id}/${sourcePath}`;
      }
      return `${repository}/edit/${branch}/docs/${page.value.relativePath}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (link2.value !== void 0) {
        _push(ssrRenderComponent(_sfc_main$F, mergeProps({ link: link2.value }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Edit ${ssrInterpolate(unref(filePage) ? unref(filePage).name : unref(page).title)} on GitHub `);
            } else {
              return [
                createTextVNode(" Edit " + toDisplayString(unref(filePage) ? unref(filePage).name : unref(page).title) + " on GitHub ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/EditLink.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
function filePageLink(root, path) {
  return `/${root}/files/${path}`;
}
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "OutlineLevel",
  __ssrInlineRender: true,
  props: {
    headers: {}
  },
  setup(__props) {
    const { frontmatter, hash } = useData();
    const maxLevel = computed(() => frontmatter.value.outline_depth ?? 3);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OutlineLevel = resolveComponent("OutlineLevel", true);
      _push(`<ul${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.headers, (header) => {
        _push(`<li><a${ssrRenderAttr("href", header.link)} class="${ssrRenderClass({ active: unref(hash) === header.link })}">${ssrInterpolate(header.title)}</a>`);
        if (header.level < maxLevel.value && header.children.length > 0) {
          _push(ssrRenderComponent(_component_OutlineLevel, {
            headers: header.children
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/OutlineLevel.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const data$1 = JSON.parse(`{"/animation-controllers/afk-animation-controller":"AFK検出器","/animation-controllers/animation-controllers-intro":"アニメーションコントローラー入門","/animation-controllers/death-commands":"Death Commands","/animation-controllers/entity-commands":"Entity Commands","/animation-controllers/molang-into-scoreboard":"Molangをスコアボードへ","/animation-controllers/respawn-commands":"リスポーン時コマンド","/blocks/applying-effects":"効果の適用","/blocks/avoiding-state-limit":"状態数の上限を避ける","/blocks/block-components":"Block Components","/blocks/block-culling":"ブロックのカリング","/blocks/block-event-migration":"Block Event Migration","/blocks/block-events":"Block Events","/blocks/block-format-history":"Block Format History","/blocks/block-models":"Block Models","/blocks/block-orientation":"Block Orientation","/blocks/block-permutations":"ブロックのパーミュテーション","/blocks/block-shapes":"Block Shapes","/blocks/block-sounds":"Block Sounds","/blocks/block-states":"ブロックの状態","/blocks/block-tags":"ブロックタグ","/blocks/block-texture-variation":"ブロックのテクスチャ変種","/blocks/block-tinting":"ブロックの着色","/blocks/block-traits":"ブロックの trait","/blocks/blocks-as-items":"ブロックをアイテムとして扱う","/blocks/blocks-intro":"ブロック入門","/blocks/custom-crops":"Custom Crops","/blocks/custom-glass-blocks":"カスタムガラス","/blocks/custom-glazed-terracotta":"Custom Glazed Terracotta","/blocks/custom-heads":"Custom Heads","/blocks/custom-trapdoors":"Custom Trapdoors","/blocks/fake-blocks":"Fake Blocks","/blocks/flipbook-textures":"ブロックのテクスチャアニメーション","/blocks/intercardinal-orientation":"Intercardinal Orientation","/blocks/ore-loot-tables":"鉱石のルートテーブル","/blocks/precise-interaction":"Precise Interaction","/blocks/redstone-components":"レッドストーンコンポーネント","/blocks/tool-based-destruction":"Tool-Based Destruction","/blocks/troubleshooting-blocks":"ブロックのトラブルシューティング","/blocks/vanilla-block-models":"バニラのブロックモデル","/blocks/vanilla-block-tags":"バニラのブロックタグ","/blocks/vanilla-voxel-shapes":"バニラのボクセル形状","/commands/binary-logic":"コマンドにおける二進数","/commands/block-entities":"MBE - Max's Block Entity","/commands/block-states":"ブロックステート","/commands/comparing-scores":"Comparing And Retrieving Scores","/commands/compass-display":"コンパス表示","/commands/custom-crafting":"カスタムクラフト","/commands/damage":"Damage","/commands/detect-item-drop":"アイテムドロップの検出","/commands/detect-looking":"Look Detection","/commands/detect-movements":"Movement Detections","/commands/detect-rain":"雨の検出","/commands/display-entities":"FMBE - 表示エンティティを作る新しい方法","/commands/dynamic-displays":"動的表示","/commands/entity-counter":"エンティティカウンター","/commands/execute-at-block":"ブロックバリアント上で実行","/commands/execution-forking":"実行フォーキング","/commands/giving-nbt-items":"Giving NBT Items","/commands/intro-to-command-blocks":"Intro to Command Blocks","/commands/logic-gates":"execute での論理ゲート","/commands/mcfunctions":"Functions","/commands/new-execute":"Execute","/commands/on-first-join":"プレイヤーの初回参加時","/commands/on-first-world-load":"ワールドの初回読み込み時","/commands/on-player-death":"プレイヤー死亡時","/commands/on-player-join":"プレイヤー参加時","/commands/on-player-leave":"プレイヤー退出時","/commands/on-player-respawn":"プレイヤーリスポーン時","/commands/orbital-camera":"軌道カメラ","/commands/playanimation":"Playanimation","/commands/playsound":"Playsound","/commands/rearrange-positions":"マルチプレイヤー位置入れ替え","/commands/relative-coordinates":"座標系","/commands/scoreboard-operations":"スコアボードの操作","/commands/scoreboard-timers":"スコアボードタイマー","/commands/selectors":"セレクターの理解","/commands/sphere-command":"Sphere Command","/concepts/contents":"contents.json","/concepts/molang":"Molang","/concepts/namespaces":"名前空間","/concepts/overwriting-assets":"アセットの上書き","/concepts/shaders":"Shaders","/concepts/sounds":"サウンド","/concepts/subpacks":"サブパック","/concepts/texture-atlases":"Texture Atlases","/concepts/textures-list":"textures_list.json","/contribute-how-to":"貢献のしかた","/contribute-style":"Editing Wiki Pages","/contribute":"Bedrock Wiki への貢献","/discord":"Discord","/documentation/advanced-molang":"高度な Molang","/documentation/file-types":"ファイル形式","/documentation/fog-ids":"Fog ID","/documentation/material-config-description":"マテリアル設定の説明","/documentation/materials":"バニラ Material","/documentation/pack-structure":"パックのフォルダー構成","/documentation/queries":"Molang クエリ","/documentation/shared-constructs":"Shared Constructs","/documentation/sound-definitions":"Sound Definitions","/entities/area-effect-clouds":"Area Effect Clouds","/entities/boat-entities":"Creating Boats","/entities/coordinate-space-conversion":"Coordinate Space Conversion","/entities/detecting-other-entities":"Detecting Other Entities","/entities/disabling-team-damage":"Disabling Team Damage","/entities/dummy-components":"Dummy Components","/entities/dummy-entities":"Dummy Entities","/entities/entity-attack":"Entity Attacks","/entities/entity-events":"Entity Events","/entities/entity-intro-bp":"Intro to Entities BP","/entities/entity-intro-rp":"Intro to Entities RP","/entities/entity-movement":"Entity Movement","/entities/entity-properties":"Entity Properties","/entities/flying-entities":"Riding Flying Entities","/entities/holding-items":"Holding Items","/entities/invulnerable-entities":"Invulnerable Entities","/entities/look-at-entity":"Look at Entity","/entities/non-mob-runtime-identifiers":"Non-Mob Runtime Identifiers","/entities/npc-dialogue":"NPC Dialogue","/entities/projectiles":"Projectiles","/entities/render-controllers":"Render Controllers","/entities/runtime-identifier":"Runtime Identifiers","/entities/sleeping-entities":"Sleeping Entities","/entities/solid-entities":"Solid Entities","/entities/spawn-rules":"Spawn Rules","/entities/spawning-tamed-entities":"Spawning Tamed Entities","/entities/timers":"Entity Timers","/entities/troubleshooting-entities":"Troubleshooting Entities","/entities/vanilla-usage-components":"Vanilla Usage Components","/entities/vanilla-usage-spawn-rules":"Vanilla Usage Spawn Rules","/entities/village-mechanic":"Village Mechanic","/entities/vuc-full":"Vanilla Usage Components - Full","/entities/vusr-full":"Vanilla Usage Spawn Rules - Full","/graph-test":"MolangGraph","/guide/addons":"アドオンの解説","/guide/advancedmanifest":"高度なマニフェスト","/guide/blockbench":"Blockbench: モデリング、テクスチャ作成、アニメーション","/guide/custom-entity":"Create a Custom Entity","/guide/custom-item":"カスタムアイテムの作成","/guide/download-packs":"サンプルパックのダウンロード","/guide/format-version":"フォーマットバージョン","/guide/introduction":"はじめに","/guide/loot-table":"ルートテーブル、スポーンルール、クラフトレシピの追加","/guide/project-setup-android":"Project Setup Android","/guide/project-setup":"プロジェクトのセットアップ","/guide/software-preparation":"ソフトウェアと準備","/guide/troubleshooting":"トラブルシューティング","/guide/understanding-json":"JSON の理解","/hacktoberfest":"Hacktoberfest","/items/attachables":"Attachables","/items/custom-armor":"カスタムアーマー","/items/custom-food":"カスタムフード","/items/custom-pottery-sherds":"カスタム陶片","/items/custom-weapons":"カスタム武器","/items/enchantments":"エンチャント","/items/equipped-item-commands":"装備ベースのコマンド","/items/item-catalog":"アイテムカタログ","/items/item-components":"Item Components","/items/item-event-migration":"アイテムイベントの移行","/items/item-events":"アイテムイベント","/items/item-format-history":"アイテム形式の履歴","/items/item-tags":"アイテムタグ","/items/items-intro":"アイテム入門","/items/numerical-item-ids":"Numerical Item IDs","/items/spawning-items":"アイテムのスポーン","/items/throwable":"投げられるアイテム","/items/tool-durability":"ツールの耐久値","/items/translation-status":"翻訳状況","/items/troubleshooting-items":"アイテムのトラブルシューティング","/items/vanilla-item-groups":"バニラのアイテムグループ","/items/vanilla-item-tags":"バニラのアイテムタグ","/items/vanilla-usage-items":"バニラの使用コンポーネント","/items/vui-full":"Vanilla Usage Components - Full","/json-ui/add-hud-elements":"HUD 要素の追加","/json-ui/aseprite-animations":"Aseprite アニメーション","/json-ui/best-practices":"ベストプラクティス","/json-ui/buttons-and-toggles":"ボタンとトグル","/json-ui/json-ui-documentation":"JSON UIドキュメント","/json-ui/json-ui-intro":"JSON UI の概要","/json-ui/modifying-server-forms":"サーバーフォームの変更","/json-ui/preserve-title-texts":"タイトルテキストの保持","/json-ui/string-to-number":"文字列から数値へ","/licenses/CC-BY-4.0":"クリエイティブ・コモンズ 表示 4.0 国際ライセンス","/licenses/MIT":"MIT ライセンス","/loot/item-functions":"アイテム関数","/loot/loot-tables":"ルートテーブル","/loot/randomized-structure-loot":"ランダム化された構造物のルート","/loot/recipes":"レシピ","/loot/trade-tables":"Trade Tables","/loot/trading-behavior":"取引の動作","/meta/addon-performance":"アドオンのパフォーマンス","/meta/blocks-items-qna":"Blocks and Items Q&A 2024/08/30","/meta/deferred-qna":"Deferred Technical Preview Q&A 2024/02/23","/meta/gametest-qna":"GameTest Q&A 2021/08/06","/meta/scripting-editor-qna":"Scripting and Editor Q&A 2023/09/22","/meta/style-guide":"スタイルガイド","/meta/useful-links":"便利なリンク","/meta/using-schemas":"スキーマの使い方","/meta/version-control":"バージョン管理","/meta/world-gen-qna":"World Generation Q&A 2024/11/15","/nbt/enabling-experiments":"NBTを編集して実験機能を有効にする","/nbt/libraries":"NBT Libraries","/nbt/mcstructure":".mcstructure","/nbt/nbt-in-depth":"About NBT (Named Binary Tag)","/nbt/step-by-step-example":"NBT 読み取りの例","/nbt/structure-limits":"構造物サイズ上限の拡張","/particles/disabling-particles":"パーティクルを無効化する","/particles/particles":"パーティクル入門","/particles/vanilla-particles":"Vanilla Particles","/privacy":"プライバシーポリシー","/scripting/api-environment":"エンジン環境","/scripting/api-modules":"API モジュール","/scripting/custom-commands":"カスタムコマンド","/scripting/game-tests":"GameTest","/scripting/placement-prevention":"ブロック配置の防止","/scripting/privileges":"Script の権限","/scripting/resources":"Script Resources","/scripting/script-net":"Script Request API","/scripting/script-server":"Script のコア機能","/scripting/script-watchdog":"Script Watchdog","/scripting/scripting-intro":"スクリプト入門","/scripting/server-forms":"サーバー向けフォーム","/scripting/troubleshooting":"JavaScript のトラブルシューティング","/scripting/typescript":"TypeScript","/scripting/what-is-script":"Script API とは？","/servers/bedrock":"Bedrock のサーバーソフトウェア","/servers/nethernet":"NetherNet プロトコル","/servers/raknet":"RakNet プロトコル","/servers/server-software":"Bedrock サーバーソフトウェア","/test":"Wiki開発者用テストページ","/text/custom-emojis":"カスタム絵文字","/text/emojis":"絵文字の入門","/text/fonts":"Fonts","/text/input-keys":"入力キー","/text/rawtext":"Raw Text","/text/splashes":"スプラッシュテキスト","/text/text-intro":"テキストとローカライズの入門","/visuals/animated-entity-texture":"エンティティのテクスチャアニメーション","/visuals/animation-effects":"アニメーション内のエフェクト","/visuals/bedrock-modeling":"Bedrock Modeling","/visuals/custom-hurt-animations":"被ダメージアニメーション","/visuals/death-animations":"カスタム死亡アニメーション","/visuals/glowing-texture":"発光するエンティティのテクスチャ","/visuals/introduction":"エンティティのビジュアル入門","/visuals/leash-position":"リード位置","/visuals/material-creations":"Material Creations","/visuals/materials":"Material","/visuals/math-based-animations":"Math-Based Animations","/visuals/player-geometry":"Player Geometry","/visuals/remove-shadows":"エンティティの影を消す","/visuals/retexturing-spawn-eggs":"スポーンエッグの再テクスチャ","/visuals/skin-packs":"スキンパック","/visuals/structure-presentation":"構造物のプレゼンテーション","/world-generation/biome-tags":"バイオームタグ","/world-generation/biomes":"Biomes","/world-generation/feature-block-conditions":"Feature のブロック条件","/world-generation/feature-types":"Feature Types","/world-generation/generating-custom-ores":"Generating Custom Ores","/world-generation/heightmap-noise":"Heightmap Noise","/world-generation/jigsaw-structures":"Jigsaw Structures","/world-generation/structure-features":"Generating Custom Structures","/world-generation/surface-builder":"パッチの生成","/world-generation/world-generation-intro":"ワールド生成の入門"}`);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "RelatedPages",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="outline__title">Related Pages</div><ul><!--[-->`);
      ssrRenderList(unref(frontmatter).related, (link2) => {
        _push(`<li><a${ssrRenderAttr("href", link2)}>${ssrInterpolate(unref(data$1)[link2])}</a></li>`);
      });
      _push(`<!--]--></ul><!--]-->`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/RelatedPages.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "FolderViewEntry",
  __ssrInlineRender: true,
  props: {
    entry: {},
    links: { type: Function },
    collapsed: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isFolder = computed(() => Object.keys(props.entry.children).length > 0);
    const isCollapsed = ref(isFolder.value && props.collapsed);
    const icon = computed(() => {
      if (isFolder.value) return "📂";
      let type = props.entry.name.split(".").pop();
      switch (type) {
        case "jpg":
        case "jpeg":
        case "png":
        case "tga":
          return "🖼️";
        case "lang":
          return "🈵";
        case "mcstructure":
          return "🏛";
        default:
          return "📝";
      }
    });
    const name = computed(() => props.entry.name.split("/")[0]);
    const link2 = computed(() => {
      var _a;
      return (_a = props.links) == null ? void 0 : _a.call(props, props.entry.path);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FolderViewEntry = resolveComponent("FolderViewEntry", true);
      _push(`<li${ssrRenderAttrs(mergeProps({
        "data-collapsed": isCollapsed.value ? "" : void 0,
        "data-icon": icon.value
      }, _attrs))}>`);
      if (isFolder.value) {
        _push(`<button type="button">${ssrInterpolate(name.value)}</button>`);
      } else if (link2.value) {
        _push(ssrRenderComponent(_sfc_main$F, { link: link2.value }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(name.value)}`);
            } else {
              return [
                createTextVNode(toDisplayString(name.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div>${ssrInterpolate(name.value)}</div>`);
      }
      _push(`<ul><!--[-->`);
      ssrRenderList(__props.entry.children, (child) => {
        _push(ssrRenderComponent(_component_FolderViewEntry, {
          key: child.name,
          entry: child,
          links: __props.links,
          collapsed: __props.collapsed
        }, null, _parent));
      });
      _push(`<!--]--></ul></li>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/FolderViewEntry.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "FolderView",
  __ssrInlineRender: true,
  props: {
    paths: {},
    links: { type: Function },
    collapsed: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const entries = computed(() => {
      const entries2 = {};
      props.paths.forEach((path) => {
        fillEntries(entries2, path);
      });
      return entries2;
    });
    function fillEntries(entries2, path, parentPath) {
      let name = path.split("/")[0];
      const entryPath = parentPath ? parentPath + "/" + name : name;
      entries2[name] ?? (entries2[name] = {
        path: entryPath,
        name,
        children: {}
      });
      if (path.length > name.length) {
        fillEntries(entries2[name].children, path.substring(name.length + 1), entryPath);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "folder-view" }, _attrs))}><ul><!--[-->`);
      ssrRenderList(entries.value, (entry) => {
        _push(ssrRenderComponent(_sfc_main$k, {
          key: entry.name,
          entry,
          collapsed: __props.collapsed,
          links: __props.links
        }, null, _parent));
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/FolderView.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    link: {},
    color: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "button",
        href: __props.link,
        "data-accent-color": __props.color
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</a>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/Button.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "Downloads",
  __ssrInlineRender: true,
  props: {
    title: {},
    types: {},
    asset: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(__props.types, (type) => {
        _push(ssrRenderComponent(_sfc_main$i, {
          key: type,
          color: type.startsWith("mc") ? "green" : "blue",
          link: __props.asset,
          download: __props.title + "." + type
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Download as ${ssrInterpolate(type.toUpperCase())}`);
            } else {
              return [
                createTextVNode(" Download as " + toDisplayString(type.toUpperCase()), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/Downloads.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "Outline",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, page, params } = useData();
    const filePage = useFilePage();
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      if (unref(filePage) !== void 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "outline" }, _attrs))}>`);
        if (unref(filePage).root.type === "page") {
          _push(`<a class="outline__title"${ssrRenderAttr("href", "/" + unref(filePage).root.path)}>${ssrInterpolate(unref(filePage).root.title)}</a>`);
        } else {
          _push(`<div class="outline__title">${ssrInterpolate(unref(filePage).root.title)}</div>`);
        }
        _push(ssrRenderComponent(_sfc_main$j, {
          paths: unref(filePage).example.files,
          links: (path) => unref(filePageLink)(unref(filePage).root.path, path),
          collapsed: ""
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$h, {
          title: unref(filePage).root.title,
          asset: "/" + unref(filePage).root.path + ".zip",
          types: unref(filePage).example.archive.type === "zip" ? ["zip"] : ["zip", unref(filePage).example.archive.type]
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "outline" }, _attrs))}><a class="outline__title" href="#">${ssrInterpolate(unref(page).title)}</a>`);
        if (unref(page).headers.length > 0) {
          _push(ssrRenderComponent(_sfc_main$m, {
            headers: unref(page).headers
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if ((_a = unref(params)) == null ? void 0 : _a.example) {
          _push(`<!--[--><div class="outline__title">Download Example</div>`);
          if ((_b = unref(params)) == null ? void 0 : _b.example) {
            _push(ssrRenderComponent(_sfc_main$h, {
              title: unref(page).title,
              asset: unref(route).path + ".zip",
              types: unref(params).example.archive.type === "zip" ? ["zip"] : ["zip", unref(params).example.archive.type]
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(frontmatter).related !== void 0) {
          _push(ssrRenderComponent(_sfc_main$l, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/Outline.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Spoiler",
  __ssrInlineRender: true,
  props: {
    title: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<details${ssrRenderAttrs(mergeProps({ class: "spoiler" }, _attrs))}><summary><div>${ssrInterpolate(__props.title)}</div>`);
      _push(ssrRenderComponent(ChevronRightIcon, null, null, _parent));
      _push(`</summary><div class="spoiler__content">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></details>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/Spoiler.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const data = JSON.parse('{"CC-BY-4.0":{"title":"クリエイティブ・コモンズ 表示 4.0 国際ライセンス","link":"/licenses/CC-BY-4.0"},"MIT":{"title":"MIT ライセンス","link":"/licenses/MIT"}}');
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "License",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter } = useData();
    const normalizedLicenses = computed(() => {
      const { license } = frontmatter.value;
      if (license === true) return { main: "CC-BY-4.0", code: "MIT" };
      if (typeof license === "string") return { main: license };
      return license;
    });
    const mainLicense = computed(() => data[normalizedLicenses.value.main]);
    const codeLicense = computed(() => data[normalizedLicenses.value.code]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><hr style="${ssrRenderStyle({ "margin-block": "1em" })}">`);
      if (mainLicense.value) {
        _push(`<p> Text and image content on this page is licensed under the `);
        _push(ssrRenderComponent(_sfc_main$F, {
          link: mainLicense.value.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(mainLicense.value.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(mainLicense.value.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (codeLicense.value) {
        _push(`<p> Code samples on this page are licensed under the `);
        _push(ssrRenderComponent(_sfc_main$F, {
          link: codeLicense.value.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(codeLicense.value.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(codeLicense.value.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/License.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Article",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, page } = useData();
    const isMobileOutline = useMediaQuery("(max-width: 1300px)");
    const isLicensePage = computed(() => page.value.relativePath.startsWith("licenses/"));
    const filePage = useFilePage();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Content = resolveComponent("Content");
      _push(`<article${ssrRenderAttrs(_attrs)}><h1>${ssrInterpolate(unref(filePage) ? unref(filePage).root.title : unref(frontmatter).title)}</h1>`);
      if (unref(frontmatter).tags !== void 0) {
        _push(`<div style="${ssrRenderStyle({ "margin-block": "1em" })}"><!--[-->`);
        ssrRenderList(unref(frontmatter).tags, (name) => {
          _push(ssrRenderComponent(_sfc_main$w, {
            key: name,
            name
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isLicensePage.value) {
        _push(ssrRenderComponent(_sfc_main$i, {
          link: unref(frontmatter).source
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`View Source `);
              _push2(ssrRenderComponent(ExternalIcon, null, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode("View Source "),
                createVNode(ExternalIcon)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(frontmatter).show_outline ?? true) {
        _push(`<div>`);
        if (unref(isMobileOutline)) {
          _push(ssrRenderComponent(_sfc_main$f, {
            key: (_a = unref(filePage)) == null ? void 0 : _a.file,
            title: unref(filePage) ? "Example Files" : "Contents",
            open: !unref(filePage)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_sfc_main$g, null, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_sfc_main$g)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(_sfc_main$g, null, null, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Content, { id: "content" }, null, _parent));
      if (unref(frontmatter).show_contributors ?? !isLicensePage.value) {
        _push(ssrRenderComponent(_sfc_main$o, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(frontmatter).show_edit_link ?? !isLicensePage.value) {
        _push(ssrRenderComponent(_sfc_main$n, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(frontmatter).license) {
        _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/Article.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><p>${ssrInterpolate(unref(site).title)} <small> by <a href="https://github.com/Bedrock-OSS" target="_blank" rel="noopener noreferrer"> Bedrock OSS </a></small></p><p>&quot;Minecraft&quot; is a trademark of Mojang AB.</p><p> Bedrock OSS, ${ssrInterpolate(unref(site).title)} and <a href="https://bedrock.dev" target="_blank" rel="noopener noreferrer">bedrock.dev</a> are not affiliated in any way with Microsoft or Mojang AB. </p><ul><li>`);
      _push(ssrRenderComponent(_sfc_main$F, { link: "/privacy" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_sfc_main$F, { link: "/discord" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Join our Discord`);
          } else {
            return [
              createTextVNode("Join our Discord")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_sfc_main$F, { link: "/contribute" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn how to Contribute`);
          } else {
            return [
              createTextVNode("Learn how to Contribute")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_sfc_main$F, { link: "https://github.com/Bedrock-OSS/bedrock-wiki" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Visit our Repository`);
          } else {
            return [
              createTextVNode("Visit our Repository")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></footer>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/Footer.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, frontmatter } = useData();
    useIsMobile();
    const isSidebarVisible = useSidebarVisibility();
    const isOutlineVisible = computed(() => {
      var _a;
      return ((_a = frontmatter.value) == null ? void 0 : _a.show_outline) ?? !page.value.isNotFound;
    });
    const filePage = useFilePage();
    useFilePageRouter();
    useRedirect();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: {
          "sidebar-visible": unref(isSidebarVisible),
          "outline-visible": isOutlineVisible.value,
          "example-file": !!unref(filePage)
        }
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$y, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$s, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(FrameCorner, null, null, _parent));
      if (unref(page).isNotFound) {
        _push(ssrRenderComponent(NotFound, null, null, _parent));
      } else {
        _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      }
      _push(ssrRenderComponent(_sfc_main$c, null, null, _parent));
      _push(`</main></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/Layout.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    title: {},
    link: {},
    image: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><header>`);
      if (__props.image !== void 0) {
        _push(ssrRenderComponent(WikiImage, {
          src: __props.image,
          alt: "",
          width: "60",
          height: "60"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.link) {
        _push(`<h2><a${ssrRenderAttr("href", __props.link)}>${ssrInterpolate(__props.title)}</a></h2>`);
      } else {
        _push(`<h2>${ssrInterpolate(__props.title)}</h2>`);
      }
      _push(`</header>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/Card.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-grid" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/CardGrid.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const CardGrid = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$8 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/icons/FileIcon.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const FileIcon = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CodeHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "code-header" }, _attrs))}>`);
      _push(ssrRenderComponent(FileIcon, null, null, _parent));
      _push(`<div class="code-header__content">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/CodeHeader.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "MolangGraph",
  __ssrInlineRender: true,
  props: {
    code: {},
    fromX: { default: 0 },
    fromY: { default: 0 },
    toX: { default: 1 },
    toY: { default: 1 },
    stepSize: { default: 0.5 },
    height: { default: 300 },
    useCenteredOrigin: { type: Boolean },
    hideCode: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { code, fromX, fromY, toX, toY, stepSize, height } = toRefs(props);
    const molang = new Molang({});
    const xVariables = [
      "query.anim_time",
      "query.life_time",
      "query.modified_distance_moved",
      "variable.particle_age",
      "variable.emitter_age"
    ];
    const cssHeight = computed(() => `${height.value}px`);
    const width = ref(0);
    const svgElement = ref(null);
    const { width: windowWidth } = useWindowSize();
    watch([windowWidth, svgElement], () => {
      if (svgElement.value) {
        const { width: svgWidth } = svgElement.value.getBoundingClientRect();
        width.value = svgWidth;
      }
    });
    const getXRange = () => Math.abs(toX.value - fromX.value);
    const getYRange = () => Math.abs(toY.value - fromY.value);
    const getXRoot = () => Math.abs(fromX.value / getXRange()) * width.value;
    const getYRoot = () => Math.abs(fromY.value / getYRange()) * height.value;
    const toPixelX = (x) => {
      const xScale = width.value / getXRange();
      return x * xScale + getXRoot();
    };
    const toPixelY = (y) => {
      const yScale = height.value / getYRange();
      return y * yScale + getYRoot();
    };
    const axes = computed(
      () => `M0 ${height.value - getYRoot()} L${width.value} ${height.value - getYRoot()} M${getXRoot()} 0 L${getXRoot()} ${height.value}`
    );
    const graphData = computed(() => {
      let x = fromX.value;
      molang.updateConfig({
        variableHandler: (varName) => xVariables.includes(varName) ? x : void 0
      });
      let valueBefore = NaN;
      let path = "";
      while (x <= toX.value) {
        let value = molang.executeAndCatch(userCode.value);
        if (typeof value !== "number") value = NaN;
        path += `${isNaN(value) || isNaN(valueBefore) ? "M" : " L"}${toPixelX(x)} ${toPixelY(value)}`;
        x += stepSize.value;
        valueBefore = value;
      }
      return path;
    });
    const userCode = ref(code.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        ":--fcb0b92e": cssHeight.value
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "molang-graph" }, _attrs, _cssVars))} data-v-8533202b><input${ssrRenderAttr("value", userCode.value)} type="text" data-v-8533202b><svg class="rounded-md border border-true-gray-200 dark:border-true-gray-600" data-v-8533202b><path class="axes"${ssrRenderAttr("d", axes.value)} data-v-8533202b></path><path class="graph" transform="scale(1, -1)" transform-origin="center"${ssrRenderAttr("d", graphData.value)} data-v-8533202b></path></svg></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/MolangGraph.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const MolangGraph = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-8533202b"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SortIcon",
  __ssrInlineRender: true,
  props: {
    order: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        width: "18",
        height: "18",
        viewBox: "0 0 24 24"
      }, _attrs))} data-v-0788a74b><g${ssrRenderAttr("data-active", __props.order === "ascending")} data-v-0788a74b><path d="m 2.3,7.5 5,-4.5 5,4.5" data-v-0788a74b></path><path d="M 7.3,3 V 19" data-v-0788a74b></path></g><g${ssrRenderAttr("data-active", __props.order === "descending")} data-v-0788a74b><path d="M 16.7,5 V 21" data-v-0788a74b></path><path d="m 11.7,16.5 5,4.5 5,-4.5" data-v-0788a74b></path></g></svg>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/icons/SortIcon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SortIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-0788a74b"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TableHeader",
  __ssrInlineRender: true,
  props: {
    columnId: {},
    column: {},
    sorting: {}
  },
  emits: ["toggleSorting"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const sortOrder = computed(() => {
      var _a;
      if (((_a = props.sorting) == null ? void 0 : _a.column) === props.columnId) return props.sorting.order;
      return void 0;
    });
    const sortButtonTitle = computed(() => {
      if (sortOrder.value === "ascending") return "Sort Descending";
      if (sortOrder.value === "descending") return "Sort Initial";
      return "Sort Ascending";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<th${ssrRenderAttrs(mergeProps({
        key: __props.columnId,
        style: { textAlign: __props.column.textAlign }
      }, _attrs))} data-v-a440223e><div data-v-a440223e><span data-v-a440223e>${__props.column.name ?? ""}</span>`);
      if (__props.column.sortable) {
        _push(`<button class="sort-button" type="button"${ssrRenderAttr("title", sortButtonTitle.value)} data-v-a440223e>`);
        _push(ssrRenderComponent(SortIcon, { order: sortOrder.value }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></th>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/TableHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TableHeader = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a440223e"]]);
const shortListLength = 10;
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TableCell",
  __ssrInlineRender: true,
  props: {
    column: {},
    value: { type: [Boolean, Number, String, Array] }
  },
  setup(__props) {
    const props = __props;
    const showMore = ref(false);
    const content = ref(null);
    const isOverflowing = ref(false);
    const canShowMore = computed(() => {
      if (Array.isArray(props.value)) return props.value.length > shortListLength;
      if (typeof props.value === "string") return isOverflowing.value;
      return false;
    });
    const checkOverflow = () => {
      if (content.value === null) return;
      isOverflowing.value = content.value.scrollHeight > content.value.clientHeight;
    };
    onMounted(() => {
      checkOverflow();
      window.addEventListener("resize", checkOverflow);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", checkOverflow);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<td${ssrRenderAttrs(mergeProps({
        style: { textAlign: __props.column.textAlign }
      }, _attrs))} data-v-7ccd0726>`);
      if (Array.isArray(__props.value)) {
        _push(`<ul class="content" data-v-7ccd0726><!--[-->`);
        ssrRenderList(showMore.value ? __props.value : __props.value.slice(0, shortListLength), (item, itemIndex) => {
          _push(`<li data-v-7ccd0726>${item ?? ""}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else if (typeof __props.value === "string") {
        _push(`<div class="content"${ssrRenderAttr("data-show-more", showMore.value)} data-v-7ccd0726>${__props.value ?? ""}</div>`);
      } else if (typeof __props.value === "boolean") {
        _push(`<div class="content" data-v-7ccd0726>${ssrInterpolate(__props.value ? "✔️" : "❌")}</div>`);
      } else {
        _push(`<div class="content" data-v-7ccd0726>${ssrInterpolate(__props.value)}</div>`);
      }
      if (canShowMore.value) {
        _push(`<!--[-->`);
        if (showMore.value) {
          _push(`<button type="button" class="show-less-button" data-v-7ccd0726> Show Less </button>`);
        } else {
          _push(`<button type="button" class="show-more-button" data-v-7ccd0726> …Show More </button>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</td>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/TableCell.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TableCell = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-7ccd0726"]]);
const typeOrder = ["undefined", "boolean", "number", "string"];
function getTextFromHTML(html) {
  const element = document.createElement("div");
  element.innerHTML = html;
  return element.textContent;
}
function sortTableRows(sorting, rows) {
  return rows.sort(compareRows);
  function compareRows(rowA, rowB) {
    let valueA = rowA[sorting.column];
    let valueB = rowB[sorting.column];
    if (typeof valueA === "string") valueA = getTextFromHTML(valueA);
    if (typeof valueB === "string") valueB = getTextFromHTML(valueB);
    if (valueA === valueB) return 0;
    let relative;
    if (typeof valueA === "boolean" && typeof valueB === "boolean" || typeof valueA === "number" && typeof valueB === "number") {
      relative = valueA > valueB ? 1 : -1;
    } else if (typeof valueA === "string" && typeof valueB === "string") {
      relative = valueA.localeCompare(valueB);
    } else {
      relative = typeOrder.indexOf(typeof valueA) - typeOrder.indexOf(typeof valueB);
    }
    if (sorting.order === "descending") relative *= -1;
    return relative;
  }
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Table",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const { page, params } = useData();
    const props = __props;
    const table = computed(() => {
      const path = assetPath("tables", page.value.relativePath, props.data);
      return params.value.tables[path];
    });
    const sorting = ref(null);
    const sortedRows = ref(table.value.rows);
    function toggleSorting(column) {
      var _a;
      if (((_a = sorting.value) == null ? void 0 : _a.column) === column) {
        if (sorting.value.order === "ascending") {
          sorting.value = { column, order: "descending" };
          return;
        }
        sorting.value = null;
        return;
      }
      sorting.value = { column, order: "ascending" };
    }
    function sortRows() {
      if (sorting.value === null) {
        sortedRows.value = table.value.rows;
        return;
      }
      const rows = table.value.rows.map((row, index) => ({
        ...row,
        __initial_index__: index
        // Persist index to prevent unnecessary Vue rerenders
      }));
      sortTableRows(sorting.value, rows);
      sortedRows.value = rows;
    }
    watch(sorting, sortRows);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<table${ssrRenderAttrs(_attrs)}><thead><tr><!--[-->`);
      ssrRenderList(table.value.columns, (column, columnId) => {
        _push(ssrRenderComponent(TableHeader, {
          key: columnId,
          "column-id": columnId,
          column,
          sorting: sorting.value,
          onToggleSorting: ($event) => toggleSorting(columnId)
        }, null, _parent));
      });
      _push(`<!--]--></tr></thead><tbody><!--[-->`);
      ssrRenderList(sortedRows.value, (row, index) => {
        _push(`<tr><!--[-->`);
        ssrRenderList(table.value.columns, (column, columnId) => {
          _push(ssrRenderComponent(TableCell, {
            key: columnId,
            column,
            value: row[columnId] ?? column.default
          }, null, _parent));
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody></table>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/Table.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UnicodeCopyButton",
  __ssrInlineRender: true,
  props: {
    code: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "unicodeCopyButton",
        onclick: `navigator.clipboard.writeText('\\u{${__props.code}}');`
      }, _attrs))}> Copy </button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/UnicodeCopyButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "YouTubeEmbed",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    const props = __props;
    const src = `https://www.youtube-nocookie.com/embed/${props.id}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "youtube-embed" }, _attrs))}><iframe${ssrRenderAttr("src", src)} frameborder="0" allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
      " allowfullscreen></iframe></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/client/components/content/YouTubeEmbed.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contentComponents = {
  Button: _sfc_main$i,
  Card: _sfc_main$a,
  CardGrid,
  CodeHeader: _sfc_main$7,
  FolderView: _sfc_main$j,
  Label: _sfc_main$x,
  MolangGraph,
  Spoiler: _sfc_main$f,
  Table: _sfc_main$2,
  Tag: _sfc_main$w,
  UnicodeCopyButton: _sfc_main$1,
  WikiImage,
  YouTubeEmbed: _sfc_main
};
const RawTheme = {
  Layout: _sfc_main$b,
  enhanceApp({ app }) {
    for (const name in contentComponents) {
      app.component(name, contentComponents[name]);
    }
  }
};
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCodeGroups() {
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches(".vp-code-group input")) {
        const group = (_a = el.parentElement) == null ? void 0 : _a.parentElement;
        if (!group)
          return;
        const i = Array.from(group.querySelectorAll("input")).indexOf(el);
        if (i < 0)
          return;
        const blocks = group.querySelector(".blocks");
        if (!blocks)
          return;
        const current = Array.from(blocks.children).find((child) => child.classList.contains("active"));
        if (!current)
          return;
        const next = blocks.children[i];
        if (!next || current === next)
          return;
        current.classList.remove("active");
        next.classList.add("active");
        const label = group == null ? void 0 : group.querySelector(`label[for="${el.id}"]`);
        label == null ? void 0 : label.scrollIntoView({ block: "nearest" });
      }
    });
  }
}
function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = /* @__PURE__ */ new WeakMap();
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = (_a = el.nextElementSibling) == null ? void 0 : _a.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        const ignoredNodes = [".vp-copy-ignore", ".diff.remove"];
        const clone = sibling.cloneNode(true);
        clone.querySelectorAll(ignoredNodes.join(",")).forEach((node) => node.remove());
        let text = clone.textContent || "";
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text).then(() => {
          el.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
            timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let isFirstUpdate = true;
  let managedHeadElements = [];
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      newTags.forEach((tag) => {
        const headEl = createHeadElement(tag);
        for (const el of document.head.children) {
          if (el.isEqualNode(headEl)) {
            managedHeadElements.push(el);
            return;
          }
        }
      });
      return;
    }
    const newElements = newTags.map(createHeadElement);
    managedHeadElements.forEach((oldEl, oldIndex) => {
      const matchedIndex = newElements.findIndex((newEl) => newEl == null ? void 0 : newEl.isEqualNode(oldEl ?? null));
      if (matchedIndex !== -1) {
        delete newElements[matchedIndex];
      } else {
        oldEl == null ? void 0 : oldEl.remove();
        delete managedHeadElements[oldIndex];
      }
    });
    newElements.forEach((el) => el && document.head.appendChild(el));
    managedHeadElements = [...managedHeadElements, ...newElements].filter(Boolean);
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData2 = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    const title = createTitle(siteData2, pageData);
    if (title !== document.title) {
      document.title = title;
    }
    const description = pageDescription || siteData2.description;
    let metaDescriptionElement = document.querySelector(`meta[name=description]`);
    if (metaDescriptionElement) {
      if (metaDescriptionElement.getAttribute("content") !== description) {
        metaDescriptionElement.setAttribute("content", description);
      }
    } else {
      createHeadElement(["meta", { name: "description", content: description }]);
    }
    updateHeadTags(mergeHead(siteData2.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  if (tag === "script" && attrs.async == null) {
    el.async = false;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            if (pageChunkPath)
              doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (
          // only prefetch same tab navigation, since a new tab will load
          // the lean js chunk instead.
          link2.target !== "_blank" && // only prefetch inbound links
          hostname === location.hostname
        ) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
function resolveThemeExtends(theme) {
  if (theme.extends) {
    const base = resolveThemeExtends(theme.extends);
    return {
      ...base,
      ...theme,
      async enhanceApp(ctx) {
        if (base.enhanceApp)
          await base.enhanceApp(ctx);
        if (theme.enhanceApp)
          await theme.enhanceApp(ctx);
      }
    };
  }
  return theme;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site, lang, dir } = useData$1();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = lang.value;
        document.documentElement.dir = dir.value;
      });
    });
    if (site.value.router.prefetchLinks) {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  globalThis.__VITEPRESS__ = true;
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data2 = initData(router.route);
  app.provide(dataSymbol, data2);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data2.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data2.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data: data2 };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    let pageModule = null;
    if (pageFilePath) {
      if (isInitialPageLoad) {
        pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
      }
      if (false) ;
      else {
        pageModule = import(
          /*@vite-ignore*/
          pageFilePath
        );
      }
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return pageModule;
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data: data2 }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data2.site);
      app.mount("#app");
    });
  });
}
async function render(path) {
  const { app, router } = await createApp();
  await router.go(path);
  const ctx = { content: "", vpSocialIcons: /* @__PURE__ */ new Set() };
  ctx.content = await renderToString(app, ctx);
  return ctx;
}
export {
  render
};
