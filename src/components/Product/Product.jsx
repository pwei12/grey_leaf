import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Product({ product, handleAddToCart }) {
  const { name, price, imageUrl, _id, inCart } = product;
  return (
    <Card className="mb-3">
      <Link to={`/products/${_id}`}>
        <Card.Img variant="top" src={imageUrl} alt={name} />
      </Link>

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price.toFixed(2)}</Card.Text>
        <Button
          variant="primary"
          type="button"
          onClick={() => handleAddToCart(_id, 1)}
          disabled={inCart}
        >
          {inCart ? "Added to Cart" : "Add to Cart"}
        </Button>
      </Card.Body>
    </Card>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired
};
export default Product;
