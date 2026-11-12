import { FAQS } from '@/lib/site';
import { ContactBand, PageHero } from '@/components/ui';

export const metadata = { title: 'FAQs' };

export default function FaqsPage() {
  return (
    <>
      <PageHero crumbs={[["Contact and Support", "/contact"]]} title="FAQs" image="/images/reception.jpg" />
      <section className="py-20">
        <div className="container-x max-w-3xl space-y-3">
          {FAQS.map(([q, a]) => (
            <details key={q} className="group rounded-2xl bg-mist p-6 open:bg-white open:ring-1 open:ring-ink/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                {q}<span className="text-2xl text-gold-dark transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-ink/75">{a}</p>
            </details>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
