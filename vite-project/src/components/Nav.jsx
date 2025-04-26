import React from 'react'
import DroupdownMenu, { DropdownMenu2 } from './DroupdownMenu'


import { Link } from 'react-router-dom'
import Header from './Header'

const Nav = () => {
  return (
    <div className='w-full    pt-5'>
   
    
    <Header/>
    <hr className='text-gray-400  mt-5 sm:mt-4 md:mt-4 lg:mt-4'></hr>
  <div className='relative mx-10  flex items-center  pt-0 justify-between  '>

   {/* <div className='flex h-full  items-center justify-between gap-10  '> */}


    <div className='flex w-2/3      items-center  '>
   
    
  
 
 
  
    {/* {/* </div> */}
    <div className='md:flex font-poppins text-[16px] gap-10 md:items-center hidden   '>
  
    <Link className='text-[#343a41] font-medium font-poppins  text-[16px] rounded flex  cursor-pointer hover:text-[#12396d]' to="/">Home</Link>
    <DroupdownMenu         menuItems={[
          "Hot Rolled",
          "Cold Rolled",
          "Steel"
         
        ]} buttonName=" Mild Steel"/>
   
  
   
  <Link className='text-[#343a41] font-medium font-poppins  text-[16px] rounded flex cursor-pointer hover:text-[#12396d]' to="/about">About</Link>
  <Link className='text-[#343a41] font-medium font-poppins  text-[16px] rounded flex cursor-pointer hover:text-[#12396d]' to="/contact">Contact</Link>

    </div>
   
  </div>
  {/* <div className='mt-0 hidden   md:flex  lg:mr-20 md:mr-0  '>
  <DropdownMenu2 buttonName="Connect with us"/>
  </div> */}
   
    </div>
    </div>
       


      
    
    // </div>
    
  )
}

export default Nav