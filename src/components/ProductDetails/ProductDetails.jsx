import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  InputGroup,
  Form
} from 'react-bootstrap';
import { getProductById } from '../../services/productListService'

function ProductDetails({match}) {
  const product = getProductById(match.params.id);
  const { name, price, description, imageUrl } = product;
  const [quantity, setQuantity] = useState(0);
  const handleQuantityChange = event => {
    setQuantity(event.target.value);
  }

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

          

          <Form>
            <Form.Group as={Row} 
            // controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Quantity:
    </Form.Label>
              <Col sm={10}>
                <Form.Control type="number" min="1" placeholder="1" onChange={handleQuantityChange} />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Sign in</Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      
    </Container>
  
  )
}

export default ProductDetails
