export default function ExternalLinks({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {items
        .filter((item) => item.href)
        .map((item) => (
          <a
            className="button"
            key={item.label}
            href={item.href}
            {...(item.href.startsWith('https://')
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {item.label}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
    </div>
  );
}
