import type { LunchItem } from '@/types/menu';
import source from './menu-source.json';
import menuCopy from './locales/ko/menu.json';
export const lunchMenus: LunchItem[] = source.items
  .filter((item) => item.lunch)
  .map((item) => ({ ...item, ...menuCopy[item.id as keyof typeof menuCopy], kind: 'main' }));
export const lunchLabels = {
  main: '점심 메뉴',
  set: '세트 메뉴',
  extra: '추가 메뉴',
};
