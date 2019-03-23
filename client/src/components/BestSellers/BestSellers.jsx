import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { getAllProducts } from "../../services/productListService";
import { Link } from "react-router-dom";

function BestSellers() {
  const bestSellerList = getAllProducts().filter(product => product.bestSeller);
  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center mt-3">
          <Col xs={6} sm="auto">
            <h3>Best Sellers</h3>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6}>
            <Carousel>
              {bestSellerList.map((product, index) => (
                <Carousel.Item key={index}>
                  <Link to={`/products/product/${product.id}`}>
                    <img
                      className="d-block w-100"
                      src={product.imageUrl}
                      alt={product.name}
                    />
                    <Carousel.Caption>
                      <h3>{product.name}</h3>
                      <p>${product.price.toFixed(2)}</p>
                    </Carousel.Caption>
                  </Link>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BestSellers;
