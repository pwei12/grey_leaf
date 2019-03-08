import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import React from 'react';
import {render} from 'react-testing-library';
import Product from './Product';
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe('Product', () => {
    const props = {
        name: "Charcoal135",
        price: 20.00,
        imageUrl: "https://www.google.com.sg/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1547793549-70faf88838c8%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fsearch%2Fphotos%2Fhandmade-soap&docid=8HMVkL4s6VCznM&tbnid=vz8-a6ULh8CinM%3A&vet=10ahUKEwji3KPdovLgAhXElOYKHQ2_CJ0QMwg_KAIwAg..i&w=1000&h=665&itg=1&bih=743&biw=1280&q=unsplash%20hand%20made%20soap&ved=0ahUKEwji3KPdovLgAhXElOYKHQ2_CJ0QMwg_KAIwAg&iact=mrc&uact=8",
        description: "made of charcoal",
        id: "jwgexq",
        inCart: false
    }

    test("Displays product's name", () => {
        const history = createMemoryHistory({ initialEntries: ["/"] });
  const { getByText } = render(
    <Router history={history} >
      <Product product={props} />
    </Router>
  );
        // const { getByText,debug } = render(<Product product={props} />);
        //assert that the product's name is displayed
        expect(getByText(props.name)).toBeInTheDocument();
    });

    test("Displays product's price", () => {
        const history = createMemoryHistory({ initialEntries: ["/"] });
        const { getByText } = render(
          <Router history={history} >
            <Product product={props} />
          </Router>
        )

        // const { getByText } = render(<Product product={props} />);

        //assert that the product's price is displayed
        expect(getByText("$20.00")).toBeInTheDocument();
    });

    test("Displays product's image", () => {

        const altText = RegExp(`${props.name}`, 'i');
        const history = createMemoryHistory({ initialEntries: ["/"] });
  const { getByAltText } = render(
    <Router history={history} >
      <Product product={props} />
    </Router>
  )
        // const { getByAltText } = render(<Product product={props} />);
       
        //assert that the product's photo is displayed
        expect(getByAltText(altText)).toHaveAttribute("src", props.imageUrl);
    });

    test("Displays 'Add to Cart' button", () => {
        // const { getByText } = render(<Product product={props} />);
        const history = createMemoryHistory({ initialEntries: ["/"] });
  const { getByText } = render(
    <Router history={history} >
      <Product product={props} />
    </Router>
  )
        //assert that button 'Add to Cart' exists
        expect(getByText("Add to Cart")).toBeInTheDocument();
    });
});


