import Link from 'next/link';
import { restaurant, photos, reviews } from '@/data/restaurant';
import { menus } from '@/data/menu';
import { links } from '@/data/links';
import { content } from '@/data/content';
import Hero from '@/components/home/Hero';
import ContactSection from '@/components/home/ContactSection';
import SectionTitle from '@/components/common/SectionTitle';
import ImageSlider from '@/components/common/ImageSlider';
import LocationInfo from '@/components/common/LocationInfo';
import ExternalLinks from '@/components/common/ExternalLinks';
import MenuCard from '@/components/menu/MenuCard';
import type { Metadata } from 'next';
export const metadata: Metadata = { alternates: { canonical: '/' } };
export default function Home() {
  const featured = menus.filter((menu) => menu.featured);
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
        <section className="section">
          <SectionTitle {...content.home.interior} />
          <ImageSlider images={photos.interior} />
        </section>
        <section className="section">
          <SectionTitle {...content.home.features} />
          {restaurant.features.length ? (
            <div className="menu-grid">
              {restaurant.features.map((feature) => (
                <article key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p className="muted mt-3">{feature.description}</p>
                </article>
              ))}
            </div>
          ) : (
            <p className="muted">{content.pending.features}</p>
          )}
        </section>
        <section className="section">
          <SectionTitle {...content.home.reviews} />
          {reviews.length ? (
            <div className="menu-grid">
              {reviews.map((review, index) => (
                <blockquote key={index}>
                  <p>{review.text}</p>
                  <footer className="muted mt-3">
                    {review.url ? (
                      <a
                        href={review.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {review.source} ↗
                      </a>
                    ) : (
                      review.source
                    )}
                  </footer>
                </blockquote>
              ))}
            </div>
          ) : (
            <p className="muted">{content.pending.reviews}</p>
          )}
          {links.instagramUrl && (
            <div className="mt-6">
              <ExternalLinks
                items={[{ label: 'Instagram', href: links.instagramUrl }]}
              />
            </div>
          )}
        </section>
      </div>
      <ContactSection />
      <section className="container section">
        <SectionTitle {...content.home.location} />
        <LocationInfo />
      </section>
    </>
  );
}
