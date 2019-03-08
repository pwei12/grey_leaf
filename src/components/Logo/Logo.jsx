import React from "react";
import { 
  Container, 
  Image, 
  Col, 
  Row 
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Brand_Logo from '../../assets/logo.jpg'
import "./Logo.css";

function Logo() {
  return (
    <Container >
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Link to="/" className="link">
            <Image src={Brand_Logo} fluid className="mx-auto" />
            <h1>Grey Leaf</h1>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Logo;
