import Image from 'next/image';
import MenuName from '@/components/menu/MenuName';
import type { MenuItem } from '@/types/menu';
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
            <h3>
              <MenuName name={item.name} />
            </h3>
            <strong className="pv-menu-price">{item.price}</strong>
            {item.description && (
              <p className="whitespace-pre-line">{item.description}</p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
