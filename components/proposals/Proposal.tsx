import Image from 'next/image';
import YongsHome from './YongsHome';
import Link from 'next/link';
import { variants, type Variant } from '@/data/proposals';
import { cHomeFaqs, restaurant, reviews } from '@/data/restaurant';
import { menus, featuredMenus } from '@/data/menu';
import MenuGrid from './MenuGrid';
import { MenuCards } from './MenuCards';
import ReviewSlider from './ReviewSlider';
import { links } from '@/data/links';
import Navigation from './Navigation';
import BranchLocations from './BranchLocations';
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
  const details = (
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
  );
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
          네이버지도에서 길찾기 ↗
        </a>
      </div>
      {details}
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
  base,
}: {
  variant: Variant;
  page: string;
  base: string;
}) {
  const v = variants[variant];
  const titles: Record<string, [string, string]> = {
    menu: ['OUR TABLE', '맛있는 만남의 시작.'],
    about: ['OUR STORY', '함께여서 더 좋은 공간.'],
  };
  return (
    <div
      className={`pv pv-${variant}`}
      id={variant === 'a' ? 'ya-top' : undefined}
    >
      <Navigation
        key={`${variant}-${page}`}
        variant={variant}
        page={page}
        base={base}
        showProposalSwitch={process.env.SHOW_DRAFT_PROPOSALS === '1'}
      />
      <main id="main-content">
        {!page && variant === 'a' ? (
          <YongsHome />
        ) : !page ? (
          <>
            {variant === 'c' ? (
              <section className="pv-c-showcase">
                <h1 className="sr-only">{restaurant.name}</h1>
                <div className="pv-c-showcase-mosaic">
                  <div className="pv-c-mosaic-tile pv-c-mosaic-grill">
                    <Image
                      src={proposalPhotos[v.image]}
                      alt="대나무통에서 삼겹살을 꺼내는 모습"
                      fill
                      sizes="(max-width: 760px) 57vw, (max-width: 1200px) 50vw, 600px"
                      preload
                      className="pv-photo"
                    />
                  </div>
                  <div className="pv-c-mosaic-tile pv-c-mosaic-table">
                    <Image
                      src="/images/proposals/c-full-table.webp"
                      alt="불판 위 삼겹살과 곁들임이 차려진 한 상"
                      fill
                      sizes="(max-width: 760px) 33vw, (max-width: 1200px) 30vw, 352px"
                      loading="eager"
                      className="pv-photo"
                    />
                  </div>
                  <div className="pv-c-mosaic-tile pv-c-mosaic-interior">
                    <Image
                      src="/images/proposals/c-interior.webp"
                      alt="나무 테이블과 조명이 있는 매장 내부"
                      fill
                      sizes="(max-width: 760px) 33vw, (max-width: 1200px) 30vw, 352px"
                      loading="eager"
                      className="pv-photo"
                    />
                  </div>
                </div>
              </section>
            ) : (
              <section className="pv-hero">
                <div className="pv-hero-image">
                  <Photo
                    name={v.image}
                    alt="불판 앞에서 대나무통에 든 삼겹살을 꺼내는 모습"
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
            )}
            {variant === 'b' && (
              <section className="pv-section pv-bamboo-feature">
                <div className="pv-bamboo-photo">
                  <Photo name="grill" alt="불판 위에 노릇하게 구워진 삼겹살" />
                </div>
                <div>
                  <p className="pv-kicker">대통령의 대표 메뉴</p>
                  <h2>대나무통 구이 삼겹살</h2>
                  <p className="pv-bamboo-description">
                    대나무통에서 초벌해
                    <br />
                    삼겹살에 은은한 대나무 향을 더합니다.
                  </p>
                  <Link className="pv-text-link" href={`${base}/menu`}>
                    메뉴와 가격 보기 ↗
                  </Link>
                </div>
              </section>
            )}
            <div className="pv-facts">
              <span>매일 11:30 — 23:00</span>
              <span>단체모임 · 가족모임 · 회식</span>
              <Link href={`${base}/location`}>
                서울 종로구 대학로14길 12-1 ↗
              </Link>
            </div>
            {variant === 'c' ? (
              <section
                className="pv-section pv-home-reviews"
                aria-labelledby="c-reviews-heading"
              >
                <div className="pv-section-heading">
                  <h2 id="c-reviews-heading">손님이 남긴 한 상</h2>
                </div>
                {reviews.length > 0 && <ReviewSlider items={reviews} />}
              </section>
            ) : (
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
            )}
            {variant === 'c' ? (
              <section
                className="pv-section pv-c-faq"
                aria-labelledby="c-faq-heading"
              >
                <h2 id="c-faq-heading">자주 묻는 질문</h2>
                <div className="pv-c-faq-list">
                  {cHomeFaqs.map(({ question, answer, contact }) => (
                    <details key={question} name="c-home-faq">
                      <summary>{question}</summary>
                      <p>{answer}</p>
                      {contact && (
                        <a className="pv-text-link" href={phone}>
                          전화로 예약 문의 ↗
                        </a>
                      )}
                    </details>
                  ))}
                </div>
              </section>
            ) : (
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
            )}
            {variant === 'b' && (
              <section className="pv-section">
                <Visit />
              </section>
            )}
          </>
        ) : (
          <>
            {variant !== 'c' && page !== 'menu' && page !== 'location' && (
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
              <section className="pv-section pv-about-page">
                {variant === 'c' && (
                  <section
                    className="pv-brand-story"
                    aria-label="대통령 삼겹살 이야기"
                  >
                    <dl
                      className="pv-brand-name"
                      aria-label="대통령 이름의 유래"
                    >
                      <div>
                        <dt>대나무 (竹)</dt>
                        <dd>대</dd>
                      </div>
                      <div>
                        <dt>대롱 (筒)</dt>
                        <dd>통</dd>
                      </div>
                      <div>
                        <dt>제로 (zero)</dt>
                        <dd>령</dd>
                      </div>
                    </dl>
                    <div className="pv-brand-copy">
                      <p>대통령 삼겹살이 맛있는 건강을 책임집니다</p>
                      <p>
                        우리나라 국민 영양식 삼겹살이
                        <br />
                        대나무 진액을 만나 보양식으로 다시 태어났습니다.
                      </p>
                      <p>
                        대나무의 대롱 안에 국내산 최고 등급 삼겹살을 넣고
                        <br />
                        오븐에서 맛깔나게 구워 내는 대통령 삼겹살.
                      </p>
                      <p>
                        오븐의 조리과정에서 나오는 대나무 진액(죽력)은
                        <br />
                        전통 의학에서는 몸속의 노폐물을 씻어주고
                        <br />
                        혈압을 조절하는 효과가 있다고 전해집니다.
                      </p>
                      <p>
                        대나무 진액이 삼겹살을 만나
                        <br />
                        기름기, 잡냄새, 발암물질을 제로(0)로 만듭니다.
                      </p>
                      <p>향과 맛도 OK, 건강도 OK!</p>
                      <p>건강한 보양식 이제 대통령 삼겹살입니다.</p>
                    </div>
                  </section>
                )}
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
                  {variant === 'c' ? <BranchLocations /> : <Visit standalone />}
                  {variant !== 'c' && (
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
                  )}
                </section>
              ))}
          </>
        )}
      </main>
      {variant === 'a' ? (
        <nav className="ya-floating" aria-label="빠른 이동">
          <a
            href={links.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="인스타그램"
            title="인스타그램"
          >
            <Image
              src="/images/brands/instagram.svg"
              width={20}
              height={20}
              alt=""
            />
          </a>
          {links.facebookUrl ? (
            <a
              href={links.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="페이스북"
              title="페이스북"
            >
              <Image
                src="/images/brands/facebook.svg"
                width={20}
                height={20}
                alt=""
              />
            </a>
          ) : (
            <span
              className="ya-floating-preview"
              role="img"
              aria-label="페이스북"
              title="페이스북"
            >
              <Image
                src="/images/brands/facebook.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
          )}
          <a
            href={links.naverReservationUrl || links.naverMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="네이버 플레이스"
            title="네이버 플레이스"
          >
            <Image
              src="/images/brands/naver.svg"
              width={20}
              height={20}
              alt=""
            />
          </a>
          <a
            className="ya-floating-phone"
            href={phone}
            aria-label="전화 예약"
            title="전화 예약"
          >
            <span aria-hidden="true">☎</span>
          </a>
          <a
            className="ya-floating-top"
            href="#ya-top"
            aria-label="맨 위로 이동"
            title="맨 위로 이동"
          >
            <span aria-hidden="true">TOP</span>
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
