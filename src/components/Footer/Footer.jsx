import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container className="text-white bg-dark p-2" fluid >
        <span>
          &copy; 
          {new Date().getFullYear()} 
          <Link to="/">Grey Leaf</Link>
          .
        </span>
      </Container>
    </footer>
  );
}

export default Footer;
