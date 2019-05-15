
export const handleAddToCart = (id, quantity, setState) => {
  const itemToStore = { id, quantity };
    if (localStorage.length < 1) {
      const cart = [itemToStore];
      localStorage.setItem("cart", JSON.stringify(cart));
      return;
    }
    const newCart = [...JSON.parse(localStorage.getItem("cart")), itemToStore];
    localStorage.setItem("cart", JSON.stringify(newCart));
   
    setState(true); 
  };

 export const isItemAddedToCart = id => {
    if (localStorage.length < 1) return;
    const itemsInCart = JSON.parse(localStorage.getItem("cart"))
    const itemFound = itemsInCart.find(item => item.id === id);
    return !!itemFound;
  };
