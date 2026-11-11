import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { variants, pages, isVariant } from '@/data/proposals';
import Proposal from '@/components/proposals/Proposal';
import '@/components/proposals/proposals.css';
import '@/components/proposals/yongs-a.css';
type Props = { params: Promise<{ variant: string; path?: string[] }> };
export const dynamicParams = false;
export function generateStaticParams() {
  const visibleVariants =
    process.env.SHOW_DRAFT_PROPOSALS === '1' ? Object.keys(variants) : ['c'];
  return visibleVariants.flatMap((variant) => [
    ...pages.map((page) => ({ variant, path: page.slug ? [page.slug] : [] })),
    { variant, path: ['lunch'] },
  ]);
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { variant, path = [] } = await params;
  if (
    !isVariant(variant) ||
    path.length > 1 ||
    !pages.some((p) => p.slug === (path[0] || ''))
  )
    return {};
  return {
    title: `${pages.find((p) => p.slug === (path[0] || ''))!.label} · ${variant.toUpperCase()} ${variants[variant].name}`,
    robots: { index: false, follow: false },
    alternates: { canonical: `/${variant}${path.length ? `/${path[0]}` : ''}` },
  };
}
export default async function Page({ params }: Props) {
  const { variant, path = [] } = await params;
  if (variant !== 'c' && process.env.SHOW_DRAFT_PROPOSALS !== '1') notFound();
  if (isVariant(variant) && path.length === 1 && path[0] === 'lunch')
    redirect(`/${variant}/menu`);
  if (
    !isVariant(variant) ||
    path.length > 1 ||
    !pages.some((p) => p.slug === (path[0] || ''))
  )
    notFound();
  return <Proposal variant={variant} page={path[0] || ''} />;
}
