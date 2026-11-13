// アプリ一覧のデータ。index.html（一覧ページ）と in-app-apps.html（アプリ内表示用）で共有する
// 新しい順に並べる。先頭の3本を「新しいアプリ」として大きく出す
window.SITE_APPS = [
  { name:'みっけアンサー', url:'https://apps.apple.com/jp/app/id6825153683', desc:'見つからない間違い探しの答えを教えてくれるアプリです。2つの絵を撮って重ねるだけで、違う所に⭕️が付きます', category:'ライフスタイル', image:'image/icon/mikkeAnswer.png', page:'detail/mikkeAnswer.html' },
  { name:'フォトブレード', url:'https://apps.apple.com/jp/app/id6824405332', desc:'写真から切り抜いた被写体が回転するバトルコマになる、3D物理バトルゲームです', category:'ゲーム', image:'image/icon/photoBlade.png', page:'detail/photoBlade.html' },
  { name:'青空ずんだ', url:'https://apps.apple.com/jp/app/id6824322042', desc:'ずんだもんと図書館を歩いて、青空文庫の名作を探して読める読書アプリです。ずんだもんの声で読み上げもできます', category:'ブック', image:'image/icon/aozoraZunda.png', page:'detail/aozoraZunda.html' },
  { name:'のっけタワー', url:'https://apps.apple.com/jp/app/id6822193103', desc:'写真から切り抜いた被写体を積み上げて、どこまで高く積めるかチャレンジするタワーゲームです', category:'ゲーム', image:'image/icon/imageTower.png', page:'detail/imageTower.html' },
  { name:'くっつけ', url:'https://apps.apple.com/jp/app/id6820843882', desc:'じぶんの写真を切り抜いて遊ぶ、写真がくっついて進化する落ちものパズルです', category:'ゲーム', image:'image/icon/kuttuke.png', page:'detail/kuttuke.html' },
  { name:'タンゴミル', url:'https://apps.apple.com/jp/app/id6818413919', desc:'英文を貼るだけで、自分だけの単語帳と4択クイズが作れるアプリです', category:'教育', image:'image/icon/tangomiru.png', page:'detail/tangomiru.html' },
  { name:'酒田道場', url:'https://apps.apple.com/jp/app/id6798115410', desc:'実例チャートでローソク足30パターンをクイズと図鑑で学べるアプリです', category:'教育', image:'image/icon/sakataDojo.png', page:'detail/sakataDojo.html' },
  { name:'かぶ戦記', url:'https://apps.apple.com/jp/app/id6752121856', desc:'株のトレードで戦った記録を感情やメモとともに記録するアプリです', category:'ファイナンス', image:'image/icon/kabusenki.png', page:'detail/kabusenki.html' },
  { name:'AI俳句バトル', url:'https://apps.apple.com/jp/app/id6753979897', desc:'「AI俳句バトル」は、日本の伝統文化である俳句と、最新のAI技術を融合させた新感覚の言葉遊びアプリです。', category:'エンターテインメント', image:'image/icon/aiHaikuBattle.png', page:'detail/AIHaikuBattle.html' },
  { name:'ぺろのーむ', url:'https://apps.apple.com/jp/app/id1454250247', desc:'振り子の動作をアメを舐める動きで表現したメトロノームアプリです。', category:'ミュージック', image:'image/icon/peronome.png', page:'detail/peronome.html' },
  { name:'oh!natto', url:'https://apps.apple.com/jp/app/id1457049172', desc:'Oh!Natto!は納豆アクションゲームです。たくさん混ぜて時間内にたくさん食べよう', category:'ゲーム', image:'image/icon/mame.png', page:'https://inouefood.github.io/inouefood/natto.html' },
  { name:'まんがのしおり', url:'https://apps.apple.com/jp/app/id6469087739', desc:'たくさんの漫画を読んでいると何巻まで、何話まで読んだかわからなくなる瞬間ありませんか？', category:'ユーティリティ', image:'image/icon/DigitalBookmark.png', page:'detail/digiralBookmark.html' },
  { name:'アニメ手帳', url:'https://apps.apple.com/jp/app/id1556976347', desc:'今期視聴しているアニメを一括管理できるアプリ、見ているサイトに直接飛べる！', category:'エンターテインメント', image:'image/icon/animeSchedule.png', page:'https://animeschedule-23f6d.web.app/' },
  { name:'だれのあし', url:'https://apps.apple.com/jp/app/1465352189', desc:'いろんな足を見て一体それは誰の足なのかを当てるクイズゲームです、わかるかな？', category:'ゲーム', image:'image/icon/whoLeg.png', page:'detail/whoLeg.html' },
  { name:'むにゅ', url:'https://apps.apple.com/jp/app/id1461761608', desc:'キノコを食べて進化するイモムシのアクションゲーム。キノコの色と魔法の組み合わせで、最終形態は全12種類！', category:'ゲーム', image:'image/icon/munyu.png', page:'detail/munyu.html' },
  { name:'えびフライ', url:'https://apps.apple.com/jp/app/id1461666071', desc:'衣をつけて、揚げて、ソースをかけて空へ発射！障害物をよけて、🍤をどこまで高く飛ばせるかな？', category:'ゲーム', image:'image/icon/ebiFly.png', page:'detail/ebiFly.html' },
  { name:'Kodo-心臓博物館', url:'https://apps.apple.com/jp/app/6444230294', desc:'心臓の鼓動は生き物によって速さが違う、みんなの生きる速さを手の中で感じてください', category:'教育', image:'image/icon/kodo.png', page:'detail/kodo.html' },
  { name:'たぷれこ', url:'https://apps.apple.com/jp/app/id6443822117', desc:'パワハラが横行する現代社会でいつでもワンタップで録音ができる防犯アプリ', category:'仕事効率化', image:'image/icon/tapreco.png', page:'detail/tapreco.html' },
  { name:'toio コントローラアプリ', url:'https://apps.apple.com/jp/app/id1469030441', desc:'toio 用コントローラ、ゲームソフトがなくてもtoioを操作してラジコンのように楽しめます', category:'エンターテインメント', image:'image/icon/toioController.png', page:'detail/toioController.html' },
  { name:'Switchキャプチャ', url:'https://apps.apple.com/jp/app/id6471073089', desc:'Switchのキャプチャを扱うユーティリティ、iPadでゲームを楽しめます', category:'ユーティリティ', image:'image/icon/switch-svc-icon-deleteAlpha.png', page:'detail/SwitchCapture.html' }
];

// カテゴリごとの色（バッジと新作カードの背景）
window.SITE_TINTS = {
  'ゲーム':'#ff8a80', 'ブック':'#a5dc7a', '教育':'#7fd8b0', 'ファイナンス':'#ffd166',
  'エンターテインメント':'#c7a6ff', 'ミュージック':'#ffa8d8', 'ユーティリティ':'#8fb8ff', '仕事効率化':'#8fdcf0', 'ライフスタイル':'#ffd43b'
};
