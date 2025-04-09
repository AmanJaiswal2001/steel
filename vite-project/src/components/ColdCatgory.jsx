import React from 'react'
import Filter from './Filter'
import HotRolledCatgory from './HotRolledCatgory'
import ColdRolledCatgory from './ColdRolledCatgory'

const ColdCatgory = () => {
  return (
    <div className='relative -top-40 flex w-full gap-10 ' >
    {/* filter */}
   
    <div className='w-2/5 h-full px-20  '>
    <Filter/>
    </div>
  
    {/* catgory */}
    <div className=' flex flex-col gap-2 h-full w-3/5'>
   
    <h1 className='font-extrabold text-[1.25rem]  '>Cold Rolled Mild Steel Sheets</h1>
    <ColdRolledCatgory/>
    </div>
   
    </div>
  )
}

export default ColdCatgory