import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container
} from "react-bootstrap";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Container>
      <Navbar expand="lg" bg="dark" variant="light">
        
        <Nav className="d-flex justify-content-sm-center">
          <NavLink to="/" className="mr-3">
            Home
          </NavLink>
          <NavLink to="/allProducts" className="mr-3">
            All Products
          </NavLink>
          <NavLink to="/contact" className="mr-3">
            Contact
          </NavLink>
          <NavLink to="/contact" className="mr-3">
            Shopping Cart
          </NavLink>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </Container>
  );
}

export default NavBar;
