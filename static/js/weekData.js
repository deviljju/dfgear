const updateDate = '02.01 10:30';
const userCnt = 1801858;
const beginRate = "1 : 10.36 : 25.16";

const beginCnt = 9095999;
const legacyCnt = 789393;
const kirinCnt = 476932;
const starTotal = 840149;
const starCnt = 546506;
//             숭배자505, 상던513-0, 항아리504-0,      환요513-1,  레이드 507, 초월 516
const getData = [5746430, 1539236, (656239 + 29834), 622321, 501990, 97696];

const timeCnts = [
  {
    "h": 0,
    "cnt": 460066
  },
  {
    "h": 1,
    "cnt": 327552
  },
  {
    "h": 2,
    "cnt": 223671
  },
  {
    "h": 3,
    "cnt": 148045
  },
  {
    "h": 4,
    "cnt": 101074
  },
  {
    "h": 5,
    "cnt": 75498
  },
  {
    "h": 6,
    "cnt": 155451
  },
  {
    "h": 7,
    "cnt": 149135
  },
  {
    "h": 8,
    "cnt": 165159
  },
  {
    "h": 9,
    "cnt": 215905
  },
  {
    "h": 10,
    "cnt": 321091
  },
  {
    "h": 11,
    "cnt": 380167
  },
  {
    "h": 12,
    "cnt": 411125
  },
  {
    "h": 13,
    "cnt": 442171
  },
  {
    "h": 14,
    "cnt": 468851
  },
  {
    "h": 15,
    "cnt": 484970
  },
  {
    "h": 16,
    "cnt": 488921
  },
  {
    "h": 17,
    "cnt": 482257
  },
  {
    "h": 18,
    "cnt": 506413
  },
  {
    "h": 19,
    "cnt": 585215
  },
  {
    "h": 20,
    "cnt": 668516
  },
  {
    "h": 21,
    "cnt": 697129
  },
  {
    "h": 22,
    "cnt": 658951
  },
  {
    "h": 23,
    "cnt": 576411
  }
];

