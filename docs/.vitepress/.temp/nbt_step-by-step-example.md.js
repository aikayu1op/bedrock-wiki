import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/images/nbt/step-by-step-example/step1.png";
const _imports_1 = "/assets/images/nbt/step-by-step-example/step2.png";
const _imports_2 = "/assets/images/nbt/step-by-step-example/step3.png";
const _imports_3 = "/assets/images/nbt/step-by-step-example/step4.png";
const _imports_4 = "/assets/images/nbt/step-by-step-example/step5.png";
const _imports_5 = "/assets/images/nbt/step-by-step-example/step6.png";
const _imports_6 = "/assets/images/nbt/step-by-step-example/step7.png";
const _imports_7 = "/assets/images/nbt/step-by-step-example/step8.png";
const _imports_8 = "/assets/images/nbt/step-by-step-example/step9.png";
const _imports_9 = "/assets/images/nbt/step-by-step-example/step10.png";
const _imports_10 = "/assets/images/nbt/step-by-step-example/step11.png";
const _imports_11 = "/assets/images/nbt/step-by-step-example/step12.png";
const __pageData = JSON.parse('{"title":"NBT 読み取りの例","description":"NBT の読み取りを段階的に説明します。","frontmatter":{"title":"NBT 読み取りの例","category":"NBT in Depth","mentions":["conmaster2112"],"tags":["expert"],"description":"NBT の読み取りを段階的に説明します。"},"headers":[{"level":3,"title":"NBT のサンプルファイル","slug":"nbt-のサンプルファイル","link":"#nbt-のサンプルファイル","children":[]}],"relativePath":"nbt/step-by-step-example.md","filePath":"nbt/step-by-step-example.md"}');
const _sfc_main = { name: "nbt/step-by-step-example.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>この例に進む前に、まず NBT の全体像に慣れておく必要があります。<em><a href="/nbt/nbt-in-depth">NBT を深く知る</a></em> を参照してください。 これから、NBT を段階的に読み取る方法を示します。読み取るデータの形式は、だいたい次のようになります。</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">&quot;&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">:{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;myText&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;My NBT text&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;my Int32 Number&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">456</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>何を読めばよいかわからないときは、次の 1 バイトを読みます。</p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><p>何を読んだのでしょうか。数値 10 を読みました。これは compound を読むという意味です。また、今はこのファイルの root 要素プロパティにいるとわかっているので、root 要素プロパティの名前も読む必要があります。名前は文字列なので、まずテキストの長さをバイト数で読みます。これは Int16 <em>(Short)</em> で書かれています。</p><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p><p>root 要素プロパティの名前サイズは 0 なので、これ以上のバイトは読みません。次に何を読むかまだわからないので、もう 1 バイト読みましょう。</p><p><img${ssrRenderAttr("src", _imports_2)} alt=""></p><p>root compound の次のプロパティが string 型であることはすでにわかっていますが、プロパティ値を読む前に、まずその名前を string として読みます。そこで、さらに 2 バイト読んで、プロパティ名の文字列長を取得します。</p><p><img${ssrRenderAttr("src", _imports_3)} alt=""></p><p>プロパティ名の長さが 6 バイトだとわかりました。では、次の 6 バイトを読みましょう。</p><p><img${ssrRenderAttr("src", _imports_4)} alt=""></p><p>これでプロパティ名を読み取れました。UTF-8 エンコードを使えばテキストとして <code class="shiki"><span>myText</span></code> と取得できます。そして、このプロパティの型は string なので、同じ手順を繰り返します。 次の Int16（2 バイト）をもう一度読み、文字列値の長さを確認します。</p><p><img${ssrRenderAttr("src", _imports_5)} alt=""></p><p>このプロパティの文字列長は 0x0B、つまり 11 なので、さらに 11 バイト読みます。</p><p><img${ssrRenderAttr("src", _imports_6)} alt=""></p><p>読み取ったバイト列を UTF-8 エンコードに通すと、再び <code class="shiki"><span>My NBT text</span></code> という値が返ります。 次は何をすればいいのでしょうか。わからないなら、次のバイトを読んで確認しましょう。</p><p><img${ssrRenderAttr("src", _imports_7)} alt=""></p><p>ここでは type 3 を読みます。3 は Int16 で、4 バイトを含みます。ただし数値を読む前に、このプロパティ名をもう一度確認しなければなりません。では、次の 2 バイトを読んで、このプロパティ名の長さを取得します。</p><p><img${ssrRenderAttr("src", _imports_8)} alt=""></p><p>名前の長さが 0x0f（15）だとわかりました。では、次の 15 バイトを読み、UTF-8 エンコードに通します。</p><p><img${ssrRenderAttr("src", _imports_9)} alt=""></p><p>これでこのプロパティ名は <code class="shiki"><span>my Int32 Number</span></code> です。次に、この Int32、つまり 4 バイトを読みます。</p><p><img${ssrRenderAttr("src", _imports_10)} alt=""></p><p>値 <code class="shiki"><span>0x01c8</span></code>（456）の Int32 を読みました。 次に何をすればよいかわからない場合は、次のプロパティの型を表す 1 バイトをもう一度読みます。</p><p><img${ssrRenderAttr("src", _imports_11)} alt=""></p><p>0x00（空のバイト）を読みました。これで root compound の終わりです。compound の読み取りは終了し、しかもそれが <strong><em>root</em></strong> compound なので、これで全体の読み取りが完了します。</p><h3 id="nbt-のサンプルファイル" tabindex="-1">NBT のサンプルファイル <a class="header-anchor" href="#nbt-のサンプルファイル" aria-label="Permalink to &quot;NBT のサンプルファイル&quot;">​</a></h3><p>これは、この例で使っているファイルです。</p>`);
  _push(ssrRenderComponent(_component_Button, {
    link: "/assets/nbt/nbt_example_file.nbt",
    download: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` NBT ファイルをダウンロード `);
      } else {
        return [
          createTextVNode(" NBT ファイルをダウンロード ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="tip custom-block"><p class="custom-block-title">覚えておきたい重要な点</p><ul><li>ファイルには NBT Bedrock Header が含まれている場合があります。その可能性を覚えておいてください。<a href="/nbt/nbt-in-depth">NBT を深く知る</a>&gt;<a href="/nbt/nbt-in-depth#bedrock-nbt-file-header">NBT Bedrock Headers</a> を参照してください。</li><li>終端の null バイトは NBT の読み取りそのものを終了するのではなく、現在の compound の終わりを示すだけです。</li><li>読み取る数値はすべて little-endian で読む必要があります。<a href="/nbt/nbt-in-depth">NBT を深く知る</a>&gt;<a href="/nbt/nbt-in-depth#little-endian">little-endian</a> を参照してください。</li><li>ファイル内の最初の root NBT 要素は compound か list に限られます。NBT ファイルの root 要素/プロパティにも名前があります。ほとんど空でも、読み取っておかないと扱いがややこしくなります。</li></ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nbt/step-by-step-example.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stepByStepExample = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stepByStepExample as default
};
