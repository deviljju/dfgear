const updateDate = '05.06 11:00';
const userCnt = 712190;
const oathRate = "1 : 4.39 : 8.65";
const pledRate = "1 : 9.79 : 27.33";

const beginOathCnt = 130811;
const beginPledCnt = 870518;
const legacyCnt = 1070639;
const kirinCnt = 645076;
const starTotal = 1148015;
const starCnt = 747668;
//              조율자 550, 항아리552,        상던:557-0,   저울:554   환요:557-1,  레이드: 551,   초월 556,  무기고 555
const getData = [675487, (99808 + 2373), 94798, 50352, 32596, 38266, 3432, 4220];

const timeOathCnts = [
  {
    "h": 0,
    "cnt": 5488
  },
  {
    "h": 1,
    "cnt": 3817
  },
  {
    "h": 2,
    "cnt": 2498
  },
  {
    "h": 3,
    "cnt": 1736
  },
  {
    "h": 4,
    "cnt": 1217
  },
  {
    "h": 5,
    "cnt": 927
  },
  {
    "h": 6,
    "cnt": 2469
  },
  {
    "h": 7,
    "cnt": 2768
  },
  {
    "h": 8,
    "cnt": 3063
  },
  {
    "h": 9,
    "cnt": 3803
  },
  {
    "h": 10,
    "cnt": 5412
  },
  {
    "h": 11,
    "cnt": 6374
  },
  {
    "h": 12,
    "cnt": 6612
  },
  {
    "h": 13,
    "cnt": 6696
  },
  {
    "h": 14,
    "cnt": 6926
  },
  {
    "h": 15,
    "cnt": 7115
  },
  {
    "h": 16,
    "cnt": 6954
  },
  {
    "h": 17,
    "cnt": 6672
  },
  {
    "h": 18,
    "cnt": 7091
  },
  {
    "h": 19,
    "cnt": 8431
  },
  {
    "h": 20,
    "cnt": 9293
  },
  {
    "h": 21,
    "cnt": 9567
  },
  {
    "h": 22,
    "cnt": 8508
  },
  {
    "h": 23,
    "cnt": 7217
  }
];

const timePledCnts = [
  {
    "h": 0,
    "cnt": 37485
  },
  {
    "h": 1,
    "cnt": 25944
  },
  {
    "h": 2,
    "cnt": 17468
  },
  {
    "h": 3,
    "cnt": 11810
  },
  {
    "h": 4,
    "cnt": 8317
  },
  {
    "h": 5,
    "cnt": 6284
  },
  {
    "h": 6,
    "cnt": 17435
  },
  {
    "h": 7,
    "cnt": 19068
  },
  {
    "h": 8,
    "cnt": 20259
  },
  {
    "h": 9,
    "cnt": 25331
  },
  {
    "h": 10,
    "cnt": 35143
  },
  {
    "h": 11,
    "cnt": 41165
  },
  {
    "h": 12,
    "cnt": 43587
  },
  {
    "h": 13,
    "cnt": 45036
  },
  {
    "h": 14,
    "cnt": 45563
  },
  {
    "h": 15,
    "cnt": 46960
  },
  {
    "h": 16,
    "cnt": 46026
  },
  {
    "h": 17,
    "cnt": 45043
  },
  {
    "h": 18,
    "cnt": 47416
  },
  {
    "h": 19,
    "cnt": 55130
  },
  {
    "h": 20,
    "cnt": 61772
  },
  {
    "h": 21,
    "cnt": 62239
  },
  {
    "h": 22,
    "cnt": 57788
  },
  {
    "h": 23,
    "cnt": 47851
  }
];

const beginCnts = [
  {
    "itemId": "b0c80cc630ca0d458eb9608774d47cd0",
    "oathYn": 0,
    "cnt": 75193,
    "itemName": "황금 : 태초의 광휘 결정"
  },
  {
    "itemId": "155b20fbde6a0e9590293d4babf27ef8",
    "oathYn": 0,
    "cnt": 74021,
    "itemName": "정화 : 태초의 광휘 결정"
  },
  {
    "itemId": "5573cd49fa3b6248104b8b1319ef5671",
    "oathYn": 0,
    "cnt": 72799,
    "itemName": "용투 : 태초의 광휘 결정"
  },
  {
    "itemId": "c78cae5798f4b3d8991323d6e9274463",
    "oathYn": 0,
    "cnt": 72292,
    "itemName": "여우 : 태초의 광휘 결정"
  },
  {
    "itemId": "04702c73a373a5f5c9a504f2123dc80b",
    "oathYn": 0,
    "cnt": 72260,
    "itemName": "무리 : 태초의 광휘 결정"
  },
  {
    "itemId": "e48760bf96b6b9da793f5ee38733f523",
    "oathYn": 0,
    "cnt": 72247,
    "itemName": "자연 : 태초의 광휘 결정"
  },
  {
    "itemId": "5fe3c29985f15b1fdafd4c4d6a247839",
    "oathYn": 0,
    "cnt": 72164,
    "itemName": "그림자 : 태초의 광휘 결정"
  },
  {
    "itemId": "aa2ff87fb95331f8c728f398d0e13ccd",
    "oathYn": 0,
    "cnt": 72094,
    "itemName": "페어리 : 태초의 광휘 결정"
  },
  {
    "itemId": "4f1a14f1124369922fa22bc45b768f74",
    "oathYn": 0,
    "cnt": 72058,
    "itemName": "행운 : 태초의 광휘 결정"
  },
  {
    "itemId": "e5d4086fb45b43861155b291e3c02a47",
    "oathYn": 0,
    "cnt": 71987,
    "itemName": "발키리 : 태초의 광휘 결정"
  },
  {
    "itemId": "9d7dece7ad3213817be4d371c86f488c",
    "oathYn": 0,
    "cnt": 71906,
    "itemName": "한계 : 태초의 광휘 결정"
  },
  {
    "itemId": "0b991785c50799890f4b1821c309d39c",
    "oathYn": 0,
    "cnt": 71497,
    "itemName": "마력 : 태초의 광휘 결정"
  }
];

