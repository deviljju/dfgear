const updateDate = '04.14 10:00';
const userCnt = 601769; // 1810908
const oathRate = "1 : 4.28 : 8.88";
const pledRate = "1 : 9.66 : 27.21";

const beginOathCnt = 59716;
const beginPledCnt = 410775;
const legacyCnt = 1017276;
const kirinCnt = 613357;
const starTotal = 1088179;
const starCnt = 708111;
//              조율자 550, 항아리552,        상던:557-0,   저울:554   환요:557-1,  레이드: 551,   초월 556,  무기고 555
const getData = [332024,  (44826 + 1118),   34679,        25577,    15251,      15266,        986,      764];

const timeOathCnts = [
  {
    "h": 0,
    "cnt": 2318
  },
  {
    "h": 1,
    "cnt": 1657
  },
  {
    "h": 2,
    "cnt": 1047
  },
  {
    "h": 3,
    "cnt": 708
  },
  {
    "h": 4,
    "cnt": 490
  },
  {
    "h": 5,
    "cnt": 404
  },
  {
    "h": 6,
    "cnt": 1158
  },
  {
    "h": 7,
    "cnt": 1374
  },
  {
    "h": 8,
    "cnt": 1432
  },
  {
    "h": 9,
    "cnt": 1798
  },
  {
    "h": 10,
    "cnt": 2554
  },
  {
    "h": 11,
    "cnt": 2969
  },
  {
    "h": 12,
    "cnt": 3179
  },
  {
    "h": 13,
    "cnt": 3162
  },
  {
    "h": 14,
    "cnt": 3203
  },
  {
    "h": 15,
    "cnt": 3355
  },
  {
    "h": 16,
    "cnt": 3193
  },
  {
    "h": 17,
    "cnt": 3029
  },
  {
    "h": 18,
    "cnt": 3176
  },
  {
    "h": 19,
    "cnt": 3883
  },
  {
    "h": 20,
    "cnt": 4173
  },
  {
    "h": 21,
    "cnt": 4270
  },
  {
    "h": 22,
    "cnt": 3749
  },
  {
    "h": 23,
    "cnt": 3182
  }
];

const timePledCnts = [
  {
    "h": 0,
    "cnt": 16760
  },
  {
    "h": 1,
    "cnt": 11302
  },
  {
    "h": 2,
    "cnt": 7528
  },
  {
    "h": 3,
    "cnt": 5053
  },
  {
    "h": 4,
    "cnt": 3529
  },
  {
    "h": 5,
    "cnt": 2569
  },
  {
    "h": 6,
    "cnt": 8126
  },
  {
    "h": 7,
    "cnt": 9394
  },
  {
    "h": 8,
    "cnt": 9943
  },
  {
    "h": 9,
    "cnt": 12058
  },
  {
    "h": 10,
    "cnt": 16813
  },
  {
    "h": 11,
    "cnt": 20085
  },
  {
    "h": 12,
    "cnt": 21594
  },
  {
    "h": 13,
    "cnt": 22008
  },
  {
    "h": 14,
    "cnt": 22340
  },
  {
    "h": 15,
    "cnt": 22961
  },
  {
    "h": 16,
    "cnt": 21983
  },
  {
    "h": 17,
    "cnt": 21171
  },
  {
    "h": 18,
    "cnt": 22386
  },
  {
    "h": 19,
    "cnt": 25843
  },
  {
    "h": 20,
    "cnt": 29010
  },
  {
    "h": 21,
    "cnt": 29263
  },
  {
    "h": 22,
    "cnt": 26688
  },
  {
    "h": 23,
    "cnt": 21704
  }
];

const beginCnts = [
  {
    "itemId": "155b20fbde6a0e9590293d4babf27ef8",
    "oathYn": 0,
    "cnt": 34893,
    "itemName": "정화 : 태초의 광휘 결정"
  },
  {
    "itemId": "b0c80cc630ca0d458eb9608774d47cd0",
    "oathYn": 0,
    "cnt": 34892,
    "itemName": "황금 : 태초의 광휘 결정"
  },
  {
    "itemId": "04702c73a373a5f5c9a504f2123dc80b",
    "oathYn": 0,
    "cnt": 34369,
    "itemName": "무리 : 태초의 광휘 결정"
  },
  {
    "itemId": "e48760bf96b6b9da793f5ee38733f523",
    "oathYn": 0,
    "cnt": 34301,
    "itemName": "자연 : 태초의 광휘 결정"
  },
  {
    "itemId": "c78cae5798f4b3d8991323d6e9274463",
    "oathYn": 0,
    "cnt": 34256,
    "itemName": "여우 : 태초의 광휘 결정"
  },
  {
    "itemId": "9d7dece7ad3213817be4d371c86f488c",
    "oathYn": 0,
    "cnt": 34116,
    "itemName": "한계 : 태초의 광휘 결정"
  },
  {
    "itemId": "aa2ff87fb95331f8c728f398d0e13ccd",
    "oathYn": 0,
    "cnt": 34110,
    "itemName": "페어리 : 태초의 광휘 결정"
  },
  {
    "itemId": "5fe3c29985f15b1fdafd4c4d6a247839",
    "oathYn": 0,
    "cnt": 34086,
    "itemName": "그림자 : 태초의 광휘 결정"
  },
  {
    "itemId": "4f1a14f1124369922fa22bc45b768f74",
    "oathYn": 0,
    "cnt": 34064,
    "itemName": "행운 : 태초의 광휘 결정"
  },
  {
    "itemId": "5573cd49fa3b6248104b8b1319ef5671",
    "oathYn": 0,
    "cnt": 34062,
    "itemName": "용투 : 태초의 광휘 결정"
  },
  {
    "itemId": "e5d4086fb45b43861155b291e3c02a47",
    "oathYn": 0,
    "cnt": 34045,
    "itemName": "발키리 : 태초의 광휘 결정"
  },
  {
    "itemId": "0b991785c50799890f4b1821c309d39c",
    "oathYn": 0,
    "cnt": 33959,
    "itemName": "마력 : 태초의 광휘 결정"
  }
];

