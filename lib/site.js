// Single source of truth for company details, navigation and page content.
// Phone numbers / email are placeholders — replace before going live.

export const COMPANY = {
  name: 'GuardX Staffing and Security Solutions Private Limited',
  short: 'GuardX',
  tagline: 'Your Safety — Our Priority',
  phone: '+91 63669 66120',
  email: 'info@guardxsecurity.in',
  careersEmail: 'careers@guardxsecurity.in',
  addressLines: ['Bengaluru, Karnataka, India'],
  hours: 'Mon – Sat, 9:00 AM – 7:00 PM · Control room 24 × 7',
  mapQuery: 'Bengaluru, Karnataka, India',
  partner: { name: 'Scaledesk Technology Pvt Ltd', url: 'https://scaledesktechnology.com' },
};

export const SERVICES = [
  {
    slug: 'manned-guarding',
    title: 'Manned Guarding',
    short: 'Trained guards for every site',
    image: '/images/hero.jpg',
    summary:
      'Uniformed, verified and trained security officers deployed to a site-specific plan — from a single gate to a multi-building campus.',
    points: [
      ['Site-specific deployment', 'Every post is staffed to a written security plan built after a site survey.'],
      ['Verified & trained officers', 'Police verification, background checks and classroom + on-the-job training before day one.'],
      ['Supervised round the clock', 'Field officers make surprise checks; our control room tracks attendance and patrols live.'],
      ['Complete coverage', 'Gate and perimeter guards, front office, concierge, lady guards and armed escorts.'],
    ],
    subs: ['Onsite guards', 'Front office security', 'Concierge services', 'Lady security officers', 'Armed guards'],
  },
  {
    slug: 'electronic-security',
    title: 'Electronic Security',
    short: 'CCTV, access control & alarms',
    image: '/images/cctv.jpg',
    summary:
      'Design, supply, installation and maintenance of CCTV, access control, intrusion alarms and fire detection — monitored from our 24 × 7 command centre.',
    points: [
      ['Design & installation', 'Survey-led system design for offices, plants, warehouses and residential communities.'],
      ['Remote monitoring', 'Cameras and alarms linked to our command centre with escalation to your team.'],
      ['Smart integrations', 'Visitor management, boom barriers, ANPR and mobile app dashboards.'],
      ['Annual maintenance', 'AMC plans with preventive visits and guaranteed response times.'],
    ],
    subs: ['Supply & installation', 'Digital visitor management', 'Annual maintenance contracts', '24 × 7 command centre'],
  },
  {
    slug: 'staffing-solutions',
    title: 'Staffing Solutions',
    short: 'Facility & support manpower',
    image: '/images/team.jpg',
    summary:
      'Payroll-compliant manpower for housekeeping, front desk, drivers, office assistants and technicians — hired, trained and managed by GuardX.',
    points: [
      ['Fast deployment', 'A ready pool of screened candidates lets us fill most roles quickly.'],
      ['Full compliance', 'PF, ESI, minimum wages and statutory registers handled for you.'],
      ['Replacement guarantee', 'Absent or unsuitable staff are replaced quickly, without extra cost.'],
      ['Single invoice', 'Security and facility staff managed under one contract and one account manager.'],
    ],
    subs: ['Housekeeping staff', 'Front desk & receptionists', 'Drivers & office assistants', 'Technicians'],
  },
  {
    slug: 'background-verification',
    title: 'Background Verification',
    short: 'Hire with confidence',
    image: '/images/verify.jpg',
    summary:
      'Employment, education, address, criminal-record and reference checks that protect you from hiring fraud and compliance risk.',
    points: [
      ['Pre-employment screening', 'Identity, address, education and previous employment verified with the source.'],
      ['Criminal & court records', 'Police verification and court-record searches across India.'],
      ['Vendor due diligence', 'Know the partners, franchisees and suppliers you work with.'],
      ['Privacy first', 'Consent-based process aligned with the Digital Personal Data Protection Act.'],
    ],
    subs: ['Employee screening', 'Ex-employee verification', 'Leadership due diligence', 'Vendor due diligence'],
  },
  {
    slug: 'risk-consulting',
    title: 'Risk Consulting',
    short: 'Plan before something happens',
    image: '/images/meeting.jpg',
    summary:
      'Security audits, standard operating procedures, crisis response and business continuity planning from experienced consultants.',
    points: [
      ['Security audits', 'Vulnerability assessments of people, process and technology with a clear action list.'],
      ['SOPs that work', 'Practical procedures your guards and staff can actually follow.'],
      ['Crisis readiness', 'Emergency response plans, mock drills and evacuation exercises.'],
      ['Business continuity', 'Keep critical operations running through disruption.'],
    ],
    subs: ['Security & vulnerability audits', 'Standard operating procedures', 'Crisis & emergency planning', 'Business continuity planning'],
  },
  {
    slug: 'event-and-executive-protection',
    title: 'Event & Executive Protection',
    short: 'Events, VIPs and escorts',
    image: '/images/event.jpg',
    summary:
      'Crowd management, access control and close protection for corporate events, launches, weddings and travelling executives.',
    points: [
      ['Event planning', 'Risk assessment, entry plans and staffing for crowds of any size.'],
      ['Close protection', 'Discreet personal security officers for executives and visiting guests.'],
      ['Secure transport', 'Escorted vehicle movement for people, cash and valuable goods.'],
      ['On-the-day command', 'A single event lead coordinating guards, venue staff and local authorities.'],
    ],
    subs: ['Event security', 'Personal security officers', 'Escort services', 'Crowd management'],
  },
];

