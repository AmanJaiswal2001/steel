import React, { useState } from 'react'
import image from "../../public/Group 599.png"
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
  
  return (
    <div className='flex md:justify-between w-full gap-5 md:gap-0 bg-white  md:bg-none sm:bg-none lg:bg-none fixed lg:static md:static sm:static z-40 lg:z-0  top-0   px-10 md:px-20'>
   <div className="md:hidden ">
          <MobileSidebar />
        </div>
   
    <div className='md:flex w-full  md:items-center gap-0 mt-7 sm:mt-0 md:mt-0  md:gap-10 md:w-2/3 '> 
    <Link to="/">
           <img 
           className='w-36   '
           src = {image} />
        </Link>
        <div className='flex md:w-full max-w-xl  mt-1 sm:mt-0 md:mt-0  md:justify-center md:h-10 h-9  md:mx-20 md:items-center'>
            {/* search  */}
{/* <div className='flex  md:justify-center h-10  mx-20 items-center'> */}
<input type='search'
value={search}
onChange={(e) => setSearch(e.target.value)}
    className='md:w-full w-[100%]  px-2 h-full border-1 border-gray-200 outline-0 rounded-l-2xl '
/>
<div className='md:h-10 md:w-[30%] h-9   '>
<button className='bg-[#2241a6] md:h-10 md:w-28 w-[80%] cursor-pointer px-2  h-9 flex    items-center  rounded-r-2xl text-white'>
<svg
className='text-xl  '
 xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
 
<button onClick={handleSearch} className='flex w-20 font-medium cursor-pointer text-sm font-sans items-center px-2   '>
   Search
</button>
</button>
</div>





        </div>
    </div>
        
        {/* <div className='flex gap-4  '>
            {/* user */}
            {/* <button className='text-xl text-[#2241a6] font-sans cursor-pointer font-bold'>Login</button> */}
{/* <button className='text-xl text-[#2241a6] font-sans cursor-pointer font-bold'>Register</button> */}
        {/* </div> */} 
    </div>
  )
}

export default Header