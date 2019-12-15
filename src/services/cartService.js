
export const handleAddToCart = (data, quantity, setState) => {
  const itemToStore = { ...data, quantity };
    if (localStorage.length < 1) {
      const cart = [itemToStore];
      localStorage.setItem("cart", JSON.stringify(cart));
      return;
    }
    const newCart = [...JSON.parse(localStorage.getItem("cart")), itemToStore];
    localStorage.setItem("cart", JSON.stringify(newCart));
    setState(true); 
}

const isCartEmpty = () => {
  return !localStorage.getItem('cart');
}

const getItemsInCart = () => {
  return JSON.parse(localStorage.getItem('cart'));
}

export const isItemAddedToCart = id => {
  if(isCartEmpty) return;
  const itemFound = getItemsInCart().find(item => item["_id"] === id);
  return !!itemFound;
}

export const sumValueInList = (list, valueName) => {
  return list
    .map(item => item[valueName])
    .reduce((acc, currentValue) => acc + currentValue, 0);
}

export const getShippingFee = () => {
  if(isCartEmpty) return;
  const totalItems = sumValueInList(getItemsInCart(), "quantity");
  const shippingFee = totalItems > 10 ? 0 : 5;
  return shippingFee;
}

export const sumPrice = () => {
  const cartList = JSON.parse(localStorage.getItem('cart'));
  return cartList.reduce((acc, currentVal) => acc + currentVal.price * currentVal.quantity, 0);
}