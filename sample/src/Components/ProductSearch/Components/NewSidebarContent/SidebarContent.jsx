import React from 'react';
import './sidebarcontent_style.scss';
import CategoriesManager from '../CategoriesManager/CategoriesManager';

const SidebarContent = () => {
    const maincategory=<ul className='ul-row1'>
    <li>
    <ul>
    <li>
    PC Accessories
    </li>
    <li>

    </li>
    </ul>
    </li>

    <li><ul><li>Mac Games & Accessories</li></ul></li></ul>
    ;
    const row2=<ul>
    <li> <input type="checkbox" name="" id="" />    4 Stars & Up & Up</li>
    <li> <input type="checkbox" name="" id="" /> 3 Stars & Up & Up</li>
    <li> <input type="checkbox" name="" id="" /> 2 Stars & Up & Up</li>
    <li> <input type="checkbox" name="" id="" /> 1 Star & Up & Up</li>
    </ul>;

    const row3=<ul><li><input type="checkbox" name="" id="" /><span>
    Free Shipping by Amazon All customers get FREE Shipping on orders over $25 shipped by Amazo</span></li></ul>;

    


   

const row4=<ul>
<li> <input type="text" name="" id="" placeholder='جست و جو' />  </li>
<li> <input type="checkbox" name="" id="" /> Razer</li>
</ul>;


const row5=<ul>
<li> <input type="checkbox" name="" id="" />   Last 30 days</li>
<li> <input type="checkbox" name="" id="" /> Last 90 days</li>

</ul>;
const row6=<ul>
<li> <input type="checkbox" name="" id="" />   Amazon Global Store</li>


</ul>;

const row7=<ul>
<li> <input type="checkbox" name="" id="" />   International Shipping Eligible</li>


</ul>;

const row8=<ul>
<li> <input type="checkbox" name="" id="" />   New</li>
<li> <input type="checkbox" name="" id="" />  Used</li>


</ul>;

const row9=<ul>
<li> <input type="checkbox" name="" id="" />   Include Out of Stock</li>



</ul>;







    

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
