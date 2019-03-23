import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Products from "../Products/Products";
import * as ProductListService from "../../services/productListService";

describe("Products", () => {
  const sampleProductList = [
    {
      name: "Charcoal135",
      price: 2.90,
      imageUrl: "https://images.unsplash.com/photo-1547793548-7a0e7dfdb24f",
      description: "made of charcoal"
    },
    {
      name: "Mugwort24",
      price: 3.20,
      imageUrl: "https://images.unsplash.com/photo-1526366003456-b6be088cf674",
      description: "sdogijweg -sjen23r L1*#^!dsg"
    }
  ];

  beforeEach(() => {
    jest.spyOn(ProductListService, "getAllProducts")
      .mockImplementation(() => sampleProductList);
  });

  afterEach(() => {
    ProductListService.getAllProducts.mockRestore();
  });

  test("It renders all products", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getAllByText } = render(
      <Router history={history}>
        <Products />
      </Router>
    );
    expect(getAllByText(/add to cart/i).length).toBe(sampleProductList.length);
  });
});
