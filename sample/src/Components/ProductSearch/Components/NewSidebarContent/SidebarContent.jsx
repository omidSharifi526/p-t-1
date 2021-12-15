import React,{useState} from 'react';
import './sidebarcontent_style.scss';
import CategoriesManager from '../CategoriesManager/CategoriesManager';
import searchimg from '.././../Asset/imgs/search-icn.svg';
import CheckBox from '../Checkbox/CheckBox';

const SidebarContent = () => {

    const[accept,setAccept]=useState(true);
   // console.log(accept);

    const handleCheckbox=(checked)=>{
        console.log('from child',checked);
        setAccept(checked)

       
      

    }



    const maincategory=<div className='test1'>
        <ul>
    <li>PC Accessories
       <ul>
          <li>PC Gaming Mice</li>
          <li>PC Game Headsets</li>
       </ul>
    </li>


    <li>Mac Games & Accessories
        <ul><li>Mac Accessories</li></ul>
    </li>

    <li>Mac Accessories</li>
    <li>PlayStation Legacy Systems</li>
    <li>Earbud & In-Ear Headphones</li>



  </ul>
  
    </div>;
  
    



        
 
    



    const row2=<div className='row2'>
        <CheckBox label='4 Stars & Up & Up' styleClass='' checked={accept} handleCheckbox={handleCheckbox} />
        <CheckBox label=' 3 Stars & Up & Up' styleClass='' checked={accept} handleCheckbox={handleCheckbox} />
        <CheckBox label=' 2 Stars & Up & Up' styleClass='' checked={accept} handleCheckbox={handleCheckbox} />
        <CheckBox label='1 Stars & Up & Up' styleClass='' checked={accept} handleCheckbox={handleCheckbox} />
      
    </div>;

    const row3=<div className='row3'>
         <CheckBox label=' Free Shipping by Amazon All customers get FREE Shipping on orders over $25 shipped by Amazo' styleClass='myCheckBox' checked={accept} handleCheckbox={handleCheckbox} />
       
    </div>;

    
    

    


   

const row4=<div className='row4'>
   <div className='text-area'><img src={searchimg} alt="" /> <input type="text" name="" id="" placeholder='جست و جو' /></div>
   <CheckBox label=' Razer' styleClass='myCheckBox' checked={accept} handleCheckbox={handleCheckbox} />
   <CheckBox label=' Logitech' styleClass='myCheckBox' checked={accept} handleCheckbox={handleCheckbox} />

</div>


const row5=<div className='row5' >
 <CheckBox label=' Last 30 days' styleClass='myCheckBox' checked={accept} handleCheckbox={handleCheckbox} />
 <CheckBox label=' Last 90 days' styleClass='myCheckBox' checked={accept} handleCheckbox={handleCheckbox} />


</div>;



const row6=<div className='row6'>
  <CheckBox label='Amazon Global Store' styleClass='myCheckBox' checked={accept} handleCheckbox={handleCheckbox} />
 
</div>;




const row7=<div className='row7'>
<CheckBox label='International Shipping Eligible' styleClass='myCheckBox' checked={accept} handleCheckbox={handleCheckbox} />



</div>;

const row8=<div className='row8'>

<CheckBox label='New' styleClass='myCheckBox' checked={accept} handleCheckbox={handleCheckbox} />
<CheckBox label='Used' styleClass='myCheckBox' checked={accept} handleCheckbox={handleCheckbox} />

</div>;

const row9=<div className='row9'>

<CheckBox label='Include Out of Stock' styleClass='myCheckBox' checked={accept} handleCheckbox={handleCheckbox} />


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
