import React from 'react'
import CardSheet from './CardSheet';
import { Link } from 'react-router-dom';
import cardData from './data/hotrolledcarddarta';
const HotRolledCatgory = () => {
  
   
    return (
    <div>
    <div class="grid grid-cols-3 grid-rows-2 gap-10 w-full  ">
 {/* <div> */}
 {cardData.map((card,index)=>(
    <Link key={index} to={`/product/${index}`}>
    <CardSheet {...card} />
  </Link> ))}

    
    </div>
    </div>
  )
}

export default HotRolledCatgory