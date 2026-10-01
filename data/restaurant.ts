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

// 실제 사진을 public/images에 저장한 뒤 src와 alt를 등록하세요.
export const photos: Record<'hero' | 'interior' | 'about', RestaurantImage[]> =
  {
    hero: [],
    interior: [],
    about: [],
  };
export const logo: RestaurantImage = { src: '', alt: '' };
export const reviews: { text: string; source: string; url: string }[] = [];
