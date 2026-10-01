import type { Metadata } from 'next';
import { menus } from '@/data/menu';
import { content } from '@/data/content';
import PageHeading from '@/components/common/PageHeading';
import MenuCategory from '@/components/menu/MenuCategory';
export const metadata: Metadata = {
  title: '메뉴',
  description: content.pages.menu.description,
  alternates: { canonical: '/menu' },
};
export default function MenuPage() {
  return (
    <div className="container page-content">
      <PageHeading {...content.pages.menu} />
      <MenuCategory items={menus} emptyMessage={content.pending.menu} />
    </div>
  );
}
