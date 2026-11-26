import PageHeader from "@/components/pageHeader/PageHeader";
import ProductsClient from "./ProductsClient";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { productData, productsCatalogData, isRedirectedSlug } from "@/data";
import { cleanGeoText } from "@/lib/seoSanitizer";
import "./Products.css";

export const runtime = "edge";

export async function generateMetadata({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const page = Math.max(1, Number(resolvedSearchParams?.page) || 1);
  const baseTitle = "Wholesale Battery, Solar & Scooter Supplier | JoyHand";
  const title = page > 1
    ? `Wholesale Battery, Solar & Scooter Supplier - Page ${page} | JoyHand`
    : baseTitle;
  const canonical = page > 1
    ? `https://www.joyhand.com/products?page=${page}`
    : "https://www.joyhand.com/products";

  return {
    title: {
      absolute: title,
    },
    description: "China wholesale supplier & OEM/ODM manufacturer of LiFePO4 solar batteries, hybrid inverters, electric scooters & motorcycles, solar panels & power banks.",
    keywords: [
      "china wholesale energy storage supplier",
      "oem battery solar scooter manufacturer",
      "wholesale lifepo4 supplier",
      "51.2V 200Ah battery manufacturer china",
      "hybrid solar inverter supplier",
      "electric scooter manufacturer china",
      "electric motorcycle factory china",
      "portable power station odm manufacturer",
      "private label power bank oem",
      "monocrystalline solar panel wholesale"
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description: "China wholesale supplier & OEM/ODM manufacturer of LiFePO4 solar batteries, hybrid inverters, electric scooters & motorcycles, solar panels & power banks.",
      url: canonical,
      type: "website",
      images: [
        {
          url: "/homeImg/energyPlatformImage01.jpg",
          width: 1200,
          height: 630,
          alt: "JoyHand China Wholesale LiFePO4 Batteries, Solar Inverters & Electric Scooters",
        },
      ],
    }
  };
}

const PRODUCTS_PER_PAGE = 24;

async function getAllProducts() {
  let sanityProducts = [];
  try {
    const rawSanity = await client.fetch(`*[_type == "product" && !(_id in path("drafts.**"))]{
      _id,
      name,
      "slug": slug.current,
      shortDescription,
      seoDescription,
      mainImage,
      category,
      type,
      keySpecs
    }`);

    sanityProducts = rawSanity
      .filter((p) => {
        const s = p.slug?.current || p.slug;
        return s && !isRedirectedSlug(s);
      })
      .map((p) => {
        let image = "/images/placeholder.jpg";
        try {
          if (p.mainImage?.asset) image = urlFor(p.mainImage).url();
        } catch (e) {
          console.error("Image urlFor error", e);
        }

        const specs = {};
        if (p.keySpecs && Array.isArray(p.keySpecs)) {
          p.keySpecs.forEach((s) => {
            const specName = s.specName?.toLowerCase() || "";
            if (specName.includes("capacity") || specName.includes("power") || specName.includes("energy")) {
              specs.capacity = s.specValue;
            }
            if (specName.includes("voltage")) specs.nominalVoltage = s.specValue;
            if (specName.includes("output")) specs.totalOutput = s.specValue;
            if (specName.includes("speed")) specs.topSpeed = s.specValue;
          });
        }

        return {
          id: p._id,
          name: p.name,
          slug: p.slug?.current || p.slug,
          description: p.shortDescription || p.seoDescription || "",
          image: image,
          category: p.category,
          type: p.type,
          specifications: specs,
        };
      });
  } catch (error) {
    console.error("Sanity fetch failed", error);
  }

  const sanitySlugs = new Set(sanityProducts.map((p) => p.slug));
  const uniqueLocal = productData.filter((p) => !sanitySlugs.has(p.slug) && !isRedirectedSlug(p.slug));

  const allMerged = [...sanityProducts, ...uniqueLocal].map(p => ({
    ...p,
    name: cleanGeoText(p.name),
    description: cleanGeoText(p.description),
  }));

  // Group by category to mix them evenly
  const groupedByCategory = {};
  allMerged.forEach(p => {
    const cat = p.category || 'other';
    if (!groupedByCategory[cat]) groupedByCategory[cat] = [];
    groupedByCategory[cat].push(p);
  });

  // Proportional mixing to balance categories based on their size
  const totalProducts = allMerged.length;
  const scoredProducts = [];

  Object.keys(groupedByCategory).forEach(cat => {
    let catItems = groupedByCategory[cat];

    // 1. Mix internally by type or image to avoid similar products clustering together
    const groupedByType = {};
    catItems.forEach(item => {
      // Use type if available, otherwise fallback to image or name to group similar items
      const subKey = item.type || item.image || item.name;
      if (!groupedByType[subKey]) groupedByType[subKey] = [];
      groupedByType[subKey].push(item);
    });

    const mixedCatItems = [];
    let addedSub = true;
    while (addedSub) {
      addedSub = false;
      for (const t in groupedByType) {
        if (groupedByType[t].length > 0) {
          mixedCatItems.push(groupedByType[t].shift());
          addedSub = true;
        }
      }
    }

    catItems = mixedCatItems;
    const catCount = catItems.length;

    // 2. Proportionally spread them across the whole catalog
    catItems.forEach((item, index) => {
      const targetIndex = (index + 0.5) * (totalProducts / catCount);
      scoredProducts.push({ item, targetIndex });
    });
  });

  // Sort by target index to interleave proportionally
  scoredProducts.sort((a, b) => a.targetIndex - b.targetIndex);

  return scoredProducts.map(sp => sp.item);
}

export default async function ProductsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const requestedPage = Math.max(1, Number(resolvedSearchParams?.page) || 1);
  const allProducts = await getAllProducts();
  const totalCount = allProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / PRODUCTS_PER_PAGE));
  const currentPage = Math.min(requestedPage, totalPages);
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = allProducts.slice(start, start + PRODUCTS_PER_PAGE);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Wholesale Battery, Solar & Scooter Supplier | JoyHand",
    "description": "China wholesale supplier & OEM/ODM manufacturer of LiFePO4 solar batteries, hybrid inverters, electric scooters & motorcycles, solar panels & power banks.",
    "url": currentPage > 1 ? `https://www.joyhand.com/products?page=${currentPage}` : "https://www.joyhand.com/products",
    "publisher": {
      "@type": "Organization",
      "name": "JoyHand Energy",
      "url": "https://www.joyhand.com"
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": totalCount,
      "itemListElement": paginatedProducts.map((product, index) => ({
        "@type": "ListItem",
        "position": start + index + 1,
        "url": `https://www.joyhand.com/products/${product.slug}`,
        "name": product.name
      }))
    }
  };

  return (
    <main className="products-page">
      <script
        id="products-catalog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title={productsCatalogData.header.title}
        subtitle={productsCatalogData.header.subtitle}
        pageImage={productsCatalogData.header.image}
        breadcrumbCurrent="Products"
      />
      <ProductsClient
        products={paginatedProducts}
        totalCount={totalCount}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </main>
  );
}