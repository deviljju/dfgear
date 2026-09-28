const updateDate = '09.28 21:45';
const userCnt = 854852;
const oathRate = "1 : 3.31 : 5.50";
const pledRate = "1 : 10.28 : 26.92";

const beginOathCnt = 578394;
const beginPledCnt = 2904028;
const legacyCnt = 1243514;
const kirinCnt = 749049;
const starTotal = 1322601;
const starCnt = 856408;

const code550 = 1929987;
const code557_0 = 407944;
const code552_0 = 662898;
const code554 = 147637;
const code551 = 159138;
const code557_1 = 75158;
const code555 = 49184;
const code556 = 29448;
const code552_1 = 21028;

//              조율자 550, 항아리552,        상던:557-0,   저울:554   환요:557-1,  레이드: 551,   초월 556,  무기고 555
const getData = [code550, (code552_0 + code552_1), code557_0, code554, code557_1, code551, code556, code555];

const timeOathCnts = [
    {
      "h": 0,
      "cnt": 27271
    },
    {
      "h": 1,
      "cnt": 19143
    },
    {
      "h": 2,
      "cnt": 12946
    },
    {
      "h": 3,
      "cnt": 8585
    },
    {
      "h": 4,
      "cnt": 6196
    },
    {
      "h": 5,
      "cnt": 4641
    },
    {
      "h": 6,
      "cnt": 9291
    },
    {
      "h": 7,
      "cnt": 10220
    },
    {
      "h": 8,
      "cnt": 11446
    },
    {
      "h": 9,
      "cnt": 14457
    },
    {
      "h": 10,
      "cnt": 22834
    },
    {
      "h": 11,
      "cnt": 26617
    },
    {
      "h": 12,
      "cnt": 28132
    },
    {
      "h": 13,
      "cnt": 28784
    },
    {
      "h": 14,
      "cnt": 29321
    },
    {
      "h": 15,
      "cnt": 30087
    },
    {
      "h": 16,
      "cnt": 29778
    },
    {
      "h": 17,
      "cnt": 28717
    },
    {
      "h": 18,
      "cnt": 30944
    },
    {
      "h": 19,
      "cnt": 36583
    },
    {
      "h": 20,
      "cnt": 41975
    },
    {
      "h": 21,
      "cnt": 43875
    },
    {
      "h": 22,
      "cnt": 41085
    },
    {
      "h": 23,
      "cnt": 35354
    }
  ];

const timePledCnts = [
    {
      "h": 0,
      "cnt": 138255
    },
    {
      "h": 1,
      "cnt": 97060
    },
    {
      "h": 2,
      "cnt": 66776
    },
    {
      "h": 3,
      "cnt": 46097
    },
    {
      "h": 4,
      "cnt": 33028
    },
    {
      "h": 5,
      "cnt": 25861
    },
    {
      "h": 6,
      "cnt": 50328
    },
    {
      "h": 7,
      "cnt": 54918
    },
    {
      "h": 8,
      "cnt": 60700
    },
    {
      "h": 9,
      "cnt": 77265
    },
    {
      "h": 10,
      "cnt": 113061
    },
    {
      "h": 11,
      "cnt": 129870
    },
    {
      "h": 12,
      "cnt": 137322
    },
    {
      "h": 13,
      "cnt": 142595
    },
    {
      "h": 14,
      "cnt": 146466
    },
    {
      "h": 15,
      "cnt": 150757
    },
    {
      "h": 16,
      "cnt": 148744
    },
    {
      "h": 17,
      "cnt": 145876
    },
    {
      "h": 18,
      "cnt": 155214
    },
    {
      "h": 19,
      "cnt": 182386
    },
    {
      "h": 20,
      "cnt": 207367
    },
    {
      "h": 21,
      "cnt": 215708
    },
    {
      "h": 22,
      "cnt": 203390
    },
    {
      "h": 23,
      "cnt": 174710
    }
  ];

const oath = [
    {
      "itemId": "d2dc93ebab431b6edd1680f87d118b59",
      "oathYn": 1,
      "cnt": 60065,
      "itemName": "찬란한 신념의 정화 서약"
    },
    {
      "itemId": "a41a6666654f4d5b4a29bde4a767a368",
      "oathYn": 1,
      "cnt": 58087,
      "itemName": "현실이 된 이상 속 황금 서약"
    },
    {
      "itemId": "97edf2846698bad4055330d5f7fe90b4",
      "oathYn": 1,
      "cnt": 54866,
      "itemName": "세계를 태우는 용투 서약"
    },
    {
      "itemId": "15a42c9cfd0709f609b22bb590f0a1e8",
      "oathYn": 1,
      "cnt": 46193,
      "itemName": "강림한 여우 서약"
    },
    {
      "itemId": "249bbdca841dbd7609887cd1051c5d32",
      "oathYn": 1,
      "cnt": 46175,
      "itemName": "근원에 닿은 자연 서약"
    },
    {
      "itemId": "72adf78e645d9a821b9adcc98ef00044",
      "oathYn": 1,
      "cnt": 45622,
      "itemName": "태초의 어둠 속 그림자 서약"
    },
    {
      "itemId": "b5031dbb3e68f781441515ae6d5889b5",
      "oathYn": 1,
      "cnt": 45476,
      "itemName": "태초에 고동치는 마력 서약"
    },
    {
      "itemId": "4b2e60a6f302a35f6fe2c2c8f01181c2",
      "oathYn": 1,
      "cnt": 45271,
      "itemName": "초월하는 한계 서약"
    },
    {
      "itemId": "20103b50a325efab69497427d864aad8",
      "oathYn": 1,
      "cnt": 45099,
      "itemName": "태동하는 울림의 무리 서약"
    },
    {
      "itemId": "668569e5ec21cde2c90c573364ea167b",
      "oathYn": 1,
      "cnt": 44146,
      "itemName": "태초로 인도하는 페어리 서약"
    },
    {
      "itemId": "db5930dcaf3723eae9189222eb94b124",
      "oathYn": 1,
      "cnt": 43872,
      "itemName": "태초에서 현신한 발키리 서약"
    },
    {
      "itemId": "a6e5b36dea755a4eea867623ea31083b",
      "oathYn": 1,
      "cnt": 43522,
      "itemName": "영원불변의 행운 서약"
    }
  ];

