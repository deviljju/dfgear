const updateDate = '03.20 18:00';
const userCnt = 1017284;
const beginCnt = 1017004;
const legacyCnt = 84962;
const kirinCnt = 46704;
const starCnt = 46385;
// 숭배자505,상던513-0,환요513-1,항아리504
const getData = [739099,154560,116188,6953];
const beginRate = "1 : 9.67 : 24.63";

const timeCnts = [
  {
    "h": 0,
    "cnt": 37934
  },
  {
    "h": 1,
    "cnt": 26118
  },
  {
    "h": 2,
    "cnt": 17341
  },
  {
    "h": 3,
    "cnt": 11313
  },
  {
    "h": 4,
    "cnt": 7475
  },
  {
    "h": 5,
    "cnt": 5555
  },
  {
    "h": 6,
    "cnt": 30745
  },
  {
    "h": 7,
    "cnt": 24355
  },
  {
    "h": 8,
    "cnt": 25459
  },
  {
    "h": 9,
    "cnt": 31921
  },
  {
    "h": 10,
    "cnt": 45709
  },
  {
    "h": 11,
    "cnt": 51977
  },
  {
    "h": 12,
    "cnt": 55394
  },
  {
    "h": 13,
    "cnt": 57545
  },
  {
    "h": 14,
    "cnt": 58913
  },
  {
    "h": 15,
    "cnt": 58327
  },
  {
    "h": 16,
    "cnt": 56726
  },
  {
    "h": 17,
    "cnt": 54023
  },
  {
    "h": 18,
    "cnt": 55493
  },
  {
    "h": 19,
    "cnt": 63343
  },
  {
    "h": 20,
    "cnt": 67349
  },
  {
    "h": 21,
    "cnt": 65723
  },
  {
    "h": 22,
    "cnt": 59463
  },
  {
    "h": 23,
    "cnt": 48810
  }
];

