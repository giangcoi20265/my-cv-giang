import { products } from "@/data";
import ProductList from "@/components/ProductList";

const productsPage = () => {
  return `
  ${ProductList({products})}`   

};

export default productsPage;