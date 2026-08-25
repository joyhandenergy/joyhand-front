const fs = require('fs');
const css = require('css');

const code = fs.readFileSync('src/app/products/Products.css', 'utf8');

try {
  const ast = css.parse(code, { silent: false });
  console.log('CSS is valid!');
} catch (error) {
  console.error('CSS parsing error:', error.message);
  console.error('Line:', error.line);
  console.error('Column:', error.column);
}
