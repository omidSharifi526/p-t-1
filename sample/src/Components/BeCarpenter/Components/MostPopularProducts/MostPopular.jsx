import React from 'react';
import './mostpopular_style.scss';

import {data} from './Asset/Data/data';
import Card from './Carts/Card';

const MostPopular = () => {
    return (
        <div className='container'>
            <div className='text-container'>
                <h2>
                    Most Popular
                    products
                </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, odit.</p>
                <button>View our products</button>

            </div>
            <div className='product-container'>
                {
                    data.map((data,index)=>{
                        return(<Card key={index} pdata={data}/>)
                    })
                }

            </div>

            
           
        </div>
        
    )
}

export default MostPopular