const beginCnts = [
  {
    "itemName": "용제의 피를 머금은 흉아",
    "cnt": 217585,
    "itemId": "b56711cb913ec3e76c3932b59ffd98af"
  },
  {
    "itemName": "용제의 공포를 심는 포효",
    "cnt": 217010,
    "itemId": "44350fa45d2c52776aa5ee1bcb623a1f"
  },
  {
    "itemName": "용제의 재해를 막는 비늘",
    "cnt": 216924,
    "itemId": "bd066206710390f3e6353ab82eaab1a1"
  },
  {
    "itemName": "영롱한 황금향의 축복 - 목걸이",
    "cnt": 216746,
    "itemId": "4ed2acf74d5cfa69947535f6a8af7c5d"
  },
  {
    "itemName": "영롱한 황금향의 영광 - 팔찌",
    "cnt": 216452,
    "itemId": "128a14815b5e02e63c8cba53ce2ac19e"
  },
  {
    "itemName": "영롱한 황금향의 꿈 - 반지",
    "cnt": 215530,
    "itemId": "8b38fd1925f030abf9154f9ef448d41a"
  },
  {
    "itemName": "혼돈의 정화 목걸이",
    "cnt": 214538,
    "itemId": "634efedb77439c30128b6560278281f8"
  },
  {
    "itemName": "혼돈의 정화 팔찌",
    "cnt": 214215,
    "itemId": "8cda0e4d867c18bcc1f91fcd4d8493e0"
  },
  {
    "itemName": "혼돈의 정화 반지",
    "cnt": 214047,
    "itemId": "0801473c91a3bcc11f9ea84571034f69"
  },
  {
    "itemName": "견고한 행운이 깃든 반지",
    "cnt": 213788,
    "itemId": "127f30148084de5339713769683e2d67"
  },
  {
    "itemName": "견고한 행운이 깃든 팔찌",
    "cnt": 213780,
    "itemId": "1714a46bd51c67510c0cd4f30ae3242f"
  },
  {
    "itemName": "견고한 행운이 깃든 목걸이",
    "cnt": 212820,
    "itemId": "8177da9883506b6ef60bf0296b71dbde"
  },
  {
    "itemName": "넘치는 마력의 영역 목걸이",
    "cnt": 207280,
    "itemId": "4ae668f4ebd3ac277ed63348d3dcad8f"
  },
  {
    "itemName": "넘치는 마력의 영역 반지",
    "cnt": 206826,
    "itemId": "7dfd210d865f3b98b4521ed97bf0a472"
  },
  {
    "itemName": "과충전 - 한계를 가리키는 지침 팔찌",
    "cnt": 206658,
    "itemId": "35cfcfdef4a58f38cc291db0b005db57"
  },
  {
    "itemName": "넘치는 마력의 영역 팔찌",
    "cnt": 206551,
    "itemId": "bf5b1734fcea32d436095a357dae3038"
  },
  {
    "itemName": "과충전 - 한계를 돌파하는 균열 반지",
    "cnt": 205747,
    "itemId": "b10c3f4fd74d0886b9f15c1162ae7462"
  },
  {
    "itemName": "과충전 - 한계를 여는 열쇠 목걸이",
    "cnt": 205692,
    "itemId": "02003739f9c1d138bc25b4e5fcc60a7c"
  },
  {
    "itemName": "대 여우의 매혹 반지",
    "cnt": 199427,
    "itemId": "d3202f05592d04bb3b1ff144ef6c273d"
  },
  {
    "itemName": "대 여우의 지혜 팔찌",
    "cnt": 199233,
    "itemId": "ab2e3267be4d5589118013d117276ba4"
  },
  {
    "itemName": "발할라의 여신 발키리 축복 반지",
    "cnt": 198856,
    "itemId": "e776eab981b7daac85f8faa28c2eaeb4"
  },
  {
    "itemName": "발할라의 여신 발키리 천상 목걸이",
    "cnt": 198856,
    "itemId": "28fc8eb2f6cd1cde8fefe8aca6a9ceaa"
  },
  {
    "itemName": "로열 페어리 반지",
    "cnt": 198649,
    "itemId": "dc1167f78aae7c8f6ed6b29c14dd29e5"
  },
  {
    "itemName": "대 여우의 영혼 목걸이",
    "cnt": 198632,
    "itemId": "e468101e457344d9824a0f1588152f06"
  },
  {
    "itemName": "발할라의 여신 발키리 수호 팔찌",
    "cnt": 198570,
    "itemId": "1696417c6db6398ea0ef00f8084184dc"
  },
  {
    "itemName": "로열 페어리 팔찌",
    "cnt": 198342,
    "itemId": "38649c2d1efd86613624653fe835c190"
  },
  {
    "itemName": "칠흑같은 그림자 속 팔찌 - 화",
    "cnt": 198040,
    "itemId": "0f1556d74a133bf1f32cc414e8c44001"
  },
  {
    "itemName": "로열 페어리 목걸이",
    "cnt": 197841,
    "itemId": "8683263b76f6822e92e46d4e080cd3f6"
  },
  {
    "itemName": "칠흑같은 그림자 속 반지 - 독",
    "cnt": 197557,
    "itemId": "cb015bdb6ca83dae7ccd7604ca558064"
  },
  {
    "itemName": "자연 - 천재지변 목걸이",
    "cnt": 197366,
    "itemId": "18bef43afc834d281b4e189218cb97fd"
  },
  {
    "itemName": "자연 - 천재지변 반지",
    "cnt": 197341,
    "itemId": "e15a039ef16cb42914a88ef74f2eef4e"
  },
  {
    "itemName": "칠흑같은 그림자 속 목걸이 - 혈",
    "cnt": 197119,
    "itemId": "ce90fd8107a2dec651b9f7c41a84888c"
  },
  {
    "itemName": "자연 - 천재지변 팔찌",
    "cnt": 197005,
    "itemId": "50752f1905af83563e5e2f5b746c8cc4"
  },
  {
    "itemName": "무리의 길잡이 반지",
    "cnt": 196096,
    "itemId": "60f2ce1a8ef8b2cf4dbf60b9f77b6148"
  },
  {
    "itemName": "무리의 길잡이 목걸이",
    "cnt": 195996,
    "itemId": "6aa0978e051611de538b83176ed3026a"
  },
  {
    "itemName": "무리의 길잡이 팔목 보호대",
    "cnt": 195755,
    "itemId": "5f0746d290ec872e9d4e66741130bafc"
  },
  {
    "itemName": "태초의 별 - 도",
    "cnt": 75372,
    "itemId": "4e1cca3ced7246d44e36f0fe455f9d9c"
  },
  {
    "itemName": "태초의 별 - 십자가",
    "cnt": 52854,
    "itemId": "c3f04d7307e8310fc19bcd4fa9a7c9bf"
  },
  {
    "itemName": "태초의 별 - 리볼버",
    "cnt": 51056,
    "itemId": "31b3b9cee22a3ffea2128a481dbcf8ca"
  },
  {
    "itemName": "태초의 별 - 너클",
    "cnt": 42353,
    "itemId": "46902219ed312eea382fd87dfda1dcac"
  },
  {
    "itemName": "무형검 - 생사경",
    "cnt": 38271,
    "itemId": "ecc073371c23fbac58ce6a055a131ad3"
  },
  {
    "itemName": "역작 금인필살도",
    "cnt": 38173,
    "itemId": "88d17cd5fc3fb1e5c474d6780035a492"
  },
  {
    "itemName": "양얼의 나뭇가지 : 초",
    "cnt": 37946,
    "itemId": "53569c0a2863a602cf130d6abbe64e0b"
  },
  {
    "itemName": "특형 - 호위무신의 운검",
    "cnt": 37894,
    "itemId": "f4ebda346ccd4281a9c37de9cb8936a5"
  },
  {
    "itemName": "태초의 별 - 빗자루",
    "cnt": 32267,
    "itemId": "f3218f22b56f9f69ff623eab33a7ba0a"
  },
  {
    "itemName": "태초의 별 - 선현궁",
    "cnt": 31844,
    "itemId": "55ef0a5c7c8bda92c0451b1c75fd971e"
  },
  {
    "itemName": "태초의 별 - 소검",
    "cnt": 29546,
    "itemId": "eb5666ec6e70818cfa40bbfe08580877"
  },
  {
    "itemName": "태초의 별 - 광검",
    "cnt": 29255,
    "itemId": "40a67f2b93ea7e8014180e47b672ba58"
  },
  {
    "itemName": "태초의 별 - 장궁",
    "cnt": 28702,
    "itemId": "16daa7ea0285c2b16ab3ac7b278d61a9"
  },
  {
    "itemName": "시크릿 콘서트",
    "cnt": 28531,
    "itemId": "34c4ba7289d9d0dea8ce3880bc6f8352"
  },
  {
    "itemName": "미스트 파이오니어",
    "cnt": 27647,
    "itemId": "102b6df1d79cfc6e77ea2718dafec309"
  },
  {
    "itemName": "태초의 별 - 대검",
    "cnt": 26884,
    "itemId": "9f0dde7a9c78384a9c5a80ff41f98e68"
  },
  {
    "itemName": "태초의 별 - 컴파운드 보우",
    "cnt": 24986,
    "itemId": "676656c9ac284f893ed8e3132e54b1a2"
  },
  {
    "itemName": "태초의 별 - 둔기",
    "cnt": 23683,
    "itemId": "8888dd81dfabf5f1dddcb4fa982aa410"
  },
  {
    "itemName": "태초의 별 - 크로스슈터",
    "cnt": 23019,
    "itemId": "fb581fde511ae040088795d5f761a774"
  },
  {
    "itemName": "패밀리 팔케",
    "cnt": 22967,
    "itemId": "a3e557056061811337aa67eb0ef4a704"
  },
  {
    "itemName": "레디언트 윙, 이카루스",
    "cnt": 22370,
    "itemId": "67fc555fe01cafaf2bc20557be53a7bb"
  },
  {
    "itemName": "해방된 지식",
    "cnt": 22147,
    "itemId": "66f7d8714fa7810df4ffdf36e8c97557"
  },
  {
    "itemName": "태초의 별 - 권투글러브",
    "cnt": 21944,
    "itemId": "752fe58eb2610840857c776b3a4db55e"
  },
  {
    "itemName": "양치기의 마지막 진실",
    "cnt": 21917,
    "itemId": "f46fe4c07fda3827871b6bb8d52a28b4"
  },
  {
    "itemName": "미완성 코스믹 건틀릿",
    "cnt": 21847,
    "itemId": "23c3a32b8c83337313f03ac82881e04f"
  },
  {
    "itemName": "하쿠나마타타 : 원더풀",
    "cnt": 21832,
    "itemId": "2c5f996a25418be71b288c22fa2f9193"
  },
  {
    "itemName": "앱솔루트 제로",
    "cnt": 21712,
    "itemId": "f52dae0b1e77c293f2ebf095557dc9f0"
  },
  {
    "itemName": "넨 아스트론",
    "cnt": 21427,
    "itemId": "52e014d425c5900fb2691c91aa8891f5"
  },
  {
    "itemName": "파운더 오브 마나",
    "cnt": 21404,
    "itemId": "9a72569c4bff3e862ebcbf4edc9d9f99"
  },
  {
    "itemName": "리리스, 디 이블",
    "cnt": 21372,
    "itemId": "8cd53eed89da72eb94486e0676a7194f"
  },
  {
    "itemName": "노블레스 오브 레인저",
    "cnt": 21089,
    "itemId": "d4f64370ea0e4436a988d8935fbba365"
  },
  {
    "itemName": "리턴드 스나이퍼 오브 블랙 로즈",
    "cnt": 20796,
    "itemId": "7b406b9951564c6485d209c90d71cb4e"
  },
  {
    "itemName": "태초의 별 - 에테리얼 보우",
    "cnt": 20609,
    "itemId": "d5e759883fabd926327c534627abdf0f"
  },
  {
    "itemName": "태초의 별 - 봉",
    "cnt": 20585,
    "itemId": "3d43dc0356b4d1e805fb5d85d8b1f5a4"
  },
  {
    "itemName": "폴링 스타 로저리",
    "cnt": 20532,
    "itemId": "4bb4e84551335ec0b22368859b502d96"
  },
  {
    "itemName": "소울 프레데터",
    "cnt": 20419,
    "itemId": "413aebce4d4cc7c7346aa6e32e27a6dd"
  },
  {
    "itemName": "우르반의 걸작",
    "cnt": 20406,
    "itemId": "9173c5067d0e368b18bf2e87500f9ac0"
  },
  {
    "itemName": "영원한 올리브 나무 십자가",
    "cnt": 20398,
    "itemId": "7fbc76b53ea0b985ef63b4a53a2e8aeb"
  },
  {
    "itemName": "얼어붙은 불꽃의 살",
    "cnt": 20341,
    "itemId": "3d1e831cdf674892355cca45d35541ee"
  },
  {
    "itemName": "에볼루션 오토매틱 건",
    "cnt": 20337,
    "itemId": "f6746b73578df106b51df7907ecf05e9"
  },
  {
    "itemName": "멸망의 근원",
    "cnt": 20317,
    "itemId": "3838f6fa8a6f5c44a84e101715169bb4"
  },
  {
    "itemName": "인요의 황혼",
    "cnt": 20242,
    "itemId": "ec942349c845957a8ed9c6ad1db18475"
  },
  {
    "itemName": "폭군의 본의",
    "cnt": 20197,
    "itemId": "64fb6109df6a1d62f45c2049faacf3cb"
  },
  {
    "itemName": "태초의 별 - 로드",
    "cnt": 20016,
    "itemId": "c3e60ef4410a4d5f7e5fb2426894613b"
  },
  {
    "itemName": "태초의 별 - 핸드캐넌",
    "cnt": 18426,
    "itemId": "97480df0d7fe65a989143514791dd89c"
  },
  {
    "itemName": "태초의 별 - 창",
    "cnt": 16745,
    "itemId": "5908737199ed3dbb63f749109760b277"
  },
  {
    "itemName": "태초의 별 - 자동권총",
    "cnt": 16514,
    "itemId": "31b7b7bc104551ffabf52b580a69c392"
  },
  {
    "itemName": "태초의 별 - 배틀액스",
    "cnt": 16477,
    "itemId": "4a450f5c9fb64b353e7561d89aa35425"
  },
  {
    "itemName": "태초의 별 - 스태프",
    "cnt": 15912,
    "itemId": "5a125390e4043b05f981e6583a7ed5ff"
  },
  {
    "itemName": "태초의 별 - 낫",
    "cnt": 15526,
    "itemId": "9e08f41c1efa53c838e51eb9f4e4e2a9"
  },
  {
    "itemName": "태초의 별 - 클로",
    "cnt": 15215,
    "itemId": "c831c093b447b149eddb151bd1ea478c"
  },
  {
    "itemName": "멸룡검 발뭉",
    "cnt": 14744,
    "itemId": "74bfcf0bd8b6998fc1e5a896d5a90fd7"
  },
  {
    "itemName": "태초의 별 - 보우건",
    "cnt": 13834,
    "itemId": "6dad9986be24958e4a34ac8fbdd1c17f"
  },
  {
    "itemName": "태초의 별 - 단검",
    "cnt": 13499,
    "itemId": "2470861b2f05d1fb5e917f148ba4fc12"
  },
  {
    "itemName": "태초의 별 - 소태도",
    "cnt": 13243,
    "itemId": "d4032874bc3abd65cc0abbca610c83ce"
  },
  {
    "itemName": "태초의 별 - 염주",
    "cnt": 12953,
    "itemId": "3464b2c0951154f5276371fac2546d3d"
  },
  {
    "itemName": "태초의 별 - 토템",
    "cnt": 12889,
    "itemId": "7a48ac0810e04becab04028add44863f"
  },
  {
    "itemName": "태초의 별 - 머스켓",
    "cnt": 12732,
    "itemId": "97f8b96a9af284b1181985075a9066ee"
  },
  {
    "itemName": "칠흑의 저주",
    "cnt": 12671,
    "itemId": "ed9e38706cb74cd8dc22344ac0672189"
  },
  {
    "itemName": "태초의 별 - 광창",
    "cnt": 12455,
    "itemId": "c20fca42d5353ca84db49efc212df1bc"
  },
  {
    "itemName": "여제의 영롱한 은장도",
    "cnt": 12176,
    "itemId": "1bc8070a97e40822a8acf944587172ac"
  },
  {
    "itemName": "샤이닝 인페르노",
    "cnt": 12109,
    "itemId": "f6818a1fd4d3499b995ade1fe5ac76ed"
  },
  {
    "itemName": "로드 오브 호러",
    "cnt": 12039,
    "itemId": "bbbd88f7ee3d443bca540b6c4d5ae1d9"
  },
  {
    "itemName": "무영흑단살",
    "cnt": 11692,
    "itemId": "a326005c0d5de7e94b0cb95511ebebd2"
  },
  {
    "itemName": "성장군 : 유성계",
    "cnt": 11612,
    "itemId": "d3760db625f3bd4bcde3ac5904fecac5"
  },
  {
    "itemName": "나스카 : 영혼의 심판",
    "cnt": 11556,
    "itemId": "08e41c036b44ff5f407a874b5bfc91c1"
  },
  {
    "itemName": "태초의 별 - 건틀릿",
    "cnt": 11543,
    "itemId": "4d082793556fe870683d6a2690d2d345"
  },
  {
    "itemName": "태초의 별 - 중검",
    "cnt": 11539,
    "itemId": "2cb865aae36fdcb3a3231a654cb5e661"
  },
  {
    "itemName": "전장의 투신",
    "cnt": 11533,
    "itemId": "e47c02a78bfcd7d1bde959d9e3beac50"
  },
  {
    "itemName": "태초의 별 - 투창",
    "cnt": 11464,
    "itemId": "f385a6dbe356cb602d24a04acba88d5c"
  },
  {
    "itemName": "眞 : 흑룡언월도",
    "cnt": 11447,
    "itemId": "7ad9b001664f685f438ceae50444bf09"
  },
  {
    "itemName": "만월 : 월광야천도",
    "cnt": 11387,
    "itemId": "cee3d65f9b96bc9356a38f8fe37222bc"
  },
  {
    "itemName": "Brutal-Saw",
    "cnt": 11375,
    "itemId": "717aaaf49d09b8e2cbb7fecf56d0f3e8"
  },
  {
    "itemName": "태초의 별 - 미늘창",
    "cnt": 11243,
    "itemId": "c3a655013ed6f5eee3718e0be9525d03"
  },
  {
    "itemName": "코어 오리진",
    "cnt": 11220,
    "itemId": "c36d82d0beb38c2bb576d9389a0320db"
  },
  {
    "itemName": "태초의 별 - 완드",
    "cnt": 11166,
    "itemId": "94a64b9f8e13406436e3b0bc022a90c6"
  },
  {
    "itemName": "엠프레스 벳즈",
    "cnt": 11052,
    "itemId": "bbc3a1e0b819042979df672995a84d04"
  },
  {
    "itemName": "태초의 별 - 차크라 웨펀",
    "cnt": 10765,
    "itemId": "226ba47a53e349e6d9a8dd2a2450e32a"
  },
  {
    "itemName": "태초의 별 - 장도",
    "cnt": 10331,
    "itemId": "3809832c25cd3c458ea9e9a4d5d9bade"
  },
  {
    "itemName": "태초의 별 - 통파",
    "cnt": 10183,
    "itemId": "59744958524f70213168cfe1b89c9068"
  },
  {
    "itemName": "태초의 별 - 쌍검",
    "cnt": 10061,
    "itemId": "7ebe0a5d5f21c59a606096f912fd26f5"
  },
  {
    "itemName": "태초의 별 - 장창",
    "cnt": 10002,
    "itemId": "d0a08ee3dbf19301445164178a363b14"
  },
  {
    "itemName": "태초의 별 - 코어 블레이드",
    "cnt": 9392,
    "itemId": "624a32012cb42900e29310643995e54f"
  },
  {
    "itemName": "육도의 수레바퀴",
    "cnt": 9213,
    "itemId": "af2e8519f6b1684f2fb41de6fdb95d18"
  }
];

