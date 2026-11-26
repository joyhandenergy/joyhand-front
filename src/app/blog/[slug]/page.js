import { blogPosts } from "@/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Link from "next/link";
import { PiCalendarBlank, PiUser, PiClock, PiArrowLeft, PiArrowRight, PiFactory, PiShieldCheck } from "react-icons/pi";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { ShareButtons, ScaleBrandButton } from "./BlogInteractiveElements";
import { formatSeoTitle, formatSeoDescription, cleanGeoText } from "@/lib/seoSanitizer";
import "../blog.css";

export const dynamicParams = true;
export const revalidate = 60;

function cleanBlogText(text) {
  if (typeof text !== "string" || !text) return text;
  let result = cleanGeoText(text);
  const replacements = [
    [/\bLagos,\s*Nairobi,?\s*(?:and\s*)?Dhaka\b/gi, "major global commercial hubs"],
    [/\bDistributors\s+in\s+(?:Nigeria|Kenya|Pakistan|Africa|South\s+Asia)(?:,\s*(?:Nigeria|Kenya|Pakistan|Ghana|Uganda|Tanzania|Bangladesh))*\s*(?:&\s*(?:Nigeria|Kenya|Pakistan|South\s+Asia))?/gi, "Global B2B Distributors"],
    [/\b(?:across|in|for)\s+(?:Sub-Saharan\s+)?Africa\s+and\s+South\s+Asia\b/gi, "across global export markets"],
    [/\b(?:across|in|for)\s+(?:Sub-Saharan\s+)?Africa\b/gi, "across international markets"],
    [/\b(?:across|in|for)\s+South\s+Asia\b/gi, "across global commercial markets"],
    [/\bAfrican\s+(distributors|markets|grids|cities|operators|businesses|fleets|consumers|households|importers|wholesalers)\b/gi, "international $1"],
    [/\bSouth\s+Asian\s+(distributors|markets|grids|cities|operators|importers)\b/gi, "international $1"],
    [/\bAfrican\b/gi, "international"],
    [/\bAfrica\b/gi, "international markets"],
    [/\bSouth\s+Asia\b/gi, "global markets"],
    [/\b(?:Nigeria|Kenya|Pakistan|Ghana|Uganda|Tanzania|Bangladesh|Nepal|Morocco|South\s+Africa|Lagos|Nairobi|Dhaka|Karachi)\b/gi, "global import markets"],
    [/\belectric\s+mobility\b/gi, "electric scooters"],
    [/\burban\s+mobility\b/gi, "urban electric scooters"],
    [/\bpersonal\s+mobility\b/gi, "personal electric scooters"],
    [/\bsmart\s+mobility\b/gi, "smart electric scooters"],
    [/\bE-Mobility\b/g, "Electric Scooters"],
    [/\be-mobility\b/g, "electric scooters"],
    [/\bMobility\b/g, "Electric Scooter"],
    [/\bmobility\b/g, "electric scooter"],
    [/\bglobal import markets(?:\s*,\s*global import markets)+(?:\s*(?:,|and)\s*global import markets)?\b/gi, "global import markets"],
    [/\binternational markets\s+and\s+global markets\b/gi, "global export markets"],
    [/\s{2,}/g, " "]
  ];
  for (const [pattern, replacement] of replacements) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

const BLOG_INTERNAL_KEYWORD_LINKS = [
  { pattern: /\b(?:51\.2V\s+200Ah|10kWh\s+wall[- ]mount\s+battery)\b/i, href: "/products/10kwh-wall-mount-battery" },
  { pattern: /\b(?:51\.2V\s+LiFePO4(?:\s+batter(?:y|ies))?|LiFePO4\s+solar\s+batter(?:y|ies)|LiFePO4\s+batter(?:y|ies)|solar\s+storage\s+batter(?:y|ies)|solar\s+batter(?:y|ies)|LFP\s+batter(?:y|ies))\b/i, href: "/products/category/solar-batteries" },
  { pattern: /\b(?:hybrid\s+solar\s+inverters?|hybrid\s+inverters?|solar\s+inverters?)\b/i, href: "/products/category/solar-inverters" },
  { pattern: /\b(?:electric\s+scooters?(?:\s+and\s+(?:electric\s+)?motorcycles?)?|electric\s+motorcycles?|cargo\s+tricycles?|swappable\s+battery\s+scooters?)\b/i, href: "/products/category/electric-motorcycles" },
  { pattern: /\b(?:portable\s+power\s+stations?)\b/i, href: "/products/category/portable-power-stations" },
  { pattern: /\b(?:custom\s+power\s+banks?|OEM\s+power\s+banks?|power\s+banks?)\b/i, href: "/products/category/power-banks" },
  { pattern: /\b(?:monocrystalline\s+solar\s+panels?|550W\s+solar\s+panels?|solar\s+panels?)\b/i, href: "/products/category/solar-accessories" },
  { pattern: /\b(?:ISO\s+9001(?::2015)?\s+(?:production\s+lines?|quality\s+control|QC|factory)|automated\s+manufacturing\s+(?:lines?|facility))\b/i, href: "/manufacturing" },
];

function resolveInternalMarkHref(mark) {
  if (!mark) return "/products";
  if (mark.refSlug) {
    return mark.refType === "post" ? `/blog/${mark.refSlug}` : `/products/${mark.refSlug}`;
  }
  return mark.routePath || mark.customHref || mark.href || "/products";
}

function sanitizePortableBlocks(blocks, enableAutoLinks = true, existingRelatedLinks = []) {
  if (!Array.isArray(blocks)) return blocks;
  const usedTargets = new Set();
  for (const rl of existingRelatedLinks || []) {
    if (rl?.href) usedTargets.add(rl.href);
  }
  for (const block of blocks) {
    for (const md of block?.markDefs || []) {
      if (md?._type === "internalLink" || md?._type === "link") {
        usedTargets.add(resolveInternalMarkHref(md));
      }
    }
  }
  let autoKeyCounter = 0;

  return blocks.map((block) => {
    if (!block || !Array.isArray(block.children)) return block;

    const isNormalParagraph = block._type === "block" && (!block.style || block.style === "normal") && !block.listItem;
    const newMarkDefs = Array.isArray(block.markDefs) ? [...block.markDefs] : [];
    const newChildren = [];

    for (const child of block.children) {
      if (typeof child?.text !== "string") {
        newChildren.push(child);
        continue;
      }

      const cleanedText = cleanBlogText(child.text);
      const hasExistingMarks = Array.isArray(child.marks) && child.marks.length > 0;

      if (!enableAutoLinks || !isNormalParagraph || hasExistingMarks) {
        newChildren.push({ ...child, text: cleanedText });
        continue;
      }

      let matched = null;
      for (const rule of BLOG_INTERNAL_KEYWORD_LINKS) {
        if (usedTargets.has(rule.href)) continue;
        const m = cleanedText.match(rule.pattern);
        if (m && m.index !== undefined) {
          if (!matched || m.index < matched.index) {
            matched = { index: m.index, matchText: m[0], href: rule.href };
          }
        }
      }

      if (!matched) {
        newChildren.push({ ...child, text: cleanedText });
        continue;
      }

      usedTargets.add(matched.href);
      const markKey = `autolink_${autoKeyCounter++}`;
      newMarkDefs.push({ _key: markKey, _type: "link", href: matched.href });

      const before = cleanedText.slice(0, matched.index);
      const after = cleanedText.slice(matched.index + matched.matchText.length);
      if (before) {
        newChildren.push({ ...child, _key: `${child._key || "sp"}_b`, text: before });
      }
      newChildren.push({
        _type: "span",
        _key: `${child._key || "sp"}_l`,
        text: matched.matchText,
        marks: [markKey],
      });
      if (after) {
        newChildren.push({ ...child, _key: `${child._key || "sp"}_a`, text: after });
      }
    }

    return {
      ...block,
      markDefs: newMarkDefs,
      children: newChildren,
    };
  });
}

async function getAllPosts() {
  let sanityPosts = [];
  try {
    const rawSanity = await client.fetch(`*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
      _id,
      title,
      metaTitle,
      metaDescription,
      "slug": slug.current,
      excerpt,
      mainImage,
      publishedAt,
      readTime,
      body[]{
        ...,
        markDefs[]{
          ...,
          _type == "internalLink" => {
            ...,
            "refType": reference->_type,
            "refSlug": reference->slug.current
          }
        }
      },
      relatedLinks[]{
        label,
        routePath,
        customHref,
        "refType": reference->_type,
        "refSlug": reference->slug.current
      },
      autoKeywordLinks,
      gallery,
      "category": categories[0]->title
    }`);

    sanityPosts = rawSanity.map((p) => {
      const resolvedRelatedLinks = (p.relatedLinks || [])
        .filter((rl) => rl?.label)
        .map((rl) => ({
          label: cleanBlogText(rl.label),
          href: resolveInternalMarkHref(rl),
        }));

      return {
        id: p._id,
        title: cleanBlogText(p.title),
        metaTitle: cleanBlogText(p.metaTitle || p.title),
        metaDescription: cleanBlogText(p.metaDescription || p.excerpt || ""),
        slug: p.slug,
        excerpt: cleanBlogText(p.excerpt || ""),
        image: p.mainImage?.asset ? urlFor(p.mainImage).url() : "/images/placeholder.jpg",
        date: p.publishedAt,
        readTime: p.readTime || "6 min read",
        category: cleanBlogText(p.category || "Energy Technology"),
        body: sanitizePortableBlocks(p.body, p.autoKeywordLinks !== false, resolvedRelatedLinks),
        relatedLinks: resolvedRelatedLinks,
        gallery: p.gallery || [],
        isSanity: true
      };
    });
  } catch (error) {
    console.error("Failed to fetch blog posts from Sanity:", error);
  }

  const sanitySlugs = new Set(sanityPosts.map((p) => p.slug));
  const uniqueLocal = localBlogPostsSafe(sanitySlugs);

  return [...sanityPosts, ...uniqueLocal];
}

function localBlogPostsSafe(sanitySlugs) {
  return (blogPosts || []).filter((p) => !sanitySlugs.has(p.slug));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const allPosts = await getAllPosts();
  const blogPost = allPosts.find(
    (post) => post.slug.toLowerCase().trim() === slug.toLowerCase().trim()
  );

  if (!blogPost) {
    return {
      title: {
        absolute: "Article Not Found | JoyHand Blog",
      },
    };
  }

  const finalTitle = formatSeoTitle(blogPost.metaTitle || blogPost.title, "JoyHand Blog");
  const finalDescription = formatSeoDescription(
    blogPost.metaDescription || blogPost.excerpt,
    "Read China factory engineering guides and B2B sourcing benchmarks from JoyHand Blog."
  );
  const ogImage = blogPost.image?.startsWith("http")
    ? blogPost.image
    : `https://www.joyhand.com${blogPost.image || "/homeImg/businessModelImage001.jpg"}`;

  // Generate dynamic keywords from the title for highly relevant SEO
  const titleKeywords = blogPost.title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .split(' ')
    .filter(word => word.length > 3 && !["with", "this", "that", "from", "your", "what", "which", "when"].includes(word));
    
  const dynamicKeywords = [...new Set([blogPost.category, ...titleKeywords, "JoyHand Blog", "wholesale OEM", "China factory supplier"])];

  return {
    title: {
      absolute: finalTitle,
    },
    description: finalDescription,
    keywords: dynamicKeywords,
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: `https://www.joyhand.com/blog/${blogPost.slug}`,
      siteName: "JoyHand Blog",
      type: "article",
      publishedTime: blogPost.date ? new Date(blogPost.date).toISOString() : undefined,
      authors: ["JoyHand Engineering Team"],
      section: blogPost.category || "Manufacturing & Engineering",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: blogPost.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [ogImage],
    },
    alternates: {
      canonical: `https://www.joyhand.com/blog/${blogPost.slug}`,
    }
  };
}

