import { getCliClient } from 'sanity/cli';

const featuresData = {
  "backpack-battery-60-8v-12ah-15ah": [
    "Lightweight backpack design – easy to carry",
    "IP65 dust and water resistant",
    "ISDN communication for smart monitoring",
    "Reliable power for field workers and surveyors"
  ],
  "battery-swapping-series-51-2v-20ah-25ah-40ah": [
    "Swap‑ready design for fast battery changes",
    "16S cell configuration for stable performance",
    "1.5C peak output for demanding rides",
    "Reliable for delivery fleets and e‑bikes"
  ],
  "low-speed-vehicle-battery-51-2v-100ah": [
    "Long 5.12kWh capacity for extended use",
    "LFP chemistry – safe and durable",
    "IP54 protection for outdoor use",
    "Perfect for golf carts, sightseeing, and utility vehicles"
  ],
  "electric-two-wheeler-battery-64v-76-8v-30ah-40ah": [
    "High energy density for longer rides",
    "IP65 water and dust resistance",
    "UART communication for smart BMS",
    "Reliable for e‑motorcycles and scooters"
  ],
  "electric-tricycle-battery-64v-76-8v-50ah-100ah": [
    "High capacity for extended range",
    "150A peak output for heavy loads",
    "IP65 rated for tough conditions",
    "Perfect for cargo and passenger tricycles"
  ],
  "ress-all-in-one-battery-3-5kw-2-56kwh": [
    "All‑in‑one design – easy installation",
    "3.5kW output for home appliances",
    "Air‑cooled for quiet operation",
    "EPS backup for power cuts"
  ],
  "ress-hybrid-all-in-one-battery-5-14kwh": [
    "Hybrid design – solar + grid + backup",
    "Wide temperature range for hot climates",
    "RS485/CAN for smart monitoring",
    "Scalable energy storage for growing needs"
  ],
  "ress-rack-battery-25-6v-51-2v-100ah": [
    "Rack‑mount design – fits standard cabinets",
    "Scalable up to 16 units in parallel",
    "RS485/RS232/CAN for integration",
    "Reliable for telecom and data centres"
  ],
  "ress-wall-battery-25-6v-51-2v-100-200ah": [
    "Wall‑mounted – saves floor space",
    "Scalable to 16 units for large storage",
    "Smart BMS with RS485/CAN",
    "Perfect for home solar storage"
  ],
  "high-voltage-battery-system-20-61kwh": [
    "High‑voltage for commercial and industrial use",
    "IP67 available for harsh environments",
    "Modular design for easy expansion",
    "RS485/CAN for energy management systems"
  ],
  "lfp-battery-12-8v-8-200ah": [
    "Wide capacity range – 8Ah to 200Ah",
    "IP65 – dust and water resistant",
    "Scalable for larger systems",
    "Reliable for solar, UPS, and backup"
  ]
};

async function main() {
  const client = getCliClient();
  const products = await client.fetch(`*[_type == "product"]{ _id, name, "slug": slug.current }`);
  
  let updatedCount = 0;
  
  for (const [slug, features] of Object.entries(featuresData)) {
    const product = products.find(p => p.slug === slug);
    if (!product) {
      console.warn(`Product not found for slug: ${slug}`);
      continue;
    }
    
    console.log(`Updating ${product.name} (${slug})...`);
    await client.patch(product._id).set({ features }).commit();
    console.log(`Successfully updated ${product.name}`);
    updatedCount++;
  }
  
  console.log(`\nAll done! Successfully updated ${updatedCount} products.`);
}

main().catch(console.error);
