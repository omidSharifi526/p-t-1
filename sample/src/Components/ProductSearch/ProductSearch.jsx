import React,{useState} from 'react';
import './productsearch_style.scss';
import CategoriesManager from './Components/CategoriesManager/CategoriesManager';
import mobilemenu from './Asset/imgs/sort.svg';
import closeicn from './Asset/imgs/close.svg';
import FilterCategoryBtn from './Components/CategoriesManager/FilterCategoryBtn/FilterCategoryBtn';
import SidebarContent from './Components/NewSidebarContent/SidebarContent';
//import CheckBox from './Components/Checkbox/CheckBox';


import {cardData} from '../ProductSearch/Asset/data/data'
import Card from './Components/Cards/Card';

const ProductSearch = () => {
  

    const[showmmenu,setshowmmenu]=useState(false);
    const myProduct=<section id='product-result' className='product-result'>
             
    {
        cardData.map((data,index )=>{
            return(
                <div key={index} >
                    <Card data={data}/>

                </div>
            )
        })

    }

 </section> ;





    return (
        <main >
            
            {
          !showmmenu&& myProduct 
            }
            
          <section className='sidebar'>
              {
            !showmmenu&&  <SidebarContent/>
              }
          </section>

          
{/* craete icon filter menu for mobile device */}
          <div id='mobile-menu-filter' className='mobile-menu-filter' >

           <div className='icn-mobile-menu' onClick={()=>{
              setshowmmenu(true)
           }}>

           <img src={mobilemenu} alt="mobilemenu" />
           </div>
           
          </div>
{/* craete icon filter menu for mobile device */}


{/* craete main menu filter  for mobile device */}
          <div id='main-menu-container' className={`main-menu-container ${showmmenu?'main-menu-active':'main-menu-not-active'}`}>
              <div className='main-menu-header' onClick={()=>{setshowmmenu(false)}}>
                  <span>فیلترها</span>
                  <img src={closeicn} alt="closeicn" />

              </div>
              <div className='main-menu-body'>


                
            
                  {/* دسته بندی */}
                <div className="category-content">
                    <div className='category-head'>
                        <span>دسته بندی</span>
                    </div>
                    <div className='category-body'>
                        <FilterCategoryBtn  content={'PC Accessories'}/>
                        <FilterCategoryBtn content={'Mac Games & Accessories'}/>
                        <FilterCategoryBtn content={'Computers & Accessories'}/>
                        <FilterCategoryBtn content={'PlayStation Legacy Systems'}/>
                        <FilterCategoryBtn content={'Earbud & In-Ear Headphones'}/>
                        <FilterCategoryBtn content={'Video Games'}/>
                        <FilterCategoryBtn content={'Electronics'}/>
                        <FilterCategoryBtn content={'Cell Phones & Accessories'}/>
                        

                    </div>



                </div>
                {/* دسته بندی */}



                {/* Customer Review */}

                <div className="category-content">
                    <div className='category-head'>
                        <span>Customer Review </span>
                    </div>
                    <div className='category-body'>
                        <FilterCategoryBtn content={'4 Stars & Up & Up'}/>
                        <FilterCategoryBtn content={'3 Stars & Up & Up'}/>
                        <FilterCategoryBtn  content={'2 Stars & Up & Up'}/>
                        <FilterCategoryBtn  content={'1 Star & Up & Up'}/>
                        

                    </div>



                </div>

                {/* Customer Review */}



                 {/* Eligible for Free Shipping */}
                <div className="category-content">
                    <div className='category-head'>
                        <span>Eligible for Free Shipping </span>
                    </div>
                    <div className='category-body'>
                        <FilterCategoryBtn  content={'Free Shipping by Amazon All customers get FREE Shipping on orders over $25 shipped by Amazon'}/>
                        
                        

                    </div>



                </div>
                


                {/* برند */}
                <div className="category-content">
                    <div className='category-head'>
                        <span>برند </span>
                    </div>
                    <div className='category-body'>
                        <FilterCategoryBtn content={'Razer'}/>
                        
                        

                    </div>



                </div>
                {/* برند */}

                {/* New Releases */}
                <div className="category-content">
                    <div className='category-head'>
                        <span>New Releases </span>
                    </div>
                    <div className='category-body'>
                        <FilterCategoryBtn content={'Last 30 days'}/>
                        <FilterCategoryBtn content={'Last 90 days'}/>
                        
                        

                    </div>



                </div>

                {/* New Releases */}


                {/* Amazon Global Store */}
                <div className="category-content">
                    <div className='category-head'>
                        <span>Amazon Global Store </span>
                    </div>
                    <div className='category-body'>
                        <FilterCategoryBtn content={'Amazon Global Store'}/>
                        
                        
                        

                    </div>



                </div>

                {/* Amazon Global Store */}

                {/* International Shipping */}
                <div className="category-content">
                    <div className='category-head'>
                        <span> International Shipping</span>
                    </div>
                    <div className='category-body'>
                        <FilterCategoryBtn content={'International Shipping Eligible'}/>
                        
                        
                        

                    </div>



                </div>


                {/* International Shipping */}

                {/* Condition */}
                <div className="category-content">
                    <div className='category-head'>
                        <span>Condition </span>
                    </div>
                    <div className='category-body'>
                        <FilterCategoryBtn content={'New'}/>
                        <FilterCategoryBtn content={'Used'}/>
                        
                        
                        

                    </div>



                </div>


                {/* Condition */}

                {/* Availability */}

                <div className="category-content">
                    <div className='category-head'>
                        <span>Availability </span>
                    </div>
                    <div className='category-body'>
                        <FilterCategoryBtn content={'Include Out of Stock'}/>
                    
                        
                        
                        

                    </div>



                </div>


                {/* Availability */}

              
                  
                  
              

              </div>

          </div>

        </main>

        
    )
}

export default ProductSearch
