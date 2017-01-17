// ����s�X
var lapis = 0;

// ���z
var yen = 0;
var yenPerLapis = 8800 / 12500;

// �K�`����
var gachaCnt = 0;

// �m���p�^�[���e�[�u��
var pattern = new Array();
var pattern_11 = new Array();

// �K�`������
var rireki = "";

// �L�����N�^�[
// �V�K�ɑ������L�������ォ�瑝�₷
// [����,�p�^�[��,�]��] �̏��ԂŊi�[
// ���F��5�X�^�[�g�A���F��6�o���A���F��5�o�������S�~�A�~�F�S�~�A���F���ɖ���

// ========== �p�^�[�� ==========
// 1:��5�`��6
// 2:��4�`��6�A��4�`��5
// 3:��3�`��5�A��3�`��6�A��3�`��4
// 4:PU�Ώ�(��5�`��6)
// 5:PU�Ώ�(��4�`��6�A��4�`��5)
// 6:PU�Ώ�(��3�`��5)
var character = [
	["�A���J", 4],
	["�j�b�N�X", 1],
	["�m�N�e�B�X", 1],
	["���P�̃��F���A�X", 1],
	["���܂˂����m", 1],
	["��ł̃��F���A�X", 1],
	["���΂̃��F���A�X", 1],
	["�R�m�f�B���[�^", 1],
	["�b�������U", 1],
	["�v���b�V��", 1],
	["���l��", 1],
	["�o���t���A", 1],
	["�t�H�[����", 1],
	["�g�����X�e�B�i", 1],
	["�u���̖��l�t�B�[�i", 1],
	["�e�B�[�_", 1],
	["���B���w����", 1],
	["����", 1],
	["�A�C���[��", 1],
	["�}���[", 1],
	["�c��", 1],
	["�I�������h�D", 1],
	["���l�t�B�[�i", 1],
	["�N�C�[��", 1],
	["�M���K���b�V��", 1],
	["���[�l�X", 1],
	["�G�[�X", 1],
	["�Í��R�m�Z�V��", 1],
	["�f�B���[�^", 1],
	["�����U", 1],
	["���C�g�j���O", 1],
	["�S�E�P��", 5],
	["�V�����B�A", 5],
	["�N���E", 2],
	["�O���E�J", 2],
	["�A�E��", 2],
	["���؂̃��F���A�X", 2],
	["�V���̃��F���A�X", 2],
	["�G���A", 2],
	["�f�b�V��", 2],
	["���y�̃��F���A�X", 2],
	["�r�N�g���A", 2],
	["�I�[����", 2],
	["�����A�h�[��", 2],
	["�E�F���C", 2],
	["�u����", 2],
	["�w���i", 2],
	["�A�[�V�F", 2],
	["���X��", 2],
	["�����b�N", 2],
	["�A�����A", 2],
	["�C���Y", 2],
	["�Z�b�c�@�[", 2],
	["���̃t�B�[�i", 2],
	["�O���C�X", 2],
	["�L���O", 2],
	["�\�[", 2],
	["�V���C��", 2],
	["���I���n���g", 2],
	["�\���C��", 2],
	["�����J", 2],
	["�i�C��", 2],
	["�����Z�f�X", 2],
	["���t�B�A", 2],
	["�Z�u��", 2],
	["���[�U", 2],
	["�X�m�E", 2],
	["�z�[�v", 2],
	["���@�j��", 2],
	["�K�t�K���I��", 2],
	["�A�O���A�X", 2],
	["�K�[�l�b�g", 2],
	["�`�d��", 2],
	["���̐�m", 2],
	["����", 6],
	["�J���C", 6],
	["���x���g", 3],
	["�O����", 3],
	["�T��", 3],
	["�e�B��", 3],
	["�N�s�s", 3],
	["���O���X", 3],
	["���b�J", 3],
	["�J�[�~��", 3],
	["�K�E", 3],
	["��Ẵ��h", 3],
	["�W�[��", 3],
	["�A�[�x��", 3],
	["�T�C�X", 3],
	["�E�����J", 3],
	["�w���e�B�b�N", 3],
	["�V�G��", 3],
	["�K�C", 3],
	["���[�����X", 3],
	["�I���F���A", 3],
	["�G��", 3],
	["�G�C�g", 3],
	["�V���N", 3],
	["�t�@���X", 3],
	["�C���O�Y", 3],
	["�A���N�D", 3],
	["�W���b�N", 3],
	["�g���C", 3],
	["�G�b�W", 3],
	["�t�@���O", 3],
	["�T�b�Y", 3],
	["���X�^�f�B�I", 3],
	["�A���}", 3],
	["�����h�~��", 3],
	["�V�������b�g", 3],
	["�T���}���_�[", 3],
	["�t���C��", 3],
	["�n���e", 3],
	["���N�V���[�T", 3],
	["�e��", 3],
	["���i", 3],
	["�P�t�J", 3],
	["�Z���X", 3],
	["�W���x�[��", 3],
	["���I", 3],
	["���b�N", 3],
	["�A���e�~�I�X", 3],
	["�V���I", 3],
	["�S���x�[�U", 3],
	["�~���L", 3],
	["���f�B�E�X", 3],
	["���[�[���A", 3],
	["�Z���A�X", 3],
	["�f�B�[��", 3],
	["���@��", 3],
	["�W�^��", 3],
	["�t���I�j�[��", 3],
	["�o�b�c", 3],
	["�e�B�i", 3],
	["�Z�V��", 3],
	["�����݂̂���", 3],
	["�N�W��", 3],
	["�G�N�X�f�X", 3],
	["�K�[�����h", 3],
	["���j", 3],
	["�K���t", 3],
	["���b�Z��", 3],
	["�x�f�B�[��", 3],
	["���i", 3],
	["�A���[����", 3],
	["�N���C��", 3],
	["�J�C�G��", 3],
	["���f�B�A", 3],
	["�V�����g�b�g", 3],
	["�t����", 3],
	["�G�h�K�[", 3],
	["�J�C��", 3],
	["�N����", 3],
	["�V���h�E", 3],
	["�}�b�V��", 3],
	["�}���A", 3],
	["�p���l��", 3],
	["�r�r", 3]
];

