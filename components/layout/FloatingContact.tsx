import { contactLinks, mapLinks } from '@/data/links';
export default function FloatingContact() {
  const items = [...contactLinks, ...mapLinks];
  if (!items.length) return null;
  return (
    <details className="floating-contact">
      <summary>예약 · 문의</summary>
      <nav aria-label="빠른 연락">
        {items.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label} ↗
          </a>
        ))}
      </nav>
    </details>
  );
}
