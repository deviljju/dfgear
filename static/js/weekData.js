const updateDate = '05.14 17:00';
const userCnt = 728259;
const oathRate = "1 : 4.36 : 8.55";
const pledRate = "1 : 9.90 : 27.32";

const beginOathCnt = 155163;
const beginPledCnt = 1020172;
const legacyCnt = 1084887;
const kirinCnt = 653507;
const starTotal = 1163107;
const starCnt = 757125;
//              조율자 550, 항아리552,        상던:557-0,   저울:554   환요:557-1,  레이드: 551,   초월 556,  무기고 555
const getData = [781325, (120586 + 2802), 119511, 57612, 37589, 45645, 4726, 5542];

const timeOathCnts = [
  {
    "h": 0,
    "cnt": 6712
  },
  {
    "h": 1,
    "cnt": 4608
  },
  {
    "h": 2,
    "cnt": 3094
  },
  {
    "h": 3,
    "cnt": 2105
  },
  {
    "h": 4,
    "cnt": 1493
  },
  {
    "h": 5,
    "cnt": 1148
  },
  {
    "h": 6,
    "cnt": 2845
  },
  {
    "h": 7,
    "cnt": 3166
  },
  {
    "h": 8,
    "cnt": 3541
  },
  {
    "h": 9,
    "cnt": 4423
  },
  {
    "h": 10,
    "cnt": 6301
  },
  {
    "h": 11,
    "cnt": 7454
  },
  {
    "h": 12,
    "cnt": 7762
  },
  {
    "h": 13,
    "cnt": 7912
  },
  {
    "h": 14,
    "cnt": 8167
  },
  {
    "h": 15,
    "cnt": 8438
  },
  {
    "h": 16,
    "cnt": 8235
  },
  {
    "h": 17,
    "cnt": 7866
  },
  {
    "h": 18,
    "cnt": 8390
  },
  {
    "h": 19,
    "cnt": 9923
  },
  {
    "h": 20,
    "cnt": 11077
  },
  {
    "h": 21,
    "cnt": 11345
  },
  {
    "h": 22,
    "cnt": 10215
  },
  {
    "h": 23,
    "cnt": 8794
  }
];

const timePledCnts = [
  {
    "h": 0,
    "cnt": 45068
  },
  {
    "h": 1,
    "cnt": 31120
  },
  {
    "h": 2,
    "cnt": 21203
  },
  {
    "h": 3,
    "cnt": 14367
  },
  {
    "h": 4,
    "cnt": 10193
  },
  {
    "h": 5,
    "cnt": 7724
  },
  {
    "h": 6,
    "cnt": 20022
  },
  {
    "h": 7,
    "cnt": 21840
  },
  {
    "h": 8,
    "cnt": 23394
  },
  {
    "h": 9,
    "cnt": 29282
  },
  {
    "h": 10,
    "cnt": 40897
  },
  {
    "h": 11,
    "cnt": 47736
  },
  {
    "h": 12,
    "cnt": 50542
  },
  {
    "h": 13,
    "cnt": 52454
  },
  {
    "h": 14,
    "cnt": 53214
  },
  {
    "h": 15,
    "cnt": 54672
  },
  {
    "h": 16,
    "cnt": 53618
  },
  {
    "h": 17,
    "cnt": 52535
  },
  {
    "h": 18,
    "cnt": 55311
  },
  {
    "h": 19,
    "cnt": 64193
  },
  {
    "h": 20,
    "cnt": 72053
  },
  {
    "h": 21,
    "cnt": 73190
  },
  {
    "h": 22,
    "cnt": 68088
  },
  {
    "h": 23,
    "cnt": 57078
  }
];

const oath = [
  {
    "itemId": "d2dc93ebab431b6edd1680f87d118b59",
    "oathYn": 1,
    "cnt": 14627,
    "itemName": "찬란한 신념의 정화 서약"
  },
  {
    "itemId": "a41a6666654f4d5b4a29bde4a767a368",
    "oathYn": 1,
    "cnt": 14392,
    "itemName": "현실이 된 이상 속 황금 서약"
  },
  {
    "itemId": "97edf2846698bad4055330d5f7fe90b4",
    "oathYn": 1,
    "cnt": 13451,
    "itemName": "세계를 태우는 용투 서약"
  },
  {
    "itemId": "72adf78e645d9a821b9adcc98ef00044",
    "oathYn": 1,
    "cnt": 12703,
    "itemName": "태초의 어둠 속 그림자 서약"
  },
  {
    "itemId": "668569e5ec21cde2c90c573364ea167b",
    "oathYn": 1,
    "cnt": 12650,
    "itemName": "태초로 인도하는 페어리 서약"
  },
  {
    "itemId": "249bbdca841dbd7609887cd1051c5d32",
    "oathYn": 1,
    "cnt": 12648,
    "itemName": "근원에 닿은 자연 서약"
  },
  {
    "itemId": "15a42c9cfd0709f609b22bb590f0a1e8",
    "oathYn": 1,
    "cnt": 12646,
    "itemName": "강림한 여우 서약"
  },
  {
    "itemId": "b5031dbb3e68f781441515ae6d5889b5",
    "oathYn": 1,
    "cnt": 12543,
    "itemName": "태초에 고동치는 마력 서약"
  },
  {
    "itemId": "a6e5b36dea755a4eea867623ea31083b",
    "oathYn": 1,
    "cnt": 12528,
    "itemName": "영원불변의 행운 서약"
  },
  {
    "itemId": "4b2e60a6f302a35f6fe2c2c8f01181c2",
    "oathYn": 1,
    "cnt": 12380,
    "itemName": "초월하는 한계 서약"
  },
  {
    "itemId": "db5930dcaf3723eae9189222eb94b124",
    "oathYn": 1,
    "cnt": 12363,
    "itemName": "태초에서 현신한 발키리 서약"
  },
  {
    "itemId": "20103b50a325efab69497427d864aad8",
    "oathYn": 1,
    "cnt": 12232,
    "itemName": "태동하는 울림의 무리 서약"
  }
];

