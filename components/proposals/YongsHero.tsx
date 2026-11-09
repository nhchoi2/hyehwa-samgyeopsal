'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { links } from '@/data/links';
import { restaurant } from '@/data/restaurant';
const slides = [
  { id: '067', alt: '대나무통에서 꺼내는 대통령 삼겹살' },
  { id: '084', alt: '돌판 위에서 구워지는 양념 삼겹살' },
  { id: '052', alt: '대통령의 삼겹살 한 상' },
];
export default function YongsHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (paused || reduced) return;
    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5200,
    );
    return () => window.clearInterval(timer);
  }, [paused, reduced]);
  return (
    <section className="ya-hero" aria-label="대통령 대표 음식">
      {slides.map((slide, i) => (
        <Image
          key={slide.id}
          src={`/images/materials/business/business-${slide.id}.webp`}
          alt={slide.alt}
          fill
          sizes="(max-width:1280px) 100vw, 1280px"
          preload={i === 0}
          className={i === index ? 'ya-slide is-active' : 'ya-slide'}
          aria-hidden={i !== index}
        />
      ))}
      <div className="ya-hero-shade" />
      <div className="ya-hero-content">
        <p className="ya-neighborhood">⌖ 혜화 · 대학로 직영본점</p>
        <h1>삼겹살 대통령</h1>
        <p className="ya-tagline">
          대나무에서 시작되는 특별한 한 점,
          <br />
          혜화에서 함께하는 맛있는 시간
        </p>
        <div className="ya-hero-points">
          <span>혜화 · 대학로</span>
          <span>대표 메뉴 대나무통구이삼겹살</span>
        </div>
        <div className="ya-actions">
          <Link href="/a/menu" className="ya-action ya-white">
            메뉴 보기
          </Link>
          <a
            className="ya-action ya-red"
            href={`tel:${restaurant.phone.replace(/[^+\d]/g, '')}`}
          >
            전화 예약
          </a>
          <a
            className="ya-action ya-outline"
            href={links.naverMapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            길찾기 ↗
          </a>
        </div>
        <div className="ya-slide-controls">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              aria-label={`${i + 1}번째 대표 이미지 보기`}
              aria-current={index === i ? 'true' : undefined}
              onClick={() => {
                setIndex(i);
                setPaused(true);
              }}
            >
              <span />
            </button>
          ))}
          <button
            className="ya-pause"
            aria-label={
              paused || reduced
                ? '사진 자동 전환 시작'
                : '사진 자동 전환 멈추기'
            }
            onClick={() => {
              setReduced(false);
              setPaused(!(paused || reduced));
            }}
          >
            {paused || reduced ? '재생' : '일시정지'}
          </button>
        </div>
      </div>
    </section>
  );
}
