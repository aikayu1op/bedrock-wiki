---
title: Scripting and Editor Q&A 2023/09/22
category: Q&A
mentions:
    - McMelonTV
    - SmokeyStack
---

この Q&A は [Bedrock Add-Ons discord](https://discord.gg/uZF75ZxcJq) で行われました。Microsoft / Mojang の社員 10 名が、Scripting と Editor API に関する質問に答えました。質問はコミュニティから集められたものです。

:::warning
すべての発言がそのまま転記されているわけではなく、一部は文面を整えています。全部を見たい場合は、上記の discord に参加して「events archive」ロールを取得してください。
:::

## Scripting

## より良いカメラ

-   **Q**: 将来的に script api で camera に point rotation を使えるようになりますか？
-   **A**: camera path（および一般の path）の可視化は良いアイデアで、検討しています。

## 追加言語の進捗

-   **Q**: 前回の Q&A で追加言語について話しましたが、公式対応を約束できないという回答でした。何か変わりましたか？ それともまた 1 年 JS だけですか？
-   **A**: 変わっていません。scripting は JavaScript からかなり抽象化されていますが、複数の language runtime をサポートするのは大きな開発コストです。

## ScriptAPI 経由の World Generation

-   **Q**: ずっと気になっていました。Legends を触って mod しているうちに、Village や Biome は B# scripting system で配置されていると知りました。Minecraft の ScriptAPI でもそれをサポートする予定はありますか？
-   **A**: ゲーム内の機能については、まず何がいちばん良い API surface かを考えます。scripting は非常に強力なので world generation に向いているかもしれませんし、customization 用の data-driven JSON definitions が向いている場合もあります。world generation はかなり要望の多いシナリオなので、今後どう公開するのが正しいかを見極めるために、利用可能な API surface を検討していきます。
-   **Q**: biome climate、biome id、noise type のような biome 値を取得したいです。getTags で biome の tag 一覧も取れます。
-   **A**: フィードバックありがとうございます。"biome discovery" API は、今後投資したい領域のひとつです。

## QuickJS

-   **Q**: scripting をもっと滑らかに動かすために JIT compilation を追加する予定はありますか？
-   **A**: V8 のように JIT に対応した JS engine でも、ターゲット端末のすべてで使えるわけではないのが課題です。
-   **A**: ほかでも触れていますが、私たちの JavaScript engine は JIT をサポートしていません。将来別の JS engine に移行できれば、JIT を検討できます（ただし、今の多くのプラットフォームは JIT に対応していません）。
-   **Q**: QuickJS から離れる予定はありますか？
-   **A**: 今のところ、すぐに QuickJS から移る予定はありません。
-   **A**: scripting はできるだけ多くのシナリオをカバーしたいですし、そのために適切な性能基盤を整えるのは重要です。ここには 2 つの半分があります。ひとつは、作る API のパラダイムが一般的な用途で高性能であること。もうひとつは、QJS の統合自体（そして Bedrock engine そのもの）の改善です。

    とはいえ、私たちは Java の modding framework、特に Fabric のようなものとはかなり違います。最終的には、私たちは engine の上にある versioned contract であって、engine を直接改造する方法ではありません。でも、使いやすく、強力でもあるものにしたいです。

## JS で JSON の読み書き

-   **Q**: JavaScript で JSON を読み書きできるようにする予定はありますか？
-   **A**: はい。scripts フォルダーに JSON ファイルを置けば import として読めます。ただ、scripts フォルダーの外から JSON を読む話でしょうか？ 書き込みはかなり難しく、対応する可能性は低いです。
-   **A**: 自分用の data file を持ちたい、そして authoring 形式として .json を使いたいなら、scripts ディレクトリに置くことでできます。ただし read-only data です。
    任意のファイル（.json でもそれ以外でも）をどこにでも保存することはできません。
    behavior_pack の他の場所から .json を直接 load/parse することもできません。
-   **A**: いま engine のプロトタイピングをしていたのかもしれないので、少し話して確認してから戻ります😅。script 内のこのターゲットシナリオ自体は理解していますし、scripts フォルダー外の要望も分かりますが、そこはもっと複雑です。

## JSON events 以上を scripting が置き換える？

-   **Q**: scripting は JSON events だけでなく、もっといろいろ置き換えますか？ そうなら、script で behavior を作れるようになりますか？ それとも JSON events の置き換えにとどまりますか？ 高度な entity component や item / block component を作り、ほかの script event が発火したり true を返したときの挙動も制御できそうだと感じます。
-   **A**: scripting は JSON events 以上のものです。ただし scripting のパラダイムは、依然としてかなり event-driven です（JSON events に限られていないだけです）。かなり大きく言えば、JSON で定義し、script で logic を書く、という分担だと私は見ています。なので scripting は今後も強力になり、ほかの system と統合していくはずです。
-   **A**: 「置き換える」と言ったわけではなく、scripting と JSON の責任範囲を明確にし、うまく連携させることが重要だと言いたかったのです。JSON で何をすべきか、script に切り替えるべきタイミングはどこか、を簡単に理解できるようにしたいです（逆も同じです）🙂

## scripting API の storage system

-   **Q**: dynamic properties を worldInitialize event で登録しなくてよくなったのは、何がきっかけですか？
-   **A**: 制約は回避できる（たとえば block や sign に data を置く）し、長寿命の map では突然制限にぶつかる可能性があるし、API を厳しくしすぎると creators が database に scoreboard を使い続けることになってしまう、という結論に達しました。これは避けたいです。

## Custom ScriptAPI modules

-   **Q**: `@minecraft/server-editor` のような custom ScriptAPI module を作れるようになりますか？
-   **A**: bundling です！

## OreUI

-   **Q**: OreUI で外部の React libraries を使えますか？
-   **A**: 残念ながら、OreUI を支える in-engine の web renderer は性能最適化されていて、標準との完全互換ではありません。そのため、サードパーティの React libraries は通常、完全な web browser と同じようには描画されません。

## コミュニティの助け

-   **Q**: コミュニティとして、どうすれば scripting API をもっと多くの人に知ってもらえますか？
-   **A**: Editor と scripting の関連で言うと... 😉 みなさんが Editor を使っている様子、何を作っているか、そして何を望んでいて何に困っているかを動画でリアルタイムに見られるとすごく嬉しいです。チームにとってとても助かります！
-   **A**: コミュニティがこの種のものを学ぶのに必要なツールやドキュメントを見つける手伝いをしてください。難しいのは分かっています。
-   **A**: 互いに敬意を持ってください。もし誰かが苦労していたら、その人は弱い立場にあります。scripting を使っていて相手が使っていないとしても、上から目線にならないようにしましょう。できるところでは助けて、励ましてください。
-   **A**: 動画コンテンツもとても役立つと思います。stable API なら、backcompat を保証する必要があるので安心して扱えます。

## Entity AI

-   **Q**: simulated player（`minecraft/server-gametest`）のような entity behavior の深い制御は、いつか見られますか？
-   **A**: 今すぐ取り組んでいるわけではありませんが、AI API の良い出発点は近いうちに作りたいです。ただし通常の注意書きとして、AI API をすぐに出すわけではありません。
-   **Q**: ai goals を強制的に開始・停止したり、優先度を変えたりできるべきです。
-   **A**: 了解です。将来の wave で AI API を見たいです（短期ではありません）。いちばん早い方法は、AI goal components を直接または間接的に操作する形だと想像しています。

    まだ雑談段階ですが、各 AI goal ごとに API を作らなくても済むような AI primitive の一部（それに、AI goal がなくても動く entity も含む）を提供できるかもしれません。たとえば SimulatedPlayer APIs+++ のような感じです。その上に higher level の機能を作れる library を、みなさんが作る形です。もちろん、「全部の AI goal を create/read/update/delete させてくれ」という案のほうが良いなら、それも知りたいです。

## データ保存

-   **Q**: unique item ごとに data を保存する予定はありますか？
-   **A**: 良いフィードバックですし、確かに考えています。今は world と entity の dynamic properties に取り組んでいて、次に ItemStack dynamic properties を考え始める予定です！
-   **A**: creators を lore への metadata 保存から離したいです😄
    最近 entity dynamic properties から registration を外したので、item dynamic properties も同じように動く可能性が高いです。
-   **A**: 調べています！ item stacks のデータ保存方法として lore を使いたくはありません。特に lore は client に同期されてしまうからです。
-   **Q**: ItemStack Class から item ID にアクセスできますか？
-   **A**: entity と違って、item stack はコピー・マージ・分割されるので、信頼できる ID を割り当てるのが難しいです。代わりに、runtime で item tag を追加するか、item に dynamic properties が入るまで待つ案があります。

    item ID がなぜ役立つのか、具体的なシナリオをぜひ聞きたいです。

-   **Q**: world を離れたときに data を保存する新しい data structure はありますか？
-   **A**: 上でも触れたように、今の保存手段は entity と world の dynamic properties です。最近 dynamic properties のサイズ制限を緩和し、すべての creators に stable release で API を出せるよう進めています。

    file APIs も議論しています。主な目標のひとつは、保存のために player を scoreboard から離れさせることなので、できることがあれば教えてください。

    realms の UUID 問題はメモしておきます。

-   **A**: 先の質問にも関連しますが、worldUnloadingSaveAllYourStuff のような event は少し慎重です。というのも、すべての platform で unload の挙動を常に制御できるわけではないからです（crash なども含めると、なおさらです）。なので、今おすすめしているのは dynamic properties などを使って、進めながら state を永続化する方法です。もちろんそれには欠点もあります（堅牢にするのが大変です）。要するに、大量の game state をどう保存するかについて、私たち自身が本当に気に入っている strategy はまだありません。みなさんのフィードバックを見ながら進化させる必要があります。world unload event の中で何らかの「永続化」が起きるものは、将来的にまだ出るかもしれません。

## Worker Threads

-   **Q**: worker threads を実装する予定はありますか？ あるいは、複数 thread を使える別の scripting 言語の選択肢はありますか？
-   **A**: worker threads は考えています。すぐの予定はありませんが、今日聞けた使い方はとても参考になりました。

## Scripting Engine をもっと強く

-   **Q**: server 側で world data にもっと低レベルにアクセスできるようになる予定はありますか？ たとえば setblock/fill を何度も呼ぶ代わりに、function call で chunk 全体を取得して加工し、また world に戻すようなものです。
-   **A**: もっと高性能な block API はぜひ欲しいです。setBlock は複数 block 操作だと少しコストが高く、fill は異なる block type を設定したいときに制約が強すぎるのは同意します。main server thread を重くしないよう、worker threads で大きな計算をする案も話しています。
-   **Q**: command queue に入れられる command 数を変えられるようになる予定はありますか？ 128 だと仕事によっては制限になります。
-   **A**: command queue の制限は検討できます。queue サイズを問い合わせる API があると便利ですか？ 制限で困るシナリオをもっと聞きたいです。
-   **Q**: world 起動時に、RP と BP が読み込まれる前に JS を実行する方法はありますか？ そうできれば、実行時に texture や item を動的生成でき、tinkers construct のようなことをもっとずっと速くできます。
-   **A**: まだ調べていませんが、検討候補です。

## Ender Chest Component

-   **Q**: Script API に Ender Chest component はありますか？
-   **A**: backlog にはないと思いますが、良いフィードバックです！

## Slash Commands

-   **Q**: カスタム slash command の登録はいつ期待できますか？
-   **A**: すぐではないと思いますが、話題にはしています。
-   **A**: `/scriptevent` を使ってください😛

## 新しい Events

-   **Q**: entityHurt、entityDie などの before event は増えますか？
-   **A**: その方向は考えていますし、内部でも議論しています🙂
-   **Q**: item の transfer event は予定されていますか？ たとえば item moved、item dropped、item picked up、item given、item removed、item modified、item merged などです。
-   **A**: 思い出させてくれてありがとうございます。いつか追加したいと思っています。
-   **Q**: BeforeCommandExecute event を追加する予定はありますか？
-   **A**: まだ検討した記憶はありません。どんなシナリオを想定していますか？

## Client Side Scripting

-   **Q**: client side mod を作れるようになりますか？ あるいは、Realms / world 上の script が client side を使えるようになりますか？ 伝わりますか？
-   **A**: client side scripting はよく話題になりますし、その価値も認識しています。client で動く JS instance を作るのは難しくありませんが、まったく新しい client-side API を設計・作成・サポートするのは非常に大きな仕事です。API design が難しいだけでなく、UI control や input scheme を多様な form factor で扱う必要があるからです。また、2 つの script context とその明示的な同期が必要になるので、script authoring の負担にもなります。
-   **Q**: いくつもの client side scripting module が開発中のようですが、ロードマップは具体的にどうなっていますか？ どんな意図や機能範囲がありますか？ なんでも教えてください。
-   **A**: ほとんどの部分で server-side scripting API に集中してきました。正直、多くの developer にとってシンプルに保てるなら、server 側に API を追加したいです（たとえば `/server-ui` のようなものです）。

    いつか client side scripting が必要なシナリオ、たとえば client-side validation、UI、input management などは出てきます。なのでその橋は渡り、正式な client scripting support も持つことになるでしょうが、短期・中期ではないと思います。そこには厄介な問題がいくつかあります。そして繰り返しますが、できるだけ server APIs に寄せて、シンプルに保つのが私たちの基本方針です。

-   **A**: 私が大事だと思っているのは、混乱を減らすことでもあります。client side scripting を考えるとしても、server の単なる並列ではなく、明確な価値が必要です。server で対応できるシナリオが大半であることを願っています（editor にも server 側の input management があります！）。ただし、client side scripting に関心があること、そしてそこが最適な場面があることも理解しています。

## Better Script -> Data Driven Interactions

-   **Q**: script と resource / behavior pack の data-driven file の間で、情報をやり取りする方法をもっと増やせますか？
    script から特定の entity / attachable に対して Molang の query のようなものを追加できると便利です。たとえば、script で entity の bone の角度を設定したいなら、次のようにできます。

```js
entity.setMolangFunction("wiki", "getMyAngle", () => {
    return 32;
});
```

    それから animation で `rotation: [0, "script.wiki:getMyAngle()", 0]` のように書けます。
    これで inverse kinematics や、q.skin_id や q.variant を無駄にせず、player.json を編集せずに behavior pack から animation を動かすようなことができます。

-   **A**: entity properties がそのやり方です。entity properties で足りないシナリオがあれば教えてください。
    client から server への callback の考え方は面白いですが、client authoritative な挙動を増やすのは避けたいです。

## Vector class の追加

-   **Q**: vector 向けに、もう少し関数を増やせますか？
-   **A**: とても良い提案ですし、私もかなり考えています。ConMaster の言う通り、密な loop の中で JS と engine を何度も行き来させるパターンはコストが高いので、広く使える helper を提供するかどうかを検討しています。

## Beta APIs

-   **Q**: beta APIs を beta から出して、通常機能としてゲームに入れる予定はありますか？
-   **A**: はい。多くの API を beta から「stable」へ移しています。各 release の changelog を見てください。そこに変更内容を載せています。

    1.20.30 と 1.20.40 は、non-beta API にとってかなり大きな更新になります！

## Block Data

-   **Q**: Entity.prototype.setProperty や ItemStack.prototype.setLore のように、将来的に block に dynamic data をキャッシュ / 保存できるようになりますか？
-   **A**: state を永続化する方法としては、dynamic properties か entity properties（actor properties と呼ばれることもあります）をおすすめします。

    dynamic properties のような概念は item stacks や blocks にも持ち込みたいです（block は、world レベルで座標付き properties を保存する形でも代替できるかもしれません）。item stacks と blocks には、もっと基盤が必要です。

## Interfaces

-   **Q**: scripting の新機能や既存機能の再設計は、どんなプロセスで進めていますか？
-   **A**: API を作る最初のステップは、その API が使われるシナリオを考えることです。creator はこの API で何を実現したいのか？ どの部分を公開すべきか？ どの部分を creator が変更したいのか？ それはなぜか？ これが API の形を考える助けになります。API が beta なら、重要なシナリオを見落としていないか改めて考え直します。

    この段階でもうひとつ重要なのは、実装がコードベースでどう行われるかです。想定と違う制約にぶつかって、API の設計を変えざるを得ないことがあります。逆に、思っていたより面白い性質や機能が見つかって、API に追加することもあります。

    上の 2 つ（シナリオと実装）を考えながら、creator の要望と engine で実装できることを基準に API を形作ります。その後、全体をまとめた spec document と、API をどう見せるかの提案を作ります。それをチームでレビューして、みんなで反復します。懸念や疑問がなくなったら、実装を始めます。

    もちろん、実装中に新しい発見があると、さらに設計を変えることもあります。

    method と property の大まかな基準は、「簡単か？（計算や設定が複雑でないか）」です。簡単なら property、そうでなければ method にします。

-   **Q**: API を作るとき、どんな品質を目指していますか？
-   **A**: いろいろありますが、要点は次のようにまとめられます。

1. この API の後方互換性をちゃんと保証できるか？ 挙動やタイミングは決定的か？
2. 望んだシナリオを十分にカバーしていて、ほかの既存 API ともうまく連携するか？
3. 使いやすいか、型が整っているか（intellisense の案内が効くか）、そして分かりやすいか？ 私たちはたくさんのテストを持っていて、内部では API の demo を書いて、使いやすいか確認しています。TypeScript の型がコードを書く速度を上げることも強く意識しています。
4. script API は、commands、JSON、Molang の既存機能とどう関係し、どう比較できるか？

    scripting の大きな目標は、体験を構築するための非常に安定した platform です。同時に、scripting はゲーム全体の extensibility surfaces の一部でもあります。だから usability + reliability + compatibility の組み合わせがとても重要です。

-   **Q**: 新しい API を実装するとき、いちばん嫌な部分は何ですか？ 既存コードベースへの統合は難しいですか？
-   **A**: 開発者ではない立場としては、API 設計に関わる工程全体を楽しいと感じています。コミュニティにとって重要な API が何かを決めるところから、beta から出すべきものを選び、API をちょうど良い形にする設計議論をし、それをみなさんに届けてフィードバックをもらうところまでです。いちばん難しいのは、実装が始まってからコードベースの制約が見つかり、当初の設計案を変えざるを得なくなることかもしれません。でも、その挑戦自体が楽しい部分でもあります🤪
-   **Q**: 既に add-on にある system の interface は、どうやって設計していますか？
-   **A**: 既存の JSON component と scripting の名前は、creator が見慣れていることを優先して、できるだけ parity を保つようにしています。ただし、API は名前や interface を分けたほうが良いと判断することもあり、そこは絶対ルールではありません。

    getter にするか read-only property にするかは、いくつかのルールに従ってできるだけ一貫性を保つようにしています。たとえば、複雑な計算をする API は一般に getter で、単に定数や事前計算済みの値を返す API は property です。ただ、少し芸術的な部分もあり、開発初期はあまり一貫していなかったので例外もいくつかあります。

## Localization

-   **Q**: 現在は block、item、entity、effect、enchant を typeId でしか表せませんが、これは user-friendly ではないと思います。
    `texts` フォルダーで定義された lang key を取得する property や method を追加してほしいです。それがあれば RawMessage に入れられて、ユーザーの言語に応じた正しい名前を表示できます。

例:

```js
Block.rawName; // tile.dirt.name
ItemStack.rawName; // item.bow.name
Entity.rawName; // entity.cow.name
Enchantment.rawName; // enchantment.durability
```

-   **A**: 良いフィードバックです！ できるだけ多くの場所で localized text strings をサポートしたいですし、items や blocks などの localize keys を公開しないと使いづらくなります😛

## Add-on における JSON の未来

-   **Q**: add-on を作る language として、将来的に JSON をあまり使わなくする予定ですか？
-   **A**: 「JSON をあまり使わなくしたい」とまでは言いません。ただ、gameplay logic をやりたい場合、JSON だけでは表現力に限界があります。それに対して scripting のようなもっと開いた方法があります。なので、ある種の event は最終的に scripting に結びつけ、ロジックの主な方法にしたいと考えています。ただし、単純なシナリオを簡単に保つための「shortcut」は、ロジックの領域に残るかもしれません（たとえば、この event が発火したら particle を出す、など）。

## `minecraft:equippable`

-   **Q**: blocks や mainhand items など、変な item を offhand slot に入れたときにエラーを出す更新がありましたよね。ただ、この更新は私の "Offhand Anything" mod のようなものを制限します。エラーメッセージ自体は便利ですが、エラーを _回避_ してどの item でもどの slot にでも装備できるような方法があると助かります。「forceEquip」 のような行を追加してほしいです。あと、offhand 自体の機能ももっと増やしてほしいです。
-   **A**: フィードバックは受け取りました。結局のところ、creator に無制限の柔軟性を与えることと、意図しない gameplay の副作用や graphcs のバグなどを減らす制約を入れることのバランスです。
    そのシナリオなら、すべての item に offhand component を追加することで回避できるかもしれません。ただ、それが少し面倒なのも分かります。

## `@minecraft/vanilla-data` module

-   **Q**: この module を組み込みにする予定はありますか？ 手動で入れるのは初心者にとって面倒だし、分かりにくい手順です。
-   **A**: いいえ、vanilla-data module を server に移す予定はありません。実は、最初に server から外したいと思った大きな理由が 1 つあります。それは、API contract と data contract を分離することです。具体的には、script API modules は、特定の version を選んだときに backwards compatibility を保証する強い API contract だと考えています。この contract は、その時点でゲームに何が入っているかではなく、みなさんに提供する挙動や機能を定義するものです。

    例えば、@minecraft/server 1.5.0 を base game version 1.19.40 や 1.20.40 で使うと、vanilla-data（つまり利用できる block や item type）はその 2 つで異なります。API contract は data contract までは保証していません。機能だけを保証します。以前 server module に data を入れていた頃は、不要な理由で API を頻繁に churn させすぎてしまい、別の base game version で module を使うと問題も増えていました。

    ただ、特定の base game version で利用可能な vanilla data を知っておくことには大きな価値がありますし、enum で API を呼ぶのもずっと楽になります。なので、これを分けて game ごとに version 管理するのは理にかなっています。

    とはいえ、少し tooling の問題も出ます。今は JS を behavior pack の一部として含める必要があるからです。baseline tooling の話は、私たちが常に考えていることです（この点のフィードバックもぜひほしいです）。簡単に code を bundle するようなことも、workflow 上もっと楽にしたいです。

    さらに今は vanilla data を単一 file に pre-bundle しているので、TS や bundling tool を使いたくないなら、package から JS を取って scripts folder に入れれば動きます。

    とはいえ、TypeScript は素晴らしいです😄

## Chunk Function

-   **Q**: Minecraft の `/tickingarea` コマンドのようなものを scripting で実現したいだけです。読み込まれていない chunk でのエラーを避けたいし、chunk unload function もあるといいです。
-   **A**: scripter が chunk を意識しなくて済む世界を目指したかったのですが、たぶん無理です（笑）。なので、chunk の load / unload に関する基本的な API は来ると思います。`tickingarea` コマンド相当の scripting が最初の一歩になるでしょう。約束は慎重に見ていますし、短期的なものはなさそうですが、中期的にはあり得ます。

## いちばん好きな作品

-   **Q**: Scripting API で作られたものの中で、いちばん好きなものは何ですか？
-   **A**: 変わり種で印象的だったのは、ChatGPT 統合の demo（https://github.com/microsoft/minecraftcodex）です。これは ChatGPT が登場する約 1 年前に作られていました。私は AI 専門家ではありませんが、ChatGPT っぽいものを初めて見て「すごい」と思ったし、少し怖くも感じました。
-   **A**: item stack lore database も、見たときに感心すると同時に少し怖かったです😂

## Realms

-   **Q**: Realm で `player.isOp()` が動かないのはなぜですか？
-   **A**: これはもう少し考える必要があります。最初の `isOP` 実装（beta）はかなり単純で、実際のゲーム内部の動きに合わせるには、permissions API はもっと堅牢である必要があります。

## 実行時 component 編集

-   **Q**: 旧 scripting api のように、script api で entity、itemstack、block の component を編集できるようにする予定はありますか？
-   **A**: この質問は何度も議論しています。多くの component は、まあ、自由に追加・削除・更新できる段階にまだ達していない部分があります。たとえば client に正しく反映されず、glitch の原因になったり、ほかの component が適切に設定されていないせいで期待どおり動かなかったりします。さらに、entity のようなものの「内部」をどこまで公開すべきかも議論しています。たとえば、MikeMob という mob を作ったとして、その behavior pack と無関係なコードが、MikeMob の内部をいじって自分のコードを混乱させてもよいのか、という話です。component group の状態は mob の「内部設計」なのか？ まだ結論は出ていませんが、少なくとも「保護された内部」より「より多くを公開する」方向には進んでいます。話がそれてすみません。

    ただし、entity については triggerEvent より下の部分を短期・中期で追加する予定はありません。BeforeDataDrivenEntityTriggerEvent のような、component group をいじれる面白い機能も、すぐ Stable に入ることはなさそうです。すみません😦

## 外部データ保存

-   **Q**: たとえば json file や MongoDB / mongoose のようなものに、外部へ data を保存できるようになりますか？
-   **A**: 今は、add-on（`.mcaddons` や marketplace のもの）などに入ってくる内容の周囲に、ある程度の隔離を保つようにしています。そのため、そうした source から来る script に対して、近いうちにその機能が入る可能性は低いです。つまり、ゲーム内では難しいです。
    （安全に隔離する賢い方法が思いつけば別ですが。）browser のように isolated indexed storage のようなものはあり得るかもしれませんが、dynamic properties（特に今は制限が少ないので）を使えば、別の人たちが良い wrapper を作るかもしれません。

    dedicated server は少し別の遊び場です。server/net のようなものがもっとあります。disk access や別の passthrough を追加する可能性はありますが、優先順位は高くないので短期・中期では出ないと思います（特に、server/net で外に接続する方法があるので）。

## Forms

-   **Q**: 将来的に form の中に website を読み込めますか？ npc のような感じで。
-   **A**: hyperlink ならかなり注意が必要ですが、良い feature request です。メモしました！

## Replay

-   **Q**: 私は小さな content creator ですが、Java コンテンツを作る人のような良い cutscene を作るのが難しいです。ほかの Bedrock creator も同じ悩みを持っています。Java の replay mod のような replay 機能（あるいは、自分たちで作れる code）を持てますか？
-   **A**: replay mod の大ファンですし、Bedrock の video creator にとって大きな助けになることも分かっています。camera work である程度は近づけていますが、Bedrock で replay mod を作れるようにするには、platform 側でまだかなりやることがあります。

## Velocity

-   **Q**: 次の予定はありますか？

1. player に `applyImpulse` を使えるようにする。`applyKnockback` が問題なく動くなら、無効にする理由はないように思います。
2. player に `clearVelocity` を使えるようにする。
3. player を teleport するときに `keepVelocity` option を使えるようにする。

-   **A**: 技術的制約のため、ほかの entity と同時に player 向けにこれらの API を提供できませんでした。ただ、将来的には使えるようにしたいです。
-   **A**: 短期の release plan がない新しい API を beta に増やすのは避けています。API が beta のまま 1 年以上残るのは好きではありません。

## Command Parity

-   **Q**: scripting の将来は `runCommand` と `runCommandAsync` を obsolete にする方向ですか？
-   **A**: 場合によっては、core capabilities をカバーする API や、command 以上のことができる API を優先してきました。その結果、今でも command を使うべき重要な作業が残る「中間」が空いています。将来的には、command でできることをすべて API にしたいです。`runCommand` を deprecated にするとは思いませんが、いずれはそれらが不要になる状態を目指したいです。
-   **A**: scripting 中に、わざわざ script の外へ出て command を実行する必要をかなり減らしたいです。その種の横断は認知負荷が高いからです。あなたの例は、今ある granular API の上に少し便利さを足した API に価値があるかもしれない、という良い例です。こうしたシナリオを教えてくれてありがとうございます！

## Minecraft Debugger

-   **Q**: repo にある未解決 issue へ対応する予定はありますか？
-   **A**: 指摘ありがとうございます。debugger の改善と bug 修正をさらに進めるつもりですし、報告された issue への対応ももっとしっかり追うべきでした。すみません！ 直近で入った改善と bug 修正もあり、これから順次入っていきます。なので、ぜひ issue は今後も報告してください。特に、今の設定で workflow がやりにくい場合はなおさらです。

## Error Logs

-   **Q**: もっと詳しい error log は出ますか？ どこで error が起きたか分からないことがあります。
-   **A**: 良いフィードバックです。こういう error message は常に改善しようとしています。call stack が出ない具体例があれば教えてください。

    あの手の error は本当にストレスになります。

## Script Templates

-   **Q**: example script template は用意されますか？
-   **A**: もちろんです。かなり不足があることは分かっています。ここは大きな焦点です。`https://github.com/microsoft/minecraft-scripting-samples` と、特に How To Gallery（https://github.com/microsoft/minecraft-scripting-samples/tree/main/howto-gallery）があります。これは OSS project なので、編集や sample を送ってもらえます（最終的には docs にも反映されます）。もっと使いやすくする案もあります。続報をお待ちください。

    私見では、JSON 側のほうがもっと大きなギャップです。template 化された JSON file の導入は面倒なので、もっと簡単にしたいです。短期計画はまだありませんが、ここは確実に注力したいです。

## Editor

## より良い Block API？

-   **Q**: editor mode 用に、もっと複雑な Blocks API が期待できますか？ Base API でも同様でしょうか？
-   **A**: script から `BlockPaletteDefinition` と `ShapeTransformer` を使うアイデアは良いと思います。Editor 固有の multi-block API は、性能や memory などいくつかの理由で検討中だと言えます。

## DEV Build

-   **Q**: Creator が content を作るうえで、Editor はいずれ DEV Build と同等（あるいはそれ以上）になりますか？
-   **A**: どのゲームにもあるように、私たちには debug tools を持つ internal build があります。Creator にとって絶対に役立つものもあります。こうした機能を creator に届けたいですが、今日はまだ話せるものはありません。

## Mobile

-   **Q**: Editor を mobile に移植する予定はありますか？
-   **A**: まず PC を優先して、そこで最高の体験にすることに集中しています。

## 新機能

-   **Q**: どんな visual elements が追加予定ですか？ コミュニティから提案された、新しくて使いやすい tool で検討中のものはありますか。
-   **A**: 以下は、試作・開発・フィードバックによって変わる可能性があることを前提に答えます。

    そのうえで、visualization support として考えているものをいくつか挙げます。

    1. **もっと gizmo を増やす**。move gizmo と resize gizmo はありますが、rotation gizmo を追加したいですし、paste preview volume にも gizmo を出したいです。
    2. **本当に preview が見える paste preview**。今は空の volume で、あまり情報がありません。そこに何を貼り付けるのか、実際の見た目を出したいです。
    3. **brush preview と structure placement**。brush tip が単なる 1 つの cube ではなく、描画される形とサイズそのものに見えたらどうでしょう？ structure を置くときも、click-to-drag で world に正確に配置できるようにしたいです。

    みなさんの意見もぜひ聞かせてください。計画に入れると役立ちそうな visual 要素について、フィードバックをください！

## Build Process

-   **Q**: Editor の JavaScript files で Webpack の参照をたくさん見かけます。Rollup や ESBuild ではなく、なぜ Webpack なのでしょう？ この配布 tooling に満足していますか？
-   **A**: よく気づきました。実は、最近の `@minecraft/vanilla-data` package を見ると、そこでは esbuild を代替として使っています。結局は tool の重さと、必要なカスタマイズがあるかどうかです。

    Editor は library のパッケージ方法をいろいろ試す場所だったので、bundling tool を最初に使ったのが Editor でした。ただ、内部 build time を改善し、設定を最小化するために、今後も代替案を試し続けたいです。
