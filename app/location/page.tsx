import type { Metadata } from 'next';
import { content } from '@/data/content';
import PageHeading from '@/components/common/PageHeading';
import LocationInfo from '@/components/common/LocationInfo';
export const metadata: Metadata = {
  title: '오시는 길',
  description: content.pages.location.description,
  alternates: { canonical: '/location' },
};
export default function LocationPage() {
  return (
    <div className="container page-content">
      <PageHeading {...content.pages.location} />
      <LocationInfo />
    </div>
  );
}
