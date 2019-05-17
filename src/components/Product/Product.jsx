import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { handleAddToCart, isItemAddedToCart } from "../../services/cartService";

function Product({ product }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const {name, price, imageUrl, _id:id} = product;

    useEffect(()=>{
      if(isItemAddedToCart(id)) setAddedToCart(true);
    },[addedToCart]);

  return (
    <Card className="mb-3">
      <Link to={`/products/${id}`}>
        <Card.Img variant="top" src={imageUrl} alt={name} />
      </Link>

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price.toFixed(2)}</Card.Text>
        <Button
          variant="primary"
          type="button"
          onClick={() => handleAddToCart(product, 1, setAddedToCart)}
          disabled={addedToCart}
        >
          {addedToCart ? "Added to Cart" : "Add to Cart"}
        </Button>
      </Card.Body>
    </Card>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired
};
export default Product;
