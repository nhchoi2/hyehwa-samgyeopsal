import korean from '@/data/locales/ko/location.json';
import Image from 'next/image';
import { restaurant } from '@/data/restaurant';
import NaverLocationMap, { NaverMapsProvider } from './NaverLocationMap';

export default function BranchLocations({ copy = korean, details = restaurant }: { copy?: typeof korean; details?: Pick<typeof restaurant, 'address' | 'businessHours' | 'parking' | 'seating'> }) {

  return (
    <NaverMapsProvider>
      <article className="pv-branch-card">
        <h2>{copy.hyehwa}</h2>
        <div className="pv-location-entrance">
          <Image
            src="/images/materials/business/hyehwa-exterior.webp"
            alt={copy.hyehwaPhoto}
            fill
            sizes="(max-width: 760px) 90vw, 560px"
            className="pv-photo"
          />
        </div>
        <div className="pv-branch-info">
          <dl>
            <div>
              <dt>{copy.address}</dt>
              <dd>{details.address}</dd>
            </div>
            <div>
              <dt>{copy.hours}</dt>
              <dd>{details.businessHours}</dd>
            </div>
            <div>
              <dt>{copy.phone}</dt>
              <dd>
                <a href={`tel:${restaurant.phone}`}>{restaurant.phone}</a>
              </dd>
            </div>
            <div>
              <dt>{copy.parking}</dt>
              <dd>{details.parking}</dd>
            </div>
            <div>
              <dt>{copy.seating}</dt>
              <dd>{details.seating}</dd>
            </div>
          </dl>
        </div>
        <NaverLocationMap
          name={copy.hyehwa}
          mapLabel={copy.naverMap}
          latitude={37.5838458897522}
          longitude={127.002705870434}
          center={{ latitude: 37.5832, longitude: 127.0025 }}
        />
      </article>
    </NaverMapsProvider>
  );
}