const digacy = [
  {
    "itemName": "억압 - 별을 꿈꿨던 눈동자",
    "cnt": 390,
    "itemId": "37033cc005f2ab8c3ec42e6f971e7fdf"
  },
  {
    "itemName": "억압 - 구속된 공작의 아귀",
    "cnt": 346,
    "itemId": "1beea18b7b0d7edbd5d6f41265207c73"
  },
  {
    "itemName": "억압 - 요도 : 날뛰는 흑혈",
    "cnt": 330,
    "itemId": "dff71f52e7c60da00f33edb582413638"
  },
  {
    "itemName": "억압 - 끓어오르는 피의 그림자",
    "cnt": 325,
    "itemId": "309bdf994245a04c3ff7763d08c5244a"
  },
  {
    "itemName": "억압 - 찢어지는 비명의 메아리",
    "cnt": 311,
    "itemId": "79c52fac4c9b4bb5d70d2c5880454060"
  },
  {
    "itemName": "억압 - 짐조 : 독을 마시는 새",
    "cnt": 272,
    "itemId": "17795a6a478061bca36d8b0544f0255c"
  },
  {
    "itemName": "억압 - 검은 숨결의 히드라",
    "cnt": 209,
    "itemId": "982774dee300cf72603008133dae9ce8"
  },
  {
    "itemName": "억압 - 더러운 별의 지배자",
    "cnt": 186,
    "itemId": "8a6f0f122e37d5dfae8bef93bcd557ba"
  },
  {
    "itemName": "억압 - 끝없는 분노의 지팡이",
    "cnt": 171,
    "itemId": "911844dc4ceaabec00537feb60fc3a13"
  },
  {
    "itemName": "억압 - 만개하는 불신의 눈",
    "cnt": 170,
    "itemId": "ae89549aca28cc5ca4e162d21e535b91"
  },
  {
    "itemName": "억압 - 오염된 피의 쾌",
    "cnt": 166,
    "itemId": "e5f44bc789463ad94f781eaab1660804"
  },
  {
    "itemName": "억압 - 재앙의 송곳니",
    "cnt": 164,
    "itemId": "6aeca595f1b6f1c33e28f8d51c3f5b89"
  },
  {
    "itemName": "억압 - 묘혈의 배틀액스",
    "cnt": 158,
    "itemId": "15714b939de18f17f1ef08918ee59775"
  },
  {
    "itemName": "억압 - 일루젼 베놈 로저리",
    "cnt": 157,
    "itemId": "9bcaae8facee36e00477aafcf5112a44"
  },
  {
    "itemName": "억압 - 흘러내리는 썩은 피",
    "cnt": 156,
    "itemId": "5551e0d4a5f52557e839d6123b578164"
  },
  {
    "itemName": "억압 - 썩은 시체의 아귀",
    "cnt": 156,
    "itemId": "e51e90d38b7574e9ee5fb68798acc9c7"
  },
  {
    "itemName": "억압 - 베놈 앱서버",
    "cnt": 155,
    "itemId": "3a08355ea464fafec89d3f91f68dbadb"
  },
  {
    "itemName": "억압 - 아우게이오우 : 이름 잃은 자의 피리",
    "cnt": 153,
    "itemId": "c400b1b06d823de30763738c3c9b80f2"
  },
  {
    "itemName": "억압 - 광포한 비명의 분노",
    "cnt": 153,
    "itemId": "c06143d91e1ff5f72ab94502944936cd"
  },
  {
    "itemName": "억압 - 유혹을 부르는 선율",
    "cnt": 149,
    "itemId": "a3562f364f528c6f266b4870b44eea00"
  },
  {
    "itemName": "억압 - 구속의 단죄",
    "cnt": 149,
    "itemId": "dbc85cd59ff4c3227a4d9ed5194fd56c"
  },
  {
    "itemName": "억압 - 비정이 깃든 고목",
    "cnt": 145,
    "itemId": "e42f57487cf82bcaa552c8b504eae199"
  },
  {
    "itemName": "억압 - 종언을 끊어내는 주먹",
    "cnt": 131,
    "itemId": "7f4113c71514d87875fa89bcd4fb7d4c"
  },
  {
    "itemName": "억압 - 모독을 속삭이는 깃",
    "cnt": 129,
    "itemId": "d04479324ca7899a7528b85c4142b85b"
  },
  {
    "itemName": "억압 - 육신에 스민 재앙",
    "cnt": 123,
    "itemId": "c4b4983d03a1a81abd8b385dc4c2a5d8"
  },
  {
    "itemName": "억압 - 천지를 뒤흔드는 공포",
    "cnt": 112,
    "itemId": "3551749a761618a1b2db3247b64df33a"
  },
  {
    "itemName": "억압 - 만 갈래로 뻗어가는 질병",
    "cnt": 112,
    "itemId": "a09886810f6bc5eb1b58074f61448928"
  },
  {
    "itemName": "억압 - 구속하는 공작의 차원도",
    "cnt": 57,
    "itemId": "1e8147c4dd8b4f726d772fdda7f85417"
  },
  {
    "itemName": "억압 - 원한 서린 재앙의 어금니",
    "cnt": 53,
    "itemId": "d21d29c6bb4b095cad5688ad66c017dc"
  },
  {
    "itemName": "억압 - 종언을 비트는 흑미",
    "cnt": 52,
    "itemId": "eea305bbc2c12313680cc47bc31a87d8"
  },
  {
    "itemName": "억압 - 흉터가 깃든 분노",
    "cnt": 51,
    "itemId": "028ba800f0a42f089a9fe827d419bac5"
  },
  {
    "itemName": "억압 - 종언의 선고",
    "cnt": 38,
    "itemId": "f6b010113f6231cde5f6a12e0dde2983"
  },
  {
    "itemName": "억압 - 위선자의 응징",
    "cnt": 32,
    "itemId": "630ed985d1f3fa908fdaf7a5d734bd13"
  },
  {
    "itemName": "억압 - 독기로 점철된 절규",
    "cnt": 32,
    "itemId": "bce7513fd5f8a162969a5a6105fe22e5"
  },
  {
    "itemName": "억압 - 질병이 깃든 허기",
    "cnt": 30,
    "itemId": "edebf708a3390beab095f1b76c60e7e8"
  },
  {
    "itemName": "억압 - 종언을 비튼 창",
    "cnt": 30,
    "itemId": "53a875def4d27135362286d09f07d68f"
  },
  {
    "itemName": "억압 - 흉터각인",
    "cnt": 28,
    "itemId": "0a3490331cc016e419b24e3ccf00901d"
  },
  {
    "itemName": "억압 - 구속의 대공 : 영원불멸의 추종자",
    "cnt": 28,
    "itemId": "22e52815e6a18b4d69b8488f33380c5d"
  },
  {
    "itemName": "억압 - 비명의 장검",
    "cnt": 26,
    "itemId": "515afabd2c476a761edad2435efba12a"
  },
  {
    "itemName": "억압 - 차원을 베는 영혼검",
    "cnt": 25,
    "itemId": "a40dff57e56278da386499003bdeff9e"
  },
  {
    "itemName": "억압 - 불신의 단말마",
    "cnt": 22,
    "itemId": "9a417971a4f5052714d1bc1518224ee7"
  },
  {
    "itemName": "억압 - 부패한 심장검",
    "cnt": 6,
    "itemId": "da11b64832b23bded2aadd1e41319fdc"
  }
];

