import React, { Component } from "react";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import BestSellers from "../BestSellers/BestSellers";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <NavBar />
        <BestSellers />
      </div>
    );
  }
}

export default HomePage;
