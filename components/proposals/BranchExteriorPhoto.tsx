'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Swiper as SwiperInstance } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import type korean from '@/data/locales/ko/location.json';
import 'swiper/css';

type ExteriorCopy = Pick<
  typeof korean,
  'hyehwaPhoto' | 'nightPhoto' | 'previousPhoto' | 'nextPhoto'
>;

const exterior = '/images/materials/business/hyehwa-exterior.webp';
const nightExterior = '/images/materials/business/hyehwa-exterior-night.webp';

function ExteriorImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="pv-location-entrance">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 760px) 90vw, 560px"
        className="pv-photo"
      />
    </div>
  );
}

export default function BranchExteriorPhoto({
  copy,
  showNightPhoto,
}: {
  copy: ExteriorCopy;
  showNightPhoto: boolean;
}) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!showNightPhoto) return <ExteriorImage src={exterior} alt={copy.hyehwaPhoto} />;

  const photos = [
    { src: exterior, alt: copy.hyehwaPhoto },
    { src: nightExterior, alt: copy.nightPhoto },
  ];

  return (
    <div className="pv-branch-carousel" role="group" aria-label={copy.hyehwaPhoto}>
      <Swiper
        rewind
        speed={320}
        onSwiper={setSwiper}
        onSlideChange={(slider) => setActiveIndex(slider.activeIndex)}
      >
        {photos.map(({ src, alt }, index) => (
          <SwiperSlide key={src} aria-hidden={activeIndex !== index}>
            <ExteriorImage src={src} alt={alt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pv-branch-carousel-controls">
        <button type="button" aria-label={copy.previousPhoto} onClick={() => swiper?.slidePrev()}>
          <span aria-hidden="true">‹</span>
        </button>
        <span role="status">
          {activeIndex + 1} / {photos.length}
          <span className="sr-only"> · {photos[activeIndex].alt}</span>
        </span>
        <button type="button" aria-label={copy.nextPhoto} onClick={() => swiper?.slideNext()}>
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  );
}
