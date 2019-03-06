import React from "react";
import { Container, Table } from "react-bootstrap";
import { getCartList } from "../../services/productListService";
import CartTableRow from "../CartTableRow/CartTableRow";

function Cart() {
  const cartList = getCartList();
  console.log("cartList from cart", cartList);

  return (
    <Container>
      <div>
        <Table striped bordered hover responsive="md" className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          {cartList.map(item => (
            <tbody>
                <CartTableRow item={item}/>
            </tbody>
          ))}
        </Table>
      </div>
    </Container>
  );
}

export default Cart;
