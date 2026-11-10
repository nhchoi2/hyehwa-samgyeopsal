'use client';
import Image from 'next/image';
import { useId, useRef, useState } from 'react';
import type { MenuItem } from '@/types/menu';
export default function YongsMenuCards({ items }: { items: MenuItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const prefix = useId();
  const frontButtons = useRef<Record<string, HTMLButtonElement | null>>({});
  const backButtons = useRef<Record<string, HTMLButtonElement | null>>({});
  function showDetails(id: string, open: boolean) {
    setOpenId(open ? id : null);
    requestAnimationFrame(() =>
      (open ? backButtons : frontButtons).current[id]?.focus(),
    );
  }
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
              if (event.key === 'Escape' && open) showDetails(item.id, false);
            }}
          >
            <div className="ya-menu-flip">
              <div className="ya-menu-front">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 760px) calc(50vw - 28px), (max-width: 1023px) calc(50vw - 110px), (max-width: 1100px) calc(33.33vw - 81px), (max-width: 1279px) calc(33.33vw - 97px), 330px"
                  className="ya-menu-photo"
                />
                <div className="ya-menu-desktop">
                  <h2>{item.name}</h2>
                  {item.description && <p>{item.description}</p>}
                  <strong>{item.price}</strong>
                </div>
                <div className="ya-menu-overlay" inert={open}>
                  <h2>{item.name}</h2>
                  <strong>{item.price}</strong>
                  <button
                    ref={(element) => {
                      frontButtons.current[item.id] = element;
                    }}
                    type="button"
                    aria-expanded={open}
                    aria-controls={detailId}
                    aria-label={item.name + ' 상세 설명 보기'}
                    onClick={() => showDetails(item.id, true)}
                  >
                    상세 설명 보기
                  </button>
                </div>
              </div>
              <div id={detailId} className="ya-menu-back" inert={!open}>
                <h2>{item.name}</h2>
                <p>
                  {item.description ||
                    '자세한 메뉴 구성은 매장에 문의해 주세요.'}
                </p>
                <strong>{item.price}</strong>
                <button
                  ref={(element) => {
                    backButtons.current[item.id] = element;
                  }}
                  type="button"
                  aria-label={item.name + ' 상세 닫기'}
                  onClick={() => showDetails(item.id, false)}
                >
                  닫기
                </button>
              </div>
            </div>
            {item.featured && <span className="ya-menu-badge">대표 메뉴</span>}
          </article>
        );
      })}
    </div>
  );
}
