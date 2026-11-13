import Image from 'next/image';
import MenuName from '@/components/menu/MenuName';
import type { MenuItem } from '@/types/menu';
export function MenuCards({ items, splitPrice = false }: { items: MenuItem[]; splitPrice?: boolean }) {
  return (
    <div className="pv-food-grid pv-menu-grid">
      {items.map((item) => {
        const [, name, note] = splitPrice ? item.name.match(/^(.*?)\s+(\([^()]+\))$/u) ?? [] : [];
        return (
          <article className="pv-menu-item" key={item.id} data-menu-id={item.id}>
            <div className="pv-food-photo">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width:760px) 88vw, 29vw"
                className="pv-photo"
              />
              {item.featured && (
                <span className="pv-menu-featured-badge">대표 메뉴</span>
              )}
            </div>
            <div className={splitPrice ? 'pv-menu-copy pv-menu-copy-split' : 'pv-menu-copy'}>
              <h3>{splitPrice ? (name ?? item.name) : <MenuName name={item.name} />}</h3>
              <div className="pv-menu-meta">
                {note && <span className="pv-menu-note">{note}</span>}
                <strong className="pv-menu-price">{item.price}</strong>
              </div>
              {item.description && (
                <p className="whitespace-pre-line">{item.description}</p>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
