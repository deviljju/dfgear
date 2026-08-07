const updateDate = '08.08 02:10';
const userCnt = 841203;
const oathRate = "1 : 3.65 : 6.45";
const pledRate = "1 : 10.27 : 26.92";

const beginOathCnt = 449078;
const beginPledCnt = 2438283;
const legacyCnt = 1207873;
const kirinCnt = 726330;
const starTotal = 1292473;
const starCnt = 838864;

const code550 = 1703486;
const code557_0 = 347695;
const code552_0 = 457387;
const code554 = 131880;
const code551 = 119227;
const code557_1 = 68847;
const code555 = 27693;
const code556 = 21812;
const code552_1 = 9337;

//              조율자 550, 항아리552,        상던:557-0,   저울:554   환요:557-1,  레이드: 551,   초월 556,  무기고 555
const getData = [code550, (code552_0 + code552_1), code557_0, code554, code557_1, code551, code556, code555];

const timeOathCnts = [
    {
      "h": 0,
      "cnt": 20814
    },
    {
      "h": 1,
      "cnt": 14426
    },
    {
      "h": 2,
      "cnt": 9656
    },
    {
      "h": 3,
      "cnt": 6493
    },
    {
      "h": 4,
      "cnt": 4651
    },
    {
      "h": 5,
      "cnt": 3494
    },
    {
      "h": 6,
      "cnt": 7352
    },
    {
      "h": 7,
      "cnt": 8051
    },
    {
      "h": 8,
      "cnt": 9040
    },
    {
      "h": 9,
      "cnt": 11438
    },
    {
      "h": 10,
      "cnt": 17611
    },
    {
      "h": 11,
      "cnt": 21025
    },
    {
      "h": 12,
      "cnt": 21849
    },
    {
      "h": 13,
      "cnt": 22385
    },
    {
      "h": 14,
      "cnt": 22978
    },
    {
      "h": 15,
      "cnt": 23677
    },
    {
      "h": 16,
      "cnt": 23302
    },
    {
      "h": 17,
      "cnt": 22486
    },
    {
      "h": 18,
      "cnt": 23992
    },
    {
      "h": 19,
      "cnt": 28443
    },
    {
      "h": 20,
      "cnt": 32749
    },
    {
      "h": 21,
      "cnt": 34210
    },
    {
      "h": 22,
      "cnt": 31692
    },
    {
      "h": 23,
      "cnt": 27151
    }
  ];

const timePledCnts = [
    {
      "h": 0,
      "cnt": 114718
    },
    {
      "h": 1,
      "cnt": 79794
    },
    {
      "h": 2,
      "cnt": 54796
    },
    {
      "h": 3,
      "cnt": 37647
    },
    {
      "h": 4,
      "cnt": 26924
    },
    {
      "h": 5,
      "cnt": 21176
    },
    {
      "h": 6,
      "cnt": 43778
    },
    {
      "h": 7,
      "cnt": 47303
    },
    {
      "h": 8,
      "cnt": 51967
    },
    {
      "h": 9,
      "cnt": 65978
    },
    {
      "h": 10,
      "cnt": 95120
    },
    {
      "h": 11,
      "cnt": 110032
    },
    {
      "h": 12,
      "cnt": 115847
    },
    {
      "h": 13,
      "cnt": 120338
    },
    {
      "h": 14,
      "cnt": 123480
    },
    {
      "h": 15,
      "cnt": 127501
    },
    {
      "h": 16,
      "cnt": 125367
    },
    {
      "h": 17,
      "cnt": 122762
    },
    {
      "h": 18,
      "cnt": 130741
    },
    {
      "h": 19,
      "cnt": 153307
    },
    {
      "h": 20,
      "cnt": 173811
    },
    {
      "h": 21,
      "cnt": 180750
    },
    {
      "h": 22,
      "cnt": 169863
    },
    {
      "h": 23,
      "cnt": 145002
    }
  ];

const oath = [
    {
      "itemId": "a41a6666654f4d5b4a29bde4a767a368",
      "oathYn": 1,
      "cnt": 44839,
      "itemName": "현실이 된 이상 속 황금 서약"
    },
    {
      "itemId": "d2dc93ebab431b6edd1680f87d118b59",
      "oathYn": 1,
      "cnt": 44759,
      "itemName": "찬란한 신념의 정화 서약"
    },
    {
      "itemId": "97edf2846698bad4055330d5f7fe90b4",
      "oathYn": 1,
      "cnt": 41324,
      "itemName": "세계를 태우는 용투 서약"
    },
    {
      "itemId": "15a42c9cfd0709f609b22bb590f0a1e8",
      "oathYn": 1,
      "cnt": 36381,
      "itemName": "강림한 여우 서약"
    },
    {
      "itemId": "249bbdca841dbd7609887cd1051c5d32",
      "oathYn": 1,
      "cnt": 35779,
      "itemName": "근원에 닿은 자연 서약"
    },
    {
      "itemId": "b5031dbb3e68f781441515ae6d5889b5",
      "oathYn": 1,
      "cnt": 35553,
      "itemName": "태초에 고동치는 마력 서약"
    },
    {
      "itemId": "72adf78e645d9a821b9adcc98ef00044",
      "oathYn": 1,
      "cnt": 35486,
      "itemName": "태초의 어둠 속 그림자 서약"
    },
    {
      "itemId": "4b2e60a6f302a35f6fe2c2c8f01181c2",
      "oathYn": 1,
      "cnt": 35286,
      "itemName": "초월하는 한계 서약"
    },
    {
      "itemId": "20103b50a325efab69497427d864aad8",
      "oathYn": 1,
      "cnt": 35096,
      "itemName": "태동하는 울림의 무리 서약"
    },
    {
      "itemId": "668569e5ec21cde2c90c573364ea167b",
      "oathYn": 1,
      "cnt": 34917,
      "itemName": "태초로 인도하는 페어리 서약"
    },
    {
      "itemId": "db5930dcaf3723eae9189222eb94b124",
      "oathYn": 1,
      "cnt": 34832,
      "itemName": "태초에서 현신한 발키리 서약"
    },
    {
      "itemId": "a6e5b36dea755a4eea867623ea31083b",
      "oathYn": 1,
      "cnt": 34826,
      "itemName": "영원불변의 행운 서약"
    }
  ];

