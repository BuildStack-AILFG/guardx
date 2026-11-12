import Image from 'next/image';
import Link from 'next/link';
import { Check, Play } from 'lucide-react';
import { BENEFITS, INDUSTRIES, INSIGHTS } from '@/lib/site';
import SectionNav from '@/components/SectionNav';
import ServicesTabs from '@/components/ServicesTabs';
import IndustryCarousel from '@/components/IndustryCarousel';
import { Card, ContactBand, SectionHead } from '@/components/ui';

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'services', label: 'Services' },
  { id: 'industries', label: 'Industries' },
  { id: 'why', label: 'Why GuardX' },
  { id: 'careers', label: 'Careers' },
  { id: 'contact', label: 'Contact Us' },
  { id: 'insights', label: 'Insights' },
];

const sec = 'scroll-mt-32 lg:scroll-mt-44';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-white">
        <div className="container-x grid items-center gap-10 py-12 md:py-20 lg:grid-cols-2">
          <div>
            <h1 className="text-[36px] font-semibold leading-[1.08] sm:text-5xl lg:text-[60px]">Your Trusted, Intelligent Security Partner Across India</h1>
            <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">
              From trained guards and smart electronic security to staffing and background verification, GuardX protects people, premises and
              reputations in every corner of India. We combine verified professionals, modern technology and on-ground experience to keep
              your business moving.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gold">Contact us</Link>
              <Link href="/services" className="btn-outline text-white">Products &amp; Services</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[5/4]">
            <Image src="/images/control.jpg" alt="GuardX officer monitoring the 24x7 command centre" fill priority sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <SectionNav items={SECTIONS} />

      {/* OVERVIEW */}
      <section id="overview" className={`${sec} py-16 md:py-28`}>
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead eyebrow="Tailored for your needs" title="Security services that keep your business moving" />
            <div className="mt-6 space-y-4 text-ink/80 sm:text-lg">
              <p>We understand that your security needs are unique to your business.</p>
              <p>With manned guarding, electronic security, facility staffing, event and executive protection, risk consulting and background verification, GuardX builds solutions around what matters most to you.</p>
              <p>Let us take care of your security, so you can focus on running your business smoothly, day after day.</p>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl">
            <Image src="/images/reception.jpg" alt="GuardX front office officer assisting a visitor" fill sizes="(min-width:1024px) 450px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* SEE WHAT OTHERS MISS */}
      <section className="pb-16 md:pb-28">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead eyebrow="See what others miss" title="Years on the ground have sharpened our eyes" />
            <div className="mt-6 space-y-4 text-ink/80 sm:text-lg">
              <p>When protecting your people, premises and property, we look twice. Experience has taught us to notice what really matters.</p>
              <p>The biggest risks are not always the obvious ones — but our officers are trained to spot them early.</p>
              <p>With GuardX as your security partner, you can feel safe and get on with what you do best.</p>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl">
            <Image src="/images/cctv2.jpg" alt="Modern CCTV camera" fill sizes="(min-width:1024px) 450px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className={`${sec} bg-navy py-16 text-white md:py-28`}>
        <div className="container-x">
          <SectionHead eyebrow="Benefits" title="Security built around your business" />
          <Link href="/contact" className="btn-gold mt-8">Contact Us</Link>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
            {BENEFITS.map(([t, d]) => (
              <div key={t}>
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-navy-2 ring-1 ring-white/15"><Check size={20} /></span>
                <h3 className="mt-5 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-white/75">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className={`${sec} bg-navy pb-16 text-white md:pb-28`}>
        <div className="container-x border-t border-white/10 pt-16 md:pt-24">
          <SectionHead eyebrow="Services" title="Explore our protective services"
            text="GuardX delivers end-to-end protective services built around how you operate — trained officers on site, smart systems watching 24 × 7, and verification that keeps the wrong people out. Wherever you are in India, we help make your world a safer place." />
          <Link href="/services" className="btn-gold mt-8">Explore our Services</Link>
          <div className="mt-12"><ServicesTabs /></div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className={`${sec} bg-navy pb-16 text-white md:pb-28`}>
        <div className="container-x border-t border-white/10 pt-16 md:pt-24">
          <SectionHead eyebrow="Industries" title="Security solutions tailored to your industry"
            text="See how our specialised solutions protect people, property and operations across different sectors." />
          <Link href="/industries" className="btn-gold mt-8">Discover More</Link>
          <div className="mt-12">
            <IndustryCarousel items={INDUSTRIES.map((i) => ({ ...i, href: `/industries/${i.slug}` }))} />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className={`${sec} py-16 md:py-28`}>
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead eyebrow="Why GuardX" title="Meet the security partner of choice" />
            <p className="mt-6 text-ink/80 sm:text-lg">
              Years of keeping people safe have taught us to see more than most. We pair trained officers with technology — live attendance,
              digital patrol checks and incident reports on one dashboard — to protect your business on the ground, in your systems and in your
              hiring. From a single site to a pan-India operation, we have the flexibility to grow with you.
            </p>
            <Link href="/about" className="btn-gold mt-8">Learn More About Us</Link>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image src="/images/hero.jpg" alt="GuardX mobile patrol team" fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg">
              <Play size={26} fill="currentColor" />
            </span>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className={`${sec} pb-16 md:pb-28`}>
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead eyebrow="Career" title="A job where you can make a difference" />
            <div className="mt-6 space-y-4 text-ink/80 sm:text-lg">
              <p>At GuardX, we see potential in every person. Our people come from all walks of life — ex-servicemen, graduates, technicians and first-time job seekers.</p>
              <p>We are united by our values of integrity, vigilance and helpfulness. Every role drives progress for our clients, our company and the communities we serve.</p>
            </div>
            <Link href="/careers#openings" className="btn-gold mt-8">Explore our Open Positions</Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/smile.jpg" alt="Smiling GuardX team member" fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <div id="contact" className={sec}><ContactBand /></div>

      {/* INSIGHTS */}
      <section id="insights" className={`${sec} py-16 md:py-28`}>
        <div className="container-x">
          <SectionHead eyebrow="Insights" title="Get valuable insights into GuardX and the security industry"
            text="Discover our News & Insights section for helpful resources, success stories and industry updates." />
          <Link href="/insights" className="btn-gold mt-8">Explore our News &amp; Insights</Link>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INSIGHTS.map((p) => <Card key={p.slug} href={`/insights/${p.slug}`} image={p.image} title={p.title} text={p.excerpt} />)}
          </div>
        </div>
      </section>
    </>
  );
}
