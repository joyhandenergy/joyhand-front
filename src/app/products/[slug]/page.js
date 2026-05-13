

import { notFound } from "next/navigation";
import Link from "next/link";
import {
  PiArrowLeft,
  PiBatteryHigh,
  PiLightning,
  PiMotorcycle,
  PiFactory,
  PiPlug,
  PiBatteryCharging,
  PiHouse,
  PiCaretRight,
  PiDeviceMobile,      // added for phone screen protectors
} from "react-icons/pi";
import { productData } from "@/data";
import ProductGallery from "./ProductGallery";
import ProductVideo from "./ProductVideo";
import ProductActions from "./ProductActions";
import ProductFAQ from "./ProductFAQ";
import ProductRelated from "./ProductRelated";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import RichTextRenderer from "@/components/richText/RichTextRenderer";
import "@/components/richText/RichText.css";
import "../Products.css";

function getCategoryIcon(category) {
  switch (category) {
    case "battery": return <PiBatteryHigh size={16} />;
    case "inverter": return <PiLightning size={16} />;
    case "electric-mobility": return <PiMotorcycle size={16} />;
    case "portable-power": return <PiPlug size={16} />;
    case "power-bank": return <PiBatteryCharging size={16} />;
    case "phone-screen-protector": return <PiDeviceMobile size={16} />;
    default: return <PiFactory size={16} />;
  }
}

function getCategoryDisplay(category) {
  switch (category) {
    case "battery": return "Battery Storage Solutions";
    case "inverter": return "Smart Hybrid Inverters";
    case "electric-mobility": return "E-Mobility Solutions";
    case "portable-power": return "Portable Power Stations";
    case "power-bank": return "Premium Power Banks";
    case "phone-screen-protector": return "Screen Protection Solutions";
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
    "built-in-cables": "Built‑in Cables"
  };
  return types[type] || type;
}

