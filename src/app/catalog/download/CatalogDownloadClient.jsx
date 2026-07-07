"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import ExcelJS from "exceljs";
import Link from "next/link";
import { PiDownloadSimple, PiCheckCircle, PiWarningCircle, PiSpinnerGap, PiListChecks, PiFileXls } from "react-icons/pi";
import "./CatalogDownload.css";

const colors = {
  primary: 'FFFF7F41',   // Solar Orange
  secondary: 'FF121B2D', // Deep Tech Navy
  accent: 'FF2EC4B6',    // Innovation Teal
  white: 'FFFFFFFF',
  lightGray: 'FFF8F9FC',
  grayBg: 'FFF0F2F5',
  editableHint: 'FFFFFDF8',
  borderLight: 'FFEAEDF2',
  textMuted: 'FF6C727F',
};

const CATEGORIES = [
  { id: "battery", label: "Storage Batteries" },
  { id: "inverter", label: "Solar Inverters" },
  { id: "portable-power", label: "Portable Power Stations" },
  { id: "electric-mobility", label: "Electric Mobility" },
  { id: "power-bank", label: "Power Banks" },
  { id: "accessories", label: "Tech & Solar Accessories" }
];

const IMG_CELL_WIDTH = 20;
const MAX_DISPLAY_W = 120;
const MAX_DISPLAY_H = 85;
const ROW_HEIGHT = 95;

