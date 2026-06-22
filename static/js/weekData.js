const updateDate = '06.22 17:45';
const userCnt = 809940;
const oathRate = "1 : 3.94 : 7.46";
const pledRate = "1 : 10.25 : 27.10";

const beginOathCnt = 307372;
const beginPledCnt = 1801730;
const legacyCnt = 1155949;
const kirinCnt = 695691;
const starTotal = 1241002;
const starCnt = 807811;

const code550 = 1306281;
const code557_0 = 250227;
const code552_0 = 276604;
const code554 = 96205;
const code551 = 86637;
const code557_1 = 57313;
const code555 = 16252;
const code556 = 13506;
const code552_1 = 6080;

//              조율자 550, 항아리552,        상던:557-0,   저울:554   환요:557-1,  레이드: 551,   초월 556,  무기고 555
const getData = [code550, (code552_0 + code552_1), code557_0, code554, code557_1, code551, code556, code555];

const timeOathCnts = [
  {
    "h": 0,
    "cnt": 14192
  },
  {
    "h": 1,
    "cnt": 9815
  },
  {
    "h": 2,
    "cnt": 6463
  },
  {
    "h": 3,
    "cnt": 4429
  },
  {
    "h": 4,
    "cnt": 3115
  },
  {
    "h": 5,
    "cnt": 2361
  },
  {
    "h": 6,
    "cnt": 5264
  },
  {
    "h": 7,
    "cnt": 5787
  },
  {
    "h": 8,
    "cnt": 6468
  },
  {
    "h": 9,
    "cnt": 8161
  },
  {
    "h": 10,
    "cnt": 12200
  },
  {
    "h": 11,
    "cnt": 14389
  },
  {
    "h": 12,
    "cnt": 15073
  },
  {
    "h": 13,
    "cnt": 15333
  },
  {
    "h": 14,
    "cnt": 15925
  },
  {
    "h": 15,
    "cnt": 16384
  },
  {
    "h": 16,
    "cnt": 15940
  },
  {
    "h": 17,
    "cnt": 15471
  },
  {
    "h": 18,
    "cnt": 16541
  },
  {
    "h": 19,
    "cnt": 19332
  },
  {
    "h": 20,
    "cnt": 22125
  },
  {
    "h": 21,
    "cnt": 23008
  },
  {
    "h": 22,
    "cnt": 21098
  },
  {
    "h": 23,
    "cnt": 18379
  }
];

const timePledCnts = [
  {
    "h": 0,
    "cnt": 83544
  },
  {
    "h": 1,
    "cnt": 58301
  },
  {
    "h": 2,
    "cnt": 39728
  },
  {
    "h": 3,
    "cnt": 27232
  },
  {
    "h": 4,
    "cnt": 19363
  },
  {
    "h": 5,
    "cnt": 14906
  },
  {
    "h": 6,
    "cnt": 33833
  },
  {
    "h": 7,
    "cnt": 36343
  },
  {
    "h": 8,
    "cnt": 39490
  },
  {
    "h": 9,
    "cnt": 49922
  },
  {
    "h": 10,
    "cnt": 70813
  },
  {
    "h": 11,
    "cnt": 81852
  },
  {
    "h": 12,
    "cnt": 86576
  },
  {
    "h": 13,
    "cnt": 89752
  },
  {
    "h": 14,
    "cnt": 91653
  },
  {
    "h": 15,
    "cnt": 94915
  },
  {
    "h": 16,
    "cnt": 92990
  },
  {
    "h": 17,
    "cnt": 91089
  },
  {
    "h": 18,
    "cnt": 96732
  },
  {
    "h": 19,
    "cnt": 112860
  },
  {
    "h": 20,
    "cnt": 127963
  },
  {
    "h": 21,
    "cnt": 132129
  },
  {
    "h": 22,
    "cnt": 123735
  },
  {
    "h": 23,
    "cnt": 105712
  }
];

const oath = [
  {
    "itemId": "a41a6666654f4d5b4a29bde4a767a368",
    "oathYn": 1,
    "cnt": 30128,
    "itemName": "현실이 된 이상 속 황금 서약"
  },
  {
    "itemId": "d2dc93ebab431b6edd1680f87d118b59",
    "oathYn": 1,
    "cnt": 29901,
    "itemName": "찬란한 신념의 정화 서약"
  },
  {
    "itemId": "97edf2846698bad4055330d5f7fe90b4",
    "oathYn": 1,
    "cnt": 27370,
    "itemName": "세계를 태우는 용투 서약"
  },
  {
    "itemId": "15a42c9cfd0709f609b22bb590f0a1e8",
    "oathYn": 1,
    "cnt": 24879,
    "itemName": "강림한 여우 서약"
  },
  {
    "itemId": "b5031dbb3e68f781441515ae6d5889b5",
    "oathYn": 1,
    "cnt": 24627,
    "itemName": "태초에 고동치는 마력 서약"
  },
  {
    "itemId": "249bbdca841dbd7609887cd1051c5d32",
    "oathYn": 1,
    "cnt": 24535,
    "itemName": "근원에 닿은 자연 서약"
  },
  {
    "itemId": "72adf78e645d9a821b9adcc98ef00044",
    "oathYn": 1,
    "cnt": 24465,
    "itemName": "태초의 어둠 속 그림자 서약"
  },
  {
    "itemId": "a6e5b36dea755a4eea867623ea31083b",
    "oathYn": 1,
    "cnt": 24411,
    "itemName": "영원불변의 행운 서약"
  },
  {
    "itemId": "668569e5ec21cde2c90c573364ea167b",
    "oathYn": 1,
    "cnt": 24339,
    "itemName": "태초로 인도하는 페어리 서약"
  },
  {
    "itemId": "4b2e60a6f302a35f6fe2c2c8f01181c2",
    "oathYn": 1,
    "cnt": 24269,
    "itemName": "초월하는 한계 서약"
  },
  {
    "itemId": "db5930dcaf3723eae9189222eb94b124",
    "oathYn": 1,
    "cnt": 24241,
    "itemName": "태초에서 현신한 발키리 서약"
  },
  {
    "itemId": "20103b50a325efab69497427d864aad8",
    "oathYn": 1,
    "cnt": 24207,
    "itemName": "태동하는 울림의 무리 서약"
  }
];

