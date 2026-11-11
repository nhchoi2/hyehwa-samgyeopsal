'use client';
import Link from 'next/link';
import { useState } from 'react';
import { pages, variants, type Variant } from '@/data/proposals';
function ProposalSwitch({ variant, page }: { variant: Variant; page: string }) {
  return (
    <div className={variant === 'a' ? 'pv-switch ya-switch' : 'pv-switch'}>
      <Link href="/">시안 모아보기</Link>
      <nav aria-label="디자인 비교">
        {Object.keys(variants).map((v) => (
          <Link
            key={v}
            href={`/${v}${page ? `/${page}` : ''}`}
            aria-current={v === variant ? 'page' : undefined}
          >
            {v.toUpperCase()}
            <span> 시안</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
export default function Navigation({
  variant,
  page,
  base,
  showProposalSwitch,
}: {
  variant: Variant;
  page: string;
  base: string;
  showProposalSwitch: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {showProposalSwitch && <ProposalSwitch variant={variant} page={page} />}
      <header className="pv-header">
        {variant === 'a' && (
          <p className="ya-header-tagline">맛있는 한 점, 함께하는 좋은 시간.</p>
        )}
        <Link className="pv-brand" href={base}>
          <span>혜화 삼겹살</span>
          <strong>
            대통령<span className="pv-brand-dot">.</span>
          </strong>
        </Link>
        <button
          className="pv-toggle"
          aria-expanded={open}
          aria-controls="proposal-navigation"
          onClick={() => setOpen(!open)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setOpen(false);
          }}
        >
          {open ? '닫기 ✕' : '메뉴 ☰'}
        </button>
        <nav
          id="proposal-navigation"
          className={open ? 'pv-nav is-open' : 'pv-nav'}
          aria-label="주요 메뉴"
          onKeyDown={(e) => {
            if (e.key === 'Escape') setOpen(false);
          }}
        >
          {pages.map((p) => (
            <Link
              key={p.slug}
              href={`${base}${p.slug ? `/${p.slug}` : ''}`}
              aria-current={p.slug === page ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {p.label}
            </Link>
          ))}
          {variant !== 'c' && (
            <a className="pv-button" href="tel:027664405">
              전화 예약 ↗
            </a>
          )}
        </nav>
      </header>
    </>
  );
}
