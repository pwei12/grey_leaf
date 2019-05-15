import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { getProductById } from "../../services/productListService";
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

  async function fetchProductById(id) {
    const product = await getProductById(id);
    setData(product.data);
  }

  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  useEffect(() => {
    if(isItemAddedToCart(id)) setAddedToCart(true);
  }, [addedToCart]);

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

  const { name, price, imageUrl, description } = data;
  return (
    <Container className="pb-5">
      <Row className="justify-content-md-end">
        <Col xs={12} sm={6} md={4} lg={4}>
          <Image src={imageUrl} thumbnail />
        </Col>
        <Col xs={12} sm={6} md={8} lg={8}>
          <h3>{name}</h3>
          <p>${price}</p>
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
                onClick={() => handleAddToCart(id, quantity, setAddedToCart)}
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
