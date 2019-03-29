import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Logo from "../src/components/Logo/Logo";
import Contact from "../src/components/Contact/Contact";
import HomePage from "../src/components/HomePage/HomePage";
import NavBar from "../src/components/NavBar/NavBar";
import Products from "../src/components/Products/Products";
import ProductDetails from "../src/components/ProductDetails/ProductDetails";
import Cart from "../src/components/Cart/Cart";
import Checkout from "../src/components/Checkout/Checkout";
import Footer from "../src/components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <Logo />
          <NavBar />
          <Switch>
            <Route path="/cart/checkout" component={Checkout} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact" component={Contact} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Products} />
            <Route path="/" exact component={HomePage} />
          </Switch>
          <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
