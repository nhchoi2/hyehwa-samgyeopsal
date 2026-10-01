import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
import { navigation } from '@/data/navigation';
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];
  return navigation.map((item) => ({
    url: `${site.url}${item.href}`,
    changeFrequency: 'monthly',
    priority: item.href === '/' ? 1 : 0.7,
  }));
}
