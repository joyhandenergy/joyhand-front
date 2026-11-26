/**
 * Shared SEO sanitization and formatting helpers for JoyHand pages.
 * Cleans legacy geo-stuffed copy, prevents duplicate "| JoyHand | JoyHand" titles,
 * and ensures meta descriptions are clean, natural B2B text.
 */

const COUNTRY_NAME_RE =
  /\b(?:Nigeria|Kenya|Pakistan|Ghana|Uganda|Tanzania|Bangladesh|Nepal|Morocco|South Africa|Sri Lanka)\b/gi;
const DEMONONYM_RE =
  /\b(?:Nigerian|Kenyan|Pakistani|Ghanaian|Ugandan|Tanzanian|Bangladeshi|Nepali|Moroccan|South African|Sri Lankan)\b/gi;

/**
 * Clean legacy country-stuffed phrases into natural B2B language
 * without injecting awkward "global markets" artifacts.
 */
export function cleanGeoText(text) {
  if (!text || typeof text !== "string") return text;

  return text
    .replace(/in South African,?\s+Morocco/gi, "across urban passenger fleets")
    .replace(/in Kenya and Tanzania/gi, "across commercial and municipal fleets")
    .replace(/in Bangladesh and Ghana/gi, "across last-mile logistics fleets")
    .replace(/in Nigeria and Pakistan/gi, "across commercial and industrial fleets")
    .replace(/in Nigeria and Kenya/gi, "for commercial and residential transport")
    .replace(/in Kenya and Pakistan/gi, "across commercial fleets and campus transit")
    .replace(/in Ghana and Tanzania/gi, "across passenger transit and taxi fleets")
    .replace(/in Bangladesh and Nepal/gi, "across urban logistics and transit fleets")
    .replace(/in Pakistan and Bangladesh/gi, "across urban commuter and commercial fleets")
    .replace(/in Nigeria,?\s*Kenya,?\s*and Pakistan/gi, "across municipal and emergency response fleets")
    .replace(
      /(?:for|in)\s+(?:Nigerian|Pakistani|Ghanaian|Kenyan|Tanzanian|Ugandan|Moroccan|Bangladeshi|South African|Sri Lankan)\s+(?:and\s+(?:Pakistani|Ghanaian|Kenyan|Tanzanian|Ugandan|Moroccan|Bangladeshi|South African|Sri Lankan)\s+)?(?:riders|roads|highways|enthusiasts|delivery fleets)/gi,
      "for urban commuter and commercial delivery fleets"
    )
    .replace(
      /(?:in|for)\s+(?:Nigeria|Pakistan|Kenya|Ghana|Tanzania|Uganda|Bangladesh|Nepal|Morocco|South Africa|Sri Lanka)\s+(?:and|,)\s+(?:Nigeria|Pakistan|Kenya|Ghana|Tanzania|Uganda|Bangladesh|Nepal|Morocco|South Africa|Sri Lanka)/gi,
      "for commercial and municipal fleets"
    )
    .replace(/,\s*[A-Za-z ]+\s+fuel saver\.,?/gi, ".")
    .replace(/[A-Za-z ]+\s+fuel saver\.,?/gi, "")
    .replace(/,\s*delivery scooter\s*$/gi, "")
    .replace(/Uganda premium capacity bulk\.,?/gi, "Premium capacity wholesale.")
    .replace(/Uganda no grid needed\.,?/gi, "Premium off-grid hardware.")
    .replace(/Uganda off-grid storage\.,?/gi, "High-reliability storage.")
    .replace(/Uganda constant connect/gi, "Fast connectivity")
    .replace(/Lagos and Nairobi/gi, "regional commercial hubs")
    .replace(/Lagos to Dhaka/gi, "Urban Commuter & Delivery")
    .replace(/Karachi and Dhaka/gi, "commercial logistics fleets")
    .replace(/\bPHCN(?:\s+supply)?\b/gi, "grid power")
    .replace(/\s*[–—|,-]?\s*\bWholesale\s+Africa\b/gi, "")
    .replace(/\b(?:across|in|for)\s+Africa\b/gi, "globally")
    // Enforce "built to [Standard] standards" instead of claiming certificate ownership
    .replace(/(?:built to|manufactured to|compliant with)\s+((?:UL\s*\d+|UN\s*38\.3|ISO\s*\d+(?::\d+)?|CE|IEC|FCC|RoHS|DOT|EEC|COC|EN\s*\d+)(?:\s*[,/&]\s*(?:UL\s*\d+|UN\s*38\.3|ISO\s*\d+(?::\d+)?|CE|IEC|FCC|RoHS|DOT|EEC|COC|EN\s*\d+))*)\s+certified\b/gi, "built to $1 standards")
    .replace(/\b((?:UL\s*\d+|UN\s*38\.3|ISO\s*\d+(?::\d+)?|CE|IEC|FCC|RoHS|DOT|EEC|COC|EN\s*\d+)(?:\s*[,/&]\s*(?:UL\s*\d+|UN\s*38\.3|ISO\s*\d+(?::\d+)?|CE|IEC|FCC|RoHS|DOT|EEC|COC|EN\s*\d+))*)\s+certified\b/gi, "built to $1 standards")
    .replace(/\bbuilt to\s+built to\b/gi, "built to")
    .replace(/\bstandards\s+standards\b/gi, "standards")
    .replace(/(^|[.!?]\s+)built to\b/g, "$1Built to")
    .replace(/\bcertified\b/gi, "standard-compliant")
    .replace(DEMONONYM_RE, "commercial")
    // Strip trailing/standalone country names cleanly (e.g. "10kWh Battery Bangladesh" -> "10kWh Battery")
    .replace(/\s*[–—|,-]?\s*(?:for|in)\s+(?:Nigeria|Kenya|Pakistan|Ghana|Uganda|Tanzania|Bangladesh|Nepal|Morocco|South Africa|Sri Lanka)\b/gi, "")
    .replace(COUNTRY_NAME_RE, "")
    // Clean any leftover "global markets, global markets" or trailing "global markets"
    .replace(/\bglobal markets\s*,\s*global markets\b/gi, "global B2B markets")
    .replace(/\s*[–—|,-]?\s*\bglobal markets\b\s*$/gi, "")
    // Clean orphaned prepositions & punctuation left after removals (e.g. "built for off-grid and.")
    .replace(/\s+\b(?:for|in|across|with|to)\s+and\s*\./gi, ".")
    .replace(/\s+\band\s*\./gi, ".")
    .replace(/\s+\b(?:for|in|across|with|to)\s*\./gi, ".")
    .replace(/\s+([,.;:])/g, "$1")
    .replace(/[,;:]+\s*\./g, ".")
    .replace(/\s*,\s*,+/g, ",")
    .replace(/\.+/g, ".")
    .replace(/,\s*$/g, ".")
    .replace(/([–—|-])\s*$/g, "")
    .replace(/^\s*([–—|,-])\s*/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/**
 * Sanitize all text fields of a product object (including product.name).
 */
export function sanitizeProductForSeo(product) {
  if (!product) return product;

  if (product.name) product.name = cleanGeoText(product.name);
  if (product.shortDescription) product.shortDescription = cleanGeoText(product.shortDescription);
  if (product.fullProductDescription) product.fullProductDescription = cleanGeoText(product.fullProductDescription);
  if (product.metaDescription) product.metaDescription = cleanGeoText(product.metaDescription);
  if (product.seoTitle) product.seoTitle = cleanGeoText(product.seoTitle);

  if (Array.isArray(product.description)) {
    product.description = product.description.map((block) => {
      if (block?.children) {
        return {
          ...block,
          children: block.children.map((child) => ({
            ...child,
            text: cleanGeoText(child.text),
          })),
        };
      }
      return block;
    });
  }

  if (Array.isArray(product.features)) {
    product.features = product.features.map((f) => cleanGeoText(f));
  }
  if (Array.isArray(product.keySpecs)) {
    product.keySpecs = product.keySpecs.map((spec) => ({
      ...spec,
      specName: cleanGeoText(spec.specName),
      specValue: cleanGeoText(spec.specValue),
    }));
  }
  if (Array.isArray(product.fullSpecs)) {
    product.fullSpecs = product.fullSpecs.map((spec) => ({
      ...spec,
      specName: cleanGeoText(spec.specName),
      specValue: cleanGeoText(spec.specValue),
    }));
  }

  return product;
}

/**
 * Strip duplicate brand suffixes and format a clean <= 60 char SEO title
 * ending once with " | JoyHand".
 */
export function formatSeoTitle(rawTitle, brand = "JoyHand") {
  let base = cleanGeoText(rawTitle || "");

  // Strip any existing "| JoyHand Blog", "| JoyHand Energy", "| JoyHand", "- JoyHand" suffixes
  while (/\s*[|\-–—]\s*JoyHand(?:\s+(?:Blog|Energy))?\s*$/i.test(base)) {
    base = base.replace(/\s*[|\-–—]\s*JoyHand(?:\s+(?:Blog|Energy))?\s*$/i, "").trim();
  }

  const suffix = ` | ${brand}`;
  const maxBaseLen = 64 - suffix.length;

  if (base.length > maxBaseLen) {
    const sliced = base.slice(0, maxBaseLen);
    const lastSpace = sliced.lastIndexOf(" ");
    base = (lastSpace > 20 ? sliced.slice(0, lastSpace) : sliced).replace(/[\s,.\-–—|:]+$/, "");
  }

  return base ? `${base}${suffix}` : brand;
}

/**
 * Clean and format a meta description to 120–155 characters without bullet/checkmark noise.
 */
export function formatSeoDescription(rawDesc, fallbackDesc = "") {
  const sanitize = (str) =>
    cleanGeoText(str || "")
      .replace(/[✓✔•·⚡★☆►▪]/g, " ")
      .replace(/\bKey Features\s*:?\s*/gi, "")
      .replace(/\s{2,}/g, " ")
      .trim();

  let desc = sanitize(rawDesc);
  if (!desc || desc.length < 60) {
    desc = sanitize(fallbackDesc) || desc;
  }

  if (desc.length < 110) {
    const addition = " Factory-direct B2B OEM/ODM wholesale supply from JoyHand.";
    if ((desc + addition).length <= 155) {
      desc = desc.replace(/[.!?]*$/, ".") + addition;
    }
  }

  if (desc.length > 155) {
    const sliced = desc.slice(0, 152);
    const lastSpace = sliced.lastIndexOf(" ");
    desc = (lastSpace > 80 ? sliced.slice(0, lastSpace) : sliced).replace(/[\s,.;:\-–—]+$/, "") + "...";
  }

  return desc;
}
