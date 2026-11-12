import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY } from '@/lib/site';
import ContactForm from '@/components/ContactForm';
import { PageHero } from '@/components/ui';

export const metadata = { title: 'Contact us' };

export default function ContactPage() {
  const tel = (p) => `tel:${p.replace(/\s/g, '')}`;
  return (
    <>
      <PageHero crumbs={[["Contact and Support", null]]} title="Contact Us" image="/images/handshake.jpg"
        text="Have a question, need a quote or want a free security audit? Call us or send a message — we reply the same working day." />

      <section className="bg-mist py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {[
              [Phone, 'Call us', <a href={tel(COMPANY.phone)} className="hover:text-gold-dark">{COMPANY.phone}</a>],
              [Mail, 'Email', <a href={`mailto:${COMPANY.email}`} className="hover:text-gold-dark">{COMPANY.email}</a>],
              [MapPin, 'Head office', COMPANY.addressLines.map((l) => <span key={l} className="block">{l}</span>)],
              [Clock, 'Working hours', COMPANY.hours],
            ].map(([Icon, t, body]) => (
              <div key={t} className="flex gap-4 rounded-2xl bg-white p-6 ring-1 ring-ink/10">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-dark"><Icon size={20} /></span>
                <div><p className="font-bold">{t}</p><div className="mt-1 text-ink/75">{body}</div></div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="mb-5 text-2xl font-bold">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section>
        <iframe
          title="GuardX — Bengaluru, Karnataka, India"
          src={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapQuery)}&output=embed`}
          className="h-[420px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
