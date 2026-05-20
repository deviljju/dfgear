const updateDate = '05.20 14:00';
const userCnt = 738150;
const oathRate = "1 : 4.34 : 8.49";
const pledRate = "1 : 9.98 : 27.33";

const beginOathCnt = 172712;
const beginPledCnt = 1125174;
const legacyCnt = 1094942;
const kirinCnt = 659472;
const starTotal = 1173226;
const starCnt = 763457;
//              조율자 550, 항아리552,        상던:557-0,   저울:554   환요:557-1,  레이드: 551,   초월 556,  무기고 555
const getData = [854013, (135046 + 3056), 138592, 62706, 40894, 51433, 5558, 6588];

const timeOathCnts = [
  {
    "h": 0,
    "cnt": 7548
  },
  {
    "h": 1,
    "cnt": 5202
  },
  {
    "h": 2,
    "cnt": 3497
  },
  {
    "h": 3,
    "cnt": 2404
  },
  {
    "h": 4,
    "cnt": 1703
  },
  {
    "h": 5,
    "cnt": 1303
  },
  {
    "h": 6,
    "cnt": 3152
  },
  {
    "h": 7,
    "cnt": 3548
  },
  {
    "h": 8,
    "cnt": 3887
  },
  {
    "h": 9,
    "cnt": 4854
  },
  {
    "h": 10,
    "cnt": 6950
  },
  {
    "h": 11,
    "cnt": 8199
  },
  {
    "h": 12,
    "cnt": 8577
  },
  {
    "h": 13,
    "cnt": 8740
  },
  {
    "h": 14,
    "cnt": 9032
  },
  {
    "h": 15,
    "cnt": 9296
  },
  {
    "h": 16,
    "cnt": 9096
  },
  {
    "h": 17,
    "cnt": 8718
  },
  {
    "h": 18,
    "cnt": 9318
  },
  {
    "h": 19,
    "cnt": 10971
  },
  {
    "h": 20,
    "cnt": 12365
  },
  {
    "h": 21,
    "cnt": 12739
  },
  {
    "h": 22,
    "cnt": 11514
  },
  {
    "h": 23,
    "cnt": 9959
  }
];

const timePledCnts = [
  {
    "h": 0,
    "cnt": 50325
  },
  {
    "h": 1,
    "cnt": 34741
  },
  {
    "h": 2,
    "cnt": 23756
  },
  {
    "h": 3,
    "cnt": 16114
  },
  {
    "h": 4,
    "cnt": 11383
  },
  {
    "h": 5,
    "cnt": 8656
  },
  {
    "h": 6,
    "cnt": 21990
  },
  {
    "h": 7,
    "cnt": 23980
  },
  {
    "h": 8,
    "cnt": 25613
  },
  {
    "h": 9,
    "cnt": 32112
  },
  {
    "h": 10,
    "cnt": 44836
  },
  {
    "h": 11,
    "cnt": 52237
  },
  {
    "h": 12,
    "cnt": 55336
  },
  {
    "h": 13,
    "cnt": 57291
  },
  {
    "h": 14,
    "cnt": 58286
  },
  {
    "h": 15,
    "cnt": 59966
  },
  {
    "h": 16,
    "cnt": 58841
  },
  {
    "h": 17,
    "cnt": 57600
  },
  {
    "h": 18,
    "cnt": 60868
  },
  {
    "h": 19,
    "cnt": 70854
  },
  {
    "h": 20,
    "cnt": 79500
  },
  {
    "h": 21,
    "cnt": 81238
  },
  {
    "h": 22,
    "cnt": 75765
  },
  {
    "h": 23,
    "cnt": 63530
  }
];

const oath = [
  {
    "itemId": "d2dc93ebab431b6edd1680f87d118b59",
    "oathYn": 1,
    "cnt": 16348,
    "itemName": "찬란한 신념의 정화 서약"
  },
  {
    "itemId": "a41a6666654f4d5b4a29bde4a767a368",
    "oathYn": 1,
    "cnt": 16123,
    "itemName": "현실이 된 이상 속 황금 서약"
  },
  {
    "itemId": "97edf2846698bad4055330d5f7fe90b4",
    "oathYn": 1,
    "cnt": 15007,
    "itemName": "세계를 태우는 용투 서약"
  },
  {
    "itemId": "249bbdca841dbd7609887cd1051c5d32",
    "oathYn": 1,
    "cnt": 14088,
    "itemName": "근원에 닿은 자연 서약"
  },
  {
    "itemId": "668569e5ec21cde2c90c573364ea167b",
    "oathYn": 1,
    "cnt": 14073,
    "itemName": "태초로 인도하는 페어리 서약"
  },
  {
    "itemId": "72adf78e645d9a821b9adcc98ef00044",
    "oathYn": 1,
    "cnt": 14045,
    "itemName": "태초의 어둠 속 그림자 서약"
  },
  {
    "itemId": "15a42c9cfd0709f609b22bb590f0a1e8",
    "oathYn": 1,
    "cnt": 14044,
    "itemName": "강림한 여우 서약"
  },
  {
    "itemId": "b5031dbb3e68f781441515ae6d5889b5",
    "oathYn": 1,
    "cnt": 13976,
    "itemName": "태초에 고동치는 마력 서약"
  },
  {
    "itemId": "a6e5b36dea755a4eea867623ea31083b",
    "oathYn": 1,
    "cnt": 13920,
    "itemName": "영원불변의 행운 서약"
  },
  {
    "itemId": "4b2e60a6f302a35f6fe2c2c8f01181c2",
    "oathYn": 1,
    "cnt": 13759,
    "itemName": "초월하는 한계 서약"
  },
  {
    "itemId": "db5930dcaf3723eae9189222eb94b124",
    "oathYn": 1,
    "cnt": 13692,
    "itemName": "태초에서 현신한 발키리 서약"
  },
  {
    "itemId": "20103b50a325efab69497427d864aad8",
    "oathYn": 1,
    "cnt": 13637,
    "itemName": "태동하는 울림의 무리 서약"
  }
];

