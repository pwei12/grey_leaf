import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import React from 'react';
import {render} from 'react-testing-library';
import App

describe('Products', () => {
    const productList = [
       {
        name: "Charcoal135",
        price: "2.90",
        imageUrl: "https://images.unsplash.com/photo-1547793548-7a0e7dfdb24f",
        description: "made of charcoal"
        },
       { 
        name: "Mugwort24",
        price: "3.20",
        imageUrl: "https://images.unsplash.com/photo-1526366003456-b6be088cf674",
        description: "sdogijweg -sjen23r L1*#^!dsg"
        }
    ]
    test("It renders all product", () => {
        const { getByText } = render(<App />);

        expect(getByText(/Add to Cart/i)).toBeInTheDocument();
        fireEvent
    })
})