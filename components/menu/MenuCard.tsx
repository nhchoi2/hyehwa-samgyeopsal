import Image from 'next/image';
import type { MenuItem } from '@/types/menu';
import { content } from '@/data/content';
export default function MenuCard({ menu }: { menu: MenuItem }) {
  return (
    <article className="menu-card">
      <div className="menu-image">
        {menu.image ? (
          <Image
            src={menu.image}
            alt={menu.name}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 360px"
            className="object-cover"
          />
        ) : (
          <div className="image-placeholder">{content.pending.image}</div>
        )}
      </div>
      <div className="pt-5">
        {menu.featured && <span className="badge">대표 메뉴</span>}
        <div className="mt-2 flex items-start justify-between gap-4">
          <h3>{menu.name}</h3>
          <span className="shrink-0">{menu.price || content.pending.info}</span>
        </div>
        {menu.description && (
          <p className="muted mt-3 text-sm">{menu.description}</p>
        )}
      </div>
    </article>
  );
}
