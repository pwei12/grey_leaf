import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BestSellers from "../BestSellers/BestSellers";

export class HomePage extends Component {
  render() {
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
              <p>~ Our products are 100% handmade. <br/>
                 ~ We welcome custom order 
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
