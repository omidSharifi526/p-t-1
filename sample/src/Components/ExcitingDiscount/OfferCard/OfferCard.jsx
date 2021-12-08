import React from 'react';
import './offer-card-style.scss';
import shopicn from './asset/imgs/shopping-icon.svg'

const OfferCard = ({item}) => {
  //  console.log(item,'hiiii');
    return (
        <div className='main-card'>
            <div className='image-area'>
                <img className='card-images' src={item.img} alt="" />
            </div>
            <div className='details-area'>
                <h5>{item.title}</h5>
                <p>{item.engTitile}</p>
                <ul>
                    {item.descs.map((text,index)=>{
                        return(<div key={index}>
                        <li key={index}>{text}</li>
                        </div>)

                    })}
                </ul>
                <div id="price-buy" className='price-buy'>
                  <div className='prices'> 
                    <p id='newprice' className='newprice'>قیمت: <span> {item.price}تومان</span></p>
                    <span id='oldprice' className='oldprice'>{item.oldprice}تومان </span>
                </div>
                    <button id='btn' className='buy-btn'> <img className='buy-icon' src={shopicn} alt="" /> مشاهده و خرید  </button>
                </div>



            </div>
        </div>
    )
}

export default OfferCard
