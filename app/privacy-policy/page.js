import { COMPANY } from '@/lib/site';

export const metadata = { title: 'Privacy policy' };

const SECTIONS = [
  ['Information we collect', 'Details you share with us through forms, email or phone — such as your name, phone number, email, company and message — and basic technical data such as browser type.'],
  ['How we use it', 'To respond to your enquiry, prepare proposals, deliver our services, process job applications and meet legal obligations.'],
  ['Sharing', 'We do not sell your personal data. We share it only with service providers who help us operate, or when required by law.'],
  ['Retention & security', 'Data is kept only as long as needed for the purpose it was collected and is protected with reasonable technical and organisational measures.'],
  ['Your rights', 'You may ask to access, correct or delete your personal data, or withdraw consent, by writing to us.'],
];

export default function PrivacyPage() {
  return (
    <section className="py-16">
      <div className="container-x max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-2 text-4xl font-bold">Privacy policy</h1>
        <p className="mt-4 text-ink/70">This policy explains how {COMPANY.name} handles personal data. (Sample text — have it reviewed before publishing.)</p>
        <div className="mt-10 space-y-8">
          {SECTIONS.map(([t, d], i) => (
            <div key={t}><h2 className="text-xl font-bold">{i + 1}. {t}</h2><p className="mt-2 text-ink/80">{d}</p></div>
          ))}
          <div id="terms" className="scroll-mt-32">
            <h2 className="text-xl font-bold">Terms of use</h2>
            <p className="mt-2 text-ink/80">Content on this website is for general information only. Service terms are set out in each client agreement.</p>
          </div>
          <p className="text-ink/80">Contact: {COMPANY.email} · {COMPANY.addressLines.join(', ')}</p>
        </div>
      </div>
    </section>
  );
}
