import React from 'react'
import DroupdownMenu, { DropdownMenu2 } from './DroupdownMenu'


import { Link } from 'react-router-dom'
import Header from './Header'

const Nav = () => {
  return (
    <div className='w-full   pt-5'>
   
    
    <Header/>
    <hr className='text-gray-400  mt-20 sm:mt-4 md:mt-4 lg:mt-4'></hr>
  <div className='relative mx-20  flex items-center  pt-0 justify-between  '>
   {/* <div className='flex h-full  items-center justify-between gap-10  '> */}


    <div className='flex w-2/3      items-center  '>
   
    
  
 
 
  
    {/* {/* </div> */}
    <div className='md:flex font-sans text-sm gap-10 md:items-center hidden   '>
  
    <Link className='text-[#343a41] font-medium font-sans  text-sm rounded flex  cursor-pointer hover:text-[#2241a6]' to="/">Home</Link>
    <DroupdownMenu         menuItems={[
          "Hot Rolled",
          "Cold Rolled",
         
        ]} buttonName=" Mild Steel"/>
   
  
   
  <Link className='text-[#343a41] font-medium font-sans  text-sm rounded flex cursor-pointer hover:text-[#2241a6]' to="#">About</Link>
  <Link className='text-[#343a41] font-medium font-sans  text-sm rounded flex cursor-pointer hover:text-[#2241a6]' to="#">Contact</Link>

    </div>
   
  </div>
  <div className='mt-0 hidden  md:flex justify-end mr-20 '>
  <DropdownMenu2 buttonName="Connect with us"/>
  </div>
   
    </div>
    </div>
       


      
    
    // </div>
    
  )
}

export default Nav