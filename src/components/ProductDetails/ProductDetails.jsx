import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  InputGroup,
  Form
} from "react-bootstrap";
import {
  getProductById,
  addToCart
} from "../../services/productListService";

function ProductDetails({ match }) {
  const [quantity, setQuantity] = useState(1);
  const [addCartButton, setAddCartButton] = useState(false);

  const product = getProductById(match.params.id);
  const { id, name, price, description, imageUrl } = product;

  const handleQuantityChange = event => {
    setQuantity(event.target.value);
  };


  const handleAddToCart = e => {
    e.preventDefault();
    setAddCartButton(!addCartButton);
    addToCart(id, quantity);
  };

  return (
    <Container>
      <Row className="justify-content-md-around">
        <Col xs={12} sm={6} md={4} lg={4}>
          <Image src={imageUrl} thumbnail />
        </Col>
        <Col xs={12} sm={6} md={8} lg={8}>
          <h3>{name}</h3>
          <p>${`${price.toFixed(2)}`}</p>
          <p>{description}</p>

          <form 
            name="quantity"
            onSubmit={handleAddToCart}
            >
            <label htmlFor="quantity">
              Quantity
            </label>
            <input 
              id="quantity"
              type="number" 
              placeholder="1"
              onChange={handleQuantityChange}
              value={quantity}
              />
            <button 
              type="submit"
              disabled = {addCartButton? true : null}
            >
              {addCartButton ? "Added to Cart" : "Add to Cart"}
            </button>
          </form>
         
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
