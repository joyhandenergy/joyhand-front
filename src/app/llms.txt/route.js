import { client } from "@/sanity/lib/client";
import { solutionConfigs, headerData } from "@/data";

// Refresh every hour so new products or blog posts are automatically reflected
export const revalidate = 3600;

export async function GET() {
  const baseUrl = "https://www.joyhand.com";

  let products = [];
  let posts = [];

  try {
    [products, posts] = await Promise.all([
      client.fetch(
        `*[_type == "product"]{
          name,
          model,
          "slug": slug.current,
          category,
          shortDescription
        } | order(_createdAt desc)`
      ),
      client.fetch(
        `*[_type == "post"]{
          title,
          "slug": slug.current,
          excerpt
        } | order(publishedAt desc)[0...8]`
      ),
    ]);
  } catch (err) {
    console.error("Error fetching live data for llms.txt:", err);
  }

  const phone = headerData?.phone || "+86 186 0202 1144";
  const email = headerData?.email || "sales@joyhand.com";

  const lines = [
    "# JoyHand Energy",
    "",
    "> JoyHand Energy is a premier global OEM/ODM manufacturer of commercial and residential LiFePO4 energy storage systems, hybrid solar inverters, heavy-duty portable power stations, electric mobility solutions, and tech accessories. Founded in 1998 and operating under ISO 9001:2015 certified standards from our 50,000 sq.m manufacturing facility in Guangzhou, China, JoyHand specializes in factory-direct B2B container supply and white-label manufacturing for emerging markets across Africa and South Asia.",
    "",
    "## Company & Factory Overview",
    `- Website: ${baseUrl}`,
    `- Factory & Global HQ: No. 7, Nansha District, Guangzhou 511400, Guangdong, China`,
    `- Africa Regional Office: New Mandilas International Market, Trade Fair, Ojo, Lagos, Nigeria`,
    `- Americas Office: 445 Dexter Avenue, Suite 4050, Montgomery, AL 36104, USA`,
    `- Oceania Office: 157 A'Beckett Street, Melbourne VIC 3000, Australia`,
    `- Direct Wholesale Email: ${email}`,
    `- Direct Phone & WhatsApp: ${phone}`,
    `- Target Export Markets: Nigeria (Lagos, Abuja, Apapa Port), Kenya (Nairobi), South Africa, Bangladesh (Dhaka, Chittagong Port), Pakistan (Karachi)`,
    `- Compliance & Certifications: CE, UL, UN38.3 compliant documentation included for smooth customs clearance and sea/air container freight`,
    `- Facility Standards: ISO 9001:2015 audited quality control, 100% inline thermal stress testing, cell-matching, capacity grading`,
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
  lines.push(`- [ODM & Custom Engineering](${baseUrl}/manufacturing): 30+ in-house engineers developing custom BMS protocols, surge protection, and high-heat thermal designs for weak electrical grids.`);

  lines.push("");
  lines.push("## B2B Wholesale & Ordering Tools");
  lines.push(`- [Direct Factory Quotes & OEM Inquiries](${baseUrl}/contact-us): Connect directly with our Guangzhou factory sales department for container orders, custom specifications, and 24h quotation.`);
  lines.push(`- [Interactive Quotation Builder](${baseUrl}/quotation): Build custom container orders, calculate wholesale pricing, and export formal proforma quotes.`);
  lines.push(`- [Full Set Solar Package Quotations](${baseUrl}/quotation/packages): Download fixed package quotations for 3.3kW, 5kW, and 10kW residential and commercial solar full sets.`);
  lines.push(`- [Download Product Catalog](${baseUrl}/catalog/download): Download the full offline engineering catalog with complete hardware datasheets.`);

  lines.push("");
  lines.push("## Factory Engineering & B2B Sourcing Guides");
  lines.push(`- [Factory Engineering & Sourcing Hub](${baseUrl}/blog): Direct-from-factory technical reports, engineering benchmarks, and practical sourcing guides covering LiFePO4 batteries, electric motorcycles, hybrid inverters, and solar systems.`);
  if (posts?.length > 0) {
    for (const post of posts) {
      const desc = post.excerpt ? `: ${post.excerpt}` : "";
      lines.push(`- [${post.title}](${baseUrl}/blog/${post.slug})${desc}`);
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
