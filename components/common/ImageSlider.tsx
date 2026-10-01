'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Keyboard,
} from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import type { RestaurantImage } from '@/types/restaurant';
import { content } from '@/data/content';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ImageSlider({
  images,
  hero = false,
}: {
  images: RestaurantImage[];
  hero?: boolean;
}) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      if (media.matches) swiper?.autoplay?.stop();
    };
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [swiper]);
  if (!images.length)
    return (
      <div className={`image-placeholder ${hero ? 'hero-image' : ''}`}>
        <span>{content.pending.image}</span>
      </div>
    );
  const multiple = images.length > 1;
  return (
    <div className="slider-wrap">
      <Swiper
        modules={[A11y, Autoplay, Navigation, Pagination, Keyboard]}
        onSwiper={setSwiper}
        onAutoplayStart={() => setPaused(false)}
        onAutoplayStop={() => setPaused(true)}
        loop={multiple}
        navigation={multiple}
        pagination={multiple ? { clickable: true } : false}
        keyboard={{ enabled: true, onlyInViewport: true }}
        autoplay={
          multiple
            ? {
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }
            : false
        }
        slidesPerView={1}
        className={hero ? 'hero-image' : ''}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.src}>
            <div className={`slide-image ${hero ? 'hero-image' : ''}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  hero
                    ? '(max-width: 767px) 100vw, 60vw'
                    : '(max-width: 1200px) 100vw, 1120px'
                }
                priority={hero && index === 0}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {multiple && (
        <button
          className="slider-toggle"
          type="button"
          aria-pressed={paused}
          onClick={() => {
            if (swiper?.autoplay.running) {
              swiper.autoplay.stop();
              setPaused(true);
            } else {
              swiper?.autoplay.start();
              setPaused(false);
            }
          }}
        >
          {paused ? '슬라이드 재생' : '슬라이드 일시 정지'}
        </button>
      )}
    </div>
  );
}
