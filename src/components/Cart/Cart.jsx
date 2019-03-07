import React from "react";
import { Container, Table } from "react-bootstrap";
import { getCartList } from "../../services/productListService";
import CartTableRow from "../CartTableRow/CartTableRow";

function Cart() {
  const cartList = getCartList();

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
          <tbody>
            {cartList.map((item, index) => (
              <CartTableRow key={index} item={item} itemNum={index+1}/>
            ))}
           
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Cart;
