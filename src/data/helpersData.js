import { productData } from "./productsData";

export const getProductsByCategory = (category) => {
  return productData.filter((product) => product.category === category);
};
