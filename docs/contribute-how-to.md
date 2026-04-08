---
title: 貢献のしかた
hidden: true
mentions:
    - TheItsNameless
    - QuazChick
description: 最初の貢献をしてみよう！
---

## このガイドについて

このガイドでは、Wiki の編集を始める方法を順を追って説明します。GitHub のサイト上で Wiki を「その場で」編集することもできますが、このガイドでは正しい手順を学びます。これは価値のある、他の場面にも応用できるスキルであり、Wiki を編集する以上の知識にもつながります。

この記事では、ローカルリポジトリの管理を最も簡単に行える GitHub Desktop の使い方を説明します。Git を直接使えば GitHub Desktop なしでもできますが、これは GitHub Desktop よりも上級者向けです。このガイドでは扱いません。

このガイドで説明する手順の一部をすでに知っている場合は、右側の目次を使って、知らない部分だけに飛んでください。

Wiki の見た目の細かなスタイル機能についてもっと知りたい場合は、[Contribute-Style-Guide](/contribute-style) を続けて読んでください。

## Wiki を編集する手順

Wiki を編集するには、次の 5 つの大きな手順に従います（ソフトウェアのダウンロードとセットアップは最初の 1 回だけ行います）。

1. リポジトリを Fork する
2. リポジトリを Clone する
3. Wiki を編集する
4. ローカル変更を commit して GitHub と同期する
5. Pull Request を作成する

初めて見ると少し大変そうに見えるかもしれませんが、心配いりません。とても簡単で、ここでは 1 つずつ順番に案内します。

## ソフトウェアのセットアップ

Wiki を編集するには、次のソフトウェアをダウンロードしてインストールする必要があります。

-   GitHub Desktop
-   NodeJS
-   Visual Studio Code

より頻繁に Wiki を編集したいなら、Git を使い始めるのもよいでしょう。Git は GitHub Desktop より強力です。ただし心配はいりません。私たちには GitHub Desktop で十分です！

### Visual Studio Code

