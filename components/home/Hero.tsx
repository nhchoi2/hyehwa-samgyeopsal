import Link from 'next/link';
import { restaurant, photos } from '@/data/restaurant';
import { content } from '@/data/content';
import ImageSlider from '@/components/common/ImageSlider';
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">{content.home.heroLabel}</p>
        <h1>{restaurant.name}</h1>
        <p className="hero-english">{restaurant.englishName}</p>
        <p className="muted mt-6">{content.home.heroNote}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link className="button button-primary" href="/menu">
            메뉴 보기 <span aria-hidden="true">↗</span>
          </Link>
          <Link className="button" href="/location">
            오시는 길 <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <ImageSlider images={photos.hero} hero />
    </section>
  );
}
