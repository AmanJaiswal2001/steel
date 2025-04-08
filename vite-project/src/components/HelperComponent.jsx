import React from 'react'
import { FaSquareWhatsapp } from "react-icons/fa6";
const HelperComponent = ({bgColor, textColor,width,height,description}) => {
  return (
    <div className={`${bgColor} ${textColor} ${width} ${height}  flex justify-center   items-center `}>
<p className='w-64 text-center font-medium  font-manrope'>{description}</p>
    </div>
  )
}

export default HelperComponent

 export const  Design =({description})=>{
  return(
    <div className='bg-[#e6f0ff] h-full flex items-center '>
    <h4 className='font-manrope font-normal w-2/3 text-[1.5rem] mx-20'>{description} </h4>
    <button className='flex gap-2 items-center justify-center p-2 rounded-lg w-64 bg-[#007bff]'>      
     <a href="#" target="_blank">
     <FaSquareWhatsapp
     className='w-10 h-10 text-white '
      />
        </a><span className='text-white'>Connect on whatsapp</span>
</button>
            </div>
  )
}