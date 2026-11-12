'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { COMPANY, NAV } from '@/lib/site';

const tel = `tel:${COMPANY.phone.replace(/\s/g, '')}`;

export default function Header() {
  const [open, setOpen] = useState(null); // desktop dropdown index
  const [mobile, setMobile] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const pathname = usePathname();

  useEffect(() => { setOpen(null); setMobile(false); }, [pathname]);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && (setOpen(null), setMobile(false));
    const onScroll = () => setOpen(null);
    window.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('scroll', onScroll); };
  }, []);
  useEffect(() => { document.body.style.overflow = mobile ? 'hidden' : ''; }, [mobile]);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white" onMouseLeave={() => setOpen(null)}>
      {/* Row 1: logo */}
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" aria-label="GuardX home" className="shrink-0">
          <Image src="/logo-dark.png" alt="GuardX Solutions — Your safety, our priority" width={1424} height={333} priority className="h-8 w-auto sm:h-9" />
        </Link>
        <div className="hidden lg:flex items-center gap-6 text-sm">
          <a href={tel} className="flex items-center gap-2 text-white/85 hover:text-gold"><Phone size={15} /> {COMPANY.phone}</a>
          <Link href="/contact" className="btn-gold !py-2 !px-5 text-sm">Get in touch</Link>
        </div>
        <button type="button" className="lg:hidden -mr-2 p-2" aria-label="Open menu" onClick={() => setMobile(true)}>
          <Menu size={26} />
        </button>
      </div>

      {/* Row 2: main navigation */}
      <nav className="hidden lg:block" aria-label="Main">
        <div className="container-x flex h-12 items-center gap-8">
          {NAV.map((item, i) => (
            <div key={item.label} onMouseEnter={() => setOpen(i)}>
              <button
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
                className={`flex h-12 items-center gap-1.5 whitespace-nowrap border-b-2 text-[15px] transition-colors ${open === i ? 'border-gold text-white' : 'border-transparent text-white/85 hover:text-white'}`}
              >
                {item.label}
                <ChevronDown size={16} className={`transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
            </div>
          ))}
        </div>
      </nav>

      {/* Mega menu */}
      {open !== null && (
        <div className="absolute inset-x-0 top-full hidden lg:block bg-white text-ink shadow-2xl">
          <div className="container-x grid grid-cols-[1fr_2fr] gap-10 py-10">
            <div>
              <p className="text-2xl font-semibold">{NAV[open].label}</p>
              <p className="mt-3 max-w-xs text-ink/70">Explore how GuardX keeps people, premises and businesses safe across India.</p>
              <Link href={NAV[open].href} className="btn-gold mt-6 text-sm">Learn more</Link>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {NAV[open].columns.map((col) => (
                <div key={col.heading}>
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-ink/50">{col.heading}</p>
                  <ul className="space-y-2.5">
                    {col.links.map((l) => (
                      <li key={l.label + l.href}><Link href={l.href} className="hover:text-gold-dark hover:underline">{l.label}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobile && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobile(false)} />
          <div className="absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col overflow-y-auto bg-navy p-5">
            <div className="flex items-center justify-between">
              <Image src="/logo-dark.png" alt="GuardX" width={1424} height={333} className="h-8 w-auto" />
              <button type="button" aria-label="Close menu" onClick={() => setMobile(false)} className="-mr-2 p-2"><X size={24} /></button>
            </div>
            <ul className="mt-6 divide-y divide-white/10">
              {NAV.map((item, i) => (
                <li key={item.label}>
                  <button type="button" aria-expanded={mobileSection === i} className="flex w-full items-center justify-between py-4 text-left font-semibold" onClick={() => setMobileSection(mobileSection === i ? null : i)}>
                    {item.label}<ChevronDown size={18} className={`transition-transform ${mobileSection === i ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileSection === i && (
                    <ul className="space-y-3 pb-4 pl-3">
                      <li><Link href={item.href} className="text-gold">Overview</Link></li>
                      {item.columns.flatMap((c) => c.links).map((l) => (
                        <li key={l.label + l.href}><Link href={l.href} className="text-white/80">{l.label}</Link></li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-auto space-y-3 pt-8">
              <a href={tel} className="btn-outline w-full justify-center text-white"><Phone size={16} /> {COMPANY.phone}</a>
              <Link href="/contact" className="btn-gold w-full justify-center">Get in touch</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
