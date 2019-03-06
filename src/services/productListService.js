let productList = [
    {
        id: "57eUYHIIIH0",
        name: "asdgjkng",
        price: 20.00,
        description: "red flower petals on table blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
        imageUrl: "https://images.unsplash.com/photo-1547793548-7a0e7dfdb24f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU5NTA2fQ"
    },
    {
        id: "T3_G_0nTXPE",
        name: "jakdsg",
        price: 13.90,
        description: "red rose petals",
        imageUrl: "https://images.unsplash.com/photo-1547793549-70faf88838c8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU5NTA2fQ"
    },
    {
        id: "GE23cTcUXww",
        name: "ladfkgjkh",
        price: 25.00,
        description: "assorted-color bar soap lot on white surface",
        imageUrl: "https://images.unsplash.com/photo-1474625121024-7595bfbc57ac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU5NTA2fQ"
    },
    {
        id: "FbrDS0jY_Hw",
        name: "kjkfgbn",
        price: 30.00,
        description: "assorted bar soaps",
        imageUrl: "https://images.unsplash.com/photo-1546552768-9e3a94b38a59?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU5NTA2fQ"
    },
    {
        id: "H7SCRwU1aiM",
        name: "kjfgrg aerg",
        price: 18.00,
        description: "assorted-color alphabet cube toy lot",
        imageUrl: "https://images.unsplash.com/photo-1535572290543-960a8046f5af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU5NTA2fQ"
    },
    {
        id: "J4wNtLfEnr0",
        name: "joie rgi n",
        price: 21.50,
        description: "gray steel faucet",
        imageUrl: "https://images.unsplash.com/photo-1418754356805-b89082b6965e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU5NTA2fQ"
    },
    {
        id: "mv7kxYh5Rko",
        name: "jkadfngn 0",
        price: 5.00,
        description: "Coffee Beans blend paper bag on ground",
        imageUrl: "https://images.unsplash.com/photo-1495881674446-33314d7fb917?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU5NTA2fQ"
    },
    {
        id: "ntyA35WOb-k",
        name: "nd8*3",
        price: 29.00,
        description: "assorted-color soap packs",
        imageUrl: "https://images.unsplash.com/photo-1526366003456-b6be088cf674?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=500&max-h=330&q=60"
    },
    {
        id: "fL5xqqoUVF0",
        name: "g-23",
        price: 42.80,
        description: "embroidery near textile",
        imageUrl: "https://images.unsplash.com/photo-1466027449668-27f96b692ba4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU5NTA2fQ"
    },
    {
        id: "mL3sqqotVFi",
        name: "okdnvg-23",
        price: 42.80,
        description: "eadsg adsle",
        imageUrl: "https://images.unsplash.com/photo-1454873019514-eae2f086587a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: "kL5xqqsUVl0",
        name: "9qnfd3",
        price: 42.80,
        description: "sijoiasdg",
        imageUrl: "https://images.unsplash.com/photo-1542038374755-a93543c5178f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: "-5IPpJvbByo",
        name: "jag &3",
        price: 19.99,
        description: "focused photo of a blue ceramic mug",
        imageUrl: "https://images.unsplash.com/photo-1549404183-c6ce67f5697c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&max-h=330&q=60"
    }
];

let cartList = [];

export function getAllProducts() {
    return productList;
}

export function getProductById(id) {
    return productList.find(product => product.id === id)
}

export function addToCart(id, quantity) {
    const product = productList.find(product => product.id === id);
    const price = product.price*quantity;
    
    const addedProduct = {
        id,
        name: product.name,
        quantity,
        price,
        imageUrl: product.imageUrl
    }
    cartList.push(addedProduct)
}

export function getCartList() {
    return cartList;
}