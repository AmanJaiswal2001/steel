import React from 'react'
import Crousel, { CrouselCard } from './Crousel';
// import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react'

//  import './index.css';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import NewCard, {  VariableWidth } from './NewCard';
import Marquee from "react-fast-marquee";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Home = () => {
    const images = [
        '/Mask group(1).png',
        '/Mask group(1).png',
        '/Mask group(1).png',
        '/Mask group(1).png',
        '/Mask group(1).png',
      ];
 
    return (
        // <div>
    
        
    <div className='w-full h-full '>
    <div className='w-full xl:h-screen  '>
    <Crousel/>
    </div>
    

    <div className='w-full xl:mt-15 lg:-mt-0 -mt-15 h-24  flex items-center bg-[#003375]'>      
    <div className="w-full px-10 ">
<Marquee>
<div className='flex gap-20 text-3xl   w-full text-white font-poppins font-semibold justify-between items-center align-middle '>
<p className='w-72 text-center '>Hot Rolled Coil</p>
<p className='w-72 text-center'>Hot Rolled Sheet</p>
<p className='w-72 text-center'>Cold Rolled Coil</p>
<p className='w-72 text-center'>Hot Rolled Sheet</p>   
</div>
 

</Marquee>
  </div>
</div>

    <div className='w-full xl:mt-10 mt-5 '>
    <NewCard/>
    </div>

    

{/* <VariableWidth/> */}

        {/* <div className='w-full flex px-20 mb-20'>
            {/*  */}
            
        {/* </div> */} 
        {/* {/* <div className=' flex px-20 pt-10 gap-5 mb-20 '>
            {/*  */}
            {/* {/* <div className='w-1/2'>
                {/* img */}
                {/* <img className='w-full h-[282px]' src="/tenweb.png"/> */}
            {/* </div>  */} 
            {/* <div className='w-2/3'> */} 
                {/*contents */}
                {/* <p className='font-normal font-poppins text-2xl text-[#000000] leading-10'>Our Dedication</p>
                <p className='font-poppins font-semibold text-[40px] h-16 text-[#000000] leading-11'>Sustainable Steel Production</p>
                <p className='font-poppins font-normal text-[20px] text-[#000000] h-36 leading-6'>SteelEco, our manufacturing process is designed with the environment in mind. We utilize advanced technologies to minimize waste, reduce energy consumption, and ensure our steel products meet the highest environmental standards. Our commitment extends from sourcing raw materials to the final product, ensuring a sustainable approach every step of the way.
</p> */}
{/* <div className='w-72 h-16 bg-[#1F2AA9] rounded-[10px] flex justify-center items-center cursor-pointer mt-2'>
    <button className='w-56 h-9 font-poppins font-normal text-[#FFFFFF] cursor-pointer'>
    Learn More
    </button>
</div> */}
            {/* </div>  */}

        {/* </div>  */}
       
       
        {/* <div className=' flex px-20 gap-5 mb-20 '>
            {/*  */}
           

        {/* </div> 
        <div className='mb-20'>
        <img src="/Screenshot 2025-04-19 120957 1.png"/>
        </div> */}

     </div>


  )
}

export default Home