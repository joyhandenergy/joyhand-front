const fs = require('fs');
const crypto = require('crypto');

function generateRandomKey() {
  return crypto.randomBytes(8).toString('hex');
}

function processData() {
  const fileData = fs.readFileSync('new_products.json', 'utf8');
  const products = JSON.parse(fileData);

  // Add the partially truncated 1080P extender
  products.push({
    "productName": "Wireless HDMI Extender 1080P",
    "modelSKU": "HB908 / HB937 / HB733 / HB734",
    "slug": { "_type": "slug", "current": "wireless-hdmi-extender-1080p" },
    "category": "E-Mobility",
    "shortDescription": "1080P wireless HDMI extender – 50m, multi‑RX/TX support. Reliable for Ghana, Tanzania.",
    "fullProductDescription": "1080P wireless HDMI extender – 50m, multi‑RX/TX support. Reliable for Ghana, Tanzania.",
    "keySpecifications": [
      { "label": "Resolution", "value": "1920×1080P@60Hz" },
      { "label": "Distance", "value": "50m" },
      { "label": "Plug & Play", "value": "Yes" }
    ],
    "fullSpecificationsTable": [
      { "label": "Resolution", "value": "1080P@60Hz" },
      { "label": "Distance", "value": "Up to 50 meters" },
      { "label": "Connectivity", "value": "HDMI wireless" }
    ],
    "keyFeatures": [
      "Wireless 1080P transmission",
      "Up to 50m range",
      "Plug and play"
    ],
    "seoTitle": "Wireless HDMI Extender 1080P | JoyHand",
    "metaDescription": "1080P wireless HDMI extender. Reliable for Ghana, Tanzania.",
    "faqs": []
  });

  // Add the 3 new products
  const newProducts = [
    {
      "productName": "Wireless HDMI Screen Extender + 4K USB Hub",
      "modelSKU": "HB799",
      "slug": { "_type": "slug", "current": "wireless-hdmi-screen-extender-plus-4k-usb-hub" },
      "category": "E-Mobility",
      "shortDescription": "1080P wireless HDMI extender + 4K hub – USB, PD100W. Two‑in‑one for Pakistan, Bangladesh.",
      "fullProductDescription": "1080P wireless HDMI extender + 4K hub – USB, PD100W. Two‑in‑one for Pakistan, Bangladesh.",
      "keySpecifications": [
        { "label": "Wireless", "value": "1080P@60Hz, 100ms latency" },
        { "label": "HDMI", "value": "4K@60Hz (hub)" },
        { "label": "USB-C", "value": "2× 5Gbps" },
        { "label": "USB-A", "value": "1× 5Gbps" },
        { "label": "PD Charging", "value": "100W" },
        { "label": "Switch", "value": "Display mode / screen off / remate" }
      ],
      "fullSpecificationsTable": [
        { "label": "Wireless Video", "value": "1080P@60Hz" },
        { "label": "Latency", "value": "100ms" },
        { "label": "Hub Ports", "value": "2×USB-C 3.0, 1×USB-A 3.0, HDMI 4K, PD" },
        { "label": "HDMI Hub", "value": "4K@60Hz" },
        { "label": "Control", "value": "Single click (switch mode), double click (screen off), long press (remate)" },
        { "label": "Power", "value": "PD 100W (85W to host)" }
      ],
      "keyFeatures": [
        "Wireless extend + USB hub – two devices in one",
        "1080P 60Hz wireless – no cable mess",
        "4K HDMI hub – connect wired displays too",
        "PD 100W – charge your laptop"
      ],
      "seoTitle": "Wireless HDMI Extender + 4K Hub Pakistan | JoyHand",
      "metaDescription": "1080P wireless extender + 4K hub – USB, PD100W. Two-in-one for Pakistan, Bangladesh, India.",
      "faqs": []
    },
    {
      "productName": "13‑in‑1 Dock Dual 4K with Touch Display",
      "modelSKU": "HB952",
      "slug": { "_type": "slug", "current": "13-in-1-dock-dual-4k-with-touch-display" },
      "category": "E-Mobility",
      "shortDescription": "13‑in‑1 dock – dual 4K HDMI, 10G ports, SD/TF, audio, PD100W, touch status display. For Ghana, Tanzania.",
      "fullProductDescription": "13‑in‑1 dock – dual 4K HDMI, 10G ports, SD/TF, audio, PD100W, touch status display. For Ghana, Tanzania.",
      "keySpecifications": [
        { "label": "HDMI", "value": "2× 4K@60Hz" },
        { "label": "USB-C", "value": "2× 10Gbps" },
        { "label": "USB-A", "value": "1×10G + 3×5G" },
        { "label": "Ethernet", "value": "1Gbps" },
        { "label": "Card Reader", "value": "SD/TF 3.0" },
        { "label": "PD Charging", "value": "100W" }
      ],
      "fullSpecificationsTable": [
        { "label": "Ports", "value": "2×HDMI 2.0, RJ45, 2×USB-C 10G, 1×USB-A 10G, 3×USB-A 5G, SD/TF, Audio, PD" },
        { "label": "Display", "value": "Dual 4K@60Hz" },
        { "label": "Ethernet", "value": "Gigabit" },
        { "label": "Touch Screen", "value": "Shows real‑time port status" },
        { "label": "Charging", "value": "PD 100W (85W to host)" }
      ],
      "keyFeatures": [
        "Built‑in touch display – see port activity at a glance",
        "Dual 4K 60Hz – expand your workspace",
        "10Gbps ports – ultra‑fast data",
        "100W PD – power your laptop"
      ],
      "seoTitle": "13-in-1 Dock Dual 4K Touch Display Ghana | JoyHand",
      "metaDescription": "13-in-1 dock – dual 4K, 10G ports, touch status, PD100W. Smart docking for Ghana, Tanzania.",
      "faqs": []
    },
    {
      "productName": "Multifunction Remote / Presenter",
      "modelSKU": "HB720",
      "slug": { "_type": "slug", "current": "multifunction-remote-presenter" },
      "category": "E-Mobility",
      "shortDescription": "Wireless presenter – lock screen/home, mute/play/volume. Control presentations in South Africa, Uganda.",
      "fullProductDescription": "Wireless presenter – lock screen/home, mute/play/volume. Control presentations in South Africa, Uganda.",
      "keySpecifications": [
        { "label": "Model 1", "value": "Windows / Mac lock screen / return home" },
        { "label": "Model 2", "value": "Mute, Pause/Play, Volume +/–" },
        { "label": "Interface", "value": "USB / Bluetooth" },
        { "label": "Plug & Play", "value": "Yes" },
        { "label": "Battery", "value": "Built‑in rechargeable" },
        { "label": "Range", "value": "10m" }
      ],
      "fullSpecificationsTable": [
        { "label": "Function Modes", "value": "Lock/Home (Model 1) / Media Control (Model 2)" },
        { "label": "Connection", "value": "2.4GHz wireless / Bluetooth" },
        { "label": "Range", "value": "Up to 10m" },
        { "label": "Battery", "value": "Li‑ion (Type‑C charge)" },
        { "label": "Compatibility", "value": "Windows / Mac OS" }
      ],
      "keyFeatures": [
        "Two models – choose your control style",
        "Wireless – present from across the room",
        "Rechargeable – no disposable batteries",
        "Compact – fits in your pocket"
      ],
      "seoTitle": "Wireless Presenter Remote South Africa | JoyHand",
      "metaDescription": "Wireless presenter – lock/home or media control. Rechargeable, 10m range. Present anywhere.",
      "faqs": []
    }
  ];

  products.push(...newProducts);

  const formattedProducts = products.map(item => {
    return {
      _type: 'product',
      name: item.productName,
      model: item.modelSKU,
      slug: item.slug,
      category: 'accessories', // The user requested Accessories & Tech
      shortDescription: item.shortDescription,
      description: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              marks: [],
              text: item.fullProductDescription || item.shortDescription
            }
          ]
        }
      ],
      keySpecs: (item.keySpecifications || []).map(spec => ({
        _key: generateRandomKey(),
        specName: spec.label,
        specValue: spec.value
      })),
      fullSpecs: (item.fullSpecificationsTable || []).map(spec => ({
        _key: generateRandomKey(),
        specName: spec.label,
        specValue: spec.value
      })),
      features: item.keyFeatures || [],
      seoTitle: item.seoTitle || item.productName,
      metaDescription: item.metaDescription || item.shortDescription,
      faq: (item.faqs || []).map(f => ({
        _key: generateRandomKey(),
        question: f.question,
        answer: f.answer
      }))
    };
  });

  const ndjson = formattedProducts.map(p => JSON.stringify(p)).join('\n');
  fs.writeFileSync('import.ndjson', ndjson);
  console.log(`Generated import.ndjson with ${formattedProducts.length} products`);
}

processData();
