import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props)
   const {cart,name}=props;

   let total =0;
   for(const product of cart){
    total = total+ product.price ;
   }
    return (
        <div className='cart'>
            <h2>Order list</h2>
            <h4>Number of iTEM:{cart.length}</h4>
            <li>{name + ' '}</li>
            <hr></hr>
            <h4>Total Price:{total}</h4>
            

        </div>
    );
};

export default Cart;