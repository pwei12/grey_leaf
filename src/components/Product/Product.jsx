import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    Button
} from 'react-bootstrap';

function Product({product}) {
    const { name, price, imageUrl, description } = product;
  return (
      <Card className="mb-3">
        <Card.Img 
            variant="top" 
            src={imageUrl}
            alt={name}
        />
        <Card.Body>
            <Link to="/shop/product">
                <Card.Title>{name}</Card.Title>
                <Card.Text>${price.toFixed(2)}</Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>                                            
                <Button variant="primary">
                    Add to Cart
                </Button>
            </Link>
        </Card.Body>
      </Card>
  )
}

export default Product
