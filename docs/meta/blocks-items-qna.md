---
title: Blocks and Items Q&A 2024/08/30
category: Q&A
mentions:
    - SmokeyStack
---

この Q&A は [Bedrock Add-Ons discord](https://discord.gg/uZF75ZxcJq) で行われました。カスタムブロックとアイテムの API について答えるため、Mojang/Microsoft の社員 9 名が参加しました。質問はコミュニティから集められたものです。

:::warning
すべての発言がそのまま転記されているわけではなく、一部は文面を整えています。全部を見たい場合は、上記の discord に参加して「events archive」ロールを取得してください。
:::

## HCF の非推奨/削除機能の代替は？

-   **Q**: HCF 実験で非推奨・削除された機能を、復活または新しい方法で戻す予定はありますか？ 例として、item の `minecraft:knockback_resistance` や block の `minecraft:unwalkable` があります。
-   **A**: この作業では、使われていた HCF の部分を優先しました。使われていなかった部分は初期実装には含めていませんが、将来的に取り組むバックログに入っています。もし入っていない場合でも、この Q&A の後には入れます。フィードバックありがとうございます。

## 最近の変更の理由

-   **Q**: 最近の興味深い変更はどういう考えで決めたのですか？ なぜ HCF を custom components に置き換えるのが良いと思ったのですか？
-   **A**: HCF events は、安定性、拡張性、使いやすさの面で課題があり、全体として使いにくいと感じていました。そこで、この機能を長期的に支えるには別の解決策が必要だと判断しました。Scripting はかなり安定していて、機能拡張もしやすく、ほかの既存機能とも整合しやすいうえ、より強力です。Scripting と JSON events をどう統合するかいくつか試行錯誤し、最終的に今の custom components にたどり着きました。custom components には来年のどこかでいくつか改善も予定していて、みなさんに共有できるのを楽しみにしています。総じて、custom components のほうが creators により多くの力を与えられ、Bedrock プラットフォームによる長期的なサポートも HCF events よりずっと良いと考えています。

## カスタム Tile Entities

-   **Q**: 自分だけの block - chest のようなものを作れる予定はありますか？
-   **A**: 近い将来のロードマップには入っていませんが、データでは再現できない block の挙動は積極的に検討しています。
-   **Q**: tile entities を追加する予定はありますか？ 少なくとも block アニメーションはどうでしょう？
-   **A**: とても面白い領域です。custom block components（script）を使うと、かなり簡単に「それっぽく」できます。block entities の機能の大半は、それで代替できると思います。ひとつ難しいのは、chest inventory のような block 固有の保存領域です。そこは何らかの形で実現できると嬉しいですね。

## アイテム説明コンポーネント

-   **Q**: item に説明文を追加できる item component を入れる予定はありますか？ バニラでの例としては music disc や goat horn があります。カスタム music disc や、使い方を短く説明する item に便利そうです。自作 potion の効果一覧にも使えそうです。
-   **A**: 面白い案です。ただし、現時点では近い将来のロードマップには入っていません。前述のとおり、scripting API の `getLore` が役立つことはありますが、creative menu では使えません。

## Custom Components

-   **Q**: 今の「持っている/持っていない」判定ではなく、custom components に data binding を許可する予定はありますか？
-   **A**: これはぜひやりたい機能で、来年のどこかで来る予定です。custom components を、ほかの components に近い見た目と使い心地の形へ平坦化したいと考えています。
-   **Q**: それには parameters も含まれますか？ それとも先に来ますか？ parameters があると、item や block、さらにプロジェクト間でも custom components を共有しやすくなります。
-   **A**: custom component の平坦化と parameters は一緒に出る可能性が高く、はい、scripting version 2.0.0 が必要になる可能性も高いです。今のところ、この 2 つは来年のどこかで来ると考えています。

## ScriptAPI でもっとやってほしいこと

-   **Q**: ほかの人が Addons を作る前に何をしていたかは分かりませんが、私は JavaScript で Web サイトや Discord Bot を作ってきました。大量の JSON ファイルを扱うのはかなり難しいです。JSON を完全に廃止してほしいわけではありませんが、block と item の見た目に関する部分だけを JSON に残し、それ以外の events や functions などは API に移したいです。JavaScript や Java のように、主要部分がコード言語にある開発ではよくある構成だと思います。そう言うと怒る人もいるかもしれませんが（HCF 廃止のときにも反発がありました）、Add-on 作成を始めたときは全体的に奇妙で分かりにくいと感じました。

    私の頭の中ではこんな感じです。

    -   JSON ファイルには block/item の基本情報（texture、geometry、category など）だけ入れる
    -   その JSON を script に読み込む
    -   block/item を登録する
    -   そして API を使う（たとえば `item.attackDamage(Int)` のようなもの、あるいは見た目以外の要素、つまり主に block/item の挙動に関するもの）

-   **A**: 全体としては、私たちは少しずつ「JSON は定義、scripting はロジック」という方向に進んでいます。たぶんそれがあなたの投稿の意図に近いと思います（ただし、もっと「魔法のつなぎ込み」があり、JSON を script に import する必要はありません）。

## ドキュメント

-   **Q**: MS Learn や wiki.bedrock に、JavaScript の動くサンプルを追加する予定はありますか？
-   **A**: チームとして、いくつかのドキュメントに不足があることは認識しています。今後は、API を増やしていくにつれて、learning portal により良い使用例を追加するのを done の一部にします。とはいえ、当面は TypeScript の例が中心になると思います。TypeScript の学習曲線はやや急だというのも理解しているので、複数の方法（たとえば TypeScript と JavaScript）を用意できないかチームに持ち帰ります。まだ約束はできませんが、良いフィードバックをありがとうございます。
-   **A**: script やサンプルを docs からもっと見つけやすく、使いやすくする作業も進めています。早ければ来週にも出るかもしれません😉
-   **Q**: Falling Blocks の仕組みをドキュメント化してください。Minecraft の砂は重力のある entity のように振る舞うのに、過去に再現しようとしてうまくいきませんでした。砂のテンプレートファイルがあれば、自作の砂系 block を作れます。
-   **A**: これは docs 要望として受け取ります。ありがとうございます。

## Custom Music Discs

-   **Q**: すでに `minecraft:record` で custom music disc は作れますが、この component を custom music でも使えるようにする予定はありますか？
-   **A**: 残念ながら、これは近い将来のロードマップには入っていません😦

## Waterlogging

-   **Q**: custom block に waterlog / snowlog component を追加する予定はありますか？
-   **A**: はい。waterlogging は短期ロードマップ（おおよそ 6 か月以内）に入っています。一方、snow logging は長期計画（+6 か月）です。
-   **Q**: lava logging もですか？
-   **A**: それも長期計画の一部です <:bao_doggo_happy:939767354261372978>

## Item Properties

-   **Q**: item properties は将来的に検討されますか？ クライアントから参照できる per-item data を保存できるとかなり便利です。これが stack できない item（今の item dynamic properties のような挙動）だけでも使えるようになれば、かなり良いと思います👍
-   **A**: この分野の要望ありがとうございます。

    まず item の領域で追加すべき基盤がまだ多いです（item stack には block や entity のような「identity」がないので）。block にあるような properties を item に持たせるには、その前提が必要だと思っています。なので、item をまず強化するのは中期的な話で、その後に新機能を足していく流れになるでしょう。

## Flipbook Animation 付き Item

-   **Q**: flipbook animation を持つ item、あるいは少なくとも複数 texture を持つ item を作れますか？
    バニラの compass や watch のようなものです。
-   **A**: これは feature request として受け取ります。記憶が正しければ、flipbook 系は block にかなり深く結びついているので、item へそのまま適用するのは簡単ではなさそうです。また、item properties のような機能を載せる前に、item をもっと強化する中期作業も必要です。つまり、短期でも中期でもまだ難しいです😦

## 水に触れたときに block を壊す方法

-   **Q**: ゲーム内の例:

    -   carpet
    -   農耕可能な block / plant

    これは、かなり前から私の add-on に入れたかった機能です。以前、Scripting API でこの仕組みを作ろうとしたことがあります。でも Minecraft の水は、さまざまな奇妙な形やパターンに大きく変形するので、すべてのケースを検出するのが不可能でした。

    ありがとうございます。

-   **A**: これは block component として短期ロードマップ（6 か月未満くらい）に入っています。

## Redstone

-   **Q**: `redstone_conductivity` は良い始まりでしたが、本当の redstone デバイスにするには redstone signal に反応できる必要があります。 scripting で redstone power を読むことはできますが、毎回 queued tick で確認し続ける必要があり、効率が悪いです。redstone power を生成することもできないので、daylight sensor のような刺激に反応する sensor も作れません。
-   **A**: アイデアありがとうございます。チームに持ち帰って、既存の計画とどう合うか相談します。

## `blocks.json` の今後

-   **Q**: `blocks.json` の将来的な開発計画はどうなっていますか？ 現在は、custom geometry block と互換性がないなど、かなり大きな制限があります。これは最も知られた問題のひとつです。このファイルはアップグレードされるのでしょうか、それとも置き換えられるのでしょうか？ また、そもそも creators に公開された意図は何だったのでしょうか？ 興味があります。
-   **A**: 短く言うと、blocks.json は将来的に無くす予定です。そもそもの意図については、私の前の話なので分かりません😆 ですが、無くなれば、時が傷を癒してくれるはずです。

## `onBlockUpdate` と `onBlockDestroyed` の any custom component

-   **Q**: この 2 つのイベントはぜひ追加してほしいです。いろいろ作りやすくなります。
    `onBlockUpdate` は block 同士や door の接続を作りやすくし、
    `beforeBlockBroken` は mob や command を含め、どんな方法で壊されたときでも使えると嬉しいです。
-   **A**: これは検討したことがありますが、見た目以上に対応が複雑です。隣接 block が変わったときの block 更新は、近い将来のロードマップにはありません。ただし `onBlockDestroyed` の before イベントは、ぜひ検討したい良い要望です。現時点ではまだロードマップにはありません。

## Custom Block の Colormap

-   **Q**: grass や leaves のように、custom block に colormap を使う予定はありますか？
-   **A**: はい、内部ロードマップには入っています。中期から長期の間くらいですが、具体的な時期はまだ出せません。来年のどこかにはなります。

## `minecraft:storage_item` を持つ item の inventory を ScriptAPI で取得する

-   **Q**: entity のように、item の inventory も扱えて、削除・追加などができるようになりますか？
-   **A**: backlog には入っています。いつ着手できるかはまだ分かりませんが、将来的にはもっと連動して、近いタイミングで出したいと考えています😄

## Custom Creative Category と Item Groups

-   **Q**: 既存または新しい creative inventory の category に item や block を追加できるようになりますか？
-   **A**: 現在でも自分の item group は作れます。固有名を付ければ、その group に追加した item はひとまとめになります。ただし、バニラのように「グループを折りたたんで plus アイコンを追加する」ような見た目にはなりません。単にまとめて移動されるだけです。

    custom group system をバニラの group のように動く形へ揃えるのは、短期ロードマップに入っています。

    いまのところ、custom category はロードマップにありません。

## Item の Rotation Component

-   **Q**: この component の目的は、プレイヤーが手に持っている item を好きな角度で x / y / z 方向に回転できるようにすることです（attachable を使わずに item を回転できるようにする）。
-   **A**: block item には item display transform があり、ほかの 3D item なら attachable でできるはずです。

## Block Geometry の機能拡張

-   **Q**: block を扱うのは好きですが、今ない機能やツールが欲しい場面があります。特に block geometry について、いくつか質問があります。

    -   `minecraft:transformation` component か `minecraft:geometry` 自体を使って、bone と texture を独立して回転できますか？
    -   block geometry を今後改善する計画はありますか？ `item_display_transforms` のようなものです。
    -   将来的に script から block geometry を変更できるようになりますか？

-   **A**: data-driven geo の改善には今まさに取り組んでいますし、一部の item transform 作業はすでに preview に入っています。なので短く答えると yes です。script から geo を変更する件は、現時点では計画に入っていません。
-   **Q**: `full_block` と `cross` は良いです。でも、それ以上があるとすごく嬉しいです。slab や stair など、趣味でもプロでもバニラから再現したい形はたくさんあります。custom block を含むほぼすべての resource pack にこれらを入れなければならないのは、無駄に肥大化している感じもします。
-   **A**: 現時点では、ほかの vanilla geometry を data-driven にしたものはありませんが、長期的にはそれも目標のひとつです。item transforms や UV lock などの機能は、バニラ機能との整合性を高めて、より多くの vanilla geometry を公開できるようにするための取り組みの一部でした。

    特に重点を置くと役立ちそうな vanilla geo はありますか？

## 保存付き Block の Lock Mode

-   **Q**: ご存じのとおり、item の lock mode は storage block では動きません。これを変える予定はありますか？
-   **A**: `block_placer` component を使って、item で配置される block にしてみる方法があります。

    それから attachable を使えば、手に持ったときの見た目も出せます。

## 動かせない block

-   **Q**: これは何らかの理由で削除された機能でした。block を再び動かせないようにする方法がほしいです。component でも event でも、キャンセルできる形なら何でもいいです。
-   **A**: backlog にはありますが、いつ着手できるかはまだ分かりません。

## Block Polymesh Model Support

-   **Q**: 現在、polymesh model を使えるのは entity model だけの実験的機会があります。
-   **A**: polymesh はかなり特殊です。これを拡張する予定はまずありません。

## Custom Armour Trims

-   **Q**: pattern 用のテンプレートや、pattern の色として使う custom item を自分で作りたいです。
-   **A**: ご要望ありがとうございます。

    「pattern の色として使う custom item」とは、どういう意味でしょうか？

    armor trim を拡張したいという考えはありますが、近い将来のロードマップには入っていません。

## item に entity を保存する

-   **Q**: entity data を保存できる item や block があるととても便利です。
    例:

    -   custom mob bucket
    -   custom bee hive

    これは component と script で扱えそうです。

    ```json
    "minecraft:entity_storage": {
    "release_on_destroyed": true,
    "max_entities": 1,
    }
    ```

    この構文がどれくらい現実的かは分かりませんが、こんな感じなら良さそうです。

    ```js
    const storage = block.getComponent("minecraft:entity_storage");
    let stored_entity = storage.entities[0];
    dimension.spawnEntity(block.location, stored_entity);
    ```

-   **A**: そのアイデアはとても良いです。以前考えたときは、creators が block（block + block entity）、item（item stack 全体）、entity（entity NBT 全体）を「透過的に」スナップショットして、データを保持できるようにするイメージを思い描いていました。ただし、変な動作を防ぐために、パースやデータの覗き見などは許可しないつもりです。

## onEquip / onUnequip イベントはある？

-   **Q**: item custom components interface（または world.afterEvents）で、`equippable` スロットのどれかが変わったときに発火する event をサポートしてほしいです。

    たとえば `onEquip(arg: {slot: ContainerSlot})` と
    `onUnequip(arg:{slot: ContainerSlot, previousItemStack: ItemStack})` のようなものです。

    これがあれば、各プレイヤーの equippable スロットを runInterval で常に確認する必要がなくなり、効率の良い受動効果（夜視を与えるヘルメットなど）を作れます。

-   **A**: inventory events の概念はあります。equipment events も含めて検討したいです。

    これは今すぐ取り組んでいるものではありませんが、中期かそれ以降にはやりたいと思っています。

## item 用のカスタム keybind / button 機能

-   **Q**: 特定の key / button が押されたときに item が script を実行する機能がほしいです。map 作成や combat add-on でとても面白くなりそうです。
-   **A**: 移動まわりの、かなり原始的な input API を調べています。主に、あらゆる input mode で「そのまま動く」ものです。custom binding（touch screen UI も含める必要があります）は検討中ですが、まだ backlog には入っていません。

## Block の描画オプションをもっと

-   **Q**: 現在は `alpha_test`、`opaque`、`blend`、`double_sided` の 4 つの render method があります。それぞれ長所と短所がありますが、透明ピクセルを持つ block は `alpha_test` か `blend` のどちらかが必要です。どちらにも問題があり、`alpha_test` は 70 block 離れると完全に描画されなくなり、`blend` にもこの discord のほかの人いわく問題があります。私の知る限り、どちらも vanilla glass のような face culling はできません。

    Mojang は、vanilla leaves のように距離によって render method が変わる block 対応を追加する予定はありますか？
    また、opaque block に face が隠されたときだけでなく、もっと一般的に block culling を行えるようにする予定はありますか？

-   **A**: 近いうちに learning portal に新しい記事が来て、render_method ごとの render distance を説明します。もう推測しなくて大丈夫です。

    <@905553488510079026> が指摘した render_method も、ほかの方法と一緒に既存の learning portal ページへ追加されます（たぶん 1 回のドキュメント更新で入ります）。block culling については、full block の face を使えば vanilla glass の動作をかなり再現できます。

    Glass の再現には 2 つのことが必要です。render_method に `alpha_test_single_side` を使ってください

    これで、block を透かして見たときの見た目が期待どおりになり、block の背面も cull されます。culling のルール自体は、隣に full face（dirt のようなもの）が来たら face を文字通り削除しますが、欲しい見た目は render_method を変えるだけで実現できるはずです。


    *Editor's Note: これは Mojang 側の টাইपो で、本来は `alpha_test_single_sided` と書くべきでした。

-   **Q**: これを独立した質問として切り出しました。次の discord の投稿に関連しています: https://discord.com/channels/523663022053392405/1277725678539640852/1277725678539640852

    -   vanilla leaves が隣接関係に応じて render method を動的に変えるように、自分たちの block rendering を制御できるようになりますか？ たとえば、vanilla leaves block が四方を solid block に囲まれたら、より軽くなるよう render method を変えます。
    -   barrier、light block、structure void のような render method についてはどう考えていますか？ Marketplace 用に、見えない collision-only や placeholder block をよく作るので、それがどこにあるか分かる billboard のようなものが浮いていると助かります。

-   **A**: 隣接に基づく render method については、隣接 / 接続まわりの機能をたくさん検討していて、どう支えるのが良いかを考えています。これはその一部です。

## PlayerInteractWithBlock

-   **Q**: この 1、2 か月は add-on にあまり関わっていませんでしたが、少なくとも当時は、stable では vanilla block に対する interaction ができず、item を持つ必要がある itemUseOn を使わなければなりませんでした。PlayerInteractWithBlock は docs 上では stable と書かれていたのに、まだ beta でした。これは変わりましたか？ 変わっていないなら、今後 stable に入るのでしょうか？
-   **A**: これは本来よりずっと長く beta にとどまっていたことは分かっています😕 ですが、次のリリースで PlayerInteractWithBlock が stable に移ることを期待しています。私たちもそう感じています。
-   **Q**: 途中で何が悪かったのか、共有できますか？
-   **A**: player interact events では、繰り返しが頻繁で予測しにくく、端末依存でもあるという問題にずっと悩まされてきました。つまり、予測しにくい API になっていたということです。

    この領域は大きく作り直す案もありましたが、そこに紐づく挙動や端末が多すぎて「リスクが高い」と判断しました。最終的には追加データ（`isFirst` プロパティ）を持たせて、イベント列の中で最初の interaction かどうかを creators が判断しやすくする方向にしました。ただ、creators 側では「これは自分が見ている _最初_ の event か」を内部で追跡する仕組みがやはり必要になりそうで、あまり美しくはありません。

-   **Q**: cancel されると block に interaction できないので、player は sneak なしでその上に block を置けます。これは、block を特定条件でだけ interactable にしたいときに役立ちます。

    たとえば block の south face だけ interactable にして、ほかの face は無効にする、といったことができます。

    今は `onPlayerInteract` があると block 全体が interactable になります。

-   **A**: `onPlayerInteract` は after event ですが、before event なら interaction をキャンセルできるかもしれません。面白い案ですが、今のところロードマップには入っていません。ただ、検討する価値はあります。

## block 配置で entity を召喚する

-   **Q**: Wither や Iron Golem のように、特定の block 配置で entity を召喚できる機能を追加してはどうでしょうか。ユニークな block パターンで新しい creature を召喚できれば、ゲームプレイの幅が広がります。
-   **A**: その場合は、`player place block before` event（https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerplaceblockbeforeevent?view=minecraft-bedrock-experimental） のようなものを使い、周囲の block を少し pattern match して、合致したら entity を召喚するのが良さそうです。JSON の「data-driven」機能としてすぐに提供する予定は今のところなさそうです。

## Block Tags の Java 互換

-   **Q**: script で個別に選ばずに block をフィルタしやすくするため、さまざまな tag があると便利です。custom item の機能も作りやすくなり、custom tool として block をいくつかの vanilla tag で扱えるようになります。
-   **A**: この分野は近いうちに触ると思います:tm:。

## transformation -> rotation を任意角度に設定できるように

-   **Q**: 現在、block は 90 の倍数（0、90、180、270、および負の値）でしか回転できません。たとえば 45° にはできないので、45° 回転した block を作るには、45° 回転済みの新しい model を作るしかありません。このフィールドをもっと柔軟にして、block をより正確に回転させるためだけに新しい model を作らなくて済むようにしてほしいです。
-   **A**: それは Minecraft の見た目の設計ガイドラインに反すると私も思います。なので、そのための技術作業をするつもりはまったくありません。

## モデル化した block の texture 変化

-   **Q**: custom block に可変 texture を持たせる予定はありますか？
-   **A**: `material_instances` を使った Custom Block の texture variant は、長期ロードマップに入っています。

## full-block geometry に対する ambient occlusion

-   **Q**: 現状、`minecraft:geometry.full_block` model（または同等のもの）を使う block は、ambient occlusion の面で通常の full block と同じ扱いにはなっていません。他の block の shading は受けるようですが、ほかの block の ambient occlusion は受けず、自分の shading や ambient occlusion も出しません。

    とくに、面ごとに texture の向きが変わる block では影響が大きいです。

    以下は custom log で作った例で、バニラの oak log と比べています:
    https://media.discordapp.net/attachments/1215333861362237470/1278887412747079722/Kaleidoscope_003041.gif?ex=66d27037&is=66d11eb7&hm=65795e2b03ca8de6407dc969454b49caa6858443128815294641747f61fe7301&=&width=1258&height=702

    これが修正されれば、視覚バグで失われていた没入感を犠牲にせず、多数の自然系バニラ block を creators が正しく再現できるようになります。（それに、ようやく大好きな Redwood も追加できます！）

-   **A**: これ、実際にはバグに見えます。もしよければ、その block Json をこのスレッドに追加してもらえれば確認できます。ただ、全体としては、ほかの「solidity」の概念と full block geo をどう分けるかを検討していて、より論理的にカスタマイズできる挙動のまとまりへ整理したいと考えています。

## Camera Collision Component

-   **Q**: glass block のように、camera との collision ルールが entity とは違う block があります。こうした挙動を再現できると面白いです。たとえば:

    "minecraft:camera_collision": false

    …あるいは `collision_box` や `selection_box` component と同じような properties で。

-   **A**: おお、面白いです。

    確認したいのですが、collision ルールは entity のようであってほしいですか、それとも glass のようであってほしいですか？
    言い換えると、再現したい正確な挙動は何ですか？

## Custom block のサウンドと block/item の sound event

-   **Q**: 今のところ、`blocks.json` 定義に custom sound type を追加する方法がないのは、本当に不思議です。バニラ block には短い名前があり、gameplay で発生する sound event（step、break、place など）を参照しています。

    たとえば:

    ```json
    "dirt_with_roots" : {
        "sound" : "dirt_with_roots",
        ...
    }
    ```

    少なくとも、この定義で使う _custom_ name を定義できて、デフォルトの block event に対して custom sound へのリンクを持たせられるととても良いです。

    さらに、**custom** sound event があればもっと良いです。ここや、`minecraft:record` の `sound_event` property、さらに次のような場所に新しい同種の property を追加する案も考えられます。

    -   `minecraft:shooter`:
    -   使用完了時の sound event を定義内に持たせる
    -   `minecraft:food`:
    -   たとえば Vanilla の Honey Bottle のように、使用中と使用完了時の sound event
    -   `minecraft:wearable`:
    -   たとえば Vanilla の Netherite armor のように、装備時の sound event

    …そして、Script API の Custom Block/Item component から、関連付けた sound event を再生する手段もあるといいかもしれません。

-   **A**: そうですね、これは結局、vanilla のものを上書きするのではなく custom sound event を追加できるようにする話に行き着くのだと思います。これ、追っています。さらに 1 票入れておきます。とはいえ、短期ロードマップには入っていません。

## 複数 collision を持つ block

-   **Q**: 将来的に custom hitbox を持てるようになりますか？ あるいは、より良い作り方はありますか。

    stairs が通常の block とは違う collision box を持つような感じです。

-   **A**: stairs のように、今の collision（および selection）box component だけでは足りないものを作りたいという需要は把握しています。なので、その機能を提供できる方法をいくつか検討しています。長期ロードマップに入っています。

## Silk Touch を無効にする

-   **Q**: script ではすでにできますが、あまり「vanilla」らしくはありません。
    block が silk touch で落ちないようにする、あるいは silk touch の loot を変える方法があると嬉しいです。
-   **A**: custom block なら、silk touch enchantment を含む `match_tool` condition を loot table に追加すればできます。
    https://learn.microsoft.com/en-us/minecraft/creator/documents/loottableconditions?view=minecraft-bedrock-stable#match_tool

    短期ロードマップでは、vanilla block の destroy 時の loot table を変更できるようにする予定です。