const beginCnts = [
  {
    "itemId": "b0c80cc630ca0d458eb9608774d47cd0",
    "oathYn": 0,
    "cnt": 88649,
    "itemName": "황금 : 태초의 광휘 결정"
  },
  {
    "itemId": "155b20fbde6a0e9590293d4babf27ef8",
    "oathYn": 0,
    "cnt": 87033,
    "itemName": "정화 : 태초의 광휘 결정"
  },
  {
    "itemId": "5573cd49fa3b6248104b8b1319ef5671",
    "oathYn": 0,
    "cnt": 85330,
    "itemName": "용투 : 태초의 광휘 결정"
  },
  {
    "itemId": "c78cae5798f4b3d8991323d6e9274463",
    "oathYn": 0,
    "cnt": 84850,
    "itemName": "여우 : 태초의 광휘 결정"
  },
  {
    "itemId": "04702c73a373a5f5c9a504f2123dc80b",
    "oathYn": 0,
    "cnt": 84598,
    "itemName": "무리 : 태초의 광휘 결정"
  },
  {
    "itemId": "e48760bf96b6b9da793f5ee38733f523",
    "oathYn": 0,
    "cnt": 84561,
    "itemName": "자연 : 태초의 광휘 결정"
  },
  {
    "itemId": "5fe3c29985f15b1fdafd4c4d6a247839",
    "oathYn": 0,
    "cnt": 84312,
    "itemName": "그림자 : 태초의 광휘 결정"
  },
  {
    "itemId": "4f1a14f1124369922fa22bc45b768f74",
    "oathYn": 0,
    "cnt": 84298,
    "itemName": "행운 : 태초의 광휘 결정"
  },
  {
    "itemId": "e5d4086fb45b43861155b291e3c02a47",
    "oathYn": 0,
    "cnt": 84275,
    "itemName": "발키리 : 태초의 광휘 결정"
  },
  {
    "itemId": "aa2ff87fb95331f8c728f398d0e13ccd",
    "oathYn": 0,
    "cnt": 84202,
    "itemName": "페어리 : 태초의 광휘 결정"
  },
  {
    "itemId": "9d7dece7ad3213817be4d371c86f488c",
    "oathYn": 0,
    "cnt": 84191,
    "itemName": "한계 : 태초의 광휘 결정"
  },
  {
    "itemId": "0b991785c50799890f4b1821c309d39c",
    "oathYn": 0,
    "cnt": 83873,
    "itemName": "마력 : 태초의 광휘 결정"
  }
];

const channel10 = [
  {
    "channelName": "마계_7",
    "cnt": 5836
  },
  {
    "channelName": "천해천_7",
    "cnt": 3755
  },
  {
    "channelName": "마계_10",
    "cnt": 2637
  },
  {
    "channelName": "벨 마이어 공국_1",
    "cnt": 2516
  },
  {
    "channelName": "지벤 황국_7",
    "cnt": 2201
  },
  {
    "channelName": "천해천_1",
    "cnt": 1669
  },
  {
    "channelName": "마계_8",
    "cnt": 1290
  },
  {
    "channelName": "천해천_10",
    "cnt": 1245
  },
  {
    "channelName": "백해_10",
    "cnt": 1226
  },
  {
    "channelName": "백해_7",
    "cnt": 1206
  },
  {
    "channelName": "마계_9",
    "cnt": 1191
  },
  {
    "channelName": "천해천_44",
    "cnt": 1032
  },
  {
    "channelName": "천해천_4",
    "cnt": 1029
  },
  {
    "channelName": "중천_7",
    "cnt": 1007
  },
  {
    "channelName": "마계_1",
    "cnt": 943
  },
  {
    "channelName": "천해천_11",
    "cnt": 927
  },
  {
    "channelName": "천해천_50",
    "cnt": 923
  },
  {
    "channelName": "천해천_17",
    "cnt": 919
  },
  {
    "channelName": "천해천_3",
    "cnt": 898
  },
  {
    "channelName": "마계_4",
    "cnt": 857
  },
  {
    "channelName": "지벤 황국_10",
    "cnt": 833
  },
  {
    "channelName": "천해천_2",
    "cnt": 829
  },
  {
    "channelName": "천해천_15",
    "cnt": 827
  },
  {
    "channelName": "천해천_18",
    "cnt": 798
  },
  {
    "channelName": "벨 마이어 공국_12",
    "cnt": 754
  }
];