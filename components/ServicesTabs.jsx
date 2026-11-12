'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SERVICES } from '@/lib/site';

// Underline tabs + dark card with text left and image right (Securitas services block).
export default function ServicesTabs() {
  const [idx, setIdx] = useState(0);
  const s = SERVICES[idx];
  return (
    <div>
      <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none]">
        <div className="flex min-w-max gap-8 border-b border-white/15" role="tablist">
          {SERVICES.map((sv, i) => (
            <button
              key={sv.slug}
              type="button"
              role="tab"
              aria-selected={i === idx}
              onClick={() => setIdx(i)}
              className={`-mb-px border-b-2 pb-3 text-sm transition-colors sm:text-[15px] ${i === idx ? 'border-gold text-white' : 'border-transparent text-white/65 hover:text-white'}`}
            >
              {sv.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid overflow-hidden rounded-2xl bg-navy-2 lg:grid-cols-2">
        <div className="order-2 p-6 sm:p-10 lg:order-1">
          <p className="text-sm font-semibold text-gold">{s.title}</p>
          <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">{s.short}</h3>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-white/85">
            {s.points.map(([t, d]) => <li key={t}><strong className="text-white">{t}</strong> — {d}</li>)}
          </ul>
          <Link href={`/services/${s.slug}`} className="btn-gold mt-8">Explore our Services</Link>
        </div>
        <div className="relative order-1 min-h-[240px] lg:order-2 lg:min-h-full">
          <Image src={s.image} alt={s.title} fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
        </div>
      </div>
    </div>
  );
}
