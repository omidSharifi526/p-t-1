import React, {useState,useEffect} from 'react';
import './exciting-discount-style.scss';
import SwiperCore, {
    Navigation,Thumbs,Pagination
  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css';


import {data} from './OfferCard/asset/data'
import OfferCard from './OfferCard/OfferCard';




// install Swiper modules
SwiperCore.use([Pagination,Navigation,Thumbs]);


const ExcitingDiscount = () => {
    var [date,setDate] = useState(new Date());
    let[newtime,setnewtime]=useState(null)
  
    

    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        var timer2=setInterval(()=>{setnewtime(new Date().toLocaleTimeString())},2000)
        let now=new Date()
        console.log('usse effect is run');
        console.log(now.toLocaleTimeString());
        return function cleanup() {
            clearInterval(timer)
            clearInterval(timer)
        }
    
    },[date]);





   
    




    const [thumbsSwiper, setThumbsSwiper] = useState(null);

 
    return (
        <div className='main-container'> 
        <div className='header-area'>
            <div className='header-title'>
                <h5>تخفیف های هیجان انگیز</h5>
               

            </div>
           <div className='count-down-area'>
               <div className='countdown-label'>
                   <span>زمان باقی مانده</span>

               </div>
               <span className='countdown-wrap'>
                   {date.toLocaleTimeString()}
               </span>
           </div>

        </div>
        <div className='main-content-area'>



        
          
          <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': 'blue'}} pagination={window.innerWidth < 600 && true} spaceBetween={10} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
               
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
           }           
           
            </Swiper>
           


        </div>
           
            
        </div>
    )
}

export default ExcitingDiscount
