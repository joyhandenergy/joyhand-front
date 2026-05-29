import { blogPosts } from "@/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Link from "next/link";
import Script from "next/script";
import { PiCalendarBlank, PiUser, PiClock, PiArrowLeft, PiArrowRight, PiLinkedinLogo, PiTwitterLogo, PiLinkSimple, PiFactory, PiShieldCheck } from "react-icons/pi";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import "../blog.css";

export const revalidate = 3600;

async function getAllPosts() {
  let sanityPosts = [];
  try {
    const rawSanity = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      metaTitle,
      metaDescription,
      "slug": slug.current,
      excerpt,
      mainImage,
      publishedAt,
      readTime,
      body,
      gallery,
      "category": categories[0]->title
    }`);

    sanityPosts = rawSanity.map((p) => ({
      id: p._id,
      title: p.title,
      metaTitle: p.metaTitle,
      metaDescription: p.metaDescription,
      slug: p.slug,
      excerpt: p.excerpt || "",
      image: p.mainImage ? urlFor(p.mainImage).url() : "/images/placeholder.jpg",
      date: p.publishedAt,
      readTime: p.readTime || "5 min read",
      category: p.category || "Energy Technology",
      body: p.body,
      gallery: p.gallery || [],
      isSanity: true
    }));
  } catch (error) {
    console.error("Failed to fetch blog posts from Sanity:", error);
  }

  const sanitySlugs = new Set(sanityPosts.map((p) => p.slug));
  const uniqueLocal = blogPosts.filter((p) => !sanitySlugs.has(p.slug));

  return [...sanityPosts, ...uniqueLocal];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const allPosts = await getAllPosts();
  const blogPost = allPosts.find(
    (post) => post.slug.toLowerCase().trim() === slug.toLowerCase().trim()
  );

  if (!blogPost) {
    return {
      title: "Article Not Found | JoyHand Energy",
    };
  }

  const title = blogPost.metaTitle || `${blogPost.title} | JoyHand`;
  const description = blogPost.metaDescription || blogPost.excerpt || "JoyHand Energy intelligence blog.";

  return {
    title: title.substring(0, 60),
    description: description.substring(0, 160),
    keywords: [blogPost.category, "energy manufacturing insight", "OEM strategy", "B2B energy intelligence", "JoyHand technical report"],
    openGraph: {
      title: title,
      description: description,
      type: "article",
      images: [
        {
          url: blogPost.image || "/homeImg/businessModelImage001.jpg",
          width: 1200,
          height: 630,
          alt: blogPost.title,
        },
      ],
    },
    alternates: {
      canonical: `/blog/${blogPost.slug}`,
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
    return content.split('\n\n').map((block, index) => {
      // Check if block is likely a heading (short, no period at end)
      const isHeading = block.length < 60 && !block.trim().endsWith('.');
      if (isHeading) {
        return <h2 key={index} className="blog-details__heading h3">{block.trim()}</h2>;
      }
      return <p key={index} className="blog-details__paragraph">{block.trim()}</p>;
    });
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
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
      "description": blogPost.excerpt || ""
    },
    {
      "@context": "https://schema.org",
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
  ];

  return (
    <article className="blog-details">
      <Script
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
                <div className="sidebar-share__actions">
                  <button className="sidebar-share__btn" aria-label="Share on LinkedIn"><PiLinkedinLogo /></button>
                  <button className="sidebar-share__btn" aria-label="Share on Twitter"><PiTwitterLogo /></button>
                  <button className="sidebar-share__btn" aria-label="Copy Link"><PiLinkSimple /></button>
                </div>
              </div>

              <div className="sidebar-card sidebar-card--primary">
                <div className="sidebar-card__icon-wrapper">
                  <PiFactory />
                </div>
                <h4 className="sidebar-card__title">Direct Factory Partnership</h4>
                <p className="sidebar-card__text">
                  Bypass intermediaries and scale your energy brand with our direct, standards-compliant production lines.
                </p>
                <Link href="/contact" className="sidebar-card__link-btn">
                  Scale Your OEM Brand
                </Link>
              </div>

              <div className="sidebar-card sidebar-card--outline">
                <div className="sidebar-card__icon-wrapper">
                  <PiShieldCheck />
                </div>
                <h4 className="sidebar-card__title">Explore Core Capabilities</h4>
                <ul className="sidebar-card__list">
                  <li>
                    <Link href="/manufacturing">LFP Cell Grading & Assembly <PiArrowRight /></Link>
                  </li>
                  <li>
                    <Link href="/products">Hybrid Inverter Production <PiArrowRight /></Link>
                  </li>
                  <li>
                    <Link href="/about-us">ISO Quality Control Standards <PiArrowRight /></Link>
                  </li>
                  <li>
                    <Link href="/contact">Global Logistics & Support <PiArrowRight /></Link>
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