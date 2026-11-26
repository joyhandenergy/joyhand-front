import { client } from "@/sanity/lib/client";
import { solutionConfigs, headerData, isRedirectedSlug } from "@/data";
import { cleanGeoText } from "@/lib/seoSanitizer";

// Refresh every hour so new products or blog posts are automatically reflected
export const revalidate = 3600;

export async function GET() {
  const baseUrl = "https://www.joyhand.com";

  let products = [];
  let posts = [];

  try {
    [products, posts] = await Promise.all([
      client.fetch(
        `*[_type == "product" && !(_id in path("drafts.**"))]{
          name,
          model,
          "slug": slug.current,
          category,
          shortDescription
        } | order(_createdAt desc)`
      ),
      client.fetch(
        `*[_type == "post" && !(_id in path("drafts.**"))]{
          title,
          "slug": slug.current,
          excerpt
        } | order(publishedAt desc)[0...10]`
      ),
    ]);
    products = (products || []).filter((p) => p.slug && !isRedirectedSlug(p.slug));
  } catch (err) {
    console.error("Error fetching live data for llms.txt:", err);
  }

  const phone = headerData?.phone || "+86 186 0202 1144";
  const email = headerData?.email || "sales@joyhand.com";

  const lines = [
    "# JoyHand Energy",
    "",
    "> JoyHand Energy is a direct China OEM/ODM factory manufacturer of LiFePO4 solar storage batteries, hybrid solar inverters, monocrystalline solar panels, portable power stations, custom OEM power banks, and electric scooters, motorcycles & cargo tricycles. Founded in 1998 and operating to ISO 9001:2015 manufacturing standards from our 50,000 sq.m Guangzhou facility, JoyHand specializes in factory-direct B2B container supply, private-label OEM, and custom ODM engineering for global distributors, retail brands, and fleet operators worldwide.",
    "",
    "## Company & Factory Overview",
    `- Website: ${baseUrl}`,
    `- Factory & Global HQ: No. 7, Nansha District, Guangzhou 511400, Guangdong, China`,
    `- Americas Office: 445 Dexter Avenue, Suite 4050, Montgomery, AL 36104, USA`,
    `- Regional Logistics Hub: New Mandilas International Market, Trade Fair, Ojo, Lagos`,
    `- Oceania Office: 157 A'Beckett Street, Melbourne VIC 3000, Australia`,
    `- Direct Wholesale Email: ${email}`,
    `- Direct Phone & WhatsApp: ${phone}`,
    `- Target Export Markets: Global B2B distribution across North America (US retail, Amazon FBA, commercial distribution), Europe (EEC homologated electric scooters & CE/IEC storage), Oceania, Africa, Asia, and Latin America`,
    `- Engineering & Export Standards: Built to UL 1973 (batteries), UL 2272 (electric scooters), UL 2271 (EV batteries), DOT/NHTSA lighting & VIN specs, FCC Part 15, CE, EEC/COC European type-approval specs, and UN38.3/MSDS documentation for compliant sea/air container freight`,
    `- Facility Standards: Built to ISO 9001:2015 quality control standards, 100% inline thermal stress testing, Grade-A cell grading, and automated laser welding`,
    "",
    "## Core Product Categories",
  ];

  if (solutionConfigs) {
    for (const [slug, config] of Object.entries(solutionConfigs)) {
      lines.push(`- [${config.title}](${baseUrl}/products/category/${slug}): ${config.description}`);
    }
  }

  const productCountText = products?.length > 0 ? `${products.length}+` : "180+";
  lines.push(`- [Factory-Direct Wholesale Catalog](${baseUrl}/products): Browse the full catalog of ${productCountText} Grade-A LiFePO4 batteries, electric motorcycles, hybrid inverters, and solar hardware models.`);

  lines.push("");
  lines.push("## Manufacturing & OEM/ODM Services");
  lines.push(`- [Manufacturing Capabilities](${baseUrl}/manufacturing): Automated SMT lines, pack assembly, BMS engineering, and rigorous cell-sorting quality control.`);
  lines.push(`- [About JoyHand Energy](${baseUrl}/about-us): 28-year manufacturing heritage, leadership, and global distribution network.`);
  lines.push(`- [OEM & Private Label Services](${baseUrl}/manufacturing): Custom brand logos, bespoke metal/ABS chassis design, and branded retail packaging.`);
  lines.push(`- [ODM & Custom Engineering](${baseUrl}/manufacturing): 30+ in-house engineers developing custom BMS CAN/RS485 protocols, surge protection, and 55°C high-ambient thermal designs.`);

  lines.push("");
  lines.push("## B2B Wholesale & Inquiries");
  lines.push(`- [Direct Factory Quotes & OEM Inquiries](${baseUrl}/contact-us): Connect directly with our Guangzhou factory sales department for container orders, custom specifications, and 24h quotation.`);

  lines.push("");
  lines.push("## Factory Engineering & B2B Sourcing Guides");
  lines.push(`- [Factory Engineering & Sourcing Hub](${baseUrl}/blog): Direct-from-factory technical reports, engineering benchmarks, and practical sourcing guides covering LiFePO4 batteries, electric motorcycles, hybrid inverters, and solar systems.`);
  if (posts?.length > 0) {
    for (const post of posts) {
      const desc = post.excerpt ? `: ${cleanGeoText(post.excerpt)}` : "";
      lines.push(`- [${cleanGeoText(post.title)}](${baseUrl}/blog/${post.slug})${desc}`);
    }
  }

  lines.push("");
  lines.push("## Machine-Readable Resources & Deep Context");
  lines.push(`- [Full Context & Specifications (llms-full.txt)](${baseUrl}/llms-full.txt): Complete product directory, technical specifications, and B2B wholesale policies for advanced AI ingestion.`);
  lines.push(`- [XML Sitemap](${baseUrl}/sitemap.xml): Full machine-readable map of all indexed site pages.`);

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
