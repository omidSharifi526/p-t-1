import React,{useState} from 'react';
import img from './dwn.png';
import menu from './hamb-menu.png'
import './dd_style.scss';



const DropDown = ({selectedCategory,setSelectedCategory}) => {

    const options=['Dress','Accessorie','Trends']

    const [show,setShow]=useState(false)

    return (
        <div className='DropDown'>
            <div className='DropDown-btn' onClick={()=>setShow(!show)}> <div style={{fontSize:'12px',color:'#0D2A5F',marginTop:'5px'}} ><img src={menu} alt="" />  {selectedCategory} </div>  <img src={img} /></div>
           {show &&  <div className='DropDown-content'>
               {
                   options.map((option)=>{
                       return(<>
                       
                       <div className='dropdown-item'
                       onClick={(e)=>{setSelectedCategory(option);
                                      setShow(false);console.log(option);}}
                       
                       >{option}</div>

                       
                       </>)
                   })
               }
                

            </div>}
            
        </div>
    )
}



export default DropDown
