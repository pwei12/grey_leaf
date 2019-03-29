import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  addToCartList,
  togglePropInCart,
  updateProductList
} from "../../services/productListService";
import Product from "../Product/Product";
import axios from "axios";

function Products() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/products")
      .then(res => {
        setProductList(res.data);
      })
      .catch(err => {
        throw new Error(err);
      });
  }, [setProductList]);

  const handleAddToCart = (id, quantity) => {
    const updatedProductList = togglePropInCart(id);
    setProductList(updatedProductList);
    updateProductList(updatedProductList);
    addToCartList(id, quantity);
  };

  return (
    <Container className="mt-3" fluid>
      <Row className="justify-content-md-around pb-5">
        {productList.map(product => (
          <Col xs={12} sm={12} md={6} lg={4} key={product.name}>
            <Product product={product} handleAddToCart={handleAddToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
