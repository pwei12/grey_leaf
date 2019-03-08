import React from "react";
import {
  Nav,
  Navbar
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  return (
    <Navbar expand="lg" variant="light" className="navbar">
        
        <Nav className="d-flex justify-content-sm-center">
          <NavLink to="/" className="mr-3 navbarlink">
            Home
          </NavLink>
          <NavLink to="/products" className="mr-3 navbarlink">
            Products
          </NavLink>
          <NavLink to="/contact" className="mr-3 navbarlink">
            Contact
          </NavLink>
          <NavLink to="/cart" className="mr-3 navbarlink">
            Shopping Cart
          </NavLink>
        </Nav>
      </Navbar>
  );
}

export default NavBar;
