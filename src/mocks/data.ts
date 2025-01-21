const posts = [
    { subject: "남친이 내 똥 보고 이쁘다고 하던대 무슨 의미야??", content: " 나 똥 눌때 남친 옆에서 샤워하다가 갑자기 내꺼 보고 이쁘다고하던데 무슨 뜻이야?? - dc official App", date: "20250120133105", view: "3", like: "1", url: "https://gall.dcinside.com/board/view/?id=leagueoflegends6&no=5619308&page=1" },
    { subject: "근데 구마유시 이장면 왜케 거리재는거냐", content: "뭘경계하고잇는거임 ", date: "20250120133053", view: "8", like: "0", url: "https://gall.dcinside.com/board/view/?id=leagueoflegends6&no=5619307&page=1" },
    { subject: "게임 한판도 안했는데 37포 잃음시발ㅋㅋㅋㅋㅋㅋ", content: "근 5년간 한번도 튕긴적 없던 컴퓨터가갑자기 접속이 안돼서 탈주판정으로 17+5포 털리고내가 워윅, 녹턴, 케인 장인이라 이거 세개만 하는데상대팀에서 이거 세개 다 밴해버려서 닷지하고 15포 날림ㅋㅋ지금 30분 기다리는중- dc official App", date: "20250120133053", view: "5", like: "0", url: "https://gall.dcinside.com/board/view/?id=leagueoflegends6&no=5619306&page=1" },
    { subject: "울프 유튜브많이봤는데 ", content: " 솔직히 울프는 좀 억까고 울프편집자는 젠첩이 확실함 ㅇㅇ", date: "20250120133053", view: "3", like: "0", url: "https://gall.dcinside.com/board/view/?id=leagueoflegends6&no=5619305&page=1" },
    { subject: "슼갈들의 시계는 앞으로도 24년 11월에 멈춰있을거임….", content: "젠지가 LCK컵 먹고퍼스트스탠드 초대우승하고젠지 한화가 므시 나가고리그 결승전 붙을동안슼갈들의 시간은 24년 11월에 멈춰서이미 하도 리딸해서 질릴만치 질린 영상들이나 계속 돌리면서롤갤에서 구좆 억까나 하고 있을거라는 거임…", date: "20250120133044", view: "9", like: "1", url: "https://gall.dcinside.com/board/view/?id=leagueoflegends6&no=5619304&page=1" },
    { subject: "그니까 닉네임 잘짓는것도 재능인대 요즘 애새끼들 닉꼬라지보면", content: " 답이없다 ", date: "20250120133041", view: "8", like: "0", url: "https://gall.dcinside.com/board/view/?id=leagueoflegends6&no=5619303&page=1" },
    { subject: "이야 아직도 페까하는 애들이 있네", content: "대단하네 여러가지로 ㅋㅋㅋ", date: "20250120133032", view: "11", like: "0", url: "https://gall.dcinside.com/board/view/?id=leagueoflegends6&no=5619302&page=1" },
    { subject: "자꾸 구마유시 까는 새끼들은 뭐지?", content: " 내년 월즈때 피어리스라 꼭 남겨야되는데 눈치 챙기자? ", date: "20250120133029", view: "11", like: "1", url: "https://gall.dcinside.com/board/view/?id=leagueoflegends6&no=5619301&page=1" },
    { subject: "구마유시가 희한하게 롤은 존나 못하는데 멘탈이 좋음", content: " 그래서 국제대회는 잘함", date: "20250120133029", view: "4", like: "0", url: "https://gall.dcinside.com/board/view/?id=leagueoflegends6&no=5619300&page=1" },
    { subject: "ig는 lpl 버전 농카츠키 아니냐?", content: " 플옵도 힘들거같던데", date: "20250120133027", view: "4", like: "0", url: "https://gall.dcinside.com/board/view/?id=leagueoflegends6&no=5619299&page=1" },
    { subject: "올해 젠지경기 한번도 안봤는데 듀로< 어떰?", content: "리헨즈보다 잘함? ", date: "20250120133010", view: "14", like: "0", url: "https://gall.dcinside.com/board/view/?id=leagueoflegends6&no=5619298&page=1" }
];