const beginCnts = [
  {
    "itemName": "영롱한 황금향의 영광 - 팔찌",
    "cnt": 24489,
    "itemId": "128a14815b5e02e63c8cba53ce2ac19e"
  },
  {
    "itemName": "영롱한 황금향의 축복 - 목걸이",
    "cnt": 24435,
    "itemId": "4ed2acf74d5cfa69947535f6a8af7c5d"
  },
  {
    "itemName": "영롱한 황금향의 꿈 - 반지",
    "cnt": 24404,
    "itemId": "8b38fd1925f030abf9154f9ef448d41a"
  },
  {
    "itemName": "혼돈의 정화 반지",
    "cnt": 24319,
    "itemId": "0801473c91a3bcc11f9ea84571034f69"
  },
  {
    "itemName": "용제의 공포를 심는 포효",
    "cnt": 24222,
    "itemId": "44350fa45d2c52776aa5ee1bcb623a1f"
  },
  {
    "itemName": "용제의 피를 머금은 흉아",
    "cnt": 24183,
    "itemId": "b56711cb913ec3e76c3932b59ffd98af"
  },
  {
    "itemName": "혼돈의 정화 목걸이",
    "cnt": 24178,
    "itemId": "634efedb77439c30128b6560278281f8"
  },
  {
    "itemName": "용제의 재해를 막는 비늘",
    "cnt": 24143,
    "itemId": "bd066206710390f3e6353ab82eaab1a1"
  },
  {
    "itemName": "견고한 행운이 깃든 팔찌",
    "cnt": 23919,
    "itemId": "1714a46bd51c67510c0cd4f30ae3242f"
  },
  {
    "itemName": "견고한 행운이 깃든 목걸이",
    "cnt": 23908,
    "itemId": "8177da9883506b6ef60bf0296b71dbde"
  },
  {
    "itemName": "넘치는 마력의 영역 목걸이",
    "cnt": 23840,
    "itemId": "4ae668f4ebd3ac277ed63348d3dcad8f"
  },
  {
    "itemName": "혼돈의 정화 팔찌",
    "cnt": 23791,
    "itemId": "8cda0e4d867c18bcc1f91fcd4d8493e0"
  },
  {
    "itemName": "견고한 행운이 깃든 반지",
    "cnt": 23714,
    "itemId": "127f30148084de5339713769683e2d67"
  },
  {
    "itemName": "과충전 - 한계를 가리키는 지침 팔찌",
    "cnt": 23637,
    "itemId": "35cfcfdef4a58f38cc291db0b005db57"
  },
  {
    "itemName": "과충전 - 한계를 여는 열쇠 목걸이",
    "cnt": 23635,
    "itemId": "02003739f9c1d138bc25b4e5fcc60a7c"
  },
  {
    "itemName": "넘치는 마력의 영역 팔찌",
    "cnt": 23591,
    "itemId": "bf5b1734fcea32d436095a357dae3038"
  },
  {
    "itemName": "대 여우의 영혼 목걸이",
    "cnt": 23473,
    "itemId": "e468101e457344d9824a0f1588152f06"
  },
  {
    "itemName": "과충전 - 한계를 돌파하는 균열 반지",
    "cnt": 23469,
    "itemId": "b10c3f4fd74d0886b9f15c1162ae7462"
  },
  {
    "itemName": "대 여우의 매혹 반지",
    "cnt": 23455,
    "itemId": "d3202f05592d04bb3b1ff144ef6c273d"
  },
  {
    "itemName": "넘치는 마력의 영역 반지",
    "cnt": 23431,
    "itemId": "7dfd210d865f3b98b4521ed97bf0a472"
  },
  {
    "itemName": "로열 페어리 팔찌",
    "cnt": 23406,
    "itemId": "38649c2d1efd86613624653fe835c190"
  },
  {
    "itemName": "로열 페어리 반지",
    "cnt": 23405,
    "itemId": "dc1167f78aae7c8f6ed6b29c14dd29e5"
  },
  {
    "itemName": "발할라의 여신 발키리 축복 반지",
    "cnt": 23404,
    "itemId": "e776eab981b7daac85f8faa28c2eaeb4"
  },
  {
    "itemName": "칠흑같은 그림자 속 팔찌 - 화",
    "cnt": 23379,
    "itemId": "0f1556d74a133bf1f32cc414e8c44001"
  },
  {
    "itemName": "칠흑같은 그림자 속 목걸이 - 혈",
    "cnt": 23347,
    "itemId": "ce90fd8107a2dec651b9f7c41a84888c"
  },
  {
    "itemName": "칠흑같은 그림자 속 반지 - 독",
    "cnt": 23325,
    "itemId": "cb015bdb6ca83dae7ccd7604ca558064"
  },
  {
    "itemName": "자연 - 천재지변 목걸이",
    "cnt": 23309,
    "itemId": "18bef43afc834d281b4e189218cb97fd"
  },
  {
    "itemName": "자연 - 천재지변 반지",
    "cnt": 23270,
    "itemId": "e15a039ef16cb42914a88ef74f2eef4e"
  },
  {
    "itemName": "로열 페어리 목걸이",
    "cnt": 23244,
    "itemId": "8683263b76f6822e92e46d4e080cd3f6"
  },
  {
    "itemName": "대 여우의 지혜 팔찌",
    "cnt": 23227,
    "itemId": "ab2e3267be4d5589118013d117276ba4"
  },
  {
    "itemName": "무리의 길잡이 반지",
    "cnt": 23223,
    "itemId": "60f2ce1a8ef8b2cf4dbf60b9f77b6148"
  },
  {
    "itemName": "발할라의 여신 발키리 수호 팔찌",
    "cnt": 23146,
    "itemId": "1696417c6db6398ea0ef00f8084184dc"
  },
  {
    "itemName": "자연 - 천재지변 팔찌",
    "cnt": 23097,
    "itemId": "50752f1905af83563e5e2f5b746c8cc4"
  },
  {
    "itemName": "발할라의 여신 발키리 천상 목걸이",
    "cnt": 23074,
    "itemId": "28fc8eb2f6cd1cde8fefe8aca6a9ceaa"
  },
  {
    "itemName": "무리의 길잡이 팔목 보호대",
    "cnt": 23033,
    "itemId": "5f0746d290ec872e9d4e66741130bafc"
  },
  {
    "itemName": "무리의 길잡이 목걸이",
    "cnt": 22813,
    "itemId": "6aa0978e051611de538b83176ed3026a"
  },
  {
    "itemName": "태초의 별 - 도",
    "cnt": 6064,
    "itemId": "4e1cca3ced7246d44e36f0fe455f9d9c"
  },
  {
    "itemName": "태초의 별 - 너클",
    "cnt": 4321,
    "itemId": "46902219ed312eea382fd87dfda1dcac"
  },
  {
    "itemName": "태초의 별 - 십자가",
    "cnt": 4261,
    "itemId": "c3f04d7307e8310fc19bcd4fa9a7c9bf"
  },
  {
    "itemName": "역작 금인필살도",
    "cnt": 4017,
    "itemId": "88d17cd5fc3fb1e5c474d6780035a492"
  },
  {
    "itemName": "양얼의 나뭇가지 : 초",
    "cnt": 3904,
    "itemId": "53569c0a2863a602cf130d6abbe64e0b"
  },
  {
    "itemName": "무형검 - 생사경",
    "cnt": 3887,
    "itemId": "ecc073371c23fbac58ce6a055a131ad3"
  },
  {
    "itemName": "특형 - 호위무신의 운검",
    "cnt": 3824,
    "itemId": "f4ebda346ccd4281a9c37de9cb8936a5"
  },
  {
    "itemName": "태초의 별 - 대검",
    "cnt": 3217,
    "itemId": "9f0dde7a9c78384a9c5a80ff41f98e68"
  },
  {
    "itemName": "태초의 별 - 소검",
    "cnt": 3141,
    "itemId": "eb5666ec6e70818cfa40bbfe08580877"
  },
  {
    "itemName": "태초의 별 - 빗자루",
    "cnt": 3037,
    "itemId": "f3218f22b56f9f69ff623eab33a7ba0a"
  },
  {
    "itemName": "미스트 파이오니어",
    "cnt": 2953,
    "itemId": "102b6df1d79cfc6e77ea2718dafec309"
  },
  {
    "itemName": "태초의 별 - 장궁",
    "cnt": 2864,
    "itemId": "16daa7ea0285c2b16ab3ac7b278d61a9"
  },
  {
    "itemName": "태초의 별 - 리볼버",
    "cnt": 2817,
    "itemId": "31b3b9cee22a3ffea2128a481dbcf8ca"
  },
  {
    "itemName": "시크릿 콘서트",
    "cnt": 2590,
    "itemId": "34c4ba7289d9d0dea8ce3880bc6f8352"
  },
  {
    "itemName": "패밀리 팔케",
    "cnt": 2583,
    "itemId": "a3e557056061811337aa67eb0ef4a704"
  },
  {
    "itemName": "하쿠나마타타 : 원더풀",
    "cnt": 2459,
    "itemId": "2c5f996a25418be71b288c22fa2f9193"
  },
  {
    "itemName": "태초의 별 - 선현궁",
    "cnt": 2429,
    "itemId": "55ef0a5c7c8bda92c0451b1c75fd971e"
  },
  {
    "itemName": "넨 아스트론",
    "cnt": 2424,
    "itemId": "52e014d425c5900fb2691c91aa8891f5"
  },
  {
    "itemName": "양치기의 마지막 진실",
    "cnt": 2424,
    "itemId": "f46fe4c07fda3827871b6bb8d52a28b4"
  },
  {
    "itemName": "해방된 지식",
    "cnt": 2392,
    "itemId": "66f7d8714fa7810df4ffdf36e8c97557"
  },
  {
    "itemName": "태초의 별 - 둔기",
    "cnt": 2366,
    "itemId": "8888dd81dfabf5f1dddcb4fa982aa410"
  },
  {
    "itemName": "파운더 오브 마나",
    "cnt": 2359,
    "itemId": "9a72569c4bff3e862ebcbf4edc9d9f99"
  },
  {
    "itemName": "리리스, 디 이블",
    "cnt": 2358,
    "itemId": "8cd53eed89da72eb94486e0676a7194f"
  },
  {
    "itemName": "미완성 코스믹 건틀릿",
    "cnt": 2328,
    "itemId": "23c3a32b8c83337313f03ac82881e04f"
  },
  {
    "itemName": "태초의 별 - 크로스슈터",
    "cnt": 2327,
    "itemId": "fb581fde511ae040088795d5f761a774"
  },
  {
    "itemName": "인요의 황혼",
    "cnt": 2297,
    "itemId": "ec942349c845957a8ed9c6ad1db18475"
  },
  {
    "itemName": "앱솔루트 제로",
    "cnt": 2240,
    "itemId": "f52dae0b1e77c293f2ebf095557dc9f0"
  },
  {
    "itemName": "태초의 별 - 권투글러브",
    "cnt": 2232,
    "itemId": "752fe58eb2610840857c776b3a4db55e"
  },
  {
    "itemName": "멸망의 근원",
    "cnt": 2165,
    "itemId": "3838f6fa8a6f5c44a84e101715169bb4"
  },
  {
    "itemName": "폴링 스타 로저리",
    "cnt": 2157,
    "itemId": "4bb4e84551335ec0b22368859b502d96"
  },
  {
    "itemName": "태초의 별 - 에테리얼 보우",
    "cnt": 2099,
    "itemId": "d5e759883fabd926327c534627abdf0f"
  },
  {
    "itemName": "폭군의 본의",
    "cnt": 2094,
    "itemId": "64fb6109df6a1d62f45c2049faacf3cb"
  },
  {
    "itemName": "영원한 올리브 나무 십자가",
    "cnt": 2053,
    "itemId": "7fbc76b53ea0b985ef63b4a53a2e8aeb"
  },
  {
    "itemName": "태초의 별 - 로드",
    "cnt": 2047,
    "itemId": "c3e60ef4410a4d5f7e5fb2426894613b"
  },
  {
    "itemName": "소울 프레데터",
    "cnt": 2041,
    "itemId": "413aebce4d4cc7c7346aa6e32e27a6dd"
  },
  {
    "itemName": "태초의 별 - 광검",
    "cnt": 2016,
    "itemId": "40a67f2b93ea7e8014180e47b672ba58"
  },
  {
    "itemName": "태초의 별 - 봉",
    "cnt": 1937,
    "itemId": "3d43dc0356b4d1e805fb5d85d8b1f5a4"
  },
  {
    "itemName": "리턴드 스나이퍼 오브 블랙 로즈",
    "cnt": 1923,
    "itemId": "7b406b9951564c6485d209c90d71cb4e"
  },
  {
    "itemName": "우르반의 걸작",
    "cnt": 1920,
    "itemId": "9173c5067d0e368b18bf2e87500f9ac0"
  },
  {
    "itemName": "노블레스 오브 레인저",
    "cnt": 1904,
    "itemId": "d4f64370ea0e4436a988d8935fbba365"
  },
  {
    "itemName": "에볼루션 오토매틱 건",
    "cnt": 1878,
    "itemId": "f6746b73578df106b51df7907ecf05e9"
  },
  {
    "itemName": "태초의 별 - 핸드캐넌",
    "cnt": 1872,
    "itemId": "97480df0d7fe65a989143514791dd89c"
  },
  {
    "itemName": "태초의 별 - 자동권총",
    "cnt": 1841,
    "itemId": "31b7b7bc104551ffabf52b580a69c392"
  },
  {
    "itemName": "태초의 별 - 창",
    "cnt": 1801,
    "itemId": "5908737199ed3dbb63f749109760b277"
  },
  {
    "itemName": "얼어붙은 불꽃의 살",
    "cnt": 1792,
    "itemId": "3d1e831cdf674892355cca45d35541ee"
  },
  {
    "itemName": "태초의 별 - 스태프",
    "cnt": 1760,
    "itemId": "5a125390e4043b05f981e6583a7ed5ff"
  },
  {
    "itemName": "태초의 별 - 클로",
    "cnt": 1730,
    "itemId": "c831c093b447b149eddb151bd1ea478c"
  },
  {
    "itemName": "멸룡검 발뭉",
    "cnt": 1717,
    "itemId": "74bfcf0bd8b6998fc1e5a896d5a90fd7"
  },
  {
    "itemName": "태초의 별 - 배틀액스",
    "cnt": 1647,
    "itemId": "4a450f5c9fb64b353e7561d89aa35425"
  },
  {
    "itemName": "태초의 별 - 낫",
    "cnt": 1563,
    "itemId": "9e08f41c1efa53c838e51eb9f4e4e2a9"
  },
  {
    "itemName": "태초의 별 - 염주",
    "cnt": 1461,
    "itemId": "3464b2c0951154f5276371fac2546d3d"
  },
  {
    "itemName": "칠흑의 저주",
    "cnt": 1456,
    "itemId": "ed9e38706cb74cd8dc22344ac0672189"
  },
  {
    "itemName": "여제의 영롱한 은장도",
    "cnt": 1436,
    "itemId": "1bc8070a97e40822a8acf944587172ac"
  },
  {
    "itemName": "태초의 별 - 소태도",
    "cnt": 1428,
    "itemId": "d4032874bc3abd65cc0abbca610c83ce"
  },
  {
    "itemName": "태초의 별 - 토템",
    "cnt": 1428,
    "itemId": "7a48ac0810e04becab04028add44863f"
  },
  {
    "itemName": "태초의 별 - 단검",
    "cnt": 1415,
    "itemId": "2470861b2f05d1fb5e917f148ba4fc12"
  },
  {
    "itemName": "샤이닝 인페르노",
    "cnt": 1363,
    "itemId": "f6818a1fd4d3499b995ade1fe5ac76ed"
  },
  {
    "itemName": "만월 : 월광야천도",
    "cnt": 1343,
    "itemId": "cee3d65f9b96bc9356a38f8fe37222bc"
  },
  {
    "itemName": "로드 오브 호러",
    "cnt": 1334,
    "itemId": "bbbd88f7ee3d443bca540b6c4d5ae1d9"
  },
  {
    "itemName": "태초의 별 - 보우건",
    "cnt": 1333,
    "itemId": "6dad9986be24958e4a34ac8fbdd1c17f"
  },
  {
    "itemName": "Brutal-Saw",
    "cnt": 1324,
    "itemId": "717aaaf49d09b8e2cbb7fecf56d0f3e8"
  },
  {
    "itemName": "태초의 별 - 머스켓",
    "cnt": 1324,
    "itemId": "97f8b96a9af284b1181985075a9066ee"
  },
  {
    "itemName": "나스카 : 영혼의 심판",
    "cnt": 1323,
    "itemId": "08e41c036b44ff5f407a874b5bfc91c1"
  },
  {
    "itemName": "무영흑단살",
    "cnt": 1317,
    "itemId": "a326005c0d5de7e94b0cb95511ebebd2"
  },
  {
    "itemName": "태초의 별 - 중검",
    "cnt": 1309,
    "itemId": "2cb865aae36fdcb3a3231a654cb5e661"
  },
  {
    "itemName": "코어 오리진",
    "cnt": 1294,
    "itemId": "c36d82d0beb38c2bb576d9389a0320db"
  },
  {
    "itemName": "태초의 별 - 건틀릿",
    "cnt": 1289,
    "itemId": "4d082793556fe870683d6a2690d2d345"
  },
  {
    "itemName": "엠프레스 벳즈",
    "cnt": 1269,
    "itemId": "bbc3a1e0b819042979df672995a84d04"
  },
  {
    "itemName": "전장의 투신",
    "cnt": 1269,
    "itemId": "e47c02a78bfcd7d1bde959d9e3beac50"
  },
  {
    "itemName": "성장군 : 유성계",
    "cnt": 1268,
    "itemId": "d3760db625f3bd4bcde3ac5904fecac5"
  },
  {
    "itemName": "眞 : 흑룡언월도",
    "cnt": 1264,
    "itemId": "7ad9b001664f685f438ceae50444bf09"
  },
  {
    "itemName": "태초의 별 - 광창",
    "cnt": 1263,
    "itemId": "c20fca42d5353ca84db49efc212df1bc"
  },
  {
    "itemName": "태초의 별 - 차크라 웨펀",
    "cnt": 1232,
    "itemId": "226ba47a53e349e6d9a8dd2a2450e32a"
  },
  {
    "itemName": "태초의 별 - 투창",
    "cnt": 1229,
    "itemId": "f385a6dbe356cb602d24a04acba88d5c"
  },
  {
    "itemName": "태초의 별 - 미늘창",
    "cnt": 1205,
    "itemId": "c3a655013ed6f5eee3718e0be9525d03"
  },
  {
    "itemName": "태초의 별 - 완드",
    "cnt": 1197,
    "itemId": "94a64b9f8e13406436e3b0bc022a90c6"
  },
  {
    "itemName": "태초의 별 - 쌍검",
    "cnt": 1175,
    "itemId": "7ebe0a5d5f21c59a606096f912fd26f5"
  },
  {
    "itemName": "태초의 별 - 장도",
    "cnt": 1123,
    "itemId": "3809832c25cd3c458ea9e9a4d5d9bade"
  },
  {
    "itemName": "태초의 별 - 장창",
    "cnt": 1102,
    "itemId": "d0a08ee3dbf19301445164178a363b14"
  },
  {
    "itemName": "태초의 별 - 코어 블레이드",
    "cnt": 1087,
    "itemId": "624a32012cb42900e29310643995e54f"
  },
  {
    "itemName": "태초의 별 - 통파",
    "cnt": 1072,
    "itemId": "59744958524f70213168cfe1b89c9068"
  },
  {
    "itemName": "육도의 수레바퀴",
    "cnt": 1062,
    "itemId": "af2e8519f6b1684f2fb41de6fdb95d18"
  }
];

