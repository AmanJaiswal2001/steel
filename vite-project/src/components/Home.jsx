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
import Numbers from './Numbers';
import { Testimonial } from './Testimonial';
import ConstructionAwardsSection from './ConstructionAwardsSection';
import { Expandingcard } from './Expandingcard';
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
    <div className='w-full xl:h-screen h-auto  '>
    <Crousel/>
    </div>
    

    <div className='w-full xl:mt-15 lg:-mt-0 -mt-15 h-24  flex items-center bg-[#12396d]'>      
    <div className="w-full  ">
<Marquee speed={100}>
<div className="flex gap-10 text-4xl font-bold h-24 uppercase font-rowdies w-full text-white items-center">
        {["Hot Rolled Coil", "Cold Rolled Coil", "Hot Rolled Sheet", , "Hot Rolled Sheet"].map((item, index) => (
          <p key={index} className="flex-1 w-[400px] text-center">
            {item}
          </p>
        ))}
      </div>
 

</Marquee>
  </div>
</div>

    <div className='w-full xl:mt-10 mt-5 '>
    {/* <NewCard/> */}
    <Expandingcard/>
    </div>

    
<div>
    <Numbers/>
</div>

<div>
    <ConstructionAwardsSection></ConstructionAwardsSection>
</div>


<div>
   <Testimonial/>
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