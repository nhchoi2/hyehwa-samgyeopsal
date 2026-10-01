import { restaurant } from '@/data/restaurant';
import { mapLinks } from '@/data/links';
import { content } from '@/data/content';
import ExternalLinks from './ExternalLinks';
export default function LocationInfo() {
  const fields = [
    ['주소', restaurant.address],
    ['전화번호', restaurant.phone],
    ['영업시간', restaurant.businessHours],
    ['휴무일', restaurant.closedDays],
    ['주차', restaurant.parking],
  ];
  return (
    <div className="location-grid">
      <div>
        <dl className="info-list">
          {fields.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>
                {label === '전화번호' && value ? (
                  <a href={`tel:${value.replace(/[^+\d]/g, '')}`}>{value}</a>
                ) : (
                  value || content.pending.info
                )}
              </dd>
            </div>
          ))}
        </dl>
        <ExternalLinks items={mapLinks} />
      </div>
      <div className="map-placeholder" aria-label="지도 준비 중">
        <span className="eyebrow">MAP</span>
        <p>{content.pending.map}</p>
      </div>
    </div>
  );
}