const oath = [
  {
    "itemId": "d2dc93ebab431b6edd1680f87d118b59",
    "oathYn": 1,
    "cnt": 5400,
    "itemName": "찬란한 신념의 정화 서약"
  },
  {
    "itemId": "a41a6666654f4d5b4a29bde4a767a368",
    "oathYn": 1,
    "cnt": 5342,
    "itemName": "현실이 된 이상 속 황금 서약"
  },
  {
    "itemId": "97edf2846698bad4055330d5f7fe90b4",
    "oathYn": 1,
    "cnt": 5122,
    "itemName": "세계를 태우는 용투 서약"
  },
  {
    "itemId": "249bbdca841dbd7609887cd1051c5d32",
    "oathYn": 1,
    "cnt": 5029,
    "itemName": "근원에 닿은 자연 서약"
  },
  {
    "itemId": "668569e5ec21cde2c90c573364ea167b",
    "oathYn": 1,
    "cnt": 4977,
    "itemName": "태초로 인도하는 페어리 서약"
  },
  {
    "itemId": "72adf78e645d9a821b9adcc98ef00044",
    "oathYn": 1,
    "cnt": 4974,
    "itemName": "태초의 어둠 속 그림자 서약"
  },
  {
    "itemId": "15a42c9cfd0709f609b22bb590f0a1e8",
    "oathYn": 1,
    "cnt": 4958,
    "itemName": "강림한 여우 서약"
  },
  {
    "itemId": "b5031dbb3e68f781441515ae6d5889b5",
    "oathYn": 1,
    "cnt": 4890,
    "itemName": "태초에 고동치는 마력 서약"
  },
  {
    "itemId": "a6e5b36dea755a4eea867623ea31083b",
    "oathYn": 1,
    "cnt": 4864,
    "itemName": "영원불변의 행운 서약"
  },
  {
    "itemId": "4b2e60a6f302a35f6fe2c2c8f01181c2",
    "oathYn": 1,
    "cnt": 4819,
    "itemName": "초월하는 한계 서약"
  },
  {
    "itemId": "db5930dcaf3723eae9189222eb94b124",
    "oathYn": 1,
    "cnt": 4741,
    "itemName": "태초에서 현신한 발키리 서약"
  },
  {
    "itemId": "20103b50a325efab69497427d864aad8",
    "oathYn": 1,
    "cnt": 4671,
    "itemName": "태동하는 울림의 무리 서약"
  }
];

const channel10 = [
  {
    "channelName": "마계_7",
    "cnt": 2244
  },
  {
    "channelName": "천해천_7",
    "cnt": 1385
  },
  {
    "channelName": "마계_10",
    "cnt": 1188
  },
  {
    "channelName": "벨 마이어 공국_1",
    "cnt": 1124
  },
  {
    "channelName": "지벤 황국_7",
    "cnt": 972
  },
  {
    "channelName": "천해천_1",
    "cnt": 673
  },
  {
    "channelName": "마계_8",
    "cnt": 575
  },
  {
    "channelName": "마계_9",
    "cnt": 549
  },
  {
    "channelName": "백해_10",
    "cnt": 544
  },
  {
    "channelName": "중천_7",
    "cnt": 528
  },
  {
    "channelName": "백해_7",
    "cnt": 500
  },
  {
    "channelName": "천해천_10",
    "cnt": 492
  },
  {
    "channelName": "천해천_44",
    "cnt": 455
  },
  {
    "channelName": "천해천_50",
    "cnt": 432
  },
  {
    "channelName": "마계_1",
    "cnt": 424
  },
  {
    "channelName": "천해천_17",
    "cnt": 410
  },
  {
    "channelName": "천해천_4",
    "cnt": 387
  },
  {
    "channelName": "중천_18",
    "cnt": 379
  },
  {
    "channelName": "지벤 황국_10",
    "cnt": 365
  },
  {
    "channelName": "천해천_15",
    "cnt": 364
  },
  {
    "channelName": "천해천_2",
    "cnt": 354
  },
  {
    "channelName": "천해천_11",
    "cnt": 348
  },
  {
    "channelName": "천해천_3",
    "cnt": 338
  },
  {
    "channelName": "마계_4",
    "cnt": 330
  },
  {
    "channelName": "천해천_47",
    "cnt": 324
  }
];