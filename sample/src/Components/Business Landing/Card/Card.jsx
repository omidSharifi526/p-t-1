import React from 'react';
import './card_style.scss'

const Card = ({data}) => {
    console.log(data);
    return (
        <div className='person-card'>
            <div className='descript-area'>
            <span>
                {data.description}
            </span>
            </div>
            <div className='details-area'>
                
            </div>
        </div>
    )
}

export default Card
