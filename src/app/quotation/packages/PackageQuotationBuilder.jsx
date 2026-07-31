"use client";

import { useState } from "react";
import { PiDownloadSimple, PiSpinnerGap, PiPackage } from "react-icons/pi";
import "../Quotation.css";

const colors = {
  primary: 'FFFF6600', // JoyHand Orange
  secondary: 'FF121B2D', // JoyHand Dark Blue
  textMain: 'FF333333',
  textMuted: 'FF666666',
  white: 'FFFFFFFF',
  lightGray: 'FFF0F2F5',
  border: 'FFDDDDDD',
};

const packages = [
  {
    name: "3.3KW Full Set",
    total: 1537.00,
    items: [
      { item: "Solar panel", specs: "580W", qty: 4 },
      { item: "Mounting bracket", specs: "", qty: 1 },
      { item: "Circuit breaker", specs: "", qty: 1 },
      { item: "Hybrid inverter", specs: "3KW 220V/50Hz PV120v-450v", qty: 1 },
      { item: "Lithium battery", specs: "51.2V100AH", qty: 1 },
      { item: "Battery-to-inverter connection cable", specs: "10mm2 100CM", qty: 1 },
      { item: "Communication cable", specs: "", qty: 1 },
      { item: "DC cable", specs: "50M/4mm2", qty: 2 },
      { item: "MC4 connector", specs: "", qty: 2 },
    ]
  },
  {
    name: "5KW Full Set",
    total: 2616.00,
    items: [
      { item: "Solar panel", specs: "580W", qty: 8 },
      { item: "Mounting bracket", specs: "", qty: 8 },
      { item: "Circuit breaker", specs: "", qty: 1 },
      { item: "Hybrid inverter", specs: "5KW 220V/50Hz PV120v-450v 6.5KW", qty: 1 },
      { item: "WiFi", specs: "", qty: 1 },
      { item: "Lithium battery", specs: "51.2V200AH", qty: 1 },
      { item: "Battery-to-inverter connection cable", specs: "10mm2 100CM", qty: 1 },
      { item: "Communication cable", specs: "", qty: 1 },
      { item: "DC cable", specs: "50M/4mm2", qty: 2 },
      { item: "MC4 connector", specs: "", qty: 3 },
    ]
  },
  {
    name: "10KW Full Set",
    total: 4664.00,
    items: [
      { item: "Solar panel", specs: "580W", qty: 16 },
      { item: "Mounting bracket", specs: "", qty: 16 },
      { item: "Circuit breaker", specs: "", qty: 2 },
      { item: "Hybrid inverter", specs: "10KW 220V/50Hz PV120v-450v 12KW", qty: 1 },
      { item: "WiFi", specs: "", qty: 1 },
      { item: "Lithium battery", specs: "51.2V420AH", qty: 1 },
      { item: "Battery-to-inverter connection cable", specs: "25mm2 100CM", qty: 1 },
      { item: "Communication cable", specs: "", qty: 1 },
      { item: "DC cable", specs: "100M/4mm2", qty: 2 },
      { item: "MC4 connector", specs: "", qty: 10 },
    ]
  }
];

