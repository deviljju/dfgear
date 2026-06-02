const updateDate = '06.02 13:45';
const userCnt = 762501;
const oathRate = "1 : 4.18 : 8.11";
const pledRate = "1 : 10.15 : 27.27";

const beginOathCnt = 221087;
const beginPledCnt = 1377463;
const legacyCnt = 1118353;
const kirinCnt = 673302;
const starTotal = 1197254;
const starCnt = 778486;

const code550 = 1025283;
const code557_0 = 184114;
const code552_0 = 180747;
const code554 = 73316;
const code551 = 65258;
const code557_1 = 47938;
const code555 = 9907;
const code556 = 7901;
const code552_1 = 4086;

//              조율자 550, 항아리552,        상던:557-0,   저울:554   환요:557-1,  레이드: 551,   초월 556,  무기고 555
const getData = [code550, (code552_0 + code552_1), code557_0, code554, code557_1, code551, code556, code555];

const timeOathCnts = [
  {
    "h": 0,
    "cnt": 9899
  },
  {
    "h": 1,
    "cnt": 6853
  },
  {
    "h": 2,
    "cnt": 4548
  },
  {
    "h": 3,
    "cnt": 3117
  },
  {
    "h": 4,
    "cnt": 2213
  },
  {
    "h": 5,
    "cnt": 1682
  },
  {
    "h": 6,
    "cnt": 3907
  },
  {
    "h": 7,
    "cnt": 4352
  },
  {
    "h": 8,
    "cnt": 4837
  },
  {
    "h": 9,
    "cnt": 6037
  },
  {
    "h": 10,
    "cnt": 8834
  },
  {
    "h": 11,
    "cnt": 10410
  },
  {
    "h": 12,
    "cnt": 10950
  },
  {
    "h": 13,
    "cnt": 11185
  },
  {
    "h": 14,
    "cnt": 11455
  },
  {
    "h": 15,
    "cnt": 11821
  },
  {
    "h": 16,
    "cnt": 11612
  },
  {
    "h": 17,
    "cnt": 11185
  },
  {
    "h": 18,
    "cnt": 11944
  },
  {
    "h": 19,
    "cnt": 13927
  },
  {
    "h": 20,
    "cnt": 15831
  },
  {
    "h": 21,
    "cnt": 16419
  },
  {
    "h": 22,
    "cnt": 14927
  },
  {
    "h": 23,
    "cnt": 13012
  }
];

const timePledCnts = [
  {
    "h": 0,
    "cnt": 62848
  },
  {
    "h": 1,
    "cnt": 43606
  },
  {
    "h": 2,
    "cnt": 29789
  },
  {
    "h": 3,
    "cnt": 20288
  },
  {
    "h": 4,
    "cnt": 14518
  },
  {
    "h": 5,
    "cnt": 11068
  },
  {
    "h": 6,
    "cnt": 26330
  },
  {
    "h": 7,
    "cnt": 28584
  },
  {
    "h": 8,
    "cnt": 30833
  },
  {
    "h": 9,
    "cnt": 38799
  },
  {
    "h": 10,
    "cnt": 54522
  },
  {
    "h": 11,
    "cnt": 63076
  },
  {
    "h": 12,
    "cnt": 66923
  },
  {
    "h": 13,
    "cnt": 69383
  },
  {
    "h": 14,
    "cnt": 70620
  },
  {
    "h": 15,
    "cnt": 72941
  },
  {
    "h": 16,
    "cnt": 71442
  },
  {
    "h": 17,
    "cnt": 70140
  },
  {
    "h": 18,
    "cnt": 74238
  },
  {
    "h": 19,
    "cnt": 86571
  },
  {
    "h": 20,
    "cnt": 97549
  },
  {
    "h": 21,
    "cnt": 100060
  },
  {
    "h": 22,
    "cnt": 93707
  },
  {
    "h": 23,
    "cnt": 79303
  }
];

const oath = [
  {
    "itemId": "d2dc93ebab431b6edd1680f87d118b59",
    "oathYn": 1,
    "cnt": 21170,
    "itemName": "찬란한 신념의 정화 서약"
  },
  {
    "itemId": "a41a6666654f4d5b4a29bde4a767a368",
    "oathYn": 1,
    "cnt": 21130,
    "itemName": "현실이 된 이상 속 황금 서약"
  },
  {
    "itemId": "97edf2846698bad4055330d5f7fe90b4",
    "oathYn": 1,
    "cnt": 19364,
    "itemName": "세계를 태우는 용투 서약"
  },
  {
    "itemId": "249bbdca841dbd7609887cd1051c5d32",
    "oathYn": 1,
    "cnt": 17912,
    "itemName": "근원에 닿은 자연 서약"
  },
  {
    "itemId": "15a42c9cfd0709f609b22bb590f0a1e8",
    "oathYn": 1,
    "cnt": 17908,
    "itemName": "강림한 여우 서약"
  },
  {
    "itemId": "b5031dbb3e68f781441515ae6d5889b5",
    "oathYn": 1,
    "cnt": 17880,
    "itemName": "태초에 고동치는 마력 서약"
  },
  {
    "itemId": "72adf78e645d9a821b9adcc98ef00044",
    "oathYn": 1,
    "cnt": 17770,
    "itemName": "태초의 어둠 속 그림자 서약"
  },
  {
    "itemId": "a6e5b36dea755a4eea867623ea31083b",
    "oathYn": 1,
    "cnt": 17753,
    "itemName": "영원불변의 행운 서약"
  },
  {
    "itemId": "668569e5ec21cde2c90c573364ea167b",
    "oathYn": 1,
    "cnt": 17737,
    "itemName": "태초로 인도하는 페어리 서약"
  },
  {
    "itemId": "db5930dcaf3723eae9189222eb94b124",
    "oathYn": 1,
    "cnt": 17553,
    "itemName": "태초에서 현신한 발키리 서약"
  },
  {
    "itemId": "4b2e60a6f302a35f6fe2c2c8f01181c2",
    "oathYn": 1,
    "cnt": 17537,
    "itemName": "초월하는 한계 서약"
  },
  {
    "itemId": "20103b50a325efab69497427d864aad8",
    "oathYn": 1,
    "cnt": 17373,
    "itemName": "태동하는 울림의 무리 서약"
  }
];

