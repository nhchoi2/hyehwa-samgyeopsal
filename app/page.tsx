import Link from 'next/link';
import { restaurant } from '@/data/restaurant';
import { menus } from '@/data/menu';
import { content } from '@/data/content';
import Hero from '@/components/home/Hero';
import ContactSection from '@/components/home/ContactSection';
import SectionTitle from '@/components/common/SectionTitle';
import MenuCard from '@/components/menu/MenuCard';
import type { Metadata } from 'next';
export const metadata: Metadata = { alternates: { canonical: '/' } };
export default function Home() {
  const featured = menus.filter((menu) => menu.featured).slice(0, 3);
  return (
    <>
      <div className="container">
        <Hero />
        <section className="section intro-section">
          <SectionTitle {...content.home.about} />
          <div>
            <p className="muted leading-8">
              {restaurant.introduction || content.pending.about}
            </p>
            <Link href="/about" className="text-link">
              매장 소개 보기 ↗
            </Link>
          </div>
        </section>
        <section className="section">
          <div className="section-top">
            <SectionTitle {...content.home.menu} />
            <Link href="/menu" className="text-link">
              전체 메뉴 ↗
            </Link>
          </div>
          {featured.length ? (
            <div className="menu-grid">
              {featured.map((menu) => (
                <MenuCard key={menu.id} menu={menu} />
              ))}
            </div>
          ) : (
            <div className="empty-state">{content.pending.menu}</div>
          )}
        </section>
      </div>
      <ContactSection />
    </>
  );
}
