// 消費ラピス
var lapis = 0;

// 金額
var yen = 0;
var yenPerLapis = 8800 / 12500;

// ガチャ回数
var gachaCnt = 0;

// 確率パターンテーブル
var pattern = new Array();
var pattern_11 = new Array();

// ガチャ履歴
var rireki = "";

// キャラクター
// 新規に増えたキャラを上から増やす
// [名称,パターン,評価] の順番で格納
// ◎：★5スタート、○：★6覚醒、△：★5覚醒だがゴミ、×：ゴミ、□：特に無し

// ========== パターン ==========
// 1:★5～★6
// 2:★4～★6、★4～★5
// 3:★3～★5、★3～★6、★3～★4
// 4:PU対象(★5～★6)
// 5:PU対象(★4～★6、★4～★5)
// 6:PU対象(★3～★5)
var character = [
	["ロイ", 4],
	["クラウド", 1],
	["エルフリーデ", 1],
	["アヤカ", 1],
	["ニックス", 1],
	["ノクティス", 1],
	["光輝のヴェリアス", 1],
	["たまねぎ剣士", 1],
	["常闇のヴェリアス", 1],
	["劫火のヴェリアス", 1],
	["騎士ディリータ", 1],
	["傭兵ラムザ", 1],
	["プリッシュ", 1],
	["ルネラ", 1],
	["バルフレア", 1],
	["フォーレン", 1],
	["トランスティナ", 1],
	["爽涼の魔人フィーナ", 1],
	["ティーダ", 1],
	["ヴィルヘルム", 1],
	["レム", 1],
	["アイリーン", 1],
	["マリー", 1],
	["皇帝", 1],
	["オルランドゥ", 1],
	["魔人フィーナ", 1],
	["クイーン", 1],
	["ギルガメッシュ", 1],
	["ルーネス", 1],
	["エース", 1],
	["暗黒騎士セシル", 1],
	["ディリータ", 1],
	["ラムザ", 1],
	["ライトニング", 1],
	["クロエ", 5],
	["ウィリアム", 2],
	["ゴウケン", 2],
	["シルヴィア", 2],
	["クロウ", 2],
	["グラウカ", 2],
	["アウラ", 2],
	["水華のヴェリアス", 2],
	["天風のヴェリアス", 2],
	["エリア", 2],
	["デッシュ", 2],
	["王土のヴェリアス", 2],
	["ビクトリア", 2],
	["オーラン", 2],
	["メリアドール", 2],
	["ウェライ", 2],
	["ブラン", 2],
	["ヘレナ", 2],
	["アーシェ", 2],
	["ラスラ", 2],
	["リュック", 2],
	["アメリア", 2],
	["イルズ", 2],
	["セッツァー", 2],
	["渚のフィーナ", 2],
	["グレイス", 2],
	["キング", 2],
	["ソゼ", 2],
	["シャイン", 2],
	["レオンハルト", 2],
	["ソレイユ", 2],
	["ルルカ", 2],
	["ナイン", 2],
	["メルセデス", 2],
	["レフィア", 2],
	["セブン", 2],
	["ローザ", 2],
	["スノウ", 2],
	["ホープ", 2],
	["ヴァニラ", 2],
	["ガフガリオン", 2],
	["アグリアス", 2],
	["ガーネット", 2],
	["チヅル", 2],
	["光の戦士", 2],
	["エイミ", 6],
	["コンラッド", 3],
	["ユリ", 3],
	["カムイ", 3],
	["リベルト", 3],
	["グロム", 3],
	["サラ", 3],
	["ティム", 3],
	["クピピ", 3],
	["ラグルス", 3],
	["ワッカ", 3],
	["カーミル", 3],
	["ガウ", 3],
	["常夏のリド", 3],
	["ジーン", 3],
	["アーベル", 3],
	["サイス", 3],
	["ウルリカ", 3],
	["ヘレティック", 3],
	["シエラ", 3],
	["ガイ", 3],
	["ローレンス", 3],
	["オヴェリア", 3],
	["エル", 3],
	["エイト", 3],
	["シンク", 3],
	["ファリス", 3],
	["イングズ", 3],
	["アルクゥ", 3],
	["ジャック", 3],
	["トレイ", 3],
	["エッジ", 3],
	["ファング", 3],
	["サッズ", 3],
	["ムスタディオ", 3],
	["アルマ", 3],
	["リュドミラ", 3],
	["シャルロット", 3],
	["サラマンダー", 3],
	["フライヤ", 3],
	["ハヤテ", 3],
	["ラクシャーサ", 3],
	["テラ", 3],
	["レナ", 3],
	["ケフカ", 3],
	["セリス", 3],
	["ジルベール", 3],
	["レオ", 3],
	["ロック", 3],
	["アルテミオス", 3],
	["シャオ", 3],
	["ゴルベーザ", 3],
	["ミユキ", 3],
	["メディウス", 3],
	["ローゼリア", 3],
	["セリアス", 3],
	["ディーン", 3],
	["ヴァン", 3],
	["ジタン", 3],
	["フリオニール", 3],
	["バッツ", 3],
	["ティナ", 3],
	["セシル", 3],
	["くらやみのくも", 3],
	["クジャ", 3],
	["エクスデス", 3],
	["ガーランド", 3],
	["ラニ", 3],
	["ガラフ", 3],
	["ラッセル", 3],
	["ベディール", 3],
	["ルナ", 3],
	["アンゼルム", 3],
	["クライン", 3],
	["カイエン", 3],
	["リディア", 3],
	["シャントット", 3],
	["フラン", 3],
	["エドガー", 3],
	["カイン", 3],
	["クルル", 3],
	["シャドウ", 3],
	["マッシュ", 3],
	["マリア", 3],
	["パンネロ", 3],
	["ビビ", 3]
];

