function getKakuritsuPickUp() {
	// 確率(10連部分)
	// [★5,★4,★3] の順番
	pattern = [
		[0.01388, 0      , 0      ],	// (1)★5～★6
		[0      , 0.29687, 0      ],	// (2)★4～★6、★4～★5
		[0      , 0      , 0.67415],	// (3)★3～★5、★3～★6、★3～★4
		[0.25   , 0      , 0      ],	// (4)ピックアップ対象(★5～★6)
		[0      , 4.75   , 0      ],	// (5)ピックアップ対象(★4～★6、★4～★5)
		[0      , 0      , 20     ]		// (6)ピックアップ対象(★3～★5)
	];

	// 確率(★4確定分)
	// [★5,★4] の順番
	pattern_11 = [
		[0.03472, 0      ],			// (1)★5～★6
		[0      , 0.98958],			// (2)★4～★6、★4～★5
		[0      , 0      ],			// (3)ダミー
		[1.875  , 0      ],			// (4)ピックアップ対象(★5～★6)
		[0      , 47.5   ],			// (5)ピックアップ対象(★4～★6、★4～★5)
		[0      , 0      ]			// (6)ダミー
	];
}