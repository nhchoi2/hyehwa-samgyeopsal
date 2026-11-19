'use client';

import { useEffect, useRef } from 'react';

export default function HomeHeroVideo() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!motion.matches) void video.current?.play().catch(() => {});
  }, []);

  return (
    <video
      ref={video}
      aria-hidden="true"
      src="/videos/hyehwa-food-first.mp4"
      poster="/images/proposals/c-home-food-first.webp"
      muted
      loop
      playsInline
      preload="none"
    />
  );
}
