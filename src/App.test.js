import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import { fireEvent } from "react-testing-library/dist";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "./App";
import * as ProductListService from "./services/productListService";

describe("Products Page", () => {
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
    jest
      .spyOn(ProductListService, "getAllProducts")
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
    fireEvent.click(getByText(/products/i));
    fireEvent.click(getByText(/Add to Cart/i));
    const buttonAddedToCart = getByText(/Added to Cart/i);
    expect(buttonAddedToCart).toBeInTheDocument();
    expect(buttonAddedToCart).toHaveAttribute("disabled");
  });

  test("'Add to Cart' button remains disabled after navigated back from other pages", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    fireEvent.click(getByText(/products/i)); //click on navlink to products page
    fireEvent.click(getByText(/Add to Cart/i)); //click on button
    fireEvent.click(getByText(/contact/i)); //click on navlink to contacts page
    fireEvent.click(getByText(/products/i)); //click on navlink to navigate back to products page
    const buttonAddedToCart = getByText(/Added to Cart/i);
    expect(buttonAddedToCart).toBeInTheDocument();
    expect(buttonAddedToCart).toHaveAttribute("disabled");
  });
});

describe("Navigation Bar", () => {
  test("There are 'Home', 'Products', Contact' and 'Shopping Cart' links on Navbar", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Products")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
    expect(getByText("Shopping Cart")).toBeInTheDocument();
  });

  test("It shows the corresponding pages after clicking on the links on Navbar", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    fireEvent.click(getByText(/products/i));
    expect(getByText(/add to cart/i)).toBeInTheDocument();

    fireEvent.click(getByText(/contact/i));
    expect(getByText(/whatsapp/i)).toBeInTheDocument();
    expect(getByText(/facebook/i)).toBeInTheDocument();
    expect(getByText(/instagram/i)).toBeInTheDocument();

    fireEvent.click(getByText(/shopping cart/i));
    expect(getByText(/no item added/i)).toBeInTheDocument();

    fireEvent.click(getByText(/home/i));
    expect(getByText(/best sellers/i)).toBeInTheDocument();
    expect(getByText(/welcome to/i)).toBeInTheDocument();
  });
});

describe("Shopping Cart", () => {
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
    jest
      .spyOn(ProductListService, "getAllProducts")
      .mockImplementation(() => sampleData);
  });

  afterEach(() => {
    ProductListService.getAllProducts.mockRestore();
  });
  
  test("Display message 'No items added to cart' before any item is added to cart.", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    fireEvent.click(getByText(/shopping cart/i));
    expect(getByText(/no item added/i)).toBeInTheDocument();
  });
  
  test("Display shopping cart table.", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByText, queryByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    fireEvent.click(getByText(/products/i));
    fireEvent.click(getByText(/add to cart/i));
    fireEvent.click(getByText(/shopping cart/i));
    expect(queryByText(/no item added/i)).toBeNull();
    expect(getByText("Product Name")).toBeInTheDocument();
    expect(getByText("Quantity")).toBeInTheDocument();
    expect(getByText("Price")).toBeInTheDocument();
    expect(getByText("Subtotal")).toBeInTheDocument();
    expect(getByText("Total (SGD)")).toBeInTheDocument();
    expect(getByText("Total Item(s)")).toBeInTheDocument();
    expect(getByText("Shipping Fee (SGD)")).toBeInTheDocument();
    expect(getByText("Delete")).toBeInTheDocument();
    expect(getByText("Proceed to Checkout")).toBeInTheDocument();
  });

  test("Delete item in shopping cart by clicking on 'Delete' button", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    fireEvent.click(getByText(/products/i));
    fireEvent.click(getByText(/Add to Cart/i));
    fireEvent.click(getByText(/shopping cart/i));
    fireEvent.click(getByText("Delete"));
    expect(getByText(/no item added/i)).toBeInTheDocument();
  });
});

describe("Checkout", () => {
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
    jest
      .spyOn(ProductListService, "getAllProducts")
      .mockImplementation(() => sampleData);
  });

  afterEach(() => {
    ProductListService.getAllProducts.mockRestore();
  });

  test("Proceed to checkout page after clicking on 'Proceed to Checkout' button.", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    fireEvent.click(getByText(/products/i));
    fireEvent.click(getByText(/Add to Cart/i));
    fireEvent.click(getByText(/shopping cart/i));
    fireEvent.click(getByText(/proceed to checkout/i));
    expect(getByText(/order summary/i)).toBeInTheDocument();
  });
});