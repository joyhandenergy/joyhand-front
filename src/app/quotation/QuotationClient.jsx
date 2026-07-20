"use client";

import { useState } from "react";
import ExcelJS from "exceljs";
import { PiDownloadSimple, PiSpinnerGap, PiBatteryFull, PiLightning } from "react-icons/pi";
import "./Quotation.css";

const colors = {
  primary: 'FFFF7F41',   // Solar Orange
  secondary: 'FF121B2D', // Deep Tech Navy
  accent: 'FF2EC4B6',    // Innovation Teal
  white: 'FFFFFFFF',
  lightGray: 'FFF8F9FC',
  grayBg: 'FFF0F2F5',
  textMuted: 'FF6C727F',
};

const QUOTATION_DATA = [
  {
    category: "LFP Battery",
    warranty: "5 Years",
    terms: "EXW",
    icon: <PiBatteryFull />,
    headers: ["Model", "Specs", "BMS", "Unit Price (USD)"],
    products: [
      { model: "W24100", specs: "25.6V 100Ah", bms: "100A", price: 342 },
      { model: "W24100", specs: "25.6V 100Ah", bms: "150A", price: 354 },
      { model: "W24200", specs: "25.6V 200Ah", bms: "200A", price: 594 },
      { model: "W51100", specs: "51.2V 100Ah", bms: "100A", price: 558 },
      { model: "W51100", specs: "51.2V 100Ah", bms: "150A", price: 570 },
      { model: "F51200", specs: "51.2V 200Ah", bms: "200A", price: 1104 },
      { model: "F51314", specs: "51.2V 314Ah", bms: "200A", price: 1620 },
    ]
  },
  {
    category: "Hybrid Inverter",
    warranty: "15 Months",
    terms: "EXW",
    icon: <PiLightning />,
    headers: ["Model", "Specs", "MPPT", "Unit Price (USD)"],
    products: [
      { model: "BN3500", specs: "24V 3.5KW", mppt: "100A", price: 144 },
      { model: "BN4200", specs: "24V 4.2KW", mppt: "100A", price: 162 },
      { model: "BN6200", specs: "48V 6.2KW", mppt: "120A", price: 180 },
      { model: "BN8500", specs: "48V 8.5KW", mppt: "140A", price: 330 },
      { model: "BN11000", specs: "48V 11KW", mppt: "160A", price: 336 },
      { model: "BN11000+", specs: "48V 11KW Support Parallel", mppt: "160A", price: 378 },
    ]
  }
];

