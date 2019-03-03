import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from 'react-router-dom'
import './Banner.css'

function Banner() {
    
  return (
    <Container>
      <Row>
        <Col>
            <Link to="/">
          {/* <Image src="./images/banner.jpg" fluid mx-auto width="100%"/> */}
          <Image src="./images/logo.jpg" fluid mx-auto/>
                      <h1>Grey Leaf</h1> 
            </Link>

        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
