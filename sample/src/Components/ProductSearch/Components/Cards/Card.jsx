import React from 'react';
import './card_style.scss'

const Card = ({data}) => {
    return (
        <div id='card-container' className='card-container'>
            <img src={data.img} alt="" />
            <span>{data.rate}</span>
            <h6>{data.title}</h6>
        </div>
    )
}

export default Card
