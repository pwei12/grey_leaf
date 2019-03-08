import React from "react";
import { Container, Badge, Row, Col, Button } from "react-bootstrap";
import { getSubTotal, getShippingFee } from "../../services/productListService";

function Checkout() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg={6}>
          <h1>
            <Badge variant="Secondary">Order Summary</Badge>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>Subtotal</Col>
        <Col>SGD {getSubTotal()}</Col>
      </Row>
      <Row>
        <Col>Shipping Fee</Col>
        <Col>SGD {getShippingFee()}</Col>
      </Row>
      <Row>
        <Col>Total</Col>
        <Col>SGD {getSubTotal() + getShippingFee()}</Col>
      </Row>
      <Button variant="warning">Checkout</Button>
        
    </Container>
  );
}

export default Checkout;
