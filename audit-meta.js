// Audit all static meta descriptions and titles for length
const descs = {
  'root-layout': 'Factory wholesale of LFP batteries, hybrid inverters, solar panels, and e-mobility. Reliable off-grid power solutions for Nigeria and emerging markets globally.',
  'root-og': 'Bypass middlemen. Scale your energy brand with industrial-grade production of solar solutions, portable power stations, solar hardware, and tech accessories for Nigeria, Bangladesh, and South Asia.',
  'homepage': 'Factory-direct pricing on LFP batteries, inverters, solar panels & e-mobility. Direct export to emerging markets like Lagos & Dhaka. Get a B2B quote in 24h!',
  'about-page': 'Operating to ISO 9001:2015 standards since 1998. Explore our state-of-the-art facility for energy storage. Trusted B2B supplier for importers globally.',
  'about-layout': 'Since 1998, JoyHand has engineered premium LFP energy storage and off-grid solutions. Discover our manufacturing capabilities aligned with ISO 9001:2015.',
  'products': 'Explore factory-direct LFP batteries, hybrid inverters, solar panels & tech accessories. Flexible B2B MOQs & global shipping to ports like Lagos and Dhaka.',
  'manufacturing-page': 'End-to-end OEM/ODM production for energy storage & solar hardware. We handle batch testing, customs, and direct shipping to Lagos & Karachi. Get a sample.',
  'manufacturing-layout': 'Scale your energy supply chain. We provide custom battery assembly, inverter engineering, and direct container export for global B2B importers at JoyHand.',
  'contact-page': 'Get a custom OEM/ODM manufacturing proposal in 24h. Call +86 130 6085 0617 or submit a B2B inquiry. Dedicated logistics to Lagos, Karachi & worldwide ports.',
  'contact-layout': 'Contact JoyHand Energy for a direct factory quote. We supply high-volume B2B energy hardware & OEM/ODM services. Offices in China, USA, Australia & Nigeria.',
  'blog': 'Deep-dives into global energy storage. Read about LFP vs Lead-Acid, OEM vs ODM strategies, and container export guides for markets like Nairobi and Karachi.',
  'cookie': 'Understand how JoyHand Energy uses cookies, tracking technologies, and analytics to improve your B2B browsing experience and provide personalized manufacturing insights.',
  'privacy': "Learn how JoyHand Energy collects, uses, and protects your personal and B2B corporate information when you use our website, online platforms, and OEM manufacturing services.",
  'terms': "Read the comprehensive terms and conditions governing the use of JoyHand Energy's website, B2B wholesale manufacturing services, and global export operations.",
  'quotation': 'View and download your custom quotation from Joyhand Energy.',
  // Solution configs
  'sol-storage-batteries': 'Grade-A LFP batteries for blackout protection. Factory direct to West Africa and global markets. Competitive B2B pricing and flexible wholesale MOQs.',
  'sol-solar-inverters': 'Direct OEM production of hybrid and off-grid solar inverters. Engineered for grid stability in Nigeria. Get a custom B2B quote in 24h.',
  'sol-portable-power': 'Manufacturer direct portable power stations. Optimized for emergency backup during blackouts in Africa. Low MOQs for distributors.',
  'sol-electric-mobility': 'Factory engineering for electric motorcycles and fleet systems. Rugged battery designs built for global distributors. Bulk export pricing.',
  'sol-power-banks': 'High-volume power bank manufacturing. Direct wholesale supply for retail networks and telecom distributors in Nigeria & South Asia.',
  'sol-accessories': 'Wholesale solar panels, LED street lights, and mobile tech accessories engineered for global distributors.',
};

