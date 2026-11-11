import type { Restaurant, RestaurantImage } from '@/types/restaurant';

export const restaurant: Restaurant = {
  name: '혜화삼겹살대통령직영본점',
  englishName: 'Hyehwa Samgyeopsal President',
  phone: '02-766-4405',
  address: '서울 종로구 대학로14길 12-1 1층',
  lotAddress: '서울 종로구 혜화동 197-1',
  businessHours:
    '매일 11:30–23:00\n월~금 브레이크타임 15:00–16:00\n토·일 브레이크타임 없음',
  closedDays: '',
  parking: '주차 가능',
  amenities: [
    '예약',
    '단체 이용 가능',
    '포장',
    '무선 인터넷',
    '남/녀 화장실 구분',
    '유아의자',
    '주차',
  ],
  seating:
    '룸: 100명 이하\n단체석: 100명 이하\n이용 가능 인원과 좌석 구성은 예약 시 문의해 주세요.',
  groupBooking:
    '단체모임, 회식, 행사, 청첩장 모임, 가족모임, 학교·기업 행사, 외국인 관광단체 등 다양한 모임 및 대관이 가능합니다. 가능 인원과 메뉴 등 맞춤 상담이 가능하며, 주말 및 단독 대관은 사전에 문의해 주세요.',
  introduction:
    '넓고 편안한 공간에서 삼겹살과 함께 즐거운 모임을 가져보세요. 혜화·대학로·종로·동대문·중구의 다양한 단체모임을 위한 공간과 맞춤 상담을 제공합니다.',
  story: '',
  philosophy: '',
  space:
    '룸과 단체석을 갖추고 있으며, 각 항목의 안내 인원은 100명 이하입니다. 실제 이용 가능 인원과 좌석 구성은 사전 문의해 주세요.',
  ingredients: '',
  features: [
    {
      title: '단체모임 및 대관',
      description:
        '회식부터 가족모임, 학교·기업 행사, 외국인 관광단체까지 다양한 모임을 상담해 드립니다. 주말 및 단독 대관은 사전 문의해 주세요.',
    },
    {
      title: '편리한 매장 이용',
      description:
        '예약, 포장, 무선 인터넷, 남/녀 화장실 구분, 유아의자를 지원합니다.',
    },
    {
      title: '주차 가능',
      description:
        '주차가 가능합니다. 이용 방법은 방문 전 매장에 문의해 주세요.',
    },
  ],
  coordinates: null,
};

const menuFaq = {
  question: '어떤 메뉴부터 먹으면 좋을까요?',
  answer:
    '대나무통 구이 삼겹살과 숙성 삼겹살, 여러 가지 고기를 함께 즐기는 세트 메뉴를 준비했습니다. 메뉴 페이지에서 구성과 가격을 확인해 주세요.',
};

const parkingFaq = {
  question: '주차가 가능한가요?',
  answer: '주차가 가능합니다. 이용 방법은 방문 전 매장에 문의해 주세요.',
};

const childrenFaq = {
  question: '아이와 함께 방문해도 되나요?',
  answer:
    '유아의자를 준비하고 있습니다. 필요한 좌석과 이용 사항은 예약 시 말씀해 주세요.',
};

export const restaurantFaqs = [
  menuFaq,
  {
    question: '단체 예약이나 대관이 가능한가요?',
    answer: restaurant.groupBooking,
  },
  {
    question: '영업시간과 브레이크타임은 언제인가요?',
    answer: restaurant.businessHours,
  },
  parkingFaq,
  childrenFaq,
];

export const cHomeFaqs: {
  question: string;
  answer: string;
  contact?: boolean;
}[] = [
  {
    question: '예약은 어떻게 하나요?',
    answer: '매장으로 전화해 방문 날짜와 시간, 인원을 알려주세요.',
    contact: true,
  },
  {
    question: '단체 모임은 몇 명까지 가능한가요?',
    answer:
      '룸과 단체석은 100명 이하로 안내하고 있어요. 날짜와 좌석 배치에 따라 이용 가능한 인원이 달라질 수 있으니 예약할 때 확인해 주세요.',
  },
  {
    question: '콜키지가 가능한가요?',
    answer:
      '콜키지는 무료입니다. 가져오실 주류의 종류와 병 수는 방문 전에 매장에 문의해 주세요.',
  },
  menuFaq,
  parkingFaq,
  childrenFaq,
];

// 실제 사진을 public/images에 저장한 뒤 src와 alt를 등록하세요.
export const photos: Record<'hero' | 'interior' | 'about', RestaurantImage[]> =
  {
    hero: [],
    interior: [],
    about: [],
  };
export const logo: RestaurantImage = { src: '', alt: '' };
export type PhotoReview = {
  title: string;
  url: string;
  source: string;
  thumbnailUrl?: string;
};

