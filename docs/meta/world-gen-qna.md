---
title: World Generation Q&A 2024/11/15
category: Q&A
mentions:
    - SmokeyStack
---

この Q&A は [Bedrock Add-Ons discord](https://discord.gg/uZF75ZxcJq) で行われました。Mojang/Microsoft の社員数名が、custom blocks と items の API に関する質問に答えました。質問はコミュニティから集められたものです。

:::warning
すべての発言がそのまま転記されているわけではなく、一部は文面を整えています。全部を見たい場合は、上記の discord に参加して「events archive」ロールを取得してください。
:::

## Locator Map は？

-   **Q**: custom jigsaw では locator map を使えるようですが、custom icon や map 名のような、もっと公式なサポートの予定はありますか？
-   **A**: 注目はしていますが、短期ロードマップには入っていません。

## vanilla structures を今の Jigsaw system に更新する予定は？

-   **Q**: villages や pillager outposts など、vanilla structures をいつか全部編集できたら面白いです。今は legacy 版の Jigsaw か、別の仕組みを使っているようですが、trail ruins や trial chambers のように今の Jigsaw system へ移せたら最高です。コミュニティとしては、vanilla structure を全部いじれたら嬉しいはずです。
-   **A**: もっと多くの vanilla structures を新 system に移したいとは考えていますが、短期・中期ロードマップにはありません。今使える vanilla structures は Trial Chambers と Trail Ruins です。どちらを先に見たいですか？
-   **A**: なお、この Q&A の参加者は Vanilla team の代理として意図を話す立場ではありません。

## 他 dimension の custom biome

-   **Q**: Bedrock に custom biome が戻ったら、Nether や The End への対応も増えますか？ 私の知る限り、custom end biome は存在したことがありません。
-   **A**: resource pack の `client_biome` 設定（見た目と音）は、今は nether や end を含むどの biome でも動くはずです。挙動や world generation に影響する部分については、そちらの dimension にも効くと良いのは同意ですが、今のところロードマップにはありません。

## custom biome に environment particle を追加できる？

-   **Q**: custom biome を作れた頃、外部の方法なしで追加できる particle は nether の particle くらいでした。将来的には、任意の custom particle を biome に設定できるようになったら嬉しいです。
-   **A**: custom environment particle は以前から検討していて、今後も候補にできます。どう使いたいかの情報があれば、ぜひ教えてください。

## Custom Dimensions

-   **Q**: 未来的な add-on 向けに新しい dimension を追加し、height limit から生成システムまで dimension 全体を編集できるようにしてほしいです。Java では custom dimension が簡単に作れるので、Bedrock でもそれが欲しいです。
-   **A**: creators にとって custom dimensions が重要なのは間違いありませんが、今は world gen の多くの要素に集中しています。

    当面は features や jigsaw structures などを拡張し、biome customization に近づける方向で進めています。

## `/place feature` コマンド

-   **Q**: 将来的に command で features を置けるようになりますか？
-   **A**: これは短期ロードマップにあります。

## Jigsaw の幅は広げられる？

-   **Q**: 128 は小さすぎます。Marketplace project ではその 6 倍くらい必要です。無理なら、jigsaw structure ごとに幅を調整できるようにしてほしいです。
-   **A**: 128 は厳密な上限ではありません。ただし level chunk を生成するときは、より大きな structure がその chunk に入るよう、最大で 8 chunk 先まで確認します。とはいえ、128 を超えると性能面が少し心配です。もうひとつ大事なのは、これは総幅ではなく中心からの幅だということです。つまり 128 は全幅ではなく半幅で、全幅は 256 です😄

## Molang の性能改善

-   **Q**: custom terrain generation で Molang の 3D noise を使うと、block 1 種類、feature 1 個、feature rule 1 個だけでもワールドの読み込みに 5 分以上かかることがあります。かなり長いです。
-   **A**: 特に `q.noise` の性能を見ています。キャッシュなどで改善できるかもしれません。今のところは、重く使いすぎないほうがよさそうです。

## jigsaw が遅かった理由

-   **Q**: jigsaw block はずっと前からありますが、なぜ完全には機能していなかったのでしょう？ どうして有効化にそんなに時間がかかったのですか？

    長い間、中途半端な状態だった理由が知りたいです。当時、なぜ jigsaw の追加をやめたのですか？

    そして、最終的に creators に使わせる決断をした動機は何でしたか？

-   **A**: 正直、過去には platform feature を作っても、満足できる形や適切な時期に仕上げられないことがありました。たとえば holiday creator features です。多くの場合は、stable platform へきちんと載せるのをもっと上手くやる必要があるという意味です。ただ、うまくいかなさそうなら experiment を早めに切るべき場合もあります。始めたものは platform に入れ切るよう、もっと良くしていきたいです。完璧ではないでしょうが。

    なぜ今 jigsaw なのかというと、プラットフォームに追加するための能力が backlog にたくさんあり、今はそのうちのいくつか、worldgen の基本要素を進めているからです。こうした能力を出す前に、upgrade しやすく、性能が良く、みなさんが作るものにも耐えられるよう、多くの stabilizing 作業が必要になります。その結果、壊れ方もいろいろ出てきます。

## custom structure に spawn spot は作れる？

-   **Q**: 以前の structure framework の caveat のひとつは、entity を置いたり spawn spot を作ったりできないことでした（nether fortress や ocean monument などが entity を繰り返し spawn する仕組みです）。私はたいてい ticking block を作って entity を spawn して自壊させていますが、問題もあります。

    structure の対応が進み、jigsaw も使えるようになってきたので、structure の中に entity を置けるようになりました。ですが、world generation framework に spawn spot support を追加する予定はありますか？

-   **A**: みなさん、議論ありがとうございます。これは現在進行中です。ただ、mob spawn system は少し繊細です（咳）farm も含めて、可能な限り丁寧に整えたいです。なので、もっと testing が必要です。experimental で近いうちに出てくるものを楽しみにしていてください。
-   **Q**: つまり spawn rate も Java と同等になるということですか？
-   **A**: それが目標です。experimental に入ったら（もうすぐです）、world がちゃんとバランスしていて spawn が変になっていないか、できる限り手伝ってほしいです。mob farm への影響や改善も含みます。

## structure の衝突

-   **Q**: entity を spawn する、command block で structure を spawn する（dungeon を作るときに line で並べる、など）といった回避策は、特に地下 structure で衝突しやすいです。

    たとえば trial chambers がほかの structure と交差して壊してしまうことがあります。jigsaw block や一般の structures に、こうした衝突を防ぐ機能があると嬉しいです。

    Mojang チームの考えを知りたいです。

-   **A**: これは確かに注目していますが、今のところ具体的な作業計画はありません。というのも、根本にもっと深い問題があるからです。

## ディレクトリ構成の懸念

-   **Q**: 新しい Jigsaw system では関連ファイルがすべて `worldgen` の下にあります。`structures`、`features`、`feature_rules`、`biomes` もこのフォルダーへ移す予定はありますか？ Jigsaw セットが `worldgen` の下にある理由はあるのでしょうか？ それとも単に parity のためですか？
-   **A**: jigsaw 関連のファイルを論理的にまとめた結果です。`worldgen` というフォルダー名は、features や feature rules が外にあるなら少し面白い選び方でした。将来的にほかのファイルやフォルダーを調整する可能性はありますが、feature や feature rules をそこへ移す予定は今のところありません。

## Jigsaw の用途

-   **Q**: jigsaw block は、大規模な ore vein（Iron / Copper mega vein のようなもの）を作るのに向いていますか？ それとも Partially Exposed Blob Feature のほうがよいですか？
-   **A**: custom ore vein を支える `minecraft:ore_feature` があります。目的を達成するために足りない機能があれば教えてください。

## Scripting

-   **Q**: world generation の中で scripting を統合する予定はありますか？ たとえば structure の配置や中身を world event に応じて script で変えるようなものです。
-   **A**: scripting と world gen を統合する方法は探っています。ただ、ご指摘の通り、chunk generation の大部分を scripting に任せるのは性能面で厳しいです。3 重ループで block を処理すると、すぐ重くなります🙂

    ただ、何かを「判断する」ために script を呼ぶ場所はあるかもしれません。とはいえ、worldgen に scripting を短期で入れる予定はまだありません。

    数年前に最初に script で作ろうとしたデモのひとつは dungeon generator でしたが、block 配置をどう timeslice するかや、chunk load の扱いを ticks にまたがってどう処理するかが難しく、うまくいきませんでした。

    その後、generator function のように tick の余った cycle を使うサポートは少し増えました。高速な dedicated server など性能の高い端末に絞るか、かなり最適化すれば、実用的でかなり面白いものになるかもしれません。コミュニティには、そういう方向で面白いものを作った人もいます。
-   **A**: 別の場所でも話しましたが、面白い試作としては webworker モデルを使って JavaScript を別 thread へ飛ばし、world generation のような処理を動かすことです。

    そういう機能用に、別の API surface（import できる別 module）を用意するのも良い案です。

    いまはどれもアイデア段階ですが、いつか実現するかもしれません。

## Mojang チームは何を楽しみにしている？

-   **A**: いろいろな dungeon、legends、lore を見るのを本当に楽しみにしています。これからたくさんのものが来て、たくさん解放されるはずです.. 👀

## Structure Orientation

-   **Q**: Jigsaw structures の rotation を扱えるようになりますか？ もしそうなら、どう動きますか？ 山の斜面や川のような特定の feature に対して、structure が常に正しく揃うようにできますか？ それとも単純な条件分岐ですか？
-   **A**: 前回の preview で creators からフィードバックを受けていて、注目しています。とはいえ、具体的にどんなシナリオを想定していますか？
-   **Q**:

    > 具体的にどんなシナリオを想定していますか？

    ランダムな structure rotation は必須です。もし全 structure が北を向く深い lore があるなら別ですが。Ciosciaa が言っていたように、custom block が回転しないことも問題です。

-   **A**: なるほどです。structure rotation については会話がありました。既にある structure 改善リストに追加できるよう、話を進めます。

## `conditional_list` と `sculk_patch_feature` をなぜ使えないのか

-   **Q**: `conditional_list` は削除されたのは知っていますが、なぜまだ戻っていないのでしょう？ それと、なぜ `sculk_patch_feature` は使わせてもらえなかったのでしょう？
-   **A**: `conditional_list` は、もっと堅牢にするために追加作業が必要です。どこに入れるかも検討中です。`sculk_patch_feature` は vanilla 寄りすぎました。いずれ、もっと汎用的な代替を検討するかもしれません。
-   **Q**: ということは、今後かなり vanilla 中心の feature type には反対ということですか？ tree feature だってありますよね。
-   **A**: 一般論としては、機能が generic platform feature（良い）、vanilla っぽい、そして vanilla に寄りすぎていて堅牢な platform item としては再考すべき、の間に少し曖昧な境界があります。今の境界はそのあたりです🙂

## Java 版にある不足している jigsaw 機能は追加される？

-   **Q**: Java 版の Jigsaw structures には、見当たらない機能がいくつかあります。
    -   structure から feature を置く（`minecraft:feature_pool_element` など）
    -   template pool aliasing（Java 版では trial chamber の trial spawner 群の選択に使われるが、Bedrock ではどうなる？）
-   **A**: ご覧の通り、新しい jigsaw system には spawn override がありますが、data-driven jigsaw structures ではまだ data-driven 化されていません。チームは今、spawn system を完全公開する前に spawn rules の簡素化に取り組んでいます。
-   **Q**:

    > チームは今、spawn rules の簡素化に取り組んでいます

    その system 全体ですか？ つまり entity BP JSON のあの `spawn_category` や、`spawn_rules` フォルダー全体も含みますか？ 簡素化してから機能を広げる、という意味でしょうか？

-   **A**: はい。リファクタリングはいつもそうですが、まず基盤から始める必要があります。mob spawn system は Java との parity にかなり近づいています。同時に spawn rules を簡素化しているので、機能を公開したときには、もっと扱いやすくなるはずです。

## 新しい生成への world 更新オプション

-   **Q**: world をもっと賢く更新するオプションはありますか？ structure generation は、新しい structure が追加された更新のたびに面倒です。新しい chunk へ移動して見つける必要があり、既存 chunk に「食われる」ことさえあります。

    この質問の要点は、空の chunk（未変更、探索済みのみ、または少しだけ変わった chunk）を検出して、新しい structure で更新するオプションがあるかどうかです。あると良いです。

-   **A**: 検討したことはあります。ただし、奇妙な副作用をあまり出さずに実現するのはかなり難しいです（上でも何人かが言っている通りです）。
    でも興味はあります。もし可能なら、その機能は testing 用に使いますか？ それとも in-game world 用に使いますか？

## カスタム superflat generator

-   **Q**: Java Edition には custom superflat generator があります。Bedrock にはそういう system がなく、feedback site でもかなり要望があります: https://feedback.minecraft.net/hc/en-us/community/posts/360009373731--Java-Parity-Custom-World-generator-Superflat-worlds

    いろいろな遊び方に役立ちますし、Marketplace にも有用です（すでに Java から world をコピーして superflat っぽくしている Marketplace map もあります）。

    もしそういう system を実装するなら、biome や structure 対応も含まれますか？

-   **A**: いまのところロードマップにはありません。Java から持ってくるなら、Hardcore Mode を適応したときのように、Vanilla team と Bedrock 固有の設計変更が必要になるでしょう。

## `place_above` のような feature rule

-   **Q**: 以前、rock を作りたくて、air だけを stone block の上にある場所に置き換えたいと思ったことがあります。feature rule に次のような新しい文が追加されると嬉しいです。

    `place_above`

    `place_under`

    こういうものは worldgen にとても役立つはずです。

-   **A**: `minecraft:single_block_feature` の `may_attach_to` オプションで、`top` と `bottom` を使うものを探しているのだと思います。そのオプションで十分でなければ教えてください。

    さらにそこで何かしたいなら、aggregate feature や sequential feature にまとめることもできます。

## command や add-on で biome を変える

-   **Q**: world file 経由で biome を変更できる feature はあると聞いていますが、ゲーム内ですぐに、あるいは add-on 経由で変更できるようになりますか？
    たとえば:

    /Fill biome ~50 ~50 ~50 ~-50 ~-50 ~-50 plains

    これで、この座標周辺はすべて plains biome になります。

    これは snow や rain のような weather の種類を変えるのに使えるはずです。Mojang が今後もっと追加するなら別ですが。

    （ほかの例は mobs です）

-   **A**: Java の `fillbiome` command は見ていますが、Bedrock 側でどう実現するかを判断する前に、解決すべきことがたくさんあります。

## world gen 改善の考え方は？

-   **Q**: チームが world gen（data-driven biomes、dimensions、jigsaw 改善など）をどう広く考えているのか気になります。

    改善はできるだけ早く beta に出す方針ですか？ それとも慎重に進めますか？ その理由は？

    preview 版で world を壊すことを心配していますか？

    （長期的には）world gen は完全なカスタマイズに向かっていますか？ どの部分から先に開発を進めていますか？

    world gen のプロセスで難しかったことは何ですか？（ベストプラクティスの決定、長期 vs 短期、技術的な難しさなど）

    Bedrock の world gen を考えることは、Java でのやり方とどう関係し、どう違いますか？

    質問がたくさんですみません。興味があります！❤️<:bao_logo_mojang:1071082722807791696>

-   **A**: 質問がたくさんありますね。いくつか答えます。

    チームとしては、いつも反復的に進めることを意識しています。小さな機能を定期的に出して、みなさんからフィードバックをもらいたいからです。

    Preview で world を壊すことについては、できるだけ避けるようにしています。ただし retail build と同じ厳しさでは見ていません。なので Preview build のほうがプレイヤーにとって少しリスクが高いのは確かです。

    長期的な方針のひとつは、creators が vanilla game で Mojang ができることのほとんど全部をできるようにすることです。かなり広いカスタマイズになります。ただし、これは目標であって、そこへ向かうのは長い道のりです。少しずつ機能を出していきます。

    どこを先に優先するか？ それはほかのスレッドでも議論されています。

    Bedrock と Java の違いについては、Bedrock ではもっと考えるべき点が多いです。主な違いは次のとおりです。

    -   複数プラットフォームと、異なる計算能力
    -   後方互換性と、複数 add-on との互換性

    そのため、Bedrock ではより多くの状況で動くように、どう実装するかを長く考える必要があります。

## worldgen のロードマップ

-   **Q**: しばらくの間、プレイヤーは Mojang が何を作っていて、何を保留にしていて、何を検討しているかを知ることができました。でも marketplace に関係しない creators は、誰かがタイムラインを聞くかリリースされるまで、何が起きているのか分かりません。1 年先くらいのタイムラインがほしいです。そうすれば、学んだり準備したりできます。

    遅れても構いません。ただ、何を検討しているのか、何を実際に進めているのかの感覚がほしいです。

-   **A**: worldgen のロードマップは少し長くなります。まずは一部の要素から始めます。block features と capabilities の改善です（前の Q&A を参照してください🙂）。その後、world にものを埋め込む方法（features、jigsaw structures）へ進みます。そして biome capabilities から始めたいと考えています。

    vanilla での biome の動き方はかなり複雑で、実用的な解決策を見つけるのは難しいですが、今も取り組んでいます。タイムラインはまだ分かりませんが、来年のうちに設計案についてもっと共有できることを願っています。

    biome に含めるものとしては、noise map、scale、weather、fog、audio など、技術的な要件がたくさんあることを認識しています。目標は、みなさんの要件を取り込んだ堅牢な解決策です。biome に必要なもの、ほしいものを 5〜10 個ぜひ教えてください。

## structure template のサイズ上限は直る？

-   **Q**: 実際の上限は chunk の都合で 48x48 ですよね。これを直す、あるいはサイズ上限を上げる予定はありますか？
-   **A**: 遅れてすみません。chunk のサイズ制限と world generation の仕組みからすると、この上限を上げるのは少し難しいです。大きな structure には jigsaw structure system を使うことをおすすめします。

## generated structures のトグルがない理由

-   **Q**: 将来的にもっと world generation 機能が増えるのを楽しみにしています。Bedrock に generated structures のトグルがないのは、custom world generation が WIP だからなのでしょうか？ それとも単に優先度が低かったのでしょうか？ add-on でゲームをカスタマイズしていると、vanilla structures を変えたり消したりしたいことがよくあります。答えられないなら大丈夫です。addon 開発と world setting がどれくらい絡んでいるのか分からないので。
-   **A**: ここでの議論は良いですね。world gen のさまざまな面を本当にカスタマイズできるようにするには custom biomes が必要です。そうなれば、普段なら hacky にしか触れなかった world gen の部分にも API を追加できるようになるはずです。

## Subchunks?

-   **Q**: subchunk についてどう考えていますか？ いつか feature をそちらへ切り替える予定はありますか？ base generation は？ 両方？ そうするなら、何を変えるか考えたことはありますか？（たとえば `q.heightmap`）

    将来的に custom dimension 対応が来るなら、従来の chunk を使うのは、境界の大きい dimension ではかなり大変そうです。worldgen system 全体を subchunk に書き換えるのは簡単ではないのは分かっていますが、今後に向けた価値ある投資だと思います。

-   **A**: feature_rule の coordinate range 機能を使えば、今でも手動でできます。16 x 16 の各範囲に別の extent を持たせるため、4 つの feature_rules を生成する必要があります（X と Z について、たとえば `"extent": [ 0, 15 ]`、`"extent": [ 16, 32 ]` のように）。

    subchunk 関連の機能は、今のところロードマップにはありません。

## Marketplace

-   **Q**: structure や mineral generation を marketplace に追加するつもりはありますか？
-   **A**: はい。Marketplace の add-on content でも Features / Feature Rules を使えるようにしたいと考えています。

    性能面などには、ある程度のガードレールが入るでしょう。ただし、「これはやりすぎないでください」とポリシーで細かく言うのは難しいです。プレイヤーにとって問題になるパターンが出ないかを見て、必要なら対処していくことになるでしょう。

## もっと custom feature type を

-   **Q**: Mojang は、実際のカスタマイズ可能な features をもっと広げますか？ たとえば custom bone meal patch を作って `/place feature` で使うとか、structure を使わず custom dripstone column feature を作るとか。
-   **A**: いまのところ新しい feature type を増やす予定はありませんが、提案の多くは既存 feature の組み合わせで実現できます。たとえば dripstone column は sequential_feature や single_block feature で表せますし、異なる高さがほしいなら weighted_random feature と sequential_features の組み合わせでもできます。

    そして `/place feature` は短期ロードマップに入っています。

## jigsaw を安定化する予定は？

-   **Q**: 今後 2 か月くらいで jigsaw を安定化する予定はありますか？ API にはまだ調整がかなり必要だと思いますが、数か月で experimental を抜けられるのでしょうか？（2〜4 か月）
-   **A**: こんにちは Lucy、良い質問です！ 何を調整すべきか、コミュニティからのフィードバックで積極的に学んでいます。なので、jigsaw builder のみなさん、どんどん使ってください！ stress test がないと、何を直すべきか分かりません。

## Processor Lists のより広い活用

-   **Q**: これ、すばらしいです。今のところ、block data の塊を便利に編集できる system はあまりありません。processor lists を次の場所で見られたら最高です。

    -   `fill` command と関連 scripting API の一部
    -   `structure` command と関連 scripting API の一部
    -   structure template features の一部（あるいは _どんな_ feature type でも？）
    -   さらに _単独_ で、既に world にある volume を変換する手段として（指定座標への fill command のように）

    既存 system への統合は、それらの機能を大きく強化し、block processing / transformation をもっと便利にするはずです。

-   **A**: こんにちは Ciosciaa、同意します！ すばらしいアイデアです。今のロードマップにはありませんが、しっかりメモしておきます <:bao_bee:937587347124535346>

## Jigsaw のファイル構造は変？

-   **Q**: 数週間前に実装された jigsaw system は、Bedrock 版の versioned registered file wrapper の中に、Java のほぼ直接コピーのような形で入っています。なぜそうなっているのか気になります。1 週間前にこちらを見ました: https://discord.com/channels/523663022053392405/1303973556476055592

    要するに、もっと分かりやすく親しみやすいものより、難解で見慣れない Java 風 interface のほうが良いのか、チームの考えを知りたいです。

-   **A**: こんにちは Ciosciaa！ 良い質問で、鋭い指摘です。Bedrock system を Java により近づける作業をしてきました。~~~~今の Bedrock system は、実は下で提案されているアイデアに見えると思います！~~ すみません、それはたぶん試作品か設計のひとつでした。何か具体的な提案はありますか？

    ああ、すみません。その「Possible Idea」のほうは、こちらでも検討していたものに見えますが、今の実装は「Existing」にあるものです。現在の system は、使うのが不便だったり、分かりにくかったりしますか？

-   **Q**: たいていは、ただ難解で見慣れないだけです。でも、ときどき本当に奇妙です…

    -   なぜ randomization test が `minecraft:random_block_match` を通じて block testing に束ねられているのですか？
    -   そもそも、もし上のものが _必要_ だとしても、なぜ `minecraft:random_block_match` なんてものがあるのでしょう？ `minecraft:block_match` に `probability` を付けて、デフォルトを `1` にすればいいのでは？
    -   なんで rules processors で `output_state` が必須なのですか？ `input_predicate` で選んだ block type に loot を結びつけたいだけなのに。
    -   `{"predicate_type": "minecraft:always_true"}` は、基準 / デフォルトとしてはちょっとやりすぎでは？😅
    -   `location_predicate` と `position_predicate` は名前が紛らわしいですが、実際は全然違うものを指しています。

    processor lists のアイデアは大好きですが（https://discord.com/channels/523663022053392405/1307025062830014535）、今の Bedrock でいちばん取っつきにくい file schema だと思います。

-   **A**: すばらしい指摘です、Ciosciaa。チームに持っていきます🫡
