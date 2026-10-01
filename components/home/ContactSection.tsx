import { contactLinks } from '@/data/links';
import { content } from '@/data/content';
import SectionTitle from '@/components/common/SectionTitle';
import ExternalLinks from '@/components/common/ExternalLinks';
export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">
        <SectionTitle {...content.home.contact} />
        {contactLinks.length ? (
          <ExternalLinks items={contactLinks} />
        ) : (
          <p className="muted">{content.pending.contact}</p>
        )}
      </div>
    </section>
  );
}
