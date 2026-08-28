const updateDate = '08.28 22:20';
const userCnt = 849355;
const oathRate = "1 : 3.45 : 5.92";
const pledRate = "1 : 10.26 : 26.88";

const beginOathCnt = 517523;
const beginPledCnt = 2688647;
const legacyCnt = 1227558;
const kirinCnt = 738796;
const starTotal = 1309250;
const starCnt = 848567;

const code550 = 1830072;
const code557_0 = 379345;
const code552_0 = 566218;
const code554 = 142207;
const code551 = 138080;
const code557_1 = 72321;
const code555 = 36024;
const code556 = 26707;
const code552_1 = 15196;

//              조율자 550, 항아리552,        상던:557-0,   저울:554   환요:557-1,  레이드: 551,   초월 556,  무기고 555
const getData = [code550, (code552_0 + code552_1), code557_0, code554, code557_1, code551, code556, code555];

const timeOathCnts = [
    {
      "h": 0,
      "cnt": 24189
    },
    {
      "h": 1,
      "cnt": 16884
    },
    {
      "h": 2,
      "cnt": 11384
    },
    {
      "h": 3,
      "cnt": 7565
    },
    {
      "h": 4,
      "cnt": 5434
    },
    {
      "h": 5,
      "cnt": 4075
    },
    {
      "h": 6,
      "cnt": 8493
    },
    {
      "h": 7,
      "cnt": 9207
    },
    {
      "h": 8,
      "cnt": 10362
    },
    {
      "h": 9,
      "cnt": 13111
    },
    {
      "h": 10,
      "cnt": 20399
    },
    {
      "h": 11,
      "cnt": 23955
    },
    {
      "h": 12,
      "cnt": 25317
    },
    {
      "h": 13,
      "cnt": 25883
    },
    {
      "h": 14,
      "cnt": 26474
    },
    {
      "h": 15,
      "cnt": 27111
    },
    {
      "h": 16,
      "cnt": 26707
    },
    {
      "h": 17,
      "cnt": 25697
    },
    {
      "h": 18,
      "cnt": 27621
    },
    {
      "h": 19,
      "cnt": 32665
    },
    {
      "h": 20,
      "cnt": 37540
    },
    {
      "h": 21,
      "cnt": 39268
    },
    {
      "h": 22,
      "cnt": 36618
    },
    {
      "h": 23,
      "cnt": 31452
    }
  ];

const timePledCnts = [
    {
      "h": 0,
      "cnt": 127357
    },
    {
      "h": 1,
      "cnt": 89193
    },
    {
      "h": 2,
      "cnt": 61194
    },
    {
      "h": 3,
      "cnt": 42328
    },
    {
      "h": 4,
      "cnt": 30194
    },
    {
      "h": 5,
      "cnt": 23597
    },
    {
      "h": 6,
      "cnt": 47336
    },
    {
      "h": 7,
      "cnt": 51233
    },
    {
      "h": 8,
      "cnt": 56711
    },
    {
      "h": 9,
      "cnt": 72065
    },
    {
      "h": 10,
      "cnt": 104424
    },
    {
      "h": 11,
      "cnt": 120673
    },
    {
      "h": 12,
      "cnt": 127579
    },
    {
      "h": 13,
      "cnt": 132519
    },
    {
      "h": 14,
      "cnt": 136049
    },
    {
      "h": 15,
      "cnt": 140226
    },
    {
      "h": 16,
      "cnt": 137997
    },
    {
      "h": 17,
      "cnt": 135163
    },
    {
      "h": 18,
      "cnt": 143802
    },
    {
      "h": 19,
      "cnt": 168768
    },
    {
      "h": 20,
      "cnt": 191496
    },
    {
      "h": 21,
      "cnt": 199360
    },
    {
      "h": 22,
      "cnt": 187963
    },
    {
      "h": 23,
      "cnt": 161144
    }
  ];

const oath = [
    {
      "itemId": "d2dc93ebab431b6edd1680f87d118b59",
      "oathYn": 1,
      "cnt": 52841,
      "itemName": "찬란한 신념의 정화 서약"
    },
    {
      "itemId": "a41a6666654f4d5b4a29bde4a767a368",
      "oathYn": 1,
      "cnt": 51840,
      "itemName": "현실이 된 이상 속 황금 서약"
    },
    {
      "itemId": "97edf2846698bad4055330d5f7fe90b4",
      "oathYn": 1,
      "cnt": 48498,
      "itemName": "세계를 태우는 용투 서약"
    },
    {
      "itemId": "15a42c9cfd0709f609b22bb590f0a1e8",
      "oathYn": 1,
      "cnt": 41673,
      "itemName": "강림한 여우 서약"
    },
    {
      "itemId": "249bbdca841dbd7609887cd1051c5d32",
      "oathYn": 1,
      "cnt": 41279,
      "itemName": "근원에 닿은 자연 서약"
    },
    {
      "itemId": "72adf78e645d9a821b9adcc98ef00044",
      "oathYn": 1,
      "cnt": 40937,
      "itemName": "태초의 어둠 속 그림자 서약"
    },
    {
      "itemId": "b5031dbb3e68f781441515ae6d5889b5",
      "oathYn": 1,
      "cnt": 40650,
      "itemName": "태초에 고동치는 마력 서약"
    },
    {
      "itemId": "4b2e60a6f302a35f6fe2c2c8f01181c2",
      "oathYn": 1,
      "cnt": 40468,
      "itemName": "초월하는 한계 서약"
    },
    {
      "itemId": "20103b50a325efab69497427d864aad8",
      "oathYn": 1,
      "cnt": 40366,
      "itemName": "태동하는 울림의 무리 서약"
    },
    {
      "itemId": "668569e5ec21cde2c90c573364ea167b",
      "oathYn": 1,
      "cnt": 39818,
      "itemName": "태초로 인도하는 페어리 서약"
    },
    {
      "itemId": "db5930dcaf3723eae9189222eb94b124",
      "oathYn": 1,
      "cnt": 39689,
      "itemName": "태초에서 현신한 발키리 서약"
    },
    {
      "itemId": "a6e5b36dea755a4eea867623ea31083b",
      "oathYn": 1,
      "cnt": 39464,
      "itemName": "영원불변의 행운 서약"
    }
  ];

