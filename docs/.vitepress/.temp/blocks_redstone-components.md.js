import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"レッドストーンコンポーネント","description":"レッドストーン回路を構成するさまざまな種類のコンポーネントについて学びます。","frontmatter":{"title":"レッドストーンコンポーネント","description":"レッドストーン回路を構成するさまざまな種類のコンポーネントについて学びます。","category":"Documentation","tags":["intermediate"],"license":true,"mentions":["QuazChick"]},"headers":[{"level":2,"title":"レッドストーン絶縁体","slug":"レッドストーン絶縁体","link":"#レッドストーン絶縁体","children":[{"level":3,"title":"レッドストーン絶縁体の作成","slug":"レッドストーン絶縁体の作成","link":"#レッドストーン絶縁体の作成","children":[]},{"level":3,"title":"ワイヤの段差降下を防ぐ","slug":"ワイヤの段差降下を防ぐ","link":"#ワイヤの段差降下を防ぐ","children":[]}]},{"level":2,"title":"レッドストーン導体","slug":"レッドストーン導体","link":"#レッドストーン導体","children":[{"level":3,"title":"レッドストーン導体の作成","slug":"レッドストーン導体の作成","link":"#レッドストーン導体の作成","children":[]}]},{"level":2,"title":"レッドストーンコンシューマー","slug":"レッドストーンコンシューマー","link":"#レッドストーンコンシューマー","children":[{"level":3,"title":"レッドストーンコンシューマーの作成","slug":"レッドストーンコンシューマーの作成","link":"#レッドストーンコンシューマーの作成","children":[]}]},{"level":2,"title":"レッドストーンプロデューサー","slug":"レッドストーンプロデューサー","link":"#レッドストーンプロデューサー","children":[{"level":3,"title":"レッドストーンプロデューサーの作成","slug":"レッドストーンプロデューサーの作成","link":"#レッドストーンプロデューサーの作成","children":[]}]}],"relativePath":"blocks/redstone-components.md","filePath":"blocks/redstone-components.md"}');
const _sfc_main = { name: "blocks/redstone-components.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WikiImage = resolveComponent("WikiImage");
  const _component_CodeHeader = resolveComponent("CodeHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="tip custom-block"><p class="custom-block-title">FORMAT VERSION 1.26.10</p><p>カスタムブロックを作成する際に最新の format version を使うと、最新のレッドストーン機能にアクセスできます。</p></div><p>このページでは、レッドストーン回路を構成するさまざまな種類のコンポーネントについて学べます。 ここで記載するのは、アドオンで作成できるコンポーネントだけです。</p><h2 id="レッドストーン絶縁体" tabindex="-1">レッドストーン絶縁体 <a class="header-anchor" href="#レッドストーン絶縁体" aria-label="Permalink to &quot;レッドストーン絶縁体&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>一般に、バニラブロックが完全な立方体ではなく不透明でもあれば、絶縁体として扱われます。 ただし、ブロックの機能は見た目だけで決まるわけではないので、例外があることに注意してください。 たとえば、半透明であってもスライムブロックは絶縁体ではなく、代わりにレッドストーン電力を <a href="#redstone-conductors">導通</a> します。</p></div><p>厳密には回路の一部ではありませんが、<strong>レッドストーン絶縁体</strong> は、電力がかかってもレッドストーン信号を <em>導通しない</em> ため、コンパクトな回路を組むときに非常に役立ちます。</p><p>下の図では、左の通電したリピーターが石切台ブロックへ強い電力を与えています。しかし、石切台はレッドストーン絶縁体なので、その右側のリピーターは回路につながらず、通電しません。</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "insulator.png",
    alt: "Diagram of a stonecutter block with a powered repeater pointing into the left of it and an unpowered repeater pointing out of the right of it.",
    width: "512",
    pixelated: ""
  }, null, _parent));
  _push(`<h3 id="レッドストーン絶縁体の作成" tabindex="-1">レッドストーン絶縁体の作成 <a class="header-anchor" href="#レッドストーン絶縁体の作成" aria-label="Permalink to &quot;レッドストーン絶縁体の作成&quot;">​</a></h3><p>カスタムレッドストーン絶縁体を作るのは簡単です。カスタムブロックは既定でそのように動作するからです。</p><p>ブロックの JSON 定義に何かを追加する必要はありません。</p><h3 id="ワイヤの段差降下を防ぐ" tabindex="-1">ワイヤの段差降下を防ぐ <a class="header-anchor" href="#ワイヤの段差降下を防ぐ" aria-label="Permalink to &quot;ワイヤの段差降下を防ぐ&quot;">​</a></h3><p>既定では、レッドストーンダストのワイヤは絶縁体の側面を下って電力を下方向に伝えられます。 ただし、ガラスなどのほかの絶縁体と違い、バニラのハーフブロックはワイヤが側面を降りることを許しません。</p><p><a href="/blocks/block-components#redstone-conductivity">redstone conductivity</a> コンポーネントを使うと、自分のブロックでワイヤが降りるのを防げます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`minecraft:block &gt; components`);
      } else {
        return [
          createTextVNode("minecraft:block > components")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;minecraft:redstone_conductivity&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;allows_wire_to_step_down&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="レッドストーン導体" tabindex="-1">レッドストーン導体 <a class="header-anchor" href="#レッドストーン導体" aria-label="Permalink to &quot;レッドストーン導体&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>一般に、バニラブロックが完全で不透明なら、導体として扱われます。 ただし、ブロックの機能は見た目だけで決まるわけではないので、例外があることに注意してください。 たとえば、完全で不透明でも、観察者は <a href="#redstone-insulators">絶縁体</a> なのでレッドストーン電力を導通しません。</p></div><p><strong>レッドストーン導体</strong> は絶縁体の逆で、通電すると隣接ブロックへレッドストーン信号を <em>導通します</em>。</p><ul><li><p><strong>強く通電する</strong> 場合（<a href="#redstone-producers">redstone producer</a> を使う）は、隣接するレッドストーンダストやコンポーネントが回路に接続され、導通した電力を受け取ります。</p></li><li><p><strong>弱く通電する</strong> 場合（導体の上にある、または導体へ向いているレッドストーンダストを通電する場合）は、隣接するレッドストーンコンポーネントが回路に接続され、隣接するレッドストーンダストを接続せずに導通した電力を受け取ります。</p></li></ul><p>ブロックがレッドストーン導体であれば、その真下のブロックへの <strong>ワイヤの段差降下を防ぎます</strong>。これにより、その部分の回路からワイヤが切り離されます。</p><p>下の図では、左の通電したリピーターがコンクリートブロックへ強い電力を与えています。コンクリートはレッドストーン導体なので、その右側のリピーターも回路につながり、通電します。</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "conductor.png",
    alt: "Diagram of a concrete block with a powered repeater pointing into the left of it and another powered repeater pointing out of the right of it.",
    width: "512",
    pixelated: ""
  }, null, _parent));
  _push(`<h3 id="レッドストーン導体の作成" tabindex="-1">レッドストーン導体の作成 <a class="header-anchor" href="#レッドストーン導体の作成" aria-label="Permalink to &quot;レッドストーン導体の作成&quot;">​</a></h3><p>カスタムレッドストーン導体を作るには、ブロックに <a href="/blocks/block-components#redstone-conductivity">redstone conductivity</a> コンポーネントを含める必要があります。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`minecraft:block &gt; components`);
      } else {
        return [
          createTextVNode("minecraft:block > components")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;minecraft:redstone_conductivity&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;redstone_conductor&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">REDSTONE CONSUMERS (<a href="https://bugs.mojang.com/browse/MCPE-232715" target="_blank" rel="noreferrer">MCPE-232715</a>)</p><p>ブロックに <code class="shiki"><span>minecraft:redstone_consumer</span></code> コンポーネントを適用すると、ワイヤの切断などレッドストーン導体としてのほかの性質を保ったまま、レッドストーンを導通しなくなります。 通常のブロックと同じようにレッドストーンコンシューマーが実際にレッドストーンを導通するようにするには、<code class="shiki"><span>propagates_power</span></code> パラメータを <code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">true</span></code> に設定する必要があります。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`minecraft:block &gt; components`);
      } else {
        return [
          createTextVNode("minecraft:block > components")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;minecraft:redstone_conductivity&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;redstone_conductor&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;minecraft:redstone_consumer&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;propagates_power&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><h2 id="レッドストーンコンシューマー" tabindex="-1">レッドストーンコンシューマー <a class="header-anchor" href="#レッドストーンコンシューマー" aria-label="Permalink to &quot;レッドストーンコンシューマー&quot;">​</a></h2><p>レッドストーン電力が供給されると動作するブロックは、<strong>レッドストーンコンシューマー</strong> と呼ばれます。</p><p>下の図では、レッドストーンランプがレッドストーンコンシューマーとして動作しており、レッドストーントーチ（レッドストーンプロデューサー）から電力を受けています。</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "consumer.png",
    alt: "Diagram of a lit redstone lamp with a redstone torch to the left of it.",
    width: "384",
    pixelated: ""
  }, null, _parent));
  _push(`<h3 id="レッドストーンコンシューマーの作成" tabindex="-1">レッドストーンコンシューマーの作成 <a class="header-anchor" href="#レッドストーンコンシューマーの作成" aria-label="Permalink to &quot;レッドストーンコンシューマーの作成&quot;">​</a></h3><p>カスタムレッドストーンコンシューマーを作るには、ブロックに <a href="/blocks/block-components#redstone-producer">redstone consumer</a> コンポーネントと、レッドストーン更新に反応するカスタムコンポーネントを含める必要があります。</p><div class="danger custom-block"><p class="custom-block-title">REDSTONE UPDATES</p><p>レッドストーン更新は、ブロックが受け取るレッドストーン電力レベルの変化だけで発生するわけではありません。 ブロックの設置や、そのブロックを含むチャンクの読み込みでも発生するため、ドアのように動作するブロックを作ることは現在できません。</p></div>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`minecraft:block &gt; components`);
      } else {
        return [
          createTextVNode("minecraft:block > components")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;minecraft:redstone_consumer&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;min_power&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;wiki:redstone_update_logging&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Custom Component Script`);
      } else {
        return [
          createTextVNode("Custom Component Script")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">import</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">system</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> } </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"> &quot;@minecraft/server&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">/** </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">@type</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"> {import(&quot;@minecraft/server&quot;).BlockCustomComponent}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"> */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> BlockRedstoneUpdateLoggingComponent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">    onRedstoneUpdate</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">({ </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">powerLevel</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">        console</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">log</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;Block received a redstone update with power level&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">powerLevel</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">};</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">system</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">beforeEvents</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">startup</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">subscribe</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(({ </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">blockComponentRegistry</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">=&gt;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">    blockComponentRegistry</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">registerCustomComponent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">        &quot;wiki:redstone_update_logging&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">        BlockRedstoneUpdateLoggingComponent</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="レッドストーンプロデューサー" tabindex="-1">レッドストーンプロデューサー <a class="header-anchor" href="#レッドストーンプロデューサー" aria-label="Permalink to &quot;レッドストーンプロデューサー&quot;">​</a></h2><p>回路へレッドストーン電力を供給するブロックは、<strong>レッドストーンプロデューサー</strong> と呼ばれます。 ほかのレッドストーンコンポーネントは、プロデューサーが許可する方向からその電力を受け取るために、プロデューサーへ接続できます。</p><p>レッドストーンブロックを除き、すべてのプロデューサーは 1 方向に強い電力も供給します。この強い電力は <a href="#redstone-conductors">レッドストーン導体</a> によって導通され、回路にさらに多くのコンポーネントを追加できます。</p><p>下の図では、レッドストーントーチが回路のレッドストーンプロデューサーとして機能しており、下方向以外のすべての方向から接続できます。 さらに、その上のブロックへ強い電力を供給しています。</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "producer.png",
    alt: "Diagram of a redstone torch with two powered repeaters pointing outwards to the left and right and a strongly powered concrete block above it.",
    width: "384",
    pixelated: ""
  }, null, _parent));
  _push(`<h3 id="レッドストーンプロデューサーの作成" tabindex="-1">レッドストーンプロデューサーの作成 <a class="header-anchor" href="#レッドストーンプロデューサーの作成" aria-label="Permalink to &quot;レッドストーンプロデューサーの作成&quot;">​</a></h3><p>カスタムレッドストーンプロデューサーを作るには、ブロックに <a href="/blocks/block-components#redstone-producer">redstone producer</a> コンポーネントを含める必要があります。</p><p>上の図の点灯したレッドストーントーチのレッドストーンプロデューサーコンポーネントは次のようになります。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`minecraft:block &gt; components`);
      } else {
        return [
          createTextVNode("minecraft:block > components")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;minecraft:redstone_producer&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;power&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">15</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;strongly_powered_face&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;up&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;connected_faces&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;up&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;north&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;south&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;west&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;east&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blocks/redstone-components.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const redstoneComponents = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  redstoneComponents as default
};
