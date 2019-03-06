import React from "react";
import { 
  Container,
  Row,
  Col, 
  Carousel 
} from "react-bootstrap";

function BestSellers() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={6} md="auto">
          <h3>Best Sellers</h3>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={4} xs={12} sm={6}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./assets/AllProducts/BestSellers/cindereallaBarSoap.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./assets/AllProducts/BestSellers/naturalBleach.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./assets/AllProducts/BestSellers/naturalLaundryPowder.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
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
