import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/images/contribute/setting_up_software/vscode/vsc_download.png";
const _imports_1 = "/assets/images/contribute/setting_up_software/ghdesktop/ghd_download.png";
const _imports_2 = "/assets/images/contribute/setting_up_software/ghdesktop/ghd_login.png";
const _imports_3 = "/assets/images/contribute/setting_up_software/ghdesktop/ghd_configure.png";
const _imports_4 = "/assets/images/contribute/setting_up_software/nodejs/njs_download.png";
const _imports_5 = "/assets/images/contribute/setting_up_local/setup_fork.png";
const _imports_6 = "/assets/images/contribute/setting_up_local/setup_clone.png";
const _imports_7 = "/assets/images/contribute/setting_up_local/setup_clone_2.png";
const _imports_8 = "/assets/images/contribute/setting_up_local/setup_vsc.png";
const _imports_9 = "/assets/images/contribute/committing_changes/committing.png";
const _imports_10 = "/assets/images/contribute/committing_changes/committing_push.png";
const _imports_11 = "/assets/images/contribute/creating_pr/pr.png";
const _imports_12 = "/assets/images/contribute/creating_pr/pr_2.png";
const _imports_13 = "/assets/images/contribute/updating_local/updating.png";
const _imports_14 = "/assets/images/contribute/updating_local/updating_pull.png";
const _imports_15 = "/assets/images/contribute/troubleshooting/merge/merge_merge.png";
const _imports_16 = "/assets/images/contribute/troubleshooting/merge/merge_branch.png";
const _imports_17 = "/assets/images/contribute/troubleshooting/merge/merge_open.png";
const _imports_18 = "/assets/images/contribute/troubleshooting/merge/merge_accept.png";
const _imports_19 = "/assets/images/contribute/troubleshooting/merge/merge_continue.png";
const __pageData = JSON.parse('{"title":"貢献のしかた","description":"最初の貢献をしてみよう！","frontmatter":{"title":"貢献のしかた","hidden":true,"mentions":["TheItsNameless","QuazChick"],"description":"最初の貢献をしてみよう！"},"headers":[{"level":2,"title":"このガイドについて","slug":"このガイドについて","link":"#このガイドについて","children":[]},{"level":2,"title":"Wiki を編集する手順","slug":"wiki-を編集する手順","link":"#wiki-を編集する手順","children":[]},{"level":2,"title":"ソフトウェアのセットアップ","slug":"ソフトウェアのセットアップ","link":"#ソフトウェアのセットアップ","children":[{"level":3,"title":"Visual Studio Code","slug":"visual-studio-code","link":"#visual-studio-code","children":[{"level":4,"title":"インストール","slug":"インストール","link":"#インストール","children":[]}]},{"level":3,"title":"GitHub Desktop","slug":"github-desktop","link":"#github-desktop","children":[{"level":4,"title":"インストール","slug":"インストール-1","link":"#インストール-1","children":[]}]},{"level":3,"title":"NodeJS","slug":"nodejs","link":"#nodejs","children":[{"level":4,"title":"インストール","slug":"インストール-2","link":"#インストール-2","children":[]}]}]},{"level":2,"title":"ローカル環境をセットアップする","slug":"ローカル環境をセットアップする","link":"#ローカル環境をセットアップする","children":[]},{"level":2,"title":"変更をコミットする","slug":"変更をコミットする","link":"#変更をコミットする","children":[]},{"level":2,"title":"Pull Request を作成する","slug":"pull-request-を作成する","link":"#pull-request-を作成する","children":[]},{"level":2,"title":"ローカル環境を更新する","slug":"ローカル環境を更新する","link":"#ローカル環境を更新する","children":[{"level":3,"title":"トラブルシューティング","slug":"トラブルシューティング","link":"#トラブルシューティング","children":[{"level":4,"title":"修正方法","slug":"修正方法","link":"#修正方法","children":[]}]}]},{"level":2,"title":"まとめ","slug":"まとめ","link":"#まとめ","children":[]}],"relativePath":"contribute-how-to.md","filePath":"contribute-how-to.md"}');
const _sfc_main = { name: "contribute-how-to.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WikiImage = resolveComponent("WikiImage");
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="このガイドについて" tabindex="-1">このガイドについて <a class="header-anchor" href="#このガイドについて" aria-label="Permalink to &quot;このガイドについて&quot;">​</a></h2><p>このガイドでは、Wiki の編集を始める方法を順を追って説明します。GitHub のサイト上で Wiki を「その場で」編集することもできますが、このガイドでは正しい手順を学びます。これは価値のある、他の場面にも応用できるスキルであり、Wiki を編集する以上の知識にもつながります。</p><p>この記事では、ローカルリポジトリの管理を最も簡単に行える GitHub Desktop の使い方を説明します。Git を直接使えば GitHub Desktop なしでもできますが、これは GitHub Desktop よりも上級者向けです。このガイドでは扱いません。</p><p>このガイドで説明する手順の一部をすでに知っている場合は、右側の目次を使って、知らない部分だけに飛んでください。</p><p>Wiki の見た目の細かなスタイル機能についてもっと知りたい場合は、<a href="/contribute-style">Contribute-Style-Guide</a> を続けて読んでください。</p><h2 id="wiki-を編集する手順" tabindex="-1">Wiki を編集する手順 <a class="header-anchor" href="#wiki-を編集する手順" aria-label="Permalink to &quot;Wiki を編集する手順&quot;">​</a></h2><p>Wiki を編集するには、次の 5 つの大きな手順に従います（ソフトウェアのダウンロードとセットアップは最初の 1 回だけ行います）。</p><ol><li>リポジトリを Fork する</li><li>リポジトリを Clone する</li><li>Wiki を編集する</li><li>ローカル変更を commit して GitHub と同期する</li><li>Pull Request を作成する</li></ol><p>初めて見ると少し大変そうに見えるかもしれませんが、心配いりません。とても簡単で、ここでは 1 つずつ順番に案内します。</p><h2 id="ソフトウェアのセットアップ" tabindex="-1">ソフトウェアのセットアップ <a class="header-anchor" href="#ソフトウェアのセットアップ" aria-label="Permalink to &quot;ソフトウェアのセットアップ&quot;">​</a></h2><p>Wiki を編集するには、次のソフトウェアをダウンロードしてインストールする必要があります。</p><ul><li>GitHub Desktop</li><li>NodeJS</li><li>Visual Studio Code</li></ul><p>より頻繁に Wiki を編集したいなら、Git を使い始めるのもよいでしょう。Git は GitHub Desktop より強力です。ただし心配はいりません。私たちには GitHub Desktop で十分です！</p><h3 id="visual-studio-code" tabindex="-1">Visual Studio Code <a class="header-anchor" href="#visual-studio-code" aria-label="Permalink to &quot;Visual Studio Code&quot;">​</a></h3><p><a href="https://code.visualstudio.com/Download" target="_blank" rel="noreferrer">Visual Studio Code (VSCode)</a> は、ファイルやコードなどを編集するのにとても便利な環境です。他のエディタを使っても構いませんが、このチュートリアルでは VSCode のインストールを案内します。</p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><h4 id="インストール" tabindex="-1">インストール <a class="header-anchor" href="#インストール" aria-label="Permalink to &quot;インストール&quot;">​</a></h4><p>保存した <code class="shiki"><span>.exe</span></code> があるフォルダーを開いて、ダブルクリックしてください。セットアップ画面が開きます。ほとんどの場合は <code class="shiki"><span>next</span></code> を押して大丈夫ですが、「additional tasks」画面で <code class="shiki"><span>add to PATH</span></code> が選択されていることだけ確認してください。</p><p>最後の画面では <code class="shiki"><span>install</span></code> をクリックします。</p><p>インストールが終わったら <code class="shiki"><span>Finish</span></code> をクリックしてください。これで VSCode が起動するはずです。起動しない場合は手動で開いてください。</p><p>ここから VSCode の見た目をカスタマイズできます。終わった、またはカスタマイズしたくない場合は「Next Section」をクリックしてください。</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "/assets/images/contribute/setting_up_software/vscode/vsc_look.png",
    width: "210"
  }, null, _parent));
  _push(`<p>次に、VSCode の基本を学べます。前と同じく、終わっていれば「Next Section」をクリックしてください。</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "/assets/images/contribute/setting_up_software/vscode/vsc_fundamentals.png",
    width: "210"
  }, null, _parent));
  _push(`<p>最後のページでは、準備ができたら、前と同じように「Mark Done」をクリックしてください。</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "/assets/images/contribute/setting_up_software/vscode/vsc_productivity.png",
    width: "210"
  }, null, _parent));
  _push(`<p>これで VSCode のインストールは完了です。いったん閉じて構いません。</p><h3 id="github-desktop" tabindex="-1">GitHub Desktop <a class="header-anchor" href="#github-desktop" aria-label="Permalink to &quot;GitHub Desktop&quot;">​</a></h3><p><a href="https://desktop.github.com" target="_blank" rel="noreferrer">GitHub Desktop</a> は、GitHub リポジトリをダウンロードしてローカルで編集できるようにするためのツールです。コマンドラインツールの Git を使って同じこともできますが、これは少し上級者向けで、このチュートリアルでは扱いません。</p><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p><h4 id="インストール-1" tabindex="-1">インストール <a class="header-anchor" href="#インストール-1" aria-label="Permalink to &quot;インストール&quot;">​</a></h4><p>先ほどと同じように、保存した <code class="shiki"><span>.exe</span></code> のあるフォルダーへ行き、ダブルクリックしてください。セットアップが開き、GitHub Desktop が自動的にインストールされます。完了すると、GitHub Desktop が自動で起動します。</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "/assets/images/contribute/setting_up_software/ghdesktop/ghd_install.png",
    width: "210"
  }, null, _parent));
  _push(`<p>次にサインインを求められます。すでに GitHub アカウントがあるなら、<code class="shiki"><span>Sign in to GitHub.com</span></code> をクリックしてください。ブラウザーのタブでアカウントにサインインします。GitHub アカウントをまだ持っていない場合は、<code class="shiki"><span>Create your free account</span></code> をクリックしてアカウントを作成してください。その後は通常どおり進めます。</p><p><img${ssrRenderAttr("src", _imports_2)} alt=""></p><p>GitHub Desktop では何も変えず、そのまま「Finish」をクリックしてください。</p><p><img${ssrRenderAttr("src", _imports_3)} alt=""></p><p>ひとまず GitHub Desktop は閉じて構いません。</p><h3 id="nodejs" tabindex="-1">NodeJS <a class="header-anchor" href="#nodejs" aria-label="Permalink to &quot;NodeJS&quot;">​</a></h3><p><a href="https://www.nodejs.org" target="_blank" rel="noreferrer">NodeJS</a> を使うと、Web 上と同じ見た目で Wiki をローカル表示できます。プッシュ前に typo やエラーを見つけられるので、マージ時のエラーを減らせます。</p><p><img${ssrRenderAttr("src", _imports_4)} alt=""></p><h4 id="インストール-2" tabindex="-1">インストール <a class="header-anchor" href="#インストール-2" aria-label="Permalink to &quot;インストール&quot;">​</a></h4><p>ここでも、ダウンロードフォルダーに行って NodeJS のセットアップファイルをダブルクリックするだけです。今回のセットアップでは、特に変更は不要です。<code class="shiki"><span>Tools for native modules</span></code> は追加しないようにしてください。必要ありません。最後のページでは <code class="shiki"><span>Install</span></code> をクリックします。インストールが終わるまで待ってから <code class="shiki"><span>Finish</span></code> をクリックしてください。</p><h2 id="ローカル環境をセットアップする" tabindex="-1">ローカル環境をセットアップする <a class="header-anchor" href="#ローカル環境をセットアップする" aria-label="Permalink to &quot;ローカル環境をセットアップする&quot;">​</a></h2><p>必要なプログラムはすべてインストールできたので、Wiki への貢献を始められます。まずはローカル作業環境をセットアップする必要があります。心配いりません。とても簡単です。以下の手順に従ってください。</p><p><a href="https://github.com/Bedrock-OSS/bedrock-wiki" target="_blank" rel="noreferrer">GitHub リポジトリ</a> を開き、<code class="shiki"><span>Fork</span></code> をクリックします。すでに Fork 済みでも問題ありません。そのまま進めてください。</p><p><img${ssrRenderAttr("src", _imports_5)} alt=""></p><p>GitHub Desktop を開き、<code class="shiki"><span>Clone a repository from the Internet</span></code> をクリックします。</p><p><img${ssrRenderAttr("src", _imports_6)} alt=""></p><p>次に、自分の fork を選んで「Clone」をクリックします。リポジトリが自動で clone されます。</p><p><img${ssrRenderAttr("src", _imports_7)} alt=""></p><p>そのあと、clone の概要が表示されます。作業するには「Open in Visual Studio Code」をクリックしてください。VSCode が Wiki とともに自動で開きます。フォルダーを信頼するか聞かれたら、<code class="shiki"><span>Yes, I trust the authors</span></code> をクリックしてください。</p><p><img${ssrRenderAttr("src", _imports_8)} alt=""></p><p>これで Wiki の clone はローカル端末に成功し、すべてのファイルを編集できるようになりました！</p><h2 id="変更をコミットする" tabindex="-1">変更をコミットする <a class="header-anchor" href="#変更をコミットする" aria-label="Permalink to &quot;変更をコミットする&quot;">​</a></h2><p>Wiki での作業を終えたら、変更を直接リポジトリに commit して push できます。</p><p>GitHub Desktop に切り替えると、変更が表示されるはずです。表示されない場合は、ファイルを保存したか、GitHub Desktop で正しいリポジトリを開いているか確認してください。</p><p>変更を GitHub Desktop で確認したら、commit 名と説明を付けられます（どちらも必須ではありません）。そのあと <code class="shiki"><span>commit to main</span></code> をクリックしてください。</p><p><img${ssrRenderAttr("src", _imports_9)} alt=""></p><p>commit が終わったら、ローカル clone を GitHub に push する必要があります。<code class="shiki"><span>Push commits to the origin remote</span></code> をクリックしてください。</p><p><img${ssrRenderAttr("src", _imports_10)} alt=""></p><p>これで GitHub が、あなたのローカル clone を自分たちのサーバーへ送信します。</p><h2 id="pull-request-を作成する" tabindex="-1">Pull Request を作成する <a class="header-anchor" href="#pull-request-を作成する" aria-label="Permalink to &quot;Pull Request を作成する&quot;">​</a></h2><p>GitHub に編集内容が反映されたので、次は <code class="shiki"><span>Pull Request</span></code>（PR）を作成し、変更をマージできるようにします。</p><p>方法はいくつかあります。ここでは、GitHub Desktop で <code class="shiki"><span>Create Pull Request</span></code> をクリックします。</p><p><img${ssrRenderAttr("src", _imports_11)} alt=""></p><p>GitHub Desktop がブラウザーで PR を開きます。PR は編集できますが、必須ではありません。すでにマージに十分な状態になっているはずです。そのまま <code class="shiki"><span>Create Pull Request</span></code> をクリックしてください。</p><p><img${ssrRenderAttr("src", _imports_12)} alt=""></p><p>これで完了です。あとは私たちが Wiki に変更をマージする番です！</p><h2 id="ローカル環境を更新する" tabindex="-1">ローカル環境を更新する <a class="header-anchor" href="#ローカル環境を更新する" aria-label="Permalink to &quot;ローカル環境を更新する&quot;">​</a></h2><p>Wiki で作業しているのはあなただけではないので、ローカル clone にはまだ入っていない変更がある場合があります。ローカル clone を更新するには、自分の fork を更新する必要があります。心配いりません。とても簡単です！</p><p>ブラウザーで GitHub を開いた状態で、自分の fork を開いてください。古い状態であることを示す表示が出るはずです。<code class="shiki"><span>Fetch upstream</span></code> をクリックし、続いて <code class="shiki"><span>Fetch and merge</span></code> をクリックします。</p><p><img${ssrRenderAttr("src", _imports_13)} alt=""></p><p>次に GitHub Desktop で <code class="shiki"><span>Pull Origin</span></code> をクリックして origin から pull します。ローカル clone は自動的に更新されます。</p><p><img${ssrRenderAttr("src", _imports_14)} alt=""></p><p>これでローカル clone は最新です！</p><h3 id="トラブルシューティング" tabindex="-1">トラブルシューティング <a class="header-anchor" href="#トラブルシューティング" aria-label="Permalink to &quot;トラブルシューティング&quot;">​</a></h3><p>この作業は、他の誰かが Wiki を更新したたびに毎回行う必要があります。これを忘れると、PR を自動マージできないなどの問題が起きることがあります。（PR を開こうとしたときに分かります）</p><p><img${ssrRenderAttr("src", _imports_15)} alt=""></p><p>その場合でも心配いりません。簡単に直せます。</p><h4 id="修正方法" tabindex="-1">修正方法 <a class="header-anchor" href="#修正方法" aria-label="Permalink to &quot;修正方法&quot;">​</a></h4><p>前の手順と同じように fork を更新してください。そのあと、GitHub Desktop でそのまま pull してはいけません。そうすると問題が起きます。代わりに <code class="shiki"><span>Current branch</span></code> をクリックしてください。</p><p><img${ssrRenderAttr("src", _imports_16)} alt=""></p><p>次に <code class="shiki"><span>Choose a branch to merge into ...</span></code> をクリックします。</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "/assets/images/contribute/troubleshooting/merge/merge_choose_branch.png",
    width: "250"
  }, null, _parent));
  _push(`<p>デフォルトブランチを選び（たいていはすでに選ばれています）、<code class="shiki"><span>Create a merge commit</span></code> をクリックしてください。</p>`);
  _push(ssrRenderComponent(_component_WikiImage, {
    src: "/assets/images/contribute/troubleshooting/merge/merge_commit.png",
    width: "260"
  }, null, _parent));
  _push(`<p>次に VSCode で開きます。</p><p><img${ssrRenderAttr("src", _imports_17)} alt=""></p><p>変更を更新したいのは相手の変更ではなく自分の変更なので、<code class="shiki"><span>Accept Current Change</span></code> をクリックしてください。この手順は、存在する問題ごとに行う必要があります。各問題でこれを行わないと、PR をマージできません。</p><p><img${ssrRenderAttr("src", _imports_18)} alt=""></p><p>逆に、他の人が加えた変更を受け入れたい場合は <code class="shiki"><span>Accept Incoming Change</span></code> をクリックします。そのあと保存して GitHub Desktop に戻り、そこで <code class="shiki"><span>continue merge</span></code> をクリックするだけです。</p><p><img${ssrRenderAttr("src", _imports_19)} alt=""></p><p>これで問題は解決です！安全に続行し、ブランチに commit して PR を作成できます。</p><h2 id="まとめ" tabindex="-1">まとめ <a class="header-anchor" href="#まとめ" aria-label="Permalink to &quot;まとめ&quot;">​</a></h2><p>これで必要なソフトウェアはすべてインストールでき、Wiki を編集するために必要なスキルも学びました！ 文章のスタイルについてもっと知りたいなら、次のガイドを読んでください。</p>`);
  _push(ssrRenderComponent(_component_Button, { link: "/contribute-style" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Wiki ページの編集方法`);
      } else {
        return [
          createTextVNode("Wiki ページの編集方法")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("contribute-how-to.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contributeHowTo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contributeHowTo as default
};
