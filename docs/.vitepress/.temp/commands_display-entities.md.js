import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./8.CUqnGdP3.js";
import { _ as _imports_0$1 } from "./10.CBkaswg7.js";
import { _ as _imports_1 } from "./1.MC0i4d8f.js";
import { _ as _imports_0$2 } from "./3.DiXi2sCX.js";
import { _ as _imports_1$1 } from "./5.DwcU4oVp.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_2 = "/assets/images/commands/display-entities/change-fmbe-block-dynamically.gif";
const _imports_5 = "/assets/images/commands/display-entities/advanced-fmbe-diagonal-transformation.gif";
const __pageData = JSON.parse('{"title":"FMBE - 表示エンティティを作る新しい方法","description":"Bedrock でコマンドだけを使ってブロック表示エンティティを作るためのガイドです。","frontmatter":{"title":"FMBE - 表示エンティティを作る新しい方法","category":"Techniques","tags":["intermediate"],"mentions":["BedrockCommands","PipiSpamton","zheaEvyline","szea-ll14"],"nav_order":5,"description":"Bedrock でコマンドだけを使ってブロック表示エンティティを作るためのガイドです。"},"headers":[{"level":2,"title":"はじめに","slug":"はじめに","link":"#はじめに","children":[]},{"level":2,"title":"動画デモ","slug":"動画デモ","link":"#動画デモ","children":[]},{"level":2,"title":"システム","slug":"システム","link":"#システム","children":[]},{"level":2,"title":"FMBE の使い方","slug":"fmbe-の使い方","link":"#fmbe-の使い方","children":[{"level":3,"title":"セットアップ","slug":"セットアップ","link":"#セットアップ","children":[]},{"level":3,"title":"変数","slug":"変数","link":"#変数","children":[]},{"level":3,"title":"値の編集","slug":"値の編集","link":"#値の編集","children":[]},{"level":3,"title":"FMBE の保存と読み込み","slug":"fmbe-の保存と読み込み","link":"#fmbe-の保存と読み込み","children":[]},{"level":3,"title":"FMBE の音を止める","slug":"fmbe-の音を止める","link":"#fmbe-の音を止める","children":[]},{"level":3,"title":"FMBE のブロック表示を動的に変更する","slug":"fmbe-のブロック表示を動的に変更する","link":"#fmbe-のブロック表示を動的に変更する","children":[]}]},{"level":2,"title":"簡略版 FMBE","slug":"簡略版-fmbe","link":"#簡略版-fmbe","children":[]},{"level":2,"title":"動画ガイド","slug":"動画ガイド","link":"#動画ガイド","children":[]},{"level":2,"title":"コミュニティ作品","slug":"コミュニティ作品","link":"#コミュニティ作品","children":[]},{"level":2,"title":"高度な FMBE 対角変換 - BETA","slug":"高度な-fmbe-対角変換-beta","link":"#高度な-fmbe-対角変換-beta","children":[{"level":3,"title":"高度な FMBE 表示カテゴリ","slug":"高度な-fmbe-表示カテゴリ","link":"#高度な-fmbe-表示カテゴリ","children":[]},{"level":3,"title":"高度な FMBE 変数","slug":"高度な-fmbe-変数","link":"#高度な-fmbe-変数","children":[]},{"level":3,"title":"高度な FMBE システム","slug":"高度な-fmbe-システム","link":"#高度な-fmbe-システム","children":[]},{"level":3,"title":"高度な FMBE シミュレーター","slug":"高度な-fmbe-シミュレーター","link":"#高度な-fmbe-シミュレーター","children":[]},{"level":3,"title":"高度な FMBE の今後の追加予定","slug":"高度な-fmbe-の今後の追加予定","link":"#高度な-fmbe-の今後の追加予定","children":[]}]}],"relativePath":"commands/display-entities.md","filePath":"commands/display-entities.md"}');
const _sfc_main = { name: "commands/display-entities.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_YouTubeEmbed = resolveComponent("YouTubeEmbed");
  const _component_CodeHeader = resolveComponent("CodeHeader");
  const _component_Spoiler = resolveComponent("Spoiler");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h2><p><a href="https://bedrockcommands.org/" target="_blank" rel="noreferrer">Sourced by the Bedrock Commands Community (BCC) Discord</a></p><p>このページでは、Minecraft Bedrock でコマンドだけを使ってブロック表示エンティティを作る方法を学びます。</p><p>この手法を最初に開発したのは <a href="https://www.reddit.com/user/Maxed_Out10/" target="_blank" rel="noreferrer">u/Maxed_Out10</a> で、Vanilla コマンドだけを使っていました。彼の手法は柔軟性は低いものの、アーマースタンドを使うためかなり単純です。彼の方法については、<a href="/commands/block-entities">&quot;MBE - Max&#39;s Block Entity&quot;</a> のページを参照してください。</p><p>Max&#39;s Block Entity (MBE) に着想を得て、コマンドの専門家である @pipi_Spamton、@siratama、そして <a href="https://discord.gg/xFZH6QJfSB" target="_blank" rel="noreferrer">Japanese Commanders Gathering</a> のチームは、Minecraft Bedrock でブロック表示エンティティを作る新しい手法を考案しました。こちらはより柔軟で、カスタマイズ性も高くなっています。MBE と同じ原理に基づいていますが、アーマースタンドの代わりに、キツネの骨格を使ってブロック表示を描画します。</p><p>一般的には block display entities、あるいは単に &quot;display entities&quot; と呼べます。ただし <a href="https://www.reddit.com/user/Maxed_Out10/" target="_blank" rel="noreferrer">u/Maxed_Out10</a> への敬意から、Bedrock コミュニティではより一般に &quot;Fox MBE&quot;（FMBE）として知られています。</p><div class="info custom-block"><p class="custom-block-title">注</p><ul><li>この方法では、ブロック表示 1 つにつきキツネ 1 匹を使います。そのため、キツネが多すぎると（ほかのエンティティと同様に）サーバーラグの原因になります。</li><li>プレイヤーはその中を通り抜けられますし、制限しなければ干渉もできます。</li></ul></div><h2 id="動画デモ" tabindex="-1">動画デモ <a class="header-anchor" href="#動画デモ" aria-label="Permalink to &quot;動画デモ&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_YouTubeEmbed, { id: "FVRd2n7JX3k" }, null, _parent));
  _push(`<h2 id="システム" tabindex="-1">システム <a class="header-anchor" href="#システム" aria-label="Permalink to &quot;システム&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/fmbe/render.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/fmbe/render.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Reposition and Define FMBE Scale</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">playanimation @e[tag=wiki:fmbe] animation.player.sleeping none 0 &quot;&quot; controller.animation.fox.move</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">playanimation @e[tag=wiki:fmbe] animation.creeper.swelling none 0 &quot;v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.xzscale=v.xzscale??1;v.yscale=v.yscale??1;v.swelling_scale1=2.1385*math.sqrt(v.xzscale)*math.sqrt(v.scale);v.swelling_scale2=2.1385*math.sqrt(v.yscale)*math.sqrt(v.scale);&quot; wiki:scale</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement none 0 &quot;v.head_rotation_x=0;v.head_rotation_y=0;v.head_rotation_z=0;v.head_position_x=(v.xbasepos*3741/8000)*math.sqrt(v.xzscale)*math.sqrt(v.scale);v.head_position_y=(10.6925+v.ybasepos*3741/8000)*math.sqrt(v.yscale)*math.sqrt(v.scale);v.head_position_z=(17.108-v.zbasepos*3741/8000)*math.sqrt(v.xzscale)*math.sqrt(v.scale);&quot; wiki:shift_pos</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Define FMBE Rotation</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### X Axis</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">playanimation @e[tag=wiki:fmbe] animation.warden.move none 0 &quot;v.body_x_rot=90+v.xrot;v.body_z_rot=90+v.yrot;&quot; wiki:xrot</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Z Axis</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations none 0 &quot;v.attack_body_rot_y=-v.zrot;&quot; wiki:zrot</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Define FMBE Position</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### X Axis</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">playanimation @e[tag=wiki:fmbe] animation.parrot.moving none 0 &quot;v.wing_flap=(16-v.xpos)/0.3;&quot; wiki:xpos</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Y Axis</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">playanimation @e[tag=wiki:fmbe] animation.minecart.move.v1.0 none 0 &quot;v.rail_offset.x=0;v.rail_offset.y=1.6485+v.ypos/16;v.rail_offset.z=0;&quot; wiki:ypos</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">### Z Axis</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">playanimation @e[tag=wiki:fmbe] animation.parrot.dance none 0 &quot;v.dance.x=-v.zpos;v.dance.y=0;&quot; wiki:zpos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><img${ssrRenderAttr("src", _imports_0)} alt="Chain of 8 Command Blocks"></p><p>注: コントローラー名を指定すると、前のアニメーションを上書きせずに重ねられます。例:</p><ul><li><code class="shiki"><span>wiki:scale</span></code> (where <code class="shiki"><span>wiki</span></code> is a namespace).</li></ul><p>最初のコマンドのコントローラー名は <code class="shiki"><span>controller.animation.fox.move</span></code> にしてください。</p><p>残りのコマンドでは、上記と同じコントローラー名を使う必要はありません。ただし、ほかの playanimation コマンドとの衝突を避けるのに役立ちます。</p><h2 id="fmbe-の使い方" tabindex="-1">FMBE の使い方 <a class="header-anchor" href="#fmbe-の使い方" aria-label="Permalink to &quot;FMBE の使い方&quot;">​</a></h2><p>上のシステムを有効にしたら、以下の手順に従ってください。</p><h3 id="セットアップ" tabindex="-1">セットアップ <a class="header-anchor" href="#セットアップ" aria-label="Permalink to &quot;セットアップ&quot;">​</a></h3><p><em>チャットに次のコマンドを入力します。</em></p><ol><li>キツネを召喚し、<code class="shiki"><span>/replaceitem</span></code> コマンドでメインハンドに表示したいアイテムモデルを持たせます。 <ul><li><code class="shiki"><span>/summon fox ~~~ ~ ~ minecraft:as_adult &quot;wiki:fmbe&quot;</span></code></li><li><code class="shiki"><span>/replaceitem entity @e[name=&quot;wiki:fmbe&quot;,c=1] slot.weapon.mainhand 0 &lt;itemID&gt;</span></code></li><li>持たせるアイテムを動的に変えたい場合は、<strong><a href="/commands/display-entities#changing-fmbe-block-display-dynamically">こちら</a></strong> の節を参照してください。</li></ul></li><li>次に <code class="shiki"><span>wiki:fmbe</span></code> タグを付けます。これでキツネが実際のブロックのように見えるはずです。 <ul><li><code class="shiki"><span>/tag @e[name=&quot;wiki:fmbe&quot;] add wiki:fmbe</span></code></li></ul></li></ol><h3 id="変数" tabindex="-1">変数 <a class="header-anchor" href="#変数" aria-label="Permalink to &quot;変数&quot;">​</a></h3><p>FMBE では、クライアントアニメーションを使って表示位置・サイズ・角度などを編集できます。変数は次のとおりです。</p><ul><li>位置: <ul><li><code class="shiki"><span>v.xpos</span></code></li><li><code class="shiki"><span>v.ypos</span></code></li><li><code class="shiki"><span>v.zpos</span></code></li></ul></li><li>回転: <ul><li><code class="shiki"><span>v.xrot</span></code></li><li><code class="shiki"><span>v.yrot</span></code></li><li><code class="shiki"><span>v.zrot</span></code></li></ul></li><li>スケール: <ul><li><code class="shiki"><span>v.scale</span></code> — 全体のサイズを調整します。</li><li><code class="shiki"><span>v.xzscale</span></code> — XZ 軸方向のサイズを調整します。</li><li><code class="shiki"><span>v.yscale</span></code> — Y 軸方向のサイズを調整します。</li></ul></li><li>基準位置: <ul><li><code class="shiki"><span>v.xbasepos</span></code></li><li><code class="shiki"><span>v.ybasepos</span></code></li><li><code class="shiki"><span>v.zbasepos</span></code></li></ul></li></ul><div class="tip custom-block"><p class="custom-block-title">注</p><ul><li><code class="shiki"><span>basepos</span></code> 変数は、回転の中心を変えずに位置だけを動かします。つまり、角度に依存します（例: <code class="shiki"><span>v.zbasepos=16</span></code> は相対座標で <code class="shiki"><span>^^^1</span></code> のように振る舞います）。</li><li><code class="shiki"><span>pos</span></code> と <code class="shiki"><span>basepos</span></code> の値は 1/16 ブロック単位で測られます（16 = 1 ブロック）。</li></ul></div><h3 id="値の編集" tabindex="-1">値の編集 <a class="header-anchor" href="#値の編集" aria-label="Permalink to &quot;値の編集&quot;">​</a></h3><p>値を編集するには、次のコマンド構成を使います。</p><ul><li><code class="shiki"><span>/playanimation @e[tag=wiki:fmbe] animation.player.attack.positions none 0 &quot;&quot; wiki:setvariable</span></code></li></ul><p>編集したい変数の Molang コードを二重引用符の中に書き、値を代入します。</p><p>例として、<code class="shiki"><span>xrot</span></code> を 35、<code class="shiki"><span>ypos</span></code> を 16、<code class="shiki"><span>scale</span></code> を 1.5 に設定する場合:</p><ul><li><code class="shiki"><span>/playanimation @e[tag=wiki:fmbe] animation.player.attack.positions none 0 &quot;v.xrot=35;v.ypos=16;v.scale=1.5;&quot; wiki:setvariable</span></code></li></ul><p>Molang では、さまざまなクエリや演算子を使って、より複雑なアニメーションも作れます。詳しくは <strong><a href="https://bedrock.dev/docs/stable/Molang" target="_blank" rel="noreferrer">Molang Documentation</a></strong> を参照してください。</p><h3 id="fmbe-の保存と読み込み" tabindex="-1">FMBE の保存と読み込み <a class="header-anchor" href="#fmbe-の保存と読み込み" aria-label="Permalink to &quot;FMBE の保存と読み込み&quot;">​</a></h3><ol><li><p>保存するには、次を実行します。</p><ul><li><code class="shiki"><span>/execute at @e[tag=wiki:fmbe,c=1] run structure save wiki:fmbe ~~~ ~~~ true disk false</span></code></li></ul></li><li><p>読み込むには、次を実行します。</p><ul><li><code class="shiki"><span>/structure load wiki:fmbe &lt;to: x y z&gt;</span></code></li></ul></li></ol><p>注: 構造物名 <code class="shiki"><span>wiki:fmbe</span></code> は好みに合わせて変更できます。</p><h3 id="fmbe-の音を止める" tabindex="-1">FMBE の音を止める <a class="header-anchor" href="#fmbe-の音を止める" aria-label="Permalink to &quot;FMBE の音を止める&quot;">​</a></h3><p>FMBE からキツネの音を消すには、次のコマンドを使えます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/fmbe/stopsound.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/fmbe/stopsound.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">stopsound @a mob.fox.spit</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">stopsound @a mob.fox.sniff</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">stopsound @a mob.fox.sleep</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">stopsound @a mob.fox.screech</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">stopsound @a mob.fox.hurt</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">stopsound @a mob.fox.eat</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">stopsound @a mob.fox.death</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">stopsound @a mob.fox.bite</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">stopsound @a mob.fox.ambient</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">stopsound @a mob.fox.aggro</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img${ssrRenderAttr("src", _imports_0$1)} alt="Chain of 10 Command Blocks"></p><h3 id="fmbe-のブロック表示を動的に変更する" tabindex="-1">FMBE のブロック表示を動的に変更する <a class="header-anchor" href="#fmbe-のブロック表示を動的に変更する" aria-label="Permalink to &quot;FMBE のブロック表示を動的に変更する&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_2)} alt="Demonstration GIF"></p><ol><li>オペレーターだけが入れる安全な場所に、&quot;<code class="shiki"><span>wiki:fmbe_pickaxe</span></code>&quot; という名前のアーマースタンドを召喚し、メインハンドにシルクタッチ付きのツルハシを持たせます。</li><li><strong><a href="https://learn.microsoft.com/en-us/minecraft/creator/documents/tickingareacommand" target="_blank" rel="noreferrer">ticking area</a></strong> を使って、その場所が常に読み込まれるようにします。</li><li>次のコマンドを使うと、アイテム ID を手で指定せずに、対象 FMBE の表示ブロックを動的に変更できます。<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Change the Target FMBE&#39;s Display to the Block Below It</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">execute as @e[name=&quot;wiki:fmbe_pickaxe&quot;] at @e[tag=wiki:fmbe,name=&quot;wiki:test_target&quot;] run loot replace entity @e[c=1] slot.weapon.mainhand 0 mine ~~-1~ mainhand</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><img${ssrRenderAttr("src", _imports_1)} alt="One Repeating Command Block"></li></ol><h2 id="簡略版-fmbe" tabindex="-1">簡略版 FMBE <a class="header-anchor" href="#簡略版-fmbe" aria-label="Permalink to &quot;簡略版 FMBE&quot;">​</a></h2><p>これは、上のシステムを 3 コマンドに圧縮した版です。FMBE の <code class="shiki"><span>xzscale</span></code> と <code class="shiki"><span>yscale</span></code> を変更したくない場合は、少しだけ最適化できます。</p>`);
  _push(ssrRenderComponent(_component_CodeHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BP/functions/wiki/fmbe/render.compressed.mcfunction`);
      } else {
        return [
          createTextVNode("BP/functions/wiki/fmbe/render.compressed.mcfunction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Reposition and Define FMBE Scale</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">playanimation @e[tag=wiki:fmbe] animation.player.sleeping none 0 &quot;&quot; controller.animation.fox.move</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">playanimation @e[tag=wiki:fmbe] animation.creeper.swelling none 0 &quot;v.scale=1;v.adscale=math.sqrt(v.scale);v.adscaled=2.1385*v.adscale;v.xbasepos=0;v.ybasepos=0;v.zbasepos=0;v.xpos=0;v.ypos=0;v.zpos=0;v.xrot=q.life_time*0;v.yrot=q.life_time*0;v.zrot=q.life_time*0;v.swelling_scale1=v.adscaled;v.swelling_scale2=v.adscaled;&quot; wiki:scale</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#6A9955", "--shiki-light": "#008000" })}">## Define FMBE Position &amp; Rotation</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}">playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement none 0 &quot;v.adjust_xz=8*v.adscaled+v.zbasepos/v.adscaled;v.adjust_y=(-5-v.ybasepos/v.adscaled/v.adscaled)*v.adscaled;v.x=v.xbasepos/v.adscaled;v.y=v.adjust_y;v.z=v.adjust_xz;v.ty=v.y*math.cos(v.xrot)-v.z*math.sin(v.xrot);v.tz=v.y*math.sin(v.xrot)+v.z*math.cos(v.xrot);v.y=v.ty;v.z=v.tz;v.tx=-v.x*math.cos(v.zrot)+v.y*math.sin(v.zrot);v.ty=v.x*math.sin(v.zrot)+v.y*math.cos(v.zrot);v.x=v.tx;v.y=v.ty;v.tx=v.x*math.cos(v.yrot)+v.z*math.sin(v.yrot);v.tz=-v.x*math.sin(v.yrot)+v.z*math.cos(v.yrot);v.x=v.tx;v.z=v.tz;v.head_position_x=v.x+v.xpos/v.adscaled;v.head_position_y=7.48/v.adscale+v.z+v.zpos/v.adscaled;v.head_position_z=v.y-v.ypos/v.adscaled;v.head_rotation_x=90+v.xrot;v.head_rotation_y=v.zrot;v.head_rotation_z=v.yrot;&quot; wiki:posrot</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img${ssrRenderAttr("src", _imports_0$2)} alt="Chain of 3 Command Blocks"></p><h2 id="動画ガイド" tabindex="-1">動画ガイド <a class="header-anchor" href="#動画ガイド" aria-label="Permalink to &quot;動画ガイド&quot;">​</a></h2><p><strong>Part I:</strong></p>`);
  _push(ssrRenderComponent(_component_YouTubeEmbed, { id: "DdYq_nOFeKM" }, null, _parent));
  _push(`<p><strong>Part II:</strong></p>`);
  _push(ssrRenderComponent(_component_YouTubeEmbed, { id: "zwyGmxjBDDw" }, null, _parent));
  _push(`<p><strong>Part III:</strong></p>`);
  _push(ssrRenderComponent(_component_YouTubeEmbed, { id: "-5N8yVGR1MA" }, null, _parent));
  _push(`<h2 id="コミュニティ作品" tabindex="-1">コミュニティ作品 <a class="header-anchor" href="#コミュニティ作品" aria-label="Permalink to &quot;コミュニティ作品&quot;">​</a></h2><p><strong>@Marmalade による FMBE 作成ツール:</strong></p>`);
  _push(ssrRenderComponent(_component_YouTubeEmbed, { id: "d4HOGFrmxhs" }, null, _parent));
  _push(`<p><strong>他の注目作品:</strong></p><ul><li>⭐ <strong><a href="https://youtu.be/DRy0J6u1qvo" target="_blank" rel="noreferrer">Orbital Laser by @FantasyTheCommander</a></strong></li><li>⭐ <strong><a href="https://youtu.be/AELTWr7akOQ" target="_blank" rel="noreferrer">Animated Waterfalls by @FantasyTheCommander</a></strong></li><li>⭐ <strong><a href="https://youtu.be/drf1wUN0Su4" target="_blank" rel="noreferrer">Wither Storm by @GuppyDuck</a></strong></li></ul><h2 id="高度な-fmbe-対角変換-beta" tabindex="-1">高度な FMBE 対角変換 - BETA <a class="header-anchor" href="#高度な-fmbe-対角変換-beta" aria-label="Permalink to &quot;高度な FMBE 対角変換 - BETA&quot;">​</a></h2><p>これは、新しい少し高度な FMBE のベータ版です。必要なコマンドブロック数を 5 つに減らしつつ、より複雑な変換も可能にします。</p><p><img${ssrRenderAttr("src", _imports_5)} alt="Advanced FMBE Diagonal Transformation Demo GIF"></p><p>まだ開発中で、今後変更される可能性があります。注意して使ってください。</p><p><strong>元のドキュメント（日本語）: <a href="https://github.com/szea-ll14/mcbe-cmd-memo/discussions/5" target="_blank" rel="noreferrer">GitHub の Discussion #5</a></strong></p><h3 id="高度な-fmbe-表示カテゴリ" tabindex="-1">高度な FMBE 表示カテゴリ <a class="header-anchor" href="#高度な-fmbe-表示カテゴリ" aria-label="Permalink to &quot;高度な FMBE 表示カテゴリ&quot;">​</a></h3><p>キツネのアイテムの持ち方は、アイテムの種類によって少し変わります。また、モデルが表示される位置も変わります。 表示したいアイテムの種類に合わせて、次の 3 つのカテゴリから最適なコマンドを使ってください。</p><ul><li><strong>3D ブロック</strong>（例: stone, anvil）</li><li><strong>2D ブロック</strong>（例: ladder, coral, flower）</li><li><strong>アイテム</strong>（例: diamond, bone meal, door） <ul><li><strong>例外</strong>: <ul><li>Trident</li><li>Spyglass</li><li>Bow</li><li>Player Head / Mob Head</li><li>Banner</li><li>Heavy Core</li><li>Conduit</li><li>Decorated Pot</li><li>Button</li></ul></li><li><strong>非対応</strong>: <ul><li>Shield</li></ul></li></ul></li></ul><h3 id="高度な-fmbe-変数" tabindex="-1">高度な FMBE 変数 <a class="header-anchor" href="#高度な-fmbe-変数" aria-label="Permalink to &quot;高度な FMBE 変数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>変数</th><th>説明</th></tr></thead><tbody><tr><td><code class="shiki"><span>v.extend_scale</span></code></td><td>ブロックを特定方向に伸ばします</td></tr><tr><td><code class="shiki"><span>v.extend_xrot</span></code></td><td>伸ばす方向（x 軸回転）</td></tr><tr><td><code class="shiki"><span>v.extend_yrot</span></code></td><td>伸ばす方向（y 軸回転）</td></tr></tbody></table><p>（<code class="shiki"><span>v.xzscale</span></code> と <code class="shiki"><span>v.yscale</span></code> は削除されています）</p><h3 id="高度な-fmbe-システム" tabindex="-1">高度な FMBE システム <a class="header-anchor" href="#高度な-fmbe-システム" aria-label="Permalink to &quot;高度な FMBE システム&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_Spoiler, { title: "表示カテゴリ: 3D ブロック" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`BP/functions/wiki/fmbe/render.3d_blocks.mcfunction`);
            } else {
              return [
                createTextVNode("BP/functions/wiki/fmbe/render.3d_blocks.mcfunction")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>/playanimation @e[tag=wiki:fmbe] animation.player.sleeping _ 0 &quot;v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.extend_scale=v.extend_scale??1;v.extend_xrot=v.extend_xrot??-90;v.extend_yrot=v.extend_yrot??0;v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.F.r5=-math.sin(v.xrot);v.F.r2=-math.sin(v.yrot);v.F.r3=-math.sin(v.zrot);v.F.r4=math.cos(v.zrot);v.F.r8=math.cos(v.yrot);v.F.r0=-v.F.r5*v.F.r2*v.F.r3+v.F.r8*v.F.r4;v.F.r1=-v.F.r5*v.F.r2*v.F.r4-v.F.r8*v.F.r3;v.F.r6=-v.F.r5*v.F.r8*v.F.r3-v.F.r2*v.F.r4;v.F.r7=-v.F.r5*v.F.r8*v.F.r4+v.F.r2*v.F.r3;v.F.r2=v.F.r2*math.cos(v.xrot);v.F.r3=v.F.r3*math.cos(v.xrot);v.F.r4=v.F.r4*math.cos(v.xrot);v.F.r8=v.F.r8*math.cos(v.xrot);v.F.e0=math.cos(v.extend_yrot);v.F.e4=math.cos(v.extend_xrot);v.F.e5=-math.sin(v.extend_xrot);v.F.e6=math.sin(v.extend_yrot);v.F.e1=v.F.e5*v.F.e6;v.F.e2=-v.F.e4*v.F.e6;v.F.e7=-v.F.e5*v.F.e0;v.F.e8=v.F.e4*v.F.e0;v.F.p0=v.F.r0*v.F.e0+v.F.r2*v.F.e6;v.F.p1=v.F.r0*v.F.e1+v.F.r1*v.F.e4+v.F.r2*v.F.e7;v.F.p2=v.F.r0*v.F.e2+v.F.r1*v.F.e5+v.F.r2*v.F.e8;v.F.p3=v.F.r3*v.F.e0+v.F.r5*v.F.e6;v.F.p4=v.F.r3*v.F.e1+v.F.r4*v.F.e4+v.F.r5*v.F.e7;v.F.p5=v.F.r3*v.F.e2+v.F.r4*v.F.e5+v.F.r5*v.F.e8;v.F.p6=v.F.r6*v.F.e0+v.F.r8*v.F.e6;v.F.p7=v.F.r6*v.F.e1+v.F.r7*v.F.e4+v.F.r8*v.F.e7;v.F.p8=v.F.r6*v.F.e2+v.F.r7*v.F.e5+v.F.r8*v.F.e8;&quot; controller.animation.fox.move</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>/playanimation @e[tag=wiki:fmbe] animation.creeper.swelling _ 0 &quot;v.swelling_scale2=v.extend_scale*(v.swelling_scale1=(v.F.s=math.sqrt(32/7*v.scale)));&quot; wiki:fmbe.3d_blocks.anim1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>/playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement _ 0 &quot;v.head_position_x=-16/v.F.s*((v.xpos-1)*v.F.p1+(v.ypos-1/128)*v.F.p4+v.zpos*v.F.p7+(v.xbasepos*v.F.e1+(v.ybasepos+10/7)*v.extend_scale*v.F.e4+(v.zbasepos-16/7)*v.F.e7)*v.scale);v.head_position_y=16/v.F.s*(((v.xpos-1)*v.F.p2+(v.ypos-1/128)*v.F.p5+v.zpos*v.F.p8)/v.extend_scale+(v.xbasepos*v.F.e2+(v.ybasepos+10/7)*v.extend_scale*v.F.e5+(v.zbasepos-16/7)*v.F.e8)*v.scale);v.head_position_z=16/v.F.s*((v.xpos-1)*v.F.p0+(v.ypos-1/128)*v.F.p3+v.zpos*v.F.p6+(v.xbasepos*v.F.e0+(v.zbasepos-16/7)*v.F.e6)*v.scale);v.head_rotation_x=v.F.e6?math.atan2(0,-v.F.e6):math.atan2(-v.F.e8,v.F.e5);v.head_rotation_y=math.asin(-v.F.e0);v.head_rotation_z=v.F.e6?math.atan2(-v.F.e2,-v.F.e1):0;&quot; wiki:fmbe.3d_blocks.anim2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>/playanimation @e[tag=wiki:fmbe] animation.warden.move _ 0 &quot;v.body_x_rot=v.F.p5||v.F.p3?math.atan2(v.F.p5,-v.F.p3):math.atan2(-v.F.p0,-v.F.p2);v.body_z_rot=v.F.p5||v.F.p3?math.atan2(-v.F.p1,v.F.p7):0;&quot; wiki:fmbe.3d_blocks.anim3</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>/playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations _ 0 &quot;v.attack_body_rot_y=math.asin(-v.F.p4);&quot; wiki:fmbe.3d_blocks.anim4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}></div></div><p${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="Chain of 5 Command Blocks"${_scopeId}></p>`);
      } else {
        return [
          createVNode(_component_CodeHeader, null, {
            default: withCtx(() => [
              createTextVNode("BP/functions/wiki/fmbe/render.3d_blocks.mcfunction")
            ]),
            _: 1
          }),
          createVNode("div", { class: "language-yaml vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "yaml"),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, '/playanimation @e[tag=wiki:fmbe] animation.player.sleeping _ 0 "v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.extend_scale=v.extend_scale??1;v.extend_xrot=v.extend_xrot??-90;v.extend_yrot=v.extend_yrot??0;v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.F.r5=-math.sin(v.xrot);v.F.r2=-math.sin(v.yrot);v.F.r3=-math.sin(v.zrot);v.F.r4=math.cos(v.zrot);v.F.r8=math.cos(v.yrot);v.F.r0=-v.F.r5*v.F.r2*v.F.r3+v.F.r8*v.F.r4;v.F.r1=-v.F.r5*v.F.r2*v.F.r4-v.F.r8*v.F.r3;v.F.r6=-v.F.r5*v.F.r8*v.F.r3-v.F.r2*v.F.r4;v.F.r7=-v.F.r5*v.F.r8*v.F.r4+v.F.r2*v.F.r3;v.F.r2=v.F.r2*math.cos(v.xrot);v.F.r3=v.F.r3*math.cos(v.xrot);v.F.r4=v.F.r4*math.cos(v.xrot);v.F.r8=v.F.r8*math.cos(v.xrot);v.F.e0=math.cos(v.extend_yrot);v.F.e4=math.cos(v.extend_xrot);v.F.e5=-math.sin(v.extend_xrot);v.F.e6=math.sin(v.extend_yrot);v.F.e1=v.F.e5*v.F.e6;v.F.e2=-v.F.e4*v.F.e6;v.F.e7=-v.F.e5*v.F.e0;v.F.e8=v.F.e4*v.F.e0;v.F.p0=v.F.r0*v.F.e0+v.F.r2*v.F.e6;v.F.p1=v.F.r0*v.F.e1+v.F.r1*v.F.e4+v.F.r2*v.F.e7;v.F.p2=v.F.r0*v.F.e2+v.F.r1*v.F.e5+v.F.r2*v.F.e8;v.F.p3=v.F.r3*v.F.e0+v.F.r5*v.F.e6;v.F.p4=v.F.r3*v.F.e1+v.F.r4*v.F.e4+v.F.r5*v.F.e7;v.F.p5=v.F.r3*v.F.e2+v.F.r4*v.F.e5+v.F.r5*v.F.e8;v.F.p6=v.F.r6*v.F.e0+v.F.r8*v.F.e6;v.F.p7=v.F.r6*v.F.e1+v.F.r7*v.F.e4+v.F.r8*v.F.e7;v.F.p8=v.F.r6*v.F.e2+v.F.r7*v.F.e5+v.F.r8*v.F.e8;" controller.animation.fox.move')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, '/playanimation @e[tag=wiki:fmbe] animation.creeper.swelling _ 0 "v.swelling_scale2=v.extend_scale*(v.swelling_scale1=(v.F.s=math.sqrt(32/7*v.scale)));" wiki:fmbe.3d_blocks.anim1')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, '/playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement _ 0 "v.head_position_x=-16/v.F.s*((v.xpos-1)*v.F.p1+(v.ypos-1/128)*v.F.p4+v.zpos*v.F.p7+(v.xbasepos*v.F.e1+(v.ybasepos+10/7)*v.extend_scale*v.F.e4+(v.zbasepos-16/7)*v.F.e7)*v.scale);v.head_position_y=16/v.F.s*(((v.xpos-1)*v.F.p2+(v.ypos-1/128)*v.F.p5+v.zpos*v.F.p8)/v.extend_scale+(v.xbasepos*v.F.e2+(v.ybasepos+10/7)*v.extend_scale*v.F.e5+(v.zbasepos-16/7)*v.F.e8)*v.scale);v.head_position_z=16/v.F.s*((v.xpos-1)*v.F.p0+(v.ypos-1/128)*v.F.p3+v.zpos*v.F.p6+(v.xbasepos*v.F.e0+(v.zbasepos-16/7)*v.F.e6)*v.scale);v.head_rotation_x=v.F.e6?math.atan2(0,-v.F.e6):math.atan2(-v.F.e8,v.F.e5);v.head_rotation_y=math.asin(-v.F.e0);v.head_rotation_z=v.F.e6?math.atan2(-v.F.e2,-v.F.e1):0;" wiki:fmbe.3d_blocks.anim2')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, '/playanimation @e[tag=wiki:fmbe] animation.warden.move _ 0 "v.body_x_rot=v.F.p5||v.F.p3?math.atan2(v.F.p5,-v.F.p3):math.atan2(-v.F.p0,-v.F.p2);v.body_z_rot=v.F.p5||v.F.p3?math.atan2(-v.F.p1,v.F.p7):0;" wiki:fmbe.3d_blocks.anim3')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, '/playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations _ 0 "v.attack_body_rot_y=math.asin(-v.F.p4);" wiki:fmbe.3d_blocks.anim4')
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, [
            createVNode("img", {
              src: _imports_1$1,
              alt: "Chain of 5 Command Blocks"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Spoiler, { title: "表示カテゴリ: 2D ブロック" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`BP/functions/wiki/fmbe/render.2d_blocks.mcfunction`);
            } else {
              return [
                createTextVNode("BP/functions/wiki/fmbe/render.2d_blocks.mcfunction")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>/playanimation @e[tag=wiki:fmbe] animation.player.sleeping _ 0 &quot;v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.extend_scale=v.extend_scale??1;v.extend_xrot=v.extend_xrot??-90;v.extend_yrot=v.extend_yrot??0;v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.F.r5=-math.sin(v.xrot);v.F.r2=-math.sin(v.yrot);v.F.r3=-math.sin(v.zrot);v.F.r4=math.cos(v.zrot);v.F.r8=math.cos(v.yrot);v.F.r0=-v.F.r5*v.F.r2*v.F.r3+v.F.r8*v.F.r4;v.F.r1=-v.F.r5*v.F.r2*v.F.r4-v.F.r8*v.F.r3;v.F.r6=-v.F.r5*v.F.r8*v.F.r3-v.F.r2*v.F.r4;v.F.r7=-v.F.r5*v.F.r8*v.F.r4+v.F.r2*v.F.r3;v.F.r2=v.F.r2*math.cos(v.xrot);v.F.r3=v.F.r3*math.cos(v.xrot);v.F.r4=v.F.r4*math.cos(v.xrot);v.F.r8=v.F.r8*math.cos(v.xrot);v.F.e0=math.cos(v.extend_yrot);v.F.e4=math.cos(v.extend_xrot);v.F.e5=-math.sin(v.extend_xrot);v.F.e6=math.sin(v.extend_yrot);v.F.e1=v.F.e5*v.F.e6;v.F.e2=-v.F.e4*v.F.e6;v.F.e7=-v.F.e5*v.F.e0;v.F.e8=v.F.e4*v.F.e0;v.F.p0=v.F.r0*v.F.e0+v.F.r2*v.F.e6;v.F.p1=v.F.r0*v.F.e1+v.F.r1*v.F.e4+v.F.r2*v.F.e7;v.F.p2=v.F.r0*v.F.e2+v.F.r1*v.F.e5+v.F.r2*v.F.e8;v.F.p3=v.F.r3*v.F.e0+v.F.r5*v.F.e6;v.F.p4=v.F.r3*v.F.e1+v.F.r4*v.F.e4+v.F.r5*v.F.e7;v.F.p5=v.F.r3*v.F.e2+v.F.r4*v.F.e5+v.F.r5*v.F.e8;v.F.p6=v.F.r6*v.F.e0+v.F.r8*v.F.e6;v.F.p7=v.F.r6*v.F.e1+v.F.r7*v.F.e4+v.F.r8*v.F.e7;v.F.p8=v.F.r6*v.F.e2+v.F.r7*v.F.e5+v.F.r8*v.F.e8;&quot; controller.animation.fox.move</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>/playanimation @e[tag=wiki:fmbe] animation.creeper.swelling _ 0 &quot;v.F.co=math.cos(25);v.F.si=math.sin(25);v.swelling_scale2=v.extend_scale*(v.swelling_scale1=(v.F.s=math.sqrt(17/8*v.scale)));&quot; wiki:fmbe.2d_blocks.anim1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>/playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement _ 0 &quot;v.F.X=(v.xpos-1)*v.F.p0+(v.ypos-1/128)*v.F.p3+v.zpos*v.F.p6+((v.xbasepos+2/9)*v.F.e0+(v.zbasepos+32/65)*v.F.e6*v.extend_scale)*v.scale;v.F.Y=(v.xpos-1)*v.F.p1+(v.ypos-1/128)*v.F.p4+v.zpos*v.F.p7+((v.xbasepos+2/9)*v.F.e1+(v.ybasepos+10/11)*v.F.e4+(v.zbasepos+32/65)*v.F.e7*v.extend_scale)*v.scale;v.head_position_y=16/v.F.s*(((v.xpos-1)*v.F.p2+(v.ypos-1/128)*v.F.p5+v.zpos*v.F.p8)/v.extend_scale+((v.xbasepos+2/9)*v.F.e2+(v.ybasepos+10/11)*v.F.e5+(v.zbasepos+32/65)*v.F.e8*v.extend_scale)*v.scale);v.head_position_x=16/v.F.s*(v.F.X*v.F.co-v.F.Y*v.F.si);v.head_position_z=16/v.F.s*(v.F.X*v.F.si+v.F.Y*v.F.co);v.head_rotation_x=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(-v.F.e6*v.F.si-v.F.e7*v.F.co,v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co):math.atan2(v.F.e2*v.F.si+v.F.e5*v.F.co,v.F.e8);v.head_rotation_y=math.asin(v.F.e4*v.F.si*v.F.co-v.F.e1*v.F.co*v.F.co-v.F.e0*v.F.co*v.F.si);v.head_rotation_z=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(v.F.e5*v.F.si-v.F.e2*v.F.co,v.F.e0*v.F.co*v.F.co-v.F.e1*v.F.co*v.F.si+v.F.e4*v.F.si*v.F.si):0;&quot; wiki:fmbe.2d_blocks.anim2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>/playanimation @e[tag=wiki:fmbe] animation.warden.move _ 0 &quot;v.body_x_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p5,-v.F.p3*v.F.si-v.F.p4*v.F.co):math.atan2(-v.F.p0*v.F.si-v.F.p1*v.F.co,-v.F.p2);v.body_z_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p0*v.F.co-v.F.p1*v.F.si,v.F.p7*v.F.si-v.F.p6*v.F.co):0;&quot; wiki:fmbe.2d_blocks.anim3</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>/playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations _ 0 &quot;v.attack_body_rot_y=math.asin(v.F.p3*v.F.co-v.F.p4*v.F.si);&quot; wiki:fmbe.2d_blocks.anim4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}></div></div><p${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="Chain of 5 Command Blocks"${_scopeId}></p>`);
      } else {
        return [
          createVNode(_component_CodeHeader, null, {
            default: withCtx(() => [
              createTextVNode("BP/functions/wiki/fmbe/render.2d_blocks.mcfunction")
            ]),
            _: 1
          }),
          createVNode("div", { class: "language-yaml vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "yaml"),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, '/playanimation @e[tag=wiki:fmbe] animation.player.sleeping _ 0 "v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.extend_scale=v.extend_scale??1;v.extend_xrot=v.extend_xrot??-90;v.extend_yrot=v.extend_yrot??0;v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.F.r5=-math.sin(v.xrot);v.F.r2=-math.sin(v.yrot);v.F.r3=-math.sin(v.zrot);v.F.r4=math.cos(v.zrot);v.F.r8=math.cos(v.yrot);v.F.r0=-v.F.r5*v.F.r2*v.F.r3+v.F.r8*v.F.r4;v.F.r1=-v.F.r5*v.F.r2*v.F.r4-v.F.r8*v.F.r3;v.F.r6=-v.F.r5*v.F.r8*v.F.r3-v.F.r2*v.F.r4;v.F.r7=-v.F.r5*v.F.r8*v.F.r4+v.F.r2*v.F.r3;v.F.r2=v.F.r2*math.cos(v.xrot);v.F.r3=v.F.r3*math.cos(v.xrot);v.F.r4=v.F.r4*math.cos(v.xrot);v.F.r8=v.F.r8*math.cos(v.xrot);v.F.e0=math.cos(v.extend_yrot);v.F.e4=math.cos(v.extend_xrot);v.F.e5=-math.sin(v.extend_xrot);v.F.e6=math.sin(v.extend_yrot);v.F.e1=v.F.e5*v.F.e6;v.F.e2=-v.F.e4*v.F.e6;v.F.e7=-v.F.e5*v.F.e0;v.F.e8=v.F.e4*v.F.e0;v.F.p0=v.F.r0*v.F.e0+v.F.r2*v.F.e6;v.F.p1=v.F.r0*v.F.e1+v.F.r1*v.F.e4+v.F.r2*v.F.e7;v.F.p2=v.F.r0*v.F.e2+v.F.r1*v.F.e5+v.F.r2*v.F.e8;v.F.p3=v.F.r3*v.F.e0+v.F.r5*v.F.e6;v.F.p4=v.F.r3*v.F.e1+v.F.r4*v.F.e4+v.F.r5*v.F.e7;v.F.p5=v.F.r3*v.F.e2+v.F.r4*v.F.e5+v.F.r5*v.F.e8;v.F.p6=v.F.r6*v.F.e0+v.F.r8*v.F.e6;v.F.p7=v.F.r6*v.F.e1+v.F.r7*v.F.e4+v.F.r8*v.F.e7;v.F.p8=v.F.r6*v.F.e2+v.F.r7*v.F.e5+v.F.r8*v.F.e8;" controller.animation.fox.move')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, '/playanimation @e[tag=wiki:fmbe] animation.creeper.swelling _ 0 "v.F.co=math.cos(25);v.F.si=math.sin(25);v.swelling_scale2=v.extend_scale*(v.swelling_scale1=(v.F.s=math.sqrt(17/8*v.scale)));" wiki:fmbe.2d_blocks.anim1')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, '/playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement _ 0 "v.F.X=(v.xpos-1)*v.F.p0+(v.ypos-1/128)*v.F.p3+v.zpos*v.F.p6+((v.xbasepos+2/9)*v.F.e0+(v.zbasepos+32/65)*v.F.e6*v.extend_scale)*v.scale;v.F.Y=(v.xpos-1)*v.F.p1+(v.ypos-1/128)*v.F.p4+v.zpos*v.F.p7+((v.xbasepos+2/9)*v.F.e1+(v.ybasepos+10/11)*v.F.e4+(v.zbasepos+32/65)*v.F.e7*v.extend_scale)*v.scale;v.head_position_y=16/v.F.s*(((v.xpos-1)*v.F.p2+(v.ypos-1/128)*v.F.p5+v.zpos*v.F.p8)/v.extend_scale+((v.xbasepos+2/9)*v.F.e2+(v.ybasepos+10/11)*v.F.e5+(v.zbasepos+32/65)*v.F.e8*v.extend_scale)*v.scale);v.head_position_x=16/v.F.s*(v.F.X*v.F.co-v.F.Y*v.F.si);v.head_position_z=16/v.F.s*(v.F.X*v.F.si+v.F.Y*v.F.co);v.head_rotation_x=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(-v.F.e6*v.F.si-v.F.e7*v.F.co,v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co):math.atan2(v.F.e2*v.F.si+v.F.e5*v.F.co,v.F.e8);v.head_rotation_y=math.asin(v.F.e4*v.F.si*v.F.co-v.F.e1*v.F.co*v.F.co-v.F.e0*v.F.co*v.F.si);v.head_rotation_z=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(v.F.e5*v.F.si-v.F.e2*v.F.co,v.F.e0*v.F.co*v.F.co-v.F.e1*v.F.co*v.F.si+v.F.e4*v.F.si*v.F.si):0;" wiki:fmbe.2d_blocks.anim2')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, '/playanimation @e[tag=wiki:fmbe] animation.warden.move _ 0 "v.body_x_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p5,-v.F.p3*v.F.si-v.F.p4*v.F.co):math.atan2(-v.F.p0*v.F.si-v.F.p1*v.F.co,-v.F.p2);v.body_z_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p0*v.F.co-v.F.p1*v.F.si,v.F.p7*v.F.si-v.F.p6*v.F.co):0;" wiki:fmbe.2d_blocks.anim3')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, '/playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations _ 0 "v.attack_body_rot_y=math.asin(v.F.p3*v.F.co-v.F.p4*v.F.si);" wiki:fmbe.2d_blocks.anim4')
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, [
            createVNode("img", {
              src: _imports_1$1,
              alt: "Chain of 5 Command Blocks"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Spoiler, { title: "表示カテゴリ: アイテム" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`BP/functions/wiki/fmbe/render.items.mcfunction`);
            } else {
              return [
                createTextVNode("BP/functions/wiki/fmbe/render.items.mcfunction")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>yaml</span><pre class="shiki shiki-themes dark-plus light-plus vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>/playanimation @e[tag=wiki:fmbe] animation.player.sleeping _ 0 &quot;v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.extend_scale=v.extend_scale??1;v.extend_xrot=v.extend_xrot??-90;v.extend_yrot=v.extend_yrot??0;v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.F.r5=-math.sin(v.xrot);v.F.r2=-math.sin(v.yrot);v.F.r3=-math.sin(v.zrot);v.F.r4=math.cos(v.zrot);v.F.r8=math.cos(v.yrot);v.F.r0=-v.F.r5*v.F.r2*v.F.r3+v.F.r8*v.F.r4;v.F.r1=-v.F.r5*v.F.r2*v.F.r4-v.F.r8*v.F.r3;v.F.r6=-v.F.r5*v.F.r8*v.F.r3-v.F.r2*v.F.r4;v.F.r7=-v.F.r5*v.F.r8*v.F.r4+v.F.r2*v.F.r3;v.F.r2=v.F.r2*math.cos(v.xrot);v.F.r3=v.F.r3*math.cos(v.xrot);v.F.r4=v.F.r4*math.cos(v.xrot);v.F.r8=v.F.r8*math.cos(v.xrot);v.F.e0=math.cos(v.extend_yrot);v.F.e4=math.cos(v.extend_xrot);v.F.e5=-math.sin(v.extend_xrot);v.F.e6=math.sin(v.extend_yrot);v.F.e1=v.F.e5*v.F.e6;v.F.e2=-v.F.e4*v.F.e6;v.F.e7=-v.F.e5*v.F.e0;v.F.e8=v.F.e4*v.F.e0;v.F.p0=v.F.r0*v.F.e0+v.F.r2*v.F.e6;v.F.p1=v.F.r0*v.F.e1+v.F.r1*v.F.e4+v.F.r2*v.F.e7;v.F.p2=v.F.r0*v.F.e2+v.F.r1*v.F.e5+v.F.r2*v.F.e8;v.F.p3=v.F.r3*v.F.e0+v.F.r5*v.F.e6;v.F.p4=v.F.r3*v.F.e1+v.F.r4*v.F.e4+v.F.r5*v.F.e7;v.F.p5=v.F.r3*v.F.e2+v.F.r4*v.F.e5+v.F.r5*v.F.e8;v.F.p6=v.F.r6*v.F.e0+v.F.r8*v.F.e6;v.F.p7=v.F.r6*v.F.e1+v.F.r7*v.F.e4+v.F.r8*v.F.e7;v.F.p8=v.F.r6*v.F.e2+v.F.r7*v.F.e5+v.F.r8*v.F.e8;&quot; controller.animation.fox.move</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>/playanimation @e[tag=wiki:fmbe] animation.creeper.swelling _ 0 &quot;v.F.co=math.cos(25);v.F.si=math.sin(25);v.swelling_scale2=v.extend_scale*(v.swelling_scale1=(v.F.s=math.sqrt(17/8*v.scale)));&quot; wiki:fmbe.items.anim1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>/playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement _ 0 &quot;v.F.X=(v.xpos-1)*v.F.p0+(v.ypos-1/128)*v.F.p3+v.zpos*v.F.p6+((v.xbasepos+11/29)*v.F.e0+(v.zbasepos+8/15)*v.F.e6*v.extend_scale)*v.scale;v.F.Y=(v.xpos-1)*v.F.p1+(v.ypos-1/128)*v.F.p4+v.zpos*v.F.p7+((v.xbasepos+11/29)*v.F.e1+(v.ybasepos+31/37)*v.F.e4+(v.zbasepos+8/15)*v.F.e7*v.extend_scale)*v.scale;v.head_position_y=16/v.F.s*(((v.xpos-1)*v.F.p2+(v.ypos-1/128)*v.F.p5+v.zpos*v.F.p8)/v.extend_scale+((v.xbasepos+11/29)*v.F.e2+(v.ybasepos+31/37)*v.F.e5+(v.zbasepos+8/15)*v.F.e8*v.extend_scale)*v.scale);v.head_position_x=16/v.F.s*(v.F.X*v.F.co-v.F.Y*v.F.si);v.head_position_z=16/v.F.s*(v.F.X*v.F.si+v.F.Y*v.F.co);v.head_rotation_x=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(-v.F.e6*v.F.si-v.F.e7*v.F.co,v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co):math.atan2(v.F.e2*v.F.si+v.F.e5*v.F.co,v.F.e8);v.head_rotation_y=math.asin(v.F.e4*v.F.si*v.F.co-v.F.e1*v.F.co*v.F.co-v.F.e0*v.F.co*v.F.si);v.head_rotation_z=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(v.F.e5*v.F.si-v.F.e2*v.F.co,v.F.e0*v.F.co*v.F.co-v.F.e1*v.F.co*v.F.si+v.F.e4*v.F.si*v.F.si):0;&quot; wiki:fmbe.items.anim2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>/playanimation @e[tag=wiki:fmbe] animation.warden.move _ 0 &quot;v.body_x_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p5,-v.F.p3*v.F.si-v.F.p4*v.F.co):math.atan2(-v.F.p0*v.F.si-v.F.p1*v.F.co,-v.F.p2);v.body_z_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p0*v.F.co-v.F.p1*v.F.si,v.F.p7*v.F.si-v.F.p6*v.F.co):0;&quot; wiki:fmbe.items.anim3</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" })}"${_scopeId}>/playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations _ 0 &quot;v.attack_body_rot_y=math.asin(v.F.p3*v.F.co-v.F.p4*v.F.si);&quot; wiki:fmbe.items.anim4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"${_scopeId}><span class="line-number"${_scopeId}>1</span><br${_scopeId}><span class="line-number"${_scopeId}>2</span><br${_scopeId}><span class="line-number"${_scopeId}>3</span><br${_scopeId}><span class="line-number"${_scopeId}>4</span><br${_scopeId}><span class="line-number"${_scopeId}>5</span><br${_scopeId}></div></div><p${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="Chain of 5 Command Blocks"${_scopeId}></p>`);
      } else {
        return [
          createVNode(_component_CodeHeader, null, {
            default: withCtx(() => [
              createTextVNode("BP/functions/wiki/fmbe/render.items.mcfunction")
            ]),
            _: 1
          }),
          createVNode("div", { class: "language-yaml vp-adaptive-theme line-numbers-mode" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "yaml"),
            createVNode("pre", {
              class: "shiki shiki-themes dark-plus light-plus vp-code",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, '/playanimation @e[tag=wiki:fmbe] animation.player.sleeping _ 0 "v.xpos=v.xpos??0;v.ypos=v.ypos??0;v.zpos=v.zpos??0;v.xrot=v.xrot??0;v.yrot=v.yrot??0;v.zrot=v.zrot??0;v.scale=v.scale??1;v.extend_scale=v.extend_scale??1;v.extend_xrot=v.extend_xrot??-90;v.extend_yrot=v.extend_yrot??0;v.xbasepos=v.xbasepos??0;v.ybasepos=v.ybasepos??0;v.zbasepos=v.zbasepos??0;v.F.r5=-math.sin(v.xrot);v.F.r2=-math.sin(v.yrot);v.F.r3=-math.sin(v.zrot);v.F.r4=math.cos(v.zrot);v.F.r8=math.cos(v.yrot);v.F.r0=-v.F.r5*v.F.r2*v.F.r3+v.F.r8*v.F.r4;v.F.r1=-v.F.r5*v.F.r2*v.F.r4-v.F.r8*v.F.r3;v.F.r6=-v.F.r5*v.F.r8*v.F.r3-v.F.r2*v.F.r4;v.F.r7=-v.F.r5*v.F.r8*v.F.r4+v.F.r2*v.F.r3;v.F.r2=v.F.r2*math.cos(v.xrot);v.F.r3=v.F.r3*math.cos(v.xrot);v.F.r4=v.F.r4*math.cos(v.xrot);v.F.r8=v.F.r8*math.cos(v.xrot);v.F.e0=math.cos(v.extend_yrot);v.F.e4=math.cos(v.extend_xrot);v.F.e5=-math.sin(v.extend_xrot);v.F.e6=math.sin(v.extend_yrot);v.F.e1=v.F.e5*v.F.e6;v.F.e2=-v.F.e4*v.F.e6;v.F.e7=-v.F.e5*v.F.e0;v.F.e8=v.F.e4*v.F.e0;v.F.p0=v.F.r0*v.F.e0+v.F.r2*v.F.e6;v.F.p1=v.F.r0*v.F.e1+v.F.r1*v.F.e4+v.F.r2*v.F.e7;v.F.p2=v.F.r0*v.F.e2+v.F.r1*v.F.e5+v.F.r2*v.F.e8;v.F.p3=v.F.r3*v.F.e0+v.F.r5*v.F.e6;v.F.p4=v.F.r3*v.F.e1+v.F.r4*v.F.e4+v.F.r5*v.F.e7;v.F.p5=v.F.r3*v.F.e2+v.F.r4*v.F.e5+v.F.r5*v.F.e8;v.F.p6=v.F.r6*v.F.e0+v.F.r8*v.F.e6;v.F.p7=v.F.r6*v.F.e1+v.F.r7*v.F.e4+v.F.r8*v.F.e7;v.F.p8=v.F.r6*v.F.e2+v.F.r7*v.F.e5+v.F.r8*v.F.e8;" controller.animation.fox.move')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, '/playanimation @e[tag=wiki:fmbe] animation.creeper.swelling _ 0 "v.F.co=math.cos(25);v.F.si=math.sin(25);v.swelling_scale2=v.extend_scale*(v.swelling_scale1=(v.F.s=math.sqrt(17/8*v.scale)));" wiki:fmbe.items.anim1')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, '/playanimation @e[tag=wiki:fmbe] animation.ender_dragon.neck_head_movement _ 0 "v.F.X=(v.xpos-1)*v.F.p0+(v.ypos-1/128)*v.F.p3+v.zpos*v.F.p6+((v.xbasepos+11/29)*v.F.e0+(v.zbasepos+8/15)*v.F.e6*v.extend_scale)*v.scale;v.F.Y=(v.xpos-1)*v.F.p1+(v.ypos-1/128)*v.F.p4+v.zpos*v.F.p7+((v.xbasepos+11/29)*v.F.e1+(v.ybasepos+31/37)*v.F.e4+(v.zbasepos+8/15)*v.F.e7*v.extend_scale)*v.scale;v.head_position_y=16/v.F.s*(((v.xpos-1)*v.F.p2+(v.ypos-1/128)*v.F.p5+v.zpos*v.F.p8)/v.extend_scale+((v.xbasepos+11/29)*v.F.e2+(v.ybasepos+31/37)*v.F.e5+(v.zbasepos+8/15)*v.F.e8*v.extend_scale)*v.scale);v.head_position_x=16/v.F.s*(v.F.X*v.F.co-v.F.Y*v.F.si);v.head_position_z=16/v.F.s*(v.F.X*v.F.si+v.F.Y*v.F.co);v.head_rotation_x=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(-v.F.e6*v.F.si-v.F.e7*v.F.co,v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co):math.atan2(v.F.e2*v.F.si+v.F.e5*v.F.co,v.F.e8);v.head_rotation_y=math.asin(v.F.e4*v.F.si*v.F.co-v.F.e1*v.F.co*v.F.co-v.F.e0*v.F.co*v.F.si);v.head_rotation_z=v.F.e6*v.F.si+v.F.e7*v.F.co||v.F.e0*v.F.si*v.F.si+v.F.e1*v.F.si*v.F.co+v.F.e4*v.F.co*v.F.co?math.atan2(v.F.e5*v.F.si-v.F.e2*v.F.co,v.F.e0*v.F.co*v.F.co-v.F.e1*v.F.co*v.F.si+v.F.e4*v.F.si*v.F.si):0;" wiki:fmbe.items.anim2')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, '/playanimation @e[tag=wiki:fmbe] animation.warden.move _ 0 "v.body_x_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p5,-v.F.p3*v.F.si-v.F.p4*v.F.co):math.atan2(-v.F.p0*v.F.si-v.F.p1*v.F.co,-v.F.p2);v.body_z_rot=v.F.p5||v.F.p3*v.F.si+v.F.p4*v.F.co?math.atan2(v.F.p0*v.F.co-v.F.p1*v.F.si,v.F.p7*v.F.si-v.F.p6*v.F.co):0;" wiki:fmbe.items.anim3')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "--shiki-dark": "#CE9178", "--shiki-light": "#0000FF" } }, '/playanimation @e[tag=wiki:fmbe] animation.player.attack.rotations _ 0 "v.attack_body_rot_y=math.asin(v.F.p3*v.F.co-v.F.p4*v.F.si);" wiki:fmbe.items.anim4')
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
              createVNode("br")
            ])
          ]),
          createVNode("p", null, [
            createVNode("img", {
              src: _imports_1$1,
              alt: "Chain of 5 Command Blocks"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 id="高度な-fmbe-シミュレーター" tabindex="-1">高度な FMBE シミュレーター <a class="header-anchor" href="#高度な-fmbe-シミュレーター" aria-label="Permalink to &quot;高度な FMBE シミュレーター&quot;">​</a></h3><p>ここでは 3D シミュレーターを使って変数の確認や試行ができます（注: 日本語です）:<br> 🔗 <strong><a href="https://www.desmos.com/3d/mzzzuxssx7" target="_blank" rel="noreferrer">Open Simulator (Desmos)</a></strong></p><h3 id="高度な-fmbe-の今後の追加予定" tabindex="-1">高度な FMBE の今後の追加予定 <a class="header-anchor" href="#高度な-fmbe-の今後の追加予定" aria-label="Permalink to &quot;高度な FMBE の今後の追加予定&quot;">​</a></h3><ul><li>行列計算を使った回転に対応する</li><li>Nintendo Switch 対応版（分割版）を作成する</li><li>使い方ガイドを追加する</li><li>技術的な解説を追加する</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("commands/display-entities.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const displayEntities = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  displayEntities as default
};
