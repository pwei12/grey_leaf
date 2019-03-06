import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Product({ product }) {
  const { name, price, imageUrl, id } = product;
  return (
    <Card className="mb-3">
      <Link to={`/products/product/${id}`}>
        <Card.Img variant="top" src={imageUrl} alt={name} />
      </Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price.toFixed(2)}</Card.Text>
        {/* <Card.Text>{description}</Card.Text> */}
        <Button variant="primary" >
          <Link to="/cart" className="text-white">Add to Cart</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
