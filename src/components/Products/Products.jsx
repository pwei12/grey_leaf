import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getAllProducts } from "../../services/productListService"
import Product from "../Product/Product";


function Products () {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(getAllProducts);
  }) 
  
    return (
      <Container className="mt-3">
        <Row className="justify-content-md-around">
          {productList.map(product => (
            <Col xs={12} sm={6} md={6} lg={4} key={product.name}>
              <Product
                product={product}
              />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }

export default Products