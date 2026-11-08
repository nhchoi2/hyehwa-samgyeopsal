import type { MenuItem } from '@/types/menu';
import source from './menu-source.json';

// One source of truth for every design and the original routes.
export const menus: MenuItem[] = source.items.filter(
  (item) => item.priceKrw > 0,
);
export const menuSource = {
  url: source.source,
  collectedDate: source.collectedDate,
};
export const corkage = source.items.find((item) => item.id === 'menu-10')!;
export const featuredMenus = ['menu-07', 'menu-02', 'menu-08'].map((id) =>
  menus.find((item) => item.id === id)!,
);