const titles = {
  'root-default': 'Factory Direct Solar & Batteries | JoyHand',
  'homepage': 'JoyHand Energy: OEM/ODM Manufacturer | Energy & E-Mobility',
  'about-page': 'JoyHand Energy: 28-Year Manufacturing Heritage | B2B OEM',
  'about-layout': 'The Factory Behind Resilient Energy',
  'products': 'JoyHand Wholesale Products | LFP Batteries, Inverters & E-Mobility',
  'manufacturing-page': 'OEM & ODM Energy Manufacturing | JoyHand Factory',
  'manufacturing-layout': 'End-to-End OEM Production & Container Export',
  'contact-page': 'Contact JoyHand Energy | B2B Manufacturing Inquiry',
  'contact-layout': 'Direct Factory Sales & Support | Wholesale Inquiries',
  'blog': 'Manufacturing Intel & Energy Insights | JoyHand Blog',
  'cookie': 'Cookie Policy | JoyHand Energy',
  'privacy': 'Privacy Policy | JoyHand Energy',
  'terms': 'Terms of Service | JoyHand Energy',
  'quotation': 'Custom Quotation | Joyhand Energy',
  'catalog': 'Downloading Catalog | JoyHand Energy',
  // Solution titles (rendered with " | JoyHand" template = +10 chars)
  'sol-storage-batteries (rendered)': 'Wholesale LFP Battery Manufacturing | JoyHand',
  'sol-solar-inverters (rendered)': 'Wholesale Hybrid Inverter Production | JoyHand',
  'sol-portable-power (rendered)': 'Portable Power Station OEM Manufacturing | JoyHand',
  'sol-electric-mobility (rendered)': 'E-Mobility & EV Battery Solutions | JoyHand',
  'sol-power-banks (rendered)': 'Wholesale PD Fast Power Bank Supply | JoyHand',
  'sol-accessories (rendered)': 'Tech & Solar Accessories | JoyHand',
};

// Also check the "padded" solution descriptions (when < 120 chars the code appends extra text)
const solPadded = {};
Object.entries(descs).filter(([k]) => k.startsWith('sol-')).forEach(([k, v]) => {
  let d = v.length > 160 ? v.substring(0, 157) + '...' : v;
  if (d.length < 120) {
    d += ' Contact us to request a direct factory quote for B2B wholesale distribution and global import needs.';
  }
  solPadded[k + ' (PADDED)'] = d;
});

console.log('=== DESCRIPTIONS (max 160) ===');
Object.entries(descs).forEach(([k, v]) => {
  const status = v.length > 160 ? 'OVER' : v.length < 120 ? 'SHORT' : 'OK';
  console.log(`${status} [${v.length}] ${k}`);
});

console.log('\n=== SOLUTION DESCRIPTIONS AFTER PADDING (max 160) ===');
Object.entries(solPadded).forEach(([k, v]) => {
  const status = v.length > 160 ? 'OVER' : 'OK';
  console.log(`${status} [${v.length}] ${k}`);
});

console.log('\n=== TITLES (max 60) ===');
Object.entries(titles).forEach(([k, v]) => {
  const status = v.length > 60 ? 'OVER' : 'OK';
  console.log(`${status} [${v.length}] ${k}`);
});

// Check product fallback descriptions for length issues  
console.log('\n=== PRODUCT FALLBACK DESC TEMPLATES (approx) ===');
const sampleNames = ['JH-WB200 Wall Battery 10kWh', 'HF-12K Hybrid Inverter', 'E-Scooter 500W'];
const sampleModels = ['JH-WB200', 'HF-12K', 'YQ-500'];
const categories = ['battery', 'inverter', 'electric-mobility', 'portable-power', 'power-bank'];
categories.forEach(cat => {
  const name = sampleNames[0];
  const model = sampleModels[0];
  const modelText = ` (${model})`;
  const descMap = {
    battery: `Factory-direct ${name}${modelText} – LiFePO4 chemistry, 6000+ cycles. Wholesale backup battery for homes, SMEs, and telecom in Lagos and Nairobi.`,
    inverter: `${name}${modelText} – auto-switch solar, battery & grid during grid failures. CE certified. B2B wholesale pricing for global distributors.`,
    'electric-mobility': `${name}${modelText} – eliminate petrol costs for delivery fleets in Karachi and Dhaka. CE certified, bulk import pricing available.`,
    'portable-power': `${name}${modelText} – LiFePO4 power station with pure sine wave. Emergency backup for homes and businesses during frequent power cuts.`,
    'power-bank': `${name}${modelText} – stay connected through regional blackouts. CE/FCC certified. B2B wholesale pricing for African and Asian distributors.`,
  };
  let d = descMap[cat];
  // Simulate the truncation + padding logic
  let fd = d.length > 160 ? d.substring(0, 157) + '...' : d;
  if (fd.length < 120) {
    fd += ' Contact us today to request a direct factory B2B quote for wholesale distribution in your region.';
  }
  const status = fd.length > 160 ? 'OVER' : 'OK';
  console.log(`${status} [${fd.length}] ${cat}: "${fd}"`);
});
