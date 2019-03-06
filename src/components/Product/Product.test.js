import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import React from 'react';
import {render} from 'react-testing-library';
import Product from './Product';

describe('Product', () => {
    const props = {
        name: "Charcoal135",
        price: "$20",
        imageUrl: "assets/AllProducts/charcoal135Soap.jpg",
        description: "made of charcoal"
    }

    test("Displays product's name", () => {
        const { getByText } = render(<Product product={props} />);

        //assert that the product's name is displayed
        expect(getByText(props.name)).toBeInTheDocument();
    });

    test("Displays product's price", () => {
        const { getByText } = render(<Product product={props} />);

        //assert that the product's price is displayed
        expect(getByText(props.price)).toBeInTheDocument();
    });

    test("Displays product's image", () => {
        const altText = RegExp(`${props.name}`, 'i');
        const { getByAltText } = render(<Product product={props} />);
       
        //assert that the product's photo is displayed
        expect(getByAltText(altText)).toHaveAttribute("src", props.imageUrl);
    });

    test("Displays product's description", () => {
        const { getByText } = render(<Product product={props} />);
       
        //assert that the product's photo is displayed
        expect(getByText(props.description)).toBeInTheDocument();
    });

    test("Displays 'Add to Cart' button", () => {
        const { getByText } = render(<Product product={props} />);

        //assert that button 'Add to Cart' exists
        expect(getByText("Add to Cart")).toBeInTheDocument();
    });
});