const beginCnts = [
  {
    "itemId": "b0c80cc630ca0d458eb9608774d47cd0",
    "oathYn": 0,
    "cnt": 97883,
    "itemName": "황금 : 태초의 광휘 결정"
  },
  {
    "itemId": "155b20fbde6a0e9590293d4babf27ef8",
    "oathYn": 0,
    "cnt": 96067,
    "itemName": "정화 : 태초의 광휘 결정"
  },
  {
    "itemId": "5573cd49fa3b6248104b8b1319ef5671",
    "oathYn": 0,
    "cnt": 94136,
    "itemName": "용투 : 태초의 광휘 결정"
  },
  {
    "itemId": "c78cae5798f4b3d8991323d6e9274463",
    "oathYn": 0,
    "cnt": 93626,
    "itemName": "여우 : 태초의 광휘 결정"
  },
  {
    "itemId": "04702c73a373a5f5c9a504f2123dc80b",
    "oathYn": 0,
    "cnt": 93273,
    "itemName": "무리 : 태초의 광휘 결정"
  },
  {
    "itemId": "e48760bf96b6b9da793f5ee38733f523",
    "oathYn": 0,
    "cnt": 93095,
    "itemName": "자연 : 태초의 광휘 결정"
  },
  {
    "itemId": "e5d4086fb45b43861155b291e3c02a47",
    "oathYn": 0,
    "cnt": 93081,
    "itemName": "발키리 : 태초의 광휘 결정"
  },
  {
    "itemId": "5fe3c29985f15b1fdafd4c4d6a247839",
    "oathYn": 0,
    "cnt": 92971,
    "itemName": "그림자 : 태초의 광휘 결정"
  },
  {
    "itemId": "4f1a14f1124369922fa22bc45b768f74",
    "oathYn": 0,
    "cnt": 92938,
    "itemName": "행운 : 태초의 광휘 결정"
  },
  {
    "itemId": "9d7dece7ad3213817be4d371c86f488c",
    "oathYn": 0,
    "cnt": 92895,
    "itemName": "한계 : 태초의 광휘 결정"
  },
  {
    "itemId": "aa2ff87fb95331f8c728f398d0e13ccd",
    "oathYn": 0,
    "cnt": 92709,
    "itemName": "페어리 : 태초의 광휘 결정"
  },
  {
    "itemId": "0b991785c50799890f4b1821c309d39c",
    "oathYn": 0,
    "cnt": 92500,
    "itemName": "마력 : 태초의 광휘 결정"
  }
];

const channel10 = [
  {
    "channelName": "마계_7",
    "cnt": 6405
  },
  {
    "channelName": "천해천_7",
    "cnt": 4108
  },
  {
    "channelName": "마계_10",
    "cnt": 2829
  },
  {
    "channelName": "벨 마이어 공국_1",
    "cnt": 2738
  },
  {
    "channelName": "지벤 황국_7",
    "cnt": 2395
  },
  {
    "channelName": "천해천_1",
    "cnt": 1838
  },
  {
    "channelName": "마계_8",
    "cnt": 1409
  },
  {
    "channelName": "천해천_10",
    "cnt": 1379
  },
  {
    "channelName": "백해_10",
    "cnt": 1350
  },
  {
    "channelName": "백해_7",
    "cnt": 1294
  },
  {
    "channelName": "마계_9",
    "cnt": 1278
  },
  {
    "channelName": "천해천_4",
    "cnt": 1109
  },
  {
    "channelName": "천해천_44",
    "cnt": 1109
  },
  {
    "channelName": "중천_7",
    "cnt": 1072
  },
  {
    "channelName": "천해천_11",
    "cnt": 1023
  },
  {
    "channelName": "마계_1",
    "cnt": 1017
  },
  {
    "channelName": "천해천_17",
    "cnt": 1003
  },
  {
    "channelName": "천해천_50",
    "cnt": 998
  },
  {
    "channelName": "천해천_3",
    "cnt": 986
  },
  {
    "channelName": "마계_4",
    "cnt": 929
  },
  {
    "channelName": "지벤 황국_10",
    "cnt": 917
  },
  {
    "channelName": "천해천_15",
    "cnt": 907
  },
  {
    "channelName": "천해천_2",
    "cnt": 892
  },
  {
    "channelName": "천해천_18",
    "cnt": 857
  },
  {
    "channelName": "벨 마이어 공국_12",
    "cnt": 834
  }
];