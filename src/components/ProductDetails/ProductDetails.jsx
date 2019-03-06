import React from 'react';
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  InputGroup,
  Form
} from 'react-bootstrap';
import { getProductById } from '../../services/productList'

function ProductDetails({match}) {
  
  const product = getProductById(match.params.id);
  const imageUrl = product.imageUrl;
  const { name, price, description } = product;
  return (
    <Container>
      <Row className="justify-content-md-around">
        <Col xs={12} sm={6} md={4} lg={4}> 
        <Image src={imageUrl} thumbnail/>
        </Col>
        <Col xs={12} sm={6} md={8} lg={8}> 
          <h3>{name}</h3>
          <p>{`\$${price.toFixed(2)}`}</p>
          <p>{description}</p>

          
        </Col>
      </Row>
      
    </Container>
  
  )
}

export default ProductDetails
