import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Shop.css'

const Shop = () => {
    const [foods,setFoods] =useState([]);
    const [cart,setCart]= useState([]);

    //set product name
    const [productName,setProductName]= useState([]);

    useEffect(()=>{
        fetch('./foods.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])

    const handleAddToCart =(food) =>{
        const newCart = [...cart,food];
        setCart(newCart);
        //set product name
        const newProduct = [...productName,food.name];
        setProductName(newProduct);
    }
    return (
        <div className='shop-container'>
            <div className='foods-container'>
            {
                foods.map(food => <Food 
                food={food}
                handleAddToCart={handleAddToCart}
                
                ></Food>)
                
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} name={productName}></Cart>
            </div>

        </div>
    );
};

export default Shop;