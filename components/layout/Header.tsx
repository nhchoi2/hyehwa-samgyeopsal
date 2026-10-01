import Image from 'next/image';
import Link from 'next/link';
import { restaurant, logo } from '@/data/restaurant';
import { contactLinks } from '@/data/links';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${restaurant.name} 홈`}>
          {logo.src ? (
            <Image
              src={logo.src}
              alt={logo.alt || restaurant.name}
              width={200}
              height={48}
            />
          ) : (
            <span>{restaurant.name}</span>
          )}
        </Link>
        <MobileMenu />
        {contactLinks[0] && (
          <a className="button header-contact" href={contactLinks[0].href}>
            {contactLinks[0].label} ↗
          </a>
        )}
      </div>
    </header>
  );
}
