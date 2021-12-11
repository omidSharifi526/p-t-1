import React,{useState} from 'react';
import closeImg from '../../Asset/imgs/close.svg';
import plus from '../../Asset/imgs/plus.svg';


import './categoriesmanager_style.scss';

const CategoriesManager = ({titleCastegory}) => {

    const[state,setstate]=useState(false)


    return (
        <div className={`categori-main-container`}>
            <div className="header-area">
                <span>{titleCastegory}</span>
                <img onClick={()=>{
                    setstate(!state)
                }} src={state?closeImg:plus} alt="" />


            </div>
            <div className={`body-area  ${state?"active":"notactive"}`} >
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, temporibus.</p>

            </div>
        </div>
    )
}

export default CategoriesManager
