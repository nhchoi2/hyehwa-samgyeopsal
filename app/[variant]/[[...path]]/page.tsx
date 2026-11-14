import { getCopy, languageNames, isLocale } from '@/data/locales';
import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { variants, pages, isVariant } from '@/data/proposals';
import Proposal from '@/components/proposals/Proposal';
import '@/components/proposals/proposals.css';
import '@/components/proposals/yongs-a.css';
type Props = { params: Promise<{ variant: string; path?: string[] }> };
export const dynamicParams = false;
const showDrafts = process.env.SHOW_DRAFT_PROPOSALS === '1';

function resolveVariant(route: string) {
  if (showDrafts) return isVariant(route) ? route : null;
  return route === 'a' || route === 'c' ? 'c' : null;
}
export function generateStaticParams() {
  const visibleVariants = showDrafts ? Object.keys(variants) : ['a', 'c'];
  return visibleVariants.flatMap((variant) => [
    ...pages.map((page) => ({ variant, path: page.slug ? [page.slug] : [] })),
    { variant, path: ['lunch'] },
    ...(variant === 'a' ? Object.keys(languageNames).filter((code) => code !== 'ko').flatMap((code) => pages.map(({ slug }) => ({ variant, path: slug ? [code, slug] : [code] }))) : []),
  ]);
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { variant: route, path: segments = [] } = await params;
  const locale = route === 'a' && isLocale(segments[0]) ? segments[0] : 'ko';
  const path = locale === 'ko' ? segments : segments.slice(1);
  const variant = resolveVariant(route);
  if (
    !variant ||
    path.length > 1 ||
    !pages.some((p) => p.slug === (path[0] || ''))
  )
    return {};
  return {
    title: locale === 'ko' ? `${pages.find((p) => p.slug === (path[0] || ''))!.label} · ${variants[variant].name}` : `${getCopy(locale).navigation[(path[0] || 'home') as 'home' | 'menu' | 'about' | 'location']} · ${getCopy(locale).restaurant.name}`,
    robots: { index: false, follow: false },
    alternates: {
      canonical: `/${showDrafts ? route : 'a'}${locale === 'ko' ? '' : `/${locale}`}${path.length ? `/${path[0]}` : ''}`,
    },
  };
}
export default async function Page({ params }: Props) {
  const { variant: route, path: segments = [] } = await params;
  const locale = route === 'a' && isLocale(segments[0]) ? segments[0] : 'ko';
  const path = locale === 'ko' ? segments : segments.slice(1);
  const variant = resolveVariant(route);
  const base = locale === 'ko' ? (showDrafts ? `/${route}` : '/a') : `/a/${locale}`;
  if (variant && path.length === 1 && path[0] === 'lunch')
    redirect(`${base}/menu`);
  if (
    !variant ||
    path.length > 1 ||
    !pages.some((p) => p.slug === (path[0] || ''))
  )
    notFound();
  if (!showDrafts && route === 'c')
    redirect(path.length ? `${base}/${path[0]}` : base);
  return <Proposal variant={variant} page={path[0] || ''} base={base} locale={locale} />;
}
