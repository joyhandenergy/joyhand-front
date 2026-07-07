import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import { productData } from '@/data'; // fallback local data
import { urlFor } from '@/sanity/lib/image';

export const runtime = 'edge';

const categoryMeta = {
  battery:            { name: "Storage Batteries",       fileName: "Storage-Batteries" },
  inverter:           { name: "Solar Inverters",         fileName: "Solar-Inverters" },
  "portable-power":   { name: "Portable Power Stations", fileName: "Portable-Power-Stations" },
  "electric-mobility":{ name: "Electric Mobility",       fileName: "Electric-Mobility" },
  "power-bank":       { name: "Power Banks",             fileName: "Power-Banks" },
  accessories:        { name: "Tech & Solar Accessories", fileName: "Tech-Accessories" },
};

const VALID_CATEGORIES = Object.keys(categoryMeta);

function getShortSpecs(product) {
  if (product.keySpecs && Array.isArray(product.keySpecs) && product.keySpecs.length > 0) {
    return product.keySpecs
      .slice(0, 4)
      .map(s => `${s.specName}: ${s.specValue}`)
      .join('\n');
  }
  const s = product.specifications || {};
  return Object.entries(s)
    .filter(([, val]) => typeof val === 'string')
    .slice(0, 4)
    .map(([key, val]) => {
      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase());
      return `${label}: ${val}`;
    })
    .join('\n');
}

function getDimensionsFromRef(ref) {
  const refStr = typeof ref === 'string' ? ref : (ref?.asset?._ref || '');
  const match = refStr.match(/-(\d+)x(\d+)-/);
  if (match) {
    return { width: parseInt(match[1]), height: parseInt(match[2]) };
  }
  return { width: 1, height: 1 }; // fallback
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const categoryParam = searchParams.get('category');

  let requestedCategories = [];
  if (!categoryParam) {
    return NextResponse.json({ error: 'Missing "category" query param.' }, { status: 400 });
  }

  if (categoryParam.toLowerCase() === 'all') {
    requestedCategories = VALID_CATEGORIES;
  } else {
    requestedCategories = categoryParam.split(',').map(c => c.trim()).filter(c => VALID_CATEGORIES.includes(c));
  }

  if (requestedCategories.length === 0) {
    return NextResponse.json({ error: 'Invalid categories provided.' }, { status: 400 });
  }

  try {
    const query = `*[_type == "product" && category in $categories]{
      name, model, category, shortDescription, description,
      keySpecs, specifications, mainImage, image, slug
    }`;
    let sanityProducts = await client.fetch(query, { categories: requestedCategories });

    // Build map for uniqueness based on model
    const productMap = new Map();
    const localMatches = productData.filter(p => requestedCategories.includes(p.category));
    
    // Add local fallback
    for (const p of localMatches) {
      if (p.model) productMap.set(p.model.toLowerCase(), p);
    }
    // Overwrite with Sanity data
    for (const p of sanityProducts) {
      if (p.model) productMap.set(p.model.toLowerCase(), p);
    }

    const allProducts = Array.from(productMap.values());
    
    // Process and Group by category
    const groupedData = [];
    for (const cat of requestedCategories) {
      const catProducts = allProducts.filter(p => p.category === cat);
      if (catProducts.length === 0) continue;
      
      const meta = categoryMeta[cat];
      const processedProducts = catProducts.map(product => {
        let imageUrl = null;
        let originalDimensions = { width: 1, height: 1 };
        
        const imgRef = product.mainImage || product.image;
        if (imgRef) {
          try {
            originalDimensions = getDimensionsFromRef(imgRef);
            imageUrl = urlFor(imgRef).width(400).fit('max').format('jpg').url();
          } catch (e) {
            console.warn(`Failed to process image for ${product.name}`, e);
          }
        }
        
        return {
          model: product.model || 'N/A',
          name: product.name || '',
          specs: getShortSpecs(product),
          imageUrl,
          originalDimensions
        };
      });

      groupedData.push({
        categoryId: cat,
        categoryName: meta.name,
        fileName: meta.fileName,
        products: processedProducts
      });
    }

    return NextResponse.json({
      success: true,
      isMultiCat: requestedCategories.length > 1,
      categories: groupedData,
      generatedAt: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error fetching catalog data:', error);
    return NextResponse.json({ error: 'Failed to fetch catalog data: ' + error.message }, { status: 500 });
  }
}
