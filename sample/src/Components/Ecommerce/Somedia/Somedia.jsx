import React from 'react';
import './somedia_style.scss';
import {firstrow} from '../data'


const Somedia = () => {
    return (
        <div className='soMedia-container'>
            <div className='head'>
            <h1>FOLLOW & SHARE</h1>
            <p>#Instagram Feed</p>

            </div>
            <div className='body'>
                {
                    firstrow.data.map((data)=>{
                        return(<div> 
                        <img src={data.img} alt="" />

                               </div>)

                    })
                }
                
                
            </div>
            
        </div>
    )
}

export default Somedia
