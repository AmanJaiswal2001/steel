import React, { useState } from 'react'
import Filter from './Filter'
import HotRolledCatgory from './HotRolledCatgory'

const Catgory = () => {
  const [filters, setFilters] = useState({ Grade: [], Thickness: null,
    Width: null,
    Length: null });
  return (
    <div className='  h-full mt-10 flex w-full  xl:gap-10 px-5 gap-5 lg:px-16 lg:gap-8 md:px-10 md:gap-8 xl:px-20' >
    {/* filter */}
   
    <div className='w-96 hidden   lg:block xl:block   '>
    <Filter onFilterChange={setFilters}/>
    </div>
  
    {/* catgory */}
    <div className=' flex flex-col gap-2 h-full w-full lg:w-3/4'>
   
    <h1 className='font-extrabold text-2xl text-[#262626] font-poppins text-left '>Hot Rolled Mild Steel Sheets</h1>
    <div className='relative max-w-full mx-auto mb-10  lg:mx-0 xl:mx-0'>
    <HotRolledCatgory filters={filters}/>
    </div>
    </div>
   
    </div>
  )
}

export default Catgory