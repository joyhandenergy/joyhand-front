const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src/app').concat(walk('./src/components'));
const report = { missingH1: [], longTitles: [], missingAlt: [], emptyAlt: [] };

files.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  
  if (p.endsWith('page.js')) {
    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
    if (titleMatch && titleMatch[1].length > 60) {
      report.longTitles.push({ file: p, title: titleMatch[1], length: titleMatch[1].length });
    }
    
    // Check for H1 (case insensitive, ignoring attributes)
    if (!/<h1/i.test(content) && content.includes('export default')) {
      // Exclude api routes or layout files that don't need H1
      if (!p.includes('\\api\\') && !p.includes('/api/')) {
         report.missingH1.push(p);
      }
    }
  }

  // Find images without alt or empty alt
  // Regex looks for <Image ...> or <img ...>
  const imgRegex = /<(Image|img)\s+[^>]*>/gi;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const tag = match[0];
    if (!/alt=/i.test(tag)) {
      report.missingAlt.push({ file: p, tag: tag });
    } else if (/alt=(["'])\1/i.test(tag) || /alt=\{\s*(["'])\1\s*\}/i.test(tag)) {
      report.emptyAlt.push({ file: p, tag: tag });
    }
  }
});

console.log(JSON.stringify(report, null, 2));
