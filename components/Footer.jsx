import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY } from '@/lib/site';
import BackToTop from './BackToTop';

const COLS = [
  { title: 'Start with GuardX', links: [['Our Services', '/services'], ['Security Solutions', '/industries'], ['Why GuardX', '/about#why'], ['Contact and Support', '/contact'], ['Career', '/careers']] },
  { title: 'About GuardX', links: [['About us', '/about'], ['Our values', '/about#values'], ['News & Insights', '/insights'], ['FAQs', '/faqs']] },
  { title: 'Legal', links: [['Privacy policy', '/privacy-policy'], ['Terms of use', '/privacy-policy#terms']] },
];

// Simple brand glyphs (lucide no longer ships brand icons).
const SOCIAL = [
  ['LinkedIn', 'https://www.linkedin.com/', 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.5V21h-4v-5.8c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21H9z'],
  ['YouTube', 'https://www.youtube.com/', 'M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-3.2.5-4.8s-.1-3.2-.5-4.8zM9.75 15.02V8.98L15.5 12z'],
  ['Facebook', 'https://www.facebook.com/', 'M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1z'],
  ['Instagram', 'https://www.instagram.com/', 'M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 2c-2.7 0-3 0-4.1.1C4.3 2.3 2.3 4.3 2.1 7.9 2 9 2 9.3 2 12s0 3 .1 4.1c.2 3.6 2.2 5.6 5.8 5.8C9 22 9.3 22 12 22s3 0 4.1-.1c3.6-.2 5.6-2.2 5.8-5.8.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c-.2-3.6-2.2-5.6-5.8-5.8C15 2 14.7 2 12 2z'],
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-x py-12 md:py-16">
        <div className="flex items-center justify-between gap-4">
          <Image src="/logo-dark.png" alt="GuardX" width={1424} height={333} className="h-9 w-auto md:h-10" />
          <BackToTop />
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="space-y-3 text-sm text-white/75">
            <p className="text-base font-semibold text-white">{COMPANY.name}</p>
            <p className="flex gap-2"><MapPin size={17} className="mt-0.5 shrink-0 text-gold" />{COMPANY.addressLines.join(', ')}</p>
            <p className="flex gap-2"><Phone size={17} className="shrink-0 text-gold" /><a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="hover:text-gold">{COMPANY.phone}</a></p>
            <p className="flex gap-2"><Mail size={17} className="shrink-0 text-gold" /><a href={`mailto:${COMPANY.email}`} className="break-all hover:text-gold">{COMPANY.email}</a></p>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <p className="mb-4 font-semibold">{c.title}</p>
              <ul className="space-y-2.5 text-sm text-white/75">
                {c.links.map(([l, h]) => <li key={l}><Link href={h} className="hover:text-gold hover:underline">{l}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-6">
          {SOCIAL.map(([name, href, d]) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-white/70 hover:text-gold">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d={d} /></svg>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {COMPANY.name}. All rights reserved.</p>
          <p>
            Technology partner:{' '}
            <a href={COMPANY.partner.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-white/85 hover:text-gold hover:underline">
              {COMPANY.partner.name}
            </a>{' '}
            · <a href={COMPANY.partner.url} target="_blank" rel="noopener noreferrer" className="hover:text-gold">scaledesktechnology.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
