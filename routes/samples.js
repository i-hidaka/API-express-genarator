var express = require("express");
var router = express.Router();

/* サンプルAPI①
 * http://localhost:3000/samples にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 *
 * herokuデプロイ済み
 * https://create-api-rks.herokuapp.com/samples
 *
 */
router.post("/", function (req, res) {
//   var param = {
//     sample: "これはサンプルAPIです",
//     array: [1, 2, 3, 4, 4, 5, 6, 7, 7, 8],
//     test: ["test", "test", "test"],
//   };
  res.header("Content-Type", "application/json; charset=utf-8");
  res.set("Access-Control-Allow-Origin", "*");
  res.send(req.http.ClientRequest);
});

/* サンプルAPI②
 * http://localhost:3000/samples/hello にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.post("/hello", function (req, res, next) {
  const { name, email, password } = req.body;
  res.header("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.send(param);
});

router.get("/pokemon", function (req, res, next) {
  const param = {
    items: [
      {
        name: "こんごうだま",
        effect:
          "ディアルガに持たせると、ドラゴンとはがねタイプのわざの威力が上がる",
      },
      {
        name: "しらたま",
        effect:
          "パルキアに持たせると、ドラゴンとみずタイプのわざの威力が上がる",
      },
      {
        name: "しろいハーブ",
        effect: "能力が下がったとき元に戻る",
      },
      {
        name: "せんせいのツメ",
        effect: "先に攻撃できる",
      },
      {
        name: "メンタルハーブ",
        effect: "メロメロ状態がなおる",
      },
      {
        name: "メタルコート",
        effect: "はがねタイプのわざの威力が上がる",
      },
      {
        name: "おうじゃのしるし",
        effect: "ダメージわざを使うと、相手をひるませることがある",
      },
      {
        name: "ぎんのこな",
        effect: "むしタイプのわざの威力が上がる",
      },
      {
        name: "おまもりこばん",
        effect: "持たせたポケモンが戦闘にでると、お金が2倍になる",
      },
      {
        name: "きよめのおふだ",
        effect: "先頭のポケモンに持たせると、野生ポケモンと遭遇しづらくなる",
      },
      {
        name: "けむりだま",
        effect: "野生のポケモンから必ず逃げられる",
      },
      {
        name: "メタルコート",
        effect: "はがねタイプのわざの威力が上がる",
      },
      {
        name: "たべのこし",
        effect: "ターン毎にHPが少しだけ回復する",
      },
      {
        name: "でんきだま",
        effect: "ピカチュウに持たせると、攻撃と特攻が2倍になる",
      },
      {
        name: "やわらかいすな",
        effect: "じめんタイプのわざの威力が上がる",
      },
      {
        name: "かたいいし",
        effect: "いわタイプのわざの威力が上がる",
      },
      {
        name: "きせきのタネ",
        effect: "くさタイプのわざの威力があがる",
      },
      {
        name: "くろいメガネ",
        effect: "あくタイプのわざの威力が上がる",
      },
      {
        name: "くろおび",
        effect: "かくとうタイプのわざの威力が上がる",
      },
      {
        name: "じしゃく",
        effect: "でんきタイプのわざの威力が上がる",
      },
      {
        name: "しんぴのしずく",
        effect: "みずダイプのわざの威力が上がる",
      },
      {
        name: "どくバリ",
        effect: "どくタイプのわざの威力が上がる",
      },
      {
        name: "とけないこおり",
        effect: "こおりタイプのわざの威力が上がる",
      },
      {
        name: "のろいのおふだ",
        effect: "ゴーストタイプのわざの威力が上がる",
      },
      {
        name: "まがったスプーン",
        effect: "エスパータイプのわざの威力が上がる",
      },
      {
        name: "シルクのスカーフ",
        effect: "ノーマルタイプのわざの威力が上がる",
      },
      {
        name: "かいがらのすず",
        effect: "与えたダメージの8分の1のHPが回復する",
      },
      {
        name: "うしおのおこう",
        effect: "みずタイプのわざの威力が上がる",
      },
      {
        name: "あかいバンダナ",
        effect: "かっこよさコンテストの評価が上がる",
      },
      {
        name: "あおいバンダナ",
        effect: "うつくしさコンテストの評価が上がる",
      },
      {
        name: "ピンクのバンダナ",
        effect: "かわいさコンテストで評価が上がる",
      },
      {
        name: "みどりのバンダナ",
        effect: "かしこさコンテストで評価が上がる",
      },
      {
        name: "きいろのバンダナ",
        effect: "たくましさコンテストで評価が上がる",
      },
      {
        name: "こうかくレンズ",
        effect: "命中率が上がる",
      },
      {
        name: "ものしりメガネ",
        effect: "とくしゅわざの威力が上がる",
      },
      {
        name: "たつじんのおび",
        effect: "「こうかばつぐん」のとき、わざの威力が上がる",
      },
      {
        name: "きあいのタスキ",
        effect: "HP満タンからひんしになる攻撃を受けてもHPが1残る",
      },
      {
        name: "ひかりのねんど",
        effect: "「リフレクター」「ひかりのかべ」を使うと効果が長くなる",
      },
      {
        name: "フォーカスレンズ",
        effect: "相手よりも行動が遅かった場合、わざの命中率が上がる",
      },
      {
        name: "メトロノーム",
        effect: "同じわざを連続で使うと威力が上がる",
      },
      {
        name: "くろいてっきゅう",
        effect:
          "すばやさが下がる。特性「ふゆう」、タイプ「ひこう」のポケモンでも、じめんタイプのわざが当たる",
      },
      {
        name: "くろいヘドロ",
        effect:
          "持たせると、戦闘中にどくタイプのポケモンは少しずつHPが回復する。どくタイプ以外だとHPが減る。",
      },
      {
        name: "つめたいいわ",
        effect: "「あられ」を使うと、天気があられ状態になっている時間が伸びる",
      },
      {
        name: "さらさらいわ",
        effect:
          "「すなあらし」を使うと、天気がすなあらし状態になっている時間が伸びる",
      },
      {
        name: "あついいわ",
        effect:
          "「にほんばれ」を使うと、天気がひざしがつよい状態になっている時間が伸びる",
      },
      {
        name: "しめったいわ",
        effect: "「あまごい」を使うと、天気があめ状態になっている時間が伸びる",
      },
      {
        name: "ねばりのかぎづめ",
        effect:
          "「しめつける」「まきつく」などでダメージを与えるターンが増える",
      },
      {
        name: "くっつきバリ",
        effect: "毎ターンダメージを受ける。触れてきた相手に稀にくっつく",
      },
      {
        name: "きれいなぬけがら",
        effect: "控えのポケモンと必ず交代できる",
      },
      {
        name: "おおきなねっこ",
        effect: "HPを吸い取るわざで回復する量が増える",
      },
      {
        name: "こだわりメガネ",
        effect: "同じわざしか出せなくなるが、とくこうが増加する",
      },
      {
        name: "ひのたまプレート",
        effect: "ほのおタイプのわざの威力が上がる",
      },
      {
        name: "しずくプレート",
        effect: "みずタイプのわざの威力が上がる",
      },
      {
        name: "いかずちプレート",
        effect: "でんきタイプのわざの威力が上がる",
      },
      {
        name: "みどりのプレート",
        effect: "くさタイプのわざの威力が上がる",
      },
      {
        name: "つららのプレート",
        effect: "こおりタイプのわざの威力が上がる",
      },
      {
        name: "こぶしのプレート",
        effect: "かくとうタイプのわざの威力が上がる",
      },
      {
        name: "もうどくプレート",
        effect: "どくタイプのわざの威力が上がる",
      },
      {
        name: "だいちのプレート",
        effect: "じめんタイプのわざの威力が上がる",
      },
      {
        name: "あおぞらプレート",
        effect: "ひこうタイプのわざの威力が上がる",
      },
      {
        name: "ふしぎのプレート",
        effect: "エスパータイプのわざの威力が上がる",
      },
      {
        name: "たまむしプレート",
        effect:
          "むしのタイプの石石盤。持たせるとむしタイプの技の威力が強まる。",
      },

      {
        name: "がんせきプレート",
        effect: "いわタイプのわざの威力が上がる",
      },
      {
        name: "もののけプレート",
        effect: "ゴーストタイプのわざの威力が上がる",
      },
      {
        name: "りゅうのプレート",
        effect: "ドラゴンタイプのわざの威力が上がる",
      },
      {
        name: "こわもてプレート",
        effect: "あくタイプのわざの威力が上がる",
      },
      {
        name: "こうてつプレート",
        effect: "はがねタイプのわざの威力が上がる",
      },
      {
        name: "あやしいおこう",
        effect: "エスパータイプのわざの威力が上がる",
      },
      {
        name: "がんせきおこう",
        effect: "いわタイプのわざの威力が上がる",
      },

      {
        name: "まんぷくおこう",
        effect: "技の発動が後攻になる",
      },
      {
        name: "さざなみのおこう",
        effect: "みずタイプのわざの威力が上がる",
      },

      {
        name: "ひかりのこな",
        effect:
          "キラキラ光る粉。もたせると光が相手を惑わして技が命中しにくくなる。",
      },
      {
        name: "もくたん",
        effect: "ものを燃やす燃料。持たせるとほのおタイプの技の威力があがる。",
      },
      {
        name: "こだわりハチマキ",
        effect:
          "ちょっとこだわったハチマキ。持たせると攻撃はあがるが、同じ技しか出せなくなる。",
      },
      {
        name: "こだわりスカーフ",
        effect:
          "ちょっとこだわったスカーフ。持たせると素早さはあがるが、同じ技しかだせなくなる。",
      },
      {
        name: "あかいいと",
        effect:
          "細くて長い真っ赤な糸。持たせるとメロメロになったとき、相手もメロメロにできる。",
      },
      {
        name: "りゅうのキバ",
        effect: "持たせると、ドラゴンタイプの技の威力が上がる。",
      },
      {
        name: "かえんだま",
        effect:
          "触ると熱をだす不思議な玉。持たせると戦闘中にやけどの状態になる。",
      },
      {
        name: "かるいし",
        effect: "とても軽い石。持たせるとポケモンの体重が軽くなる。",
      },
      {
        name: "きあいのハチマキ",
        effect:
          "持たせるとひんしになりそうな技を受けてもHPを1だけ残して耐えることがある。",
      },
      {
        name: "はっきんだま",
        effect:
          "ギラティナに持たせるとドラゴンとゴーストタイプの技の威力があがる光り輝く珠。",
      },

      {
        name: "こうこうのしっぽ",
        effect:
          "とても重たいなにかのしっぽ。持たせるといつもより行動が遅くなる。",
      },
      {
        name: "のんきのおこう",
        effect:
          "持たせるとお香の不思議な香りが、相手をまどわして技が命中しにくくなる。",
      },
      {
        name: "ながねぎ",
        effect:
          "とても長くて硬いクキ。カモネギに持たせると、技が急所に当たりやすくなる。",
      },
      {
        name: "いのちのたま",
        effect:
          "持たせると攻撃するたびに、HPが少し減ってしまうが技の威力があがる。",
      },
      {
        name: "こううんのおこう",
        effect:
          "持たせたポケモンが1度でも戦闘に顔を出だすと、お金が2倍もらえる。",
      },
      {
        name: "ラッキーパンチ",
        effect: "「ラッキー」に持たせると急所に当たりやすくなる。",
      },
      {
        name: "メタルパウダー",
        effect:
          "メタモンに持たせると防御があがる不思議な粉。とてもこまかくて硬い。",
      },
      {
        name: "スピードパウダー",
        effect:
          "メタモンに持たせると素早さがあがる不思議な粉。とてもこまかくて硬い。",
      },
      {
        name: "ちからのハチマキ",
        effect:
          "ちからがわいてくるはちまき。持たせると物理技の威力が少しあがる。",
      },
      {
        name: "せいれいプレート",
        effect:
          "フェアリータイプの石版。持たせるとフェアリータイプの技の威力が強まる。",
      },
      {
        name: "きよめのおこう",
        effect: "1番前のポケモンに持たせると、野生ポケモンがでてきにくくなる。",
      },
      {
        name: "するどいツメ",
        effect: "鋭くとがったツメ。持たせると技が急所に当たりやすくなる。",
      },
      {
        name: "するどいキバ",
        effect: "鋭くとがったツメ。持たせると技が急所に当たりやすくなる。",
      },
      {
        name: "おはなのおこう",
        effect: "不思議な香りの御香。持たせるとくさタイプの技の威力があがる。",
      },
      {
        name: "ピントレンズ",
        effect:
          "弱点がみえるレンズ。持たせたポケモンの技が急所に当たりやすくなる。",
      },
      {
        name: "するどいくちばし",
        effect:
          "長くとがったくちばし。持たせるとひこうタイプの技の威力が上がる。",
      },
      {
        name: "こころのしずく",
        effect:
          "「ラティオス」「ラティアス」に持たせると、エスパー・ドラゴンタイプの技の威力が上がる。",
      },
      {
        name: "ふといホネ",
        effect: "「カラカラ」「ガラガラ」に持たせるとこうげきが2倍になる。",
      },
      {
        name: "どくどくだま",
        effect:
          "触ると毒をだす不思議な玉。持たせると戦闘中に猛毒の状態になる。",
      },
    ],
  };
  res.header("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.send(param);
});

module.exports = router;
