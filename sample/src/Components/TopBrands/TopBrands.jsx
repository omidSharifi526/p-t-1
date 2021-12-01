import React from "react";
import './topBrand_style.scss';
import brand1 from './imgs/b1.png';
import brand2 from './imgs/b2.png'
import brand3 from './imgs/b3.png'
import brand4 from './imgs/b4.png'

const TopBrands = () => {
    return (
        <div className='topBrand-container'>
            <div className='header'>
                <h2>Top Brands</h2>

            </div>
            <div className='body'>
                <img src={brand1} alt="" />
                <img src={brand2} alt="" />
                <img src={brand3} alt="" />
                <img src={brand4} alt="" />
                
            </div>
            
        </div>
    )
}

export default TopBrands
