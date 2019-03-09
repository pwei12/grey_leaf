import React from "react";
import { Container, Image, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Brand_Logo from "../../assets/logo.jpg";

function Logo() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={6} sm="auto">
          <Link to="/" className="link">
            <Image src={Brand_Logo} fluid roundedCircle thumbnail className="mx-auto" />
            <h1 className="text-nowrap"><strong><em>Grey Leaf</em></strong></h1>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Logo;
