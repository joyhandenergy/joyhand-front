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
  brandDescription: "JoyHand is a direct China OEM/ODM factory & wholesale supplier of LiFePO4 solar batteries, hybrid solar inverters, electric scooters, dirt bikes, cargo motorcycles, solar panels, streetlights, and custom power banks. Built to ISO 9001:2015, UL, EEC, and CE standards for global distributors.",
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/joyhand-energy-022aa3451", icon: "linkedin" },
    { name: "YouTube", url: "https://www.youtube.com/@joyhandenergy", icon: "youtube" },
    { name: "TikTok", url: "https://www.tiktok.com/@joyhandenergy", icon: "tiktok" },
    { name: "Facebook", url: "https://www.facebook.com/joyhandenergy", icon: "facebook" },
    { name: "Instagram", url: "https://www.instagram.com/joyhandenergy/", icon: "instagram" },
    { name: "Pinterest", url: "https://www.pinterest.com/joyhandenergy/", icon: "pinterest" }
  ],
  solutions: [
    { name: "All Wholesale Products", path: "/products" },
    { name: "LiFePO4 Solar Batteries", path: "/products/category/solar-batteries" },
    { name: "Hybrid Solar Inverters", path: "/products/category/solar-inverters" },
    { name: "Portable Power Stations", path: "/products/category/portable-power-stations" },
    { name: "Electric Scooters & Motorcycles", path: "/products/category/electric-motorcycles" },
    { name: "Custom OEM Power Banks", path: "/products/category/power-banks" },
    { name: "Solar Panels & Street Lights", path: "/products/category/solar-accessories" }
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
    sourceNote: "Electric Scooters"
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
    bio: "Drives global strategy, ensuring direct, high-quality factory output for battery and electric scooter distributors worldwide."
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
    tag: "Power Banks",
    link: "/products/category/power-banks"
  },
  {
    title: "Electric Scooters & Motorcycles",
    desc: "Full-vehicle OEM assembly and automotive-grade lithium battery packs for electric commuter scooters, delivery motorcycles, and cargo tricycles. Built to UL 2272, DOT, and EEC standards with reinforced 200kg+ payload frames and smart fleet telematics.",
    features: ["UL 2272 & DOT Ready", "Sub-30s Swappable Dual Battery", "200kg+ Heavy-Duty Chassis", "Custom US & Global OEM Branding"],
    img: "/aboutImg/aboutProductimg04.jpg",
    tag: "Electric Scooters",
    link: "/products/category/electric-motorcycles"
  },
  {
    title: "Tech & Solar Accessories",
    desc: "Wholesale Tier-1 monocrystalline solar panels, commercial solar LED streetlights, pure copper PV interconnect cabling, and rugged accessories for consolidated container shipping and turnkey installations.",
    features: ["High-Efficiency Monocrystalline Panels", "Commercial Solar LED Streetlights", "Pure Copper Heavy-Duty Cabling", "Container-Consolidated Freight"],
    img: "/aboutImg/aboutProductimg6.jpg",
    tag: "Solar & Tech Accessories",
    link: "/products/category/solar-accessories"
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
    pageTitle: "LiFePO4 Battery Manufacturer & Supplier China | JoyHand",
    metaDescription: "China OEM solar battery manufacturer & LiFePO4 supplier. Bulk 51.2V 100Ah/200Ah wall, 48V rack & ESS built to UL 1973 & CE standards.",
    canonicalUrl: "https://www.joyhand.com/products/category/solar-batteries",
    metaKeywords: ["lifepo4 battery manufacturer china", "solar battery factory china", "oem solar battery manufacturer", "wholesale lifepo4 supplier", "51.2V 200Ah battery manufacturer", "48V server rack battery supplier", "wall mounted LiFePO4 battery OEM", "commercial ESS energy storage supplier", "telecom lithium battery supplier"],
    breadcrumbBadge: "SOLAR BATTERIES",
    h1Title: "LiFePO4 Battery Manufacturer & Wholesale Solar ESS Supplier",
    heroSubtitle: "Direct China factory OEM & bulk supplier of Grade-A 51.2V 100Ah/200Ah wall-mount packs, 48V server rack modules, telecom lithium batteries, and commercial ESS systems.",
    title: "Wholesale LiFePO4 & ESS Battery Manufacturing",
    image: "/homeImg/energyPlatformImage01.jpg",
    filterCategory: "battery",
    description: "Direct China factory OEM & bulk supplier of Grade-A 51.2V 100Ah/200Ah wall-mount packs, 48V server rack modules, telecom lithium batteries, and commercial ESS systems.",
    keywords: "lifepo4 battery manufacturer china, solar battery factory china, oem solar battery manufacturer, wholesale lifepo4 supplier, 51.2V 200Ah server rack battery, commercial ESS supplier",
    intro: {
      heading: "OEM LiFePO4 Solar Batteries, 48V Rack Modules & Commercial ESS Supply",
      body: "As a dedicated LiFePO4 battery manufacturer in China and wholesale solar battery factory, JoyHand Energy supplies EPC contractors, telecom operators, and private-label solar brands worldwide. From 51.2V 100Ah and 51.2V 200Ah wall-mounted LiFePO4 batteries to 48V server rack modules and 100kWh+ commercial energy storage systems (ESS), every pack uses 100% Grade-A prismatic cells rated for 6,000+ cycles at 80% DoD. Engineered inside our 50,000 m² Guangzhou production hub operating to ISO 9001:2015 standards, our bulk battery lines feature smart BMS thermal throttling (up to 55°C ambient) and documentation built to UL 1973, CE, and UN38.3 standards for smooth customs clearance.",
      advantages: [
        {
          title: "Multi-Region Inverter Sync",
          desc: "Pre-configured CAN/RS485 firmware protocols communicate natively with Deye, Growatt, Victron, Schneider, and major international hybrid inverters."
        },
        {
          title: "High-Ambient Heat BMS",
          desc: "Proprietary multi-tier thermal throttling protects Grade-A cells in unconditioned utility rooms, telecom shelters, and high-heat environments."
        },
        {
          title: "Commercial ESS Scalability",
          desc: "Parallel modular architecture from 5.12kWh residential wall units up to 100kWh+ high-voltage commercial ESS arrays for hospitals and industrial sites."
        },
        {
          title: "Customs & Port Documentation",
          desc: "Full UN38.3 dangerous goods reports, MSDS, CE, and UL 1973 standard compliance test files provided for container clearance."
        }
      ]
    },
    bottomContent: `
      <h2>Why Source Bulk LiFePO4 &amp; ESS Batteries from JoyHand?</h2>
      <ul>
        <li><strong>Private-Label &amp; OEM Branding:</strong> Custom sheet metal enclosure colors, laser-engraved brand logos, bespoke LCD boot screens, and white-label packaging for regional solar distributors.</li>
        <li><strong>Telecom &amp; Server Rack Reliability:</strong> Standard 19-inch 48V / 51.2V rack batteries engineered for telecom base stations, data centers, and commercial backup.</li>
        <li><strong>Full Container Freight Readiness:</strong> Built to UN38.3, CE, and UL 1973 standards with complete MSDS export packages for smooth ocean freight clearance.</li>
      </ul>
      <h2>Distributor &amp; EPC FAQ</h2>
      <p><strong>Q: What is the typical lead time for a 40HQ container of LFP batteries?</strong><br/>A: Standard production lead time for full container orders is typically 20–30 days depending on specific voltage configurations and custom OEM branding requirements. Contact our factory sourcing team for current schedules.</p>
      <p><strong>Q: Can we apply our own private-label brand to your battery chassis (OEM)?</strong><br/>A: Yes. Over 60% of our production volume is OEM/ODM, including laser engraving, custom powder-coat finishes, branded cartons, and custom BMS firmware logos.</p>
    `
  },
  "solar-inverters": {
    pageTitle: "Hybrid Solar Inverter Manufacturer & Supplier | JoyHand",
    metaDescription: "China hybrid & commercial solar inverter manufacturer. Bulk split-phase 120V/240V, IP54 outdoor & off-grid dual-MPPT OEM inverters (3kW–12kW+).",
    canonicalUrl: "https://www.joyhand.com/products/category/solar-inverters",
    metaKeywords: ["hybrid solar inverter manufacturer", "commercial solar inverter manufacturer", "solar inverter factory china", "split-phase 120V 240V inverter supplier", "off-grid solar inverter OEM", "IP54 outdoor solar inverter manufacturer", "parallel hybrid inverter charger"],
    breadcrumbBadge: "HYBRID INVERTERS",
    h1Title: "Hybrid & Commercial Solar Inverter Manufacturer China",
    heroSubtitle: "Direct factory OEM & wholesale supplier of split-phase 120V/240V hybrid inverters, IP54 outdoor units, and off-grid parallel solar inverter chargers (3kW–12kW+).",
    title: "Wholesale Hybrid & Commercial Inverter Manufacturing",
    filterCategory: "inverter",
    image: "/homeImg/energyPlatformImage002.jpg",
    description: "Direct factory OEM & wholesale supplier of split-phase 120V/240V hybrid inverters, IP54 outdoor units, and off-grid parallel solar inverter chargers (3kW–12kW+).",
    keywords: "hybrid solar inverter manufacturer, commercial solar inverter manufacturer, split-phase inverter supplier, off-grid solar inverter OEM, IP54 outdoor inverter factory",
    intro: {
      heading: "OEM Hybrid Solar Inverters, Split-Phase Chargers & Parallel Commercial Systems",
      body: "As a China hybrid solar inverter manufacturer and wholesale OEM supplier, JoyHand Energy builds heavy-duty pure sine wave inverter chargers engineered for unstable grids and split-phase solar deployments. Supporting 120V/240V split-phase grids in the Americas as well as 220V/230V 50Hz single- and three-phase configurations globally, our 3kW to 12kW+ inverters feature dual MPPT controllers, sub-10ms grid-to-battery bypass, IP54 outdoor-rated enclosures, and generator auto-start dry contacts. Built with over-specced copper transformers to handle 3x inductive motor surges from pumps and HVAC systems, our inverters are supplied bulk and private-label to solar EPCs and regional wholesalers.",
      advantages: [
        {
          title: "3x Inductive Surge Architecture",
          desc: "Industrial-grade AC protection and heavy copper chokes absorb chaotic grid voltage spikes and heavy water pump or AC compressor surges."
        },
        {
          title: "Plug-and-Play BMS Integration",
          desc: "Pre-flashed CAN/RS485 communication protocols natively sync with 48V / 51.2V LiFePO4 battery management systems."
        },
        {
          title: "Parallel & 3-Phase Linking",
          desc: "Scale seamlessly by linking up to 9 units in parallel or 3-phase arrays for commercial estates, clinics, and agricultural operations."
        }
      ]
    },
    bottomContent: `
      <h2>The JoyHand Inverter Engineering Advantage</h2>
      <ul>
        <li><strong>IP54 Weather-Sealed Options:</strong> Outdoor-rated commercial solar inverters built to resist dust and monsoon humidity without derating.</li>
        <li><strong>Zero-Export &amp; Off-Grid Flexibility:</strong> Configurable modes for off-grid solar backup, peak-shaving, or grid-tied hybrid operation depending on local utility rules.</li>
        <li><strong>OEM White-Label Branding:</strong> Custom chassis silk-screening, LCD interface branding, and regional plug/voltage customization for bulk distributors.</li>
      </ul>
      <h2>Distributor FAQ</h2>
      <p><strong>Q: Do these inverters support generator auto-start functionality?</strong><br/>A: Yes, all our hybrid models feature built-in dry contacts that automatically signal a backup generator when battery state-of-charge drops below your threshold.</p>
      <p><strong>Q: Can your inverters feed power back into the grid (Net Metering)?</strong><br/>A: We manufacture both strictly off-grid zero-export models and grid-interactive hybrid units engineered to regional utility standards.</p>
    `
  },
  "portable-power-stations": {
    pageTitle: "Portable Power Station ODM Manufacturer China | JoyHand",
    metaDescription: "Direct portable power station ODM manufacturer & solar generator supplier. Wholesale 300W–3600W LiFePO4 backup units with fast AC recharge.",
    canonicalUrl: "https://www.joyhand.com/products/category/portable-power-stations",
    metaKeywords: ["portable power station odm manufacturer", "lifepo4 portable power station supplier", "bulk solar generator manufacturer", "1000W 2000W portable power station OEM", "emergency backup power station wholesale", "fast charging power station factory"],
    breadcrumbBadge: "PORTABLE POWER",
    h1Title: "Portable Power Station ODM Manufacturer & Wholesale Supplier",
    heroSubtitle: "Direct China factory OEM/ODM supplier of 300W–3600W LiFePO4 portable power stations and bulk solar generators with 2-hour fast AC charging and multi-region AC outlets.",
    title: "Portable Power Station ODM & Bulk Solar Generator Manufacturing",
    filterCategory: "portable-power",
    image: "/homeImg/energyPlatformImage003.jpg",
    description: "Direct China factory OEM/ODM supplier of 300W–3600W LiFePO4 portable power stations and bulk solar generators with 2-hour fast AC charging and multi-region AC outlets.",
    keywords: "portable power station odm manufacturer, bulk solar generator supplier, LiFePO4 portable power station wholesale, emergency backup power station factory",
    intro: {
      heading: "OEM/ODM LiFePO4 Portable Power Stations & Bulk Solar Generators",
      body: "Operating as a direct portable power station ODM manufacturer and bulk solar generator supplier in China, JoyHand Energy builds heavy-duty 300W to 3600W LiFePO4 power stations for retail brands, disaster relief NGOs, telecom field crews, and outdoor distributors. Unlike slow consumer units, our dual-inverter fast-charging architecture recharges from AC wall power or solar panels in under 2 hours while supporting simultaneous pass-through output. Every unit is built inside drop-tested fire-retardant ABS+PC enclosures to UN38.3, CE, and UL safety specifications with customized US (120V), UK/EU (230V), or Universal AC sockets.",
      advantages: [
        {
          title: "Simultaneous Pass-Through Output",
          desc: "Charge the station via foldable solar panels or AC grid while simultaneously powering critical medical, telecom, or household loads."
        },
        {
          title: "Automotive-Grade LiFePO4 Cells",
          desc: "6,000-cycle LFP chemistry wrapped in fire-retardant, drop-tested shells with UN38.3 air/sea freight test documentation."
        },
        {
          title: "Global AC Socket Customization",
          desc: "Available in US 110V–120V, EU Schuko, UK BS 1363, and Universal AC outputs paired with 100W USB-C PD ports."
        }
      ]
    },
    bottomContent: `
      <h2>Key Wholesale &amp; Private-Label Advantages</h2>
      <ul>
        <li><strong>White-Label &amp; Custom Tooling:</strong> Full private-label colorways, custom LCD boot logos, barcode packaging, and bundled foldable solar panel kits.</li>
        <li><strong>2-Hour Bidirectional Fast Recharge:</strong> Built-in bidirectional inverters eliminate bulky external power bricks and maximize emergency readiness.</li>
      </ul>
      <h2>Distributor FAQ</h2>
      <p><strong>Q: Can a 1000W–3000W station replace a small gasoline generator?</strong><br/>A: Yes. Our pure sine wave LiFePO4 stations run refrigerators, CPAP machines, routers, and power tools silently with zero fumes or fuel maintenance.</p>
    `
  },
  "electric-motorcycles": {
    pageTitle: "Electric Scooter & Motorcycle Factory China | JoyHand",
    metaDescription: "China factory supplier of electric scooters, electric motorcycles, dirt bikes & cargo tricycles with UL 2272, EEC/DOT & swappable fleet batteries.",
    canonicalUrl: "https://www.joyhand.com/products/category/electric-motorcycles",
    metaKeywords: ["electric scooter manufacturer china", "electric motorcycle factory china", "electric dirt bike wholesale china", "swappable battery electric motorcycle", "commercial delivery scooter OEM", "EEC COC electric motorcycle factory", "UL 2272 electric scooter OEM", "electric cargo tricycle manufacturer"],
    breadcrumbBadge: "E-SCOOTERS & MOTORCYCLES",
    h1Title: "Electric Scooter, Motorcycle, Dirt Bike & Tricycle Factory",
    heroSubtitle: "Direct China factory & OEM/ODM supplier of 72V electric dirt bikes, EEC/DOT street motorcycles, UL 2272 commuter scooters, swappable-battery delivery fleets & cargo tricycles.",
    title: "Electric Motorcycle, Dirt Bike & Scooter Factory China",
    filterCategory: "electric-mobility",
    image: "/homeImg/energyPlatformImage04.jpg",
    description: "Direct China factory & OEM/ODM supplier of 72V electric dirt bikes, EEC/DOT street motorcycles, UL 2272 commuter scooters, swappable-battery delivery fleets & cargo tricycles.",
    keywords: "electric motorcycle factory china, electric dirt bike wholesale china, electric scooter manufacturer china, swappable battery electric motorcycle, electric cargo tricycle manufacturer",
    intro: {
      heading: "OEM Electric Motorcycles, 72V Dirt Bikes, UL 2272 Scooters & Cargo Tricycles",
      body: "As an integrated electric motorcycle factory in China and electric scooter manufacturer, JoyHand Energy builds high-torque 72V electric dirt bikes, street-legal commuter motorcycles, commercial delivery scooters, and electric cargo tricycles for global brands and fleet operators. For North American private-label sellers, our vehicles are engineered to UL 2272, UL 2271, FCC Part 15, and DOT street-legal specifications with 17-digit VIN stamping. For European distributors and global courier fleets, we support EEC/COC L1e-B and L3e documentation, 200kg+ high-tensile steel frames, sub-30-second swappable dual batteries, and IP67 waterproof powertrains.",
      advantages: [
        {
          title: "UL 2272 & DOT Compliance (US)",
          desc: "Engineered to meet strict US CPSC and municipal fire safety codes (UL 2272 / UL 2271), FCC Part 15 shielding, hydraulic disc brakes, and 17-digit VIN stamping."
        },
        {
          title: "EEC & COC Documentation (EU)",
          desc: "Export documentation supporting European L1e-B/L3e Certificate of Conformity (COC), EN 17128 compliance, and programmable 25km/h / 45km/h limiters."
        },
        {
          title: "Sub-30s Swappable Fleet Batteries",
          desc: "Quick-swap lithium battery bays keep commercial delivery couriers, food apps, and passenger taxi fleets running 24/7 with zero charging wait."
        },
        {
          title: "Heavy-Duty Cargo Tricycles & Chassis",
          desc: "200kg+ robotically welded steel frames, insulated delivery boxes, and electric cargo tricycles built for rough roads and commercial payloads."
        }
      ]
    },
    bottomContent: `
      <h2>The JoyHand Electric Scooter &amp; Motorcycle OEM Advantage</h2>
      <ul>
        <li><strong>Private-Label US &amp; EU Packaging:</strong> Custom frame colors, silk-screen liveries, branded LCD dash startup screens, ISTA 3A drop-tested cartons, and bilingual manuals.</li>
        <li><strong>Smart 4G IoT Fleet Telematics:</strong> Optional GPS tracking, geo-fencing, battery SoC telemetry, and remote lock/unlock for shared scooter and courier fleets.</li>
        <li><strong>Global Multi-Voltage Chargers:</strong> Auto-switching 110V–120V (Americas) and 220V–240V (Europe/Africa/Asia) chargers with market-specific plugs.</li>
      </ul>
      <h2>Distributor &amp; Fleet FAQ</h2>
      <p><strong>Q: Can JoyHand manufacture private-label electric scooters for US retailers?</strong><br/>A: Yes. We supply end-to-end OEM/ODM branding with ISTA 3A retail packaging, UPC barcodes, 17-digit VIN stamping, and hardware built to UL 2272 standards.</p>
      <p><strong>Q: Do you manufacture custom electric cargo tricycles and delivery boxes?</strong><br/>A: Yes. We supply passenger tuk-tuks, heavy cargo tricycles, insulated food delivery racks, and centralized battery swap stations built to order.</p>
    `
  },
  "power-banks": {
    pageTitle: "Custom Power Bank OEM Manufacturer | JoyHand",
    metaDescription: "Custom power bank OEM manufacturer & white-label supplier. Bulk 100W PD fast charging, MagSafe wireless & built-in cable UN38.3 power banks.",
    canonicalUrl: "https://www.joyhand.com/products/category/power-banks",
    metaKeywords: ["power bank oem", "oem power bank", "custom power bank OEM", "private label power bank supplier", "white label power bank wholesale", "MagSafe wireless power bank OEM", "built-in cable power bank manufacturer", "100W PD power bank factory"],
    breadcrumbBadge: "POWER BANKS",
    h1Title: "Custom Power Bank OEM Manufacturer & Wholesale Supplier",
    heroSubtitle: "High-volume OEM power bank manufacturer & private label wholesale supplier. 20W–100W PD fast charging, MagSafe magnetic wireless & built-in cable models built to UN38.3 standards.",
    title: "Custom Power Bank OEM Manufacturing & Wholesale Supply",
    filterCategory: "power-bank",
    image: "/homeImg/energyPlatformImage005.jpg",
    description: "High-volume OEM power bank manufacturer & private label wholesale supplier. 20W–100W PD fast charging, MagSafe magnetic wireless & built-in cable models built to UN38.3 standards.",
    keywords: "power bank oem, oem power bank, custom power bank OEM manufacturer, private label power bank supplier, MagSafe wireless power bank OEM, built-in cable power bank",
    intro: {
      heading: "Custom OEM Power Banks, MagSafe Wireless & Private-Label Wholesale",
      body: "As a high-volume custom power bank OEM manufacturer and white-label wholesale supplier in China, JoyHand Energy produces over one million PD fast-charging mobile power units annually for retail chains, telecom operators, and promotional tech brands. Whether sourcing slim MagSafe magnetic wireless OEM power banks, built-in cable models, 100W PD laptop power banks, or rugged solar emergency banks, every unit uses true high-density Grade-A cells with multi-layer thermal IC protection built to UN38.3, CE, and FCC airline-safe standards.",
      advantages: [
        {
          title: "Turnkey Private Label & OEM",
          desc: "Laser-engraved logos, UV full-color printing, custom anodized aluminum finishes, and retail-ready packaging with barcodes."
        },
        {
          title: "MagSafe, Built-In Cable & 100W PD",
          desc: "Full OEM lineup covering 5,000mAh magnetic wireless, built-in USB-C/Lightning cable banks, and 100W laptop fast-charge units."
        },
        {
          title: "UN38.3 Airline & Export Ready",
          desc: "Manufactured to UN38.3, CE, FCC, and RoHS standards for hassle-free airline carry-on and international container shipping."
        }
      ]
    },
    bottomContent: `
      <h2>Why Source Wholesale OEM Power Banks from JoyHand?</h2>
      <ul>
        <li><strong>True Rated Capacity Guarantee:</strong> Zero recycled or under-spec cells—every OEM batch undergoes automated aging and capacity verification.</li>
        <li><strong>Flexible Private-Label MOQs:</strong> Low MOQ logo customization on proven stock shells, plus full custom industrial tooling for large retail programs.</li>
      </ul>
      <h2>Distributor FAQ</h2>
      <p><strong>Q: What is the MOQ for custom-branded OEM power banks?</strong><br/>A: For standard catalog models with laser-engraved logos or custom packaging, MOQ starts at 1,000 units. Contact our OEM team for bespoke tooling.</p>
    `
  },
  "solar-accessories": {
    pageTitle: "Solar Panel Wholesale Manufacturer & Supplier | JoyHand",
    metaDescription: "Monocrystalline solar panel wholesale manufacturer & supplier. Bulk 550W PV panels, foldable OEM solar panels, solar street lights & PV cables.",
    canonicalUrl: "https://www.joyhand.com/products/category/solar-accessories",
    metaKeywords: ["solar panel wholesale manufacturer", "monocrystalline solar panel manufacturer", "550W bulk solar panels supplier", "foldable portable solar panel OEM", "commercial solar street light manufacturer", "pure copper PV cable supplier"],
    breadcrumbBadge: "SOLAR PANELS & LIGHTING",
    h1Title: "Solar Panel & Commercial Solar Street Light Wholesale Manufacturer",
    heroSubtitle: "Direct China factory supplier of Tier-1 550W monocrystalline solar panels, OEM foldable portable panels, commercial LED solar street lights, and pure copper PV cabling.",
    title: "Solar Panel & Commercial PV Hardware Wholesale Manufacturing",
    filterCategory: "accessories",
    image: "/homeImg/energyPlatformImage06.jpg",
    description: "Direct China factory supplier of Tier-1 550W monocrystalline solar panels, OEM foldable portable panels, commercial LED solar street lights, and pure copper PV cabling.",
    keywords: "solar panel wholesale manufacturer, monocrystalline solar panel manufacturer, foldable solar panel OEM, commercial solar street light manufacturer",
    intro: {
      heading: "Wholesale Monocrystalline Solar Panels, Foldable OEM Kits & Solar Street Lights",
      body: "Operating as a direct solar panel wholesale manufacturer and balance-of-system factory supplier in China, JoyHand Energy consolidates bulk monocrystalline PV panels (up to 550W), foldable portable solar panels for power stations, commercial all-in-one LED solar street lights, and pure copper PV cabling for EPC contractors and regional importers. Every solar panel and outdoor lighting system is built to CE, IEC, and RoHS engineering standards inside our ISO 9001:2015 manufacturing hub, letting distributors consolidate panels, batteries, and inverters into a single factory shipment.",
      advantages: [
        {
          title: "Consolidated Container Loading",
          desc: "Combine bulk 550W monocrystalline panels, LiFePO4 batteries, and hybrid inverters in one factory container to cut landed freight cost."
        },
        {
          title: "Foldable OEM & Street Light Lines",
          desc: "Supply 60W–200W foldable solar kits for portable stations alongside commercial municipal LED solar street lights."
        },
        {
          title: "International Export Compliance",
          desc: "Engineered to CE, IEC, and RoHS standards with EL-tested cell inspection before container dispatch."
        }
      ]
    },
    bottomContent: `
      <h2>Complete Solar Panel &amp; EPC Balance-of-System Supply</h2>
      <ul>
        <li><strong>High-Efficiency Monocrystalline Cells:</strong> Half-cut PERC and foldable ETFE-laminated solar panels engineered for high-ambient temperature yield.</li>
        <li><strong>Municipal &amp; Commercial Solar Lighting:</strong> Integrated LiFePO4-powered LED solar street lights for highways, estates, campuses, and off-grid security.</li>
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
    title: "Wholesale LiFePO4 Battery, Solar & Electric Scooters",
    subtitle: "Direct China factory & wholesale supplier of Grade-A 51.2V LiFePO4 solar batteries, split-phase hybrid inverters, electric scooters & motorcycles, solar panels, and OEM power banks.",
    image: "/pageHeadImg/pageheader-products.webp"
  },
  intro: {
    heading: "Direct China OEM/ODM Manufacturer & Bulk B2B Supplier",
    body: "JoyHand Energy is a direct China OEM/ODM manufacturer and wholesale B2B supplier of solar batteries, hybrid inverters, electric scooters, and solar hardware. We do not sell single retail units. Whether you are sourcing 51.2V 100Ah/200Ah LiFePO4 batteries, split-phase hybrid inverters, electric dirt bikes and cargo tricycles, 550W solar panels, or private-label PD power banks, you buy directly from our 50,000 m² Guangzhou production lines.",
    advantages: [
      {
        title: "Direct Factory Container Pricing",
        desc: "Zero trading middlemen — buy straight from Guangzhou production lines."
      },
      {
        title: "Private Label & Custom OEM",
        desc: "Custom logos, firmware branding, BMS tuning & retail packaging."
      },
      {
        title: "Built to Export Standards",
        desc: "Engineered to UL 1973, UL 2272, EEC, CE & UN38.3 specifications."
      }
    ]
  },
  bottomCta: {
    heading: "Need Custom OEM Specifications or Private-Label Tooling?",
    body: "Beyond our standard wholesale models, our engineering team builds custom B2B hardware daily — from bespoke 48V/51.2V BMS battery packs and EEC/UL electric fleet frames to private-label power stations and solar kits.",
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