// 원문이 공개한 공유 미리보기 이미지를 사용합니다.
export const reviews: PhotoReview[] = [
  {
    title: '혜화맛집 삼겹살 대통령 혜화점 대나무통 삼겹살 진짜 맛있어요',
    url: 'https://blog.naver.com/marin35/224455522257',
    source: '네이버 블로그',
    thumbnailUrl:
      'https://blogthumb.pstatic.net/MjAyNjEwMjdfODEg/MDAxNzkzMDgzOTk1OTkw.MD4balplXOz5eMEvJUpO1E7-xFZa2UyazQHp1JLEJE8g.XGEJ5CBrQuMeloBefNY0g3Z2pFTsat54mpNFHzDplHEg.JPEG/IMG%A3%DF3674.jpg?type=w2',
  },
  {
    title: '고기 먹기 좋은 혜화 맛집 리뷰',
    url: 'https://blog.naver.com/yjormlngu07840/224465831646',
    source: '네이버 블로그',
    thumbnailUrl:
      'https://blogthumb.pstatic.net/MjAyNjExMDVfNzQg/MDAxNzkzODQ5OTc0MDky.DMlsQRJ0wgQU6mK30oEnFkH7UmejK56sLWn_lDfIAoEg.8_HY-_AMTbXeQCAQCuv8fGk-lFENj4X_3-VnvGCs5wog.JPEG/9.JPG?type=w2',
  },
  {
    title:
      '대학로고기집 혜화 삼겹살 대통령 직영 본점 대나무 2차숙성삼겹살 벌꿀먹은빨간돼지',
    url: 'https://blog.naver.com/gl0331/224463385801',
    source: '네이버 블로그',
    thumbnailUrl:
      'https://blogthumb.pstatic.net/MjAyNjExMDFfOTQg/MDAxNzkzNTE3MDAzNjcz.V7uKpdJC7UZoTWorq72CHE6ZOg-RMVxjf2F8xFSCgxcg.YnhOxbRW3bkiDNujIZZq-QQiaklnkZnqcYvUOzEKi5Qg.JPEG/IMG%A3%DF0401.jpg?type=w2',
  },
  {
    title: '10월 여름에서 갑자기 겨울의 초입에 서있는 기분',
    url: 'https://blog.naver.com/likeghana/224461055170',
    source: '네이버 블로그',
    thumbnailUrl:
      'https://blogthumb.pstatic.net/MjAyNjExMDFfMTY4/MDAxNzkzNTA4MjUyMDg1.tILA6AdPUr2jAh31TsebxsfAY_WugTPhCAhh0eh1ghIg.GaJ1mZ3GsC3TegAZ9FYADQjxvB0_IHcCGzHvI8XCiQEg.JPEG/IMG%A3%DF1430.JPG?type=w2',
  },
  {
    title: '세트구성 좋았던 혜화 맛집 [대통령] 숙성삼겹살',
    url: 'https://blog.naver.com/naslxwwabb/224467166823',
    source: '네이버 블로그',
    thumbnailUrl:
      'https://blogthumb.pstatic.net/MjAyNjExMDZfMjQ1/MDAxNzkzOTQxMjkyNjQy.Rhy3mN3gTKy-CGlsOFABoONP4Wr2uoO1XuFRjHUhz18g.phxpNi0VbZwFEQRu7fxG-s8MaaeiH4ebP1DKy6ksBqUg.JPEG/5.JPG?type=w2',
  },
  {
    title: '혜화동 맛집 추천 실패 없는 최고의 선택!',
    url: 'https://blog.naver.com/naslxwwabb/224464549217',
    source: '네이버 블로그',
    thumbnailUrl:
      'https://blogthumb.pstatic.net/MjAyNjExMDRfMTgg/MDAxNzkzNzYyMTI0NzMz.KLEdvBitBvTkRDxyTFVldLb-avBlQlrgdF7E2Br_33Mg.Cf3xzjJC_bBVSzK2J9dNb9KgWsASbzAdON1l2cnA8Ggg.JPEG/6.JPG?type=w2',
  },
  {
    title:
      '[혜화고기집] 대나무 통구이 삼겹살, 2차 숙성 삼겹살과 꽃삼겹 | 삼겹살 대통령 본점 | 연극 끝나고 밥먹기 좋은 곳 | 야장분위기 나는 고깃집',
    url: 'https://blog.naver.com/5719961/224445746103',
    source: '네이버 블로그',
    thumbnailUrl:
      'https://blogthumb.pstatic.net/MjAyNjEwMThfNzAg/MDAxNzkyMzIwMzcwNTEz.RfeDdCuKqqF3kLqgxRTGblJt9ngHwXb1VTW0sYEYrSQg.qUhs7_F2xThBr4vbdVC8qbKos91ghVgCeqzc1NmL_awg.GIF/4050629641.gif?type=w2',
  },
  {
    title: '네이버 카페 게시글 보기',
    url: 'https://cafe.naver.com/secretmatzip/4',
    source: '네이버 카페',
  },
];
