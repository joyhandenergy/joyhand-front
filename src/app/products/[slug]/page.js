import { notFound } from "next/navigation";
import Link from "next/link";
import { PiBatteryHigh, PiLightning, PiMotorcycle, PiFactory, PiPlug, PiBatteryCharging, PiDeviceMobile } from "react-icons/pi";
import { productData } from "@/data";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ProductGallery from "./ProductGallery";
import ProductVideo from "./ProductVideo";
import ProductActions from "./ProductActions";
import ProductFAQ from "./ProductFAQ";
import ProductRelated from "./ProductRelated";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
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
    case "electric-mobility": return "Electric Mobility Solutions";
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
            <span className="product-details__key-spec-value">{spec.specValue}</span>
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
              <span className="product-details__spec-value">{spec.specValue}</span>
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
  
  // Fetch from Sanity
  const sanityProduct = await client.fetch(`*[_type == "product" && slug.current == $slug][0]`, { slug });
  const localProduct = productData.find(p => p.slug === slug);
  const product = sanityProduct || localProduct;

  if (!product) return { title: "Product Not Found" };

  // ── Use dedicated pain-point SEO fields if available, else smart fallback ──
  const fallbackTitle = buildFallbackTitle(product);
  const fallbackDesc  = buildFallbackDesc(product);

  const title       = (product.seoTitle       || fallbackTitle);
  const finalTitle  = title.length > 60 ? title.substring(0, 57) + "..." : title;

  let description = (product.metaDescription || fallbackDesc);
  let finalDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;
  if (finalDescription.length < 70) {
    finalDescription += " Request a factory-direct B2B wholesale quote today.";
    if (finalDescription.length > 160) finalDescription = finalDescription.substring(0, 157) + "...";
  }

  // Category-specific keyword banks for richer indexing
  const categoryKeywords = {
    battery:          ["LiFePO4 battery Nigeria", "solar backup battery Africa", "stop blackouts battery", "wholesale LFP battery"],
    inverter:         ["hybrid solar inverter Nigeria", "MPPT inverter wholesale", "blackout proof inverter", "solar inverter Africa"],
    "electric-mobility": ["electric scooter Nigeria delivery", "e-motorcycle no fuel Africa", "electric bike wholesale"],
    "portable-power": ["portable power station Nigeria", "solar generator blackout backup", "LiFePO4 power station Africa"],
    "power-bank":     ["power bank wholesale Nigeria", "wireless power bank Africa", "phone backup NEPA outage"],
  };
  const keywords = [
    ...(categoryKeywords[product.category] || []),
    product.name,
    product.model,
    ...(product.features || []),
    "B2B energy supplier Nigeria",
    "JoyHand factory direct",
  ].filter(Boolean);

  let imageUrl = "/homeImg/businessModelImage001.jpg";
  if (sanityProduct?.mainImage?.asset) {
    imageUrl = urlFor(sanityProduct.mainImage).url();
  } else if (localProduct?.image) {
    imageUrl = localProduct.image;
  }

  return {
    title: finalTitle,
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
          alt: `${product.name} – JoyHand Energy`,
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

// ── Fallback builders – category-aware pain-point copy ────────────────────
function buildFallbackTitle(product) {
  const painMap = {
    battery:          `End Blackouts: ${product.name} for Nigeria & Kenya | JoyHand`,
    inverter:         `No More Outages: ${product.name} – Global Export | JoyHand`,
    "electric-mobility": `Zero Fuel Bills: ${product.name} – Lagos to Dhaka | JoyHand`,
    "portable-power": `Beat Blackouts: ${product.name} – Reliable Backup | JoyHand`,
    "power-bank":     `Stay Charged: ${product.name} – Blackout Proof | JoyHand`,
  };
  return painMap[product.category] || `${product.name} | JoyHand`;
}

function buildFallbackDesc(product) {
  const modelText = product.model ? ` (${product.model})` : "";
  const descMap = {
    battery:          `Factory-direct ${product.name}${modelText} – LiFePO4 chemistry, 6000+ cycles. Wholesale backup battery for homes, SMEs, and telecom in Lagos and Nairobi.`,
    inverter:         `${product.name}${modelText} – auto-switch solar, battery & grid during grid failures. CE certified. B2B wholesale pricing for global distributors.`,
    "electric-mobility": `${product.name}${modelText} – eliminate petrol costs for delivery fleets in Karachi and Dhaka. CE certified, bulk import pricing available.`,
    "portable-power": `${product.name}${modelText} – LiFePO4 power station with pure sine wave. Emergency backup for homes and businesses during frequent power cuts.`,
    "power-bank":     `${product.name}${modelText} – stay connected through regional blackouts. CE/FCC certified. B2B wholesale pricing for African and Asian distributors.`,
  };
  return descMap[product.category] || `JoyHand ${product.name}${modelText} – factory-direct energy solution. Request B2B wholesale pricing for emerging markets.`;
}

export async function generateStaticParams() {
  const sanityProducts = await client.fetch(`*[_type == "product"]{ "slug": slug.current }`);
  
  if (sanityProducts.length > 0) {
    return sanityProducts.map((product) => ({
      slug: product.slug,
    }));
  }

  return productData.map((product) => ({
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
  const product = sanityProduct || localProduct;

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
  if (product.category === "battery") solutionSlug = "storage-batteries";
  else if (product.category === "inverter") solutionSlug = "solar-inverters";
  else if (product.category === "electric-mobility") solutionSlug = "electric-mobility";
  else if (product.category === "portable-power") solutionSlug = "portable-power-stations";
  else if (product.category === "power-bank") solutionSlug = "power-banks";
  else if (product.category === "accessories") solutionSlug = "accessories";

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

  const jsonLdImageUrl = images[0]?.startsWith('http') 
    ? images[0] 
    : `https://www.joyhand.com${images[0]}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": jsonLdImageUrl,
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "89"
    },
    ...(product.features && product.features.length > 0 && {
      "additionalProperty": product.features.map(feature => ({
        "@type": "PropertyValue",
        "name": "Feature",
        "value": feature
      }))
    })
  };

  const schemas = [productSchema];

  if (product.faq && product.faq.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": product.faq.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    });
  }

  return (
    <main className="product-details">
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
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
          <ScrollRevealWrapper as="section" className="product-details__gallery">
            <ProductGallery images={images} productName={product.name} />
            <ProductVideo videoId={videoId} productName={product.name} />
          </ScrollRevealWrapper>
          <ScrollRevealWrapper as="section" className="product-details__info">
            <div className="product-details__meta">
              <span className="product-details__badge">{categoryIcon} {categoryDisplay}</span>
              <span className="product-details__type">{typeDisplay}</span>
              {product.model && <span className="product-details__model">Model: {product.model}</span>}
            </div>
            <h1 className="product-details__title">{product.name}</h1>
            <p className="product-details__description">{plainTextDescription}</p>
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

    // Fisher-Yates shuffle — gives true random order on every server render
    const arr = [...pool];
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