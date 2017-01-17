var ddlbChara = new Array();

for (var i = 0; i < character.length; i++) {
    ddlbChara.push(character[i][0]);
}

// 選択リストを作成
createSelection(form1.elements['character'], "【キャラクター選択】", ddlbChara, ddlbChara);

////////////////////////////////////////////////////
//
// 選択ボックスに選択肢を追加する関数
//      引数: ( selectオブジェクト, value値, text値)
function addSelOption(selObj, val, txt) {
    selObj.length++;
    selObj.options[selObj.length - 1].value = val;
    selObj.options[selObj.length - 1].text = txt;
}
/////////////////////////////////////////////////////
//
//　選択リストを作る関数 
//      引数: ( selectオブジェクト, 見出し, value値配列 , text値配列 )
//
function createSelection(selObj, midashi, aryValue, aryText) {
    selObj.length = 0;
    addSelOption(selObj, "", midashi);
    // 初期化
    for (var i = 0; i < aryValue.length; i++) {
        addSelOption(selObj, aryValue[i], aryText[i]);
    }
}