export const INDUSTRIES = [
  { slug: 'corporate-offices', title: 'Corporate & IT parks', image: '/images/building.jpg', text: 'Access control, front office security and visitor management for tech parks and corporate campuses that never sleep.' },
  { slug: 'healthcare', title: 'Hospitals & healthcare', image: '/images/hospital.jpg', text: 'Calm, patient-friendly security for hospitals and clinics — protecting staff, patients and medicines around the clock.' },
  { slug: 'banking', title: 'Banking & finance', image: '/images/finance.jpg', text: 'Branch guarding, ATM monitoring and cash escorts for banks, NBFCs and insurance offices.' },
  { slug: 'hospitality', title: 'Hotels & hospitality', image: '/images/hotel.jpg', text: 'Discreet officers and smart systems that keep guests safe without spoiling their experience.' },
  { slug: 'data-centres', title: 'Data centres', image: '/images/datacenter.jpg', text: 'Layered physical security, mantraps and 24 × 7 monitoring for critical digital infrastructure.' },
  { slug: 'education', title: 'Schools & universities', image: '/images/school.jpg', text: 'Trained, verified staff and visitor control so students learn and parents relax.' },
  { slug: 'residential', title: 'Apartments & gated communities', image: '/images/apartment.jpg', text: 'Gate security, visitor apps, patrols and CCTV for housing societies and villas.' },
  { slug: 'retail', title: 'Retail & malls', image: '/images/mall.jpg', text: 'Loss prevention, crowd management and after-hours protection for stores and shopping centres.' },
  { slug: 'events', title: 'Events & VIP protection', image: '/images/bodyguard.jpg', text: 'Planned, rehearsed security for launches, concerts, weddings and visiting dignitaries.' },
];

export const BENEFITS = [
  ['Protection around the clock', 'Trained people, smart technology and a live command centre watching over your sites 24 × 7.'],
  ['One step ahead', 'We look for risks before they become incidents and help you tighten everyday operations.'],
  ['Verified from day one', 'Every officer and staff member is background-checked and police-verified before deployment.'],
  ['One accountable partner', 'Guarding, electronic security, staffing and verification under a single contract.'],
  ['Compliance handled', 'PSARA licensing, labour law, PF / ESI and data-privacy requirements taken care of.'],
  ['Grows with you', 'From a single site to locations across every state in India — we scale as you do.'],
];

