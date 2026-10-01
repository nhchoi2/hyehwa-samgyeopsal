'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { navigation } from '@/data/navigation';

export default function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <div
      className="navigation"
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <button
        ref={toggle}
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? '닫기 ✕' : '메뉴 ☰'}
      </button>
      <nav
        id="main-navigation"
        aria-label="주 메뉴"
        className={open ? 'nav-links is-open' : 'nav-links'}
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? 'page' : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
