import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import {
  addItemToCart,
  getProductById
} from "../../services/productListService";

function ProductDetails({ match }) {
  const id = match.params.id;
  const [data, setData] = useState({
    name: "",
    price: "",
    imageUrl: "",
    description: ""
  });
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [error, setError] = useState("");

  async function fetchProductById(id) {
    setData(await getProductById(id));
  }

  useEffect(() => {
    const id = match ? match.params.id : null;
    fetchProductById(id);
  }, []);

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

  const handleQuantityChange = event => {
    const inputQuantity = event.target.value;
    const errorMsg = validateQuantity(inputQuantity);
    if (errorMsg) {
      setError(errorMsg);
    } else {
      setError("");
      setQuantity(parseInt(inputQuantity));
    }
  };

  const handleAddToCart = event => {
    // const updatedProductList = togglePropInCart(id);
    // updateProductList(updatedProductList);
    // addToCartList(id, quantity);
    // setAddedToCart(!inCart);
    addItemToCart()
  };

  return (
    <Container className="pb-5">
      <Row className="justify-content-md-end">
        <Col xs={12} sm={6} md={4} lg={4}>
          <Image src={imageUrl} thumbnail />
        </Col>
        <Col xs={12} sm={6} md={8} lg={8}>
          <h3>{name}</h3>
          <p>${`${price.toFixed(2)}`}</p>
          <p>{description}</p>

          <label htmlFor="quantity">Quantity:</label>
          <input
            id="quantity"
            type="number"
            onChange={handleQuantityChange}
            // value={quantity}
            disabled={addedToCart}
          />
          {error && <div className="alert alert-danger">{error}</div>}
          <Row className="my-3">
            <Col>
              <Button
                type="submit"
                onClick={handleAddToCart}
                disabled={addedToCart}
              >
                {addedToCart ? "Added to Cart" : "Add to Cart"}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type="button">
                <Link to="/cart" className="text-white link">
                  Go to Shopping Cart
                </Link>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
