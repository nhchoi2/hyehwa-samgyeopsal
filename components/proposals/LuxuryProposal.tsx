import Image from 'next/image';
import Link from 'next/link';
import { featuredMenus, menus } from '@/data/menu';
import { links } from '@/data/links';
import { MenuCards } from './MenuCards';
import MenuGrid from './MenuGrid';
import BranchLocations from './BranchLocations';
import './luxury.css';

const navigation = [
  { slug: 'menu', label: '메뉴' },
  { slug: 'about', label: '소개' },
  { slug: 'location', label: '위치' },
];

export default function LuxuryProposal({ page }: { page: string }) {
  return (
    <div className="pv luxury">
      <header className="luxury-header">
        <Link href="/b" className="luxury-wordmark">
          <Image
            src="/images/logo/daetongryeong.svg"
            alt="대통령 삼겹살 홈"
            width={278}
            height={149}
            unoptimized
          />
        </Link>
        <nav aria-label="주요 메뉴">
          {navigation.map(({ slug, label }) => (
            <Link key={slug} href={`/b/${slug}`} aria-current={page === slug ? 'page' : undefined}>
              {label}
            </Link>
          ))}
        </nav>
      </header>

      <main id="main-content">
        {page === '' && (
          <>
            <section className="luxury-content luxury-hero">
              <div className="luxury-hero-copy">
                <h1>혜화 본점</h1>
                <p>대나무통에서 초벌한 삼겹살, 대학로에서 만나보세요.</p>
              </div>
              <div className="luxury-hero-photo">
                <Image
                  src="/images/proposals/b-dining-hero.webp"
                  alt="햇살이 비치는 나무 식탁 위에 차려진 삼겹살과 곁들임"
                  fill
                  preload
                  sizes="(max-width: 760px) 92vw, 72vw"
                />
              </div>
            </section>
            <section className="luxury-content luxury-featured">
              <div className="luxury-section-heading">
                <h2>대표 메뉴</h2>
                <Link href="/b/menu">전체 메뉴 ↗</Link>
              </div>
              <MenuCards items={featuredMenus} />
            </section>
          </>
        )}
        {page === 'menu' && (
          <section className="luxury-content luxury-page">
            <h1>메뉴</h1>
            <MenuGrid items={menus} />
          </section>
        )}
        {page === 'about' && (
          <section className="luxury-content luxury-page">
            <h1>매장 소개</h1>
            <div className="luxury-story">
              <Image src="/images/proposals/c-interior.webp" alt="혜화 본점 매장 내부" width={1200} height={800} sizes="(max-width: 760px) 90vw, 55vw" />
              <div>
                <h2>혜화 본점</h2>
                <p>대학로에 자리한 대통령 삼겹살입니다. 국내산 삼겹살을 대나무통에서 초벌해 은은한 대나무 향을 더합니다.</p>
                <Link href="/b/location">오시는 길 ↗</Link>
              </div>
            </div>
          </section>
        )}
        {page === 'location' && (
          <section className="luxury-content luxury-page">
            <h1>오시는 길</h1>
            <BranchLocations />
            <a className="luxury-directions" href={links.naverMapUrl} target="_blank" rel="noreferrer">네이버 지도 ↗</a>
          </section>
        )}
      </main>

    </div>
  );
}
