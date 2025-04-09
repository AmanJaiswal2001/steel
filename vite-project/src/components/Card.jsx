import React from 'react'

const Card = (
    {title,brand,thickness,width,buttonName,delivery,image}
) => {
  return (
    <div className=" card hover:shadow-2xl -z-10 hover:bg-transparent hover:scale-[98%] transform transition  ease-in-out  duration-300   bg-base-100 w-64 full  shadow-sm ">
    <figure>
      <img className='w-full object-fit    '
        src={image}
        alt="Shoes" />
    </figure>
    <div className="card-body -z-10 m-0 p-0 ">
      <h2 className=" px-2 mt-2 font-manrope font-medium h-12  text-[1rem]">{title}</h2>
      <h5 className='px-2 font-manrope font-medium   text-[1rem]'>{brand}</h5>
      <p className='px-2 font-manrope font-medium   text-[1rem]'><span className='font-semibold'>Thickness</span> {thickness}</p>
      <p className='px-2 font-manrope font-medium   text-[1rem]'><span className='font-semibold'>Width </span> {width}</p>
      <div className='bg-blue-100 rounded-b-lg w-full'>
      <div className="  w-80 m-0 p-0 text-left   ">
        <button className=" p-2 w-80 m-0  text-left bg-bl-200 font-manrope cursor-pointer font-medium   text-[1rem]">{buttonName}</button>
      </div>
      <hr className='text-gray-300 mx-2 px-2'></hr>
      <div className='flex gap-1 px-2 mb-2 '>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 20q-1.25 0-2.125-.875T4 17H1.5l.45-2h2.825q.425-.475 1-.737T7 14t1.225.263t1 .737H13.4l2.1-9H4.55l.1-.425q.15-.7.687-1.137T6.6 4H18l-.925 4H20l3 4l-1 5h-2q0 1.25-.875 2.125T17 20t-2.125-.875T14 17h-4q0 1.25-.875 2.125T7 20m8.925-7h4.825l.1-.525L19 10h-2.375zm-.475-6.825L15.5 6l-2.1 9l.05-.175l.85-3.65zM.5 13.325l.5-2h5.5l-.5 2zm2-3.65l.5-2h6.5l-.5 2zM7 18q.425 0 .713-.288T8 17t-.288-.712T7 16t-.712.288T6 17t.288.713T7 18m10 0q.425 0 .713-.288T18 17t-.288-.712T17 16t-.712.288T16 17t.288.713T17 18"/></svg>
        <span className='font-manrope font-medium   text-[1rem]'>{delivery}  </span>
      </div>
      </div>
    
         
    </div>
  </div>
  )
}

export default Card