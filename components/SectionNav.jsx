'use client';

import { useEffect, useState } from 'react';

// Sticky in-page navigation that highlights the section currently in view.
export default function SectionNav({ items }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    items.forEach((i) => { const el = document.getElementById(i.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [items]);

  return (
    <div className="sticky top-16 lg:top-28 z-30 border-b border-ink/10 bg-[#eef1f5]">
      <nav className="container-x flex gap-6 sm:gap-8 overflow-x-auto [scrollbar-width:none]" aria-label="On this page">
        {items.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            className={`whitespace-nowrap border-b-2 py-3.5 sm:py-4 text-sm sm:text-[15px] font-medium transition-colors ${active === i.id ? 'border-gold text-ink' : 'border-transparent text-ink/60 hover:text-ink'}`}
          >
            {i.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
