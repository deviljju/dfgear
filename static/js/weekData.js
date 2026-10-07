const updateDate = '10.08 00:30';
const userCnt = 855921;
const oathRate = "1 : 3.28 : 5.41";
const pledRate = "1 : 10.29 : 26.94";

const beginOathCnt = 594104;
const beginPledCnt = 2959337;
const legacyCnt = 1247476;
const kirinCnt = 751550;
const starTotal = 1325930;
const starCnt = 858366;

const code550 = 1955193;
const code557_0 = 415542;
const code552_0 = 688696;
const code554 = 148633;
const code551 = 164871;
const code557_1 = 75873;
const code555 = 52242;
const code556 = 29966;
const code552_1 = 22482;

//              조율자 550, 항아리552,        상던:557-0,   저울:554   환요:557-1,  레이드: 551,   초월 556,  무기고 555
const getData = [code550, (code552_0 + code552_1), code557_0, code554, code557_1, code551, code556, code555];

const timeOathCnts = [
    {
      "h": 0,
      "cnt": 28105
    },
    {
      "h": 1,
      "cnt": 19740
    },
    {
      "h": 2,
      "cnt": 13368
    },
    {
      "h": 3,
      "cnt": 8882
    },
    {
      "h": 4,
      "cnt": 6447
    },
    {
      "h": 5,
      "cnt": 4820
    },
    {
      "h": 6,
      "cnt": 9441
    },
    {
      "h": 7,
      "cnt": 10422
    },
    {
      "h": 8,
      "cnt": 11739
    },
    {
      "h": 9,
      "cnt": 14815
    },
    {
      "h": 10,
      "cnt": 23422
    },
    {
      "h": 11,
      "cnt": 27327
    },
    {
      "h": 12,
      "cnt": 28872
    },
    {
      "h": 13,
      "cnt": 29522
    },
    {
      "h": 14,
      "cnt": 30127
    },
    {
      "h": 15,
      "cnt": 30864
    },
    {
      "h": 16,
      "cnt": 30609
    },
    {
      "h": 17,
      "cnt": 29518
    },
    {
      "h": 18,
      "cnt": 31854
    },
    {
      "h": 19,
      "cnt": 37528
    },
    {
      "h": 20,
      "cnt": 43031
    },
    {
      "h": 21,
      "cnt": 45002
    },
    {
      "h": 22,
      "cnt": 42152
    },
    {
      "h": 23,
      "cnt": 36401
    }
  ];

const timePledCnts = [
    {
      "h": 0,
      "cnt": 141240
    },
    {
      "h": 1,
      "cnt": 99144
    },
    {
      "h": 2,
      "cnt": 68303
    },
    {
      "h": 3,
      "cnt": 47122
    },
    {
      "h": 4,
      "cnt": 33822
    },
    {
      "h": 5,
      "cnt": 26473
    },
    {
      "h": 6,
      "cnt": 50965
    },
    {
      "h": 7,
      "cnt": 55807
    },
    {
      "h": 8,
      "cnt": 61796
    },
    {
      "h": 9,
      "cnt": 78630
    },
    {
      "h": 10,
      "cnt": 115274
    },
    {
      "h": 11,
      "cnt": 132177
    },
    {
      "h": 12,
      "cnt": 139793
    },
    {
      "h": 13,
      "cnt": 145124
    },
    {
      "h": 14,
      "cnt": 149133
    },
    {
      "h": 15,
      "cnt": 153580
    },
    {
      "h": 16,
      "cnt": 151655
    },
    {
      "h": 17,
      "cnt": 148717
    },
    {
      "h": 18,
      "cnt": 158213
    },
    {
      "h": 19,
      "cnt": 185711
    },
    {
      "h": 20,
      "cnt": 211121
    },
    {
      "h": 21,
      "cnt": 219751
    },
    {
      "h": 22,
      "cnt": 207365
    },
    {
      "h": 23,
      "cnt": 178166
    }
  ];

const oath = [
    {
      "itemId": "d2dc93ebab431b6edd1680f87d118b59",
      "oathYn": 1,
      "cnt": 61911,
      "itemName": "찬란한 신념의 정화 서약"
    },
    {
      "itemId": "a41a6666654f4d5b4a29bde4a767a368",
      "oathYn": 1,
      "cnt": 59683,
      "itemName": "현실이 된 이상 속 황금 서약"
    },
    {
      "itemId": "97edf2846698bad4055330d5f7fe90b4",
      "oathYn": 1,
      "cnt": 56514,
      "itemName": "세계를 태우는 용투 서약"
    },
    {
      "itemId": "249bbdca841dbd7609887cd1051c5d32",
      "oathYn": 1,
      "cnt": 47491,
      "itemName": "근원에 닿은 자연 서약"
    },
    {
      "itemId": "15a42c9cfd0709f609b22bb590f0a1e8",
      "oathYn": 1,
      "cnt": 47291,
      "itemName": "강림한 여우 서약"
    },
    {
      "itemId": "72adf78e645d9a821b9adcc98ef00044",
      "oathYn": 1,
      "cnt": 46794,
      "itemName": "태초의 어둠 속 그림자 서약"
    },
    {
      "itemId": "b5031dbb3e68f781441515ae6d5889b5",
      "oathYn": 1,
      "cnt": 46768,
      "itemName": "태초에 고동치는 마력 서약"
    },
    {
      "itemId": "4b2e60a6f302a35f6fe2c2c8f01181c2",
      "oathYn": 1,
      "cnt": 46480,
      "itemName": "초월하는 한계 서약"
    },
    {
      "itemId": "20103b50a325efab69497427d864aad8",
      "oathYn": 1,
      "cnt": 46346,
      "itemName": "태동하는 울림의 무리 서약"
    },
    {
      "itemId": "668569e5ec21cde2c90c573364ea167b",
      "oathYn": 1,
      "cnt": 45332,
      "itemName": "태초로 인도하는 페어리 서약"
    },
    {
      "itemId": "db5930dcaf3723eae9189222eb94b124",
      "oathYn": 1,
      "cnt": 44959,
      "itemName": "태초에서 현신한 발키리 서약"
    },
    {
      "itemId": "a6e5b36dea755a4eea867623ea31083b",
      "oathYn": 1,
      "cnt": 44535,
      "itemName": "영원불변의 행운 서약"
    }
  ];

