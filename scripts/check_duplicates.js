/**
 * check_duplicates.js
 * Checks for duplicates between user_data.json (new products to upload)
 * and import.ndjson (products already in Sanity accessories section).
 * Also checks for internal duplicates within each file.
 *
 * Duplicate detection keys:
 *   - modelSKU / model
 *   - slug.current
 *   - productName / name
 */

const fs = require('fs');

// ─── Load user_data.json ────────────────────────────────────────────────────
const userData = JSON.parse(fs.readFileSync('user_data.json', 'utf8'));

// ─── Load import.ndjson ──────────────────────────────────────────────────────
const importLines = fs.readFileSync('import.ndjson', 'utf8')
  .split('\n')
  .filter(l => l.trim());
const importData = importLines.map(l => JSON.parse(l));

// Filter only accessory products from import.ndjson
const accessoryImports = importData.filter(p => p.category === 'accessories');

console.log(`\n${'='.repeat(60)}`);
console.log(`  DUPLICATE CHECKER – JoyHand Sanity Accessory Products`);
console.log(`${'='.repeat(60)}`);
console.log(`  user_data.json  : ${userData.length} product(s)`);
console.log(`  import.ndjson   : ${importData.length} total | ${accessoryImports.length} accessories`);
console.log(`${'='.repeat(60)}\n`);

// ─── Helper ──────────────────────────────────────────────────────────────────
function normalize(str = '') {
  return str.toLowerCase().replace(/\s+/g, ' ').trim();
}

// ─── 1. Internal duplicates in user_data.json ────────────────────────────────
console.log('══ 1. Internal duplicates in user_data.json ══');
const seenSlugsU = {};
const seenSkusU  = {};
const seenNamesU = {};
let internalDups = 0;

userData.forEach((p, i) => {
  const slug = p.slug?.current || '';
  const sku  = normalize(p.modelSKU  || '');
  const name = normalize(p.productName || '');

  if (seenSlugsU[slug] !== undefined) {
    console.log(`  ⚠ SLUG  dup: "${slug}"  →  #${seenSlugsU[slug]+1} & #${i+1}`);
    internalDups++;
  } else { seenSlugsU[slug] = i; }

  if (seenSkusU[sku] !== undefined) {
    console.log(`  ⚠ SKU   dup: "${sku}"  →  #${seenSkusU[sku]+1} & #${i+1}`);
    internalDups++;
  } else { seenSkusU[sku] = i; }

  if (seenNamesU[name] !== undefined) {
    console.log(`  ⚠ NAME  dup: "${name}"  →  #${seenNamesU[name]+1} & #${i+1}`);
    internalDups++;
  } else { seenNamesU[name] = i; }
});

if (internalDups === 0) console.log('  ✔ No internal duplicates found.\n');
else console.log();

// ─── 2. Internal duplicates in import.ndjson (accessories only) ──────────────
console.log('══ 2. Internal duplicates in import.ndjson (accessories) ══');
const seenSlugsI = {};
const seenSkusI  = {};
const seenNamesI = {};
let importInternalDups = 0;

accessoryImports.forEach((p, i) => {
  const slug = p.slug?.current || '';
  const sku  = normalize(p.model || '');
  const name = normalize(p.name  || '');

  if (seenSlugsI[slug] !== undefined) {
    console.log(`  ⚠ SLUG  dup: "${slug}"  →  #${seenSlugsI[slug]+1} & #${i+1}`);
    importInternalDups++;
  } else { seenSlugsI[slug] = i; }

  if (seenSkusI[sku] !== undefined) {
    console.log(`  ⚠ SKU   dup: "${sku}"  →  #${seenSkusI[sku]+1} & #${i+1}`);
    importInternalDups++;
  } else { seenSkusI[sku] = i; }

  if (seenNamesI[name] !== undefined) {
    console.log(`  ⚠ NAME  dup: "${name}"  →  #${seenNamesI[name]+1} & #${i+1}`);
    importInternalDups++;
  } else { seenNamesI[name] = i; }
});

if (importInternalDups === 0) console.log('  ✔ No internal duplicates found.\n');
else console.log();

// ─── 3. Cross-file duplicates (user_data.json vs import.ndjson accessories) ──
console.log('══ 3. Cross-file duplicates (user_data.json vs import.ndjson accessories) ══');

const crossDups = [];

userData.forEach((u, ui) => {
  const uSlug = u.slug?.current || '';
  const uSku  = normalize(u.modelSKU  || '');
  const uName = normalize(u.productName || '');

  accessoryImports.forEach((imp, ii) => {
    const iSlug = imp.slug?.current || '';
    const iSku  = normalize(imp.model || '');
    const iName = normalize(imp.name  || '');

    const matchSlug = uSlug && uSlug === iSlug;
    const matchSku  = uSku  && uSku  === iSku;
    const matchName = uName && uName === iName;

    if (matchSlug || matchSku || matchName) {
      crossDups.push({
        userIdx   : ui + 1,
        importIdx : ii + 1,
        userName  : u.productName,
        importName: imp.name,
        matchSlug, matchSku, matchName
      });
    }
  });
});

if (crossDups.length === 0) {
  console.log('  ✔ No cross-file duplicates found.\n');
} else {
  console.log(`  ✘ Found ${crossDups.length} cross-file duplicate match(es):\n`);
  crossDups.forEach(d => {
    const flags = [];
    if (d.matchSlug) flags.push('SLUG');
    if (d.matchSku)  flags.push('SKU');
    if (d.matchName) flags.push('NAME');
    console.log(`  [user_data #${d.userIdx}] "${d.userName}"`);
    console.log(`       ↕ matches [import.ndjson #${d.importIdx}] "${d.importName}"`);
    console.log(`       Match field(s): ${flags.join(', ')}\n`);
  });
}

// ─── Summary ─────────────────────────────────────────────────────────────────
console.log(`${'='.repeat(60)}`);
console.log('  SUMMARY');
console.log(`${'='.repeat(60)}`);
console.log(`  user_data.json internal dups    : ${internalDups}`);
console.log(`  import.ndjson internal dups     : ${importInternalDups}`);
console.log(`  Cross-file duplicate matches    : ${crossDups.length}`);
console.log(`${'='.repeat(60)}\n`);
