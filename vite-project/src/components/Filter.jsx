import React from 'react'
import { CommonFilter, FilterDropdown } from './HelperComponent'

const Filter = () => {
  return (
    <div className='w-full h-1/2 flex flex-col gap-4'>
    {/* header part */}
    <div className='flex w-full justify-between'>
<div className=' w-full flex gap-2 items-center '>
    {/* icon */}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-7L2.95 4h18.1L14 13v7zm2-7.7L16.95 6h-9.9zm0 0"/></svg>
    <span className='font-manrope font-semibold text-[1.25rem]'>Filter</span>
    {/* filter */}
</div>

<div>
{/* button */}
<button className='text-[#2241a6] cursor-pointer text-[0.875rem] font-semibold'>Clear filters</button>
</div>
</div>
{/* filter dropdown */}
<div className=' w-full flex flex-col gap-4  '>
<div className='w-full'>
<FilterDropdown
  title="Brand"
        options={["JSW Steel", "SAIL", "JSPL", "AMNS"]}
     
/>
</div>
<div>
<FilterDropdown
    title="Grade"
        options={["1.0mm", "1.2mm", "1.6mm", "2.0mm"]}
  
/>
</div>

</div>
{/* comon filter */}
<div className='flex flex-col gap-4 w-full  '>
 <div>
  <CommonFilter 
     title="Thickness"
  minLabel="Min"
  maxLabel="Max"
  minOptions={["11", "12", "13"]}
  maxOptions={["14", "15", "16"]}

  />
  </div>
 <div>
 <CommonFilter
     title="Width"
  minLabel="Min"
  maxLabel="Max"
  minOptions={["100", "200"]}
  maxOptions={["300", "400"]}

  />
 </div>
 <div>
 <CommonFilter
     title="Length"
 minLabel="Min"
  maxLabel="Max"
  minOptions={["100", "200"]}
  maxOptions={["300", "400"]}

  />
 </div>
 
</div>
    </div>
  )
}

export default Filter