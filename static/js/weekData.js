const updateDate = '04.07 15:30';
const userCnt = 491343; // 1810908
const oathRate = "1 : 4.25 : 8.85";
const pledRate = "1 : 9.61 : 27.13";

const beginOathCnt = 33421; //9539646;
const beginPledCnt = 234653;
const legacyCnt = 989456;
const kirinCnt = 596648;
const starTotal = 1054033;
const starCnt = 684736;
//              조율자 550, 항아리552,    상던:557-0, 제작:554 환요:557-1, 레이드: 551, 초월 556
const getData = [196848, (26527 + 633), 17738, 15525, 8232, 2170, 452];


const timeOathCnts = [{ "h": 0, "cnt": 1288 }, { "h": 1, "cnt": 901 }, { "h": 2, "cnt": 572 }, { "h": 3, "cnt": 383 }, { "h": 4, "cnt": 264 }, { "h": 5, "cnt": 208 }, { "h": 6, "cnt": 646 }, { "h": 7, "cnt": 796 }, { "h": 8, "cnt": 851 }, { "h": 9, "cnt": 1039 }, { "h": 10, "cnt": 1474 }, { "h": 11, "cnt": 1749 }, { "h": 12, "cnt": 1901 }, { "h": 13, "cnt": 1815 }, { "h": 14, "cnt": 1824 }, { "h": 15, "cnt": 1848 }, { "h": 16, "cnt": 1776 }, { "h": 17, "cnt": 1677 }, { "h": 18, "cnt": 1767 }, { "h": 19, "cnt": 2069 }, { "h": 20, "cnt": 2251 }, { "h": 21, "cnt": 2235 }, { "h": 22, "cnt": 1973 }, { "h": 23, "cnt": 1715 }];

const timePledCnts = [{ "h": 0, "cnt": 9176 }, { "h": 1, "cnt": 6227 }, { "h": 2, "cnt": 4150 }, { "h": 3, "cnt": 2794 }, { "h": 4, "cnt": 1896 }, { "h": 5, "cnt": 1379 }, { "h": 6, "cnt": 4690 }, { "h": 7, "cnt": 5578 }, { "h": 8, "cnt": 5853 }, { "h": 9, "cnt": 7120 }, { "h": 10, "cnt": 9882 }, { "h": 11, "cnt": 11980 }, { "h": 12, "cnt": 13020 }, { "h": 13, "cnt": 13142 }, { "h": 14, "cnt": 13089 }, { "h": 15, "cnt": 13286 }, { "h": 16, "cnt": 12606 }, { "h": 17, "cnt": 12143 }, { "h": 18, "cnt": 12627 }, { "h": 19, "cnt": 14455 }, { "h": 20, "cnt": 16034 }, { "h": 21, "cnt": 15988 }, { "h": 22, "cnt": 14670 }, { "h": 23, "cnt": 11945 }];

const beginCnts = [
  {
    "itemId": "155b20fbde6a0e9590293d4babf27ef8",
    "oathYn": 0,
    "cnt": 19842,
    "itemName": "정화 : 태초의 광휘 결정"
  },
  {
    "itemId": "b0c80cc630ca0d458eb9608774d47cd0",
    "oathYn": 0,
    "cnt": 19765,
    "itemName": "황금 : 태초의 광휘 결정",

  },
  {
    "itemId": "e48760bf96b6b9da793f5ee38733f523",
    "oathYn": 0,
    "cnt": 19588,
    "itemName": "자연 : 태초의 광휘 결정",

  },
  {
    "itemId": "9d7dece7ad3213817be4d371c86f488c",
    "oathYn": 0,
    "cnt": 19588,
    "itemName": "한계 : 태초의 광휘 결정",

  },
  {
    "itemId": "4f1a14f1124369922fa22bc45b768f74",
    "oathYn": 0,
    "cnt": 19574,
    "itemName": "행운 : 태초의 광휘 결정",

  },
  {
    "itemId": "c78cae5798f4b3d8991323d6e9274463",
    "oathYn": 0,
    "cnt": 19566,
    "itemName": "여우 : 태초의 광휘 결정",

  },
  {
    "itemId": "aa2ff87fb95331f8c728f398d0e13ccd",
    "oathYn": 0,
    "cnt": 19532,
    "itemName": "페어리 : 태초의 광휘 결정",

  },
  {
    "itemId": "04702c73a373a5f5c9a504f2123dc80b",
    "oathYn": 0,
    "cnt": 19499,
    "itemName": "무리 : 태초의 광휘 결정",

  },
  {
    "itemId": "5573cd49fa3b6248104b8b1319ef5671",
    "oathYn": 0,
    "cnt": 19455,
    "itemName": "용투 : 태초의 광휘 결정",

  },
  {
    "itemId": "0b991785c50799890f4b1821c309d39c",
    "oathYn": 0,
    "cnt": 19446,
    "itemName": "마력 : 태초의 광휘 결정",

  },
  {
    "itemId": "e5d4086fb45b43861155b291e3c02a47",
    "oathYn": 0,
    "cnt": 19437,
    "itemName": "발키리 : 태초의 광휘 결정",

  },
  {
    "itemId": "5fe3c29985f15b1fdafd4c4d6a247839",
    "oathYn": 0,
    "cnt": 19361,
    "itemName": "그림자 : 태초의 광휘 결정",

  }
];

