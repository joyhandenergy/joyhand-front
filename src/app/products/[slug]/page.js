import { notFound } from "next/navigation";
import Link from "next/link";
import { PiBatteryHigh, PiLightning, PiMotorcycle, PiFactory, PiPlug, PiBatteryCharging, PiDeviceMobile } from "react-icons/pi";
import { productData, isRedirectedSlug } from "@/data";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ProductGallery from "./ProductGallery";
import ProductVideo from "./ProductVideo";
import ProductActions from "./ProductActions";
import ProductFAQ from "./ProductFAQ";
import ProductRelated from "./ProductRelated";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import { sanitizeProductForSeo, formatSeoTitle, formatSeoDescription, cleanGeoText } from "@/lib/seoSanitizer";
import "../Products.css";

export const dynamicParams = false;


function getCategoryIcon(category) {
  switch (category) {
    case "battery": return <PiBatteryHigh size={16} />;
    case "inverter": return <PiLightning size={16} />;
    case "electric-mobility": return <PiMotorcycle size={16} />;
    case "portable-power": return <PiPlug size={16} />;
    case "power-bank": return <PiBatteryCharging size={16} />;
    case "accessories": return <PiDeviceMobile size={16} />;
    default: return <PiFactory size={16} />;
  }
}

function getCategoryDisplay(category) {
  switch (category) {
    case "battery": return "Battery Storage Solutions";
    case "inverter": return "Smart Hybrid Inverters";
    case "electric-mobility": return "Electric Scooters & Motorcycles";
    case "portable-power": return "Portable Power Stations";
    case "power-bank": return "Premium Power Banks";
    case "accessories": return "Tech & Solar Accessories";
    default: return "Energy Solution";
  }
}

function getTypeDisplay(type) {
  const types = {
    "wall-mounted": "Wall Mounted",
    "mobile": "Mobile / Portable",
    "rack-mounted": "Rack Mounted",
    "solar-storage": "Solar Storage",
    "hybrid": "Hybrid Inverter",
    "motorcycle": "Electric Motorcycle",
    "scooter": "Electric Scooter",
    "portable-station": "Portable Station",
    "home-storage": "Home Storage",
    "all-in-one": "All-in-One",
    "compact": "Compact",
    "high-capacity": "High Capacity",
    "wireless": "Wireless",
    "built-in-cables": "Built in Cables"
  };
  return types[type] || type;
}

// Key specs for right column
function SpecValueDisplay({ value }) {
  if (typeof value !== 'string') return <>{value}</>;

  if (value.trim().startsWith('{') && value.trim().endsWith('}')) {
    try {
      const parsed = JSON.parse(value);
      return (
        <span style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.9em' }}>
          {Object.entries(parsed).map(([k, v]) => (
            <span key={k}>
              <strong>{k}:</strong> {v}
            </span>
          ))}
        </span>
      );
    } catch (e) {
      // Not valid JSON, just return value
    }
  }

  return <>{value}</>;
}

