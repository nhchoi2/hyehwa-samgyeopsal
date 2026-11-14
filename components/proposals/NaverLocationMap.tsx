'use client';
import location from '@/data/locales/ko/location.json';

import Script from 'next/script';
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';

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

const MapsContext = createContext<NaverMaps | null | undefined>(undefined);

export function NaverMapsProvider({ children }: { children: ReactNode }) {
  const [maps, setMaps] = useState<NaverMaps | null>();

  return (
    <MapsContext.Provider value={maps}>
      {clientId && (
        <Script
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${encodeURIComponent(clientId)}`}
          onReady={() => {
            const api = (window as Window & { naver?: { maps?: NaverMaps } })
              .naver?.maps;
            setMaps(api?.Map && api.Marker && api.LatLng ? api : null);
          }}
          onError={() => setMaps(null)}
        />
      )}
      {children}
    </MapsContext.Provider>
  );
}

export default function NaverLocationMap({
  latitude,
  longitude,
  center,
  name,
  mapLabel = location.naverMap,
}: {
  latitude: number;
  longitude: number;
  center?: { latitude: number; longitude: number };
  name: string;
  mapLabel?: string;
}) {
  const container = useRef<HTMLDivElement>(null);
  const maps = useContext(MapsContext);

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

  if (!clientId || maps === null) return null;

  return (
    <div
      ref={container}
      className="pv-location-map"
      role="region"
      aria-label={`${name} ${mapLabel}`}
    />
  );
}