const oath = [{
  "itemId": "d2dc93ebab431b6edd1680f87d118b59",
  "oathYn": 1,
  "cnt": 3029,
  "itemName": "찬란한 신념의 정화 서약",

},
{
  "itemId": "a41a6666654f4d5b4a29bde4a767a368",
  "oathYn": 1,
  "cnt": 2909,
  "itemName": "현실이 된 이상 속 황금 서약",

},
{
  "itemId": "97edf2846698bad4055330d5f7fe90b4",
  "oathYn": 1,
  "cnt": 2873,
  "itemName": "세계를 태우는 용투 서약",

},
{
  "itemId": "668569e5ec21cde2c90c573364ea167b",
  "oathYn": 1,
  "cnt": 2808,
  "itemName": "태초로 인도하는 페어리 서약",

},
{
  "itemId": "72adf78e645d9a821b9adcc98ef00044",
  "oathYn": 1,
  "cnt": 2805,
  "itemName": "태초의 어둠 속 그림자 서약",

},
{
  "itemId": "249bbdca841dbd7609887cd1051c5d32",
  "oathYn": 1,
  "cnt": 2804,
  "itemName": "근원에 닿은 자연 서약",

},
{
  "itemId": "15a42c9cfd0709f609b22bb590f0a1e8",
  "oathYn": 1,
  "cnt": 2764,
  "itemName": "강림한 여우 서약",

},
{
  "itemId": "a6e5b36dea755a4eea867623ea31083b",
  "oathYn": 1,
  "cnt": 2751,
  "itemName": "영원불변의 행운 서약",

},
{
  "itemId": "b5031dbb3e68f781441515ae6d5889b5",
  "oathYn": 1,
  "cnt": 2732,
  "itemName": "태초에 고동치는 마력 서약",

},
{
  "itemId": "db5930dcaf3723eae9189222eb94b124",
  "oathYn": 1,
  "cnt": 2666,
  "itemName": "태초에서 현신한 발키리 서약",

},
{
  "itemId": "4b2e60a6f302a35f6fe2c2c8f01181c2",
  "oathYn": 1,
  "cnt": 2663,
  "itemName": "초월하는 한계 서약",

},
{
  "itemId": "20103b50a325efab69497427d864aad8",
  "oathYn": 1,
  "cnt": 2617,
  "itemName": "태동하는 울림의 무리 서약",

}
];

const channel10 = [{ "channelName": "마계_7", "cnt": 1243 }, { "channelName": "천해천_7", "cnt": 760 }, { "channelName": "마계_10", "cnt": 759 }, { "channelName": "벨 마이어 공국_1", "cnt": 723 }, { "channelName": "지벤 황국_7", "cnt": 602 }, { "channelName": "천해천_1", "cnt": 372 }, { "channelName": "중천_7", "cnt": 360 }, { "channelName": "마계_8", "cnt": 342 }, { "channelName": "마계_9", "cnt": 326 }, { "channelName": "백해_10", "cnt": 313 }, { "channelName": "천해천_50", "cnt": 297 }, { "channelName": "백해_7", "cnt": 294 }, { "channelName": "천해천_44", "cnt": 275 }, { "channelName": "마계_1", "cnt": 260 }, { "channelName": "천해천_10", "cnt": 260 }, { "channelName": "중천_18", "cnt": 248 }, { "channelName": "천해천_17", "cnt": 217 }, { "channelName": "벨 마이어 공국_12", "cnt": 207 }, { "channelName": "천해천_15", "cnt": 206 }, { "channelName": "지벤 황국_10", "cnt": 202 }, { "channelName": "중천_10", "cnt": 201 }, { "channelName": "마계_4", "cnt": 200 }, { "channelName": "천해천_4", "cnt": 200 }, { "channelName": "바하이트_10", "cnt": 196 }, { "channelName": "천해천_48", "cnt": 196 }];