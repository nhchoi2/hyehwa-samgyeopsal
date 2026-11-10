import Image from 'next/image';
import YongsHome from './YongsHome';
import Link from 'next/link';
import { variants, type Variant } from '@/data/proposals';
import { restaurant } from '@/data/restaurant';
import { menus, featuredMenus } from '@/data/menu';
import MenuGrid from './MenuGrid';
import { MenuCards } from './MenuCards';
import { links } from '@/data/links';
import Navigation from './Navigation';
import { proposalPhotos } from '@/data/proposals';
const phone = `tel:${restaurant.phone.replace(/[^+\d]/g, '')}`;
export function Photo({
  name,
  alt,
  priority = false,
}: {
  name: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={proposalPhotos[name]}
      alt={alt}
      fill
      sizes="(max-width: 760px) 100vw, 60vw"
      preload={priority}
      className="pv-photo"
    />
  );
}
function Actions({ base }: { base: string }) {
  return (
    <div className="pv-actions">
      <Link className="pv-button" href={`${base}/menu`}>
        메뉴 살펴보기 <span>↗</span>
      </Link>
      <a className="pv-button pv-outline" href={phone}>
        전화 예약 · 문의 ↗
      </a>
    </div>
  );
}
function Visit({ standalone = false }: { standalone?: boolean }) {
  return (
    <div className="pv-visit">
      <div>
        {standalone ? (
          <h1>오시는 길</h1>
        ) : (
          <>
            <p className="pv-kicker">FIND US IN HYEHWA</p>
            <h2>혜화에서 만나요.</h2>
          </>
        )}
        <p>{restaurant.address}</p>
        <a
          className="pv-button"
          href={links.naverMapUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          네이버지도 길찾기 ↗
        </a>
      </div>
      <dl>
        {[
          ['영업시간', restaurant.businessHours],
          ['전화', restaurant.phone],
          ['주차', restaurant.parking],
          ['모임 안내', restaurant.seating],
        ].map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{label === '전화' ? <a href={phone}>{value}</a> : value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
function YongsLocation() {
  return (
    <section className="ya-location">
      <div className="ya-location-lead">
        <h1>오시는 길</h1>
        <p>{restaurant.address}</p>
        <div className="ya-location-actions">
          <a className="ya-action ya-red" href={phone}>
            전화 예약 · 문의
          </a>
          <a
            className="ya-action ya-menu-link"
            href={links.naverMapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            네이버지도 길찾기 ↗
          </a>
        </div>
      </div>
      <div className="ya-location-grid">
        <div className="ya-location-photo">
          <Image
            src="/images/materials/business/business-088.webp"
            alt="혜화 삼겹살 대통령 매장 입구"
            fill
            sizes="(max-width:1023px) 94vw, 46vw"
          />
        </div>
        <dl className="ya-location-info">
          <div>
            <dt>영업시간</dt>
            <dd>{restaurant.businessHours}</dd>
          </div>
          <div>
            <dt>전화</dt>
            <dd>
              <a href={phone}>{restaurant.phone}</a>
            </dd>
          </div>
          <div>
            <dt>주차 및 단체석</dt>
            <dd>
              {restaurant.parking} · 주차 방법과 단체 좌석은 방문 전 문의해
              주세요.
            </dd>
          </div>
          <div>
            <dt>편의시설</dt>
            <dd className="pv-amenities">
              {restaurant.amenities.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
export default function Proposal({
  variant,
  page,
}: {
  variant: Variant;
  page: string;
}) {
  const v = variants[variant],
    base = `/${variant}`;
  const titles: Record<string, [string, string]> = {
    menu: ['OUR TABLE', '맛있는 만남의 시작.'],
    about: ['OUR STORY', '함께여서 더 좋은 공간.'],
  };
  return (
    <div
      className={`pv pv-${variant}`}
      id={variant === 'a' ? 'ya-top' : undefined}
    >
      <Navigation key={`${variant}-${page}`} variant={variant} page={page} />
      <main id="main-content">
        {!page && variant === 'a' ? (
          <YongsHome />
        ) : !page ? (
          <>
            <section className="pv-hero">
              <div className="pv-hero-image">
                <Photo
                  name={v.image}
                  alt="혜화삼겹살대통령의 음식과 한 상"
                  priority
                />
              </div>
              <div className="pv-hero-copy">
                <p className="pv-kicker">HYEHWA · SAMGYEOPSAL PRESIDENT</p>
                <h1>{v.title}</h1>
                <p className="pv-hero-note">{v.note}</p>
                <Actions base={base} />
                <div className="pv-hero-bottom">
                  <span>혜화 · 대학로 직영본점</span>
                  <span>SCROLL TO DISCOVER ↓</span>
                </div>
              </div>
            </section>
            <div className="pv-facts">
              <span>매일 11:30 — 23:00</span>
              <span>단체모임 · 가족모임 · 회식</span>
              <Link href={`${base}/location`}>
                서울 종로구 대학로14길 12-1 ↗
              </Link>
            </div>
            <section className="pv-section pv-intro">
              <div>
                <p className="pv-kicker">A PLACE TO SHARE</p>
                <h2>
                  한 점의 즐거움이,
                  <br />
                  우리의 시간이 되도록.
                </h2>
              </div>
              <div>
                <p>{restaurant.introduction}</p>
                <Link className="pv-text-link" href={`${base}/about`}>
                  대통령의 공간 알아보기 ↗
                </Link>
              </div>
            </section>
            <section className="pv-section">
              <div className="pv-section-heading">
                <div>
                  <p className="pv-kicker">ON THE TABLE</p>
                  <h2>눈으로 먼저 만나는 한 상.</h2>
                </div>
                <Link className="pv-text-link" href={`${base}/menu`}>
                  메뉴 안내 ↗
                </Link>
              </div>
              <MenuCards items={featuredMenus} />
            </section>
            <section className="pv-gather">
              <div className="pv-gather-photo">
                <Photo
                  name="table"
                  alt="고기와 다양한 곁들임이 차려진 대통령의 식탁"
                />
              </div>
              <div>
                <p className="pv-kicker">GATHER AROUND</p>
                <h2>
                  둘이서도, 여럿이서도.
                  <br />
                  반가운 모임의 자리.
                </h2>
                <p>{restaurant.groupBooking}</p>
                <a className="pv-text-link" href={phone}>
                  모임 예약 문의 ↗
                </a>
              </div>
            </section>
            <section className="pv-section">
              <Visit />
            </section>
          </>
        ) : (
          <>
            {page !== 'menu' && page !== 'location' && (
              <section className="pv-page-heading">
                <p className="pv-kicker">{titles[page][0]}</p>
                <h1>{titles[page][1]}</h1>
                <p>
                  {page === 'about'
                    ? '좋은 사람들과 편안하게 나누는 한 끼.'
                    : '대통령의 음식을 만나보세요.'}
                </p>
              </section>
            )}
            {page === 'menu' && (
              <section
                className={`pv-section pv-menu-section${page === 'menu' ? ' pv-menu-page' : ''}`}
              >
                <MenuGrid items={menus} overlay={variant === 'a'} />
              </section>
            )}
            {page === 'about' && (
              <section className="pv-section">
                <div className="pv-about-image">
                  <Photo
                    name="table"
                    alt="대통령의 고기와 곁들임 한 상"
                    priority
                  />
                </div>
                <div className="pv-intro">
                  <h2>혜화의 맛있는 약속.</h2>
                  <p>{restaurant.introduction}</p>
                </div>
                <div className="pv-about-details">
                  {restaurant.features.map((f, i) => (
                    <article key={f.title}>
                      <span className="pv-kicker">0{i + 1}</span>
                      <h2>{f.title}</h2>
                      <p>{f.description}</p>
                    </article>
                  ))}
                </div>
                <div className="pv-menu-notice">
                  <h2>모임의 크기에 맞춰 준비합니다.</h2>
                  <p>{restaurant.groupBooking}</p>
                  <a className="pv-button" href={phone}>
                    단체 예약 상담 ↗
                  </a>
                </div>
              </section>
            )}
            {page === 'location' &&
              (variant === 'a' ? (
                <YongsLocation />
              ) : (
                <section className="pv-section pv-location-page">
                  <Visit standalone />
                  <div className="pv-location-note">
                    <h2>방문 전 확인해 주세요</h2>
                    <p>
                      주차 방법과 단체 좌석은 방문 전에 전화로 문의해 주세요.
                    </p>
                    <div className="pv-amenities">
                      {restaurant.amenities.map((x) => (
                        <span key={x}>{x}</span>
                      ))}
                    </div>
                  </div>
                </section>
              ))}
          </>
        )}
      </main>
      <footer className="pv-footer">
        <div>
          <Link className="pv-brand" href={base}>
            <span>혜화 삼겹살</span>
            <strong>대통령.</strong>
          </Link>
          <p>{restaurant.name}</p>
          <p>{restaurant.address}</p>
        </div>
        <div>
          <p>좋은 사람들과, 맛있는 한 자리.</p>
          <a href={phone}>{restaurant.phone}</a>
          <a
            href={links.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram ↗
          </a>
          <Link href={`${base}/location`}>오시는 길 ↗</Link>
        </div>
        <small>© {new Date().getFullYear()} HYEHWA SAMGYEOPSAL PRESIDENT</small>
      </footer>
      {variant === 'a' ? (
        <nav className="ya-floating" aria-label="빠른 이동">
          <a href={phone} aria-label="전화 예약">
            ☎
          </a>
          <a
            href={links.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="인스타그램"
          >
            ◎
          </a>
          <a href="#ya-top" aria-label="맨 위로 이동">
            ⌃
          </a>
        </nav>
      ) : (
        <div className="pv-mobile-contact">
          <a href={phone}>전화 예약 · 문의</a>
          <a href={links.naverMapUrl} target="_blank" rel="noopener noreferrer">
            길찾기 ↗
          </a>
        </div>
      )}
    </div>
  );
}
