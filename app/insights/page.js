import { INSIGHTS } from '@/lib/site';
import { Card, PageHero } from '@/components/ui';

export const metadata = { title: 'News & Insights' };

export default function InsightsPage() {
  return (
    <>
      <PageHero title="News & Insights" image="/images/meeting.jpg"
        text="Practical guides, compliance updates and customer stories about keeping people and businesses safe." />
      <section className="py-20">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {INSIGHTS.map((p) => <Card key={p.slug} href={`/insights/${p.slug}`} image={p.image} title={p.title} text={p.excerpt} tag={`${p.tag} · ${p.date}`} />)}
        </div>
      </section>
    </>
  );
}
