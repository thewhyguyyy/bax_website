// Single source of truth for site copy. Edit here, not in components.
// Items marked PLACEHOLDER still need a real asset or final copy from BAX.

export const nav = {
  links: [
    { label: "Home", href: "/" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "About Us", href: "/about" },
    { label: "Get Involved", href: "/get-involved", primary: true },
    { label: "Contact Us", href: "/contact" },
  ],
};

export const ctaBand = {
  heading: "Invest in the future of inclusive sports.",
  body: "A new category is being built. Early believers will shape it.",
  cta: { label: "Get Involved", href: "/get-involved" },
};

export const team = [
  {
    slug: "rohit-jhalani",
    name: "Rohit Jhalani",
    role: "Co-Founder",
    category: "Athlete Development",
    descriptor:
      "14 yrs First-Class Cricketer; Ranji & Irani Trophy winner; mentor, India Men's Mixed Disability Team.",
    photo: "/images/team/rohit-jhalani.jpg",
    advisor: false,
  },
  {
    slug: "abhai-singh",
    name: "Sqn Ldr Abhai P. Singh",
    role: "Strategic Advisor, Disability Sports",
    category: "Disability Sports Leadership & Inclusion",
    descriptor: "Founder, WCIA; Joint Secretary, DCCI; Ex-IAF officer.",
    photo: "/images/team/abhai-singh.jpg",
    advisor: false,
  },
  {
    slug: "ian-martin",
    name: "Ian Martin",
    role: "Strategic Advisor, Disability Sports",
    category: "ECB Head of Disability Cricket",
    descriptor: "MBE honoree; ECB Head of Disability Cricket; 20+ years in disability cricket.",
    photo: "/images/team/ian-martin.jpg",
    advisor: true,
  },
  {
    slug: "shweta-choudhary",
    name: "Shweta Choudhary",
    role: "Strategic Growth",
    category: "Venture Building & Founder Support",
    descriptor: "Founder, InnovHER; PhD; venture-builder driving Rajasthan's startup ecosystem.",
    photo: "/images/team/shweta-choudhary.jpg",
    advisor: false,
  },
  {
    slug: "jeet-vijay",
    name: "Jeet Vijay",
    role: "Advisor, CSR & Partnerships",
    category: "CSR, ESG & Strategic Partnerships",
    descriptor: "Ex-CEO, MeitY Startup Hub (15,000+ startups, $100M VC fund).",
    photo: "/images/team/jeet-vijay.jpg",
    advisor: false,
  },
  {
    slug: "manish-tiwari",
    name: "Manish Tiwari",
    role: "Partnership Head",
    category: "CSR, ESG & Strategic Partnerships",
    descriptor: "25+ yrs in CSR & ESG; institutional partnerships & social impact specialist.",
    photo: "/images/team/manish-tiwari.jpg",
    advisor: false,
  },
  {
    slug: "anuraag-jaipuria",
    name: "Anuraag Jaipuria",
    role: "Advisory, Growth & Media",
    category: "Strategic Growth & Media Relations",
    descriptor: "MD, Jaipuria Group; active angel investor across consumer & fintech.",
    photo: "/images/team/anuraag-jaipuria.jpg",
    advisor: true,
  },
  {
    slug: "anish-somani",
    name: "Anish Somani",
    role: "Partnerships & Media",
    category: "Startup Ecosystem & Innovation Policy",
    descriptor: "Ex-Program Director, MeitY Startup Hub & INDIAai; G20 Sherpa Office.",
    photo: "/images/team/anish-somani.jpg",
    advisor: false,
  },
];

export const teamFootnote = "*In discussion — engagement to be formally confirmed.";

export const homeTeamSlugs = [
  "rohit-jhalani",
  "abhai-singh",
  "manish-tiwari",
  "shweta-choudhary",
];

export const partners = [
  {
    slug: "pccai",
    name: "Physically Challenged Cricket Association of India",
    short: "PCCAI",
    logo: "/images/partners/pccai.png",
    url: null,
  },
  {
    slug: "dcci",
    name: "Differently Abled Cricket Council of India",
    short: "DCCI",
    logo: "/images/partners/dcci.jpg",
    url: null,
  },
  {
    slug: "rdca",
    name: "Rajasthan Disable (Differently Abled) Cricket Association",
    short: "RDCA",
    logo: "/images/partners/rdca.jpg",
    url: null,
  },
];

export const mission = {
  eyebrow: "Our Objective",
  headingPrefix: "We are ",
  headingHighlight: "ENABLERS.",
  intro: "What we're committed to solving for — what they're fighting for.",
  pillars: [
    { title: "Equality", body: "Equal treatment, platforms, and rights." },
    { title: "Identity", body: "To be seen as athletes first — not defined by disability." },
    { title: "Equity", body: "Access to resources, coaching, and infrastructure they need." },
    {
      title: "Opportunity",
      body: "Professional careers, sustainable livelihoods through sport.",
      highlight: true,
    },
  ],
  closing: "We build the ecosystem to deliver all four.",
};

export const events = [
  {
    slug: "pd-champions-trophy-2025",
    title: "PD Champions Trophy 2025",
    year: "2025",
    blurb: null, // PLACEHOLDER: event blurb needed from BAX
    image: null, // PLACEHOLDER: assets/home/events/pd-champions-trophy-2025.jpg
  },
  {
    slug: "mixed-disability-series-2026",
    title: "Mixed Disability Series 2026",
    year: "2026",
    blurb: null, // PLACEHOLDER
    image: null, // PLACEHOLDER
  },
  {
    slug: "pd-challengers-trophy-2024",
    title: "PD Challengers Trophy 2024",
    year: "2024",
    blurb: null, // PLACEHOLDER
    image: null, // PLACEHOLDER
  },
];

export const home = {
  hero: {
    tagline: "EVERY ATHLETE HAS A STORY",
    headingPrefix: "Building India's ",
    headingHighlight: "FIRST",
    headingSuffix: " Inclusive Sports Ecosystem.",
    subhead: "A new category is being built. Early believers will shape it.",
    pills: ["Sports", "Media", "Technology", "Community", "Impact"],
    primaryCta: { label: "Get Involved", href: "/get-involved" },
    secondaryCta: { label: "Invest in the Future of Inclusive Sports", href: "/get-involved" },
  },
  who: {
    heading: "Who is Beyond Ability X?",
    body: "Beyond Ability X is building India's first inclusive sports ecosystem for differently-abled athletes — spanning leagues, media, technology, grassroots development and commerce. India has produced world-class para athletes, but no ecosystem was built around them. We exist to change that: to take athletes from invisible to iconic, and give them recognition, platforms and sustainable livelihoods through sport.",
    kicker: "They play for love of the game. We'll let them play for a living.",
  },
  inAction: {
    heading: "In Action",
  },
  associations: {
    heading: "In Association With",
  },
  gallery: {
    heading: "Moments",
    // PLACEHOLDER: additional gallery images — using existing site photography for now
    images: [
      { src: "/images/apl-athlete.jpg", alt: "APL athlete in action on the field" },
      { src: "/images/bp-1.jpg", alt: "Beyond Ability X community moment" },
      { src: "/images/bp-2.jpg", alt: "Beyond Ability X community moment" },
      { src: "/images/bp-3.jpg", alt: "Beyond Ability X community moment" },
      { src: "/images/about-feat-1.jpg", alt: "Athlete training session" },
      { src: "/images/about-feat-2.jpg", alt: "Athletes on field together" },
    ],
  },
};
