import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Image,
  Button
} from "react-bootstrap";
import {
  getProductById,
  addToCartList,
  toggleInCart,
  updateProductList
} from "../../services/productListService";
import './ProductDetails.css'

function ProductDetails({ match }) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = getProductById(match.params.id);
  const { id, name, price, description, imageUrl, inCart } = product;

  useEffect(() => {
    setAddedToCart(inCart);
  }, [setAddedToCart]);

  const handleQuantityChange = event => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = e => {
    e.preventDefault();
    
    //toggle incart and get the updated productlist
    const updatedProductList = toggleInCart(id);
    
    //update data 
    updateProductList(updatedProductList);
    
    //update state 
    setAddedToCart(!addedToCart);

    //add product into cartList
    addToCartList(id, quantity);
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

          <form 
            name="quantity"
            onSubmit={handleAddToCart}
            >
            <label htmlFor="quantity" >
              Quantity:
            </label>
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
            <Container className="mt-3">
              <Row className="justify-content-flex-end">
                <Col>
              <Button 
                type="submit"
                disabled={addedToCart}
                >
                {addedToCart ? 
                  "Added to Cart"
                  : 
                  "Add to Cart"}
              </Button>
                  </Col>
                </Row>
            </Container>
            <Container className="mt-3">
              <Row className="justify-content-flex-end">
                <Col>
              <Button type="button">
                <Link to="/cart" className="text-white link">Go to Shopping Cart</Link>
              </Button>
            </Col>
                </Row>
            </Container>
          </form>
         
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
