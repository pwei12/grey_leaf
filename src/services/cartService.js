
export const handleAddToCart = (data, quantity, setState) => {
  const itemToStore = {  ...data, quantity };
    if (localStorage.length < 1) {
      const cart = [itemToStore];
      localStorage.setItem("cart", JSON.stringify(cart));
      return;
    }
    const newCart = [...JSON.parse(localStorage.getItem("cart")), itemToStore];
    localStorage.setItem("cart", JSON.stringify(newCart));
   
    setState(true); 
  }

 export const isItemAddedToCart = id => {
    if (localStorage.length < 1) return;
    const itemsInCart = JSON.parse(localStorage.getItem("cart"))
    const itemFound = itemsInCart.find(item => item.id === id);
    return !!itemFound;
  }

export function sumValueInList(list, valueName) {
  return list
    .map(item => item[valueName])
    .reduce((acc, currentValue) => acc + currentValue, 0);
}

export function getShippingFee(totalItems) {
  const shippingFee = totalItems > 10 ? 0 : 5;
  // return parseFloat(shippingFee).toFixed(2);
  return shippingFee;
}