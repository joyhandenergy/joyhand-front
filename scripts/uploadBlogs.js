import fs from 'fs';
import path from 'path';
import { getCliClient } from 'sanity/cli';
import { randomUUID } from 'crypto';

async function main() {
  const client = getCliClient();
  console.log('Sanity Client initialized.');
  
  let localBlogs = [];
  try {
    const mod = await import('../src/data/blogData.js');
    localBlogs = mod.blogPosts;
    console.log(`Loaded ${localBlogs.length} local blog posts.`);
  } catch (err) {
    console.error("Failed to load local blogData.js", err);
    return;
  }

  // 1. Handle Categories
  console.log('Processing categories...');
  const existingCategories = await client.fetch(`*[_type == "category"]{ _id, title }`);
  const categoryMap = {}; // Maps title to _id
  for (const cat of existingCategories) {
    categoryMap[cat.title] = cat._id;
  }

  for (const blog of localBlogs) {
    if (blog.category && !categoryMap[blog.category]) {
      console.log(`Creating new category: ${blog.category}`);
      const newCat = await client.create({
        _type: 'category',
        title: blog.category,
        slug: { _type: 'slug', current: blog.category.toLowerCase().replace(/\s+/g, '-') }
      });
      categoryMap[blog.category] = newCat._id;
    }
  }

  // Helper to upload a single file path and return the asset reference
  const uploadImage = async (filePath) => {
    try {
      if (!filePath) return null;
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

  // Helper to convert plain text with double newlines into Portable Text blocks
  const textToPortableText = (text) => {
    if (!text) return [];
    const paragraphs = text.split('\n\n');
    return paragraphs.map((para) => {
      const isHeading = para.length < 60 && !para.trim().endsWith('.');
      return {
        _type: 'block',
        _key: randomUUID(),
        style: isHeading ? 'h3' : 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: randomUUID(),
            text: para.trim(),
            marks: []
          }
        ]
      };
    });
  };

  // 2. Handle Blog Posts
  const existingPosts = await client.fetch(`*[_type == "post"]{ _id, "slug": slug.current }`);
  
  for (const lBlog of localBlogs) {
    const existing = existingPosts.find(p => p.slug === lBlog.slug);
    
    console.log(`Processing blog post: ${lBlog.slug}`);
    
    // Upload image
    let mainImageAsset = null;
    if (lBlog.image) {
      mainImageAsset = await uploadImage(lBlog.image);
    }

    const docUpdates = {
      title: lBlog.title,
      metaTitle: lBlog.metaTitle,
      metaDescription: lBlog.metaDescription,
      excerpt: lBlog.excerpt,
      readTime: lBlog.readTime,
      body: textToPortableText(lBlog.content),
    };

    if (mainImageAsset) {
      docUpdates.mainImage = mainImageAsset;
    }

    if (lBlog.category && categoryMap[lBlog.category]) {
      docUpdates.categories = [
        {
          _type: 'reference',
          _key: randomUUID(),
          _ref: categoryMap[lBlog.category]
        }
      ];
    }

    if (existing) {
      console.log(`Patching existing post ${lBlog.slug}...`);
      await client.patch(existing._id).set(docUpdates).commit();
    } else {
      console.log(`Creating new post ${lBlog.slug}...`);
      await client.create({
        _type: 'post',
        slug: { _type: 'slug', current: lBlog.slug },
        publishedAt: new Date().toISOString(),
        ...docUpdates
      });
    }
    console.log(`  -> Successfully processed ${lBlog.slug}`);
  }

  console.log('Blog migration complete!');
}

main().catch(console.error);
