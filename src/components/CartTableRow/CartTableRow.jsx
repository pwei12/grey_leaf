import React from 'react';
import {
    Table
} from 'react-bootstrap';

function CartTable({item: {name, quantity, price, subTotal}}) {
    console.log('from table',name, quantity, price, subTotal)
  return (
   
 <tr>
                      <td>1</td>
                      <td>{name}</td>
                      <td>{quantity}</td>
                      <td>{price}</td>
                      <td>{subTotal}</td>
                  </tr>
         
        
  )
}

export default CartTable