////////////////////////////////////////////////////
//
// �K�`�����s���C��
//
function Execute(shurui) {
	// �m���擾
	if (shurui == 1 || shurui == 2) {
		getKakuritsu();
	} else if (shurui == 3 || shurui == 4) {
		getKakuritsuPickUp();
	}

	// ���A���e�B�[
	var rare3 = new Array(character.length);
	var rare4 = new Array(character.length);
	var rare5 = new Array(character.length);
	var rare4_11 = new Array(character.length);
	var rare5_11 = new Array(character.length);
	// �o�͕���
	var str = "";
	// �J�E���g�p�Ɏg�p
	var cnt = 0;

	// ��4�m��
	for (var i = 0; i < character.length; i++) {
		rare5_11[i] = cnt + Math.ceil(pattern_11[character[i][1] - 1][0] * 100000);
		cnt = rare5_11[i];
		rare4_11[i] = cnt + Math.ceil(pattern_11[character[i][1] - 1][1] * 100000);
		cnt = rare4_11[i];
	}

	cnt = 0;

	// 10�A
	for (var i = 0; i < character.length; i++) {
		rare5[i] = cnt + Math.ceil(pattern[character[i][1] - 1][0] * 100000);
		cnt = rare5[i];
		rare4[i] = cnt + Math.ceil(pattern[character[i][1] - 1][1] * 100000);
		cnt = rare4[i];
		rare3[i] = cnt + Math.ceil(pattern[character[i][1] - 1][2] * 100000);
		cnt = rare3[i];
	}

	// �K�`���������_���ɑI��
	// ��4�m��
	var gacha_rare4 = Math.ceil((Math.random() * ((rare4_11[rare4_11.length - 1] + 1) - 1)) + 1);

	// 10�A
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

	// ���A���e�B�[�̃J�E���g
	var rare3cnt = 0;
	var rare4cnt = 0;
	var rare5cnt = 0;

	// �����_���ŎZ�o�����l����ǂ̃L�����N�^�[���o�������m��
	if (shurui == 1 || shurui == 3) {
		// 11�A�K�`��
		// ��4�m��
		for (var j = 0; j < character.length; j++) {
			if (gacha_rare4 <= rare5_11[j]) {
				// ��5(���N��)
				str += character[j][0] + "(��5)[��4�m��]<br />";
				rare5cnt++;
				break;
			} else if (gacha_rare4 <= rare4_11[j]) {
				// ��4(���N��)
				str += character[j][0] + "(��4)[��4�m��]<br />";
				rare4cnt++;
				break;
			}
		}

		// 10�A
		for (var i = 0; i < gacha.length; i++) {
			for (var j = 0; j < character.length; j++) {
				if (gacha[i] <= rare5[j]) {
					// ��5(���N��)
					str += character[j][0] + "(��5)<br />";
					rare5cnt++;
					break;
				} else if (gacha[i] <= rare4[j]) {
					// ��4(���N��)
					str += character[j][0] + "(��4)<br />";
					rare4cnt++;
					break;
				} else if (gacha[i] <= rare3[j]) {
					// ��3(�N��)
					str += character[j][0] + "(��3)<br />";
					rare3cnt++;
					break;
				}
			}
		}
		// ����s�X�����Z
		lapis += 5000;
	} else if (shurui == 2 || shurui == 4) {
		// �P���K�`��
		// gacha[0]�݂̂�ΏۂƂ���B
		for (var j = 0; j < character.length; j++) {
			if (gacha[0] <= rare5[j]) {
				// ��5(���N��)
				str += character[j][0] + "(��5)<br />";
				rare5cnt++;
				break;
			} else if (gacha[0] <= rare4[j]) {
				// ��4(���N��)
				str += character[j][0] + "(��4)<br />";
				rare4cnt++;
				break;
			} else if (gacha[0] <= rare3[j]) {
				// ��3(�N��)
				str += character[j][0] + "(��3)<br />";
				rare3cnt++;
				break;
			}
		}
		// ����s�X�����Z
		lapis += 500;
	}

	// �����ɒǉ�
	rireki += str;
	// ���z�����Z
	yen = floatFormat(lapis * yenPerLapis, 0);
	// �K�`���񐔂����Z
	gachaCnt++;

	// ���ʕ�����쐬
	str = "---------- �K�`������ ----------<br />" + str;
	str += "<br />";
	str += "��3�F" + rare3cnt + "<br />";
	str += "��4�F" + rare4cnt + "<br />";
	str += "��5�F" + rare5cnt + "<br />";
	str += "����s�X�F" + lapis + "(" + gachaCnt + "��)<br />";
	str += "������z�F" + yen + "�~";

	if (rare5cnt >= 1) {
		// ��5���o����A�A���[�g��\������
		var alertStr = "���߂łƂ��N�|��\n��5��" + rare5cnt + "�o���N�|";
		alert(alertStr);
	}

	// �K�`���̌��ʂ��o��
	document.getElementById("output1").innerHTML = str;
	document.getElementById("output2").innerHTML = rireki;
}
////////////////////////////////////////////////////
//
// �o��܂ň����K�`��
//
function Execute2() {
	// DDLB�̑I��
	var idx_character = document.form1.character.selectedIndex;
	var idx_shurui = document.form1.shurui.selectedIndex;

	// DDLB�̒l�ƍ���
	var sel_character_val = document.form1.character.options[idx_character].value;
	var sel_character_txt = document.form1.character.options[idx_character].text;
	var sel_shurui_val = document.form1.shurui.options[idx_shurui].value;
	var sel_shurui_txt = document.form1.shurui.options[idx_shurui].text;

	// �����I������Ă��Ȃ��ꍇ�́A���s���Ȃ�
	if (sel_character_val == "" || sel_shurui_val == "") {
		document.getElementById("output1").innerHTML = "�I�����ڂ������Ă�N�|";
		document.getElementById("output2").innerHTML = "";
		return;
	}

	// �o�͕���
	var str = "";

	// �m���擾
	if (sel_shurui_val == "normal") {
		getKakuritsu();
	} else if (sel_shurui_val == "pickup") {
		getKakuritsuPickUp();
	}

	// ���A���e�B�[
	var rare3 = new Array(character.length);
	var rare4 = new Array(character.length);
	var rare5 = new Array(character.length);

	// �J�E���g�p�Ɏg�p
	var cnt = 0;

	// �L�����N�^�[�̕��z
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

	// �o��܂ŉ񂷈ׁA�������[�v�ɂ���
	for (var i = 1; ; i++) {
		// �K�`���������_���ɑI��
		gacha = Math.ceil((Math.random() * ((rare3[rare3.length - 1] + 1) - 1)) + 1);

		// �����o�����H
		for (var j = 0; j < character.length; j++) {
			if (gacha <= rare5[j]) {
				// ��5(���N��)
				getChara = character[j][0];
				break;
			} else if (gacha <= rare4[j]) {
				// ��4(���N��)
				getChara = character[j][0];
				break;
			} else if (gacha <= rare3[j]) {
				// ��3(�N��)
				getChara = character[j][0];
				break;
			}
		}

		// �o���L�����N�^�[���J�E���g����
		for (var j = 0; j < getRireki.length; j++) {
			if (getChara == getRireki[j][0]) {
				getRireki[j][1]++;
			}
		}

		// �w�肵���L�����N�^�[���o���烋�[�v�𔲂���
		if (getChara == sel_character_txt) {
			str += getChara + "��" + i + "��ڂŏo���N�|��"
			break;
		}
	}

	// ����
	rireki = "";
	rireki += "����"
	rireki += "<table>";
	for (var i = 0; i < getRireki.length; i++) {
		rireki += "<tr>";
		rireki += "<td>" + getRireki[i][0] + "</td>"
		rireki += "<td>" + getRireki[i][1] + "</td>";
		rireki += "</tr>"
	}
	rireki += "</table>";

	// �K�`���̌��ʂ��o��
	document.getElementById("output1").innerHTML = str;
	document.getElementById("output2").innerHTML = rireki;
}
////////////////////////////////////////////////////
//
// ������
//
function init() {
	// �ϐ��̏�����
	lapis = 0;		// ����s�X
	yen = 0;		// ���z
	gachaCnt = 0;	// �K�`����
	rireki = "";	// ����

	// �\���̈�̏�����
	document.getElementById("output1").innerHTML = "";
	document.getElementById("output2").innerHTML = "";
}
////////////////////////////////////////////////////
//
// �f�o�b�O�p
//
function debug() {
}

// �l�̌ܓ�
function floatFormat(number, n) {
	var _pow = Math.pow(10, n);

	return Math.round(number * _pow) / _pow;
}