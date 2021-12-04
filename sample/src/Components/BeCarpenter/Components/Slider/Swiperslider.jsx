import React from "react";
import img1 from  '../../Asset/imgs/bg-chair.jpg';
import img2 from  '../../Asset/imgs/bg-chair-2.jpg';
import img3 from  '../../Asset/imgs/bg-chair-3.jpg';
import './swiper_style.scss'

import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay } from 'swiper';
import { Swiper, SwiperSlide, } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css';




SwiperCore.use([EffectFade,Autoplay])

const Swiperslider = () => {
    return (
        <div  className='slider-container' >
           <Swiper
      effect="fade"
      autoplay
      
      spaceBetween={20}
      slidesPerView={1}
      centeredSlides
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide><div className='image-container'><img className='slide-img' src={img1} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='text-content'><h1>Tables</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing.</p><button>Buy Now</button></div></SwiperSlide>
     
      <SwiperSlide><div className='image-container'><img className='slide-img' src={img3} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='text-content'><h1>Chairs</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing.</p><button>Buy Now</button></div></SwiperSlide>
     
      
    </Swiper>
  
  <img className='next-slide' src='https://themes.muffingroup.com/be/carpenter2/wp-content/uploads/revslider/carpenter2/home_carpenter2_slider_next.png'  alt="" />
        </div>
    )
}

const nextSlide=()=>  <img src="https://themes.muffingroup.com/be/carpenter2/wp-content/uploads/revslider/carpenter2/home_carpenter2_slider_next.png" />

export default Swiperslider


