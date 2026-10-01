import type { Metadata } from 'next';
import { restaurant, photos } from '@/data/restaurant';
import { content } from '@/data/content';
import PageHeading from '@/components/common/PageHeading';
import ImageSlider from '@/components/common/ImageSlider';
export const metadata: Metadata = {
  title: '매장 소개',
  description: content.pages.about.description,
  alternates: { canonical: '/about' },
};
export default function AboutPage() {
  const sections = [
    ['음식점 소개', restaurant.introduction],
    ['브랜드 스토리', restaurant.story],
    ['음식 철학', restaurant.philosophy],
    ['공간 소개', restaurant.space],
    ['식재료 소개', restaurant.ingredients],
  ];
  return (
    <div className="container page-content">
      <PageHeading {...content.pages.about} />
      <ImageSlider images={photos.about} />
      <div className="mt-12">
        {sections.map(([title, description]) => (
          <section className="about-row" key={title}>
            <h2>{title}</h2>
            <p className="muted whitespace-pre-line">
              {description || content.pending.about}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
