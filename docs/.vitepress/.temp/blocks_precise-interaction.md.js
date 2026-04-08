import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/images/blocks/precise-interaction/showcase.png";
const _imports_1 = "/assets/images/blocks/precise-interaction/pigeonholes.png";
const _imports_2 = "/assets/images/blocks/precise-interaction/double_flower_pot.png";
const __pageData = JSON.parse('{"title":"Precise Interaction","description":"Learn how to interact with different parts of the same block.","frontmatter":{"title":"Precise Interaction","description":"Learn how to interact with different parts of the same block.","category":"Tutorials","tags":["expert","scripting"],"license":true,"mentions":["QuazChick","SmokeyStack"],"hidden":true},"headers":[{"level":2,"title":"How it Works","slug":"how-it-works","link":"#how-it-works","children":[]},{"level":2,"title":"FaceSelectionPlains Class","slug":"faceselectionplains-class","link":"#faceselectionplains-class","children":[{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]},{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]}]},{"level":2,"title":"SelectionBoxes Class","slug":"selectionboxes-class","link":"#selectionboxes-class","children":[{"level":3,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[]},{"level":3,"title":"Usage","slug":"usage-1","link":"#usage-1","children":[]}]},{"level":2,"title":"Pigeonholes Example","slug":"pigeonholes-example","link":"#pigeonholes-example","children":[]},{"level":2,"title":"Double Flower Pot Example","slug":"double-flower-pot-example","link":"#double-flower-pot-example","children":[]},{"level":2,"title":"Importing Scripts","slug":"importing-scripts","link":"#importing-scripts","children":[]},{"level":2,"title":"Download Example Pack","slug":"download-example-pack","link":"#download-example-pack","children":[]}],"relativePath":"blocks/precise-interaction.md","filePath":"blocks/precise-interaction.md"}');
const _sfc_main = { name: "blocks/precise-interaction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Spoiler = resolveComponent("Spoiler");
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="tip custom-block"><p class="custom-block-title">FORMAT VERSION 1.26.10</p><p>This tutorial assumes an advanced understanding of blocks and scripting. Check out the <a href="/blocks/blocks-intro">blocks</a> and <a href="/scripting/scripting-intro">scripting</a> guides before starting.</p></div><div class="danger custom-block"><p class="custom-block-title"><a href="https://bugs.mojang.com/browse/MCPE-223452" target="_blank" rel="noreferrer">MCPE-223452</a></p><p>An issue with the <code class="shiki"><span>faceLocation</span></code> property of many events means that it is not always relative to the bottom north-west corner of a block depending on the block&#39;s position in the world. As a result, precise interaction does not work correctly and the following method should not be used until this bug is fixed.</p></div><p>The ability to create custom blocks that the player can interact with can be very basic to implement, yet still allow for complex functionality. However, sometimes the default interaction mode, which is based on simply right-clicking or tapping the block without location-specific conditions, is not enough to achieve the desired functionality.</p><p>For example, what if you want to create a block that has multiple buttons on one side, and each one triggers a different action? Or a segment display, where multiple individually-lit lamps can be contained within one block.</p><p>This is where precise interaction comes in! The following methods of precise interaction allow you to define multiple areas in a block that can be interacted with separately, and assign different functions to each area. In this tutorial, we will show you how to add precise interaction to your blocks using scripts, with examples of each method.</p><p><strong>Note:</strong> Precise interaction does not enable blocks to have multiple/custom-shaped <a href="/blocks/block-components#selection-box"><code class="shiki"><span>minecraft:selection_box</span></code></a> components. The selection box must be within all defined areas for precise interaction to function properly.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Showcase image displaying example Pigeonholes and Double Flower Pot blocks"></p><h2 id="how-it-works" tabindex="-1">How it Works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How it Works&quot;">​</a></h2><p>The provided methods of precise interaction use <code class="shiki"><span>faceLocation</span></code>, a property of the <a href="https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/blockcomponentplayerinteractevent" target="_blank" rel="noreferrer">player interact event</a>.</p><p>This value tells us where on the block&#39;s <code class="shiki"><span>minecraft:selection_box</span></code> was selected/hit, which is what precise interaction relies on.</p><h2 id="faceselectionplains-class" tabindex="-1">FaceSelectionPlains Class <a class="header-anchor" href="#faceselectionplains-class" aria-label="Permalink to &quot;FaceSelectionPlains Class&quot;">​</a></h2><p>This class allows you to define 2D areas on a block&#39;s face and get the selected plain.</p><p>To use this method for precise interaction, create the file <code class="shiki"><span>BP/scripts/utilities/face_selection_plains.js</span></code> and paste the below code into it.</p>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "FaceSelectionPlains Code" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`BP/scripts/utilities/face_selection_plains.js`);
            } else {
              return [
                createTextVNode("BP/scripts/utilities/face_selection_plains.js")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="language-js vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> } </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}> &quot;@minecraft/server&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> isInRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>min</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>max</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> value</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &gt;= </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>min</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &amp;&amp; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &lt;= </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>max</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>export</span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}> default</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> FaceSelectionPlains</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>    /**</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * Allows you to define 2D areas on a block&#39;s face and get the selected plain.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     *</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {Object[]}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> plains</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> Spread array defining the 2D areas on a block&#39;s face which may be selected.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {[number, number]}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> plains[].origin</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> [U, V] array defining the offset of the plain from the top left of the block face in pixels.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {[number, number]}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> plains[].size</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> [U, V] array defining the size of the plain, extending from the top left in pixels.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {string}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> [plains[].name]</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> Custom name to easily identify this plain when it is selected.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     */</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    constructor</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(...</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plains</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        this</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plains</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plains</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>    /**</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {Object}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> selection</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {Direction}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> selection.face</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {import(&quot;@minecraft/server&quot;).Vector3}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> selection.faceLocation</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     *</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {Object}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> [options]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {boolean}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> [options.invertU]</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> Horizontal axis extends \`right -&gt; left\` rather than \`left -&gt; right\` if true.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {boolean}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> [options.invertV]</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> Vertical axis extends \`bottom -&gt; top\` rather than \`top -&gt; bottom\` if true.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     *</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@returns</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> Selected plain ID, or plain index if an ID is not provided. If no plains apply to the selection, \`undefined\` is returned.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     */</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>    getSelected</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>selection</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>options</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}>face</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}>faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> } = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>selection</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>        // Create a new object so the original is not mutated</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        let</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = { ...</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> };</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> horizontalAxis</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>face</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>East</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> || </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>face</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>West</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> ? </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;z&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> : </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;x&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> verticalAxis</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>face</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Up</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> || </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>face</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Down</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> ? </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;z&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> : </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;y&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>face</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> !== </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Down</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>verticalAxis</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> - </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>verticalAxis</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>];</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>face</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> !== </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>South</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &amp;&amp; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>face</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> !== </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>West</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>            location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>horizontalAxis</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> - </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>horizontalAxis</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>];</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>options</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>invertU</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>horizontalAxis</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> - </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>horizontalAxis</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>];</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>options</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>invertV</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>verticalAxis</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> - </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>verticalAxis</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>];</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        for</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>let</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> i</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>i</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &lt; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>this</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plains</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>length</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>i</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>++) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>            const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> plain</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>this</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plains</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>i</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>];</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>            const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> inHorizontalRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>isInRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>                location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>horizontalAxis</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>                plain</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>origin</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] / </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plain</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>origin</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] + </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plain</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>size</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]) / </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            );</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>            const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> inVerticalRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>isInRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>                location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>verticalAxis</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>                plain</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>origin</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] / </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plain</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>origin</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] + </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plain</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>size</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]) / </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            );</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>            if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>inHorizontalRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &amp;&amp; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>inVerticalRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> plain</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>name</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> ?? </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>i</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}><span class="line-number"${_scopeId}>18</span><br${_scopeId}><span class="line-number"${_scopeId}>19</span><br${_scopeId}><span class="line-number"${_scopeId}>20</span><br${_scopeId}><span class="line-number"${_scopeId}>21</span><br${_scopeId}><span class="line-number"${_scopeId}>22</span><br${_scopeId}><span class="line-number"${_scopeId}>23</span><br${_scopeId}><span class="line-number"${_scopeId}>24</span><br${_scopeId}><span class="line-number"${_scopeId}>25</span><br${_scopeId}><span class="line-number"${_scopeId}>26</span><br${_scopeId}><span class="line-number"${_scopeId}>27</span><br${_scopeId}><span class="line-number"${_scopeId}>28</span><br${_scopeId}><span class="line-number"${_scopeId}>29</span><br${_scopeId}><span class="line-number"${_scopeId}>30</span><br${_scopeId}><span class="line-number"${_scopeId}>31</span><br${_scopeId}><span class="line-number"${_scopeId}>32</span><br${_scopeId}><span class="line-number"${_scopeId}>33</span><br${_scopeId}><span class="line-number"${_scopeId}>34</span><br${_scopeId}><span class="line-number"${_scopeId}>35</span><br${_scopeId}><span class="line-number"${_scopeId}>36</span><br${_scopeId}><span class="line-number"${_scopeId}>37</span><br${_scopeId}><span class="line-number"${_scopeId}>38</span><br${_scopeId}><span class="line-number"${_scopeId}>39</span><br${_scopeId}><span class="line-number"${_scopeId}>40</span><br${_scopeId}><span class="line-number"${_scopeId}>41</span><br${_scopeId}><span class="line-number"${_scopeId}>42</span><br${_scopeId}><span class="line-number"${_scopeId}>43</span><br${_scopeId}><span class="line-number"${_scopeId}>44</span><br${_scopeId}><span class="line-number"${_scopeId}>45</span><br${_scopeId}><span class="line-number"${_scopeId}>46</span><br${_scopeId}><span class="line-number"${_scopeId}>47</span><br${_scopeId}><span class="line-number"${_scopeId}>48</span><br${_scopeId}><span class="line-number"${_scopeId}>49</span><br${_scopeId}><span class="line-number"${_scopeId}>50</span><br${_scopeId}><span class="line-number"${_scopeId}>51</span><br${_scopeId}><span class="line-number"${_scopeId}>52</span><br${_scopeId}><span class="line-number"${_scopeId}>53</span><br${_scopeId}><span class="line-number"${_scopeId}>54</span><br${_scopeId}><span class="line-number"${_scopeId}>55</span><br${_scopeId}><span class="line-number"${_scopeId}>56</span><br${_scopeId}><span class="line-number"${_scopeId}>57</span><br${_scopeId}><span class="line-number"${_scopeId}>58</span><br${_scopeId}><span class="line-number"${_scopeId}>59</span><br${_scopeId}><span class="line-number"${_scopeId}>60</span><br${_scopeId}><span class="line-number"${_scopeId}>61</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode(_component_CodeHeader, null, {
            default: withCtx(() => [
              createTextVNode("BP/scripts/utilities/face_selection_plains.js")
            ]),
            _: 1
          }),
          createVNode("div", { class: "language-js vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "js"),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "import"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Direction"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " } "),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "from"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, ' "@minecraft/server"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " isInRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "value"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "min"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "max"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "=>"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " value"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " >= "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "min"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " && "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "value"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " <= "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "max"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "export"),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, " default"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, " class"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " FaceSelectionPlains"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "    /**")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * Allows you to define 2D areas on a block's face and get the selected plain.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     *")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {Object[]}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " plains"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " Spread array defining the 2D areas on a block's face which may be selected.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {[number, number]}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " plains[].origin"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " [U, V] array defining the offset of the plain from the top left of the block face in pixels.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {[number, number]}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " plains[].size"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " [U, V] array defining the size of the plain, extending from the top left in pixels.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {string}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " [plains[].name]"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " Custom name to easily identify this plain when it is selected.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     */")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    constructor"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "(..."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plains"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        this"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plains"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plains"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "    /**")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {Object}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " selection")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {Direction}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " selection.face")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, ' {import("@minecraft/server").Vector3}'),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " selection.faceLocation")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     *")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {Object}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " [options]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {boolean}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " [options.invertU]"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " Horizontal axis extends `right -> left` rather than `left -> right` if true.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {boolean}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " [options.invertV]"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " Vertical axis extends `bottom -> top` rather than `top -> bottom` if true.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     *")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@returns"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " Selected plain ID, or plain index if an ID is not provided. If no plains apply to the selection, `undefined` is returned.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     */")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "    getSelected"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "selection"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "options"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " { "),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, "face"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, "faceLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " } = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "selection"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "        // Create a new object so the original is not mutated")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        let"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = { ..."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "faceLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " };")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " horizontalAxis"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "face"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Direction"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "East"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " || "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "face"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Direction"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "West"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ? "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"z"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " : "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"x"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " verticalAxis"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "face"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Direction"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Up"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " || "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "face"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Direction"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Down"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ? "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"z"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " : "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"y"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "face"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " !== "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Direction"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Down"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "verticalAxis"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] = "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " - "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "verticalAxis"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "];")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "face"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " !== "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Direction"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "South"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " && "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "face"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " !== "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Direction"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "West"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "            location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "horizontalAxis"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] = "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " - "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "horizontalAxis"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "];")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "options"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "?."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "invertU"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "horizontalAxis"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] = "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " - "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "horizontalAxis"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "];")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "options"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "?."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "invertV"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "verticalAxis"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] = "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " - "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "verticalAxis"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "];")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        for"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "let"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " i"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "; "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "i"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " < "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "this"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plains"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "length"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "; "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "i"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "++) {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "            const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " plain"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "this"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plains"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "i"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "];")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "            const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " inHorizontalRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "isInRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "(")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "                location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "horizontalAxis"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "                plain"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "origin"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] / "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plain"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "origin"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] + "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plain"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "size"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]) / "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            );")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "            const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " inVerticalRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "isInRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "(")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "                location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "verticalAxis"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "                plain"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "origin"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] / "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plain"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "origin"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] + "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plain"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "size"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]) / "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            );")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "            if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "inHorizontalRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " && "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "inVerticalRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "return"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " plain"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "name"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ?? "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "i"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "2"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "3"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "4"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "5"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "6"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "7"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "8"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "9"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "10"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "11"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "12"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "13"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "14"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "15"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "16"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "17"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "18"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "19"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "20"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "21"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "22"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "23"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "24"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "25"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "26"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "27"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "28"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "29"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "30"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "31"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "32"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "33"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "34"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "35"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "36"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "37"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "38"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "39"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "40"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "41"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "42"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "43"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "44"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "45"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "46"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "47"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "48"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "49"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "50"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "51"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "52"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "53"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "54"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "55"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "56"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "57"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "58"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "59"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "60"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "61"),
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><h4 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h4><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">new</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"> FaceSelectionPlains</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(...</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">plains</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">number</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">number</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">size</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">number</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">number</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">name</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">?: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">string</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }[])</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Creates a new <code class="shiki"><span>FaceSelectionPlains</span></code> instance.</p>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Parameters" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><p${_scopeId}><strong${_scopeId}>plains</strong>: <code class="shiki"${_scopeId}><span${_scopeId}>Object[]</span></code></p><p${_scopeId}>Array defining the 2D areas on a block&#39;s face which may be selected.</p><ul${_scopeId}><li${_scopeId}><p${_scopeId}><strong${_scopeId}>origin</strong>: <code class="shiki"${_scopeId}><span${_scopeId}>[number, number]</span></code></p><p${_scopeId}>[U, V] array defining the offset of the plain from the top left of the block face.</p></li><li${_scopeId}><p${_scopeId}><strong${_scopeId}>size</strong>: <code class="shiki"${_scopeId}><span${_scopeId}>[number, number]</span></code></p><p${_scopeId}>[U, V] array defining the size of the plain, extending from the top left.</p></li><li${_scopeId}><p${_scopeId}><strong${_scopeId}>name</strong>?: <code class="shiki"${_scopeId}><span${_scopeId}>string</span></code></p><p${_scopeId}>Custom name to easily identify this plain when it is selected.</p></li></ul></li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("p", null, [
                createVNode("strong", null, "plains"),
                createTextVNode(": "),
                createVNode("code", { class: "shiki" }, [
                  createVNode("span", null, "Object[]")
                ])
              ]),
              createVNode("p", null, "Array defining the 2D areas on a block's face which may be selected."),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("p", null, [
                    createVNode("strong", null, "origin"),
                    createTextVNode(": "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "[number, number]")
                    ])
                  ]),
                  createVNode("p", null, "[U, V] array defining the offset of the plain from the top left of the block face.")
                ]),
                createVNode("li", null, [
                  createVNode("p", null, [
                    createVNode("strong", null, "size"),
                    createTextVNode(": "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "[number, number]")
                    ])
                  ]),
                  createVNode("p", null, "[U, V] array defining the size of the plain, extending from the top left.")
                ]),
                createVNode("li", null, [
                  createVNode("p", null, [
                    createVNode("strong", null, "name"),
                    createTextVNode("?: "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "string")
                    ])
                  ]),
                  createVNode("p", null, "Custom name to easily identify this plain when it is selected.")
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li><h4 id="getselected" tabindex="-1">getSelected <a class="header-anchor" href="#getselected" aria-label="Permalink to &quot;getSelected&quot;">​</a></h4><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">getSelected</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">selection</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">face:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"> Direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">Vector3</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">options</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">?: { invertU?</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"> boolean</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">invertV</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">?: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">boolean</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }): </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">number</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> | </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">string</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> | </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">undefined</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Returns the involved plain&#39;s array index, or name if provided. If no plain is selected, <code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">undefined</span></code> is returned.</p>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Parameters" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><p${_scopeId}><strong${_scopeId}>selection</strong>: <code class="shiki"${_scopeId}><span${_scopeId}>Object</span></code></p><p${_scopeId}>Object containing details about the selection.</p><ul${_scopeId}><li${_scopeId}><p${_scopeId}><strong${_scopeId}>face</strong>: <a href="https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/direction" target="_blank" rel="noreferrer"${_scopeId}><code class="shiki"${_scopeId}><span${_scopeId}>Direction</span></code></a></p><p${_scopeId}>The selected face of the block.</p></li><li${_scopeId}><p${_scopeId}><strong${_scopeId}>faceLocation</strong>: <a href="https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/vector3" target="_blank" rel="noreferrer"${_scopeId}><code class="shiki"${_scopeId}><span${_scopeId}>Vector3</span></code></a></p><p${_scopeId}>Selection location relative to the bottom north-west corner of the block.</p></li></ul></li><li${_scopeId}><p${_scopeId}><strong${_scopeId}>options</strong>?: <code class="shiki"${_scopeId}><span${_scopeId}>Object</span></code></p><p${_scopeId}>Optionally configure how the selected plain is calculated.</p><ul${_scopeId}><li${_scopeId}><p${_scopeId}><strong${_scopeId}>invertU</strong>?: <code class="shiki"${_scopeId}><span${_scopeId}>boolean</span></code></p><p${_scopeId}>Horizontal axis goes <code class="shiki"${_scopeId}><span${_scopeId}>right -&gt; left</span></code> rather than <code class="shiki"${_scopeId}><span${_scopeId}>left -&gt; right</span></code> if true.</p></li><li${_scopeId}><p${_scopeId}><strong${_scopeId}>invertV</strong>?: <code class="shiki"${_scopeId}><span${_scopeId}>boolean</span></code></p><p${_scopeId}>Vertical axis goes <code class="shiki"${_scopeId}><span${_scopeId}>bottom -&gt; top</span></code> rather than <code class="shiki"${_scopeId}><span${_scopeId}>top -&gt; bottom</span></code> if true.</p></li></ul></li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("p", null, [
                createVNode("strong", null, "selection"),
                createTextVNode(": "),
                createVNode("code", { class: "shiki" }, [
                  createVNode("span", null, "Object")
                ])
              ]),
              createVNode("p", null, "Object containing details about the selection."),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("p", null, [
                    createVNode("strong", null, "face"),
                    createTextVNode(": "),
                    createVNode("a", {
                      href: "https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/direction",
                      target: "_blank",
                      rel: "noreferrer"
                    }, [
                      createVNode("code", { class: "shiki" }, [
                        createVNode("span", null, "Direction")
                      ])
                    ])
                  ]),
                  createVNode("p", null, "The selected face of the block.")
                ]),
                createVNode("li", null, [
                  createVNode("p", null, [
                    createVNode("strong", null, "faceLocation"),
                    createTextVNode(": "),
                    createVNode("a", {
                      href: "https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/vector3",
                      target: "_blank",
                      rel: "noreferrer"
                    }, [
                      createVNode("code", { class: "shiki" }, [
                        createVNode("span", null, "Vector3")
                      ])
                    ])
                  ]),
                  createVNode("p", null, "Selection location relative to the bottom north-west corner of the block.")
                ])
              ])
            ]),
            createVNode("li", null, [
              createVNode("p", null, [
                createVNode("strong", null, "options"),
                createTextVNode("?: "),
                createVNode("code", { class: "shiki" }, [
                  createVNode("span", null, "Object")
                ])
              ]),
              createVNode("p", null, "Optionally configure how the selected plain is calculated."),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("p", null, [
                    createVNode("strong", null, "invertU"),
                    createTextVNode("?: "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "boolean")
                    ])
                  ]),
                  createVNode("p", null, [
                    createTextVNode("Horizontal axis goes "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "right -> left")
                    ]),
                    createTextVNode(" rather than "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "left -> right")
                    ]),
                    createTextVNode(" if true.")
                  ])
                ]),
                createVNode("li", null, [
                  createVNode("p", null, [
                    createVNode("strong", null, "invertV"),
                    createTextVNode("?: "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "boolean")
                    ])
                  ]),
                  createVNode("p", null, [
                    createTextVNode("Vertical axis goes "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "bottom -> top")
                    ]),
                    createTextVNode(" rather than "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "top -> bottom")
                    ]),
                    createTextVNode(" if true.")
                  ])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><p>The below example would split the targeted block face into quarters:</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/scripts/blocks/example.js`);
      } else {
        return [
          createTextVNode("BP/scripts/blocks/example.js")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">import</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">world</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> } </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"> &quot;@minecraft/server&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">import</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"> FaceSelectionPlains</span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"> from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"> &quot;../utilities/face_selection_plains&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> quadrants</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">new</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"> FaceSelectionPlains</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">] },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">] },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">] },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">] }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Additionally, names can be provided to easily identify each plain:</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> quadrants</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">new</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"> FaceSelectionPlains</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">name:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"> &quot;top_left&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">name:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"> &quot;top_right&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">name:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"> &quot;bottom_left&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">name:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"> &quot;bottom_right&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>This could be used in a <a href="/blocks/block-events">custom component</a> to get the selected quadrant:</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> BlockQuadrantInteractionComponent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">    onPlayerInteract</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">({ </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">face</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">        // Returns the selected area&#39;s index (0, 1, 2 or 3), or name if provided (e.g. &quot;top_left&quot;).</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">        // If no plain was selected, \`undefined\` is returned.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> selectedQuadrant</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">quadrants</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">getSelected</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">({</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">            face</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">            faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        });</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">        world</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">sendMessage</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">\`Quadrant </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">\${</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">selectedQuadrant</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"> was selected!\`</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="selectionboxes-class" tabindex="-1">SelectionBoxes Class <a class="header-anchor" href="#selectionboxes-class" aria-label="Permalink to &quot;SelectionBoxes Class&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>As with the <code class="shiki"><span>minecraft:selection_box</span></code> and <code class="shiki"><span>minecraft:collision_box</span></code> components, do not use Blockbench&#39;s displayed position values when setting up your SelectionBoxes as they are measured from the north-west, rather than the north-east. Instead, use the origin value from the exported <code class="shiki"><span>.geo.json</span></code> file.</p><p>If you wish to use Blockbench&#39;s values, the <code class="shiki"><span>invertX</span></code> option should be set to true in <a href="#getselected-1"><code class="shiki"><span>getSelected</span></code></a>.</p></div><p>This class allows you to define 3D areas in a block and get the box which the face selection lies within.</p><p>To use this method for precise interaction, create the file <code class="shiki"><span>BP/scripts/utilities/selection_boxes.js</span></code> and paste the below code into it.</p>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "SelectionBoxes Code" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`BP/scripts/utilities/selection_boxes.js`);
            } else {
              return [
                createTextVNode("BP/scripts/utilities/selection_boxes.js")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="language-js vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> isInRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>min</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>max</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> value</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &gt;= </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>min</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &amp;&amp; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &lt;= </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>max</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>export</span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}> default</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> SelectionBoxes</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>    /**</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * Allows you to define 3D areas in a block and get the box which the face selection lies within.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     *</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {Object[]}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> boxes</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> Array defining the 3D areas within a block which may be selected.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {[number, number, number]}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> boxes[].origin</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> [X, Y, Z] array defining the offset of the box from the block&#39;s horizontal middle and vertical bottom in pixels, extending from the north-east.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {[number, number, number]}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> boxes[].size</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> [X, Y, Z] array defining the size of the box in pixels, extending from the north-east.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {string}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> [boxes[].name]</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> Custom name to easily identify this box when it is selected.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     */</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    constructor</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(...</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>boxes</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        this</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>boxes</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>boxes</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>    /**</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * Get the box which the \`faceLocation\` lies within.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     *</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {import(&quot;@minecraft/server&quot;).Vector3}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> Selection location relative to the bottom north-west corner of the block.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     *</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {Object}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> [options]</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> Optionally configure how the selected box is calculated.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {boolean}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> [options.invertX]</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> X axis extends \`west -&gt; east\` rather than \`east -&gt; west\` if true, following [Blockbench](https://blockbench.net)&#39;s displayed positions.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {boolean}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> [options.invertY]</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> Y axis extends \`up -&gt; down\` rather than \`down -&gt; up\` if true.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@param</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {boolean}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> [options.invertZ]</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> Z axis extends \`south -&gt; north\` rather than \`north -&gt; south\` if true.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     *</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     * </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@returns</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {(string|number|undefined)}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> Selected box name, or box index if a name is not provided. If no boxes apply to the selection, \`undefined\` is returned.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>     */</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>    getSelected</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>options</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>        // Create a new object so the original is not mutated</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        let</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = { ...</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> };</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>        // X is inverted to ensure measurements are relative to the bottom north-east.</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>options</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>invertX</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> - </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>options</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>invertY</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>y</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> - </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>y</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>options</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>?.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>invertZ</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> - </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        for</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>let</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> i</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>i</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &lt; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>this</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>boxes</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>length</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>i</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>++) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>            const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> box</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>this</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>boxes</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>i</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>];</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>            const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>                x:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> box</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>origin</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] + </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>                y:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> box</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>origin</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>                z:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> box</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>origin</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] + </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            };</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>            const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> to</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>                x:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> + </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>box</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>size</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>                y:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>y</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> + </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>box</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>size</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>                z:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> + </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>box</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>size</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            };</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>            const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> inXRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>isInRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> / </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>to</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> / </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>            const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> inYRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>isInRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>y</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>y</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> / </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>to</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>y</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> / </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>            const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> inZRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>isInRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> / </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>to</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> / </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>            if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>inXRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &amp;&amp; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>inYRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &amp;&amp; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>inZRange</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> box</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>name</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> ?? </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>i</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}><span class="line-number"${_scopeId}>18</span><br${_scopeId}><span class="line-number"${_scopeId}>19</span><br${_scopeId}><span class="line-number"${_scopeId}>20</span><br${_scopeId}><span class="line-number"${_scopeId}>21</span><br${_scopeId}><span class="line-number"${_scopeId}>22</span><br${_scopeId}><span class="line-number"${_scopeId}>23</span><br${_scopeId}><span class="line-number"${_scopeId}>24</span><br${_scopeId}><span class="line-number"${_scopeId}>25</span><br${_scopeId}><span class="line-number"${_scopeId}>26</span><br${_scopeId}><span class="line-number"${_scopeId}>27</span><br${_scopeId}><span class="line-number"${_scopeId}>28</span><br${_scopeId}><span class="line-number"${_scopeId}>29</span><br${_scopeId}><span class="line-number"${_scopeId}>30</span><br${_scopeId}><span class="line-number"${_scopeId}>31</span><br${_scopeId}><span class="line-number"${_scopeId}>32</span><br${_scopeId}><span class="line-number"${_scopeId}>33</span><br${_scopeId}><span class="line-number"${_scopeId}>34</span><br${_scopeId}><span class="line-number"${_scopeId}>35</span><br${_scopeId}><span class="line-number"${_scopeId}>36</span><br${_scopeId}><span class="line-number"${_scopeId}>37</span><br${_scopeId}><span class="line-number"${_scopeId}>38</span><br${_scopeId}><span class="line-number"${_scopeId}>39</span><br${_scopeId}><span class="line-number"${_scopeId}>40</span><br${_scopeId}><span class="line-number"${_scopeId}>41</span><br${_scopeId}><span class="line-number"${_scopeId}>42</span><br${_scopeId}><span class="line-number"${_scopeId}>43</span><br${_scopeId}><span class="line-number"${_scopeId}>44</span><br${_scopeId}><span class="line-number"${_scopeId}>45</span><br${_scopeId}><span class="line-number"${_scopeId}>46</span><br${_scopeId}><span class="line-number"${_scopeId}>47</span><br${_scopeId}><span class="line-number"${_scopeId}>48</span><br${_scopeId}><span class="line-number"${_scopeId}>49</span><br${_scopeId}><span class="line-number"${_scopeId}>50</span><br${_scopeId}><span class="line-number"${_scopeId}>51</span><br${_scopeId}><span class="line-number"${_scopeId}>52</span><br${_scopeId}><span class="line-number"${_scopeId}>53</span><br${_scopeId}><span class="line-number"${_scopeId}>54</span><br${_scopeId}><span class="line-number"${_scopeId}>55</span><br${_scopeId}><span class="line-number"${_scopeId}>56</span><br${_scopeId}><span class="line-number"${_scopeId}>57</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode(_component_CodeHeader, null, {
            default: withCtx(() => [
              createTextVNode("BP/scripts/utilities/selection_boxes.js")
            ]),
            _: 1
          }),
          createVNode("div", { class: "language-js vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "js"),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " isInRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "value"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "min"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "max"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "=>"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " value"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " >= "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "min"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " && "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "value"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " <= "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "max"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "export"),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, " default"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, " class"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " SelectionBoxes"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "    /**")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * Allows you to define 3D areas in a block and get the box which the face selection lies within.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     *")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {Object[]}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " boxes"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " Array defining the 3D areas within a block which may be selected.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {[number, number, number]}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " boxes[].origin"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " [X, Y, Z] array defining the offset of the box from the block's horizontal middle and vertical bottom in pixels, extending from the north-east.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {[number, number, number]}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " boxes[].size"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " [X, Y, Z] array defining the size of the box in pixels, extending from the north-east.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {string}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " [boxes[].name]"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " Custom name to easily identify this box when it is selected.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     */")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    constructor"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "(..."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "boxes"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        this"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "boxes"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "boxes"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "    /**")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * Get the box which the `faceLocation` lies within.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     *")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, ' {import("@minecraft/server").Vector3}'),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " faceLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " Selection location relative to the bottom north-west corner of the block.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     *")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {Object}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " [options]"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " Optionally configure how the selected box is calculated.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {boolean}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " [options.invertX]"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " X axis extends `west -> east` rather than `east -> west` if true, following [Blockbench](https://blockbench.net)'s displayed positions.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {boolean}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " [options.invertY]"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " Y axis extends `up -> down` rather than `down -> up` if true.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@param"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {boolean}"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " [options.invertZ]"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " Z axis extends `south -> north` rather than `north -> south` if true.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     *")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     * "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@returns"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, " {(string|number|undefined)}"),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " Selected box name, or box index if a name is not provided. If no boxes apply to the selection, `undefined` is returned.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "     */")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "    getSelected"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "faceLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "options"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "        // Create a new object so the original is not mutated")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        let"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = { ..."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "faceLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " };")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "        // X is inverted to ensure measurements are relative to the bottom north-east.")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " (!"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "options"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "?."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "invertX"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "x"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " - "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "x"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "options"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "?."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "invertY"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "y"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " - "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "y"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "options"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "?."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "invertZ"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "z"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " - "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "z"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        for"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "let"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " i"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "; "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "i"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " < "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "this"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "boxes"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "length"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "; "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "i"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "++) {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "            const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " box"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "this"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "boxes"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "i"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "];")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "            const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " from"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "                x:"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " box"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "origin"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] + "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "                y:"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " box"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "origin"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "                z:"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " box"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "origin"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "2"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] + "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            };")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "            const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " to"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "                x:"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " from"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "x"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " + "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "box"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "size"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "                y:"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " from"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "y"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " + "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "box"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "size"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "                z:"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " from"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "z"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " + "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "box"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "size"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "2"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            };")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "            const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " inXRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "isInRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "x"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "from"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "x"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " / "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "to"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "x"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " / "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "            const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " inYRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "isInRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "y"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "from"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "y"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " / "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "to"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "y"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " / "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "            const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " inZRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "isInRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "z"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "from"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "z"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " / "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "to"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "z"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " / "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "16"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "            if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "inXRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " && "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "inYRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " && "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "inZRange"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "return"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " box"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "name"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ?? "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "i"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "2"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "3"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "4"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "5"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "6"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "7"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "8"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "9"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "10"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "11"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "12"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "13"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "14"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "15"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "16"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "17"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "18"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "19"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "20"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "21"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "22"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "23"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "24"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "25"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "26"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "27"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "28"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "29"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "30"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "31"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "32"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "33"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "34"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "35"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "36"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "37"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "38"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "39"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "40"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "41"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "42"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "43"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "44"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "45"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "46"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "47"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "48"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "49"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "50"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "51"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "52"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "53"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "54"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "55"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "56"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "57"),
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><h4 id="constructor-1" tabindex="-1">constructor <a class="header-anchor" href="#constructor-1" aria-label="Permalink to &quot;constructor&quot;">​</a></h4><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">new</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"> SelectionBoxes</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(...</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">boxes</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">number</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">number</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">number</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">size</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">number</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">number</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">number</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">name</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">?: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">string</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }[])</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Creates a new <code class="shiki"><span>SelectionBoxes</span></code> instance.</p>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Parameters" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><p${_scopeId}><strong${_scopeId}>boxes</strong>: <code class="shiki"${_scopeId}><span${_scopeId}>Object[]</span></code></p><p${_scopeId}>Array defining the 3D areas within a block which may be selected.</p><ul${_scopeId}><li${_scopeId}><p${_scopeId}><strong${_scopeId}>origin</strong>: <code class="shiki"${_scopeId}><span${_scopeId}>[number, number, number]</span></code></p><p${_scopeId}>[X, Y, Z] array defining the offset of the box from the block&#39;s horizontal middle and vertical bottom in pixels, extending from the north-east.</p></li><li${_scopeId}><p${_scopeId}><strong${_scopeId}>size</strong>: <code class="shiki"${_scopeId}><span${_scopeId}>[number, number, number]</span></code></p><p${_scopeId}>[X, Y, Z] array defining the size of the box in pixels, extending from the north-east.br&gt;</p></li><li${_scopeId}><p${_scopeId}><strong${_scopeId}>name</strong>?: <code class="shiki"${_scopeId}><span${_scopeId}>string</span></code></p><p${_scopeId}>Custom name to easily identify this box when it is selected.</p></li></ul></li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("p", null, [
                createVNode("strong", null, "boxes"),
                createTextVNode(": "),
                createVNode("code", { class: "shiki" }, [
                  createVNode("span", null, "Object[]")
                ])
              ]),
              createVNode("p", null, "Array defining the 3D areas within a block which may be selected."),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("p", null, [
                    createVNode("strong", null, "origin"),
                    createTextVNode(": "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "[number, number, number]")
                    ])
                  ]),
                  createVNode("p", null, "[X, Y, Z] array defining the offset of the box from the block's horizontal middle and vertical bottom in pixels, extending from the north-east.")
                ]),
                createVNode("li", null, [
                  createVNode("p", null, [
                    createVNode("strong", null, "size"),
                    createTextVNode(": "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "[number, number, number]")
                    ])
                  ]),
                  createVNode("p", null, "[X, Y, Z] array defining the size of the box in pixels, extending from the north-east.br>")
                ]),
                createVNode("li", null, [
                  createVNode("p", null, [
                    createVNode("strong", null, "name"),
                    createTextVNode("?: "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "string")
                    ])
                  ]),
                  createVNode("p", null, "Custom name to easily identify this box when it is selected.")
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li><h4 id="getselected-1" tabindex="-1">getSelected <a class="header-anchor" href="#getselected-1" aria-label="Permalink to &quot;getSelected&quot;">​</a></h4><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">getSelected</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">Vector3</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">options</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">?: { invertX?</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"> boolean</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">invertY</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">?: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">boolean</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">invertZ</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">?: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">boolean</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }): </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">number</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> | </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">string</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> | </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">undefined</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Get the box which the <code class="shiki"><span>faceLocation</span></code> lies within.</p><p>Returns the involved box&#39;s array index, or name if provided. If no box is selected, <code class="shiki"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">undefined</span></code> is returned.</p>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "Parameters" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><p${_scopeId}><strong${_scopeId}>faceLocation</strong>: <a href="https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/vector3" target="_blank" rel="noreferrer"${_scopeId}><code class="shiki"${_scopeId}><span${_scopeId}>Vector3</span></code></a></p><p${_scopeId}>Selection location relative to the bottom north-west corner of the block.</p></li><li${_scopeId}><p${_scopeId}><strong${_scopeId}>options</strong>?: <code class="shiki"${_scopeId}><span${_scopeId}>Object</span></code></p><p${_scopeId}>Optionally configure how the selected box is calculated.</p><ul${_scopeId}><li${_scopeId}><p${_scopeId}><strong${_scopeId}>invertX</strong>?: <code class="shiki"${_scopeId}><span${_scopeId}>boolean</span></code></p><p${_scopeId}>X axis extends <code class="shiki"${_scopeId}><span${_scopeId}>west -&gt; east</span></code> rather than <code class="shiki"${_scopeId}><span${_scopeId}>east -&gt; west</span></code> if true, following <a href="https://blockbench.net" target="_blank" rel="noreferrer"${_scopeId}>Blockbench</a>&#39;s displayed positions.</p></li><li${_scopeId}><p${_scopeId}><strong${_scopeId}>invertY</strong>?: <code class="shiki"${_scopeId}><span${_scopeId}>boolean</span></code></p><p${_scopeId}>Y axis extends <code class="shiki"${_scopeId}><span${_scopeId}>up -&gt; down</span></code> rather than <code class="shiki"${_scopeId}><span${_scopeId}>down -&gt; up</span></code> if true.</p></li><li${_scopeId}><p${_scopeId}><strong${_scopeId}>invertZ</strong>?: <code class="shiki"${_scopeId}><span${_scopeId}>boolean</span></code></p><p${_scopeId}>Z axis extends <code class="shiki"${_scopeId}><span${_scopeId}>south -&gt; north</span></code> rather than <code class="shiki"${_scopeId}><span${_scopeId}>north -&gt; south</span></code> if true.</p></li></ul></li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("p", null, [
                createVNode("strong", null, "faceLocation"),
                createTextVNode(": "),
                createVNode("a", {
                  href: "https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/vector3",
                  target: "_blank",
                  rel: "noreferrer"
                }, [
                  createVNode("code", { class: "shiki" }, [
                    createVNode("span", null, "Vector3")
                  ])
                ])
              ]),
              createVNode("p", null, "Selection location relative to the bottom north-west corner of the block.")
            ]),
            createVNode("li", null, [
              createVNode("p", null, [
                createVNode("strong", null, "options"),
                createTextVNode("?: "),
                createVNode("code", { class: "shiki" }, [
                  createVNode("span", null, "Object")
                ])
              ]),
              createVNode("p", null, "Optionally configure how the selected box is calculated."),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("p", null, [
                    createVNode("strong", null, "invertX"),
                    createTextVNode("?: "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "boolean")
                    ])
                  ]),
                  createVNode("p", null, [
                    createTextVNode("X axis extends "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "west -> east")
                    ]),
                    createTextVNode(" rather than "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "east -> west")
                    ]),
                    createTextVNode(" if true, following "),
                    createVNode("a", {
                      href: "https://blockbench.net",
                      target: "_blank",
                      rel: "noreferrer"
                    }, "Blockbench"),
                    createTextVNode("'s displayed positions.")
                  ])
                ]),
                createVNode("li", null, [
                  createVNode("p", null, [
                    createVNode("strong", null, "invertY"),
                    createTextVNode("?: "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "boolean")
                    ])
                  ]),
                  createVNode("p", null, [
                    createTextVNode("Y axis extends "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "up -> down")
                    ]),
                    createTextVNode(" rather than "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "down -> up")
                    ]),
                    createTextVNode(" if true.")
                  ])
                ]),
                createVNode("li", null, [
                  createVNode("p", null, [
                    createVNode("strong", null, "invertZ"),
                    createTextVNode("?: "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "boolean")
                    ])
                  ]),
                  createVNode("p", null, [
                    createTextVNode("Z axis extends "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "south -> north")
                    ]),
                    createTextVNode(" rather than "),
                    createVNode("code", { class: "shiki" }, [
                      createVNode("span", null, "north -> south")
                    ]),
                    createTextVNode(" if true.")
                  ])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><h3 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><p>The below example would split the targeted block into its vertical halves:</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/scripts/blocks/example.js`);
      } else {
        return [
          createTextVNode("BP/scripts/blocks/example.js")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">import</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">world</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> } </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"> &quot;@minecraft/server&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">import</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"> SelectionBoxes</span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"> from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"> &quot;../utilities/selection_boxes&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> verticalHalves</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">new</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"> SelectionBoxes</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [-</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, -</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">name:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"> &quot;top&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [-</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, -</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">16</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">name:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"> &quot;bottom&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>This could be used with a <a href="https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockafterevent" target="_blank" rel="noreferrer"><code class="shiki"><span>playerInteractWithBlock</span></code> after event</a> to get the selected box:</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">world</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">afterEvents</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">playerInteractWithBlock</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">subscribe</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">((</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">e</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">=&gt;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">    // Do nothing if the targeted block is not &quot;wiki:example_block&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">e</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> !== </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:example_block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">    // Returns the selected vertical half (&quot;top&quot; or &quot;bottom&quot;).</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"> selectedVerticalHalf</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">verticalHalves</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">getSelected</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">e</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">);</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">    world</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}">sendMessage</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">\`The </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">\${</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}">selectedVerticalHalf</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"> of the block was selected!\`</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="pigeonholes-example" tabindex="-1">Pigeonholes Example <a class="header-anchor" href="#pigeonholes-example" aria-label="Permalink to &quot;Pigeonholes Example&quot;">​</a></h2><p>Using our <a href="#faceselectionplains-class">FaceSelectionPlains</a> class, we can create a block which functions similarly to a Chiselled Bookshelf. Other assets (textures etc.) are included in the <a href="#download-example-pack">example pack</a>.</p><p>Interacting with paper will fill the selected slot. Destroying the block releases all of the stored paper items.</p><p><img${ssrRenderAttr("src", _imports_1)} alt="Pigeonholes Showcase"></p>`);
  _push(ssrRenderComponent(_component_Button, { link: "https://github.com/Bedrock-OSS/bedrock-examples/blob/main/resources/precise_interaction/rp/models/blocks/pigeonholes.geo.json" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Download Pigeonholes Model `);
      } else {
        return [
          createTextVNode(" Download Pigeonholes Model ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Spoiler, { title: "Block JSON" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`BP/blocks/pigeonholes.json`);
            } else {
              return [
                createTextVNode("BP/blocks/pigeonholes.json")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;1.26.10&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;minecraft:block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:pigeonholes&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;menu_category&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;category&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;items&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;states&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;wiki:slot_0_occupied&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;wiki:slot_1_occupied&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;wiki:slot_2_occupied&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;wiki:slot_3_occupied&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;wiki:slot_4_occupied&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;wiki:slot_5_occupied&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;traits&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;minecraft:placement_direction&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;enabled_states&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:cardinal_direction&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;y_rotation_offset&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>180</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;wiki:pigeonholes_storage&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {},</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;minecraft:destructible_by_mining&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;seconds_to_destroy&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1.5</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;minecraft:geometry&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;geometry.pigeonholes&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;culling&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:pigeonholes_culling&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;bone_visibility&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>                    // Display each slot as empty/occupied</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;empty_slot_0&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;!q.block_state(&#39;wiki:slot_0_occupied&#39;)&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;empty_slot_1&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;!q.block_state(&#39;wiki:slot_1_occupied&#39;)&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;empty_slot_2&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;!q.block_state(&#39;wiki:slot_2_occupied&#39;)&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;empty_slot_3&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;!q.block_state(&#39;wiki:slot_3_occupied&#39;)&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;empty_slot_4&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;!q.block_state(&#39;wiki:slot_4_occupied&#39;)&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;empty_slot_5&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;!q.block_state(&#39;wiki:slot_5_occupied&#39;)&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;occupied_slot_0&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:slot_0_occupied&#39;)&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;occupied_slot_1&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:slot_1_occupied&#39;)&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;occupied_slot_2&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:slot_2_occupied&#39;)&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;occupied_slot_3&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:slot_3_occupied&#39;)&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;occupied_slot_4&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:slot_4_occupied&#39;)&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;occupied_slot_5&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:slot_5_occupied&#39;)&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;minecraft:material_instances&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;*&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;stripped_bamboo_block_top&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>                // Material instances defined in model:</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;side&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;stripped_bamboo_block&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;empty_slot&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:pigeonholes_empty&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;occupied_slot&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:pigeonholes_occupied&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;permutations&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>            // Facing north</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;minecraft:cardinal_direction&#39;) == &#39;north&#39;&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;minecraft:transformation&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;rotation&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>            // Facing west</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;minecraft:cardinal_direction&#39;) == &#39;west&#39;&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;minecraft:transformation&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;rotation&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>90</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>            // Facing south</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;minecraft:cardinal_direction&#39;) == &#39;south&#39;&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;minecraft:transformation&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;rotation&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>180</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>            // Facing east</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;minecraft:cardinal_direction&#39;) == &#39;east&#39;&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;minecraft:transformation&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;rotation&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-90</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}><span class="line-number"${_scopeId}>18</span><br${_scopeId}><span class="line-number"${_scopeId}>19</span><br${_scopeId}><span class="line-number"${_scopeId}>20</span><br${_scopeId}><span class="line-number"${_scopeId}>21</span><br${_scopeId}><span class="line-number"${_scopeId}>22</span><br${_scopeId}><span class="line-number"${_scopeId}>23</span><br${_scopeId}><span class="line-number"${_scopeId}>24</span><br${_scopeId}><span class="line-number"${_scopeId}>25</span><br${_scopeId}><span class="line-number"${_scopeId}>26</span><br${_scopeId}><span class="line-number"${_scopeId}>27</span><br${_scopeId}><span class="line-number"${_scopeId}>28</span><br${_scopeId}><span class="line-number"${_scopeId}>29</span><br${_scopeId}><span class="line-number"${_scopeId}>30</span><br${_scopeId}><span class="line-number"${_scopeId}>31</span><br${_scopeId}><span class="line-number"${_scopeId}>32</span><br${_scopeId}><span class="line-number"${_scopeId}>33</span><br${_scopeId}><span class="line-number"${_scopeId}>34</span><br${_scopeId}><span class="line-number"${_scopeId}>35</span><br${_scopeId}><span class="line-number"${_scopeId}>36</span><br${_scopeId}><span class="line-number"${_scopeId}>37</span><br${_scopeId}><span class="line-number"${_scopeId}>38</span><br${_scopeId}><span class="line-number"${_scopeId}>39</span><br${_scopeId}><span class="line-number"${_scopeId}>40</span><br${_scopeId}><span class="line-number"${_scopeId}>41</span><br${_scopeId}><span class="line-number"${_scopeId}>42</span><br${_scopeId}><span class="line-number"${_scopeId}>43</span><br${_scopeId}><span class="line-number"${_scopeId}>44</span><br${_scopeId}><span class="line-number"${_scopeId}>45</span><br${_scopeId}><span class="line-number"${_scopeId}>46</span><br${_scopeId}><span class="line-number"${_scopeId}>47</span><br${_scopeId}><span class="line-number"${_scopeId}>48</span><br${_scopeId}><span class="line-number"${_scopeId}>49</span><br${_scopeId}><span class="line-number"${_scopeId}>50</span><br${_scopeId}><span class="line-number"${_scopeId}>51</span><br${_scopeId}><span class="line-number"${_scopeId}>52</span><br${_scopeId}><span class="line-number"${_scopeId}>53</span><br${_scopeId}><span class="line-number"${_scopeId}>54</span><br${_scopeId}><span class="line-number"${_scopeId}>55</span><br${_scopeId}><span class="line-number"${_scopeId}>56</span><br${_scopeId}><span class="line-number"${_scopeId}>57</span><br${_scopeId}><span class="line-number"${_scopeId}>58</span><br${_scopeId}><span class="line-number"${_scopeId}>59</span><br${_scopeId}><span class="line-number"${_scopeId}>60</span><br${_scopeId}><span class="line-number"${_scopeId}>61</span><br${_scopeId}><span class="line-number"${_scopeId}>62</span><br${_scopeId}><span class="line-number"${_scopeId}>63</span><br${_scopeId}><span class="line-number"${_scopeId}>64</span><br${_scopeId}><span class="line-number"${_scopeId}>65</span><br${_scopeId}><span class="line-number"${_scopeId}>66</span><br${_scopeId}><span class="line-number"${_scopeId}>67</span><br${_scopeId}><span class="line-number"${_scopeId}>68</span><br${_scopeId}><span class="line-number"${_scopeId}>69</span><br${_scopeId}><span class="line-number"${_scopeId}>70</span><br${_scopeId}><span class="line-number"${_scopeId}>71</span><br${_scopeId}><span class="line-number"${_scopeId}>72</span><br${_scopeId}><span class="line-number"${_scopeId}>73</span><br${_scopeId}><span class="line-number"${_scopeId}>74</span><br${_scopeId}><span class="line-number"${_scopeId}>75</span><br${_scopeId}><span class="line-number"${_scopeId}>76</span><br${_scopeId}><span class="line-number"${_scopeId}>77</span><br${_scopeId}><span class="line-number"${_scopeId}>78</span><br${_scopeId}><span class="line-number"${_scopeId}>79</span><br${_scopeId}><span class="line-number"${_scopeId}>80</span><br${_scopeId}><span class="line-number"${_scopeId}>81</span><br${_scopeId}><span class="line-number"${_scopeId}>82</span><br${_scopeId}><span class="line-number"${_scopeId}>83</span><br${_scopeId}><span class="line-number"${_scopeId}>84</span><br${_scopeId}><span class="line-number"${_scopeId}>85</span><br${_scopeId}><span class="line-number"${_scopeId}>86</span><br${_scopeId}><span class="line-number"${_scopeId}>87</span><br${_scopeId}><span class="line-number"${_scopeId}>88</span><br${_scopeId}><span class="line-number"${_scopeId}>89</span><br${_scopeId}><span class="line-number"${_scopeId}>90</span><br${_scopeId}><span class="line-number"${_scopeId}>91</span><br${_scopeId}><span class="line-number"${_scopeId}>92</span><br${_scopeId}><span class="line-number"${_scopeId}>93</span><br${_scopeId}><span class="line-number"${_scopeId}>94</span><br${_scopeId}><span class="line-number"${_scopeId}>95</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode(_component_CodeHeader, null, {
            default: withCtx(() => [
              createTextVNode("BP/blocks/pigeonholes.json")
            ]),
            _: 1
          }),
          createVNode("div", { class: "language-json vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "json"),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "format_version"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"1.26.10"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "minecraft:block"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "description"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "identifier"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:pigeonholes"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "menu_category"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "category"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"items"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "states"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "wiki:slot_0_occupied"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "true"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "wiki:slot_1_occupied"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "true"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "wiki:slot_2_occupied"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "true"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "wiki:slot_3_occupied"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "true"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "wiki:slot_4_occupied"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "true"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "wiki:slot_5_occupied"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "true"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "traits"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "minecraft:placement_direction"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "enabled_states"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:cardinal_direction"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "y_rotation_offset"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "180")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "wiki:pigeonholes_storage"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {},")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "minecraft:destructible_by_mining"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "seconds_to_destroy"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1.5")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "minecraft:geometry"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "identifier"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"geometry.pigeonholes"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "culling"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:pigeonholes_culling"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "bone_visibility"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "                    // Display each slot as empty/occupied")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "empty_slot_0"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"!q.block_state('wiki:slot_0_occupied')"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "empty_slot_1"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"!q.block_state('wiki:slot_1_occupied')"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "empty_slot_2"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"!q.block_state('wiki:slot_2_occupied')"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "empty_slot_3"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"!q.block_state('wiki:slot_3_occupied')"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "empty_slot_4"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"!q.block_state('wiki:slot_4_occupied')"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "empty_slot_5"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"!q.block_state('wiki:slot_5_occupied')"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "occupied_slot_0"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:slot_0_occupied')"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "occupied_slot_1"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:slot_1_occupied')"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "occupied_slot_2"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:slot_2_occupied')"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "occupied_slot_3"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:slot_3_occupied')"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "occupied_slot_4"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:slot_4_occupied')"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "occupied_slot_5"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:slot_5_occupied')"`)
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "minecraft:material_instances"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "*"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "texture"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"stripped_bamboo_block_top"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "                // Material instances defined in model:")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "side"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "texture"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"stripped_bamboo_block"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "empty_slot"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "texture"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:pigeonholes_empty"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "occupied_slot"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "texture"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:pigeonholes_occupied"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "permutations"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "            // Facing north")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "condition"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('minecraft:cardinal_direction') == 'north'"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "minecraft:transformation"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"rotation"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "            // Facing west")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "condition"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('minecraft:cardinal_direction') == 'west'"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "minecraft:transformation"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"rotation"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "90"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "            // Facing south")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "condition"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('minecraft:cardinal_direction') == 'south'"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "minecraft:transformation"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"rotation"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "180"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "            // Facing east")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "condition"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('minecraft:cardinal_direction') == 'east'"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "minecraft:transformation"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"rotation"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-90"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        ]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "2"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "3"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "4"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "5"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "6"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "7"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "8"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "9"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "10"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "11"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "12"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "13"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "14"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "15"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "16"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "17"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "18"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "19"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "20"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "21"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "22"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "23"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "24"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "25"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "26"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "27"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "28"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "29"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "30"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "31"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "32"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "33"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "34"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "35"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "36"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "37"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "38"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "39"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "40"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "41"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "42"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "43"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "44"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "45"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "46"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "47"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "48"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "49"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "50"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "51"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "52"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "53"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "54"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "55"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "56"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "57"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "58"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "59"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "60"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "61"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "62"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "63"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "64"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "65"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "66"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "67"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "68"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "69"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "70"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "71"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "72"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "73"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "74"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "75"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "76"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "77"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "78"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "79"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "80"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "81"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "82"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "83"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "84"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "85"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "86"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "87"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "88"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "89"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "90"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "91"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "92"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "93"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "94"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "95"),
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Spoiler, { title: "Precise Interaction Script" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`BP/scripts/blocks/pigeonholes.js`);
            } else {
              return [
                createTextVNode("BP/scripts/blocks/pigeonholes.js")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="language-js vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>system</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>EquipmentSlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>GameMode</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>ItemStack</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> } </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}> &quot;@minecraft/server&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> FaceSelectionPlains</span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}> &quot;../utilities/face_selection_plains&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>// Import the FaceSelectionPlains class to use it</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>// Slot bounds</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> slots</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>new</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> FaceSelectionPlains</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>5</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>11</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>5</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>5</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>11</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>5</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> isFrontFace</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>face</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>=&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>    block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:cardinal_direction&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>face</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>toLowerCase</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> isSlotOccupied</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>slot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>\`wiki:slot_</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>\${</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>slot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>_occupied\`</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> occupySlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>slot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>=&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>    block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>setPermutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>withState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>\`wiki:slot_</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>\${</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>slot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>_occupied\`</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>));</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> emptySlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>slot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>=&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>    block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>setPermutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>withState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>\`wiki:slot_</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>\${</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>slot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>_occupied\`</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>));</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> handleInteract</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>({ </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>face</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>dimension</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>player</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> }) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>player</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> || !</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>isFrontFace</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>face</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> equippable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>player</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getComponent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:equippable&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>equippable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> selectedSlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>slots</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getSelected</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>({ </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>face</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> });</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>selectedSlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>undefined</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>equippable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getEquipmentSlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>EquipmentSlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> isHoldingPaper</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>hasItem</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>() &amp;&amp; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:paper&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>isHoldingPaper</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &amp;&amp; !</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>isSlotOccupied</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>selectedSlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>player</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getGameMode</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>() !== </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>GameMode</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>creative</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>            if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>amount</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &gt; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>amount</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>--;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>            else</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>setItem</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>undefined</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>        occupySlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>selectedSlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        dimension</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>playSound</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;insert.chiseled_bookshelf&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>center</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>());</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    } </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>else</span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}> if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>isSlotOccupied</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>selectedSlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>        emptySlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>selectedSlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> itemLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>            x:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> + </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>x</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>            y:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>y</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> + </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>y</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> - </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0.5</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>            z:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>location</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> + </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>z</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        };</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        dimension</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>spawnItem</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>new</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> ItemStack</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:paper&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>), </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>itemLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>).</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>clearVelocity</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        dimension</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>playSound</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;pickup.chiseled_bookshelf&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>center</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>());</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>// ------------------------------</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>//  Release paper on destruction</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>// ------------------------------</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> releasePaper</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>({ </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>brokenBlockPermutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>dimension</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> }) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> states</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>brokenBlockPermutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getAllStates</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>    for</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> state</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}> in</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> states</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> value</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>states</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>state</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>];</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> isPaper</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>true</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>isPaper</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>continue</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        dimension</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>spawnItem</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>new</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> ItemStack</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:paper&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>), </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>center</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>());</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>/** </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@type</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {import(&quot;@minecraft/server&quot;).BlockCustomComponent}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> */</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> BlockPigeonholesStorageComponent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>    onPlayerInteract:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> handleInteract</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>    onPlayerBreak:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> releasePaper</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>system</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>beforeEvents</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>startup</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>subscribe</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(({ </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>blockComponentRegistry</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> }) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>    blockComponentRegistry</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>registerCustomComponent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>        &quot;wiki:pigeonholes_storage&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        BlockPigeonholesStorageComponent</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    );</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}><span class="line-number"${_scopeId}>18</span><br${_scopeId}><span class="line-number"${_scopeId}>19</span><br${_scopeId}><span class="line-number"${_scopeId}>20</span><br${_scopeId}><span class="line-number"${_scopeId}>21</span><br${_scopeId}><span class="line-number"${_scopeId}>22</span><br${_scopeId}><span class="line-number"${_scopeId}>23</span><br${_scopeId}><span class="line-number"${_scopeId}>24</span><br${_scopeId}><span class="line-number"${_scopeId}>25</span><br${_scopeId}><span class="line-number"${_scopeId}>26</span><br${_scopeId}><span class="line-number"${_scopeId}>27</span><br${_scopeId}><span class="line-number"${_scopeId}>28</span><br${_scopeId}><span class="line-number"${_scopeId}>29</span><br${_scopeId}><span class="line-number"${_scopeId}>30</span><br${_scopeId}><span class="line-number"${_scopeId}>31</span><br${_scopeId}><span class="line-number"${_scopeId}>32</span><br${_scopeId}><span class="line-number"${_scopeId}>33</span><br${_scopeId}><span class="line-number"${_scopeId}>34</span><br${_scopeId}><span class="line-number"${_scopeId}>35</span><br${_scopeId}><span class="line-number"${_scopeId}>36</span><br${_scopeId}><span class="line-number"${_scopeId}>37</span><br${_scopeId}><span class="line-number"${_scopeId}>38</span><br${_scopeId}><span class="line-number"${_scopeId}>39</span><br${_scopeId}><span class="line-number"${_scopeId}>40</span><br${_scopeId}><span class="line-number"${_scopeId}>41</span><br${_scopeId}><span class="line-number"${_scopeId}>42</span><br${_scopeId}><span class="line-number"${_scopeId}>43</span><br${_scopeId}><span class="line-number"${_scopeId}>44</span><br${_scopeId}><span class="line-number"${_scopeId}>45</span><br${_scopeId}><span class="line-number"${_scopeId}>46</span><br${_scopeId}><span class="line-number"${_scopeId}>47</span><br${_scopeId}><span class="line-number"${_scopeId}>48</span><br${_scopeId}><span class="line-number"${_scopeId}>49</span><br${_scopeId}><span class="line-number"${_scopeId}>50</span><br${_scopeId}><span class="line-number"${_scopeId}>51</span><br${_scopeId}><span class="line-number"${_scopeId}>52</span><br${_scopeId}><span class="line-number"${_scopeId}>53</span><br${_scopeId}><span class="line-number"${_scopeId}>54</span><br${_scopeId}><span class="line-number"${_scopeId}>55</span><br${_scopeId}><span class="line-number"${_scopeId}>56</span><br${_scopeId}><span class="line-number"${_scopeId}>57</span><br${_scopeId}><span class="line-number"${_scopeId}>58</span><br${_scopeId}><span class="line-number"${_scopeId}>59</span><br${_scopeId}><span class="line-number"${_scopeId}>60</span><br${_scopeId}><span class="line-number"${_scopeId}>61</span><br${_scopeId}><span class="line-number"${_scopeId}>62</span><br${_scopeId}><span class="line-number"${_scopeId}>63</span><br${_scopeId}><span class="line-number"${_scopeId}>64</span><br${_scopeId}><span class="line-number"${_scopeId}>65</span><br${_scopeId}><span class="line-number"${_scopeId}>66</span><br${_scopeId}><span class="line-number"${_scopeId}>67</span><br${_scopeId}><span class="line-number"${_scopeId}>68</span><br${_scopeId}><span class="line-number"${_scopeId}>69</span><br${_scopeId}><span class="line-number"${_scopeId}>70</span><br${_scopeId}><span class="line-number"${_scopeId}>71</span><br${_scopeId}><span class="line-number"${_scopeId}>72</span><br${_scopeId}><span class="line-number"${_scopeId}>73</span><br${_scopeId}><span class="line-number"${_scopeId}>74</span><br${_scopeId}><span class="line-number"${_scopeId}>75</span><br${_scopeId}><span class="line-number"${_scopeId}>76</span><br${_scopeId}><span class="line-number"${_scopeId}>77</span><br${_scopeId}><span class="line-number"${_scopeId}>78</span><br${_scopeId}><span class="line-number"${_scopeId}>79</span><br${_scopeId}><span class="line-number"${_scopeId}>80</span><br${_scopeId}><span class="line-number"${_scopeId}>81</span><br${_scopeId}><span class="line-number"${_scopeId}>82</span><br${_scopeId}><span class="line-number"${_scopeId}>83</span><br${_scopeId}><span class="line-number"${_scopeId}>84</span><br${_scopeId}><span class="line-number"${_scopeId}>85</span><br${_scopeId}><span class="line-number"${_scopeId}>86</span><br${_scopeId}><span class="line-number"${_scopeId}>87</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode(_component_CodeHeader, null, {
            default: withCtx(() => [
              createTextVNode("BP/scripts/blocks/pigeonholes.js")
            ]),
            _: 1
          }),
          createVNode("div", { class: "language-js vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "js"),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "import"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "system"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "EquipmentSlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "GameMode"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "ItemStack"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " } "),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "from"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, ' "@minecraft/server"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "import"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " FaceSelectionPlains"),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, " from"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, ' "../utilities/face_selection_plains"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "; "),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "// Import the FaceSelectionPlains class to use it")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "// Slot bounds")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " slots"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "new"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " FaceSelectionPlains"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "(")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "origin:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "], "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "size:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "origin:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "], "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "size:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "5"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "origin:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "11"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "], "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "size:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "5"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "origin:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "], "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "size:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "origin:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "], "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "size:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "5"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "origin:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "11"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "], "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "size:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "5"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "8"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " isFrontFace"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "face"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "=>")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "    block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "permutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:cardinal_direction"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "face"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "toLowerCase"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " isSlotOccupied"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "slot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "=>"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "permutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, "`wiki:slot_"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "${"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "slot"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "}"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, "_occupied`"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " occupySlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "slot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "=>")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "    block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "setPermutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "permutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "withState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, "`wiki:slot_"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "${"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "slot"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "}"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, "_occupied`"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "true"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "));")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " emptySlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "slot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "=>")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "    block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "setPermutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "permutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "withState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, "`wiki:slot_"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "${"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "slot"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "}"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, "_occupied`"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "));")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "function"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " handleInteract"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "({ "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "face"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "faceLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "dimension"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "player"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " }) {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "    if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " (!"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "player"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " || !"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "isFrontFace"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "face"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")) "),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "return"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " equippable"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "player"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getComponent"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:equippable"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "    if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " (!"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "equippable"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "return"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " selectedSlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "slots"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getSelected"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "({ "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "face"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "faceLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " });")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "    if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "selectedSlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "undefined"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "return"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "equippable"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getEquipmentSlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "EquipmentSlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " isHoldingPaper"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "hasItem"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "() && "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:paper"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "    if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "isHoldingPaper"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " && !"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "isSlotOccupied"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "selectedSlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")) {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "player"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getGameMode"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "() !== "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "GameMode"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "creative"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "            if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "amount"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " > "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "amount"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "--;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "            else"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "setItem"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "undefined"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "        occupySlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "selectedSlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        dimension"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "playSound"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"insert.chiseled_bookshelf"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "center"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "());")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    } "),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "else"),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, " if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "isSlotOccupied"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "selectedSlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")) {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "        emptySlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "selectedSlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " itemLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "            x:"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "x"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " + "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "faceLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "x"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "            y:"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "y"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " + "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "faceLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "y"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " - "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0.5"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "            z:"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "location"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "z"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " + "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "faceLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "z"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        };")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        dimension"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "spawnItem"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "new"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " ItemStack"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:paper"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "), "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "itemLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "clearVelocity"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        dimension"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "playSound"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"pickup.chiseled_bookshelf"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "center"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "());")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "// ------------------------------")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "//  Release paper on destruction")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "// ------------------------------")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "function"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " releasePaper"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "({ "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "brokenBlockPermutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "dimension"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " }) {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " states"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "brokenBlockPermutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getAllStates"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "    for"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " state"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, " in"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " states"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " value"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "states"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "state"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "];")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " isPaper"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "value"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "true"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " (!"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "isPaper"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "continue"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        dimension"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "spawnItem"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "new"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " ItemStack"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:paper"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "), "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "center"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "());")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "/** "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@type"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, ' {import("@minecraft/server").BlockCustomComponent}'),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " */")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " BlockPigeonholesStorageComponent"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "    onPlayerInteract:"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " handleInteract"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "    onPlayerBreak:"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " releasePaper"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "system"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "beforeEvents"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "startup"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "subscribe"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "(({ "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "blockComponentRegistry"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " }) "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "=>"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "    blockComponentRegistry"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "registerCustomComponent"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "(")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '        "wiki:pigeonholes_storage"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        BlockPigeonholesStorageComponent")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    );")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "});")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "2"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "3"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "4"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "5"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "6"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "7"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "8"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "9"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "10"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "11"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "12"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "13"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "14"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "15"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "16"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "17"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "18"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "19"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "20"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "21"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "22"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "23"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "24"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "25"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "26"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "27"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "28"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "29"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "30"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "31"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "32"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "33"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "34"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "35"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "36"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "37"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "38"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "39"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "40"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "41"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "42"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "43"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "44"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "45"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "46"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "47"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "48"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "49"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "50"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "51"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "52"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "53"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "54"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "55"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "56"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "57"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "58"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "59"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "60"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "61"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "62"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "63"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "64"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "65"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "66"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "67"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "68"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "69"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "70"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "71"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "72"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "73"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "74"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "75"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "76"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "77"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "78"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "79"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "80"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "81"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "82"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "83"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "84"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "85"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "86"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "87"),
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="double-flower-pot-example" tabindex="-1">Double Flower Pot Example <a class="header-anchor" href="#double-flower-pot-example" aria-label="Permalink to &quot;Double Flower Pot Example&quot;">​</a></h2><p>Using our <a href="#selectionboxes-class">SelectionBoxes</a> class, the player can interact with each pot separately. The following files are the basis for implementing a new Double Flower Pot block, other assets (textures etc.) are included in the <a href="#download-example-pack">example pack</a>.</p><p><strong>Note</strong>: The pots in this example only support the planting of dandelions and cacti for simplicity - you could expand this further yourself.</p><p><img${ssrRenderAttr("src", _imports_2)} alt="Double Flower Pot Showcase"></p>`);
  _push(ssrRenderComponent(_component_Button, { link: "https://github.com/Bedrock-OSS/bedrock-examples/blob/main/resources/precise_interaction/rp/models/blocks/double_flower_pot.geo.json" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Download Double Flower Pot Model `);
      } else {
        return [
          createTextVNode(" Download Double Flower Pot Model ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Spoiler, { title: "Block JSON" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`BP/blocks/double_flower_pot.json`);
            } else {
              return [
                createTextVNode("BP/blocks/double_flower_pot.json")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="language-json vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;1.26.10&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>    &quot;minecraft:block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:double_flower_pot&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;menu_category&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;category&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;items&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;states&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;wiki:pot_0_plant&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;none&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;dandelion&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;cactus&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;wiki:pot_1_plant&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;none&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;dandelion&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;cactus&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;traits&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;minecraft:placement_direction&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;enabled_states&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:cardinal_direction&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;wiki:double_flower_pot&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {},</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;minecraft:collision_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-7</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-3</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>14</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>            // This must cover all boxes in the precise interaction script</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;minecraft:selection_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-7</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>-3</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>14</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;minecraft:geometry&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;geometry.double_flower_pot&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>                // Conditionally display plants in their pots</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;bone_visibility&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;dandelion_0&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:pot_0_plant&#39;) == &#39;dandelion&#39;&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;dandelion_1&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:pot_1_plant&#39;) == &#39;dandelion&#39;&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;cactus_0&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:pot_0_plant&#39;) == &#39;cactus&#39;&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;cactus_1&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;wiki:pot_1_plant&#39;) == &#39;cactus&#39;&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>            &quot;minecraft:material_instances&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;*&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;flower_pot&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;render_method&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;alpha_test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;ambient_occlusion&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>                // Material instances defined in model:</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;dirt&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:double_flower_pot_dirt&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>// Apply a darker tint to the dirt texture to replicate vanilla potted dirt</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;render_method&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;alpha_test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;ambient_occlusion&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;handle&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:double_flower_pot_handle&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;render_method&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;alpha_test&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;dandelion&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;yellow_flower&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;render_method&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;alpha_test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;face_dimming&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;ambient_occlusion&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>false</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;cactus_side&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;cactus_side&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;render_method&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;alpha_test&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;cactus_top&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;cactus_top&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;render_method&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;alpha_test&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>        &quot;permutations&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;condition&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;q.block_state(&#39;minecraft:cardinal_direction&#39;) == &#39;west&#39; || q.block_state(&#39;minecraft:cardinal_direction&#39;) == &#39;east&#39;&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>                    &quot;minecraft:transformation&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}"${_scopeId}>&quot;rotation&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>90</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] } </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>// Front of model facing east</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>                }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        ]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}><span class="line-number"${_scopeId}>18</span><br${_scopeId}><span class="line-number"${_scopeId}>19</span><br${_scopeId}><span class="line-number"${_scopeId}>20</span><br${_scopeId}><span class="line-number"${_scopeId}>21</span><br${_scopeId}><span class="line-number"${_scopeId}>22</span><br${_scopeId}><span class="line-number"${_scopeId}>23</span><br${_scopeId}><span class="line-number"${_scopeId}>24</span><br${_scopeId}><span class="line-number"${_scopeId}>25</span><br${_scopeId}><span class="line-number"${_scopeId}>26</span><br${_scopeId}><span class="line-number"${_scopeId}>27</span><br${_scopeId}><span class="line-number"${_scopeId}>28</span><br${_scopeId}><span class="line-number"${_scopeId}>29</span><br${_scopeId}><span class="line-number"${_scopeId}>30</span><br${_scopeId}><span class="line-number"${_scopeId}>31</span><br${_scopeId}><span class="line-number"${_scopeId}>32</span><br${_scopeId}><span class="line-number"${_scopeId}>33</span><br${_scopeId}><span class="line-number"${_scopeId}>34</span><br${_scopeId}><span class="line-number"${_scopeId}>35</span><br${_scopeId}><span class="line-number"${_scopeId}>36</span><br${_scopeId}><span class="line-number"${_scopeId}>37</span><br${_scopeId}><span class="line-number"${_scopeId}>38</span><br${_scopeId}><span class="line-number"${_scopeId}>39</span><br${_scopeId}><span class="line-number"${_scopeId}>40</span><br${_scopeId}><span class="line-number"${_scopeId}>41</span><br${_scopeId}><span class="line-number"${_scopeId}>42</span><br${_scopeId}><span class="line-number"${_scopeId}>43</span><br${_scopeId}><span class="line-number"${_scopeId}>44</span><br${_scopeId}><span class="line-number"${_scopeId}>45</span><br${_scopeId}><span class="line-number"${_scopeId}>46</span><br${_scopeId}><span class="line-number"${_scopeId}>47</span><br${_scopeId}><span class="line-number"${_scopeId}>48</span><br${_scopeId}><span class="line-number"${_scopeId}>49</span><br${_scopeId}><span class="line-number"${_scopeId}>50</span><br${_scopeId}><span class="line-number"${_scopeId}>51</span><br${_scopeId}><span class="line-number"${_scopeId}>52</span><br${_scopeId}><span class="line-number"${_scopeId}>53</span><br${_scopeId}><span class="line-number"${_scopeId}>54</span><br${_scopeId}><span class="line-number"${_scopeId}>55</span><br${_scopeId}><span class="line-number"${_scopeId}>56</span><br${_scopeId}><span class="line-number"${_scopeId}>57</span><br${_scopeId}><span class="line-number"${_scopeId}>58</span><br${_scopeId}><span class="line-number"${_scopeId}>59</span><br${_scopeId}><span class="line-number"${_scopeId}>60</span><br${_scopeId}><span class="line-number"${_scopeId}>61</span><br${_scopeId}><span class="line-number"${_scopeId}>62</span><br${_scopeId}><span class="line-number"${_scopeId}>63</span><br${_scopeId}><span class="line-number"${_scopeId}>64</span><br${_scopeId}><span class="line-number"${_scopeId}>65</span><br${_scopeId}><span class="line-number"${_scopeId}>66</span><br${_scopeId}><span class="line-number"${_scopeId}>67</span><br${_scopeId}><span class="line-number"${_scopeId}>68</span><br${_scopeId}><span class="line-number"${_scopeId}>69</span><br${_scopeId}><span class="line-number"${_scopeId}>70</span><br${_scopeId}><span class="line-number"${_scopeId}>71</span><br${_scopeId}><span class="line-number"${_scopeId}>72</span><br${_scopeId}><span class="line-number"${_scopeId}>73</span><br${_scopeId}><span class="line-number"${_scopeId}>74</span><br${_scopeId}><span class="line-number"${_scopeId}>75</span><br${_scopeId}><span class="line-number"${_scopeId}>76</span><br${_scopeId}><span class="line-number"${_scopeId}>77</span><br${_scopeId}><span class="line-number"${_scopeId}>78</span><br${_scopeId}><span class="line-number"${_scopeId}>79</span><br${_scopeId}><span class="line-number"${_scopeId}>80</span><br${_scopeId}><span class="line-number"${_scopeId}>81</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode(_component_CodeHeader, null, {
            default: withCtx(() => [
              createTextVNode("BP/blocks/double_flower_pot.json")
            ]),
            _: 1
          }),
          createVNode("div", { class: "language-json vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "json"),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "format_version"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"1.26.10"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '    "minecraft:block"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "description"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "identifier"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:double_flower_pot"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "menu_category"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "category"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"items"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "states"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "wiki:pot_0_plant"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"none"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"dandelion"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"cactus"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "wiki:pot_1_plant"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"none"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"dandelion"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"cactus"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "traits"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "minecraft:placement_direction"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "enabled_states"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:cardinal_direction"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "wiki:double_flower_pot"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {},")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "minecraft:collision_box"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "origin"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-7"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-3"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "14"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "            // This must cover all boxes in the precise interaction script")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "minecraft:selection_box"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "origin"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-7"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "-3"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "],")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "size"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "14"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "minecraft:geometry"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "identifier"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"geometry.double_flower_pot"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "                // Conditionally display plants in their pots")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "bone_visibility"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "dandelion_0"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:pot_0_plant') == 'dandelion'"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "dandelion_1"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:pot_1_plant') == 'dandelion'"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "cactus_0"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:pot_0_plant') == 'cactus'"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "cactus_1"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('wiki:pot_1_plant') == 'cactus'"`)
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '            "minecraft:material_instances"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "*"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "texture"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"flower_pot"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "render_method"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"alpha_test"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "ambient_occlusion"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "                // Material instances defined in model:")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "dirt"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "texture"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:double_flower_pot_dirt"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "// Apply a darker tint to the dirt texture to replicate vanilla potted dirt")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "render_method"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"alpha_test"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "ambient_occlusion"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "handle"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "texture"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:double_flower_pot_handle"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "render_method"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"alpha_test"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "dandelion"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "texture"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"yellow_flower"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "render_method"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"alpha_test"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "face_dimming"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "ambient_occlusion"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "false")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "cactus_side"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "texture"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"cactus_side"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "render_method"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"alpha_test"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "cactus_top"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "texture"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"cactus_top"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "render_method"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"alpha_test"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '        "permutations"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": [")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "condition"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, `"q.block_state('minecraft:cardinal_direction') == 'west' || q.block_state('minecraft:cardinal_direction') == 'east'"`),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                "components"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '                    "minecraft:transformation"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" } }, '"rotation"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ": ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "90"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] } "),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "// Front of model facing east")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "                }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        ]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "2"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "3"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "4"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "5"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "6"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "7"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "8"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "9"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "10"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "11"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "12"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "13"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "14"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "15"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "16"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "17"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "18"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "19"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "20"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "21"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "22"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "23"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "24"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "25"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "26"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "27"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "28"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "29"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "30"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "31"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "32"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "33"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "34"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "35"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "36"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "37"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "38"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "39"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "40"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "41"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "42"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "43"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "44"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "45"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "46"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "47"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "48"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "49"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "50"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "51"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "52"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "53"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "54"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "55"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "56"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "57"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "58"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "59"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "60"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "61"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "62"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "63"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "64"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "65"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "66"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "67"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "68"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "69"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "70"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "71"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "72"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "73"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "74"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "75"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "76"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "77"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "78"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "79"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "80"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "81"),
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Spoiler, { title: "Precise Interaction Script" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`BP/scripts/blocks/double_flower_pot.js`);
            } else {
              return [
                createTextVNode("BP/scripts/blocks/double_flower_pot.js")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="language-js vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>system</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>ItemStack</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>EquipmentSlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>GameMode</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> } </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}> &quot;@minecraft/server&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> SelectionBoxes</span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}> &quot;../utilities/selection_boxes&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>// Import the SelectionBoxes class to use it</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>// Support orientation along both horizontal axes</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> pots</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>    x:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}> new</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> SelectionBoxes</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [-</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>7</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, -</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>3</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, -</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>3</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    ),</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>    z:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}> new</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> SelectionBoxes</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [-</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>3</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, -</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>7</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>origin:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [-</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>3</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>], </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>size:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>] }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    ),</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>// The state value and sound associated with each plant</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> plants</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:dandelion&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        value:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}> &quot;dandelion&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        sound:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}> &quot;dig.grass&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>    &quot;minecraft:cactus&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        value:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}> &quot;cactus&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        sound:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}> &quot;dig.cloth&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> getAxis</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;west&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> || </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;east&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> ? </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;z&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> : </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;x&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>// Get the selected pot for the appropriate axis</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> getSelectedPot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:cardinal_direction&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> axis</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getAxis</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>direction</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>    return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> pots</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>axis</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>].</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getSelected</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> isPotOccupied</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>pot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>=&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>    block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>\`wiki:pot_</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>\${</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>pot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>_plant\`</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) !== </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;none&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> setPotPlant</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>pot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plant</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>=&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>    block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>setPermutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>withState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>\`wiki:pot_</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>\${</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>pot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>_plant\`</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plant</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>));</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>/** </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>@type</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" })}"${_scopeId}> {import(&quot;@minecraft/server&quot;).BlockCustomComponent}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}> */</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> BlockDoubleFlowerPotComponent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>    onPlayerInteract</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>({ </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>dimension</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>player</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> }) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>player</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> equippable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>player</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getComponent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;minecraft:equippable&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>equippable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>equippable</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getEquipmentSlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>EquipmentSlot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> selectedPot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getSelectedPot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>faceLocation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>selectedPot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>undefined</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>        if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>hasItem</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>() &amp;&amp; !</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>isPotOccupied</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>selectedPot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>            const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> plant</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plants</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>typeId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>];</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>            if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plant</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>            if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>player</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getGameMode</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>() !== </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>GameMode</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>creative</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>                if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>amount</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> &gt; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>amount</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>--;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>                else</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>setItem</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>undefined</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>            }</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>            setPotPlant</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>selectedPot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plant</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>            dimension</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>playSound</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plant</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>sound</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>center</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(), { </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>volume:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}> 0.5</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> });</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        } </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>else</span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}> if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (!</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>hasItem</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>() &amp;&amp; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>isPotOccupied</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>selectedPot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>            const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> plantValue</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>permutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getState</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>\`wiki:pot_</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>\${</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>selectedPot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>_plant\`</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>            const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> plantId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Object</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>keys</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plants</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>).</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>find</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>((</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>key</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> plants</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>key</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>].</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plantValue</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>            setPotPlant</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>selectedPot</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;none&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>            dimension</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>playSound</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;random.pop&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>center</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>());</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>            mainhand</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>setItem</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>new</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> ItemStack</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plantId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>));</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>    onPlayerBreak:</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> releasePlants</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>system</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>beforeEvents</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>startup</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>subscribe</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(({ </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>blockComponentRegistry</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> }) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>    blockComponentRegistry</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>registerCustomComponent</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>        &quot;wiki:double_flower_pot&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        BlockDoubleFlowerPotComponent</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    );</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>});</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>// -------------------------------</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>//  Release plants on destruction</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>// -------------------------------</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> releasePlants</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>({ </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>brokenBlockPermutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>dimension</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> }) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> states</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>brokenBlockPermutation</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>getAllStates</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>    // Array of plant state values e.g. [&quot;cactus&quot;, &quot;dandelion&quot;]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>    const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> storedPlants</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Object</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>entries</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>states</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        .</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>filter</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(([</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>state</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> state</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>startsWith</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;wiki:pot&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) &amp;&amp; </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> !== </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"${_scopeId}>&quot;none&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>        .</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>map</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(([</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>state</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>]) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> value</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>    if</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>storedPlants</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>length</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>return</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"${_scopeId}>    // Create an item entity for every potted plant</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}"${_scopeId}>    for</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> plant</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}> of</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> storedPlants</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>        const</span><span style="${ssrRenderStyle({ "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" })}"${_scopeId}> plantId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> = </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>Object</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>keys</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plants</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>).</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>find</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>((</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>key</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}> plants</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>key</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>].</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plant</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>        dimension</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>spawnItem</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}"${_scopeId}>new</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}> ItemStack</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>plantId</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>), </span><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" })}"${_scopeId}>block</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" })}"${_scopeId}>center</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>());</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}"${_scopeId}>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}><span class="line-number"${_scopeId}>6</span><br${_scopeId}><span class="line-number"${_scopeId}>7</span><br${_scopeId}><span class="line-number"${_scopeId}>8</span><br${_scopeId}><span class="line-number"${_scopeId}>9</span><br${_scopeId}><span class="line-number"${_scopeId}>10</span><br${_scopeId}><span class="line-number"${_scopeId}>11</span><br${_scopeId}><span class="line-number"${_scopeId}>12</span><br${_scopeId}><span class="line-number"${_scopeId}>13</span><br${_scopeId}><span class="line-number"${_scopeId}>14</span><br${_scopeId}><span class="line-number"${_scopeId}>15</span><br${_scopeId}><span class="line-number"${_scopeId}>16</span><br${_scopeId}><span class="line-number"${_scopeId}>17</span><br${_scopeId}><span class="line-number"${_scopeId}>18</span><br${_scopeId}><span class="line-number"${_scopeId}>19</span><br${_scopeId}><span class="line-number"${_scopeId}>20</span><br${_scopeId}><span class="line-number"${_scopeId}>21</span><br${_scopeId}><span class="line-number"${_scopeId}>22</span><br${_scopeId}><span class="line-number"${_scopeId}>23</span><br${_scopeId}><span class="line-number"${_scopeId}>24</span><br${_scopeId}><span class="line-number"${_scopeId}>25</span><br${_scopeId}><span class="line-number"${_scopeId}>26</span><br${_scopeId}><span class="line-number"${_scopeId}>27</span><br${_scopeId}><span class="line-number"${_scopeId}>28</span><br${_scopeId}><span class="line-number"${_scopeId}>29</span><br${_scopeId}><span class="line-number"${_scopeId}>30</span><br${_scopeId}><span class="line-number"${_scopeId}>31</span><br${_scopeId}><span class="line-number"${_scopeId}>32</span><br${_scopeId}><span class="line-number"${_scopeId}>33</span><br${_scopeId}><span class="line-number"${_scopeId}>34</span><br${_scopeId}><span class="line-number"${_scopeId}>35</span><br${_scopeId}><span class="line-number"${_scopeId}>36</span><br${_scopeId}><span class="line-number"${_scopeId}>37</span><br${_scopeId}><span class="line-number"${_scopeId}>38</span><br${_scopeId}><span class="line-number"${_scopeId}>39</span><br${_scopeId}><span class="line-number"${_scopeId}>40</span><br${_scopeId}><span class="line-number"${_scopeId}>41</span><br${_scopeId}><span class="line-number"${_scopeId}>42</span><br${_scopeId}><span class="line-number"${_scopeId}>43</span><br${_scopeId}><span class="line-number"${_scopeId}>44</span><br${_scopeId}><span class="line-number"${_scopeId}>45</span><br${_scopeId}><span class="line-number"${_scopeId}>46</span><br${_scopeId}><span class="line-number"${_scopeId}>47</span><br${_scopeId}><span class="line-number"${_scopeId}>48</span><br${_scopeId}><span class="line-number"${_scopeId}>49</span><br${_scopeId}><span class="line-number"${_scopeId}>50</span><br${_scopeId}><span class="line-number"${_scopeId}>51</span><br${_scopeId}><span class="line-number"${_scopeId}>52</span><br${_scopeId}><span class="line-number"${_scopeId}>53</span><br${_scopeId}><span class="line-number"${_scopeId}>54</span><br${_scopeId}><span class="line-number"${_scopeId}>55</span><br${_scopeId}><span class="line-number"${_scopeId}>56</span><br${_scopeId}><span class="line-number"${_scopeId}>57</span><br${_scopeId}><span class="line-number"${_scopeId}>58</span><br${_scopeId}><span class="line-number"${_scopeId}>59</span><br${_scopeId}><span class="line-number"${_scopeId}>60</span><br${_scopeId}><span class="line-number"${_scopeId}>61</span><br${_scopeId}><span class="line-number"${_scopeId}>62</span><br${_scopeId}><span class="line-number"${_scopeId}>63</span><br${_scopeId}><span class="line-number"${_scopeId}>64</span><br${_scopeId}><span class="line-number"${_scopeId}>65</span><br${_scopeId}><span class="line-number"${_scopeId}>66</span><br${_scopeId}><span class="line-number"${_scopeId}>67</span><br${_scopeId}><span class="line-number"${_scopeId}>68</span><br${_scopeId}><span class="line-number"${_scopeId}>69</span><br${_scopeId}><span class="line-number"${_scopeId}>70</span><br${_scopeId}><span class="line-number"${_scopeId}>71</span><br${_scopeId}><span class="line-number"${_scopeId}>72</span><br${_scopeId}><span class="line-number"${_scopeId}>73</span><br${_scopeId}><span class="line-number"${_scopeId}>74</span><br${_scopeId}><span class="line-number"${_scopeId}>75</span><br${_scopeId}><span class="line-number"${_scopeId}>76</span><br${_scopeId}><span class="line-number"${_scopeId}>77</span><br${_scopeId}><span class="line-number"${_scopeId}>78</span><br${_scopeId}><span class="line-number"${_scopeId}>79</span><br${_scopeId}><span class="line-number"${_scopeId}>80</span><br${_scopeId}><span class="line-number"${_scopeId}>81</span><br${_scopeId}><span class="line-number"${_scopeId}>82</span><br${_scopeId}><span class="line-number"${_scopeId}>83</span><br${_scopeId}><span class="line-number"${_scopeId}>84</span><br${_scopeId}><span class="line-number"${_scopeId}>85</span><br${_scopeId}><span class="line-number"${_scopeId}>86</span><br${_scopeId}><span class="line-number"${_scopeId}>87</span><br${_scopeId}><span class="line-number"${_scopeId}>88</span><br${_scopeId}><span class="line-number"${_scopeId}>89</span><br${_scopeId}><span class="line-number"${_scopeId}>90</span><br${_scopeId}><span class="line-number"${_scopeId}>91</span><br${_scopeId}><span class="line-number"${_scopeId}>92</span><br${_scopeId}><span class="line-number"${_scopeId}>93</span><br${_scopeId}><span class="line-number"${_scopeId}>94</span><br${_scopeId}><span class="line-number"${_scopeId}>95</span><br${_scopeId}><span class="line-number"${_scopeId}>96</span><br${_scopeId}><span class="line-number"${_scopeId}>97</span><br${_scopeId}><span class="line-number"${_scopeId}>98</span><br${_scopeId}><span class="line-number"${_scopeId}>99</span><br${_scopeId}><span class="line-number"${_scopeId}>100</span><br${_scopeId}><span class="line-number"${_scopeId}>101</span><br${_scopeId}><span class="line-number"${_scopeId}>102</span><br${_scopeId}><span class="line-number"${_scopeId}>103</span><br${_scopeId}><span class="line-number"${_scopeId}>104</span><br${_scopeId}><span class="line-number"${_scopeId}>105</span><br${_scopeId}><span class="line-number"${_scopeId}>106</span><br${_scopeId}><span class="line-number"${_scopeId}>107</span><br${_scopeId}></div></div>`);
      } else {
        return [
          createVNode(_component_CodeHeader, null, {
            default: withCtx(() => [
              createTextVNode("BP/scripts/blocks/double_flower_pot.js")
            ]),
            _: 1
          }),
          createVNode("div", { class: "language-js vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "js"),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "import"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "system"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "ItemStack"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "EquipmentSlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "GameMode"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " } "),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "from"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, ' "@minecraft/server"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "import"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " SelectionBoxes"),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, " from"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, ' "../utilities/selection_boxes"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "; "),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "// Import the SelectionBoxes class to use it")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "// Support orientation along both horizontal axes")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " pots"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "    x:"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, " new"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " SelectionBoxes"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "(")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "origin:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " [-"),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "7"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", -"),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "3"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "], "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "size:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "origin:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", -"),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "3"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "], "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "size:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    ),")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "    z:"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, " new"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " SelectionBoxes"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "(")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "origin:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " [-"),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "3"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", -"),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "7"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "], "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "size:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "origin:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " [-"),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "3"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "], "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "size:"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ["),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "6"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "] }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    ),")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "// The state value and sound associated with each plant")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " plants"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:dandelion"'),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, ":"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        value:"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, ' "dandelion"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        sound:"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, ' "dig.grass"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '    "minecraft:cactus"'),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, ":"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        value:"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, ' "cactus"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        sound:"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, ' "dig.cloth"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " getAxis"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "direction"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "=>"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "direction"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"west"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " || "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "direction"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"east"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ? "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"z"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " : "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"x"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "// Get the selected pot for the appropriate axis")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "function"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " getSelectedPot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "faceLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " direction"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "permutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:cardinal_direction"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " axis"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getAxis"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "direction"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "    return"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " pots"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "axis"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getSelected"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "faceLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " isPotOccupied"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "pot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "=>")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "    block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "permutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, "`wiki:pot_"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "${"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "pot"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "}"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, "_plant`"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") !== "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"none"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " setPotPlant"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "pot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plant"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "=>")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "    block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "setPermutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "permutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "withState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, "`wiki:pot_"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "${"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "pot"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "}"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, "_plant`"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plant"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "));")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "/** "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "@type"),
                  createVNode("span", { style: { "--shiki-dark": "#4EC9B0", "--shiki-light": "#267F99" } }, ' {import("@minecraft/server").BlockCustomComponent}'),
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, " */")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " BlockDoubleFlowerPotComponent"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "    onPlayerInteract"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "({ "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "dimension"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "faceLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "player"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " }) {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " (!"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "player"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "return"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " equippable"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "player"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getComponent"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"minecraft:equippable"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " (!"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "equippable"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "return"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "equippable"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getEquipmentSlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "EquipmentSlot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " selectedPot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getSelectedPot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "faceLocation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "selectedPot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "undefined"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "return"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "        if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "hasItem"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "() && !"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "isPotOccupied"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "selectedPot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")) {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "            const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " plant"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plants"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "typeId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "];")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "            if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " (!"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plant"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "return"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "            if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "player"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getGameMode"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "() !== "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "GameMode"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "creative"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "                if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "amount"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " > "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "1"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "amount"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "--;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "                else"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "setItem"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "undefined"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "            }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "            setPotPlant"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "selectedPot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plant"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "value"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "            dimension"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "playSound"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plant"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "sound"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "center"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "(), { "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "volume:"),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, " 0.5"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " });")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        } "),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "else"),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, " if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " (!"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "hasItem"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "() && "),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "isPotOccupied"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "selectedPot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")) {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "            const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " plantValue"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "permutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getState"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, "`wiki:pot_"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "${"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "selectedPot"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "}"),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, "_plant`"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "            const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " plantId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Object"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "keys"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plants"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "find"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "(("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "key"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "=>"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " plants"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "key"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "value"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plantValue"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "            setPotPlant"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "selectedPot"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"none"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "            dimension"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "playSound"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"random.pop"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "center"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "());")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "            mainhand"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "setItem"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "new"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " ItemStack"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plantId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "));")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    },")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "    onPlayerBreak:"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " releasePlants"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "system"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "beforeEvents"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "startup"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "subscribe"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "(({ "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "blockComponentRegistry"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " }) "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "=>"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "    blockComponentRegistry"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "registerCustomComponent"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "(")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '        "wiki:double_flower_pot"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        BlockDoubleFlowerPotComponent")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    );")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "});")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "// -------------------------------")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "//  Release plants on destruction")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "// -------------------------------")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "function"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " releasePlants"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "({ "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "brokenBlockPermutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "dimension"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " }) {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " states"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "brokenBlockPermutation"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "getAllStates"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, '    // Array of plant state values e.g. ["cactus", "dandelion"]')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "    const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " storedPlants"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Object"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "entries"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "states"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        ."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "filter"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "((["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "state"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "value"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]) "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "=>"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " state"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "startsWith"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"wiki:pot"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") && "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "value"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " !== "),
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" } }, '"none"'),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "        ."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "map"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "((["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "state"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ", "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "value"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]) "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "=>"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " value"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "    if"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "storedPlants"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "length"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" } }, "0"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "return"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#6A9955", "--shiki-light": "#008000" } }, "    // Create an item entity for every potted plant")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" } }, "    for"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " ("),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " plant"),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, " of"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " storedPlants"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") {")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "        const"),
                  createVNode("span", { style: { "--shiki-dark": "#4FC1FF", "--shiki-light": "#0070C1" } }, " plantId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " = "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "Object"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "keys"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plants"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ")."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "find"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "(("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "key"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ") "),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "=>"),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, " plants"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "["),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "key"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "]."),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "value"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, " === "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plant"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "        dimension"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "spawnItem"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" } }, "new"),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, " ItemStack"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "("),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "plantId"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "), "),
                  createVNode("span", { style: { "--shiki-dark": "#9CDCFE", "--shiki-light": "#001080" } }, "block"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "."),
                  createVNode("span", { style: { "--shiki-dark": "#DCDCAA", "--shiki-light": "#795E26" } }, "center"),
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "());")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "    }")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" } }, "}")
                ])
              ])
            ]),
            createVNode("div", {
              class: "line-numbers-wrapper",
              "aria-hidden": "true"
            }, [
              createVNode("span", { class: "line-number" }, "1"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "2"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "3"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "4"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "5"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "6"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "7"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "8"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "9"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "10"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "11"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "12"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "13"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "14"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "15"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "16"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "17"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "18"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "19"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "20"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "21"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "22"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "23"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "24"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "25"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "26"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "27"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "28"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "29"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "30"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "31"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "32"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "33"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "34"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "35"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "36"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "37"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "38"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "39"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "40"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "41"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "42"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "43"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "44"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "45"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "46"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "47"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "48"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "49"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "50"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "51"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "52"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "53"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "54"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "55"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "56"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "57"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "58"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "59"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "60"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "61"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "62"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "63"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "64"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "65"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "66"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "67"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "68"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "69"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "70"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "71"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "72"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "73"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "74"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "75"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "76"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "77"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "78"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "79"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "80"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "81"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "82"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "83"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "84"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "85"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "86"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "87"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "88"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "89"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "90"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "91"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "92"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "93"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "94"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "95"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "96"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "97"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "98"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "99"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "100"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "101"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "102"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "103"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "104"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "105"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "106"),
              createVNode("br"),
              createVNode("span", { class: "line-number" }, "107"),
              createVNode("br")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="importing-scripts" tabindex="-1">Importing Scripts <a class="header-anchor" href="#importing-scripts" aria-label="Permalink to &quot;Importing Scripts&quot;">​</a></h2><p>Don&#39;t forget to import your scripts into your pack&#39;s entry file!</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/manifest.json`);
      } else {
        return [
          createTextVNode("BP/manifest.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;modules&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;type&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;script&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;language&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;javascript&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;entry&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;index.js&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// Your defined entry file</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;uuid&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;...&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.0.0&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    ],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;dependencies&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;module_name&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;@minecraft/server&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;2.0.0&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/scripts/index.js`);
      } else {
        return [
          createTextVNode("BP/scripts/index.js")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">// Import your precise interaction scripts here...</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">import</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"> &quot;./blocks/pigeonholes&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#C586C0", "--shiki-light": "#AF00DB" })}">import</span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}"> &quot;./blocks/double_flower_pot&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="download-example-pack" tabindex="-1">Download Example Pack <a class="header-anchor" href="#download-example-pack" aria-label="Permalink to &quot;Download Example Pack&quot;">​</a></h2><p>Template pack made according to this tutorial, adding the Pigeonholes and Double Flower Pot blocks into the &quot;Items&quot; tab.</p>`);
  _push(ssrRenderComponent(_component_Button, { link: "https://github.com/Bedrock-OSS/bedrock-examples/releases/download/download/precise_interaction.mcaddon" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Download MCADDON `);
      } else {
        return [
          createTextVNode(" Download MCADDON ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>If you require extra assistance with precise interaction, feel free to ask in the <a href="/discord">Bedrock Add-Ons Discord</a>! Remember to include a link to this page in your question, as the classes provided here are not built into Minecraft.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blocks/precise-interaction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const preciseInteraction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  preciseInteraction as default
};
