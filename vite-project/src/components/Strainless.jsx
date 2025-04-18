import React, { useState } from 'react'
import Sidebar from './Sidebar'

// import CardContainer from './CardContainer';
// import ColdContainer from './ColdContainer';
// import SheetCard from './SheetCard';
// import ColdSheetCard from './ColdSheetCard';
// import Sheets200 from './Sheets200';
import Coil200 from "./Coil200";
import SheetsTwo from "./SheetsTwo"
import Sheet300 from "./Sheets300"
import Coil300 from "./Coil300"


const Strainless= () => {
      const [activeType, setActiveType] = useState("hot");
   
      const [activeProduct, setActiveProduct] = useState('Series200');

   
    return (
    <div className='h-full w-full relative    md:mt-20 mt-0  '>
    <h1 className='font-bold md:text-3xl sm:text-2xl w-96 text-xl text-[#262626] leading-6 font-sans md:px-20 sm:px-10 px-5 '>Stainless Steel</h1>
    {/* sidebar */}

<div className='flex gap-10 md:w-[90%] w-full md:mt-5 mt-0  rounded-lg mx-auto  md:border md:border-gray-300'>
    <div className='w-1/4 hidden lg:block'>
<Sidebar activeType={activeType} setActiveType={setActiveType} 
 items={[
              { type: 'hot', label: 'Hot rolled sheets', link: '/' },
              { type: 'cold', label: 'Cold rolled coils', link: '/' },
            ]}

/>
    </div> 
<div className='w-full mt-2'>
<div className='flex   mt-3   gap-10 lg:px-24 sm:px-10 px-5  '>

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
     Hot rolled sheets
    </button>

    {/* Cold Rolled */}
    <button
      onClick={() => setActiveType("cold")}
      className={`text-left font-sans px-4 py-2   text-sm font-normal ${
        activeType === "cold" ?  'border-b-2 border-black  text-black font-bold' : "text-[#70737a]"
      }`}
    >
    Hot rolled coils
    </button>
  </div>
</div>

<button 
 className={`font-semibold hidden lg:block pt-1 font-sans  text-xl ${activeProduct === 'Series200' ? 'border-b-4 border-black  text-black font-bold' 
  : 'text-gray-600'}`}
  onClick={() => setActiveProduct('Series200')}
            >
Series 200</button>
<button  className={`font-semibold hidden lg:block font-sans text-xl ${activeProduct === 'Series300'  ? 'border-b-4  border-black  text-black  font-bold' 
        : 'text-gray-600'}`}
        onClick={() => setActiveProduct('Series300')}
            >
Series 300</button>
</div>




<div className='w-full  border-t  border-t-gray-300 '>

<div className='flex sm:gap-10 gap-5 mt-5 lg:hidden  mx-5 sm:mx-10 lg:mx-0'>
<button 
 className={`font-normal cursor-pointer  text-sm sm:w-28 w-24 p-2 font-sans  rounded-sm ${activeProduct === 'Series200' ? 'border border-[#a0ceff]  bg-[#e6f0ff] text-[#2241a6] ' 
  : 'text-[rgb(38, 38, 38)]   border border-[#b1b8c9]' }`}
  onClick={() => setActiveProduct('Series200')}
            >
Series 200</button>
<button  className={`font-normal cursor-pointer  text-sm sm:w-28 w-24 p-2 font-sans  rounded-sm ${activeProduct === 'Series300'  ? 'border border-[#a0ceff]  bg-[#e6f0ff] text-[#2241a6]' 
        : 'text-[rgb(38, 38, 38)]   border border-[#b1b8c9]'}`}
        onClick={() => setActiveProduct('Series300')}
            >
Series 300</button>
</div>


{/* <CardContainer/> */}

            
{activeProduct === "Series200" ? (
              activeType === 'hot' ? <SheetsTwo /> : <Coil200 />
              

            ) : (
              activeType === 'hot' ? <Sheet300 /> : <Coil300 />
            )}




            </div>

</div>

</div>
  
    </div>
  )
}

// sidebar

export default Strainless