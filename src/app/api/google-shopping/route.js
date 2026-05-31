import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import { productData } from '@/data'; // local fallback data
import { urlFor } from '@/sanity/lib/image';

export const revalidate = 3600; // Cache for 1 hour
export const runtime = 'edge';

// Helper function to escape XML special characters
const escapeXml = (unsafe) => {
  if (!unsafe) return '';
  return String(unsafe).replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
};

export async function GET() {
  try {
    // 1. Fetch from Sanity
    const query = `*[_type == "product"]`;
    const sanityProducts = await client.fetch(query);
    
    // 2. Fetch local fallback data
    const localProducts = productData || [];
    
    // 3. Merge them, preferring Sanity
    const sanitySlugs = new Set(sanityProducts.map(p => p.slug?.current));
    
    const normalizedSanityProducts = sanityProducts.map(p => {
      let imageUrl = '';
      if (p.mainImage) {
        imageUrl = urlFor(p.mainImage).format('jpg').url();
      } else if (p.image) {
        imageUrl = typeof p.image === 'string' ? p.image : urlFor(p.image).format('jpg').url();
      }

      return {
        id: p.slug?.current,
        name: p.name,
        model: p.model,
        description: p.shortDescription || (typeof p.description === 'string' ? p.description : 'Premium Energy Solution'),
        image: imageUrl,
        price: p.price || 0, // Fallback price
      };
    });

    const mergedProducts = [
      ...normalizedSanityProducts,
      ...localProducts.filter(p => !sanitySlugs.has(p.slug || p.id))
    ];

    // Start XML string
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>JoyHand Energy Products</title>
    <link>https://www.joyhand.com</link>
    <description>Direct factory wholesale of LFP batteries, hybrid inverters, e-mobility solutions, and portable power stations.</description>
`;

    // Add each product to the XML feed
    mergedProducts.forEach((product) => {
      // Ensure we have an ID and name
      if (!product.id || !product.name) return;

      const title = product.name;
      const description = product.description || title;
      const link = `https://www.joyhand.com/products/${product.id}`; // Using current products/ structure
      const imageUrl = product.image && product.image.startsWith('/') 
        ? `https://www.joyhand.com${product.image}` 
        : product.image;
      
      // Price is strictly required by Google Merchant. Defaulting to 0.00 USD for B2B/Quote mode.
      const price = product.price ? `${product.price} USD` : `0.00 USD`; 
      const mpn = product.model || product.id;

      xml += `
    <item>
      <g:id>${escapeXml(product.id)}</g:id>
      <g:title>${escapeXml(title)}</g:title>
      <g:description>${escapeXml(description)}</g:description>
      <g:link>${escapeXml(link)}</g:link>
      <g:image_link>${escapeXml(imageUrl)}</g:image_link>
      <g:condition>new</g:condition>
      <g:availability>in_stock</g:availability>
      <g:price>${price}</g:price>
      <g:brand>JoyHand</g:brand>
      <g:mpn>${escapeXml(mpn)}</g:mpn>
    </item>`;
    });

    xml += `
  </channel>
</rss>`;

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
        // Instruct browsers and edge networks to cache this
        'Cache-Control': 's-maxage=3600, stale-while-revalidate',
      },
    });
  } catch (error) {
    console.error("Error generating Google Shopping Feed:", error);
    return new NextResponse("Error generating feed", { status: 500 });
  }
}
