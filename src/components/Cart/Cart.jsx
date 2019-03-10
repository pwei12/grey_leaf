import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import { Container, Table, Button, Row, Col } from "react-bootstrap";
import {
  getCartList,
  updateCartList,
  getShippingFee,
  setSubTotal,
  sumValueInList,
  getTotal,
  togglePropInCart,
  updateProductList
} from "../../services/productListService";
import CartTableRow from "../CartTableRow/CartTableRow";

function Cart() {
  const [cartList, setCartList] = useState([]);
  const [shippingFee, setShippingFee] = useState(0);
  const [error, setError] = useState({});

  useEffect(() => {
    setCartList(getCartList());
    setShippingFee(getShippingFee());
  });

  const schema = {
    quantity: Joi.number()
      .min(1)
      .max(50)
      .required()
  };

  const validateQuantity = value => {
    const obj = { quantity: value };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  const handleQuantityChange = e => {
    const { id, name, value } = e.target;
    const quantity = parseInt(value);
    const errorMsg = validateQuantity(quantity);
    if (errorMsg) {
      const copy = { ...error };
      copy[name] = errorMsg;
      setError(copy);
    } else {
      delete error[name];
      const updatedCartList = cartList.map(item => {
        if (item.id === id) {
          const subTotal = quantity * item.price;
          return { ...item, quantity, subTotal };
        }
        return item;
      });
      updateCartList(updatedCartList);
      setCartList(getCartList());
      setShippingFee(getShippingFee());
    }
  };

  const handleDeleteItem = id => {
    const updatedProductList = togglePropInCart(id);
    updateProductList(updatedProductList);
    const updatedCartList = getCartList().filter(item => item.id !== id);
    updateCartList(updatedCartList);
    setCartList(updatedCartList)
  }

  const totalItems = sumValueInList(cartList, "quantity");
  const subTotal = sumValueInList(cartList, "subTotal");
  setSubTotal(subTotal);
  const total = getTotal();

  return (
    <Container>
      {cartList.length < 1 ? (
        <h1>No item added to cart</h1>
      ) : (
        <div>
          <Row className="justify-content-center mt-3">
            <Col xs="auto" sm="auto">
              <h3>Shopping Cart</h3>
            </Col>
          </Row>
          <Table striped bordered hover className="mt-3">
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
                  handleDeleteItem={handleDeleteItem}
                  error={error[`quantity${index}`]}
                  index={index}
                />
              ))}
              <tr>
                <td />
                <td />
                <td />
                <td>
                  <strong>Shipping Fee (SGD)</strong>
                </td>
                <td className="text-right">{shippingFee}</td>
                <td></td>
              </tr>
              <tr>
                <td />
                <td>
                  <strong>Total Items</strong>
                </td>
                <td className="text-center">{totalItems}</td>
                <td>
                  <strong>Total (SGD)</strong>
                </td>
                <td className="text-right">{total}</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <Row className="justify-content-center pb-5">
            <Col xs="auto" sm="auto">
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
