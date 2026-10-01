import Link from 'next/link';
import { restaurant } from '@/data/restaurant';
import { navigation } from '@/data/navigation';
import { links } from '@/data/links';
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="font-semibold">{restaurant.name}</p>
            <p className="muted mt-2 text-sm">{restaurant.englishName}</p>
            {restaurant.address && (
              <p className="mt-4 text-sm">{restaurant.address}</p>
            )}
            {restaurant.phone && (
              <a
                className="text-sm"
                href={`tel:${restaurant.phone.replace(/[^+\d]/g, '')}`}
              >
                {restaurant.phone}
              </a>
            )}
          </div>
          <nav aria-label="하단 메뉴" className="flex flex-wrap gap-5">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            {links.instagramUrl && (
              <a
                href={links.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram ↗
              </a>
            )}
          </nav>
        </div>
        <p className="muted mt-10 text-xs">
          © {new Date().getFullYear()} {restaurant.englishName}
        </p>
      </div>
    </footer>
  );
}
