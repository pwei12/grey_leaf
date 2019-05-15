import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {useAllProducts} from '../../services/hookService';
import Product from "../Product/Product";

function Products() {
  const {productList} = useAllProducts();
  return (
    <Container className="mt-3" fluid>
      <Row className="justify-content-md-around pb-5">
        {productList.map(product => (
          <Col xs={12} sm={12} md={6} lg={4} key={product.name}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
