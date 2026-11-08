import type { LunchItem } from '@/types/menu';
import source from './menu-source.json';
export const lunchMenus: LunchItem[] = source.items
  .filter((item) => item.lunch)
  .map((item) => ({ ...item, kind: 'main' }));
export const lunchLabels = {
  main: '점심 메뉴',
  set: '세트 메뉴',
  extra: '추가 메뉴',
};
