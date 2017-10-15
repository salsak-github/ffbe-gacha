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
// [名称,パターン,タイプ別] の順番で格納

// ========== パターン ==========
// 1:★5～★6
// 2:★4～★6、★4～★5
// 3:★3～★5、★3～★6、★3～★4
// 4:PU対象(★5～★6)
// 5:PU対象(★4～★6、★4～★5)
// 6:PU対象(★3～★5)
// ========== タイプ別 ==========
// A:攻撃
// MD:魔法＆防御
// SH:サポート＆回復
var character = [
	["レーゲン", 4, "A"],
	["洸洋の軍師ニコル", 1, "SH"],
	["セフィロス", 1, "A"],
	["リーラ", 1, "A"],
	["星虹の技師リド", 1, "SH"],
	["究道の竜騎士カイン", 1, "A"],
	["無垢なる召喚士リディア", 1, "MD"],
	["無銘の銃士ジェイク", 1, "A"],
	["シエラ皇帝", 1, "SH"],
	["バッシュ", 1, "MD"],
	["ガブラス", 1, "MD"],
	["アラネア", 1, "A"],
	["プロンプト", 1, "SH"],
	["白蓮の魔道士フィーナ", 1, "SH"],
	["クンシラ", 1, "MD"],
	["桜雲の賢者サクラ", 1, "MD"],
	["ユウナ", 1, "MD"],
	["ルールー", 1, "MD"],
	["氷炎の騎士ラスウェル", 1, "A"],
	["ジライヤ", 1, "MD"],
	["エーコ", 1, "SH"],
	["ベアトリクス", 1, "A"],
	["デューク", 1, "A"],
	["グラディオラス", 1, "MD"],
	["ロイ", 1, "SH"],
	["クラウド", 1, "A"],
	["エルフリーデ", 1, "MD"],
	["アヤカ", 1, "SH"],
	["ニックス", 1, "SH"],
	["ノクティス", 1, "SH"],
	["光輝のヴェリアス", 1, "MD"],
	["たまねぎ剣士", 1, "A"],
	["常闇のヴェリアス", 1, "SH"],
	["劫火のヴェリアス", 1, "SH"],
	["騎士ディリータ", 1, "A"],
	["傭兵ラムザ", 1, "MD"],
	["プリッシュ", 1, "A"],
	["ルネラ", 1, "MD"],
	["バルフレア", 1, "A"],
	["フォーレン", 1, "A"],
	["トランスティナ", 1, "MD"],
	["爽涼の魔人フィーナ", 1, "MD"],
	["ティーダ", 1, "SH"],
	["ヴィルヘルム", 1, "MD"],
	["レム", 1, "SH"],
	["アイリーン", 1, "A"],
	["マリー", 1, "SH"],
	["皇帝", 1, "MD"],
	["オルランドゥ", 1, "A"],
	["魔人フィーナ", 1, "MD"],
	["クイーン", 1, "SH"],
	["ギルガメッシュ", 1, "A"],
	["ルーネス", 1, "A"],
	["エース", 1, "MD"],
	["暗黒騎士セシル", 1, "A"],
	["ディリータ", 1, "SH"],
	["ラムザ", 1, "SH"],
	["ライトニング", 1, "A"],
	["リュミヌイ", 5, "SH"],
	["ザイル", 5, "A"],
	["レキサ", 2, "MD"],
	["エルビス", 2, "A"],
	["シルト", 2, "MD"],
	["キリアン", 2, "A"],
	["ヤン", 2, "A"],
	["オゼッタ", 2, "MD"],
	["ヴェイン", 2, "SH"],
	["ドレイス", 2, "MD"],
	["ワドウ", 2, "SH"],
	["ヴェルン", 2, "SH"],
	["セドナ", 2, "A"],
	["シーモア", 2, "MD"],
	["カエデ", 2, "A"],
	["オウガ", 2, "A"],
	["スタイナー", 2, "SH"],
	["オリーフ", 2, "SH"],
	["ミステア", 2, "MD"],
	["コル", 2, "A"],
	["クロエ", 2, "SH"],
	["ウィリアム", 2, "MD"],
	["ゴウケン", 2, "A"],
	["シルヴィア", 2, "MD"],
	["クロウ", 2, "MD"],
	["グラウカ", 2, "A"],
	["アウラ", 2, "A"],
	["水華のヴェリアス", 2, "SH"],
	["天風のヴェリアス", 2, "A"],
	["エリア", 2, "SH"],
	["デッシュ", 2, "SH"],
	["王土のヴェリアス", 2, "MD"],
	["ビクトリア", 2, "MD"],
	["オーラン", 2, "MD"],
	["メリアドール", 2, "SH"],
	["ウェライ", 2, "A"],
	["ブラン", 2, "A"],
	["ヘレナ", 2, "A"],
	["アーシェ", 2, "MD"],
	["ラスラ", 2, "MD"],
	["リュック", 2, "SH"],
	["アメリア", 2, "A"],
	["イルズ", 2, "SH"],
	["セッツァー", 2, "A"],
	["渚のフィーナ", 2, "SH"],
	["グレイス", 2, "A"],
	["キング", 2, "A"],
	["ソゼ", 2, "MD"],
	["シャイン", 2, "SH"],
	["レオンハルト", 2, "A"],
	["ソレイユ", 2, "SH"],
	["ルルカ", 2, "SH"],
	["ナイン", 2, "A"],
	["メルセデス", 2, "A"],
	["レフィア", 2, "SH"],
	["セブン", 2, "SH"],
	["ローザ", 2, "SH"],
	["スノウ", 2, "MD"],
	["ホープ", 2, "MD"],
	["ヴァニラ", 2, "SH"],
	["ガフガリオン", 2, "A"],
	["アグリアス", 2, "A"],
	["ガーネット", 2, "SH"],
	["チヅル", 2, "A"],
	["光の戦士", 2, "MD"],
	["ルシール", 6, "SH"],
	["メラルド", 3, "A"],
	["ミィム", 3, "SH"],
	["ギルバード", 3, "SH"],
	["ライリー", 3, "SH"],
	["ラーサー", 3, "SH"],
	["アウィン", 3, "A"],
	["オトギリ", 3, "SH"],
	["黒のワルツ3号", 3, "MD"],
	["シャリー", 3, "SH"],
	["リュナン", 3, "A"],
	["イリス", 3, "SH"],
	["エイミ", 3, "A"],
	["コンラッド", 3, "A"],
	["ユリ", 3, "A"],
	["カムイ", 3, "SH"],
	["リベルト", 3, "MD"],
	["グロム", 3, "A"],
	["サラ", 3, "SH"],
	["ティム", 3, "SH"],
	["クピピ", 3, "SH"],
	["ラグルス", 3, "A"],
	["ワッカ", 3, "A"],
	["カーミル", 3, "A"],
	["ガウ", 3, "A"],
	["常夏のリド", 3, "SH"],
	["ジーン", 3, "A"],
	["アーベル", 3, "A"],
	["サイス", 3, "A"],
	["ウルリカ", 3, "A"],
	["ヘレティック", 3, "MD"],
	["シエラ", 3, "A"],
	["ガイ", 3, "MD"],
	["ローレンス", 3, "SH"],
	["オヴェリア", 3, "SH"],
	["エル", 3, "MD"],
	["エイト", 3, "A"],
	["シンク", 3, "A"],
	["ファリス", 3, "SH"],
	["イングズ", 3, "MD"],
	["アルクゥ", 3, "MD"],
	["ジャック", 3, "SH"],
	["トレイ", 3, "A"],
	["エッジ", 3, "SH"],
	["ファング", 3, "A"],
	["サッズ", 3, "SH"],
	["ムスタディオ", 3, "A"],
	["アルマ", 3, "SH"],
	["リュドミラ", 3, "MD"],
	["シャルロット", 3, "MD"],
	["サラマンダー", 3, "MD"],
	["フライヤ", 3, "A"],
	["ハヤテ", 3, "A"],
	["ラクシャーサ", 3, "MD"],
	["テラ", 3, "MD"],
	["レナ", 3, "SH"],
	["ケフカ", 3, "MD"],
	["セリス", 3, "SH"],
	["ジルベール", 3, "SH"],
	["レオ", 3, "MD"],
	["ロック", 3, "A"],
	["アルテミオス", 3, "A"],
	["シャオ", 3, "A"],
	["ゴルベーザ", 3, "MD"],
	["ミユキ", 3, "A"],
	["メディウス", 3, "A"],
	["ローゼリア", 3, "SH"],
	["セリアス", 3, "SH"],
	["ディーン", 3, "A"],
	["ヴァン", 3, "SH"],
	["ジタン", 3, "A"],
	["フリオニール", 3, "A"],
	["バッツ", 3, "A"],
	["ティナ", 3, "MD"],
	["セシル", 3, "MD"],
	["くらやみのくも", 3, "A"],
	["クジャ", 3, "MD"],
	["エクスデス", 3, "MD"],
	["ガーランド", 3, "A"],
	["ラニ", 3, "MD"],
	["ガラフ", 3, "MD"],
	["ラッセル", 3, "A"],
	["ベディール", 3, "MD"],
	["ルナ", 3, "A"],
	["アンゼルム", 3, "MD"],
	["クライン", 3, "MD"],
	["カイエン", 3, "A"],
	["リディア", 3, "MD"],
	["シャントット", 3, "MD"],
	["フラン", 3, "SH"],
	["エドガー", 3, "A"],
	["カイン", 3, "A"],
	["クルル", 3, "MD"],
	["シャドウ", 3, "A"],
	["マッシュ", 3, "A"],
	["マリア", 3, "SH"],
	["パンネロ", 3, "SH"],
	["ビビ", 3, "MD"]
];

