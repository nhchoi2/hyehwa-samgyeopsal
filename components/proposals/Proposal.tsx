import location from '@/data/locales/ko/location.json';
import buttons from '@/data/locales/ko/buttons.json';
import about from '@/data/locales/ko/about.json';
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
        {buttons.browseMenu} <span>↗</span>
      </Link>
      <a className="pv-button pv-outline" href={phone}>
        {buttons.callInquiryArrow}
      </a>
    </div>
  );
}
function Visit({ standalone = false }: { standalone?: boolean }) {
  const details = (
    <dl>
      {[
        [location.hours, restaurant.businessHours],
        [location.phone, restaurant.phone],
        [location.parking, restaurant.parking],
        [location.seating, restaurant.seating],
      ].map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{label === location.phone ? <a href={phone}>{value}</a> : value}</dd>
        </div>
      ))}
    </dl>
  );
  return (
    <div className="pv-visit">
      <div>
        {standalone ? (
          <h1>{location.heading}</h1>
        ) : (
          <>
            <p className="pv-kicker">FIND US IN HYEHWA</p>
            <h2>{location.welcome}</h2>
          </>
        )}
        <p>{restaurant.address}</p>
        <a
          className="pv-button"
          href={links.naverMapUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttons.naverDirections}
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
        <h1>{location.heading}</h1>
        <p>{restaurant.address}</p>
        <div className="ya-location-actions">
          <a className="ya-action ya-red" href={phone}>
            {buttons.callInquiry}
          </a>
          <a
            className="ya-action ya-menu-link"
            href={links.naverMapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttons.naverDirectionsShort}
          </a>
        </div>
      </div>
      <div className="ya-location-grid">
        <div className="ya-location-photo">
          <Image
            src="/images/materials/business/business-088.webp"
            alt={location.entrancePhoto}
            fill
            sizes="(max-width:1023px) 94vw, 46vw"
          />
        </div>
        <dl className="ya-location-info">
          <div>
            <dt>{location.hours}</dt>
            <dd>{restaurant.businessHours}</dd>
          </div>
          <div>
            <dt>{location.phone}</dt>
            <dd>
              <a href={phone}>{restaurant.phone}</a>
            </dd>
          </div>
          <div>
            <dt>{location.parkingAndSeating}</dt>
            <dd>
              {restaurant.parking} · {location.parkingInquiry}
            </dd>
          </div>
          <div>
            <dt>{location.amenities}</dt>
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
    about: ['OUR STORY', about.aboutHeading],
  };
  return (
    <div
      className={`pv pv-${variant}`}
      id={variant !== 'b' ? 'ya-top' : undefined}
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
                    {buttons.menuPrices}
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
                    {buttons.menuGuide}
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
                <h2 id="c-faq-heading">{about.faqHeading}</h2>
                <div className="pv-c-faq-list">
                  {cHomeFaqs.map(({ question, answer, contact }) => (
                    <details key={question} name="c-home-faq">
                      <summary>{question}</summary>
                      <p>{answer}</p>
                      {contact && (
                        <a className="pv-text-link" href={phone}>
                          {buttons.callReservation}
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
                    {buttons.groupReservation}
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
                  <video
                    className="pv-about-video"
                    aria-label="대나무통에서 시작된 한 상"
                    src="/videos/hyehwa-about-web.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                  />
                )}
                {variant === 'c' && (
                  <section
                    className="pv-brand-story"
                    aria-label={about.storyLabel}
                  >
                    <dl
                      className="pv-brand-name"
                      aria-label={about.nameOrigin}
                    >
                      <div>
                        <dt>{about.bamboo}</dt>
                        <dd>{about.dae}</dd>
                      </div>
                      <div>
                        <dt>{about.tube}</dt>
                        <dd>{about.tong}</dd>
                      </div>
                      <div>
                        <dt>{about.zero}</dt>
                        <dd>{about.ryeong}</dd>
                      </div>
                    </dl>
                    <div className="pv-brand-copy">
                      {Object.entries(about.paragraphs).map(([key, paragraph]) => (
                        <p key={key} style={{ whiteSpace: 'pre-line' }}>
                          {paragraph.split(/(\{[^{}]+\})/g).map((part, index) =>
                            part.startsWith('{') ? (
                              <strong key={index}>{part.slice(1, -1)}</strong>
                            ) : part
                          )}
                        </p>
                      ))}
                    </div>
                  </section>
                )}
                {variant !== 'c' && (
                  <>
                    <div className="pv-about-image">
                      <Photo
                        name="table"
                        alt={about.tablePhoto}
                        priority
                      />
                    </div>
                    <div className="pv-intro">
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
                  </>
                )}
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
                      <h2>{location.visitHeading}</h2>
                      <p>
                        {location.visitInquiry}
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
      {variant !== 'b' && (
        <nav className="ya-floating" aria-label={buttons.quickLinks}>
          <a
            className="ya-floating-instagram"
            href={links.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={buttons.instagram}
            title={buttons.instagram}
          >
            <Image
              src="/images/brands/instagram-rounded.svg"
              width={44}
              height={44}
              alt=""
            />
          </a>
          {links.facebookUrl ? (
            <a
              href={links.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={buttons.facebook}
              title={buttons.facebook}
            >
              <Image
                src="/images/brands/facebook.svg"
                width={20}
                height={20}
                alt=""
              />
            </a>
          ) : variant === 'a' ? (
            <span
              className="ya-floating-preview"
              role="img"
              aria-label={buttons.facebook}
              title={buttons.facebook}
            >
              <Image
                src="/images/brands/facebook.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
          ) : null}
          <a
            href={links.naverReservationUrl || links.naverMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={buttons.naverPlace}
            title={buttons.naverPlace}
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
            aria-label={buttons.phoneReservation}
            title={buttons.phoneReservation}
          >
            <span aria-hidden="true">☎</span>
          </a>
          <a
            className="ya-floating-top"
            href="#ya-top"
            aria-label={buttons.backToTop}
            title={buttons.backToTop}
          >
            <span aria-hidden="true">{buttons.top}</span>
          </a>
        </nav>
      )}
      {variant !== 'a' && (
        <div className="pv-mobile-contact">
          <a href={phone}>{buttons.callInquiry}</a>
          <a href={links.naverMapUrl} target="_blank" rel="noopener noreferrer">
            {buttons.directions}
          </a>
        </div>
      )}
    </div>
  );
}
