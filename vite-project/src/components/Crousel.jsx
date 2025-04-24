import React, { useEffect, useState } from 'react'
import { FaSquareWhatsapp } from "react-icons/fa6";

const image=[
    // "https://images.ctfassets.net/o0otttl8ele8/46U7cIK5AomnCu6Jrt8j2K/4ea2e87838b8eed2a665c8eac35df1f1/Website_banner-04_desktop__1_.jpg?w=1536&h=415&fm=webp",
    // "https://images.ctfassets.net/o0otttl8ele8/46U7cIK5AomnCu6Jrt8j2K/4ea2e87838b8eed2a665c8eac35df1f1/Website_banner-04_desktop__1_.jpg?w=1536&h=415&fm=webp",

    // "https://images.ctfassets.net/o0otttl8ele8/46U7cIK5AomnCu6Jrt8j2K/4ea2e87838b8eed2a665c8eac35df1f1/Website_banner-04_desktop__1_.jpg?w=1536&h=415&fm=webp",

    "/sonatch.jpg",
    "/sonatch.jpg", "/sonatch.jpg", "/sonatch.jpg",
    // "/desktop__1_.webp",
    // "/banner-07.webp",
    // "/desktop__1_.webp",
  ]






const Crousel = () => {
 const [current,setCurrent]=useState(0);

 const nextSlide = () => {
   setCurrent(prev => (prev === image.length - 1 ? 0 : prev + 1));
 };

 const previousSlide = () => {
   setCurrent(prev => (prev === 0 ? image.length - 1 : prev - 1));
 };
 
 useEffect(() => {
   const interval = setInterval(nextSlide, 4000); // 3 seconds
   return () => clearInterval(interval); // Cleanup on unmount
 }, []);
   
 
 
 return (
    <div className='relative     w-full mx-auto '>
    <div onClick={previousSlide}
      className="absolute left-2 top-[50%] h-16 w-16  -translate-y-1/2  bg-blue-200 hidden  lg:flex items-center justify-center  cursor-pointer text-white p-2 rounded-full hover:bg-blue-500 z-20"
  
    >
        {/* left arrow */}
        <svg className='' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"/></svg>
    </div>
    <div className='  w-full h-auto object-cover'>
        {/* image */}
       
        {image.map((item,index)=>
current===index&&( <img  
className='w-full h-full object-cover  '
 key={index} src={item}/>
        ))}
     <div className='relative bottom-20  left-10 md:bottom-32 sm:bottom-24 lg:left-20 lg:w-40'>      
     <button className='flex gap-2 lg:items-center  lg:justify-center  cursor-pointer mt-12 lg:mt-0 lg:p-2 rounded-lg sm:w-48 lg:w-64 bg-[#12396d]'>      
     <a href="#" target="_blank">
     <FaSquareWhatsapp
     className='md:w-10 md:h-10 lg:w-10 lg:h-10 w-8 h-8 sm:w-10 sm:h-10 text-white '
      />
        </a><span className='text-white text-sm font-poppins hidden sm:block lg:block'>Connect on whatsapp</span>
</button>
</div>

      
       
    </div>
    <div onClick={nextSlide}
     className="absolute right-4 top-[50%] h-16 w-16  -translate-y-1/2  bg-blue-200 hidden  lg:flex items-center justify-center  cursor-pointer text-white p-2 rounded-full hover:bg-blue-500 z-20"
     >
        {/* right arrow */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"/></svg>    </div>
    
    </div>
  )
}

export default Crousel



export const CrouselCard=({images})=>{
  return (
    <div className="carousel gap-5 carousel-end ">
      {images.map((src, index) => (
        <div className="carousel-item" key={index}>
          <img className='w-[856px]' src={src} alt={`carousel-${index}`} />
        </div>
      ))}
    </div> 
  )
}