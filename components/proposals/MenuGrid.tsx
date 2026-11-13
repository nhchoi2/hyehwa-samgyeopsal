'use client';
import { useState } from 'react';
import Image from 'next/image';
import type { MenuItem } from '@/types/menu';
import { corkage } from '@/data/menu';
import { MenuCards } from './MenuCards';
import YongsMenuCards from './YongsMenuCards';

const categoryOptions = [
  {
    label: '세트',
    value: '세트 메뉴',
    intro: '좋아하는 고기를 한 상에, 여럿이 함께 즐겨보세요.',
  },
  {
    label: '고기',
    value: '고기 메뉴',
    intro: '대나무 향을 입힌 삼겹살부터 고소한 한우까지.',
  },
  {
    label: '식사',
    value: '식사 메뉴',
    intro: '시원한 냉면부터 따끈한 찌개까지, 든든하게 한 끼.',
  },
  {
    label: '곁들임',
    value: '곁들임',
    intro: '고기 한 점에 곁들여, 한입의 맛을 더해보세요.',
  },
  { label: '주류·음료', value: '주류', intro: '고기 한 점에 어울리는 술 한 잔.' },
];
const softDrinks = [
  { name: '레몬에이드', price: '6,000원' },
  { name: '자몽에이드', price: '6,000원' },
  { name: '싱하 탄산수', price: '4,000원' },
  { name: '코카콜라', price: '3,000원' },
  { name: '코카콜라 제로', price: '3,000원' },
  { name: '스프라이트', price: '3,000원' },
  { name: '환타 파인애플', price: '3,000원' },
  { name: '토닉워터', price: '3,000원' },
  { name: '카스 제로', price: '4,000원' },
  { name: '카스 제로 레몬', price: '4,000원' },
];

const drinkGroups: {
  title: string;
  items: { name: string; price: string; image?: string }[];
  photoIds?: string[];
}[] = [
  {
    title: '맥주',
    items: [
      { name: '생맥주 300mL', price: '3,000원' },
      { name: '생맥주 420mL', price: '5,000원' },
      { name: '카스', price: '6,000원' },
      { name: '한맥', price: '6,000원' },
      { name: '버드와이저', price: '6,000원' },
      { name: '스텔라', price: '6,000원' },
    ],
  },
  {
    title: '소주·증류주',
    photoIds: ['menu-31', 'menu-33'],
    items: [
      { name: '참이슬 오리지널', price: '5,000원' },
      { name: '참이슬 후레쉬', price: '5,000원' },
      { name: '새로 오미자', price: '5,000원' },
      { name: '새로', price: '5,000원' },
      { name: '진로', price: '5,000원' },
      { name: '찰랑', price: '5,000원' },
      { name: '처음처럼', price: '5,000원' },
      { name: '일품진로', price: '30,000원', image: '/images/menu/ilpoom-jinro.webp' },
      { name: '화요', price: '30,000원', image: '/images/menu/hwayo.webp' },
    ],
  },
  {
    title: '전통주·청주',
    photoIds: ['menu-32'],
    items: [
      { name: '산사춘', price: '10,000원' },
      { name: '복분자', price: '15,000원' },
      { name: '백세주', price: '10,000원' },
      { name: '매화수', price: '6,000원' },
      { name: '청하', price: '7,000원' },
      { name: '밀담 360mL', price: '5,000원' },
    ],
  },
  {
    title: '사케',
    items: [
      { name: '반샤쿠', price: '7,000원' },
      { name: '핫 도쿠리', price: '7,000원' },
      { name: '준마이 팩', price: '38,000원', image: '/images/menu/junmai-pack.webp' },
      { name: '키쥬로', price: '49,000원', image: '/images/menu/kijuro.webp' },
    ],
  },
  {
    title: '하이볼',
    items: [
      { name: '화요 하이볼', price: '8,000원' },
    ],
  },
  { title: '와인', photoIds: ['menu-28', 'menu-29'], items: [] },
  { title: '음료', items: softDrinks },
];

export default function MenuGrid({
  items,
  overlay = false,
}: {
  items: MenuItem[];
  overlay?: boolean;
}) {
  const [category, setCategory] = useState(categoryOptions[0]);
  const selected = category.value;
  const visibleItems = items.filter((item) => item.category === selected);
  const MenuPhotos = overlay ? YongsMenuCards : MenuCards;
  return (
    <div className="pv-menu-browser">
      <nav className="pv-category-sidebar" aria-label="메뉴 분류">
        {categoryOptions.map((category) => (
          <button
            key={category.value}
            type="button"
            aria-pressed={selected === category.value}
            aria-controls="menu-results"
            onClick={() => setCategory(category)}
          >
            {category.label}
          </button>
        ))}
      </nav>
      <div className="pv-menu-results" id="menu-results">
        <section
          className="pv-menu-category"
          aria-labelledby="menu-category-title"
        >
          <div className={overlay ? 'ya-sr-only' : 'pv-section-heading'}>
            <h1 id="menu-category-title" aria-live="polite">
              {overlay ? selected : category.intro}
            </h1>
          </div>
          {selected !== '주류' && (
            <MenuPhotos key={selected} items={visibleItems} splitPrice />
          )}
          {selected === '주류' && drinkGroups.map((group) => {
            const photos = visibleItems.filter((item) => group.photoIds?.includes(item.id));
            for (const item of group.items) {
              if (item.image) {
                photos.push({
                  ...item,
                  id: item.image,
                  image: item.image,
                  category: selected,
                  description: '',
                  featured: false,
                });
              }
            }
            const textItems = group.items.filter((item) => !item.image);
            return (
              <section className="pv-soft-drinks" key={group.title}>
                <h2>{group.title}</h2>
                {photos.length > 0 && <MenuPhotos items={photos} splitPrice />}
                {textItems.length > 0 && (
                  <ul>
                    {textItems.map(({ name, price }) => (
                      <li key={name}>
                        <span>{name}</span>
                        <strong>{price}</strong>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </section>
        {selected === '주류' && (
          <section className="pv-corkage">
            <div className="pv-corkage-image">
              <Image
                src={corkage.image}
                alt="콜키지 무료 안내"
                fill
                sizes="(max-width:760px) 88vw, 240px"
                className="pv-photo"
              />
            </div>
            <div>
              <p className="pv-kicker">BRING YOUR OWN BOTTLE</p>
              <h2>콜키지 무료</h2>
              <p>가져오신 주류를 추가 비용 없이 함께 즐기세요.</p>
              <p>
                최대 1병까지 이용할 수 있습니다. 자세한 조건은 예약 시 확인해
                주세요.
              </p>
            </div>
          </section>
        )}
        {selected === '식사 메뉴' && (
          <p className="pv-menu-source">
            점심 메뉴를 주문할 수 있는 시간은 매장에 문의해 주세요.
          </p>
        )}
      </div>
    </div>
  );
}
