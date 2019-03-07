import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { getCartList, updateCartList } from "../../services/productListService";
import CartTableRow from "../CartTableRow/CartTableRow";

function Cart() {
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    setCartList(getCartList);
  })

  const handleQuantityChange = e => {
    const id = e.target.id;
    // update cartlist in state
    const updatedCartList = cartList.map((item) => {
      if(item.id === id) {
        const quantity = e.target.value;
        const subTotal = quantity*item.price;
        return {...item, quantity, subTotal};
      }
      return item;
    })
    setCartList(updatedCartList);
    //update cartlist in data
    updateCartList(updatedCartList);
  }

  return (
    <Container>
      <div>
        <Table striped bordered hover responsive="md" className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((item, index) => (
              <CartTableRow 
                key={index} 
                item={item} 
                itemNum={index+1}
                handleQuantityChange={handleQuantityChange}
              />
            ))}
           
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Cart;
