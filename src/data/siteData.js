// ==============================
// NAVIGATION LINKS
// ==============================
export const links = [
  { name: "About Us", href: "/about-us" },
  {
    name: "Products",
    href: "/products",
    subLinks: [
      { name: "Storage Batteries", href: "/products/solutions/storage-batteries" },
      { name: "Solar Inverters", href: "/products/solutions/solar-inverters" },
      { name: "Portable Power Stations", href: "/products/solutions/portable-power-stations" },
      { name: "Electric Mobility", href: "/products/solutions/electric-mobility" },
      { name: "Power Banks", href: "/products/solutions/power-banks" },
      { name: "Phone Screen Protectors", href: "/products/solutions/phone-screen-protectors" }
    ]
  },
  { name: "Manufacturing", href: "/manufacturing" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Blog", href: "/blog" }
];

// ==============================
// PARTNER LOGOS
// ==============================
export const partners = [
  { id: 1, name: "ifwo", logo: "/homeImg/partner01.jpg" },
  { id: 2, name: "xionel", logo: "/homeImg/partner02.jpeg" },
  { id: 3, name: "mangotech", logo: "/homeImg/partner003.jpg" },
  { id: 4, name: "kemans", logo: "/homeImg/partner004.jpg" },
  { id: 5, name: "partner5", logo: "/homeImg/parner05.jpg" },
];

// ==============================
// FOOTER DATA
// ==============================
export const footerData = {
  brandDescription: "JoyHand is a direct factory manufacturer of energy storage, solar inverters, and electric motorcycle batteries. We engineer reliable power solutions for unstable grids in Nigeria and across Africa and South Asia.",
  socialLinks: [
    { name: "YouTube", url: "https://www.youtube.com/@JoyHandSolar", icon: "youtube" },
    { name: "TikTok", url: "https://www.tiktok.com/@joyhandsolar", icon: "tiktok" },
    { name: "Facebook", url: "https://www.facebook.com/JoyHandEnergy", icon: "facebook" },
    { name: "Instagram", url: "https://www.instagram.com/joyhandenergy/", icon: "instagram" },
    { name: "Pinterest", url: "https://www.pinterest.com/joyhandenergy/", icon: "pinterest" }
  ],
  solutions: [
    { name: "Storage Batteries", path: "/products/solutions/storage-batteries" },
    { name: "Solar Inverters", path: "/products/solutions/solar-inverters" },
    { name: "Portable Power Stations", path: "/products/solutions/portable-power-stations" },
    { name: "Electric Mobility", path: "/products/solutions/electric-mobility" },
    { name: "Power Banks", path: "/products/solutions/power-banks" },
    { name: "Phone Screen Protectors", path: "/products/solutions/phone-screen-protectors" }
  ],
  company: [
    { name: "About Us", path: "/about-us" },
    { name: "Manufacturing Capabilities", path: "/manufacturing" },
    { name: "Industry Insights", path: "/blog" },
    { name: "Contact Us", path: "/contact-us" }
  ],
  globalOffices: [
    {
      name: "USA - Headquarters",
      location: "Montgomery, AL",
      address: "445 Dexter Avenue, Suite 4050, Montgomery, AL 36104",
      icon: "building",
      link: "https://maps.google.com/?q=445+Dexter+Avenue+Suite+4050+Montgomery+AL+36104"
    },
    {
      name: "China - Manufacturing Facility",
      location: "Guangzhou, Guangdong",
      address: "No. 7, Nansha District, Guangzhou 511400, Guangdong, China",
      icon: "factory",
      link: "https://maps.google.com/?q=No.+7,+Nansha+District,+Guangzhou+511400,+Guangdong,+China",
      featured: true
    },
    {
      name: "Australia - Pacific Office",
      location: "Melbourne, VIC",
      address: "157 A'Beckett Street, Melbourne VIC 3000, Australia",
      icon: "globe",
      link: "https://maps.google.com/?q=157+A%27Beckett+Street+Melbourne+VIC+3000"
    },
    {
      name: "Nigeria - Africa Office",
      location: "Lagos, Nigeria",
      address: "New Mandilas International Market, Trade Fair, Ojo, Lagos, Nigeria",
      icon: "globe",
      link: "https://maps.google.com/?q=Trade+Fair+Ojo+Lagos+Nigeria"
    }
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookie-policy" }
  ],
  copyrightYear: new Date().getFullYear(),
  credits: "Direct Factory Output | ISO 9001:2015 Standards | USA | China | Australia | Nigeria"
};

// ==============================
// BUSINESS MODEL SERVICES (HOMEPAGE)
// ==============================
export const businessServices = [
  {
    id: "oem",
    tag: "OEM / WHITE LABEL",
    title: "Direct Factory Production.",
    description: "Launch your own brand of solar and battery products with our precision-engineered factory lines. We manage compliance and export logistics to Lagos and Karachi.",
    extra: "Scale your business with white-label LFP batteries, hybrid inverters, and portable power. We ensure products meet CE, UL, and UN38.3 standards for market entry in Nigeria and Bangladesh.",
    features: [
      "Custom branding & packaging",
      "Factory direct export to Africa",
      "6,000+ cycle life LFP cells",
      "B2B MOQs for distributors"
    ],
    image: "/homeImg/businessModelImage2.jpg",
    imageAlt: "OEM production line for solar inverters and battery packs"
  },
  {
    id: "odm",
    tag: "ODM / CUSTOM ENGINEERING",
    title: "Engineering for Unstable Grids.",
    description: "Our engineers design custom battery packs and inverter circuits specifically for weak power grids and frequent blackouts.",
    extra: "Full-stack development: BMS logic, thermal testing, and structural design. Work with 30+ in-house engineers to build exclusive hardware for the Nigerian and South Asian markets.",
    features: [
      "Custom BMS for voltage surges",
      "Engineered for high-heat climates",
      "Exclusive tooling & IP protection",
      "Direct engineer-to-engineer support"
    ],
    image: "/homeImg/businessModelImage03.jpg"
  },
  {
    id: "b2b",
    tag: "B2B WHOLESALE",
    title: "Stock & Resell. Skip Middlemen.",
    description: "Grow your distribution business with factory direct prices on energy storage. Industrial-grade reliability with full logistics support for importers in Nigeria.",
    extra: "Choose from our standard range of LFP storage, hybrid inverters, and power stations. Volume discounts and technical support available for installers in Lagos, Nairobi, and Dhaka.",
    features: [
      "ISO 9001:2015 standard production",
      "Low wholesale MOQs",
      "Direct factory pricing",
      "Customs clearance assistance"
    ],
    image: "/homeImg/businessModelImage4.jpg",
    imageAlt: "Finished products ready for global shipment"
  }
];

// ==============================
// INNOVATION PILLARS
// ==============================
export const innovationPillars = [
  {
    id: "iso",
    title: "ISO 9001:2015 Standard Production",
    preview: "Regulated factory output",
    description: "Manufacturing processes operating under audited quality management systems to ensure batch consistency."
  },
  {
    id: "ce-ul",
    title: "CE & UL Safety Standards",
    preview: "Global market compliance",
    description: "Our products are tested to meet international safety requirements for import into Nigeria and Pakistan."
  },
  {
    id: "un383",
    title: "UN38.3 Logistics Compliance",
    preview: "Safe sea & air transport",
    description: "Certified testing for safe lithium battery transport to ports in Lagos, Karachi, and Chittagong."
  },
  {
    id: "docs",
    title: "Direct Quality Reports",
    preview: "Full manufacturing transparency",
    description: "We provide factory compliance reports and safety data sheets for every wholesale shipment."
  }
];

// ==============================
// LOGISTICS FEATURES
// ==============================
export const logisticsFeatures = [
  {
    title: "Direct Port Logistics",
    desc: "We ship full containers from Guangzhou to Lagos, Nairobi, Karachi, and Dhaka. Skip the middlemen for faster delivery."
  },
  {
    title: "Customs Documentation Support",
    desc: "Our team manages export compliance and country-specific forms to avoid port delays in Nigeria and Bangladesh."
  },
  {
    title: "Predictable Lead Times",
    desc: "Strict production schedules ensure your stock arrives on time. Reliable logistics for distributors in Lagos and Apapa."
  }
];

// ==============================
// HERO STATS
// ==============================
export const heroStats = [
  {
    id: "production",
    number: "50,000+",
    label: "m² Factory Hub",
    iconType: "factory"
  },
  {
    id: "experience",
    number: "28+",
    label: "Years Heritage",
    iconType: "certificate"
  },
  {
    id: "engineers",
    number: "30+",
    label: "In-house Engineers",
    iconType: "users"
  }
];

// ==============================
// FEATURED CATEGORIES
// ==============================
export const featuredCategories = [
  {
    id: 1,
    title: "LFP Storage Batteries",
    slug: "storage-batteries",
    image: "/homeImg/energyPlatformImage01.jpg",
    desc: "Wall-mount and rack-mounted batteries for homes and businesses. Optimized for backup power.",
    sourceNote: "Factory Direct"
  },
  {
    id: 2,
    title: "Solar Hybrid Inverters",
    slug: "solar-inverters",
    image: "/homeImg/energyPlatformImage002.jpg",
    desc: "Pure sine wave inverters with smart grid switching. Engineered for grid stability in Nigeria.",
    sourceNote: "ISO Certified"
  },
  {
    id: 3,
    title: "Portable Power Stations",
    slug: "portable-power-stations",
    image: "/homeImg/energyPlatformImage003.jpg",
    desc: "Rugged lithium generators for blackouts and outdoor use. Fast charging from AC or Solar.",
    sourceNote: "OEM Ready"
  },
  {
    id: 4,
    title: "PD Fast Power Banks",
    slug: "power-banks",
    image: "/homeImg/energyPlatformImage005.jpg",
    desc: "High-capacity mobile chargers for retailers. Bulk wholesale supply for mobile tech brands.",
    sourceNote: "Bulk Supply"
  },
  {
    id: 5,
    title: "Electric Motorcycle Batteries",
    slug: "electric-mobility",
    image: "/homeImg/energyPlatformImage04.jpg",
    desc: "Heavy-duty batteries for electric motorcycles and urban fleets. Designed for rugged use.",
    sourceNote: "E-Mobility"
  },
  {
    id: 6,
    title: "Phone Screen Protectors",
    slug: "phone-screen-protectors",
    image: "/homeImg/energyPlatformImage06.jpg",
    desc: "9H tempered glass and anti-spy films. Wholesale orders for electronics distributors.",
    sourceNote: "Accessories"
  }
];

// ==============================
// CTA BANNER DATA
// ==============================
export const ctaData = {
  title: "Ready to Supply Your Market with Reliable Power?",
  description: "Join distributors in Nigeria, Bangladesh, and Kenya. Get factory direct pricing and resilient hardware engineered for unstable grids. Start your manufacturing inquiry today."
};

// ==============================
// ABOUT PAGE DATA
// ==============================
export const aboutTeam = [
  {
    name: "Winper Du",
    title: "CEO & Founder",
    image: "/aboutImg/joyhandleaders02.jpg",
    experience: "28+",
    bio: "Winper leads our manufacturing strategy, focusing on direct factory output for energy distributors in Nigeria and South Asia."
  },
  {
    name: "Li Ronghua",
    title: "Chief Engineer Officer",
    image: "/aboutImg/joyhandleaders01.jpg",
    experience: "25+",
    bio: "Li manages 30+ engineers to ensure product performance in extreme heat and unstable grids in markets like Lagos and Karachi."
  }
];

export const aboutValues = [
  {
    iconType: "factory",
    title: "Manufacturing Heritage",
    description: "Since 1998, we have maintained full control over our production lines to ensure premium quality for importers."
  },
  {
    iconType: "gear",
    title: "Quality Control Lab",
    description: "Proprietary testing for BMS and thermal management ensures reliability during frequent blackouts."
  },
  {
    iconType: "shield",
    title: "Batch Testing Audit",
    description: "100% pre-shipment inspection ensures zero failures in demanding off-grid environments across Nigeria."
  },
  {
    iconType: "globe",
    title: "Direct Global Logistics",
    description: "We manage container shipping and customs documentation from Guangzhou to your local port."
  }
];

export const aboutSectors = [
  {
    title: "LFP Battery Production",
    desc: "Wholesale Lithium Iron Phosphate (LFP) storage using Grade A cells. Built for residential and industrial backup power.",
    features: ["Grade A Prismatic Cells", "6000+ Cycle Life", "Automotive Standards"],
    img: "/aboutImg/aboutProductimg01.jpg",
    tag: "Energy Storage"
  },
  {
    title: "Solar Inverter Engineering",
    desc: "Hybrid inverters with smart grid switching. Designed to handle voltage drops and protect devices in unstable grids.",
    features: ["Pure Sine Wave Tech", "Smart Switching", "98% Efficiency"],
    img: "/aboutImg/aboutProductimg02.jpg",
    tag: "Power Electronics"
  },
  {
    title: "Portable Power Stations",
    desc: "Rugged lithium power stations with multi-region AC outlets. Ideal for emergency backup and remote work sites.",
    features: ["Multi-Region Outlets", "Fast Charging", "ODM Branding"],
    img: "/aboutImg/aboutProductimg3.jpg",
    tag: "Portable Energy"
  },
  {
    title: "High-Capacity Power Banks",
    desc: "PD fast charging power banks for retail networks. We supply large volumes to tech distributors in Nigeria.",
    features: ["PD Fast Charge", "Safety Protection", "Bulk Wholesale"],
    img: "/aboutImg/aboutProductimg5.jpg",
    tag: "Consumer Tech"
  },
  {
    title: "Electric Motorcycle Batteries",
    desc: "Heavy-duty batteries for electric motorcycles. Features reinforced frames and weatherproof casings for rugged terrain.",
    features: ["IP65 Weatherproof", "Reinforced Casing", "Custom BMS"],
    img: "/aboutImg/aboutProductimg4.jpg",
    tag: "E-Mobility"
  },
  {
    title: "9H Screen Protectors",
    desc: "Wholesale mobile accessories including tempered glass and anti-spy films. High-margin supply for tech distributors.",
    features: ["9H Hardness", "Anti-Spy Options", "Bulk Packaging"],
    img: "/aboutImg/aboutProductimg6.jpg",
    tag: "Accessories"
  }
];

export const aboutTimeline = [  
  {
    year: "1998",
    title: "Factory Roots",
    description: "Founded as a specialized facility for electric motorcycle components and chassis engineering.",
    iconType: "factory"
  },
  {
    year: "2010",
    title: "Export Growth",
    description: "Reached 5,000+ electric motorcycles produced annually, with early exports to Nigeria and Kenya.",
    iconType: "chart"
  },
  {
    year: "2018",
    title: "Energy Storage Focus",
    description: "Integrated battery expertise into LFP storage and hybrid inverters for distributors in Nigeria.",
    iconType: "lightning"
  },
  {
    year: "2026",
    title: "JoyHand Global",
    description: "Operating a fully integrated manufacturing hub serving distributors across Africa and South Asia.",
    iconType: "shield"
  }
];

export const aboutTestimonials = [
  {
    quote: "JoyHand’s custom BMS logic solved our failure rates during grid surges in Nigeria. Direct factory pricing increased our margins.",
    author: "Ahmed Ibrahim",
    company: "CEO, Energy Distributor, Lagos",
    image: "/aboutImg/aboutTestimonial01.jpg"
  },
  {
    quote: "Finding a reliable OEM for industrial power backups in Bangladesh was easy with JoyHand. Their technical support is world-class.",
    author: "Kamal Hossain",
    company: "MD, Delta Power, Dhaka",
    image: "/aboutImg/aboutTestimonial02.jpg"
  },
  {
    quote: "Scaling off-grid solar in Kenya required a partner who understands rugged environments. Their LFP systems are flawless.",
    author: "Samuel Mwangi",
    company: "Founder, Rift Solar, Nairobi",
    image: "/aboutImg/aboutTestimonial03.jpg"
  },
  {
    quote: "We scaled our electric motorcycle fleet relying entirely on their factory supply. Weatherproof batteries handle monsoons flawlessly.",
    author: "Raj Patel",
    company: "Logistics Lead, Transit Solutions",
    image: "/aboutImg/aboutTestimonial04.jpg"
  }
];

// ==============================
// SERVICES PAGE DATA (MANUFACTURING)
// ==============================
export const servicesList = [
  {
    title: "OEM Manufacturing",
    desc: "Produce energy hardware under your brand. We handle labeling, bulk packaging, and firmware flashing at our factory.",
    iconType: "factory",
    tag: "OEM",
    bgImage: "/serviceImg/serviceodm.jpg"
  },
  {
    title: "ODM Engineering",
    desc: "Custom battery architecture and inverter layouts. Our engineers design hardware for your specific regional requirements.",
    iconType: "gear",
    tag: "ODM",
    bgImage: "/serviceImg/serviceoem.jpg"
  },
  {
    title: "Batch Testing Audit",
    desc: "100% inline inspection. Our lab runs capacity grading and thermal stress tests on every wholesale batch for Nigeria.",
    iconType: "shield",
    tag: "Quality",
    bgImage: "/serviceImg/servicequality1.jpg"
  },
  {
    title: "Container Logistics",
    desc: "We manage freight consolidation, export compliance, and port-to-port shipping to Lagos, Karachi, and Dhaka.",
    iconType: "boat",
    tag: "Logistics",
    bgImage: "/serviceImg/servicelogistic.jpg"
  }
];

export const servicesQC = [
  {
    title: "Cell Grading",
    desc: "Automated capacity matching during initial battery assembly.",
    iconType: "clipboard"
  },
  {
    title: "Wholesale Testing",
    desc: "Extensive aging tests before any container is released for export.",
    iconType: "magnifying"
  },
  {
    title: "Safety Compliance",
    desc: "Providing CE, UL, and UN38.3 documentation for fast customs clearance.",
    iconType: "seal"
  },
  {
    title: "Load Audit",
    desc: "Final securement checks during freight loading to prevent damage.",
    iconType: "shield"
  }
];

export const servicesProcess = [
  {
    step: "01",
    title: "Wholesale Inquiry",
    desc: "We align on your regional specs, bulk volumes, and manufacturing price targets.",
    iconType: "handshake"
  },
  {
    step: "02",
    title: "Custom Engineering",
    desc: "Our team drafts the BMS logic and compliance documentation for your market.",
    iconType: "gear"
  },
  {
    step: "03",
    title: "Prototype Audit",
    desc: "We ship a sample for field testing in your specific grid environment.",
    iconType: "magnifying"
  },
  {
    step: "04",
    title: "Mass Production",
    desc: "Automated assembly begins, monitored by strict quality control protocols.",
    iconType: "factory"
  },
  {
    step: "05",
    title: "Pre-Shipment Check",
    desc: "Hardware is palletized and staged for international container freight.",
    iconType: "shield"
  },
  {
    step: "06",
    title: "Port Delivery",
    desc: "We manage customs out of Guangzhou for delivery to Lagos, Karachi, or Dhaka.",
    iconType: "boat"
  }
];

export const serviceHighlights = [
  "CE Safety Tested",
  "ISO 9001:2015 Facility",
  "UL Compliant Products",
  "IEC 62619 Standard",
  "28+ Years Heritage",
  "50+ Countries Served",
  "1M+ Units Shipped",
  "In-house QC Lab",
  "Full OEM/ODM Support"
];

// ==============================
// CONTACT PAGE DATA
// ==============================
export const contactOffices = [
  {
    iconType: "building",
    title: "USA - Headquarters",
    content: "Montgomery, AL, USA",
    address: "445 Dexter Avenue, Suite 4050, Montgomery, AL 36104",
    link: "https://maps.google.com",
    region: "Americas"
  },
  {
    iconType: "factory",
    title: "China - Factory Hub",
    content: "Guangzhou, Guangdong, China",
    address: "No. 7 Nansha District, Guangzhou 511400, Guangdong, China",
    link: "https://maps.google.com",
    region: "Asia Pacific",
    featured: true
  },
  {
    iconType: "globe",
    title: "Australia - Support",
    content: "Melbourne, VIC, Australia",
    address: "157 A'Beckett Street, Melbourne VIC 3000, Australia",
    link: "https://maps.google.com",
    region: "Oceania"
  },
  {
    iconType: "award",
    title: "Nigeria - Africa Office",
    content: "Lagos, Nigeria",
    address: "New Mandilas International Market, Trade Fair, Ojo, Lagos",
    link: "https://maps.google.com",
    region: "Africa"
  }
];

export const contactFeatures = [
  {
    iconType: "factory",
    label: "Custom Manufacturing",
    subtext: "We produce battery packs and inverters engineered for the Nigerian and South Asian grids."
  },
  {
    iconType: "shield",
    label: "Quality Control Audit",
    subtext: "100% factory inspection. Every product is stress-tested before export to ensure reliability."
  },
  {
    iconType: "handshake",
    label: "Global Support",
    subtext: "Our team provides technical support for distributors in Lagos, Nairobi, and Dhaka."
  },
  {
    iconType: "check",
    label: "Customs Assistance",
    subtext: "We supply the documentation needed to clear customs at any major international port."
  }
];

export const contactFaqs = [
  {
    question: "What is the response time for inquiries?",
    answer: "Our team reviews manufacturing requirements within 24 hours. We will contact you from the nearest office to provide a custom proposal."
  },
  {
    question: "Do you supply B2B distributors?",
    answer: "Yes, we partner with importers and distributors. MOQs vary by product; we will help find a solution that fits your business."
  },
  {
    question: "How do you ensure export quality?",
    answer: "We control production in our ISO-certified factory. Every shipment undergoes full audit and documentation before leaving the port."
  }
];

// ==============================
// PRODUCT SOLUTION LINKS
// ==============================
export const solutionLinks = [
  { slug: "storage-batteries", name: "Battery Storage" },
  { slug: "solar-inverters", name: "Hybrid Inverters" },
  { slug: "portable-power-stations", name: "Portable Power" },
  { slug: "electric-mobility", name: "Electric Mobility" },
  { slug: "power-banks", name: "Power Banks" },
  { slug: "phone-screen-protectors", name: "Phone Accessories" },
];

export const solutionConfigs = {
  "storage-batteries": {
    title: "LFP Battery Manufacturing",
    image: "/homeImg/energyPlatformImage01.jpg",
    filterCategory: "battery",
    description: "Direct factory manufacturer of Grade A LFP batteries. Optimized for residential and industrial energy storage in Nigeria.",
    keywords: "LFP battery manufacturer, wholesale solar batteries, LiFePO4 storage, wall-mount battery, rack-mounted LFP"
  },
  "solar-inverters": {
    title: "Hybrid Inverter Production",
    filterCategory: "inverter",
    image: "/homeImg/energyPlatformImage002.jpg",
    description: "Direct production of hybrid and off-grid solar inverters. Engineered for grid stability and power conversion efficiency.",
    keywords: "hybrid inverter factory, off-grid inverter OEM, pure sine wave inverter, solar power conversion"
  },
  "portable-power-stations": {
    title: "Portable Power Station OEM",
    filterCategory: "portable-power",
    image: "/homeImg/energyPlatformImage003.jpg",
    description: "Manufacturer direct portable power stations. Optimized for emergency backup during blackouts and off-grid use.",
    keywords: "portable power station factory, solar generator OEM, lithium power station wholesale, mobile backup power"
  },
  "electric-mobility": {
    title: "Electric Motorcycle Batteries",
    filterCategory: "electric-mobility",
    image: "/homeImg/energyPlatformImage04.jpg",
    description: "Factory engineering for electric motorcycle batteries and urban fleet systems. Rugged design for demanding logistics.",
    keywords: "electric motorcycle battery, EV battery OEM, electric vehicle mobility, mobility fleet supply"
  },
  "power-banks": {
    title: "Wholesale Power Bank Supply",
    filterCategory: "power-bank",
    image: "/homeImg/energyPlatformImage005.jpg",
    description: "High-volume power bank manufacturing. Direct wholesale supply for retail networks and telecom distributors.",
    keywords: "power bank factory, fast charger manufacturer, bulk power banks, PD charging wholesale"
  },
  "phone-screen-protectors": {
    title: "Screen Protector Factory",
    filterCategory: "phone-screen-protector",
    image: "/homeImg/energyPlatformImage06.jpg",
    description: "Direct factory for 9H tempered glass and anti-spy films. High-margin supply for global tech distributors.",
    keywords: "screen protector factory, tempered glass manufacturer, 9H screen guard bulk, mobile accessory manufacturing"
  }
};

export const headerData = {
  trustBadge: "ISO 9001:2015 Standards",
  phone: "+86 186 0202 1144",
  phoneRaw: "+8618602021144",
  email: "sales@joyhand.com",
  ctaText: "Get a Quote",
  mobileCtaText: "Request Quote"
};

export const cookieData = {
  title: "Privacy Settings",
  description: "We use cookies to optimize your manufacturing sourcing experience. By continuing, you agree to our data protocols.",
  policyText: "Review Policy",
  acceptText: "Accept & Continue"
};
