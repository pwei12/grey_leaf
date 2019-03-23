import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BestSellers from "../BestSellers/BestSellers";

function HomePage() {
  return (
    <div className="pb-5">
      <div>
        <BestSellers />
      </div>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col sm="auto">
            <h1 className="justify-content-center">
              <strong>
                Welcome to <em>Grey Leaf</em>
              </strong>
            </h1>
            <p>
              ~ Our products are 100% handmade. <br />~ We welcome custom order
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