const beginCnts = [
    {
      "itemId": "b0c80cc630ca0d458eb9608774d47cd0",
      "oathYn": 0,
      "cnt": 213891,
      "itemName": "황금 : 태초의 광휘 결정"
    },
    {
      "itemId": "155b20fbde6a0e9590293d4babf27ef8",
      "oathYn": 0,
      "cnt": 210447,
      "itemName": "정화 : 태초의 광휘 결정"
    },
    {
      "itemId": "5573cd49fa3b6248104b8b1319ef5671",
      "oathYn": 0,
      "cnt": 207224,
      "itemName": "용투 : 태초의 광휘 결정"
    },
    {
      "itemId": "c78cae5798f4b3d8991323d6e9274463",
      "oathYn": 0,
      "cnt": 203550,
      "itemName": "여우 : 태초의 광휘 결정"
    },
    {
      "itemId": "9d7dece7ad3213817be4d371c86f488c",
      "oathYn": 0,
      "cnt": 201655,
      "itemName": "한계 : 태초의 광휘 결정"
    },
    {
      "itemId": "e48760bf96b6b9da793f5ee38733f523",
      "oathYn": 0,
      "cnt": 201300,
      "itemName": "자연 : 태초의 광휘 결정"
    },
    {
      "itemId": "5fe3c29985f15b1fdafd4c4d6a247839",
      "oathYn": 0,
      "cnt": 200834,
      "itemName": "그림자 : 태초의 광휘 결정"
    },
    {
      "itemId": "4f1a14f1124369922fa22bc45b768f74",
      "oathYn": 0,
      "cnt": 200688,
      "itemName": "행운 : 태초의 광휘 결정"
    },
    {
      "itemId": "04702c73a373a5f5c9a504f2123dc80b",
      "oathYn": 0,
      "cnt": 200628,
      "itemName": "무리 : 태초의 광휘 결정"
    },
    {
      "itemId": "e5d4086fb45b43861155b291e3c02a47",
      "oathYn": 0,
      "cnt": 200569,
      "itemName": "발키리 : 태초의 광휘 결정"
    },
    {
      "itemId": "aa2ff87fb95331f8c728f398d0e13ccd",
      "oathYn": 0,
      "cnt": 198882,
      "itemName": "페어리 : 태초의 광휘 결정"
    },
    {
      "itemId": "0b991785c50799890f4b1821c309d39c",
      "oathYn": 0,
      "cnt": 198615,
      "itemName": "마력 : 태초의 광휘 결정"
    }
  ];

const channel10 = [
    {
      "channelName": "마계_7",
      "cnt": 13885
    },
    {
      "channelName": "천해천_7",
      "cnt": 7965
    },
    {
      "channelName": "벨 마이어 공국_1",
      "cnt": 5689
    },
    {
      "channelName": "마계_10",
      "cnt": 5122
    },
    {
      "channelName": "지벤 황국_7",
      "cnt": 4491
    },
    {
      "channelName": "천해천_1",
      "cnt": 3864
    },
    {
      "channelName": "천해천_10",
      "cnt": 2727
    },
    {
      "channelName": "마계_8",
      "cnt": 2720
    },
    {
      "channelName": "백해_10",
      "cnt": 2574
    },
    {
      "channelName": "백해_7",
      "cnt": 2557
    },
    {
      "channelName": "마계_9",
      "cnt": 2390
    },
    {
      "channelName": "천해천_4",
      "cnt": 2290
    },
    {
      "channelName": "천해천_44",
      "cnt": 2124
    },
    {
      "channelName": "천해천_11",
      "cnt": 1959
    },
    {
      "channelName": "천해천_3",
      "cnt": 1944
    },
    {
      "channelName": "천해천_17",
      "cnt": 1915
    },
    {
      "channelName": "마계_1",
      "cnt": 1914
    },
    {
      "channelName": "중천_7",
      "cnt": 1829
    },
    {
      "channelName": "천해천_15",
      "cnt": 1797
    },
    {
      "channelName": "지벤 황국_10",
      "cnt": 1789
    },
    {
      "channelName": "천해천_50",
      "cnt": 1761
    },
    {
      "channelName": "마계_4",
      "cnt": 1746
    },
    {
      "channelName": "천해천_18",
      "cnt": 1688
    },
    {
      "channelName": "천해천_2",
      "cnt": 1677
    },
    {
      "channelName": "벨 마이어 공국_10",
      "cnt": 1652
    }
  ];