[Visual Studio Code (VSCode)](https://code.visualstudio.com/Download) は、ファイルやコードなどを編集するのにとても便利な環境です。他のエディタを使っても構いませんが、このチュートリアルでは VSCode のインストールを案内します。

![](/assets/images/contribute/setting_up_software/vscode/vsc_download.png)

#### インストール

保存した `.exe` があるフォルダーを開いて、ダブルクリックしてください。セットアップ画面が開きます。ほとんどの場合は `next` を押して大丈夫ですが、「additional tasks」画面で `add to PATH` が選択されていることだけ確認してください。

最後の画面では `install` をクリックします。

インストールが終わったら `Finish` をクリックしてください。これで VSCode が起動するはずです。起動しない場合は手動で開いてください。

ここから VSCode の見た目をカスタマイズできます。終わった、またはカスタマイズしたくない場合は「Next Section」をクリックしてください。

<WikiImage src="/assets/images/contribute/setting_up_software/vscode/vsc_look.png" width="210" />

次に、VSCode の基本を学べます。前と同じく、終わっていれば「Next Section」をクリックしてください。

<WikiImage
    src="/assets/images/contribute/setting_up_software/vscode/vsc_fundamentals.png"
    width="210"
/>

最後のページでは、準備ができたら、前と同じように「Mark Done」をクリックしてください。

<WikiImage
    src="/assets/images/contribute/setting_up_software/vscode/vsc_productivity.png"
    width="210"
/>

これで VSCode のインストールは完了です。いったん閉じて構いません。

### GitHub Desktop

[GitHub Desktop](https://desktop.github.com) は、GitHub リポジトリをダウンロードしてローカルで編集できるようにするためのツールです。コマンドラインツールの Git を使って同じこともできますが、これは少し上級者向けで、このチュートリアルでは扱いません。

![](/assets/images/contribute/setting_up_software/ghdesktop/ghd_download.png)

#### インストール

先ほどと同じように、保存した `.exe` のあるフォルダーへ行き、ダブルクリックしてください。セットアップが開き、GitHub Desktop が自動的にインストールされます。完了すると、GitHub Desktop が自動で起動します。

<WikiImage
    src="/assets/images/contribute/setting_up_software/ghdesktop/ghd_install.png"
    width="210"
/>

次にサインインを求められます。すでに GitHub アカウントがあるなら、`Sign in to GitHub.com` をクリックしてください。ブラウザーのタブでアカウントにサインインします。GitHub アカウントをまだ持っていない場合は、`Create your free account` をクリックしてアカウントを作成してください。その後は通常どおり進めます。

![](/assets/images/contribute/setting_up_software/ghdesktop/ghd_login.png)

GitHub Desktop では何も変えず、そのまま「Finish」をクリックしてください。

![](/assets/images/contribute/setting_up_software/ghdesktop/ghd_configure.png)

ひとまず GitHub Desktop は閉じて構いません。

### NodeJS

[NodeJS](https://www.nodejs.org) を使うと、Web 上と同じ見た目で Wiki をローカル表示できます。プッシュ前に typo やエラーを見つけられるので、マージ時のエラーを減らせます。

![](/assets/images/contribute/setting_up_software/nodejs/njs_download.png)

#### インストール

ここでも、ダウンロードフォルダーに行って NodeJS のセットアップファイルをダブルクリックするだけです。今回のセットアップでは、特に変更は不要です。`Tools for native modules` は追加しないようにしてください。必要ありません。最後のページでは `Install` をクリックします。インストールが終わるまで待ってから `Finish` をクリックしてください。

## ローカル環境をセットアップする

必要なプログラムはすべてインストールできたので、Wiki への貢献を始められます。まずはローカル作業環境をセットアップする必要があります。心配いりません。とても簡単です。以下の手順に従ってください。

[GitHub リポジトリ](https://github.com/Bedrock-OSS/bedrock-wiki) を開き、`Fork` をクリックします。すでに Fork 済みでも問題ありません。そのまま進めてください。

![](/assets/images/contribute/setting_up_local/setup_fork.png)

GitHub Desktop を開き、`Clone a repository from the Internet` をクリックします。

![](/assets/images/contribute/setting_up_local/setup_clone.png)

次に、自分の fork を選んで「Clone」をクリックします。リポジトリが自動で clone されます。

![](/assets/images/contribute/setting_up_local/setup_clone_2.png)

そのあと、clone の概要が表示されます。作業するには「Open in Visual Studio Code」をクリックしてください。VSCode が Wiki とともに自動で開きます。フォルダーを信頼するか聞かれたら、`Yes, I trust the authors` をクリックしてください。

![](/assets/images/contribute/setting_up_local/setup_vsc.png)

これで Wiki の clone はローカル端末に成功し、すべてのファイルを編集できるようになりました！

## 変更をコミットする

Wiki での作業を終えたら、変更を直接リポジトリに commit して push できます。

GitHub Desktop に切り替えると、変更が表示されるはずです。表示されない場合は、ファイルを保存したか、GitHub Desktop で正しいリポジトリを開いているか確認してください。

変更を GitHub Desktop で確認したら、commit 名と説明を付けられます（どちらも必須ではありません）。そのあと `commit to main` をクリックしてください。

![](/assets/images/contribute/committing_changes/committing.png)

commit が終わったら、ローカル clone を GitHub に push する必要があります。`Push commits to the origin remote` をクリックしてください。

![](/assets/images/contribute/committing_changes/committing_push.png)

これで GitHub が、あなたのローカル clone を自分たちのサーバーへ送信します。

## Pull Request を作成する

GitHub に編集内容が反映されたので、次は `Pull Request`（PR）を作成し、変更をマージできるようにします。

方法はいくつかあります。ここでは、GitHub Desktop で `Create Pull Request` をクリックします。

![](/assets/images/contribute/creating_pr/pr.png)

GitHub Desktop がブラウザーで PR を開きます。PR は編集できますが、必須ではありません。すでにマージに十分な状態になっているはずです。そのまま `Create Pull Request` をクリックしてください。

![](/assets/images/contribute/creating_pr/pr_2.png)

これで完了です。あとは私たちが Wiki に変更をマージする番です！

## ローカル環境を更新する

Wiki で作業しているのはあなただけではないので、ローカル clone にはまだ入っていない変更がある場合があります。ローカル clone を更新するには、自分の fork を更新する必要があります。心配いりません。とても簡単です！

ブラウザーで GitHub を開いた状態で、自分の fork を開いてください。古い状態であることを示す表示が出るはずです。`Fetch upstream` をクリックし、続いて `Fetch and merge` をクリックします。

![](/assets/images/contribute/updating_local/updating.png)

次に GitHub Desktop で `Pull Origin` をクリックして origin から pull します。ローカル clone は自動的に更新されます。

![](/assets/images/contribute/updating_local/updating_pull.png)

これでローカル clone は最新です！

### トラブルシューティング

この作業は、他の誰かが Wiki を更新したたびに毎回行う必要があります。これを忘れると、PR を自動マージできないなどの問題が起きることがあります。（PR を開こうとしたときに分かります）

![](/assets/images/contribute/troubleshooting/merge/merge_merge.png)

その場合でも心配いりません。簡単に直せます。

#### 修正方法

前の手順と同じように fork を更新してください。そのあと、GitHub Desktop でそのまま pull してはいけません。そうすると問題が起きます。代わりに `Current branch` をクリックしてください。

![](/assets/images/contribute/troubleshooting/merge/merge_branch.png)

次に `Choose a branch to merge into ...` をクリックします。

<WikiImage
    src="/assets/images/contribute/troubleshooting/merge/merge_choose_branch.png"
    width="250"
/>

デフォルトブランチを選び（たいていはすでに選ばれています）、`Create a merge commit` をクリックしてください。

<WikiImage src="/assets/images/contribute/troubleshooting/merge/merge_commit.png" width="260" />

次に VSCode で開きます。

![](/assets/images/contribute/troubleshooting/merge/merge_open.png)

変更を更新したいのは相手の変更ではなく自分の変更なので、`Accept Current Change` をクリックしてください。この手順は、存在する問題ごとに行う必要があります。各問題でこれを行わないと、PR をマージできません。

![](/assets/images/contribute/troubleshooting/merge/merge_accept.png)

逆に、他の人が加えた変更を受け入れたい場合は `Accept Incoming Change` をクリックします。そのあと保存して GitHub Desktop に戻り、そこで `continue merge` をクリックするだけです。

![](/assets/images/contribute/troubleshooting/merge/merge_continue.png)

これで問題は解決です！安全に続行し、ブランチに commit して PR を作成できます。

## まとめ

これで必要なソフトウェアはすべてインストールでき、Wiki を編集するために必要なスキルも学びました！ 文章のスタイルについてもっと知りたいなら、次のガイドを読んでください。

<Button link="/contribute-style">Wiki ページの編集方法</Button>
