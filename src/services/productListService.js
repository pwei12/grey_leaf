import axios from "axios";
import getServerUrl from "../services/serverService";

export function getAllProducts() {
  return axios.get(getServerUrl("api/v1/products"));
}

export async function getBestSellers() {
  const allProducts = await axios.get(getServerUrl("api/v1/products"));
  const bestSellers = allProducts.data.filter(product =>
    product.bestSeller.match(/yes/i)
  );
  return bestSellers;
}

export const fetchProductById = async (id, setter) => {
  try {
    const product = await axios.get(getServerUrl(`api/v1/products/${id}`));
    setter(product.data);
  } catch (err) {
    console.log(err);
  }
};

export function addNewProduct(data) {
  return axios.post(getServerUrl("api/v1/products"), data);
}

export function updateProduct(data, id) {
  return axios.put(getServerUrl(`api/v1/products/${id}`), data);
}

export function deleteProduct(id) {
  return axios.delete(getServerUrl(`api/v1/products`), { data: id });
}

export function addItemToCart(userId, item) {
  return axios.post(getServerUrl(`api/v1/users/${userId}/cart`), item);
}
