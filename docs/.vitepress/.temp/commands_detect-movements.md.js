import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_1 } from "./5.DwcU4oVp.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/images/commands/detect-movements/sleeping.jpg";
const _imports_2 = "/assets/images/commands/detect-movements/sneaking.png";
const _imports_3 = "/assets/images/commands/detect-movements/crawling.png";
const _imports_4 = "/assets/images/commands/detect-movements/issue2.png";
const _imports_5 = "/assets/images/commands/detect-movements/issue3.png";
const _imports_6 = "/assets/images/commands/command-block-chain/9.png";
const __pageData = JSON.parse(`{"title":"Movement Detections","description":"These command-techniques allow you to detect certain player/entity 'states' and subsequently execute your desired commands.","frontmatter":{"title":"Movement Detections","category":"Detection Systems","mentions":["BedrockCommands","zheaEvyline"],"description":"These command-techniques allow you to detect certain player/entity 'states' and subsequently execute your desired commands."},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Sleep Detection","slug":"sleep-detection","link":"#sleep-detection","children":[]},{"level":2,"title":"Sneak Detection","slug":"sneak-detection","link":"#sneak-detection","children":[]},{"level":2,"title":"Crawl Detection","slug":"crawl-detection","link":"#crawl-detection","children":[]},{"level":2,"title":"Differentiating Crawling, Gliding And Swimming","slug":"differentiating-crawling-gliding-and-swimming","link":"#differentiating-crawling-gliding-and-swimming","children":[]},{"level":2,"title":"Walk or Run Detection","slug":"walk-or-run-detection","link":"#walk-or-run-detection","children":[]},{"level":2,"title":"Folder Structure","slug":"folder-structure","link":"#folder-structure","children":[]}],"relativePath":"commands/detect-movements.md","filePath":"commands/detect-movements.md"}`);
const _sfc_main = { name: "commands/detect-movements.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_FolderView = resolveComponent("FolderView");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p><a href="https://bedrockcommands.org/" target="_blank" rel="noreferrer">Sourced by the Bedrock Commands Community (BCC) Discord</a></p><p><a href="https://minecraft.wiki/" target="_blank" rel="noreferrer">Image Credits: Minecraft Wiki - </a><strong><a href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank" rel="noreferrer">CC BY-NC-SA 3.0</a></strong></p><p>These command-techniques allow you to detect certain player/entity &#39;states&#39; and subsequently execute your desired commands.</p><blockquote><p>Note: For a more performant and high-accuracy approach, it is advisable to use <a href="/animation-controllers/animation-controllers-intro">Animation Controllers</a></p></blockquote><h2 id="sleep-detection" tabindex="-1">Sleep Detection <a class="header-anchor" href="#sleep-detection" aria-label="Permalink to &quot;Sleep Detection&quot;">​</a></h2><p>This technique allows you to detect when the player is/isn&#39;t sleeping.</p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><p>Note: When sleeping, the player&#39;s hitbox is reduced to 0.2 blocks.</p><p><strong>Commands:</strong></p><ul><li>Make sure you add the <code class="shiki"><span>wiki:q.is_sleeping</span></code> scoreboard objective: <ul><li><code class="shiki"><span>/scoreboard objectives add wiki:wiki:q.is_sleeping dummy</span></code></li></ul></li></ul>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/detect/player/is_sleeping.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/detect/player/is_sleeping.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Sleep Detection</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Mark as not sleeping</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a at @s if entity @s[y=~0.3, dy=0] run scoreboard players set @s wiki:q.is_sleeping 0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Mark as sleeping</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a at @s unless entity @s[y=~0.3, dy=0] run scoreboard players add @s wiki:q.is_sleeping 1</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Your Commands Here (Examples)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[scores={wiki:q.is_sleeping=0}] run say I&#39;m not sleeping</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[scores={wiki:q.is_sleeping=1}] run say I started sleeping</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[scores={wiki:q.is_sleeping=1..}] run say I&#39;m still sleeping</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img${ssrRenderAttr("src", _imports_1)} alt="Chain of Five Command Blocks"></p><p>It is a requirement to follow this same sequence and properly apply the <code class="shiki"><span>scores</span></code> selector argument as shown for your desired commands.</p><p><strong>States:</strong></p><ul><li><strong><code class="shiki"><span>wiki:q.is_sleeping=0</span></code></strong> player is <em>not</em> sleeping.</li><li><strong><code class="shiki"><span>wiki:q.is_sleeping=1</span></code></strong> player started sleeping. (used for &#39;trigger&#39; actions)</li><li><strong><code class="shiki"><span>wiki:q.is_sleeping=1..</span></code></strong> player is still sleeping. (used for repeating actions)</li></ul><p><strong>Purpose of Each Command:</strong></p><ul><li><strong>Command 1:</strong> If the player&#39;s hitbox is higher than 0.2 blocks, we mark them as <em>not</em> sleeping (0)</li><li><strong>Command 2:</strong> If the player&#39;s hitbox is <em>not</em> higher than 0.2 blocks, we mark them as sleeping (1) by adding a score. <ul><li>The score will keep incrementing if they don&#39;t stop sleeping. Allowing us to use single-execution commands each time they start sleeping.</li></ul></li><li><strong>Command 3, 4, 5:</strong> These are example commands (for each state) which can be modified / expanded.</li></ul><h2 id="sneak-detection" tabindex="-1">Sneak Detection <a class="header-anchor" href="#sneak-detection" aria-label="Permalink to &quot;Sneak Detection&quot;">​</a></h2><p>This technique allows you to detect when the player is/isn&#39;t sneaking.</p><p><img${ssrRenderAttr("src", _imports_2)} alt=""></p><p>Thanks to the introduction of Short Sneaking parity in 1.20.10 which reduces the player hitbox to 1.5 blocks when sneaking, making a proper sneak-detection using just commands is now possible which previously required add-on assistance.</p><p><strong>Commands:</strong></p><ul><li>Make sure you add the <code class="shiki"><span>wiki:q.is_sneaking</span></code> scoreboard objective: <ul><li><code class="shiki"><span>/scoreboard objectives add wiki:wiki:q.is_sneaking dummy</span></code></li></ul></li></ul>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/detect/player/is_sneaking.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/detect/player/is_sneaking.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Sneak Detection</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Mark as not sneaking</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a at @s if entity @s[y=~1.5, dy=0] run scoreboard players set @s wiki:q.is_sneaking 0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Mark as sneaking</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a at @s unless entity @s[y=~1.5, dy=0] if entity @s[y=~0.7, dy=0] run scoreboard players add @s wiki:q.is_sneaking 1</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Your Commands Here (Examples)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[scores={wiki:q.is_sneaking=0}] run say I&#39;m not sneaking</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[scores={wiki:q.is_sneaking=1}] run say I started sneaking</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[scores={wiki:q.is_sneaking=1..}] run say I&#39;m still sneaking</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img${ssrRenderAttr("src", _imports_1)} alt="Chain of 5 Command Blocks"></p><p>It is a requirement to follow this same sequence and properly apply the <code class="shiki"><span>scores</span></code> selector argument as shown for your desired commands.</p><p><strong>States:</strong></p><ul><li><strong><code class="shiki"><span>wiki:q.is_sneaking=0</span></code></strong> player is <em>not</em> sneaking.</li><li><strong><code class="shiki"><span>wiki:q.is_sneaking=1</span></code></strong> player started sneaking. (used for &#39;trigger&#39; actions)</li><li><strong><code class="shiki"><span>wiki:q.is_sneaking=1..</span></code></strong> player is still sneaking. (used for repeating actions)</li></ul><p><strong>Purpose of Each Command:</strong></p><ul><li><strong>Command 1:</strong> If the player&#39;s hitbox is higher than 1.4 blocks, we mark them as <em>not</em> sneaking (0)</li><li><strong>Command 2:</strong> If the player&#39;s hitbox is <em>not</em> higher than 1.4 blocks, we mark them as sneaking (1) by adding a score. <ul><li>The score will keep incrementing if they don&#39;t stop sneaking. Allowing us to use single-execution commands each time they start sneaking.</li><li>To prevent false-triggers when sleeping or crawling, we will also require their hitbox to be higher than 0.6 blocks.</li></ul></li><li><strong>Command 3, 4, 5:</strong> These are example commands (for each state) which can be modified / expanded.</li></ul><h2 id="crawl-detection" tabindex="-1">Crawl Detection <a class="header-anchor" href="#crawl-detection" aria-label="Permalink to &quot;Crawl Detection&quot;">​</a></h2><p>This technique allows you to detect when the player is/isn&#39;t crawling.</p><p><img${ssrRenderAttr("src", _imports_3)} alt=""></p><p>Note: When crawling, the player&#39;s hitbox is reduced to 0.6 blocks.</p><div class="warning custom-block"><p class="custom-block-title">Known Issue:</p><p>Swimming in water or gliding with Elytra will be detected as crawling.</p></div><p><strong>Commands:</strong></p><ul><li>Make sure you add the <code class="shiki"><span>wiki:q.is_crawling</span></code> scoreboard objective: <ul><li><code class="shiki"><span>/scoreboard objectives add wiki:wiki:q.is_crawling dummy</span></code></li></ul></li></ul>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/detect/player/is_crawling.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/detect/player/is_crawling.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Crawl Detection</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Mark as not crawling</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a at @s if entity @s[y=~0.7, dy=0] run scoreboard players set @s wiki:q.is_crawling 0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Mark as crawling</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a at @s unless entity @s[y=~0.7, dy=0] if entity @s[y=~0.3, dy=0] run scoreboard players add @s wiki:q.is_crawling 1</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Your Commands Here (Examples)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[scores={wiki:q.is_crawling=0}] run say I&#39;m not crawling</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[scores={wiki:q.is_crawling=1}] run say I started crawling</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[scores={wiki:q.is_crawling=1..}] run say I&#39;m still crawling</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img${ssrRenderAttr("src", _imports_1)} alt="Chain of Five Command Blocks"></p><p>It is a requirement to follow this same sequence and properly apply the <code class="shiki"><span>scores</span></code> selector argument as shown for your desired commands.</p><p><strong>States:</strong></p><ul><li><strong><code class="shiki"><span>wiki:q.is_crawling=0</span></code></strong> player is <em>not</em> crawling.</li><li><strong><code class="shiki"><span>wiki:q.is_crawling=1</span></code></strong> player started crawling. (used for &#39;trigger&#39; actions)</li><li><strong><code class="shiki"><span>wiki:q.is_crawling=1..</span></code></strong> player is still crawling. (used for repeating actions)</li></ul><p><strong>Purpose of Each Command:</strong></p><ul><li><strong>Command 1:</strong> If the player&#39;s hitbox is higher than 0.6 blocks, we mark them as <em>not</em> crawling (0)</li><li><strong>Command 2:</strong> If the player&#39;s hitbox is <em>not</em> higher than 0.6 blocks, we mark them as crawling (1) by adding a score. <ul><li>The score will keep incrementing if they don&#39;t stop crawling. Allowing us to use single-execution commands each time they start crawling.</li><li>To prevent false-triggers when sleeping, we will require their hitbox to be higher than 0.2 blocks.</li></ul></li><li><strong>Command 3, 4, 5:</strong> These are example commands (for each state) which can be modified / expanded.</li></ul><h2 id="differentiating-crawling-gliding-and-swimming" tabindex="-1">Differentiating Crawling, Gliding And Swimming <a class="header-anchor" href="#differentiating-crawling-gliding-and-swimming" aria-label="Permalink to &quot;Differentiating Crawling, Gliding And Swimming&quot;">​</a></h2><p>If you desperately need to detect all three states separately <strong>solely using commands</strong>, you may use this technique below.</p><div class="warning custom-block"><p class="custom-block-title">Known Issues:</p><ol><li>Gliding while touching the ground/ceiling or crashing straight into a wall will be detected as crawling.</li><li>Crawling from absolute corner of a block while wearing an Elytra, with no adjacent blocks above or below, will be detected as gliding. <ul><li><img${ssrRenderAttr("src", _imports_4)} alt="issue2"></li></ul></li><li>Swimming in a waterlogged block under another waterlogged block will be detected as crawling. <ul><li><img${ssrRenderAttr("src", _imports_5)} alt="issue3"></li></ul></li></ol></div>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/detect/player/is_crawling.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/detect/player/is_crawling.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Set Player States</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Not gliding</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a at @s if entity @s[y=~0.7, dy=0] run scoreboard players set @s wiki:q.is_gliding 0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Not crawling</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a at @s if entity @s[y=~0.7, dy=0] run scoreboard players set @s wiki:q.is_crawling 0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Not swimming</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a at @s if entity @s[y=~0.7, dy=0] run scoreboard players set @s wiki:q.is_swimming 0</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Detect Player States</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Gliding</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[hasitem={item=elytra,location=slot.armor.chest}] at @s unless entity @s[y=~0.7,dy=0] if entity @s[y=~0.3,dy=0] if block ~~1.01~ air if block ~~-0.01~ air rotated ~ 0 if block ^^1.01^-1 air if block ^^-0.01^-1 air if block ^^1.01^1 air if block ^^-0.01^1 air run scoreboard players add @s wiki:q.is_gliding 1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Crawling</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[scores={wiki:q.is_gliding=0}] at @s unless entity @s[y=~0.7,dy=0] if entity @s[y=~0.3,dy=0] unless block ~~~ water unless block ~~1.01~ water run scoreboard players add @s wiki:q.is_crawling 1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Swimming</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[scores={wiki:q.is_gliding=0,wiki:q.is_crawling=0}] at @s unless entity @s[y=~0.7, dy=0] if entity @s[y=~0.3,dy=0] run scoreboard players add @s wiki:q.is_swimming 1</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Your Commands Here (Examples)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[scores={wiki:q.is_swimming=0}] run say I&#39;m not swimming</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[scores={wiki:q.is_crawling=1}] run say I started crawling</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @a[scores={wiki:q.is_gliding=1..}] run say I&#39;m still gliding</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><img${ssrRenderAttr("src", _imports_6)} alt="Chain of Nine Command Blocks"></p><p><strong>Purpose of Each Command:</strong></p><ul><li><strong>Command 1, 2, 3:</strong> If the player&#39;s hitbox is higher than 0.6 blocks, we mark them as <em>not</em> gliding/crawling/swimming (0)</li><li><strong>Command 4:</strong> If the player&#39;s hitbox is <em>not</em> higher than 0.6 blocks, has equipped an elytra, and has no blocks above/below their head/chest/feet, we mark them as gliding (1) by adding a score. <ul><li>The score will keep incrementing if they don&#39;t stop gliding. Allowing us to use single-execution commands each time they start gliding. We will employ the same for crawling/gliding.</li><li>To prevent false-triggers when sleeping, we will also require their hitbox to be higher than 0.2 blocks. We will employ the same for crawling/gliding.</li></ul></li><li><strong>Command 5:</strong> If the player&#39;s hitbox is <em>not</em> higher than 0.6 blocks, is not gliding, and has no water above/below them, we mark them as crawling (1) by adding a score.</li><li><strong>Command 6:</strong> If the player&#39;s hitbox is <em>not</em> higher than 0.6 blocks, is not gliding or crawling, we mark them as swimming (1) by adding a score.</li><li><strong>Command 7, 8, 9:</strong> These are example commands (for each state) which can be modified / expanded.</li></ul><h2 id="walk-or-run-detection" tabindex="-1">Walk or Run Detection <a class="header-anchor" href="#walk-or-run-detection" aria-label="Permalink to &quot;Walk or Run Detection&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">REMOVED</p><p>The walk/run detection method has been deprecated. A recent game update changed leash knot behavior, causing them to despawn immediately if they are not tied to a fence post. This prevents them from being used as independent, static marker entities in command systems. We are currently exploring alternatives and will update this section if a viable workaround is discovered.</p></div><h2 id="folder-structure" tabindex="-1">Folder Structure <a class="header-anchor" href="#folder-structure" aria-label="Permalink to &quot;Folder Structure&quot;">​</a></h2><p>If you are working with functions, your folder structure may look something like this:</p>`);
  _push(ssrRenderComponent(_component_FolderView, { paths: [
    "BP",
    "BP/functions",
    "BP/manifest.json",
    "BP/pack_icon.png",
    "BP/functions/wiki",
    "BP/functions/wiki/main.mcfunction",
    "BP/functions/wiki/detect",
    "BP/functions/wiki/detect/player",
    "BP/functions/wiki/detect/player/is_sleeping.mcfunction",
    "BP/functions/wiki/detect/player/is_crawling.mcfunction",
    "BP/functions/tick.json"
  ] }, null, _parent));
  _push(`<p>In this setup, all functions inside the <code class="shiki"><span>/detect/player/</span></code> folder is called by <code class="shiki"><span>main.mcfunction</span></code>, which is executed every tick via <code class="shiki"><span>tick.json</span></code>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("commands/detect-movements.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const detectMovements = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  detectMovements as default
};
