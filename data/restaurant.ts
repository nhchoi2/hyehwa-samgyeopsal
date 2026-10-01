import type { Restaurant, RestaurantImage } from '@/types/restaurant';

export const restaurant: Restaurant = {
  name: '혜화삼겹살대통령직영본점',
  englishName: 'Hyehwa Samgyeopsal President',
  phone: '',
  address: '',
  businessHours: '',
  closedDays: '',
  parking: '',
  introduction: '',
  story: '',
  philosophy: '',
  space: '',
  ingredients: '',
  features: [],
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