const beginCnts = [
  {
    "itemId": "b0c80cc630ca0d458eb9608774d47cd0",
    "oathYn": 0,
    "cnt": 157963,
    "itemName": "황금 : 태초의 광휘 결정"
  },
  {
    "itemId": "155b20fbde6a0e9590293d4babf27ef8",
    "oathYn": 0,
    "cnt": 154420,
    "itemName": "정화 : 태초의 광휘 결정"
  },
  {
    "itemId": "5573cd49fa3b6248104b8b1319ef5671",
    "oathYn": 0,
    "cnt": 152139,
    "itemName": "용투 : 태초의 광휘 결정"
  },
  {
    "itemId": "c78cae5798f4b3d8991323d6e9274463",
    "oathYn": 0,
    "cnt": 150024,
    "itemName": "여우 : 태초의 광휘 결정"
  },
  {
    "itemId": "4f1a14f1124369922fa22bc45b768f74",
    "oathYn": 0,
    "cnt": 148764,
    "itemName": "행운 : 태초의 광휘 결정"
  },
  {
    "itemId": "5fe3c29985f15b1fdafd4c4d6a247839",
    "oathYn": 0,
    "cnt": 148737,
    "itemName": "그림자 : 태초의 광휘 결정"
  },
  {
    "itemId": "9d7dece7ad3213817be4d371c86f488c",
    "oathYn": 0,
    "cnt": 148705,
    "itemName": "한계 : 태초의 광휘 결정"
  },
  {
    "itemId": "e48760bf96b6b9da793f5ee38733f523",
    "oathYn": 0,
    "cnt": 148662,
    "itemName": "자연 : 태초의 광휘 결정"
  },
  {
    "itemId": "04702c73a373a5f5c9a504f2123dc80b",
    "oathYn": 0,
    "cnt": 148644,
    "itemName": "무리 : 태초의 광휘 결정"
  },
  {
    "itemId": "e5d4086fb45b43861155b291e3c02a47",
    "oathYn": 0,
    "cnt": 148554,
    "itemName": "발키리 : 태초의 광휘 결정"
  },
  {
    "itemId": "0b991785c50799890f4b1821c309d39c",
    "oathYn": 0,
    "cnt": 147582,
    "itemName": "마력 : 태초의 광휘 결정"
  },
  {
    "itemId": "aa2ff87fb95331f8c728f398d0e13ccd",
    "oathYn": 0,
    "cnt": 147536,
    "itemName": "페어리 : 태초의 광휘 결정"
  }
];

const channel10 = [
  {
    "channelName": "마계_7",
    "cnt": 10296
  },
  {
    "channelName": "천해천_7",
    "cnt": 6203
  },
  {
    "channelName": "벨 마이어 공국_1",
    "cnt": 4281
  },
  {
    "channelName": "마계_10",
    "cnt": 4132
  },
  {
    "channelName": "지벤 황국_7",
    "cnt": 3563
  },
  {
    "channelName": "천해천_1",
    "cnt": 2947
  },
  {
    "channelName": "마계_8",
    "cnt": 2144
  },
  {
    "channelName": "천해천_10",
    "cnt": 2104
  },
  {
    "channelName": "백해_10",
    "cnt": 2053
  },
  {
    "channelName": "백해_7",
    "cnt": 1940
  },
  {
    "channelName": "마계_9",
    "cnt": 1895
  },
  {
    "channelName": "천해천_4",
    "cnt": 1688
  },
  {
    "channelName": "천해천_44",
    "cnt": 1586
  },
  {
    "channelName": "천해천_11",
    "cnt": 1512
  },
  {
    "channelName": "중천_7",
    "cnt": 1511
  },
  {
    "channelName": "마계_1",
    "cnt": 1500
  },
  {
    "channelName": "천해천_17",
    "cnt": 1488
  },
  {
    "channelName": "천해천_3",
    "cnt": 1475
  },
  {
    "channelName": "천해천_15",
    "cnt": 1417
  },
  {
    "channelName": "천해천_50",
    "cnt": 1410
  },
  {
    "channelName": "마계_4",
    "cnt": 1402
  },
  {
    "channelName": "지벤 황국_10",
    "cnt": 1387
  },
  {
    "channelName": "천해천_2",
    "cnt": 1317
  },
  {
    "channelName": "벨 마이어 공국_10",
    "cnt": 1291
  },
  {
    "channelName": "천해천_18",
    "cnt": 1279
  }
];