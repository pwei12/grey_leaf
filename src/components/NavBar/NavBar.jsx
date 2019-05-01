import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="sm" className="navbar">
      <Nav>
        <NavLink to="/" className="pr-5 link">
          Home
        </NavLink>
        <NavLink to="/products" className="pr-5 link">
          Products
        </NavLink>
        <NavLink to="/contact" className="pr-5 link">
          Contact
        </NavLink>
        <NavLink to="/cart" className="pr-5 link">
          Shopping Cart
        </NavLink>
        <NavLink to="/login/admin" className="pr-5 link">
          Admin Login
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
