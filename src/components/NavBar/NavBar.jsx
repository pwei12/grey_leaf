import React from "react";
import {
  Container,
  Nav,
  Navbar
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Container className="mt-3">
      <Navbar expand="lg" bg="dark" variant="light">
        
        <Nav className="d-flex justify-content-sm-center">
          <NavLink to="/" className="mr-3">
            Home
          </NavLink>
          <NavLink to="/products" className="mr-3">
            Products
          </NavLink>
          <NavLink to="/contact" className="mr-3">
            Contact
          </NavLink>
          <NavLink to="/cart" className="mr-3">
            Shopping Cart
          </NavLink>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default NavBar;
