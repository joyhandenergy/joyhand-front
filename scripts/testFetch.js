import { getCliClient } from 'sanity/cli';

async function main() {
  const client = getCliClient();
  const products = await client.fetch(`*[_type == "product" && slug.current == "backpack-battery-60-8v-12ah-15ah"]{ _id, name, "slug": slug.current, features, _updatedAt }`);
  console.log(JSON.stringify(products, null, 2));
}
main().catch(console.error);
