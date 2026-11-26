import { notFound } from "next/navigation";
import { getProductsByCategory, solutionConfigs, isRedirectedSlug } from "@/data";
import CategoryClient from "./CategoryClient";
import PageHeader from "@/components/pageHeader/PageHeader";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { cleanGeoText, formatSeoTitle, formatSeoDescription } from "@/lib/seoSanitizer";
import "../../Products.css";

export const dynamicParams = false;

export async function generateMetadata({ params, searchParams }) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const page = Math.max(1, Number(resolvedSearchParams?.page) || 1);
  const config = solutionConfigs[slug];
  if (!config) return { title: { absolute: "Category Not Found | JoyHand" } };

  const baseTitle = formatSeoTitle(config.pageTitle || config.title);
  const title = page > 1 ? `${baseTitle.replace(/\s*\|\s*JoyHand$/i, "")} - Page ${page} | JoyHand` : baseTitle;
  const description = formatSeoDescription(config.metaDescription || config.description);
  const baseCanonical = config.canonicalUrl || `https://www.joyhand.com/products/category/${slug}`;
  const canonical = page > 1 ? `${baseCanonical}?page=${page}` : baseCanonical;
  const keywords = config.metaKeywords || config.keywords;

  return {
    title: {
      absolute: title,
    },
    description: description,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      url: canonical,
      type: "website",
      images: [
        {
          url: config.image || "/homeImg/businessModelImage001.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    alternates: {
      canonical: canonical,
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(solutionConfigs).map((slug) => ({ slug }));
}

const PRODUCTS_PER_PAGE = 24;

async function getProductsForCategory(filterCategory) {
  // 1. Fetch products from Sanity (projected slim fields for fast Cloudflare SSR)
  let sanityProducts = [];
  try {
    const rawSanity = await client.fetch(
      `*[_type == "product" && category == $filterCategory && !(_id in path("drafts.**"))]{
        _id,
        name,
        "slug": slug.current,
        shortDescription,
        seoDescription,
        mainImage,
        category,
        keySpecs
      }`,
      { filterCategory }
    );

    // Map Sanity schema to match local ProductCard expectations, excluding 301 redirected slugs
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

      // Map keySpecs to specifications object
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
        specifications: specs,
      };
    });
  } catch (error) {
    console.error("Sanity fetch failed", error);
  }

  // 2. Fetch local products
  let localProducts = getProductsByCategory(filterCategory) || [];

  // 3. Merge products (Sanity takes precedence on slug matches, excluding redirected slugs)
  const sanitySlugs = new Set(sanityProducts.map((p) => p.slug));
  const uniqueLocal = localProducts.filter((p) => !sanitySlugs.has(p.slug) && !isRedirectedSlug(p.slug));

  return [...sanityProducts, ...uniqueLocal];
}

export default async function SolutionsPage({ params, searchParams }) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const requestedPage = Math.max(1, Number(resolvedSearchParams?.page) || 1);
  const config = solutionConfigs[slug];
  if (!config) notFound();

  let allProducts = await getProductsForCategory(config.filterCategory);

  allProducts = allProducts.map(p => ({
    ...p,
    name: cleanGeoText(p.name),
    description: cleanGeoText(p.description),
  }));

  const totalCount = allProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / PRODUCTS_PER_PAGE));
  const currentPage = Math.min(requestedPage, totalPages);
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = allProducts.slice(start, start + PRODUCTS_PER_PAGE);

  // Extract B2B FAQs for AI Search (Perplexity, ChatGPT, Gemini) & Google Rich Results
  const rawFaqHtml = (config.bottomContent || '') + ' ' + (config.seoContent || '');
  const faqMatches = [...rawFaqHtml.matchAll(/<p><strong>Q:\s*([^<]+)<\/strong><br\s*\/?>A:\s*([^<]+)<\/p>/gi)];
  const categoryFaqs = [];
  const seenQuestions = new Set();
  for (const match of faqMatches) {
    const q = match[1].trim();
    const a = match[2].trim();
    if (q && a && !seenQuestions.has(q)) {
      seenQuestions.add(q);
      categoryFaqs.push({ question: q, answer: a });
    }
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": cleanGeoText(config.title),
        "description": cleanGeoText(config.description),
        "publisher": {
          "@type": "Organization",
          "name": "JoyHand"
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
      },
      ...(categoryFaqs.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": categoryFaqs.map(item => ({
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
    <main className="products-page">
      <script
        id="solution-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title={config.h1Title || config.title}
        subtitle={config.heroSubtitle || config.description}
        pageImage={config.image}
        parentLink="/products"
        parentLabel="Products"
        breadcrumbCurrent={config.breadcrumbBadge || config.title}
      />
      <CategoryClient
        slug={slug}
        config={config}
        products={paginatedProducts}
        totalCount={totalCount}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </main>
  );
}