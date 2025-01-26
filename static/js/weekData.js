const userCnt = 209810;
const beginCnt = 80292;
const legacyCnt = 6981;
const kirinCnt = 3918;
const beginCnts = [
    {
      "itemName": "견고한 행운이 깃든 목걸이",
      "cnt": 1978,
      "itemId": "8177da9883506b6ef60bf0296b71dbde"
    },
    {
      "itemName": "혼돈의 정화 팔찌",
      "cnt": 1941,
      "itemId": "8cda0e4d867c18bcc1f91fcd4d8493e0"
    },
    {
      "itemName": "영롱한 황금향의 꿈 - 반지",
      "cnt": 1917,
      "itemId": "8b38fd1925f030abf9154f9ef448d41a"
    },
    {
      "itemName": "영롱한 황금향의 축복 - 목걸이",
      "cnt": 1917,
      "itemId": "4ed2acf74d5cfa69947535f6a8af7c5d"
    },
    {
      "itemName": "칠흑같은 그림자 속 목걸이 - 혈",
      "cnt": 1913,
      "itemId": "ce90fd8107a2dec651b9f7c41a84888c"
    },
    {
      "itemName": "혼돈의 정화 반지",
      "cnt": 1913,
      "itemId": "0801473c91a3bcc11f9ea84571034f69"
    },
    {
      "itemName": "혼돈의 정화 목걸이",
      "cnt": 1909,
      "itemId": "634efedb77439c30128b6560278281f8"
    },
    {
      "itemName": "용제의 피를 머금은 흉아",
      "cnt": 1894,
      "itemId": "b56711cb913ec3e76c3932b59ffd98af"
    },
    {
      "itemName": "자연 - 천재지변 반지",
      "cnt": 1892,
      "itemId": "e15a039ef16cb42914a88ef74f2eef4e"
    },
    {
      "itemName": "영롱한 황금향의 영광 - 팔찌",
      "cnt": 1890,
      "itemId": "128a14815b5e02e63c8cba53ce2ac19e"
    },
    {
      "itemName": "대 여우의 지혜 팔찌",
      "cnt": 1874,
      "itemId": "ab2e3267be4d5589118013d117276ba4"
    },
    {
      "itemName": "견고한 행운이 깃든 팔찌",
      "cnt": 1863,
      "itemId": "1714a46bd51c67510c0cd4f30ae3242f"
    },
    {
      "itemName": "자연 - 천재지변 목걸이",
      "cnt": 1862,
      "itemId": "18bef43afc834d281b4e189218cb97fd"
    },
    {
      "itemName": "견고한 행운이 깃든 반지",
      "cnt": 1857,
      "itemId": "127f30148084de5339713769683e2d67"
    },
    {
      "itemName": "칠흑같은 그림자 속 팔찌 - 화",
      "cnt": 1857,
      "itemId": "0f1556d74a133bf1f32cc414e8c44001"
    },
    {
      "itemName": "넘치는 마력의 영역 목걸이",
      "cnt": 1855,
      "itemId": "4ae668f4ebd3ac277ed63348d3dcad8f"
    },
    {
      "itemName": "과충전 - 한계를 여는 열쇠 목걸이",
      "cnt": 1854,
      "itemId": "02003739f9c1d138bc25b4e5fcc60a7c"
    },
    {
      "itemName": "넘치는 마력의 영역 팔찌",
      "cnt": 1849,
      "itemId": "bf5b1734fcea32d436095a357dae3038"
    },
    {
      "itemName": "넘치는 마력의 영역 반지",
      "cnt": 1848,
      "itemId": "7dfd210d865f3b98b4521ed97bf0a472"
    },
    {
      "itemName": "용제의 공포를 심는 포효",
      "cnt": 1846,
      "itemId": "44350fa45d2c52776aa5ee1bcb623a1f"
    },
    {
      "itemName": "대 여우의 영혼 목걸이",
      "cnt": 1843,
      "itemId": "e468101e457344d9824a0f1588152f06"
    },
    {
      "itemName": "용제의 재해를 막는 비늘",
      "cnt": 1836,
      "itemId": "bd066206710390f3e6353ab82eaab1a1"
    },
    {
      "itemName": "발할라의 여신 발키리 축복 반지",
      "cnt": 1832,
      "itemId": "e776eab981b7daac85f8faa28c2eaeb4"
    },
    {
      "itemName": "자연 - 천재지변 팔찌",
      "cnt": 1824,
      "itemId": "50752f1905af83563e5e2f5b746c8cc4"
    },
    {
      "itemName": "무리의 길잡이 목걸이",
      "cnt": 1823,
      "itemId": "6aa0978e051611de538b83176ed3026a"
    },
    {
      "itemName": "로열 페어리 반지",
      "cnt": 1819,
      "itemId": "dc1167f78aae7c8f6ed6b29c14dd29e5"
    },
    {
      "itemName": "로열 페어리 팔찌",
      "cnt": 1819,
      "itemId": "38649c2d1efd86613624653fe835c190"
    },
    {
      "itemName": "칠흑같은 그림자 속 반지 - 독",
      "cnt": 1817,
      "itemId": "cb015bdb6ca83dae7ccd7604ca558064"
    },
    {
      "itemName": "과충전 - 한계를 가리키는 지침 팔찌",
      "cnt": 1794,
      "itemId": "35cfcfdef4a58f38cc291db0b005db57"
    },
    {
      "itemName": "과충전 - 한계를 돌파하는 균열 반지",
      "cnt": 1794,
      "itemId": "b10c3f4fd74d0886b9f15c1162ae7462"
    },
    {
      "itemName": "로열 페어리 목걸이",
      "cnt": 1788,
      "itemId": "8683263b76f6822e92e46d4e080cd3f6"
    },
    {
      "itemName": "무리의 길잡이 반지",
      "cnt": 1787,
      "itemId": "60f2ce1a8ef8b2cf4dbf60b9f77b6148"
    },
    {
      "itemName": "무리의 길잡이 팔목 보호대",
      "cnt": 1784,
      "itemId": "5f0746d290ec872e9d4e66741130bafc"
    },
    {
      "itemName": "발할라의 여신 발키리 천상 목걸이",
      "cnt": 1770,
      "itemId": "28fc8eb2f6cd1cde8fefe8aca6a9ceaa"
    },
    {
      "itemName": "대 여우의 매혹 반지",
      "cnt": 1761,
      "itemId": "d3202f05592d04bb3b1ff144ef6c273d"
    },
    {
      "itemName": "발할라의 여신 발키리 수호 팔찌",
      "cnt": 1740,
      "itemId": "1696417c6db6398ea0ef00f8084184dc"
    },
    {
      "itemName": "태초의 별 - 도",
      "cnt": 481,
      "itemId": "4e1cca3ced7246d44e36f0fe455f9d9c"
    },
    {
      "itemName": "태초의 별 - 너클",
      "cnt": 348,
      "itemId": "46902219ed312eea382fd87dfda1dcac"
    },
    {
      "itemName": "역작 금인필살도",
      "cnt": 347,
      "itemId": "88d17cd5fc3fb1e5c474d6780035a492"
    },
    {
      "itemName": "태초의 별 - 십자가",
      "cnt": 347,
      "itemId": "c3f04d7307e8310fc19bcd4fa9a7c9bf"
    },
    {
      "itemName": "무형검 - 생사경",
      "cnt": 344,
      "itemId": "ecc073371c23fbac58ce6a055a131ad3"
    },
    {
      "itemName": "양얼의 나뭇가지 : 초",
      "cnt": 337,
      "itemId": "53569c0a2863a602cf130d6abbe64e0b"
    },
    {
      "itemName": "특형 - 호위무신의 운검",
      "cnt": 306,
      "itemId": "f4ebda346ccd4281a9c37de9cb8936a5"
    },
    {
      "itemName": "태초의 별 - 대검",
      "cnt": 278,
      "itemId": "9f0dde7a9c78384a9c5a80ff41f98e68"
    },
    {
      "itemName": "태초의 별 - 소검",
      "cnt": 271,
      "itemId": "eb5666ec6e70818cfa40bbfe08580877"
    },
    {
      "itemName": "태초의 별 - 빗자루",
      "cnt": 251,
      "itemId": "f3218f22b56f9f69ff623eab33a7ba0a"
    },
    {
      "itemName": "태초의 별 - 리볼버",
      "cnt": 246,
      "itemId": "31b3b9cee22a3ffea2128a481dbcf8ca"
    },
    {
      "itemName": "시크릿 콘서트",
      "cnt": 238,
      "itemId": "34c4ba7289d9d0dea8ce3880bc6f8352"
    },
    {
      "itemName": "태초의 별 - 장궁",
      "cnt": 234,
      "itemId": "16daa7ea0285c2b16ab3ac7b278d61a9"
    },
    {
      "itemName": "미스트 파이오니어",
      "cnt": 226,
      "itemId": "102b6df1d79cfc6e77ea2718dafec309"
    },
    {
      "itemName": "인요의 황혼",
      "cnt": 220,
      "itemId": "ec942349c845957a8ed9c6ad1db18475"
    },
    {
      "itemName": "하쿠나마타타 : 원더풀",
      "cnt": 219,
      "itemId": "2c5f996a25418be71b288c22fa2f9193"
    },
    {
      "itemName": "넨 아스트론",
      "cnt": 208,
      "itemId": "52e014d425c5900fb2691c91aa8891f5"
    },
    {
      "itemName": "태초의 별 - 권투글러브",
      "cnt": 208,
      "itemId": "752fe58eb2610840857c776b3a4db55e"
    },
    {
      "itemName": "태초의 별 - 선현궁",
      "cnt": 208,
      "itemId": "55ef0a5c7c8bda92c0451b1c75fd971e"
    },
    {
      "itemName": "미완성 코스믹 건틀릿",
      "cnt": 206,
      "itemId": "23c3a32b8c83337313f03ac82881e04f"
    },
    {
      "itemName": "앱솔루트 제로",
      "cnt": 205,
      "itemId": "f52dae0b1e77c293f2ebf095557dc9f0"
    },
    {
      "itemName": "태초의 별 - 둔기",
      "cnt": 205,
      "itemId": "8888dd81dfabf5f1dddcb4fa982aa410"
    },
    {
      "itemName": "리리스, 디 이블",
      "cnt": 199,
      "itemId": "8cd53eed89da72eb94486e0676a7194f"
    },
    {
      "itemName": "양치기의 마지막 진실",
      "cnt": 196,
      "itemId": "f46fe4c07fda3827871b6bb8d52a28b4"
    },
    {
      "itemName": "해방된 지식",
      "cnt": 194,
      "itemId": "66f7d8714fa7810df4ffdf36e8c97557"
    },
    {
      "itemName": "파운더 오브 마나",
      "cnt": 192,
      "itemId": "9a72569c4bff3e862ebcbf4edc9d9f99"
    },
    {
      "itemName": "태초의 별 - 크로스슈터",
      "cnt": 183,
      "itemId": "fb581fde511ae040088795d5f761a774"
    },
    {
      "itemName": "패밀리 팔케",
      "cnt": 182,
      "itemId": "a3e557056061811337aa67eb0ef4a704"
    },
    {
      "itemName": "태초의 별 - 로드",
      "cnt": 177,
      "itemId": "c3e60ef4410a4d5f7e5fb2426894613b"
    },
    {
      "itemName": "폴링 스타 로저리",
      "cnt": 174,
      "itemId": "4bb4e84551335ec0b22368859b502d96"
    },
    {
      "itemName": "태초의 별 - 에테리얼 보우",
      "cnt": 169,
      "itemId": "d5e759883fabd926327c534627abdf0f"
    },
    {
      "itemName": "태초의 별 - 자동권총",
      "cnt": 169,
      "itemId": "31b7b7bc104551ffabf52b580a69c392"
    },
    {
      "itemName": "태초의 별 - 스태프",
      "cnt": 167,
      "itemId": "5a125390e4043b05f981e6583a7ed5ff"
    },
    {
      "itemName": "태초의 별 - 클로",
      "cnt": 167,
      "itemId": "c831c093b447b149eddb151bd1ea478c"
    },
    {
      "itemName": "태초의 별 - 봉",
      "cnt": 165,
      "itemId": "3d43dc0356b4d1e805fb5d85d8b1f5a4"
    },
    {
      "itemName": "폭군의 본의",
      "cnt": 165,
      "itemId": "64fb6109df6a1d62f45c2049faacf3cb"
    },
    {
      "itemName": "리턴드 스나이퍼 오브 블랙 로즈",
      "cnt": 164,
      "itemId": "7b406b9951564c6485d209c90d71cb4e"
    },
    {
      "itemName": "태초의 별 - 핸드캐넌",
      "cnt": 163,
      "itemId": "97480df0d7fe65a989143514791dd89c"
    },
    {
      "itemName": "노블레스 오브 레인저",
      "cnt": 161,
      "itemId": "d4f64370ea0e4436a988d8935fbba365"
    },
    {
      "itemName": "에볼루션 오토매틱 건",
      "cnt": 157,
      "itemId": "f6746b73578df106b51df7907ecf05e9"
    },
    {
      "itemName": "멸망의 근원",
      "cnt": 154,
      "itemId": "3838f6fa8a6f5c44a84e101715169bb4"
    },
    {
      "itemName": "소울 프레데터",
      "cnt": 153,
      "itemId": "413aebce4d4cc7c7346aa6e32e27a6dd"
    },
    {
      "itemName": "태초의 별 - 광검",
      "cnt": 152,
      "itemId": "40a67f2b93ea7e8014180e47b672ba58"
    },
    {
      "itemName": "영원한 올리브 나무 십자가",
      "cnt": 149,
      "itemId": "7fbc76b53ea0b985ef63b4a53a2e8aeb"
    },
    {
      "itemName": "태초의 별 - 창",
      "cnt": 149,
      "itemId": "5908737199ed3dbb63f749109760b277"
    },
    {
      "itemName": "멸룡검 발뭉",
      "cnt": 147,
      "itemId": "74bfcf0bd8b6998fc1e5a896d5a90fd7"
    },
    {
      "itemName": "우르반의 걸작",
      "cnt": 143,
      "itemId": "9173c5067d0e368b18bf2e87500f9ac0"
    },
    {
      "itemName": "얼어붙은 불꽃의 살",
      "cnt": 133,
      "itemId": "3d1e831cdf674892355cca45d35541ee"
    },
    {
      "itemName": "태초의 별 - 토템",
      "cnt": 129,
      "itemId": "7a48ac0810e04becab04028add44863f"
    },
    {
      "itemName": "태초의 별 - 낫",
      "cnt": 125,
      "itemId": "9e08f41c1efa53c838e51eb9f4e4e2a9"
    },
    {
      "itemName": "Brutal-Saw",
      "cnt": 124,
      "itemId": "717aaaf49d09b8e2cbb7fecf56d0f3e8"
    },
    {
      "itemName": "태초의 별 - 염주",
      "cnt": 124,
      "itemId": "3464b2c0951154f5276371fac2546d3d"
    },
    {
      "itemName": "태초의 별 - 배틀액스",
      "cnt": 119,
      "itemId": "4a450f5c9fb64b353e7561d89aa35425"
    },
    {
      "itemName": "여제의 영롱한 은장도",
      "cnt": 118,
      "itemId": "1bc8070a97e40822a8acf944587172ac"
    },
    {
      "itemName": "태초의 별 - 머스켓",
      "cnt": 115,
      "itemId": "97f8b96a9af284b1181985075a9066ee"
    },
    {
      "itemName": "만월 : 월광야천도",
      "cnt": 114,
      "itemId": "cee3d65f9b96bc9356a38f8fe37222bc"
    },
    {
      "itemName": "로드 오브 호러",
      "cnt": 113,
      "itemId": "bbbd88f7ee3d443bca540b6c4d5ae1d9"
    },
    {
      "itemName": "무영흑단살",
      "cnt": 112,
      "itemId": "a326005c0d5de7e94b0cb95511ebebd2"
    },
    {
      "itemName": "샤이닝 인페르노",
      "cnt": 109,
      "itemId": "f6818a1fd4d3499b995ade1fe5ac76ed"
    },
    {
      "itemName": "태초의 별 - 건틀릿",
      "cnt": 109,
      "itemId": "4d082793556fe870683d6a2690d2d345"
    },
    {
      "itemName": "칠흑의 저주",
      "cnt": 108,
      "itemId": "ed9e38706cb74cd8dc22344ac0672189"
    },
    {
      "itemName": "태초의 별 - 광창",
      "cnt": 108,
      "itemId": "c20fca42d5353ca84db49efc212df1bc"
    },
    {
      "itemName": "나스카 : 영혼의 심판",
      "cnt": 107,
      "itemId": "08e41c036b44ff5f407a874b5bfc91c1"
    },
    {
      "itemName": "태초의 별 - 소태도",
      "cnt": 107,
      "itemId": "d4032874bc3abd65cc0abbca610c83ce"
    },
    {
      "itemName": "태초의 별 - 쌍검",
      "cnt": 107,
      "itemId": "7ebe0a5d5f21c59a606096f912fd26f5"
    },
    {
      "itemName": "성장군 : 유성계",
      "cnt": 104,
      "itemId": "d3760db625f3bd4bcde3ac5904fecac5"
    },
    {
      "itemName": "태초의 별 - 보우건",
      "cnt": 104,
      "itemId": "6dad9986be24958e4a34ac8fbdd1c17f"
    },
    {
      "itemName": "태초의 별 - 완드",
      "cnt": 104,
      "itemId": "94a64b9f8e13406436e3b0bc022a90c6"
    },
    {
      "itemName": "태초의 별 - 단검",
      "cnt": 102,
      "itemId": "2470861b2f05d1fb5e917f148ba4fc12"
    },
    {
      "itemName": "眞 : 흑룡언월도",
      "cnt": 101,
      "itemId": "7ad9b001664f685f438ceae50444bf09"
    },
    {
      "itemName": "엠프레스 벳즈",
      "cnt": 101,
      "itemId": "bbc3a1e0b819042979df672995a84d04"
    },
    {
      "itemName": "전장의 투신",
      "cnt": 99,
      "itemId": "e47c02a78bfcd7d1bde959d9e3beac50"
    },
    {
      "itemName": "태초의 별 - 중검",
      "cnt": 98,
      "itemId": "2cb865aae36fdcb3a3231a654cb5e661"
    },
    {
      "itemName": "태초의 별 - 투창",
      "cnt": 96,
      "itemId": "f385a6dbe356cb602d24a04acba88d5c"
    },
    {
      "itemName": "태초의 별 - 미늘창",
      "cnt": 94,
      "itemId": "c3a655013ed6f5eee3718e0be9525d03"
    },
    {
      "itemName": "태초의 별 - 장도",
      "cnt": 91,
      "itemId": "3809832c25cd3c458ea9e9a4d5d9bade"
    },
    {
      "itemName": "코어 오리진",
      "cnt": 86,
      "itemId": "c36d82d0beb38c2bb576d9389a0320db"
    },
    {
      "itemName": "태초의 별 - 차크라 웨펀",
      "cnt": 78,
      "itemId": "226ba47a53e349e6d9a8dd2a2450e32a"
    },
    {
      "itemName": "태초의 별 - 통파",
      "cnt": 71,
      "itemId": "59744958524f70213168cfe1b89c9068"
    },
    {
      "itemName": "태초의 별 - 코어 블레이드",
      "cnt": 69,
      "itemId": "624a32012cb42900e29310643995e54f"
    },
    {
      "itemName": "육도의 수레바퀴",
      "cnt": 66,
      "itemId": "af2e8519f6b1684f2fb41de6fdb95d18"
    },
    {
      "itemName": "태초의 별 - 장창",
      "cnt": 63,
      "itemId": "d0a08ee3dbf19301445164178a363b14"
    }
];

const channel10 = [
    {
      "channelName": "마계_7",
      "cnt": 2159
    },
    {
      "channelName": "벨 마이어 공국_1",
      "cnt": 1636
    },
    {
      "channelName": "마계_10",
      "cnt": 1497
    },
    {
      "channelName": "중천_50",
      "cnt": 1227
    },
    {
      "channelName": "중천_74",
      "cnt": 1220
    },
    {
      "channelName": "중천_47",
      "cnt": 1201
    },
    {
      "channelName": "중천_40",
      "cnt": 1190
    },
    {
      "channelName": "중천_45",
      "cnt": 1164
    },
    {
      "channelName": "중천_44",
      "cnt": 1080
    },
    {
      "channelName": "중천_41",
      "cnt": 952
    }
  ];