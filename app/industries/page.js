import Link from 'next/link';
import { INDUSTRIES } from '@/lib/site';
import { Card, ContactBand, PageHero, SectionHead } from '@/components/ui';

export const metadata = { title: 'Security Solutions by Industry' };

export default function IndustriesPage() {
  return (
    <>
      <PageHero title="Security Solutions" image="/images/building.jpg"
        text="Every sector has its own risks. Our solutions are built around the way your business actually works.">
        <Link href="/contact" className="btn-gold">Talk to an expert</Link>
      </PageHero>
      <section className="py-20">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((i) => <Card key={i.slug} href={`/industries/${i.slug}`} image={i.image} title={i.title} text={i.text} />)}
          </div>
        </div>
      </section>
      <section className="bg-mist py-20">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 ring-1 ring-ink/10">
            <SectionHead eyebrow="By size" title="Small & medium businesses" text="Affordable guarding and CCTV packages for shops, clinics, offices and warehouses — no long lock-ins." />
          </div>
          <div className="rounded-3xl bg-navy p-8 text-white on-dark">
            <SectionHead eyebrow="By size" title="Large enterprises" text="Multi-site programmes with a dedicated account team, central command centre and SLA-based reporting." />
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
