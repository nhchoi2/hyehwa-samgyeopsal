import korean from '@/data/locales/ko/location.json';
import BranchExteriorPhoto from './BranchExteriorPhoto';
import { restaurant } from '@/data/restaurant';
import NaverLocationMap, { NaverMapsProvider } from './NaverLocationMap';

export default function BranchLocations({ copy = korean, details = restaurant, showNightPhoto = false }: { copy?: typeof korean; showNightPhoto?: boolean; details?: Pick<typeof restaurant, 'address' | 'businessHours' | 'parking' | 'seating'> }) {

  return (
    <NaverMapsProvider>
      <article className="pv-branch-card">
        <h2>{copy.hyehwa}</h2>
        <BranchExteriorPhoto copy={copy} showNightPhoto={showNightPhoto} />
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