// Key specs for right column
function ProductKeySpecs({ product }) {
  const { specifications, category } = product;
  if (!specifications) return null;

  let keySpecs = [];
  if (category === "battery") {
    keySpecs = [
      { label: "Nominal Voltage", value: specifications.nominalVoltage },
      { label: "Capacity", value: specifications.capacity || specifications.energy },
      { label: "Energy", value: specifications.energy },
      { label: "Cycle Life", value: specifications.cycleLife },
    ];
  } else if (category === "inverter") {
    keySpecs = [
      { label: "Power", value: specifications.power },
      { label: "DC Input", value: specifications.dcInput },
      { label: "AC Output", value: specifications.acOutput },
      { label: "Efficiency", value: specifications.efficiency },
    ];
  } else if (category === "electric-mobility") {
    keySpecs = [
      { label: "Top Speed", value: specifications.maxSpeed || specifications.topSpeed },
      { label: "Range", value: specifications.maxRange || specifications.mileage },
      { label: "Motor", value: specifications.motor },
      { label: "Battery", value: specifications.battery },
    ];
  } else if (category === "portable-power") {
    keySpecs = [
      { label: "Rated Power", value: specifications.ratedPower },
      { label: "Battery Capacity", value: specifications.batteryCapacity },
      { label: "Cycle Life", value: specifications.cycleLife },
      { label: "UPS Support", value: specifications.upsFunction === "Supported" ? "Yes" : specifications.upsFunction || "Yes" },
    ];
  } else if (category === "power-bank") {
    keySpecs = [
      { label: "Capacity", value: specifications.capacity || specifications.batteryCapacity },
      { label: "Output", value: specifications.totalOutput || specifications.usbCOutput },
      { label: "Wireless", value: specifications.wirelessOutput ? `${specifications.wirelessOutput} MagSafe` : "No" },
      { label: "Weight", value: specifications.weight },
    ].filter(spec => spec.value && spec.value !== "No");
  } else if (category === "phone-screen-protector") {
    keySpecs = [
      { label: "Material", value: specifications.material || "Tempered Glass" },
      { label: "Hardness", value: specifications.hardness || "9H" },
      { label: "Thickness", value: specifications.thickness || "0.33mm" },
      { label: "Finish", value: specifications.finish || "Clear / Matte / Anti‑Spy" },
    ].filter(spec => spec.value);
  }

  if (keySpecs.length === 0) return null;

  return (
    <div className="product-details__key-specs">
      <h3 className="product-details__key-specs-heading">Key Specifications</h3>
      <div className="product-details__key-specs-grid">
        {keySpecs.map((spec, idx) => (
          <div key={idx} className="product-details__key-spec-item">
            <span className="product-details__key-spec-label">{spec.label}</span>
            <span className="product-details__key-spec-value">{spec.value}</span>
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
  const { specifications, category, type } = product;
  if (!specifications) return null;

  const formatValue = (value) => {
    if (!value) return null;
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      if (value['40HQ'] || value['20GP']) {
        return `40'HQ: ${value['40HQ']} | 20'GP: ${value['20GP']}`;
      }
      return JSON.stringify(value);
    }
    return String(value);
  };

  let specsToShow = [];
  if (category === "battery") {
    specsToShow = [
      { label: "Model", value: product.model },
      { label: "Type", value: getTypeDisplay(type) },
      { label: "Nominal Voltage", value: specifications.nominalVoltage },
      { label: "Capacity", value: specifications.capacity || specifications.energy },
      { label: "Energy", value: specifications.energy },
      { label: "Cell Type", value: specifications.cellType },
      { label: "BMS", value: specifications.bms },
      { label: "Dimensions", value: specifications.dimensions },
      { label: "Weight", value: specifications.weight },
      { label: "Gross Weight", value: specifications.grossWeight },
      { label: "Charge Current", value: specifications.chargeCurrent },
      { label: "Discharge Current", value: specifications.dischargeCurrent },
      { label: "Working Voltage", value: specifications.workingVoltage },
      { label: "Cycle Life", value: specifications.cycleLife },
      { label: "IP Rating", value: specifications.ipRating },
      { label: "Cooling", value: specifications.cooling },
    ];
  } else if (category === "inverter") {
    specsToShow = [
      { label: "Model", value: product.model },
      { label: "Type", value: getTypeDisplay(type) },
      { label: "Power", value: specifications.power },
      { label: "DC Input", value: specifications.dcInput },
      { label: "AC Input", value: specifications.acInput },
      { label: "AC Output", value: specifications.acOutput },
      { label: "AC Charge Current", value: specifications.acChargeCurrent },
      { label: "Max Charge Current", value: specifications.maxChargeCurrent },
      { label: "MPPT Voltage Range", value: specifications.mpptVoltage },
      { label: "Max PV Power", value: specifications.maxPvPower },
      { label: "Topology", value: specifications.topology },
      { label: "Efficiency", value: specifications.efficiency },
      { label: "Dimensions", value: specifications.dimensions },
      { label: "Weight", value: specifications.weight },
      { label: "IP Rating", value: specifications.ipRating },
      { label: "Parallel Support", value: specifications.parallelSupport },
    ];
  } else if (category === "electric-mobility") {
    specsToShow = [
      { label: "Model", value: product.model },
      { label: "Type", value: getTypeDisplay(type) },
      { label: "Motor", value: specifications.motor },
      { label: "Battery", value: specifications.battery },
      { label: "Top Speed", value: specifications.maxSpeed || specifications.topSpeed },
      { label: "Range", value: specifications.mileage || specifications.maxRange },
      { label: "Charging Time", value: specifications.chargingTime || specifications.rechargeTime },
      { label: "Brake System", value: specifications.brake },
      { label: "Tires", value: specifications.tyre || specifications.tyres },
      { label: "Max Loading", value: specifications.maxLoading },
      { label: "Weight", value: specifications.weight },
      { label: "Dimensions", value: specifications.dimension },
      { label: "Container Loading", value: specifications.containerLoading },
    ];
  } else if (category === "portable-power") {
    specsToShow = [
      { label: "Model", value: product.model },
      { label: "Type", value: getTypeDisplay(type) },
      { label: "Rated Power", value: specifications.ratedPower },
      { label: "Peak Power", value: specifications.peakPower },
      { label: "Battery Capacity", value: specifications.batteryCapacity },
      { label: "Battery Chemistry", value: specifications.batteryChemistry },
      { label: "Output Waveform", value: specifications.outputWaveform },
      { label: "AC Output", value: specifications.acOutput },
      { label: "DC Output", value: specifications.dcOutput },
      { label: "USB Output", value: specifications.usbOutput },
      { label: "Solar Input", value: specifications.solarInput },
      { label: "AC Input", value: specifications.acInput },
      { label: "Cycle Life", value: specifications.cycleLife },
      { label: "UPS Function", value: specifications.upsFunction === "Supported" ? "Yes" : specifications.upsFunction },
      { label: "Dimensions", value: specifications.productDimensions },
      { label: "Weight", value: specifications.productWeight },
    ];
  } else if (category === "power-bank") {
    specsToShow = [
      { label: "Model", value: product.model },
      { label: "Type", value: getTypeDisplay(type) },
      { label: "Capacity", value: specifications.capacity || specifications.batteryCapacity },
      { label: "Cell Type", value: specifications.cellType },
      { label: "Dimensions", value: specifications.dimensions },
      { label: "Material", value: specifications.material },
      { label: "Weight", value: specifications.weight },
      { label: "Indicator", value: specifications.indicator },
      { label: "Wireless Output", value: specifications.wirelessOutput },
      { label: "USB-C Output", value: specifications.usbCOutput },
      { label: "USB-A Output", value: specifications.usbAOutput },
      { label: "Built‑in Cables", value: specifications.builtInCables },
      { label: "Input (USB-C)", value: specifications.input },
      { label: "Total Output", value: specifications.totalOutput },
      { label: "Cycle Life", value: specifications.cycleLife },
    ];
  } else if (category === "phone-screen-protector") {
    specsToShow = [
      { label: "Model", value: product.model },
      { label: "Type", value: getTypeDisplay(type) },
      { label: "Material", value: specifications.material || "Tempered Glass" },
      { label: "Hardness", value: specifications.hardness || "9H" },
      { label: "Thickness", value: specifications.thickness },
      { label: "Compatibility", value: specifications.compatibility },
      { label: "Finish", value: specifications.finish },
      { label: "Anti‑Spy", value: specifications.antiSpy ? "Yes" : "No" },
      { label: "Application", value: specifications.application },
    ].filter(spec => spec.value);
  }

  specsToShow = specsToShow.filter(spec => spec.value);
  if (specsToShow.length === 0) return null;

  return (
    <div className="product-details__specs">
      <h3 className="product-details__specs-heading">Technical Specifications</h3>
      <div className="product-details__specs-table-wrapper">
        <div className="product-details__specs-table">
          {specsToShow.map((spec, idx) => (
            <div key={idx} className="product-details__spec-row">
              <span className="product-details__spec-label">{spec.label}</span>
              <span className="product-details__spec-value">{formatValue(spec.value)}</span>
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
      <h3 className="product-details__certifications-heading">Certifications</h3>
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

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = productData.find(p => p.slug === slug);
  if (!product) return { title: "Product Not Found" };
  
  const categoryDisplay = getCategoryDisplay(product.category);
  const plainTextDescription = typeof product.description === 'string' 
    ? product.description 
    : `Direct factory supply of ${product.name}. Request wholesale pricing for B2B importers.`;

  return {
    title: `${product.name} ${product.model ? `(${product.model})` : ''} | JoyHand Wholesale`,
    description: plainTextDescription.substring(0, 160),
    keywords: [`wholesale ${product.name}`, `OEM ${categoryDisplay}`, `${product.model} manufacturer`, "B2B energy supplier"],
    openGraph: {
      title: `${product.name} - Direct Factory Supply`,
      description: plainTextDescription.substring(0, 160),
      type: "website",
      images: [
        {
          url: product.image || "/homeImg/businessModelImage001.jpg",
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    alternates: {
      canonical: `/products/${product.slug}`,
    }
  };
}

export async function generateStaticParams() {
  return productData.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;
  const product = productData.find(p => p.slug === slug);
  if (!product) notFound();

  const images = product.gallery?.length ? product.gallery : [product.image];
  const categoryDisplay = getCategoryDisplay(product.category);
  const categoryIcon = getCategoryIcon(product.category);
  const typeDisplay = getTypeDisplay(product.type);
  const videoId = product.youtubeVideoId || null;

  let solutionSlug = "";
  if (product.category === "battery") solutionSlug = "storage-batteries";
  else if (product.category === "inverter") solutionSlug = "solar-inverters";
  else if (product.category === "electric-mobility") solutionSlug = "electric-mobility";
  else if (product.category === "portable-power") solutionSlug = "portable-power-stations";
  else if (product.category === "power-bank") solutionSlug = "power-banks";
  else if (product.category === "phone-screen-protector") solutionSlug = "phone-screen-protectors";

  const plainTextDescription = typeof product.description === 'string' 
    ? product.description 
    : `Direct factory supply of ${product.name}. Request wholesale pricing for B2B importers.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://www.joyhand.com${product.image}`,
    "description": plainTextDescription.substring(0, 200),
    "brand": {
      "@type": "Brand",
      "name": "JoyHand Energy"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "JoyHand Energy"
    },
    "model": product.model,
    "category": categoryDisplay,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "offerCount": "1",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "JoyHand Energy Manufacturing"
      }
    }
  };

  return (
    <main className="product-details">
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container">
        <Breadcrumbs 
          items={[
            { label: "Products", link: "/products" },
            { label: categoryDisplay, link: `/products/solutions/${solutionSlug}` }
          ]} 
          currentTitle={product.name} 
        />
        <div className="product-details__grid">
          <section className="product-details__gallery">
            <ProductGallery images={images} productName={product.name} />
            <ProductVideo videoId={videoId} productName={product.name} />
          </section>
          <section className="product-details__info">
            <div className="product-details__meta">
              <span className="product-details__badge">{categoryIcon} {categoryDisplay}</span>
              <span className="product-details__type">{typeDisplay}</span>
              {product.model && <span className="product-details__model">Model: {product.model}</span>}
            </div>
            <h1 className="product-details__title">{product.name}</h1>
            <RichTextRenderer 
              value={product.description} 
              components={{
                block: {
                  normal: ({ children }) => <p className="product-details__description">{children}</p>
                }
              }}
            />
            <ProductKeySpecs product={product} />
            <ProductFeaturesCompact features={product.features} />
            <ProductActions category={product.category} />
          </section>
        </div>
        <div className="product-details__full-content">
          <ProductSpecs product={product} />
          <ProductApplications applications={product.applications} />
          <div className="product-details__bottom-grid">
            <ProductCertifications certifications={product.certifications} />
            <ProductWarranty warranty={product.warranty} />
          </div>
          <ProductFAQ product={product} />
          <ProductRelated currentProductId={product.id} />
        </div>
      </div>
    </main>
  );
}