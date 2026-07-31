const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const input = path.join(__dirname, '../public/videos/heroImg/hero-poster.jpg');
const output = path.join(__dirname, '../public/videos/heroImg/hero-poster.webp');

sharp(input)
  .webp({ quality: 80 })
  .toFile(output)
  .then(() => {
    console.log('Successfully converted hero-poster.jpg to hero-poster.webp');
  })
  .catch(err => {
    console.error('Error converting image:', err);
  });
