import { NextResponse } from "next/server";
import { productData } from "@/data";
import { Document, Page, Text, View, Image, StyleSheet, renderToBuffer } from "@react-pdf/renderer";

// Premium B2B Styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#121b2d",
  },
  // Decorative Accent
  accentBar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 4,
    backgroundColor: "#ff7f41",
  },
  header: {
    marginTop: 10,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottom: "1px solid #ff7f41",
    paddingBottom: 15,
  },
  logoContainer: {
    width: 130,
  },
  logo: {
    width: "100%",
    height: "auto",
  },
  headerInfo: {
    textAlign: "right",
  },
  headerTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 18,
    color: "#121b2d",
    marginBottom: 2,
  },
  headerBadge: {
    fontSize: 8,
    color: "#ff7f41",
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  categoryHero: {
    backgroundColor: "#f8f9fa",
    padding: 20,
    borderRadius: 8,
    marginBottom: 25,
    borderLeft: "4px solid #ff7f41",
  },
  categoryTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 20,
    color: "#121b2d",
    marginBottom: 6,
  },
  categoryDesc: {
    fontSize: 10,
    color: "#6c727f",
    lineHeight: 1.5,
  },
  productCard: {
    marginBottom: 20,
    padding: 15,
    border: "1px solid #f0f0f0",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  imageSection: {
    width: "32%",
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: 120,
    objectFit: "contain",
  },
  detailsSection: {
    width: "65%",
  },
  productHeader: {
    marginBottom: 10,
  },
  productName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 14,
    color: "#121b2d",
    marginBottom: 2,
  },
  productModel: {
    fontSize: 9,
    color: "#ff7f41",
    fontFamily: "Helvetica-Bold",
  },
  productDesc: {
    fontSize: 9,
    color: "#6c727f",
    marginBottom: 12,
    lineHeight: 1.5,
  },
  specsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
    borderTop: "1px solid #f4f6f9",
    paddingTop: 8,
  },
  specItem: {
    width: "50%",
    marginBottom: 6,
    paddingRight: 10,
  },
  specLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8,
    color: "#121b2d",
    marginBottom: 1,
  },
  specValue: {
    fontSize: 8,
    color: "#4a5568",
  },
  certRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  certTag: {
    backgroundColor: "#fff6f2",
    color: "#ff7f41",
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    padding: "2px 8px",
    borderRadius: 4,
    marginRight: 6,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    paddingTop: 15,
    borderTop: "1px solid #f4f6f9",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    fontSize: 8,
    color: "#94a3b8",
  },
  footerBold: {
    fontFamily: "Helvetica-Bold",
    color: "#64748b",
  },
});

const categoryMeta = {
  battery: {
    name: "Energy Storage Systems",
    desc: "Industrial-grade LiFePO4 battery solutions. Engineered for reliability, vertical integration, and long cycle life in residential and commercial environments.",
  },
  inverter: {
    name: "Solar Power Conversion",
    desc: "Advanced MPPT hybrid and off-grid inverters. Built with Tier-1 power electronics for high-efficiency energy management and smart grid integration.",
  },
  "electric-mobility": {
    name: "E-Mobility Solutions",
    desc: "Sustainable urban transportation. High-torque electric motors and long-range battery packs designed for commercial logistics and personal mobility.",
  },
  "portable-power": {
    name: "Portable Energy Hubs",
    desc: "Production-ready portable power solutions. High-capacity LFP cells and pure sine wave technology for reliable off-grid energy anywhere.",
  },
  "power-bank": {
    name: "Mobile Energy Solutions",
    desc: "Premium consumer tech chargers. Ultra-fast PD charging, wireless integration, and ruggedized designs for global distribution.",
  },
};

function getKeySpecs(product) {
  const specs = [];
  const cat = product.category;
  const s = product.specifications || {};

  if (cat === "battery") {
    if (s.nominalVoltage) specs.push({ label: "Voltage", value: s.nominalVoltage });
    if (s.capacity) specs.push({ label: "Capacity", value: s.capacity });
    if (s.energy) specs.push({ label: "Nominal Energy", value: s.energy });
    if (s.cycleLife) specs.push({ label: "Service Life", value: s.cycleLife });
    if (s.dimensions) specs.push({ label: "Dimensions", value: s.dimensions });
  } else if (cat === "inverter") {
    if (s.power) specs.push({ label: "Rated Power", value: s.power });
    if (s.acOutput) specs.push({ label: "AC Output", value: s.acOutput });
    if (s.efficiency) specs.push({ label: "Peak Efficiency", value: s.efficiency });
    if (s.protectionClass) specs.push({ label: "IP Rating", value: s.protectionClass });
  } else if (cat === "electric-mobility") {
    if (s.motor) specs.push({ label: "Motor Power", value: s.motor });
    if (s.battery) specs.push({ label: "Battery Spec", value: s.battery });
    if (s.maxSpeed || s.topSpeed) specs.push({ label: "Max Speed", value: s.maxSpeed || s.topSpeed });
    if (s.maxRange || s.mileage) specs.push({ label: "Rated Range", value: s.maxRange || s.mileage });
  } else {
    // Default specs for other categories
    Object.entries(s).slice(0, 5).forEach(([key, val]) => {
      if (typeof val === 'string') {
        const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        specs.push({ label, value: val });
      }
    });
  }
  return specs.slice(0, 5);
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    if (!category || !categoryMeta[category]) {
      return new NextResponse("Invalid or missing category", { status: 400 });
    }

    const filteredProducts = productData.filter(p => p.category === category);
    if (filteredProducts.length === 0) {
      return new NextResponse("No products found for this category", { status: 404 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const logoUrl = `${baseUrl}/images/logos/joyhandLogo.png`;

    const PdfDocument = () => (
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

          {filteredProducts.map((product, idx) => {
            const keySpecs = getKeySpecs(product);
            const imageUrl = `${baseUrl}${product.image}`;
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
                  
                  <Text style={styles.productDesc}>{product.description}</Text>
                  
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
                      {product.certifications.slice(0, 4).map((cert, i) => (
                        <Text key={i} style={styles.certTag}>{cert}</Text>
                      ))}
                    </View>
                  )}
                </View>
              </View>
            );
          })}

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

    const pdfBuffer = await renderToBuffer(<PdfDocument />);
    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="joyhand-${category}-catalog.pdf"`,
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return new NextResponse("Failed to generate PDF catalog.", { status: 500 });
  }
}