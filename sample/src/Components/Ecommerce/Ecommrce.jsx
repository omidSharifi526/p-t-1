import React,{useState} from 'react';
import './Ecommerce_style.scss';


import heart from './Asset/imgs/heart.png';
import shoppingcart from './Asset/imgs/shopping-cart.png'
import user from './Asset/imgs/user.png';
import logo from './Asset/imgs/logo.svg';
import hMenu from './Asset/imgs/hambergurmenu.png';
import hot from './Asset/imgs/hot.png';
import star from './Asset/imgs/star.png';
import search from './Asset/imgs/search-left.png';
import Wlogo from './Asset/imgs/mlogo.png';




import {firstrow} from './../Ecommerce/data';
import {secrow,threerow,fourrow} from './../Ecommerce/data'


import SpeciallSales from '../SpeciallSale/SpeciallSales';
import MiddleBanner from './MiddleBanner/MiddleBanner';
import MiddleBannerDoubled from './MiddleBannerDoubled/MiddleBannerDoubled';
import TopBrands from '../TopBrands/TopBrands';
import JoinOur from './JoinOur/JoinOur';
import EcoFooter from './EcoFooter/EcoFooter';
import Somedia from './Somedia/Somedia';
import DropDown from './DropDown/DropDown';








const Ecommrce = () => {
    {/* start Top Menu */}
    const [selectedCategory,setSelectedCategory]=useState('Select Category')
    return (
        
        <div className='container'>
            
          <div className='top-menu-container'>
              <div className='logo'>
                  <img src={Wlogo} alt="" />

              </div>
              <div className='searchBox'>
                  <input type="search" placeholder=' search product' name="" id="" />
                  <button><img src={search}  /></button>

              </div>
              <div className='notifiBox'>

                  <img src={heart} alt="" />
                
                 
                  <div style={{width:'50px',height:'50px',color:'red'}}>
                  {/* <ShopCon /> */}
                  </div>
                 
                  <img src={user} alt="" />

              </div>

          </div>
          {/* End Top Menu */}

          {/* Start Main menu */}
          <nav>
              <div className='nav-container'>
                  <div className='all-categories'>
                  <DropDown selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                     

                  </div>
                  <div className='mainMenu'>
                      <ul>
                          <li>Home</li>
                          <li>New Avvriable</li>
                          <li>Trending</li>
                          <li>Pages</li>
                      </ul>

                  </div>
                  <div className='notyfi'>
                      <span className=''>
                      <img src={hot} alt="" />
                          Hot Deals
                        

                      </span>

                      <span className=''>
                      <img src={star} alt="" />
                          Offer Zone

                          

                      </span>

                  </div>

              </div>

          </nav>


          {/* end Main menu */}



          {/* start of landig page */}

          <div className='landinng' >
              
               <div className='landing-content'>
                   <p>SaleUpTo <span>30%</span> today </p>
                   <strong>
                   <h1>
                       s/s 2020 collection
                   </h1>
                   </strong>
                   <button>Buy Now Today</button>

               </div>

          </div>

          {/* end of landig page */}



          {/* start categories Section */}
          <section className='categories'>
              <div className='part Pman'>
                  <button>Man</button>

              </div>
              <div className='part Pwoman'>
              <button>Women</button>

              </div>
              <div className='part Paccessories'>
              <button>Accessories</button>
              </div>

          </section>


          {/* end section categories Section */}






          {/* start special sales */}

         <SpeciallSales data={firstrow} />



           {/* end special sales */}

           <SpeciallSales data={secrow} />
           <MiddleBanner/>
           <SpeciallSales data={threerow} />
           <SpeciallSales data={fourrow}/>
           <MiddleBannerDoubled/>
           <TopBrands/>
           <JoinOur/>
           <Somedia/>
           <EcoFooter/>
           

        



        </div>
    )
}



const Cartcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="351.63" height="351.611" viewBox="0 0 351.63 351.611"><g id="Layer_2" data-name="Layer 2" transform="translate(-16.68 -15.807)"><g id="Layer_1" data-name="Layer 1"><path id="Path_2" data-name="Path 2" d="M119.78,90.92c12.46-6.9,25-5.44,37.72-3.69,15,2.08,30.11,3.78,45.17,5.66l44.43,5.53q22.59,2.83,45.16,5.69c12.58,1.61,25.28,2.66,37.69,5.11a47,47,0,0,1,38,45.18c.46,18.32.5,36.67,0,55-.66,25.76-21.67,46-48.24,46.1-56.61.27-113.22.09-169.83.06a27,27,0,0,1-7.43-.62c-3.07-.9-3.69-.06-3.27,2.84.75,5.17,1.12,10.4,2,15.55,1.54,9,7.7,14.05,16.91,14.07H351.86c8,0,13.94,4.91,15.74,12.72a15.91,15.91,0,0,1-8.6,17.69,18,18,0,0,1-8,1.7c-6.19-.05-12.38,0-18.67,0,6.18,20.12,3.05,33-10,42.09a31.63,31.63,0,0,1-37.88-1.13c-12.2-9.59-15-23.12-8.42-40.8h-71.7a34.3,34.3,0,0,1,3.9,18.34c-1.28,15.64-13.68,27.95-29.77,29.31-14.74,1.25-29.59-9.57-33.09-24.17a30.24,30.24,0,0,1,2.41-21.76c1.34-2.54.66-2.85-1.75-3.39-19.62-4.34-34.37-21-36.75-41.23-3.9-33-7.89-66-11.77-99C93.9,147,90.4,116.19,86.82,85.4Q85.5,74.09,84,62.8C82.88,53.73,76.57,48,67.4,48c-11.34-.07-22.69,0-34,0-9.5,0-16.67-6.86-16.72-15.9S23.88,16,33.23,15.89c11.59-.09,23.19-.13,34.79,0,25.56.29,45.6,19,48.09,44.47C117.08,70.38,118.49,80.36,119.78,90.92Zm114.9,132.54h83.76c11,0,17.56-6.54,17.59-17.3v-49c0-9.72-6-16.09-15.53-17.2q-25.2-2.925-50.36-6.16c-20.85-2.63-41.69-5.37-62.54-8-21.1-2.64-42.23-5.07-63.32-7.8-11.58-1.5-19.92,5.6-19.21,17.23.46,7.56,1.63,15.09,2.51,22.62,1.87,15.94,4,31.86,5.59,47.82,1.24,12.35,6.79,17.78,19.26,17.78Z" fill="#050505"/></g></g></svg>

const ShopCon=()=><svg xmlns="http://www.w3.org/2000/svg" fill="10101" className='mysvg' width="20" height="20" viewBox="0 0 511.419 511.86"><g id="shopping-cart-_2_" transform="translate(-0.199 511.96)"><path id="Path_1" data-name="Path 1" d="M13.2-510.9C8.5-509.5,2.3-503,.9-497.8-1.4-489,2.1-479.6,9.4-475c2.6,1.6,6.2,2.4,13.6,3.1,19.3,1.8,33.2,8.1,46,20.9,8.1,8,13.2,16.5,16.9,27.9,1.6,4.9,4.9,32.3,14.1,116.6,6.6,60.6,12,110.9,12,111.6,0,.8-2.1,2.5-4.7,3.9-8,4.1-19.5,16.4-23.7,25.2-11.8,24.5-7.4,51.1,11.3,69.9C106.8-84,121.3-78.1,138.3-78c6.3,0,6.8.2,6.2,1.9A91.9,91.9,0,0,0,142-58c.1,26.2,20.6,51.1,46.5,56.5C229.2,7,265.7-27.6,259-68.3c-.5-3.3-1.2-6.7-1.5-7.8-.6-1.8.6-1.9,42.5-1.9s43.1.1,42.5,1.9c-.3,1.1-1,4.5-1.5,7.8a57.376,57.376,0,0,0,16.5,50.8c23.3,23.2,59.7,23.2,83,0,31.4-31.4,18.3-83.9-24.5-98.2-5.2-1.7-13.3-1.8-145.6-2.3l-140.1-.5-3.9-2.7c-6.7-4.7-8.9-9-8.9-17.3,0-6.2.4-7.7,2.7-11.1a30.328,30.328,0,0,1,6.5-6.4l3.7-2.5,138-.5c136.2-.6,138.2-.6,145.1-2.7,27.2-8.1,44.9-22.4,59.1-47.8,3.4-6.1,3.9-7.8,3.9-13.6,0-8.7-3.3-13.9-10.8-17.5-6.6-3.1-11-3-17.4.1-5.2,2.6-7.9,5.8-12.3,14.5-1.3,2.5-5.5,7.7-9.4,11.6-7.7,7.7-16,12.3-25.4,14.3-3.7.8-42.1,1.1-127.2,1.1H152.2l-.6-3.8c-.3-2-4.2-37.2-8.6-78.2s-8.3-76.2-8.6-78.3l-.6-3.7H300.4c101.9,0,166.6.4,166.6.9s-2.3,11.9-5.1,25.3c-5.3,25.8-5.4,28.3-1.7,34.9,2.2,3.9,8.4,8.4,13,9.4,8.2,1.9,18-3,21.6-10.7,1.1-2.3,5.5-21.3,9.8-42.1,7.3-35.7,7.7-38.1,6.5-42.5-1.6-6-5-10.4-9.8-12.8-3.7-1.8-9.6-1.9-187.5-2.2L130-403l-.4-2.3c-.3-1.2-1-6.3-1.6-11.2-4.5-36.2-27.1-67.6-60.8-84.4C50.2-509.5,24.6-514.2,13.2-510.9ZM207.8-76.5c16,6.7,16,28.3,0,35a16.937,16.937,0,0,1-13.6,0c-15.7-6.6-16.1-27.5-.7-34.6A16.676,16.676,0,0,1,207.8-76.5Zm198,0c16,6.7,16,28.3,0,35a16.937,16.937,0,0,1-13.6,0c-15.7-6.6-16.1-27.5-.7-34.6A16.676,16.676,0,0,1,405.8-76.5Z"/></g></svg>

export default Ecommrce
