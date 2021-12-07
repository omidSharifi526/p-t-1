import React, {useState} from 'react';
import './exciting-discount-style.scss';
import SwiperCore, {
    Navigation,Thumbs
  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css';


import {data} from './OfferCard/asset/data'
import OfferCard from './OfferCard/OfferCard';




// install Swiper modules
SwiperCore.use([Navigation,Thumbs]);


const ExcitingDiscount = () => {


    const [thumbsSwiper, setThumbsSwiper] = useState(null);

 
    return (
        <div className='main-container'> 
        <div className='header-area'>
            <div className='header-title'>
                <h5>تخفیف های هیجان انگیز</h5>
               

            </div>
           <div className='count-down-area'>
               <div className='countdown-label'>
                   <span>---------زمان باقی مانده--------</span>

               </div>
               <span className='countdown-wrap'>
                   15:17:55
               </span>
           </div>

        </div>
        <div className='main-content-area'>



        
            <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} spaceBetween={10} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
               
        {
            data.map((item,index)=>{
                
                return(< div key={index}>
                <SwiperSlide key={index} className='ms'><OfferCard item={item}/></SwiperSlide>
                </div>)

                

            })
        }
               
            </Swiper>
            
            <Swiper  onSwiper={setThumbsSwiper} spaceBetween={0} slidesPerView={5} freeMode={true} navigation={true} watchSlidesProgress={true} className="mySwiper">
               
            {
            data.map((item,index)=>{
                
                return(< div key={index}>
                <SwiperSlide key={index} >{item.title}</SwiperSlide>
                </div>)

                

            })
        }            </Swiper>

{/* 

        <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         navigation
         pagination={{ clickable: true }}
         spaceBetween={1}
         slidesPerView={1}
         onSlideChange={() => console.log('slide change')}
         onSwiper={(swiper) => console.log(swiper)}
      
    >
        {
            data.map((item,index)=>{
                
                return(< div key={index}>
                <SwiperSlide key={index} className='ms'><OfferCard item={item}/></SwiperSlide>
                </div>)

                

            })
        }
    </Swiper> */}


            

        </div>
           
            
        </div>
    )
}

export default ExcitingDiscount
