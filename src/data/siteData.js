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
  { id: 3, name: "kemans", logo: "/homeImg/partner03.jpg" },
  { id: 4, name: "mangotech", logo: "/homeImg/partner04.jpg" },
  { id: 5, name: "ifwo", logo: "/homeImg/partner01.jpg" },
  { id: 6, name: "xionel", logo: "/homeImg/partner02.jpeg" },
  { id: 7, name: "kemans", logo: "/homeImg/partner03.jpg" },
  { id: 8, name: "mangotech", logo: "/homeImg/partner04.jpg" },
];

// ==============================
// FOOTER DATA
// ==============================
export const footerData = {
  brandDescription: "ISO 9001:2025 certified manufacturer of premium energy storage systems, solar inverters, and electric mobility solutions. Direct OEM/ODM supply for global distributors.",
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
  credits: "ISO 9001:2025 Certified Manufacturer | USA | China | Australia | Nigeria"
};

// ==============================
// BUSINESS MODEL SERVICES
// ==============================
export const businessServices = [
  {
    id: "oem",
    tag: "OEM / WHITE LABEL",
    title: "Your Brand. Our Production.",
    description: "Launch certified solar, battery, and e‑mobility products under your own name. We handle manufacturing, compliance, and logistics.",
    extra: "Choose from ready‑to‑produce platforms: LFP batteries, hybrid inverters, portable stations, EV chargers. Add your logo, packaging, and firmware. We manage CE, UL, UN38.3 certifications. Low MOQs, fast scale‑up.",
    features: [
      "Custom branding & packaging",
      "Certified base designs – market ready",
      "6,000+ cycle LFP technology",
      "Flexible MOQs, container or pilot orders"
    ],
    image: "/homeImg/businessModelImage2.jpg",
    imageAlt: "OEM production line for solar inverters and battery packs"
  },
  {
    id: "odm",
    tag: "ODM / CUSTOM ENGINEERING",
    title: "From Sketch to Shipment.",
    description: "No off‑the‑shelf solution? Our engineers design bespoke battery packs, e‑mobility drivetrains, and integrated solar systems.",
    extra: "Full‑stack development: electrical, BMS, thermal simulation, structural design, prototype, and certification. Work with 30+ in‑house engineers. Exclusive tooling and IP protection – from pilot to mass production.",
    features: [
      "Complete engineering: electronics, BMS, mechanics",
      "Custom form factors for EVs, industrial storage",
      "Thermal & reliability testing lab",
      "Exclusive tooling, IP protection"
    ],
    image: "/homeImg/businessModelImage03.jpg"
  },
  {
    id: "b2b",
    tag: "B2B WHOLESALE",
    title: "Stock & Resell. Factory Direct.",
    description: "Grow your distribution business with ready‑to‑ship energy products. Bulk pricing, full certifications, and logistics support – no retail required.",
    extra: "Choose from our standard range: storage batteries, inverters, power stations, e‑mobility accessories. Volume discounts, technical datasheets, and after‑sales support. Perfect for solar installers, hardware retailers, and e‑mobility dealers.",
    features: [
      "CE, UL, UN38.3 certified stock",
      "Low wholesale MOQs",
      "Direct factory pricing – no middlemen",
      "Bulk logistics & customs support"
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
    title: "ISO 9001:2025",
    preview: "Certified management",
    description: "Audited processes, consistent output. Every batch traceable."
  },
  {
    id: "ce-ul",
    title: "CE & UL Certified",
    preview: "North America & Europe",
    description: "Electrical safety verified. Market access guaranteed."
  },
  {
    id: "un383",
    title: "UN38.3 Tested",
    preview: "Safe lithium transport",
    description: "Vibration, thermal shock, short circuit – all passed."
  },
  {
    id: "docs",
    title: "Full Documentation",
    preview: "Testing reports",
    description: "CE, UL, UN38.3, IEC 62109. Complete test records."
  }
];

// ==============================
// LOGISTICS FEATURES
// ==============================
export const logisticsFeatures = [
  {
    title: "Factory‑Direct Freight",
    desc: "Skip intermediaries. We ship LCL or full containers from Guangzhou to Lagos, Mombasa, Karachi, Chittagong, and beyond."
  },
  {
    title: "Customs Clearance Support",
    desc: "Our team provides complete export documentation – commercial invoices, packing lists, and country‑specific forms to avoid port delays."
  },
  {
    title: "Reliable Lead Times",
    desc: "Predictable production and shipping schedules to major ports – no unexpected delays."
  }
];

// ==============================
// HERO STATS
// ==============================
export const heroStats = [
  {
    id: "production",
    number: "50,000+",
    label: "m² Production",
    iconType: "factory"
  },
  {
    id: "experience",
    number: "27+",
    label: "Years in Energy",
    iconType: "certificate"
  },
  {
    id: "engineers",
    number: "30+",
    label: "In‑house Engineers",
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
    desc: "6,000+ cycle life, wall‑mount & rack‑mount. For homes, businesses, and backup power.",
    sourceNote: "In‑house LFP"
  },
  {
    id: 2,
    title: "Solar Hybrid Inverters",
    slug: "solar-inverters",
    image: "/homeImg/energyPlatformImage002.jpg",
    desc: "Pure sine wave, off‑grid & grid‑tie. 98% efficiency, smart grid switching.",
    sourceNote: "Tier‑1 Parts"
  },
  {
    id: 3,
    title: "Portable Power Stations",
    slug: "portable-power-stations",
    image: "/homeImg/energyPlatformImage003.jpg",
    desc: "Rugged, high‑capacity. Perfect for blackouts, job sites, and outdoor use.",
    sourceNote: "OEM/ODM"
  },
  {
    id: 4,
    title: "Power Banks",
    slug: "power-banks",
    image: "/homeImg/energyPlatformImage005.jpg",
    desc: "Ultra‑fast PD charging, high density. Wholesale for retailers and brands.",
    sourceNote: "Bulk Supply"
  },
  {
    id: 5,
    title: "Electric Motorcycles & Batteries",
    slug: "electric-mobility",
    image: "/homeImg/energyPlatformImage04.jpg",
    desc: "E‑mobility powertrains, swap‑ready packs, and complete scooters for urban fleets.",
    sourceNote: "EV Ready"
  },
  {
    id: 6,
    title: "Phone Screen Protectors",
    slug: "phone-screen-protectors",
    image: "/homeImg/energyPlatformImage06.jpg",
    desc: "Tempered glass, anti‑spy, matte & clear. Bulk orders for distributors worldwide.",
    sourceNote: "Accessory Line"
  }
];

// ==============================
// CTA BANNER DATA
// ==============================
export const ctaData = {
  title: "Ready to Supply Your Market with Reliable Energy?",
  description: "Join distributors across Nigeria, Bangladesh, Kenya, Pakistan, and all of Africa & South Asia. Get factory‑direct pricing, full OEM/ODM support, and certified products ready for your market."
};

// ==============================
// ABOUT PAGE DATA
// ==============================
export const aboutTeam = [
  {
    name: "Winper Du",
    title: "CEO & Founder",
    image: "/aboutImg/aboutteamimg1.png",
    bio: "Winper leads JoyHand's manufacturing strategy, driving vertical integration and sustainable scaling for energy distributors across Africa and South Asia."
  },
  {
    name: "Li Ronghua",
    title: "Chief Engineer Officer",
    image: "/aboutImg/aboutteamimg2.png",
    bio: "Li oversees our 30+ in-house engineers, ensuring every product meets international safety certifications and performance benchmarks for markets like Nigeria, Kenya, and Pakistan."
  }
];

export const aboutValues = [
  {
    iconType: "factory",
    title: "Factory-Direct Supply",
    description: "Eliminate middlemen. Own the production line for maximum margins and fully customizable branding."
  },
  {
    iconType: "gear",
    title: "Low-Grid Engineering",
    description: "Proprietary BMS and thermal systems calibrated for extreme heat and severe grid fluctuations."
  },
  {
    iconType: "shield",
    title: "Military-Grade QC",
    description: "100% batch testing for thermal shock and aging ensures zero failures in demanding off-grid setups."
  },
  {
    iconType: "globe",
    title: "Global Logistics",
    description: "We handle container consolidation, customs, and direct shipping from our factory to your local port."
  }
];

export const aboutSectors = [
  {
    title: "LFP Battery Manufacturing",
    desc: "Wholesale Lithium Iron Phosphate (LFP) storage powered by Grade-A prismatic cells. Engineered for extreme longevity in off-grid residential and commercial setups.",
    features: ["Grade-A Prismatic Cells", "6000+ Cycle Lifespan", "Automotive-Grade Assembly"],
    img: "/aboutImg/aboutProductimg01.jpg",
    tag: "Energy Storage"
  },
  {
    title: "Solar Inverter Production",
    desc: "High-efficiency pure sine wave hybrid inverters with smart grid-switching. Built to handle severe voltage drops and protect electronics in unstable grids.",
    features: ["98% Peak Efficiency", "Pure Sine Wave Tech", "Smart Grid Switching"],
    img: "/aboutImg/aboutProductimg02.jpg",
    tag: "Power Electronics"
  },
  {
    title: "Portable Power Stations",
    desc: "Rugged, fast-charging mobile energy solutions with multi-region AC outlets. Ideal for emergency backup, mobile clinics, and remote industrial sites.",
    features: ["Fast-Charge Capability", "OEM/ODM Branding", "Multi-Output Design"],
    img: "/aboutImg/aboutProductimg3.jpg",
    tag: "Portable Energy"
  },
  {
    title: "High-Capacity Power Banks",
    desc: "PD fast-charging mobile power engineered with high-density lithium polymer. We supply massive volumes to retail networks and telecom providers.",
    features: ["PD Fast Charging", "High Energy Density", "Smart Protection IC"],
    img: "/aboutImg/aboutProductimg5.jpg",
    tag: "Consumer Tech"
  },
  {
    title: "E-Mobility Engineering",
    desc: "Heavy-duty electric motorcycles and EV powertrains featuring reinforced chassis and IP65 weatherproof motors—built for rugged terrain logistics.",
    features: ["Reinforced EV Frames", "IP65 Weatherproof Motors", "Custom Motor Controllers"],
    img: "/aboutImg/aboutProductimg4.jpg",
    tag: "Electric Mobility"
  },
  {
    title: "Phone Screen Protectors",
    desc: "High-margin mobile accessories including 9H tempered glass, anti-spy, and matte films. Bulk wholesale supply for major tech distributors globally.",
    features: ["9H Hardness", "Anti-Shatter", "Oleophobic Coating"],
    img: "/aboutImg/aboutProductimg6.jpg",
    tag: "Accessories"
  }
];

export const aboutTimeline = [  
  {
    year: "1998",
    title: "The Production Roots",
    description: "Founded as a specialized facility for electric vehicle components and chassis engineering.",
    iconType: "factory"
  },
  {
    year: "2010",
    title: "E-Mobility Leadership",
    description: "Reached 5,000+ electric motorcycles produced annually for international export, including early shipments to West Africa.",
    iconType: "chart"
  },
  {
    year: "2018",
    title: "Energy Storage Pivot",
    description: "Integrated our battery expertise into residential LFP storage and high-efficiency inverter lines for emerging markets.",
    iconType: "lightning"
  },
  {
    year: "2026",
    title: "JoyHand Global",
    description: "Operating a fully integrated manufacturing hub for next-generation energy and accessories – serving distributors across Africa & South Asia.",
    iconType: "shield"
  }
];

export const aboutTestimonials = [
  {
    quote: "JoyHand's custom BMS tuning solved our failure rates during grid surges across our West African distribution network. Buying direct has increased our margins by 40%.",
    author: "Ahmed Ibrahim",
    company: "CEO, Regional Energy Distributor, Lagos",
    image: "/aboutImg/aboutTestimonial1.jpg"
  },
  {
    quote: "The resilience of their hybrid inverters in off-grid solar projects is unmatched. Their factory QC protocols mean we deploy our container shipments with zero callbacks.",
    author: "Carlos Mendez",
    company: "Director of Sourcing, Latin America Solar",
    image: "/aboutImg/aboutTestimonial2.jpg"
  },
  {
    quote: "JoyHand delivered our commercial LFP storage order weeks ahead of schedule. The seamless integration of their systems is perfect for our unstable grid environments.",
    author: "Sarah Lin",
    company: "Operations Head, Apex Microgrids",
    image: "/aboutImg/aboutTestimonial1.jpg"
  },
  {
    quote: "We scaled our e-mobility fleet across 5 cities relying entirely on their OEM supply. The weatherproof motors handle monsoons flawlessly. A true manufacturing partner.",
    author: "Raj Patel",
    company: "Supply Chain Lead, Transit Solutions India",
    image: "/aboutImg/aboutTestimonial2.jpg"
  }
];

// ==============================
// SERVICES PAGE DATA
// ==============================
export const servicesList = [
  {
    title: "Wholesale OEM Production",
    desc: "We assemble certified energy hardware under your brand. Custom labeling, bulk packaging, and firmware flashing direct from our automated factory.",
    iconType: "factory",
    tag: "OEM",
    bgImage: "/serviceImg/serviceodm.jpg"
  },
  {
    title: "Custom ODM Engineering",
    desc: "Tailored battery pack architecture and inverter PCB layouts. Our engineers design hardware specifically for your local import requirements.",
    iconType: "gear",
    tag: "ODM",
    bgImage: "/serviceImg/serviceoem.jpg"
  },
  {
    title: "Automated Quality Assurance",
    desc: "100% inline inspection. Our lab runs capacity grading, thermal stress, and cycle life tests on every wholesale batch.",
    iconType: "shield",
    tag: "Quality",
    bgImage: "/serviceImg/servicequality1.jpg"
  },
  {
    title: "Global Container Logistics",
    desc: "We manage complex freight consolidation, specialized export compliance, and port-to-port shipping for large-scale importers.",
    iconType: "boat",
    tag: "Logistics",
    bgImage: "/serviceImg/servicelogistic.jpg"
  }
];

export const servicesQC = [
  {
    title: "Inline Cell Grading",
    desc: "Automated sorting and capacity matching during initial battery assembly.",
    iconType: "clipboard"
  },
  {
    title: "Wholesale Batch Testing",
    desc: "Extensive aging and capacity tests before any container is released.",
    iconType: "magnifying"
  },
  {
    title: "Import Certification",
    desc: "Providing CE, UL, UN38.3, and IEC documentation for fast customs clearance.",
    iconType: "seal"
  },
  {
    title: "Container Load Audit",
    desc: "Final securement checks during freight loading to prevent transit damage.",
    iconType: "shield"
  }
];

export const servicesProcess = [
  {
    step: "01",
    title: "Wholesale Consultation",
    desc: "We align on your regional import specs, bulk volumes, and price targets.",
    iconType: "handshake"
  },
  {
    step: "02",
    title: "Custom Engineering",
    desc: "Our team drafts the BMS logic, shell design, and compliance BOM.",
    iconType: "gear"
  },
  {
    step: "03",
    title: "Prototype Verification",
    desc: "We ship an initial unit for field testing in your specific grid environment.",
    iconType: "magnifying"
  },
  {
    step: "04",
    title: "Mass Production",
    desc: "Automated assembly begins, monitored by strict inline QC protocols.",
    iconType: "factory"
  },
  {
    step: "05",
    title: "Export Preparation",
    desc: "Hardware is palletized, labeled, and staged for international freight.",
    iconType: "shield"
  },
  {
    step: "06",
    title: "Port Delivery",
    desc: "We secure the container and manage customs out of Guangzhou for direct delivery to Karachi, Dhaka, or major African ports.",
    iconType: "boat"
  }
];

export const serviceHighlights = [
  "CE Certified",
  "ISO 9001:2025",
  "UL Listed Products",
  "IEC 62619 Compliant",
  "26+ Years Manufacturing",
  "50+ Countries Delivered",
  "1,000,000+ Units Shipped",
  "In-House QC Lab",
  "Full OEM/ODM Capability"
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
    title: "China - Manufacturing Facility",
    content: "Guangzhou, Guangdong, China",
    address: "No. 7 Nansha District, Guangzhou 511400, Guangdong, China",
    link: "https://maps.google.com",
    region: "Asia Pacific",
    featured: true
  },
  {
    iconType: "globe",
    title: "Australia - Pacific Office",
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
    subtext: "We produce to your exact specifications—from battery packs to e-mobility platforms, engineered for your specific regional grid."
  },
  {
    iconType: "shield",
    label: "In‑House Quality Control",
    subtext: "100% inspection at our Guangzhou facility. Every product is stress-tested before export—no exceptions."
  },
  {
    iconType: "handshake",
    label: "Engineering Support",
    subtext: "Work directly with our R&D team to customize BMS parameters for extreme climates like West Africa or South Asia."
  },
  {
    iconType: "check",
    label: "Certification Assistance",
    subtext: "We supply the exact CE, UL, and UN38.3 documentation you need to clear customs at any major international port."
  }
];

