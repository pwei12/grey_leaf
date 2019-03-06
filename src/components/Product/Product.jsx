import React from 'react';
import {
    Card,
    Button
} from 'react-bootstrap';

// function Product({ name, price, imageUrl, description }) {
function Product({product}) {
    const { name, price, imageUrl, description } = product;
  return (
      <Card className="mb-3">
        <Card.Img 
            variant="top" 
            src={imageUrl}
            // src="assets/AllProducts/greenZebraSoap.jpg" 
            alt={name}
            // alt = "greenzebra"
        />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{price}</Card.Text>
            <Card.Text>
                {description}
                {/* "This soap is made of" */}
            </Card.Text>                                            
            <Button variant="primary">
                Add to Cart
            </Button>
        </Card.Body>
      </Card>
  )
}

export default Product
