function getKakuritsu() {
	// 確率(10連部分)
	// [★5,★4,★3] の順番
	pattern = [
		[0.0303 , 0      , 0      ],	// (1)★5～★6
		[0      , 0.43181, 0      ],	// (2)★4～★6、★4～★5
		[0      , 0      , 0.94117],	// (3)★3～★5、★3～★6、★3～★4
		[0.0303 , 0      , 0      ],	// (4)ピックアップ対象(★5～★6)
		[0      , 0.43181, 0      ],	// (5)ピックアップ対象(★4～★6、★4～★5)
		[0      , 0      , 0.94117]		// (6)ピックアップ対象(★3～★5)
	];

	// 確率(★4確定分)
	// [★5,★4] の順番
	pattern_11 = [
		[0.15151, 0      ],			// (1)★5～★6
		[0      , 2.15909],			// (2)★4～★6、★4～★5
		[0      , 0      ],			// (3)ダミー
		[0.15151, 0      ],			// (4)ピックアップ対象(★5～★6)
		[0      , 2.15909],			// (5)ピックアップ対象(★4～★6、★4～★5)
		[0      , 0      ]			// (6)ダミー
	];
}