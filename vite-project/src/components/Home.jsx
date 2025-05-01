import React from 'react'
import  Crousel   from './Crousel';
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
import { BlogCard } from './BlogCard';
import Founder from './Founder';
import ColorChangeOnScroll from './ColorChangeOnScroll';
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
    

    {/* <div className='w-full xl:mt-15 lg:-mt-0 -mt-15 h-24  flex items-center bg-[#12396d]'>      
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
</div> */}


<div className='bg-gray-50'>
<div>
    <ColorChangeOnScroll/>
</div>

    <div className='w-full xl:mt-10 mt-5  '>
    {/* <NewCard/> */}
    <Expandingcard/>
    </div>
</div>


    
<div>
    <Numbers/>
</div>

<div>
    <ConstructionAwardsSection></ConstructionAwardsSection>
</div>




<div>
<Founder/>
</div>

     </div>


  )
}

export default Home