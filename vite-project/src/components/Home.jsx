import React, { useRef } from 'react';
import Crousel from './Crousel';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import NewCard, { VariableWidth } from './NewCard';
import Marquee from "react-fast-marquee";
import Numbers from './Numbers';
import { Testimonial } from './Testimonial';
import ConstructionAwardsSection from './ConstructionAwardsSection';
import { Expandingcard } from './Expandingcard';
import { BlogCard } from './BlogCard';
import Founder from './Founder';
import ColorChangeOnScroll from './ColorChangeOnScroll';
import Sliderbaner from './Sliderbaner';

const Home = () => {
  const awardsRef = useRef(null);
  const bannerRef = useRef(null);

  const handleSliderComplete = () => {
    awardsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleBackToTop = () => {
    bannerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='w-full h-full'>
      <div className='w-full xl:h-screen h-auto'>
        <Crousel />
      </div>

      <div className='bg-gray-50'>
        <ColorChangeOnScroll />
        <div  className='w-full xl:mt-10'>
          <Expandingcard />
        </div>
      </div>

      <div>
        <Sliderbaner onComplete={handleSliderComplete} onBack={handleBackToTop} />
      </div>

      <div ref={awardsRef}>
        <ConstructionAwardsSection />
      </div>

      <div>
        <Founder />
      </div>
    </div>
  );
};

export default Home;
