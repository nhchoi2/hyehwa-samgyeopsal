'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { Swiper as SwiperInstance } from 'swiper';
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { PhotoReview } from '@/data/restaurant';
import 'swiper/css';

export default function ReviewSlider({ items }: { items: PhotoReview[] }) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [playing, setPlaying] = useState(false);
  const multiple = items.length > 1;

  useEffect(() => {
    if (!swiper) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const respectPreference = () => {
      if (preference.matches) swiper.autoplay.stop();
    };
    respectPreference();
    preference.addEventListener('change', respectPreference);
    return () => preference.removeEventListener('change', respectPreference);
  }, [swiper]);

  return (
    <>
      <Swiper
        className="pv-review-slider"
        modules={[A11y, Autoplay]}
        onSwiper={setSwiper}
        onAutoplayStart={() => setPlaying(true)}
        onAutoplayStop={() => setPlaying(false)}
        speed={6300}
        autoplay={multiple ? { delay: 0, disableOnInteraction: false } : false}
        a11y={{
          slideLabelMessage: '후기 {{index}} / {{slidesLength}}',
        }}
        loop={items.length > 5}
        loopPreventsSliding={false}
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          761: { slidesPerView: 4, spaceBetween: 14 },
          1280: { slidesPerView: 5, spaceBetween: 16 },
        }}
      >
        {items.map(({ thumbnailUrl, source, title, url }) => (
          <SwiperSlide key={url}>
            <a
              className="pv-review-card"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="pv-review-photo">
                {thumbnailUrl ? (
                  <Image
                    src={thumbnailUrl}
                    alt=""
                    fill
                    unoptimized
                    referrerPolicy="no-referrer"
                    className="pv-photo"
                  />
                ) : (
                  <span
                    className="pv-review-preview-fallback"
                    aria-hidden="true"
                  >
                    {source}
                  </span>
                )}
              </div>
              <div className="pv-review-caption">
                <span>{source} ↗</span>
                <h3>{title}</h3>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      {multiple && (
        <div
          className="pv-review-controls"
          role="group"
          aria-label="리뷰 슬라이드 조작"
        >
          <button
            type="button"
            aria-label="이전 리뷰"
            onClick={() => {
              swiper?.autoplay.stop();
              swiper?.slidePrev(300);
            }}
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            aria-label={playing ? '자동 넘김 일시정지' : '자동 넘김 재생'}
            onClick={() => {
              if (!swiper) return;
              if (swiper.autoplay.running) swiper.autoplay.stop();
              else swiper.autoplay.start();
            }}
          >
            <span aria-hidden="true">{playing ? 'Ⅱ' : '▶'}</span>
          </button>
          <button
            type="button"
            aria-label="다음 리뷰"
            onClick={() => {
              swiper?.autoplay.stop();
              swiper?.slideNext(300);
            }}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      )}
    </>
  );
}
