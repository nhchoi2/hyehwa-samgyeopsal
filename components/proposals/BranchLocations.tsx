import Image from 'next/image';
import { restaurant } from '@/data/restaurant';
import NaverLocationMap from './NaverLocationMap';

const branches = [
  {
    name: '혜화 본점',
    photo: '/images/materials/business/hyehwa-exterior.webp',
    photoAlt: '혜화 본점 매장 전경',
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
    name: '신논현역점',
    photo: '/images/materials/business/sinnonhyeon-exterior.webp',
    photoAlt: '신논현역점 매장 전경',
    latitude: 37.5037441978014,
    longitude: 127.026057149674,
    address: '서울 강남구 강남대로110길 14',
    hours: '월~금 16:00–24:00\n토·일 12:00–24:00\n라스트 오더 23:00',
    phone: '02-554-9934',
    parking: '유료 주차 가능',
    seating: '단체석 최대 34명',
  },
];

export default function BranchLocations() {
  return (
    <div className="pv-branch-options">
      {branches.map((branch) => (
        <article key={branch.name} className="pv-branch-card">
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
                <dt>주소</dt>
                <dd>{branch.address}</dd>
              </div>
              <div>
                <dt>영업시간</dt>
                <dd>{branch.hours}</dd>
              </div>
              <div>
                <dt>전화</dt>
                <dd>
                  <a href={`tel:${branch.phone}`}>{branch.phone}</a>
                </dd>
              </div>
              <div>
                <dt>주차</dt>
                <dd>{branch.parking}</dd>
              </div>
              <div>
                <dt>모임 안내</dt>
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
  );
}
