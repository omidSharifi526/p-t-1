
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






import SwiperCore,{Autoplay,EffectCreative,Pagination, } from 'swiper';






SwiperCore.use([Autoplay,EffectCreative,Pagination]);

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



            {/* <Swiper Autoplay pagination={{"dynamicBullets": true}} slidesPerView={window.innerWidth<600?1:2} spaceBetween={0} 
            grabCursor={true} effect={'creative'} effect={'fade'} EffectCreative={{"prev": {"shadow": true,"translate": [0,0,-400]},"next": {"translate": ["100%",0,0]}}} className="mySwiper">

    {
        personData.map((pdata)=>{
            return(<div>
                <SwiperSlide>

                    <Card pdata={pdata}/>

                </SwiperSlide>
            </div>)
        })
    }





    </Swiper> */}
   
 
   <div className="carusel">
   <div className="slide">

   </div>
   <div className="slide">

   </div>
   <div className="slide">

   </div>
   </div>
   
   
   





        





            </div>
        </div>
    )
}

export default BusinessLanding