////////////////////////////////////////////////////
//
// ガチャ実行メイン
//
function Execute(shurui) {
	// DDLBの選択
	var idx_shurui = document.form1.shurui.selectedIndex;

	// 確率取得
	if (idx_shurui == 0) {
		getKakuritsu();
	} else if (idx_shurui == 1) {
		getKakuritsuPickUp();
	}

	// レアリティー
	var rare3 = new Array(character.length);
	var rare4 = new Array(character.length);
	var rare5 = new Array(character.length);
	var rare4_11 = new Array(character.length);
	var rare5_11 = new Array(character.length);
	// 出力文字
	var str = "";
	// カウント用に使用
	var cnt = 0;

	// ★4確定
	for (var i = 0; i < character.length; i++) {
		rare5_11[i] = cnt + Math.ceil(pattern_11[character[i][1] - 1][0] * 100000);
		cnt = rare5_11[i];
		rare4_11[i] = cnt + Math.ceil(pattern_11[character[i][1] - 1][1] * 100000);
		cnt = rare4_11[i];
	}

	cnt = 0;

	// 10連
	for (var i = 0; i < character.length; i++) {
		rare5[i] = cnt + Math.ceil(pattern[character[i][1] - 1][0] * 100000);
		cnt = rare5[i];
		rare4[i] = cnt + Math.ceil(pattern[character[i][1] - 1][1] * 100000);
		cnt = rare4[i];
		rare3[i] = cnt + Math.ceil(pattern[character[i][1] - 1][2] * 100000);
		cnt = rare3[i];
	}

	// ガチャをランダムに選ぶ
	// ★4確定
	var gacha_rare4 = Math.ceil((Math.random() * ((rare4_11[rare4_11.length - 1] + 1) - 1)) + 1);

	// 10連
	var min = 1;
	var max = rare3[rare3.length - 1];
	var gacha = [
		Math.ceil((Math.random() * ((max + 1) - min)) + min),
		Math.ceil((Math.random() * ((max + 1) - min)) + min),
		Math.ceil((Math.random() * ((max + 1) - min)) + min),
		Math.ceil((Math.random() * ((max + 1) - min)) + min),
		Math.ceil((Math.random() * ((max + 1) - min)) + min),
		Math.ceil((Math.random() * ((max + 1) - min)) + min),
		Math.ceil((Math.random() * ((max + 1) - min)) + min),
		Math.ceil((Math.random() * ((max + 1) - min)) + min),
		Math.ceil((Math.random() * ((max + 1) - min)) + min),
		Math.ceil((Math.random() * ((max + 1) - min)) + min)
	];

	// レアリティーのカウント
	var rare3cnt = 0;
	var rare4cnt = 0;
	var rare5cnt = 0;

	// ランダムで算出した値からどのキャラクターが出たかを確定
	if (shurui == 1) {
		// 11連ガチャ
		// ★4確定
		for (var j = 0; j < character.length; j++) {
			if (gacha_rare4 <= rare5_11[j]) {
				// ★5(虹クリ)
				str += character[j][0] + "(★5)[★4確定]<br />";
				rare5cnt++;
				break;
			} else if (gacha_rare4 <= rare4_11[j]) {
				// ★4(金クリ)
				str += character[j][0] + "(★4)[★4確定]<br />";
				rare4cnt++;
				break;
			}
		}

		// 10連
		for (var i = 0; i < gacha.length; i++) {
			for (var j = 0; j < character.length; j++) {
				if (gacha[i] <= rare5[j]) {
					// ★5(虹クリ)
					str += character[j][0] + "(★5)<br />";
					rare5cnt++;
					break;
				} else if (gacha[i] <= rare4[j]) {
					// ★4(金クリ)
					str += character[j][0] + "(★4)<br />";
					rare4cnt++;
					break;
				} else if (gacha[i] <= rare3[j]) {
					// ★3(青クリ)
					str += character[j][0] + "(★3)<br />";
					rare3cnt++;
					break;
				}
			}
		}
		// 消費ラピスを加算
		lapis += 5000;
	} else if (shurui == 2) {
		// 単発ガチャ
		// gacha[0]のみを対象とする。
		for (var j = 0; j < character.length; j++) {
			if (gacha[0] <= rare5[j]) {
				// ★5(虹クリ)
				str += character[j][0] + "(★5)<br />";
				rare5cnt++;
				break;
			} else if (gacha[0] <= rare4[j]) {
				// ★4(金クリ)
				str += character[j][0] + "(★4)<br />";
				rare4cnt++;
				break;
			} else if (gacha[0] <= rare3[j]) {
				// ★3(青クリ)
				str += character[j][0] + "(★3)<br />";
				rare3cnt++;
				break;
			}
		}
		// 消費ラピスを加算
		lapis += 500;
	}

	// 履歴に追加
	rireki += str;
	// 金額を加算
	yen = floatFormat(lapis * yenPerLapis, 0);
	// ガチャ回数を加算
	gachaCnt++;

	// 結果文字列作成
	str = "---------- ガチャ結果 ----------<br />" + str;
	str += "<br />";
	str += "★3：" + rare3cnt + "<br />";
	str += "★4：" + rare4cnt + "<br />";
	str += "★5：" + rare5cnt + "<br />";
	str += "消費ラピス：" + lapis + "(" + gachaCnt + "回)<br />";
	str += "消費金額：" + yen + "円";

	if (rare5cnt >= 1) {
		// ★5が出たら、アラートを表示する
		var alertStr = "おめでとうクポ♪\n★5が" + rare5cnt + "個出たクポ";
		alert(alertStr);
	}

	// ガチャの結果を出力
	document.getElementById("output1").innerHTML = str;
	document.getElementById("output2").innerHTML = rireki;
}
////////////////////////////////////////////////////
//
// 出るまで引くガチャ
//
function Execute2() {
	// DDLBの選択
	var idx_character = document.form1.character.selectedIndex;
	var idx_shurui = document.form1.shurui.selectedIndex;

	// DDLBの値と項目
	var sel_character_val = document.form1.character.options[idx_character].value;
	var sel_character_txt = document.form1.character.options[idx_character].text;
	var sel_shurui_val = document.form1.shurui.options[idx_shurui].value;
	var sel_shurui_txt = document.form1.shurui.options[idx_shurui].text;

	// 何も選択されていない場合は、実行しない
	if (sel_character_val == "" || sel_shurui_val == "") {
		document.getElementById("output1").innerHTML = "選択項目が抜けてるクポ";
		document.getElementById("output2").innerHTML = "";
		return;
	}

	// 出力文字
	var str = "";

	// 確率取得
	if (sel_shurui_val == "normal") {
		getKakuritsu();
	} else if (sel_shurui_val == "pickup") {
		getKakuritsuPickUp();
	}

	// レアリティー
	var rare3 = new Array(character.length);
	var rare4 = new Array(character.length);
	var rare5 = new Array(character.length);

	// カウント用に使用
	var cnt = 0;

	// キャラクターの分布
	for (var i = 0; i < character.length; i++) {
		rare5[i] = cnt + Math.ceil(pattern[character[i][1] - 1][0] * 100000);
		cnt = rare5[i];
		rare4[i] = cnt + Math.ceil(pattern[character[i][1] - 1][1] * 100000);
		cnt = rare4[i];
		rare3[i] = cnt + Math.ceil(pattern[character[i][1] - 1][2] * 100000);
		cnt = rare3[i];
	}

	var gacha = 0;
	var getChara = "";

	var getRireki = new Array(character.length);
	for (var i = 0; i < character.length; i++) {
		getRireki[i] = new Array(character[i][0], 0);
	}

	// 出るまで回す為、無限ループにする
	for (var i = 1; ; i++) {
		// ガチャをランダムに選ぶ
		gacha = Math.ceil((Math.random() * ((rare3[rare3.length - 1] + 1) - 1)) + 1);

		// 何が出たか？
		for (var j = 0; j < character.length; j++) {
			if (gacha <= rare5[j]) {
				// ★5(虹クリ)
				getChara = character[j][0];
				break;
			} else if (gacha <= rare4[j]) {
				// ★4(金クリ)
				getChara = character[j][0];
				break;
			} else if (gacha <= rare3[j]) {
				// ★3(青クリ)
				getChara = character[j][0];
				break;
			}
		}

		// 出たキャラクターをカウントする
		for (var j = 0; j < getRireki.length; j++) {
			if (getChara == getRireki[j][0]) {
				getRireki[j][1]++;
			}
		}

		// 指定したキャラクターが出たらループを抜ける
		if (getChara == sel_character_txt) {
			str += getChara + "が" + i + "回目で出たクポ♪"
			break;
		}
	}

	// 履歴
	rireki = "";
	rireki += "内訳"
	rireki += "<table>";
	for (var i = 0; i < getRireki.length; i++) {
		rireki += "<tr>";
		rireki += "<td>" + getRireki[i][0] + "</td>"
		rireki += "<td>" + getRireki[i][1] + "</td>";
		rireki += "</tr>"
	}
	rireki += "</table>";

	// ガチャの結果を出力
	document.getElementById("output1").innerHTML = str;
	document.getElementById("output2").innerHTML = rireki;
}
////////////////////////////////////////////////////
//
// 初期化
//
function init() {
	// 変数の初期化
	lapis = 0;		// 消費ラピス
	yen = 0;		// 金額
	gachaCnt = 0;	// ガチャ回数
	rireki = "";	// 履歴

	// 表示領域の初期化
	document.getElementById("output1").innerHTML = "";
	document.getElementById("output2").innerHTML = "";
}
////////////////////////////////////////////////////
//
// デバッグ用
//
function debug() {
}

// 四捨五入
function floatFormat(number, n) {
	var _pow = Math.pow(10, n);

	return Math.round(number * _pow) / _pow;
}