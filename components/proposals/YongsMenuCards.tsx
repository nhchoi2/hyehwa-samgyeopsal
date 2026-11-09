'use client';
import Image from 'next/image';
import { useId, useState } from 'react';
import type { MenuItem } from '@/types/menu';
export default function YongsMenuCards({ items }: { items: MenuItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const prefix = useId();
  return (
    <div className="ya-overlay-grid">
      {items.map((item) => {
        const open = openId === item.id;
        const detailId = `${prefix}-${item.id}`;
        return (
          <article
            className={`ya-menu-card${open ? ' is-open' : ''}`}
            key={item.id}
            data-menu-id={item.id}
            onKeyDown={(event) => {
              if (event.key === 'Escape') setOpenId(null);
            }}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width:760px) 90vw, 42vw"
              className="ya-menu-photo"
            />
            {item.featured && !open && (
              <span className="ya-menu-badge">대표 메뉴</span>
            )}
            <div className="ya-menu-overlay">
              <h2>{item.name}</h2>
              <strong>{item.price}</strong>
              <div id={detailId} hidden={!open} className="ya-menu-description">
                <p>
                  {item.description ||
                    '자세한 메뉴 구성은 매장에 문의해 주세요.'}
                </p>
              </div>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={detailId}
                aria-label={`${item.name} ${open ? '상세 닫기' : '상세 보기'}`}
                onClick={() => setOpenId(open ? null : item.id)}
              >
                {open ? '상세 닫기 ✕' : '상세 보기 ＋'}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
