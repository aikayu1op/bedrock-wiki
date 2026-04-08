import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/images/blocks/block-models/new_project.png";
const _imports_1 = "/assets/images/blocks/block-models/project_settings.png";
const _imports_2 = "/assets/images/blocks/block-models/root_bone.png";
const _imports_3 = "/assets/images/blocks/block-models/select_edit_material_instances.png";
const _imports_4 = "/assets/images/blocks/block-models/edit_material_instances.png";
const __pageData = JSON.parse(`{"title":"Block Models","description":"Learn how to set up a custom model for your block.","frontmatter":{"title":"Block Models","example":"block_models","description":"Learn how to set up a custom model for your block.","category":"Visuals","tags":["guide","beginner","easy"],"license":true,"mentions":["QuazChick","SmokeyStack"]},"headers":[{"level":2,"title":"Model Setup","slug":"model-setup","link":"#model-setup","children":[]},{"level":2,"title":"Adding Cubes","slug":"adding-cubes","link":"#adding-cubes","children":[]},{"level":2,"title":"Removing Faces","slug":"removing-faces","link":"#removing-faces","children":[]},{"level":2,"title":"Previewing Textures","slug":"previewing-textures","link":"#previewing-textures","children":[]},{"level":2,"title":"Rearranging UVs","slug":"rearranging-uvs","link":"#rearranging-uvs","children":[]},{"level":2,"title":"Changing Material Instances","slug":"changing-material-instances","link":"#changing-material-instances","children":[]},{"level":2,"title":"Applying Geometry & Textures","slug":"applying-geometry-textures","link":"#applying-geometry-textures","children":[]},{"level":2,"title":"Result","slug":"result","link":"#result","children":[]},{"level":2,"title":"What's Next?","slug":"what-s-next","link":"#what-s-next","children":[]}],"params":{"example":{"id":"block_models","files":["BP/blocks/paper_bag.json","BP/contents.json","BP/manifest.json","BP/pack_icon.png","RP/models/blocks/paper_bag.geo.json","RP/texts/en_US.lang","RP/texts/languages.json","RP/textures/wiki/blocks/paper_bag_bottom_fold_mer.png","RP/textures/wiki/blocks/paper_bag_bottom_fold.png","RP/textures/wiki/blocks/paper_bag_bottom_fold.texture_set.json","RP/textures/wiki/blocks/paper_bag_mer.png","RP/textures/wiki/blocks/paper_bag_side_gusset_mer.png","RP/textures/wiki/blocks/paper_bag_side_gusset.png","RP/textures/wiki/blocks/paper_bag_side_gusset.texture_set.json","RP/textures/wiki/blocks/paper_bag.png","RP/textures/wiki/blocks/paper_bag.texture_set.json","RP/textures/terrain_texture.json","RP/textures/textures_list.json","RP/blocks.json","RP/contents.json","RP/manifest.json","RP/pack_icon.png"],"archive":{"root":"","type":"mcaddon"}}},"relativePath":"blocks/block-models.md","filePath":"blocks/block-models.md"}`);
const _sfc_main = { name: "blocks/block-models.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WikiImage = resolveComponent("WikiImage");
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_CardGrid = resolveComponent("CardGrid");
  const _component_Card = resolveComponent("Card");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Although custom blocks are unable to make use of vanilla <a href="/blocks/block-shapes">block shapes</a>, we can create our own models which follow a similar format to entity models. This tutorial will walk you through the process of creating a custom block model for a &quot;paper bag&quot; using <a href="https://blockbench.net" target="_blank" rel="noreferrer">Blockbench</a>. You should learn the main features of Minecraft geometry tailored towards creating custom blocks from this tutorial.</p><p><strong>NOTE:</strong> Custom block models must be within the <a href="/blocks/block-components#geometry">model size limits</a>.</p><h2 id="model-setup" tabindex="-1">Model Setup <a class="header-anchor" href="#model-setup" aria-label="Permalink to &quot;Model Setup&quot;">​</a></h2><p>Open Blockbench and create a new <code class="shiki"><span>Bedrock Block</span></code> project.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="New project panel with Bedrock Block selected"></p><p>Now you can give your model an identifier! Your file name can be decided here, or changed later.</p><p>The UV mode and texture size should remain unchanged.</p><div class="danger custom-block"><p class="custom-block-title">NAMESPACES</p><p>Model identifiers are <strong>not namespaced and cannot contain colons</strong>. Colons were previously used for model inheritance and are invalid in modern geometry formats.</p></div><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p><h2 id="adding-cubes" tabindex="-1">Adding Cubes <a class="header-anchor" href="#adding-cubes" aria-label="Permalink to &quot;Adding Cubes&quot;">​</a></h2><p>Despite not necessarily being perfect cube shapes, elements in your model are called <strong>cubes</strong>. All cubes must be contained within <strong>bones</strong>, which act as groups.</p><p>First, let&#39;s create a root bone for our model from the outliner by clicking on <code class="shiki"><span>Add Group</span></code>. Bones can be renamed by pressing <code class="shiki"><span>F2</span></code>.</p><p><img${ssrRenderAttr("src", _imports_2)} alt=""></p><p>The &quot;paper bag&quot; model will need two cubes: one for the handle, and one for the main bag. These can be added by selecting your root bone and clicking <code class="shiki"><span>Add Cube</span></code>.</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "new_cube.png",
    alt: "",
    width: "600",
    class: "my-4"
  }, null, _parent));
  _push(`<p>Cubes can be moved, resized and rotated from the top toolbar. Below are the two cubes my &quot;paper_bag&quot; model will use.</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "paper_bag_cubes.png",
    alt: "",
    width: "300"
  }, null, _parent));
  _push(`<h2 id="removing-faces" tabindex="-1">Removing Faces <a class="header-anchor" href="#removing-faces" aria-label="Permalink to &quot;Removing Faces&quot;">​</a></h2><p>Some of the faces of our cubes might not need to be visible. In my example, the top face of the paper_bag should be removed so that you can see inside.</p><p>To remove a face, click on it in the preview and remove its UV.</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "paper_bag_top_removed.png",
    alt: "",
    width: "600"
  }, null, _parent));
  _push(`<p>Additionally, only the north and south faces of the handle should be visible. You can select multiple faces by holding Ctrl while clicking on the face names in the UV panel.</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "paper_bag_handle_faces_removed.png",
    alt: "",
    width: "600"
  }, null, _parent));
  _push(`<h2 id="previewing-textures" tabindex="-1">Previewing Textures <a class="header-anchor" href="#previewing-textures" aria-label="Permalink to &quot;Previewing Textures&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Textures can be created in Blockbench by clicking <code class="shiki"><span>Create Texture</span></code> and selecting <code class="shiki"><span>Blank</span></code>.</p></div><p>The &quot;paper_bag&quot; model has multiple pre-made textures, listed below:</p><div style="${ssrRenderStyle({ "display": "grid", "grid-template-columns": "repeat(auto-fill, 256px)", "column-gap": "1em" })}">`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAASUExURceVNbaIMK+DL6l/LKV7KgAAALdZ4LgAAAAGdFJOU///////ALO/pL8AAAAJcEhZcwAADsIAAA7CARUoSoAAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuN4vW9zkAAAC2ZVhJZklJKgAIAAAABQAaAQUAAQAAAEoAAAAbAQUAAQAAAFIAAAAoAQMAAQAAAAIAAAAxAQIAEAAAAFoAAABphwQAAQAAAGoAAAAAAAAA8nYBAOgDAADydgEA6AMAAFBhaW50Lk5FVCA1LjEuNwADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlAAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAABCqaniuvll8QAAAEFJREFUKFN1ykEOADAERFEG979yg4ZZtH8hvJDIRFVVet35hfzeQgJ84wkkaBhBgTFYwxUsTAUkluBG+RNIvIGLA25sAsO04haOAAAAAElFTkSuQmCC",
    alt: "",
    caption: "RP/textures/wiki/blocks/paper_bag.png",
    link: "/blocks/block-models/files/RP/textures/wiki/blocks/paper_bag.png",
    title: "View File",
    pixelated: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAX0lEQVQ4EWOYlKv6f2m1FkkYpIcBBkCcqQXqRBsAUovVAGIMAanBagDMFfgMQdaM4QJkA2aXaPzHhvEaAJPEphFZDKYOwwUgCWSF+NggtRgG4NOATQ7FAFh0jtIjOgQA5tz39bB2GAYAAAAASUVORK5CYII=",
    alt: "",
    caption: "RP/textures/wiki/blocks/paper_bag_bottom_fold.png",
    link: "/blocks/block-models/files/RP/textures/wiki/blocks/paper_bag_bottom_fold.png",
    title: "View File",
    pixelated: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkklEQVQ4EdWQMQqEMBBFcxxdFD3cFoKFgo13sLBKsWxh5/WULzyYQhljZ2D4KfLeZCb8+3KztY71Zit4x8K6W1h3jw+xLS5/sAzVPYGV8APBSQJJVIDkrRGAHwnmJj86I6Gz8tcV/g4ksBIEgpMEiABJdweAJCDpCqZvdoxwJojtx9+BBFZCZ8FJAkSApDvC+x/sI5PxPigmWa0AAAAASUVORK5CYII=",
    alt: "",
    caption: "RP/textures/wiki/blocks/paper_bag_side_gusset.png",
    link: "/blocks/block-models/files/RP/textures/wiki/blocks/paper_bag_side_gusset.png",
    title: "View File",
    pixelated: ""
  }, null, _parent));
  _push(`</div><p>These can be imported into Blockbench and then dragged onto each appropriate block face, although they likely won&#39;t look quite right...</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "preview_textures_applied.png",
    alt: "",
    width: "300"
  }, null, _parent));
  _push(`<h2 id="rearranging-uvs" tabindex="-1">Rearranging UVs <a class="header-anchor" href="#rearranging-uvs" aria-label="Permalink to &quot;Rearranging UVs&quot;">​</a></h2><p>To get textures into the right positions, you may need to reposition/resize your faces&#39; UV mapping. This can be done by selecting the affected face and using the UV panel.</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "paper_bag_handle_uv.png",
    alt: "",
    width: "300"
  }, null, _parent));
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "paper_bag_final.png",
    alt: "",
    width: "300"
  }, null, _parent));
  _push(`<h2 id="changing-material-instances" tabindex="-1">Changing Material Instances <a class="header-anchor" href="#changing-material-instances" aria-label="Permalink to &quot;Changing Material Instances&quot;">​</a></h2><p>Applying custom material instance names can be used to easily define how certain faces are rendered.</p><p>They can be edited by right-clicking on a cube and opening <code class="shiki"><span>Edit Material Instances</span></code></p><p><img${ssrRenderAttr("src", _imports_3)} alt=""></p><p>For the &quot;paper_bag&quot; model, the east and west faces should have their own texture. We can indicate this by giving them a material instance.</p><p><img${ssrRenderAttr("src", _imports_4)} alt=""></p><h2 id="applying-geometry-textures" tabindex="-1">Applying Geometry &amp; Textures <a class="header-anchor" href="#applying-geometry-textures" aria-label="Permalink to &quot;Applying Geometry &amp; Textures&quot;">​</a></h2><p>Once exported from <code class="shiki"><span>File &gt; Export &gt; Export Bedrock Geometry</span></code> into your <code class="shiki"><span>RP/models/blocks</span></code> folder, you can reference a model in your block JSON.</p><p>Then, textures can be applied by material instances through their <code class="shiki"><span>RP/textures/terrain_texture.json</span></code> shortname.</p><div class="warning custom-block"><p class="custom-block-title">BLOCKS.JSON</p><p>Adding <a href="/blocks/block-components#geometry"><code class="shiki"><span>minecraft:geometry</span></code></a> to your block will cause the game to ignore texture definitions in <code class="shiki"><span>RP/blocks.json</span></code>.</p><p>If you have textures for your block defined in that file, make sure you move them to <a href="/blocks/block-components#material-instances"><code class="shiki"><span>minecraft:material_instances</span></code></a> for them to appear.</p></div>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="/blocks/block-models/files/BP/blocks/paper_bag.json" title="View File"${_scopeId}>BP/blocks/paper_bag.json</a>`);
      } else {
        return [
          createVNode("a", {
            href: "/blocks/block-models/files/BP/blocks/paper_bag.json",
            title: "View File"
          }, "BP/blocks/paper_bag.json")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;format_version&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;1.26.10&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">    &quot;minecraft:block&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;description&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;identifier&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:paper_bag&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;menu_category&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;category&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;items&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">        &quot;components&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:collision_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#569CD6", "--shiki-light": "#0000FF" })}">false</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:selection_box&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;origin&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-7</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">0</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">-4</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;size&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: [</span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">14</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">13</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">, </span><span style="${ssrRenderStyle({ "--shiki-dark": "#B5CEA8", "--shiki-light": "#098658" })}">8</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">            // Prevent blocks such as fences and glass panes from connecting</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:connection_rule&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;accepts_connections_from&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;none&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">            // Apply your model by referencing its identifier</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:geometry&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;geometry.paper_bag&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">            // Apply textures and other rendering configuration</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">            &quot;minecraft:material_instances&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;*&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:paper_bag&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;render_method&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;alpha_test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"> // Disable backface culling and allow transparency</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;down&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:paper_bag_bottom_fold&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;render_method&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;alpha_test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"> // Must be the same in all instances</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">                // Custom instance name used in model</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                &quot;side_gusset&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;texture&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;wiki:paper_bag_side_gusset&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#9CDCFE", "--shiki-light": "#0451A5" })}">                    &quot;render_method&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">: </span><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#A31515" })}">&quot;alpha_test&quot;</span><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}"> // Must be the same in all instances</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#D4D4D4", "--shiki-light": "#000000" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h2 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-label="Permalink to &quot;Result&quot;">​</a></h2><p>You now know how to make a custom block that uses your own custom model!</p><h2 id="what-s-next" tabindex="-1">What&#39;s Next? <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s Next?&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CardGrid, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Card, {
          title: "Create Culling Rules",
          link: "/blocks/block-culling",
          image: "/assets/images/icons/crafting_table.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>Creating culling rules for your model can aid performance by telling the game to hide parts of your model that are being unnecessarily rendered.</p>`);
            } else {
              return [
                createVNode("p", null, "Creating culling rules for your model can aid performance by telling the game to hide parts of your model that are being unnecessarily rendered.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "Conditional Bones",
          link: "/blocks/block-components#bone-visibility",
          image: "/assets/images/icons/levers.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>Use the <code class="shiki"${_scopeId2}><span${_scopeId2}>bone_visibility</span></code> parameter of the <a href="/blocks/block-components#geometry"${_scopeId2}>geometry</a> component to render different model bones based on your block&#39;s current permutation.</p>`);
            } else {
              return [
                createVNode("p", null, [
                  createTextVNode("Use the "),
                  createVNode("code", { class: "shiki" }, [
                    createVNode("span", null, "bone_visibility")
                  ]),
                  createTextVNode(" parameter of the "),
                  createVNode("a", { href: "/blocks/block-components#geometry" }, "geometry"),
                  createTextVNode(" component to render different model bones based on your block's current permutation.")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Card, {
          title: "Vanilla Models",
          link: "/blocks/vanilla-block-models",
          image: "/assets/images/icons/diamond_ore.png"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>Use a vanilla model rather than making your own for simple blocks! These models are especially useful when making full blocks and plants for your add-on.</p>`);
            } else {
              return [
                createVNode("p", null, "Use a vanilla model rather than making your own for simple blocks! These models are especially useful when making full blocks and plants for your add-on.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Card, {
            title: "Create Culling Rules",
            link: "/blocks/block-culling",
            image: "/assets/images/icons/crafting_table.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, "Creating culling rules for your model can aid performance by telling the game to hide parts of your model that are being unnecessarily rendered.")
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "Conditional Bones",
            link: "/blocks/block-components#bone-visibility",
            image: "/assets/images/icons/levers.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, [
                createTextVNode("Use the "),
                createVNode("code", { class: "shiki" }, [
                  createVNode("span", null, "bone_visibility")
                ]),
                createTextVNode(" parameter of the "),
                createVNode("a", { href: "/blocks/block-components#geometry" }, "geometry"),
                createTextVNode(" component to render different model bones based on your block's current permutation.")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_Card, {
            title: "Vanilla Models",
            link: "/blocks/vanilla-block-models",
            image: "/assets/images/icons/diamond_ore.png"
          }, {
            default: withCtx(() => [
              createVNode("p", null, "Use a vanilla model rather than making your own for simple blocks! These models are especially useful when making full blocks and plants for your add-on.")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blocks/block-models.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blockModels = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  blockModels as default
};
