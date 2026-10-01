import type { MenuItem } from '@/types/menu';
import MenuCard from './MenuCard';
export default function MenuCategory({
  items,
  emptyMessage,
}: {
  items: MenuItem[];
  emptyMessage: string;
}) {
  if (!items.length) return <div className="empty-state">{emptyMessage}</div>;
  const categories = [...new Set(items.map((item) => item.category || '메뉴'))];
  return (
    <div className="space-y-14">
      {categories.map((category) => (
        <section key={category}>
          <h2 className="mb-6 text-2xl">{category}</h2>
          <div className="menu-grid">
            {items
              .filter((item) => (item.category || '메뉴') === category)
              .map((item) => (
                <MenuCard key={item.id} menu={item} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