const comminityData = [
    {
        community: "디시",
        subject: "오늘 날씨 진짜 좋네요!",
        content: "산책 나가기에 완벽한 날씨입니다. 다들 즐거운 하루 보내세요!",
        date: "2025-01-01 10:15:30",
        like: 12,
        url: "1",
        view: 5

    },
    {
        "community": "뽐뿌",
        "subject": "이 영화 봐야 하나요?",
        content: "이번 주에 개봉한 영화 보신 분 있나요? 추천 부탁드려요!",
        date: "2025-01-02 18:30:45",
        like: 25,
        url: "2",
        view: 10
    },
    {
        "community": "오유",
        "subject": "오늘의 밥상 사진!",
        content: "직접 만든 파스타입니다! 맛있게 보이죠?",
        date: "2025-01-03 12:10:20",
        like: 43,
        url: "3",
        view: 8
    },
    {
        "community": "오유",
        "subject": "새로운 취미 찾았어요!",
        content: "요즘 뜨개질에 푹 빠졌습니다. 스트레스 해소에 최고!",
        date: "2025-01-04 14:25:50",
        like: 9,
        url: "4",
        view: 2
    },
    {
        "community": "오유",
        "subject": "재택근무 꿀팁 공유",
        content: "집에서 효율적으로 일하는 방법 아시는 분들 공유 부탁드려요!",
        date: "2025-01-05 09:40:15",
        like: 34,
        url: "5",
        view: 5
    },
    {
        "community": "뽐뿌",
        "subject": "이 강아지 너무 귀엽지 않나요?",
        content: "산책 중에 만난 강아지입니다. 너무 사랑스럽네요!",
        date: "2025-01-05 16:50:00",
        like: 51,
        url: "6",
        view: 12
    },
    {
        "community": "디시",
        "subject": "헬스장 추천 부탁드립니다.",
        content: "운동 다시 시작하려고 하는데, 헬스장 고르기 어렵네요.",
        date: "2025-01-06 07:15:30",
        like: 16,
        url: "7",
        view: 3
    },
    {
        "community": "디시",
        "subject": "음악 추천 받아요",
        content: "기분 좋아지는 음악 있으면 알려주세요!",
        date: "2025-01-06 08:40:25",
        like: 27,
        url: "8",
        view: 7
    },
    {
        "community": "에펨코리아",
        "subject": "오늘의 뉴스 요약",
        content: "정치, 경제, 스포츠 뉴스 한 눈에 보기!",
        date: "2025-01-06 09:50:40",
        like: 31,
        url: "9",
        view: 9
    },
    {
        "community": "에펨코리아",
        "subject": "건강 관리 앱 추천",
        content: "운동과 식단 관리에 좋은 앱 있으면 알려주세요!",
        date: "2025-01-06 11:20:35",
        like: 22,
        url: "10",
        view: 4
    },
    {
        "community": "에펨코리아",
        "subject": "혼자 여행 가기에 좋은 장소",
        content: "혼자 조용히 다녀올 수 있는 국내 여행지 추천 부탁드립니다.",
        date: "2025-01-06 13:15:20",
        like: 18,
        url: "11",
        view: 6
    },
    {
        "community": "웃대",
        "subject": "책 추천 좀 해주세요!",
        content: "요즘 읽을 만한 책 없을까요? 감동적인 소설이 좋아요.",
        date: "2025-01-06 14:30:00",
        like: 14,
        url: "12",
        view: 3
    },
    {
        "community": "웃대",
        "subject": "오늘 점심 메뉴 추천",
        content: "점심으로 뭘 먹어야 할지 고민입니다.",
        date: "2025-01-06 15:10:45",
        like: 19,
        url: "13",
        view: 5
    },
    {
        "community": "디시",
        "subject": "내일은 비가 온다고 하네요",
        content: "우산 챙기세요! 갑작스런 소나기 조심하세요.",
        date: "2025-01-06 16:45:30",
        like: 7,
        url: "14",
        view: 1
    },
    {
        "community": "오유",
        "subject": "집에서 쉽게 만들 수 있는 요리",
        content: "간단한 요리법 좀 추천해 주세요!",
        date: "2025-01-06 17:55:40",
        like: 30,
        url: "15",
        view: 10
    },
    {
        "community": "에펨",
        "subject": "고양이 털 관리 어떻게 하세요?",
        content: "저희 집 고양이가 털이 너무 많이 빠져서 고민입니다.",
        date: "2025-01-06 18:20:15",
        like: 23,
        url: "16",
        view: 8
    },
    {
        "community": "디시",
        "subject": "새로운 게임 시작했어요!",
        content: "이 게임 재밌네요! 혹시 같이 하실 분 있나요?",
        date: "2025-01-06 19:30:00",
        like: 35,
        url: "17",
        view: 12
    },
    {
        "community": "82cook",
        "subject": "운동 루틴 공유합니다",
        content: "요즘 열심히 하고 있는 운동 루틴입니다. 참고하세요!",
        date: "2025-01-06 20:45:30",
        like: 28,
        url: "18",
        view: 4
    },
    {
        "community": "치지직",
        "subject": "최근 본 드라마 어땠나요?",
        content: "최근에 본 드라마가 재밌었는데, 다른 분들도 봤나요?",
        date: "2025-01-06 21:15:20",
        like: 12,
        url: "19",
        view: 6
    },
    {
        "community": "치지직",
        "subject": "좋은 와인 추천 부탁드려요",
        content: "가성비 좋은 와인 추천해주세요! 주말에 즐기고 싶어요.",
        date: "2025-01-06 22:30:40",
        like: 20,
        url: "20",
        view: 3
    }
];

export { posts, comminityData };