// ページ読み込み時に実行する関数
window.onload = onLoad;

////////////////////////////////////////////////////
//
// ロード時に実行
//
function onLoad() {
	document.getElementById("output3").innerHTML = "レーゲン(★5)、リュミヌイ(★4)、ザイル(★4)、ルシール(★3)";
}

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
// タイプ別ガチャ
//
function Execute3(shurui) {
	// DDLBの選択
	var idx_type = document.form1.type.selectedIndex;
	var sel_type_val = document.form1.type.options[idx_type].value;

	// 確率取得
	getKakuritsu();

	// 対象のキャラを抜き出す
	var character_type = [];
	for (var i = 0; i < character.length; i++) {
		if (character[i][2] == sel_type_val) {
			character_type.push(character[i]);
		}
	}

	// 対象キャラクターをカウント
	var rare = [0, 0, 0];
	for (var i = 0; i < character_type.length; i++) {
		if (character_type[i][1] == 1 || character_type[i][1] == 4) {
			rare[0]++;
		} else if (character_type[i][1] == 2 || character_type[i][1] == 5) {
			rare[1]++;
		} else if (character_type[i][1] == 3 || character_type[i][1] == 6) {
			rare[2]++;
		}
	}

	// 確率を対象のものに変更する
	pattern[0][0] = floatFormat(3 / rare[0], 5);
	pattern[1][1] = floatFormat(19 / rare[1], 5);
	pattern[2][2] = floatFormat(78 / rare[2], 5);
	pattern[3][0] = 0;
	pattern[4][1] = 0;
	pattern[5][2] = 0;

	pattern_11[0][0] = floatFormat(5 / rare[0], 5);
	pattern_11[1][1] = floatFormat(95 / rare[1], 5);
	pattern_11[3][0] = 0;
	pattern_11[4][1] = 0;

	// レアリティー
	var rare3 = new Array(character_type.length);
	var rare4 = new Array(character_type.length);
	var rare5 = new Array(character_type.length);
	var rare4_11 = new Array(character_type.length);
	var rare5_11 = new Array(character_type.length);
	// 出力文字
	var str = "";
	// カウント用に使用
	var cnt = 0;

	// ★4確定
	for (var i = 0; i < character_type.length; i++) {
		rare5_11[i] = cnt + Math.ceil(pattern_11[character_type[i][1] - 1][0] * 100000);
		cnt = rare5_11[i];
		rare4_11[i] = cnt + Math.ceil(pattern_11[character_type[i][1] - 1][1] * 100000);
		cnt = rare4_11[i];
	}

	cnt = 0;

	// 10連
	for (var i = 0; i < character_type.length; i++) {
		rare5[i] = cnt + Math.ceil(pattern[character_type[i][1] - 1][0] * 100000);
		cnt = rare5[i];
		rare4[i] = cnt + Math.ceil(pattern[character_type[i][1] - 1][1] * 100000);
		cnt = rare4[i];
		rare3[i] = cnt + Math.ceil(pattern[character_type[i][1] - 1][2] * 100000);
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
		for (var j = 0; j < character_type.length; j++) {
			if (gacha_rare4 <= rare5_11[j]) {
				// ★5(虹クリ)
				str += character_type[j][0] + "(★5)[★4確定]<br />";
				rare5cnt++;
				break;
			} else if (gacha_rare4 <= rare4_11[j]) {
				// ★4(金クリ)
				str += character_type[j][0] + "(★4)[★4確定]<br />";
				rare4cnt++;
				break;
			}
		}

		// 10連
		for (var i = 0; i < gacha.length; i++) {
			for (var j = 0; j < character_type.length; j++) {
				if (gacha[i] <= rare5[j]) {
					// ★5(虹クリ)
					str += character_type[j][0] + "(★5)<br />";
					rare5cnt++;
					break;
				} else if (gacha[i] <= rare4[j]) {
					// ★4(金クリ)
					str += character_type[j][0] + "(★4)<br />";
					rare4cnt++;
					break;
				} else if (gacha[i] <= rare3[j]) {
					// ★3(青クリ)
					str += character_type[j][0] + "(★3)<br />";
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
		for (var j = 0; j < character_type.length; j++) {
			if (gacha[0] <= rare5[j]) {
				// ★5(虹クリ)
				str += character_type[j][0] + "(★5)<br />";
				rare5cnt++;
				break;
			} else if (gacha[0] <= rare4[j]) {
				// ★4(金クリ)
				str += character_type[j][0] + "(★4)<br />";
				rare4cnt++;
				break;
			} else if (gacha[0] <= rare3[j]) {
				// ★3(青クリ)
				str += character_type[j][0] + "(★3)<br />";
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
// 共通関数
//

// 四捨五入
function floatFormat(number, n) {
	var _pow = Math.pow(10, n);

	return Math.floor(number * _pow) / _pow;
}

// 初期化
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