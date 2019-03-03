import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function BestSellers() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} sm={6} md={4}>
          <h1>Best Sellers</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <Link to="/">
            <Image
              src="./images/AllProducts/BestSellers/cindereallaBarSoap.jpg"
              fluid
              rounded
            />
          </Link>
          <h4>Cinderealla Bar Soap</h4>
        </Col>
        <Col xs={6} md={4}>
          <Link to="/">
            <Image
              src="./images/AllProducts/BestSellers/naturalBleach.jpg"
              fluid
              rounded
            />
          </Link>
          <h4>Natural Bleach</h4>
        </Col>
        <Col xs={6} md={4}>
          <Link to="/">
            <Image
              src="./images/AllProducts/BestSellers/naturalLaundryPowder.jpg"
              fluid
              rounded
            />
          </Link>
          <h4>Natural Laundry Powder</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default BestSellers;
