import React from 'react';
import './sidebarcontent_style.scss';
import CategoriesManager from '../CategoriesManager/CategoriesManager';
import searchimg from '.././../Asset/imgs/search-icn.svg'

const SidebarContent = () => {
    const maincategory=
    <div id='test1' className='test1'>
        <ul >
    <li>
    PC Accessories
    <ul>
    <li>
    PC Game Mice
    </li>
    <li>
    PC Game Headsets
    </li>
    <li>
    Mac Games & Accessories
    </li>
    <li>

    </li>
    </ul>
    </li>
    {/* first li */}

    <li>Mac Accessories</li>
    <li><ul><li>Computers & Accessories</li><li>PlayStation Legacy Systems</li><li>Earbud & In-Ear Headphones</li></ul></li>
    </ul>
    </div>
    ;



    const row2=<div className='row2'>
        <span><input type="checkbox" name="" id="" />     4 Stars & Up & Up</span>
        <span> <input type="checkbox" name="" id="" /> 3 Stars & Up & Up</span>
        <span> <input type="checkbox" name="" id="" /> 2 Stars & Up & Up</span>
        <li> <input type="checkbox" name="" id="" /> 1 Stars & Up & Up</li>




        {/* <ul>
    <li> <input type="checkbox" name="" id="" />    4 Stars & Up & Up</li>
    <li> <input type="checkbox" name="" id="" /> 3 Stars & Up & Up</li>
    <li> <input type="checkbox" name="" id="" /> 2 Stars & Up & Up</li>
    <li> <input type="checkbox" name="" id="" /> 1 Star & Up & Up</li>
    </ul> */}
    </div>;

    const row3=<div className='row3'>
        <span><input type="checkbox" name="" id="" />Free Shipping by Amazon All customers get FREE Shipping on orders over $25 shipped by Amazo</span>
    </div>;

    
    

    


   

const row4=<div className='row4'>
   <div className='text-area'><img src={searchimg} alt="" /> <input type="text" name="" id="" placeholder='جست و جو' /></div>
   <span> <input type="checkbox" name="" id="" />Razer </span>
   <span> <input type="checkbox" name="" id="" />Logitech </span>
   
</div>


const row5=<div className='row5' >
<span> <input type="checkbox" name="" id="" />   Last 30 days</span>
<span> <input type="checkbox" name="" id="" /> Last 90 days</span>

</div>;



const row6=<div className='row6'>
 <span><input type="checkbox" name="" id="" />   Amazon Global Store</span>
</div>;




const row7=<div className='row7'>
<span> <input type="checkbox" name="" id="" />   International Shipping Eligible</span>


</div>;

const row8=<div className='row8'>
<span> <input type="checkbox" name="" id="" />   New</span>
<span> <input type="checkbox" name="" id="" />  Used</span>


</div>;

const row9=<div className='row9'>
<span> <input type="checkbox" name="" id="" />   Include Out of Stock</span>



</div>;







    

    return (
        <div>
            <CategoriesManager titleCastegory={'دسته بندی'} data={maincategory} ></CategoriesManager>
            <CategoriesManager titleCastegory={' Customer Review'} data={row2} ></CategoriesManager>
            <CategoriesManager titleCastegory={' Eligible for Free Shipping '} data={row3} ></CategoriesManager>
            <CategoriesManager titleCastegory={' برند'} data={row4} ></CategoriesManager>
            <CategoriesManager titleCastegory={' New Releases'} data={row5} ></CategoriesManager>
            <CategoriesManager titleCastegory={' Amazon Global Store'} data={row6} ></CategoriesManager>
            <CategoriesManager titleCastegory={' International Shipping'} data={row7} ></CategoriesManager>
            <CategoriesManager titleCastegory={' Condition'} data={row8} ></CategoriesManager>
            <CategoriesManager titleCastegory={' Availability'} data={row9} ></CategoriesManager>
            
        </div>
    )
}

export default SidebarContent
