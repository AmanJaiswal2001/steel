import React, { useState } from 'react'
import Filter from './Filter'
import HotRolledCatgory from './HotRolledCatgory'
import CoilsCat from './CoilsCat';

const Hotrolledcoilcat = () => {
  const [filters, setFilters] = useState({ Grade: [], Thickness: null,
    Width: null,
    Length: null });
  return (
    <div className='  h-full mt-10 flex w-full gap-10 ' >
    {/* filter */}
   
    <div className='w-2/5  px-20  '>
    <Filter onFilterChange={setFilters}
hideFields={["Length"]}

    />
    </div>
  
    {/* catgory */}
    <div className=' flex flex-col gap-2 h-full w-3/5'>
   
    <h1 className='font-extrabold text-[1.25rem]  '>Hot Rolled Mild Steel Sheets</h1>
    <CoilsCat filters={filters}/>
    </div>
   
    </div>
  )
}

export default Hotrolledcoilcat