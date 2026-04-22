const updateDate = '04.22 13:00';
const userCnt = 661216;
const oathRate = "1 : 4.38 : 8.81";
const pledRate = "1 : 9.67 : 27.21";

const beginOathCnt = 84975;
const beginPledCnt = 577417;
const legacyCnt = 1039388;
const kirinCnt = 626497;
const starTotal = 1113757;
const starCnt = 725367;
//              조율자 550, 항아리552,        상던:557-0,   저울:554   환요:557-1,  레이드: 551,   초월 556,  무기고 555
const getData = [462521, (61956 + 1603), 52063, 35035, 22107, 23776, 1572, 1765];

const timeOathCnts = [
  {
    "h": 0,
    "cnt": 3369
  },
  {
    "h": 1,
    "cnt": 2370
  },
  {
    "h": 2,
    "cnt": 1517
  },
  {
    "h": 3,
    "cnt": 1053
  },
  {
    "h": 4,
    "cnt": 726
  },
  {
    "h": 5,
    "cnt": 606
  },
  {
    "h": 6,
    "cnt": 1668
  },
  {
    "h": 7,
    "cnt": 1896
  },
  {
    "h": 8,
    "cnt": 2061
  },
  {
    "h": 9,
    "cnt": 2521
  },
  {
    "h": 10,
    "cnt": 3640
  },
  {
    "h": 11,
    "cnt": 4185
  },
  {
    "h": 12,
    "cnt": 4380
  },
  {
    "h": 13,
    "cnt": 4401
  },
  {
    "h": 14,
    "cnt": 4524
  },
  {
    "h": 15,
    "cnt": 4638
  },
  {
    "h": 16,
    "cnt": 4522
  },
  {
    "h": 17,
    "cnt": 4343
  },
  {
    "h": 18,
    "cnt": 4573
  },
  {
    "h": 19,
    "cnt": 5505
  },
  {
    "h": 20,
    "cnt": 6090
  },
  {
    "h": 21,
    "cnt": 6181
  },
  {
    "h": 22,
    "cnt": 5433
  },
  {
    "h": 23,
    "cnt": 4578
  }
];

const timePledCnts = [
  {
    "h": 0,
    "cnt": 23806
  },
  {
    "h": 1,
    "cnt": 16282
  },
  {
    "h": 2,
    "cnt": 10807
  },
  {
    "h": 3,
    "cnt": 7441
  },
  {
    "h": 4,
    "cnt": 5154
  },
  {
    "h": 5,
    "cnt": 3872
  },
  {
    "h": 6,
    "cnt": 11643
  },
  {
    "h": 7,
    "cnt": 13091
  },
  {
    "h": 8,
    "cnt": 13820
  },
  {
    "h": 9,
    "cnt": 16917
  },
  {
    "h": 10,
    "cnt": 23466
  },
  {
    "h": 11,
    "cnt": 27752
  },
  {
    "h": 12,
    "cnt": 29775
  },
  {
    "h": 13,
    "cnt": 30383
  },
  {
    "h": 14,
    "cnt": 30730
  },
  {
    "h": 15,
    "cnt": 31614
  },
  {
    "h": 16,
    "cnt": 30695
  },
  {
    "h": 17,
    "cnt": 29767
  },
  {
    "h": 18,
    "cnt": 31399
  },
  {
    "h": 19,
    "cnt": 36686
  },
  {
    "h": 20,
    "cnt": 41244
  },
  {
    "h": 21,
    "cnt": 41515
  },
  {
    "h": 22,
    "cnt": 38059
  },
  {
    "h": 23,
    "cnt": 31007
  }
];

const beginCnts = [
  {
    "itemId": "b0c80cc630ca0d458eb9608774d47cd0",
    "oathYn": 0,
    "cnt": 49329,
    "itemName": "황금 : 태초의 광휘 결정"
  },
  {
    "itemId": "155b20fbde6a0e9590293d4babf27ef8",
    "oathYn": 0,
    "cnt": 49004,
    "itemName": "정화 : 태초의 광휘 결정"
  },
  {
    "itemId": "c78cae5798f4b3d8991323d6e9274463",
    "oathYn": 0,
    "cnt": 48114,
    "itemName": "여우 : 태초의 광휘 결정"
  },
  {
    "itemId": "04702c73a373a5f5c9a504f2123dc80b",
    "oathYn": 0,
    "cnt": 48078,
    "itemName": "무리 : 태초의 광휘 결정"
  },
  {
    "itemId": "5573cd49fa3b6248104b8b1319ef5671",
    "oathYn": 0,
    "cnt": 48011,
    "itemName": "용투 : 태초의 광휘 결정"
  },
  {
    "itemId": "5fe3c29985f15b1fdafd4c4d6a247839",
    "oathYn": 0,
    "cnt": 47995,
    "itemName": "그림자 : 태초의 광휘 결정"
  },
  {
    "itemId": "e48760bf96b6b9da793f5ee38733f523",
    "oathYn": 0,
    "cnt": 47993,
    "itemName": "자연 : 태초의 광휘 결정"
  },
  {
    "itemId": "aa2ff87fb95331f8c728f398d0e13ccd",
    "oathYn": 0,
    "cnt": 47990,
    "itemName": "페어리 : 태초의 광휘 결정"
  },
  {
    "itemId": "4f1a14f1124369922fa22bc45b768f74",
    "oathYn": 0,
    "cnt": 47808,
    "itemName": "행운 : 태초의 광휘 결정"
  },
  {
    "itemId": "e5d4086fb45b43861155b291e3c02a47",
    "oathYn": 0,
    "cnt": 47789,
    "itemName": "발키리 : 태초의 광휘 결정"
  },
  {
    "itemId": "9d7dece7ad3213817be4d371c86f488c",
    "oathYn": 0,
    "cnt": 47723,
    "itemName": "한계 : 태초의 광휘 결정"
  },
  {
    "itemId": "0b991785c50799890f4b1821c309d39c",
    "oathYn": 0,
    "cnt": 47583,
    "itemName": "마력 : 태초의 광휘 결정"
  }
];

