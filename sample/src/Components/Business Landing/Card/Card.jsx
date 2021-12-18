import React from 'react';
import './card_style.scss'

const Card = ({pdata}) => {
    console.log(pdata);
    return (
        <div className='person-card'>
            <div className='descript-area'>
            <span>
            
                {pdata.description}
            </span>
            </div>
            <div className='details-area'>
                <div className='img-det'>
                <img src={pdata.img} alt="" />
                </div>
                <div className='text-det'>
                   
                    <span className='person-job'>{pdata.job}</span>
                </div>
                {/* <span className='person-name'>{pdata.name}</span> */}
            </div>
        </div>
    )
}

export default Card
