import React from "react";
import { Button } from "react-bootstrap";

function CartTableRow({
  item: { id, name, quantity, price, subTotal },
  itemNum,
  handleQuantityChange,
  handleDeleteItem,
  error,
  index
}) {
  return (
    <tr>
      <td>{itemNum}</td>
      <td>{name}</td>
      <td className="text-center">
        <input
          type="number"
          name={`quantity${index}`}
          id={id}
          value={quantity}
          onChange={handleQuantityChange}
          step="1"
          className="text-center"
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </td>
      <td className="text-right">{price.toFixed(2)}</td>
      <td className="text-right">{subTotal.toFixed(2)}</td>
      <td>
        <Button 
          onClick={() => handleDeleteItem(id)} 
          variant="danger"
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default CartTableRow;
