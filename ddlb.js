var ddlbChara = new Array();

for (var i = 0; i < character.length; i++) {
    ddlbChara.push(character[i][0]);
}

// �I�����X�g���쐬
createSelection(form1.elements['character'], "�y�L�����N�^�[�I���z", ddlbChara, ddlbChara);

////////////////////////////////////////////////////
//
// �I���{�b�N�X�ɑI������ǉ�����֐�
//      ����: ( select�I�u�W�F�N�g, value�l, text�l)
function addSelOption(selObj, val, txt) {
    selObj.length++;
    selObj.options[selObj.length - 1].value = val;
    selObj.options[selObj.length - 1].text = txt;
}
/////////////////////////////////////////////////////
//
//�@�I�����X�g�����֐� 
//      ����: ( select�I�u�W�F�N�g, ���o��, value�l�z�� , text�l�z�� )
//
function createSelection(selObj, midashi, aryValue, aryText) {
    selObj.length = 0;
    addSelOption(selObj, "", midashi);
    // ������
    for (var i = 0; i < aryValue.length; i++) {
        addSelOption(selObj, aryValue[i], aryText[i]);
    }
}