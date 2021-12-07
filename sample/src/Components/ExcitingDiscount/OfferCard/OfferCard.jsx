import React from 'react';
import './offer-card-style.scss'

const OfferCard = ({item}) => {
  //  console.log(item,'hiiii');
    return (
        <div className='main-card'>
            <div className='image-area'>
                <img src={item.img} alt="" />
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
                <div className='price-buy'>
                  <div className='prices'> 
                    <p className='newprice'>قیمت:{item.price}</p>
                    <span className='oldprice'>{item.oldprice} </span>
                </div>
                    <button>مشاهده و خرید</button>
                </div>



            </div>
        </div>
    )
}

export default OfferCard
