import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, ShieldCheck } from 'lucide-react';
import { INDUSTRIES, SERVICES } from '@/lib/site';
import IndustryCarousel from '@/components/IndustryCarousel';
import { ContactBand, FaqList, PageHero, SectionHead } from '@/components/ui';

// Pages are pre-built from generateStaticParams; a blocking render is fine.
export const instant = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  return s ? { title: `${s.title} Services in India`, description: s.summary } : {};
}

const STEPS = [
  ['Understand', 'We visit your site, study your risks, working hours and people flow.'],
  ['Plan', 'A written security plan with posts, shifts, technology and clear responsibilities.'],
  ['Deploy', 'Verified, trained staff and systems go live on an agreed date.'],
  ['Improve', 'Regular reports, audits and reviews keep the plan sharp as you grow.'],
];

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) notFound();

  const faqs = [
    [`What is included in ${s.title.toLowerCase()}?`, `${s.summary} Typical scope covers ${s.subs.join(', ').toLowerCase()}.`],
    ['Can the service be customised for my site?', 'Yes. Every engagement starts with a site survey and is built around your premises, timings and risks.'],
    ['Are your staff trained and verified?', 'Every team member is background-checked, police-verified and trained before deployment, with regular refresher training.'],
    ['Do you operate outside my city?', 'Yes. GuardX supports single sites and multi-location programmes across India from one account team.'],
    ['How quickly can you start?', 'Most deployments start within a few days of signing; larger programmes are planned and phased with you.'],
  ];

  return (
    <>
      <PageHero crumbs={[['Our Services', '/services']]} title={s.title} text={s.summary} image={s.image}>
        <Link href="/contact" className="btn-gold">Get in Touch</Link>
        <Link href="/industries" className="btn-outline text-white">Explore our Solutions</Link>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead title="Security solutions designed around your business" />
            <p className="mt-6 text-ink/80 sm:text-lg">
              No two sites are the same. Our {s.title.toLowerCase()} service is planned around your people, premises and processes, with clear
              instructions, trained staff and transparent reporting — so you always know your business is protected.
            </p>
            <Link href="/contact" className="btn-gold mt-8">Request a proposal</Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={INDUSTRIES[0].image} alt="" fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white md:py-24">
        <div className="container-x">
          <SectionHead title="How we do it?" />
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="border-t border-white/20 pt-6">
                <p className="text-4xl font-semibold text-gold">0{i + 1}</p>
                <p className="mt-3 text-xl font-semibold">{t}</p>
                <p className="mt-2 text-white/75">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <SectionHead title={`Explore our ${s.title.toLowerCase()} services`} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {s.subs.map((x) => (
              <div key={x} className="rounded-xl bg-[#eef1f5] p-6">
                <ShieldCheck className="text-gold-dark" size={28} />
                <h3 className="mt-4 text-lg font-semibold">{x}</h3>
                <p className="mt-2 text-sm text-ink/70">Delivered by trained GuardX professionals to an agreed standard, with regular reporting.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef1f5] py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHead title={`Why clients choose our ${s.title.toLowerCase()}`} />
          <ul className="space-y-6">
            {s.points.map(([t, d]) => (
              <li key={t} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-navy text-white"><Check size={18} /></span>
                <div><p className="text-lg font-semibold">{t}</p><p className="text-ink/75">{d}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy py-16 text-white md:py-24">
        <div className="container-x">
          <SectionHead title="Security services for many sectors" />
          <div className="mt-10"><IndustryCarousel items={INDUSTRIES.map((i) => ({ ...i, href: `/industries/${i.slug}` }))} /></div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr]">
          <SectionHead title="Frequently asked questions" />
          <FaqList items={faqs} />
        </div>
      </section>
      <ContactBand />
    </>
  );
}