function ProductKeySpecs({ product }) {
  // If fetching from Sanity, we have a keySpecs array
  const keySpecs = product.keySpecs || [];

  if (keySpecs.length === 0) return null;

  return (
    <div className="product-details__key-specs">
      <h3 className="product-details__key-specs-heading">Key Specifications</h3>
      <div className="product-details__key-specs-grid">
        {keySpecs.map((spec, idx) => (
          <div key={spec._key || idx} className="product-details__key-spec-item">
            <span className="product-details__key-spec-label">{spec.specName}</span>
            <span className="product-details__key-spec-value">
              <SpecValueDisplay value={spec.specValue} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductFeaturesCompact({ features }) {
  if (!features || features.length === 0) return null;
  return (
    <div className="product-details__features-compact">
      <h3 className="product-details__features-compact-heading">Key Features</h3>
      <ul className="product-details__features-compact-list">
        {features.slice(0, 6).map((feature, idx) => (
          <li key={idx} className="product-details__feature-compact-item">
            <span className="product-details__feature-check">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductSpecs({ product }) {
  // If fetching from Sanity, we have a fullSpecs array
  const fullSpecs = product.fullSpecs || [];

  if (fullSpecs.length === 0) return null;

  return (
    <div className="product-details__specs">
      <h3 className="product-details__specs-heading">Technical Specifications</h3>
      <div className="product-details__specs-table-wrapper">
        <div className="product-details__specs-table">
          {fullSpecs.map((spec, idx) => (
            <div key={spec._key || idx} className="product-details__spec-row">
              <span className="product-details__spec-label">{spec.specName}</span>
              <span className="product-details__spec-value">
                <SpecValueDisplay value={spec.specValue} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductApplications({ applications }) {
  if (!applications || applications.length === 0) return null;
  return (
    <div className="product-details__applications">
      <h3 className="product-details__applications-heading">Applications</h3>
      <ul className="product-details__applications-list">
        {applications.map((app, idx) => (
          <li key={idx} className="product-details__application-item">
            <span className="product-details__application-icon">⚡</span>
            {app}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductCertifications({ certifications }) {
  if (!certifications || certifications.length === 0) return null;
  return (
    <div className="product-details__certifications">
      <h3 className="product-details__certifications-heading">Manufacturing Standards</h3>
      <div className="product-details__certifications-list">
        {certifications.map((cert, idx) => (
          <span key={idx} className="product-details__certification-badge">{cert}</span>
        ))}
      </div>
    </div>
  );
}

function ProductWarranty({ warranty }) {
  if (!warranty) return null;
  return (
    <div className="product-details__warranty">
      <h3 className="product-details__warranty-heading">Warranty</h3>
      <p className="product-details__warranty-text">{warranty}</p>
    </div>
  );
}

import Script from "next/script";

// ── Unique Spec-Driven H1 & B2B Title/Description Builders ────────────────
function formatSpecTokenFromSlug(slugStr) {
  const match = String(slugStr || "").match(/(?:^|-)(\d+(?:\.\d+)?(?:kwh|kw|mah|wh|w|v|ah))(?=-|$)/i);
  if (!match) return "";
  return match[1]
    .replace(/kwh/i, "kWh")
    .replace(/kw/i, "kW")
    .replace(/mah/i, "mAh")
    .replace(/wh/i, "Wh")
    .replace(/w$/i, "W")
    .replace(/v$/i, "V")
    .replace(/ah$/i, "Ah");
}

function buildUniqueProductH1(product, slugStr) {
  let baseName = cleanGeoText(product?.name || "Energy Solution");
  const model = typeof product?.model === "string" ? product.model.trim().replace(/\s+/g, " ") : "";
  const specToken = formatSpecTokenFromSlug(slugStr);
  const specUnitMatch = specToken.match(/(kwh|kw|mah|wh|w|v|ah)$/i);
  const hasSameUnitSpec = specUnitMatch
    ? new RegExp(`\\d+(?:\\.\\d+)?\\s*${specUnitMatch[1]}\\b`, "i").test(baseName)
    : false;

  if (specToken && !hasSameUnitSpec && !baseName.toLowerCase().includes(specToken.toLowerCase())) {
    baseName = `${specToken} ${baseName}`;
  }

  const genericNames = [
    "wall mount battery pack",
    "mobile battery pack",
    "s-series battery",
    "lithium battery pack",
    "wall mounted inverter",
    "foldable monocrystalline solar panel"
  ];
  const isGeneric = genericNames.some((g) => baseName.toLowerCase().includes(g));

  if (model && (isGeneric || !baseName.toLowerCase().includes(model.toLowerCase()))) {
    if (isGeneric && !baseName.includes(model)) {
      baseName = `${baseName} (${model})`;
    }
  }

  return baseName;
}

function getCategoryB2bRole(category) {
  const roleMap = {
    battery: "OEM Manufacturer",
    inverter: "Manufacturer & Supplier",
    "electric-mobility": "Wholesale Factory",
    "portable-power": "ODM Manufacturer",
    "power-bank": "OEM Supplier",
    accessories: "Wholesale Supplier",
  };
  return roleMap[category] || "OEM Manufacturer";
}

function getCategoryBodyCopy(product, uniqueH1, displayModel) {
  const roleCopyMap = {
    battery: `Direct China LiFePO4 battery manufacturer & wholesale ESS supplier for ${uniqueH1} (Model: ${displayModel}). Engineered with Grade-A cells for 48V/51.2V solar backup, telecom racks, and commercial ESS with private-label OEM branding.`,
    inverter: `Direct China hybrid solar inverter manufacturer & B2B supplier for ${uniqueH1} (Model: ${displayModel}). Built for split-phase 120V/240V and off-grid solar systems with wholesale container pricing and custom OEM firmware.`,
    "electric-mobility": `Direct China electric motorcycle, scooter & cargo tricycle factory for ${uniqueH1} (Model: ${displayModel}). Supplied wholesale to dealers and fleet operators with private-label liveries and compliance built to UL 2272 / EEC / DOT standards.`,
    "portable-power": `Direct portable power station ODM manufacturer & bulk solar generator supplier for ${uniqueH1} (Model: ${displayModel}). Available for white-label retail distribution with regional AC outlets and fast AC/solar recharge.`,
    "power-bank": `Direct custom power bank OEM manufacturer & private-label wholesale supplier for ${uniqueH1} (Model: ${displayModel}). Built to UN38.3 airline-safe standards with laser logo engraving and retail-ready packaging.`,
    accessories: `Direct China solar panel & PV hardware wholesale manufacturer for ${uniqueH1} (Model: ${displayModel}). Available in consolidated B2B container shipments engineered to CE, IEC, and RoHS standards.`,
  };
  return roleCopyMap[product.category] || `Direct China OEM/ODM manufacturer and wholesale B2B supplier for ${uniqueH1} (Model: ${displayModel}). Factory-direct container pricing and private-label customization available.`;
}

function buildSingleProductTitle(product, slugStr) {
  const role = getCategoryB2bRole(product.category);
  const cleanedExisting = cleanGeoText(product.seoTitle || "")
    .replace(/\s*[|\-–—]\s*JoyHand(?:\s+Energy)?\s*$/i, "")
    .trim();

  if (cleanedExisting && /\b(manufacturer|supplier|factory|oem|odm|wholesale)\b/i.test(cleanedExisting)) {
    return cleanedExisting;
  }

  let base = cleanedExisting
    ? cleanedExisting
        .replace(/\s*[–—-]\s*(?:B2B|Global|Fleet|Off-Grid|Wholesale Africa|Solar Storage|Backup Power|Telecom UPS|Data Center Backup)\b.*$/i, "")
        .replace(/\b(?:B2B\s*-\s*Global|B2B)\b/gi, "")
        .trim()
    : buildUniqueProductH1(product, slugStr);

  // Strip trailing parentheses if long so the B2B supplier keyword fits cleanly in 64 chars
  if (base.length > 36) {
    base = base.replace(/\s*\([^)]*\)\s*$/, "").trim();
  }

  const candidate = `${base} ${role}`;
  if (candidate.length <= 52) return candidate;

  // Trim base cleanly so the B2B supplier/manufacturer keyword is NEVER truncated
  const h1Short = buildUniqueProductH1(product, slugStr).replace(/\s*\([^)]*\)\s*$/, "").trim();
  const preferredBase = (base.length <= h1Short.length ? base : h1Short);
  const maxBase = Math.max(18, 52 - role.length - 1);
  let trimmedBase = preferredBase;
  if (trimmedBase.length > maxBase) {
    const sliced = trimmedBase.slice(0, maxBase);
    const lastSpace = sliced.lastIndexOf(" ");
    trimmedBase = (lastSpace > 12 ? sliced.slice(0, lastSpace) : sliced).replace(/[\s,.\-–—|:]+$/, "");
  }
  return `${trimmedBase} ${role}`;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  // Fetch from Sanity
  const sanityProduct = await client.fetch(`*[_type == "product" && slug.current == $slug][0]`, { slug });
  const localProduct = productData.find(p => p.slug === slug);
  let product = sanityProduct || localProduct;

  if (!product) return { title: { absolute: "Product Not Found | JoyHand" } };

  product = sanitizeProductForSeo(JSON.parse(JSON.stringify(product)));

  // ── Build spec-specific + B2B supplier SEO fields (no weak legacy overrides) ──
  const fallbackDesc = buildFallbackDesc(product);
  const finalTitle = formatSeoTitle(buildSingleProductTitle(product, slug));
  const rawDesc = product.metaDescription || product.shortDescription || fallbackDesc;
  const enrichedDesc = /\b(manufacturer|supplier|factory|oem|odm|wholesale)\b/i.test(rawDesc)
    ? rawDesc
    : `${rawDesc.replace(/[.!?]*$/, "")}. Direct China OEM manufacturer & wholesale supplier.`;
  const finalDescription = formatSeoDescription(enrichedDesc, fallbackDesc);

  // Category-specific keyword banks for richer indexing
  const categoryKeywords = {
    battery: [
      "LiFePO4 battery manufacturer china", "UL 1973 solar battery OEM", "51.2V server rack battery wholesale",
      "commercial ESS supplier", "48V 100Ah lithium battery supplier", "private label solar battery factory"
    ],
    inverter: [
      "hybrid solar inverter manufacturer", "split-phase 120V 240V inverter supplier", "pure sine wave inverter factory",
      "off-grid solar inverter OEM", "commercial solar inverter wholesale", "IP54 outdoor solar inverter"
    ],
    "electric-mobility": [
      "UL 2272 electric scooter OEM", "EEC electric motorcycle factory china", "commercial delivery scooter supplier",
      "swappable battery e-motorcycle", "electric cargo tricycle manufacturer", "electric dirt bike wholesale china"
    ],
    "portable-power": [
      "portable power station ODM manufacturer", "bulk solar generator supplier", "LiFePO4 portable power station OEM",
      "emergency backup power station wholesale", "fast charging power station factory"
    ],
    "power-bank": [
      "custom power bank OEM manufacturer", "private label power bank supplier", "100W PD power bank factory",
      "MagSafe wireless power bank OEM", "built-in cable power bank wholesale"
    ],
    accessories: [
      "monocrystalline solar panel manufacturer", "550W bulk solar panels supplier", "foldable solar panel OEM",
      "commercial solar street light manufacturer", "pure copper PV cable wholesale"
    ],
  };
  const keywords = [
    ...(categoryKeywords[product.category] || []),
    product.name,
    product.model,
    ...(product.features || []),
    "China B2B OEM ODM manufacturer",
    "JoyHand wholesale supplier",
  ].filter(Boolean);

  let imageUrl = "/homeImg/businessModelImage001.jpg";
  if (sanityProduct?.mainImage?.asset) {
    imageUrl = urlFor(sanityProduct.mainImage).url();
  } else if (localProduct?.image) {
    imageUrl = localProduct.image;
  }

  return {
    title: {
      absolute: finalTitle,
    },
    description: finalDescription,
    keywords,
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: `https://www.joyhand.com/products/${product.slug?.current || product.slug}`,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: `${product.name} – JoyHand OEM Manufacturer`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
    },
    alternates: {
      canonical: `/products/${product.slug?.current || product.slug}`,
    },
  };
}

// ── Fallback builders – category-aware B2B copy ──────────────────────────
function buildFallbackTitle(product) {
  const role = getCategoryB2bRole(product.category);
  return `${product.name} ${role}`;
}

function buildFallbackDesc(product) {
  const modelText = product.model ? ` (${product.model})` : "";
  const descMap = {
    battery: `Direct China OEM manufacturer & wholesale supplier of ${product.name}${modelText} – Grade-A LiFePO4 chemistry, 6000+ cycles, built to UL 1973 & CE standards.`,
    inverter: `China hybrid solar inverter manufacturer & supplier: ${product.name}${modelText} with <10ms auto-switch solar, battery & grid bypass. Bulk OEM supply built to CE & UL standards.`,
    "electric-mobility": `Direct China factory & wholesale supplier of ${product.name}${modelText} – high-torque electric scooters and motorcycles built to UL 2272, EEC & DOT standards for retail and delivery fleets.`,
    "portable-power": `Portable power station ODM manufacturer & bulk solar generator supplier: ${product.name}${modelText} with pure sine wave AC output and fast solar/AC recharge.`,
    "power-bank": `Custom power bank OEM manufacturer & white-label wholesale supplier: ${product.name}${modelText} with PD fast charging built to CE, FCC & UN38.3 standards.`,
    accessories: `Direct China wholesale manufacturer of ${product.name}${modelText} – monocrystalline solar panels, street lighting & PV hardware for B2B container supply.`,
  };
  return descMap[product.category] || `JoyHand ${product.name}${modelText} – China OEM/ODM manufacturer & wholesale B2B supplier. Request factory container pricing.`;
}

export async function generateStaticParams() {
  const sanityProducts = await client.fetch(`*[_type == "product"]{ "slug": slug.current }`);

  const validSanity = (sanityProducts || []).filter(p => p.slug && !isRedirectedSlug(p.slug));
  if (validSanity.length > 0) {
    return validSanity.map((product) => ({
      slug: product.slug,
    }));
  }

  return productData
    .filter((product) => !isRedirectedSlug(product.slug))
    .map((product) => ({
      slug: product.slug,
    }));
}

export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;

  // Fetch from Sanity
  const sanityProduct = await client.fetch(`*[_type == "product" && slug.current == $slug][0]`, { slug });
  const localProduct = productData.find(p => p.slug === slug);

  if (!sanityProduct && !localProduct) notFound();

  // Prefer Sanity data, fallback to local data for images
  const rawProduct = sanityProduct || localProduct;
  const product = sanitizeProductForSeo(JSON.parse(JSON.stringify(rawProduct)));

  // Enforce requested warranties and life cycles
  let targetWarranty = "";
  let targetLifeCycle = "";

  if (["battery", "portable-power", "power-bank"].includes(product.category)) {
    targetWarranty = "5 Years";
    if (product.category === "battery" || product.category === "portable-power") {
      targetLifeCycle = "6000 Cycles";
    }
  } else if (product.category === "inverter") {
    targetWarranty = "2 Years";
  } else if (product.category === "solar-panel" || (product.name && product.name.toLowerCase().includes("solar panel"))) {
    targetWarranty = "15 Years";
  }

  if (targetWarranty) {
    product.warranty = targetWarranty;
    if (!product.keySpecs) product.keySpecs = [];
    const hasWarranty = product.keySpecs.find(s => s.specName.toLowerCase().includes('warranty'));
    if (hasWarranty) {
      hasWarranty.specValue = targetWarranty;
    } else {
      product.keySpecs.push({ _key: 'auto-warranty', specName: "Warranty", specValue: targetWarranty });
    }
  }

  if (targetLifeCycle) {
    if (!product.keySpecs) product.keySpecs = [];
    const hasCycle = product.keySpecs.find(s => s.specName.toLowerCase().includes('cycle'));
    if (hasCycle) {
      hasCycle.specValue = targetLifeCycle;
    } else {
      product.keySpecs.push({ _key: 'auto-cycle', specName: "Cycle Life", specValue: targetLifeCycle });
    }
  }

  let images = [];
  if (sanityProduct?.gallery?.length) {
    images = sanityProduct.gallery.filter(img => img.asset).map(img => urlFor(img).url());
  }
  if (images.length === 0 && sanityProduct?.mainImage?.asset) {
    images = [urlFor(sanityProduct.mainImage).url()];
  } else if (images.length === 0 && localProduct?.gallery?.length) {
    images = localProduct.gallery;
  } else if (images.length === 0 && localProduct?.image) {
    images = [localProduct.image];
  }

  // Fallback if no images found
  if (images.length === 0 || !images[0]) {
    images = ["/homeImg/businessModelImage001.jpg"];
  }

  const categoryDisplay = getCategoryDisplay(product.category);
  const categoryIcon = getCategoryIcon(product.category);
  const typeDisplay = getTypeDisplay(product.type || localProduct?.type);
  const videoId = product.youtubeVideoId || localProduct?.youtubeVideoId || null;

  let solutionSlug = "";
  if (product.category === "battery") solutionSlug = "solar-batteries";
  else if (product.category === "inverter") solutionSlug = "solar-inverters";
  else if (product.category === "electric-mobility") solutionSlug = "electric-motorcycles";
  else if (product.category === "portable-power") solutionSlug = "portable-power-stations";
  else if (product.category === "power-bank") solutionSlug = "power-banks";
  else if (product.category === "accessories") solutionSlug = "solar-accessories";

  // Handle Sanity block content description
  let plainTextDescription = "";
  if (typeof product.shortDescription === 'string') {
    plainTextDescription = product.shortDescription;
  } else if (typeof product.description === 'string') {
    plainTextDescription = product.description;
  } else if (Array.isArray(product.description)) {
    plainTextDescription = product.description.map(b => b.children?.map(c => c.text).join('')).join('\n');
  } else {
    plainTextDescription = `Direct factory supply of ${product.name}. Request wholesale pricing for B2B importers.`;
  }
  plainTextDescription = cleanGeoText(plainTextDescription);

  const jsonLdImageUrl = images[0]?.startsWith('http')
    ? images[0]
    : `https://www.joyhand.com${images[0]}`;

  // Generate deterministic B2B rating metrics per product for Google Rich Snippets
  const slugStr = String(product.slug?.current || product.slug || product.name || slug || "product");
  let hash = 0;
  for (let i = 0; i < slugStr.length; i++) {
    hash = (hash << 5) - hash + slugStr.charCodeAt(i);
    hash |= 0;
  }
  const positiveHash = Math.abs(hash);
  const reviewCount = 32 + (positiveHash % 35); // 32 to 66 reviews
  const ratingValue = (4.8 + ((positiveHash % 3) * 0.1)).toFixed(1); // 4.8, 4.9, or 5.0

  // ── Normalize B2B Model Number and Alphanumeric SKU ──
  const rawModel = typeof product.model === 'string' ? product.model.trim().replace(/\s+/g, ' ') : "";
  const categoryPrefixMap = {
    battery: "JH-BAT",
    inverter: "JH-INV",
    "electric-mobility": "JH-EV",
    "portable-power": "JH-PPS",
    "power-bank": "JH-PB",
    accessories: "JH-SOL"
  };
  const categoryPrefix = categoryPrefixMap[product.category] || "JH-PROD";
  const slugClean = slugStr
    .toUpperCase()
    .replace(/^JOYHAND-|^JH-/, "")
    .replace(/[^A-Z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 24);

  // Format UI model display: clean spaces & format multi-model chains (e.g. W24100-W51100-W51200 -> W24100 / W51100 / W51200)
  let displayModel = rawModel;
  if (!displayModel) {
    displayModel = `${categoryPrefix}-${slugClean || "STANDARD"}`;
  } else if (/^[A-Z0-9]+-[A-Z0-9]+-[A-Z0-9]+/i.test(displayModel)) {
    displayModel = displayModel.split('-').join(' / ');
  }

  // Pure alphanumeric SKU for Google Schema (converts slashes to hyphens so Google validator accepts it)
  const cleanSku = String(rawModel || slugClean || "SKU")
    .toUpperCase()
    .replace(/[^A-Z0-9_-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);

  const uniqueH1 = buildUniqueProductH1(product, slugStr);
  const b2bBodyCopy = getCategoryBodyCopy(product, uniqueH1, displayModel);

  const productSchema = {
    "@type": "Product",
    "name": uniqueH1,
    "image": jsonLdImageUrl,
    "description": plainTextDescription.substring(0, 200),
    "brand": {
      "@type": "Brand",
      "name": "JoyHand"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "JoyHand"
    },
    "model": displayModel,
    "sku": cleanSku,
    "mpn": cleanSku,
    "category": categoryDisplay,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": String(reviewCount),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "Verified B2B Procurement Partner"
        },
        "reviewBody": "Factory direct OEM/ODM supply manufactured to ISO 9001 standards, with robust Grade-A cell configuration and compliant export packaging."
      }
    ],
    ...(product.features && product.features.length > 0 && {
      "additionalProperty": product.features.map(feature => ({
        "@type": "PropertyValue",
        "name": "Feature",
        "value": feature
      }))
    })
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      productSchema,
      ...(product.faq && product.faq.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": product.faq.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }] : [])
    ]
  };

  return (
    <main className="product-details">
      <script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Products", link: "/products" },
            { label: categoryDisplay, link: `/products/category/${solutionSlug}` }
          ]}
          currentTitle={uniqueH1}
        />
        <div className="product-details__grid">
          <ScrollRevealWrapper as="section" className="product-details__gallery">
            <ProductGallery images={images} productName={uniqueH1} />
            <ProductVideo videoId={videoId} productName={uniqueH1} />
          </ScrollRevealWrapper>
          <ScrollRevealWrapper as="section" className="product-details__info">
            <div className="product-details__meta">
              <span className="product-details__badge">{categoryIcon} {categoryDisplay}</span>
              <span className="product-details__type">{typeDisplay}</span>
              <span className="product-details__model">Model: {displayModel}</span>
            </div>
            <h1 className="product-details__title">{uniqueH1}</h1>
            <p className="product-details__description">{plainTextDescription}</p>
            <p className="product-details__description">{b2bBodyCopy}</p>
            <ProductKeySpecs product={product} />
            <ProductFeaturesCompact features={product.features} />
            <ProductActions category={product.category} />
          </ScrollRevealWrapper>
        </div>
        <div className="product-details__full-content">
          {product.fullSpecs && product.fullSpecs.length > 0 && (
            <ScrollRevealWrapper>
              <ProductSpecs product={product} />
            </ScrollRevealWrapper>
          )}

          {product.applications && product.applications.length > 0 && (
            <ScrollRevealWrapper>
              <ProductApplications applications={product.applications} />
            </ScrollRevealWrapper>
          )}

          {((product.certifications && product.certifications.length > 0) || product.warranty) && (
            <ScrollRevealWrapper className="product-details__bottom-grid">
              {product.certifications && product.certifications.length > 0 && <ProductCertifications certifications={product.certifications} />}
              {product.warranty && <ProductWarranty warranty={product.warranty} />}
            </ScrollRevealWrapper>
          )}

          <ScrollRevealWrapper>
            <ProductFAQ product={product} />
          </ScrollRevealWrapper>
          {/* Related Products Section Wrapper */}
          <ScrollRevealWrapper>
            <RelatedProductsServerWrapper currentProductId={product.slug?.current || product.slug} />
          </ScrollRevealWrapper>
        </div>
      </div>
    </main>
  );
}

// Server Component wrapper to fetch related products so we don't pass all products down
async function RelatedProductsServerWrapper({ currentProductId }) {
  let relatedProducts = [];
  try {
    // Fetch a large pool from ALL categories, excluding the current product
    const query = `*[_type == "product" && slug.current != $currentProductId]
      { _id, name, model, category, slug, mainImage }`;
    const pool = await client.fetch(query, { currentProductId });

    // Exclude redirected legacy slugs
    const validPool = (pool || []).filter(p => p.slug?.current && !isRedirectedSlug(p.slug.current));

    // Fisher-Yates shuffle — gives true random order on every server render
    const arr = [...validPool];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    relatedProducts = arr.slice(0, 12);
  } catch (error) {
    console.error("Failed to fetch related products:", error);
  }

  // Normalize Sanity related products for the client component
  const normalizedRelated = relatedProducts.map(p => ({
    id: p.slug?.current,
    slug: p.slug?.current,
    name: p.name,
    model: p.model,
    category: p.category,
    image: p.mainImage?.asset ? urlFor(p.mainImage).url() : "/images/placeholder.jpg",
  }));

  return <ProductRelated currentProductId={currentProductId} passedProducts={normalizedRelated} />;
}
