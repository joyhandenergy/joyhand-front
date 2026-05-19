/**
 * optimize-seo.mjs  — Short Keyword Slug + Full SEO Meta Injector
 *
 * What it does:
 *   1. Updates `slug` → short, high-converting keyword URL (3-4 words)
 *   2. Injects/updates `seoTitle`  (≤60 chars, pain-point driven)
 *   3. Injects/updates `metaDescription` (≤160 chars, benefit + CTA)
 *
 * URL Strategy: Short keyword slugs outperform pain-point slugs because:
 *   - Google weights keywords at the START of URL more heavily
 *   - Buyers search "lfp battery 10kwh" not "battery-blackout-10kwh"
 *   - Shorter URLs get more backlink clicks and copy-pastes
 *
 * Usage: node scripts/optimize-seo.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);
const dataPath   = join(__dirname, "../src/data/productsData.js");

// ─── SEO MAP: keyed by product id ────────────────────────────────────────────
// slug         : new short keyword-rich URL (3-4 words, no pain-point jargon)
// seoTitle     : ≤60 chars
// metaDescription: ≤160 chars
const seoMap = {

  // ── BATTERIES ───────────────────────────────────────────────────────────────
  "bat-001": {
    slug: "lfp-battery-10kwh",
    seoTitle: "10kWh LiFePO4 Wall Battery – Nigeria B2B | JoyHand",
    metaDescription: "Factory-direct 51.2V 200Ah wall-mount LiFePO4 battery. WiFi BMS, 6000+ cycles, 5-yr warranty. Wholesale pricing for Nigerian solar distributors.",
  },
  "bat-002": {
    slug: "lfp-battery-15kwh",
    seoTitle: "15kWh LiFePO4 Wall Battery – Wholesale Africa | JoyHand",
    metaDescription: "51.2V 300Ah wall-mount LiFePO4 – 15.36kWh backup power. CE/IEC certified. Factory-direct wholesale pricing for Nigerian and African importers.",
  },
  "bat-003": {
    slug: "mobile-battery-20kwh",
    seoTitle: "20kWh Mobile LFP Battery – Off-Grid Nigeria | JoyHand",
    metaDescription: "51.2V 400Ah wheeled LiFePO4 battery for remote sites and events. WiFi BMS, 6000+ cycles. Factory-direct pricing for B2B importers in Africa.",
  },
  "bat-004": {
    slug: "mobile-battery-16kwh",
    seoTitle: "16kWh Portable LFP Battery – Solar Storage Nigeria | JoyHand",
    metaDescription: "51.2V 314Ah mobile LiFePO4 battery. 6000+ cycles, CE certified, built for off-grid Nigeria and Kenya. Request B2B wholesale pricing now.",
  },
  "bat-005": {
    slug: "rack-battery-10kwh",
    seoTitle: "10kWh Rack LiFePO4 Battery – Telecom UPS Nigeria | JoyHand",
    metaDescription: "GW-51.2/100-B rack LiFePO4 battery – LCD BMS, IP20, 6000 cycles. Keep telecom towers and server rooms online. Nigeria and East Africa grid backup.",
  },
  "bat-006": {
    slug: "rack-battery-15kwh",
    seoTitle: "15kWh Rack LiFePO4 Battery – Data Center Backup | JoyHand",
    metaDescription: "GW-51.2/300-B 15.56kWh rack LiFePO4 – industrial BMS, CE/IEC certified. Zero downtime for data centers on unstable PHCN supply. Get wholesale quote.",
  },
  "bat-007": {
    slug: "home-battery-5kwh",
    seoTitle: "5kWh Home Solar Battery LiFePO4 Nigeria | JoyHand",
    metaDescription: "51.2V 100Ah LiFePO4 home battery – 6000+ cycles, compact, easy install, 3-yr warranty. Replace lead-acid and cut generator costs. Factory B2B pricing.",
  },
  "bat-008": {
    slug: "solar-battery-10kwh",
    seoTitle: "10kWh Solar LiFePO4 Battery – Backup Power Nigeria | JoyHand",
    metaDescription: "51.2V 200Ah LiFePO4 solar storage battery – high cycle life, advanced BMS. B2B wholesale for Nigerian solar distributors. Factory-direct pricing.",
  },
  "bat-009": {
    slug: "solar-battery-16kwh",
    seoTitle: "16kWh LiFePO4 Solar Battery – Industrial Nigeria | JoyHand",
    metaDescription: "51.2V 314Ah industrial LiFePO4 battery. 200A BMS, CE/UN38.3 certified. Replace diesel generators. Wholesale for African energy importers.",
  },
  "bat-010": {
    slug: "all-in-one-solar-5kw",
    seoTitle: "5.5kW All-in-One Solar Storage 16kWh Nigeria | JoyHand",
    metaDescription: "HE01 replaces inverter, MPPT and battery in one cabinet. 6000 cycles, smart LCD, 11-16kWh LiFePO4. Ideal for Nigerian homes. B2B pricing available.",
  },
  "bat-011": {
    slug: "lifepo4-battery-5kwh",
    seoTitle: "5kWh LiFePO4 Drop-In Battery IP54 – Nigeria | JoyHand",
    metaDescription: "W51100: 40% lighter than lead-acid, 6000 cycles, IP54 rated. Parallel up to 16 units. Smart upgrade for homes, clinics and SMEs across Nigeria.",
  },

  // ── INVERTERS ────────────────────────────────────────────────────────────────
  "inv-001": {
    slug: "hybrid-inverter-6kw",
    seoTitle: "6kW Hybrid Solar Inverter – Nigeria B2B | JoyHand",
    metaDescription: "HF-6.2KW-48V auto-switches solar, battery and PHCN in <10ms. 93% efficient, 500V MPPT, CE/IEC certified. B2B wholesale pricing available.",
  },
  "inv-002": {
    slug: "hybrid-inverter-12kw",
    seoTitle: "12kW Hybrid Solar Inverter – Commercial Nigeria | JoyHand",
    metaDescription: "12kW hybrid inverter – 94% efficient, 15kW PV input, overload bypass. Keep businesses running during NEPA outages. Factory-direct for Nigerian distributors.",
  },
  "inv-003": {
    slug: "solar-inverter-12kw-ip54",
    seoTitle: "12kW IP54 Solar Inverter – Outdoor Nigeria | JoyHand",
    metaDescription: "Dust and rain proof IP54. Scales to 12 parallel units. Built for harsh outdoor Nigerian installations. CE/IEC certified. Request wholesale quote.",
  },
  "inv-004": {
    slug: "wall-inverter-6kw",
    seoTitle: "6kW Wall-Mount Solar Inverter Nigeria | JoyHand",
    metaDescription: "EM6200-48L wall inverter – 6500W PV, LCD display, CE certified. Space-saving backup power for Nigerian homes and SMEs. Factory B2B pricing.",
  },
  "inv-005": {
    slug: "parallel-inverter-6kw",
    seoTitle: "6kW Parallel Solar Inverter – Scalable Nigeria | JoyHand",
    metaDescription: "M6200-48PL parallel wall inverter – expandable solar backup for growing homes and businesses in Nigeria. Start small, grow big. Factory B2B pricing.",
  },
  "inv-006": {
    slug: "dual-mppt-inverter-11kw",
    seoTitle: "11kW Dual MPPT Solar Inverter Nigeria | JoyHand",
    metaDescription: "EM11000-48L 11kW wall inverter with dual MPPT – 11kW PV input, LCD, CE rated. Ideal for large Nigerian homes and small commercial. Get B2B quote.",
  },
  "inv-007": {
    slug: "parallel-inverter-11kw",
    seoTitle: "11kW Parallel Solar Inverter – Industrial Nigeria | JoyHand",
    metaDescription: "EM11000-48L-P dual MPPT parallel inverter – scale to any commercial load. For factories and warehouses on unstable PHCN supply. Wholesale pricing.",
  },

  // ── ELECTRIC MOBILITY ────────────────────────────────────────────────────────
  "em-004": {
    slug: "electric-scooter-500w",
    seoTitle: "500W Electric Scooter – Delivery Fleet Nigeria | JoyHand",
    metaDescription: "80-100km range, zero petrol bills. 500W lead-acid electric scooter for urban delivery fleets in Nigeria. CE certified, bulk import pricing available.",
  },
  "em-005": {
    slug: "cargo-scooter-650w",
    seoTitle: "650W Cargo Electric Scooter NFC Nigeria | JoyHand",
    metaDescription: "NFC keyless, dual disc brakes, front basket + rear rack. YOUQO-14 650W handles Lagos delivery routes without petrol. B2B fleet pricing.",
  },
  "em-006": {
    slug: "folding-ebike-350w",
    seoTitle: "350W Folding Electric Bike – Nigeria B2B | JoyHand",
    metaDescription: "Fold it, carry it, charge anywhere. 350W folding electric bike – 6-shock suspension, 25-30km range. Beat Lagos traffic without spending on fuel.",
  },
  "em-007": {
    slug: "electric-motorcycle-800w",
    seoTitle: "800W Electric Motorcycle 110km – Nigeria Fleet | JoyHand",
    metaDescription: "War Horse 800W electric motorcycle – NFC dashboard, 100-110km range, hydraulic forks. Wholesale fleet pricing for Nigerian dealers. CE certified.",
  },
  "em-008": {
    slug: "heavy-motorcycle-800w",
    seoTitle: "800W Heavy Electric Motorcycle Nigeria | JoyHand",
    metaDescription: "Big Tank 800W electric motorcycle – 60-80km range, NFC display, tubeless tires. Built for Nigerian roads. Stop the fuel pump. B2B pricing.",
  },
  "em-009": {
    slug: "fat-tyre-ebike-350w",
    seoTitle: "350W Fat Tyre Folding Electric Bike Nigeria | JoyHand",
    metaDescription: "4-inch all-terrain tires, removable lithium battery, 5-speed LCD. Large folding e-bike – commute fuel-free on any terrain. B2B wholesale pricing.",
  },
  "em-010": {
    slug: "pedal-motorcycle-800w",
    seoTitle: "800W Pedal-Assist Electric Motorcycle Nigeria | JoyHand",
    metaDescription: "HongTu 800W – lockable pedals, 60-80km range, disc brakes. Flexible pedal or electric ride for fuel-free urban Nigeria deliveries. B2B pricing.",
  },
  "em-011": {
    slug: "fast-scooter-800w",
    seoTitle: "800W Fast Electric Scooter 60kmh Nigeria | JoyHand",
    metaDescription: "KuGou 50-60km/h, NFC dashboard, dual disc brakes. Eliminates petrol costs for Nigerian delivery fleets. Bulk wholesale pricing available.",
  },
  "em-012": {
    slug: "cargo-scooter-800w",
    seoTitle: "800W Cargo Electric Scooter 200kg Nigeria | JoyHand",
    metaDescription: "V6 Pedal 200kg payload, 45km/h, 800W motor. Nigeria's commercial delivery solution. CE certified, B2B wholesale pricing available.",
  },
  "em-013": {
    slug: "heavy-scooter-60v",
    seoTitle: "60V Heavy Cargo Electric Scooter Nigeria | JoyHand",
    metaDescription: "V6 Pedal 60V30Ah – 200kg load, 15° climbing. Heavy-duty electric scooter for Nigeria's commercial delivery market. Wholesale pricing only.",
  },

  // ── PORTABLE POWER ───────────────────────────────────────────────────────────
  "pp-001": {
    slug: "power-station-1kw",
    seoTitle: "1kW Portable Power Station 2000Wh Nigeria | JoyHand",
    metaDescription: "PPS-1000 – 2000Wh LiFePO4, pure sine wave, UPS function, 4500 cycles. Run fridges and fans during NEPA outages. Emergency backup for Nigeria homes.",
  },
  "pp-002": {
    slug: "solar-generator-1kwh",
    seoTitle: "1kWh Solar Generator UPS – Nigeria Backup | JoyHand",
    metaDescription: "SG-300/500 lightweight solar generator – 10kg, UPS function, 4500+ cycles. Charge with solar, power lights and phones during load shedding. Nigeria backup.",
  },
  "pp-003": {
    slug: "power-station-3kw",
    seoTitle: "3kW Solar Power Station 9kWh Nigeria | JoyHand",
    metaDescription: "ESS-3000 – 9570Wh, 3000W low-frequency inverter handles motor loads. Wheeled all-in-one for Nigerian construction sites and home backup.",
  },
  "pp-004": {
    slug: "portable-power-station-1kw",
    seoTitle: "1kW Portable Power Station LCD Nigeria | JoyHand",
    metaDescription: "LCD display, built-in LED torch, USB-C PD 60W. Compact LiFePO4 power station – pure sine wave for homes and offices during Nigeria NEPA blackouts.",
  },
  "pp-005": {
    slug: "power-station-led-1kw",
    seoTitle: "1kW Power Station with LED – Nigeria Backup | JoyHand",
    metaDescription: "MAV OUT 1100 – dual LED panels, 1000Wh LiFePO4, runs rice cooker and fridge. The blackout survival kit for Nigerian homes. B2B wholesale pricing.",
  },
  "pp-006": {
    slug: "compact-power-station-600w",
    seoTitle: "600W Compact Power Station Nigeria | JoyHand",
    metaDescription: "Lightweight 300-600W, LED light bar, QC3.0 USB, pure sine wave. Affordable LiFePO4 blackout backup for phones, lights and fans in Nigeria.",
  },

  // ── POWER BANKS ─────────────────────────────────────────────────────────────
  "pb-001": {
    slug: "wireless-powerbank-5000mah",
    seoTitle: "5000mAh Wireless Power Bank – Nigeria Wholesale | JoyHand",
    metaDescription: "W130 – 15W MagSafe wireless + 20W USB-C PD. Ultra-slim magnetic power bank. Stay connected through NEPA outages. Wholesale pricing for distributors.",
  },
  "pb-002": {
    slug: "wireless-powerbank-10000mah",
    seoTitle: "10000mAh Wireless Power Bank Nigeria | JoyHand",
    metaDescription: "W131 – 15W wireless + dual USB, 10000mAh. Power your family's devices through Nigeria blackouts. B2B wholesale pricing available.",
  },
  "pb-003": {
    slug: "slim-powerbank-5000mah",
    seoTitle: "5000mAh Slim Wireless Power Bank 10mm | JoyHand",
    metaDescription: "G151-5000 – only 10mm thick, 15W wireless, USB-C PD. Pocket backup for Nigeria power cuts. Wholesale pricing for African tech distributors.",
  },
  "pb-004": {
    slug: "powerbank-5000mah-cables",
    seoTitle: "5000mAh Power Bank Built-in Cables Nigeria | JoyHand",
    metaDescription: "G151 – built-in USB-C and Lightning + 15W wireless. Charge iPhone and Android without extra cables. Wholesale for Nigerian distributors.",
  },
  "pb-005": {
    slug: "slim-powerbank-10000mah",
    seoTitle: "10000mAh Slim Wireless Power Bank Nigeria | JoyHand",
    metaDescription: "W151 – 15W wireless, USB-C PD, QC3.0. 2-3 full charges. Never lose phone signal during a Nigerian power outage. B2B wholesale pricing.",
  },
  "pb-006": {
    slug: "powerbank-10000mah-cables",
    seoTitle: "10000mAh Power Bank Built-in Cables Nigeria | JoyHand",
    metaDescription: "W151 – built-in USB-C + Lightning, 15W wireless. Cable-free travel companion for Nigerian business travelers. B2B wholesale pricing.",
  },
  "pb-007": {
    slug: "powerbank-w152-5000mah",
    seoTitle: "5000mAh W152 Wireless Power Bank Nigeria | JoyHand",
    metaDescription: "W152-5000 – ultra-thin 10mm, 15W wireless, USB-C PD. Daily carry pocket backup for Nigeria power outages. B2B wholesale for distributors.",
  },
  "pb-008": {
    slug: "powerbank-w152-5000mah-cables",
    seoTitle: "5000mAh W152 Power Bank Built-in Cables | JoyHand",
    metaDescription: "W152 – built-in USB-C and Lightning + 15W wireless, 10mm slim. Minimalist travel power bank for Africa. Wholesale pricing for distributors.",
  },
  "pb-009": {
    slug: "powerbank-w152-10000mah",
    seoTitle: "10000mAh W152 Wireless Power Bank Nigeria | JoyHand",
    metaDescription: "W152-10000 – 15W wireless, USB-C PD, QC3.0, slim 18mm. Extended backup for weekend travel. Wholesale for Nigerian tech distributors.",
  },
  "pb-010": {
    slug: "powerbank-w152-10000mah-cables",
    seoTitle: "10000mAh W152 Power Bank Cables Wireless | JoyHand",
    metaDescription: "W152 – built-in USB-C + Lightning, 15W wireless, 10000mAh. Complete all-in-one for Apple and Android. B2B wholesale pricing for Africa.",
  },
  "pb-011": {
    slug: "powerbank-5000mah-aluminum",
    seoTitle: "5000mAh Aluminum Wireless Power Bank Nigeria | JoyHand",
    metaDescription: "A148B – premium aluminium, ultra-thin 7.3mm, 15W wireless, USB-C PD. Luxury everyday carry. Wholesale pricing for Nigerian tech distributors.",
  },
  "pb-012": {
    slug: "ultra-slim-powerbank-5000mah",
    seoTitle: "Ultra-Slim 5000mAh Aluminum Power Bank 6mm | JoyHand",
    metaDescription: "A158A – 6.35mm world-class thinness, 15W wireless, USB-C PD. Premium aluminium finish. Wholesale for Nigerian and African distributors.",
  },
  "pb-013": {
    slug: "powerbank-5000mah-display",
    seoTitle: "5000mAh Power Bank Digital Display Nigeria | JoyHand",
    metaDescription: "A114B – digital % display, premium aluminium, 15W wireless, USB-C PD. Know your exact charge level. Wholesale for Nigerian tech distributors.",
  },
  "pb-014": {
    slug: "powerbank-10000mah-aluminum",
    seoTitle: "10000mAh Aluminum Wireless Power Bank Nigeria | JoyHand",
    metaDescription: "A116B – 10000mAh in slim aluminium body, 15W wireless, USB-C PD. Extended backup for travel. Wholesale for Nigerian and African distributors.",
  },
  "pb-015": {
    slug: "powerbank-5000mah-qc30",
    seoTitle: "5000mAh QC3.0 Power Bank 22W Nigeria | JoyHand",
    metaDescription: "A154 – 22.5W USB-C fast charging, 15W wireless, digital display, 6.7mm slim. Quick top-ups for Nigeria power outages. B2B wholesale pricing.",
  },
  "pb-016": {
    slug: "powerbank-10000mah-digital",
    seoTitle: "10000mAh Digital Wireless Power Bank Nigeria | JoyHand",
    metaDescription: "A155 – digital display, 15W wireless, 22.5W USB-C, slim aluminium. High-capacity daily driver for Africa. B2B wholesale pricing available.",
  },
  "pb-017": {
    slug: "powerbank-5000mah-led",
    seoTitle: "5000mAh LED Aluminum Power Bank Nigeria | JoyHand",
    metaDescription: "A156 – LED indicator, premium aluminium, 15W wireless, USB-C PD. Simple and reliable everyday carry. Wholesale for Nigerian distributors.",
  },
  "pb-018": {
    slug: "powerbank-10000mah-led",
    seoTitle: "10000mAh LED Aluminum Power Bank Nigeria | JoyHand",
    metaDescription: "A157 – LED indicator, 10000mAh aluminium, 15W wireless, USB-C PD. Extended travel power for Africa. B2B wholesale pricing available.",
  },
  "pb-019": {
    slug: "slim-powerbank-5000mah-led",
    seoTitle: "5000mAh Slim LED Aluminum Power Bank Nigeria | JoyHand",
    metaDescription: "A158B – ultra-thin 10.7mm aluminium, LED indicator, 15W wireless. Slim pocket backup for Nigeria power cuts. Wholesale for distributors.",
  },
  "pb-020": {
    slug: "powerbank-10000mah-wireless",
    seoTitle: "10000mAh Wireless Digital Power Bank Nigeria | JoyHand",
    metaDescription: "A103 – digital display, 15W wireless, USB-C PD, painted aluminium. Everyday power for busy professionals. Wholesale for Nigerian distributors.",
  },
  "pb-021": {
    slug: "powerbank-stand-cables",
    seoTitle: "10000mAh Power Bank Stand + Cables Nigeria | JoyHand",
    metaDescription: "TK23 – foldable stand, built-in cables, 3-in-1 wireless, 22.5W USB-C. Charge phone, watch and earbuds at once. B2B wholesale pricing.",
  },
};

// ─── INJECTION ENGINE ─────────────────────────────────────────────────────────
console.log("Reading productsData.js...");
let content = readFileSync(dataPath, "utf8");

let updated = 0, injected = 0, notFound = 0;

for (const [id, meta] of Object.entries(seoMap)) {
  const marker = `"id": "${id}",`;
  const pos    = content.indexOf(marker);

  if (pos === -1) { console.warn(`⚠  Not found: ${id}`); notFound++; continue; }

  const after  = pos + marker.length;
  const window = content.slice(after, after + 1200);

  // ── 1. Update slug ──────────────────────────────────────────────────────────
  if (meta.slug && window.includes('"slug"')) {
    content = content.slice(0, after) +
      content.slice(after).replace(
        /"slug":\s*"[^"]*"/,
        `"slug": "${meta.slug}"`
      );
    console.log(`🔗  Slug updated  "${id}" → ${meta.slug}`);
  }

  // ── 2. Re-find position after slug update ───────────────────────────────────
  const newPos  = content.indexOf(marker);
  const newAfter= newPos + marker.length;
  const win2    = content.slice(newAfter, newAfter + 1200);

  // ── 3. Remove old seoTitle + metaDescription if present ────────────────────
  if (win2.includes('"seoTitle"')) {
    content = content.slice(0, newAfter) +
      content.slice(newAfter).replace(
        /\s*"seoTitle":\s*"[^"]*",\s*\n\s*"metaDescription":\s*"[^"]*",/,
        ""
      );
    updated++;
    console.log(`🔄  Updated meta  "${id}"`);
  } else {
    injected++;
    console.log(`✅  Injected meta "${id}"`);
  }

  // ── 4. Inject new seoTitle + metaDescription ────────────────────────────────
  const finalPos   = content.indexOf(marker);
  const finalAfter = finalPos + marker.length;
  const injection  =
    `\n    "seoTitle": "${meta.seoTitle}",` +
    `\n    "metaDescription": "${meta.metaDescription}",`;

  content = content.slice(0, finalAfter) + injection + content.slice(finalAfter);
}

writeFileSync(dataPath, content, "utf8");

console.log("\n──────────────────────────────────────────────");
console.log(`✅  Done! Updated: ${updated}  Injected: ${injected}  Not found: ${notFound}`);
console.log("──────────────────────────────────────────────");
console.log("\nNEXT STEP: Add slug redirects to next.config.mjs");
console.log("Old slug → New short slug (add as 301 redirects):");

const redirectMap = Object.entries(seoMap)
  .filter(([, m]) => m.slug)
  .map(([id, m]) => `  // ${id}`);
console.log(redirectMap.join("\n"));
