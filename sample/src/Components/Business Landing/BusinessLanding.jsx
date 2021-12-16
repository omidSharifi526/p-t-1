
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './business_landing_style.scss';
import {personData} from './asset/data/data'

import Card from "./Card/Card";

// import "swiper/css";
// import "swiper/css/effect-creative"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css';

import Button from './Button/Button'; 


import SwiperCore, { EffectCreative} from 'swiper';
//   SwiperCore.use([EffectCreative]);


const BusinessLanding = () => {
    return (
        <div className='main-container'>
            <div id='sidebar-area' className='sidebar-area'>
            <div className='sidebar-content'>
                    <div className='text-area'>
                    <h4>What they've said about us</h4>
                    <p>lorem ipsum dolor set amet et it lorem ipsum dolor set amet et it</p>
                    </div>
                  <div className='btn-area'>
                  <Button value={'Contact Us'} classStyle={'test'}/>
                  </div>
                    

                </div>

            </div>
            <div className='slider-area'>
            <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide> */}

      {
          personData.map((data)=>{
              return(<div>
                   <SwiperSlide><Card data={data}/></SwiperSlide>

              </div>)
          })

      }
      
    </Swiper>

            </div>
        </div>
    )
}

export default BusinessLanding
