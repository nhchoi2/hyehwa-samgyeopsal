export const variants = {
  a: {
    name: '따뜻한 다이닝',
    english: 'THE DINING',
    description:
      '큰 음식 사진과 붉은 포인트. 용스 다이닝의 편안한 분위기를 담았습니다.',
    title: '좋은 사람들과,\n맛있는 한 자리.',
    note: '혜화에서 만나는 삼겹살의 즐거움',
    image: 'grill',
  },
  b: {
    name: '대통령의 식탁',
    english: 'THE TABLE',
    description: '깊은 녹색과 여백, 음식과 모임의 이야기에 집중한 구성입니다.',
    title: '함께하는 식탁,\n오래 남는 시간.',
    note: '대학로의 하루를 완성하는 한 끼',
    image: 'table',
  },
  c: {
    name: '오늘, 혜화',
    english: 'THE LOCAL',
    description: '밝고 경쾌한 화면에서 메뉴와 방문 정보를 빠르게 찾습니다.',
    title: '오늘의 약속은,\n혜화 대통령.',
    note: '메뉴부터 길찾기까지, 편안하게',
    image: 'pork',
  },
} as const;
export type Variant = keyof typeof variants;
export const pages = [
  { slug: '', label: '홈' },
  { slug: 'menu', label: '메뉴' },
  { slug: 'lunch', label: '점심 안내' },
  { slug: 'about', label: '매장 소개' },
  { slug: 'location', label: '오시는 길' },
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
};