const beginCnts = [
    {
      "itemId": "b0c80cc630ca0d458eb9608774d47cd0",
      "oathYn": 0,
      "cnt": 255691,
      "itemName": "황금 : 태초의 광휘 결정"
    },
    {
      "itemId": "155b20fbde6a0e9590293d4babf27ef8",
      "oathYn": 0,
      "cnt": 254323,
      "itemName": "정화 : 태초의 광휘 결정"
    },
    {
      "itemId": "5573cd49fa3b6248104b8b1319ef5671",
      "oathYn": 0,
      "cnt": 249434,
      "itemName": "용투 : 태초의 광휘 결정"
    },
    {
      "itemId": "c78cae5798f4b3d8991323d6e9274463",
      "oathYn": 0,
      "cnt": 241764,
      "itemName": "여우 : 태초의 광휘 결정"
    },
    {
      "itemId": "9d7dece7ad3213817be4d371c86f488c",
      "oathYn": 0,
      "cnt": 240296,
      "itemName": "한계 : 태초의 광휘 결정"
    },
    {
      "itemId": "e48760bf96b6b9da793f5ee38733f523",
      "oathYn": 0,
      "cnt": 239535,
      "itemName": "자연 : 태초의 광휘 결정"
    },
    {
      "itemId": "5fe3c29985f15b1fdafd4c4d6a247839",
      "oathYn": 0,
      "cnt": 238697,
      "itemName": "그림자 : 태초의 광휘 결정"
    },
    {
      "itemId": "04702c73a373a5f5c9a504f2123dc80b",
      "oathYn": 0,
      "cnt": 238591,
      "itemName": "무리 : 태초의 광휘 결정"
    },
    {
      "itemId": "e5d4086fb45b43861155b291e3c02a47",
      "oathYn": 0,
      "cnt": 237802,
      "itemName": "발키리 : 태초의 광휘 결정"
    },
    {
      "itemId": "4f1a14f1124369922fa22bc45b768f74",
      "oathYn": 0,
      "cnt": 236964,
      "itemName": "행운 : 태초의 광휘 결정"
    },
    {
      "itemId": "0b991785c50799890f4b1821c309d39c",
      "oathYn": 0,
      "cnt": 235505,
      "itemName": "마력 : 태초의 광휘 결정"
    },
    {
      "itemId": "aa2ff87fb95331f8c728f398d0e13ccd",
      "oathYn": 0,
      "cnt": 235426,
      "itemName": "페어리 : 태초의 광휘 결정"
    }
  ];

const channel10 = [
    {
      "channelName": "마계_7",
      "cnt": 15752
    },
    {
      "channelName": "천해천_7",
      "cnt": 8978
    },
    {
      "channelName": "벨 마이어 공국_1",
      "cnt": 6486
    },
    {
      "channelName": "마계_10",
      "cnt": 5685
    },
    {
      "channelName": "지벤 황국_7",
      "cnt": 4932
    },
    {
      "channelName": "천해천_1",
      "cnt": 4509
    },
    {
      "channelName": "천해천_10",
      "cnt": 3065
    },
    {
      "channelName": "마계_8",
      "cnt": 3043
    },
    {
      "channelName": "백해_10",
      "cnt": 2909
    },
    {
      "channelName": "백해_7",
      "cnt": 2819
    },
    {
      "channelName": "마계_9",
      "cnt": 2711
    },
    {
      "channelName": "천해천_4",
      "cnt": 2597
    },
    {
      "channelName": "천해천_44",
      "cnt": 2351
    },
    {
      "channelName": "천해천_11",
      "cnt": 2237
    },
    {
      "channelName": "천해천_3",
      "cnt": 2170
    },
    {
      "channelName": "마계_1",
      "cnt": 2141
    },
    {
      "channelName": "천해천_17",
      "cnt": 2138
    },
    {
      "channelName": "천해천_15",
      "cnt": 2041
    },
    {
      "channelName": "지벤 황국_10",
      "cnt": 2038
    },
    {
      "channelName": "중천_7",
      "cnt": 2026
    },
    {
      "channelName": "천해천_50",
      "cnt": 1955
    },
    {
      "channelName": "마계_4",
      "cnt": 1916
    },
    {
      "channelName": "천해천_2",
      "cnt": 1899
    },
    {
      "channelName": "천해천_18",
      "cnt": 1892
    },
    {
      "channelName": "벨 마이어 공국_10",
      "cnt": 1881
    }
  ];