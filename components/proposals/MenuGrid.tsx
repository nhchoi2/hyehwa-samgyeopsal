import Image from 'next/image';
import type { MenuItem } from '@/types/menu';
import { corkage, menuSource } from '@/data/menu';
export function MenuCards({ items }: { items: MenuItem[] }) {
  return (
    <div className="pv-food-grid pv-menu-grid">
      {items.map((item) => (
        <article className="pv-menu-item" key={item.id} data-menu-id={item.id}>
          <div className="pv-food-photo">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width:760px) 88vw, 29vw"
              className="pv-photo"
            />
          </div>
          <div className="pv-menu-copy">
            <p className="pv-kicker">
              {item.category}
              {item.featured ? ' · 대표 메뉴' : ''}
            </p>
            <h3>{item.name}</h3>
            <strong className="pv-menu-price">{item.price}</strong>
            {item.description && <p>{item.description}</p>}
          </div>
        </article>
      ))}
    </div>
  );
}
export default function MenuGrid({
  items,
  lunch,
}: {
  items: MenuItem[];
  lunch: boolean;
}) {
  const categories = [...new Set(items.map((item) => item.category))];
  return (
    <>
      {!lunch && (
        <nav className="pv-menu-categories" aria-label="메뉴 분류">
          {categories.map((category, i) => (
            <a key={category} href={`#menu-category-${i}`}>
              {category}
            </a>
          ))}
          <a href="#corkage">콜키지 안내</a>
        </nav>
      )}
      {categories.map((category, i) => (
        <section
          key={category}
          id={`menu-category-${i}`}
          className="pv-menu-category"
        >
          <div className="pv-section-heading">
            <h2>{lunch ? '점심 메뉴' : category}</h2>
            <span>
              {items.filter((item) => item.category === category).length}가지
              메뉴
            </span>
          </div>
          <MenuCards
            items={items.filter((item) => item.category === category)}
          />
        </section>
      ))}
      {!lunch && (
        <section id="corkage" className="pv-corkage">
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
      {lunch && (
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
    </>
  );
}