const oath = [
  {
    "itemId": "d2dc93ebab431b6edd1680f87d118b59",
    "oathYn": 1,
    "cnt": 12265,
    "itemName": "찬란한 신념의 정화 서약"
  },
  {
    "itemId": "a41a6666654f4d5b4a29bde4a767a368",
    "oathYn": 1,
    "cnt": 12053,
    "itemName": "현실이 된 이상 속 황금 서약"
  },
  {
    "itemId": "97edf2846698bad4055330d5f7fe90b4",
    "oathYn": 1,
    "cnt": 11332,
    "itemName": "세계를 태우는 용투 서약"
  },
  {
    "itemId": "72adf78e645d9a821b9adcc98ef00044",
    "oathYn": 1,
    "cnt": 10748,
    "itemName": "태초의 어둠 속 그림자 서약"
  },
  {
    "itemId": "668569e5ec21cde2c90c573364ea167b",
    "oathYn": 1,
    "cnt": 10717,
    "itemName": "태초로 인도하는 페어리 서약"
  },
  {
    "itemId": "15a42c9cfd0709f609b22bb590f0a1e8",
    "oathYn": 1,
    "cnt": 10685,
    "itemName": "강림한 여우 서약"
  },
  {
    "itemId": "249bbdca841dbd7609887cd1051c5d32",
    "oathYn": 1,
    "cnt": 10681,
    "itemName": "근원에 닿은 자연 서약"
  },
  {
    "itemId": "a6e5b36dea755a4eea867623ea31083b",
    "oathYn": 1,
    "cnt": 10584,
    "itemName": "영원불변의 행운 서약"
  },
  {
    "itemId": "b5031dbb3e68f781441515ae6d5889b5",
    "oathYn": 1,
    "cnt": 10563,
    "itemName": "태초에 고동치는 마력 서약"
  },
  {
    "itemId": "4b2e60a6f302a35f6fe2c2c8f01181c2",
    "oathYn": 1,
    "cnt": 10475,
    "itemName": "초월하는 한계 서약"
  },
  {
    "itemId": "db5930dcaf3723eae9189222eb94b124",
    "oathYn": 1,
    "cnt": 10424,
    "itemName": "태초에서 현신한 발키리 서약"
  },
  {
    "itemId": "20103b50a325efab69497427d864aad8",
    "oathYn": 1,
    "cnt": 10284,
    "itemName": "태동하는 울림의 무리 서약"
  }
];

const channel10 = [
  {
    "channelName": "마계_7",
    "cnt": 4987
  },
  {
    "channelName": "천해천_7",
    "cnt": 3182
  },
  {
    "channelName": "마계_10",
    "cnt": 2313
  },
  {
    "channelName": "벨 마이어 공국_1",
    "cnt": 2178
  },
  {
    "channelName": "지벤 황국_7",
    "cnt": 1901
  },
  {
    "channelName": "천해천_1",
    "cnt": 1428
  },
  {
    "channelName": "마계_8",
    "cnt": 1132
  },
  {
    "channelName": "천해천_10",
    "cnt": 1099
  },
  {
    "channelName": "백해_10",
    "cnt": 1059
  },
  {
    "channelName": "마계_9",
    "cnt": 1039
  },
  {
    "channelName": "백해_7",
    "cnt": 1022
  },
  {
    "channelName": "천해천_44",
    "cnt": 909
  },
  {
    "channelName": "중천_7",
    "cnt": 903
  },
  {
    "channelName": "천해천_4",
    "cnt": 894
  },
  {
    "channelName": "천해천_50",
    "cnt": 842
  },
  {
    "channelName": "마계_1",
    "cnt": 823
  },
  {
    "channelName": "천해천_17",
    "cnt": 802
  },
  {
    "channelName": "천해천_11",
    "cnt": 779
  },
  {
    "channelName": "천해천_3",
    "cnt": 746
  },
  {
    "channelName": "지벤 황국_10",
    "cnt": 735
  },
  {
    "channelName": "마계_4",
    "cnt": 733
  },
  {
    "channelName": "천해천_15",
    "cnt": 721
  },
  {
    "channelName": "천해천_2",
    "cnt": 708
  },
  {
    "channelName": "천해천_18",
    "cnt": 663
  },
  {
    "channelName": "벨 마이어 공국_12",
    "cnt": 649
  }
];