const channel10 = [
  {
    "channelName": "마계_7",
    "cnt": 281121
  },
  {
    "channelName": "마계_10",
    "cnt": 176984
  },
  {
    "channelName": "중천_74",
    "cnt": 131463
  },
  {
    "channelName": "지벤 황국_7",
    "cnt": 126490
  },
  {
    "channelName": "벨 마이어 공국_1",
    "cnt": 114879
  },
  {
    "channelName": "중천_77",
    "cnt": 103684
  },
  {
    "channelName": "중천_69",
    "cnt": 97125
  },
  {
    "channelName": "중천_50",
    "cnt": 91311
  },
  {
    "channelName": "중천_44",
    "cnt": 88940
  },
  {
    "channelName": "중천_88",
    "cnt": 76081
  },
  {
    "channelName": "중천_47",
    "cnt": 74660
  },
  {
    "channelName": "마계_9",
    "cnt": 72355
  },
  {
    "channelName": "마계_8",
    "cnt": 70986
  },
  {
    "channelName": "중천_40",
    "cnt": 67368
  },
  {
    "channelName": "중천_45",
    "cnt": 64257
  },
  {
    "channelName": "백해_7",
    "cnt": 62068
  },
  {
    "channelName": "중천_89",
    "cnt": 60545
  },
  {
    "channelName": "중천_48",
    "cnt": 60236
  },
  {
    "channelName": "중천_55",
    "cnt": 59337
  },
  {
    "channelName": "바하이트_7",
    "cnt": 59234
  },
  {
    "channelName": "바하이트_10",
    "cnt": 58338
  },
  {
    "channelName": "중천_49",
    "cnt": 57317
  },
  {
    "channelName": "백해_10",
    "cnt": 55244
  },
  {
    "channelName": "중천_41",
    "cnt": 54716
  },
  {
    "channelName": "중천_43",
    "cnt": 54433
  }
];