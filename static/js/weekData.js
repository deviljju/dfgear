const updateDate = '12.19 11:00';
const userCnt = 1768417;
const beginRate = "1 : 10.31 : 25.33";

const beginCnt = 8067655;
const legacyCnt = 707158;
const kirinCnt = 427799;
const starTotal = 736825;
const starCnt = 474570;
//             숭배자505, 상던513-0, 환요513-1, 항아리504-0, 레이드 507, 초월 516
const getData = [5130422, 1393944, 586622, (541252 + 18565), 396891, 75897];

const timeCnts = [
  {
    "h": 0,
    "cnt": 402590
  },
  {
    "h": 1,
    "cnt": 284854
  },
  {
    "h": 2,
    "cnt": 193350
  },
  {
    "h": 3,
    "cnt": 127843
  },
  {
    "h": 4,
    "cnt": 86908
  },
  {
    "h": 5,
    "cnt": 65379
  },
  {
    "h": 6,
    "cnt": 142930
  },
  {
    "h": 7,
    "cnt": 135778
  },
  {
    "h": 8,
    "cnt": 149387
  },
  {
    "h": 9,
    "cnt": 194425
  },
  {
    "h": 10,
    "cnt": 286073
  },
  {
    "h": 11,
    "cnt": 338935
  },
  {
    "h": 12,
    "cnt": 366764
  },
  {
    "h": 13,
    "cnt": 393939
  },
  {
    "h": 14,
    "cnt": 417368
  },
  {
    "h": 15,
    "cnt": 430858
  },
  {
    "h": 16,
    "cnt": 433577
  },
  {
    "h": 17,
    "cnt": 427613
  },
  {
    "h": 18,
    "cnt": 448610
  },
  {
    "h": 19,
    "cnt": 519173
  },
  {
    "h": 20,
    "cnt": 592282
  },
  {
    "h": 21,
    "cnt": 616548
  },
  {
    "h": 22,
    "cnt": 581316
  },
  {
    "h": 23,
    "cnt": 507093
  }
];

