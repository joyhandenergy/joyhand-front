"use client";

import { useState } from "react";
import { PiDownloadSimple, PiSpinnerGap, PiPlus, PiTrash, PiShoppingCart } from "react-icons/pi";
import Image from "next/image";
import "./Quotation.css";

const colors = {
  primary: 'FFFF7F41',   
  secondary: 'FF121B2D', 
  accent: 'FF2EC4B6',    
  white: 'FFFFFFFF',
  lightGray: 'FFF8F9FC',
  grayBg: 'FFF0F2F5',
  textMuted: 'FF6C727F',
};

export default function QuotationBuilder({ initialProducts = [] }) {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [cart, setCart] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const categoryMap = {
    'battery': 'Storage Battery',
    'inverter': 'Solar Inverter',
    'portable-power': 'Portable Power Station',
    'power-bank': 'Power Bank',
    'electric-mobility': 'E-Mobility',
    'accessories': 'Tech & Solar Accessories'
  };

  const filteredProducts = (initialProducts || []).filter(p => {
    const nameMatch = (p.name || "").toLowerCase().includes((search || "").toLowerCase());
    const modelMatch = (p.model || "").toLowerCase().includes((search || "").toLowerCase());
    const catMatch = categoryFilter === "All" || p.category === categoryFilter;
    return (nameMatch || modelMatch) && catMatch;
  });

  const addToCart = (product) => {
    if (cart.find(item => item._id === product._id)) return;
    setCart([...cart, { 
      ...product, 
      cartPrice: "", 
      cartMoq: 100,
      cartBrand: "OEM" 
    }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item._id !== id));
  };

  const updateCartItem = (id, field, value) => {
    setCart(cart.map(item => item._id === id ? { ...item, [field]: value } : item));
  };

  const getSpecValue = (fullSpecs, specNames) => {
    if (!fullSpecs) return "";
    for (let spec of fullSpecs) {
      if (spec && spec.specName && specNames.some(name => spec.specName.toLowerCase().includes(name.toLowerCase()))) {
        return spec.specValue;
      }
    }
    return "";
  };

  const generateSpecsDetails = (product) => {
    if (!product.fullSpecs) return "Specs unavailable";
    const exclude = ["battery type", "case material", "item size", "net weight", "moq", "brand", "picture", "price"];
    const lines = [];
    product.fullSpecs.forEach(spec => {
      if (spec && spec.specName) {
        const nameLower = spec.specName.toLowerCase();
        if (!exclude.some(ex => nameLower.includes(ex))) {
          lines.push(`${spec.specName}: ${spec.specValue}`);
        }
      }
    });
    return lines.join("\r\n");
  };

  const handleDownload = async () => {
    if (cart.length === 0) return alert("Please add at least one product to the quotation.");
    
    try {
      setIsGenerating(true);
      const ExcelJS = (await import("exceljs")).default;
      
      const workbook = new ExcelJS.Workbook();
      workbook.creator = 'JoyHand Energy';
      
      const sheet = workbook.addWorksheet('Quotation', {
        pageSetup: { 
          paperSize: 9, 
          orientation: 'landscape', 
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
        { width: 15 }, // A
        { width: 20 }, // B (Picture)
        { width: 35 }, // C (Specs)
        { width: 12 }, // D
        { width: 12 }, // E
        { width: 14 }, // F
        { width: 10 }, // G
        { width: 8 },  // H
        { width: 6 },  // I
        { width: 12 }  // J
      ];

      // Top Header Row
      sheet.getRow(1).height = 25;
      sheet.getRow(2).height = 18;
      sheet.getRow(3).height = 18;

      sheet.mergeCells('D1:J1');
      const titleCell = sheet.getCell('D1');
      titleCell.value = 'JOYHAND ENERGY — CUSTOMER QUOTATION';
      titleCell.font = { name: 'Arial', size: 18, bold: true, color: { argb: colors.secondary } };
      titleCell.alignment = { horizontal: 'right', vertical: 'middle' };

      sheet.mergeCells('D2:J2');
      const subTitleCell = sheet.getCell('D2');
      subTitleCell.value = 'FACTORY DIRECT PRICING';
      subTitleCell.font = { name: 'Arial', size: 11, bold: true, color: { argb: colors.primary } };
      subTitleCell.alignment = { horizontal: 'right', vertical: 'middle' };

      sheet.mergeCells('D3:J3');
      const contactCell = sheet.getCell('D3');
      contactCell.value = 'Email: sales@joyhand.com  |  Tel: +86 186 0202 1144  |  Web: joyhand.com';
      contactCell.font = { name: 'Arial', size: 10, color: { argb: colors.secondary } };
      contactCell.alignment = { horizontal: 'right', vertical: 'middle' };

      try {
        const logoRes = await fetch('/images/logos/joyhand-logo.png');
        if (logoRes.ok) {
          const logoBlob = await logoRes.blob();
          const logoBuffer = await logoBlob.arrayBuffer();
          const logoId = workbook.addImage({ buffer: logoBuffer, extension: 'png' });
          sheet.addImage(logoId, {
            tl: { col: 0.1, row: 0.2 },
            ext: { width: 180, height: 50 },
            editAs: 'absolute'
          });
        }
      } catch (e) {
        console.warn("Logo fetch failed", e);
      }

      // Thick orange line
      for (let i = 1; i <= 10; i++) {
        sheet.getCell(4, i).border = { bottom: { style: 'medium', color: { argb: colors.primary } } };
      }

      sheet.getRow(4).height = 10;
      
      sheet.getRow(5).height = 20;
      sheet.getCell('A5').value = 'Prepared By:';
      sheet.getCell('A5').font = { bold: true, size: 10 };
      
      sheet.getCell('F5').value = 'Prepared for:';
      sheet.getCell('F5').font = { bold: true, size: 10 };

      sheet.mergeCells('A6:E6');
      sheet.getCell('A6').value = 'Company Name: GUANGZHOU JOYHAND IMPORT&EXPORT CO., LTD';
      sheet.getCell('A6').font = { bold: true, size: 10 };
      
      sheet.mergeCells('A7:E7');
      sheet.getCell('A7').value = 'Add: Nansha District, Guangzhou, Guangdong Province, China, 511485';
      sheet.getCell('A7').font = { bold: true, size: 10 };

      sheet.mergeCells('A8:E8');
      sheet.getCell('A8').value = 'Contact No. +86-0757-22333572 / 0757-22333573';
      sheet.getCell('A8').font = { bold: true, size: 10 };

      sheet.mergeCells('A9:E9');
      sheet.getCell('A9').value = 'Web: www.joyhand.com';
      sheet.getCell('A9').font = { bold: true, size: 10 };

      // Prepared for empty box
      sheet.mergeCells('F6:J9');
      const preparedForBox = sheet.getCell('F6');
      preparedForBox.border = {
        top: { style: 'thin', color: { argb: 'FF8EA9DB' } },
        left: { style: 'thin', color: { argb: 'FF8EA9DB' } },
        bottom: { style: 'thin', color: { argb: 'FF8EA9DB' } },
        right: { style: 'thin', color: { argb: 'FF8EA9DB' } }
      };

      sheet.getRow(10).height = 15; // Spacing

      let currentRowIdx = 11;
      
      // Sort cart by category to group them nicely
      const sortedCart = [...cart].sort((a, b) => (a.category || "").localeCompare(b.category || ""));
      let currentCategory = null;

      for (let i = 0; i < sortedCart.length; i++) {
        const item = sortedCart[i];
        
        // Category Demarcation Header & Table Headers
        if (item.category !== currentCategory) {
          if (currentRowIdx > 11) currentRowIdx += 2; // Spacing before new category

          currentCategory = item.category;
          const catTitle = categoryMap[currentCategory] || currentCategory || "Other Category";
          
          // Category Title Row
          const catRow = sheet.getRow(currentRowIdx);
          catRow.height = 30;
          sheet.mergeCells(`A${currentRowIdx}:J${currentRowIdx}`);
          const catCell = catRow.getCell(1);
          catCell.value = catTitle.toUpperCase();
          catCell.font = { bold: true, size: 14, color: { argb: colors.secondary } };
          catCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF0F2F5' } };
          catCell.alignment = { horizontal: 'left', vertical: 'middle', indent: 1 };
          currentRowIdx++;

          // Terms & Warranty Row
          const termsRow = sheet.getRow(currentRowIdx);
          termsRow.height = 20;
          sheet.mergeCells(`A${currentRowIdx}:J${currentRowIdx}`);
          const termsCell = termsRow.getCell(1);
          termsCell.value = 'Warranty: 5 Years   |   Terms: EXW   |   Validity: 30 Days';
          termsCell.font = { italic: true, size: 10, color: { argb: colors.textMuted } };
          termsCell.alignment = { horizontal: 'left', vertical: 'middle', indent: 1 };
          currentRowIdx++;

          // Table Headers Row
          const headerRow = sheet.getRow(currentRowIdx);
          headerRow.height = 30;
          const headers = ['ITEM NAME', 'PICTURE', 'SPECS DETAILS', 'BATTERY TYPE', 'CASE MATERIAL', 'ITEM SIZE (CM)', 'NET WEIGHT (KGS)', 'BRAND', 'MOQ', 'Unit price (USD)'];
          
          headers.forEach((h, colIdx) => {
            const cell = headerRow.getCell(colIdx + 1);
            cell.value = h;
            cell.font = { bold: true, size: 10, color: { argb: colors.white } };
            cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.secondary } };
            // Dark blue background with thick orange bottom border
            cell.border = { bottom: { style: 'medium', color: { argb: colors.primary } } };
          });
          currentRowIdx++;
        }

        const row = sheet.getRow(currentRowIdx);
        row.height = 150; 

        const batteryType = getSpecValue(item.fullSpecs, ['battery']);
        const caseMaterial = getSpecValue(item.fullSpecs, ['case', 'material']);
        const itemSize = getSpecValue(item.fullSpecs, ['size', 'dimension']);
        const netWeight = getSpecValue(item.fullSpecs, ['weight']);
        const specsText = generateSpecsDetails(item);

        const values = [
          item.model || item.name,
          "", 
          specsText,
          batteryType || "N/A",
          caseMaterial || "N/A",
          itemSize || "N/A",
          netWeight || "N/A",
          item.cartBrand,
          item.cartMoq,
          item.cartPrice ? `$${parseFloat(item.cartPrice).toFixed(2)}` : ''
        ];

        values.forEach((v, colIdx) => {
          const cell = row.getCell(colIdx + 1);
          cell.value = v;
          cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
          cell.font = { size: 10 };
          cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
          
          if (colIdx === 0) {
            cell.font = { bold: true, color: { argb: colors.primary }, size: 10 };
          }
          if (colIdx === 2) {
            cell.alignment = { horizontal: 'left', vertical: 'top', wrapText: true };
          }
        });

        if (item.imageUrl) {
          try {
            const res = await fetch(item.imageUrl);
            const blob = await res.blob();
            const buffer = await blob.arrayBuffer();
            const imageId = workbook.addImage({
              buffer: buffer,
              extension: item.imageUrl.split('.').pop() || 'png',
            });
            
            // Render a fixed size image centered in cell (130x130px for a 20 width / 150 height cell)
            sheet.addImage(imageId, {
              tl: { col: 1.1, row: currentRowIdx - 1 + 0.1 },
              ext: { width: 130, height: 130 },
              editAs: 'oneCell'
            });
          } catch (err) {
            console.error("Failed to load image for", item.name, err);
          }
        }

        currentRowIdx++;
      }

      // Add Footer text
      currentRowIdx += 2;
      sheet.mergeCells(`A${currentRowIdx}:J${currentRowIdx}`);
      const footerCell = sheet.getCell(`A${currentRowIdx}`);
      footerCell.value = 'Prices subject to order volume. Contact sales@joyhand.com for a formal quotation.';
      footerCell.font = { italic: true, size: 10, color: { argb: colors.textMuted } };
      footerCell.alignment = { horizontal: 'center', vertical: 'middle' };

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `JoyHand_Quotation_${new Date().toISOString().split('T')[0]}.xlsx`;
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
    <div className="qb-layout">
      {/* Left Pane: Product Selection */}
      <div className="qb-pane">
        <h2 className="qb-pane-title">Available Products</h2>
        <div className="qb-filters">
          <input 
            type="text" 
            placeholder="Search by name or model..." 
            className="qb-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select 
            className="qb-category-select"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="All">All Categories</option>
            {Object.entries(categoryMap).map(([val, label]) => (
              <option key={val} value={val}>{label}</option>
            ))}
          </select>
        </div>
        <div className="qb-product-list">
          {filteredProducts.map(p => {
            const inCart = cart.some(item => item._id === p._id);
            return (
              <div key={p._id} className={`qb-product-item ${inCart ? 'in-cart' : ''}`}>
                <div className="qb-product-info">
                  <div className="qb-product-img">
                    {p.imageUrl && <Image src={p.imageUrl} alt={p.name || ''} fill />}
                  </div>
                  <div>
                    <h3 className="qb-product-name">{p.name || 'Unnamed Product'}</h3>
                    <p className="qb-product-model">{p.model}</p>
                  </div>
                </div>
                <button 
                  disabled={inCart}
                  onClick={() => addToCart(p)}
                  className="qb-add-btn"
                >
                  {inCart ? <PiShoppingCart size={24} /> : <PiPlus size={24} />}
                </button>
              </div>
            );
          })}
          {filteredProducts.length === 0 && (
            <p className="qb-cart-empty">No products found.</p>
          )}
        </div>
      </div>

      {/* Right Pane: Cart & Configuration */}
      <div className="qb-pane">
        <h2 className="qb-pane-title">Quotation Details</h2>
        
        <div className="qb-cart-list">
          {cart.length === 0 ? (
            <div className="qb-cart-empty">
              <PiShoppingCart size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <p>Your quotation is empty.</p>
              <p style={{ fontSize: '0.85rem' }}>Select products from the left to begin.</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item._id} className="qb-cart-item">
                <button 
                  onClick={() => removeFromCart(item._id)}
                  className="qb-remove-btn"
                  title="Remove"
                >
                  <PiTrash size={20} />
                </button>
                <div className="qb-cart-item-header">
                  <div className="qb-product-img">
                    {item.imageUrl && <Image src={item.imageUrl} alt={item.name || ''} fill />}
                  </div>
                  <div>
                    <h3 className="qb-product-name">{item.name || 'Unnamed Product'}</h3>
                    <p className="qb-product-model">{item.model}</p>
                  </div>
                </div>
                <div className="qb-cart-inputs">
                  <div className="qb-input-group">
                    <label>Unit Price ($)</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 120" 
                      value={item.cartPrice}
                      onChange={(e) => updateCartItem(item._id, 'cartPrice', e.target.value)}
                    />
                  </div>
                  <div className="qb-input-group">
                    <label>MOQ</label>
                    <input 
                      type="number" 
                      value={item.cartMoq}
                      onChange={(e) => updateCartItem(item._id, 'cartMoq', e.target.value)}
                    />
                  </div>
                  <div className="qb-input-group">
                    <label>Brand</label>
                    <input 
                      type="text" 
                      value={item.cartBrand}
                      onChange={(e) => updateCartItem(item._id, 'cartBrand', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="qb-download-wrapper">
          <button 
            onClick={handleDownload}
            disabled={isGenerating || cart.length === 0}
            className="qb-download-btn"
          >
            {isGenerating ? <PiSpinnerGap className="spin" size={24} /> : <PiDownloadSimple size={24} />}
            {isGenerating ? "Generating Excel..." : "Download Quotation"}
          </button>
        </div>
      </div>
    </div>
  );
}
