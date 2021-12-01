import React from 'react';
import './SpeciallSales_styel.scss';
import Cart from './Carts/Cart'

const SpeciallSales = ({data}) => {
   
    return (
        <div className='speciall-sales-container'>
        <div className='speciall-sales-head'>
           <div>
           <h4>{data.headTitle}</h4>
           </div>
            <div>
            <p>seeAll</p>
            </div>

        </div>
        <div className='speciall-sales-body'>
            {
                data.data.map((mdata,index)=>{
                    return(<div key={index}><Cart data={mdata}/></div>)

                })

            }

        </div>


    </div>
    )
}

export default SpeciallSales
