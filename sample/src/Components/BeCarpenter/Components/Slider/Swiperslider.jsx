import React, { useEffect, useState } from "react";
import img1 from '../../Asset/imgs/bg-chair.jpg';
import img2 from '../../Asset/imgs/bg-chair-2.jpg';
import img3 from '../../Asset/imgs/bg-chair-3.jpg';
import './swiper_style.scss'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css';

const sliderContent = [
    {
      image: img1,
      title: 'Tables',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      action: 'Buy Now'
    },
    {
      image: img3,
      title: 'Chairs',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      action: 'Buy Now'
    },
    {
      image: img3,
      title: 'Chairs',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      action: 'Buy Now'
    },
    {
      image: img3,
      title: 'Chairs',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      action: 'Buy Now'
    },
]


const slider = SwiperCore.use([Pagination, EffectFade, Autoplay, Navigation])

const Swiperslider = () => {
 

  const [active, setActive] = useState(1)

  // console.log(active)
  const handleEffect = (sliderContent) => {
    let currentActive = active;

    if(sliderContent.length > currentActive ) {
      setActive(currentActive + 1)
    } else {
      setActive(1)
    }
  }




  return (
    <div className='slider-container' >
      <Swiper
       
        effect="fade"
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Navigation]}
        autoplay
        loop={true} 
        navigation
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        centeredSlides
        pagination={{ clickable: true }}
        // onSlideChange={() => handleEffect(sliderContent)}
        // onSwiper={swiper => console.log(swiper)}
      >
        {sliderContent.map((item, index) => 
          <SwiperSlide>
            <div className={`image-container'}`}>
              <img className='slide-img' src={item.image} alt="" />
              <div className={`text-content  ${active === (index) && 'active'} `}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.action}</button>
              </div>
            </div>
          </SwiperSlide>
        )
        }

      </Swiper>

      {/* <img className='next-slide' src='https://themes.muffingroup.com/be/carpenter2/wp-content/uploads/revslider/carpenter2/home_carpenter2_slider_next.png' alt="" /> */}
    </div>
  )
}

const nextSlide = () => <svg xmlns="http://www.w3.org/2000/svg" width="121.5" height="35.073" viewBox="0 0 121.5 35.073"><g id="home_carpenter2_slider_next" transform="translate(0 35.216)"><path id="Path_1" data-name="Path 1" d="M103.6-35.216c-.143.143-.378.284-1.452,1.358,1.521,1.521,4.79,4.3,7.55,7.058l7.8,7.8H0v4.5C0-12,0-10.719,0-10H2v-7H117.5l-7.9,7.9c-4.3,4.3-8.136,7.323-7.636,7.623a8.315,8.315,0,0,1,1.547,1.334C105.112-1.8,109.273-5.7,112.6-9.1l8.9-8.9-9.1-9C107.5-32,104.266-34.552,103.6-35.216Z"/></g></svg>

export default Swiperslider


