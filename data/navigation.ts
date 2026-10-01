import { site } from '@/config/site';
export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  ...(site.lunchEnabled ? [{ href: '/lunch', label: 'Lunch' }] : []),
  { href: '/about', label: 'About' },
  { href: '/location', label: 'Location' },
];
