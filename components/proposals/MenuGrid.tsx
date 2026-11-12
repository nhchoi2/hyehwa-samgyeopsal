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
  { label: '주류', value: '주류', intro: '고기 한 점에 어울리는 술 한 잔.' },
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
          {overlay ? (
            <YongsMenuCards key={selected} items={visibleItems} />
          ) : (
            <MenuCards items={visibleItems} />
          )}
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
