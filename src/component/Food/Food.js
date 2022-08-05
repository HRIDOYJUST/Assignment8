import React from 'react';
import { AiOutlineCamera,AiFillAmazonCircle } from "react-icons/ai";

import './Food.css'

const Food = (props) => {
    
    const {name,price,img,time} = props.food;
    return (
        <div className='food'>
            <img src={img} alt="Image not found"/>
            <h3>Name:{name}</h3>
            <h4>Price:{price}</h4>
            <small><p>Cokking Time(min):{time}</p></small>
            <button onClick={()=>{props.handleAddToCart(props.food)}} className='regular-btn'>Order</button>
            <br/>
            
            <div>
            <h1><AiOutlineCamera></AiOutlineCamera>
            <AiFillAmazonCircle></AiFillAmazonCircle>
            </h1>
            
            </div>
        </div>
    );
};

export default Food;