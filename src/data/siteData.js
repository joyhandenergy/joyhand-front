// ==============================
// NAVIGATION LINKS
// ==============================
export const links = [
  { name: "About Us", href: "/about-us" },
  {
    name: "Products",
    href: "/products",
    subLinks: [
      { name: "Storage Batteries", href: "/products/category/storage-batteries" },
      { name: "Solar Inverters", href: "/products/category/solar-inverters" },
      { name: "Portable Power Stations", href: "/products/category/portable-power-stations" },
      { name: "Electric Mobility", href: "/products/category/electric-mobility" },
      { name: "Power Banks", href: "/products/category/power-banks" },
      { name: "Hardware & Accessories", href: "/products/category/accessories" }
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
  brandDescription: "JoyHand is a direct factory manufacturer of storage batteries, solar power stations, solar panels, inverters, electric motorcycles, accessories, and complete solar solutions. We engineer reliable power systems for global markets.",
  socialLinks: [
    { name: "YouTube", url: "https://www.youtube.com/@joyhandenergy", icon: "youtube" },
    { name: "TikTok", url: "https://www.tiktok.com/@joyhandenergy", icon: "tiktok" },
    { name: "Facebook", url: "https://www.facebook.com/joyhandenergy", icon: "facebook" },
    { name: "Instagram", url: "https://www.instagram.com/joyhandenergy/", icon: "instagram" },
    { name: "Pinterest", url: "https://www.pinterest.com/joyhandenergy/", icon: "pinterest" }
  ],
  solutions: [
    { name: "Storage Batteries", path: "/products/category/storage-batteries" },
    { name: "Solar Inverters", path: "/products/category/solar-inverters" },
    { name: "Portable Power Stations", path: "/products/category/portable-power-stations" },
    { name: "Electric Mobility", path: "/products/category/electric-mobility" },
    { name: "Power Banks", path: "/products/category/power-banks" },
    { name: "Hardware & Accessories", path: "/products/category/accessories" }
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
    image: "/homeImg/businessModelImage02.jpg",
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
    image: "/homeImg/businessModelImage003.jpg"
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
    sourceNote: "ISO Standards"
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
    title: "E-Mobility & EV Solutions",
    slug: "electric-mobility",
    image: "/homeImg/energyPlatformImage04.jpg",
    desc: "High-performance batteries for electric vehicles, motorcycles, and urban fleets. Designed for rugged logistics and transportation.",
    sourceNote: "E-Mobility"
  },
  {
    id: 6,
    title: "Tech & Solar Accessories",
    slug: "accessories",
    image: "/homeImg/energyPlatformImage06.jpg",
    desc: "Wholesale solar panels, LED street lights, and mobile tech accessories engineered for global distributors.",
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
    name: "Dui Wangpeng (Winper)",
    title: "CEO & Founder",
    image: "/aboutImg/joyhandleaders02.jpg",
    experience: "28+",
    bio: "As the Founder of JoyHand, Winper has dedicated over two decades to advancing energy storage and manufacturing. He drives our global strategy, ensuring direct, high-quality factory output for energy distributors in Nigeria and South Asia."
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
    img: "/aboutImg/aboutProductimg002.jpg",
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
    title: "E-Mobility & EV Solutions",
    desc: "Complete battery manufacturing for electric vehicles and motorcycles. Engineered with reinforced structures and smart BMS for rugged transportation needs.",
    features: ["EV & Motorcycle Focus", "IP65 Weatherproof", "Smart Fleet BMS"],
    img: "/aboutImg/aboutProductimg04.jpg",
    tag: "E-Mobility"
  },
  {
    title: "Tech & Solar Accessories",
    desc: "Wholesale solar panels, LED street lights, and mobile tech accessories engineered for global distributors.",
    features: ["Solar Panels", "LED Street Lights", "Screen Protectors"],
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
    answer: "We control production according to ISO 9001:2015 standards. Every shipment undergoes full audit and documentation before leaving the port."
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
  { slug: "accessories", name: "Hardware & Accessories" },
];

export const solutionConfigs = {
  "storage-batteries": {
    title: "Wholesale LFP Battery Manufacturing",
    image: "/homeImg/energyPlatformImage01.jpg",
    filterCategory: "battery",
    description: "Grade-A LFP batteries for blackout protection. Factory direct to West Africa and global markets. Competitive B2B pricing and flexible wholesale MOQs.",
    keywords: "LFP battery manufacturer, wholesale solar batteries, LiFePO4 storage, wall-mount battery, rack-mounted LFP",
    seoContent: `
      <h2>Wholesale LiFePO4 (LFP) Storage Batteries: Factory Direct to Global Markets</h2>
      <p>As grid instability and rolling blackouts continue to affect major developing economies across Africa and South Asia, the demand for robust, deeply cyclable energy storage has never been higher. JoyHand Energy’s proprietary series of <strong>Lithium Iron Phosphate (LiFePO4/LFP) wall-mounted and rack-mounted batteries</strong> are specifically engineered to withstand harsh tropical climates, frequent deep-discharge cycles, and intense voltage fluctuations.</p>
      <p>By sourcing directly from our 50,000m² ISO 9001:2015 certified manufacturing facility in Guangzhou, distributors bypass the traditional layers of middlemen. This allows you to scale your local distribution network in Lagos, Nairobi, or Dhaka with unparalleled profit margins. Every battery pack undergoes rigorous 100% inline thermal stress testing, cell-matching, and capacity grading, ensuring your end-customers receive a product that lasts well beyond its 6000-cycle warranty.</p>
      <br/>
      <h3>Why Partner with JoyHand for LFP Storage?</h3>
      <ul>
        <li><strong>Tropical Climate Optimization:</strong> Our custom BMS architecture includes proprietary thermal throttling, ensuring the battery core remains stable even in non-air-conditioned utility rooms common in West Africa.</li>
        <li><strong>Customs & Logistics Mastery:</strong> We provide full UN38.3, CE, and UL testing documentation, dramatically accelerating port clearance times. We routinely manage end-to-end container freight from China directly to Apapa Port, saving you thousands in logistics overhead.</li>
        <li><strong>Massive Scalability:</strong> Our high-voltage rack systems and modular low-voltage wall units support advanced parallel stringing, capable of scaling from a 5kWh home backup to a 100kWh commercial mini-grid.</li>
      </ul>
      <br/>
      <h3>Distributor FAQ</h3>
      <p><strong>Q: What is the typical lead time for a 40HQ container of LFP batteries?</strong><br/>A: Production lead times depend heavily on specific product configurations, total order volume, and custom OEM branding requirements. For an accurate manufacturing and shipping timeline, please contact our sourcing team with your exact specifications.</p>
      <p><strong>Q: Can we apply our own brand to your battery chassis (OEM)?</strong><br/>A: Yes. Over 60% of our production volume is OEM/ODM. We offer laser engraving, custom sheet metal color matching, and bespoke firmware interfaces that load your company's logo on the LCD display.</p>
    `
  },
  "solar-inverters": {
    title: "Wholesale Hybrid Inverter Production",
    filterCategory: "inverter",
    image: "/homeImg/energyPlatformImage002.jpg",
    description: "Direct OEM production of hybrid and off-grid solar inverters. Engineered for grid stability in Nigeria. Get a custom B2B quote in 24h.",
    keywords: "hybrid inverter factory, off-grid inverter OEM, pure sine wave inverter, solar power conversion",
    seoContent: `
      <h2>Heavy-Duty Solar Hybrid Inverters Built for Unstable Grids</h2>
      <p>In regions where the municipal grid is unpredictable, an off-the-shelf inverter will fail prematurely. JoyHand Energy’s line of <strong>Hybrid and Off-Grid Solar Inverters</strong> are fundamentally different. Engineered with heavy-duty copper transformers and over-specced pure sine wave circuitry, our inverters absorb massive surge loads from water pumps, industrial air conditioners, and heavy machinery without tripping.</p>
      <p>We supply massive volumes of IP54-rated outdoor inverters and high-frequency parallel units to EPC contractors, real estate developers, and solar distributors worldwide. Our proprietary grid-bypass logic senses voltage drops in milliseconds, switching to battery power so fast that sensitive electronics never reboot. This is the ultimate factory-direct solution for combating load-shedding and rolling blackouts.</p>
      <br/>
      <h3>The JoyHand Engineering Advantage</h3>
      <ul>
        <li><strong>Surge Protection Architecture:</strong> Designed specifically for the Nigerian and South Asian markets, our internal AC breakers can handle chaotic voltage spikes, protecting the sensitive MPPT solar charge controllers inside.</li>
        <li><strong>Plug-and-Play LFP Communication:</strong> Every JoyHand inverter is pre-flashed with communication protocols that natively talk to our LiFePO4 battery BMS, maximizing charging efficiency and completely eliminating manual voltage configuration errors by local installers.</li>
        <li><strong>True Parallel Capability:</strong> Need to power a hospital or a factory? Distribute our inverters and link up to 9 units in parallel or 3-phase configurations, unlocking massive megawatts of off-grid power.</li>
      </ul>
      <br/>
      <h3>Distributor FAQ</h3>
      <p><strong>Q: Do these inverters support generator auto-start functionality?</strong><br/>A: Yes, all our hybrid models feature built-in dry contacts. When the lithium battery bank drops below a customizable threshold (e.g., 20%), the inverter automatically sends a signal to start the diesel generator, creating a flawless tri-power hybrid system.</p>
      <p><strong>Q: Are your inverters capable of feeding power back into the grid (Net Metering)?</strong><br/>A: We offer both strictly off-grid models (zero export) and fully certified grid-tied hybrid models depending on your local regulatory environment.</p>
    `
  },
  "portable-power-stations": {
    title: "Portable Power Station OEM Manufacturing",
    filterCategory: "portable-power",
    image: "/homeImg/energyPlatformImage003.jpg",
    description: "Manufacturer direct portable power stations. Optimized for emergency backup during blackouts in Africa. Low MOQs for distributors.",
    keywords: "portable power station factory, solar generator OEM, lithium power station wholesale, mobile backup power",
    seoContent: `
      <h2>Wholesale Portable Power Stations for Off-Grid and Emergency Use</h2>
      <p>As remote work and outdoor logistics boom, the market for massive-capacity portable power is experiencing exponential growth. JoyHand Energy’s <strong>Lithium-ion and LiFePO4 Portable Power Stations</strong> are not basic camping accessories—they are industrial-grade solar generators engineered to keep mobile clinics, remote construction sites, and entire households running during extended power failures.</p>
      <p>Unlike consumer-grade units that take 8 hours to charge, our advanced dual-inverter architecture allows for extreme fast-charging from an AC wall outlet or direct solar panel input in under 2 hours. We supply these units in bulk to retail chains, disaster relief NGOs, and telecom field crews across Africa and the Middle East, offering a rugged, fume-free alternative to traditional gasoline generators.</p>
      <br/>
      <h3>Key Market Advantages</h3>
      <ul>
        <li><strong>Simultaneous Pass-Through Charging:</strong> The internal BMS allows users to charge the power station via solar while simultaneously powering AC heavy loads like refrigerators or medical equipment.</li>
        <li><strong>Commercial Safety Standards:</strong> Built with automotive-grade lithium cells, our units are wrapped in fire-retardant, drop-resistant ABS+PC shells. They possess full UN38.3 certification for safe international freight.</li>
        <li><strong>Universal Output Panels:</strong> Designed for global distribution, we manufacture models with US, UK, EU, and Universal AC socket configurations, paired with 100W USB-C PD ports for modern electronics.</li>
      </ul>
      <br/>
      <h3>Distributor FAQ</h3>
      <p><strong>Q: Can these replace a small gasoline generator?</strong><br/>A: Yes. A 2000W JoyHand power station can comfortably run full-size refrigerators, power tools, and medical CPAP machines without the noise, maintenance, or toxic fumes of a petrol generator.</p>
    `
  },
  "electric-mobility": {
    title: "E-Mobility & EV Battery Solutions",
    filterCategory: "electric-mobility",
    image: "/homeImg/energyPlatformImage04.jpg",
    description: "Factory engineering for electric motorcycles and fleet systems. Rugged battery designs built for global distributors. Bulk export pricing.",
    keywords: "e-mobility solutions, EV battery OEM, electric vehicle manufacturing, electric motorcycle battery, mobility fleet supply",
    seoContent: `
      <h2>Industrial E-Mobility and EV Battery Solutions for Commercial Fleets</h2>
      <p>The transition to electric logistics requires battery architectures that can survive severe potholes, extreme heat, and heavy daily payloads. JoyHand Energy is a premier OEM manufacturer of <strong>Electric Motorcycles, Cargo E-Bikes, and Custom EV Battery Packs</strong> designed specifically for delivery fleets, ride-sharing operations, and last-mile logistics in developing mega-cities.</p>
      <p>Our EV division doesn't just assemble bikes; we engineer the entire powertrain. By utilizing high-density NCA and LFP cells enclosed in IP67-rated waterproof laser-welded aluminum casings, we guarantee our batteries will survive monsoon seasons and intense tropical heat. We partner directly with fleet operators and national distributors to provide bulk vehicles at factory-floor prices.</p>
      <br/>
      <h3>The JoyHand E-Mobility Ecosystem</h3>
      <ul>
        <li><strong>Swappable Battery Architecture:</strong> Eliminate charging downtime. Our fleet motorcycles are designed around a universal swappable battery ecosystem, allowing riders to swap a depleted battery for a fully charged one in under 30 seconds.</li>
        <li><strong>Reinforced Chassis Design:</strong> Knowing the road conditions in markets like Lagos and Nairobi, our e-motorcycles feature heavy-duty suspension systems and reinforced steel frames capable of carrying 200kg+ payloads daily.</li>
        <li><strong>Smart Fleet Telematics:</strong> Optional IoT modules can be integrated directly into our EV BMS, allowing fleet managers to track GPS location, battery health, and rider behavior in real-time.</li>
      </ul>
      <br/>
      <h3>Distributor FAQ</h3>
      <p><strong>Q: Can you manufacture custom battery packs for our existing electric tricycles (Kekes)?</strong><br/>A: Absolutely. Our ODM engineering team can design custom CAD enclosures and BMS profiles to retrofit or power your specific electric tricycles, golf carts, or marine outboards.</p>
    `
  },
  "power-banks": {
    title: "Wholesale PD Fast Power Bank Supply",
    filterCategory: "power-bank",
    image: "/homeImg/energyPlatformImage005.jpg",
    description: "High-volume power bank manufacturing. Direct wholesale supply for retail networks and telecom distributors in Nigeria & South Asia.",
    keywords: "power bank factory, fast charger manufacturer, bulk power banks, PD charging wholesale",
    seoContent: `
      <h2>Wholesale PD Fast Power Banks: Direct OEM Manufacturing</h2>
      <p>The global smartphone accessory market requires rapid innovation and massive scale. JoyHand Energy’s consumer electronics division is a leading OEM factory for <strong>High-Capacity Power Banks and Mobile Power Accessories</strong>. Producing over a million units annually, we supply major retail brands, telecom operators, and consumer tech distributors across the globe.</p>
      <p>We do not sell generic, low-quality lithium-polymer cells. Our entire catalog features true-capacity batteries with advanced Power Delivery (PD 20W/65W/100W) chipsets, allowing users to charge laptops, tablets, and smartphones simultaneously at maximum speed. By bypassing trading companies and sourcing directly from our factory lines, your brand secures maximum profit margins with zero compromises on safety.</p>
      <br/>
      <h3>Why Source Power Banks from JoyHand?</h3>
      <ul>
        <li><strong>Full OEM/ODM Branding:</strong> We offer complete white-label services. From laser-engraving your corporate logo on the anodized aluminum shell to designing custom retail packaging and user manuals, we deliver a shelf-ready product.</li>
        <li><strong>Advanced Feature Sets:</strong> Our catalog includes magnetic wireless charging (MagSafe compatible), ultra-slim pocket designs, rugged waterproof models for outdoor retail, and massive 60,000mAh camping power banks with built-in LED lanterns.</li>
        <li><strong>Strict Compliance & Safety:</strong> Every power bank is certified for safe commercial airline transport (UN38.3). Our internal PCB designs feature over-charge, over-discharge, and short-circuit protection.</li>
      </ul>
      <br/>
      <h3>Distributor FAQ</h3>
      <p><strong>Q: What is the MOQ for custom-branded (OEM) power banks?</strong><br/>A: For standard models with laser-engraved logos, our MOQ starts as low as 1,000 units. For fully custom ODM molds and packaging, please consult our engineering team.</p>
    `
  },
  "accessories": {
    title: "Wholesale Tech & Energy Accessories",
    filterCategory: "accessories",
    image: "/homeImg/energyPlatformImage06.jpg",
    description: "Comprehensive factory-direct OEM supply. From wholesale solar panels and LED street lights to bulk USB-C fast charging cables and MagSafe-compatible chargers for global distributors.",
    keywords: "wholesale solar panels, LED street lights factory, wholesale iPhone accessories, bulk USB-C fast charging cables, OEM phone accessories, high-speed GaN adapters, off-grid hardware",
    seoContent: `
      <h2>Comprehensive OEM Tech & Off-Grid Energy Accessories</h2>
      <p>Whether you are deploying rural mini-grids in low-infrastructure regions or distributing consumer electronics to major global retail chains, JoyHand Energy serves as your single-source OEM manufacturer. Our accessory division bridges the gap between heavy-duty off-grid solar hardware and premium, high-margin mobile tech accessories.</p>
      <br/>
      <h3>Solar Infrastructure & Off-Grid Hardware</h3>
      <p>For our partners in developing markets and EPC contractors, we supply the critical components needed to complete your energy ecosystem. This includes high-efficiency monocrystalline solar panels (up to 550W+), rugged commercial LED solar street lights, and the heavy-duty pure copper cabling required to pass strict commercial safety inspections in off-grid deployments.</p>
      <br/>
      <h3>Premium Mobile Tech & Consumer Electronics</h3>
      <p>In addition to our heavy hardware, we manufacture massive volumes of consumer mobile accessories tailored for rapid global distribution. We completely bypass low-quality generic materials, featuring nylon-braided USB-C PD 100W fast charging cables, high-speed wall adapters, and extremely durable MFi-certified data cables. Every consumer tech product holds full international certifications (CE, FCC, RoHS), ensuring seamless customs clearance and premium retail-ready quality for any market.</p>
      <br/>
      <h3>Why JoyHand is the Preferred OEM Partner</h3>
      <ul>
        <li><strong>Consolidated Logistics:</strong> Source your solar panels, installation hardware, and mobile tech from a single ISO 9001:2015 factory, massively reducing your container freight complexity.</li>
        <li><strong>Custom Retail Packaging:</strong> For our consumer tech lines, our in-house design team produces premium packaging complete with your brand’s logo, barcodes, and custom inserts, ready for immediate retail or e-commerce fulfillment.</li>
      </ul>
    `
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
