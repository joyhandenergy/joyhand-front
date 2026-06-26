const fs = require('fs');
const crypto = require('crypto');

function generateRandomKey() {
  return crypto.randomBytes(8).toString('hex');
}

function processData() {
  const fileData = fs.readFileSync('user_data.json', 'utf8');
  const products = JSON.parse(fileData);

  const formattedProducts = products.map(item => {
    return {
      _type: 'product',
      name: item.productName,
      model: item.modelSKU,
      slug: item.slug,
      category: 'accessories', // The user requested accessary (Accessories & Tech)
      shortDescription: item.shortDescription,
      description: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              marks: [],
              text: item.fullProductDescription || item.shortDescription
            }
          ]
        }
      ],
      keySpecs: (item.keySpecifications || []).map(spec => ({
        _key: generateRandomKey(),
        specName: spec.label,
        specValue: spec.value
      })),
      fullSpecs: (item.fullSpecificationsTable || []).map(spec => ({
        _key: generateRandomKey(),
        specName: spec.label,
        specValue: spec.value
      })),
      features: item.keyFeatures || [],
      seoTitle: item.seoTitle || item.productName,
      metaDescription: item.metaDescription || item.shortDescription,
      faq: (item.faqs || []).map(f => ({
        _key: generateRandomKey(),
        question: f.question,
        answer: f.answer
      }))
    };
  });

  const ndjson = formattedProducts.map(p => JSON.stringify(p)).join('\n');
  fs.writeFileSync('user_data.ndjson', ndjson);
  console.log(`Generated user_data.ndjson with ${formattedProducts.length} products`);
}

processData();
