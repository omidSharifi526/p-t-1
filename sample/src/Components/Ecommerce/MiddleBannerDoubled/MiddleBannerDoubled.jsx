import React from 'react';
import './Mbd_style.scss';
import img1 from '../Asset/imgs/bg/mbd-1.jpg';

import img2 from '../Asset/imgs/bg/mbd-2.jpg'


const MiddleBannerDoubled = () => {
    return (
        <div className='mbd-container'>
            <div className='mbd-item'>
                <img src={img1} alt="" />
            </div>
            <div className='mbd-item' >
            <img src={img2} alt="" />
            </div>

            
        </div>
    )
}

export default MiddleBannerDoubled
