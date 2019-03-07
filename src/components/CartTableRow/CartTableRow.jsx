import React from "react";

function CartTable({ item: { id, name, quantity, price, subTotal }, itemNum, handleQuantityChange }) {
  return (
    <tr>
      <td>{itemNum}</td>
      <td>{name}</td>
      <td> 
        <input 
          type="number" 
          id={id}
          value={quantity}
          onChange={handleQuantityChange} 
          step="1"
          max="50"
        />
      </td>
      <td>{price}</td>
      <td>{subTotal}</td>
    </tr>
  );
}

export default CartTable;
