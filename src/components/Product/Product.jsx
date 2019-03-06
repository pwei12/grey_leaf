import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { addToCart } from '../../services/productListService'

function Product({ product }) {
  const { name, price, imageUrl, id } = product;
  const [addCartButton, setAddCartButton] = useState(false);

  const handleAddToCart = e => {
    e.preventDefault();
    setAddCartButton(!addCartButton);
    addToCart(id, 1);
  };

  return (
    <Card className="mb-3">
      <Link to={`/products/product/${id}`}>
        <Card.Img variant="top" src={imageUrl} alt={name} />
      </Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price.toFixed(2)}</Card.Text>
        {/* <Card.Text>{description}</Card.Text> */}
        <Button variant="primary" onClick={handleAddToCart}>
          {/* <Link to="/cart" className="text-white">Add to Cart</Link> */}
        {addCartButton ?
            <Link to="/cart" className="text-white">Go to Shopping Cart</Link>
          :
          "Add to Cart"}
          </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
