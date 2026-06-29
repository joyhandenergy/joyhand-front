import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';

/* ── Brand colors (reused from CatalogDocument.jsx) ── */
const colors = {
  primary: 'FFFF7F41',   // Solar Orange
  secondary: 'FF121B2D', // Deep Tech Navy
  accent: 'FF2EC4B6',    // Innovation Teal
  white: 'FFFFFFFF',
  lightGray: 'FFF8F9FC',
  grayBg: 'FFF0F2F5',    // Slightly deeper gray for category headers
  editableHint: 'FFFFFDF8',
  borderLight: 'FFEAEDF2',
  textMuted: 'FF6C727F',
};

/* ── Category metadata (mirrors CatalogDocument.jsx + siteData.js) ── */
const categoryMeta = {
  battery:            { name: "Storage Batteries",       fileName: "Storage-Batteries" },
  inverter:           { name: "Solar Inverters",         fileName: "Solar-Inverters" },
  "portable-power":   { name: "Portable Power Stations", fileName: "Portable-Power-Stations" },
  "electric-mobility":{ name: "Electric Mobility",       fileName: "Electric-Mobility" },
  "power-bank":       { name: "Power Banks",             fileName: "Power-Banks" },
  accessories:        { name: "Tech & Solar Accessories", fileName: "Tech-Accessories" },
};

const VALID_CATEGORIES = Object.keys(categoryMeta);

/* ── Extract concise key specs (max 4, short format) ── */
function getShortSpecs(product) {
  if (product.keySpecs && Array.isArray(product.keySpecs) && product.keySpecs.length > 0) {
    return product.keySpecs
      .slice(0, 4)
      .map(s => `${s.specName}: ${s.specValue}`)
      .join('\n');
  }
  const s = product.specifications || {};
  return Object.entries(s)
    .filter(([, val]) => typeof val === 'string')
    .slice(0, 4)
    .map(([key, val]) => {
      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase());
      return `${label}: ${val}`;
    })
    .join('\n');
}

/* ── Helper to extract original image dimensions from Sanity _ref ── */
function getDimensionsFromRef(ref) {
  const refStr = typeof ref === 'string' ? ref : (ref?.asset?._ref || '');
  const match = refStr.match(/-(\d+)x(\d+)-/);
  if (match) {
    return { width: parseInt(match[1]), height: parseInt(match[2]) };
  }
  return { width: 1, height: 1 }; // fallback
}

