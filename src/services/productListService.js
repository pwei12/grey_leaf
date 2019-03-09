let productList = [
    {
        id: "57eUYHIIIH0",
        name: "Red Flower Soap",
        price: 20.00,
        description: "red flower petals on table. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        imageUrl: "https://images.unsplash.com/photo-1547793548-7a0e7dfdb24f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU5NTA2fQ",
        inCart: false,
        bestSeller: false
    },
    {
        id: "T3_G_0nTXPE",
        name: "Red Rose Soap",
        price: 13.90,
        description: "red rose petals. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        imageUrl: "https://images.unsplash.com/photo-1547793549-70faf88838c8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU5NTA2fQ",
        inCart: false,
        bestSeller: true
    },
    {
        id: "GE23cTcUXww",
        name: "Colour Bar Soap",
        price: 25.00,
        description: "assorted-color bar soap lot on white surface. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        imageUrl: "https://images.unsplash.com/photo-1474625121024-7595bfbc57ac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU5NTA2fQ",
        inCart: false,
        bestSeller: false
    },
    {
        id: "FbrDS0jY_Hw",
        name: "Assorted Bar Soap",
        price: 30.00,
        description: "assorted bar soaps. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        imageUrl: "https://images.unsplash.com/photo-1546552768-9e3a94b38a59?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU5NTA2fQ",
        inCart: false,
        bestSeller: false
    },
    {
        id: "H7SCRwU1aiM",
        name: "Alphabet Cube",
        price: 18.00,
        description: "assorted-color alphabet cube toy lot. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        imageUrl: "https://images.unsplash.com/photo-1535572290543-960a8046f5af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU5NTA2fQ",
        inCart: false,
        bestSeller: true
    },
    {
        id: "J4wNtLfEnr0",
        name: "Soap XYZ",
        price: 21.50,
        description: "gray steel faucet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        imageUrl: "https://images.unsplash.com/photo-1418754356805-b89082b6965e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU5NTA2fQ",
        inCart: false,
        bestSeller: false
    },
    {
        id: "mv7kxYh5Rko",
        name: "Soap Coffee",
        price: 5.00,
        description: "Coffee Beans blend paper bag on ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        imageUrl: "https://images.unsplash.com/photo-1495881674446-33314d7fb917?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU5NTA2fQ",
        inCart: false,
        bestSeller: false
    },
    {
        id: "ntyA35WOb-k",
        name: "SOap Packs",
        price: 29.00,
        description: "assorted-color soap packs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        imageUrl: "https://images.unsplash.com/photo-1526366003456-b6be088cf674?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=500&max-h=330&q=60",
        inCart: false,
        bestSeller: true
    },
    {
        id: "fL5xqqoUVF0",
        name: "Soap ABC",
        price: 42.80,
        description: "embroidery near textile. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        imageUrl: "https://images.unsplash.com/photo-1466027449668-27f96b692ba4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU5NTA2fQ",
        inCart: false,
        bestSeller: false
    },
    {
        id: "mL3sqqotVFi",
        name: "Soap JK-L",
        price: 42.80,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumadsg adsle",
        imageUrl: "https://images.unsplash.com/photo-1454873019514-eae2f086587a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        inCart: false,
        bestSeller: false
    },
    {
        id: "kL5xqqsUVl0",
        name: "Soap 9qnfd3",
        price: 42.80,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        imageUrl: "https://images.unsplash.com/photo-1542038374755-a93543c5178f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        inCart: false,
        bestSeller: true
    },
    {
        id: "-5IPpJvbByo",
        name: "Soap jag&3",
        price: 19.99,
        description: "focused photo of a blue ceramic mug. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        imageUrl: "https://images.unsplash.com/photo-1549404183-c6ce67f5697c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&max-h=330&q=60",
        inCart: false,
        bestSeller: false
    }
];

let cartList = []; 
let subTotal = 0;

export function getAllProducts() {
    return productList;
}

export function getProductById(id) {
    return productList.find(product => product.id === id)
}
export function getCartProductById(id) {
    return cartList.find(product => product.id === id)
}
export function updateProductList(list) {
    productList = [...list];
}

export function toggleInCart(id) {
    const updatedProductList = productList.map(product => {
        if (product.id === id) {
            const updatedProduct = { ...product, inCart: !product.incart };
            return updatedProduct;
        }
        return product;
    });
    return updatedProductList;
}

export function addToCartList(id, quantity) {
    const product = productList.find(product => product.id === id);
    const subTotal = product.price * quantity;
    const addedProduct = { ...product, quantity, subTotal, inCart: true };
    cartList.push(addedProduct);
}

export function getCartList() {
    return cartList;
}

export function updateCartList(list) {
    cartList = [...list];
}

export function getShippingFee() {
    const totalItems = cartList.map(item => item.quantity).reduce((acc,currentValue) => acc+currentValue, 0)
    const shippingFee = totalItems > 10 ? 0 : 5;
    return shippingFee.toFixed(2);
}

export function sumValueInList (list, valueName) {
    return list.map(item => item[valueName])
               .reduce((acc, currentValue) => acc + currentValue, 0);
}

export function setSubTotal(value) {
    subTotal = value;
}

export function getSubTotal() {
    return subTotal.toFixed(2);
}

export function getTotal() {
    return (subTotal + parseInt(getShippingFee())).toFixed(2);
}