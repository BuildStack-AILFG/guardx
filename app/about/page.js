import Image from 'next/image';
import Link from 'next/link';
import { Eye, HeartHandshake, ShieldCheck } from 'lucide-react';
import { BENEFITS, COMPANY } from '@/lib/site';
import { ContactBand, PageHero, SectionHead } from '@/components/ui';

export const metadata = { title: 'About us' };

const VALUES = [
  [ShieldCheck, 'Integrity', 'We do what we promise, report honestly and protect our clients’ trust.'],
  [Eye, 'Vigilance', 'We stay alert, notice the details and act before small issues become big ones.'],
  [HeartHandshake, 'Helpfulness', 'We are courteous, approachable and always ready to help people on site.'],
];

export default function AboutPage() {
  return (
    <>
      <PageHero crumbs={[["About us", null]]} title="Making your world a safer place" image="/images/hero.jpg"
        text={`${COMPANY.name} is an Indian security and staffing company serving businesses across the country.`} />

      <section className="py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Who we are" title="Security and staffing, built on trust" />
            <div className="mt-6 space-y-4 text-lg text-ink/75">
              <p>GuardX was founded with a simple idea: businesses deserve security partners who show up on time, train their people properly and tell the truth.</p>
              <p>Today we protect offices, hospitals, housing societies, retail stores and events, and provide verified support staff to growing companies across India.</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/images/team.jpg" alt="GuardX team" fill sizes="600px" className="object-cover" />
          </div>
        </div>
      </section>

      <section id="values" className="scroll-mt-32 py-20">
        <div className="container-x">
          <SectionHead eyebrow="Our values" title="What we stand for" center />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map(([Icon, t, d]) => (
              <div key={t} className="rounded-2xl bg-mist p-8 text-center">
                <Icon className="mx-auto text-gold-dark" size={40} />
                <p className="mt-4 text-xl font-bold">{t}</p>
                <p className="mt-2 text-ink/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="scroll-mt-32 bg-mist py-20">
        <div className="container-x">
          <SectionHead eyebrow="Why GuardX" title="Six reasons clients choose us" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(([t, d], i) => (
              <div key={t} className="rounded-2xl bg-white p-6 ring-1 ring-ink/10">
                <p className="text-sm font-bold text-gold-dark">0{i + 1}</p>
                <p className="mt-2 text-lg font-bold">{t}</p>
                <p className="mt-2 text-ink/70">{d}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-gold mt-10">Work with us</Link>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
