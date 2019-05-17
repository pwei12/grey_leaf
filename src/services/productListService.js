import axios from "axios";
import getServerUrl from "../services/serverService";
let cartList = [];
let subTotal = 0;

let productList = async () => {
  try {
    const res = await axios.get(getServerUrl("api/v1/products"));
    const { data } = await res.data;
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

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

export const fetchProductById = async(id, setter) => {
  try {
    const product = await axios.get(getServerUrl(`api/v1/products/${id}`));
    setter(product.data);
  } catch (err) {
    console.log(err);
  }
}

export function addNewProduct(data) {
  return axios.post(getServerUrl("api/v1/products"), data);
}

export function updateProduct(data, id) {
  return axios.put(getServerUrl(`api/v1/products/${id}`), data);
}

export function deleteProduct(id) {
  return axios.delete(getServerUrl(`api/v1/products`), { data: id });
}

export function getCartProductById(id) {
  return cartList.find(product => product.id === id);
}

export function updateProductList(list) {
  productList = [...list];
}

export function togglePropInCart(id) {
  const updatedProductList = productList.map(product => {
    if (product.id === id) {
      const updatedProduct = { ...product, inCart: !product.inCart };
      return updatedProduct;
    }
    return product;
  });
  return updatedProductList;
}

export function addItemToCart(userId, item) {
  return axios.post(getServerUrl(`api/v1/users/${userId}/cart`), item);
}

export function getCartList() {
  return cartList;
}

export function updateCartList(list) {
  cartList = [...list];
}

export function getShippingFee() {
  const totalItems = cartList
    .map(item => item.quantity)
    .reduce((acc, currentValue) => acc + currentValue, 0);
  const shippingFee = totalItems > 10 ? 0 : 5;
  return shippingFee.toFixed(2);
}

export function sumValueInList(list, valueName) {
  return list
    .map(item => item[valueName])
    .reduce((acc, currentValue) => acc + currentValue, 0);
}

export function setSubTotal(value) {
  subTotal = value;
}

export function getSubTotal() {
  return subTotal.toFixed(2);
}

export function getTotal() {
  return (subTotal + parseInt(getShippingFee())).toFixed(2);
}