export async function generateStaticParams() {
  const allPosts = await getAllPosts();
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;
  const allPosts = await getAllPosts();

  const blogPost = allPosts.find(
    (post) => post.slug.toLowerCase().trim() === slug.toLowerCase().trim()
  );

  if (!blogPost) {
    notFound();
  }

  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const formattedDate = new Date(blogPost.date || new Date()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Simple parser for plain text content with headings
  const renderContent = (content) => {
    if (!content) return null;
    return cleanBlogText(content).split('\n\n').map((block, index) => {
      // Check if block is likely a heading (short, no period at end)
      const isHeading = block.length < 60 && !block.trim().endsWith('.');
      if (isHeading) {
        return <h2 key={index} className="blog-details__heading h3">{block.trim()}</h2>;
      }
      return <p key={index} className="blog-details__paragraph">{block.trim()}</p>;
    });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Article", "BlogPosting"],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://www.joyhand.com/blog/${blogPost.slug}`
        },
        "headline": blogPost.title,
        "image": [
          blogPost.image?.startsWith('http') ? blogPost.image : `https://www.joyhand.com${blogPost.image || "/homeImg/businessModelImage001.jpg"}`
        ],
        "datePublished": blogPost.date ? new Date(blogPost.date).toISOString() : new Date().toISOString(),
        "dateModified": blogPost.date ? new Date(blogPost.date).toISOString() : new Date().toISOString(),
        "author": {
          "@type": "Organization",
          "name": "JoyHand Editorial Team",
          "url": "https://www.joyhand.com/about-us"
        },
        "publisher": {
          "@type": "Organization",
          "name": "JoyHand Energy",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.joyhand.com/homeImg/businessModelImage001.jpg"
          }
        },
        "description": cleanBlogText(blogPost.metaDescription || blogPost.excerpt || "")
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Manufacturing Intel",
            "item": "https://www.joyhand.com/blog"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": blogPost.category || "Technology",
            "item": `https://www.joyhand.com/blog?category=${encodeURIComponent(blogPost.category || "Technology")}`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": blogPost.title,
            "item": `https://www.joyhand.com/blog/${blogPost.slug}`
          }
        ]
      }
    ]
  };

  return (
    <article className="blog-details">
      <script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container blog-details__container">
        <Breadcrumbs
          items={[
            { label: "Manufacturing Intel", link: "/blog" },
            { label: blogPost.category || "Technology", link: "/blog" }
          ]}
          currentTitle={blogPost.title}
        />

        <div className="blog-details__layout">
          {/* Column 1: Main Content Card */}
          <ScrollRevealWrapper className="blog-details__main">
            <h1 className="blog-details__title">{blogPost.title}</h1>
            <div className="blog-details__meta-bar">
              <div className="blog-details__category-tag">{blogPost.category || "Energy Technology"}</div>
              <div className="blog-details__meta-items">
                <span className="blog-details__meta-item">
                  <PiUser size={14} /> JoyHand Editorial
                </span>
                <span className="blog-details__meta-item">
                  <PiCalendarBlank size={14} /> {formattedDate}
                </span>
                <span className="blog-details__meta-item">
                  <PiClock size={14} /> {blogPost.readTime || "5 min read"}
                </span>
              </div>
            </div>

            {blogPost.image && (
              <div className="blog-details__featured-image-wrapper">
                <Image
                  src={blogPost.image}
                  alt={blogPost.title}
                  width={1200}
                  height={630}
                  priority
                  className="blog-details__featured-image"
                />
              </div>
            )}

            <div className="blog-details__content">
              {blogPost.excerpt && (
                <p className="blog-details__paragraph blog-details__excerpt-lead">
                  <strong>Summary:</strong> {blogPost.excerpt}
                </p>
              )}
              
              {blogPost.isSanity && blogPost.body ? (
               <div className="sanity-portable-text">
                   <PortableText 
                     value={blogPost.body} 
                     components={{
                        marks: {
                          internalLink: ({ value, children }) => {
                            const href = resolveInternalMarkHref(value);
                            return (
                              <Link href={href} className="blog-details__inline-link">
                                {children}
                              </Link>
                            );
                          },
                          link: ({ value, children }) => {
                            const href = value?.href || "/products";
                            if (href.startsWith("/")) {
                              return (
                                <Link href={href} className="blog-details__inline-link">
                                  {children}
                                </Link>
                              );
                            }
                            return (
                              <a href={href} target="_blank" rel="noopener noreferrer" className="blog-details__inline-link">
                                {children}
                              </a>
                            );
                          }
                        },
                        list: {
                          bullet: ({ children }) => <ul className="blog-details__list">{children}</ul>,
                        },
                        listItem: {
                          bullet: ({ children }) => <li className="blog-details__list-item">{children}</li>,
                        },
                        block: {
                          normal: ({children}) => <p className="blog-details__paragraph">{children}</p>,
                          h1: ({children}) => <h2 className="blog-details__heading h3">{children}</h2>,
                          h2: ({children}) => <h2 className="blog-details__heading h3">{children}</h2>,
                          h3: ({children}) => <h3 className="blog-details__heading h4">{children}</h3>,
                          h4: ({children}) => <h4 className="blog-details__heading h5">{children}</h4>,
                          blockquote: ({children}) => <blockquote className="blog-details__blockquote" style={{ borderLeft: "4px solid var(--accent)", paddingLeft: "1rem", margin: "1.5rem 0", fontStyle: "italic", color: "var(--text-light)" }}>{children}</blockquote>
                        },
                        types: {
                          image: ({value}) => {
                            if (!value?.asset?._ref) {
                              return null;
                            }
                            return (
                              <div className="blog-details__inline-image" style={{ margin: "2rem 0", borderRadius: "12px", overflow: "hidden" }}>
                                <Image
                                  src={urlFor(value).width(800).url()}
                                  alt={value.alt || ' ' }
                                  width={800}
                                  height={450}
                                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                />
                              </div>
                            )
                          },
                          inlineGallery: ({value}) => {
                            if (!value?.images || value.images.length === 0) return null;
                            return (
                              <div className="blog-details__inline-gallery" style={{ margin: "2.5rem 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                                {value.images.map((img, idx) => (
                                  img.asset?._ref && (
                                    <div key={idx} style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "12px", overflow: "hidden" }}>
                                      <Image
                                        src={urlFor(img).width(500).url()}
                                        alt={img.alt || `Inline gallery image ${idx + 1}`}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                      />
                                    </div>
                                  )
                                ))}
                              </div>
                            );
                          }
                        }
                     }} 
                   />
                </div>
              ) : (
                renderContent(blogPost.content)
              )}

              {/* Add Gallery Rendering here if any images are provided */}
              {blogPost.gallery && blogPost.gallery.length > 0 && (
                <div className="blog-details__gallery" style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
                  {blogPost.gallery.map((imgObj, idx) => (
                    imgObj.asset && (
                      <div key={idx} style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "12px", overflow: "hidden" }}>
                        <Image
                          src={urlFor(imgObj).width(500).url()}
                          alt={imgObj.alt || `Gallery image ${idx + 1}`}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    )
                  ))}
                </div>
              )}
              {/* Contextual Category & Product Keyword Links */}
              {blogPost.relatedLinks && blogPost.relatedLinks.length > 0 && (
                <div className="blog-details__related-box">
                  <h3 className="blog-details__related-title">Recommended Factory Product Lines</h3>
                  <div className="blog-details__related-links">
                    {blogPost.relatedLinks.map((rl, rIdx) => (
                      <Link key={rIdx} href={rl.href} className="blog-details__related-link">
                        <span>{rl.label}</span>
                        <PiArrowRight />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Added explicit internal linking block for SEO */}
            <div className="blog-details__internal-links" style={{ padding: "2rem 0", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)", margin: "3rem 0" }}>
              <h4 style={{ marginBottom: "1rem" }}>Explore Direct JoyHand B2B Lines</h4>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/products/category/solar-batteries" className="btn btn--outline btn--sm">LiFePO4 Solar Batteries</Link>
                <Link href="/products/category/electric-motorcycles" className="btn btn--outline btn--sm">Electric Scooters &amp; Motorcycles</Link>
                <Link href="/products/category/solar-inverters" className="btn btn--outline btn--sm">Hybrid Solar Inverters</Link>
                <Link href="/products/category/power-banks" className="btn btn--outline btn--sm">Custom OEM Power Banks</Link>
                <Link href="/manufacturing" className="btn btn--outline btn--sm">50,000 m² OEM Plant</Link>
                <Link href="/contact-us" className="btn btn--outline btn--sm">Request Factory Quote</Link>
              </div>
            </div>

            <section className="blog-details__author-card">
              <div className="author-card__avatar">
                <PiUser />
              </div>
              <div className="author-card__info">
                <h4 className="author-card__name">JoyHand Team</h4>
                <p className="author-card__bio">
                  Our dedicated research team exploring advanced energy storage solutions and manufacturing protocols.
                </p>
              </div>
            </section>

            {(prevPost || nextPost) && (
              <div className="blog-details__navigation">
                {prevPost && (
                  <Link href={`/blog/${prevPost.slug}`} className="blog-details__nav-link blog-details__nav-link--prev">
                    <div className="blog-details__nav-thumb">
                      <Image 
                        src={prevPost.image || "/pageHeadImg/pageheader-blog1.jpg"} 
                        alt={prevPost.title}
                        width={120}
                        height={80}
                      />
                    </div>
                    <div className="blog-details__nav-content">
                      <span className="blog-details__nav-label"><PiArrowLeft /> Previous Insight</span>
                      <span className="blog-details__nav-title">{prevPost.title}</span>
                    </div>
                  </Link>
                )}

                {nextPost && (
                  <Link href={`/blog/${nextPost.slug}`} className="blog-details__nav-link blog-details__nav-link--next">
                    <div className="blog-details__nav-content">
                      <span className="blog-details__nav-label">Next Insight <PiArrowRight /></span>
                      <span className="blog-details__nav-title">{nextPost.title}</span>
                    </div>
                    <div className="blog-details__nav-thumb">
                      <Image 
                        src={nextPost.image || "/pageHeadImg/pageheader-blog1.jpg"} 
                        alt={nextPost.title}
                        width={120}
                        height={80}
                      />
                    </div>
                  </Link>
                )}
              </div>
            )}
          </ScrollRevealWrapper>

          {/* Column 2: Sidebar (Sticky) */}
          <ScrollRevealWrapper as="aside" className="blog-details__sidebar">
            <div className="sidebar-sticky-inner">
              {/* Share Buttons */}
              <div className="sidebar-share">
                <span className="sidebar-share__label">Share Article</span>
                <ShareButtons title={blogPost.title} slug={blogPost.slug} />
              </div>

              <div className="sidebar-card sidebar-card--primary">
                <div className="sidebar-card__icon-wrapper">
                  <PiFactory />
                </div>
                <h4 className="sidebar-card__title">Direct Factory Partnership</h4>
                <p className="sidebar-card__text">
                  Bypass intermediaries and scale your energy brand with our direct, standards-compliant production lines.
                </p>
                <ScaleBrandButton />
              </div>

              <div className="sidebar-card sidebar-card--outline">
                <div className="sidebar-card__icon-wrapper">
                  <PiShieldCheck />
                </div>
                <h4 className="sidebar-card__title">Core B2B Factory Lines</h4>
                <ul className="sidebar-card__list">
                  <li>
                    <Link href="/products/category/solar-batteries">LiFePO4 Battery Manufacturer <PiArrowRight /></Link>
                  </li>
                  <li>
                    <Link href="/products/category/electric-motorcycles">Electric Scooter Factory China <PiArrowRight /></Link>
                  </li>
                  <li>
                    <Link href="/products/category/solar-inverters">Hybrid Solar Inverter Supplier <PiArrowRight /></Link>
                  </li>
                  <li>
                    <Link href="/products/category/power-banks">Custom Power Bank OEM <PiArrowRight /></Link>
                  </li>
                  <li>
                    <Link href="/manufacturing">50,000 m² OEM QC Plant <PiArrowRight /></Link>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollRevealWrapper>
        </div>
      </div>
    </article>
  );
}