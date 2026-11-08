import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { site } from '@/config/site';
import { lunchMenus, lunchLabels } from '@/data/lunch';
import { content } from '@/data/content';
import PageHeading from '@/components/common/PageHeading';
import MenuCard from '@/components/menu/MenuCard';
export const metadata: Metadata = {
  title: '점심 메뉴',
  description: content.pages.lunch.description,
  alternates: { canonical: '/lunch' },
};
export default function LunchPage() {
  if (!site.lunchEnabled) notFound();
  return (
    <div className="container page-content">
      <PageHeading {...content.pages.lunch} />
      {!lunchMenus.length ? (
        <div className="empty-state">{content.pending.lunch}</div>
      ) : (
        <div className="space-y-14">
          {(Object.keys(lunchLabels) as (keyof typeof lunchLabels)[]).map(
            (kind) => {
              const items = lunchMenus.filter((item) => item.kind === kind);
              return items.length ? (
                <section key={kind}>
                  <h2 className="mb-6 text-2xl">{lunchLabels[kind]}</h2>
                  <div className="menu-grid">
                    {items.map((item) => (
                      <MenuCard key={item.id} menu={item} />
                    ))}
                  </div>
                </section>
              ) : null;
            },
          )}
        </div>
      )}
    </div>
  );
}
