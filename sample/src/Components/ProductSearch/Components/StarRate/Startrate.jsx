import React,{useState} from 'react';
import './starRate_style.scss';
import { FaBeer, FaStar } from 'react-icons/fa';


const Startrate = () => {
    const [rating,setRating]=useState(null)
    const [hover,setHover]=useState(null)
    return (
        <div>
          {
              [...Array(5)].map((star,index)=>{
                  console.log(index+'index');
                  const ratingValue=index+1;
                  console.log(ratingValue+'ratingvalue');
                  return(<label>
                      <input 
                      type="radio" 
                      name="rating " 
                      id="" 
                      value={ratingValue}
                      onClick={()=>setRating(ratingValue)}
                       />
                      <FaStar color={ratingValue<=(rating || hover)?'yellow':'gray'} 
                       className='star'
                       key={index} 
                       size={15}
                       onMouseEnter={()=>setHover(ratingValue)}
                       onMouseLeave={()=>setHover(null)}/>
                  </label>)
              })
          }
        </div>
    )
}

export default Startrate
