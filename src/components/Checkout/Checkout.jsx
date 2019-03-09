import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { getSubTotal, getShippingFee, getTotal } from "../../services/productListService";

function Checkout() {
  const [payment, setPayment] = useState(false);

  const toPay = () => {
    setPayment(!payment);
    return payment;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="auto" sm="auto">
            <h3>Order Summary</h3>
        </Col>
      </Row>
      <Row>
        <Col>Subtotal</Col>
        <Col className="text-right">{getSubTotal()}</Col>
      </Row>
      <Row>
        <Col>Shipping Fee</Col>
        <Col className="text-right">{getShippingFee()}</Col>
      </Row>
      <Row>
        <Col><strong>Total (SGD)</strong></Col>
        <Col className="text-right">{getTotal()}</Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto" sm="auto">
          <Button variant="warning" onClick={toPay} className="mt-3">
            Checkout
          </Button>
        </Col> 
      </Row>

      { payment && alert(
       "Proceed to payment page?")
      }
    </Container>
  );
}

export default Checkout;
