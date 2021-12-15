import React,{useState} from 'react';
import closeImg from '../../Asset/imgs/close.svg';
import plus from '../../Asset/imgs/plus.svg';
import FilterCategoryBtn from './FilterCategoryBtn/FilterCategoryBtn';


import './categoriesmanager_style.scss';

const CategoriesManager = ({titleCastegory,data}) => {

    const[state,setstate]=useState(true)


    return (
        <div className={`categori-main-container`}>
            <div onClick={()=>{setstate(!state)}} className="header-area">
                <span>{titleCastegory}</span>
                <img onClick={()=>{
                    setstate(!state)
                }} src={state?closeImg:plus} alt="" />


            </div>
            <div className={`body-area  ${state?"active":"notactive"}`} >
                
           
            {data}

           
            </div>
        </div>
    )
}

export default CategoriesManager
