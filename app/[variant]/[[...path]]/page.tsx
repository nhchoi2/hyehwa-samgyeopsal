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
  ]);
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { variant: route, path = [] } = await params;
  const variant = resolveVariant(route);
  if (
    !variant ||
    path.length > 1 ||
    !pages.some((p) => p.slug === (path[0] || ''))
  )
    return {};
  return {
    title: `${pages.find((p) => p.slug === (path[0] || ''))!.label} · ${variants[variant].name}`,
    robots: { index: false, follow: false },
    alternates: {
      canonical: `/${showDrafts ? route : 'a'}${path.length ? `/${path[0]}` : ''}`,
    },
  };
}
export default async function Page({ params }: Props) {
  const { variant: route, path = [] } = await params;
  const variant = resolveVariant(route);
  const base = showDrafts ? `/${route}` : '/a';
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
  return <Proposal variant={variant} page={path[0] || ''} base={base} />;
}
