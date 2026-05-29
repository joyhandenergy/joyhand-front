import fs from 'fs';
import path from 'path';
import { getCliClient } from 'sanity/cli';

async function main() {
  const client = getCliClient();
  console.log('Sanity Client initialized.');
  
  // 1. Fetch products from Sanity to get their IDs and Slugs
  const sanityProducts = await client.fetch(`*[_type == "product"]{ _id, "slug": slug.current }`);
  console.log(`Found ${sanityProducts.length} products in Sanity.`);

  // 2. We need the local mappings. We can parse the src/data/productsData.js by simple string matching,
  // or because we are in ES Modules we can try to dynamically import it.
  let localProducts = [];
  try {
    // Dynamic import might work because this script is run via Babel/Vite by sanity exec
    const mod = await import('../src/data/productsData.js');
    localProducts = mod.productData;
    console.log(`Loaded ${localProducts.length} local products.`);
  } catch (err) {
    console.error("Failed to load local productsData.js", err);
    return;
  }

  // Helper to upload a single file path and return the asset reference
  const uploadImage = async (filePath) => {
    try {
      const fullPath = path.join(process.cwd(), 'public', filePath);
      if (!fs.existsSync(fullPath)) {
        console.log(`  [Warning] File not found: ${fullPath}`);
        return null;
      }
      console.log(`  Uploading ${filePath}...`);
      const asset = await client.assets.upload('image', fs.createReadStream(fullPath), {
        filename: path.basename(filePath)
      });
      return {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: asset._id
        }
      };
    } catch (err) {
      console.error(`  [Error] Failed to upload ${filePath}:`, err.message);
      return null;
    }
  };

  for (const sProduct of sanityProducts) {
    const lProduct = localProducts.find(p => p.slug === sProduct.slug);
    if (!lProduct) {
      console.log(`Skipping ${sProduct.slug} (not found locally)`);
      continue;
    }

    let mainImageAsset = null;
    let galleryAssets = [];

    console.log(`Processing: ${sProduct.slug}`);

    // Upload Main Image
    if (lProduct.image) {
      mainImageAsset = await uploadImage(lProduct.image);
    }

    // Upload Gallery Images
    if (lProduct.gallery && Array.isArray(lProduct.gallery)) {
      for (const gImg of lProduct.gallery) {
        const gAsset = await uploadImage(gImg);
        if (gAsset) {
          // Add Sanity _key for array items
          gAsset._key = Math.random().toString(36).substring(7);
          galleryAssets.push(gAsset);
        }
      }
    }

    // Update Sanity document
    if (mainImageAsset || galleryAssets.length > 0) {
      const patch = client.patch(sProduct._id);
      if (mainImageAsset) {
        patch.set({ mainImage: mainImageAsset });
      }
      if (galleryAssets.length > 0) {
        patch.set({ gallery: galleryAssets });
      }
      await patch.commit();
      console.log(`  -> Successfully patched ${sProduct.slug} with images.`);
    }
  }

  console.log('Image upload complete!');
}

main().catch(console.error);
