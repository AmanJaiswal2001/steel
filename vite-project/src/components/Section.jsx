import React, { useState } from 'react'
import Sidebar from './Sidebar'

import CardContainer from './CardContainer';
import ColdContainer from './ColdContainer';
import SheetCard from './SheetCard';
import ColdSheetCard from './ColdSheetCard';
import { Link } from 'react-router-dom';



const Section= () => {
      const [activeType, setActiveType] = useState("hot");
   
      const [activeProduct, setActiveProduct] = useState('coil');

   
    return (
    <div className='relative h-auto w-full  md:mt-20 mt-0   '>
    <h1 className='font-bold md:text-3xl sm:text-2xl text-xl text-[#262626] leading-6 font-sans md:px-20 sm:px-10 px-5 '>Mild Steel</h1>
    {/* sidebar */}

<div className='flex gap-10 md:w-[90%] w-full md:mt-5 mt-0  rounded-lg mx-auto  md:border md:border-gray-300'>
    <div className=' w-1/4 hidden lg:block '>
<Sidebar activeType={activeType} setActiveType={setActiveType} 
items={[
    { type: 'hot', label: 'Hot Rolled', link: '/' },
    { type: 'cold', label: 'Cold Rolled', link: '/' },
  ]}

/>
    </div> 
<div className='w-full mt-2'>
<div className='flex   mt-3   gap-10 lg:px-24 sm:px-10 px-5   '>


{/* Mobile Sidebar */}
<div className="lg:hidden">
  <div className="flex  gap-4 mt-0 ">
    {/* Hot Rolled */}
    <button
      onClick={() => setActiveType("hot")}
      className={`text-left font-sans  text-sm  font-normal ${
        activeType === "hot" ?  'border-b-2 border-black  text-black font-bold' : "text-[#70737a]"
      }`}
    >
      Hot Rolled
    </button>

    {/* Cold Rolled */}
    <button
      onClick={() => setActiveType("cold")}
      className={`text-left font-sans px-4 py-2   text-sm font-normal ${
        activeType === "cold" ?  'border-b-2 border-black  text-black font-bold' : "text-[#70737a]"
      }`}
    >
      Cold Rolled
    </button>
  </div>
</div>

{/* <div className='px-4'> */}

<button 
 className={`font-semibold hidden lg:block pt-1 font-sans  text-xl ${activeProduct === 'coil' ?   'border-b-4 border-black  text-black font-bold' 
        : 'text-gray-600'}`}
              onClick={() => setActiveProduct('coil')}
            >
Coils</button>
<button  className={`font-semibold hidden lg:block font-sans text-xl ${activeProduct === 'sheet'  ? 'border-b-4  border-black  text-black  font-bold' 
        : 'text-gray-600'}`}
              onClick={() => setActiveProduct('sheet')}
            >
Sheets</button>


</div>
<div className='w-full  border-t  border-t-gray-300 '>


<div className='flex sm:gap-10 gap-5 mt-5 lg:hidden  mx-5 sm:mx-10 lg:mx-0'>
<button 
 className={`font-normal cursor-pointer  text-sm sm:w-20 w-16 p-2 font-sans  rounded-sm ${activeProduct === 'coil' ? 'border border-[#a0ceff]  bg-[#e6f0ff] text-[#2241a6] ' 
        : 'text-[rgb(38, 38, 38)]   border border-[#b1b8c9]' }`}
              onClick={() => setActiveProduct('coil')}
            >
Coils</button>
<button  className={`font-normal cursor-pointer  text-sm sm:w-20 w-16 p-2 font-sans  rounded-sm ${activeProduct === 'sheet'  ? 'border border-[#a0ceff]  bg-[#e6f0ff] text-[#2241a6]' 
        : 'text-[rgb(38, 38, 38)]   border border-[#b1b8c9]'}`}
              onClick={() => setActiveProduct('sheet')}
            >
Sheets</button>
</div>



{/* <CardContainer/> */}
{activeProduct === 'coil' ? (
              activeType === 'hot' ? <CardContainer /> : <ColdContainer />
            ) : (
              activeType === 'hot' ? <SheetCard /> : <ColdSheetCard /> // or another cold sheet component
            )}</div>

</div>

</div>
  
    </div>
  )
}

// sidebar

export default Section