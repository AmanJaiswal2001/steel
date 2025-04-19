import React from 'react'

const CardSheet= (
    {title,brand,thickness,width,buttonName,delivery,image,length}
) => {
  return (
    <div
     data-theme="light" 
     className="card hover:shadow-lg hover:bg-transparent  hover:-translate-y-1 transform transition  ease-in-out  duration-300   bg-base-100 h-[450px] w-72  ">
    <figure className='w-full object-fit '>
      <img className='w-full object-fit  h-44   '
        src={image}
        alt="card" />
    </figure>
    <div className="card-body m-0 p-0 -z-10  px-2">
      <h2 className="  mt-2 font-sans font-medium h-12  text-[1rem]">{title}</h2>
      <div className='flex gap-2'>
      <span className='font-normal text-[12px] font-sans text-[#70737a]'>Brand:</span>
      <p className=' font-sans font-semibold text-[#70737a]  text-[12px]'> {brand}</p>
     
      </div>
      <div className='flex gap-2'>
      <span className='font-semibold text-sm font-sans text-[#262626]'>Thickness</span>
      <p className=' font-medium text-sm font-sans text-[#262626]'> {thickness}</p>
     
      </div>
      <div className='flex gap-2'>
      <span className='font-semibold text-sm font-sans text-[#262626]'>Width </span>
      <p className=' font-medium text-sm font-sans text-[#262626]'> {width}</p>
     
      </div>
      <div className='flex gap-2'>
      <span className='font-semibold text-sm font-sans text-[#262626]'>Length</span>
      <p className=' font-medium text-sm font-sans text-[#262626]'> {length}</p>
     
      </div>
      {/* <p className=' font-sans font-medium   text-[1rem]'><span className='font-semibold'>Length</span>{" "}{length}</p> */}
      <div className='bg-[#f5f6fa]  h-20 rounded-b-lg w-full bottom-0 absolute left-0'>
      <div className="  w-52 m-0 p-0 text-left  h-10 ">
        <button className=" p-2 w-full m-0  text-[#2241a6] text-left bg-bl-200 font-sans cursor-pointer font-semibold  text-sm  ">{buttonName}</button>
      </div>
      <hr className='text-gray-300 mx-2 px-2'></hr>
      <div className='flex gap-1 px-2 pt-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 20q-1.25 0-2.125-.875T4 17H1.5l.45-2h2.825q.425-.475 1-.737T7 14t1.225.263t1 .737H13.4l2.1-9H4.55l.1-.425q.15-.7.687-1.137T6.6 4H18l-.925 4H20l3 4l-1 5h-2q0 1.25-.875 2.125T17 20t-2.125-.875T14 17h-4q0 1.25-.875 2.125T7 20m8.925-7h4.825l.1-.525L19 10h-2.375zm-.475-6.825L15.5 6l-2.1 9l.05-.175l.85-3.65zM.5 13.325l.5-2h5.5l-.5 2zm2-3.65l.5-2h6.5l-.5 2zM7 18q.425 0 .713-.288T8 17t-.288-.712T7 16t-.712.288T6 17t.288.713T7 18m10 0q.425 0 .713-.288T18 17t-.288-.712T17 16t-.712.288T16 17t.288.713T17 18"/></svg>
        <span className='font-sans font-medium text-[#262626]   text-sm'>{delivery}  </span>
      </div>
      </div>
    
         
    </div>
  </div>
  )
}

export default CardSheet