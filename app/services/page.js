import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/site';
import { ContactBand, PageHero } from '@/components/ui';

export const metadata = { title: 'Our Services' };

export default function ServicesPage() {
  return (
    <>
      <PageHero crumbs={[]} title="Our Services" image="/images/control.jpg"
        text="Guarding, electronic security, staffing, background verification, risk consulting and event protection — from one accountable partner.">
        <Link href="/contact" className="btn-gold">Get a free security audit</Link>
      </PageHero>

      <section className="py-20">
        <div className="container-x space-y-16">
          {SERVICES.map((s, i) => (
            <div key={s.slug} className="grid items-center gap-10 lg:grid-cols-2">
              <div className={`relative aspect-[16/10] overflow-hidden rounded-3xl ${i % 2 ? 'lg:order-2' : ''}`}>
                <Image src={s.image} alt={s.title} fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
              </div>
              <div>
                <p className="eyebrow">0{i + 1}</p>
                <h2 className="mt-2 text-3xl font-bold">{s.title}</h2>
                <p className="mt-4 text-lg text-ink/75">{s.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.subs.map((x) => <li key={x} className="rounded-full bg-mist px-3 py-1.5 text-sm font-semibold">{x}</li>)}
                </ul>
                <Link href={`/services/${s.slug}`} className="mt-6 inline-flex items-center gap-1 font-bold text-gold-dark hover:underline">Learn more <ArrowRight size={16} /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