const beginCnts = [
  {
    "itemName": "용제의 피를 머금은 흉아",
    "cnt": 192079,
    "itemId": "b56711cb913ec3e76c3932b59ffd98af"
  },
  {
    "itemName": "영롱한 황금향의 영광 - 팔찌",
    "cnt": 191868,
    "itemId": "128a14815b5e02e63c8cba53ce2ac19e"
  },
  {
    "itemName": "영롱한 황금향의 축복 - 목걸이",
    "cnt": 191828,
    "itemId": "4ed2acf74d5cfa69947535f6a8af7c5d"
  },
  {
    "itemName": "용제의 공포를 심는 포효",
    "cnt": 191723,
    "itemId": "44350fa45d2c52776aa5ee1bcb623a1f"
  },
  {
    "itemName": "용제의 재해를 막는 비늘",
    "cnt": 191639,
    "itemId": "bd066206710390f3e6353ab82eaab1a1"
  },
  {
    "itemName": "영롱한 황금향의 꿈 - 반지",
    "cnt": 190785,
    "itemId": "8b38fd1925f030abf9154f9ef448d41a"
  },
  {
    "itemName": "견고한 행운이 깃든 팔찌",
    "cnt": 189820,
    "itemId": "1714a46bd51c67510c0cd4f30ae3242f"
  },
  {
    "itemName": "견고한 행운이 깃든 반지",
    "cnt": 189450,
    "itemId": "127f30148084de5339713769683e2d67"
  },
  {
    "itemName": "견고한 행운이 깃든 목걸이",
    "cnt": 188969,
    "itemId": "8177da9883506b6ef60bf0296b71dbde"
  },
  {
    "itemName": "혼돈의 정화 목걸이",
    "cnt": 188049,
    "itemId": "634efedb77439c30128b6560278281f8"
  },
  {
    "itemName": "혼돈의 정화 팔찌",
    "cnt": 187688,
    "itemId": "8cda0e4d867c18bcc1f91fcd4d8493e0"
  },
  {
    "itemName": "혼돈의 정화 반지",
    "cnt": 187443,
    "itemId": "0801473c91a3bcc11f9ea84571034f69"
  },
  {
    "itemName": "넘치는 마력의 영역 목걸이",
    "cnt": 183876,
    "itemId": "4ae668f4ebd3ac277ed63348d3dcad8f"
  },
  {
    "itemName": "넘치는 마력의 영역 반지",
    "cnt": 183542,
    "itemId": "7dfd210d865f3b98b4521ed97bf0a472"
  },
  {
    "itemName": "과충전 - 한계를 가리키는 지침 팔찌",
    "cnt": 183525,
    "itemId": "35cfcfdef4a58f38cc291db0b005db57"
  },
  {
    "itemName": "넘치는 마력의 영역 팔찌",
    "cnt": 183146,
    "itemId": "bf5b1734fcea32d436095a357dae3038"
  },
  {
    "itemName": "과충전 - 한계를 돌파하는 균열 반지",
    "cnt": 182824,
    "itemId": "b10c3f4fd74d0886b9f15c1162ae7462"
  },
  {
    "itemName": "과충전 - 한계를 여는 열쇠 목걸이",
    "cnt": 182540,
    "itemId": "02003739f9c1d138bc25b4e5fcc60a7c"
  },
  {
    "itemName": "대 여우의 매혹 반지",
    "cnt": 177911,
    "itemId": "d3202f05592d04bb3b1ff144ef6c273d"
  },
  {
    "itemName": "대 여우의 지혜 팔찌",
    "cnt": 177878,
    "itemId": "ab2e3267be4d5589118013d117276ba4"
  },
  {
    "itemName": "발할라의 여신 발키리 축복 반지",
    "cnt": 177383,
    "itemId": "e776eab981b7daac85f8faa28c2eaeb4"
  },
  {
    "itemName": "로열 페어리 반지",
    "cnt": 177370,
    "itemId": "dc1167f78aae7c8f6ed6b29c14dd29e5"
  },
  {
    "itemName": "로열 페어리 팔찌",
    "cnt": 177259,
    "itemId": "38649c2d1efd86613624653fe835c190"
  },
  {
    "itemName": "발할라의 여신 발키리 천상 목걸이",
    "cnt": 177252,
    "itemId": "28fc8eb2f6cd1cde8fefe8aca6a9ceaa"
  },
  {
    "itemName": "대 여우의 영혼 목걸이",
    "cnt": 177193,
    "itemId": "e468101e457344d9824a0f1588152f06"
  },
  {
    "itemName": "발할라의 여신 발키리 수호 팔찌",
    "cnt": 177188,
    "itemId": "1696417c6db6398ea0ef00f8084184dc"
  },
  {
    "itemName": "칠흑같은 그림자 속 팔찌 - 화",
    "cnt": 176897,
    "itemId": "0f1556d74a133bf1f32cc414e8c44001"
  },
  {
    "itemName": "로열 페어리 목걸이",
    "cnt": 176673,
    "itemId": "8683263b76f6822e92e46d4e080cd3f6"
  },
  {
    "itemName": "자연 - 천재지변 목걸이",
    "cnt": 176378,
    "itemId": "18bef43afc834d281b4e189218cb97fd"
  },
  {
    "itemName": "칠흑같은 그림자 속 반지 - 독",
    "cnt": 176321,
    "itemId": "cb015bdb6ca83dae7ccd7604ca558064"
  },
  {
    "itemName": "자연 - 천재지변 팔찌",
    "cnt": 176245,
    "itemId": "50752f1905af83563e5e2f5b746c8cc4"
  },
  {
    "itemName": "칠흑같은 그림자 속 목걸이 - 혈",
    "cnt": 176243,
    "itemId": "ce90fd8107a2dec651b9f7c41a84888c"
  },
  {
    "itemName": "자연 - 천재지변 반지",
    "cnt": 176213,
    "itemId": "e15a039ef16cb42914a88ef74f2eef4e"
  },
  {
    "itemName": "무리의 길잡이 반지",
    "cnt": 175354,
    "itemId": "60f2ce1a8ef8b2cf4dbf60b9f77b6148"
  },
  {
    "itemName": "무리의 길잡이 목걸이",
    "cnt": 174890,
    "itemId": "6aa0978e051611de538b83176ed3026a"
  },
  {
    "itemName": "무리의 길잡이 팔목 보호대",
    "cnt": 174749,
    "itemId": "5f0746d290ec872e9d4e66741130bafc"
  },
  {
    "itemName": "태초의 별 - 도",
    "cnt": 65279,
    "itemId": "4e1cca3ced7246d44e36f0fe455f9d9c"
  },
  {
    "itemName": "태초의 별 - 십자가",
    "cnt": 45034,
    "itemId": "c3f04d7307e8310fc19bcd4fa9a7c9bf"
  },
  {
    "itemName": "태초의 별 - 리볼버",
    "cnt": 43400,
    "itemId": "31b3b9cee22a3ffea2128a481dbcf8ca"
  },
  {
    "itemName": "태초의 별 - 너클",
    "cnt": 38160,
    "itemId": "46902219ed312eea382fd87dfda1dcac"
  },
  {
    "itemName": "무형검 - 생사경",
    "cnt": 33989,
    "itemId": "ecc073371c23fbac58ce6a055a131ad3"
  },
  {
    "itemName": "역작 금인필살도",
    "cnt": 33868,
    "itemId": "88d17cd5fc3fb1e5c474d6780035a492"
  },
  {
    "itemName": "양얼의 나뭇가지 : 초",
    "cnt": 33718,
    "itemId": "53569c0a2863a602cf130d6abbe64e0b"
  },
  {
    "itemName": "특형 - 호위무신의 운검",
    "cnt": 33663,
    "itemId": "f4ebda346ccd4281a9c37de9cb8936a5"
  },
  {
    "itemName": "태초의 별 - 빗자루",
    "cnt": 27862,
    "itemId": "f3218f22b56f9f69ff623eab33a7ba0a"
  },
  {
    "itemName": "태초의 별 - 선현궁",
    "cnt": 27062,
    "itemId": "55ef0a5c7c8bda92c0451b1c75fd971e"
  },
  {
    "itemName": "태초의 별 - 장궁",
    "cnt": 25553,
    "itemId": "16daa7ea0285c2b16ab3ac7b278d61a9"
  },
  {
    "itemName": "태초의 별 - 광검",
    "cnt": 25536,
    "itemId": "40a67f2b93ea7e8014180e47b672ba58"
  },
  {
    "itemName": "미스트 파이오니어",
    "cnt": 25112,
    "itemId": "102b6df1d79cfc6e77ea2718dafec309"
  },
  {
    "itemName": "태초의 별 - 소검",
    "cnt": 25108,
    "itemId": "eb5666ec6e70818cfa40bbfe08580877"
  },
  {
    "itemName": "시크릿 콘서트",
    "cnt": 25017,
    "itemId": "34c4ba7289d9d0dea8ce3880bc6f8352"
  },
  {
    "itemName": "태초의 별 - 대검",
    "cnt": 23731,
    "itemId": "9f0dde7a9c78384a9c5a80ff41f98e68"
  },
  {
    "itemName": "태초의 별 - 둔기",
    "cnt": 20842,
    "itemId": "8888dd81dfabf5f1dddcb4fa982aa410"
  },
  {
    "itemName": "패밀리 팔케",
    "cnt": 20805,
    "itemId": "a3e557056061811337aa67eb0ef4a704"
  },
  {
    "itemName": "태초의 별 - 컴파운드 보우",
    "cnt": 20612,
    "itemId": "676656c9ac284f893ed8e3132e54b1a2"
  },
  {
    "itemName": "태초의 별 - 크로스슈터",
    "cnt": 20533,
    "itemId": "fb581fde511ae040088795d5f761a774"
  },
  {
    "itemName": "해방된 지식",
    "cnt": 19832,
    "itemId": "66f7d8714fa7810df4ffdf36e8c97557"
  },
  {
    "itemName": "미완성 코스믹 건틀릿",
    "cnt": 19710,
    "itemId": "23c3a32b8c83337313f03ac82881e04f"
  },
  {
    "itemName": "양치기의 마지막 진실",
    "cnt": 19708,
    "itemId": "f46fe4c07fda3827871b6bb8d52a28b4"
  },
  {
    "itemName": "하쿠나마타타 : 원더풀",
    "cnt": 19673,
    "itemId": "2c5f996a25418be71b288c22fa2f9193"
  },
  {
    "itemName": "앱솔루트 제로",
    "cnt": 19508,
    "itemId": "f52dae0b1e77c293f2ebf095557dc9f0"
  },
  {
    "itemName": "넨 아스트론",
    "cnt": 19438,
    "itemId": "52e014d425c5900fb2691c91aa8891f5"
  },
  {
    "itemName": "파운더 오브 마나",
    "cnt": 19400,
    "itemId": "9a72569c4bff3e862ebcbf4edc9d9f99"
  },
  {
    "itemName": "태초의 별 - 권투글러브",
    "cnt": 19373,
    "itemId": "752fe58eb2610840857c776b3a4db55e"
  },
  {
    "itemName": "리리스, 디 이블",
    "cnt": 19312,
    "itemId": "8cd53eed89da72eb94486e0676a7194f"
  },
  {
    "itemName": "레디언트 윙, 이카루스",
    "cnt": 19067,
    "itemId": "67fc555fe01cafaf2bc20557be53a7bb"
  },
  {
    "itemName": "노블레스 오브 레인저",
    "cnt": 18727,
    "itemId": "d4f64370ea0e4436a988d8935fbba365"
  },
  {
    "itemName": "리턴드 스나이퍼 오브 블랙 로즈",
    "cnt": 18490,
    "itemId": "7b406b9951564c6485d209c90d71cb4e"
  },
  {
    "itemName": "태초의 별 - 봉",
    "cnt": 18355,
    "itemId": "3d43dc0356b4d1e805fb5d85d8b1f5a4"
  },
  {
    "itemName": "인요의 황혼",
    "cnt": 18238,
    "itemId": "ec942349c845957a8ed9c6ad1db18475"
  },
  {
    "itemName": "태초의 별 - 에테리얼 보우",
    "cnt": 18228,
    "itemId": "d5e759883fabd926327c534627abdf0f"
  },
  {
    "itemName": "폴링 스타 로저리",
    "cnt": 18213,
    "itemId": "4bb4e84551335ec0b22368859b502d96"
  },
  {
    "itemName": "소울 프레데터",
    "cnt": 18157,
    "itemId": "413aebce4d4cc7c7346aa6e32e27a6dd"
  },
  {
    "itemName": "영원한 올리브 나무 십자가",
    "cnt": 18077,
    "itemId": "7fbc76b53ea0b985ef63b4a53a2e8aeb"
  },
  {
    "itemName": "우르반의 걸작",
    "cnt": 18070,
    "itemId": "9173c5067d0e368b18bf2e87500f9ac0"
  },
  {
    "itemName": "얼어붙은 불꽃의 살",
    "cnt": 18049,
    "itemId": "3d1e831cdf674892355cca45d35541ee"
  },
  {
    "itemName": "에볼루션 오토매틱 건",
    "cnt": 18044,
    "itemId": "f6746b73578df106b51df7907ecf05e9"
  },
  {
    "itemName": "멸망의 근원",
    "cnt": 18026,
    "itemId": "3838f6fa8a6f5c44a84e101715169bb4"
  },
  {
    "itemName": "폭군의 본의",
    "cnt": 17844,
    "itemId": "64fb6109df6a1d62f45c2049faacf3cb"
  },
  {
    "itemName": "태초의 별 - 로드",
    "cnt": 17758,
    "itemId": "c3e60ef4410a4d5f7e5fb2426894613b"
  },
  {
    "itemName": "태초의 별 - 핸드캐넌",
    "cnt": 16147,
    "itemId": "97480df0d7fe65a989143514791dd89c"
  },
  {
    "itemName": "태초의 별 - 창",
    "cnt": 14729,
    "itemId": "5908737199ed3dbb63f749109760b277"
  },
  {
    "itemName": "태초의 별 - 자동권총",
    "cnt": 14664,
    "itemId": "31b7b7bc104551ffabf52b580a69c392"
  },
  {
    "itemName": "태초의 별 - 배틀액스",
    "cnt": 14500,
    "itemId": "4a450f5c9fb64b353e7561d89aa35425"
  },
  {
    "itemName": "태초의 별 - 스태프",
    "cnt": 14062,
    "itemId": "5a125390e4043b05f981e6583a7ed5ff"
  },
  {
    "itemName": "태초의 별 - 낫",
    "cnt": 13690,
    "itemId": "9e08f41c1efa53c838e51eb9f4e4e2a9"
  },
  {
    "itemName": "태초의 별 - 클로",
    "cnt": 13402,
    "itemId": "c831c093b447b149eddb151bd1ea478c"
  },
  {
    "itemName": "멸룡검 발뭉",
    "cnt": 13152,
    "itemId": "74bfcf0bd8b6998fc1e5a896d5a90fd7"
  },
  {
    "itemName": "태초의 별 - 보우건",
    "cnt": 12209,
    "itemId": "6dad9986be24958e4a34ac8fbdd1c17f"
  },
  {
    "itemName": "태초의 별 - 단검",
    "cnt": 11953,
    "itemId": "2470861b2f05d1fb5e917f148ba4fc12"
  },
  {
    "itemName": "태초의 별 - 소태도",
    "cnt": 11705,
    "itemId": "d4032874bc3abd65cc0abbca610c83ce"
  },
  {
    "itemName": "태초의 별 - 염주",
    "cnt": 11419,
    "itemId": "3464b2c0951154f5276371fac2546d3d"
  },
  {
    "itemName": "태초의 별 - 토템",
    "cnt": 11401,
    "itemId": "7a48ac0810e04becab04028add44863f"
  },
  {
    "itemName": "칠흑의 저주",
    "cnt": 11182,
    "itemId": "ed9e38706cb74cd8dc22344ac0672189"
  },
  {
    "itemName": "태초의 별 - 머스켓",
    "cnt": 11114,
    "itemId": "97f8b96a9af284b1181985075a9066ee"
  },
  {
    "itemName": "여제의 영롱한 은장도",
    "cnt": 10883,
    "itemId": "1bc8070a97e40822a8acf944587172ac"
  },
  {
    "itemName": "샤이닝 인페르노",
    "cnt": 10808,
    "itemId": "f6818a1fd4d3499b995ade1fe5ac76ed"
  },
  {
    "itemName": "태초의 별 - 광창",
    "cnt": 10782,
    "itemId": "c20fca42d5353ca84db49efc212df1bc"
  },
  {
    "itemName": "로드 오브 호러",
    "cnt": 10737,
    "itemId": "bbbd88f7ee3d443bca540b6c4d5ae1d9"
  },
  {
    "itemName": "무영흑단살",
    "cnt": 10383,
    "itemId": "a326005c0d5de7e94b0cb95511ebebd2"
  },
  {
    "itemName": "나스카 : 영혼의 심판",
    "cnt": 10314,
    "itemId": "08e41c036b44ff5f407a874b5bfc91c1"
  },
  {
    "itemName": "성장군 : 유성계",
    "cnt": 10310,
    "itemId": "d3760db625f3bd4bcde3ac5904fecac5"
  },
  {
    "itemName": "전장의 투신",
    "cnt": 10291,
    "itemId": "e47c02a78bfcd7d1bde959d9e3beac50"
  },
  {
    "itemName": "태초의 별 - 건틀릿",
    "cnt": 10229,
    "itemId": "4d082793556fe870683d6a2690d2d345"
  },
  {
    "itemName": "태초의 별 - 중검",
    "cnt": 10197,
    "itemId": "2cb865aae36fdcb3a3231a654cb5e661"
  },
  {
    "itemName": "태초의 별 - 투창",
    "cnt": 10190,
    "itemId": "f385a6dbe356cb602d24a04acba88d5c"
  },
  {
    "itemName": "眞 : 흑룡언월도",
    "cnt": 10182,
    "itemId": "7ad9b001664f685f438ceae50444bf09"
  },
  {
    "itemName": "Brutal-Saw",
    "cnt": 10175,
    "itemId": "717aaaf49d09b8e2cbb7fecf56d0f3e8"
  },
  {
    "itemName": "만월 : 월광야천도",
    "cnt": 10146,
    "itemId": "cee3d65f9b96bc9356a38f8fe37222bc"
  },
  {
    "itemName": "코어 오리진",
    "cnt": 10046,
    "itemId": "c36d82d0beb38c2bb576d9389a0320db"
  },
  {
    "itemName": "태초의 별 - 완드",
    "cnt": 9881,
    "itemId": "94a64b9f8e13406436e3b0bc022a90c6"
  },
  {
    "itemName": "태초의 별 - 미늘창",
    "cnt": 9878,
    "itemId": "c3a655013ed6f5eee3718e0be9525d03"
  },
  {
    "itemName": "엠프레스 벳즈",
    "cnt": 9835,
    "itemId": "bbc3a1e0b819042979df672995a84d04"
  },
  {
    "itemName": "태초의 별 - 차크라 웨펀",
    "cnt": 9485,
    "itemId": "226ba47a53e349e6d9a8dd2a2450e32a"
  },
  {
    "itemName": "태초의 별 - 장도",
    "cnt": 9121,
    "itemId": "3809832c25cd3c458ea9e9a4d5d9bade"
  },
  {
    "itemName": "태초의 별 - 통파",
    "cnt": 8908,
    "itemId": "59744958524f70213168cfe1b89c9068"
  },
  {
    "itemName": "태초의 별 - 쌍검",
    "cnt": 8878,
    "itemId": "7ebe0a5d5f21c59a606096f912fd26f5"
  },
  {
    "itemName": "태초의 별 - 장창",
    "cnt": 8819,
    "itemId": "d0a08ee3dbf19301445164178a363b14"
  },
  {
    "itemName": "육도의 수레바퀴",
    "cnt": 8264,
    "itemId": "af2e8519f6b1684f2fb41de6fdb95d18"
  },
  {
    "itemName": "태초의 별 - 코어 블레이드",
    "cnt": 8249,
    "itemId": "624a32012cb42900e29310643995e54f"
  }
];

