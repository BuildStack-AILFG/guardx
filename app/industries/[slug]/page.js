import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import { INDUSTRIES, SERVICES } from '@/lib/site';
import ServicesTabs from '@/components/ServicesTabs';
import { ContactBand, FaqList, PageHero, SectionHead } from '@/components/ui';

// Pages are pre-built from generateStaticParams; a blocking render is fine.
export const instant = false;

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const i = INDUSTRIES.find((x) => x.slug === slug);
  return i ? { title: i.title, description: i.text } : {};
}

const CHALLENGES = [
  ['Access control', 'Making sure only the right people get in — without slowing everyone else down.'],
  ['Round-the-clock cover', 'Nights, weekends and holidays are when most incidents happen.'],
  ['Incident response', 'Clear procedures and fast escalation when something does go wrong.'],
  ['Compliance & audits', 'Records, reports and trained staff that satisfy auditors and insurers.'],
];

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const ind = INDUSTRIES.find((x) => x.slug === slug);
  if (!ind) notFound();

  return (
    <>
      <PageHero crumbs={[['Security Solutions', '/industries']]} title={ind.title} text={ind.text} image={ind.image}>
        <Link href="/contact" className="btn-gold">Get in Touch</Link>
        <Link href="/services" className="btn-outline text-white">Explore our Services</Link>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead title="Your challenges, our expertise" />
            <ul className="mt-8 space-y-5">
              {CHALLENGES.map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-navy text-white"><Check size={18} /></span>
                  <div><p className="text-lg font-semibold">{t}</p><p className="text-ink/75">{d}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={SERVICES[1].image} alt="" fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white md:py-24">
        <div className="container-x">
          <SectionHead title={`Our services for ${ind.title.toLowerCase()}`} />
          <div className="mt-10"><ServicesTabs /></div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr]">
          <SectionHead title="Frequently asked questions" />
          <FaqList items={[
            [`Do you have experience in ${ind.title.toLowerCase()}?`, 'Yes. Our officers receive sector-specific training and our managers have run security programmes in this sector across India.'],
            ['Can you combine guards and technology?', 'Yes. Most clients use trained officers backed by CCTV, access control and our 24 × 7 command centre.'],
            ['How do you report incidents?', 'Incidents are logged digitally with photos and time-stamps and escalated to your team immediately.'],
          ]} />
        </div>
      </section>
      <ContactBand />
    </>
  );
}
