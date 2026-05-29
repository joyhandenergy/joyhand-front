import { getCliClient } from 'sanity/cli';

const client = getCliClient();

const fixes = [
  { id: 'imported-product-10', desc: "12kW hybrid inverter – 94% efficient, 15kW PV input, overload bypass. Keep businesses running during NEPA outages. Factory-direct for Global importers and distributors." },
  { id: 'imported-product-11', desc: "Dust and rain proof IP54. Scales to 12 parallel units. Built for harsh outdoor African installations. CE/IEC certified. Request wholesale quote." },
  { id: 'imported-product-12', desc: "EM6200-48L wall inverter – 6500W PV, LCD display, CE certified. Space-saving backup power for South Asian homes and SMEs. Factory B2B pricing." },
  { id: 'imported-product-23', desc: "KuGou 50-60km/h, NFC dashboard, dual disc brakes. Eliminates petrol costs for Global delivery fleets. Bulk wholesale pricing available." },
  { id: 'imported-product-29', desc: "HE01 replaces inverter, MPPT and battery in one cabinet. 6000 cycles, smart LCD, 11-16kWh LiFePO4. Ideal for Pakistani homes. B2B pricing available." },
  { id: 'imported-product-37', desc: "G151 – built-in USB-C and Lightning + 15W wireless. Charge iPhone and Android without extra cables. Wholesale for African importers and distributors." },
  { id: 'imported-product-38', desc: "W151 – 15W wireless, USB-C PD, QC3.0. 2-3 full charges. Never lose phone signal during a South Asian power outage. B2B wholesale pricing." },
  { id: 'imported-product-42', desc: "W152-10000 – 15W wireless, USB-C PD, QC3.0, slim 18mm. Extended backup for weekend travel. Wholesale for Pakistani tech distributors." },
  { id: 'imported-product-44', desc: "A148B – premium aluminium, ultra-thin 7.3mm, 15W wireless, USB-C PD. Luxury everyday carry. Wholesale pricing for Ghanaian tech distributors." },
  { id: 'imported-product-50', desc: "A156 – LED indicator, premium aluminium, 15W wireless, USB-C PD. Simple and reliable everyday carry. Wholesale for African importers and distributors." },
];

async function run() {
  for (const fix of fixes) {
    try {
      await client.patch(fix.id)
        .set({ metaDescription: fix.desc })
        .commit();
      console.log(`Successfully patched: ${fix.id}`);
    } catch (e) {
      console.error(`Failed to patch ${fix.id}:`, e.message);
    }
  }
}

run();
