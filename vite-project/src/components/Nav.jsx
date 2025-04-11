import React from 'react'
import DroupdownMenu, { DropdownMenu1, DropdownMenu2 } from './DroupdownMenu'
import Crousel from './Crousel'
import Section from './Section'
import image from "../../public/Group 599.png"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full  overflow-hidden  pt-5'>
    <div className='flex justify-between  mx-20'>
    <div className='flex items-center gap-10 w-2/3 '> 
    <div>
           <img 
           className='w-36  '
           src = {image} />
        </div>
        <div className='flex w-full'>
            {/* search  */}

<input type='search'

    className='w-full px-2 h-12 border-1 border-gray-200 outline-0 rounded-l-2xl '
/>
<button className='bg-[#2241a6] w-28 cursor-pointer px-2 h-12 flex    items-center  rounded-r-2xl text-white'>
<svg
className='text-xl  '
 xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
 
<button className='flex w-20 text-xl items-center px-2   '>
   Search
</button>
</button>



        </div>
    </div>
        
        <div className='flex gap-4  '>
            {/* user */}
            <button className='text-xl text-[#2241a6] font-manrope cursor-pointer font-bold'>Login</button>
<button className='text-xl text-[#2241a6] font-manrope cursor-pointer font-bold'>Register</button>
        </div>
    </div>
    <hr className='text-gray-400 mt-5'></hr>
  <div className='relative  flex items-center  justify-between mx-20 '>
   <div className='flex    w-3/4  '>
    <div className=' z-20'>
    <DroupdownMenu         menuItems={[
          "Hot Rolled",
          "Cold Rolled",
          // "Wire Rods",
          // "Coated",
          // "Colour Coated",
        ]} buttonName=" Mild Steel"/>
   
   {/* <DropdownMenu1 menuItems={[ */}
    {/* "Hot rolled sheets",
    "Hot rolled coils",
    "Could rolled sheets",
"Cold rolled coils"
   ]}
   buttonName="Stainless Steel"/>
  */}

  
 
 
  
    </div>
    <div className='flex gap-10 pt-2'>
    <Link to="#">Home</Link>
  <Link to="#">About</Link>
  <Link to="#">Contact</Link>

    </div>
   
  </div>
  <div className='-mt-10'>
  <DropdownMenu2 buttonName="Connect with us"/>
  </div>
   
    </div>
    
       


      
    
    </div>
    
  )
}

export default Nav