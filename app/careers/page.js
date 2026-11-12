import Image from 'next/image';
import { BadgeIndianRupee, GraduationCap, MapPin, TrendingUp, Users } from 'lucide-react';
import { COMPANY, JOBS } from '@/lib/site';
import { PageHero, SectionHead } from '@/components/ui';

export const metadata = { title: 'Careers' };

const PERKS = [
  [BadgeIndianRupee, 'On-time salary', 'Salary on the 7th of every month, with PF, ESI and insurance.'],
  [GraduationCap, 'Paid training', 'Classroom and on-site training before and during your posting.'],
  [TrendingUp, 'Real growth', 'Officers become supervisors and managers — we promote from within.'],
  [Users, 'Respectful team', 'A safe, supportive workplace for men and women alike.'],
];

export default function CareersPage() {
  return (
    <>
      <PageHero title="Career" image="/images/interview.jpg"
        text="Join a team that keeps people safe every day. We welcome ex-servicemen, graduates and first-time job seekers.">
        <a href="#openings" className="btn-gold">See open positions</a>
      </PageHero>

      <section id="training" className="scroll-mt-32 py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Purpose · People · Opportunity" title="Why work at GuardX" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {PERKS.map(([Icon, t, d]) => (
                <div key={t}><Icon className="text-gold-dark" size={28} /><p className="mt-3 font-bold">{t}</p><p className="mt-1 text-ink/70">{d}</p></div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/images/smile.jpg" alt="GuardX employee" fill sizes="600px" className="object-cover" />
          </div>
        </div>
      </section>

      <section id="openings" className="scroll-mt-32 bg-mist py-20">
        <div className="container-x">
          <SectionHead eyebrow="Find your perfect role" title="Open positions" />
          <div className="mt-10 divide-y divide-ink/10 overflow-hidden rounded-2xl bg-white ring-1 ring-ink/10">
            {JOBS.map(([role, loc, type]) => (
              <div key={role} className="flex flex-wrap items-center justify-between gap-4 p-6">
                <div>
                  <p className="text-lg font-bold">{role}</p>
                  <p className="mt-1 flex items-center gap-1 text-sm text-ink/60"><MapPin size={14} /> {loc} · {type}</p>
                </div>
                <a href={`mailto:${COMPANY.careersEmail}?subject=${encodeURIComponent('Application: ' + role)}`} className="btn-gold text-sm">Apply now</a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-ink/70">Walk-in interviews: Monday to Saturday, 10 AM – 4 PM at our Bengaluru office or apply online. Call {COMPANY.phone}.</p>
        </div>
      </section>
    </>
  );
}
