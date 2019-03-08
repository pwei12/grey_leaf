import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

function BestSellers() {

  //import product list service
  // call your getProductList()
  // renderBestSeller = foundList.filter((item) => {
      // return true or false based of best seller
  //}).map((item)=>{
    //   <Carousel.Item>
    //   <img
    //     className="d-block w-100"
    //     src="https://images.unsplash.com/photo-1549404183-c6ce67f5697c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=clip&max-h=300&q=60"
    //     alt="Soap ABD"
    //   />
    //   <Carousel.Caption>
    //     <h3>Soap AbC</h3>
    //     <p>
    //       Praesent commodo cursus magna, vel scelerisque nisl
    //       consectetur.
    //     </p>
    //   </Carousel.Caption>
    // </Carousel.Item>
  // })  



  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={6} md="auto">
          <h3>Best Sellers</h3>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={4} xs={12} sm={6}>
          <Carousel>
            {/* {renderBestSeller} */}
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
