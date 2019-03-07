import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Image
} from "react-bootstrap";
import {
  getProductById,
  addToCartList,
  toggleInCart,
  updateProductList
} from "../../services/productListService";

function ProductDetails({ match }) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = getProductById(match.params.id);
  const { id, name, price, description, imageUrl, inCart } = product;

  useEffect(() => {
    setAddedToCart(inCart);
  }, [setAddedToCart]);

  const handleQuantityChange = event => {
    setQuantity(event.target.value);
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
              disabled={addedToCart}
              />
            <button 
              type="submit"
            >
              {addedToCart ? 
                <Link to="/cart">Go to Shopping Cart</Link>
                : 
                "Add to Cart"}
            </button>
          </form>
         
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
