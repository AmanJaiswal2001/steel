import React, { useState } from 'react'
import Sidebar from './Sidebar'

import CardContainer from './CardContainer';
import ColdContainer from './ColdContainer';
import SheetCard from './SheetCard';
import ColdSheetCard from './ColdSheetCard';



const Section= () => {
      const [activeType, setActiveType] = useState("hot");
   
      const [activeProduct, setActiveProduct] = useState('coil');

   
    return (
    <div className='h-screen w-full  overflow-x-hidden '>
    <h1 className='font-bold text-[1.5rem] text-[#262626] font-manrope px-20 '>Mild Steel</h1>
    {/* sidebar */}

<div className='flex gap-10 w-[90%] mt-5  rounded-lg mx-auto  border border-gray-300'>
    <div className=' w-1/4 '>
<Sidebar activeType={activeType} setActiveType={setActiveType} 
items={[
    { type: 'hot', label: 'Hot Rolled', link: '/' },
    { type: 'cold', label: 'Cold Rolled', link: '/' },
  ]}

/>
    </div> 
<div className='w-full mt-2'>
<div className='flex   mt-3  gap-10 px-24    '>
<button 
 className={`font-semibold pt-1 font-manrope  text-xl ${activeProduct === 'coil' ?   'border-b-4 border-black  text-black font-bold' 
        : 'text-gray-600'}`}
              onClick={() => setActiveProduct('coil')}
            >
Coils</button>
<button  className={`font-semibold font-manrope text-xl ${activeProduct === 'sheet'  ? 'border-b-4  border-black  text-black  font-bold' 
        : 'text-gray-600'}`}
              onClick={() => setActiveProduct('sheet')}
            >
Sheets</button>
</div>
<div className='w-full '>
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