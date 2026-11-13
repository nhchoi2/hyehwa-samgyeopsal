import copy from '@/data/locales/ko/location.json';
import Image from 'next/image';
import { restaurant } from '@/data/restaurant';
import NaverLocationMap, { NaverMapsProvider } from './NaverLocationMap';

const branches = [
  {
    id: 'hyehwa',
    name: copy.hyehwa,
    photo: '/images/materials/business/hyehwa-exterior.webp',
    photoAlt: copy.hyehwaPhoto,
    latitude: 37.5838458897522,
    longitude: 127.002705870434,
    center: { latitude: 37.5832, longitude: 127.0025 },
    address: restaurant.address,
    hours: restaurant.businessHours,
    phone: restaurant.phone,
    parking: restaurant.parking,
    seating: restaurant.seating,
  },
  {
    id: 'sinnonhyeon',
    name: copy.sinnonhyeon,
    photo: '/images/materials/business/sinnonhyeon-exterior.webp',
    photoAlt: copy.sinnonhyeonPhoto,
    latitude: 37.5037441978014,
    longitude: 127.026057149674,
    address: copy.sinnonhyeonAddress,
    hours: copy.sinnonhyeonHours,
    phone: '02-554-9934',
    parking: copy.sinnonhyeonParking,
    seating: copy.sinnonhyeonSeating,
  },
];

export default function BranchLocations() {
  return (
    <NaverMapsProvider>
      <div className="pv-branch-options">
        {branches.map((branch) => (
          <article key={branch.id} className="pv-branch-card">
            <h2>{branch.name}</h2>
            <div className="pv-location-entrance">
              <Image
                src={branch.photo}
                alt={branch.photoAlt}
                fill
                sizes="(max-width: 760px) 88vw, 42vw"
                className="pv-photo"
              />
            </div>
            <div className="pv-branch-info">
              <dl>
                <div>
                  <dt>{copy.address}</dt>
                  <dd>{branch.address}</dd>
                </div>
                <div>
                  <dt>{copy.hours}</dt>
                  <dd>{branch.hours}</dd>
                </div>
                <div>
                  <dt>{copy.phone}</dt>
                  <dd>
                    <a href={`tel:${branch.phone}`}>{branch.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>{copy.parking}</dt>
                  <dd>{branch.parking}</dd>
                </div>
                <div>
                  <dt>{copy.seating}</dt>
                  <dd>{branch.seating}</dd>
                </div>
              </dl>
            </div>
            <NaverLocationMap
              name={branch.name}
              latitude={branch.latitude}
              longitude={branch.longitude}
              center={branch.center}
            />
          </article>
        ))}
      </div>
    </NaverMapsProvider>
  );
}
