// ==============================
// NAVIGATION LINKS
// ==============================
export const links = [
  { name: "About Us", href: "/about-us" },
  {
    name: "Products",
    href: "/products",
    subLinks: [
      { name: "Solar Batteries", href: "/products/category/solar-batteries" },
      { name: "Solar Inverters", href: "/products/category/solar-inverters" },
      { name: "Portable Power Stations", href: "/products/category/portable-power-stations" },
      { name: "Electric Motorcycles & Scooters", href: "/products/category/electric-motorcycles" },
      { name: "Power Banks", href: "/products/category/power-banks" },
      { name: "Solar Panels & Accessories", href: "/products/category/solar-accessories" }
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
  { id: 5, name: "evps", logo: "/homeImg/parner05.jpg" },
  { id: 6, name: "Bodo", logo: "/homeImg/partner06.jpg" },
  { id: 7, name: "jinwantong", logo: "/homeImg/partner07.jpg" },
  { id: 8, name: "jike", logo: "/homeImg/partner08.jpg" },
  { id: 9, name: "meinaid", logo: "/homeImg/partner09.jpg" },
  { id: 10, name: "jingxin", logo: "/homeImg/partner10.jpg" }
];

// ==============================
// FOOTER DATA
// ==============================
export const footerData = {
  brandDescription: "JoyHand is a direct OEM/ODM factory manufacturer of LiFePO4 energy storage systems, hybrid solar inverters, solar panels, streetlights, and balance-of-system hardware accessories, alongside electric scooters and cargo motorcycles. Built to ISO 9001:2015, UL, and CE standards, we engineer reliable hardware for distributors across the Americas, Europe, Africa, and Asia.",
  socialLinks: [
    { name: "YouTube", url: "https://www.youtube.com/@joyhandenergy", icon: "youtube" },
    { name: "TikTok", url: "https://www.tiktok.com/@joyhandenergy", icon: "tiktok" },
    { name: "Facebook", url: "https://www.facebook.com/joyhandenergy", icon: "facebook" },
    { name: "Instagram", url: "https://www.instagram.com/joyhandenergy/", icon: "instagram" },
    { name: "Pinterest", url: "https://www.pinterest.com/joyhandenergy/", icon: "pinterest" }
  ],
  solutions: [
    { name: "Solar Batteries", path: "/products/category/solar-batteries" },
    { name: "Solar Inverters", path: "/products/category/solar-inverters" },
    { name: "Portable Power Stations", path: "/products/category/portable-power-stations" },
    { name: "Electric Motorcycles & Scooters", path: "/products/category/electric-motorcycles" },
    { name: "Power Banks", path: "/products/category/power-banks" },
    { name: "Solar Panels & Accessories", path: "/products/category/solar-accessories" }
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
    description: "Launch your own brand with our precision-engineered factory lines. We manage compliance and export logistics to global ports.",
    extra: "Scale your business with white-label LFP batteries, electric scooters, and power stations. We act as your dedicated manufacturing partner, ensuring products are built to CE, UL, and UN38.3 standards for market entry.",
    features: [
      "Custom branding & packaging",
      "Factory direct export",
      "Grade A LFP cells",
      "B2B MOQs for distributors"
    ],
    image: "/homeImg/businessModelImage02.jpg",
    imageAlt: "OEM production line for solar inverters and battery packs"
  },
  {
    id: "odm",
    tag: "ODM / CUSTOM ENGINEERING",
    title: "Engineering for Your Market.",
    description: "Our engineers design custom battery packs and vehicle chassis specifically for your target region's climate and grid conditions.",
    extra: "Full-stack development: BMS logic, thermal testing, and structural design. Work with 30+ in-house engineers to build exclusive hardware for your specific market—whether that requires high-heat resilience, voltage surge protection, or rugged scooter and motorcycle chassis.",
    features: [
      "Custom BMS engineering",
      "Built for diverse climates",
      "Exclusive tooling & IP protection",
      "Engineer-to-engineer support"
    ],
    image: "/homeImg/businessModelImage003.jpg"
  },
  {
    id: "b2b",
    tag: "B2B WHOLESALE",
    title: "Stock & Resell. Skip Middlemen.",
    description: "Grow your distribution business with factory-direct wholesale pricing.",
    extra: "Choose from our standard range of LFP storage, hybrid inverters, electric scooters, and power stations. We are the direct supplier for global importers, offering volume discounts and technical support.",
    features: [
      "ISO 9001:2015 standard production",
      "Low wholesale MOQs",
      "Direct factory pricing",
      "Customs clearance assistance"
    ],
    image: "/homeImg/businessModelImage04.jpg",
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
    title: "Built to CE & UL Specifications",
    preview: "Global market compliance",
    description: "Our products are manufactured to meet international safety requirements. We build to your target market's certifications."
  },
  {
    id: "un383",
    title: "UN38.3 Logistics Compliance",
    preview: "Safe sea & air transport",
    description: "Full UN38.3 & MSDS test summaries provided for seamless ocean container clearance across US, African, and Asian ports."
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
    desc: "Direct container shipping from our Guangzhou and Shenzhen factory docks to major commercial ports in the Americas, Africa, Europe, and Asia."
  },
  {
    title: "Customs Documentation Support",
    desc: "Our team manages export compliance and country-specific forms to avoid port delays."
  },
  {
    title: "Predictable Lead Times",
    desc: "Strict production schedules ensure your stock arrives on time."
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
    slug: "solar-batteries",
    image: "/homeImg/energyPlatformImage01.jpg",
    desc: "Wall-mount and rack-mounted batteries for homes and businesses.",
    sourceNote: "Factory Direct"
  },
  {
    id: 2,
    title: "Solar Hybrid Inverters",
    slug: "solar-inverters",
    image: "/homeImg/energyPlatformImage002.jpg",
    desc: "Pure sine wave inverters with smart grid switching.",
    sourceNote: "ISO Standards"
  },
  {
    id: 3,
    title: "Portable Power Stations",
    slug: "portable-power-stations",
    image: "/homeImg/energyPlatformImage003.jpg",
    desc: "Rugged lithium generators for blackouts and outdoor use.",
    sourceNote: "OEM Ready"
  },
  {
    id: 4,
    title: "Electric Scooters & Motorcycles",
    slug: "electric-motorcycles",
    image: "/homeImg/energyPlatformImage04.jpg",
    desc: "UL 2272 & DOT-compliant commuter scooters, 200kg+ commercial cargo EVs, and sub-30s swappable dual-battery fleets.",
    sourceNote: "E-Mobility"
  },
  {
    id: 5,
    title: "Solar Panels & Accessories",
    slug: "solar-accessories",
    image: "/homeImg/energyPlatformImage06.jpg",
    desc: "Wholesale monocrystalline solar panels and tech accessories.",
    sourceNote: "Accessories"
  },
  {
    id: 6,
    title: "PD Fast Power Banks",
    slug: "power-banks",
    image: "/homeImg/energyPlatformImage005.jpg",
    desc: "High-capacity mobile chargers for retailers.",
    sourceNote: "Bulk Supply"
  }
];

// ==============================
// CTA BANNER DATA
// ==============================
export const ctaData = {
  title: "Ready to Manufacture for Your Market?",
  description: "Join global distributors and brands. Get factory-direct pricing and resilient hardware engineered to your market's standards. Start your manufacturing inquiry today."
};

// ==============================
// ABOUT PAGE DATA
// ==============================
export const aboutTeam = [
  {
    name: "Dui Wangpeng (Winper)",
    title: "CEO & Founder",
    image: "/aboutImg/joyhandleaders02.jpg",
    experience: "28+",
    bio: "Drives global strategy, ensuring direct, high-quality factory output for battery and mobility distributors worldwide."
  },
  {
    name: "Li Ronghua",
    title: "Chief Engineer Officer",
    image: "/aboutImg/joyhandleaders01.jpg",
    experience: "25+",
    bio: "Manages 30+ engineers to ensure product performance in extreme heat and diverse grid environments globally."
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
    description: "Proprietary testing for BMS thermal management and voltage surge handling across tropical, desert, and variable seasonal climates."
  },
  {
    iconType: "shield",
    title: "Batch Testing Audit",
    description: "100% pre-shipment inspection ensures zero failures in demanding off-grid or grid-tied environments."
  },
  {
    iconType: "globe",
    title: "Direct Global Logistics",
    description: "We manage container shipping and customs documentation directly from Guangzhou to your local port."
  }
];

export const aboutSectors = [
  {
    title: "LFP Battery Production",
    desc: "Direct factory assembly of high-capacity Lithium Iron Phosphate (LiFePO4) storage batteries using Grade-A prismatic cells. Engineered for residential solar backup, commercial ESS, and off-grid reliability.",
    features: ["Grade-A Prismatic Cells", "6000+ Deep Cycle Life", "Integrated Smart BMS", "Automotive Assembly Standards"],
    img: "/aboutImg/aboutProductimg01.jpg",
    tag: "Energy Storage",
    link: "/products/category/solar-batteries"
  },
  {
    title: "Solar Inverter Engineering",
    desc: "Pure sine wave hybrid solar inverters with intelligent sub-10ms grid switching and wide MPPT voltage tracking. Built to handle severe voltage drops and shield critical loads in unstable grid environments.",
    features: ["Pure Sine Wave Tech", "Smart Automatic Grid Switching", "98% Peak Conversion Efficiency", "Industrial Surge Protection"],
    img: "/aboutImg/aboutProductimg002.jpg",
    tag: "Power Electronics",
    link: "/products/category/solar-inverters"
  },
  {
    title: "Portable Power Stations",
    desc: "Heavy-duty portable lithium power stations and solar generators equipped with multi-region AC outlets, bi-directional fast recharging, and rugged structural enclosures for mobile backup and remote worksites.",
    features: ["Multi-Region Universal AC Outlets", "Bi-Directional Fast Recharging", "Heavy-Duty LiFePO4 Chemistry", "Custom OEM/ODM Private Labeling"],
    img: "/aboutImg/aboutProductimg3.jpg",
    tag: "Portable Energy",
    link: "/products/category/portable-power-stations"
  },
  {
    title: "High-Capacity Power Banks",
    desc: "High-volume OEM manufacturing of fast-charging USB-C PD power banks. Engineered with premium lithium-polymer and 21700 cells, delivering 20W to 100W Power Delivery for global electronics retail and telecom distributors.",
    features: ["USB-C PD 20W–100W Fast Charge", "Multi-Port Concurrent Output", "Multi-Layer Safety IC Protection", "Custom Retail-Ready Packaging"],
    img: "/aboutImg/aboutProductimg5.jpg",
    tag: "Consumer Tech",
    link: "/products/category/solar-accessories"
  },
  {
    title: "E-Mobility & EV Solutions",
    desc: "Full-vehicle OEM assembly and automotive-grade lithium battery packs for electric commuter scooters, delivery motorcycles, and cargo tricycles. Built to UL 2272, DOT, and EEC standards with reinforced 200kg+ payload frames and smart fleet telematics.",
    features: ["UL 2272 & DOT Ready", "Sub-30s Swappable Dual Battery", "200kg+ Heavy-Duty Chassis", "Custom US & Global OEM Branding"],
    img: "/aboutImg/aboutProductimg04.jpg",
    tag: "E-Mobility",
    link: "/products/category/electric-motorcycles"
  },
  {
    title: "Tech & Solar Accessories",
    desc: "Wholesale Tier-1 monocrystalline solar panels, commercial solar LED streetlights, pure copper PV interconnect cabling, and rugged accessories for consolidated container shipping and turnkey installations.",
    features: ["High-Efficiency Monocrystalline Panels", "Commercial Solar LED Streetlights", "Pure Copper Heavy-Duty Cabling", "Container-Consolidated Freight"],
    img: "/aboutImg/aboutProductimg6.jpg",
    tag: "Solar & Tech Accessories",
    link: "/products/category/solar-panels"
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
    description: "Reached 5,000+ electric motorcycles produced annually, establishing our early global export channels.",
    iconType: "chart"
  },
  {
    year: "2018",
    title: "Battery Storage Focus",
    description: "Integrated battery expertise into LiFePO4 storage and hybrid inverters for global distributors.",
    iconType: "lightning"
  },
  {
    year: "2026",
    title: "JoyHand Global",
    description: "Operating a fully integrated manufacturing hub in Guangzhou, supplying commercial distributors across the Americas, Africa, Europe, and Asia.",
    iconType: "shield"
  }
];

export const aboutTestimonials = [
  {
    quote: "JoyHand’s custom BMS logic solved our failure rates during grid surges. Direct factory pricing increased our margins.",
    author: "Ahmed Ibrahim",
    company: "CEO, Energy Distributor",
    image: "/aboutImg/aboutTestimonial01.jpg"
  },
  {
    quote: "Finding a reliable OEM for industrial power backups was easy with JoyHand. Their technical support is world-class.",
    author: "Kamal Hossain",
    company: "MD, Delta Power",
    image: "/aboutImg/aboutTestimonial02.jpg"
  },
  {
    quote: "Scaling off-grid solar required a partner who understands rugged environments. Their LFP systems are flawless.",
    author: "Samuel Mwangi",
    company: "Founder, Rift Solar",
    image: "/aboutImg/aboutTestimonial03.jpg"
  },
  {
    quote: "We scaled our electric motorcycle fleet relying entirely on their factory supply. Weatherproof batteries handle tough conditions flawlessly.",
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
    desc: "100% inline inspection. Our lab runs capacity grading and thermal stress tests on every wholesale batch before export.",
    iconType: "shield",
    tag: "Quality",
    bgImage: "/serviceImg/servicequality1.jpg"
  },
  {
    title: "Container Logistics",
    desc: "We manage freight consolidation, export compliance, and port-to-port shipping to major commercial ports worldwide.",
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
    desc: "We manage customs clearance and export documentation for direct container freight to your target port.",
    iconType: "boat"
  }
];

export const serviceHighlights = [
  "CE Safety Tested",
  "ISO 9001:2015 Facility",
  "UL Compliant Products",
  "IEC 62619 Standard",
  "28+ Years Heritage",
  "50+ Global Markets Served",
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
    subtext: "We produce battery packs, e-motorcycles, and inverters engineered for regional electrical grids and terrain across the Americas, Africa, and Asia."
  },
  {
    iconType: "shield",
    label: "Quality Control Audit",
    subtext: "100% factory inspection. Every product is stress-tested before export to ensure reliability."
  },
  {
    iconType: "handshake",
    label: "Regional Support",
    subtext: "Our sales and engineering teams provide direct support across time zones in North America, Africa, and the Asia-Pacific."
  },
  {
    iconType: "check",
    label: "Customs Assistance",
    subtext: "We supply the CE, UL 1973, UN38.3, and MSDS documentation needed to clear customs at major international ports."
  }
];

export const contactFaqs = [
  {
    question: "What is the response time for inquiries?",
    answer: "Our team reviews manufacturing requirements within 24 hours. We will contact you from the nearest office to provide a custom proposal."
  },
  {
    question: "Do you supply B2B distributors?",
    answer: "Yes, we exclusively partner with importers, distributors, and brands. MOQs vary by product; we will help find a solution that fits your business."
  },
  {
    question: "How do you ensure export quality?",
    answer: "We control production according to ISO 9001:2015 standards. Every shipment undergoes full audit and documentation before leaving the port."
  }
];

// ==============================
// PRODUCT SOLUTION LINKS
// ==============================
export const solutionLinks = [
  { slug: "solar-batteries", name: "Solar Batteries" },
  { slug: "solar-inverters", name: "Hybrid Inverters" },
  { slug: "portable-power-stations", name: "Portable Power" },
  { slug: "electric-motorcycles", name: "Electric Motorcycles" },
  { slug: "power-banks", name: "Power Banks" },
  { slug: "solar-accessories", name: "Solar Accessories" },
];

export const solutionConfigs = {
  "solar-batteries": {
    pageTitle: "LiFePO4 Solar Battery Manufacturer | UL 1973, CE & Off-Grid ESS | JoyHand",
    metaDescription: "Direct factory OEM manufacturer of Grade-A LiFePO4 solar batteries (5kWh–100kWh+). Engineered for split-phase US systems, tropical African grids, and Asian commercial ESS.",
    canonicalUrl: "https://www.joyhand.com/products/category/solar-batteries",
    metaKeywords: ["LiFePO4 battery manufacturer", "solar batteries factory direct", "UL 1973 battery manufacturer", "rack mount battery OEM", "wall mount solar battery", "6000 cycle LFP battery", "commercial ESS manufacturer", "off-grid battery backup"],
    breadcrumbBadge: "SOLAR BATTERIES",
    h1Title: "Industrial LiFePO4 Storage Battery Manufacturer & OEM",
    heroSubtitle: "Grade-A prismatic LFP storage engineered for heavy daily cycling, extreme ambient temperatures, and seamless hybrid inverter sync across the Americas, Africa, Europe, and Asia.",
    title: "Wholesale LFP Battery Manufacturing",
    image: "/homeImg/energyPlatformImage01.jpg",
    filterCategory: "battery",
    description: "Grade-A prismatic LFP storage engineered for heavy daily cycling, extreme ambient temperatures, and seamless hybrid inverter sync across the Americas, Africa, Europe, and Asia.",
    keywords: "LiFePO4 battery manufacturer, solar batteries factory direct, UL 1973 battery manufacturer, rack mount battery OEM, wall mount solar battery, 6000 cycle LFP battery",
    intro: {
      heading: "Industrial LiFePO4 Solar Batteries: Built for High-Capacity Grids & Off-Grid Resilience",
      body: "From split-phase 120V/240V residential solar backup in North America to mission-critical telecom towers and commercial micro-grids combating daily load-shedding across Africa and South Asia, JoyHand Energy manufactures high-cycle Lithium Iron Phosphate (LiFePO4) energy storage systems. Operating from our 50,000m² ISO 9001:2015 certified Guangzhou production hub, we build wall-mounted packs, server-rack modules, and high-voltage commercial ESS units using 100% Grade-A prismatic cells. Each unit integrates proprietary smart BMS protection engineered for ambient temperatures up to 55°C, high-discharge surge demands, and 6,000+ cycles at 80% DoD. By sourcing factory direct, B2B distributors and EPC contractors secure competitive container pricing backed by full UL 1973, CE, and UN38.3 customs compliance documentation.",
      advantages: [
        {
          title: "Multi-Region Inverter Sync",
          desc: "Pre-configured CAN/RS485 firmware protocols communicate natively with Deye, Growatt, Victron, Schneider, and major international hybrid inverters."
        },
        {
          title: "High-Ambient Heat BMS",
          desc: "Proprietary multi-tier thermal throttling protects cells in unconditioned utility rooms and high-heat climates across Africa, the Middle East, and South Asia."
        },
        {
          title: "Commercial Micro-Grid Scalability",
          desc: "Parallel modular architecture from 5.12kWh residential units up to 100kWh+ high-voltage commercial ESS arrays for hospitals, estates, and industrial facilities."
        },
        {
          title: "Customs & Port Certification",
          desc: "Full UN38.3 dangerous goods reports, CE, and UL 1973 compliance documentation provided for seamless container clearance at major seaports."
        }
      ]
    },
    topContent: `
      <h2>Industrial LiFePO4 Solar Batteries: Built for High-Capacity Grids & Off-Grid Resilience</h2>
      <p>From split-phase 120V/240V residential solar installations in North America to mission-critical telecom towers and commercial micro-grids combating daily load-shedding across Africa and South Asia, the demand for robust, deep-cycle energy storage requires purpose-built engineering. JoyHand Energy’s proprietary series of Lithium Iron Phosphate (LiFePO4/LFP) wall-mounted and server-rack batteries are specifically designed to withstand extreme ambient temperatures, frequent deep-discharge cycles, and intense voltage fluctuations. By sourcing directly from our 50,000m² ISO 9001:2015 certified manufacturing facility in Guangzhou, distributors and EPC contractors bypass trading middlemen to scale their regional networks reliably. Every battery pack undergoes rigorous 100% inline thermal stress testing, cell-matching, and capacity grading, ensuring your end-customers receive dependable hardware that lasts well beyond its 6000-cycle warranty.</p>
    `,
    bottomContent: `
      <h2>Why Partner with JoyHand for LFP Energy Storage?</h2>
      <ul>
        <li><strong>Multi-Region Inverter Sync:</strong> Pre-configured CAN and RS485 communication protocols sync seamlessly with Deye, Growatt, Victron, Schneider, and Solis inverters, eliminating manual voltage programming errors by local installers.</li>
        <li><strong>High-Ambient Heat Protection:</strong> Our custom BMS architecture includes proprietary thermal throttling, ensuring the battery core remains stable even in non-air-conditioned utility rooms common across tropical and desert regions (up to 55°C ambient).</li>
        <li><strong>Full Sea Freight & Customs Compliance:</strong> We provide complete UN38.3, CE, and UL testing documentation with MSDS, dramatically accelerating port customs clearance times for ocean container shipments.</li>
        <li><strong>Modular Commercial Scalability:</strong> Our high-voltage rack systems and modular low-voltage wall units support advanced parallel stringing, capable of scaling from a 5.12kWh residential backup to a 100kWh+ commercial micro-grid.</li>
      </ul>
      <h2>Distributor & EPC FAQ</h2>
      <p><strong>Q: What is the typical lead time for a 40HQ container of LFP batteries?</strong><br/>A: Standard production lead time for full container orders is typically 20–30 days depending on specific voltage configurations and custom OEM branding requirements. For accurate manufacturing and shipping schedules to your destination port, contact our factory sourcing team.</p>
      <p><strong>Q: Can we apply our own brand to your battery chassis (OEM)?</strong><br/>A: Yes. Over 60% of our production volume is OEM/ODM. We offer laser-engraving, custom sheet metal color matching, branded carton packaging, and bespoke firmware interfaces that load your company logo on the LCD display.</p>
    `,
    seoContent: `
      <h2>Industrial LiFePO4 Solar Batteries: Built for High-Capacity Grids & Off-Grid Resilience</h2>
      <p>From split-phase 120V/240V residential solar installations in North America to mission-critical telecom towers and commercial micro-grids combating daily load-shedding across Africa and South Asia, the demand for robust, deep-cycle energy storage requires purpose-built engineering. JoyHand Energy’s proprietary series of Lithium Iron Phosphate (LiFePO4/LFP) wall-mounted and server-rack batteries are specifically designed to withstand extreme ambient temperatures, frequent deep-discharge cycles, and intense voltage fluctuations. By sourcing directly from our 50,000m² ISO 9001:2015 certified manufacturing facility in Guangzhou, distributors and EPC contractors bypass trading middlemen to scale their regional networks reliably. Every battery pack undergoes rigorous 100% inline thermal stress testing, cell-matching, and capacity grading, ensuring your end-customers receive dependable hardware that lasts well beyond its 6000-cycle warranty.</p>
      <br/>
      <h2>Why Partner with JoyHand for LFP Energy Storage?</h2>
      <ul>
        <li><strong>Multi-Region Inverter Sync:</strong> Pre-configured CAN and RS485 communication protocols sync seamlessly with Deye, Growatt, Victron, Schneider, and Solis inverters, eliminating manual voltage programming errors by local installers.</li>
        <li><strong>High-Ambient Heat Protection:</strong> Our custom BMS architecture includes proprietary thermal throttling, ensuring the battery core remains stable even in non-air-conditioned utility rooms common across tropical and desert regions (up to 55°C ambient).</li>
        <li><strong>Full Sea Freight & Customs Compliance:</strong> We provide complete UN38.3, CE, and UL testing documentation with MSDS, dramatically accelerating port customs clearance times for ocean container shipments.</li>
        <li><strong>Modular Commercial Scalability:</strong> Our high-voltage rack systems and modular low-voltage wall units support advanced parallel stringing, capable of scaling from a 5.12kWh residential backup to a 100kWh+ commercial micro-grid.</li>
      </ul>
      <h2>Distributor & EPC FAQ</h2>
      <p><strong>Q: What is the typical lead time for a 40HQ container of LFP batteries?</strong><br/>A: Standard production lead time for full container orders is typically 20–30 days depending on specific voltage configurations and custom OEM branding requirements. For accurate manufacturing and shipping schedules to your destination port, contact our factory sourcing team.</p>
      <p><strong>Q: Can we apply our own brand to your battery chassis (OEM)?</strong><br/>A: Yes. Over 60% of our production volume is OEM/ODM. We offer laser-engraving, custom sheet metal color matching, branded carton packaging, and bespoke firmware interfaces that load your company logo on the LCD display.</p>
    `
  },
  "solar-inverters": {
    pageTitle: "Hybrid Solar Inverter Manufacturer | Split-Phase & Off-Grid | JoyHand",
    metaDescription: "Direct factory OEM manufacturer of pure sine wave hybrid solar inverters (3kW–12kW+). Dual MPPT, split-phase 120V/240V, and high-surge load handling for global grids.",
    canonicalUrl: "https://www.joyhand.com/products/category/solar-inverters",
    metaKeywords: ["hybrid solar inverter manufacturer", "off-grid inverter factory", "split-phase solar inverter", "dual MPPT inverter", "pure sine wave inverter supplier", "parallel inverter OEM"],
    breadcrumbBadge: "HYBRID INVERTERS",
    h1Title: "Heavy-Duty Hybrid Inverters: Split-Phase & Unstable Grid Resilience",
    heroSubtitle: "Direct factory OEM hybrid and off-grid solar inverters. Engineered for split-phase US residential systems and extreme grid fluctuations across Africa and South Asia.",
    title: "Wholesale Hybrid Inverter Production",
    filterCategory: "inverter",
    image: "/homeImg/energyPlatformImage002.jpg",
    description: "Direct factory OEM hybrid and off-grid solar inverters. Engineered for split-phase US residential systems and extreme grid fluctuations across Africa and South Asia.",
    keywords: "hybrid solar inverter manufacturer, off-grid inverter factory, split-phase solar inverter, dual MPPT inverter, pure sine wave inverter supplier, parallel inverter OEM",
    intro: {
      heading: "Heavy-Duty Solar Hybrid Inverters: Built for Split-Phase Systems & Extreme Grids",
      body: "In regions where municipal grids are unpredictable or feature split-phase architecture, off-the-shelf consumer inverters fail prematurely. JoyHand Energy manufactures commercial-grade Hybrid and Off-Grid Solar Inverters engineered with heavy-duty pure copper transformers and over-specced pure sine wave circuitry that absorb massive motor surges from water pumps, air conditioners, and agricultural machinery without tripping. Supporting split-phase 120V/240V for the Americas as well as 220V/230V 50Hz single- and three-phase for Africa, the Middle East, and Asia, our systems feature sub-10ms automatic grid bypass and built-in generator auto-start contacts to ensure continuous power during rolling blackouts.",
      advantages: [
        {
          title: "Surge Load Architecture",
          desc: "Industrial-grade AC protection and heavy copper chokes absorb chaotic voltage spikes and 3x inductive motor surges."
        },
        {
          title: "Plug-and-Play BMS",
          desc: "Pre-flashed communication protocols natively sync with LiFePO4 battery management systems."
        },
        {
          title: "True Parallel Linking",
          desc: "Link up to 9 units in parallel or 3-phase setups, delivering multi-megawatt off-grid scalability."
        }
      ]
    },
    topContent: `
      <h2>Heavy-Duty Solar Hybrid Inverters Built for Unstable Grids & Split-Phase Architecture</h2>
      <p>In regions where the municipal grid is unpredictable, an off-the-shelf inverter will fail prematurely. JoyHand Energy's line of Hybrid and Off-Grid Solar Inverters are fundamentally different. Engineered with heavy-duty copper transformers and over-specced pure sine wave circuitry, our inverters absorb massive surge loads from water pumps, industrial air conditioners, and heavy machinery without tripping. Supporting split-phase 120V/240V for North American installations as well as 220V/230V 50Hz single- and three-phase configurations for African, Asian, and European distribution, we supply massive volumes of IP54-rated outdoor inverters and high-frequency parallel units to EPC contractors, real estate developers, and solar distributors worldwide. Our proprietary grid-bypass logic senses voltage drops in milliseconds, switching to battery power so fast that sensitive electronics never reboot.</p>
    `,
    bottomContent: `
      <h2>The JoyHand Engineering Advantage</h2>
      <ul>
        <li><strong>Surge Protection Architecture:</strong> Designed specifically for fluctuating grids, our internal AC breakers handle chaotic voltage spikes, protecting the sensitive dual-MPPT solar charge controllers inside.</li>
        <li><strong>Plug-and-Play LFP Communication:</strong> Every JoyHand inverter is pre-flashed with communication protocols that natively talk to our LiFePO4 battery BMS, maximizing charging efficiency and completely eliminating manual voltage configuration errors by local installers.</li>
        <li><strong>True Parallel & 3-Phase Capability:</strong> Need to power a hospital, estate, or agricultural facility? Distribute our inverters and link up to 9 units in parallel or 3-phase configurations, unlocking massive multi-megawatt off-grid power.</li>
      </ul>
      <h2>Distributor FAQ</h2>
      <p><strong>Q: Do these inverters support generator auto-start functionality?</strong><br/>A: Yes, all our hybrid models feature built-in dry contacts. When the lithium battery bank drops below a customizable threshold (e.g., 20%), the inverter automatically sends a signal to start the diesel generator, creating a flawless tri-power hybrid system.</p>
      <p><strong>Q: Are your inverters capable of feeding power back into the grid (Net Metering)?</strong><br/>A: We offer both strictly off-grid models (zero export) and fully certified grid-tied hybrid models depending on your local regulatory environment.</p>
    `,
    seoContent: `
      <h2>Heavy-Duty Solar Hybrid Inverters Built for Unstable Grids & Split-Phase Architecture</h2>
      <p>In regions where the municipal grid is unpredictable, an off-the-shelf inverter will fail prematurely. JoyHand Energy's line of Hybrid and Off-Grid Solar Inverters are fundamentally different. Engineered with heavy-duty copper transformers and over-specced pure sine wave circuitry, our inverters absorb massive surge loads from water pumps, industrial air conditioners, and heavy machinery without tripping. Supporting split-phase 120V/240V for North American installations as well as 220V/230V 50Hz single- and three-phase configurations for African, Asian, and European distribution, we supply massive volumes of IP54-rated outdoor inverters and high-frequency parallel units to EPC contractors, real estate developers, and solar distributors worldwide. Our proprietary grid-bypass logic senses voltage drops in milliseconds, switching to battery power so fast that sensitive electronics never reboot.</p>
      <br/>
      <h2>The JoyHand Engineering Advantage</h2>
      <ul>
        <li><strong>Surge Protection Architecture:</strong> Designed specifically for fluctuating grids, our internal AC breakers handle chaotic voltage spikes, protecting the sensitive dual-MPPT solar charge controllers inside.</li>
        <li><strong>Plug-and-Play LFP Communication:</strong> Every JoyHand inverter is pre-flashed with communication protocols that natively talk to our LiFePO4 battery BMS, maximizing charging efficiency and completely eliminating manual voltage configuration errors by local installers.</li>
        <li><strong>True Parallel & 3-Phase Capability:</strong> Need to power a hospital, estate, or agricultural facility? Distribute our inverters and link up to 9 units in parallel or 3-phase configurations, unlocking massive multi-megawatt off-grid power.</li>
      </ul>
      <h2>Distributor FAQ</h2>
      <p><strong>Q: Do these inverters support generator auto-start functionality?</strong><br/>A: Yes, all our hybrid models feature built-in dry contacts. When the lithium battery bank drops below a customizable threshold (e.g., 20%), the inverter automatically sends a signal to start the diesel generator, creating a flawless tri-power hybrid system.</p>
      <p><strong>Q: Are your inverters capable of feeding power back into the grid (Net Metering)?</strong><br/>A: We offer both strictly off-grid models (zero export) and fully certified grid-tied hybrid models depending on your local regulatory environment.</p>
    `
  },
  "portable-power-stations": {
    pageTitle: "Portable Power Station OEM Factory | LiFePO4 Solar Generators | JoyHand",
    metaDescription: "Factory-direct OEM manufacturing of LiFePO4 portable power stations (300W–3600W). Multi-region AC outlets (US/UK/EU/Universal) & 2h fast AC recharge.",
    canonicalUrl: "https://www.joyhand.com/products/category/portable-power-stations",
    metaKeywords: ["portable power station OEM", "LiFePO4 solar generator factory", "emergency backup power manufacturer", "off-grid power supplier", "portable lithium battery pack"],
    breadcrumbBadge: "PORTABLE POWER",
    h1Title: "Portable Power Station & Solar Generator Manufacturer",
    heroSubtitle: "Direct factory OEM portable power stations (300W–3600W). Multi-region AC outlets and rapid dual-inverter charging for off-grid operations and emergency backup across the Americas, Africa, and Asia.",
    title: "Portable Power Station OEM Manufacturing",
    filterCategory: "portable-power",
    image: "/homeImg/energyPlatformImage003.jpg",
    description: "Direct factory OEM portable power stations (300W–3600W). Multi-region AC outlets and rapid dual-inverter charging for off-grid operations and emergency backup across the Americas, Africa, and Asia.",
    keywords: "portable power station OEM, LiFePO4 solar generator factory, emergency backup power manufacturer, off-grid power supplier",
    intro: {
      heading: "Heavy-Duty Portable Power Stations: Engineered for Extreme Field & Emergency Backup",
      body: "As remote operations and off-grid demands grow, JoyHand Energy manufactures industrial-grade LiFePO4 and Lithium-Ion Portable Power Stations designed to run field clinics, telecommunications gear, work sites, and households through extended blackouts. Engineered with advanced dual-inverter architectures for extreme fast-charging from AC wall sockets or direct solar arrays in under 2 hours, our units deliver clean, fume-free, high-wattage power anywhere in the world.",
      advantages: [
        {
          title: "Simultaneous Pass-Through",
          desc: "Charge the power station via solar or AC while simultaneously powering heavy inductive loads."
        },
        {
          title: "Commercial Safety Standards",
          desc: "Automotive-grade cells encased in fire-retardant, drop-tested ABS+PC shells with UN38.3 certification."
        },
        {
          title: "Universal Multi-Outlet",
          desc: "US (120V), UK/EU (230V), and Universal AC outlets paired with 100W USB-C PD high-speed ports."
        }
      ]
    },
    topContent: `
      <h2>Portable Power Stations for Off-Grid and Emergency Use</h2>
      <p>As remote work and outdoor logistics boom, the market for massive-capacity portable power is experiencing exponential growth. JoyHand Energy's Lithium-Ion and LiFePO4 Portable Power Stations are not basic camping accessories—they are industrial-grade solar generators engineered to keep mobile clinics, remote construction sites, and entire households running during extended power failures. Unlike consumer-grade units that take 8 hours to charge, our advanced dual-inverter architecture allows for extreme fast-charging from an AC wall outlet or direct solar panel input in under 2 hours. We supply these units in bulk to retail chains, disaster relief NGOs, and telecom field crews across the Americas, Africa, Europe, and Asia, offering a rugged, fume-free alternative to traditional gasoline generators.</p>
    `,
    bottomContent: `
      <h2>Key Market Advantages</h2>
      <ul>
        <li><strong>Simultaneous Pass-Through Charging:</strong> The internal BMS allows users to charge the power station via solar while simultaneously powering AC heavy loads or medical equipment.</li>
        <li><strong>Commercial Safety Standards:</strong> Built with automotive-grade lithium cells, our units are wrapped in fire-retardant, drop-resistant ABS+PC shells. They possess full UN38.3 certification for safe international freight.</li>
        <li><strong>Universal Outlet Designs:</strong> Configured for international markets with US (120V), UK/EU (230V), and Universal multi-pin AC socket configurations, paired with 100W USB-C PD ports for modern electronics.</li>
      </ul>
      <h2>Distributor FAQ</h2>
      <p><strong>Q: Can these replace a small gasoline generator?</strong><br/>A: Yes. A 2000W Joyhand power station can comfortably run full-size refrigerators, power tools, and medical CPAP machines without the noise, maintenance, or toxic fumes of a petrol generator.</p>
    `,
    seoContent: `
      <h2>Portable Power Stations for Off-Grid and Emergency Use</h2>
      <p>As remote work and outdoor logistics boom, the market for massive-capacity portable power is experiencing exponential growth. JoyHand Energy's Lithium-Ion and LiFePO4 Portable Power Stations are not basic camping accessories—they are industrial-grade solar generators engineered to keep mobile clinics, remote construction sites, and entire households running during extended power failures. Unlike consumer-grade units that take 8 hours to charge, our advanced dual-inverter architecture allows for extreme fast-charging from an AC wall outlet or direct solar panel input in under 2 hours. We supply these units in bulk to retail chains, disaster relief NGOs, and telecom field crews across the Americas, Africa, Europe, and Asia, offering a rugged, fume-free alternative to traditional gasoline generators.</p>
      <br/>
      <h2>Key Market Advantages</h2>
      <ul>
        <li><strong>Simultaneous Pass-Through Charging:</strong> The internal BMS allows users to charge the power station via solar while simultaneously powering AC heavy loads or medical equipment.</li>
        <li><strong>Commercial Safety Standards:</strong> Built with automotive-grade lithium cells, our units are wrapped in fire-retardant, drop-resistant ABS+PC shells. They possess full UN38.3 certification for safe international freight.</li>
        <li><strong>Universal Outlet Designs:</strong> Configured for international markets with US (120V), UK/EU (230V), and Universal multi-pin AC socket configurations, paired with 100W USB-C PD ports for modern electronics.</li>
      </ul>
      <h2>Distributor FAQ</h2>
      <p><strong>Q: Can these replace a small gasoline generator?</strong><br/>A: Yes. A 2000W Joyhand power station can comfortably run full-size refrigerators, power tools, and medical CPAP machines without the noise, maintenance, or toxic fumes of a petrol generator.</p>
    `
  },
  "electric-motorcycles": {
    pageTitle: "Electric Scooter & Motorcycle OEM Manufacturer | UL 2272 & DOT Ready | JoyHand",
    metaDescription: "Direct factory manufacturer of UL 2272 & DOT-compliant commuter scooters, 200kg+ commercial delivery e-motorcycles, and swappable battery systems for US, European, African & Asian markets.",
    canonicalUrl: "https://www.joyhand.com/products/category/electric-motorcycles",
    metaKeywords: ["electric scooter manufacturer", "UL 2272 electric scooter OEM", "DOT electric motorcycle factory", "commercial delivery scooter supplier", "swappable battery e-motorcycle", "private label electric scooter USA", "fleet EV manufacturer", "72V EV battery pack OEM", "cargo electric tricycle factory"],
    breadcrumbBadge: "E-SCOOTERS & MOTORCYCLES",
    h1Title: "Electric Scooter, Motorcycle & Commercial Fleet EV Manufacturer",
    heroSubtitle: "UL 2272 & DOT-compliant urban commuter scooters for US retailers, alongside heavy-duty 200kg+ cargo motorcycles and swappable battery systems engineered for delivery fleets across the Americas, Europe, Africa, and Asia.",
    title: "Electric Scooter, Motorcycle & Commercial EV Manufacturer",
    filterCategory: "electric-mobility",
    image: "/homeImg/energyPlatformImage04.jpg",
    description: "UL 2272 & DOT-compliant urban commuter scooters for US retailers, alongside heavy-duty 200kg+ cargo motorcycles and swappable battery systems engineered for delivery fleets across the Americas, Europe, Africa, and Asia.",
    keywords: "electric scooter manufacturer, UL 2272 electric scooter OEM, DOT electric motorcycle factory, commercial delivery scooter supplier, swappable battery e-motorcycle, private label electric scooter USA, fleet EV manufacturer, 72V EV battery pack OEM, cargo electric tricycle factory",
    intro: {
      heading: "UL-Certified E-Scooters & Commercial Fleet Powertrains: Factory-Direct OEM Production",
      body: "Light electric vehicles must be engineered for their operational reality. In the United States and North American retail markets, safety and road compliance come first—specifically UL 2272 electrical system safety, UL 2271 battery certification (mandated by CPSC and NYC Local Law 39), FCC Part 15 electronic shielding, and DOT/NHTSA street-legal lighting and braking. Concurrently, across Latin America, Europe, Africa, and South Asia, commercial courier fleets and e-boda boda taxi operators demand extreme structural endurance—featuring 200kg+ payload chassis, sub-30-second swappable dual-battery systems, EEC/COC road homologation, and IP67 waterproof sealed powertrains that shrug off monsoon rains, rough roads, and high ambient heat. JoyHand Energy operates an integrated 50,000 m² manufacturing plant in Guangzhou, building complete turnkey vehicles and proprietary lithium powertrains for global brands, fleet operators, and distributors.",
      advantages: [
        {
          title: "UL 2272 & DOT Compliance for US Markets",
          desc: "Engineered to satisfy strict US CPSC and municipal fire safety codes (UL 2272 / UL 2271), FCC Part 15 shielding, and DOT/NHTSA street-legal lighting, dual hydraulic disc brakes + E-ABS, and 17-digit VIN stamping."
        },
        {
          title: "EEC & CE Homologation for Europe",
          desc: "Full factory documentation for European Whole Vehicle Type-Approval (EU 168/2013), Certificate of Conformity (COC) for L1e-B/L3e categories, EN 17128 compliance, and programmable 25km/h speed limiters."
        },
        {
          title: "Sub-30s Swappable Dual-Battery Architecture",
          desc: "Universal quick-swap battery docks eliminate charging downtime, keeping commercial delivery couriers and passenger taxi fleets in continuous 24/7 revenue operation."
        },
        {
          title: "200kg+ Heavy-Payload Chassis & Suspension",
          desc: "Robotically welded high-tensile carbon steel frames with dual heavy-duty hydraulic coil springs, engineered for rough, potholed, and unpaved terrain without chassis fatigue."
        },
        {
          title: "All-Weather IP67 Waterproof Powertrain",
          desc: "Laser-welded aluminum battery enclosures and sealed brushless hub/mid-drive motors built for flooded street wading, torrential rains, high dust, and ambient heat up to 55°C."
        },
        {
          title: "Turnkey US & Multi-Region OEM Branding",
          desc: "Private-label customization from custom silk-screen liveries and branded LCD dash startup screens to ISTA 3A drop-tested retail packaging with bilingual manuals, UPC barcodes, and EEC/CE/DOT certificates."
        }
      ]
    },
    topContent: `
      <h2>UL-Certified E-Scooters & Commercial Fleet Powertrains: Factory-Direct OEM Production</h2>
      <p>The global transition to light electric mobility requires vehicles purpose-built for distinct regulatory and physical environments. For North American brands, retail distributors, and Amazon sellers, compliance is non-negotiable: JoyHand manufactures electric commuter scooters and light urban motorcycles tested to UL 2272 and UL 2271 fire safety standards, meeting strict US Consumer Product Safety Commission (CPSC) and municipal fire codes (such as NYC Local Law 39). Every unit is built with smart multi-tier BMS protection, FCC Part 15 certified controllers, DOT-compliant LED safety illumination, and 17-digit VIN stamping for street-legal registration.</p>
      <p>Concurrently, for commercial fleet operators across Africa, South Asia, Europe, and Latin America, our heavy-duty delivery e-scooters, cargo tricycles, and utility motorcycles are engineered for relentless commercial uptime. Built on robotically welded high-tensile carbon steel frames rated for 200kg+ daily payload, they feature quick-swap dual-battery bays that eliminate charging downtime, and IP67 waterproof laser-welded battery enclosures that operate reliably through tropical monsoon downpours and flooded roadways. Whether you are launching a private-label scooter brand in the United States or deploying a 500-unit courier fleet in emerging markets, JoyHand provides direct factory engineering, wholesale pricing, and containerized logistics.</p>
    `,
    bottomContent: `
      <h2>The JoyHand Electric Mobility Engineering Advantage</h2>
      <ul>
        <li><strong>US Market Safety & Street Legality (UL 2272 & DOT):</strong> Purpose-built for US retail brands and city commuting. Features UL 2272 certified electrical systems, UL 2271 battery packs with smart thermal cut-offs, FCC Part 15 Class B compliance, FMVSS-grade LED headlights and turn signals, and dual hydraulic disc brakes with E-ABS.</li>
        <li><strong>European Homologation (EEC / COC & CE EN 17128):</strong> Export-ready documentation for European road registration under L1e-B and L3e classifications, including Certificate of Conformity (COC), CE marking, and switchable 25 km/h / 45 km/h speed governors.</li>
        <li><strong>Sub-30-Second Swappable Battery Architecture:</strong> Eliminate charging downtime for commercial logistics. Our dual-battery docks allow riders to swap depleted NMC or Grade-A LiFePO4 packs for fully charged units in under 30 seconds, maintaining 24/7 fleet productivity.</li>
        <li><strong>200kg+ Heavy-Duty Commercial Chassis:</strong> Built on heavy-gauge carbon steel frames with reinforced rear cargo racks and dual hydraulic coil-spring shock absorbers, engineered to withstand potholes, unpaved dirt tracks, and heavy commercial cargo.</li>
        <li><strong>Smart 4G IoT Fleet Telematics:</strong> Optional integrated 4G IoT modules and GPS tracking connect directly with your fleet management software for real-time battery SoC diagnostics, geo-fencing, speed control, remote lock/unlock, and anti-theft monitoring.</li>
        <li><strong>Multi-Voltage Global Charging:</strong> Intelligent auto-switching chargers compatible with 110V–120V 60Hz (US, Canada, Americas) and 220V–240V 50Hz (Europe, UK, Africa, Asia) grids with market-specific NEMA, Schuko, or BS 1363 plugs.</li>
      </ul>
      <h2>Distributor, Brand & Fleet FAQ</h2>
      <p><strong>Q: Can JoyHand manufacture private-label electric scooters for US retailers and Amazon sellers?</strong><br/>A: Yes. We provide end-to-end OEM/ODM private labeling for the US market, including custom frame colors, laser-engraved brand logos, customized LCD dashboard boot animations, ISTA 3A drop-tested retail packaging, bilingual English/Spanish user manuals, UPC barcodes, and full UL 2272 documentation.</p>
      <p><strong>Q: What certifications are provided for US and European road registration?</strong><br/>A: We provide complete compliance testing documentation: UL 2272 and UL 2271 battery test reports, FCC Part 15 certificates, and 17-digit VIN stamping for North America. For European distributors, we provide EEC/COC type-approval documentation for L1e-B (up to 45 km/h) and L3e motorcycle categories, alongside CE and EN 17128 certifications.</p>
      <p><strong>Q: Can you manufacture custom cargo boxes and delivery racks for logistics fleets?</strong><br/>A: Yes. We offer bespoke fleet configurations, including insulated food delivery boxes, heavy-duty rear steel cargo racks, passenger footrests for e-boda boda taxi fleets, custom corporate liveries, and centralized fleet battery swap stations.</p>
      <p><strong>Q: Can you supply custom battery packs and retrofits for electric tricycles and utility vehicles?</strong><br/>A: Absolutely. Our ODM engineering department custom-manufactures 48V, 60V, and 72V lithium battery packs tailored to specific electric tricycles, passenger tuk-tuks, golf carts, and light commercial haulers with IP67 waterproof laser-welded casings.</p>
    `,
    seoContent: `
      <h2>UL-Certified E-Scooters & Commercial Fleet Powertrains: Factory-Direct OEM Production</h2>
      <p>The global transition to light electric mobility requires vehicles purpose-built for distinct regulatory and physical environments. For North American brands, retail distributors, and Amazon sellers, compliance is non-negotiable: JoyHand manufactures electric commuter scooters and light urban motorcycles tested to UL 2272 and UL 2271 fire safety standards, meeting strict US Consumer Product Safety Commission (CPSC) and municipal fire codes (such as NYC Local Law 39). Every unit is built with smart multi-tier BMS protection, FCC Part 15 certified controllers, DOT-compliant LED safety illumination, and 17-digit VIN stamping for street-legal registration.</p>
      <p>Concurrently, for commercial fleet operators across Africa, South Asia, Europe, and Latin America, our heavy-duty delivery e-scooters, cargo tricycles, and utility motorcycles are engineered for relentless commercial uptime. Built on robotically welded high-tensile carbon steel frames rated for 200kg+ daily payload, they feature quick-swap dual-battery bays that eliminate charging downtime, and IP67 waterproof laser-welded battery enclosures that operate reliably through tropical monsoon downpours and flooded roadways. Whether you are launching a private-label scooter brand in the United States or deploying a 500-unit courier fleet in emerging markets, JoyHand provides direct factory engineering, wholesale pricing, and containerized logistics.</p>
      <br/>
      <h2>The JoyHand Electric Mobility Engineering Advantage</h2>
      <ul>
        <li><strong>US Market Safety & Street Legality (UL 2272 & DOT):</strong> Purpose-built for US retail brands and city commuting. Features UL 2272 certified electrical systems, UL 2271 battery packs with smart thermal cut-offs, FCC Part 15 Class B compliance, FMVSS-grade LED headlights and turn signals, and dual hydraulic disc brakes with E-ABS.</li>
        <li><strong>European Homologation (EEC / COC & CE EN 17128):</strong> Export-ready documentation for European road registration under L1e-B and L3e classifications, including Certificate of Conformity (COC), CE marking, and switchable 25 km/h / 45 km/h speed governors.</li>
        <li><strong>Sub-30-Second Swappable Battery Architecture:</strong> Eliminate charging downtime for commercial logistics. Our dual-battery docks allow riders to swap depleted NMC or Grade-A LiFePO4 packs for fully charged units in under 30 seconds, maintaining 24/7 fleet productivity.</li>
        <li><strong>200kg+ Heavy-Duty Commercial Chassis:</strong> Built on heavy-gauge carbon steel frames with reinforced rear cargo racks and dual hydraulic coil-spring shock absorbers, engineered to withstand potholes, unpaved dirt tracks, and heavy commercial cargo.</li>
        <li><strong>Smart 4G IoT Fleet Telematics:</strong> Optional integrated 4G IoT modules and GPS tracking connect directly with your fleet management software for real-time battery SoC diagnostics, geo-fencing, speed control, remote lock/unlock, and anti-theft monitoring.</li>
        <li><strong>Multi-Voltage Global Charging:</strong> Intelligent auto-switching chargers compatible with 110V–120V 60Hz (US, Canada, Americas) and 220V–240V 50Hz (Europe, UK, Africa, Asia) grids with market-specific NEMA, Schuko, or BS 1363 plugs.</li>
      </ul>
      <h2>Distributor, Brand & Fleet FAQ</h2>
      <p><strong>Q: Can JoyHand manufacture private-label electric scooters for US retailers and Amazon sellers?</strong><br/>A: Yes. We provide end-to-end OEM/ODM private labeling for the US market, including custom frame colors, laser-engraved brand logos, customized LCD dashboard boot animations, ISTA 3A drop-tested retail packaging, bilingual English/Spanish user manuals, UPC barcodes, and full UL 2272 documentation.</p>
      <p><strong>Q: What certifications are provided for US and European road registration?</strong><br/>A: We provide complete compliance testing documentation: UL 2272 and UL 2271 battery test reports, FCC Part 15 certificates, and 17-digit VIN stamping for North America. For European distributors, we provide EEC/COC type-approval documentation for L1e-B (up to 45 km/h) and L3e motorcycle categories, alongside CE and EN 17128 certifications.</p>
      <p><strong>Q: Can you manufacture custom cargo boxes and delivery racks for logistics fleets?</strong><br/>A: Yes. We offer bespoke fleet configurations, including insulated food delivery boxes, heavy-duty rear steel cargo racks, passenger footrests for e-boda boda taxi fleets, custom corporate liveries, and centralized fleet battery swap stations.</p>
      <p><strong>Q: Can you supply custom battery packs and retrofits for electric tricycles and utility vehicles?</strong><br/>A: Absolutely. Our ODM engineering department custom-manufactures 48V, 60V, and 72V lithium battery packs tailored to specific electric tricycles, passenger tuk-tuks, golf carts, and light commercial haulers with IP67 waterproof laser-welded casings.</p>
    `
  },
  "power-banks": {
    pageTitle: "Custom Power Bank OEM Manufacturer | JoyHand",
    metaDescription: "Factory-direct custom power banks. High-capacity PD fast charging, built-in cables, and white-label branding for global retail networks.",
    canonicalUrl: "https://www.joyhand.com/products/category/power-banks",
    metaKeywords: ["custom power bank OEM", "private label power bank manufacturer", "PD fast charging power bank", "bulk mobile chargers"],
    breadcrumbBadge: "POWER BANKS",
    h1Title: "High-Capacity PD Fast Power Bank Manufacturer & OEM",
    heroSubtitle: "High-volume OEM power bank manufacturing. 20W to 100W Power Delivery with UN38.3 airline compliance for retail chains and telecom distributors across the Americas, Europe, Africa, and Asia.",
    title: "High-Capacity PD Fast Power Bank Manufacturing",
    filterCategory: "power-bank",
    image: "/homeImg/energyPlatformImage005.jpg",
    description: "High-volume OEM power bank manufacturing. 20W to 100W Power Delivery with UN38.3 airline compliance for retail chains and telecom distributors across the Americas, Europe, Africa, and Asia.",
    keywords: "custom power bank OEM, private label power bank manufacturer, PD fast charging power bank, bulk mobile chargers",
    intro: {
      heading: "Custom PD Fast Power Banks: Direct OEM Manufacturing",
      body: "JoyHand Energy's consumer electronics division is an ISO 9001:2015 high-volume manufacturer of High-Capacity Power Banks and Mobile Power Accessories. Producing over one million units annually, we supply retail chains, telecom operators, and consumer tech brands globally. Our catalog avoids low-grade thin-polymer cells, prioritizing true high-capacity cells with advanced Power Delivery (PD 20W/65W/100W) fast charging for smartphones, tablets, and laptops simultaneously.",
      advantages: [
        {
          title: "Full OEM/ODM Branding",
          desc: "Laser-engraved logos, custom color anodization, and shelf-ready retail packaging with barcodes."
        },
        {
          title: "High-Speed PD Charging",
          desc: "20W to 100W multi-device Power Delivery chipsets with multi-layer thermal and voltage regulation."
        },
        {
          title: "Commercial Aviation Certified",
          desc: "Fully UN38.3 compliant for safe commercial airline passenger carry-on and international freight."
        }
      ]
    },
    topContent: `
      <h2>Custom PD Fast Power Banks: Direct OEM Manufacturing</h2>
      <p>The global smartphone accessory market requires rapid innovation and massive scale. JoyHand Energy's consumer electronics division is a leading OEM factory for High-Capacity Power Banks and Mobile Power Accessories. Producing over a million units annually, we supply major retail chains, telecom operators, and consumer tech distributors across the globe. We do not sell generic, low-quality thin-polymer cells. Our catalog features true high-capacity batteries with advanced Power Delivery (PD 20W/65W/100W) chipsets, allowing users to charge laptops, tablets, and smartphones simultaneously at maximum speed. By bypassing trading companies and sourcing directly from our factory lines, your brand secures maximum profit margins with zero compromise on safety.</p>
    `,
    bottomContent: `
      <h2>Why Source Power Banks from Joyhand?</h2>
      <ul>
        <li><strong>Full OEM/ODM Branding:</strong> We offer complete white-label services. From laser-engraving your corporate logo on the anodized aluminum shell to designing custom retail packaging and user manuals, we deliver a shelf-ready product.</li>
        <li><strong>Advanced Feature Sets:</strong> Our catalog includes magnetic wireless charging (MagSafe compatible), ultra-slim pocket designs, rugged waterproof models for outdoor use, and massive 50000mAh camping batteries with built-in LED lanterns.</li>
        <li><strong>Strict Compliance & Safety:</strong> Every power bank is certified for safe commercial airline transport (UN38.3). Our internal PCB designs feature over-charge, over-discharge, and short-circuit protection.</li>
      </ul>
      <h2>Distributor FAQ</h2>
      <p><strong>Q: What is the MOQ for custom-branded (OEM) power banks?</strong><br/>A: For standard models with laser-engraved logos, our MOQ starts at as low as 1,000 units. For fully custom ODM molds and packaging, please consult our engineering team.</p>
    `,
    seoContent: `
      <h2>Custom PD Fast Power Banks: Direct OEM Manufacturing</h2>
      <p>The global smartphone accessory market requires rapid innovation and massive scale. JoyHand Energy's consumer electronics division is a leading OEM factory for High-Capacity Power Banks and Mobile Power Accessories. Producing over a million units annually, we supply major retail chains, telecom operators, and consumer tech distributors across the globe. We do not sell generic, low-quality thin-polymer cells. Our catalog features true high-capacity batteries with advanced Power Delivery (PD 20W/65W/100W) chipsets, allowing users to charge laptops, tablets, and smartphones simultaneously at maximum speed. By bypassing trading companies and sourcing directly from our factory lines, your brand secures maximum profit margins with zero compromise on safety.</p>
      <br/>
      <h2>Why Source Power Banks from Joyhand?</h2>
      <ul>
        <li><strong>Full OEM/ODM Branding:</strong> We offer complete white-label services. From laser-engraving your corporate logo on the anodized aluminum shell to designing custom retail packaging and user manuals, we deliver a shelf-ready product.</li>
        <li><strong>Advanced Feature Sets:</strong> Our catalog includes magnetic wireless charging (MagSafe compatible), ultra-slim pocket designs, rugged waterproof models for outdoor use, and massive 50000mAh camping batteries with built-in LED lanterns.</li>
        <li><strong>Strict Compliance & Safety:</strong> Every power bank is certified for safe commercial airline transport (UN38.3). Our internal PCB designs feature over-charge, over-discharge, and short-circuit protection.</li>
      </ul>
      <h2>Distributor FAQ</h2>
      <p><strong>Q: What is the MOQ for custom-branded (OEM) power banks?</strong><br/>A: For standard models with laser-engraved logos, our MOQ starts at as low as 1,000 units. For fully custom ODM molds and packaging, please consult our engineering team.</p>
    `
  },
  "solar-accessories": {
    pageTitle: "Bulk Solar Panels & Tech Accessories | JoyHand",
    metaDescription: "Bulk solar panels, LED street lights, docking stations, and USB-C accessories. Direct factory OEM for global hardware distributors.",
    canonicalUrl: "https://www.joyhand.com/products/category/solar-accessories",
    metaKeywords: ["bulk solar panels", "LED street light manufacturer", "solar accessories supplier", "USB-C accessory supplier", "tech accessories factory", "docking station OEM"],
    breadcrumbBadge: "SOLAR ACCESSORIES",
    h1Title: "Solar Hardware & Consumer Tech Accessory Manufacturer",
    heroSubtitle: "Factory-direct Tier-1 monocrystalline solar panels (up to 550W), commercial LED solar streetlights & industrial PV cabling for micro-grids and turnkey installations across high-sunbelt regions.",
    title: "Solar Hardware & Consumer Tech Accessory Manufacturing",
    filterCategory: "accessories",
    image: "/homeImg/energyPlatformImage06.jpg",
    description: "Factory-direct Tier-1 monocrystalline solar panels (up to 550W), commercial LED solar streetlights & industrial PV cabling for micro-grids and turnkey installations across high-sunbelt regions.",
    keywords: "bulk solar panels, LED street light manufacturer, USB-C accessory supplier, tech accessories factory, docking station OEM",
    intro: {
      heading: "Comprehensive OEM Tech & Off-Grid Energy Accessories",
      body: "Whether deploying rural micro-grids in low-infrastructure regions or stocking high-turnover consumer tech for global retail chains, JoyHand Energy serves as your dedicated single-source OEM factory. Our accessories span high-efficiency monocrystalline solar panels, commercial LED street lights, pure copper industrial cabling, and premium nylon-braided 100W USB-C fast charging stations.",
      advantages: [
        {
          title: "Consolidated Container Logistics",
          desc: "Source heavy solar components and fast-moving mobile tech in one container to minimize freight costs."
        },
        {
          title: "Full International Compliance",
          desc: "Every product is CE, FCC, and RoHS certified for immediate customs clearance in global markets."
        },
        {
          title: "Turnkey Retail Packaging",
          desc: "In-house industrial design delivers custom branding, blister packs, and multi-language manuals."
        }
      ]
    },
    topContent: `
      <h2>Comprehensive OEM Tech & Off-Grid Energy Accessories</h2>
      <p>Whether you are deploying rural micro-grids in low-infrastructure regions or stocking consumer electronics for major global retail chains, JoyHand Energy serves as your single-source OEM manufacturer. Our accessory division bridges the gap between heavy-duty off-grid solar hardware and premium, high-margin mobile tech accessories.</p>
    `,
    bottomContent: `
      <h2>Solar Infrastructure & Off-Grid Hardware</h2>
      <p>For our partners developing micro-grids and EPC contractors, we supply the critical components needed to complete your energy ecosystem. This includes high-efficiency monocrystalline solar panels (up to 550W), rugged commercial LED solar street lights, and the heavy-duty pure copper cabling required to pass strict commercial safety inspections in off-grid installations.</p>
      <h2>Premium Mobile Tech & Consumer Electronics</h2>
      <p>In addition to our heavy hardware, we manufacture massive volumes of consumer mobile accessories tailored for rapid global distribution. We completely bypass low-quality generic materials, featuring nylon-braided USB-C PD 100W fast charging cables, high-speed wall adapters, and extremely durable MFi-certified docks. Every consumer tech product holds full international certifications (CE, FCC, RoHS), ensuring seamless customs clearance and premium retail quality for any market.</p>
      <h2>Why JoyHand is the Preferred OEM Partner</h2>
      <ul>
        <li><strong>Consolidated Logistics:</strong> Source your solar panels, installation hardware, and mobile tech from a single ISO 9001:2015 factory, massively reducing your container freight costs.</li>
        <li><strong>Custom Retail Packaging:</strong> For our consumer tech lines, our in-house design team provides complete packaging design with your brand's logos, barcodes, and custom inserts, ready for immediate retail or e-commerce fulfillment.</li>
      </ul>
    `,
    seoContent: `
      <h2>Comprehensive OEM Tech & Off-Grid Energy Accessories</h2>
      <p>Whether you are deploying rural micro-grids in low-infrastructure regions or stocking consumer electronics for major global retail chains, JoyHand Energy serves as your single-source OEM manufacturer. Our accessory division bridges the gap between heavy-duty off-grid solar hardware and premium, high-margin mobile tech accessories.</p>
      <br/>
      <h2>Solar Infrastructure & Off-Grid Hardware</h2>
      <p>For our partners developing micro-grids and EPC contractors, we supply the critical components needed to complete your energy ecosystem. This includes high-efficiency monocrystalline solar panels (up to 550W), rugged commercial LED solar street lights, and the heavy-duty pure copper cabling required to pass strict commercial safety inspections in off-grid installations.</p>
      <h2>Premium Mobile Tech & Consumer Electronics</h2>
      <p>In addition to our heavy hardware, we manufacture massive volumes of consumer mobile accessories tailored for rapid global distribution. We completely bypass low-quality generic materials, featuring nylon-braided USB-C PD 100W fast charging cables, high-speed wall adapters, and extremely durable MFi-certified docks. Every consumer tech product holds full international certifications (CE, FCC, RoHS), ensuring seamless customs clearance and premium retail quality for any market.</p>
      <h2>Why JoyHand is the Preferred OEM Partner</h2>
      <ul>
        <li><strong>Consolidated Logistics:</strong> Source your solar panels, installation hardware, and mobile tech from a single ISO 9001:2015 factory, massively reducing your container freight costs.</li>
        <li><strong>Custom Retail Packaging:</strong> For our consumer tech lines, our in-house design team provides complete packaging design with your brand's logos, barcodes, and custom inserts, ready for immediate retail or e-commerce fulfillment.</li>
      </ul>
    `
  }
};

// Backward-compatibility aliases so internal references to old keys never throw undefined
// Non-enumerable so Object.keys(solutionConfigs) outputs only the 6 canonical routes
Object.defineProperty(solutionConfigs, "storage-batteries", {
  get() { return solutionConfigs["solar-batteries"]; },
  enumerable: false,
  configurable: true
});
Object.defineProperty(solutionConfigs, "electric-mobility", {
  get() { return solutionConfigs["electric-motorcycles"]; },
  enumerable: false,
  configurable: true
});
Object.defineProperty(solutionConfigs, "accessories", {
  get() { return solutionConfigs["solar-accessories"]; },
  enumerable: false,
  configurable: true
});

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

// ==============================
// PRODUCTS CATALOG PAGE DATA
// ==============================
export const productsCatalogData = {
  header: {
    title: "Factory-Direct Wholesale Catalog",
    subtitle: "Direct-from-factory catalog of Grade-A LiFePO4 batteries, electric motorcycles, hybrid inverters, and solar hardware built for global B2B distributors and OEM partners.",
    image: "/pageHeadImg/pageheader-products.webp"
  },
  intro: {
    heading: "High-Volume Hardware for Global B2B Partners",
    body: "As a direct manufacturer in Guangzhou, JoyHand supplies a comprehensive catalog of power, mobility, and solar hardware. We do not sell to retail consumers. Our factory is structured for B2B volume: whether you are sourcing LiFePO4 batteries for residential backup, hybrid inverters for commercial solar, electric scooters and motorcycles for fleets, or solar panels for regional installation, you buy directly from our production lines.",
    advantages: [
      {
        title: "Direct Factory Pricing",
        desc: "No middlemen, no trading companies."
      },
      {
        title: "Flexible MOQs",
        desc: "Scaled for distributors and regional brands."
      },
      {
        title: "Compliance Ready",
        desc: "Built to CE, UL, and UN38.3 specifications."
      }
    ]
  },
  bottomCta: {
    heading: "Can't Find the Exact Specification You Need?",
    body: "Our catalog shows our standard models, but our engineering team builds custom hardware every day. If you need a specific battery capacity, a modified scooter or motorcycle chassis, or custom solar panel configurations, we can build it to your market's exact requirements.",
    buttons: [
      {
        label: "Request Custom Engineering",
        href: "/manufacturing"
      },
      {
        label: "Get a Wholesale Quote",
        href: "/contact-us"
      }
    ]
  }
};
