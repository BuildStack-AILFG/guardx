import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { INSIGHTS } from '@/lib/site';
import { ContactBand } from '@/components/ui';

// Pages are pre-built from generateStaticParams; a blocking render is fine.
export const instant = false;

export function generateStaticParams() {
  return INSIGHTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = INSIGHTS.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}

export default async function InsightPage({ params }) {
  const { slug } = await params;
  const p = INSIGHTS.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <>
      <article className="py-16">
        <div className="container-x max-w-3xl">
          <Link href="/insights" className="inline-flex items-center gap-1 font-semibold text-gold-dark hover:underline"><ArrowLeft size={16} /> All insights</Link>
          <p className="eyebrow mt-8">{p.tag} · {p.date}</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">{p.title}</h1>
          <p className="mt-5 text-xl text-ink/70">{p.excerpt}</p>
          <div className="relative mt-10 aspect-video overflow-hidden rounded-3xl">
            <Image src={p.image} alt="" fill priority sizes="800px" className="object-cover" />
          </div>
          <div className="mt-10 space-y-5 text-lg leading-relaxed text-ink/85">
            {p.body.map((para) => <p key={para}>{para}</p>)}
          </div>
        </div>
      </article>
      <ContactBand />
    </>
  );
}
