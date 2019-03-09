import React from "react";

function CartTable( { item: { id, name, quantity, price, subTotal }, 
  itemNum, 
  handleQuantityChange, 
  error, 
  index }) 
  {
  return (
    <tr>
      <td>{itemNum}</td>
      <td>{name}</td>
      <td> 
        <input 
          type="number" 
          name={`quantity${index}`}
          id={id}
          value={quantity}
          onChange={handleQuantityChange} 
          step="1"
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </td>
      <td>{price.toFixed(2)}</td>
      <td>{subTotal.toFixed(2)}</td>
    </tr>
  );
}

export default CartTable;
