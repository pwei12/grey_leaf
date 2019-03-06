import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
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
          <NavLink to="/shop" className="mr-3">
            Shop
          </NavLink>
          <NavLink to="/contact" className="mr-3">
            Contact
          </NavLink>
          <NavLink to="/shoppingCart" className="mr-3">
            Shopping Cart
          </NavLink>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
    </Container>
  );
}

export default NavBar;