const digacy = [
  {
    "itemName": "별을 꿈꿨던 눈동자",
    "cnt": 68,
    "itemId": "37033cc005f2ab8c3ec42e6f971e7fdf"
  },
  {
    "itemName": "요도 : 날뛰는 흑혈",
    "cnt": 67,
    "itemId": "dff71f52e7c60da00f33edb582413638"
  },
  {
    "itemName": "끓어오르는 피의 그림자",
    "cnt": 57,
    "itemId": "309bdf994245a04c3ff7763d08c5244a"
  },
  {
    "itemName": "구속된 공작의 아귀",
    "cnt": 54,
    "itemId": "1beea18b7b0d7edbd5d6f41265207c73"
  },
  {
    "itemName": "찢어지는 비명의 메아리",
    "cnt": 52,
    "itemId": "79c52fac4c9b4bb5d70d2c5880454060"
  },
  {
    "itemName": "짐조 : 독을 마시는 새",
    "cnt": 50,
    "itemId": "17795a6a478061bca36d8b0544f0255c"
  },
  {
    "itemName": "검은 숨결의 히드라",
    "cnt": 38,
    "itemId": "982774dee300cf72603008133dae9ce8"
  },
  {
    "itemName": "끝없는 분노의 지팡이",
    "cnt": 32,
    "itemId": "911844dc4ceaabec00537feb60fc3a13"
  },
  {
    "itemName": "흘러내리는 썩은 피",
    "cnt": 32,
    "itemId": "5551e0d4a5f52557e839d6123b578164"
  },
  {
    "itemName": "재앙의 송곳니",
    "cnt": 30,
    "itemId": "6aeca595f1b6f1c33e28f8d51c3f5b89"
  },
  {
    "itemName": "비정이 깃든 고목",
    "cnt": 30,
    "itemId": "e42f57487cf82bcaa552c8b504eae199"
  },
  {
    "itemName": "육신에 스민 재앙",
    "cnt": 27,
    "itemId": "c4b4983d03a1a81abd8b385dc4c2a5d8"
  },
  {
    "itemName": "만개하는 불신의 눈",
    "cnt": 26,
    "itemId": "ae89549aca28cc5ca4e162d21e535b91"
  },
  {
    "itemName": "천지를 뒤흔드는 공포",
    "cnt": 25,
    "itemId": "3551749a761618a1b2db3247b64df33a"
  },
  {
    "itemName": "더러운 별의 지배자",
    "cnt": 25,
    "itemId": "8a6f0f122e37d5dfae8bef93bcd557ba"
  },
  {
    "itemName": "썩은 시체의 아귀",
    "cnt": 25,
    "itemId": "e51e90d38b7574e9ee5fb68798acc9c7"
  },
  {
    "itemName": "유혹을 부르는 선율",
    "cnt": 24,
    "itemId": "a3562f364f528c6f266b4870b44eea00"
  },
  {
    "itemName": "베놈 앱서버",
    "cnt": 24,
    "itemId": "3a08355ea464fafec89d3f91f68dbadb"
  },
  {
    "itemName": "아우게이오우 : 이름 잃은 자의 피리",
    "cnt": 23,
    "itemId": "c400b1b06d823de30763738c3c9b80f2"
  },
  {
    "itemName": "묘혈의 배틀액스",
    "cnt": 23,
    "itemId": "15714b939de18f17f1ef08918ee59775"
  },
  {
    "itemName": "오염된 피의 쾌",
    "cnt": 22,
    "itemId": "e5f44bc789463ad94f781eaab1660804"
  },
  {
    "itemName": "구속의 단죄",
    "cnt": 21,
    "itemId": "dbc85cd59ff4c3227a4d9ed5194fd56c"
  },
  {
    "itemName": "일루젼 베놈 로저리",
    "cnt": 21,
    "itemId": "9bcaae8facee36e00477aafcf5112a44"
  },
  {
    "itemName": "종언을 끊어내는 주먹",
    "cnt": 20,
    "itemId": "7f4113c71514d87875fa89bcd4fb7d4c"
  },
  {
    "itemName": "모독을 속삭이는 깃",
    "cnt": 20,
    "itemId": "d04479324ca7899a7528b85c4142b85b"
  },
  {
    "itemName": "광포한 비명의 분노",
    "cnt": 18,
    "itemId": "c06143d91e1ff5f72ab94502944936cd"
  },
  {
    "itemName": "만 갈래로 뻗어가는 질병",
    "cnt": 17,
    "itemId": "a09886810f6bc5eb1b58074f61448928"
  },
  {
    "itemName": "종언을 비트는 흑미",
    "cnt": 12,
    "itemId": "eea305bbc2c12313680cc47bc31a87d8"
  },
  {
    "itemName": "원한 서린 재앙의 어금니",
    "cnt": 10,
    "itemId": "d21d29c6bb4b095cad5688ad66c017dc"
  },
  {
    "itemName": "구속하는 공작의 차원도",
    "cnt": 9,
    "itemId": "1e8147c4dd8b4f726d772fdda7f85417"
  },
  {
    "itemName": "흉터가 깃든 분노",
    "cnt": 9,
    "itemId": "028ba800f0a42f089a9fe827d419bac5"
  },
  {
    "itemName": "구속의 대공 : 영원불멸의 추종자",
    "cnt": 8,
    "itemId": "22e52815e6a18b4d69b8488f33380c5d"
  },
  {
    "itemName": "비명의 장검",
    "cnt": 6,
    "itemId": "515afabd2c476a761edad2435efba12a"
  },
  {
    "itemName": "차원을 베는 영혼검",
    "cnt": 6,
    "itemId": "a40dff57e56278da386499003bdeff9e"
  },
  {
    "itemName": "독기로 점철된 절규",
    "cnt": 6,
    "itemId": "bce7513fd5f8a162969a5a6105fe22e5"
  },
  {
    "itemName": "질병이 깃든 허기",
    "cnt": 5,
    "itemId": "edebf708a3390beab095f1b76c60e7e8"
  },
  {
    "itemName": "위선자의 응징",
    "cnt": 5,
    "itemId": "630ed985d1f3fa908fdaf7a5d734bd13"
  },
  {
    "itemName": "흉터각인",
    "cnt": 5,
    "itemId": "0a3490331cc016e419b24e3ccf00901d"
  },
  {
    "itemName": "종언의 선고",
    "cnt": 4,
    "itemId": "f6b010113f6231cde5f6a12e0dde2983"
  },
  {
    "itemName": "종언을 비튼 창",
    "cnt": 4,
    "itemId": "53a875def4d27135362286d09f07d68f"
  },
  {
    "itemName": "불신의 단말마",
    "cnt": 3,
    "itemId": "9a417971a4f5052714d1bc1518224ee7"
  },
  {
    "itemName": "부패한 심장검",
    "cnt": 0,
    "itemId": "cf40c472350b52ae7e4f510b48d261ba"
  }
];