export default function QuotationClient() {
  const [isGenerating, setIsGenerating] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price);
  };

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      const workbook = new ExcelJS.Workbook();
      workbook.creator = 'JoyHand Energy';
      workbook.lastModifiedBy = 'JoyHand System';
      workbook.created = new Date();
      
      const sheet = workbook.addWorksheet('Quotation', {
        pageSetup: { paperSize: 9, orientation: 'portrait', fitToPage: true, fitToWidth: 1, fitToHeight: 0 },
        views: [{ showGridLines: false }]
      });

      // Set column widths (no image column)
      sheet.columns = [
        { width: 20 }, // Model
        { width: 35 }, // Specs
        { width: 15 }, // BMS / MPPT
        { width: 20 }  // Price
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
      sheet.mergeCells('B1:D1');
      const titleCell = sheet.getCell('B1');
      titleCell.value = 'JOYHAND ENERGY — CUSTOMER QUOTATION';
      titleCell.font = { name: 'Arial', size: 16, bold: true, color: { argb: colors.secondary } };
      titleCell.alignment = { horizontal: 'right', vertical: 'middle' };

      sheet.mergeCells('B2:D2');
      const badgeCell = sheet.getCell('B2');
      badgeCell.value = 'FACTORY DIRECT PRICING';
      badgeCell.font = { name: 'Arial', size: 10, bold: true, color: { argb: colors.primary } };
      badgeCell.alignment = { horizontal: 'right', vertical: 'middle' };

      sheet.mergeCells('B3:D3');
      const contactCell = sheet.getCell('B3');
      contactCell.value = 'Email: sales@joyhand.com   |   Tel: +86 186 0202 1144   |   Web: joyhand.com';
      contactCell.font = { name: 'Arial', size: 10, color: { argb: colors.secondary } };
      contactCell.alignment = { horizontal: 'right', vertical: 'middle' };

      // Accent line below header
      for (let c = 1; c <= 4; c++) {
        sheet.getRow(4).getCell(c).border = {
          bottom: { style: 'medium', color: { argb: colors.primary } },
        };
      }

      let currentRow = 6;

      for (const section of QUOTATION_DATA) {
        // Category Header
        sheet.mergeCells(`A${currentRow}:D${currentRow}`);
        const catCell = sheet.getCell(`A${currentRow}`);
        catCell.value = `   ${section.category.toUpperCase()}`;
        catCell.font = { name: 'Arial', size: 13, bold: true, color: { argb: colors.secondary } };
        catCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.grayBg } };
        catCell.alignment = { horizontal: 'left', vertical: 'middle' };
        catCell.border = { bottom: { style: 'thin', color: { argb: colors.accent } }, top: { style: currentRow > 6 ? 'medium' : 'none', color: { argb: colors.primary } } };
        sheet.getRow(currentRow).height = 36;
        currentRow++;
        
        // Terms Header
        sheet.mergeCells(`A${currentRow}:D${currentRow}`);
        const termsCell = sheet.getCell(`A${currentRow}`);
        termsCell.value = `   Warranty: ${section.warranty}   |   Terms: ${section.terms}`;
        termsCell.font = { name: 'Arial', size: 10, italic: true, color: { argb: colors.textMuted } };
        termsCell.alignment = { horizontal: 'left', vertical: 'middle' };
        currentRow++;

        // Column Headers
        const headerRow = sheet.getRow(currentRow);
        headerRow.values = section.headers;
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
        for (const product of section.products) {
          const row = sheet.getRow(currentRow);
          row.height = 25;
          
          row.getCell(1).value = product.model;
          row.getCell(2).value = product.specs;
          row.getCell(3).value = product.bms || product.mppt;
          row.getCell(4).value = product.price;

          row.eachCell((cell, colNumber) => {
            cell.font = { name: 'Arial', size: 11, color: { argb: colors.secondary } };
            cell.alignment = { horizontal: colNumber === 4 ? 'right' : 'center', vertical: 'middle' };
            cell.border = {
              bottom: { style: 'thin', color: { argb: colors.borderLight || 'FFEAEDF2' } }
            };
            
            // Format price column
            if (colNumber === 4) {
              cell.numFmt = '$#,##0';
              cell.font = { name: 'Arial', size: 11, bold: true, color: { argb: colors.primary } };
            }
          });
          currentRow++;
        }
        
        currentRow += 2; // Space between sections
      }
      
      // Footer Note
      sheet.mergeCells(`A${currentRow}:D${currentRow}`);
      const footerCell = sheet.getCell(`A${currentRow}`);
      footerCell.value = 'Thank you for considering Joyhand Energy. We look forward to a successful partnership. Prices are valid for 30 days.';
      footerCell.font = { name: 'Arial', size: 10, italic: true, color: { argb: colors.textMuted } };
      footerCell.alignment = { horizontal: 'center', vertical: 'middle' };
      
      // Write to blob and download
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `JoyHand_Custom_Quotation.xlsx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      
    } catch (err) {
      console.error("Error generating Excel:", err);
      alert("Failed to generate Excel file.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="quotation-page">
      <div className="quotation-container">
        
        <div className="quotation-header">
          <h1 className="quotation-title">Custom Quotation</h1>
          <button 
            className="quotation-download-btn" 
            onClick={handleDownload}
            disabled={isGenerating}
          >
            {isGenerating ? <PiSpinnerGap className="spin" size={20} /> : <PiDownloadSimple size={20} />}
            {isGenerating ? "Generating..." : "Download Excel"}
          </button>
        </div>

        <div className="quotation-card">
          <div className="quotation-card-header">
            <h2 className="quotation-company-name">Joyhand Energy</h2>
            <p className="quotation-meta">Factory Direct Pricing | ISO 9001:2015</p>
          </div>

          {QUOTATION_DATA.map((section, idx) => (
            <div key={idx} className="quotation-section">
              <h3 className="quotation-section-title">
                {section.icon} {section.category} Series
              </h3>
              <div className="quotation-terms">
                <strong>Warranty:</strong> {section.warranty} &nbsp;|&nbsp; <strong>Shipping:</strong> {section.terms}
              </div>
              
              <div className="quotation-table-wrapper">
                <table className="quotation-table">
                  <thead>
                    <tr>
                      {section.headers.map((h, i) => <th key={i}>{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {section.products.map((p, i) => (
                      <tr key={i}>
                        <td>{p.model}</td>
                        <td>{p.specs}</td>
                        <td>{p.bms || p.mppt}</td>
                        <td className="price-cell">{formatPrice(p.price)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div className="quotation-footer">
            <p>Thank you for considering Joyhand Energy. We look forward to a successful partnership. <br /> These proposed prices are valid for 30 days. Please contact us to discuss volume discounts or partnership terms.</p>
          </div>
        </div>

      </div>
    </main>
  );
}
