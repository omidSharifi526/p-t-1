import React from 'react';
import './FilterCategoryBtn_styel.scss'

const FilterCategoryBtn = ({content}) => {
    return (
        <>
        <button onClick={()=>alert('clicked')}>
            {content}
        </button>
            
            </>
    )
}

export default FilterCategoryBtn
