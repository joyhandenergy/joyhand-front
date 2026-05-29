import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { productData } from '@/data';

// Premium B2B Styles
const styles = StyleSheet.create({
  page: { padding: 40, backgroundColor: "#ffffff", fontFamily: "Helvetica", fontSize: 10, color: "#121b2d" },
  accentBar: { position: "absolute", top: 0, left: 0, width: "100%", height: 5, backgroundColor: "#ff7f41" },
  header: { marginTop: 12, marginBottom: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", borderBottom: "1px solid #ff7f41", paddingBottom: 12 },
  logoContainer: { width: 130 },
  logo: { width: "100%", height: "auto" },
  headerInfo: { textAlign: "right" },
  headerTitle: { fontFamily: "Helvetica-Bold", fontSize: 18, color: "#121b2d", marginBottom: 2 },
  headerBadge: { fontSize: 8, color: "#ff7f41", fontFamily: "Helvetica-Bold", textTransform: "uppercase", letterSpacing: 1 },
  categoryHero: { backgroundColor: "#f8f9fa", padding: 18, borderRadius: 8, marginBottom: 20, borderLeft: "4px solid #ff7f41" },
  categoryTitle: { fontFamily: "Helvetica-Bold", fontSize: 18, color: "#121b2d", marginBottom: 5 },
  categoryDesc: { fontSize: 9, color: "#6c727f", lineHeight: 1.5 },
  productsContainer: { flexDirection: "column" },
  productCard: { marginBottom: 10, padding: 12, border: "1px solid #f0f0f0", borderRadius: 8, flexDirection: "row", backgroundColor: "#ffffff" },
  imageSection: { width: "28%", marginRight: 14, justifyContent: "center", alignItems: "center" },
  productImage: { width: "100%", height: 90, objectFit: "contain" },
  detailsSection: { width: "68%" },
  productHeader: { marginBottom: 5 },
  productName: { fontFamily: "Helvetica-Bold", fontSize: 13, color: "#121b2d", marginBottom: 2 },
  productModel: { fontSize: 8, color: "#ff7f41", fontFamily: "Helvetica-Bold" },
  productDesc: { fontSize: 8, color: "#6c727f", marginBottom: 7, lineHeight: 1.4 },
  /* Single subtle teal touch — just the divider line above specs */
  specsGrid: { flexDirection: "row", flexWrap: "wrap", marginTop: 4, borderTop: "1px solid #2ec4b6", paddingTop: 6 },
  specItem: { width: "50%", marginBottom: 4, paddingRight: 10 },
  specLabel: { fontFamily: "Helvetica-Bold", fontSize: 7, color: "#6c727f", marginBottom: 1, textTransform: "uppercase" },
  specValue: { fontSize: 8, color: "#121b2d", fontFamily: "Helvetica-Bold" },
  certRow: { flexDirection: "row", marginTop: 6 },
  certTag: { backgroundColor: "#fff6f2", color: "#ff7f41", fontSize: 7, fontFamily: "Helvetica-Bold", padding: "2px 6px", borderRadius: 4, marginRight: 4 },
  footer: { position: "absolute", bottom: 30, left: 40, right: 40, paddingTop: 12, borderTop: "1px solid #f0f0f0", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  footerText: { fontSize: 8, color: "#94a3b8" },
  footerBold: { fontFamily: "Helvetica-Bold", color: "#2ec4b6" }
});

const categoryMeta = {
  battery: { name: "Energy Storage Systems", desc: "Industrial-grade LiFePO4 battery solutions. Engineered for reliability, vertical integration, and long cycle life in residential and commercial environments." },
  inverter: { name: "Solar Power Conversion", desc: "Advanced MPPT hybrid and off-grid inverters. Built with Tier-1 power electronics for high-efficiency energy management and smart grid integration." },
  "electric-mobility": { name: "E-Mobility Solutions", desc: "Sustainable urban transportation. High-torque electric motors and long-range battery packs designed for commercial logistics and personal mobility." },
  "portable-power": { name: "Portable Energy Hubs", desc: "Production-ready portable power solutions. High-capacity LFP cells and pure sine wave technology for reliable off-grid energy anywhere." },
  "power-bank": { name: "Mobile Energy Solutions", desc: "Premium consumer tech chargers. Ultra-fast PD charging, wireless integration, and ruggedized designs for global distribution." },
};

function getKeySpecs(product) {
  // If it's a normalized Sanity product with keySpecs array
  if (product.keySpecs && Array.isArray(product.keySpecs) && product.keySpecs.length > 0) {
    return product.keySpecs.slice(0, 4).map(s => ({ label: s.specName, value: s.specValue }));
  }

  const specs = [];
  const cat = product.category;
  const s = product.specifications || {};

  if (cat === "battery") {
    if (s.nominalVoltage) specs.push({ label: "Voltage", value: s.nominalVoltage });
    if (s.capacity) specs.push({ label: "Capacity", value: s.capacity });
    if (s.energy) specs.push({ label: "Nominal Energy", value: s.energy });
    if (s.cycleLife) specs.push({ label: "Service Life", value: s.cycleLife });
  } else if (cat === "inverter") {
    if (s.power) specs.push({ label: "Rated Power", value: s.power });
    if (s.acOutput) specs.push({ label: "AC Output", value: s.acOutput });
    if (s.efficiency) specs.push({ label: "Peak Efficiency", value: s.efficiency });
  } else if (cat === "electric-mobility") {
    if (s.motor) specs.push({ label: "Motor Power", value: s.motor });
    if (s.battery) specs.push({ label: "Battery Spec", value: s.battery });
    if (s.maxRange || s.mileage) specs.push({ label: "Rated Range", value: s.maxRange || s.mileage });
  } else {
    Object.entries(s).slice(0, 3).forEach(([key, val]) => {
      if (typeof val === 'string') {
        const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        specs.push({ label, value: val });
      }
    });
  }
  return specs.slice(0, 4); // Strongly limit to 4 critical specs to save vertical height
}

export default function CatalogDocument({ category, products = null }) {
  // If products are passed via API, use them. Otherwise fallback to local productData.
  const sourceData = products || productData;
  const filteredProducts = sourceData.filter(p => p.category === category);
  
  if (!categoryMeta[category] || filteredProducts.length === 0) {
    return <Document><Page><Text>No products found.</Text></Page></Document>;
  }

  // Absolute paths are required for react-pdf to fetch images successfully in deployed environments
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const logoUrl = `${baseUrl}/images/logos/joyhand-logo.png`;

  return (
    <Document title={`JoyHand Energy - ${categoryMeta[category].name} Catalog`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.accentBar} />
        
        <View style={styles.header} fixed>
          <View style={styles.logoContainer}>
            <Image src={logoUrl} style={styles.logo} />
          </View>
          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>PRODUCT CATALOG</Text>
            <Text style={styles.headerBadge}>DIRECT MANUFACTURING • ISO 9001:2015 STANDARDS</Text>
          </View>
        </View>

        <View style={styles.categoryHero}>
          <Text style={styles.categoryTitle}>{categoryMeta[category].name.toUpperCase()}</Text>
          <Text style={styles.categoryDesc}>{categoryMeta[category].desc}</Text>
        </View>

        <View style={styles.productsContainer}>
          {filteredProducts.map((product, idx) => {
            const keySpecs = getKeySpecs(product);
            
            // Handle missing images safely and fix CORS opaque response caching for Sanity CDN images
            let imageUrl = logoUrl; // Fallback to logo
            if (product.image) {
              imageUrl = product.image.startsWith('http') 
                // Append a cache buster so browser fetch bypasses opaque caches
                ? `${product.image}${product.image.includes('?') ? '&' : '?'}cb=${Date.now()}` 
                : `${baseUrl}${product.image}`;
            }

            return (
              <View key={idx} style={styles.productCard} wrap={false}>
                <View style={styles.imageSection}>
                  <Image src={imageUrl} style={styles.productImage} />
                </View>
                <View style={styles.detailsSection}>
                  <View style={styles.productHeader}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productModel}>MODEL: {product.model || product.id}</Text>
                  </View>
                  
                  {/* Truncate long descriptions to maximum 2 lines to save vertical space */}
                  <Text style={styles.productDesc} numberOfLines={2}>{product.description}</Text>
                  
                  <View style={styles.specsGrid}>
                    {keySpecs.map((spec, i) => (
                      <View key={i} style={styles.specItem}>
                        <Text style={styles.specLabel}>{spec.label}</Text>
                        <Text style={styles.specValue}>{spec.value}</Text>
                      </View>
                    ))}
                  </View>

                  {product.certifications && product.certifications.length > 0 && (
                    <View style={styles.certRow}>
                      {product.certifications.slice(0, 3).map((cert, i) => (
                        /* Alternate between teal and orange cert tags for visual rhythm */
                        <Text key={i} style={i % 2 === 0 ? styles.certTag : styles.certTagAlt}>{cert}</Text>
                      ))}
                    </View>
                  )}
                </View>
              </View>
            );
          })}
        </View>

        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>
            <Text style={styles.footerBold}>JoyHand Energy</Text> | Professional Manufacturing Excellence
          </Text>
          <Text style={styles.footerText}>
            Export Dept: sales@joyhand.com | joyhand.com
          </Text>
        </View>
      </Page>
    </Document>
  );
}
