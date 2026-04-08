---
title: GameTest Q&A 2021/08/06
category: Q&A
mentions:
    - GTB3NW
    - SirLich
    - MedicalJewel105
    - Lufurrius
    - IlkinQafarov
    - Herobrine643928
---

この Q&A は [Bedrock Add-Ons discord](https://discord.gg/NGeNhZpvzV) で行われました。Microsoft の社員 5 名が GameTest framework についての質問に答えました。質問はコミュニティから集められたものです。

_warning:_ すべての発言がそのまま転記されているわけではなく、一部は文面を整えています。

## Realms

-   **Q**: GameTest は Realms で動くように設計されていますか？
-   **A**: はい。

## QuickJS と V8

-   **Q**: V8 などほかの JS 実装ではなく QuickJS を選んだ理由は？ QuickJS はかなり遅く、主に JIT がないのが大きな欠点です。
-   **A**: いくつかのメンバーは過去のプロジェクトで QuickJS を使っていて、統合がとても簡単でした。V8 なども検討しており、将来的には移行するかもしれません。JIT は魅力的ですが、すべてのプラットフォームが簡単に、あるいはまったく対応しているわけではありません。

## ファイル / ネットワークアクセス

-   **Q**: GameTest に file や network の interface はありますか？
-   **A**: scripting API は最初は制限を保ち、機能を徐々に増やしていきたいと考えています。file や network API は権限やゲーム所有者の同意が必要になるので、デフォルト API には入らない可能性が高いですが、将来的には追加するかもしれません（サーバー所有者向けなど）。
-   **Q**: そういう interface は、利用可能なプラットフォームの一部でしか実装されないのでしょうか？
-   **A**: すべての API をすべてのプラットフォームで実装することを目指しています。例外は、editor 専用 API のような desktop 限定機能を導入する場合くらいです。

## スラッシュコマンド

-   **Q**: カスタム slash command を登録できるのはいつですか？
-   **A**: 具体的な時期はまだありませんが、かなり優先度の高い項目です。
-   **A**: みんなが自分で `!commands` を作り始めた時点で、必要性はかなり明らかでした。

## バニラのテスト

-   **Q**: いまは GameTest framework を使って Vanilla Behavior pack をテストしていますか？ あるいは、自分たちのコンテンツに testing API をどのように使っていますか？
-   **A**: はい。今は vanilla コンテンツ向けのテストがたくさんありますし、今後も増やしていきたいです。public build には `vanilla_gametest` として一部のテストも同梱しています。
-   **A**: 長期的には、コミュニティにも GameTest を使って vanilla のバグを報告してもらえれば嬉しいです。修正後にそのテストを取り込み、同じ問題を再発させないようにできます🙂

## タイムライン

-   **Q**: 次にどんな event を API に入れる予定か、タイムラインはありますか？
-   **A**: どの event を次に追加するかはまだ検討中で、共有できる具体的なタイムラインはあまりありません。どの event を追加してほしいですか？
-   **A**: block の破壊や配置が高優先度なのは確かにそうです。

## GameTest の政治的な背景

-   **Q**: GameTest API がうまく育ったのに、元の Scripting API がそうならなかったのは、技術的・構造的・政治的にどんな理由があったのでしょう？ 今回「何を変えた」のか話せますか？ さらに、GameTest が「成功」と見なされるには何が必要ですか？ それを手伝うために、私たちにできることはありますか？
-   **A**: 今はまず、対象とするシナリオに絞って進めています。content testing と validation から始めていて、これは core Minecraft だけでなく、Minecraft の custom content にももっと必要な領域です。開発者が自分のコンテンツに対してテストを組み立てやすくしたいと強く考えています。この用途は要件も比較的限られています（たとえば、対応プラットフォームを少なくできる、性能の問題がそこまで大きくない、など）。だから GameTest に集中していて、成功のためには creators が自分のものを簡単にテストできることが重要だと考えています。
-   **A**: もちろん、将来的には gameplay を含めてもっと多くのシナリオに広げられる可能性はあります。ただし、性能や対応プラットフォームの拡大、フィードバックへの対応がもう少し固まるまでは、gameplay 用の scripting/gametest API に期待を持たせすぎたくありません。
-   **A**: それを手伝うには何ができますか？ -> 改善提案や新機能の要望をこれからも送ってください🙂 creator community がすべての原動力です。

## コンソール

-   **Q**: なぜ console では gametest を実行できないのですか？ 将来的に console は gametest API をサポートしますか？
-   **A**: はい。すべてのプラットフォームをサポートする計画です。いくつかのプラットフォームでは JS engine が必要とする API が足りず、そのひとつが `aligned_alloc` でした。今、そのプラットフォームを有効化する作業を進めています。

## 追加言語

-   **Q**: gametest はほかの言語もサポートしますか？
-   **A**: binding layer は、ほかのプログラミング / scripting 言語にも対応できるように汎用的に作っています。内部では Lua や Blockly のようなもので遊んだこともあります。ただ、現時点で公式にほかの言語をサポートすると約束はできません🙂
-   **Q**: Kotlin は考えましたか？
-   **A**: Kotlin はまだあまり調べていません（Android 側は今も Java です🙂）が、面白そうです。少し見てみます。

## event system

-   **Q**: data-driven 側にも event system があります。GameTest framework の event system と data-driven の event system の関係はどう考えていますか？ 将来的に両者の間に interface はできますか？
-   **A**: 2 つのシステムがうまく連携することを目指しています。data-driven に慣れているなら、その中に自然な形で script を差し込めるようにしたいです。具体的な形はまだ詰めているところです。

## NOT リストに何かある？

-   **Q**: これまで話し合って、明確に実装しないと決めたものはありますか？ サポートしない端末や、API の方向性として取りたくないものなど、なんでも構いません。
-   **A**: 良い質問です。絶対にやらないものはあまり多くありません。
-   **A**: ただし、次のものは慎重に扱います。

    -   ネットワークアクセス
    -   ファイルアクセス
    -   プラットフォーム固有 API

-   **A**: ネットワークアクセスは、特定の相手に対してかなり構造化された API で許可するかもしれません。ファイルも同様で、何らかの永続ストレージは持つ可能性がありますが、自由形式の file にはしないつもりです。
-   **A**: プラットフォーム固有 API は避けたいです。ただ、editor 向けに desktop 固有 API を実装する可能性はあります。gameplay や gametest では避けたいです。
-   **A**: もうひとつ公開したいけれど難しいものとして custom shaders があります。PlayStation では shader を提出物に組み込む必要があります。なので、非常に柔軟な shader をハードコードした physically based materials system で対応する必要があります。
-   **Q**: その「永続ストレージ」では、インスタンスに依存しない形で simple int 変数を読み書きできますか？ それともインスタンス内だけで、runtime が終わると消えますか？
-   **A**: key/value pair storage、あるいは Json storage を追加する計画があります。ひとつは tags や scoreboards にアクセスする JavaScript API です。さらに進めるなら、一般的な read/write storage を可能にしたいです（ただし直接 file system にはアクセスしません）。ただし、pack ごとに sandbox された storage を保証する安全性の課題は解く必要があります。

## Custom Dimensions

-   **Q**: いつか custom dimensions に GameTest を対応させる計画はありますか？
-   **A**: GameTest API を設計するとき、custom content を常に意識していました。だからたとえば `Commands.run` が dimension を文字列で受け取るようにしていて、固定の dimension 変数にしていません。将来的に custom dimensions やほかの custom content と統合できる余地は、しっかり残しています。

## 旧 Scripting API

-   **Q**: 旧 scripting api はどうなりますか？ 更新はされなくても、今後も使える状態のままですか？（つまり、非対応にはならない？）
-   **A**: 元の scripting API は引き続き使えます（ご覧のとおり、最近はほとんど更新されていません）。GameTest API や、ほかの gameplay logic の仕組みが scripting v1 の機能をカバーできるようになれば、scripting V1 の機能は削除します。
-   **A**: 旧 scripting API は experimental だったので、後方互換性の保証はかなり少ないです。モバイルで使えなかったこともあり、今から対応プラットフォームを広げる予定もありません。
-   **A**: client-side の体験や UI のようなものはサポートしたいと思っています。そのためのアイデアはいくつかありますが、まだ固まった計画はありません。

## World Generation

-   **Q**: GameTest から world noise を公開する予定はありますか？ JS 用の noise ライブラリはありますが、必要なのは biome generation や Molang query で使われている noise です。
-   **A**: scripting の中で world generation をどう扱うべきか、まだ本格的には検討しきれていません。chunk 生成は task thread で動いていて、今の gametest 実装では別 thread へ安全に移すことができません。
    web worker のようなものを作る案はありますが、まだ会話以上には進んでいません。

## GameTests と BDS

-   **Q**: 近いうちに BDS で gametest はスムーズに動くようになりますか？
-   **A**: 現在、CI pipeline では BDS を使って GameTest を実行し、結果を検証しています。
-   **A**: BDS と GameTest の相性で問題があるところはありますか？
-   **A**: GameTest がうまく動かない理由のひとつは、world で experiment を有効にする必要があることです。これは dedicated server からだとやりにくいです。今いちばん簡単なのは、Minecraft client で GameTest experiment を有効にした world を作り、それを dedicated server に移す方法です。

## JS を学ぶ

-   **Q**: JavaScript を学び始めたところです。新しい coder が gametest を学ぶのに役立つおすすめはありますか？ JS 全般ではなく、gametest の文脈で知りたいです。
-   **A**: いいですね！ JavaScript はプログラミングを始めるのにとても良い方法です🙂
-   **A**: 最初の game test の作り方について、かなり小さな記事があります: https://docs.microsoft.com/en-us/minecraft/creator/documents/gametestbuildyourfirstgametest
-   **A**: もっとコンテンツを増やせるといいですね！
-   **Q**: NOTE: これらのガイドに貢献したいなら、ぜひお願いします！

## Beta BDS

-   **Q**: Gametest の問題をよりよくデバッグ・診断できるように、beta ビルドの BDS を一般公開する予定はありますか？
-   **A**: 提案ありがとうございます。やりたいです。可能かどうか release management チームに確認します。

## NPM

-   **Q**: gametest は npm library をサポートできますか？
-   **A**: ネイティブでは NPM library をサポートしていませんが、WebPack を使ってパッケージを「焼き固める」ことで、限定的にうまくいった例はあります。
-   **A**: それと、公式の TypeScript bindings ももうすぐ出ます🙂 ここでは初期版を共有してきましたが、公開までもう少しです。
-   **Q**: npm のような gametest 用の package manager はありますか？
-   **A**: 考えたことはありますが、かなり作業が多いです。引き続き検討します🙂 scripting を使う人が増えれば、自然な開発パターンが見えてきて、それに乗っていきたいです。

## GameTest の最終目標

-   **Q**: GameTest の最終目標は何ですか？ テストツールのままですか、それとも新しいコンテンツ追加のような用途まで広がりますか？
-   **A**: GameTest では、コンテンツのテストと検証をもっと簡単にしたいです。自分のコンテンツ、装置、script に対して簡単にテストを組めるようにしたい。そのために、GameTest modules で mock や assertion 用の豊富な script API を作っています。環境内の player をシミュレートする、とても面白い方法を含むいくつかの新しい API も追加する予定です。JavaScript ベースのテストをもっと簡単に作れるようにする方法も考えています。
-   **A**: もちろん、GameTest の嬉しい副産物として、より一般化された server-based scripting API を作り、将来のシナリオにもどう使えるかを探れるようになるのも大きいです。

## Experimental Modules

-   **Q**: 以前、すべての command が API になると期待していると話していました。もし experimental feature が来たら API 対応されますか？ その場合、それは experimental module になりますか？
-   **A**: experimental feature には API を用意したいです。どうするかはまだ決めていません。`mojang-minecraft-experimental` のような別 module にする案もあります。これは、C++ でまだ標準化されていない型を experimental namespace に置くのと似ています。

## GameTest API を作るうえで

-   **Q**: GameTest API を作るうえで、いちばん面白い部分は何ですか？ 実装していて本当に気持ちよかった、あるいは楽しかった設計判断や技術的要素はありましたか？
-   **A**: 私にとっては、複数の scripting 言語をサポートできる Binding layer + Consumer を作ったことでした。
-   **A**: 各 pack が、どの scripting runtime を使うか選べるようにしたい、というのが考え方です🙂
-   **Q**: 最高です！ 将来的に Python を使える可能性はありますか？
-   **A**: Game Jam では Python 2.7 をかなり無理やり動かしたことがありますが、今のところ製品計画には入っていません。

## API のカバー範囲

-   **Q**: 現在のいくつかの method は player にも使えるようになりますか？ たとえば item stack method のようなものです。
-   **A**: 最新の API 一覧はこちらです: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/player
-   **A**: まだ API surface は少し小さいですが、少しずつ増やしています。

## GameTest が Command Block を置き換える？

-   **Q**: GameTest は command block を置き換えますか？
-   **A**: scripting が command block を完全に置き換えるとは思いませんが、重い logic の多くは script 側に移ると思います。理想的には、script で custom command を登録し、command block がそれを実行する、といった連携になるでしょう。

## EDU Edition の Code Builder

-   **Q**: education edition の code builder のように、gametest API をもっと扱いやすくする予定はありますか？
-   **A**: GameTest に Blockly のような visual programming を取り入れる案を検討し始めています。まだ確定した内容はありませんが、とても面白そうです！

## いちばん笑ったバグ

-   **Q**: gametest で作業していて、いちばん笑ったバグは何でしたか？
-   **A**: かなり前の話ですが、taming API をテストしていて、100 匹くらいの狼を spawn して tame したらどうなるか見たことがあります... https://imgur.com/a/NIF7D4x

## Marketplace

-   **Q**: GameTest は marketplace にどれくらい影響しますか？
-   **A**: 今の GameTest は experimental feature なので、marketplace content には含められません。ただ、marketplace に出す前の検証にはかなり役立つと考えています。

## Realms

-   **Q**: Realms における game test の将来は？ そのまま残りますか、それとも旧 scripting API のように削除されますか？
-   **A**: GameTest（およびその後の gameplay scripting）は Realms で提供するつもりです。なので、その後に非推奨化する予定はありません。

## GameTest は汎用的？

-   **Q**: コミュニティでの gametest の使われ方を見ると、主に最終製品の一部として組み込まれています（本来の scripting engine の設計意図のように）。しかし、制作中にバグを見つけるためのテストとして厳密に使われているわけではありません。将来的に gametest は、もっと一般的な用途に転用され、add-on の正式機能として扱われるようになるのでしょうか？
-   **A**: 今は content testing に集中しています。一般的な gameplay 向けの scripting API を支える前に、もっとテストし、裏側の基盤を整え、どのタイミングでどう experimental から出せるかを判断したいです。

## Molang

-   **Q**: GameTest API で Molang をテストできますか？
-   **A**: entity behavior はいろいろな方法でテストできます。もちろん entity には animation controller や state transition 条件で Molang を入れられます。
-   **A**: 何か具体的にカバーしたいものはありますか？
-   **A**: GameTest を custom entity で使うときは、実行中にその entity の behavior pack を stack に入れておけば使えます。

## コミュニティのフィードバック

-   **Q**: 新しい Gametest Features は、Mojang がテストのために必要なものに基づいて追加されますか？ それともコミュニティのフィードバックや要望に基づきますか？ これから変わりますか？
-   **A**: 両方です。vanilla の挙動をテストするために新しい GameTest API を追加してきましたし、みなさんがどの API に興味があるかも知りたいです。
-   **A**: その一例が custom commands API です。コミュニティからの要望が多いので、追加候補の上位にあります😄
-   **A**: ほかにも、gametest をより強力で作りやすくするために、simulated player API と Visual Studio Code での script debugging を追加予定です。

## プラットフォームの効率

-   **Q**: 他のプラットフォームとの互換性はどうですか？ 全体として効率は良いですか？
-   **A**: すべてのプラットフォームで有効化する予定です。性能面では、JIT をサポートするプラットフォームとそうでないプラットフォームの両方をまたいで対応する必要があります。なので、これはかなり大きな性能分析とチューニングの対象です。
-   **Q**: 「効率が良い」とは、API がどれだけ「metal に近いか」という意味です。
-   **A**: 補足ありがとうございます。まずは data-driven システムとうまく連携する API を目指します。つまり、Minecraft の entity / item / block / chunk などの抽象度で動かす形です。Bukkit を知っているなら、それに近い抽象度を目指しています（さらに client-side の拡張も視野に入っています）。

## 名前の由来

-   **Q**: GameTest という名前の理由は何ですか？
-   **A**: Java 側で先に行われていた作業を土台にしていました。Java には、テスト工程で使う初期の GameTest framework がありました。
-   **A**: それに続く話として、システム全体を gametests と呼ぶのか、それとも別の名前になるのか、という点はどうですか？
-   **A**: テスト以外のシナリオまで広がるなら、JS API 全体を GameTest と呼ぶのはおかしいと思います。API 名全体にもその考え方が反映されています。

## なぜ Gametests なのか

-   **Q**: gametest の意図や、用途を考えるうえで大事にしたことは何ですか？
-   **A**: 要するに「ゲームをテストする」ことです。再コンパイルせずにテストをゲームへ追加できるのは大きな利点です。テストをもっと速く作れますし、community の人たちも bug report の際にテストを書けます。
-   **A**: GameTest は、Minecraft 上で script を動かすための「試験場」としてもとても重要です。

## gametest の限界は？

-   **Q**: gametest の限界は何ですか？
-   **A**: あなたの想像力です！
-   **A**: ただし本当に限界はあります。structure は 64x64x64 までです。今は overworld でしか動かしていませんが、将来的には広げたいです。
-   **A**: player との interaction はまだ対応していませんが、かなり進めています。
-   **A**: Gametest は mobile でも動きます。今は未対応の 2 プラットフォーム、Switch と PlayStation にも対応作業中です。
-   **Q**: いくつの for loop を入れたらゲームが落ちますか？
-   **A**: 良い質問です。今は `while (true)` にするとゲームが止まります。ただ、これを検出して止める watchdog を試作しており、実装する予定です。
-   **A**: その watchdog 試作はそれ以上のこともできました。cycles だけでなく、script object 数や memory も監視できました。
    （しかも language runtime をまたいで動いたので、かなり良いです）

## Hot Reloading

-   **Q**: function の `/reload` コマンドのように、ゲーム内から gametest api ファイルを簡単に再読み込みできるようになる予定はありますか？ すぐ reload できると、debug や作業がずっと楽になります。
-   **A**: gametest JS をたくさん書いてきた立場として、JS をもっと簡単に再読み込みする方法は、まさに私たちも必要性を感じていて、ロードマップにも入っています。

## ドキュメント

-   **Q**: gametest のドキュメントは、私が入りにくかった理由のひとつです。もっと accessible にして、基礎からこの framework を理解しやすくする予定はありますか？
-   **A**: 最近、新しい creator portal を公開しました。GameTest の始め方に関する記事も含まれています。https://docs.microsoft.com/en-us/minecraft/creator/documents/gametestgettingstarted
-   **A**: API docs はまだ新しいので、詳しいドキュメントや sample を増やす余地はたくさんあります。docs は GitHub で公開しているので、community からの pull request も歓迎です。https://github.com/MicrosoftDocs/minecraft-creator/tree/main/creator/ScriptAPI

## Hummingbird UI

-   **Q**: gametest は Hummingbird UI の engine として scripting の役割を担えますか？
-   **A**: Hummingbird は GameFace の旧名です（https://coherent-labs.com/products/coherent-gameface/）。新しい Bedrock UI を作るために一緒に取り組んでいる UI 技術です。
-   **A**: scripts で UI を作成・変更できるようにするつもりは確かにあります。ただ、既存の UI と自然に連携する形にしたくて、そこはまだ調整中です。
-   **A**: GameFace JS と同じ sandbox で動かす想定ではありません。また今は server first で進めていて、GameFace は client 側でしか動いていません。

## 外部スクリプト

-   **Q**: gametest は外部スクリプトと連携できますか？ 別ディレクトリで動く script と通信できるようなものです。
-   **A**: scripts に別の script への依存関係を持たせる仕組みは欲しいです。たとえばテスト用の優秀な script や terrain gen 用の script などです。ただ、それは behavior pack の依存システム経由になるでしょう。任意の場所から JS を読み込む仕組みは今のところありません。
-   **A**: そうですね、外部 script をすべてのプラットフォームで動かすのは大変ですし、セキュリティ上の課題にもなりえます。

## Marketplace

-   **Q**: gametest は marketplace content で使えますか？ 使えるなら、おおよその時期はありますか？
-   **A**: 今は testing シナリオに集中しています。将来の構想や計画はいろいろありますが、まだ約束できないものに期待させたくはありません。

## Discord

-   **Q**: gametest で discord を Minecraft に接続できますか？
-   **A**: 最初のバージョンでは、おそらく無理です🙂

## Java 互換

-   **Q**: `suite:java_parity` が付いた vanilla game test の多くが無効になっていますが、おそらく挙動が正しく動かないからですよね。これらのテストは Java の test suite から移植されたものですか？ これらのテストの意図は何ですか？
-   **A**: Java 内の GameTest 作業を土台にしていて、その中のいくつかのテストも移植しました。Java と Bedrock では互換性に差があるため同じようには動かないことがあっても、Java 側にあったテストを持ってきて追跡したかった、というのもあります。
-   **Q**: 無効化された parity test を、もっと Java 挙動を移植するための TODO リストのように見られたらいいですね。こちらでもかなり追加できます、笑
-   **A**: Java parity の問題を示す game test を書いてくれたら、ぜひ欲しいです: https://aka.ms/gametestsamples
-   **A**: はい、game test から見つかった parity 問題は bug として追跡しています。
-   **Q**: こういう形で gametest がコントリビュート可能なら、実際の Vanilla Behavior / Resource pack への貢献もできますか？
-   **A**: 「built in」の game tests を同じ repository に移して、open source の behavior pack package を取りやすくするべきか、今まさに議論しています。
