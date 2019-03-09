import React from "react";
import { Link } from "react-router-dom";
import { 
  Card,
  Button
 } from "react-bootstrap";

function Product({ product, handleAddToCart }) {
  const { name, price, imageUrl, id, inCart } = product;
  return (
    <Card className="mb-3">
      <Link to={`/products/product/${id}`}>
        <Card.Img variant="top" src={imageUrl} alt={name} />
      </Link>

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price.toFixed(2)}</Card.Text>
        <Button 
          variant="primary" 
          type="button" 
          onClick={() => handleAddToCart(id, 1)}
          disabled={inCart}
        >
          {inCart ? "Added to Cart" : "Add to Cart"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
