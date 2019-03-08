import React, { useState, useEffect } from "react";
import { 
  Container, 
  Row, 
  Col 
} from "react-bootstrap";
import {
  getAllProducts,
  addToCartList,
  toggleInCart,
  updateProductList
} from "../../services/productListService";
import Product from "../Product/Product";

function Products() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(getAllProducts);
  }, [setProductList]);

  const handleAddToCart = (id, quantity) => {
    //toggle incart and get the updated productlist
    const updatedProductList = toggleInCart(id);
    
    //update state 
    setProductList(updatedProductList);

    //update data 
    updateProductList(updatedProductList);

    //add product into cartList
    addToCartList(id, quantity);
  }

  return (
    <Container className="mt-3" fluid> 
      <Row className="justify-content-md-around">
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