/* ── Image constants ── */
const IMG_CELL_WIDTH  = 20;   // Wider column for a premium feel
const MAX_DISPLAY_W   = 120;  // max px width rendered inside cell
const MAX_DISPLAY_H   = 85;   // max px height rendered inside cell
const ROW_HEIGHT      = 95;   // Increased row height for more breathing room

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const categoryParam = searchParams.get('category');

  let requestedCategories = [];
  if (!categoryParam) {
    return NextResponse.json(
      {
        error: 'Missing "category" query param.',
        validCategories: VALID_CATEGORIES,
        example: '/api/catalog/xlsx?category=power-bank,accessories OR ?category=all',
      },
      { status: 400 }
    );
  }

  if (categoryParam.toLowerCase() === 'all') {
    requestedCategories = VALID_CATEGORIES;
  } else {
    // Support comma-separated categories e.g. ?category=power-bank,accessories
    requestedCategories = categoryParam.split(',').map(c => c.trim()).filter(c => VALID_CATEGORIES.includes(c));
  }

  if (requestedCategories.length === 0) {
    return NextResponse.json({ error: 'Invalid categories provided.' }, { status: 400 });
  }

  try {
    /* ── 1. Fetch products for requested categories ── */
    const query = `*[_type == "product" && category in $categories]{
      name, model, category, shortDescription, description,
      keySpecs, specifications, mainImage, image, slug
    }`;
    const products = await client.fetch(query, { categories: requestedCategories });

    if (!products.length) {
      return NextResponse.json({ error: `No products found.` }, { status: 404 });
    }

    // Group products by category
    const groupedProducts = {};
    requestedCategories.forEach(cat => groupedProducts[cat] = []);
    products.forEach(p => {
      if (groupedProducts[p.category]) {
        groupedProducts[p.category].push(p);
      }
    });

    const isMultiCat = requestedCategories.length > 1;
    let sheetName = isMultiCat ? 'JoyHand Price List' : `${categoryMeta[requestedCategories[0]].name} Price List`;
    // Excel sheet names max out at 31 chars
    if (sheetName.length > 31) sheetName = sheetName.substring(0, 31);

    /* ── 2. Create workbook ── */
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'JoyHand Energy';
    workbook.created = new Date();

    const sheet = workbook.addWorksheet(sheetName);

    /* ── 3. Column widths ── */
    sheet.columns = [
      { key: 'image',     width: IMG_CELL_WIDTH },
      { key: 'model',     width: 18 },
      { key: 'product',   width: 36 },
      { key: 'specs',     width: 34 },
      { key: 'price',     width: 18 },
      { key: 'moq',       width: 12 },
      { key: 'leadTime',  width: 18 },
    ];

    /* ── 4. Branded header block (rows 1-5) ── */
    sheet.getRow(1).height = 36;
    sheet.getRow(2).height = 20;
    sheet.getRow(3).height = 18;
    sheet.getRow(4).height = 18;
    sheet.getRow(5).height = 12; // spacer

    // Logo
    try {
      const logoPath = path.join(process.cwd(), 'public', 'images', 'logos', 'joyhand-logo.png');
      const logoBuffer = fs.readFileSync(logoPath);
      const logoId = workbook.addImage({ buffer: logoBuffer, extension: 'png' });
      sheet.addImage(logoId, {
        tl: { col: 0.15, row: 0.15 },
        ext: { width: 140, height: 40 },
        editAs: 'absolute'
      });
    } catch { /* logo optional */ }

    // Title
    sheet.mergeCells('C1:G1');
    const titleCell = sheet.getCell('C1');
    const titleText = isMultiCat ? 'JOYHAND ENERGY — COMBINED CATALOG PRICING' : `JOYHAND ENERGY — ${categoryMeta[requestedCategories[0]].name.toUpperCase()} PRICING`;
    titleCell.value = titleText;
    titleCell.font = { name: 'Arial', size: 16, bold: true, color: { argb: colors.secondary } };
    titleCell.alignment = { horizontal: 'right', vertical: 'middle' };

    sheet.mergeCells('C2:G2');
    const badgeCell = sheet.getCell('C2');
    badgeCell.value = 'FACTORY DIRECT  •  ISO 9001:2015  •  CE  •  UL  •  UN38.3';
    badgeCell.font = { name: 'Arial', size: 10, bold: true, color: { argb: colors.primary } };
    badgeCell.alignment = { horizontal: 'right', vertical: 'middle' };

    sheet.mergeCells('C3:G3');
    const contactCell = sheet.getCell('C3');
    contactCell.value = 'Email: sales@joyhand.com   |   Tel: +86 186 0202 1144   |   Web: joyhand.com';
    contactCell.font = { name: 'Arial', size: 10, color: { argb: colors.secondary } };
    contactCell.alignment = { horizontal: 'right', vertical: 'middle' };

    sheet.mergeCells('C4:G4');
    const addrCell = sheet.getCell('C4');
    addrCell.value = 'No. 7 Nansha District, Guangzhou 511400, Guangdong, China';
    addrCell.font = { name: 'Arial', size: 10, color: { argb: colors.textMuted } };
    addrCell.alignment = { horizontal: 'right', vertical: 'middle' };

    // Accent line below header
    for (let c = 1; c <= 7; c++) {
      sheet.getRow(5).getCell(c).border = {
        bottom: { style: 'medium', color: { argb: colors.primary } },
      };
    }

    let currentRow = 6;

    /* ── 5. Render Each Category ── */
    for (const cat of requestedCategories) {
      const catProducts = groupedProducts[cat] || [];
      if (catProducts.length === 0) continue;

      const meta = categoryMeta[cat];

      // Category Section Header
      sheet.mergeCells(`A${currentRow}:G${currentRow}`);
      const catCell = sheet.getCell(`A${currentRow}`);
      catCell.value = `   ${meta.name.toUpperCase()}  —  ${catProducts.length} SKUs`;
      catCell.font = { name: 'Arial', size: 13, bold: true, color: { argb: colors.secondary } };
      catCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.grayBg } };
      catCell.alignment = { horizontal: 'left', vertical: 'middle' };
      catCell.border = { bottom: { style: 'thin', color: { argb: colors.accent } }, top: { style: currentRow > 6 ? 'medium' : 'none', color: { argb: colors.primary } } };
      sheet.getRow(currentRow).height = 36;
      currentRow++;

      // Column Headers
      const COL_HEADERS = ['Product Image', 'Model / SKU', 'Product Name', 'Key Specs', 'Unit Price (USD)', 'MOQ', 'Lead Time (Days)'];
      const headerRow = sheet.getRow(currentRow);
      headerRow.values = COL_HEADERS;
      headerRow.height = 30;
      headerRow.eachCell((cell) => {
        cell.font = { name: 'Arial', size: 11, bold: true, color: { argb: colors.white } };
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.secondary } };
        cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
        cell.border = {
          left: { style: 'thin', color: { argb: colors.secondary } },
          right: { style: 'thin', color: { argb: colors.secondary } },
          bottom: { style: 'medium', color: { argb: colors.primary } },
        };
      });
      currentRow++;

      // Product Rows
      let rowIndex = 0;
      for (const product of catProducts) {
        const row = sheet.getRow(currentRow);
        row.height = ROW_HEIGHT;

        const model = product.model || 'N/A';
        const productName = product.name || '';
        const specs = getShortSpecs(product);

        row.getCell(2).value = model;
        row.getCell(3).value = productName;
        row.getCell(4).value = specs;
        row.getCell(5).value = '';   // Price blank
        row.getCell(6).value = 100;  // MOQ default
        row.getCell(7).value = '';   // Lead Time blank

        // Style each cell
        const isEvenRow = rowIndex % 2 === 0;
        row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
          cell.font = { name: 'Arial', size: 10, color: { argb: 'FF2A2A2A' } };
          cell.alignment = { vertical: 'middle', horizontal: colNumber >= 5 ? 'center' : 'left', wrapText: true };
          cell.border = { bottom: { style: 'thin', color: { argb: colors.borderLight } } };

          if (colNumber === 2) {
            cell.font = { name: 'Arial', size: 10, bold: true, color: { argb: colors.primary } };
          }
          if (colNumber === 3) {
            cell.font = { name: 'Arial', size: 11, bold: true, color: { argb: colors.secondary } };
          }
          if (colNumber === 4) {
            cell.font = { name: 'Arial', size: 9.5, color: { argb: 'FF4A4A4A' } };
          }
          if (isEvenRow) {
            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.lightGray } };
          }
          if (colNumber === 5 || colNumber === 7) {
            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.editableHint } };
            cell.border = {
              bottom: { style: 'thin', color: { argb: colors.borderLight } },
              left: { style: 'thin', color: { argb: 'FFF0E6D2' } },
              right: { style: 'thin', color: { argb: 'FFF0E6D2' } },
            };
          }
        });

        // Embed image intelligently without cropping
        const imgRef = product.mainImage || product.image;
        if (imgRef) {
          try {
            const origDim = getDimensionsFromRef(imgRef);
            const ratio = Math.min(MAX_DISPLAY_W / origDim.width, MAX_DISPLAY_H / origDim.height);
            const finalW = origDim.width * ratio;
            const finalH = origDim.height * ratio;

            const imgUrl = urlFor(imgRef).width(400).fit('max').format('jpg').url();
            const response = await fetch(imgUrl);
            
            if (response.ok) {
              const arrayBuffer = await response.arrayBuffer();
              const imageId = workbook.addImage({
                buffer: Buffer.from(arrayBuffer),
                extension: 'jpeg',
              });

              const colOffset = 0.1 + ((MAX_DISPLAY_W - finalW) / MAX_DISPLAY_W) / 2;
              const rowOffset = 0.1 + ((MAX_DISPLAY_H - finalH) / MAX_DISPLAY_H) / 2;

              sheet.addImage(imageId, {
                tl: { col: colOffset, row: currentRow - 1 + rowOffset },
                ext: { width: finalW, height: finalH },
                editAs: 'absolute' // Helps a bit with copy/paste stability in some Excel versions
              });
            }
          } catch (imgErr) {
            console.warn(`Image fetch failed: ${product.name}`, imgErr.message);
          }
        }
        currentRow++;
        rowIndex++;
      }
    }

    /* ── 6. Footer note ── */
    currentRow++; // blank spacer row
    sheet.mergeCells(`A${currentRow}:G${currentRow}`);
    const footerCell = sheet.getCell(`A${currentRow}`);
    footerCell.value = 'Prices subject to order volume. Contact sales@joyhand.com for a formal quotation.';
    footerCell.font = { name: 'Arial', size: 10, italic: true, color: { argb: colors.textMuted } };
    footerCell.alignment = { horizontal: 'center', vertical: 'middle' };

    /* ── 7. Write & return ── */
    const buffer = await workbook.xlsx.writeBuffer();
    const fileName = isMultiCat ? 'JoyHand Combined Catalog Price List.xlsx' : `JoyHand ${categoryMeta[requestedCategories[0]].name} Catalog Price List.xlsx`;

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    });
  } catch (error) {
    console.error('Error generating Excel:', error);
    return new NextResponse(`Failed to generate Excel catalog: ${error.message}`, { status: 500 });
  }
}