const beginCnts = [
  {
    "itemId": "b0c80cc630ca0d458eb9608774d47cd0",
    "oathYn": 0,
    "cnt": 120297,
    "itemName": "황금 : 태초의 광휘 결정"
  },
  {
    "itemId": "155b20fbde6a0e9590293d4babf27ef8",
    "oathYn": 0,
    "cnt": 117506,
    "itemName": "정화 : 태초의 광휘 결정"
  },
  {
    "itemId": "5573cd49fa3b6248104b8b1319ef5671",
    "oathYn": 0,
    "cnt": 115321,
    "itemName": "용투 : 태초의 광휘 결정"
  },
  {
    "itemId": "c78cae5798f4b3d8991323d6e9274463",
    "oathYn": 0,
    "cnt": 114697,
    "itemName": "여우 : 태초의 광휘 결정"
  },
  {
    "itemId": "e48760bf96b6b9da793f5ee38733f523",
    "oathYn": 0,
    "cnt": 114051,
    "itemName": "자연 : 태초의 광휘 결정"
  },
  {
    "itemId": "04702c73a373a5f5c9a504f2123dc80b",
    "oathYn": 0,
    "cnt": 114041,
    "itemName": "무리 : 태초의 광휘 결정"
  },
  {
    "itemId": "e5d4086fb45b43861155b291e3c02a47",
    "oathYn": 0,
    "cnt": 113842,
    "itemName": "발키리 : 태초의 광휘 결정"
  },
  {
    "itemId": "4f1a14f1124369922fa22bc45b768f74",
    "oathYn": 0,
    "cnt": 113827,
    "itemName": "행운 : 태초의 광휘 결정"
  },
  {
    "itemId": "9d7dece7ad3213817be4d371c86f488c",
    "oathYn": 0,
    "cnt": 113777,
    "itemName": "한계 : 태초의 광휘 결정"
  },
  {
    "itemId": "5fe3c29985f15b1fdafd4c4d6a247839",
    "oathYn": 0,
    "cnt": 113775,
    "itemName": "그림자 : 태초의 광휘 결정"
  },
  {
    "itemId": "0b991785c50799890f4b1821c309d39c",
    "oathYn": 0,
    "cnt": 113210,
    "itemName": "마력 : 태초의 광휘 결정"
  },
  {
    "itemId": "aa2ff87fb95331f8c728f398d0e13ccd",
    "oathYn": 0,
    "cnt": 113119,
    "itemName": "페어리 : 태초의 광휘 결정"
  }
];

const channel10 = [
  {
    "channelName": "마계_7",
    "cnt": 7898
  },
  {
    "channelName": "천해천_7",
    "cnt": 4856
  },
  {
    "channelName": "마계_10",
    "cnt": 3307
  },
  {
    "channelName": "벨 마이어 공국_1",
    "cnt": 3296
  },
  {
    "channelName": "지벤 황국_7",
    "cnt": 2853
  },
  {
    "channelName": "천해천_1",
    "cnt": 2244
  },
  {
    "channelName": "마계_8",
    "cnt": 1704
  },
  {
    "channelName": "천해천_10",
    "cnt": 1653
  },
  {
    "channelName": "백해_10",
    "cnt": 1603
  },
  {
    "channelName": "백해_7",
    "cnt": 1552
  },
  {
    "channelName": "마계_9",
    "cnt": 1519
  },
  {
    "channelName": "천해천_4",
    "cnt": 1317
  },
  {
    "channelName": "천해천_44",
    "cnt": 1290
  },
  {
    "channelName": "중천_7",
    "cnt": 1227
  },
  {
    "channelName": "천해천_11",
    "cnt": 1218
  },
  {
    "channelName": "천해천_17",
    "cnt": 1192
  },
  {
    "channelName": "천해천_3",
    "cnt": 1185
  },
  {
    "channelName": "마계_1",
    "cnt": 1179
  },
  {
    "channelName": "천해천_50",
    "cnt": 1150
  },
  {
    "channelName": "마계_4",
    "cnt": 1114
  },
  {
    "channelName": "지벤 황국_10",
    "cnt": 1084
  },
  {
    "channelName": "천해천_15",
    "cnt": 1078
  },
  {
    "channelName": "천해천_2",
    "cnt": 1044
  },
  {
    "channelName": "천해천_18",
    "cnt": 1017
  },
  {
    "channelName": "벨 마이어 공국_10",
    "cnt": 997
  }
];