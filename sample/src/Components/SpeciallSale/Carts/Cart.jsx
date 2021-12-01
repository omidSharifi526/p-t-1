import React from 'react';
import './Cart_style.scss';


const Cart = ({data}) => {
   // console.log(data.img);
   
    return (
        <>
        <div className='cart'>
            <img src={data.img} alt="" />
            <h5 >{data.title}</h5>
            <p>${data.price}</p>
            
        </div>

            
        </>
    )
}

export default Cart
