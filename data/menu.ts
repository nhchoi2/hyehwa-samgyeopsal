import type { MenuItem } from '@/types/menu';
import source from './menu-source.json';
import menuCopy from './locales/ko/menu.json';
import { menuImages } from './menu-images';

// One source of truth for every design and the original routes.
const menuItems = source.items.map((item) => ({
  ...item, ...menuCopy[item.id as keyof typeof menuCopy],
  image: menuImages[item.image] ?? item.image,
}));
export const menus: MenuItem[] = menuItems.filter((item) => item.priceKrw > 0);
export const menuSource = {
  url: source.source,
  collectedDate: source.collectedDate,
};
export const corkage = menuItems.find((item) => item.id === 'menu-10')!;
export const featuredMenus = ['menu-07', 'menu-02', 'menu-08'].map((id) =>
  menus.find((item) => item.id === id)!,
);
