import { contactLinks } from '@/data/links';
import { content } from '@/data/content';
import { restaurant } from '@/data/restaurant';
import SectionTitle from '@/components/common/SectionTitle';
import ExternalLinks from '@/components/common/ExternalLinks';
export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">
        <SectionTitle {...content.home.contact} />
        {restaurant.groupBooking && (
          <p className="muted mb-6 max-w-3xl leading-8">
            {restaurant.groupBooking}
          </p>
        )}
        {restaurant.seating && (
          <p className="muted mb-6 whitespace-pre-line text-sm">
            {restaurant.seating}
          </p>
        )}
        {contactLinks.length ? (
          <ExternalLinks items={contactLinks} />
        ) : (
          <p className="muted">{content.pending.contact}</p>
        )}
      </div>
    </section>
  );
}
