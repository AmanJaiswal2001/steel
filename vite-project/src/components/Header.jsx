import React, { useState } from 'react'
import image from "../../public/Group 612.png"
import { Link, useNavigate } from 'react-router-dom'
import {MobileSidebar} from './MobileSidebar'
const Header = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/search?query=${encodeURIComponent(search)}`)
    }
  }
  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     applySearch(search)
  //   }
  // }
  
  return (
    <>
    <div className='flex md:justify-between w-full gap-5 md:gap-0 bg-white  md:bg-none sm:bg-none lg:bg-none fixed lg:static md:static sm:static z-40 lg:z-0  top-0   px-10'>
   <div className="md:hidden ">
          <MobileSidebar />
        </div>
   
    <div className='md:flex w-full  md:items-center gap-0 mt-7  sm:mt-0 md:mt-0  md:gap-10  '> 
   <div className='xl:w-1/4 w-full '>
   <Link to="/">
           <img 
           className=' w-56   '
           src = {image} />
        </Link>
   </div>
    
        <div className='xl:flex hidden md:w-full max-w-xxl   mt-1 sm:mt-0 md:mt-0  md:justify-center md:h-12 h-9  md:mx-20 md:items-center'>
            {/* search  */}
{/* <div className='flex  md:justify-center h-10  mx-20 items-center'> */}
<input type='search'
value={search}
onChange={(e) => setSearch(e.target.value)}
onKeyDown={(e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }}
    className='md:w-full w-[100%]  px-2 h-full border-1 border-gray-200 outline-0 rounded-l-2xl '
/>
<div className='md:h-12 md:w-[30%] h-9   '>
<button className='bg-[#12396d] md:h-12 md:w-28 w-[80%] cursor-pointer px-2  h-9 flex    items-center  rounded-r-xl text-white'>
<svg
className='text-xl  '
 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
 
<button onClick={handleSearch} className='flex w-20 font-medium cursor-pointer text-md font-poppins items-center px-2   '>
   Search
</button>
</button>
</div>





        </div>
    </div>
        
         <div className='sm:flex hidden gap-4 items-center   '>
            {/* user */}
            <a href="tel:+919891998846" target='_blank' rel="noopener noreferrer" className="font-semibold text-[#12396d]  text-sm font-poppins">91-9891998846</a>
       <a  href="mailto:sonateksteels@gmail.com" target='_blank'  rel="noopener noreferrer" className="font-semibold  text-[#12396d]  text-sm font-poppins">sonateksteels@gmail.com</a>
        </div> 
{/* mobile views  */}
          
    </div>
    <div className='flex xl:hidden  md:w-full max-w-xxl   mt-10 sm:mt-2 md:mt-2  md:justify-center md:h-12 h-10  px-5 md:items-center'>
            {/* search  */}
{/* <div className='flex  md:justify-center h-10  mx-20 items-center'> */}
<input type='search'
value={search}
onChange={(e) => setSearch(e.target.value)}
onKeyDown={(e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }}
    className='md:w-full w-[100%]   h-full border-1 border-gray-200 outline-0 rounded-l-2xl '
/>
<div className='md:h-12  h-10   '>
<button className='bg-[#12396d] md:h-12 md:w-28 w-[80%] cursor-pointer px-2  h-10 flex    items-center  rounded-r-xl text-white'>
<svg
className='text-xl  '
 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
 
<button onClick={handleSearch} className='flex w-20 font-medium cursor-pointer text-md font-poppins items-center px-2   '>
   Search
</button>
</button>
</div>





        </div> 
        </>
  )
}

export default Header