const oath = [
  {
    "itemId": "d2dc93ebab431b6edd1680f87d118b59",
    "oathYn": 1,
    "cnt": 7815,
    "itemName": "찬란한 신념의 정화 서약"
  },
  {
    "itemId": "a41a6666654f4d5b4a29bde4a767a368",
    "oathYn": 1,
    "cnt": 7691,
    "itemName": "현실이 된 이상 속 황금 서약"
  },
  {
    "itemId": "97edf2846698bad4055330d5f7fe90b4",
    "oathYn": 1,
    "cnt": 7295,
    "itemName": "세계를 태우는 용투 서약"
  },
  {
    "itemId": "668569e5ec21cde2c90c573364ea167b",
    "oathYn": 1,
    "cnt": 7108,
    "itemName": "태초로 인도하는 페어리 서약"
  },
  {
    "itemId": "15a42c9cfd0709f609b22bb590f0a1e8",
    "oathYn": 1,
    "cnt": 7011,
    "itemName": "강림한 여우 서약"
  },
  {
    "itemId": "72adf78e645d9a821b9adcc98ef00044",
    "oathYn": 1,
    "cnt": 7008,
    "itemName": "태초의 어둠 속 그림자 서약"
  },
  {
    "itemId": "249bbdca841dbd7609887cd1051c5d32",
    "oathYn": 1,
    "cnt": 6992,
    "itemName": "근원에 닿은 자연 서약"
  },
  {
    "itemId": "a6e5b36dea755a4eea867623ea31083b",
    "oathYn": 1,
    "cnt": 6917,
    "itemName": "영원불변의 행운 서약"
  },
  {
    "itemId": "4b2e60a6f302a35f6fe2c2c8f01181c2",
    "oathYn": 1,
    "cnt": 6892,
    "itemName": "초월하는 한계 서약"
  },
  {
    "itemId": "b5031dbb3e68f781441515ae6d5889b5",
    "oathYn": 1,
    "cnt": 6842,
    "itemName": "태초에 고동치는 마력 서약"
  },
  {
    "itemId": "20103b50a325efab69497427d864aad8",
    "oathYn": 1,
    "cnt": 6722,
    "itemName": "태동하는 울림의 무리 서약"
  },
  {
    "itemId": "db5930dcaf3723eae9189222eb94b124",
    "oathYn": 1,
    "cnt": 6682,
    "itemName": "태초에서 현신한 발키리 서약"
  }
];

const channel10 = [
  {
    "channelName": "마계_7",
    "cnt": 3285
  },
  {
    "channelName": "천해천_7",
    "cnt": 2060
  },
  {
    "channelName": "마계_10",
    "cnt": 1627
  },
  {
    "channelName": "벨 마이어 공국_1",
    "cnt": 1564
  },
  {
    "channelName": "지벤 황국_7",
    "cnt": 1311
  },
  {
    "channelName": "천해천_1",
    "cnt": 947
  },
  {
    "channelName": "마계_8",
    "cnt": 801
  },
  {
    "channelName": "마계_9",
    "cnt": 741
  },
  {
    "channelName": "백해_10",
    "cnt": 732
  },
  {
    "channelName": "천해천_10",
    "cnt": 711
  },
  {
    "channelName": "백해_7",
    "cnt": 689
  },
  {
    "channelName": "중천_7",
    "cnt": 670
  },
  {
    "channelName": "천해천_44",
    "cnt": 604
  },
  {
    "channelName": "천해천_50",
    "cnt": 590
  },
  {
    "channelName": "마계_1",
    "cnt": 582
  },
  {
    "channelName": "천해천_4",
    "cnt": 572
  },
  {
    "channelName": "천해천_17",
    "cnt": 565
  },
  {
    "channelName": "천해천_11",
    "cnt": 520
  },
  {
    "channelName": "지벤 황국_10",
    "cnt": 513
  },
  {
    "channelName": "천해천_15",
    "cnt": 495
  },
  {
    "channelName": "마계_4",
    "cnt": 489
  },
  {
    "channelName": "천해천_2",
    "cnt": 486
  },
  {
    "channelName": "천해천_3",
    "cnt": 483
  },
  {
    "channelName": "중천_18",
    "cnt": 478
  },
  {
    "channelName": "천해천_47",
    "cnt": 458
  }
];