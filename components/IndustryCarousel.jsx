'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Horizontal card carousel with image + gradient + title, arrow buttons bottom-right.
export default function IndustryCarousel({ items }) {
  const ref = useRef(null);
  const move = (dir) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' });
  };
  return (
    <div>
      <div ref={ref} className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:gap-6">
        {items.map((i) => (
          <Link
            key={i.slug}
            href={i.href}
            className="group relative aspect-[3/4] w-[78%] shrink-0 snap-start overflow-hidden rounded-xl sm:w-[45%] lg:w-[31.5%]"
          >
            <Image src={i.image} alt={i.title} fill sizes="(min-width:1024px) 400px, 80vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-white sm:text-2xl">{i.title}</h3>
              <p className="mt-2 hidden text-sm text-white/80 group-hover:block">{i.text}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button type="button" onClick={() => move(-1)} aria-label="Previous" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white hover:text-navy"><ChevronLeft size={20} /></button>
        <button type="button" onClick={() => move(1)} aria-label="Next" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy hover:bg-gold"><ChevronRight size={20} /></button>
      </div>
    </div>
  );
}
