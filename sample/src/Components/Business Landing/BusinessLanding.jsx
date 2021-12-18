
import React, { useRef, useState } from "react";
import {personData} from './asset/data/data';
import Button from './Button/Button'; 
import Card from "./Card/Card";
import './business_landing_style.scss';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss'; // core Swiper
//import 'swiper/modules/effect-creative/effect-creative.min.css';
import 'swiper/modules/effect-creative/effect-creative.scss';
import './styles.scss';




import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module




import SwiperCore,{ EffectCreative } from 'swiper';






SwiperCore.use([EffectCreative]);

const BusinessLanding = () => {
    console.log(EffectCreative);
    return (
        <div className='main-container'>
            <div id='sidebar-area' className='sidebar-area'>
            <div className='sidebar-content'>
                    <div className='text-area'>
                    <h4>What they've said about us</h4>
                    <p>lorem ipsum dolor set amet et it </p>
                    <p>ipsum dolor set amet et it</p>
                    </div>
                  <div className='btn-area'>
                  <Button value={'Contact Us'} classStyle={'test'}/>
                  </div>
                    

                </div>

            </div>
            <div id="slider-area" className='slider-area'>



            <Swiper pagination
            grabCursor={true} effect={'creative'} EffectCreative={{"prev": {"shadow": true,"translate": [0,0,-500]},"next": {"translate": ["120%",0,-500]}}} className="mySwiper">

    {
        personData.map((pdata)=>{
            return(<div>
                <SwiperSlide><Card pdata={pdata}/></SwiperSlide>
            </div>)
        })
    }

{/* <SwiperSlide>slide3</SwiperSlide><SwiperSlide>slide5</SwiperSlide> */}



    </Swiper>
   
 
   
  
   





        





            </div>
        </div>
    )
}

export default BusinessLanding
