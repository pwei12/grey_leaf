import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import {
  getCartList,
  getProductById,
  addToCartList,
  toggleInCart,
  updateProductList,
  getCartProductById
} from "../../services/productListService";

function ProductDetails({ match }) {
  const product = getProductById(match.params.id);
  const { id, name, price, description, imageUrl, inCart } = product;
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  useEffect(() => {
    if (getCartList().length > 0) {
      const cartProduct = getCartProductById(id);
      if (cartProduct) {
        setQuantity(cartProduct.quantity);
      }
    }
    setAddedToCart(inCart);
  });

  const handleQuantityChange = event => {
    setQuantity(parseInt(event.target.value));
  };
  const handleAddToCart = event => {
    const updatedProductList = toggleInCart(id);
    updateProductList(updatedProductList);
    addToCartList(id, quantity);
    setAddedToCart(!inCart);
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
            placeholder="1"
            onChange={handleQuantityChange}
            value={quantity}
            min="1"
            max="50"
            disabled={addedToCart}
          />
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
