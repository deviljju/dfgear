const updateDate = '07.23 14:20';
const userCnt = 833332;
const oathRate = "1 : 3.76 : 6.83";
const pledRate = "1 : 10.28 : 26.97";

const beginOathCnt = 399245;
const beginPledCnt = 2230491;
const legacyCnt = 1191690;
const kirinCnt = 716713;
const starTotal = 1277031;
const starCnt = 829881;

const code550 = 1580922;
const code557_0 = 316460;
const code552_0 = 387306;
const code554 = 120820;
const code551 = 108805;
const code557_1 = 65415;
const code555 = 23620;
const code556 = 18444;
const code552_1 = 7954;

//              조율자 550, 항아리552,        상던:557-0,   저울:554   환요:557-1,  레이드: 551,   초월 556,  무기고 555
const getData = [code550, (code552_0 + code552_1), code557_0, code554, code557_1, code551, code556, code555];

const timeOathCnts = [
    {
      "h": 0,
      "cnt": 18481
    },
    {
      "h": 1,
      "cnt": 12725
    },
    {
      "h": 2,
      "cnt": 8583
    },
    {
      "h": 3,
      "cnt": 5740
    },
    {
      "h": 4,
      "cnt": 4121
    },
    {
      "h": 5,
      "cnt": 3123
    },
    {
      "h": 6,
      "cnt": 6595
    },
    {
      "h": 7,
      "cnt": 7211
    },
    {
      "h": 8,
      "cnt": 8138
    },
    {
      "h": 9,
      "cnt": 10235
    },
    {
      "h": 10,
      "cnt": 15750
    },
    {
      "h": 11,
      "cnt": 18777
    },
    {
      "h": 12,
      "cnt": 19476
    },
    {
      "h": 13,
      "cnt": 19878
    },
    {
      "h": 14,
      "cnt": 20421
    },
    {
      "h": 15,
      "cnt": 21147
    },
    {
      "h": 16,
      "cnt": 20667
    },
    {
      "h": 17,
      "cnt": 20004
    },
    {
      "h": 18,
      "cnt": 21386
    },
    {
      "h": 19,
      "cnt": 25271
    },
    {
      "h": 20,
      "cnt": 28993
    },
    {
      "h": 21,
      "cnt": 30287
    },
    {
      "h": 22,
      "cnt": 28066
    },
    {
      "h": 23,
      "cnt": 24059
    }
  ];

const timePledCnts = [
    {
      "h": 0,
      "cnt": 104269
    },
    {
      "h": 1,
      "cnt": 72745
    },
    {
      "h": 2,
      "cnt": 49707
    },
    {
      "h": 3,
      "cnt": 34142
    },
    {
      "h": 4,
      "cnt": 24342
    },
    {
      "h": 5,
      "cnt": 19185
    },
    {
      "h": 6,
      "cnt": 40639
    },
    {
      "h": 7,
      "cnt": 43844
    },
    {
      "h": 8,
      "cnt": 47975
    },
    {
      "h": 9,
      "cnt": 60856
    },
    {
      "h": 10,
      "cnt": 87358
    },
    {
      "h": 11,
      "cnt": 100964
    },
    {
      "h": 12,
      "cnt": 106054
    },
    {
      "h": 13,
      "cnt": 110402
    },
    {
      "h": 14,
      "cnt": 113081
    },
    {
      "h": 15,
      "cnt": 116796
    },
    {
      "h": 16,
      "cnt": 114721
    },
    {
      "h": 17,
      "cnt": 112264
    },
    {
      "h": 18,
      "cnt": 119634
    },
    {
      "h": 19,
      "cnt": 140271
    },
    {
      "h": 20,
      "cnt": 159044
    },
    {
      "h": 21,
      "cnt": 164915
    },
    {
      "h": 22,
      "cnt": 154950
    },
    {
      "h": 23,
      "cnt": 132056
    }
  ];

const oath = [
    {
      "itemId": "a41a6666654f4d5b4a29bde4a767a368",
      "oathYn": 1,
      "cnt": 39656,
      "itemName": "현실이 된 이상 속 황금 서약"
    },
    {
      "itemId": "d2dc93ebab431b6edd1680f87d118b59",
      "oathYn": 1,
      "cnt": 39159,
      "itemName": "찬란한 신념의 정화 서약"
    },
    {
      "itemId": "97edf2846698bad4055330d5f7fe90b4",
      "oathYn": 1,
      "cnt": 36267,
      "itemName": "세계를 태우는 용투 서약"
    },
    {
      "itemId": "15a42c9cfd0709f609b22bb590f0a1e8",
      "oathYn": 1,
      "cnt": 32337,
      "itemName": "강림한 여우 서약"
    },
    {
      "itemId": "249bbdca841dbd7609887cd1051c5d32",
      "oathYn": 1,
      "cnt": 31894,
      "itemName": "근원에 닿은 자연 서약"
    },
    {
      "itemId": "b5031dbb3e68f781441515ae6d5889b5",
      "oathYn": 1,
      "cnt": 31763,
      "itemName": "태초에 고동치는 마력 서약"
    },
    {
      "itemId": "72adf78e645d9a821b9adcc98ef00044",
      "oathYn": 1,
      "cnt": 31599,
      "itemName": "태초의 어둠 속 그림자 서약"
    },
    {
      "itemId": "4b2e60a6f302a35f6fe2c2c8f01181c2",
      "oathYn": 1,
      "cnt": 31442,
      "itemName": "초월하는 한계 서약"
    },
    {
      "itemId": "668569e5ec21cde2c90c573364ea167b",
      "oathYn": 1,
      "cnt": 31343,
      "itemName": "태초로 인도하는 페어리 서약"
    },
    {
      "itemId": "a6e5b36dea755a4eea867623ea31083b",
      "oathYn": 1,
      "cnt": 31332,
      "itemName": "영원불변의 행운 서약"
    },
    {
      "itemId": "20103b50a325efab69497427d864aad8",
      "oathYn": 1,
      "cnt": 31262,
      "itemName": "태동하는 울림의 무리 서약"
    },
    {
      "itemId": "db5930dcaf3723eae9189222eb94b124",
      "oathYn": 1,
      "cnt": 31191,
      "itemName": "태초에서 현신한 발키리 서약"
    }
  ];

