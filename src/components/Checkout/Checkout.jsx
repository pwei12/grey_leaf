import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { getShippingFee, sumPrice } from "../../services/cartService";

function Checkout() {
  const subTotal = sumPrice().toFixed(2);
  const shippingFee = getShippingFee().toFixed(2);
  const total = parseFloat(subTotal) + parseFloat(shippingFee);
  const [payment, setPayment] = useState(false);
  const handleClickToPay = () => {
    setPayment(!payment);
  }
  const callDialogBox = () => {
    const confirmToPay = window.confirm("Proceed to make payment?");
    console.log("confirm to tpay", confirmToPay);
    if(confirmToPay) {localStorage.clear()};
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
        <Col className="text-right">{subTotal}</Col>
      </Row>
      <Row>
        <Col>Shipping Fee</Col>
        <Col className="text-right">{shippingFee}</Col>
      </Row>
      <Row>
        <Col><strong>Total (SGD)</strong></Col>
        <Col className="text-right">{total}</Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto" sm="auto">
          <Button variant="warning" onClick={handleClickToPay} className="mt-3">
            Checkout
          </Button>
        </Col> 
      </Row>

      { payment && callDialogBox() }
      {/* { payment && alert(
       "Proceed to payment page?")
      } */}
    </Container>
  );
}

export default Checkout;
