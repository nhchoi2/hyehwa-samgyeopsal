'use client';

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

type NaverMaps = {
  LatLng: new (latitude: number, longitude: number) => object;
  Map: new (
    container: HTMLElement,
    options: { center: object; zoom: number; scrollWheel: boolean },
  ) => { destroy: () => void };
  Marker: new (options: { position: object; map: object; title: string }) => {
    setMap: (map: null) => void;
  };
};

const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID?.trim();

export default function NaverLocationMap() {
  const container = useRef<HTMLDivElement>(null);
  const [maps, setMaps] = useState<NaverMaps>();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!maps || !container.current) return;

    const position = new maps.LatLng(37.5838458897522, 127.002705870434);
    const map = new maps.Map(container.current, {
      center: position,
      zoom: 17,
      scrollWheel: false,
    });
    const marker = new maps.Marker({ position, map, title: '혜화 삼겹살 대통령' });

    return () => {
      marker.setMap(null);
      map.destroy();
    };
  }, [maps]);

  if (!clientId || failed) return null;

  return (
    <>
      <Script
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${encodeURIComponent(clientId)}`}
        onReady={() => {
          const api = (window as Window & { naver?: { maps?: NaverMaps } }).naver?.maps;
          if (api?.Map && api.Marker && api.LatLng) setMaps(api);
          else setFailed(true);
        }}
        onError={() => setFailed(true)}
      />
      <div
        ref={container}
        className="pv-location-map"
        role="region"
        aria-label="혜화 삼겹살 대통령 네이버 지도"
      />
    </>
  );
}
