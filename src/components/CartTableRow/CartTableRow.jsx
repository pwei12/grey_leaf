import React from "react";

function CartTable({ item: { name, quantity, price, subTotal }, itemNum }) {
  return (
    <tr>
      <td>{itemNum}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{subTotal}</td>
    </tr>
  );
}

export default CartTable;
