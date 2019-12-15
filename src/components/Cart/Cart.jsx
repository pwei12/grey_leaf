import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import { Container, Table, Button, Row, Col } from "react-bootstrap";
import { sumValueInList, getShippingFee, sumPrice } from "../../services/cartService";
import CartTableRow from "../CartTableRow/CartTableRow";

function Cart() {
  const [cartList, setCartList] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const [error, setError] = useState({});

  useEffect(() => {
    const itemsInCart = JSON.parse(localStorage.getItem('cart'));
    itemsInCart.forEach(item => item.subTotal= item.quantity * item.price);
    setCartList(itemsInCart);
  },[]);

  useEffect(() => {
    setTotalItems(sumValueInList(cartList, "quantity"));
    setTotalPrice(shippingFee + sumPrice());
  },[cartList, shippingFee]);

  useEffect(() => {
  debugger;
  setShippingFee(getShippingFee());
  },[totalItems]);
  
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
   
    const updatedCartList = cartList.map(item => {
      if (item["_id"] !== id) return item; 
      const subTotal = quantity * item.price;
      return { ...item, quantity, subTotal };
    });

    setCartList(updatedCartList);
    setShippingFee(getShippingFee());

    if (errorMsg) {
      error[name] = errorMsg;
      setError(error);
    } else {
      delete error[name];
      localStorage.setItem("cart", JSON.stringify(updatedCartList));
    }
  };
  
  const handleDeleteItem = id => {
    const updatedCartList = cartList.filter(item => item["_id"]!==id);
    localStorage.setItem("cart", JSON.stringify(updatedCartList));
    setCartList(updatedCartList);
  }

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
                <th></th>
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
                <td className="text-right">{shippingFee.toFixed(2)}</td>
                <td></td>
              </tr>
              <tr>
                <td />
                <td>
                  <strong>Total Item(s)</strong>
                </td>
                <td className="text-center">{totalItems}</td>
                <td>
                  <strong>Total (SGD)</strong>
                </td>
                <td className="text-right">{totalPrice.toFixed(2)}</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <p>NO shipping fee if you buy more than 10 items, otherwise shipping fee is $5.</p>
          <Row className="justify-content-center pb-5">
            <Col xs="auto" sm="auto">
              <Button variant="primary" disabled={Object.keys(error).length>0}>
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