export const INSIGHTS = [
  {
    slug: 'choosing-a-security-agency',
    tag: 'Guide',
    date: '4 November 2026',
    title: 'Seven questions to ask before you hire a security agency',
    image: '/images/handshake.jpg',
    excerpt: 'Licences, training, supervision and replacement policies — what separates a dependable partner from a cheap one.',
    body: [
      'Price is usually the first thing compared when a business looks for a security agency, but it is rarely what decides whether your site is actually safe.',
      'Start with the licence: every private security agency in India must hold a valid PSARA licence for the state it operates in. Ask for a copy and check its validity.',
      'Next, ask how guards are trained and verified, who supervises them at night, how quickly an absent guard is replaced, and how incidents are reported to you.',
      'Finally, ask to visit the control room and speak to an existing client. A good partner will be happy to show you both.',
    ],
  },
  {
    slug: 'dpdp-and-background-checks',
    tag: 'Compliance',
    date: '21 October 2026',
    title: 'What the DPDP Act means for background verification',
    image: '/images/verify.jpg',
    excerpt: 'Consent, purpose limitation and data retention — how employers can screen candidates responsibly.',
    body: [
      'India’s Digital Personal Data Protection Act changes how employers collect and use personal data during hiring.',
      'Background checks remain legal and important, but they must be based on clear consent, used only for the stated purpose, and the data must not be kept longer than needed.',
      'At GuardX we collect consent digitally, share reports only with authorised HR contacts and delete case data on a fixed schedule.',
    ],
  },
  {
    slug: 'tech-park-case-study',
    tag: 'Customer story',
    date: '2 October 2026',
    title: 'How a large tech park shortened its morning visitor queues',
    image: '/images/reception.jpg',
    excerpt: 'Digital visitor passes, trained front-office officers and one shared dashboard.',
    body: [
      'A large technology park was seeing long queues at its reception every morning.',
      'GuardX introduced pre-registered QR visitor passes, retrained the front-office team and connected the turnstiles to a single dashboard.',
      'Within weeks the queues had shrunk noticeably, and the client’s facility team now sees every entry in real time.',
    ],
  },
];

export const NAV = [
  {
    label: 'Our Services',
    href: '/services',
    columns: [
      { heading: 'Services', links: SERVICES.map((s) => ({ label: s.title, href: `/services/${s.slug}` })) },
    ],
  },
  {
    label: 'Security Solutions',
    href: '/industries',
    columns: [
      { heading: 'By industry', links: INDUSTRIES.map((i) => ({ label: i.title, href: `/industries/${i.slug}` })) },
      { heading: 'By size', links: [{ label: 'Small & medium businesses', href: '/industries' }, { label: 'Large enterprises', href: '/industries' }] },
    ],
  },
  {
    label: 'News & Insights',
    href: '/insights',
    columns: [
      { heading: 'Read', links: [{ label: 'All insights', href: '/insights' }, ...INSIGHTS.map((p) => ({ label: p.tag, href: `/insights/${p.slug}` }))] },
    ],
  },
  {
    label: 'Contact and Support',
    href: '/contact',
    columns: [
      { heading: 'Support', links: [{ label: 'Contact us', href: '/contact' }, { label: 'FAQs', href: '/faqs' }, { label: 'About GuardX', href: '/about' }] },
    ],
  },
  {
    label: 'Career',
    href: '/careers',
    columns: [
      { heading: 'Careers', links: [{ label: 'Why work with us', href: '/careers' }, { label: 'Open positions', href: '/careers#openings' }, { label: 'Training & growth', href: '/careers#training' }] },
    ],
  },
];

export const JOBS = [
  ['Security Officer', 'Pan India', 'Full time'],
  ['Lady Security Officer', 'Delhi NCR', 'Full time'],
  ['Field Supervisor', 'Mumbai', 'Full time'],
  ['CCTV Technician', 'Hyderabad', 'Full time'],
  ['Background Verification Executive', 'Bengaluru (Hybrid)', 'Full time'],
  ['Business Development Manager', 'Chennai / Pune', 'Full time'],
];

export const FAQS = [
  ['Is GuardX licensed?', 'Yes. GuardX operates under a PSARA licence and complies with all state and central labour laws. Copies are shared with every client.'],
  ['How quickly can you deploy guards?', 'For most sites in major Indian cities we can deploy within a few days of signing. Larger or specialised deployments are planned together with you.'],
  ['Are your guards background-verified?', 'Every officer is police-verified, background-checked and trained before deployment.'],
  ['Do you provide lady security officers?', 'Yes, trained lady security officers are available for reception, frisking and residential deployments.'],
  ['What happens if a guard is absent?', 'Our control room tracks attendance live and sends a reliever, normally within two hours.'],
  ['Can you install and monitor CCTV?', 'Yes. We design, install and maintain CCTV, access control and alarm systems and can monitor them from our command centre.'],
];
