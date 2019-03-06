import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import React from 'react';
import {render} from 'react-testing-library';
import Shop from './Shop';

describe('Shop', () => {
    const productList = [
       {
        name: "Charcoal135",
        price: "20",
        imageUrl: "assets/AllProducts/charcoal135soap.jpg",
        description: "made of charcoal"
        },
       { 
        name: "Mugwort24",
        price: "28",
        imageUrl: "assets/AllProducts/mugwort24b.jpg",
        description: "sdogijweg"
        }
    ]
    test("It renders all product", () => {
        const { getByText } = render(<Shop {...productList} />);

        expect(getByText(/product/i)).toBeInTheDocument();
    })
})