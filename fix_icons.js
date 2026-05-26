const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach((file) => {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      if (file.match(/\.(js|jsx)$/)) {
        arrayOfFiles.push(path.join(dirPath, '/', file));
      }
    }
  });
  return arrayOfFiles;
}

const files = getAllFiles(path.join(process.cwd(), 'src'));
let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Find import { ... } from 'react-icons/...'
  const importRegex = /import\s*\{([^}]+)\}\s*from\s*['"]react-icons\/[^'"]+['"];?/g;
  
  content = content.replace(importRegex, (match, importsStr) => {
    const icons = importsStr.split(',').map(s => s.trim()).filter(Boolean);
    const usedIcons = [];
    
    const contentWithoutThisImport = originalContent.replace(match, '');
    
    icons.forEach(icon => {
      const usageRegex = new RegExp('\\b' + icon + '\\b');
      if (usageRegex.test(contentWithoutThisImport)) {
        usedIcons.push(icon);
      } else {
        console.log('Removed unused icon ' + icon + ' from ' + file);
      }
    });
    
    if (usedIcons.length === 0) {
      return ''; // remove entire import
    } else {
      return match.replace(importsStr, ' ' + usedIcons.join(', ') + ' ');
    }
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    changedCount++;
  }
});

console.log('Fixed unused icons in ' + changedCount + ' files.');
