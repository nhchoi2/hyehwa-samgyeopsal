'use client';
import copy from '@/data/locales/ko/navigation.json';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { pages, variants, type Variant } from '@/data/proposals';


const languagePreferenceKey = 'hyehwa-language';
const languageCodes: Record<string, string> = {
  ko: 'KO', en: 'EN', ja: 'JA', 'zh-Hans': '简', 'zh-Hant': '繁',
};
const languageSuggestions: Record<string, string> = {
  en: 'View in English',
  ja: '日本語で見る',
  'zh-Hans': '查看简体中文',
  'zh-Hant': '查看繁體中文',
};

function preferredLanguage(tags: readonly string[]) {
  for (const tag of tags) {
    const parts = tag.toLowerCase().split('-');
    const [language] = parts;
    if (language === 'ko' || language === 'en' || language === 'ja') return language;
    if (language === 'zh') {
      return parts.includes('hant') || (!parts.includes('hans') && parts.some((part) => ['tw', 'hk', 'mo'].includes(part)))
        ? 'zh-Hant'
        : 'zh-Hans';
    }
  }
  return 'en';
}

function LanguagePicker({ links, locale, label }: {
  links: { code: string; label: string; href: string }[];
  locale: string;
  label: string;
}) {
  const [suggestion, setSuggestion] = useState<string>();
  useEffect(() => {
    if (locale !== 'ko') return;
    const timer = window.setTimeout(() => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem(languagePreferenceKey);
        if (sessionStorage.getItem('hyehwa-language-dismissed')) return;
      } catch {
        // The browser may restrict storage access.
      }
      const preferred = saved || preferredLanguage(navigator.languages.length ? navigator.languages : [navigator.language]);
      if (preferred !== 'ko') setSuggestion(preferred);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [locale]);

  function choose(code: string) {
    try {
      localStorage.setItem(languagePreferenceKey, code);
      sessionStorage.removeItem('hyehwa-language-dismissed');
    } catch {
      // Language links still work without storage.
    }
    setSuggestion(undefined);
  }

  function dismiss() {
    try {
      sessionStorage.setItem('hyehwa-language-dismissed', '1');
    } catch {
      // The suggestion can still be closed for this page.
    }
    setSuggestion(undefined);
  }

  const suggested = links.find(({ code }) => code === suggestion);
  return (
    <div className="pv-language">
      <details onToggle={(event) => { if (event.currentTarget.open) dismiss(); }}>
        <summary aria-label={label}>
          <svg aria-hidden="true" viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.4">
            <circle cx="10" cy="10" r="8" />
            <ellipse cx="10" cy="10" rx="3.5" ry="8" />
            <path d="M2 10h16" />
          </svg> {languageCodes[locale]}
        </summary>
        <div className="pv-language-options">
          {links.map(({ code, label, href }) => (
            <Link key={code} href={href} hrefLang={code} lang={code}
              aria-current={code === locale ? 'true' : undefined}
              onClick={(event) => { event.currentTarget.closest('details')?.removeAttribute('open'); choose(code); }}>
              {label}
            </Link>
          ))}
        </div>
      </details>
      {suggested && (
        <div className="pv-language-suggestion">
          <Link href={suggested.href} hrefLang={suggested.code} lang={suggested.code} onClick={() => choose(suggested.code)}>
            {languageSuggestions[suggested.code]}
          </Link>
          <button type="button" onClick={dismiss} aria-label={copy.close.replace(' ✕', '')}>×</button>
        </div>
      )}
    </div>
  );
}

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
  copy: labels,
  languageLinks,
  locale,
}: {
  variant: Variant;
  page: string;
  base: string;
  showProposalSwitch: boolean;
  copy: typeof copy & { language?: string };
  languageLinks: { code: string; label: string; href: string }[];
  locale: string;
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
              alt={labels.brandHome}
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
          aria-label={labels.primary}
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
              {variant === 'c' ? (labels[(p.slug || 'home') as 'home' | 'menu' | 'about' | 'location'] ?? p.label) : p.label}
            </Link>
          ))}
          {variant !== 'c' && (
            <a className="pv-button" href="tel:027664405">
              {copy.phoneBooking}
            </a>
          )}
        </nav>
        {languageLinks.length > 0 && (
          <LanguagePicker links={languageLinks} locale={locale} label={labels.language ?? '언어 선택'} />
        )}
      </header>
    </>
  );
}
