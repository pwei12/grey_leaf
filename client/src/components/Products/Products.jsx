import React, { useState, useEffect } from "react";
import { 
  Container, 
  Row, 
  Col 
} from "react-bootstrap";
import {
  getAllProducts,
  addToCartList,
  togglePropInCart,
  updateProductList
} from "../../services/productListService";
import Product from "../Product/Product";

function Products() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(getAllProducts);
  });

  const handleAddToCart = (id, quantity) => {
    const updatedProductList = togglePropInCart(id);
    setProductList(updatedProductList);
    updateProductList(updatedProductList);
    addToCartList(id, quantity);
  }

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
