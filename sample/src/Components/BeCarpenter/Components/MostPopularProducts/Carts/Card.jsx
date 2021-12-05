import React from 'react';
import './cart_style.scss';


const Card = ({pdata}) => {
    console.log(pdata);
    return (
        <div className='card'>
          <div className="card-image">
          <img src={pdata.img} alt="" />
          </div>
           <div className='card-details' >
           <h4>{pdata.title}</h4>
           <div className='off-details'>
               <p className='off'>{pdata.off}%</p>
               <p className='old-price'>{pdata.price} $</p>
               
           </div>
          <div className='buy'>
          <h2>{pdata.newPrice} $</h2>
           <button>Buy Now</button>
          </div>
           
           </div>
        </div>
    )
}

export default Card
