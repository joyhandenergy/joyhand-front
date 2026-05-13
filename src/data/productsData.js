export const productData = [
  // ===== BATTERIES =====
  {
    id: "bat-001",
    slug: "wall-mount-battery-51-2v-200ah",
    name: "Wall Mount Battery Pack",
    model: "51.2V200AH",
    category: "battery",
    type: "wall-mounted",
    description: "10kW LFP battery pack with WiFi/Bluetooth touchscreen. Perfect for residential and commercial energy storage applications.",
    specifications: {
      nominalVoltage: "51.2V",
      capacity: "200Ah",
      energy: "10.24kWh",
      bms: "16S 150A with WiFi/Bluetooth touch screen",
      cellType: "LFP 3.2V200AH",
      dimensions: "720 × 420 × 160mm",
      weight: "76kg",
      grossWeight: "90kg",
      chargeCurrent: "150A",
      dischargeCurrent: "150A",
      workingVoltage: "44.8V ~ 56.8V",
      cycleLife: "6000+ cycles",
      ipRating: "IP20"
    },
    features: [
      "Wall-mounted design for space saving",
      "Smart BMS with touchscreen interface",
      "WiFi & Bluetooth monitoring via mobile app",
      "LFP safe chemistry with long cycle life",
      "Parallel connection capable"
    ],
    applications: [
      "Home energy storage",
      "Solar backup systems",
      "UPS applications",
      "Peak shaving"
    ],
    image: "/productImg/s-battery/solarbattery01.jpg",
    gallery: [
      "/productImg/s-battery/solarbattery01a.jpg",
      "/productImg/s-battery/solarbattery01b.jpg",
      "/productImg/s-battery/solarbattery01.jpg"
    ],
    datasheet: "/datasheets/51.2V200AH.pdf",
    certifications: ["CE", "UL", "IEC", "UN38.3"],
    warranty: "5 years",
    inStock: true,
    youtubeVideoId: "HHInOw0G3_I"
  },
  {
    id: "bat-002",
    slug: "wall-mount-battery-51-2v-300ah",
    name: "Wall Mount Battery Pack",
    model: "51.2V300AH",
    category: "battery",
    type: "wall-mounted",
    description: "15kW high capacity LFP battery pack for demanding energy storage applications.",
    specifications: {
      nominalVoltage: "51.2V",
      capacity: "300Ah",
      energy: "15.36kWh",
      bms: "16S 200A",
      cellType: "LFP 3.2V300AH",
      dimensions: "800 × 560 × 185mm",
      weight: "112kg",
      grossWeight: "135kg",
      chargeCurrent: "200A",
      dischargeCurrent: "200A",
      workingVoltage: "44.8V ~ 56.8V",
      cycleLife: "6000+ cycles",
      ipRating: "IP20"
    },
    features: [
      "Wall-mounted design",
      "High capacity BMS for demanding applications",
      "LFP safe chemistry",
      "Long cycle life",
      "Expandable system"
    ],
    applications: [
      "Commercial energy storage",
      "Large solar installations",
      "Industrial backup power"
    ],
    image: "/productImg/s-battery/solarbattery2.jpg",
    gallery: [
      "/productImg/s-battery/solarbattery02a.jpg",
      "/productImg/s-battery/solarbattery02b.jpg",
      "/productImg/s-battery/solarbattery02c.jpg",
      "/productImg/s-battery/solarbattery2.jpg"
    ],
    datasheet: "/datasheets/51.2V300AH.pdf",
    certifications: ["CE", "IEC"],
    warranty: "5 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "bat-003",
    slug: "mobile-battery-pack-51-2v-400ah-ls",
    name: "Mobile Battery Pack",
    model: "51.2V400AH-LS",
    category: "battery",
    type: "mobile",
    description: "20kW wheeled battery pack with smart BMS and WiFi/Bluetooth monitoring.",
    specifications: {
      nominalVoltage: "51.2V",
      capacity: "400Ah",
      energy: "20.48kWh",
      bms: "16S 200A with WiFi/Bluetooth touch screen",
      cellType: "LFP 3.2V400AH",
      dimensions: "670 × 300 × 800mm",
      weight: "133kg",
      grossWeight: "150kg",
      chargeCurrent: "200A",
      dischargeCurrent: "200A",
      cycleLife: "6000+ cycles"
    },
    features: [
      "Mobile design with heavy-duty wheels",
      "Smart BMS with touchscreen display",
      "WiFi & Bluetooth monitoring via mobile app",
      "Ultra high capacity",
      "Industrial grade construction"
    ],
    applications: [
      "Large mobile power stations",
      "Event power supply",
      "Remote construction sites",
      "Emergency response"
    ],
    image: "/productImg/s-battery/solarbattery03.jpg",
    gallery: [
      "/productImg/s-battery/solarbattery03a.jpg",
      "/productImg/s-battery/solarbattery03b.jpg"
    ],
    datasheet: "/datasheets/51.2V400AH-LS.pdf",
    certifications: ["CE"],
    warranty: "3 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "bat-004",
    slug: "mobile-battery-pack-51-2v-314ah",
    name: "Mobile Battery Pack",
    model: "51.2V314AH",
    category: "battery",
    type: "mobile",
    description: "16kW wheeled battery pack with LFP 314Ah cells. Portable power for on-the-go applications.",
    specifications: {
      nominalVoltage: "51.2V",
      capacity: "314Ah",
      energy: "16.08kWh",
      bms: "16S 200A",
      cellType: "LFP 3.2V314AH",
      dimensions: "680 × 250 × 510mm",
      weight: "116kg",
      grossWeight: "133kg",
      chargeCurrent: "200A",
      dischargeCurrent: "200A",
      chargeCutoff: "58.4V",
      dischargeCutoff: "40V",
      cycleLife: "6000+ cycles"
    },
    features: [
      "Mobile design with heavy-duty wheels",
      "Easy transportation and positioning",
      "High capacity industrial grade BMS",
      "LFP safe chemistry",
      "Built-in handle for maneuvering"
    ],
    applications: [
      "Mobile power stations",
      "Temporary power for events",
      "Construction sites",
      "Emergency backup"
    ],
    image: "/images/productImg/battery3.jpg",
    gallery: [],
    datasheet: "/datasheets/51.2V314AH.pdf",
    certifications: ["CE", "UN38.3"],
    warranty: "3 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "bat-005",
    slug: "s-series-battery-gw-51-2-100-b",
    name: "S-Series Battery",
    model: "GW-51.2/100-B",
    category: "battery",
    type: "rack-mounted",
    description: "10.24kWh LFP battery with integrated LCD screen for real-time monitoring.",
    specifications: {
      nominalVoltage: "51.2V",
      capacity: "200Ah",
      energy: "10.24kWh",
      bms: "LCD screen display with intelligent BMS",
      cellType: "LFP",
      dimensions: "1020 × 510 × 295mm",
      chargeCurrent: "150A",
      dischargeCurrent: "150A",
      workingVoltage: "44.8V ~ 56.8V",
      ipRating: "IP20",
      cooling: "Natural cooling",
      altitude: "≤4000m",
      temperature: {
        discharge: "-10℃ ~ 55℃",
        charge: "0℃ ~ 45℃",
        storage: "-20℃ ~ 95℃"
      }
    },
    features: [
      "Integrated LCD screen display",
      "Rack mountable design",
      "Natural cooling system",
      "High altitude capable (4000m)",
      "Intelligent BMS"
    ],
    applications: [
      "Server room backup",
      "Telecom applications",
      "Industrial control systems"
    ],
    image: "/images/productImg/s-battery1.png",
    gallery: [],
    datasheet: "/datasheets/GW-51.2-100-B.pdf",
    certifications: ["CE", "IEC"],
    warranty: "5 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "bat-006",
    slug: "s-series-battery-gw-51-2-300-b",
    name: "S-Series Battery",
    model: "GW-51.2/300-B",
    category: "battery",
    type: "rack-mounted",
    description: "15.56kWh high capacity LFP battery with LCD display for professional applications.",
    specifications: {
      nominalVoltage: "51.2V",
      capacity: "304Ah",
      energy: "15.565kWh",
      bms: "LCD screen display with intelligent BMS",
      cellType: "LFP",
      dimensions: "1020 × 510 × 295mm",
      chargeCurrent: "200A",
      dischargeCurrent: "200A",
      workingVoltage: "44.8V ~ 56.8V",
      ipRating: "IP20"
    },
    features: [
      "Integrated LCD screen display",
      "Higher capacity version",
      "Rack mountable",
      "Natural cooling"
    ],
    applications: [
      "Data centers",
      "Telecom infrastructure",
      "Industrial backup"
    ],
    image: "/images/productImg/s-battery2.png",
    gallery: [],
    datasheet: "/datasheets/GW-51.2-300-B.pdf",
    certifications: ["CE", "IEC"],
    warranty: "5 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "bat-007",
    slug: "lithium-battery-51-2v-100ah",
    name: "Lithium Battery Pack",
    model: "51.2V100AH",
    category: "battery",
    type: "solar-storage",
    description: "Compact 5.12kWh LiFePO4 battery designed for residential and small solar energy storage applications.",
    specifications: {
      nominalVoltage: "51.2V",
      capacity: "100Ah",
      energy: "5.12kWh",
      bms: "50A charge / 100A discharge",
      cellType: "LiFePO4",
      chargeCurrent: "50A",
      dischargeCurrent: "100A"
    },
    features: [
      "Compact and lightweight design",
      "Long lifespan LiFePO4 chemistry",
      "Stable performance for solar systems",
      "Integrated BMS protection",
      "Easy installation"
    ],
    applications: [
      "Home solar systems",
      "Small energy storage setups",
      "Backup power",
      "Off-grid solutions"
    ],
    image: "/images/productImg/inverter4.jpg",
    gallery: [],
    datasheet: "",
    certifications: ["CE", "UN38.3"],
    warranty: "3 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "bat-008",
    slug: "lithium-battery-51-2v-200ah",
    name: "Lithium Battery Pack",
    model: "51.2V200AH",
    category: "battery",
    type: "solar-storage",
    description: "Mid-capacity 10.24kWh LiFePO4 battery suitable for residential and commercial solar storage systems.",
    specifications: {
      nominalVoltage: "51.2V",
      capacity: "200Ah",
      energy: "10.24kWh",
      bms: "100A charge / 200A discharge",
      cellType: "LiFePO4",
      chargeCurrent: "100A",
      dischargeCurrent: "200A"
    },
    features: [
      "High energy density",
      "Reliable LiFePO4 chemistry",
      "Advanced BMS protection",
      "Expandable for larger systems",
      "Long cycle life"
    ],
    applications: [
      "Residential solar storage",
      "Commercial backup systems",
      "Off-grid installations",
      "Energy storage solutions"
    ],
    image: "/images/productImg/inverter5.jpg",
    gallery: [],
    datasheet: "",
    certifications: ["CE", "UN38.3"],
    warranty: "3 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "bat-009",
    slug: "lithium-battery-51-2v-314ah",
    name: "Lithium Battery Pack",
    model: "51.2V314AH",
    category: "battery",
    type: "solar-storage",
    description: "High-capacity 16.08kWh LiFePO4 battery built for demanding solar storage and industrial energy applications.",
    specifications: {
      nominalVoltage: "51.2V",
      capacity: "314Ah",
      energy: "16.08kWh",
      bms: "200A charge / 200A discharge",
      cellType: "LiFePO4",
      chargeCurrent: "200A",
      dischargeCurrent: "200A",
      chargeCutoff: "58.4V",
      dischargeCutoff: "40V"
    },
    features: [
      "High capacity for large systems",
      "Industrial-grade BMS",
      "Safe and stable LiFePO4 chemistry",
      "Long lifecycle performance",
      "Suitable for heavy-duty usage"
    ],
    applications: [
      "Large solar storage systems",
      "Industrial energy storage",
      "Backup power systems",
      "Off-grid power solutions"
    ],
    image: "/images/productImg/inverter6.jpg",
    gallery: [],
    datasheet: "",
    certifications: ["CE", "UN38.3"],
    warranty: "3 years",
    inStock: true,
    youtubeVideoId: null
  },
  // ===== HYBRID INVERTERS =====
  {
    id: "inv-001",
    slug: "hybrid-inverter-hf-6-2kw-48v",
    name: "6.5kW Hybrid Inverter",
    model: "HF-6.2KW-48V",
    category: "inverter",
    type: "hybrid",
    description: "6.2kW high frequency hybrid inverter with 500V MPPT. Perfect for residential solar systems.",
    specifications: {
      power: "6200W",
      dcInput: "48V 135A",
      acInput: "230V 40A",
      acOutput: "230V 27A",
      acChargeCurrent: "80A max",
      maxChargeCurrent: "120A",
      mpptVoltage: "60V ~ 450V",
      maxPvPower: "6500W",
      topology: "High frequency",
      efficiency: "93%",
      weight: "8.7kg",
      grossWeight: "9.55kg",
      dimensions: "422 × 297 × 108mm"
    },
    features: [
      "UPS function <10ms transfer time",
      "Automatic power transfer between grid, solar and battery",
      "MPPT 500V/120A",
      "120A AC charger",
      "Supports up to 9kW PV input",
      "LCD display for monitoring"
    ],
    applications: [
      "Residential solar systems",
      "Home backup power",
      "Self-consumption optimization"
    ],
    image: "/images/productImg/inverter001.jpg",
    gallery: [],
    datasheet: "/datasheets/HF-6.2KW-48V.pdf",
    certifications: ["CE", "IEC 62109"],
    warranty: "2 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "inv-002",
    slug: "hybrid-inverter-hf-12kw-48v",
    name: "12kW Hybrid Inverter",
    model: "HF-12KW-48V",
    category: "inverter",
    type: "hybrid",
    description: "12kW high frequency hybrid inverter with overload bypass for commercial applications.",
    specifications: {
      power: "12000W",
      dcInput: "48V 220A",
      acInput: "230V 60A",
      acOutput: "230V 47.8A",
      acChargeCurrent: "160A max",
      maxChargeCurrent: "160A",
      mpptVoltage: "60V ~ 450V",
      maxPvPower: "15000W",
      topology: "High frequency",
      efficiency: "94%",
      weight: "14.55kg",
      grossWeight: "16.3kg",
      dimensions: "520 × 340 × 145mm"
    },
    features: [
      "Overload bypass function",
      "Automatic grid transfer",
      "MPPT 500V/160A",
      "160A AC charger",
      "Supports up to 15kW PV input",
      "Parallel operation capable"
    ],
    applications: [
      "Commercial solar systems",
      "Large home installations",
      "Small business backup"
    ],
    image: "/images/productImg/inverter001.jpg",
    gallery: [],
    datasheet: "/datasheets/HF-12KW-48V.pdf",
    certifications: ["CE", "IEC 62109"],
    warranty: "2 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "inv-003",
    slug: "hybrid-inverter-hf-12kw-48v-ip54",
    name: "12kW Hybrid Inverter IP54",
    model: "HF-12KW-48V-IP54",
    category: "inverter",
    type: "hybrid",
    description: "12kW hybrid inverter with IP54 weather protection and parallel capability for up to 12 units.",
    specifications: {
      power: "12000W",
      dcInput: "48V",
      acChargeCurrent: "210A",
      maxChargeCurrent: "210A",
      mpptVoltage: "60V ~ 450V",
      maxPvPower: "16000W",
      ipRating: "IP54",
      parallelSupport: "Up to 12 units",
      efficiency: "94%"
    },
    features: [
      "IP54 weather protection for outdoor installation",
      "Parallel up to 12 units for scalability",
      "Overload bypass",
      "Automatic power transfer",
      "Supports up to 16kW PV input"
    ],
    applications: [
      "Outdoor solar installations",
      "Large commercial systems",
      "Industrial applications"
    ],
    image: "/images/productImg/inverter3.jpg",
    gallery: [],
    datasheet: "/datasheets/HF-12KW-48V-IP54.pdf",
    certifications: ["CE", "IP54", "IEC 62109"],
    warranty: "2 years",
    inStock: true,
    youtubeVideoId: null
  },
  // ===== WALL MOUNTED INVERTERS =====
  {
    id: "inv-004",
    slug: "wall-mounted-inverter-em6200-48l",
    name: "Wall Mounted Inverter",
    model: "EM6200-48L",
    category: "inverter",
    type: "wall-mounted",
    description: "6200W wall mounted inverter for space-saving installations.",
    specifications: {
      power: "6200W",
      dcInput: "48V 135A",
      acInput: "230V 40A",
      acOutput: "230V 27A",
      acChargeCurrent: "80A max (default 30A)",
      maxChargeCurrent: "120A",
      mpptVoltage: "60V ~ 450V",
      maxPvPower: "6500W",
      weight: "8.7kg",
      grossWeight: "9.55kg",
      dimensions: "422 × 297 × 108mm"
    },
    features: [
      "Wall mounted design saves floor space",
      "Single unit operation",
      "LCD display",
      "Multiple working modes"
    ],
    applications: [
      "Residential installations",
      "Space-constrained locations"
    ],
    image: "/images/productImg/battery5.jpg",
    gallery: [],
    datasheet: "/datasheets/EM6200-48L.pdf",
    certifications: ["CE"],
    warranty: "2 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "inv-005",
    slug: "wall-mounted-inverter-m6200-48pl",
    name: "Wall Mounted Inverter",
    model: "M6200-48PL",
    category: "inverter",
    type: "wall-mounted",
    description: "6200W wall mounted inverter with parallel capability for scalable power.",
    specifications: {
      power: "6200W",
      dcInput: "48V 135A",
      acInput: "230V 40A",
      acOutput: "230V 27A",
      acChargeCurrent: "80A max (default 30A)",
      maxChargeCurrent: "120A",
      mpptVoltage: "60V ~ 430V",
      maxPvPower: "6500W",
      weight: "9.7kg",
      grossWeight: "10.6kg",
      dimensions: "442 × 307 × 118mm"
    },
    features: [
      "Wall mounted design",
      "Parallel operation capable",
      "Expandable power",
      "LCD display"
    ],
    applications: [
      "Scalable residential systems",
      "Growing energy needs"
    ],
    image: "/images/productImg/battery6.jpg",
    gallery: [],
    datasheet: "/datasheets/M6200-48PL.pdf",
    certifications: ["CE"],
    warranty: "2 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "inv-006",
    slug: "wall-mounted-inverter-em11000-48l",
    name: "Wall Mounted Inverter",
    model: "EM11000-48L",
    category: "inverter",
    type: "wall-mounted",
    description: "11000W high power wall mounted inverter with dual MPPT for maximum energy harvest.",
    specifications: {
      power: "11000W",
      dcInput: "48V 220A",
      acInput: "230V 60A",
      acOutput: "230V 47.8A",
      acChargeCurrent: "120A max (default 60A)",
      maxChargeCurrent: "160A",
      mpptVoltage: "60V ~ 430V",
      maxPvPower: "11000W (5500W + 5500W)",
      weight: "14.55kg",
      grossWeight: "16.3kg",
      dimensions: "520 × 340 × 145mm"
    },
    features: [
      "Wall mounted high power design",
      "Dual MPPT for complex solar arrays",
      "High power output",
      "Advanced LCD display"
    ],
    applications: [
      "Large residential systems",
      "Small commercial installations"
    ],
    image: "/images/productImg/battery7.jpg",
    gallery: [],
    datasheet: "/datasheets/EM11000-48L.pdf",
    certifications: ["CE"],
    warranty: "2 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "inv-007",
    slug: "wall-mounted-inverter-em11000-48l-p",
    name: "Wall Mounted Inverter",
    model: "EM11000-48L-P",
    category: "inverter",
    type: "wall-mounted",
    description: "11000W wall mounted inverter with parallel capability and dual MPPT.",
    specifications: {
      power: "11000W",
      dcInput: "48V 220A",
      acInput: "230V 60A",
      acOutput: "230V 47.8A",
      acChargeCurrent: "120A max (default 60A)",
      maxChargeCurrent: "160A",
      mpptVoltage: "60V ~ 430V",
      maxPvPower: "11000W (5500W + 5500W)"
    },
    features: [
      "Wall mounted design",
      "Parallel operation capable",
      "Dual MPPT",
      "High power output"
    ],
    applications: [
      "Scalable commercial systems",
      "High demand installations"
    ],
    image: "/images/productImg/battery8.jpg",
    gallery: [],
    datasheet: "/datasheets/EM11000-48L-P.pdf",
    certifications: ["CE"],
    warranty: "2 years",
    inStock: true,
    youtubeVideoId: null
  },
  // ===== ELECTRIC MOBILITY =====
  {
    id: "em-004",
    slug: "lead-acid-scooter-72v-20ah-500w",
    name: "Lead-Acid Electric Scooter",
    model: "Scooter-500W",
    category: "electric-mobility",
    type: "scooter",
    description: "Reliable electric scooter with 500W motor and 72V 20Ah lead-acid battery. Ideal for daily commuting and local deliveries with 80-100km range.",
    specifications: {
      modelNo: "Scooter-500W",
      netWeight: "36.8 kg",
      grossWeight: "42.38 kg",
      packagingSize: "1280 × 330 × 730 mm",
      battery: "72V 20Ah (6 lead-acid batteries)",
      maxSpeed: "25 – 40 km/h",
      maxRange: "80 – 100 km",
      ratedPower: "500W (18×1.6 magnetic steel)",
      controller: "12-tube controller",
      alarm: "Dual remote alarm",
      dashboard: "Common dashboard",
      frontFork: "Hydraulic front fork",
      tires: "3.00-10 tubeless",
      containerLoading: "210 units per 40HQ"
    },
    features: [
      "Reliable 500W motor for consistent performance",
      "Long 80-100km range on full charge",
      "Hydraulic front fork for smooth ride",
      "Dual remote anti-theft alarm",
      "Tubeless tires for puncture resistance"
    ],
    applications: [
      "Daily urban commuting",
      "Local delivery services",
      "Campus transportation"
    ],
    image: "/productImg/e-mobility/emobilitymoto06.jpg",
    gallery: [
      "/productImg/e-mobility/emobilitymoto06a.jpg",
      "/productImg/e-mobility/emobilitymoto06.jpg"
    ],
    datasheet: "",
    certifications: ["CE"],
    warranty: "1 year",
    inStock: true,
    containerCapacity: {
      "40HQ": "210 pcs"
    },
    youtubeVideoId: null
  },
  {
    id: "em-005",
    slug: "youqo-14-inch-scooter-650w",
    name: "14-Inch Electric Scooter",
    model: "YOUQO-14",
    category: "electric-mobility",
    type: "scooter",
    description: "Powerful 650W electric scooter with NFC color display and dual disc brakes. Built for comfort and security with hydraulic suspension and tubeless tires.",
    specifications: {
      modelNo: "YOUQO-14",
      topSpeed: "45 – 50 km/h",
      maxRange: "60 – 80 km",
      motor: "650W hub motor",
      battery: "72V 20Ah lead-acid (6 x 12V 20Ah)",
      controller: "Heavy-duty 12-tube controller",
      braking: "Dual hydraulic disc brakes (front & rear)",
      dashboard: "NFC-enabled digital color display",
      security: "Dual remote anti-theft alarm",
      frontSuspension: "Hydraulic telescopic forks",
      tires: "3.00-10 tubeless all-terrain",
      cargo: "Front steel basket + rear cargo rack",
      netWeight: "52.7 kg",
      grossWeight: "56.2 kg",
      packagingSize: "1680 × 310 × 730 mm (light installed) / 1640 × 310 × 730 mm (light removed)",
      containerLoading: "165 units per 40HQ"
    },
    features: [
      "650W high-torque motor for hills and heavy loads",
      "NFC digital dashboard with keyless start",
      "Dual hydraulic disc brakes for safe stopping",
      "Hydraulic front forks for bump absorption",
      "Integrated front basket and rear cargo rack",
      "Dual remote anti-theft alarm system"
    ],
    applications: [
      "Heavy-duty commuting",
      "Last-mile delivery with cargo",
      "Urban fleet operations"
    ],
    image: "/productImg/e-mobility/emobilitymoto03.jpg",
    gallery: [
      "/productImg/e-mobility/emobilitymoto03a.jpg",
      "/productImg/e-mobility/emobilitymoto03.jpg"
    ],
    datasheet: "",
    certifications: ["CE"],
    warranty: "1 year",
    inStock: true,
    containerCapacity: {
      "40HQ": "165 pcs"
    },
    youtubeVideoId: null
  },
  {
    id: "em-006",
    slug: "small-folding-ebike-350w",
    name: "Small Folding E-Bike",
    model: "Folding-350W",
    category: "electric-mobility",
    type: "scooter",
    description: "Compact folding electric bike with 6 shocks and 350W motor. Lightweight and portable – perfect for mixed-mode commuting and easy storage.",
    specifications: {
      modelNo: "小折叠 6减震 前后鼓刹",
      netWeight: "25.6 kg",
      grossWeight: "29.2 kg",
      packagingSize: "1290 × 200 × 640 mm",
      battery: "48V 12Ah lithium battery (optional)",
      maxSpeed: "25 – 35 km/h",
      maxRange: "25 – 30 km",
      ratedPower: "350 W",
      controller: "Big 6-tube controller",
      alarm: "Dual remote alarm",
      dashboard: "Common dashboard",
      frontFork: "38-tube front fork",
      tires: "14 × 2.5 inch",
      containerLoading: "400 units per 40HQ"
    },
    features: [
      "Folding design for easy transport and storage",
      "6-shock suspension system for comfort",
      "Lightweight at only 25.6kg",
      "Dual remote anti-theft alarm",
      "Removable lithium battery option"
    ],
    applications: [
      "Mixed-mode commuting (bike + train/bus)",
      "Campus travel",
      "Recreational riding",
      "Apartment storage"
    ],
    image: "/productImg/e-mobility/emobilitybike01.jpg",
    gallery: [
      "/productImg/e-mobility/emobilitybike01a.jpg",
      "/productImg/e-mobility/emobilitybike01.jpg"
    ],
    datasheet: "",
    certifications: ["CE"],
    warranty: "1 year",
    inStock: true,
    containerCapacity: {
      "40HQ": "400 pcs"
    },
    youtubeVideoId: null
  },
  {
    id: "em-007",
    slug: "war-horse-electric-motorcycle-800w",
    name: "War Horse Electric Motorcycle",
    model: "War Horse",
    category: "electric-mobility",
    type: "motorcycle",
    description: "Aggressive War Horse electric motorcycle with 800W motor and 72V 20Ah lead-acid battery. High torque and long range for demanding riders.",
    specifications: {
      modelNo: "War Horse",
      netWeight: "64.5 kg",
      grossWeight: "66.5 kg",
      packagingSize: "1520 × 380 × 850 mm",
      battery: "72V 20Ah (6 lead-acid batteries)",
      maxSpeed: "25 – 60 km/h",
      maxRange: "100 – 110 km",
      ratedPower: "800W motor",
      controller: "12-tube controller",
      alarm: "Dual remote alarm",
      dashboard: "Digital card reader + NFC",
      frontFork: "Hydraulic front fork",
      tires: "3.00-10 tubeless",
      containerLoading: "136 units per 40HQ"
    },
    features: [
      "800W motor for strong acceleration",
      "Long 100-110km range",
      "NFC digital dashboard with keyless start",
      "Hydraulic front fork for stability",
      "Tubeless tires for puncture safety",
      "Dual remote anti-theft alarm"
    ],
    applications: [
      "Long-distance commuting",
      "Delivery services",
      "Rural transportation"
    ],
    image: "/productImg/e-mobility/emobilitymoto04.jpg",
    gallery: [
      "/productImg/e-mobility/emobilitymoto04a.jpg",
      "/productImg/e-mobility/emobilitymoto04.jpg"
    ],
    datasheet: "",
    certifications: ["CE"],
    warranty: "2 years",
    inStock: true,
    containerCapacity: {
      "40HQ": "136 pcs"
    },
    youtubeVideoId: null
  },
  {
    id: "em-008",
    slug: "big-tank-electric-motorcycle-800w",
    name: "Big Tank Electric Motorcycle",
    model: "Big Tank",
    category: "electric-mobility",
    type: "motorcycle",
    description: "Sturdy Big Tank electric motorcycle with 800W motor and 72V 20Ah lead-acid battery. Built for durability and comfortable long rides.",
    specifications: {
      modelNo: "大坦克 / Big Tank",
      netWeight: "62.38 kg",
      grossWeight: "64.78 kg",
      packagingSize: "1500 × 350 × 850 mm",
      battery: "72V 20Ah (6 lead-acid batteries)",
      maxSpeed: "25 – 60 km/h",
      maxRange: "60 – 80 km",
      ratedPower: "800W motor",
      controller: "12-tube controller",
      alarm: "Dual remote alarm",
      dashboard: "Digital display + NFC",
      frontFork: "Hydraulic front fork",
      tires: "163.0 tubeless tires",
      containerLoading: "136 units per 40HQ"
    },
    features: [
      "800W motor for reliable power",
      "NFC digital dashboard",
      "Hydraulic front fork for smooth ride",
      "Dual remote anti-theft system",
      "Tubeless tires for puncture resistance"
    ],
    applications: [
      "Daily commuting",
      "Light cargo delivery",
      "Urban transportation"
    ],
    image: "/productImg/e-mobility/emobilitymoto05.jpg",
    gallery: [
      "/productImg/e-mobility/emobilitymoto05a.jpg",
      "/productImg/e-mobility/emobilitymoto05.jpg"
    ],
    datasheet: "",
    certifications: ["CE"],
    warranty: "2 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "em-009",
    slug: "large-folding-ebike-350w",
    name: "Large Folding Electric Bike",
    model: "Large Folder",
    category: "electric-mobility",
    type: "scooter",
    description: "Large folding e-bike with 350W motor and removable lithium battery. Fat tires and AK LCD display make it versatile for city and light off-road.",
    specifications: {
      modelNo: "大折叠 (Large Folder)",
      netWeight: "36.5 kg",
      grossWeight: "38.5 kg",
      packagingSize: "1410 × 280 × 650 mm",
      battery: "48V 12Ah removable lithium battery",
      maxSpeed: "25 – 40 km/h",
      maxRange: "30 – 35 km",
      ratedPower: "350 W",
      controller: "Big 10-tube controller",
      alarm: "Dual remote control alarm",
      dashboard: "AK LCD instrument (5-speed electronic shifting)",
      frontFork: "38-tube front fork with front & rear disc brakes",
      tires: "20\" × 4.0 all-terrain snow tires",
      containerLoading: "256 units per 40HQ"
    },
    features: [
      "Large folding frame for easy storage",
      "Removable lithium battery for convenient charging",
      "AK LCD display with 5-speed electronic shifting",
      "Fat 4.0\" all-terrain tires for grip",
      "Front and rear disc brakes for safety",
      "Dual remote alarm system"
    ],
    applications: [
      "Mixed commuting (folding for public transit)",
      "Light off-road and snow riding",
      "Recreational cruising"
    ],
    image: "/productImg/e-mobility/emobilitybike02.jpg",
    gallery: [
      "/productImg/e-mobility/emobilitybike02a.jpg",
      "/productImg/e-mobility/emobilitybike02.jpg"
    ],
    datasheet: "",
    certifications: ["CE"],
    warranty: "1 year",
    inStock: true,
    containerCapacity: {
      "40HQ": "256 pcs"
    },
    youtubeVideoId: null
  },
  {
    id: "em-010",
    slug: "hongtu-electric-motorcycle-800w",
    name: "HongTu Electric Motorcycle",
    model: "HongTu (Hongyun)",
    category: "electric-mobility",
    type: "motorcycle",
    description: "HongTu electric motorcycle with 800W motor and 72V 20Ah lead-acid battery. Lockable pedals and disc brakes for versatile use.",
    specifications: {
      modelNo: "HongTu (Hongyun)",
      features: "Lockable pedals, front and rear disc brakes",
      netWeight: "51.02 kg",
      grossWeight: "54.52 kg",
      packagingSize: "1440 × 330 × 760 mm",
      battery: "72V 20Ah (6 lead-acid batteries)",
      maxSpeed: "45 – 60 km/h",
      maxRange: "60 – 80 km",
      ratedPower: "800W (27×2.0 magnet steel) 16-inch half-disk motor",
      controller: "12-tube controller",
      alarm: "Dual remote alarm",
      dashboard: "Digital dashboard",
      frontFork: "Hydraulic front fork",
      tires: "16 × 3.0 vacuum tire",
      containerLoading: "160 units per 40HQ"
    },
    features: [
      "Lockable pedals for electric + pedal operation",
      "800W motor with high-torque magnets",
      "Front and rear disc brakes",
      "Hydraulic front fork for comfort",
      "Dual remote anti-theft alarm"
    ],
    applications: [
      "Urban commuting with pedal assist option",
      "Delivery services",
      "Areas with ebike regulations"
    ],
    image: "/productImg/e-mobility/emobilitymoto01a.jpg",
    gallery: [
      "/productImg/e-mobility/emobilitymoto01.jpg",
      "/productImg/e-mobility/emobilitymoto01a.jpg"
    ],
    datasheet: "",
    certifications: ["CE"],
    warranty: "2 years",
    inStock: true,
    containerCapacity: {
      "40HQ": "160 pcs"
    },
    youtubeVideoId: null
  },
  {
    id: "em-011",
    slug: "kugou-electric-scooter-72v-20ah",
    name: "KuGou Electric Scooter",
    model: "KuGou (酷狗)",
    category: "electric-mobility",
    type: "scooter",
    description: "Sporty KuGou electric scooter with 72V 20Ah lead-acid battery and 12-tube controller. NFC dashboard and hydraulic front fork for modern riding.",
    specifications: {
      modelNo: "KuGou (酷狗)",
      braking: "Front and rear disc brakes",
      maxSpeed: "50 – 60 km/h",
      maxRange: "60 – 70 km",
      netWeight: "54 kg",
      grossWeight: "59 kg",
      packagingSize: "1380 × 300 × 770 mm",
      battery: "72V 20Ah lead-acid (6 units)",
      controller: "12-tube controller",
      dashboard: "Digital display with NFC",
      security: "Dual remote alarm",
      frontSuspension: "Hydraulic front fork",
      tires: "90/90-12",
      containerLoading: "195 units per 40HQ"
    },
    features: [
      "NFC digital dashboard for keyless start",
      "Dual disc brakes for reliable stopping",
      "Hydraulic front fork absorbs bumps",
      "Sporty 50-60km/h top speed",
      "Dual remote anti-theft alarm"
    ],
    applications: [
      "Fast urban commuting",
      "Delivery services",
      "Youth transportation"
    ],
    image: "/productImg/e-mobility/emobilitymoto02.jpg",
    gallery: [
      "/productImg/e-mobility/emobilitymoto02a.jpg",
      "/productImg/e-mobility/emobilitymoto02b.jpg",
      "/productImg/e-mobility/emobilitymoto02.jpg"
    ],
    datasheet: "",
    certifications: ["CE"],
    warranty: "1 year",
    inStock: true,
    containerCapacity: {
      "40HQ": "195 pcs"
    },
    youtubeVideoId: null
  },
  {
    id: "em-012",
    slug: "v6-pedal-electric-scooter-800w",
    name: "V6 Pedal Electric Scooter",
    model: "V6 Pedal",
    category: "electric-mobility",
    type: "scooter",
    description: "Heavy-duty V6 Pedal scooter with 800W motor and 60V 30Ah battery. High load capacity (200kg) and strong climbing ability.",
    specifications: {
      modelNo: "V6 Pedal",
      topSpeed: "45 km/h",
      motor: "800W rated output",
      climbingAbility: "≤ 15 degrees",
      maxLoad: "200 kg",
      battery: "60V 30Ah",
      charger: "60V 20A",
      chargingVoltage: "220V",
      chargingTime: "6-8 hours",
      productDimensions: "1660 × 720 × 1060 mm",
      netWeight: "84 kg",
      tires: "300-10",
      brakes: "Front disc / Rear drum"
    },
    features: [
      "800W motor with strong climbing (15° incline)",
      "200kg max load capacity",
      "60V 30Ah large battery for extended use",
      "Front disc + rear drum brakes",
      "Heavy-duty construction"
    ],
    applications: [
      "Heavy rider / cargo transport",
      "Commercial delivery",
      "Hilly terrain commuting"
    ],
    image: "/productImg/e-mobility/emobilitymoto07.jpg",
    gallery: [
      "/productImg/e-mobility/emobilitymoto07a.jpg",
      "/productImg/e-mobility/emobilitymoto07.jpg"
    ],
    datasheet: "",
    certifications: ["CE"],
    warranty: "1 year",
    inStock: true,
    containerCapacity: {
      "40HQ": "Please contact sales"
    },
    youtubeVideoId: null
  },
  {
    id: "em-013",
    slug: "v6-pedal-60v-30ah-version",
    name: "V6 Pedal Electric Scooter (60V 30Ah)",
    model: "V6 Pedal (60V30Ah)",
    category: "electric-mobility",
    type: "scooter",
    description: "High-capacity V6 Pedal scooter with 800W motor, 60V 30Ah battery and 200kg load limit. Ideal for commercial or heavy-duty use.",
    specifications: {
      topSpeed: "45 km/h",
      motor: "800W rated",
      climbingAbility: "≤ 15°",
      maxLoad: "200 kg",
      battery: "60V 30Ah",
      charger: "60V 20A",
      chargingVoltage: "220V",
      chargingTime: "6-8 hours",
      dimensions: "1660 × 720 × 1060 mm",
      netWeight: "84 kg",
      tires: "300-10",
      brakes: "Front disc / Rear drum"
    },
    features: [
      "800W motor for power and reliability",
      "60V 30Ah battery for longer runtime",
      "200kg payload capacity",
      "15-degree hill climbing",
      "Front disc brake for safety"
    ],
    applications: [
      "Heavy-duty commuting",
      "Commercial cargo delivery",
      "Industrial campus transport"
    ],
    image: "/productImg/e-mobility/emobilitymoto08a.jpg",
    gallery: [
      "/productImg/e-mobility/emobilitymoto08a.jpg",
      "/productImg/e-mobility/emobilitymoto08.jpg"
    ],
    datasheet: "",
    certifications: ["CE"],
    warranty: "1 year",
    inStock: true,
    containerCapacity: {
      "40HQ": "Please contact sales"
    },
    youtubeVideoId: null
  },
  // ===== PORTABLE POWER STATIONS =====
  {
    id: "pp-001",
    slug: "portable-power-station-1000w-2000wh",
    name: "Portable Power Station 1000W",
    model: "PPS-1000",
    category: "portable-power",
    type: "portable-station",
    description: "1000W portable power station with 2000Wh LiFePO4 battery, pure sine wave output, and built-in MPPT solar controller. Perfect for camping, emergencies, and off-grid power.",
    specifications: {
      ratedPower: "1000W",
      peakPower: "1500W",
      batteryCapacity: "2000Wh",
      batteryChemistry: "LiFePO4 (2-series)",
      outputWaveform: "Pure Sine Wave",
      acInput: "180V–240V (1000W max)",
      solarInput: "XT90, 18V–55V, 500W max (built-in MPPT)",
      carCharging: "Optional car charger",
      acOutput: "2 x 220V 50Hz (total 1000W)",
      dcOutput: "3 x DC5521, 12V 5A (total)",
      usbOutput: "1 x 5V 2A",
      upsFunction: "Supported",
      cycleLife: "4500+ cycles (≥80% capacity)",
      dischargeTemp: "-20°C to 55°C",
      chargeTemp: "-10°C to 40°C",
      productDimensions: "28 × 25 × 29 cm",
      productWeight: "18.2 kg",
      packingDimensions: "48 × 34 × 33.5 cm"
    },
    features: [
      "UPS function for uninterruptible power switching",
      "Built-in MPPT solar controller for efficient solar charging",
      "Intelligent BMS for safe power usage",
      "Pure sine wave output – safe for sensitive electronics",
      "4500+ cycle life LiFePO4 battery",
      "Supports solar and mains charging"
    ],
    applications: [
      "Camping and outdoor activities",
      "Emergency home backup",
      "Off-grid power for tools",
      "RV and van life"
    ],
    image: "/productImg/p-station/powerstation01.jpg",
    gallery: [
      "/productImg/p-station/powerstation01a.jpg",
      "/productImg/p-station/powerstation01b.jpg",
      "/productImg/p-station/powerstation01.jpg"
    ],
    datasheet: "",
    certifications: ["CE", "UN38.3"],
    warranty: "3 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pp-002",
    slug: "solar-generator-300w-500w-1000wh",
    name: "Solar Generator UPS Energy Storage",
    model: "SG-300/500",
    category: "portable-power",
    type: "portable-station",
    description: "Lightweight solar generator with 1000Wh LiFePO4 battery. Available in 300W or 500W rated power. Perfect for small appliances, phones, and lights.",
    specifications: {
      ratedPower: "300W or 500W ",
      batteryCapacity: "1000Wh",
      batteryChemistry: "LiFePO4",
      productDimensions: "30 × 15.5 × 21 cm",
      netWeight: "10 kg",
      acOutput: "1 x 220V 50Hz (Pure Sine Wave)",
      usbOutput: "1 x 5V 2A",
      typeCOutput: "PD 2.0, 20W max",
      dcOutput: "2 x 12V 5A (total)",
      acInput: "180V–240V",
      solarInput: "XT90, 18V–55V, 300W max (built-in MPPT)",
      upsFunction: "Supported",
      cycleLife: "4500+ cycles (≥80% capacity)",
      dischargeTemp: "-20°C to 55°C",
      chargeTemp: "-10°C to 40°C"
    },
    features: [
      "All-in-one solar generator with built‑in MPPT",
      "Pure sine wave output – safe for electronics",
      "Bidirectional + UPS function",
      "Intelligent BMS protection",
      "Supports solar and grid charging",
      "Lightweight and portable (10kg)"
    ],
    applications: [
      "Small home appliances",
      "Phone and laptop charging",
      "Emergency lighting",
      "Outdoor photography"
    ],
    image: "/productImg/p-station/powerstation02.jpg",
    gallery: [
      "/productImg/p-station/powerstation02a.jpg",
      "/productImg/p-station/powerstation02b.jpg",
      "/productImg/p-station/powerstation02.jpg"
    ],
    datasheet: "",
    certifications: ["CE", "UN38.3"],
    warranty: "2 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pp-003",
    slug: "all-in-one-solar-storage-3000w-9570wh",
    name: "All-in-One Solar Storage System 3000W",
    model: "ESS-3000",
    category: "portable-power",
    type: "home-storage",
    description: "Heavy‑duty all‑in‑one solar storage system with 3000W low‑frequency inverter and 9570Wh LiFePO4 battery. On wheels, built‑in MPPT, and UPS. Ideal for engineering tools and home backup.",
    specifications: {
      systemType: "Engineering & Home Storage Dedicated PV Storage System",
      ratedPower: "3000W",
      batteryCapacity: "9570Wh",
      inverterType: "Industrial frequency (low‑frequency) inverter",
      mainsChargingPower: "1200W",
      solarController: "Built‑in MPPT",
      maxSolarInputPower: "2500W",
      solarVoltageRange: "36V ~ 90V",
      upsMode: "Bypass mode, up to 3000W output",
      acOutput: "2 x 220V 50Hz",
      dcOutput: "1 x Anderson, 50A",
      outputWaveform: "Pure Sine Wave"
    },
    features: [
      "3000W low‑frequency inverter – handles motor loads easily",
      "Built‑in MPPT solar controller (2500W max)",
      "Bidirectional grid charging with UPS function",
      "Supports up to 3000W of engineering motor equipment",
      "No need to distinguish inductive vs resistive loads",
      "Heavy‑duty wheels for portability"
    ],
    applications: [
      "Engineering and construction sites",
      "Home backup power",
      "Workshops and garages",
      "Off‑grid cabins"
    ],
    image: "/productImg/p-station/powerstation03.jpg",
    gallery: [
      "/productImg/p-station/powerstation03a.jpg",
      "/productImg/p-station/powerstation03b.jpg",
      "/productImg/p-station/powerstation03c.jpg",
      "/productImg/p-station/powerstation03.jpg"
    ],
    datasheet: "",
    certifications: ["CE", "UN38.3"],
    warranty: "3 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "bat-010",
    slug: "he01-residential-all-in-one-5-5kw-11-16kwh",
    name: "HE01 Residential All-in-One Storage",
    model: "HE01",
    category: "battery",
    type: "all-in-one",
    description: "5.5kW residential solar storage all‑in‑one system with 11‑16kWh LiFePO4 battery. Combines inverter, MPPT, and battery in one cabinet. Smart display and BMS protection.",
    specifications: {
      ratedOutputPower: "5.5KW",
      storageCapacity: "11kWh ~ 16kWh",
      communication: "RS485",
      operatingTemperature: "-15°C to 55°C",
      productSizeWithoutWheels: "55 × 44 × 77 cm",
      productSizeWithWheels: "55 × 44 × 85 cm",
      systemWeight: "91 kg",
      batteryCellMaterial: "LiFePO4",
      nominalVoltage: "51.2V",
      cycleLife: "≥6000 cycles",
      inverterType: "Pure Sine Wave (low‑frequency)",
      inputSources: "L+N+PE single phase",
      ratedInputVoltage: "210/220/230/240V",
      inputVoltageRange: "90 ~ 280V",
      outputVoltage: "210/220/230/240V",
      maxPVInputPower: "6000W",
      pvChargeModel: "MPPT",
      maxPVInputVoltage: "450V",
      bestPVVoltageRange: "300 ~ 450V",
      maxPVChargingCurrent: "120A",
      maxACChargingCurrent: "120A"
    },
    features: [
      "All‑in‑one design: inverter + MPPT + battery",
      "Smart LCD display for monitoring",
      "BMS safety protection",
      "6000+ cycle life LiFePO4 battery",
      "Supports PV and grid charging",
      "Expandable storage from 11kWh to 16kWh"
    ],
    applications: [
      "Residential solar storage",
      "Home backup power",
      "Off‑grid homes",
      "Peak shaving"
    ],
    image: "/productImg/s-battery/solarbattery04.jpg",
    gallery: [
      "/productImg/s-battery/solarbattery04b.jpg",
      "/productImg/s-battery/solarbattery04a.jpg",
      "/productImg/s-battery/solarbattery04.jpg"
    ],
    datasheet: "",
    certifications: ["CE", "IEC"],
    warranty: "5 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "bat-011",
    slug: "w51100-lifepo4-battery-5-12kwh",
    name: "W51100 LiFePO4 Battery",
    model: "W51100",
    category: "battery",
    type: "wall-mounted",
    description: "5.12kWh LiFePO4 battery – a drop‑in replacement for lead‑acid. High cycle life, IP54 protection, and parallel scalability up to 16 units.",
    specifications: {
      chemistry: "LiFePO4",
      nominalVoltage: "51.2V",
      capacity: "100Ah",
      energy: "5.12kWh",
      operatingVoltage: "43V – 54.5V",
      maxContinuousDischargeCurrent: "100A",
      maxContinuousOutputPower: "5500W",
      peakOutputPower: "7500W (momentary)",
      communication: "RS485, RS232, CAN",
      cycleLife: "6000 cycles @ 80% DOD",
      parallelSupport: "Up to 16 units",
      weight: "49 kg",
      dimensions: "480 × 170 × 500 mm",
      ipRating: "IP54",
      bulkChargeVoltage: "56.4V – 56.6V",
      floatChargeVoltage: "54.0V",
      cutOffVoltage: "47.0V"
    },
    features: [
      "Drop‑in replacement for lead‑acid batteries",
      "6000 cycles at 80% depth of discharge",
      "Parallel up to 16 units for larger capacity",
      "IP54 dust/water splash protection",
      "Lightweight – 40% lighter than lead‑acid",
      "RS485, RS232, CAN communication"
    ],
    applications: [
      "Residential energy storage",
      "Solar backup systems",
      "UPS applications",
      "Off‑grid power"
    ],
    image: "/productImg/s-battery/solarbattery05.jpg",
    gallery: [
      "/productImg/s-battery/solarbattery05a.jpg",
      "/productImg/s-battery/solarbattery05b.jpg",
      "/productImg/s-battery/solarbattery05c.jpg",
      "/productImg/s-battery/solarbattery05.jpg"
    ],
    datasheet: "",
    certifications: ["CE", "UN38.3"],
    warranty: "5 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pp-004",
    slug: "portable-power-station-200-1000w",
    name: "Portable Power Station (200-1000W)",
    model: "PPS-200-1000",
    category: "portable-power",
    type: "portable-station",
    description: "Compact LiFePO4 power station available from 200W to 1000W. Pure sine wave output, LCD display, built‑in LED torch, and multiple output ports.",
    specifications: {
      batteryChemistry: "LiFePO4",
      ratedPower: "200W – 1000W",
      acOutput: "220V/50Hz or 110V/60Hz (Pure Sine Wave)",
      display: "LCD screen (battery %, wattage, status)",
      enclosure: "Zinc alloy or ABS with carry handle",
      specialFeatures: "Built‑in LED torch, smart BMS",
      acOutlets: "1 or 2 universal sockets",
      usbPorts: "2x USB-A (QC3.0), 1x USB-C (PD up to 60W)",
      dcOutlets: "2x DC 12V/10A",
      solarInput: "18V (built‑in MPPT)",
      acCharging: "Included adapter",
      carCharging: "12V cigarette lighter"
    },
    features: [
      "Pure sine wave output – safe for sensitive electronics",
      "Built‑in LED torch for emergencies",
      "Smart BMS protection",
      "Supports solar, AC, and car charging",
      "Multiple output ports (AC, USB, DC)"
    ],
    applications: [
      "Camping and outdoor activities",
      "Emergency home backup",
      "Laptop and phone charging",
      "Small appliances"
    ],
    image: "/productImg/p-station/powerstation04.jpg",
    gallery: [
      "/productImg/p-station/powerstation04a.jpg",
      "/productImg/p-station/powerstation04.jpg"
    ],
    datasheet: "",
    certifications: ["CE", "UN38.3"],
    warranty: "2 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pp-005",
    slug: "mav-out-1100-power-station-1000wh",
    name: "Mav out Power Station",
    model: "MAV OUT 1100",
    category: "portable-power",
    type: "portable-station",
    description: "1000W continuous / 1100W peak portable power station with ~1000-1152Wh LiFePO4 battery. Dual AC outlets, USB hub, and integrated LED lighting.",
    specifications: {
      batteryChemistry: "LiFePO4",
      ratedPower: "1000W / 1100W peak",
      batteryCapacity: "1000Wh – 1152Wh",
      acOutput: "220V/50Hz (Pure Sine Wave)",
      display: "Backlit LCD (charge level, wattage)",
      shell: "Metal alloy with top handle",
      acOutlets: "2 universal sockets",
      usbPorts: "4x USB-A, 1x USB-C (PD)",
      dcOutput: "12V DC ports + cigarette lighter socket",
      ledLight: "2 high‑intensity LED panels",
      chargingMethods: "Mains AC, solar (18V-24V), car 12V",
      chargingTime: "6-8 hours (AC)"
    },
    features: [
      "1000W continuous power – runs household appliances",
      "Pure sine wave output",
      "Dual high‑intensity LED panels for illumination",
      "Multiple USB ports including PD",
      "Supports solar, AC, and car charging"
    ],
    applications: [
      "Home backup power",
      "Camping and RV trips",
      "Small appliances (rice cooker, mini‑fridge)",
      "Emergency power"
    ],
    image: "/productImg/p-station/powerstation05.jpg",
    gallery: [
      "/productImg/p-station/powerstation05a.jpg",
      "/productImg/p-station/powerstation05.jpg"
    ],
    datasheet: "",
    certifications: ["CE", "UN38.3"],
    warranty: "2 years",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pp-006",
    slug: "compact-power-station-300-600w",
    name: "Compact Power Station",
    model: "PPS-300-600",
    category: "portable-power",
    type: "portable-station",
    description: "Lightweight portable power station (300W-600W) with 155-384Wh LiFePO4 battery. Dual AC outlets, USB hub, LED light bar, and solar charging.",
    specifications: {
      batteryChemistry: "LiFePO4",
      ratedPower: "300W – 600W",
      batteryCapacity: "155Wh – 384Wh",
      acOutput: "220V (Pure Sine Wave)",
      display: "LCD screen (battery %, inputs/outputs)",
      body: "Durable plastic/alloy with leather‑style handle",
      acOutlets: "2 universal sockets",
      usbPorts: "2x USB-A (QC3.0), 1x USB-C",
      ledLight: "Large LED light bar with controls",
      dcInputOutput: "Round DC port for charging or 12V devices",
      chargingMethods: "AC wall outlet, solar (15V-24V), car 12V"
    },
    features: [
      "Ultra‑compact and lightweight",
      "Built‑in LED light bar with modes",
      "Pure sine wave AC output",
      "QC3.0 USB fast charging",
      "Supports solar, AC, and car charging"
    ],
    applications: [
      "Travel and camping",
      "Phone, tablet, laptop charging",
      "Small lights and fans",
      "Emergency backup"
    ],
    image: "/productImg/p-station/powerstation06.jpg",
    gallery: [
      "/productImg/p-station/powerstation06a.jpg",
      "/productImg/p-station/powerstation06.jpg"
    ],
    datasheet: "",
    certifications: ["CE", "UN38.3"],
    warranty: "2 years",
    inStock: true,
    youtubeVideoId: null
  },
  // ===== POWER BANKS =====
  {
    id: "pb-001",
    slug: "power-bank-w130-5000mah-wireless",
    name: "W130 Magnetic Wireless Power Bank",
    model: "W130",
    category: "power-bank",
    type: "wireless",
    description: "Ultra‑slim 5000mAh magnetic power bank with 15W wireless charging and USB‑C PD 20W. Fits easily under your phone.",
    specifications: {
      capacity: "5000mAh",
      cellType: "955465 Li‑ion",
      dimensions: "97 × 64 × 15 mm",
      material: "ABS+PC",
      indicator: "LED lights",
      wirelessOutput: "15W",
      usbCOutput: "5V/3A, 9V/2A (PD 18W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~130g"
    },
    features: [
      "15W fast wireless charging (MagSafe compatible)",
      "5000mAh capacity – one full phone charge",
      "USB‑C PD 20W for wired fast charging",
      "Ultra‑compact and lightweight",
      "LED battery indicator"
    ],
    applications: [
      "Daily iPhone charging",
      "Travel and business trips",
      "Emergency top‑up for phones and earbuds"
    ],
    image: "/productImg/p-bank/powerbank01.jpg",
    gallery: ["/productImg/p-bank/powerbank01.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-002",
    slug: "power-bank-w131-10000mah-wireless",
    name: "W131 10000mAh Magnetic Wireless Power Bank",
    model: "W131",
    category: "power-bank",
    type: "wireless",
    description: "High‑capacity 10000mAh magnetic power bank with 15W wireless charging and dual outputs. Ideal for extended travel.",
    specifications: {
      capacity: "10000mAh",
      cellType: "126280 Li‑ion",
      dimensions: "107 × 70 × 20 mm",
      material: "ABS+PC",
      indicator: "LED lights",
      wirelessOutput: "15W",
      usbCOutput: "5V/3A, 9V/2A (PD 18W)",
      usbAOutput: "5V/3A, 9V/2A, 12V/1.5A (QC 18W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~230g"
    },
    features: [
      "15W fast wireless charging",
      "10000mAh – 2‑3 full phone charges",
      "Dual output (USB‑C + USB‑A)",
      "USB‑C PD 20W input/output",
      "Compact for its capacity"
    ],
    applications: [
      "Multi‑day travel and camping",
      "Whole family device charging",
      "Remote work"
    ],
    image: "/productImg/p-bank/powerbank02.jpg",
    gallery: ["/productImg/p-bank/powerbank02a.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-003",
    slug: "power-bank-g151-5000-slim",
    name: "G151 5000mAh Slim Power Bank",
    model: "G151-5000",
    category: "power-bank",
    type: "compact",
    description: "Ultra‑thin 5000mAh power bank with 15W wireless charging and USB‑C PD. Only 10mm thick.",
    specifications: {
      capacity: "5000mAh",
      cellType: "706074 Li‑ion",
      dimensions: "110 × 70 × 10 mm",
      material: "ABS+PC",
      indicator: "LED lights",
      wirelessOutput: "15W",
      usbCOutput: "5V/3A, 9V/2A (PD 18W)",
      usbAOutput: "5V/3A, 9V/2A, 12V/1.5A (QC 18W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~155g"
    },
    features: [
      "10mm ultra‑slim design",
      "15W wireless charging",
      "USB‑C PD fast charge in/out",
      "USB‑A QC3.0 for legacy devices",
      "LED battery indicator"
    ],
    applications: [
      "Everyday carry",
      "Phone and earbuds charging",
      "Business meetings"
    ],
    image: "/productImg/p-bank/powerbank03.jpg",
    gallery: ["/productImg/p-bank/powerbank03.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-004",
    slug: "power-bank-g151-5000-built-in-cables",
    name: "G151 5000mAh Power Bank with Built‑in Cables",
    model: "G151-5000 (带两线)",
    category: "power-bank",
    type: "built-in-cables",
    description: "5000mAh power bank with integrated USB‑C and Lightning cables, plus 15W wireless charging. No extra cables needed.",
    specifications: {
      capacity: "5000mAh",
      cellType: "706074 Li‑ion",
      dimensions: "110 × 70 × 10 mm",
      material: "ABS+PC",
      indicator: "LED lights",
      wirelessOutput: "15W",
      builtInCables: "USB‑C (5V/3A, 9V/2A), Lightning (5V/2.4A)",
      usbCOutput: "5V/3A, 9V/2A (PD 18W)",
      usbAOutput: "5V/3A, 9V/2A, 12V/1.5A (QC 18W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~170g"
    },
    features: [
      "Built‑in USB‑C and Lightning cables",
      "15W wireless charging",
      "Ultra‑slim 10mm design",
      "USB‑C PD 20W fast charging",
      "Convenient for mixed devices"
    ],
    applications: [
      "Travelers who want minimal packing",
      "Gift for iPhone + Android households",
      "Emergency backup without cables"
    ],
    image: "/productImg/p-bank/powerbank04.jpg",
    gallery: ["/productImg/p-bank/powerbank04a.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-005",
    slug: "power-bank-w151-10000-slim",
    name: "W151 10000mAh Slim Power Bank",
    model: "W151-10000",
    category: "power-bank",
    type: "high-capacity",
    description: "10000mAh slim power bank with 15W wireless charging and dual USB outputs. Compact enough for daily carry.",
    specifications: {
      capacity: "10000mAh",
      cellType: "146074 Li‑ion",
      dimensions: "110 × 70 × 20 mm",
      material: "ABS+PC",
      indicator: "LED lights",
      wirelessOutput: "15W",
      usbCOutput: "5V/3A, 9V/2A (PD 18W)",
      usbAOutput: "5V/3A, 9V/2A, 12V/1.5A (QC 18W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~220g"
    },
    features: [
      "10000mAh – 2‑3 full charges",
      "15W wireless charging",
      "USB‑C PD fast charge",
      "USB‑A QC3.0",
      "Slim profile for its capacity"
    ],
    applications: [
      "Extended weekend trips",
      "Remote work",
      "Charging tablets and phones"
    ],
    image: "/productImg/p-bank/powerbank05.jpg",
    gallery: ["/productImg/p-bank/powerbank05.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-006",
    slug: "power-bank-w151-10000-built-in-cables",
    name: "W151 10000mAh Power Bank with Built‑in Cables",
    model: "W151-10000 (带两线)",
    category: "power-bank",
    type: "built-in-cables",
    description: "10000mAh power bank with integrated USB‑C and Lightning cables, 15W wireless charging, and fast PD charging. The ultimate travel companion.",
    specifications: {
      capacity: "10000mAh",
      cellType: "146074 Li‑ion",
      dimensions: "110 × 70 × 20 mm",
      material: "ABS+PC",
      indicator: "LED lights",
      wirelessOutput: "15W",
      builtInCables: "USB‑C (5V/3A, 9V/2A), Lightning (5V/2.4A)",
      usbAOutput: "5V/3A, 9V/2A, 12V/1.5A (QC 18W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~240g"
    },
    features: [
      "Built‑in USB‑C and Lightning cables",
      "15W wireless charging",
      "10000mAh high capacity",
      "USB‑C PD 20W",
      "Ideal for international travel"
    ],
    applications: [
      "Long flights and road trips",
      "Business travel with multiple devices",
      "Family outings"
    ],
    image: "/productImg/p-bank/powerbank06.jpg",
    gallery: ["/productImg/p-bank/powerbank06.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-007",
    slug: "power-bank-w152-5000-slim",
    name: "W152 5000mAh Slim Power Bank",
    model: "W152-5000",
    category: "power-bank",
    type: "compact",
    description: "Ultra‑thin 5000mAh power bank with 15W wireless charging. Only 10mm thick, perfect for daily carry.",
    specifications: {
      capacity: "5000mAh",
      cellType: "626080 Li‑ion",
      dimensions: "110 × 70 × 10 mm",
      material: "ABS+PC",
      indicator: "LED lights",
      wirelessOutput: "15W",
      usbCOutput: "5V/3A, 9V/2A (PD 18W)",
      usbAOutput: "5V/3A, 9V/2A, 12V/1.5A (QC 18W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~155g"
    },
    features: [
      "10mm ultra‑slim profile",
      "15W wireless charging",
      "USB‑C PD fast charging",
      "USB‑A QC3.0",
      "LED battery indicator"
    ],
    applications: [
      "Everyday pocket carry",
      "Office desk backup",
      "Short trips"
    ],
    image: "/productImg/p-bank/powerbank07.jpg",
    gallery: ["/productImg/p-bank/powerbank07.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-008",
    slug: "power-bank-w152-5000-built-in-cables",
    name: "W152 5000mAh Power Bank with Built‑in Cables",
    model: "W152-5000 (带两线)",
    category: "power-bank",
    type: "built-in-cables",
    description: "5000mAh ultra‑slim power bank with built‑in USB‑C and Lightning cables and 15W wireless charging.",
    specifications: {
      capacity: "5000mAh",
      cellType: "626080 Li‑ion",
      dimensions: "110 × 70 × 10 mm",
      material: "ABS+PC",
      indicator: "LED lights",
      wirelessOutput: "15W",
      builtInCables: "USB‑C (5V/3A, 9V/2A), Lightning (5V/2.4A)",
      usbAOutput: "5V/3A, 9V/2A, 12V/1.5A (QC 18W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~170g"
    },
    features: [
      "Built‑in USB‑C and Lightning cables",
      "15W wireless charging",
      "Only 10mm thick",
      "USB‑C PD fast charging",
      "Perfect for minimalist travel"
    ],
    applications: [
      "Travel and day trips",
      "Mixed device households",
      "Emergency backup"
    ],
    image: "/productImg/p-bank/powerbank08.jpg",
    gallery: ["/productImg/p-bank/powerbank08.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-009",
    slug: "power-bank-w152-10000-slim",
    name: "W152 10000mAh Slim Power Bank",
    model: "W152-10000",
    category: "power-bank",
    type: "high-capacity",
    description: "10000mAh slim power bank with 15W wireless charging and dual outputs. 18mm thick, ideal for extended use.",
    specifications: {
      capacity: "10000mAh",
      cellType: "126280 Li‑ion",
      dimensions: "110 × 70 × 18 mm",
      material: "ABS+PC",
      indicator: "LED lights",
      wirelessOutput: "15W",
      usbCOutput: "5V/3A, 9V/2A (PD 18W)",
      usbAOutput: "5V/3A, 9V/2A, 12V/1.5A (QC 18W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~220g"
    },
    features: [
      "10000mAh capacity",
      "15W wireless charging",
      "USB‑C PD fast charge",
      "USB‑A QC3.0",
      "Slim for its capacity"
    ],
    applications: [
      "Weekend travel",
      "Remote work",
      "Tablet and phone charging"
    ],
    image: "/productImg/p-bank/powerbank09.jpg",
    gallery: ["/productImg/p-bank/powerbank09.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-010",
    slug: "power-bank-w152-10000-built-in-cables",
    name: "W152 10000mAh Power Bank with Built‑in Cables",
    model: "W152-10000 (带两线)",
    category: "power-bank",
    type: "built-in-cables",
    description: "10000mAh power bank with built‑in USB‑C and Lightning cables, 15W wireless charging, and fast PD.",
    specifications: {
      capacity: "10000mAh",
      cellType: "126280 Li‑ion",
      dimensions: "110 × 70 × 18 mm",
      material: "ABS+PC",
      indicator: "LED lights",
      wirelessOutput: "15W",
      builtInCables: "USB‑C (5V/3A, 9V/2A), Lightning (5V/2.4A)",
      usbAOutput: "5V/3A, 9V/2A, 12V/1.5A (QC 18W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~240g"
    },
    features: [
      "Built‑in USB‑C and Lightning cables",
      "15W wireless charging",
      "10000mAh high capacity",
      "USB‑C PD fast charging",
      "Complete all‑in‑one solution"
    ],
    applications: [
      "Long travel",
      "Business trips with multiple devices",
      "Gift for Apple & Android users"
    ],
    image: "/productImg/p-bank/powerbank010.jpg",
    gallery: ["/productImg/p-bank/powerbank010.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-011",
    slug: "power-bank-a148b-5000-aluminum",
    name: "A148B 5000mAh Aluminum Power Bank",
    model: "A148B-5000",
    category: "power-bank",
    type: "compact",
    description: "Premium aluminium power bank with 5000mAh capacity, 15W wireless charging, and USB‑C PD. Ultra‑thin 7.3mm.",
    specifications: {
      capacity: "5000mAh",
      cellType: "546280 Li‑ion",
      dimensions: "103 × 69 × 7.3 mm",
      material: "Aluminium + glass fibre or glass",
      colors: "Silver, grey, orange",
      indicator: "LED lights",
      wirelessOutput: "15W",
      usbCOutput: "5V/3A, 9V/2A (PD 18W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~110g"
    },
    features: [
      "Premium aluminium casing",
      "Ultra‑thin 7.3mm design",
      "15W wireless charging",
      "USB‑C PD fast charging",
      "Multiple colour options"
    ],
    applications: [
      "Luxury everyday carry",
      "Gift for professionals",
      "Minimalist charging"
    ],
    image: "/productImg/p-bank/powerbank011.jpg",
    gallery: ["/productImg/p-bank/powerbank011.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-012",
    slug: "power-bank-a158a-5000-aluminum",
    name: "A158A 5000mAh Ultra‑Thin Aluminum Power Bank",
    model: "A158A-5000",
    category: "power-bank",
    type: "compact",
    description: "Extremely thin (6.35mm) aluminium power bank with 5000mAh, 15W wireless charging, and USB‑C PD.",
    specifications: {
      capacity: "5000mAh",
      cellType: "466578 Li‑ion",
      dimensions: "102 × 70.5 × 6.35 mm",
      material: "Aluminium + glass fibre or glass",
      colors: "Silver, grey, orange",
      indicator: "LED lights",
      wirelessOutput: "15W",
      usbCOutput: "5V/3A, 9V/2A (PD 18W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~95g"
    },
    features: [
      "World‑class thinness: 6.35mm",
      "Premium aluminium finish",
      "15W wireless charging",
      "USB‑C PD fast charging",
      "Fits in any pocket"
    ],
    applications: [
      "Ultra‑portable charging",
      "Wallet and pocket carry",
      "Emergency backup"
    ],
    image: "/productImg/p-bank/powerbank012.jpg",
    gallery: ["/productImg/p-bank/powerbank012.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-013",
    slug: "power-bank-a114b-5000-digital-display",
    name: "A114B 5000mAh Power Bank with Digital Display",
    model: "A114B-5000",
    category: "power-bank",
    type: "compact",
    description: "Aluminium power bank with digital percentage display, 5000mAh, 15W wireless charging, and USB‑C PD.",
    specifications: {
      capacity: "5000mAh",
      cellType: "546280 Li‑ion",
      dimensions: "103 × 69 × 8.9 mm",
      material: "Aluminium + glass fibre or glass",
      colors: "Silver, grey, orange, black",
      indicator: "Digital numeric display",
      wirelessOutput: "15W",
      usbCOutput: "5V/3A, 9V/2A (PD 18W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~130g"
    },
    features: [
      "Digital percentage display",
      "Premium aluminium design",
      "15W wireless charging",
      "USB‑C PD fast charging",
      "Four colour options"
    ],
    applications: [
      "Gift for tech enthusiasts",
      "Everyday reliable charging",
      "Precise battery management"
    ],
    image: "/productImg/p-bank/powerbank013.jpg",
    gallery: ["/productImg/p-bank/powerbank013.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-014",
    slug: "power-bank-a116b-10000-dual-cell",
    name: "A116B 10000mAh Dual‑Cell Power Bank",
    model: "A116B-10000",
    category: "power-bank",
    type: "high-capacity",
    description: "10000mAh aluminium power bank with dual cells, 15W wireless charging, and USB‑C PD. Slim enough for a jacket pocket.",
    specifications: {
      capacity: "10000mAh",
      cellType: "546280 ×2 Li‑ion",
      dimensions: "103 × 67 × 14.2 mm",
      material: "Aluminium + glass fibre or glass",
      colors: "Silver, grey, orange",
      indicator: "LED lights",
      wirelessOutput: "15W",
      usbCOutput: "5V/3A, 9V/2A (PD 18W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~210g"
    },
    features: [
      "10000mAh in slim aluminium body",
      "15W wireless charging",
      "USB‑C PD fast charging",
      "Dual cell design for reliability",
      "LED battery indicator"
    ],
    applications: [
      "Extended travel",
      "Charging tablets and phones",
      "Outdoor activities"
    ],
    image: "/productImg/p-bank/powerbank014.jpg",
    gallery: ["/productImg/p-bank/powerbank014.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-015",
    slug: "power-bank-a154-5000-digital",
    name: "A154 5000mAh Power Bank with Digital Display",
    model: "A154-5000",
    category: "power-bank",
    type: "compact",
    description: "5000mAh power bank with digital display, 15W wireless charging, and advanced USB‑C PD (10V2.25A).",
    specifications: {
      capacity: "5000mAh",
      cellType: "466578 Li‑ion",
      dimensions: "102 × 70.5 × 6.7 mm",
      material: "Aluminium + ABS+PC",
      colors: "Silver, grey, orange, blue",
      indicator: "Digital numeric display",
      wirelessOutput: "15W",
      usbCOutput: "5V/2.8A, 9V/2A (PD ~20W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 10V/2.25A, 12V/1.67A (22.5W)",
      weight: "~115g"
    },
    features: [
      "Digital percentage display",
      "15W wireless charging",
      "22.5W USB‑C fast charging",
      "Ultra‑slim 6.7mm",
      "Multiple colour options"
    ],
    applications: [
      "Daily carry with exact battery readout",
      "Gift for style‑conscious users",
      "Quick top‑ups"
    ],
    image: "/productImg/p-bank/powerbank015.jpg",
    gallery: ["/productImg/p-bank/powerbank015.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-016",
    slug: "power-bank-a155-10000-dual-cell-digital",
    name: "A155 10000mAh Dual‑Cell Digital Power Bank",
    model: "A155-10000",
    category: "power-bank",
    type: "high-capacity",
    description: "10000mAh power bank with digital display, 15W wireless charging, and 22.5W USB‑C PD. Aluminium casing.",
    specifications: {
      capacity: "10000mAh",
      cellType: "466578 ×2 Li‑ion",
      dimensions: "102 × 70.5 × 11.5 mm",
      material: "Aluminium + glass fibre or glass",
      colors: "Silver, grey, orange, blue",
      indicator: "Digital numeric display",
      wirelessOutput: "15W",
      usbCOutput: "5V/2.8A, 9V/2A (PD ~20W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 10V/2.25A, 12V/1.67A (22.5W)",
      weight: "~200g"
    },
    features: [
      "Digital percentage display",
      "10000mAh in slim 11.5mm body",
      "15W wireless charging",
      "22.5W USB‑C fast charging",
      "Premium aluminium finish"
    ],
    applications: [
      "High‑capacity daily driver",
      "Travel and remote work",
      "Charging tablets and laptops"
    ],
    image: "/productImg/p-bank/powerbank016.jpg",
    gallery: ["/productImg/p-bank/powerbank016.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-017",
    slug: "power-bank-a156-5000-led",
    name: "A156 5000mAh LED Power Bank",
    model: "A156-5000",
    category: "power-bank",
    type: "compact",
    description: "5000mAh aluminium power bank with LED indicator, 15W wireless charging, and USB‑C PD.",
    specifications: {
      capacity: "5000mAh",
      cellType: "546280/656280 Li‑ion",
      dimensions: "103 × 69 × 8.9 mm",
      material: "Aluminium + glass fibre or glass",
      colors: "Silver, grey, orange, black",
      indicator: "LED lights",
      wirelessOutput: "15W",
      usbCOutput: "5V/3A, 9V/2A (PD 18W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~130g"
    },
    features: [
      "Premium aluminium body",
      "LED battery indicator",
      "15W wireless charging",
      "USB‑C PD fast charging",
      "Multiple colour options"
    ],
    applications: [
      "Simple and reliable everyday carry",
      "Office and home backup",
      "Gift for minimalists"
    ],
    image: "/productImg/p-bank/powerbank017.jpg",
    gallery: ["/productImg/p-bank/powerbank017.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-018",
    slug: "power-bank-a157-10000-dual-cell-led",
    name: "A157 10000mAh Dual‑Cell LED Power Bank",
    model: "A157-10000",
    category: "power-bank",
    type: "high-capacity",
    description: "10000mAh aluminium power bank with LED indicator, 15W wireless charging, and USB‑C PD.",
    specifications: {
      capacity: "10000mAh",
      cellType: "546280×2 or 1066280×2 Li‑ion",
      dimensions: "103 × 67 × 14.2 mm",
      material: "Aluminium + glass fibre or glass",
      colors: "Silver, grey, orange, black",
      indicator: "LED lights",
      wirelessOutput: "15W",
      usbCOutput: "5V/3A, 9V/2A (PD 18W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~210g"
    },
    features: [
      "10000mAh in durable aluminium",
      "LED battery indicator",
      "15W wireless charging",
      "USB‑C PD fast charging",
      "Slim profile"
    ],
    applications: [
      "Extended travel",
      "Power for phones and tablets",
      "Outdoor activities"
    ],
    image: "/productImg/p-bank/powerbank018.jpg",
    gallery: ["/productImg/p-bank/powerbank018.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-019",
    slug: "power-bank-a158b-5000-led",
    name: "A158B 5000mAh LED Power Bank",
    model: "A158B-5000",
    category: "power-bank",
    type: "compact",
    description: "5000mAh aluminium power bank with LED indicator, ultra‑thin 10.7mm, 15W wireless charging, and USB‑C PD.",
    specifications: {
      capacity: "5000mAh",
      cellType: "466578 Li‑ion",
      dimensions: "102 × 70.5 × 10.7 mm",
      material: "Aluminium + glass fibre or glass",
      colors: "Silver, grey, orange",
      indicator: "LED lights",
      wirelessOutput: "15W",
      usbCOutput: "5V/3A, 9V/2A (PD 18W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~110g"
    },
    features: [
      "Ultra‑thin 10.7mm with aluminium",
      "LED battery indicator",
      "15W wireless charging",
      "USB‑C PD fast charging",
      "Premium finish"
    ],
    applications: [
      "Slim everyday carry",
      "Pocket‑friendly backup",
      "Office and travel"
    ],
    image: "/productImg/p-bank/powerbank019.jpg",
    gallery: ["/productImg/p-bank/powerbank019.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-020",
    slug: "power-bank-a103-10000-digital",
    name: "A103 10000mAh Digital Power Bank",
    model: "A103-1000",
    category: "power-bank",
    type: "high-capacity",
    description: "10000mAh power bank with digital display, 15W wireless charging, and USB‑C PD. Aluminium body with painted finish.",
    specifications: {
      capacity: "10000mAh",
      cellType: "546280/1356280/126280 Li‑ion",
      dimensions: "103 × 67 × 15.8 mm",
      material: "Aluminium + paint",
      colors: "Black, gold, grey",
      indicator: "Digital numeric display",
      wirelessOutput: "15W",
      usbCOutput: "5V/3A, 9V/2A (PD 18W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~200g"
    },
    features: [
      "Digital percentage display",
      "10000mAh capacity",
      "15W wireless charging",
      "USB‑C PD fast charging",
      "Stylish painted aluminium"
    ],
    applications: [
      "Everyday power for busy professionals",
      "Travel and remote work",
      "Charging phones + tablets"
    ],
    image: "/productImg/p-bank/powerbank020.jpg",
    gallery: [
      "/productImg/p-bank/powerbank020a.jpg",
      "/productImg/p-bank/powerbank020.jpg"
    ],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-021",
    slug: "power-bank-tk23-with-stand-cables",
    name: "TK23 Power Bank with Foldable Stand & Cables",
    model: "TK23",
    category: "power-bank",
    type: "built-in-cables",
    description: "10000mAh power bank with integrated USB‑C/Lightning cables, foldable zinc alloy stand, and 3‑in‑1 wireless charging.",
    specifications: {
      capacity: "10000mAh",
      cellType: "146074 Li‑ion",
      dimensions: "108 × 68 × 20.7 mm",
      material: "ABS+PC + zinc alloy stand + built‑in cables",
      colors: "Black, white",
      indicator: "Digital numeric display",
      wirelessOutput: "2.5W/5W/7.5W/10W/15W (3‑in‑1)",
      builtInCables: "USB‑C (5V/3A, 9V/2A, 12V/1.5A), Lightning (5V/2A)",
      usbCOutput: "5V/3A, 9V/2A, 12V/1.5A",
      input: "USB‑C: 5V/3A, 9V/2.22A, 10V/2.25A, 12V/1.67A (22.5W)",
      weight: "~300g"
    },
    features: [
      "Built‑in USB‑C and Lightning cables",
      "Foldable zinc alloy phone stand",
      "3‑in‑1 wireless charging (phone, watch, earbuds)",
      "Digital battery display",
      "22.5W USB‑C fast charging"
    ],
    applications: [
      "Desk and travel companion",
      "Charge multiple devices simultaneously",
      "Watch + phone + earbuds all at once"
    ],
    image: "/productImg/p-bank/powerbank021.jpg",
    gallery: ["/productImg/p-bank/powerbank021.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-022",
    slug: "power-bank-tk15-aluminum-wireless",
    name: "TK15 Aluminum Wireless Power Bank",
    model: "TK15",
    category: "power-bank",
    type: "wireless",
    description: "10000mAh aluminium power bank with 15W wireless charging and USB‑C PD. Ultra‑thin 9mm design.",
    specifications: {
      capacity: "10000mAh",
      cellType: "706074 Li‑ion",
      dimensions: "102 × 63 × 9 mm",
      material: "Aluminium + paint",
      colors: "Silver, blue, grey",
      indicator: "LED lights",
      wirelessOutput: "5W/7.5W/10W/15W",
      usbCOutput: "5V/3A, 9V/2A, 12V/1.5A",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~200g"
    },
    features: [
      "Ultra‑slim 9mm aluminium body",
      "15W wireless charging",
      "USB‑C PD fast charging",
      "LED battery indicator",
      "Multiple colour options"
    ],
    applications: [
      "Professional everyday carry",
      "Quick wireless top‑ups",
      "Minimalist travel"
    ],
    image: "/productImg/p-bank/powerbank022.jpg",
    gallery: ["/productImg/p-bank/powerbank022.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-023",
    slug: "power-bank-t18-digital-wireless-stand",
    name: "T18 Digital Wireless Power Bank with Stand",
    model: "T18-数显",
    category: "power-bank",
    type: "built-in-cables",
    description: "10000mAh power bank with digital display, integrated USB‑C/Lightning cables, foldable stand, and 3‑in‑1 wireless charging.",
    specifications: {
      capacity: "10000mAh",
      cellType: "146074 Li‑ion",
      dimensions: "108 × 64.7 × 21 mm",
      material: "ABS+PC + zinc alloy stand + built‑in cables",
      colors: "Black, white",
      indicator: "Digital numeric display",
      wirelessOutput: "2.5W/5W/7.5W/10W/15W (3‑in‑1)",
      builtInCables: "USB‑C (5V/3A, 9V/2A, 12V/1.5A), Lightning (5V/2.4A)",
      usbCOutput: "5V/3A, 9V/2A, 12V/1.5A",
      input: "USB‑C: 5V/3A, 9V/2.22A, 10V/2.25A, 12V/1.67A (22.5W)",
      weight: "~300g"
    },
    features: [
      "Digital percentage display",
      "Built‑in USB‑C and Lightning cables",
      "Foldable stand for hands‑free viewing",
      "3‑in‑1 wireless charging",
      "22.5W USB‑C fast charging"
    ],
    applications: [
      "Work desk, travel, hotels",
      "Charge phone, watch, earbuds at once",
      "Watch videos while charging"
    ],
    image: "/productImg/p-bank/powerbank023.jpg",
    gallery: ["/productImg/p-bank/powerbank023.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-024",
    slug: "power-bank-t18-led-3c",
    name: "T18 LED 3C Power Bank with Cables",
    model: "T18-灯显（3C）",
    category: "power-bank",
    type: "built-in-cables",
    description: "10000mAh power bank with LED indicator, built‑in USB‑C/Lightning cables, foldable stand, and 3‑in‑1 wireless charging.",
    specifications: {
      capacity: "10000mAh",
      cellType: "706074 Li‑ion",
      dimensions: "102 × 63 × 9 mm",
      material: "ABS+PC + zinc alloy stand + built‑in cables",
      colors: "Black, white",
      indicator: "LED lights",
      wirelessOutput: "2.5W/5W/7.5W/10W/15W (3‑in‑1)",
      builtInCables: "USB‑C (5V/3A, 9V/2A, 12V/1.5A), Lightning (5V/2.4A)",
      usbCOutput: "5V/3A, 9V/2A, 12V/1.5A",
      input: "USB‑C: 5V/3A, 9V/2.22A, 10V/2.25A, 12V/1.67A (22.5W)",
      weight: "~280g"
    },
    features: [
      "Built‑in USB‑C and Lightning cables",
      "Foldable stand",
      "3‑in‑1 wireless charging",
      "LED battery indicator",
      "22.5W USB‑C fast charging"
    ],
    applications: [
      "Travel and home desk",
      "Convenient all‑in‑one solution",
      "Charge multiple devices without extra cables"
    ],
    image: "/productImg/p-bank/powerbank024.jpg",
    gallery: ["/productImg/p-bank/powerbank024.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-025",
    slug: "power-bank-t16-led-3c",
    name: "T16 LED 3C Power Bank with Cables",
    model: "T16-灯显（3C）",
    category: "power-bank",
    type: "built-in-cables",
    description: "10000mAh power bank with LED indicator, built‑in USB‑C/Lightning cables, and 15W wireless charging. USB‑A output also available.",
    specifications: {
      capacity: "10000mAh",
      cellType: "146074 Li‑ion",
      dimensions: "110 × 70 × 23 mm",
      material: "ABS+PC + zinc alloy stand + built‑in cables",
      colors: "Black, white",
      indicator: "LED lights",
      wirelessOutput: "5W/7.5W/10W/15W",
      builtInCables: "USB‑C (5V/3A, 9V/2.22A, 10V/2.25A, 12V/1.67A)",
      usbAOutput: "5V/3A, 5V/4.5A, 9V/2A, 12V/1.5A (QC 22.5W)",
      usbCOutput: "5V/3A, 9V/2A, 12V/1.5A",
      input: "USB‑C: 5V/3A, 9V/2.22A, 10V/2.25A, 12V/1.67A (22.5W)",
      weight: "~290g"
    },
    features: [
      "Built‑in USB‑C cable (input/output)",
      "15W wireless charging",
      "USB‑A QC3.0 fast charging",
      "LED battery indicator",
      "Foldable stand (integrated)"
    ],
    applications: [
      "Versatile home and travel charger",
      "Fast charging for multiple devices",
      "No need to carry extra cables"
    ],
    image: "/productImg/p-bank/powerbank025.jpg",
    gallery: ["/productImg/p-bank/powerbank025.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-026",
    slug: "power-bank-t6-led",
    name: "T6 LED Power Bank",
    model: "T6-灯显",
    category: "power-bank",
    type: "compact",
    description: "10000mAh power bank with LED indicator, 15W wireless charging, and USB‑A + USB‑C outputs. Compact design.",
    specifications: {
      capacity: "10000mAh",
      cellType: "126280/1376074 Li‑ion",
      dimensions: "110 × 70 × 23 mm",
      material: "ABS+PC + foldable leather stand",
      colors: "Black, white",
      indicator: "LED lights",
      wirelessOutput: "5W/7.5W/10W/15W",
      usbCOutput: "5V/3A, 9V/2A, 12V/1.5A",
      usbAOutput: "5V/3A, 5V/4.5A, 9V/2A, 12V/1.5A (QC 22.5W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 10V/2.25A, 12V/1.67A (22.5W)",
      weight: "~280g"
    },
    features: [
      "Foldable leather strap/stand",
      "15W wireless charging",
      "USB‑C PD and USB‑A QC3.0",
      "10000mAh capacity",
      "LED indicator"
    ],
    applications: [
      "Everyday versatility",
      "Desk charging with stand",
      "Travel and camping"
    ],
    image: "/productImg/p-bank/powerbank026.jpg",
    gallery: ["/productImg/p-bank/powerbank026.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-027",
    slug: "power-bank-sdr031-10000-led",
    name: "SDR031 10000mAh LED Power Bank",
    model: "SDR031",
    category: "power-bank",
    type: "high-capacity",
    description: "10000mAh power bank with LED indicator, 15W wireless charging, and USB‑A + USB‑C outputs. Slim 23mm design.",
    specifications: {
      capacity: "10000mAh",
      cellType: "146074 Li‑ion",
      dimensions: "110 × 70 × 23 mm",
      material: "ABS+PC",
      colors: "Black, white, blue",
      indicator: "LED lights",
      wirelessOutput: "5W/7.5W/10W/15W",
      usbCOutput: "5V/3A, 9V/2A (PD 18W)",
      usbAOutput: "5V/3A, 9V/2A, 10V/2.25A, 12V/1.5A (QC 22.5W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~270g"
    },
    features: [
      "15W wireless charging",
      "USB‑C PD 18W",
      "USB‑A QC 22.5W",
      "Multiple colour options",
      "LED battery indicator"
    ],
    applications: [
      "Everyday reliable power",
      "Weekend trips",
      "Office and home"
    ],
    image: "/productImg/p-bank/powerbank027.jpg",
    gallery: ["/productImg/p-bank/powerbank027.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-028",
    slug: "power-bank-sdr032-10000-dual-cell",
    name: "SDR032 10000mAh Dual‑Cell Power Bank",
    model: "SDR032",
    category: "power-bank",
    type: "high-capacity",
    description: "10000mAh dual‑cell power bank with LED indicator, 15W wireless charging, and fast USB‑A/USB‑C outputs.",
    specifications: {
      capacity: "10000mAh",
      cellType: "126280/1376074 Li‑ion",
      dimensions: "110 × 70 × 23 mm",
      material: "ABS+PC",
      colors: "Black, white, blue",
      indicator: "LED lights",
      wirelessOutput: "5W/7.5W/10W/15W",
      usbCOutput: "5V/3A, 9V/2A (PD 18W)",
      usbAOutput: "5V/3A, 9V/2A, 10V/2.25A, 12V/1.5A (QC 22.5W)",
      input: "USB‑C: 5V/3A, 9V/2.22A, 12V/1.67A (20W)",
      weight: "~270g"
    },
    features: [
      "10000mAh dual cells",
      "15W wireless charging",
      "USB‑C PD 18W",
      "USB‑A QC 22.5W",
      "LED indicator"
    ],
    applications: [
      "Power for longer trips",
      "Charging phones + tablets",
      "Home backup"
    ],
    image: "/productImg/p-bank/powerbank028.jpg",
    gallery: ["/productImg/p-bank/powerbank028.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-029",
    slug: "power-bank-hw032-pink-magnetic",
    name: "HW032 Magnetic Power Bank",
    model: "HW032",
    category: "power-bank",
    type: "wireless",
    description: "10000mAh magnetic power bank in pastel colours, with 15W wireless charging and USB‑C PD. Compact and stylish.",
    specifications: {
      capacity: "10000mAh",
      cellType: "146074 Li‑ion",
      dimensions: "102 × 66 × 19 mm",
      material: "ABS+PC",
      colors: "White, pink, purple",
      indicator: "LED lights",
      wirelessOutput: "15W",
      usbCOutput: "5V/3A, 9V/2.2A, 12V/1.65A, 10V/2.25A (PD 22.5W)",
      input: "USB‑C: 5V/3A, 9V/2A, 12V/1.5A (18W)",
      weight: "~240g"
    },
    features: [
      "Magnetic attachment for iPhone",
      "15W wireless charging",
      "22.5W USB‑C PD",
      "Stylish pastel colours",
      "Compact 19mm thickness"
    ],
    applications: [
      "Fashion‑conscious users",
      "Gift for iPhone users",
      "Everyday magnetic charging"
    ],
    image: "/productImg/p-bank/powerbank029.jpg",
    gallery: ["/productImg/p-bank/powerbank029.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  {
    id: "pb-030",
    slug: "power-bank-hw031-20000mah",
    name: "HW031 20000mAh High‑Capacity Power Bank",
    model: "HW031",
    category: "power-bank",
    type: "high-capacity",
    description: "Ultra‑high capacity 20000mAh power bank with built‑in cables, 15W wireless charging, and dual outputs.",
    specifications: {
      capacity: "20000mAh",
      cellType: "1376074 ×2 Li‑ion",
      dimensions: "109 × 69 × 35 mm",
      material: "ABS+PC",
      colors: "Black, white, blue, pink",
      indicator: "LED lights",
      wirelessOutput: "15W",
      builtInCables: "USB‑C (5V/3A, 9V/2.2A, 12V/1.65A), Lightning (5V/2.4A)",
      usbAOutput: "5V/3A, 9V/2A, 12V/1.5A, 10V/2.25A (QC 22.5W)",
      usbInputOutput: "USB‑C: 5V/3A, 9V/2A, 12V/1.5A, 10V/2.25A (22.5W)",
      weight: "~450g"
    },
    features: [
      "Massive 20000mAh capacity",
      "Built‑in USB‑C and Lightning cables",
      "15W wireless charging",
      "USB‑A QC 22.5W output",
      "4 colour options"
    ],
    applications: [
      "Multi‑day travel and camping",
      "Power for laptops, tablets, phones",
      "Family and group outings"
    ],
    image: "/productImg/p-bank/powerbank030.jpg",
    gallery: ["/productImg/p-bank/powerbank030.jpg"],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 1: P012 / P014 / P017 – 4-cable solar series, 20000mAh, PD20W
  {
    id: "pb-201",
    slug: "solar-power-bank-4-cables-20000mah",
    name: "4‑Cable Solar Power Bank 20000mAh",
    model: "Solar 4‑Cable",
    modelNumbers: ["P012", "P014", "P017", "PO14", "PO17", "Solar Series 1.65W", "Solar Series 1.6W"],
    category: "power-bank",
    type: "solar",
    description: "20000mAh solar power bank with 4 built‑in cables (USB‑C, Micro, Lightning, USB‑A), PD20W fast charging, and 360‑480LM flashlight.",
    specifications: {
      capacity: "20000mAh / 74Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "1.6‑1.65W (5.5V/290‑300mA)",
      icType: "IP5356",
      output: {
        typeC: "5V/3A, 9V/2.22A, 12V/1.66A (PD20W)",
        usbA1: "5V/4.5A, 5V/3A, 9V/2A, 12V/1.5A (SCP22.5W)",
        usbA2: "5V/2.1A",
        builtInMicro: "5V/2.1A",
        builtInTypeC: "5V/3A, 9V/2.22A, 12V/1.66A (PD20W)",
        builtInLightning: "5V/2.4A"
      },
      input: {
        typeC: "5V/3A, 9V/2.2A, 12V/1.5A (PD18W)",
        builtInUSBA: "5V/3A, 9V/2A, 12V/1.5A (QC18W)"
      },
      ledLight: "360‑480LM",
      dimensions: "173‑183 × 84‑96 × 25‑39 mm",
      material: "ABS+PC (V0), silicone, TPU",
      weight: "500‑560g"
    },
    features: [
      "4 built‑in cables – no extra cables needed",
      "PD20W and SCP22.5W fast charging",
      "1.6‑1.65W solar panel",
      "High‑brightness 360‑480LM flashlight",
      "V0 flame‑retardant casing"
    ],
    applications: ["Camping, hiking", "Emergency backup", "Off‑grid work"],
    image: "/productImg/p-bank/powerbank031.jpg",
    gallery: [
      "/productImg/p-bank/powerbank031a.jpg",
      "/productImg/p-bank/powerbank031b.jpg",
      "/productImg/p-bank/powerbank031.jpg"
    ],
    datasheet: "",
    certifications: ["CE", "FCC", "RoHS", "UL2056"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 2: HS-43 – Hand crank solar power bank
  {
    id: "pb-202",
    slug: "hand-crank-solar-power-bank",
    name: "Hand Crank Solar Power Bank",
    model: "Hand Crank Series",
    modelNumbers: ["HS-43"],
    category: "power-bank",
    type: "solar",
    description: "20000mAh solar power bank with hand crank generator, 4 built‑in cables, PD20W fast charging, and 480LM flashlight.",
    specifications: {
      capacity: "20000mAh / 74Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "1.65W (5.5V/300mA)",
      handCrank: "5V/400mA",
      icType: "IP5356",
      output: {
        typeC: "5V/3A, 9V/2.22A, 12V/1.66A (PD20W)",
        usbA1: "5V/4.5A, 5V/3A, 9V/2A, 12V/1.5A (SCP22.5W)",
        usbA2: "5V/2.1A",
        builtInMicro: "5V/2.1A",
        builtInTypeC: "5V/3A, 9V/2.22A, 12V/1.66A (PD20W)",
        builtInLightning: "5V/2.4A"
      },
      input: {
        typeC: "5V/3A, 9V/2.2A, 12V/1.5A (PD18W)",
        builtInUSBA: "5V/3A, 9V/2A, 12V/1.5A (QC18W)",
        handCrank: "5V/400mA"
      },
      ledLight: "480LM",
      dimensions: "173.2×84×42.2mm",
      material: "ABS+PC (V0), silicone, TPU",
      weight: "580g"
    },
    features: [
      "Hand crank generator for emergency power",
      "20000mAh high capacity",
      "4 built‑in cables",
      "PD20W fast charging",
      "480LM LED flashlight"
    ],
    applications: ["Emergency preparedness", "Survival kits", "Off‑grid"],
    image: "/productImg/p-bank/powerbank034.jpg",
    gallery: ["/productImg/p-bank/powerbank034.jpg"],
    datasheet: "",
    certifications: ["UL2056", "CE", "UKCA", "RoHS", "FCC", "UN38.3", "MSDS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 3: R-N31 – Emergency solar radio with hand crank
  {
    id: "pb-203",
    slug: "emergency-solar-radio-crank",
    name: "Emergency Solar Radio with Hand Crank",
    model: "Emergency Radio",
    modelNumbers: ["R-N31"],
    category: "power-bank",
    type: "solar",
    description: "Multi‑function emergency radio with solar panel, hand crank, 5000mAh battery, AM/FM radio, SOS alarm, compass, and LED lights.",
    specifications: {
      capacity: "5000mAh / 18.5Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarCharging: "5.5V/40mA",
      handCrank: "5V/400mA",
      input: { typeC: "5V/2A" },
      output: { usbA: "5V/2.1A" },
      radio: { fm: "76‑108 MHz", am: "52‑170 KHz" },
      ledLight: { near: "1W / 120LM", far: "6W / 500LM" },
      speakerPower: "4Ω/3W",
      dimensions: "134×94×46mm",
      material: "ABS+PC (V0)",
      weight: "300g"
    },
    features: [
      "AM/FM radio with hand crank power",
      "5000mAh backup battery",
      "Solar panel for emergency charging",
      "Two LED lights (120LM near, 500LM far)",
      "SOS alarm and compass included"
    ],
    applications: ["Emergency kits", "Survival preparedness", "Disaster response"],
    image: "/productImg/p-bank/powerbank035.jpg",
    gallery: [
      "/productImg/p-bank/powerbank035a.jpg",
      "/productImg/p-bank/powerbank035.jpg"
    ],
    datasheet: "",
    certifications: [],
    warranty: "12 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 4: LS22 / LS42 / LS43 – Metal body solar power banks
  {
    id: "pb-204",
    slug: "metal-solar-power-bank",
    name: "Metal Solar Power Bank",
    model: "Metal Series",
    modelNumbers: ["LS22", "LS42", "LS43"],
    category: "power-bank",
    type: "solar",
    description: "Metal‑cased solar power bank with 16000‑20000mAh, built‑in cables, and LED torch.",
    specifications: {
      capacity: "16000‑20000mAh / 59‑74Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "1.2W (5.5V/220mA)",
      icType: "MP5216",
      input: { micro: "5V/2A", typeC: "5V/2A", builtInUSBA: "5V/2A" },
      output: { usbA: "5V/2.1A", builtInMicro: "5V/2.1A", builtInTypeC: "5V/2.1A" },
      ledLight: "0.2W / 20LM",
      dimensions: "152×78×28mm",
      material: "Metal + ABS+PC (V0)",
      weight: "350g"
    },
    features: [
      "Metal casing for durability",
      "16000‑20000mAh capacity",
      "Built‑in Micro and USB‑A input cable",
      "20LM LED torch",
      "Simple and rugged"
    ],
    applications: ["Outdoor activities", "Emergency", "Travel"],
    image: "/productImg/p-bank/powerbank049.jpg",
    gallery: [
      "/productImg/p-bank/powerbank049a.jpg",
      "/productImg/p-bank/powerbank049b.jpg",
      "/productImg/p-bank/powerbank049.jpg"
    ],
    datasheet: "",
    certifications: ["CE", "CMC", "LVO", "UKCA", "ROHS", "UL2056"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 5: YD-887S – Rugged 3‑USB, 100LM torch
  {
    id: "pb-205",
    slug: "rugged-solar-power-bank-3usb",
    name: "Rugged 3‑USB Solar Power Bank",
    model: "Rugged 3‑USB",
    modelNumbers: ["YD-887S"],
    category: "power-bank",
    type: "rugged",
    description: "Rugged 20000mAh solar power bank with 3 USB outputs, 1.54W solar panel, and 100LM LED torch.",
    specifications: {
      capacity: "20000mAh / 74Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "1.54W (5.5V/280mA), 156.5×71×1.6mm",
      icType: "MP5216",
      input: { typeC: "5V/2A", micro: "5V/2A" },
      output: { usbA1: "5V/2.1A", usbA2: "5V/2.1A", usbA3: "5V/2.1A" },
      ledLight: "0.8W / 100LM",
      dimensions: "172.8×87.2×25.7mm",
      material: "ABS+PC (V0)",
      weight: "480g",
      colors: "Black-red, all black, black-blue, black-orange"
    },
    features: [
      "20000mAh high capacity",
      "Three USB‑A ports",
      "1.54W solar panel",
      "100LM LED torch",
      "Rugged construction"
    ],
    applications: ["Group camping", "Work sites", "Emergency shelters"],
    image: "/productImg/p-bank/powerbank054.jpg",
    gallery: ["/productImg/p-bank/powerbank054.jpg"],
    datasheet: "",
    certifications: ["UL2056", "CE", "ROHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 6: YL-887S – Rugged with detachable cables, 360LM torch
  {
    id: "pb-206",
    slug: "rugged-solar-power-bank-detachable-cables",
    name: "Rugged Solar Power Bank with Detachable Cables",
    model: "Rugged Detachable",
    modelNumbers: ["YL-887S"],
    category: "power-bank",
    type: "rugged",
    description: "20000mAh rugged solar power bank with detachable USB‑C, Micro, Lightning cables and 360LM torch.",
    specifications: {
      capacity: "20000mAh / 74Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "1.54W (5.5V/280mA), 156.5×71×1.6mm",
      icType: "MP5216",
      input: { typeC: "5V/2A", micro: "5V/2A" },
      output: {
        usbA1: "5V/2.1A",
        usbA2: "5V/2.1A",
        detachableMicro: "5V/2.1A",
        detachableLightning: "5V/2.1A",
        detachableTypeC: "5V/2.1A"
      },
      ledLight: "3W / 360LM",
      dimensions: "172×87×29mm",
      weight: "520g"
    },
    features: [
      "20000mAh capacity",
      "Three detachable cables",
      "1.54W solar panel",
      "360LM high‑brightness torch"
    ],
    applications: ["Camping with versatile cables", "Emergency backpack"],
    image: "/productImg/p-bank/powerbank055.jpg",
    gallery: ["/productImg/p-bank/powerbank055.jpg"],
    datasheet: "",
    certifications: ["UL2056", "CE", "ROHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 7: P96S – MagSafe wireless solar 10000mAh
  {
    id: "pb-207",
    slug: "magsafe-solar-power-bank-10000mah",
    name: "MagSafe Wireless Solar Power Bank",
    model: "MagSafe Solar",
    modelNumbers: ["P96S"],
    category: "power-bank",
    type: "wireless",
    description: "10000mAh MagSafe compatible solar power bank with 15W wireless charging, 20W PD, and 0.55W solar panel.",
    specifications: {
      capacity: "10000mAh / 37Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "0.55W (5.5V/100mA)",
      icType: "Injoinic 5568",
      input: { typeC: "5V/2A, 9V/2A" },
      output: {
        typeC: "5V/3A, 9V/2.22A, 12V/1.67A (PD20W)",
        usbA: "5V/3A, 9V/2A, 12V/1.5A, 5V/4.5A (SCP22.5W)",
        wireless: "15W"
      },
      dimensions: "108×69×22mm",
      weight: "208g",
      material: "ABS+PC (V0)"
    },
    features: [
      "10000mAh capacity",
      "15W MagSafe wireless charging",
      "20W PD and 22.5W SCP fast charging",
      "0.55W solar trickle panel",
      "Ultra‑compact 22mm thick"
    ],
    applications: ["Daily iPhone wireless charging", "Solar‑assisted travel"],
    image: "/productImg/p-bank/powerbank057.jpg",
    gallery: ["/productImg/p-bank/powerbank057.jpg"],
    datasheet: "",
    certifications: ["UN38.3", "MSDS", "UL2056"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 8: T113S – Mini MagSafe solar 5000mAh
  {
    id: "pb-208",
    slug: "mini-magsafe-solar-power-bank",
    name: "Mini MagSafe Solar Power Bank",
    model: "Mini MagSafe",
    modelNumbers: ["T113S"],
    category: "power-bank",
    type: "wireless",
    description: "Ultra‑compact 5000mAh MagSafe solar power bank with 15W wireless charging, 20W PD, and 0.55W solar panel.",
    specifications: {
      capacity: "5000mAh / 18.5Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "0.55W (5.5V/100mA)",
      icType: "Injoinic 5568",
      input: { typeC: "5V/2A, 9V/2A" },
      output: {
        typeC: "5V/3A, 9V/2.22A, 12V/1.67A (PD20W)",
        usbA: "5V/3A, 9V/2A, 12V/1.5A, 5V/4.5A (SCP22.5W)",
        wireless: "15W"
      },
      dimensions: "108×69×22mm",
      weight: "130g"
    },
    features: [
      "5000mAh ultra‑compact",
      "15W MagSafe wireless",
      "20W PD and 22.5W SCP",
      "0.55W solar trickle",
      "Pocketable"
    ],
    applications: ["Everyday carry", "MagSafe iPhone", "Light travel"],
    image: "/productImg/p-bank/powerbank056.jpg",
    gallery: [
      "/productImg/p-bank/powerbank056a.jpg",
      "/productImg/p-bank/powerbank056.jpg"
    ],
    datasheet: "",
    certifications: ["UN38.3", "MSDS", "UL2056"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 9: M01 – Ultra‑slim 10000mAh with built‑in cables
  {
    id: "pb-209",
    slug: "ultra-slim-solar-power-bank-10000mah",
    name: "Ultra‑Slim Solar Power Bank",
    model: "Ultra‑Slim",
    modelNumbers: ["M01"],
    category: "power-bank",
    type: "compact",
    description: "Ultra‑slim 10000mAh solar power bank with built‑in USB‑C, Micro, Lightning cables and digital display.",
    specifications: {
      capacity: "10000mAh / 37Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "0.55W (5.5V/100mA)",
      icType: "Injoinic 5306",
      input: { micro: "5V/2A", typeC: "5V/2A", builtInUSBA: "5V/2A" },
      output: {
        usbA1: "5V/2.1A",
        usbA2: "5V/2.1A",
        builtInTypeC: "5V/2.1A",
        builtInMicro: "5V/2.1A",
        builtInLightning: "5V/2.1A"
      },
      dimensions: "88×78×26mm",
      weight: "277g",
      material: "ABS"
    },
    features: [
      "10000mAh in ultra‑slim 26mm design",
      "Built‑in USB‑C, Micro, Lightning cables",
      "LED digital display",
      "Simple and affordable"
    ],
    applications: ["Everyday carry", "Cable‑free travel", "Solar backup"],
    image: "/productImg/p-bank/powerbank058.jpg",
    gallery: ["/productImg/p-bank/powerbank058a.jpg"],
    datasheet: "",
    certifications: ["UL2056", "CE", "RoHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 10: XS-610 – Budget 18000mAh solar
  {
    id: "pb-210",
    slug: "budget-solar-power-bank-18000mah",
    name: "Budget Solar Power Bank",
    model: "Budget Solar",
    modelNumbers: ["XS-610"],
    category: "power-bank",
    type: "solar",
    description: "Cost‑effective 18000mAh solar power bank with 1.4W solar panel and dual USB outputs.",
    specifications: {
      capacity: "18000mAh / 66.6Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "1.4W (5.5V/250mA), 122.6×52.6×1.6mm",
      icType: "MP5016",
      input: { micro: "5V/2A", typeC: "5V/2A" },
      output: { usbA1: "5V/2.1A", usbA2: "5V/2.1A" },
      dimensions: "142×72×27mm",
      weight: "430g"
    },
    features: [
      "18000mAh high capacity",
      "1.4W solar panel",
      "Two 2.1A USB ports",
      "Affordable"
    ],
    applications: ["Budget outdoor power", "Emergency backup", "Long trips"],
    image: "/productImg/p-bank/powerbank059.jpg",
    gallery: ["/productImg/p-bank/powerbank059.jpg"],
    datasheet: "",
    certifications: ["CE", "ROHS", "UL2056"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 11: QC86S – Solar with 15000mAh and 50LM torch
  {
    id: "pb-211",
    slug: "solar-power-bank-with-torch-15000mah",
    name: "Solar Power Bank with LED Torch",
    model: "Solar Torch",
    modelNumbers: ["QC86S"],
    category: "power-bank",
    type: "solar",
    description: "15000mAh solar power bank with 0.8W solar panel, 50LM LED torch, and dual USB outputs.",
    specifications: {
      capacity: "15000mAh / 55.5Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "0.8W (5V/160mA), 129.3×55.2×1.6mm",
      icType: "MP5016",
      input: { micro: "5V/2A", typeC: "5V/2A" },
      output: { usbA1: "5V/2.1A", usbA2: "5V/2.1A" },
      ledLight: "0.4W / 50LM",
      dimensions: "154×73×21mm",
      weight: "360g",
      color: "Black"
    },
    features: [
      "15000mAh capacity",
      "0.8W solar panel",
      "50LM LED torch",
      "Two USB outputs"
    ],
    applications: ["Camping", "Power outage", "Hiking"],
    image: "/productImg/p-bank/powerbank060.jpg",
    gallery: ["/productImg/p-bank/powerbank060.jpg"],
    datasheet: "",
    certifications: ["CE", "ROHS", "UL2056"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 12: YD-818P family – Basic 20000mAh solar
  {
    id: "pb-212",
    slug: "basic-solar-power-bank-20000mah",
    name: "Basic Solar Power Bank 20000mAh",
    model: "Basic Solar",
    modelNumbers: ["YD-818P", "YD-818P (Thin)", "YD-828P", "YD-818PL"],
    category: "power-bank",
    type: "solar",
    description: "Simple 20000mAh solar power bank with 0.88W solar panel and dual USB outputs. Some models include a stronger LED torch.",
    specifications: {
      capacity: "20000mAh / 74Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "0.88W (5.5V/160mA), 127.6×54.1×1.6mm",
      icType: "MP5216",
      input: { micro: "5V/2.1A", typeC: "5V/2.1A" },
      output: { usbA1: "5V/2.1A", usbA2: "5V/2.1A" },
      ledLight: "20‑360LM (depends on variant)",
      dimensions: "142×69×17‑29mm",
      weight: "234‑455g"
    },
    features: [
      "20000mAh capacity",
      "0.88W solar panel",
      "Two USB outputs",
      "V0 flame‑retardant casing",
      "Optional strong LED torch"
    ],
    applications: ["Long trips", "Emergency power", "Budget solar"],
    image: "/productImg/p-bank/powerbank063.jpg",
    gallery: [
      "/productImg/p-bank/powerbank061.jpg",
      "/productImg/p-bank/powerbank061a.jpg",
      "/productImg/p-bank/powerbank062.jpg",
      "/productImg/p-bank/powerbank064.jpg"
    ],
    datasheet: "",
    certifications: ["PSE", "CE", "ROHS", "UL2056", "UKCA", "FCC"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 13: F33W – IP6 waterproof solar with wireless and 360LM torch
  {
    id: "pb-213",
    slug: "ip6-waterproof-solar-power-bank",
    name: "IP6 Waterproof Solar Power Bank",
    model: "IP6 Waterproof",
    modelNumbers: ["F33W"],
    category: "power-bank",
    type: "rugged",
    description: "IP6 waterproof 20000mAh solar power bank with 1.6W solar panel, 15W wireless charging, PD20W, and 360LM torch.",
    specifications: {
      capacity: "20000mAh / 74Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "1.6W (5.5V/290mA), 150.8×71.3×1.6mm",
      icType: "IP5356",
      waterproof: "IP6",
      input: {
        typeC: "5V/3A, 9V/2A, 12V/1.5A (PD18W)",
        micro: "5V/2A, 9V/2A, 12V/1.5A (QC18W)"
      },
      output: {
        usbA1: "5V/3A, 9V/2A, 10V/2.25A, 12V/1.5A (SCP22.5W)",
        usbA2: "5V/3A",
        usbA3: "5V/3A",
        typeC: "5V/3A, 9V/2.22A, 12V/1.66A (PD20W)",
        wireless: "15W"
      },
      ledLight: "3W / 360LM",
      dimensions: "178×93×30mm",
      weight: "530g",
      colors: "Black-red, all black, black-blue, black-orange, black-green"
    },
    features: [
      "IP6 waterproof rating",
      "15W wireless and 20W PD fast charging",
      "1.6W solar panel",
      "360LM high‑power torch",
      "Three USB outputs"
    ],
    applications: ["Heavy outdoor use in rain", "Marine", "Emergency"],
    image: "/productImg/p-bank/powerbank065.jpg",
    gallery: ["/productImg/p-bank/powerbank065.jpg"],
    datasheet: "",
    certifications: ["CE", "ROHS", "FCC", "UL2056", "PSE"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 14: YD-819W / YD-819S – IP55, wireless (or not), dual torch
  {
    id: "pb-214",
    slug: "ip55-waterproof-solar-power-bank",
    name: "IP55 Waterproof Solar Power Bank",
    model: "IP55 Series",
    modelNumbers: ["YD-819W", "YD-819S"],
    category: "power-bank",
    type: "rugged",
    description: "IP55 water‑resistant 15000‑16000mAh solar power bank with 1.65W solar panel, dual 360LM torches, and optional 5W wireless charging.",
    specifications: {
      capacity: "15000‑16000mAh / 55‑59Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "1.65W (5.5V/300mA), 159.2×74.4×1.6mm",
      icType: "IP5306",
      waterproof: "IP55",
      input: { typeC: "5V/2A", micro: "5V/2A" },
      output: { usbA1: "5V/2.1A", usbA2: "5V/2.1A", wireless: "5W (YD-819W only)" },
      ledLight: "3W / 360LM (dual torches)",
      dimensions: "177×88×25.6mm",
      weight: "450g"
    },
    features: [
      "IP55 water‑resistant",
      "Dual 360LM LED torches",
      "1.65W solar panel",
      "5W wireless charging (YD-819W)",
      "15000‑16000mAh capacity"
    ],
    applications: ["Camping in light rain", "Backyard", "Wireless charging convenience"],
    image: "/productImg/p-bank/powerbank066.jpg",
    gallery: [
      "/productImg/p-bank/powerbank067.jpg",
      "/productImg/p-bank/powerbank066.jpg"
    ],
    datasheet: "",
    certifications: ["FCC", "UL2056", "PSE"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 15: i26wLQ / i26wL – IP66, 20000mAh, 430LM lantern, wireless
  {
    id: "pb-215",
    slug: "ip66-solar-power-bank-lantern",
    name: "IP66 Waterproof Solar Power Bank with Lantern",
    model: "IP66 Lantern",
    modelNumbers: ["i26wLQ", "i26wL"],
    category: "power-bank",
    type: "rugged",
    description: "IP66 waterproof 20000mAh solar power bank with 430LM camping lantern, wireless charging, and 20W PD on fast version.",
    specifications: {
      capacity: "20000mAh / 74Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "1.6W (5.5V/290mA), 150.8×71.3×1.6mm",
      icType: "IP5328 (PD20W on i26wLQ)",
      waterproof: "IP66",
      input: { micro: "5V/3A, 9V/2A", typeC: "5V/3A, 9V/2A" },
      output: {
        usbA1: "5V/3A, 9V/2A, 12V/1.5A (QC18W)",
        usbA2: "5V/3A, 9V/2A, 12V/1.5A (QC18W)",
        typeC: "5V/3A, 9V/2.22A, 12V/1.67A (PD20W on i26wLQ)",
        wireless: "5‑10W"
      },
      ledLight: "3.6W / 430LM",
      dimensions: "200×130×32mm",
      weight: "565g",
      material: "ABS+PC (V0), TPU, silicone, aluminium alloy"
    },
    features: [
      "IP66 dust‑tight and water jets resistant",
      "20000mAh with 20W PD and 10W wireless (fast model)",
      "430LM camping lantern",
      "1.6W high‑efficiency solar panel",
      "Rugged aluminium alloy accents"
    ],
    applications: ["Extreme outdoor use", "Professional expeditions", "Marine"],
    image: "/productImg/p-bank/powerbank075.jpg",
    gallery: [
      "/productImg/p-bank/powerbank076.jpg",
      "/productImg/p-bank/powerbank075.jpg"
    ],
    datasheet: "",
    certifications: ["UL2056", "PSE", "CE", "ROHS"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 16: Folding solar series (7W/6W, 15000‑20000mAh, with/without wireless)
  {
    id: "pb-216",
    slug: "folding-solar-power-bank",
    name: "Folding Solar Power Bank",
    model: "Folding Solar",
    modelNumbers: ["YD-820S", "YD-820SQ", "L24S", "L24SW", "L24S4W", "L3S4W", "L3SW", "L3S4Q", "L3SQ", "XN-830S"],
    category: "power-bank",
    type: "solar",
    description: "Foldable 3‑4 panel solar power bank with 15000‑20000mAh, LED torch, and fast charging (PD20W on select models).",
    specifications: {
      capacity: "15000‑20000mAh / 55‑74Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "5.5‑7W (5.5V/1.0‑1.3A), 3‑4 panels",
      icType: "IP5306, IP5328, SW6206 or IP5356",
      output: {
        usbA: "5V/2.1A or 5V/3A, 9V/2A (fast)",
        typeC: "5V/3A, 9V/2.22A, 12V/1.66A (PD20W on fast models)",
        wireless: "5‑10W on some models"
      },
      input: "Type‑C: 5V/2A to 20W PD",
      ledLight: "150‑680LM (1‑3 LEDs)",
      dimensions: "Folded: 162‑180 × 86‑105 × 27‑45 mm",
      material: "ABS+PC (V0) + TPU + silicone",
      weight: "580‑630g"
    },
    features: [
      "Foldable multi‑panel solar array (5.5‑7W)",
      "15000‑20000mAh capacity",
      "LED torch (150‑680LM)",
      "PD20W fast charging on select models",
      "Wireless charging on some models"
    ],
    applications: ["Hiking, trekking", "Remote work", "Survival kits"],
    image: "/productImg/p-bank/powerbank082.jpg",
    gallery: [
      "/productImg/p-bank/powerbank042.jpg",
      "/productImg/p-bank/powerbank042a.jpg",
      "/productImg/p-bank/powerbank044.jpg"
    ],
    datasheet: "",
    certifications: ["CE", "RoHS", "PSE", "UL2056"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 17: YD-820W / YD-810W – Wireless solar banks
  {
    id: "pb-217",
    slug: "wireless-solar-power-bank",
    name: "Wireless Solar Power Bank",
    model: "Wireless Solar",
    modelNumbers: ["YD-820W", "YD-810W"],
    category: "power-bank",
    type: "wireless",
    description: "Solar power bank with 5W wireless charging, 0.88W solar panel, and dual USB outputs. Available in 8000‑15000mAh.",
    specifications: {
      capacity: "8000‑15000mAh / 29‑55Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "0.88W (5.5V/160mA), 153.8×79.4mm",
      icType: "IP5306",
      input: "Type‑C: 5V/2A or Micro: 5V/2A",
      output: { usbA1: "5V/2.1A", usbA2: "5V/2.1A", wireless: "5W" },
      dimensions: "170×111×40‑48mm",
      weight: "470‑580g"
    },
    features: [
      "5W wireless charging",
      "0.88W solar panel",
      "Dual USB‑A outputs",
      "Compact design"
    ],
    applications: ["Desk charging", "Travel with wireless devices", "Everyday use"],
    image: "/productImg/p-bank/powerbank085.jpg",
    gallery: [
      "/productImg/p-bank/powerbank083.jpg",
      "/productImg/p-bank/powerbank083a.jpg"
    ],
    datasheet: "",
    certifications: ["CE", "ROHS", "PSE"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 18: F16W / F16WQ – Camping lantern solar bank with wireless
  {
    id: "pb-218",
    slug: "camping-lantern-solar-power-bank",
    name: "Camping Lantern Solar Power Bank",
    model: "Lantern Solar",
    modelNumbers: ["F16W", "F16WQ"],
    category: "power-bank",
    type: "solar",
    description: "20000mAh solar power bank with 430LM camping lantern, wireless charging (5‑10W), and IP55 water resistance.",
    specifications: {
      capacity: "20000mAh / 74Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "1.6W (5.5V/290mA), 150.8×71.3×1.6mm",
      icType: "IP5328 (PD20W on F16WQ)",
      waterproof: "IP55",
      input: { micro: "5V/2‑3A", typeC: "5V/3A" },
      output: {
        usbA1: "5V/2.1‑3A",
        usbA2: "5V/2.1‑3A",
        typeC: "5V/3.1A to PD20W",
        wireless: "5‑10W"
      },
      ledLight: "430LM",
      dimensions: "191×117×25mm",
      weight: "405g"
    },
    features: [
      "20000mAh with 430LM lantern",
      "IP55 water resistant",
      "5‑10W wireless charging",
      "20W PD fast charging (F16WQ)",
      "1.6W solar panel"
    ],
    applications: ["Camping lantern", "Home emergency", "Outdoor parties"],
    image: "/productImg/p-bank/powerbank071.jpg",
    gallery: [
      "/productImg/p-bank/powerbank073.jpg",
      "/productImg/p-bank/powerbank071.jpg"
    ],
    datasheet: "",
    certifications: ["PSE", "UL2056"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 19: YD-819E – 3‑mode solar lantern with wireless
  {
    id: "pb-219",
    slug: "3-mode-solar-lantern-power-bank",
    name: "3‑Mode Solar Lantern Power Bank",
    model: "3‑Mode Lantern",
    modelNumbers: ["YD-819E"],
    category: "power-bank",
    type: "solar",
    description: "20000mAh solar power bank with 3‑mode 430LM lantern, 5W wireless charging, and 1.6W solar panel.",
    specifications: {
      capacity: "20000mAh / 74Wh",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "1.6W (5.5V/290mA), 150.8×71.3×1.6mm",
      icType: "IP5328",
      input: { typeC: "5V/3A, 9V/2A", micro: "5V/2A" },
      output: { usbA1: "5V/2.1A", usbA2: "5V/2.1A", wireless: "5W" },
      ledLight: "430LM (3 modes)",
      dimensions: "175×93×24.5mm",
      weight: "430g"
    },
    features: [
      "20000mAh capacity",
      "3‑mode lantern (high/low/off)",
      "5W wireless charging",
      "1.6W solar panel"
    ],
    applications: ["Camping", "Workshop", "Emergency"],
    image: "/productImg/p-bank/powerbank091.jpg",
    gallery: [
      "/productImg/p-bank/powerbank091a.jpg",
      "/productImg/p-bank/powerbank091.jpg"
    ],
    datasheet: "",
    certifications: ["UL2056"],
    warranty: "18 months",
    inStock: true,
    youtubeVideoId: null
  },
  // Group 20: S‑BOX – Solar Bluetooth speaker
  {
    id: "pb-220",
    slug: "solar-bluetooth-speaker-power-bank",
    name: "Solar Bluetooth Speaker",
    model: "Solar Speaker",
    modelNumbers: ["S-BOX"],
    category: "power-bank",
    type: "solar",
    description: "Solar Bluetooth speaker with 5000mAh battery, 6W×2 speakers, TF card slot, and USB‑A output for phone charging.",
    specifications: {
      capacity: "5000mAh (max)",
      batteryType: "A‑grade polymer Li‑ion",
      solarPanel: "1.5W (164×49mm), monocrystalline",
      speakerPower: "6W×2 + bass radiator",
      bluetoothVersion: "V4.2, range 10‑15m",
      audioFormats: "APE/MP3/WMA/WAV/FLAC",
      tfCardSupport: "Up to 128GB",
      input: { typeC: "5V/2A" },
      output: { usbA: "5V/2.1A" },
      dimensions: "200×85×82mm",
      material: "ABS + TPU",
      weight: "480g",
      color: "Black"
    },
    features: [
      "Solar powered rechargeable speaker",
      "Bluetooth V4.2 with 10‑15m range",
      "6W×2 sound with bass radiator",
      "5000mAh battery – also charges phones",
      "TF card slot for offline music"
    ],
    applications: ["Outdoor parties", "Picnics and camping", "Beach"],
    image: "/productImg/p-bank/powerbank036.jpg",
    gallery: [
      "/productImg/p-bank/powerbank036a.jpg",
      "/productImg/p-bank/powerbank036.jpg"
    ],
    datasheet: "",
    certifications: [],
    warranty: "12 months",
    inStock: true,
    youtubeVideoId: null
  }
];