export default function PackageQuotationBuilder() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      const ExcelJS = (await import("exceljs")).default;
      
      const workbook = new ExcelJS.Workbook();
      workbook.creator = 'JoyHand Energy';
      
      const sheet = workbook.addWorksheet('Solar Packages', {
        pageSetup: { 
          paperSize: 9, 
          orientation: 'portrait', 
          fitToPage: true, 
          fitToWidth: 1, 
          fitToHeight: 0,
          margins: {
            left: 0.25, right: 0.25, top: 0.5, bottom: 0.5, header: 0.2, footer: 0.2
          }
        },
        views: [{ showGridLines: false }]
      });

      sheet.columns = [
        { width: 25 }, // A: Item
        { width: 18 }, // B: Photo
        { width: 30 }, // C: Specification
        { width: 12 }, // D: Quantity
        { width: 18 }, // E: Unit price
        { width: 18 }  // F: Remark
      ];

      // ── TOP HEADER (Same as QuotationBuilder) ──
      sheet.getRow(1).height = 40;
      sheet.getRow(2).height = 25;
      sheet.getRow(3).height = 25;

      sheet.mergeCells('A1:F3');
      
      try {
        const logoRes = await fetch('/images/logos/joyhand-logo.png');
        if (logoRes.ok) {
          const logoBlob = await logoRes.blob();
          const logoBuffer = await logoBlob.arrayBuffer();
          const logoId = workbook.addImage({ buffer: logoBuffer, extension: 'png' });
          sheet.addImage(logoId, {
            tl: { col: 0.1, row: 0.3 },
            ext: { width: 200, height: 60 },
            editAs: 'absolute'
          });
        }
      } catch (e) {
        console.warn("Logo fetch failed", e);
      }

      sheet.unMergeCells('A1:F3');
      sheet.mergeCells('A1:C3');
      sheet.mergeCells('D1:F1');
      sheet.mergeCells('D2:F2');
      sheet.mergeCells('D3:F3');

      const titleTop = sheet.getCell('D1');
      titleTop.value = 'JOYHAND ENERGY — QUOTATION SHEET';
      titleTop.font = { name: 'Arial', size: 16, bold: true, color: { argb: colors.secondary } };
      titleTop.alignment = { horizontal: 'right', vertical: 'bottom' };

      const titleMid = sheet.getCell('D2');
      titleMid.value = 'FACTORY DIRECT PRICING';
      titleMid.font = { name: 'Arial', size: 14, bold: true, color: { argb: colors.primary } };
      titleMid.alignment = { horizontal: 'right', vertical: 'middle' };

      const titleBot = sheet.getCell('D3');
      titleBot.value = 'Email: sales@joyhand.com   |   Tel: +86 186 0202 1144   |   Web: joyhand.com';
      titleBot.font = { name: 'Arial', size: 10, color: { argb: colors.secondary } };
      titleBot.alignment = { horizontal: 'right', vertical: 'top' };

      // Bottom orange border for the header
      const borderRow = sheet.getRow(4);
      borderRow.height = 5;
      for (let i = 1; i <= 6; i++) {
        sheet.getCell(4, i).border = { bottom: { style: 'thin', color: { argb: colors.primary } } };
      }

      let currentRowIdx = 6;

      // Prepared By / For
      sheet.getRow(currentRowIdx).height = 20;
      const prepByLabel = sheet.getCell(`A${currentRowIdx}`);
      prepByLabel.value = 'Prepared By:';
      prepByLabel.font = { bold: true, size: 12, color: { argb: colors.secondary } };
      sheet.mergeCells(`A${currentRowIdx}:D${currentRowIdx}`);

      const prepForLabel = sheet.getCell(`E${currentRowIdx}`);
      prepForLabel.value = 'Prepared for:';
      prepForLabel.font = { bold: true, size: 12, color: { argb: colors.secondary } };
      sheet.mergeCells(`E${currentRowIdx}:F${currentRowIdx}`);

      for (let i = 1; i <= 6; i++) {
        const cell = sheet.getCell(currentRowIdx, i);
        if (i === 1) cell.border = { left: { style: 'thin' }, top: { style: 'thin' } };
        else if (i === 4) cell.border = { right: { style: 'thin' }, top: { style: 'thin' } };
        else if (i === 5) cell.border = { left: { style: 'thin' }, top: { style: 'thin' } };
        else if (i === 6) cell.border = { right: { style: 'thin' }, top: { style: 'thin' } };
        else cell.border = { top: { style: 'thin' } };
      }
      currentRowIdx++;

      sheet.getRow(currentRowIdx).height = 50;
      const prepByVal = sheet.getCell(`A${currentRowIdx}`);
      prepByVal.value = "Company Name: GUANGZHOU JOYHAND IMPORT&EXPORT CO., LTD\n" +
                        "Nansha District, Guangzhou, Guangdong Province, China, 511485\n" +
                        "www.joyhand.com";
      prepByVal.font = { bold: true, size: 10, color: { argb: colors.textMain } };
      prepByVal.alignment = { wrapText: true, vertical: 'top' };
      sheet.mergeCells(`A${currentRowIdx}:D${currentRowIdx}`);

      const prepForVal = sheet.getCell(`E${currentRowIdx}`);
      prepForVal.value = "Enter client details here";
      prepForVal.font = { bold: true, size: 10, color: { argb: colors.textMain } };
      prepForVal.alignment = { wrapText: true, vertical: 'top' };
      sheet.mergeCells(`E${currentRowIdx}:F${currentRowIdx}`);

      for (let i = 1; i <= 6; i++) {
        const cell = sheet.getCell(currentRowIdx, i);
        if (i === 1) cell.border = { left: { style: 'thin' }, bottom: { style: 'thin' } };
        else if (i === 4) cell.border = { right: { style: 'thin' }, bottom: { style: 'thin' } };
        else if (i === 5) cell.border = { left: { style: 'thin' }, bottom: { style: 'thin' } };
        else if (i === 6) cell.border = { right: { style: 'thin' }, bottom: { style: 'thin' } };
        else cell.border = { bottom: { style: 'thin' } };
      }
      currentRowIdx++;

      // Spacing
      currentRowIdx++;

      // Render packages one by one
      packages.forEach(pkg => {
        // Category Title Row
        const catRow = sheet.getRow(currentRowIdx);
        catRow.height = 30;
        sheet.mergeCells(`A${currentRowIdx}:F${currentRowIdx}`);
        const catCell = catRow.getCell(1);
        catCell.value = pkg.name.toUpperCase();
        catCell.font = { bold: true, size: 14, color: { argb: colors.secondary } };
        catCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF0F2F5' } }; // Light gray
        catCell.alignment = { horizontal: 'left', vertical: 'middle', indent: 1 };
        catCell.border = { top: {style: 'thin'}, left: {style: 'thin'}, right: {style: 'thin'} };
        currentRowIdx++;

        // Terms & Warranty Row
        const termsRow = sheet.getRow(currentRowIdx);
        termsRow.height = 20;
        sheet.mergeCells(`A${currentRowIdx}:F${currentRowIdx}`);
        const termsCell = termsRow.getCell(1);
        termsCell.value = 'Warranty: Inverter: 2 yrs; Battery: 5 yrs; Panel: 15 yrs   |   Terms: EXW   |   Validity: 30 Days';
        termsCell.font = { italic: true, size: 10, color: { argb: colors.textMuted } };
        termsCell.alignment = { horizontal: 'left', vertical: 'middle', indent: 1 };
        termsCell.border = { left: {style: 'thin'}, right: {style: 'thin'} };
        currentRowIdx++;

        // Table Headers Row
        const headerRow = sheet.getRow(currentRowIdx);
        headerRow.height = 30;
        const headers = ['ITEM NAME', 'PICTURE', 'SPECS DETAILS', 'QUANTITY', 'Unit price (USD)', 'REMARK'];
        
        headers.forEach((h, colIdx) => {
          const cell = headerRow.getCell(colIdx + 1);
          cell.value = h;
          cell.font = { bold: true, size: 10, color: { argb: colors.white } };
          cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
          cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.secondary } };
          // Dark blue background with thick orange bottom border
          cell.border = { bottom: { style: 'medium', color: { argb: colors.primary } }, left: {style: 'thin'}, right: {style: 'thin'} };
        });
        currentRowIdx++;

        // Items Loop
        const itemsStartRow = currentRowIdx;
        pkg.items.forEach((item) => {
          sheet.getRow(currentRowIdx).height = 60; // Space for images

          // A: ITEM NAME
          const cellA = sheet.getCell(currentRowIdx, 1);
          cellA.value = item.item;
          cellA.font = { bold: true, color: { argb: colors.primary }, size: 10 };
          cellA.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
          cellA.border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };

          // B: PICTURE
          const cellB = sheet.getCell(currentRowIdx, 2);
          cellB.border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };

          // C: SPECS DETAILS
          const cellC = sheet.getCell(currentRowIdx, 3);
          cellC.value = item.specs;
          cellC.alignment = { horizontal: 'left', vertical: 'top', wrapText: true };
          cellC.font = { size: 10 };
          cellC.border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };

          // D: QUANTITY
          const cellD = sheet.getCell(currentRowIdx, 4);
          cellD.value = item.qty;
          cellD.alignment = { horizontal: 'center', vertical: 'middle' };
          cellD.font = { size: 10 };
          cellD.border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };

          // F: REMARK
          const cellF = sheet.getCell(currentRowIdx, 6);
          cellF.border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };

          currentRowIdx++;
        });

        const itemsEndRow = currentRowIdx - 1;

        // E: Unit Price (Merged across all items)
        sheet.mergeCells(`E${itemsStartRow}:E${itemsEndRow}`);
        const mergedPrice = sheet.getCell(`E${itemsStartRow}`);
        mergedPrice.value = `$${pkg.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2})}`;
        mergedPrice.alignment = { horizontal: 'center', vertical: 'middle' };
        mergedPrice.font = { size: 10 };
        mergedPrice.border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };

        // Total Row
        sheet.getRow(currentRowIdx).height = 20;
        sheet.mergeCells(`A${currentRowIdx}:D${currentRowIdx}`);
        const cellTotalLabel = sheet.getCell(`A${currentRowIdx}`);
        cellTotalLabel.value = `Total for ${pkg.name}`;
        cellTotalLabel.alignment = { horizontal: 'right', vertical: 'middle', indent: 2 };
        cellTotalLabel.font = { bold: true, size: 10 };
        cellTotalLabel.border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };

        const cellTotalPrice = sheet.getCell(`E${currentRowIdx}`);
        cellTotalPrice.value = `$${pkg.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2})}`;
        cellTotalPrice.font = { bold: true, size: 10, color: { argb: colors.primary } };
        cellTotalPrice.alignment = { horizontal: 'center', vertical: 'middle' };
        cellTotalPrice.border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };

        const cellTotalRemark = sheet.getCell(`F${currentRowIdx}`);
        cellTotalRemark.border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };
        
        currentRowIdx += 2; // Spacing before next package
      });

      // ── BANK DETAILS AT THE VERY END ──
      sheet.getRow(currentRowIdx).height = 20;
      sheet.mergeCells(`A${currentRowIdx}:F${currentRowIdx}`);
      const bankHeader = sheet.getCell(`A${currentRowIdx}`);
      bankHeader.value = 'PAYMENT INSTRUCTIONS';
      bankHeader.font = { bold: true, size: 12, color: { argb: colors.secondary } };
      bankHeader.alignment = { horizontal: 'left', vertical: 'middle' };
      currentRowIdx++;

      sheet.getRow(currentRowIdx).height = 140;
      
      // HK Bank (A-C)
      sheet.mergeCells(`A${currentRowIdx}:C${currentRowIdx}`);
      const hkBank = sheet.getCell(`A${currentRowIdx}`);
      hkBank.value = "FPS / CHATS / SWIFT Payment\n" +
                     "Account number: 88800006422277\n" +
                     "Account name: GUANGZHOU JOYHAND IMPORT EXPORT CO.,Ltd.\n" +
                     "SWIFT/BIC code: WIHBHKHHXXX\n" +
                     "Bank name: OCBC Hong Kong Branch\n" +
                     "Bank address: 161 Queen's Road Central, Central, Hong Kong (China)\n" +
                     "Bank code: 035\n" +
                     "Notes: Include [Buyer Name] [Invoice Number] [Product] in memo";
      hkBank.font = { size: 10 };
      hkBank.alignment = { horizontal: 'left', vertical: 'top', wrapText: true, indent: 1 };
      hkBank.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      hkBank.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF8F9FC' } };

      // NG Bank (D-F)
      sheet.mergeCells(`D${currentRowIdx}:F${currentRowIdx}`);
      const ngBank = sheet.getCell(`D${currentRowIdx}`);
      ngBank.value = "NIP Payment\n" +
                     "Account number: 1988119690\n" +
                     "Account name: FW -GUANGZHOU JOYHAND IMPORT EXPORT CO.,Ltd.\n" +
                     "Bank name: Access Bank\n" +
                     "Bank address: 14/15, Prince Alaba Abiodun, Oniru Road, Victoria Island, Lagos, Nigeria\n" +
                     "Country/region: Nigeria\n" +
                     "Notes: This collection account only supports NGN collection in Nigeria.\n" +
                     "Include [Buyer Name] [Invoice Number] [Product] in memo.";
      ngBank.font = { size: 10 };
      ngBank.alignment = { horizontal: 'left', vertical: 'top', wrapText: true, indent: 1 };
      ngBank.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      ngBank.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF8F9FC' } };
      currentRowIdx++;

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `JoyHand_Solar_Packages_${new Date().toISOString().split('T')[0]}.xlsx`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("Failed to generate quotation.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="qb-layout" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
      <div className="qb-pane" style={{ padding: '3rem 2rem' }}>
        <PiPackage size={64} style={{ color: '#FF7F41', margin: '0 auto 1rem auto' }} />
        <h2 className="qb-pane-title" style={{ fontSize: '1.8rem', borderBottom: 'none', marginBottom: '1rem' }}>
          Standard Full Set Quotations
        </h2>
        <p style={{ color: '#6C727F', marginBottom: '2rem', lineHeight: '1.6' }}>
          Download the pre-configured Excel quotation containing our standard <strong>3.3KW, 5KW, and 10KW</strong> solar full sets. 
          The downloaded file will generate a single Excel sheet matching our brand styling.
        </p>

        <button 
          onClick={handleDownload}
          disabled={isGenerating}
          className="qb-download-btn"
          style={{ width: '100%', maxWidth: '350px', margin: '0 auto' }}
        >
          {isGenerating ? <PiSpinnerGap className="spin" size={24} /> : <PiDownloadSimple size={24} />}
          {isGenerating ? "Generating Excel..." : "Download Excel"}
        </button>
      </div>
    </div>
  );
}
