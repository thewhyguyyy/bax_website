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
    role: "Athlete Advisory",
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

// Full roster on the home carousel (was 4) so there's more to scroll through.
// Ian Martin leads, Rohit Jhalani sits 4th, per BAX's ordering request.
export const homeTeamSlugs = [
  "ian-martin",
  "abhai-singh",
  "shweta-choudhary",
  "rohit-jhalani",
  "manish-tiwari",
  "jeet-vijay",
  "anuraag-jaipuria",
  "anish-somani",
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
    blurb: "Champions earned, not given. Our athletes brought the trophy home.",
    image: "/images/events/pd-champions-trophy-2025.jpg",
    imageAlt: "Team BAX celebrating with the PD Champions Trophy 2025",
  },
  {
    slug: "mixed-disability-series-2026",
    title: "Mixed Disability Series 2026",
    year: "2026",
    blurb: "India and England went toe-to-toe for the series trophy.",
    image: "/images/events/mixed-disability-series-2026.jpg",
    imageAlt: "India and England captains with the Mixed Disability Series trophy",
  },
  {
    slug: "pd-challengers-trophy-2024",
    title: "PD Challengers Trophy 2024",
    year: "2024",
    blurb: "Stumps flying, athletes rising. Game on.",
    image: "/images/contact-hero.jpg", // confirmed authentic — "Challengers Trophy 2024" visible on the stumps
    imageAlt: "A bowled wicket at the PD Challengers Trophy 2024",
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
    secondaryCta: {
      label: "Register as Athlete",
      href: "https://rise.beyondabilityx.com",
      external: true,
    },
  },
  who: {
    heading: "Who is Beyond Ability X?",
    body: "India has produced world-class para athletes. It never built an ecosystem around them — until now. We're building leagues, media, tech, and grassroots development that turn athletes from invisible to iconic.",
    kicker: "They play for love of the game. We'll let them play for a living.",
    image: { src: "/images/about-feat-1.jpg", alt: "A BAX athlete training on the field" },
  },
  playerStories: {
    eyebrow: "Every Athlete Has A Story",
    heading: "From the Vault: Human Behind the Sport",
    body: "Real athletes. Real grit. The stories behind the scoreboard.",
    cta: { label: "Watch the Series", href: "https://youtube.com/playlist?list=PLf7m0qWhDPg-UPyGgM7rfGpdoZwmZ9vT5" },
    image: { src: "/images/about-feat-2.jpg", alt: "Close-up of a BAX team jersey" },
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

export const about = {
  heroImage: { src: "/images/about-hero.jpg", alt: "BAX athletes warming up before a match" },
  reality: {
    eyebrow: "The Reality",
    headingPrefix: "One Para Athlete. ",
    headingHighlight: "Two Lives.",
    onGround: {
      label: "On The Ground",
      items: [
        { title: "Ambitious", body: "Driven by dreams of gold" },
        { title: "Spirited", body: "Fighting against every odd" },
        { title: "Energetic", body: "Pushing physical limits" },
        { title: "Optimistic", body: "Believing in possibility" },
      ],
    },
    offGround: {
      label: "Off The Ground",
      items: [
        { title: "Invisible", body: "No recognition" },
        { title: "Struggling", body: "Financial hardships daily" },
        { title: "Isolated", body: "Limited facilities" },
        { title: "Overlooked", body: "No career path and opportunities" },
      ],
    },
    closing: "We exist to bridge this gap.",
  },
  problem: {
    eyebrow: "The Problem",
    headingPrefix: "India created ",
    headingHighlight: "WORLD-CLASS PARA ATHLETES",
    headingSuffix: " — but no ecosystem was built around them.",
    stats: [
      {
        number: "0.5%",
        label: "Media Visibility",
        detail: "Differently-abled athletes receive <0.5% of sports media coverage.",
        subBullets: ["No visibility", "No fandom", "No commercial value"],
      },
      {
        number: "0",
        label: "Professional Leagues",
        detail:
          "29 medals at Paris 2024, yet no domestic league exists for differently-abled athletes in India.",
        subBullets: ["No auctions", "No contracts", "No broadcast systems"],
      },
      {
        number: "<1%",
        label: "Athlete Earnings",
        detail: "Earn a livelihood via sport. Most retire early and enter poverty.",
        subBullets: ["No sponsorships", "No contracts", "No livelihood"],
      },
    ],
    closing: "They play for love of the game. We will let them play for a living.",
  },
  team: {
    heading: "The People Behind BAX",
  },
  partnerships: {
    heading: "Partnerships",
  },
};

export const getInvolved = {
  hero: {
    heading: "Invest in the Future of Inclusive Sports.",
    subhead: "A new category is being built. Early believers will shape it.",
    image: { src: "/images/partnership-hero.jpg", alt: "A BAX athlete bowling mid-delivery" },
  },
  waysImage: { src: "/images/about-feat-2.jpg", alt: "Close-up of a BAX team jersey" },
  ways: [
    {
      slug: "invest",
      title: "Invest",
      body: "Back India's first inclusive sports ecosystem.",
    },
    {
      slug: "sponsor",
      title: "Sponsor / Partner",
      body: "Put your brand behind athletes who've never had commercial backing.",
    },
    {
      slug: "hire",
      title: "Hire Athletes",
      body: "Tap the hiring ecosystem and corporate-jobs pipeline.",
    },
    {
      slug: "coach",
      title: "Coach / Volunteer",
      body: "Join the academy and grassroots development.",
    },
    {
      slug: "media",
      title: "Media & Content",
      body: "Collaborate on Ability Originals storytelling.",
    },
  ],
  formFields: [
    { name: "name", label: "Name", required: true, autoComplete: "name" },
    { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
    { name: "organisation", label: "Organisation", autoComplete: "organization" },
    {
      name: "interest",
      label: "Interest",
      type: "select",
      required: true,
      options: ["Invest", "Sponsor / Partner", "Hire Athletes", "Coach / Volunteer", "Media & Content"],
    },
    { name: "message", label: "Message", type: "textarea", required: true },
  ],
};

export const contact = {
  heading: "Get in Touch.",
  image: { src: "/images/partnership-why.jpg", alt: "A BAX match in progress" },
  email: "partnership@beyondabilityx.com",
  phone: "+91 70116 71272",
  // PLACEHOLDER: confirm office/city location
  location: "[PLACEHOLDER: city, country]",
  formFields: [
    { name: "name", label: "Name", required: true, autoComplete: "name" },
    { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
    { name: "subject", label: "Subject", required: true },
    { name: "message", label: "Message", type: "textarea", required: true },
  ],
};

export const whatWeDo = {
  intro: {
    heading: "One platform. Multiple engines.",
    subhead:
      "Every pillar fuels the next — built around athletes, fandom, and the future of inclusive sport.",
    image: { src: "/images/bp-3.jpg", alt: "A BAX fielder leaping for a catch" },
  },
  pillars: [
    {
      slug: "ability-leagues",
      icon: "Trophy",
      title: "Ability Leagues",
      body: "Owns the core sports IP. Franchise model, media rights, sponsorships, athlete economy.",
      tag: "IP Creation",
    },
    {
      slug: "ability-academy",
      icon: "GraduationCap",
      title: "Ability Academy",
      body: "Creates the next generation of talent. Certifications, grassroots training, digital learning.",
      tag: "Talent Pipeline",
    },
    {
      slug: "ability-originals",
      icon: "Clapperboard",
      title: "Ability Originals",
      body: "Turns athletes into national stories. OTT, YouTube, documentaries, branded content.",
      tag: "Storytelling & Distribution",
    },
    {
      slug: "ability-festival",
      icon: "PartyPopper",
      title: "Ability Festival",
      body: "Creates cultural legitimacy. National recognition platform and events for athletes and inclusion leaders.",
      tag: "Recognition & Legacy",
    },
    {
      slug: "ability-tech",
      icon: "Cpu",
      title: "Ability Tech",
      body: "Builds the data and engagement layer. Athlete registry, fantasy gaming, analytics, hiring marketplace.",
      tag: "Data & Engagement",
    },
    {
      slug: "ability-store",
      icon: "ShoppingBag",
      title: "Ability Store",
      body: "Monetizes fandom and identity. Adaptive sportswear, merchandise, retail partnerships.",
      tag: "Merch & Retail",
    },
  ],
  flagshipIPs: {
    heading: "Two Flagship IPs. One Global Sports Platform.",
    items: [
      {
        slug: "disability-asia-cup",
        title: "Disability Asia Cup",
        term: "5-Year IP Owned",
        body: "A recurring international disability cricket property bringing leading Asian teams, athletes, sponsors and audiences onto one competitive platform.",
        facts: [
          "Asia-wide participation",
          "Broadcast ready",
          "TV / OTT / digital distribution",
          "Brand & sponsor platform",
          "Recurring commercial inventory across seasons",
        ],
      },
      {
        slug: "axpl-league",
        title: "AxPL (League)",
        term: "10-Year IP Owned",
        body: "An IPL-style, franchise-led disability cricket league built to professionalise adaptive sport and build scalable commercial value.",
        facts: [
          "6 franchise teams",
          "City-based ownership",
          "90+ athletes",
          "16+ matches",
          "Season 1 rollout",
          "₹18.4 Cr projected Year-1 revenue",
        ],
      },
    ],
  },
};
