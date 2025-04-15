import React from 'react'
import DroupdownMenu, { DropdownMenu1, DropdownMenu2 } from './DroupdownMenu'


import { Link } from 'react-router-dom'
import Header from './Header'

const Nav = () => {
  return (
    <div className='w-full   pt-5'>
    <Header/>
    <hr className='text-gray-400   mt-4'></hr>
  <div className='relative mx-20  flex items-center   justify-between  '>
   {/* <div className='flex h-full  items-center justify-between gap-10  '> */}


    <div className='flex w-2/3      items-center  '>
   
    
  
 
 
  
    {/* {/* </div> */}
    <div className='md:flex font-sans text-sm gap-10 md:items-center hidden  '>
  
    <Link className='text-sm font-medium font-sans text-[#343a41]' to="/">Home</Link>
    <DroupdownMenu         menuItems={[
          "Hot Rolled",
          "Cold Rolled",
         
        ]} buttonName=" Mild Steel"/>
   
  
   
  <Link className='text-sm font-medium font-sans text-[#343a41]' to="#">About</Link>
  <Link className='text-sm font-medium font-sans text-[#343a41]' to="#">Contact</Link>

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