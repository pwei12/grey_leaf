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
          min="1"
          max="50"
        />
        {/* {error && <div className="alert alert-danger">{error}</div>} */}
      </td>
      <td>{price.toFixed(2)}</td>
      <td>{subTotal.toFixed(2)}</td>
    </tr>
  );
}

export default CartTable;
