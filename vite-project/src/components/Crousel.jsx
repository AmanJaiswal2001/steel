import React, { useState } from 'react'
import { FaSquareWhatsapp } from "react-icons/fa6";

const image=[
    // "https://images.ctfassets.net/o0otttl8ele8/46U7cIK5AomnCu6Jrt8j2K/4ea2e87838b8eed2a665c8eac35df1f1/Website_banner-04_desktop__1_.jpg?w=1536&h=415&fm=webp",
    // "https://images.ctfassets.net/o0otttl8ele8/46U7cIK5AomnCu6Jrt8j2K/4ea2e87838b8eed2a665c8eac35df1f1/Website_banner-04_desktop__1_.jpg?w=1536&h=415&fm=webp",

    // "https://images.ctfassets.net/o0otttl8ele8/46U7cIK5AomnCu6Jrt8j2K/4ea2e87838b8eed2a665c8eac35df1f1/Website_banner-04_desktop__1_.jpg?w=1536&h=415&fm=webp",

     "/Website_banner-04_desktop__1_.webp",
  "/Website_banner-07.webp"

  ]






const Crousel = () => {
 const [current,setCurrent]=useState(0);

 const nextSlide=()=>{
    setCurrent(current===image.length-1?0:current+1);
 }

 const previousSlide=()=>{
    setCurrent(current===0?image.length-1:current-1)
 }
 
 
    return (
    <div className='relative   w-full mx-auto '>
    <div onClick={previousSlide}
      className="absolute left-2 top-1/2    bg-blue-200 flex items-center justify-center  cursor-pointer text-white p-2 rounded-lg hover:bg-blue-500"
  
    >
        {/* left arrow */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"/></svg>
    </div>
    <div className='  w-full h-full object-cover'>
        {/* image */}
       
        {image.map((item,index)=>
current===index&&( <img  
className='w-full h-full object-cover '
 key={index} src={item}/>
        ))}
     <div className='relative bottom-20  left-20 w-40'>      
     <a href="#" target="_blank">
     <FaSquareWhatsapp
     className='w-10 h-10 text-blue-700 '
      />
        </a>
</div>

      
       
    </div>
    <div onClick={nextSlide}
     className="absolute right-2 top-1/2  bg-blue-200  text-white p-2 cursor-pointer rounded-lg hover:bg-blue-500"
     >
        {/* right arrow */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"/></svg>    </div>
    
    </div>
  )
}

export default Crousel