export default function CatalogDownloadClient() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category");
  
  // "form", "fetching_data", "generating_excel", "downloading", "complete", "error"
  const [status, setStatus] = useState("form");
  const [error, setError] = useState(null);
  const [selectedCats, setSelectedCats] = useState(CATEGORIES.map(c => c.id));
  const hasAutoFetched = useRef(false);

  useEffect(() => {
    // Auto-generate if accessed via a direct link with query parameters
    if (urlCategory && !hasAutoFetched.current) {
      hasAutoFetched.current = true;
      generateExcel(urlCategory);
    }
  }, [urlCategory]);

  const toggleCategory = (id) => {
    setSelectedCats(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedCats.length === CATEGORIES.length) {
      setSelectedCats([]);
    } else {
      setSelectedCats(CATEGORIES.map(c => c.id));
    }
  };

  const handleGenerateClick = () => {
    if (selectedCats.length === 0) {
      alert("Please select at least one category.");
      return;
    }
    generateExcel(selectedCats.join(","));
  };

  const resetForm = () => {
    setStatus("form");
    setError(null);
  };

  async function generateExcel(categoryString) {
    try {
      setStatus("fetching_data");
      const res = await fetch(`/api/catalog/data?category=${categoryString}`);
      const data = await res.json();
      
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to fetch catalog data");
      }

      setStatus("generating_excel");
      
      const workbook = new ExcelJS.Workbook();
      workbook.creator = 'JoyHand Energy';
      workbook.lastModifiedBy = 'JoyHand System';
      workbook.created = new Date();
      
      const sheet = workbook.addWorksheet('JoyHand Catalog', {
        pageSetup: { paperSize: 9, orientation: 'landscape', fitToPage: true, fitToWidth: 1, fitToHeight: 0 },
        views: [{ showGridLines: false }]
      });

      // Set column widths
      sheet.columns = [
        { width: IMG_CELL_WIDTH },
        { width: 18 },
        { width: 32 },
        { width: 45 },
        { width: 15 },
        { width: 12 },
        { width: 15 }
      ];

      // Fetch Logo
      try {
        const logoRes = await fetch('/images/logos/joyhand-logo.png');
        if (logoRes.ok) {
          const logoBlob = await logoRes.blob();
          const logoBuffer = await logoBlob.arrayBuffer();
          const logoId = workbook.addImage({ buffer: logoBuffer, extension: 'png' });
          sheet.addImage(logoId, {
            tl: { col: 0.15, row: 0.15 },
            ext: { width: 140, height: 40 },
            editAs: 'absolute'
          });
        }
      } catch (e) {
        console.warn("Logo fetch failed", e);
      }

      // Title
      sheet.mergeCells('C1:G1');
      const titleCell = sheet.getCell('C1');
      const titleText = data.isMultiCat ? 'JOYHAND ENERGY — COMBINED CATALOG PRICING' : `JOYHAND ENERGY — ${data.categories[0].categoryName.toUpperCase()} PRICING`;
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

      for (const catData of data.categories) {
        // Category Section Header
        sheet.mergeCells(`A${currentRow}:G${currentRow}`);
        const catCell = sheet.getCell(`A${currentRow}`);
        catCell.value = `   ${catData.categoryName.toUpperCase()}  —  ${catData.products.length} SKUs`;
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
        for (const product of catData.products) {
          const row = sheet.getRow(currentRow);
          row.height = ROW_HEIGHT;

          row.getCell(2).value = product.model;
          row.getCell(3).value = product.name;
          row.getCell(4).value = product.specs;
          row.getCell(5).value = '';
          row.getCell(6).value = 100;
          row.getCell(7).value = '';

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

          // Image embedding
          if (product.imageUrl) {
            try {
              const imgRes = await fetch(product.imageUrl);
              if (imgRes.ok) {
                const imgBlob = await imgRes.blob();
                const imgBuffer = await imgBlob.arrayBuffer();
                const imageId = workbook.addImage({ buffer: imgBuffer, extension: 'jpeg' });

                const origDim = product.originalDimensions;
                const ratio = Math.min(MAX_DISPLAY_W / origDim.width, MAX_DISPLAY_H / origDim.height);
                const finalW = origDim.width * ratio;
                const finalH = origDim.height * ratio;

                const colOffset = 0.1 + ((MAX_DISPLAY_W - finalW) / MAX_DISPLAY_W) / 2;
                const rowOffset = 0.1 + ((MAX_DISPLAY_H - finalH) / MAX_DISPLAY_H) / 2;

                sheet.addImage(imageId, {
                  tl: { col: colOffset, row: currentRow - 1 + rowOffset },
                  ext: { width: finalW, height: finalH },
                  editAs: 'absolute'
                });
              }
            } catch (imgErr) {
              console.warn(`Failed to embed image for ${product.name}`);
            }
          }

          currentRow++;
          rowIndex++;
        }
      }

      // Footer note
      currentRow++;
      sheet.mergeCells(`A${currentRow}:G${currentRow}`);
      const footerCell = sheet.getCell(`A${currentRow}`);
      footerCell.value = 'Prices subject to order volume. Contact sales@joyhand.com for a formal quotation.';
      footerCell.font = { name: 'Arial', size: 10, italic: true, color: { argb: colors.textMuted } };
      footerCell.alignment = { horizontal: 'center', vertical: 'middle' };

      setStatus("downloading");

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const downloadUrl = URL.createObjectURL(blob);
      
      const fileName = data.isMultiCat ? 'JoyHand-Combined-Catalog.xlsx' : `JoyHand-${data.categories[0].categoryName}-Catalog.xlsx`;

      // Trigger download
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);

      setStatus("complete");
    } catch (err) {
      console.error(err);
      setError(err.message);
      setStatus("error");
    }
  }

  return (
    <main className="catalog-download-page">
      <div className="catalog-download-container">
        
        {/* BUILDER FORM */}
        {status === "form" && (
          <div className="catalog-builder-card">
            
            {/* LEFT SIDE - Info */}
            <div className="catalog-builder-left">
              <div className="catalog-builder-header">
                <PiFileXls className="catalog-builder-icon" />
                <h1 className="catalog-builder-title">Custom Catalog Builder</h1>
                <p className="catalog-builder-desc">
                  Select the product categories you want to include in your customized Excel price list. 
                  Our system will dynamically generate a fully styled spreadsheet with up-to-date specifications and product images.
                </p>
              </div>
              
              <button 
                className="catalog-builder-submit-btn" 
                onClick={handleGenerateClick}
                disabled={selectedCats.length === 0}
              >
                Generate Custom Catalog
              </button>
            </div>

            {/* RIGHT SIDE - Controls */}
            <div className="catalog-builder-right">
              <div className="catalog-builder-actions-top">
                <button className="catalog-builder-select-all" onClick={toggleAll}>
                  <PiListChecks /> {selectedCats.length === CATEGORIES.length ? "Deselect All" : "Select All"}
                </button>
              </div>

              <div className="catalog-builder-grid">
                {CATEGORIES.map(cat => (
                  <label 
                    key={cat.id} 
                    className={`catalog-builder-checkbox-label ${selectedCats.includes(cat.id) ? 'selected' : ''}`}
                  >
                    <input 
                      type="checkbox" 
                      checked={selectedCats.includes(cat.id)}
                      onChange={() => toggleCategory(cat.id)}
                      className="catalog-builder-checkbox"
                    />
                    <span className="catalog-builder-checkbox-text">{cat.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* LOADING & COMPLETE STATES */}
        {status !== "form" && (
          <div className="catalog-download-card">
            <div className="catalog-download-icon-wrapper">
              {status === "error" && <PiWarningCircle className="catalog-download-icon error" />}
              {status === "complete" && <PiCheckCircle className="catalog-download-icon success" />}
              {(status === "fetching_data" || status === "generating_excel" || status === "downloading") && (
                <PiSpinnerGap className="catalog-download-icon spinner" />
              )}
            </div>
            
            <h1 className="catalog-download-title">
              {status === "error" && "Download Failed"}
              {status === "complete" && "Download Complete!"}
              {status === "fetching_data" && "Fetching Catalog Data"}
              {status === "generating_excel" && "Building Excel File"}
              {status === "downloading" && "Starting Download"}
            </h1>
            
            <p className="catalog-download-desc">
              {status === "error" && error}
              {status === "complete" && "Your JoyHand Excel catalog has been successfully generated and downloaded."}
              {status !== "error" && status !== "complete" && "Please wait while we dynamically generate your styled catalog with the latest product images and specifications. This may take a few seconds."}
            </p>

            <div className="catalog-download-actions">
              {status === "complete" && (
                <>
                  <button onClick={resetForm} className="catalog-download-btn secondary">Build Another</button>
                  <Link href="/" className="catalog-download-btn">Return to Home</Link>
                </>
              )}
              {status === "error" && (
                <button onClick={resetForm} className="catalog-download-btn">Try Again</button>
              )}
            </div>
          </div>
        )}
        
      </div>
    </main>
  );
}
