import { useState, useEffect } from "react";
import { getAllProducts } from "../services/productListService";

export function useAllProducts() {
  const [productList, setProductList] = useState([]);
  async function fetchAllProducts() {
    try {
      const products = await getAllProducts();
      setProductList(products.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return { productList, setProductList };
}
