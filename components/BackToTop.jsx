'use client';

import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  return (
    <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-gold">
      Back to top <ArrowUp size={16} />
    </button>
  );
}
