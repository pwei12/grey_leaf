import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Table, Button, Row, Col } from "react-bootstrap";
import Joi from "joi-browser";
import {
  getCartList,
  updateCartList,
  getShippingFee
} from "../../services/productListService";
import CartTableRow from "../CartTableRow/CartTableRow";

function Cart() {
  const [cartList, setCartList] = useState([]);
  const [shippingFee, setShippingFee] = useState(0);

  useEffect(() => {
    setCartList(getCartList());
    setShippingFee(getShippingFee());
  });

    const handleQuantityChange = e => {
    const id = e.target.id;
    // update cartlist in state
    const updatedCartList = cartList.map(item => {
      if (item.id === id) {
        const quantity = parseInt(e.target.value);
        const subTotal = quantity * item.price;
        return { ...item, quantity , subTotal };
      }
      return item;
    });
    setCartList(updatedCartList);
    //update cartlist in data
    updateCartList(updatedCartList);

    //update shipping fee in state
    setShippingFee(getShippingFee());
  };

  const totalItems = cartList.map(item => item.quantity).reduce((acc, currentValue) => acc + currentValue, 0);
  const total =
    cartList
      .map(item => item.subTotal)
      .reduce((acc, currentValue) => acc + currentValue, 0) + shippingFee;

  return (
    <Container>
      {cartList.length < 1 ? (
        <h1>No item added to cart</h1>
      ) : (
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
                <CartTableRow
                  key={index}
                  item={item}
                  itemNum={index + 1}
                  handleQuantityChange={handleQuantityChange}
                />
              ))}
              <tr>
                <th />
                <th />
                <th />
                <th>Shipping Fee</th>
                <th>SGD {shippingFee.toFixed(2)}</th>
              </tr>
              <tr>
                <th />
                <th>Total Items</th>
                <th>{totalItems}</th>
                <th>Total</th>
                <th>SGD {total.toFixed(2)}</th>
              </tr>
            </tbody>
          </Table>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <Button variant="primary">
                <Link to="/cart/checkout" className="text-white link">
                  Proceed to Checkout
                </Link>
              </Button>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
}

export default Cart;
