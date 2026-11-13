import copy from './locales/ko/restaurant.json';
import type { Restaurant, RestaurantImage } from '@/types/restaurant';

export const restaurant: Restaurant = {
  name: copy.restaurant.name,
  englishName: 'Hyehwa Samgyeopsal President',
  phone: '02-766-4405',
  address: copy.restaurant.address,
  lotAddress: copy.restaurant.lotAddress,
  businessHours:
    copy.restaurant.businessHours,
  closedDays: '',
  parking: copy.restaurant.parking,
  amenities: [
    copy.restaurant.amenitiesReservation,
    copy.restaurant.amenitiesGroup,
    copy.restaurant.amenitiesTakeout,
    copy.restaurant.amenitiesWifi,
    copy.restaurant.amenitiesRestrooms,
    copy.restaurant.amenitiesHighChair,
    copy.restaurant.amenitiesParking,
  ],
  seating:
    copy.restaurant.seating,
  groupBooking:
    copy.restaurant.groupBooking,
  introduction:
    copy.restaurant.introduction,
  story: '',
  philosophy: '',
  space:
    copy.restaurant.space,
  ingredients: '',
  features: [
    {
      title: copy.restaurant.groupTitle,
      description:
        copy.restaurant.groupDescription,
    },
    {
      title: copy.restaurant.amenitiesTitle,
      description:
        copy.restaurant.amenitiesDescription,
    },
    {
      title: copy.restaurant.parkingTitle,
      description:
        copy.restaurant.parkingDescription,
    },
  ],
  coordinates: null,
};

const menuFaq = {
  question: copy.faq.menu.question,
  answer:
    copy.faq.menu.answer,
};

const parkingFaq = {
  question: copy.faq.parking.question,
  answer: copy.faq.parking.answer,
};

const childrenFaq = {
  question: copy.faq.children.question,
  answer:
    copy.faq.children.answer,
};

export const restaurantFaqs = [
  menuFaq,
  {
    question: copy.faq.groupBooking.question,
    answer: restaurant.groupBooking,
  },
  {
    question: copy.faq.hours.question,
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
    question: copy.faq.reservation.question,
    answer: copy.faq.reservation.answer,
    contact: true,
  },
  {
    question: copy.faq.capacity.question,
    answer:
      copy.faq.capacity.answer,
  },
  {
    question: copy.faq.corkage.question,
    answer:
      copy.faq.corkage.answer,
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
];