export const contactFaqs = [
  {
    question: "What happens after I submit this form?",
    answer: "Our manufacturing team reviews your requirements within 24 hours. We will contact you from your nearest regional office to discuss specifications, volume, and provide a detailed manufacturing proposal."
  },
  {
    question: "Do you work with new distributors?",
    answer: "Absolutely. We partner with distributors of all sizes – from emerging brands to established players. Minimum order quantities vary by product; we will help you find a configuration that fits your business."
  },
  {
    question: "How do you ensure quality?",
    answer: "We control production entirely in our ISO 9001:2025 certified facility. Every product undergoes in‑process inspections, final testing, and full documentation before shipping. Certifications (CE, UL, UN38.3) are validated on‑site."
  }
];

// ==============================
// PRODUCT SOLUTION LINKS
// ==============================
export const solutionLinks = [
  { slug: "storage-batteries", name: "Battery Storage" },
  { slug: "solar-inverters", name: "Hybrid Inverters" },
  { slug: "portable-power-stations", name: "Portable Power Stations" },
  { slug: "electric-mobility", name: "E‑Mobility" },
  { slug: "power-banks", name: "Power Banks" },
  { slug: "phone-screen-protectors", name: "Phone Screen Protectors" },
];

export const solutionConfigs = {
  "storage-batteries": {
    title: "Battery Storage Solutions",
    image: "/homeImg/energyPlatformImage01.jpg",
    filterCategory: "battery",
    description: "Grade-A LFP battery manufacturer. High-capacity energy storage systems (ESS) for residential and commercial backup. Engineered for long-cycle life in high-temperature regions.",
    keywords: "LFP battery manufacturer, wholesale solar batteries, LiFePO4 storage, industrial ESS, Grade-A prismatic cells, solar battery supplier Nigeria, battery storage Pakistan"
  },
  "solar-inverters": {
    title: "Smart Hybrid Inverters",
    filterCategory: "inverter",
    image: "/homeImg/energyPlatformImage002.jpg",
    description: "Smart hybrid and off-grid solar inverters. High-efficiency MPPT power conversion tailored for unstable grid environments and remote energy projects.",
    keywords: "solar inverter manufacturer, hybrid inverter wholesale, off-grid inverter OEM, MPPT controller supply, solar power conversion, inverter distributor Africa, smart grid inverter"
  },
  "portable-power-stations": {
    title: "Portable Power Stations",
    filterCategory: "portable-power",
    image: "/homeImg/energyPlatformImage003.jpg",
    description: "Rugged, high-capacity portable power stations. Fast-charging solar generators for emergency backup, mobile clinics, and off-grid industrial use.",
    keywords: "portable power station wholesale, solar generator manufacturer, lithium power station bulk, outdoor energy supply, mobile backup power OEM, portable energy for Africa"
  },
  "electric-mobility": {
    title: "E-Mobility Solutions",
    filterCategory: "electric-mobility",
    image: "/homeImg/energyPlatformImage04.jpg",
    description: "Heavy-duty electric motorcycles and IP65-rated battery swap systems. Integrated powertrain engineering for rugged logistics fleets and urban mobility.",
    keywords: "electric motorcycle manufacturer, e-mobility fleet supply, EV powertrain OEM, IP65 scooter battery, electric vehicle supply chain, e-bike wholesale, Africa EV mobility"
  },
  "power-banks": {
    title: "Premium Power Banks",
    filterCategory: "power-bank",
    image: "/homeImg/energyPlatformImage005.jpg",
    description: "High-density PD fast-charging power banks. Wholesale portable chargers for massive retail networks, telecom providers, and corporate branding.",
    keywords: "power bank wholesale, PD fast charger supplier, high capacity power bank OEM, mobile charger bulk, magnetic power bank manufacturer, telecom power solutions"
  },
  "phone-screen-protectors": {
    title: "Screen Protection Solutions",
    filterCategory: "phone-screen-protector",
    image: "/homeImg/energyPlatformImage06.jpg",
    description: "9H tempered glass and military-grade film protectors. High-margin wholesale mobile accessories for global tech distributors and retail chains.",
    keywords: "phone screen protector wholesale, tempered glass manufacturer, 9H screen guard bulk, anti-spy screen protector OEM, mobile accessory supply chain, tempered glass supplier China"
  }
};

export const headerData = {
  trustBadge: "ISO 9001:2025 Certified Manufacturer",
  phone: "+86 130 6085 0617",
  phoneRaw: "+8613060850617",
  email: "sales@joyhand.com",
  ctaText: "Get a Quote",
  mobileCtaText: "Request a Quote"
};

export const cookieData = {
  title: "Privacy Settings",
  description: "We use essential and analytics cookies to optimize your manufacturing sourcing experience. By continuing, you agree to our specialized data protocols.",
  policyText: "Review Policy",
  acceptText: "Accept & Continue"
};
