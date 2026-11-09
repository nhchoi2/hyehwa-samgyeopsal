'use client';
import { useState } from 'react';
import Image from 'next/image';
import type { MenuItem } from '@/types/menu';
import { corkage, menuSource } from '@/data/menu';
import { MenuCards } from './MenuCards';

const categoryOptions = [
  { label: '세트', value: '세트 메뉴' },
  { label: '고기', value: '고기 메뉴' },
  { label: '식사', value: '식사 메뉴' },
  { label: '곁들임', value: '곁들임' },
  { label: '주류', value: '주류' },
];
export default function MenuGrid({ items }: { items: MenuItem[] }) {
  const [selected, setSelected] = useState('세트 메뉴');
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
            onClick={() => setSelected(category.value)}
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
          <div className="pv-section-heading">
            <h1 id="menu-category-title">{selected}</h1>
            <span aria-live="polite">{visibleItems.length}가지 메뉴</span>
          </div>
          <MenuCards items={visibleItems} />
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
              <p>최대 1병 안내 · 이용 조건은 예약 시 확인해 주세요.</p>
            </div>
          </section>
        )}
        {selected === '식사 메뉴' && (
          <p className="pv-menu-source">
            점심 메뉴의 주문 가능 시간은 매장에 문의해 주세요.
          </p>
        )}
        <p className="pv-menu-source">
          메뉴·가격 자료 기준: {menuSource.collectedDate} ·{' '}
          <a href={menuSource.url} target="_blank" rel="noopener noreferrer">
            네이버 플레이스 ↗
          </a>
        </p>
      </div>
    </div>
  );
}
