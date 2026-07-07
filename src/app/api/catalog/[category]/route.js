import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import { productData } from '@/data'; // fallback local data
import { urlFor } from '@/sanity/lib/image';

// Edge API
export const runtime = 'edge';

export async function GET(request, { params }) {
  const { category } = await params;
  
  // 1. Fetch from Sanity
  const query = `*[_type == "product" && category == $category]`;
  const sanityProducts = await client.fetch(query, { category });
  
  // 2. Fetch local fallback data
  const localProducts = productData.filter(p => p.category === category);
  
  // 3. Merge them, preferring Sanity
  const sanitySlugs = new Set(sanityProducts.map(p => p.slug?.current));
  
  // Normalize Sanity products to match the old local structure that the PDF expects
  const normalizedSanityProducts = sanityProducts.map(p => {
    // Convert Sanity keySpecs to old specification object for the PDF
    const specifications = {};
    if (p.keySpecs) {
      p.keySpecs.forEach(s => {
        // Simple mapping, though the PDF now will just read what we give it
        if (s.specName && s.specValue) {
           specifications[s.specName] = s.specValue;
        }
      });
    }

    // Handle Image
    let imageUrl = '';
    if (p.mainImage?.asset) {
      imageUrl = urlFor(p.mainImage).format('jpg').url();
    } else if (p.image) {
      imageUrl = typeof p.image === 'string' ? p.image : (p.image?.asset ? urlFor(p.image).format('jpg').url() : "");
    }

    return {
      id: p.slug?.current,
      name: p.name,
      model: p.model,
      category: p.category,
      description: p.shortDescription || (typeof p.description === 'string' ? p.description : 'Premium Energy Solution'),
      image: imageUrl,
      specifications: specifications,
      // Pass the Sanity keySpecs array directly so CatalogDocument can use it easily if we update it
      keySpecs: p.keySpecs || [],
      certifications: p.certifications || [],
    };
  });

  const mergedProducts = [
    ...normalizedSanityProducts,
    ...localProducts.filter(p => !sanitySlugs.has(p.slug || p.id))
  ];

  return NextResponse.json(mergedProducts);
}
