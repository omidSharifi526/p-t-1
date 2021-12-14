    import React from 'react';
    import './card_style.scss';
    import arrow from '../../Asset/imgs/left-arrow.svg';
    import Startrate from '../StarRate/Startrate';
    
    

    const Card = ({data}) => {
        return (
            <div id='card-container' className='card-container'>


                <div className='card-image'>
                <img src={data.img} alt="" />
                </div>


        <div className='card-body'>
        <div className="card-rate">
      
            <Startrate></Startrate>
            <span className='rate'>{data.rate}</span>
        </div>
                <h6 className='card-title'>{data.title}</h6>
                
                <div className='price-area'>
            
            

                    <div className='oldprice-area'>
                    <span className='old-price'>{data.price}</span>
                    <span className='off'>    {data.off} </span>
                    </div>

                    <div>
                    <span className='new-price'>{data.newprice}</span>
                    </div>

                </div>
        </div>

        <div className='buy-area' onClick={()=>{alert('add to card')}}>
        <span><img className='buy-icon' src={arrow} alt="" /></span>
            <span className='buy-text'>مشاهده و خرید این محصول</span>
            

        </div>


                
            </div>
        )
    }

    export default Card
