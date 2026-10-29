import { client } from "@/sanity/lib/client";
import { solutionConfigs, headerData, contactFaqs } from "@/data";

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
          shortDescription,
          keySpecs
        } | order(category asc, name asc)`
      ),
      client.fetch(
        `*[_type == "post"]{
          title,
          "slug": slug.current,
          excerpt,
          publishedAt
        } | order(publishedAt desc)`
      ),
    ]);
  } catch (err) {
    console.error("Error fetching live data for llms-full.txt:", err);
  }

  const phone = headerData?.phone || "+86 186 0202 1144";
  const email = headerData?.email || "sales@joyhand.com";

  const lines = [
    "# JoyHand Energy - Full Context & Technical Documentation",
    "",
    "> JoyHand Energy is a direct OEM/ODM factory manufacturer of commercial and residential LiFePO4 energy storage systems, hybrid solar inverters, Tier-1 monocrystalline solar panels, commercial solar streetlights, balance-of-system solar accessories & hardware, electric commuter scooters, commercial cargo motorcycles, and portable power stations. Founded in 1998 and operating under ISO 9001:2015 certified standards from our 50,000 sq.m manufacturing facility in Guangzhou, China, JoyHand specializes in factory-direct B2B container supply, white-label manufacturing, and custom engineering for brand owners, fleet operators, and distributors across the Americas, Europe, Africa, and Asia.",
    "",
    "## Corporate & Contact Details",
    `- Official Website: ${baseUrl}`,
    `- Manufacturing Hub & Global HQ: No. 7, Nansha District, Guangzhou 511400, Guangdong, China`,
    `- Americas Hub: 445 Dexter Avenue, Suite 4050, Montgomery, AL 36104, USA`,
    `- Africa Regional Hub: New Mandilas International Market, Trade Fair, Ojo, Lagos, Nigeria`,
    `- Oceania Hub: 157 A'Beckett Street, Melbourne VIC 3000, Australia`,
    `- Wholesale Inquiries Email: ${email}`,
    `- Factory WhatsApp / Phone: ${phone}`,
    `- Priority Target Regions & Logistics Ports: North America (US retail, Amazon FBA, commercial distribution), Europe (EEC homologated urban mobility), Africa (Lagos, Nairobi, Mombasa, Durban), and Asia (Karachi, Dhaka, Chittagong)`,
    `- Quality & Logistics Accreditations: ISO 9001:2015, UL 1973 (batteries), UL 2272 (e-scooters), UL 2271 (EV batteries), DOT/NHTSA street-legal compliance, FCC Part 15, CE, EEC/COC European type-approval, and UN38.3/MSDS documentation for safe maritime and air freight`,
    "",
    "## Manufacturing, Quality Control & OEM/ODM Capabilities",
    "JoyHand Energy controls every stage of production from raw cell grading to final export packing:",
    "- **Cell Grading & Matching**: 100% inline impedance and capacity grading to prevent premature pack degradation.",
    "- **Cycle Life**: Automotive-grade LiFePO4 cells rated for 6,000+ deep discharge cycles at 80% DOD.",
    "- **Custom BMS Engineering**: Tailored BMS architectures featuring high-voltage surge suppression, thermal throttling, and over/under-voltage cutoffs designed for weak electrical grids.",
    "- **OEM White-Labeling**: Custom metal chassis stamping, laser logo engraving, custom LCD/OLED display firmware, and distributor-branded retail packaging.",
    "- **Containerized Export Logistics**: Complete export paperwork management, including commercial invoices, packing lists, bill of lading, and UN38.3 battery dossiers.",
    "",
    "## Product Categories & Solutions",
  ];

  if (solutionConfigs) {
    for (const [slug, config] of Object.entries(solutionConfigs)) {
      lines.push(`### ${config.title}`);
      lines.push(`- Category URL: ${baseUrl}/products/category/${slug}`);
      lines.push(`- Overview: ${config.description}`);
      lines.push("");
    }
  }

  lines.push("## Full Wholesale Product Directory");
  if (products && products.length > 0) {
    for (const p of products) {
      const slug = p.slug || "";
      const model = p.model ? ` (Model: ${p.model})` : "";
      const category = p.category ? ` [Category: ${p.category}]` : "";
      lines.push(`### [${p.name || "Product"}${model}](${baseUrl}/products/${slug})`);
      lines.push(`- URL: ${baseUrl}/products/${slug}`);
      if (p.category) lines.push(`- Type: ${p.category}`);
      if (p.shortDescription) lines.push(`- Description: ${p.shortDescription}`);

      if (Array.isArray(p.keySpecs) && p.keySpecs.length > 0) {
        const specsText = p.keySpecs
          .map((s) => `${s.specName || "Spec"}: ${s.specValue || ""}`)
          .filter(Boolean)
          .join(" | ");
        if (specsText) lines.push(`- Specifications: ${specsText}`);
      }
      lines.push("");
    }
  } else {
    lines.push(`Browse all active models at ${baseUrl}/products`);
    lines.push("");
  }

  if (posts && posts.length > 0) {
    lines.push("## Factory Engineering & B2B Sourcing Guides");
    lines.push(`- Sourcing Guides Hub: [${baseUrl}/blog](${baseUrl}/blog)`);
    for (const post of posts) {
      const desc = post.excerpt ? `: ${post.excerpt}` : "";
      lines.push(`- [${post.title}](${baseUrl}/blog/${post.slug})${desc}`);
    }
    lines.push("");
  }

  if (contactFaqs && contactFaqs.length > 0) {
    lines.push("## Frequently Asked B2B Questions");
    for (const faq of contactFaqs) {
      lines.push(`### Q: ${faq.question}`);
      lines.push(`A: ${faq.answer}`);
      lines.push("");
    }
  }

  lines.push("## Commercial Tools & Wholesale Inquiries");
  lines.push(`- Factory-Direct Wholesale Catalog: ${baseUrl}/products`);
  lines.push(`- Direct Factory Quotes & OEM Inquiries: ${baseUrl}/contact-us`);
  lines.push(`- Request a Custom Container Quote: ${baseUrl}/quotation`);
  lines.push(`- Download Solar Packages: ${baseUrl}/quotation/packages`);
  lines.push(`- Download Engineering Catalog: ${baseUrl}/catalog/download`);
  lines.push(`- Factory Sales Email: ${email}`);
  lines.push(`- Factory WhatsApp / Phone: ${phone}`);

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
