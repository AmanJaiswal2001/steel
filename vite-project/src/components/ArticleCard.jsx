import React from 'react'

const ArticleCard = ({image, buttonName,description, buttonNavigate}) => {
  return (
    <div className='w-full'>
        <div 
         data-theme="light" 
         className="card bg-base-100 w-full border border-gray-200 hover:shadow-violet-500  ">
  <figure className='w-full object-fit '>
    <img className='w-full h-80 bg-red-400 object-cover object-fit  '
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body  ">
    <button className="card-title bg-[#deb887] w-20 flex font-sans justify-center items-center font-semibold rounded-lg  text-[#262626] ">{buttonName}</button>
    <h5 className='font-sans text-[#262626] h-20 break-words cousor-pointer text-[1.125rem] font-medium '>{description}</h5>
    <div className="card-actions justify-start mt-2 mb-4">
      <button className="font-semibold cursor-pointer break-word text-[#2241a6] text-[.875rem] ">{buttonNavigate}</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default ArticleCard