const channel10 = [
  {
    "channelName": "마계_7",
    "cnt": 23951
  },
  {
    "channelName": "중천_74",
    "cnt": 19007
  },
  {
    "channelName": "마계_10",
    "cnt": 16704
  },
  {
    "channelName": "중천_69",
    "cnt": 16142
  },
  {
    "channelName": "중천_77",
    "cnt": 13835
  },
  {
    "channelName": "중천_88",
    "cnt": 12826
  },
  {
    "channelName": "지벤 황국_7",
    "cnt": 12465
  },
  {
    "channelName": "중천_50",
    "cnt": 11187
  },
  {
    "channelName": "중천_47",
    "cnt": 10630
  },
  {
    "channelName": "중천_44",
    "cnt": 10437
  },
  {
    "channelName": "중천_89",
    "cnt": 10363
  },
  {
    "channelName": "벨 마이어 공국_1",
    "cnt": 9980
  },
  {
    "channelName": "중천_55",
    "cnt": 9782
  },
  {
    "channelName": "중천_52",
    "cnt": 9507
  },
  {
    "channelName": "중천_45",
    "cnt": 8797
  },
  {
    "channelName": "중천_40",
    "cnt": 8612
  },
  {
    "channelName": "중천_48",
    "cnt": 8381
  },
  {
    "channelName": "중천_49",
    "cnt": 7888
  },
  {
    "channelName": "중천_60",
    "cnt": 7876
  },
  {
    "channelName": "중천_43",
    "cnt": 7806
  },
  {
    "channelName": "중천_41",
    "cnt": 7789
  },
  {
    "channelName": "중천_46",
    "cnt": 7319
  },
  {
    "channelName": "백해_7",
    "cnt": 7213
  },
  {
    "channelName": "중천_51",
    "cnt": 7112
  },
  {
    "channelName": "중천_42",
    "cnt": 7105
  }
];