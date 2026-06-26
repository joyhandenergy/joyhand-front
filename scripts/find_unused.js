const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  
  files.forEach((file) => {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });
  return arrayOfFiles;
}

const publicFiles = getAllFiles(publicDir);
const srcFiles = getAllFiles(srcDir).filter(f => f.match(/\.(js|jsx|css|json|ts|tsx)$/));

console.log(`Found ${publicFiles.length} files in public/`);
console.log(`Found ${srcFiles.length} files in src/`);

const srcContents = srcFiles.map(f => fs.readFileSync(f, 'utf8')).join('\n');

const unusedFiles = [];
publicFiles.forEach(file => {
  const relPath = file.replace(publicDir, '').replace(/\\/g, '/');
  const filename = path.basename(file);
  
  // Exclude some base things like favicon, robots.txt, etc if needed.
  // We'll check if the relative path OR filename is in the srcContents
  if (!srcContents.includes(filename) && !srcContents.includes(relPath)) {
    unusedFiles.push(file);
  }
});

console.log(`Found ${unusedFiles.length} unused files:`);
unusedFiles.forEach(f => {
    console.log(f);
    // Be careful with deletion, we should output them and manually verify or script deletion later.
});
