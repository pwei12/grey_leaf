import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

function BestSellers() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={6} sm="auto">
          <h3>Best Sellers</h3>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1549404183-c6ce67f5697c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=clip&max-h=300&q=60"
                alt="Soap ABD"
              />
              <Carousel.Caption>
                <h3>Soap AbC</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1549404183-c6ce67f5697c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=clip&max-h=300&q=60"
                alt="Soap XYZ"
              />
              <Carousel.Caption>
                <h3>Soap XYZ</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1549404183-c6ce67f5697c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=clip&max-h=300&q=60"
                alt="Soap JKL"
              />
              <Carousel.Caption>
                <h3>Soap JKL</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default BestSellers;