const beginCnts = [
    {
      "itemId": "b0c80cc630ca0d458eb9608774d47cd0",
      "oathYn": 0,
      "cnt": 236348,
      "itemName": "황금 : 태초의 광휘 결정"
    },
    {
      "itemId": "155b20fbde6a0e9590293d4babf27ef8",
      "oathYn": 0,
      "cnt": 233714,
      "itemName": "정화 : 태초의 광휘 결정"
    },
    {
      "itemId": "5573cd49fa3b6248104b8b1319ef5671",
      "oathYn": 0,
      "cnt": 229756,
      "itemName": "용투 : 태초의 광휘 결정"
    },
    {
      "itemId": "c78cae5798f4b3d8991323d6e9274463",
      "oathYn": 0,
      "cnt": 224167,
      "itemName": "여우 : 태초의 광휘 결정"
    },
    {
      "itemId": "9d7dece7ad3213817be4d371c86f488c",
      "oathYn": 0,
      "cnt": 222258,
      "itemName": "한계 : 태초의 광휘 결정"
    },
    {
      "itemId": "e48760bf96b6b9da793f5ee38733f523",
      "oathYn": 0,
      "cnt": 221779,
      "itemName": "자연 : 태초의 광휘 결정"
    },
    {
      "itemId": "5fe3c29985f15b1fdafd4c4d6a247839",
      "oathYn": 0,
      "cnt": 221370,
      "itemName": "그림자 : 태초의 광휘 결정"
    },
    {
      "itemId": "04702c73a373a5f5c9a504f2123dc80b",
      "oathYn": 0,
      "cnt": 221122,
      "itemName": "무리 : 태초의 광휘 결정"
    },
    {
      "itemId": "e5d4086fb45b43861155b291e3c02a47",
      "oathYn": 0,
      "cnt": 220646,
      "itemName": "발키리 : 태초의 광휘 결정"
    },
    {
      "itemId": "4f1a14f1124369922fa22bc45b768f74",
      "oathYn": 0,
      "cnt": 220244,
      "itemName": "행운 : 태초의 광휘 결정"
    },
    {
      "itemId": "0b991785c50799890f4b1821c309d39c",
      "oathYn": 0,
      "cnt": 218660,
      "itemName": "마력 : 태초의 광휘 결정"
    },
    {
      "itemId": "aa2ff87fb95331f8c728f398d0e13ccd",
      "oathYn": 0,
      "cnt": 218583,
      "itemName": "페어리 : 태초의 광휘 결정"
    }
  ];

const channel10 = [
    {
      "channelName": "마계_7",
      "cnt": 14919
    },
    {
      "channelName": "천해천_7",
      "cnt": 8538
    },
    {
      "channelName": "벨 마이어 공국_1",
      "cnt": 6137
    },
    {
      "channelName": "마계_10",
      "cnt": 5456
    },
    {
      "channelName": "지벤 황국_7",
      "cnt": 4725
    },
    {
      "channelName": "천해천_1",
      "cnt": 4184
    },
    {
      "channelName": "마계_8",
      "cnt": 2925
    },
    {
      "channelName": "천해천_10",
      "cnt": 2909
    },
    {
      "channelName": "백해_10",
      "cnt": 2758
    },
    {
      "channelName": "백해_7",
      "cnt": 2700
    },
    {
      "channelName": "마계_9",
      "cnt": 2564
    },
    {
      "channelName": "천해천_4",
      "cnt": 2460
    },
    {
      "channelName": "천해천_44",
      "cnt": 2239
    },
    {
      "channelName": "천해천_11",
      "cnt": 2115
    },
    {
      "channelName": "천해천_3",
      "cnt": 2089
    },
    {
      "channelName": "마계_1",
      "cnt": 2063
    },
    {
      "channelName": "천해천_17",
      "cnt": 2034
    },
    {
      "channelName": "중천_7",
      "cnt": 1951
    },
    {
      "channelName": "천해천_15",
      "cnt": 1929
    },
    {
      "channelName": "지벤 황국_10",
      "cnt": 1916
    },
    {
      "channelName": "천해천_50",
      "cnt": 1881
    },
    {
      "channelName": "마계_4",
      "cnt": 1831
    },
    {
      "channelName": "천해천_18",
      "cnt": 1807
    },
    {
      "channelName": "천해천_2",
      "cnt": 1799
    },
    {
      "channelName": "벨 마이어 공국_10",
      "cnt": 1770
    }
  ];