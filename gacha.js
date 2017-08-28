function getKakuritsu() {
	// 確率(10連部分)
	// [★5,★4,★3] の順番
	pattern = [
		[0.05377, 0      , 0      ],	// (1)★5～★6
		[0      , 0.31147, 0      ],	// (2)★4～★6、★4～★5
		[0      , 0      , 0.8125 ],	// (3)★3～★5、★3～★6、★3～★4
		[0.05377, 0      , 0      ],	// (4)ピックアップ対象(★5～★6)
		[0      , 0.31147, 0      ],	// (5)ピックアップ対象(★4～★6、★4～★5)
		[0      , 0      , 0.8125 ]		// (6)ピックアップ対象(★3～★5)
	];

	// 確率(★4確定分)
	// [★5,★4] の順番
	pattern_11 = [
		[0.08928, 0      ],			// (1)★5～★6
		[0      , 1.55737],			// (2)★4～★6、★4～★5
		[0      , 0      ],			// (3)ダミー
		[0.08928, 0      ],			// (4)ピックアップ対象(★5～★6)
		[0      , 1.55737],			// (5)ピックアップ対象(★4～★6、★4～★5)
		[0      , 0      ]			// (6)ダミー
	];
}