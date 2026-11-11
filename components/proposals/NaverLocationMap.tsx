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

export default function NaverLocationMap({
  latitude,
  longitude,
  center,
  name,
}: {
  latitude: number;
  longitude: number;
  center?: { latitude: number; longitude: number };
  name: string;
}) {
  const container = useRef<HTMLDivElement>(null);
  const [maps, setMaps] = useState<NaverMaps>();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!maps || !container.current) return;

    const position = new maps.LatLng(latitude, longitude);
    const map = new maps.Map(container.current, {
      center: center
        ? new maps.LatLng(center.latitude, center.longitude)
        : position,
      zoom: 17,
      scrollWheel: false,
    });
    const marker = new maps.Marker({ position, map, title: name });

    return () => {
      marker.setMap(null);
      map.destroy();
    };
  }, [maps, latitude, longitude, center, name]);

  if (!clientId || failed) return null;

  return (
    <>
      <Script
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${encodeURIComponent(clientId)}`}
        onReady={() => {
          const api = (window as Window & { naver?: { maps?: NaverMaps } })
            .naver?.maps;
          if (api?.Map && api.Marker && api.LatLng) setMaps(api);
          else setFailed(true);
        }}
        onError={() => setFailed(true)}
      />
      <div
        ref={container}
        className="pv-location-map"
        role="region"
        aria-label={`${name} 네이버 지도`}
      />
    </>
  );
}
