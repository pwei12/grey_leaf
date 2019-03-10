import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import { fireEvent } from "react-testing-library/dist";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "./App";
import * as ProductListService from "./services/productListService";

describe("App", () => {
  const sampleData = [
    {
      id: "GE23cTcUXww",
      name: "Colour Bar Soap",
      price: 25.0,
      description:
        "assorted-color bar soap lot on white surface. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      imageUrl:
        "https://images.unsplash.com/photo-1474625121024-7595bfbc57ac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU5NTA2fQ",
      inCart: false,
      bestSeller: false
    },
    {
      id: "FbrDS0jY_Hw",
      name: "Assorted Bar Soap",
      price: 30.0,
      description:
        "assorted bar soaps. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      imageUrl:
        "https://images.unsplash.com/photo-1546552768-9e3a94b38a59?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU5NTA2fQ",
      inCart: false,
      bestSeller: false
    }
  ];

  beforeEach(() => {
    jest.spyOn(ProductListService, "getAllProducts")
      .mockImplementation(() => sampleData);
  });

  afterEach(() => {
    ProductListService.getAllProducts.mockRestore();
  });

 test("Add item to shopping cart by clicking on 'Add to Cart' button", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const productsLink = getByText(/products/i);
    const cartLink = getByText(/shopping cart/i);
    fireEvent.click(productsLink);
    const addButton = getByText(/Add to Cart/i);
    expect(addButton).toBeInTheDocument();
    fireEvent.click(addButton);
    fireEvent.click(cartLink);
    expect(getByText(/Colour Bar/i)).toBeInTheDocument();
  });

  test("'Add to Cart' button is disabled after being clicked once and change text to 'Added to Cart'", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const productsLink = getByText(/products/i);
    fireEvent.click(productsLink);
    const buttonAddToCart = getByText(/Add to Cart/i);
    fireEvent.click(buttonAddToCart);
    const buttonAddedToCart = getByText(/Added to Cart/i)
    expect(buttonAddedToCart).toBeInTheDocument();
    expect(buttonAddedToCart).toHaveAttribute("disabled");
  });
 });
