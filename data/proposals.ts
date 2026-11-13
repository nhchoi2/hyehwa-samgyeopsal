import copy from './locales/ko/navigation.json';
export const variants = {
  a: {
    name: '용스 다이닝 스타일',
    english: 'THE DINING',
    description:
      '용스 다이닝의 헤더·사진 슬라이드·FAQ·공간 소개 구성을 대통령에 적용했습니다.',
    title: '좋은 사람들과,\n맛있는 한 자리.',
    note: '혜화에서 만나는 삼겹살의 즐거움',
    image: 'grill',
  },
  b: {
    name: '대통령의 식탁',
    english: 'THE TABLE',
    description:
      '짙은 녹색과 대나무통 삼겹살 사진으로 대통령의 대표 메뉴를 소개합니다.',
    title: '대나무통에서\n시작되는 한 점',
    note: '혜화 대통령의 대나무통 구이 삼겹살',
    image: 'bamboo',
  },
  c: {
    name: '오늘, 혜화',
    english: 'THE LOCAL',
    description:
      '금돼지식당의 중앙 정렬과 여백을 참고해 대통령의 대표 메뉴를 보여줍니다.',
    title: '대나무통 구이 삼겹살',
    note: '혜화 삼겹살 대통령의 대표 메뉴',
    image: 'signature',
  },
} as const;
export type Variant = keyof typeof variants;
export const pages = [
  { slug: '', label: copy.home },
  { slug: 'menu', label: copy.menu },
  { slug: 'about', label: copy.aboutFull },
  { slug: 'location', label: copy.locationFull },
] as const;
export const foodPhotos = [
  { image: 'grill', label: '불판 위의 한 상' },
  { image: 'pork', label: '함께 즐기는 고기' },
  { image: 'pot', label: '곁들이는 따뜻함' },
];
export const isVariant = (value: string): value is Variant =>
  Object.hasOwn(variants, value);

export const proposalPhotos: Record<string, string> = {
  pork: '/images/proposals/pork.webp',
  beef: '/images/proposals/beef.webp',
  table: '/images/proposals/table.webp',
  pot: '/images/proposals/pot.webp',
  grill: '/images/proposals/grill.webp',
  bamboo: '/images/materials/business/business-052.webp',
  signature: '/images/proposals/c-bamboo-grill.webp',
};
