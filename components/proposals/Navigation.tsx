'use client';
import copy from '@/data/locales/ko/navigation.json';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { pages, variants, type Variant } from '@/data/proposals';
const publicNavLabels: Partial<Record<string, string>> = { about: copy.about, location: copy.location };

function ProposalSwitch({ variant, page }: { variant: Variant; page: string }) {
  return (
    <div className={variant === 'a' ? 'pv-switch ya-switch' : 'pv-switch'}>
      <Link href="/">{copy.proposalIndex}</Link>
      <nav aria-label={copy.compare}>
        {Object.keys(variants).map((v) => (
          <Link
            key={v}
            href={`/${v}${page ? `/${page}` : ''}`}
            aria-current={v === variant ? 'page' : undefined}
          >
            {v.toUpperCase()}
            <span>{copy.proposalSuffix}</span>
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
          <p className="ya-header-tagline">{copy.tagline}</p>
        )}
        <Link className="pv-brand" href={base}>
          {variant === 'c' ? (
            <Image
              className="pv-brand-logo"
              src="/images/logo/daetongryeong.svg"
              width={278}
              height={149}
              alt={copy.brandHome}
              unoptimized
            />
          ) : (
            <>
                <span>{copy.brandPrefix}</span>
                <strong>
                  {copy.brand}<span className="pv-brand-dot">.</span>
                </strong>
            </>
          )}
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
          {open ? copy.close : copy.open}
        </button>
        <nav
          id="proposal-navigation"
          className={open ? 'pv-nav is-open' : 'pv-nav'}
          aria-label={copy.primary}
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
              {variant === 'c' ? (publicNavLabels[p.slug] ?? p.label) : p.label}
            </Link>
          ))}
          {variant !== 'c' && (
            <a className="pv-button" href="tel:027664405">
              {copy.phoneBooking}
            </a>
          )}
        </nav>
      </header>
    </>
  );
}
