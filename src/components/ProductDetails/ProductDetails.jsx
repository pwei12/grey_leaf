import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { fetchProductById } from "../../services/productListService";
import { handleAddToCart, isItemAddedToCart } from "../../services/cartService";

function ProductDetails({ match }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const [data, setData] = useState({
    name: "",
    price: "",
    imageUrl: "",
    description: ""
  });
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const id = match.params.id;

  const getDataFromLocalStorage = id => {
    const data = JSON.parse(localStorage.getItem('cart')).filter(item => item["_id"]===id);
    setData(data[0]);
    setQuantity(data[0].quantity);
  }

  useEffect(() => {
    if(isItemAddedToCart(id)) {
      setAddedToCart(true);
      getDataFromLocalStorage(id);
    } else {
      fetchProductById(id, setData);
    }
  }, [id, addedToCart]);

  const quantitySchema = {
    quantity: Joi.number()
      .min(1)
      .max(50)
      .required()
  };

  const validateQuantity = value => {
    const obj = { quantity: value };
    const { error } = Joi.validate(obj, quantitySchema);
    return error ? error.details[0].message : null;
  };

  const handleQuantityChange = e => {
    const inputQuantity = parseInt(e.target.value);
    const errorMsg = validateQuantity(inputQuantity);
    const cart = JSON.parse(localStorage.getItem("cart"));
    let updatedCart;
    if(cart) {
       updatedCart = cart.map(item => {
        if (item["_id"] !== id) return item; 
        return { ...item, inputQuantity };
      });
    } else {
      updatedCart = {...data, quantity}
    }

    setQuantity(inputQuantity);
    if (errorMsg) {
      setError(errorMsg);
    } else {
      setError("");
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const { name, price, imageUrl, description } = data;
  return (
    <Container className="pb-5">
      <Row className="justify-content-md-end">
        <Col xs={12} sm={6} md={4} lg={4}>
          <Image src={imageUrl} thumbnail />
        </Col>
        <Col xs={12} sm={6} md={8} lg={8}>
          <h3>{name}</h3>
          <p>${parseFloat(price).toFixed(2)}</p>
          <p>{description}</p>

          <label htmlFor="quantity">Quantity:</label>
          <input
            id="quantity"
            type="number"
            onChange={handleQuantityChange}
            value={quantity}
            disabled={addedToCart}
          />
          {error && <div className="alert alert-danger">{error}</div>}
          <Row className="my-3">
            <Col>
              <Button
                type="submit"
                onClick={() => handleAddToCart(data, quantity, setAddedToCart)}
                disabled={addedToCart}
              >
                {addedToCart ? "Added to Cart" : "Add to Cart"}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