const beginCnts = [
    {
      "itemId": "b0c80cc630ca0d458eb9608774d47cd0",
      "oathYn": 0,
      "cnt": 195723,
      "itemName": "황금 : 태초의 광휘 결정"
    },
    {
      "itemId": "155b20fbde6a0e9590293d4babf27ef8",
      "oathYn": 0,
      "cnt": 191786,
      "itemName": "정화 : 태초의 광휘 결정"
    },
    {
      "itemId": "5573cd49fa3b6248104b8b1319ef5671",
      "oathYn": 0,
      "cnt": 189119,
      "itemName": "용투 : 태초의 광휘 결정"
    },
    {
      "itemId": "c78cae5798f4b3d8991323d6e9274463",
      "oathYn": 0,
      "cnt": 185974,
      "itemName": "여우 : 태초의 광휘 결정"
    },
    {
      "itemId": "9d7dece7ad3213817be4d371c86f488c",
      "oathYn": 0,
      "cnt": 184370,
      "itemName": "한계 : 태초의 광휘 결정"
    },
    {
      "itemId": "e48760bf96b6b9da793f5ee38733f523",
      "oathYn": 0,
      "cnt": 184146,
      "itemName": "자연 : 태초의 광휘 결정"
    },
    {
      "itemId": "5fe3c29985f15b1fdafd4c4d6a247839",
      "oathYn": 0,
      "cnt": 183915,
      "itemName": "그림자 : 태초의 광휘 결정"
    },
    {
      "itemId": "e5d4086fb45b43861155b291e3c02a47",
      "oathYn": 0,
      "cnt": 183874,
      "itemName": "발키리 : 태초의 광휘 결정"
    },
    {
      "itemId": "4f1a14f1124369922fa22bc45b768f74",
      "oathYn": 0,
      "cnt": 183665,
      "itemName": "행운 : 태초의 광휘 결정"
    },
    {
      "itemId": "04702c73a373a5f5c9a504f2123dc80b",
      "oathYn": 0,
      "cnt": 183546,
      "itemName": "무리 : 태초의 광휘 결정"
    },
    {
      "itemId": "aa2ff87fb95331f8c728f398d0e13ccd",
      "oathYn": 0,
      "cnt": 182232,
      "itemName": "페어리 : 태초의 광휘 결정"
    },
    {
      "itemId": "0b991785c50799890f4b1821c309d39c",
      "oathYn": 0,
      "cnt": 182141,
      "itemName": "마력 : 태초의 광휘 결정"
    }
  ];

const channel10 = [
    {
      "channelName": "마계_7",
      "cnt": 12805
    },
    {
      "channelName": "천해천_7",
      "cnt": 7403
    },
    {
      "channelName": "벨 마이어 공국_1",
      "cnt": 5215
    },
    {
      "channelName": "마계_10",
      "cnt": 4841
    },
    {
      "channelName": "지벤 황국_7",
      "cnt": 4228
    },
    {
      "channelName": "천해천_1",
      "cnt": 3577
    },
    {
      "channelName": "천해천_10",
      "cnt": 2529
    },
    {
      "channelName": "마계_8",
      "cnt": 2527
    },
    {
      "channelName": "백해_10",
      "cnt": 2413
    },
    {
      "channelName": "백해_7",
      "cnt": 2355
    },
    {
      "channelName": "마계_9",
      "cnt": 2237
    },
    {
      "channelName": "천해천_4",
      "cnt": 2143
    },
    {
      "channelName": "천해천_44",
      "cnt": 1946
    },
    {
      "channelName": "천해천_11",
      "cnt": 1825
    },
    {
      "channelName": "천해천_3",
      "cnt": 1821
    },
    {
      "channelName": "마계_1",
      "cnt": 1799
    },
    {
      "channelName": "천해천_17",
      "cnt": 1752
    },
    {
      "channelName": "중천_7",
      "cnt": 1740
    },
    {
      "channelName": "천해천_50",
      "cnt": 1684
    },
    {
      "channelName": "천해천_15",
      "cnt": 1678
    },
    {
      "channelName": "지벤 황국_10",
      "cnt": 1659
    },
    {
      "channelName": "마계_4",
      "cnt": 1652
    },
    {
      "channelName": "천해천_18",
      "cnt": 1568
    },
    {
      "channelName": "천해천_2",
      "cnt": 1556
    },
    {
      "channelName": "벨 마이어 공국_10",
      "cnt": 1530
    }
  ];