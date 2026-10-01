import { restaurant } from '@/data/restaurant';

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const site = {
  name: restaurant.name,
  title: `${restaurant.name} | 혜화·대학로 삼겹살`,
  description: `${restaurant.name}의 메뉴, 매장 소개, 예약 및 오시는 길을 안내합니다. ${restaurant.englishName}.`,
  url: configuredUrl ? new URL(configuredUrl).origin : '',
  keywords: [
    restaurant.name,
    restaurant.englishName,
    'Hyehwa Korean BBQ',
    'Daehangno Korean BBQ',
    '惠化 焼肉',
    '惠化烤肉',
  ],
  lunchEnabled: true,
  // 실제 대표 이미지를 등록하면 Open Graph에도 표시됩니다.
  ogImage: '',
  googleVerification: process.env.GOOGLE_SITE_VERIFICATION || '',
  naverVerification: process.env.NAVER_SITE_VERIFICATION || '',
  gaId: process.env.NEXT_PUBLIC_GA_ID || '',
};
