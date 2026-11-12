import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Phone } from 'lucide-react';
import { COMPANY } from '@/lib/site';

// Securitas-style inner-page hero: breadcrumb, title + text left, rounded image right, on dark navy.
export function PageHero({ crumbs = [], title, text, image, children }) {
  return (
    <section className="bg-navy text-white on-dark">
      <div className="container-x pb-14 pt-6 md:pb-20">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-white/80">
          <Link href="/" className="underline underline-offset-2 hover:text-gold">Home</Link>
          {crumbs.map(([label, href]) => (
            <span key={label} className="flex items-center gap-1.5">
              <ChevronRight size={14} />
              {href ? <Link href={href} className="underline underline-offset-2 hover:text-gold">{label}</Link> : <span>{label}</span>}
            </span>
          ))}
          <span className="flex items-center gap-1.5"><ChevronRight size={14} />{title}</span>
        </nav>
        <div className={`mt-8 grid items-center gap-10 md:mt-12 ${image ? 'lg:grid-cols-2' : ''}`}>
          <div>
            <h1 className="text-[34px] font-semibold leading-[1.1] sm:text-5xl lg:text-[56px]">{title}</h1>
            {text && <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">{text}</p>}
            {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
          </div>
          {image && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={image} alt="" fill priority sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, text, center }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      {eyebrow && <p className="text-sm font-semibold sm:text-base">{eyebrow}</p>}
      <h2 className="mt-2 text-[28px] font-semibold leading-[1.15] sm:text-4xl lg:text-[44px]">{title}</h2>
      {text && <p className="mt-4 text-base opacity-80 sm:text-lg">{text}</p>}
    </div>
  );
}

export function Card({ href, image, title, text, tag }) {
  return (
    <Link href={href} className="group flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-ink/10 transition-shadow hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={image} alt={title} fill sizes="(min-width:1024px) 400px, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        {tag && <p className="text-sm font-semibold text-gold-dark">{tag}</p>}
        <h3 className="mt-1 text-xl font-semibold">{title}</h3>
        <p className="mt-2 flex-1 text-ink/70">{text}</p>
        <span className="mt-4 inline-flex items-center gap-1 font-semibold underline-offset-4 group-hover:underline">Read more <ArrowRight size={16} /></span>
      </div>
    </Link>
  );
}

// Dark band with a dotted wave pattern — mirrors the "Get in Touch" block.
export function ContactBand() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <svg className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full opacity-60" viewBox="0 0 1200 160" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="#e2a623" /></pattern>
        </defs>
        <path d="M0 110 C 200 40, 380 150, 600 90 S 980 20, 1200 100 L1200 160 L0 160Z" fill="url(#dots)" opacity=".55" />
        <path d="M0 140 C 260 80, 420 160, 640 120 S 1000 70, 1200 130 L1200 160 L0 160Z" fill="url(#dots)" />
      </svg>
      <div className="container-x relative grid items-center gap-8 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <h2 className="text-[28px] font-semibold sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 max-w-xl text-white/80">
            If you have a question, need help, or want to learn more about our solutions, we are here to help. Give us a call or send us a message and our team will get back to you.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link href="/contact" className="btn-gold">Get in Touch</Link>
          <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="btn-outline text-white"><Phone size={16} /> {COMPANY.phone}</a>
        </div>
      </div>
    </section>
  );
}

export function FaqList({ items }) {
  return (
    <div className="divide-y divide-ink/15 border-y border-ink/15">
      {items.map(([q, a]) => (
        <details key={q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold sm:text-lg">
            {q}<span className="text-2xl leading-none transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-ink/75">{a}</p>
        </details>
      ))}
    </div>
  );
}