const channel10 = [
  {
    "channelName": "마계_7",
    "cnt": 243024
  },
  {
    "channelName": "마계_10",
    "cnt": 153312
  },
  {
    "channelName": "중천_74",
    "cnt": 130143
  },
  {
    "channelName": "지벤 황국_7",
    "cnt": 111064
  },
  {
    "channelName": "중천_77",
    "cnt": 102579
  },
  {
    "channelName": "벨 마이어 공국_1",
    "cnt": 96906
  },
  {
    "channelName": "중천_69",
    "cnt": 96094
  },
  {
    "channelName": "중천_50",
    "cnt": 81675
  },
  {
    "channelName": "중천_44",
    "cnt": 80900
  },
  {
    "channelName": "중천_88",
    "cnt": 75392
  },
  {
    "channelName": "중천_47",
    "cnt": 68249
  },
  {
    "channelName": "마계_9",
    "cnt": 63301
  },
  {
    "channelName": "중천_40",
    "cnt": 62926
  },
  {
    "channelName": "마계_8",
    "cnt": 62400
  },
  {
    "channelName": "중천_89",
    "cnt": 59939
  },
  {
    "channelName": "중천_45",
    "cnt": 59762
  },
  {
    "channelName": "중천_55",
    "cnt": 58726
  },
  {
    "channelName": "백해_7",
    "cnt": 54861
  },
  {
    "channelName": "중천_48",
    "cnt": 54147
  },
  {
    "channelName": "바하이트_7",
    "cnt": 52640
  },
  {
    "channelName": "중천_52",
    "cnt": 51886
  },
  {
    "channelName": "중천_49",
    "cnt": 51520
  },
  {
    "channelName": "중천_41",
    "cnt": 51098
  },
  {
    "channelName": "바하이트_10",
    "cnt": 51093
  },
  {
    "channelName": "중천_43",
    "cnt": 50689
  }
];