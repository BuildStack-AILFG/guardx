'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SERVICES } from '@/lib/site';

// Front-end only for now: validates and shows a confirmation. Wire to an API / email later.
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (!data.name || !data.phone || !data.message) { setError('Please fill in your name, phone and message.'); return; }
    if (!/^[0-9+\s-]{8,15}$/.test(data.phone)) { setError('Please enter a valid phone number.'); return; }
    setError('');
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center ring-1 ring-ink/10">
        <CheckCircle2 className="mx-auto text-green-600" size={48} />
        <p className="mt-4 text-xl font-bold">Thank you — we have your message.</p>
        <p className="mt-2 text-ink/70">A GuardX security advisor will call you back shortly.</p>
      </div>
    );
  }

  const field = 'w-full rounded-xl border border-ink/20 bg-white px-4 py-3 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30';
  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl bg-white p-6 md:p-8 ring-1 ring-ink/10 sm:grid-cols-2" noValidate>
      <label className="grid gap-1.5 text-sm font-semibold">Full name *<input name="name" className={field} /></label>
      <label className="grid gap-1.5 text-sm font-semibold">Phone *<input name="phone" type="tel" className={field} /></label>
      <label className="grid gap-1.5 text-sm font-semibold">Email<input name="email" type="email" className={field} /></label>
      <label className="grid gap-1.5 text-sm font-semibold">Company<input name="company" className={field} /></label>
      <label className="grid gap-1.5 text-sm font-semibold sm:col-span-2">I am interested in
        <select name="service" className={field} defaultValue="">
          <option value="" disabled>Select a service</option>
          {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
          <option>Something else</option>
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-semibold sm:col-span-2">Message *<textarea name="message" rows={5} className={field} /></label>
      {error && <p className="text-sm font-semibold text-red-600 sm:col-span-2">{error}</p>}
      <div className="sm:col-span-2"><button type="submit" className="btn-gold">Send message</button></div>
    </form>
  );
}