const beginCnts = [
    {
      "itemId": "b0c80cc630ca0d458eb9608774d47cd0",
      "oathYn": 0,
      "cnt": 260820,
      "itemName": "황금 : 태초의 광휘 결정"
    },
    {
      "itemId": "155b20fbde6a0e9590293d4babf27ef8",
      "oathYn": 0,
      "cnt": 259837,
      "itemName": "정화 : 태초의 광휘 결정"
    },
    {
      "itemId": "5573cd49fa3b6248104b8b1319ef5671",
      "oathYn": 0,
      "cnt": 254521,
      "itemName": "용투 : 태초의 광휘 결정"
    },
    {
      "itemId": "c78cae5798f4b3d8991323d6e9274463",
      "oathYn": 0,
      "cnt": 246190,
      "itemName": "여우 : 태초의 광휘 결정"
    },
    {
      "itemId": "9d7dece7ad3213817be4d371c86f488c",
      "oathYn": 0,
      "cnt": 244896,
      "itemName": "한계 : 태초의 광휘 결정"
    },
    {
      "itemId": "e48760bf96b6b9da793f5ee38733f523",
      "oathYn": 0,
      "cnt": 244155,
      "itemName": "자연 : 태초의 광휘 결정"
    },
    {
      "itemId": "5fe3c29985f15b1fdafd4c4d6a247839",
      "oathYn": 0,
      "cnt": 243068,
      "itemName": "그림자 : 태초의 광휘 결정"
    },
    {
      "itemId": "04702c73a373a5f5c9a504f2123dc80b",
      "oathYn": 0,
      "cnt": 242989,
      "itemName": "무리 : 태초의 광휘 결정"
    },
    {
      "itemId": "e5d4086fb45b43861155b291e3c02a47",
      "oathYn": 0,
      "cnt": 242107,
      "itemName": "발키리 : 태초의 광휘 결정"
    },
    {
      "itemId": "4f1a14f1124369922fa22bc45b768f74",
      "oathYn": 0,
      "cnt": 241310,
      "itemName": "행운 : 태초의 광휘 결정"
    },
    {
      "itemId": "0b991785c50799890f4b1821c309d39c",
      "oathYn": 0,
      "cnt": 239825,
      "itemName": "마력 : 태초의 광휘 결정"
    },
    {
      "itemId": "aa2ff87fb95331f8c728f398d0e13ccd",
      "oathYn": 0,
      "cnt": 239619,
      "itemName": "페어리 : 태초의 광휘 결정"
    }
  ];

const channel10 = [
    {
      "channelName": "마계_7",
      "cnt": 15939
    },
    {
      "channelName": "천해천_7",
      "cnt": 9080
    },
    {
      "channelName": "벨 마이어 공국_1",
      "cnt": 6549
    },
    {
      "channelName": "마계_10",
      "cnt": 5746
    },
    {
      "channelName": "지벤 황국_7",
      "cnt": 4978
    },
    {
      "channelName": "천해천_1",
      "cnt": 4574
    },
    {
      "channelName": "천해천_10",
      "cnt": 3086
    },
    {
      "channelName": "마계_8",
      "cnt": 3065
    },
    {
      "channelName": "백해_10",
      "cnt": 2936
    },
    {
      "channelName": "백해_7",
      "cnt": 2843
    },
    {
      "channelName": "마계_9",
      "cnt": 2740
    },
    {
      "channelName": "천해천_4",
      "cnt": 2613
    },
    {
      "channelName": "천해천_44",
      "cnt": 2376
    },
    {
      "channelName": "천해천_11",
      "cnt": 2267
    },
    {
      "channelName": "천해천_3",
      "cnt": 2194
    },
    {
      "channelName": "마계_1",
      "cnt": 2168
    },
    {
      "channelName": "천해천_17",
      "cnt": 2157
    },
    {
      "channelName": "천해천_15",
      "cnt": 2059
    },
    {
      "channelName": "지벤 황국_10",
      "cnt": 2050
    },
    {
      "channelName": "중천_7",
      "cnt": 2037
    },
    {
      "channelName": "천해천_50",
      "cnt": 1963
    },
    {
      "channelName": "마계_4",
      "cnt": 1939
    },
    {
      "channelName": "천해천_18",
      "cnt": 1914
    },
    {
      "channelName": "천해천_2",
      "cnt": 1910
    },
    {
      "channelName": "벨 마이어 공국_10",
      "cnt": 1896
    }
  ];