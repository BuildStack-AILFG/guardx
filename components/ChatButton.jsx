'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Phone, X } from 'lucide-react';
import { COMPANY } from '@/lib/site';

export default function ChatButton() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-40">
      {open && (
        <div className="mb-3 w-72 rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-ink/10">
          <p className="font-bold text-ink">Need security help?</p>
          <p className="mt-1 text-sm text-ink/70">Talk to our team — we usually reply within minutes.</p>
          <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="btn-gold mt-4 w-full justify-center text-sm"><Phone size={16} /> {COMPANY.phone}</a>
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 block text-center text-sm font-semibold text-ink hover:text-gold-dark">Send us a message</Link>
        </div>
      )}
      <button type="button" aria-label={open ? 'Close chat' : 'Open chat'} onClick={() => setOpen(!open)} className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold shadow-xl hover:bg-navy-2">
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
