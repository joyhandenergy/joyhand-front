const { createClient } = require('@sanity/client');
const projectId = 'g5sj2mij'; // from .env.local
const dataset = 'production';

const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2023-01-01',
});

async function run() {
  const products = await client.fetch(`*[_type == "product"]{_id, name, seoTitle, metaDescription}`);
  console.log(`Found ${products.length} products`);
  
  for (let p of products) {
    let issue = false;
    let titleLength = p.seoTitle ? p.seoTitle.length : 0;
    let metaLength = p.metaDescription ? p.metaDescription.length : 0;
    
    if (titleLength > 60 || metaLength > 160) {
      console.log(`\nIssue with: ${p.name}`);
      if (titleLength > 60) console.log(`  Title length: ${titleLength} -> ${p.seoTitle}`);
      if (metaLength > 160) console.log(`  Meta length: ${metaLength} -> ${p.metaDescription}`);
    }
  }
}

run().catch(console.error);
