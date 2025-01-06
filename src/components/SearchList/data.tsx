// 수집한 게시판 더미 데이터
const comminityData = [
    {
        id: 1,
        community: "디시",
        title: "오늘 날씨 진짜 좋네요!",
        author: "user123",
        content: "산책 나가기에 완벽한 날씨입니다. 다들 즐거운 하루 보내세요!",
        likes: 12,
        comments: 4,
        createdAt: "2025-01-01 10:15:30"
    },
    {
        id: 2,
        community: "뽐뿌",
        title: "이 영화 봐야 하나요?",
        author: "movieFan",
        content: "이번 주에 개봉한 영화 보신 분 있나요? 추천 부탁드려요!",
        likes: 25,
        comments: 10,
        createdAt: "2025-01-02 18:30:45"
    },
    {
        id: 3,
        community: "오유",
        title: "오늘의 밥상 사진!",
        author: "foodLover",
        content: "직접 만든 파스타입니다! 맛있게 보이죠?",
        likes: 43,
        comments: 8,
        createdAt: "2025-01-03 12:10:20"
    },
    {
        id: 4,
        community: "오유",
        title: "새로운 취미 찾았어요!",
        author: "hobbyist",
        content: "요즘 뜨개질에 푹 빠졌습니다. 스트레스 해소에 최고!",
        likes: 9,
        comments: 2,
        createdAt: "2025-01-04 14:25:50"
    },
    {
        id: 5,
        community: "오유",
        title: "재택근무 꿀팁 공유",
        author: "workFromHome",
        content: "집에서 효율적으로 일하는 방법 아시는 분들 공유 부탁드려요!",
        likes: 34,
        comments: 5,
        createdAt: "2025-01-05 09:40:15"
    },
    {
        id: 6,
        community: "뽐뿌",
        title: "이 강아지 너무 귀엽지 않나요?",
        author: "petLover",
        content: "산책 중에 만난 강아지입니다. 너무 사랑스럽네요!",
        likes: 51,
        comments: 12,
        createdAt: "2025-01-05 16:50:00"
    },
    {
        id: 7,
        community: "디시",
        title: "헬스장 추천 부탁드립니다.",
        author: "fitLife",
        content: "운동 다시 시작하려고 하는데, 헬스장 고르기 어렵네요.",
        likes: 16,
        comments: 3,
        createdAt: "2025-01-06 07:15:30"
    },
    {
        id: 8,
        community: "디시",
        title: "음악 추천 받아요",
        author: "musicLover",
        content: "기분 좋아지는 음악 있으면 알려주세요!",
        likes: 27,
        comments: 7,
        createdAt: "2025-01-06 08:40:25"
    },
    {
        id: 9,
        community: "에펨코리아",
        title: "오늘의 뉴스 요약",
        author: "newsBot",
        content: "정치, 경제, 스포츠 뉴스 한 눈에 보기!",
        likes: 31,
        comments: 9,
        createdAt: "2025-01-06 09:50:40"
    },
    {
        id: 10,
        community: "에펨코리아",
        title: "건강 관리 앱 추천",
        author: "techGuru",
        content: "운동과 식단 관리에 좋은 앱 있으면 알려주세요!",
        likes: 22,
        comments: 4,
        createdAt: "2025-01-06 11:20:35"
    },
    {
        id: 11,
        community: "에펨코리아",
        title: "혼자 여행 가기에 좋은 장소",
        author: "soloTraveler",
        content: "혼자 조용히 다녀올 수 있는 국내 여행지 추천 부탁드립니다.",
        likes: 18,
        comments: 6,
        createdAt: "2025-01-06 13:15:20"
    },
    {
        id: 12,
        community: "웃대",
        title: "책 추천 좀 해주세요!",
        author: "bookWorm",
        content: "요즘 읽을 만한 책 없을까요? 감동적인 소설이 좋아요.",
        likes: 14,
        comments: 3,
        createdAt: "2025-01-06 14:30:00"
    },
    {
        id: 13,
        community: "웃대",
        title: "오늘 점심 메뉴 추천",
        author: "hungryUser",
        content: "점심으로 뭘 먹어야 할지 고민입니다.",
        likes: 19,
        comments: 5,
        createdAt: "2025-01-06 15:10:45"
    },
    {
        id: 14,
        community: "디시",
        title: "내일은 비가 온다고 하네요",
        author: "weatherMan",
        content: "우산 챙기세요! 갑작스런 소나기 조심하세요.",
        likes: 7,
        comments: 1,
        createdAt: "2025-01-06 16:45:30"
    },
    {
        id: 15,
        community: "오유",
        title: "집에서 쉽게 만들 수 있는 요리",
        author: "homeChef",
        content: "간단한 요리법 좀 추천해 주세요!",
        likes: 30,
        comments: 10,
        createdAt: "2025-01-06 17:55:40"
    },
    {
        id: 16,
        community: "에펨",
        title: "고양이 털 관리 어떻게 하세요?",
        author: "catLover",
        content: "저희 집 고양이가 털이 너무 많이 빠져서 고민입니다.",
        likes: 23,
        comments: 8,
        createdAt: "2025-01-06 18:20:15"
    },
    {
        id: 17,
        community: "디시",
        title: "새로운 게임 시작했어요!",
        author: "gamer123",
        content: "이 게임 재밌네요! 혹시 같이 하실 분 있나요?",
        likes: 35,
        comments: 12,
        createdAt: "2025-01-06 19:30:00"
    },
    {
        id: 18,
        community: "82cook",
        title: "운동 루틴 공유합니다",
        author: "fitGuru",
        content: "요즘 열심히 하고 있는 운동 루틴입니다. 참고하세요!",
        likes: 28,
        comments: 4,
        createdAt: "2025-01-06 20:45:30"
    },
    {
        id: 19,
        community: "치지직",
        title: "최근 본 드라마 어땠나요?",
        author: "dramaFan",
        content: "최근에 본 드라마가 재밌었는데, 다른 분들도 봤나요?",
        likes: 12,
        comments: 6,
        createdAt: "2025-01-06 21:15:20"
    },
    {
        id: 20,
        community: "치지직",
        title: "좋은 와인 추천 부탁드려요",
        author: "wineLover",
        content: "가성비 좋은 와인 추천해주세요! 주말에 즐기고 싶어요.",
        likes: 20,
        comments: 3,
        createdAt: "2025-01-06 22:30:40"
    }
];

export default comminityData;