import React from 'react'
import { CrouselCard } from './Crousel';

const Home = () => {
    const images = [
        '/Mask group(1).png',
        '/Mask group(1).png',
        '/Mask group(1).png',
        '/Mask group(1).png',
        '/Mask group(1).png',
      ];
 
 
    return (
        <div>
    <div className='w-full h-full '>
     
{/* <TmtCardCarousel/> */}
{/* 
       <div className=' flex px-20 gap-5 mb-20 '>
            {/*  */}
            <div className="w-1/2 relative">
    {/* Red Background with Text and Image */}
    <div className="w-full h-[570px] bg-[#F30707] relative overflow-hidden rounded-2xl">
      {/* Title */}
      <p className="font-poppins font-semibold text-[48px] text-white mx-20 pt-6 z-10 relative">
        PRODUCTS
      </p>

      {/* Image inside red background */}
      <img
        src="/Maskg.png"
        alt="Product Highlight"
        className="absolute bottom-0 right-0 w-[120%] h-auto object-cover opacity-90"
      />

      {/* Optional overlay text on top of image */}
      <p className="absolute top-32 left-5 text-white font-poppins font-bold text-[36px] w-[80%] z-10">
        A Wide Spectrum of Cold and Hot Finished Steel Products
      </p>
    </div>
  </div>
            <div className='w-2/3'>
                {/*crosouls */}
                <p className='h-20 font-semibold text-[40px] text-black'>Our Product Range Includes</p>
    
                <div className="p-5">
      <CrouselCard images={images} />
    </div>
       </div>

        </div> 
     
        <div className='w-full flex px-20 mb-20'>
            {/*  */}
            <div className='w-1/2'>
               {/*contents */}
               <p className='h-36 leading-[100%]  font-poppins text-[44px] w-96 text-[#000000] font-bold'>Discover Our Commitment to Sustainability</p>
               <p className='font-poppins font-normal text-[20px] text-[#000000] h-56 '>Founded in 2010, SteelEco has evolved into a leader in sustainable steel production. Our mission is to innovate while minimizing environmental impact, ensuring integrity and stewardship in every aspect of our operations.</p>
            </div>
            <div className='w-2/3'>
               {/* img */}
               <img className='w-full h-[400px]' src='/ten.png'/>
            </div>

        </div>
        <div className=' flex px-20 gap-5 mb-20 '>
            {/*  */}
            <div className='w-1/2'>
                {/* img */}
                <img className='w-full h-[282px]' src="/tenweb.png"/>
            </div>
            <div className='w-2/3'>
                {/*contents */}
                <p className='font-normal font-poppins text-2xl text-[#000000] leading-10'>Our Dedication</p>
                <p className='font-poppins font-semibold text-[40px] h-16 text-[#000000] leading-11'>Sustainable Steel Production</p>
                <p className='font-poppins font-normal text-[20px] text-[#000000] h-36 leading-6'>SteelEco, our manufacturing process is designed with the environment in mind. We utilize advanced technologies to minimize waste, reduce energy consumption, and ensure our steel products meet the highest environmental standards. Our commitment extends from sourcing raw materials to the final product, ensuring a sustainable approach every step of the way.
</p>
<div className='w-72 h-16 bg-[#1F2AA9] rounded-[10px] flex justify-center items-center cursor-pointer mt-2'>
    <button className='w-56 h-9 font-poppins font-normal text-[#FFFFFF] cursor-pointer'>
    Learn More
    </button>
</div>
            </div>

        </div>
      
        <div  className=' flex px-20 gap-5 mb-20 '>
            {/*  */}
            <div className='w-1/2 '>
                {/* img */}
                <img className='w-[607px] h-[586px]' src="/Maskinvestor.png"/>
      
            </div>
            <div  className='w-2/3'>
                {/*contents */}
                <p className='font-bold text-[44px] h-28 leading-14'>Committed to Environmental Stewardship and Compliance</p>
          <p className='font-normal text-[20px] text-[#000000] h-28 w-[640px]'>At SteelEco, we prioritize environmental stewardship and adhere strictly to the Ministry of Environment standards. Our commitment ensures sustainable practices, minimizing environmental impact while delivering high-quality steel products. We are dedicated to a greener future.
</p>
<div className='flex flex-col mt-5'>
<div className='flex gap-2 items-center '>
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
<p className='font-poppins font-normal text-2xl'>ISO 14001 Certified</p>
</div>
<div className='flex gap-2 items-center '>
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
<p className='font-poppins font-normal text-2xl'>Ministry of Environment Compliant</p>
</div>
<div className='flex gap-2 items-center '>
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
<p className='font-poppins font-normal text-2xl'>Sustainable Manufacturing Processes</p>
</div>
</div>

            </div>

        </div>
        <div className=' flex px-20 gap-5 mb-20 '>
            {/*  */}
            <div className='w-1/2'>
               <div className='w-[647px] px-10 h-[600px] bg-[#121212]'>
<p className='w-[626px] h-28 font-semibold text-5xl text-white'>We Are Building Better Community</p>
              <p className='font-normal text-[28px] text-white'>We are operating within the framework of the Triple Button Line (TBL) that people, planet and profit</p>
             
             <div className='flex flex-col gap-10 mt-10'>
             <div className='flex gap-10'>
             <div>
                <p className='font-bold font-poppins text-6xl text-white'>47+</p>
             <p className='text-2xl font-poppins font-normal text-white'>CRS projects</p>
              </div>
              <div>
                <p className='font-bold font-poppins text-6xl text-white'>30+</p>
             <p className='text-2xl font-poppins font-normal text-white'>CRS projects</p>
              </div>
             </div>
              <div className='flex gap-10'>
              <div >
                <p className='font-bold font-poppins text-6xl text-white'>10+</p>
             <p className='text-2xl font-poppins font-normal text-white'>CRS projects</p>
              </div>
              <div>
                <p className='font-bold font-poppins text-6xl text-white'>7k+</p>
             <p className='text-2xl font-poppins font-normal text-white'>CRS projects</p>
              </div>

              </div>
             </div>
             
             
               </div>
            </div>
            <div className='w-2/3'>
               {/* img */}
               <img className='w-[647px] px-10 h-[600px]' src="/steel.png"/>
            </div>

        </div>
        <div className='mb-20'>
        <img src="/Screenshot 2025-04-19 120957 1.png"/>
        </div>

     </div>


  )
}

export default Home