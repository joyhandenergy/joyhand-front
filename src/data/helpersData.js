import { productData } from "./productsData";

export const getProductsByCategory = (category) => {
  return productData.filter((product) => product.category === category);
};

export const getProductBySlug = (slug) => {
  return productData.find((product) => product.slug === slug);
};

export const getRelatedProducts = (product, limit = 3) => {
  if (!product) return [];
  return productData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};

export const getProductsByType = (type) => {
  return productData.filter((product) => product.type === type);
};

export const getCategories = () => {
  return [...new Set(productData.map((product) => product.category))];
};

export const getTypes = () => {
  return [...new Set(productData.map((product) => product.type))];
};

export const getElectricMobilityProducts = () => {
  return productData.filter((product) => product.category === "electric-mobility");
};

export const getElectricMotorcycles = () => {
  return productData.filter((product) => product.category === "electric-mobility" && product.type === "motorcycle");
};

export const getElectricScooters = () => {
  return productData.filter((product) => product.category === "electric-mobility" && product.type === "scooter");
};

export const getPowerBankProducts = () => {
  return productData.filter((product) => product.category === "power-bank");
};

export const getPhoneScreenProtectors = () => {
  return productData.filter((product) => product.category === "phone-screen-protector");
};

export const getFeaturedProducts = () => {
  const categories = getCategories();
  const featured = {};
  categories.forEach(category => {
    featured[category] = productData
      .filter(p => p.category === category)
      .slice(0, 3);
  });
  return featured;
};
